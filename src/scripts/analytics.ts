// Site analytics: one thin layer, no vendor baked in.
//
// The site promises on every privacy page that we don't sell data and don't
// advertise, so the measurement has to match: **no cookies, no cross-site
// identifiers, no personal data**. Under GDPR/ePrivacy that is what keeps this
// out of consent-banner territory — a banner on the front door would undercut
// the promise the page is making.
//
// What we measure is the funnel the site was designed around: did someone try
// the mind dump, and did they go to a store afterwards.
//
// Configure with env vars at build time (all optional — with none set, nothing
// is sent and nothing is loaded):
//
//   PUBLIC_ANALYTICS_PROVIDER = plausible | umami | none   (default none)
//   PUBLIC_ANALYTICS_DOMAIN   = aioraspace.com             (plausible)
//   PUBLIC_ANALYTICS_SRC      = https://…/script.js        (self-hosted url)
//   PUBLIC_ANALYTICS_SITE_ID  = …                          (umami)
//
// `?analytics=debug` on any URL prints events to the console instead, so the
// wiring can be checked without a provider.

type Props = Record<string, string | number | boolean>;

declare global {
  interface Window {
    plausible?: (event: string, opts?: { props?: Props }) => void;
    umami?: { track: (event: string, props?: Props) => void };
  }
}

const provider = (import.meta.env.PUBLIC_ANALYTICS_PROVIDER ?? 'none') as 'plausible' | 'umami' | 'none';
const debug = typeof location !== 'undefined' && new URLSearchParams(location.search).get('analytics') === 'debug';

/** Honour Do Not Track and Global Privacy Control, and never count ourselves. */
function optedOut(): boolean {
  if (debug) return false;
  const nav = navigator as Navigator & { doNotTrack?: string; globalPrivacyControl?: boolean };
  if (nav.doNotTrack === '1' || nav.globalPrivacyControl === true) return true;
  return /^(localhost|127\.|\[::1\])/.test(location.hostname) || location.hostname.endsWith('.local');
}

const off = optedOut();

// Events fired before the provider script finishes loading are queued, not lost
// — the mind dump is often used within a second of landing.
const queue: [string, Props | undefined][] = [];
let ready = provider === 'none';

export function track(event: string, props?: Props): void {
  if (off) return;
  if (debug) {
    console.info('[analytics]', event, props ?? {});
    return;
  }
  if (!ready) {
    if (queue.length < 20) queue.push([event, props]);
    return;
  }
  send(event, props);
}

function send(event: string, props?: Props) {
  try {
    if (provider === 'plausible') window.plausible?.(event, props ? { props } : undefined);
    else if (provider === 'umami') window.umami?.track(event, props);
  } catch {
    // Measurement must never break the page.
  }
}

function flush() {
  ready = true;
  for (const [event, props] of queue.splice(0)) send(event, props);
}

/** Once per page: fired here rather than by the provider's own auto-pageview,
 *  so a locale is attached and every event shares one shape. */
export function pageview(): void {
  track('pageview', { locale: document.documentElement.lang || 'en' });
}

/** Fires `seen` the first time an element is at least half on screen. */
export function whenSeen(el: Element, seen: () => void): void {
  if (off) return;
  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        io.disconnect();
        seen();
      }
    },
    { threshold: 0.5 },
  );
  io.observe(el);
}

// ─── Provider bootstrap ──────────────────────────────────────────────────────
if (!off && provider !== 'none' && !debug) {
  const src = import.meta.env.PUBLIC_ANALYTICS_SRC;
  if (src) {
    const s = document.createElement('script');
    s.src = src;
    s.defer = true;
    if (provider === 'plausible') {
      s.dataset.domain = import.meta.env.PUBLIC_ANALYTICS_DOMAIN ?? location.hostname;
      // Queue shim, exactly as Plausible documents it.
      window.plausible =
        window.plausible ||
        function (...args: unknown[]) {
          ((window.plausible as unknown as { q?: unknown[] }).q ??= []).push(args);
        };
    } else if (provider === 'umami') {
      s.dataset.websiteId = import.meta.env.PUBLIC_ANALYTICS_SITE_ID ?? '';
      s.dataset.autoTrack = 'false';
    }
    s.addEventListener('load', flush);
    s.addEventListener('error', () => {
      ready = true;
      queue.length = 0; // a blocked script shouldn't grow an unbounded queue
    });
    document.head.appendChild(s);
  } else {
    ready = true;
  }
}
