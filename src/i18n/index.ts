import { en, type SiteCopy } from './site/en';
import type { Locale } from './locales';
import appEn from './app/en.json';
import appAr from './app/ar.json';
import appFr from './app/fr.json';
import appEs from './app/es.json';
import appRu from './app/ru.json';
import appTr from './app/tr.json';
import appSw from './app/sw.json';

export type AppCopy = typeof appEn;

type DeepPartial<T> = T extends readonly unknown[] ? T : T extends object ? { [K in keyof T]?: DeepPartial<T[K]> } : T;

const siteLoaders = import.meta.glob<{ default: DeepPartial<SiteCopy> }>('./site/*.ts', { eager: true });

const app: Record<Locale, AppCopy> = { en: appEn, ar: appAr, fr: appFr, es: appEs, ru: appRu, tr: appTr, sw: appSw };

function merge<T>(base: T, over: DeepPartial<T> | undefined): T {
  if (over == null) return base;
  if (Array.isArray(base) || typeof base !== 'object' || base === null) return (over as T) ?? base;
  const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const [k, v] of Object.entries(over as Record<string, unknown>)) {
    if (v === undefined) continue;
    out[k] = merge((base as Record<string, unknown>)[k], v as never);
  }
  return out as T;
}

/**
 * Copy for a locale. English leads and other locales fall back to it key by key
 * — the same `base_locale` fallback the app's slang config uses.
 */
export function copy(locale: Locale): { t: SiteCopy; app: AppCopy } {
  const mod = siteLoaders[`./site/${locale}.ts`];
  const override = locale === 'en' ? undefined : (mod?.default as DeepPartial<SiteCopy> | undefined);
  return { t: merge(en, override), app: app[locale] };
}

/** `{name}` interpolation for site copy; `{{name}}` for strings synced from the app. */
export function fmt(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{\{?(\w+)\}?\}/g, (_, k) => String(vars[k] ?? ''));
}
