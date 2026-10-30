import { execFileSync } from 'node:child_process';
import type { APIRoute } from 'astro';
import { legalLocales } from '../content/legal';
import { locales, localeMeta, localePath, type Locale } from '../i18n/locales';

// Indexable routes only — sign-in, welcome, account and /get stay out.
const routes = ['/', '/plus', '/faq', '/support', '/delete-account', '/privacy', '/terms'];

// Untranslated legal pages are noindex, so they stay out too.
const localesOf = (route: string): readonly Locale[] =>
  route === '/privacy' ? legalLocales('privacy') : route === '/terms' ? legalLocales('terms') : locales;

const views: Record<string, string[]> = {
  '/': ['src/views/Home.astro', 'src/components/home'],
  '/plus': ['src/views/Plus.astro'],
  '/faq': ['src/views/FaqPage.astro'],
  '/support': ['src/views/Support.astro'],
  '/delete-account': ['src/views/DeleteAccount.astro'],
};

const sourcesOf = (route: string, locale: Locale) =>
  route === '/privacy' || route === '/terms'
    ? [`src/content/legal${route}.${locale}.ts`]
    : [...views[route]!, `src/i18n/site/${locale}.ts`];

/** When the page's own source last changed. Omitted rather than guessed. */
function lastmod(route: string, locale: Locale): string {
  try {
    const date = execFileSync('git', ['log', '-1', '--format=%cI', '--', ...sourcesOf(route, locale)], { encoding: 'utf8' }).trim();
    return date ? `    <lastmod>${date}</lastmod>\n` : '';
  } catch {
    return '';
  }
}

export const GET: APIRoute = ({ site }) => {
  const url = (path: string) => new URL(path, site).href;
  const entries = routes.flatMap((route) => {
    const available = localesOf(route);
    return available.map((locale) => {
      const alternates = available
        .map((l) => `    <xhtml:link rel="alternate" hreflang="${localeMeta[l].tag}" href="${url(localePath(l, route))}"/>`)
        .concat(`    <xhtml:link rel="alternate" hreflang="x-default" href="${url(localePath('en', route))}"/>`)
        .join('\n');
      return `  <url>\n    <loc>${url(localePath(locale, route))}</loc>\n${lastmod(route, locale)}${alternates}\n  </url>`;
    });
  });
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${entries.join('\n')}\n</urlset>\n`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};
