import { signInWithApple, signInWithEmail, signInWithGoogle, type Result, type Session } from './plus-api';

const form = document.querySelector<HTMLFormElement>('[data-sign-in-form]');
if (form) init(form);

function init(form: HTMLFormElement) {
  const errors = JSON.parse(form.dataset.errors ?? '{}') as Record<string, string>;
  const error = form.querySelector<HTMLElement>('[data-error]')!;
  const submit = form.querySelector<HTMLButtonElement>('[data-submit]')!;
  const label = submit.textContent;
  // Only ever return to a path on this site.
  const nextParam = new URLSearchParams(location.search).get('next');
  const next = nextParam && nextParam.startsWith('/') && !nextParam.startsWith('//') ? nextParam : form.dataset.next ?? '/plus/';

  const done = (res: Result<Session>) => {
    if (res.ok) {
      location.assign(next);
      return;
    }
    error.textContent = errors[res.reason] ?? errors.network;
    submit.disabled = false;
    submit.textContent = label;
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    error.textContent = '';
    const data = new FormData(form);
    submit.disabled = true;
    submit.textContent = form.dataset.working ?? label;
    done(await signInWithEmail(String(data.get('email') ?? '').trim(), String(data.get('password') ?? '')));
  });

  // ─── Google Identity Services ───────────────────────────────────────────
  const googleId = form.dataset.google;
  const googleSlot = form.querySelector<HTMLElement>('[data-google-btn]');
  if (googleId && googleSlot) {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.onload = () => {
      const g = (window as unknown as { google: any }).google;
      g.accounts.id.initialize({
        client_id: googleId,
        callback: async (r: { credential: string }) => done(await signInWithGoogle(r.credential)),
      });
      g.accounts.id.renderButton(googleSlot, { theme: 'outline', size: 'large', shape: 'pill', width: googleSlot.clientWidth || 320, locale: document.documentElement.lang });
    };
    document.head.appendChild(script);
  }

  // ─── Sign in with Apple JS ──────────────────────────────────────────────
  const appleId = form.dataset.apple;
  const appleBtn = form.querySelector<HTMLButtonElement>('[data-apple-btn]');
  if (appleId && appleBtn) {
    const script = document.createElement('script');
    script.src = `https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/${document.documentElement.lang === 'ar' ? 'ar_SA' : 'en_US'}/appleid.auth.js`;
    script.async = true;
    script.onload = () => {
      const AppleID = (window as unknown as { AppleID: any }).AppleID;
      AppleID.auth.init({ clientId: appleId, scope: 'email', redirectURI: `${location.origin}/plus/sign-in/`, usePopup: true });
      appleBtn.addEventListener('click', async () => {
        try {
          const r = await AppleID.auth.signIn();
          done(await signInWithApple(r.authorization.id_token, r.authorization.code));
        } catch {
          /* popup closed */
        }
      });
    };
    document.head.appendChild(script);
  }
}
