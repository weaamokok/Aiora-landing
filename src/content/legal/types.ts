export type Block = string | { list: string[] } | { table: { head: string[]; rows: string[][] } };

export interface LegalDoc {
  title: string;
  description: string;
  updated: string;
  /** Plain-language summary shown first, before the full text. */
  summaryTitle: string;
  summary: string[];
  contentsLabel: string;
  sections: { id: string; title: string; body: Block[] }[];
}
