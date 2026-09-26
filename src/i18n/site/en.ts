// English site copy — the source every other locale follows.
//
// Voice (from the founder's notes): minimal, friendly, soft; a warm friend, not
// a coach. Say the plain thing. No invented numbers, no reviews we don't have,
// no feature we don't ship.
//
// Strings that are *app UI* (chips, triage buttons, greetings, the paywall) are
// not here: they come from the app's own l10n files via `npm run sync:app`, so
// the site can never word a button differently from the app.

export const en = {
  meta: {
    title: 'Aiora — everything in your head, somewhere it’ll happen',
    description:
      'Dump what’s on your mind. Aiora sorts it into tasks, shopping and goals, and builds a day that fits your life. Free on iPhone and Android.',
  },

  nav: {
    home: 'Aiora home',
    how: 'How it works',
    plus: 'Plus',
    faq: 'FAQ',
    getApp: 'Get Aiora',
    language: 'Language',
    skip: 'Skip to content',
  },

  store: {
    appStore: 'Download Aiora on the App Store',
    googlePlay: 'Get Aiora on Google Play',
    qrTitle: 'On your computer?',
    qrBody: 'Scan with your phone’s camera to get Aiora.',
  },

  hero: {
    inputLabel: 'Try it: type anything on your mind',
    chipsLabel: 'Where should it go?',
    idle: 'Start typing. Aiora suggests where it goes.',
    try: 'Or try',
    examples: ['call the dentist on thursday', 'buy shampoo and oat milk', 'run three times a week'],
    save: 'Sort it',
    again: 'Dump another',
    continue: 'Keep going in the app',
    phoneLabel: 'Aiora’s home screen, showing where your thought landed',
    runsLocally: 'Sorted right here in your browser, the way the app does it. Nothing you type is sent anywhere.',
  },

  phone: {
    date: 'Tuesday',
    goalsPercent: '42%',
    thought: 'call grandma this weekend',
    upNext: [
      { title: 'Pilates · full body', meta: 'Physical · 30 min' },
      { title: 'Read 10 pages', meta: 'Mental · 20 min' },
    ],
    goals: ['Sleep before midnight'],
    shopping: 'Shopping list',
    inbox: 'Thoughts',
    nav: ['Home', 'Mind Space', 'Calendar'],
  },

  noise: {
    title: 'Your head isn’t a to-do list.',
    body: 'It’s not a willpower problem. It’s a storage problem. Everything you mean to do is fighting for the same small space.',
    thoughts: [
      'reply to Lina',
      'shampoo',
      'start running again??',
      'call mom sunday',
      'dentist thursday',
      'that idea for the shop',
      'drink more water',
      'why did I say that in the meeting',
      'renew passport',
      'oat milk',
      'read 10 pages',
      'email the landlord',
      'learn Spanish (for real)',
      'pay the phone bill',
      'stretch, seriously',
      'sleep before 12',
      'gift for Sara',
      'fix the bike',
    ],
  },

  sort: {
    title: 'Keep it. Plan it. Or let it go.',
    body: 'Dump it the moment it arrives. Aiora suggests where each thought belongs; you decide with one tap.',
    steps: [
      { title: 'A task lands on your day', body: 'It shows up in your schedule, at a time that makes sense.' },
      { title: 'Groceries go on the list', body: 'Month by month, with a reminder before you head out.' },
      { title: 'A habit becomes a goal', body: 'It joins this week’s goals, where you can see it move.' },
      { title: 'Some thoughts you keep. Some you let go.', body: 'The newest one waits on your home screen, while you still remember why it mattered.' },
    ],
    items: [
      { text: 'dentist on thursday', to: 'today' },
      { text: 'shampoo + oat milk', to: 'shopping' },
      { text: 'run 3 times a week', to: 'goals' },
      { text: 'idea: a tiny shop for my drawings', to: 'kept' },
      { text: 'why did I say that in the meeting', to: 'release' },
    ],
    bins: { today: 'Today', shopping: 'Shopping', goals: 'This week', kept: 'Thoughts' },
  },

  plan: {
    title: 'Five questions. A day that’s actually yours.',
    body: 'Tell Aiora how your days really go: your work, your energy, what you’re working toward. It builds the plan around that, not around someone else’s 5am routine.',
    free: 'Your first plan is free.',
    notChat: 'Not a paragraph to copy out of a chat. A plan you live in, that you can tick off, move and change.',
    slots: { morning: 'Morning', afternoon: 'Afternoon', evening: 'Evening' },
    day: [
      { slot: 'morning', time: '07:30', title: 'Water, then a 5-minute stretch', meta: 'Wellness · 5 min' },
      { slot: 'morning', time: '08:15', title: 'Deep work: thesis chapter', meta: 'Mental · 90 min' },
      { slot: 'afternoon', time: '13:10', title: 'Walk after lunch', meta: 'Physical · 20 min' },
      { slot: 'afternoon', time: '16:00', title: 'Reply to emails', meta: 'Work · 30 min' },
      { slot: 'evening', time: '19:00', title: 'Pilates · full body', meta: 'Physical · 30 min' },
      { slot: 'evening', time: '22:30', title: 'Phone away, read 10 pages', meta: 'Mental · 20 min' },
    ],
    stepOf: 'Step {current} of {total}',
    sampleAnswer: 'Mostly sitting',
    activityOptions: ['Mostly sitting', 'Mostly standing', 'I move around a lot'],
  },

  focus: {
    title: 'Focus in rounds, with your body in the loop.',
    body: 'Start a session and Aiora keeps the time, then taps you for a stretch and a glass of water before your neck starts to complain.',
    session: 'Focus',
    stretch: 'Stretch break',
    water: 'Water',
    in: 'in {time}',
    lockScreen: 'Stays on your Lock Screen while you work.',
    points: ['Pick the length, Aiora keeps the time', 'Stretch breaks, light to full', 'A glass of water, on schedule', 'Every session saved to your history'],
  },

  evening: {
    title: 'It meets you where you already look.',
    widget: { title: 'On your home screen', body: 'Your next few actions, without opening anything.' },
    reminder: { title: 'A gentle nudge', body: 'When thoughts are still waiting on you. Daily, weekly, or never.' },
    calendar: { title: 'Your whole week', body: 'Every day at a glance, so a missed day never feels like a lost week.' },
    share: { title: 'A good week, shared', body: 'A card for your streak, when you want one.' },
    offline: { title: 'No signal, no problem', body: 'Your day keeps working and syncs when you’re back.' },
    privacy: 'We don’t sell your data, and you can delete your account and everything in it from the app.',
    privacyLink: 'How Aiora handles your data',
    streakDays: '12-day streak',
  },

  languages: {
    title: 'Plan in the language you think in.',
    body: 'Seven languages in the app and on this site, right-to-left included.',
  },

  plus: {
    note: 'Everything above stays free. Plus is there when you want more.',
    cta: 'See Aiora Plus',
    trialDays: 7,
  },

  night: {
    faqTitle: 'Questions, answered',
    allQuestions: 'All questions',
    closing: 'Tomorrow’s already sorted.',
    closingBody: 'Free on iPhone and Android. Your first plan is on us.',
  },

  homeFaq: [
    {
      q: 'Is Aiora free?',
      a: 'Yes, to download and to use every day. The mind dump, your thoughts inbox, tasks, calendar, focus sessions, shopping list, widgets and reminders are all free, and so is your first AI plan. Aiora Plus is optional. It adds unlimited plan regenerations, plans shaped by your photos, every focus buddy and stretch level, and as many weekly goals as the week can hold.',
    },
    {
      q: 'How does Aiora build my plan?',
      a: 'You answer five short questions: a little about you, your work, how your days usually go, what you’re working toward, and, with Plus, a few photos. Aiora’s AI turns that into a daily plan grouped into morning, afternoon and evening. It takes about a minute, and you can edit anything afterwards.',
    },
    {
      q: 'What happens to what I type?',
      a: 'The suggestion for where a thought belongs is worked out on your phone. Your thoughts, tasks and plan are saved to your account so they sync between your devices. We don’t sell your data, and you can delete your account and everything in it from the app at any time.',
    },
    {
      q: 'Do I need an account?',
      a: 'No. You can start as a guest. Create an account when you want your plan backed up, on another device, or to use Plus.',
    },
    {
      q: 'Does it work offline?',
      a: 'Yes. Your day, your thoughts and your shopping list work without a connection and sync when you’re back online. Building a new AI plan needs a connection.',
    },
    {
      q: 'Which languages does Aiora speak?',
      a: 'English, Arabic, French, Spanish, Russian, Turkish and Swahili, in the app and on this site.',
    },
  ],

  footer: {
    tagline: 'Everything in your head, somewhere it’ll happen.',
    product: 'Product',
    help: 'Help',
    legal: 'Legal',
    support: 'Support',
    deleteAccount: 'Delete your account',
    privacy: 'Privacy policy',
    terms: 'Terms of service',
    account: 'Manage web subscription',
    rights: '© {year} Aiora',
  },

  faqPage: {
    title: 'Questions, answered',
    description: 'How Aiora works, what’s free, what Plus adds, and what happens to your data.',
    lede: 'Everything people ask before they download, and a few things they ask after.',
    stillTitle: 'Still wondering about something?',
    stillBody: 'Write to us. A person reads every message.',
    groups: [
      {
        title: 'How it works',
        items: [
          { q: 'What is Aiora?', a: 'A planning app for people who have more on their mind than time to organise it. You dump whatever’s in your head, Aiora suggests where each thought belongs (a task, a shopping item, a weekly goal, or a thought to keep), and builds a daily plan around your real life. Focus sessions, reminders and widgets help you follow through.' },
          { q: 'What is the mind dump?', a: 'The always-there field at the bottom of the app. Type anything, the moment you think of it. Aiora suggests where it should go, but nothing is chosen for you: pick one with a tap, or save it as a thought and decide later. The newest undecided thought waits on your home screen, where you can keep it, turn it into a task or shopping item, or let it go.' },
          { q: 'How does Aiora build my plan?', a: 'You answer five short questions: a little about you, your work, how your days usually go, what you’re working toward, and, with Plus, a few photos. Aiora’s AI turns that into a daily plan grouped into morning, afternoon and evening. It takes about a minute.' },
          { q: 'Can I change my plan?', a: 'Yes. Add, edit, move or delete anything, mark actions done or skipped, and set your own weekly goals. You can also regenerate the whole plan when life changes. The free plan includes a few regenerations each month; Plus makes them unlimited.' },
          { q: 'What are focus sessions?', a: 'A timer for focused work that looks after your body too. Pick a length and Aiora keeps time, reminds you to stretch (light, mid or full) and to drink water, and saves each session to your history. On iPhone, a running session stays on your Lock Screen.' },
          { q: 'Does it work offline?', a: 'Yes. Your day, your thoughts and your shopping list work without a connection and sync when you’re back online. Building a new AI plan needs a connection.' },
        ],
      },
      {
        title: 'Free and Plus',
        items: [
          { q: 'Is Aiora free?', a: 'Yes, to download and to use every day. The mind dump, your thoughts inbox, tasks, calendar, focus sessions, shopping list, widgets, reminders and your first AI plan are all free.' },
          { q: 'What does Aiora Plus add?', a: 'Unlimited plan regenerations, plans shaped by your photos, every focus buddy and stretch level, and as many weekly goals as the week can hold.' },
          { q: 'How much is Plus?', a: 'You’ll see the price in your currency in the app, or at aioraspace.com/plus, before you pay. There’s a monthly and an annual plan, and the annual plan starts with a 7-day free trial.' },
          { q: 'How do I cancel?', a: 'If you subscribed in the app, cancel in your App Store or Google Play subscription settings. If you subscribed on this website, cancel at aioraspace.com/account. Either way, you keep Plus until the end of the period you’ve paid for.' },
          { q: 'I bought Plus but the app doesn’t show it.', a: 'Make sure you’re signed in with the same account you used to buy it, then close and reopen Aiora. For App Store and Google Play purchases, you can also use “Restore purchases” on the Plus screen. Still stuck? Email us.' },
        ],
      },
      {
        title: 'Privacy and your data',
        items: [
          { q: 'Do I need an account?', a: 'No. You can start as a guest. Create an account when you want your plan backed up, on another device, or to use Plus.' },
          { q: 'What happens to what I type?', a: 'The suggestion for where a thought belongs is worked out on your phone. Your thoughts, tasks and plan are saved to your account so they sync between your devices. They’re never sent to an AI model and we don’t sell your data.' },
          { q: 'What happens to my photos?', a: 'Photos are optional and part of Plus. If you add them, they’re stored with your profile on our servers in the EU so your plan can be rebuilt, and they’re sent to Google’s Gemini model when a plan is generated. They’re deleted when you delete your account.' },
          { q: 'How do I delete my account?', a: 'From your profile in the app, or at aioraspace.com/delete-account. You’re signed out straight away and your data is erased from our servers within 30 days. Deleting your account doesn’t cancel a store subscription, so cancel that in your store settings too.' },
        ],
      },
      {
        title: 'Languages and devices',
        items: [
          { q: 'Which languages does Aiora speak?', a: 'English, Arabic, French, Spanish, Russian, Turkish and Swahili, in the app and on this site.' },
          { q: 'Which devices does Aiora run on?', a: 'iPhone (from the App Store) and Android phones (from Google Play), with home-screen widgets on both. Your account syncs between them.' },
        ],
      },
    ],
  },

  support: {
    title: 'Support',
    description: 'Get help with Aiora: purchases, sync, notifications and your account.',
    lede: 'Most things have a quick fix. If yours doesn’t, write to us and a person will reply.',
    emailTitle: 'Email us',
    emailBody: 'Tell us what happened, what you expected, and which phone you’re using. Screenshots help.',
    fixesTitle: 'Quick fixes',
    fixes: [
      { title: 'Plus isn’t showing', body: 'Check you’re signed in with the account you bought it on, then close and reopen Aiora. For store purchases, tap “Restore purchases” on the Plus screen.' },
      { title: 'My plan or thoughts didn’t sync', body: 'Changes made offline sync the next time Aiora opens with a connection. Make sure you’re signed in with the same account on both devices.' },
      { title: 'Reminders don’t arrive', body: 'Allow notifications for Aiora in your phone’s settings, and check the reminder is switched on in the app. Battery saver modes can delay notifications on some Android phones.' },
      { title: 'I can’t sign in', body: 'Use the same method you signed up with: email, Apple or Google. For email accounts, “Forgot password” sends a reset link.' },
    ],
    moreTitle: 'More help',
    faqLink: 'Read the FAQ',
    deleteLink: 'Delete your account',
    accountLink: 'Manage a web subscription',
  },

  deleteAccount: {
    title: 'Delete your Aiora account',
    description: 'How to delete your Aiora account and the data in it, with or without the app.',
    lede: 'You can delete your account at any time. Here’s how, and what happens next.',
    inAppTitle: 'In the app',
    inAppSteps: ['Open Aiora and tap your profile picture on the home screen.', 'Scroll to the bottom of your profile.', 'Tap Delete Account and confirm.'],
    noAppTitle: 'Without the app',
    noAppBody: 'Email us from the address on your account (or tell us how you sign in) with the subject “Delete my account”. We’ll confirm it’s you, then delete it.',
    emailSubject: 'Delete my account',
    whatTitle: 'What happens next',
    what: [
      'You’re signed out on every device straight away.',
      'Your profile, answers, plan, thoughts, shopping list, focus history and photos are permanently erased from our servers within 30 days.',
      'We keep subscription and billing records only for as long as tax law requires, separate from everything else.',
    ],
    subsTitle: 'Subscriptions aren’t cancelled automatically',
    subsBody: 'If you have Aiora Plus from the App Store or Google Play, cancel it in your store subscription settings. If you subscribed on this website, cancel it at aioraspace.com/account before deleting your account.',
  },

  plusPage: {
    title: 'Aiora Plus',
    description: 'Unlimited plan regenerations, plans shaped by your photos, every focus buddy and stretch level, and uncapped weekly goals.',
    compareTitle: 'Free and Plus, side by side',
    free: 'Free',
    plus: 'Plus',
    rows: [
      { label: 'Mind dump, thoughts inbox and triage', free: true, plus: true },
      { label: 'Tasks, calendar and weekly goals', free: true, plus: true },
      { label: 'Focus sessions with stretch and water breaks', free: true, plus: true },
      { label: 'Shopping list, widgets and reminders', free: true, plus: true },
      { label: 'Your first AI plan', free: true, plus: true },
      { label: 'Plan regenerations', free: 'A few each month', plus: 'Unlimited' },
      { label: 'Plans shaped by your photos', free: false, plus: true },
      { label: 'Every focus buddy and stretch level', free: false, plus: true },
    ],
    buyTitle: 'Get Plus',
    loadingPrices: 'Loading prices…',
    pricesUnavailable: 'Prices couldn’t load right now. You can still get Plus in the app.',
    billedYearly: 'Billed yearly after the trial',
    billedMonthly: 'Billed monthly',
    continue: 'Continue',
    signInNeeded: 'Plus lives on your Aiora account, so sign in first. New here? Get the app, set up your account there, then come back.',
    signIn: 'Sign in to continue',
    signedInAs: 'Signed in as {email}',
    signOut: 'Sign out',
    redirecting: 'Taking you to secure checkout…',
    checkoutFailed: 'Checkout didn’t open. Please try again in a moment.',
    already: 'You already have Aiora Plus on this account.',
    inAppNote: 'Prefer to pay through the App Store or Google Play? You can get Plus inside the app too.',
    legal: 'Plus renews automatically until you cancel. Cancel any time at aioraspace.com/account; you keep Plus until the end of the period you’ve paid for. By continuing you agree to the Terms of service.',
    faq: [
      { q: 'Is the trial really free?', a: 'Yes. The annual plan starts with 7 days free. You’re not charged if you cancel before the trial ends.' },
      { q: 'Will Plus work in the app?', a: 'Yes. Plus belongs to your Aiora account. Open the app signed in with the same account and it’s there.' },
      { q: 'How do I cancel?', a: 'At aioraspace.com/account, any time. You keep Plus until the end of the period you’ve paid for.' },
      { q: 'Can I get a refund?', a: 'Email hello@aioraspace.com. We honour every refund and withdrawal right your local law gives you.' },
    ],
  },

  signIn: {
    title: 'Sign in to Aiora',
    description: 'Sign in with your Aiora account to get Aiora Plus.',
    lede: 'Use the same account you use in the app.',
    email: 'Email',
    password: 'Password',
    submit: 'Sign in',
    working: 'Signing in…',
    or: 'or',
    apple: 'Continue with Apple',
    google: 'Continue with Google',
    forgot: 'Forgot your password? Reset it in the app.',
    noAccount: 'No account yet? Get Aiora and create one in the app — it takes a minute.',
    failed: 'That email and password don’t match an Aiora account.',
    network: 'We couldn’t reach Aiora. Check your connection and try again.',
  },

  welcome: {
    title: 'Welcome to Aiora Plus',
    description: 'Your Aiora Plus subscription is active.',
    heading: 'You’re on Plus.',
    body: 'Open Aiora on your phone, signed in with the same account, and everything is already unlocked.',
    pending: 'Your payment went through. It can take a minute for Plus to reach your account — if the app doesn’t show it yet, close and reopen it.',
    open: 'Open Aiora',
    noApp: 'Don’t have the app yet?',
    manage: 'Manage your subscription',
  },

  account: {
    title: 'Your web subscription',
    description: 'Manage or cancel an Aiora Plus subscription bought on aioraspace.com.',
    lede: 'For Plus bought on this website. If you subscribed in the App Store or Google Play, manage it in your store settings instead.',
    status: 'Status',
    active: 'Aiora Plus is active',
    renews: 'Renews on {date}',
    ends: 'Ends on {date}',
    none: 'There’s no Plus subscription on this account.',
    storeManaged: 'This subscription was bought in the {store}. Manage or cancel it in your store settings.',
    manage: 'Manage or cancel',
    opening: 'Opening your billing page…',
    portalUnavailable: 'The billing page isn’t available right now. Email hello@aioraspace.com and we’ll cancel or change your subscription for you.',
    getPlus: 'See Aiora Plus',
    appStore: 'App Store',
    googlePlay: 'Google Play',
  },

  get: {
    title: 'Get Aiora',
    description: 'Download Aiora for iPhone or Android.',
    heading: 'Get Aiora',
    body: 'Taking you to your app store…',
    choose: 'Choose your store',
  },

  legalFallback: '',

  notFound: {
    title: 'This thought got let go.',
    body: 'The page you’re looking for isn’t here any more, or never was.',
    home: 'Back to Aiora',
  },
};

export type SiteCopy = typeof en;
