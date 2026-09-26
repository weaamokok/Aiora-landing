import type { LegalDoc } from './types';
import type { Locale } from '../../i18n/locales';

const docs = import.meta.glob<{ default: LegalDoc }>('./*.*.ts', { eager: true });

/** A translated policy if one exists, otherwise the English original (flagged). */
export function legal(kind: 'privacy' | 'terms', locale: Locale): { doc: LegalDoc; translated: boolean } {
  const own = docs[`./${kind}.${locale}.ts`]?.default;
  if (own) return { doc: own, translated: true };
  return { doc: docs[`./${kind}.en.ts`]!.default, translated: locale === 'en' };
}
