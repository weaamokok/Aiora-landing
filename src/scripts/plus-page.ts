import { track } from './analytics';
import { formatPrice, getEntitlement, getSession, getWebPrices, isPlus, signOut, startCheckout, type WebPrice } from './plus-api';

const form = document.querySelector<HTMLFormElement>('[data-buy]');
if (form) void init(form);

async function init(form: HTMLFormElement) {
  const locale = form.dataset.locale ?? 'en';
  const s = JSON.parse(form.dataset.strings ?? '{}') as Record<string, string>;
  const status = form.querySelector<HTMLElement>('[data-status]')!;
  const plans = form.querySelector<HTMLElement>('[data-plans]')!;
  const signedOut = form.querySelector<HTMLElement>('[data-signed-out]')!;
  const signedIn = form.querySelector<HTMLElement>('[data-signed-in]')!;
  const cont = form.querySelector<HTMLButtonElement>('[data-continue]')!;
  const fill = (tpl: string, vars: Record<string, string>) => tpl.replace(/\{\{?(\w+)\}?\}/g, (_, k) => vars[k] ?? '');

  // Prices first: they're public, and nothing else makes sense without them.
  const prices = await getWebPrices();
  if (!prices.ok) {
    status.textContent = s.unavailable;
    // Worth knowing how often the page can't sell at all.
    track('plus_prices_unavailable', { reason: prices.reason });
    return;
  }
  const byKey = new Map<WebPrice['lookup_key'], WebPrice>(prices.value.map((p) => [p.lookup_key, p]));
  for (const [key, price] of byKey) {
    const el = form.querySelector<HTMLElement>(`[data-price="${key}"]`);
    if (el) el.textContent = `${formatPrice(price.amount, price.currency, locale)} ${price.interval === 'year' ? s.perYear : s.perMonth}`;
  }
  const annual = byKey.get('plus_annual_web');
  const annualSub = form.querySelector<HTMLElement>('[data-sub="plus_annual_web"]');
  if (annual && annualSub) {
    // Derived display math only; the charged price is the yearly one above.
    const perMonth = formatPrice(Math.floor(annual.amount / 12), annual.currency, locale);
    annualSub.textContent = `${fill(s.monthlyEquivalent, { price: perMonth })} · ${annualSub.textContent}`;
  }
  plans.hidden = false;
  status.textContent = '';

  const syncCta = () => {
    const isAnnual = (form.querySelector<HTMLInputElement>('input[name="plan"]:checked')?.value ?? '') === 'plus_annual_web';
    const hasTrial = isAnnual && (annual?.trial_days ?? 0) > 0;
    form.querySelector<HTMLElement>('[data-cta-annual]')!.hidden = !hasTrial;
    form.querySelector<HTMLElement>('[data-cta-monthly]')!.hidden = hasTrial;
    const fine = form.querySelector<HTMLElement>('[data-fine-annual]');
    if (fine) fine.hidden = !hasTrial;
  };
  plans.addEventListener('change', syncCta);
  syncCta();

  // Then who's here.
  const session = getSession();
  if (!session) {
    signedOut.hidden = false;
    track('plus_viewed', { state: 'signed_out' });
    return;
  }
  const ent = await getEntitlement();
  if (!ent.ok) {
    signedOut.hidden = false;
    return;
  }
  if (isPlus(ent.value)) {
    status.textContent = s.already;
    plans.hidden = true;
    track('plus_viewed', { state: 'already_plus' });
    return;
  }
  track('plus_viewed', { state: 'signed_in' });
  form.querySelector<HTMLElement>('[data-who]')!.textContent = fill(s.signedInAs, { email: session.email ?? session.name ?? '' });
  signedIn.hidden = false;

  form.querySelector('[data-sign-out]')?.addEventListener('click', () => {
    signOut();
    location.reload();
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const key = (form.querySelector<HTMLInputElement>('input[name="plan"]:checked')?.value ?? 'plus_annual_web') as WebPrice['lookup_key'];
    cont.disabled = true;
    status.textContent = s.redirecting;
    track('plus_checkout_started', { plan: key });
    const res = await startCheckout(key);
    if (res.ok) {
      location.assign(res.value);
      return;
    }
    cont.disabled = false;
    track('plus_checkout_failed', { plan: key, reason: res.reason });
    status.textContent = res.reason === 'conflict' ? s.already : res.reason === 'auth' ? '' : s.checkoutFailed;
    if (res.reason === 'auth') {
      signOut();
      location.assign(form.dataset.signIn ?? '/plus/sign-in/');
    }
  });
}
