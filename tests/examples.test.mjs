// Every locale's hero examples must actually demonstrate the sorter: the first
// is a task, the second shopping, the third a weekly goal — each with a real
// signal (score above the thought baseline), so the suggestion ring shows.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync } from 'node:fs';

const { rankSuggestions } = await import('../src/scripts/sort-thought.ts');
const { en } = await import('../src/i18n/site/en.ts');
const expected = ['task', 'shopping', 'weeklyGoal'];

const locales = readdirSync(new URL('../src/i18n/site/', import.meta.url))
  .filter((f) => f.endsWith('.ts') && f !== 'en.ts')
  .map((f) => f.replace('.ts', ''));

for (const locale of ['en', ...locales]) {
  test(`hero examples sort correctly: ${locale}`, async () => {
    const examples = locale === 'en' ? en.hero.examples : (await import(`../src/i18n/site/${locale}.ts`)).default.hero?.examples;
    if (!examples) return;
    examples.forEach((text, i) => {
      const [best] = rankSuggestions(text, locale);
      assert.equal(best.target, expected[i], `"${text}" → ${best.target}`);
      assert.ok(best.score > 0.3, `"${text}" has no real signal (${best.score})`);
    });
  });
}
