// Parity cases for the web port of the app's mind-dump heuristics. Each
// expectation is worked out by hand from the Dart source's weights.
import { test } from 'node:test';
import assert from 'node:assert/strict';

// Node can run the TS module directly with type stripping (Node ≥ 22.6).
const { rankSuggestions } = await import('../src/scripts/sort-thought.ts');

const top = (text, lang = 'en') => rankSuggestions(text, lang)[0];
const score = (text, target, lang = 'en') => rankSuggestions(text, lang).find((s) => s.target === target).score;

test('empty text: thought baseline wins, ties broken in enum order', () => {
  const r = rankSuggestions('   ', 'en');
  assert.deepEqual(r.map((s) => s.target), ['thought', 'task', 'shopping', 'weeklyGoal']);
  assert.equal(r[0].score, 0.3);
});

test('shopping verb + noun', () => {
  assert.equal(top('buy milk').target, 'shopping');
  assert.equal(score('buy milk', 'shopping'), 0.8);
});

test('leading task verb + time word caps at 0.8', () => {
  assert.equal(score('call mom tomorrow', 'task'), 0.8);
  assert.equal(top('call mom tomorrow').target, 'task');
});

test('clock pattern counts as time', () => {
  assert.equal(score('meeting at 17:30', 'task'), 0.3);
});

test('multi-word entries match as substrings', () => {
  assert.equal(score('read more this month', 'weeklyGoal'), 0.5);
  // 'pick up' is a shopping verb (0.5); 'pick' is also a leading task verb
  // (0.35 + 0.15). A 0.5–0.5 tie breaks in the app's enum order: task first.
  assert.equal(score('pick up the parcel', 'shopping'), 0.5);
  assert.equal(top('pick up the parcel').target, 'task');
});

test('habit words make a weekly goal', () => {
  assert.equal(top('run three times a week').target, 'weeklyGoal');
});

test('long rambling text boosts thought', () => {
  const t = 'i keep thinking about whether i should have said something different in that meeting yesterday honestly';
  assert.equal(score(t, 'thought'), 0.5);
});

test('arabic lexicon merges with english', () => {
  assert.equal(top('اشتري حليب', 'ar').target, 'shopping');
  assert.equal(top('buy milk', 'ar').target, 'shopping');
});

test('french double-quoted entry survived the sync', () => {
  assert.equal(score("appeler le médecin aujourd'hui", 'task', 'fr'), 0.8);
});
