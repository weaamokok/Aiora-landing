import type { LegalDoc } from './types';

// Legal review pending — see Linear AIO-58. Prices are never written here: they
// are shown by the App Store or Google Play at the moment of purchase.
//
// Web billing is paused (Plus is sold in the app only), so web purchases,
// Stripe and aioraspace.com/account are left out, as in the privacy policy.
// Put them back when the /plus checkout returns.

const doc: LegalDoc = {
  title: 'Terms of service',
  description: 'The agreement between you and Aiora when you use the app, this website and Aiora Plus.',
  updated: '30 October 2026',
  summaryTitle: 'The short version',
  summary: [
    'Aiora helps you plan. Its AI suggestions aren’t medical advice, so listen to your body and your doctor.',
    'Your thoughts, plans and photos are yours. We only use them to run Aiora for you.',
    'Aiora Plus renews until you cancel. Cancel any time in your App Store or Google Play settings.',
    'Be kind to the service and other people, and we’ll keep working to make Aiora worth opening.',
  ],
  contentsLabel: 'On this page',
  sections: [
    {
      id: 'agreement',
      title: 'This agreement',
      body: [
        'These terms apply when you use the Aiora apps, aioraspace.com and Aiora Plus (together, “Aiora”). By using Aiora you agree to them. If you don’t agree, please don’t use Aiora. Our privacy policy explains how we handle your data and is part of these terms.',
      ],
    },
    {
      id: 'eligibility',
      title: 'Who can use Aiora',
      body: [
        'You need to be at least 13 years old, or older if the law where you live sets a higher age for using apps like Aiora without a parent’s consent. If you’re under the age of majority where you live, a parent or guardian needs to agree to these terms for you.',
      ],
    },
    {
      id: 'account',
      title: 'Your account',
      body: [
        'You can use Aiora as a guest or with an account. Keep your sign-in details to yourself; you’re responsible for what happens under your account. A guest account lives only on the device it was created on until you create a full account, so if you lose that device before creating one, your data may be lost with it.',
      ],
    },
    {
      id: 'guidance',
      title: 'Plans are suggestions, not advice',
      body: [
        'Aiora uses AI to suggest routines, breaks and habits. These suggestions are general wellness and productivity guidance. They aren’t medical, nutritional, psychological or fitness advice, and they can be wrong. Check with a qualified professional before starting new exercise, diet or health routines, especially if you have a medical condition, are pregnant, or are recovering from an injury. Stop any activity that causes pain or discomfort.',
      ],
    },
    {
      id: 'plus',
      title: 'Aiora Plus',
      body: [
        'Aiora is free to use. Aiora Plus is an optional subscription that removes limits, such as how often you can regenerate your plan, and adds features such as photo-shaped plans. What Plus includes is described in the app and at aioraspace.com/plus when you buy it.',
        '**Buying Plus.** Plus is sold in the app through the App Store or Google Play. Your purchase is handled by Apple or Google under their terms, including billing, renewals, refunds and cancellations. Your subscription renews automatically at the end of each billing period until you cancel, and you keep Plus until the end of the period you’ve paid for. Manage or cancel it in your store account settings.',
        '**Free trials.** If a plan includes a free trial, you won’t be charged during the trial. Unless you cancel before it ends, your subscription starts and you’re charged on the last day of the trial.',
        '**Price changes.** If the price of your subscription changes, we (or the store) will tell you in advance, and the new price applies from your next renewal. You can cancel before then.',
        '**Refunds.** Refunds are decided by Apple or Google under their policies. This doesn’t limit any refund or withdrawal right your local law gives you.',
        'Plus is tied to your Aiora account, not to a device or a store. If you end up with two active subscriptions for the same account, for example one from each store, contact us and we’ll help you cancel the duplicate and ask the store for a refund.',
      ],
    },
    {
      id: 'content',
      title: 'Your content',
      body: [
        'Everything you put into Aiora — your answers, thoughts, lists, plans and photos — stays yours. You give us permission to store, process and display it only as needed to run Aiora for you, including sending it to the service providers described in our privacy policy. That permission ends when you delete the content or your account, except where we must keep something by law.',
      ],
    },
    {
      id: 'use',
      title: 'Using Aiora fairly',
      body: [
        {
          list: [
            'Don’t break the law with Aiora, or use it to harm others.',
            'Don’t try to access other people’s accounts or data, or our systems beyond what the app offers.',
            'Don’t interfere with, overload or reverse-engineer the service, or get around limits such as the free plan’s regeneration limit.',
            'Don’t upload photos you don’t have the right to use, or photos of other people without their consent.',
          ],
        },
        'We may suspend or close accounts that break these rules, and we’ll tell you why unless the law or safety prevents it.',
      ],
    },
    {
      id: 'ours',
      title: 'Our part',
      body: [
        'The Aiora name, logo, app and website are ours. We give you a personal, non-exclusive, non-transferable licence to use the Aiora app and website for your own non-commercial use, under these terms. You may not copy, sell, rent or sublicense Aiora, or use it to build a competing product.',
        'If you send us ideas or feedback, we may use them to improve Aiora without owing you anything for them.',
        'We work to keep Aiora available and your data safe, but we can’t promise it will always be uninterrupted or error-free. We may add, change or remove features over time; if we remove something you pay for, we’ll tell you and treat you fairly.',
      ],
    },
    {
      id: 'liability',
      title: 'Liability',
      body: [
        'Aiora is provided “as is”. To the extent the law allows, we aren’t liable for indirect or consequential losses, or for decisions you make based on AI suggestions. Nothing in these terms limits liability that can’t legally be limited, or takes away rights you have as a consumer under the law where you live.',
      ],
    },
    {
      id: 'ending',
      title: 'Ending the agreement',
      body: [
        'You can stop using Aiora and delete your account at any time. Deleting your account doesn’t cancel a store subscription, so cancel that in your store settings too. We may end these terms for an account that seriously or repeatedly breaks them.',
        'The parts of these terms that are meant to last, such as our rights in Aiora, the liability section and your consumer rights, continue after the agreement ends.',
      ],
    },
    {
      id: 'changes',
      title: 'Changes to these terms',
      body: [
        'We may update these terms as Aiora changes. We’ll update the date at the top, and for significant changes we’ll tell you in the app before they take effect. If you keep using Aiora after that, the new terms apply.',
      ],
    },
    {
      id: 'contact',
      title: 'Contact',
      body: ['Questions about these terms go to support@aioraspace.com.'],
    },
  ],
};

export default doc;
