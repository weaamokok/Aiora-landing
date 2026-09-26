// "Get Aiora" goes straight to the right store on a phone. On a computer it
// keeps its in-page href (the closing section with the QR code), because a
// store page on a laptop is a dead end.

import { pageview, track } from './analytics';

const APP_STORE = 'https://apps.apple.com/app/aiora/id6776340428';
const GOOGLE_PLAY = 'https://play.google.com/store/apps/details?id=com.glowr';

export function detectPlatform(ua = navigator.userAgent): 'ios' | 'android' | 'other' {
  if (/android/i.test(ua)) return 'android';
  // iPadOS reports itself as Macintosh; touch points give it away.
  if (/iphone|ipad|ipod/i.test(ua) || (/macintosh/i.test(ua) && navigator.maxTouchPoints > 1)) return 'ios';
  return 'other';
}

const platform = detectPlatform();
document.documentElement.dataset.platform = platform;

if (platform !== 'other') {
  const url = platform === 'ios' ? APP_STORE : GOOGLE_PLAY;
  for (const a of document.querySelectorAll<HTMLAnchorElement>('a[data-store-link]')) {
    a.href = url;
    a.rel = 'noopener';
  }
}

pageview();

// Every route to a store, tagged by where it was tapped, so we can see which
// part of the page actually sends people to install.
function placement(el: Element): string {
  if (el.closest('.dock, .topbar')) return 'nav';
  if (el.closest('.hero')) return 'hero';
  if (el.closest('.night')) return 'closing';
  if (el.closest('.auth')) return 'sign-in';
  if (el.closest('footer')) return 'footer';
  return 'other';
}

addEventListener('click', (e) => {
  const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href]');
  if (!link) return;
  const store = /apps\.apple\.com/.test(link.href) ? 'app_store' : /play\.google\.com/.test(link.href) ? 'google_play' : null;
  if (store) {
    track('store_click', { store, placement: placement(link), device: platform });
    return;
  }
  const lang = link.closest('#lang-menu, .langs-list, .footer-langs');
  if (lang && link.hreflang) track('language_switched', { to: link.hreflang });
});
