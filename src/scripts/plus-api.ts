// The website's only backend client: sign in, read the entitlement, start a
// Stripe checkout, open the billing portal. Everything here is web-only — the
// app never calls these routes (silent web channel, docs/monetization.md).
//
// Contract: glow/docs/monetization_api_contract.md. Endpoints marked PLANNED are
// tracked in Linear AIO-60; until they ship, callers get `{ ok: false, reason:
// 'unavailable' }` and the page explains the in-app alternative instead of
// breaking.

const API = import.meta.env.PUBLIC_API_BASE ?? 'https://api.aioraspace.com';
const KEY = 'aiora.web.session';

export interface Session {
  token: string;
  refreshToken?: string;
  email?: string | null;
  name?: string | null;
}

export interface Entitlement {
  tier: 'free' | 'plus';
  source: 'none' | 'app_store' | 'play_store' | 'web' | 'promo';
  status: 'none' | 'active' | 'trial' | 'grace' | 'expired';
  expires_at: string | null;
  will_renew: boolean;
}

export interface WebPrice {
  lookup_key: 'plus_annual_web' | 'plus_monthly_web';
  /** Minor units, as Stripe reports them. */
  amount: number;
  currency: string;
  interval: 'year' | 'month';
  trial_days?: number | null;
}

export type Result<T> = { ok: true; value: T } | { ok: false; reason: 'auth' | 'unavailable' | 'network' | 'conflict' | 'invalid' };

// ─── Session ────────────────────────────────────────────────────────────────
// sessionStorage, not localStorage: a checkout visit shouldn't leave a
// long-lived token behind on a shared computer.
export function getSession(): Session | null {
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Session) : null;
  } catch {
    return null;
  }
}

function setSession(s: Session | null) {
  try {
    if (s) sessionStorage.setItem(KEY, JSON.stringify(s));
    else sessionStorage.removeItem(KEY);
  } catch {
    /* private mode: the session lasts as long as the page */
  }
}

export function signOut() {
  setSession(null);
}

async function call(path: string, init: RequestInit = {}, auth = false): Promise<Response | null> {
  const headers = new Headers(init.headers);
  headers.set('Accept', 'application/json');
  headers.set('Accept-Language', document.documentElement.lang || 'en');
  if (init.body) headers.set('Content-Type', 'application/json');
  if (auth) {
    const s = getSession();
    if (s) headers.set('Authorization', `Bearer ${s.token}`);
  }
  try {
    return await fetch(`${API}${path}`, { ...init, headers, credentials: 'omit' });
  } catch {
    return null;
  }
}

function fail<T>(res: Response | null): Result<T> {
  if (!res) return { ok: false, reason: 'network' };
  if (res.status === 401 || res.status === 403) return { ok: false, reason: 'auth' };
  if (res.status === 409) return { ok: false, reason: 'conflict' };
  if (res.status === 400 || res.status === 422) return { ok: false, reason: 'invalid' };
  return { ok: false, reason: 'unavailable' };
}

// ─── Auth (POST /auth/login, /auth/google, /auth/apple → { token, refreshToken, user }) ─
interface AuthResponse {
  token: string | null;
  refreshToken?: string | null;
  user?: { email?: string | null; name?: string | null };
}

async function finishAuth(res: Response | null): Promise<Result<Session>> {
  if (!res || !res.ok) return fail(res);
  const body = (await res.json()) as AuthResponse;
  if (!body.token) return { ok: false, reason: 'auth' };
  const session: Session = {
    token: body.token,
    refreshToken: body.refreshToken ?? undefined,
    email: body.user?.email ?? null,
    name: body.user?.name ?? null,
  };
  setSession(session);
  return { ok: true, value: session };
}

export async function signInWithEmail(email: string, password: string) {
  return finishAuth(await call('/auth/login', { method: 'POST', body: JSON.stringify({ email, password, platform: 'web' }) }));
}

export async function signInWithGoogle(idToken: string) {
  return finishAuth(await call('/auth/google', { method: 'POST', body: JSON.stringify({ idToken, platform: 'web' }) }));
}

export async function signInWithApple(identityToken: string, authorizationCode?: string) {
  return finishAuth(
    await call('/auth/apple', { method: 'POST', body: JSON.stringify({ identityToken, authorizationCode, platform: 'web' }) }),
  );
}

// ─── Billing ────────────────────────────────────────────────────────────────
export async function getEntitlement(): Promise<Result<Entitlement>> {
  const res = await call('/v1/me/entitlement', {}, true);
  if (!res || !res.ok) {
    if (res?.status === 401) signOut();
    return fail(res);
  }
  const body = (await res.json()) as { data: Entitlement };
  return { ok: true, value: body.data };
}

/** PLANNED (AIO-60): public, no auth. Prices come from Stripe — never typed into the site. */
export async function getWebPrices(): Promise<Result<WebPrice[]>> {
  const res = await call('/v1/billing/web-prices');
  if (!res || !res.ok) return fail(res);
  const body = (await res.json()) as { data: WebPrice[] };
  return Array.isArray(body.data) && body.data.length ? { ok: true, value: body.data } : { ok: false, reason: 'unavailable' };
}

export async function startCheckout(priceLookupKey: WebPrice['lookup_key']): Promise<Result<string>> {
  const res = await call('/v1/me/checkout-session', { method: 'POST', body: JSON.stringify({ price_lookup_key: priceLookupKey }) }, true);
  if (!res || !res.ok) return fail(res);
  const body = (await res.json()) as { data: { checkout_url: string } };
  return body.data?.checkout_url ? { ok: true, value: body.data.checkout_url } : { ok: false, reason: 'unavailable' };
}

/** PLANNED (AIO-60): Stripe Customer Portal for web subscribers. */
export async function openBillingPortal(): Promise<Result<string>> {
  const res = await call('/v1/me/billing-portal-session', { method: 'POST', body: '{}' }, true);
  if (!res || !res.ok) return fail(res);
  const body = (await res.json()) as { data: { portal_url: string } };
  return body.data?.portal_url ? { ok: true, value: body.data.portal_url } : { ok: false, reason: 'unavailable' };
}

// ─── Formatting ─────────────────────────────────────────────────────────────
export function formatPrice(amountMinor: number, currency: string, locale: string): string {
  const cur = currency.toUpperCase();
  const digits = new Intl.NumberFormat('en', { style: 'currency', currency: cur }).resolvedOptions().maximumFractionDigits ?? 2;
  return new Intl.NumberFormat(locale, { style: 'currency', currency: cur }).format(amountMinor / 10 ** digits);
}

export function isPlus(e: Entitlement) {
  return e.tier === 'plus' && (e.status === 'active' || e.status === 'trial' || e.status === 'grace');
}
