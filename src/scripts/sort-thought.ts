// A line-for-line port of `rankMindDumpSuggestions` in the app
// (`lib/feature/mind_dump/mind_dump_heuristics.dart`). Pure, synchronous,
// deterministic, no network: safe to run on every keystroke, and it sorts a
// thought exactly the way the app would.
//
// The word lists come from the app via `npm run sync:app`, which also fails if
// the weights below drift from the Dart source.

import lexicons from '../data/lexicon.json' with { type: 'json' };

export type Target = 'task' | 'shopping' | 'weeklyGoal' | 'thought';

export interface Suggestion {
  target: Target;
  score: number;
}

type LexiconData = Record<'shoppingVerbs' | 'shoppingNouns' | 'taskVerbs' | 'timeWords' | 'habitWords', string[]>;

// Enum order in the app (`MindDumpTarget`) — the stable tie-break.
const TARGET_ORDER: Target[] = ['task', 'shopping', 'weeklyGoal', 'thought'];

const THOUGHT_BASELINE = 0.3;
/** "at 5", "17:30", "5pm" */
const CLOCK = /\b\d{1,2}(:\d{2})?\s*(am|pm)?\b/;
const SPLIT = /[\s,.!?؟،;:()[\]"«»]+/;

const cache = new Map<string, Record<keyof LexiconData, Set<string>>>();

function lexiconFor(language: string) {
  const hit = cache.get(language);
  if (hit) return hit;
  const data = lexicons as Record<string, LexiconData>;
  const en = data.en;
  const loc = data[language];
  const keys = Object.keys(en) as (keyof LexiconData)[];
  // Locale lexicon merged with English — English words are always detected.
  const merged = Object.fromEntries(
    keys.map((k) => [k, new Set([...en[k], ...(loc && language !== 'en' ? loc[k] : [])])]),
  ) as Record<keyof LexiconData, Set<string>>;
  cache.set(language, merged);
  return merged;
}

export function rankSuggestions(text: string, language: string): Suggestion[] {
  const normalized = text.trim().toLowerCase();
  const lex = lexiconFor(language);
  const tokens = normalized.split(SPLIT).filter((t) => t.length > 0);
  const tokenSet = new Set(tokens);

  // Multi-word entries match as substrings; single words match whole tokens.
  const hasAny = (words: Set<string>) =>
    [...words].some((w) => (w.includes(' ') ? normalized.includes(w) : tokenSet.has(w)));
  const startsWithAny = (words: Set<string>) =>
    tokens.length > 0 && [...words].some((w) => !w.includes(' ') && tokens[0] === w);

  let shopping = 0;
  let task = 0;
  let goal = 0;
  let thought = THOUGHT_BASELINE;

  if (normalized.length > 0) {
    if (hasAny(lex.shoppingVerbs)) shopping += 0.5;
    if (hasAny(lex.shoppingNouns)) shopping += 0.3;

    if (hasAny(lex.taskVerbs)) task += 0.35;
    if (startsWithAny(lex.taskVerbs)) task += 0.15;
    if (hasAny(lex.timeWords) || CLOCK.test(normalized)) task += 0.3;

    if (hasAny(lex.habitWords)) goal += 0.5;

    // Long, multi-clause text reads as a thought, not an action.
    if (tokens.length > 12) thought += 0.2;
  }

  const clamp = (n: number) => Math.min(1, Math.max(0, n));
  const suggestions: Suggestion[] = [
    { target: 'shopping', score: clamp(shopping) },
    { target: 'task', score: clamp(task) },
    { target: 'weeklyGoal', score: clamp(goal) },
    { target: 'thought', score: clamp(thought) },
  ];
  return suggestions.sort((a, b) => b.score - a.score || TARGET_ORDER.indexOf(a.target) - TARGET_ORDER.indexOf(b.target));
}
