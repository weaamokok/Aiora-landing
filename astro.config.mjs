// @ts-check
import { defineConfig } from 'astro/config';

export const locales = ['en', 'ar', 'fr', 'es', 'ru', 'tr', 'sw'];

export default defineConfig({
  site: 'https://aioraspace.com',
  trailingSlash: 'ignore',
  // Astro 7 defaults to 'jsx', which strips whitespace between inline elements
  // ("<strong>Plus</strong> takes" → "Plustakes"). This site is prose-heavy in
  // seven languages; keep HTML-aware whitespace.
  compressHTML: true,
  build: { format: 'directory' },
  i18n: {
    defaultLocale: 'en',
    locales,
    routing: { prefixDefaultLocale: false },
  },
  prefetch: { prefetchAll: false, defaultStrategy: 'hover' },
});
