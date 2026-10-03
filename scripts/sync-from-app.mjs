// Pulls the two things the site must never disagree with the app about:
//
//  1. The mind-dump lexicons (`lib/feature/mind_dump/mind_dump_heuristics.dart`).
//     The hero's sorter runs on exactly these words, so a thought typed on the
//     site is sorted the way the app would sort it.
//  2. The app's own localized copy (`assets/l10n/<locale>.yaml`) for every string
//     the site shows as *app UI*: the promise, chips, triage buttons, greetings,
//     the paywall. Marketing copy lives in `src/i18n/`; UI copy comes from here.
//
// Run from the site root:  npm run sync:app   (expects the app repo at ../glow)
// Output is committed, so the site builds without the app repo present.

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { parse } from 'yaml';

const appRoot = resolve(process.argv[2] ?? '../glow');
const locales = ['en', 'ar', 'fr', 'es', 'ru', 'tr', 'sw'];

// ─── 1. Lexicons ────────────────────────────────────────────────────────────
const dart = readFileSync(
  join(appRoot, 'lib/feature/mind_dump/mind_dump_heuristics.dart'),
  'utf8',
);
const fields = ['shoppingVerbs', 'shoppingNouns', 'taskVerbs', 'timeWords', 'habitWords'];

function parseLexicon(block) {
  const out = {};
  for (const field of fields) {
    const m = block.match(new RegExp(`${field}:\\s*\\{([^}]*)\\}`));
    if (!m) throw new Error(`lexicon field ${field} not found`);
    out[field] = [...m[1].matchAll(/'((?:[^'\\]|\\.)*)'|"((?:[^"\\]|\\.)*)"/g)].map(
      (x) => (x[1] ?? x[2]).replace(/\\(.)/g, '$1'),
    );
  }
  return out;
}

const enStart = dart.indexOf('const _en = _Lexicon(');
const byLangStart = dart.indexOf('const _byLanguage');
if (enStart < 0 || byLangStart < 0) throw new Error('heuristics layout changed');

const lexicon = { en: parseLexicon(dart.slice(enStart, byLangStart)) };
const langBlocks = dart.slice(byLangStart).split(/\n\s*'([a-z]{2})': _Lexicon\(/);
for (let i = 1; i < langBlocks.length; i += 2) {
  lexicon[langBlocks[i]] = parseLexicon(langBlocks[i + 1]);
}

// The weights are code, not data, so they're pinned here and checked against
// the Dart source: if someone retunes the app, the sync fails loudly instead of
// the site silently sorting differently.
const expectedWeights = [
  'shopping += 0.5', 'shopping += 0.3', 'task += 0.35', 'task += 0.15',
  'task += 0.3', 'goal += 0.5', 'thought += 0.2', '_thoughtBaseline = 0.3',
  'tokens.length > 12',
];
for (const w of expectedWeights) {
  if (!dart.includes(w)) {
    throw new Error(`Heuristic weight changed in the app ("${w}" missing). Update src/scripts/sort-thought.ts to match.`);
  }
}

mkdirSync('src/data', { recursive: true });
writeFileSync('src/data/lexicon.json', JSON.stringify(lexicon, null, 2) + '\n');

// ─── 2. App UI strings ──────────────────────────────────────────────────────
const pick = (obj, path) => path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj);
const keys = {
  promise: 'landing.promise',
  headline: 'landing.headline',
  dumpHint: 'mindDump.hint',
  chipTask: 'mindDump.chipTask',
  chipShopping: 'mindDump.chipShopping',
  chipWeeklyGoal: 'mindDump.chipWeeklyGoal',
  chipThought: 'mindDump.chipThought',
  savedAsTask: 'mindDump.savedAsTask',
  savedAsShopping: 'mindDump.savedAsShopping',
  savedAsWeeklyGoal: 'mindDump.savedAsWeeklyGoal',
  savedAsThought: 'mindDump.savedAsThought',
  inboxTitle: 'mindDump.inbox.title',
  reminderTitle: 'mindDump.reminder.title',
  reminderBodyOne: 'mindDump.reminder.body.one',
  reminderWeekly: 'mindDump.reminder.weekly',
  triageEyebrow: 'triage.eyebrow',
  keepIt: 'triage.keepIt',
  letGo: 'triage.letGo',
  released: 'triage.released',
  kept: 'triage.kept',
  greetingMorning: 'homeScreen.greetingMorning',
  greetingAfternoon: 'homeScreen.greetingAfternoon',
  greetingEvening: 'homeScreen.greetingEvening',
  upNext: 'homeScreen.dayView.upNext',
  now: 'homeScreen.dayView.now',
  weeksGoals: 'homeScreen.weeklyGoals.title',
  generatingSteps: 'promptSteps.generatingSteps',
  aboutYouQuestion: 'promptSteps.aboutYouQuestion',
  workQuestion: 'promptSteps.workQuestion',
  daysQuestion: 'promptSteps.daysQuestion',
  goalsQuestion: 'promptSteps.goalsQuestion',
  photosQuestion: 'promptSteps.photosQuestion',
  jobSuggestions: 'promptSteps.jobSuggestions',
  goalSuggestions: 'promptSteps.goalSuggestions',
  ageBandLabel: 'personalInfoStep.ageBandLabel',
  ageBands: 'personalInfoStep',
  paywallHeadline: 'monetization.paywall.headline',
  paywallSubline: 'monetization.paywall.subline',
  featureRegenTitle: 'monetization.paywall.featureRegenTitle',
  featureRegenSubtitle: 'monetization.paywall.featureRegenSubtitle',
  featurePhotoTitle: 'monetization.paywall.featurePhotoTitle',
  featurePhotoSubtitle: 'monetization.paywall.featurePhotoSubtitle',
  featureBuddyTitle: 'monetization.paywall.featureBuddyTitle',
  featureBuddySubtitle: 'monetization.paywall.featureBuddySubtitle',
  featureGoalsTitle: 'monetization.paywall.featureGoalsTitle',
  featureGoalsSubtitle: 'monetization.paywall.featureGoalsSubtitle',
  trialHeadline: 'monetization.paywall.trialHeadline',
  trialStepNowTitle: 'monetization.paywall.trialStepNowTitle',
  trialStepNowBody: 'monetization.paywall.trialStepNowBody',
  trialStepMiddleTitle: 'monetization.paywall.trialStepMiddleTitle',
  trialStepMiddleBody: 'monetization.paywall.trialStepMiddleBody',
  trialStepEndTitle: 'monetization.paywall.trialStepEndTitle',
  trialStepEndBody: 'monetization.paywall.trialStepEndBody',
  startTrialCta: 'monetization.paywall.startTrialCta',
  noChargeToday: 'monetization.paywall.noChargeToday',
  annual: 'monetization.paywall.annual',
  monthly: 'monetization.paywall.monthly',
  perYear: 'monetization.paywall.perYear',
  perMonth: 'monetization.paywall.perMonth',
  monthlyEquivalent: 'monetization.paywall.monthlyEquivalent',
  startPlus: 'monetization.paywall.startPlus',
  guestBody: 'monetization.paywall.guestBody',
  alreadyPlus: 'monetization.paywall.alreadyPlus',
  authContinueEmail: 'authContinueEmail',
  authContinueApple: 'authContinueApple',
  authContinueGoogle: 'authContinueGoogle',
  loginEmailLabel: 'loginEmailLabel',
  loginPasswordLabel: 'loginPasswordLabel',
  loginButton: 'loginButton',
  loginForgotPassword: 'loginForgotPassword',
  loginTitle: 'loginTitle',
};

const ageBandKeys = ['ageBandUnder18', 'ageBand18To24', 'ageBand25To34', 'ageBand35To44', 'ageBand45To54', 'ageBand55Plus'];

mkdirSync('src/i18n/app', { recursive: true });
const en = parse(readFileSync(join(appRoot, 'assets/l10n/en.yaml'), 'utf8'));
for (const locale of locales) {
  const doc = parse(readFileSync(join(appRoot, `assets/l10n/${locale}.yaml`), 'utf8'));
  const out = {};
  const missing = [];
  for (const [name, path] of Object.entries(keys)) {
    if (name === 'ageBands') {
      const src = pick(doc, path) ?? {};
      const fallback = pick(en, path);
      out.ageBands = ageBandKeys.map((k) => src[k] ?? fallback[k]);
      continue;
    }
    let value = pick(doc, path);
    // Same fallback the app uses (slang base_locale): English leads.
    if (value == null) {
      value = pick(en, path);
      missing.push(name);
    }
    if (value == null) throw new Error(`${path} missing in en.yaml too`);
    out[name] = value;
  }
  writeFileSync(`src/i18n/app/${locale}.json`, JSON.stringify(out, null, 2) + '\n');
  console.log(`${locale}: ${Object.keys(out).length} strings${missing.length ? ` (fell back to en: ${missing.join(', ')})` : ''}`);
}
console.log(`lexicon: ${Object.keys(lexicon).join(', ')}`);
