import type { APIRoute } from 'astro';
import { locales, localeMeta, localePath } from '../i18n/locales';

// Indexable routes only — sign-in, welcome, account and /get stay out.
const routes = ['/', '/plus', '/faq', '/support', '/delete-account', '/privacy', '/terms'];

export const GET: APIRoute = ({ site }) => {
  const url = (path: string) => new URL(path, site).href;
  const entries = routes.flatMap((route) =>
    locales.map((locale) => {
      const alternates = locales
        .map((l) => `    <xhtml:link rel="alternate" hreflang="${localeMeta[l].tag}" href="${url(localePath(l, route))}"/>`)
        .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${url(localePath('en', route))}"/>`)
        .join('\n');
      return `  <url>\n    <loc>${url(localePath(locale, route))}</loc>\n${alternates}\n  </url>`;
    }),
  );
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
