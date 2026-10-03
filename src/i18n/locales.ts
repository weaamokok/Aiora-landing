export const locales = ['en', 'ar', 'fr', 'es', 'ru', 'tr', 'sw'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

interface LocaleMeta {
  /** The language's own name — what the switcher shows. Never a flag. */
  name: string;
  dir: 'ltr' | 'rtl';
  /** BCP 47 for <html lang> and hreflang. */
  tag: string;
  og: string;
  /** Official App Store badge locale; Apple ships no Arabic or Swahili badge in its tool. */
  appStoreBadge: string;
  playBadge: string;
}

export const localeMeta: Record<Locale, LocaleMeta> = {
  en: { name: 'English', dir: 'ltr', tag: 'en', og: 'en_US', appStoreBadge: 'en-us', playBadge: 'en' },
  ar: { name: 'العربية', dir: 'rtl', tag: 'ar', og: 'ar_AR', appStoreBadge: 'en-us', playBadge: 'ar' },
  fr: { name: 'Français', dir: 'ltr', tag: 'fr', og: 'fr_FR', appStoreBadge: 'fr-fr', playBadge: 'fr' },
  es: { name: 'Español', dir: 'ltr', tag: 'es', og: 'es_ES', appStoreBadge: 'es-es', playBadge: 'es' },
  ru: { name: 'Русский', dir: 'ltr', tag: 'ru', og: 'ru_RU', appStoreBadge: 'ru-ru', playBadge: 'ru' },
  tr: { name: 'Türkçe', dir: 'ltr', tag: 'tr', og: 'tr_TR', appStoreBadge: 'tr-tr', playBadge: 'tr' },
  sw: { name: 'Kiswahili', dir: 'ltr', tag: 'sw', og: 'sw_KE', appStoreBadge: 'en-us', playBadge: 'sw' },
};

/** `/faq` → `/fr/faq/`; the default locale has no prefix. Always a trailing slash. */
export function localePath(locale: Locale, path = '/'): string {
  const clean = ('/' + path.replace(/^\/+|\/+$/g, '')).replace(/^\/$/, '');
  const prefix = locale === defaultLocale ? '' : `/${locale}`;
  const joined = `${prefix}${clean}`;
  return joined === '' ? '/' : `${joined}/`;
}

/** Strip a locale prefix from a pathname, for building the other-language links. */
export function unlocalizedPath(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length && (locales as readonly string[]).includes(parts[0]) && parts[0] !== defaultLocale) {
    parts.shift();
  }
  return '/' + parts.join('/');
}

export const nonDefaultLocales = locales.filter((l) => l !== defaultLocale);

export const STORE = {
  appStore: 'https://apps.apple.com/app/aiora/id6776340428',
  googlePlay: 'https://play.google.com/store/apps/details?id=com.glowr',
} as const;

export const SUPPORT_EMAIL = 'hello@aioraspace.com';
export const API_BASE = 'https://api.aioraspace.com';
