import type { LegalDoc } from './types';

// Written against what the app and backend actually do (checked in `glow` and
// `glowr-backend`, October 2026). If a data flow changes, this file changes in
// the same release, and so do the translations beside it. Legal review
// pending — see Linear AIO-58.
//
// Web billing is paused (Plus is sold in the app only), so Stripe and the web
// account page are left out. Put them back when the /plus checkout returns.

const doc: LegalDoc = {
  title: 'Privacy policy',
  description: 'What Aiora collects, why, who it’s shared with, and how to delete it.',
  updated: '19 October 2026',
  summaryTitle: 'The short version',
  summary: [
    'We collect what Aiora needs to plan your days: your account, your answers, your plan, your thoughts and lists, and, if you add them, your photos.',
    'Your answers go to an AI model to build your plan. Photos only go to one if you use them with Plus. Your name, email and thoughts never go to an AI model.',
    'We don’t sell your data and we don’t show ads.',
    'You can delete your account and everything in it from the app, and it’s erased from our servers within 30 days.',
  ],
  contentsLabel: 'On this page',
  sections: [
    {
      id: 'who',
      title: 'Who we are',
      body: [
        'Aiora is a planning app for iPhone and Android, with this website at aioraspace.com. In this policy, “Aiora”, “we” and “us” mean the team that runs it. We decide how your personal data is used, which makes us the controller of that data under data-protection laws such as the GDPR.',
        'Questions about privacy go to hello@aioraspace.com.',
      ],
    },
    {
      id: 'collect',
      title: 'What we collect',
      body: [
        '**Your account.** Your email address and a securely hashed password, or the identifier Apple or Google gives us when you sign in with them. Your name, bio, profile picture and app language, if you add them. When you sign up with email, we hold your email, name and hashed password for up to 24 hours while we wait for the code we sent you; your account is only created once you enter it.',
        '**Using Aiora as a guest.** You can start without an account. What you do as a guest stays on your device until you sign in; nothing is sent to our servers before then.',
        '**Your answers.** What you tell Aiora when it builds your plan: your gender, age band, work, how active your days are, how often you train, your goals and any notes you add.',
        '**What you plan and write.** Your schedule, tasks and weekly goals and whether you’ve done them, the thoughts you dump into Aiora and what you decide to do with them, your shopping list, and your focus sessions.',
        '**Photos, if you add them.** Up to three photos (head, side and full length), used to shape your plan. Adding photos is optional and part of Aiora Plus. An AI model looks at them once and writes a short description of what’s useful for your plan (for example your skin and posture), which we keep with your profile.',
        '**Subscriptions.** If you buy Aiora Plus, which plan you chose, its status and renewal date, and the transaction reference from Apple or Google. We never receive your card number.',
        '**Sign-in sessions.** For each device you’re signed in on, the IP address and device details it signed in from, so we can keep your account secure and sign a device out.',
        '**Device and usage.** The identifier we need to send you push notifications, your device platform, how many AI plans you’ve generated this month, and app usage events (for example, which screens are opened and which features are used). Usage events describe what you did in the app, not what you wrote. On Android, if you installed Aiora from a link someone shared, we also record which campaign and share code that link carried.',
        '**Approximate location, if you allow it.** Used only to show the weather on your home screen. It’s sent to our weather provider, and your phone’s own location service may turn it into a place name. We don’t store it.',
        '**Messages you send us.** If you email us, we keep the conversation so we can help.',
      ],
    },
    {
      id: 'use',
      title: 'How we use it, and why we’re allowed to',
      body: [
        {
          table: {
            head: ['What we do', 'Legal basis'],
            rows: [
              ['Run your account, sync your plan and lists between devices, and keep them safe', 'To provide the service you asked for (contract)'],
              ['Build and rebuild your plan with AI from your answers', 'Contract'],
              ['Use your photos to shape your plan', 'Your consent, which the app asks for before you add photos'],
              ['Send reminders and push notifications', 'Your consent, through your device’s notification permission'],
              ['Send account emails (sign-up codes, password reset)', 'Contract'],
              ['Process and verify Aiora Plus purchases', 'Contract, and keeping billing records the law requires'],
              ['Understand how Aiora is used and how people find it, so we can fix and improve it', 'Our legitimate interest in a working product'],
              ['Prevent abuse and keep the service secure, including making sure the free first plan is given once per person', 'Our legitimate interest in security and fair use'],
            ],
          },
        },
        'We don’t use your data for advertising, we don’t build advertising profiles, and we don’t sell or rent your data to anyone.',
      ],
    },
    {
      id: 'ai',
      title: 'AI and your plan',
      body: [
        'When Aiora builds a plan, our server sends your answers (gender, age band, work, activity, training, goals and notes) and your app language to an AI model, which returns a schedule.',
        'We work with several AI model providers. Which one builds a given plan depends on what it needs and on how busy each provider is at that moment: if one is unavailable or at capacity, the next one takes the request. If you have Aiora Plus and have added photos, your photos go once to a model that can read images, which writes a short description of them. Your plans are then built from your answers and that description, so your photos aren’t sent again unless you change them.',
        'Whichever provider builds it, the AI model never receives your name, email address, thoughts, shopping list or focus history. The model’s output is a suggestion: it isn’t medical, nutritional or fitness advice, and you can change any part of your plan.',
        'The suggestions for where a thought belongs (task, shopping, goal or thought) are worked out on your device. That doesn’t involve AI or our servers.',
      ],
    },
    {
      id: 'share',
      title: 'Who we share it with',
      body: [
        'We use a small number of service providers to run Aiora. They process data on our behalf and only for the purposes below:',
        {
          table: {
            head: ['Provider', 'What for', 'Where'],
            rows: [
              ['Hetzner', 'Hosting our servers and database, including stored photos', 'Germany (EU)'],
              ['AI model providers (for example Groq and OpenRouter)', 'Generating plans from your answers, and describing your photos with Plus', 'United States'],
              ['Google (Firebase)', 'Usage analytics and remote app settings', 'United States'],
              ['OneSignal', 'Delivering push notifications', 'United States'],
              ['Brevo', 'Sending account emails', 'France (EU)'],
              ['OpenWeatherMap', 'Weather for your approximate location', 'United Kingdom'],
              ['Apple, Google', 'Sign-in, subscriptions bought in their stores, and turning a location into a place name on your phone', 'United States'],
            ],
          },
        },
        'We may also disclose data if the law requires it, or to protect the rights and safety of our users or the public.',
      ],
    },
    {
      id: 'transfers',
      title: 'International transfers',
      body: [
        'Our servers are in the EU. Some providers above process data in other countries, including the United States. Where that happens, we rely on the safeguards the law provides, such as the European Commission’s Standard Contractual Clauses or the EU–US Data Privacy Framework.',
      ],
    },
    {
      id: 'retention',
      title: 'How long we keep it',
      body: [
        {
          list: [
            'Your account and everything in it: for as long as you keep your account.',
            'An email sign-up that’s never confirmed: up to 24 hours.',
            'When you delete your account, you’re signed out immediately and your data, photos included, is permanently erased from our servers within 30 days. A photo you replace or remove, and the description written from it, is erased the same way.',
            'One thing outlives a deleted account: a one-way coded fingerprint of your email or sign-in ID, which can’t be turned back into either. It only records that the free first plan has been used, so deleting and signing up again doesn’t give out another one.',
            'Subscription and billing records: as long as tax and accounting law requires, kept separate from the rest of your data.',
            'Usage analytics: no longer than 14 months.',
            'Emails with us: up to two years after the conversation ends.',
          ],
        },
      ],
    },
    {
      id: 'rights',
      title: 'Your choices and rights',
      body: [
        'You can see and edit your plan, answers and profile in the app at any time, and delete your account from your profile in the app, or through aioraspace.com/delete-account.',
        'Depending on where you live, you also have the right to access a copy of your data, to correct it, to have it erased, to restrict or object to how we use it, to take it with you, and to withdraw consent at any time (for example, by removing your photos or turning off notifications). Email hello@aioraspace.com and we’ll respond within 30 days.',
        'If you’re in the EU or UK, you can also complain to your local data-protection authority.',
        'Deleting your account doesn’t cancel a subscription bought through the App Store or Google Play; cancel it in your store settings.',
      ],
    },
    {
      id: 'children',
      title: 'Children',
      body: [
        'Aiora isn’t meant for children under 13, and we don’t knowingly collect their data. In some countries the minimum age for using apps like Aiora without a parent’s consent is higher; please follow the rules where you live. If you think a child has given us their data, email us and we’ll delete it.',
      ],
    },
    {
      id: 'security',
      title: 'Security',
      body: [
        'Data travels between the app and our servers over encrypted connections. Passwords and sign-up codes are stored as one-way hashes, access to production systems is restricted, and sessions use short-lived tokens. No system is perfectly secure, but we work to protect your data and will tell you if a breach affects you.',
      ],
    },
    {
      id: 'changes',
      title: 'Changes to this policy',
      body: [
        'When we change how we handle your data, we update this page and the date at the top. For significant changes, we’ll also tell you in the app before they take effect.',
      ],
    },
    {
      id: 'contact',
      title: 'Contact',
      body: ['Email hello@aioraspace.com with any question about your privacy or this policy.'],
    },
  ],
};

export default doc;
