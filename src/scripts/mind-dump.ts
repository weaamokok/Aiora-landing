// The hero's working mind dump.
//
// Same rules as the app's dump screen: suggestions re-rank as you type, the
// best guess is *suggested* (a ring) but nothing is pre-selected, and saving
// with no chip picked files the thought as a Thought. Nothing leaves the page.

import { track } from './analytics';
import { rankSuggestions, type Target } from './sort-thought';

const form = document.querySelector<HTMLFormElement>('[data-dump]');
const phone = document.querySelector<HTMLElement>('[data-phone]');

if (form && phone) init(form, phone);

function init(form: HTMLFormElement, phone: HTMLElement) {
  const lang = form.dataset.lang ?? 'en';
  const saved = JSON.parse(form.dataset.saved ?? '{}') as Record<Target, string>;
  const input = form.querySelector('textarea')!;
  const save = form.querySelector<HTMLButtonElement>('.dump-save')!;
  const chipBox = form.querySelector<HTMLElement>('[data-chips]')!;
  const status = form.querySelector<HTMLElement>('[data-status]')!;
  const idle = form.dataset.idle ?? '';
  const chips = () => [...chipBox.querySelectorAll<HTMLLabelElement>('.chip')];
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');

  let debounce = 0;
  let tried = false;

  // ─── Rank on input ────────────────────────────────────────────────────
  function rank() {
    const text = input.value;
    save.disabled = text.trim().length === 0;
    if (!text.trim()) {
      chips().forEach((c) => c.removeAttribute('data-suggested'));
      setStatus(idle);
      return;
    }
    const order = rankSuggestions(text, lang);
    const best = order[0];
    if (!tried && best.score > 0.3) {
      tried = true;
      track('dump_tried', { locale: lang });
    }
    reorder(order.map((s) => s.target));
    chips().forEach((c) => {
      // Only a real signal earns the ring: the thought baseline alone isn't one.
      const suggest = c.dataset.target === best.target && best.score > 0.3;
      c.toggleAttribute('data-suggested', suggest);
    });
    setStatus('');
  }

  // The spring curve is a CSS `linear()` string. Engines that can't parse it
  // reject the whole animation, so resolve it once and keep a plain fallback.
  const settle = (() => {
    const css = getComputedStyle(document.documentElement).getPropertyValue('--ease-settle').trim();
    if (!css) return 'ease-out';
    try {
      document.createElement('div').animate([{ opacity: 1 }], { duration: 1, easing: css }).cancel();
      return css;
    } catch {
      return 'ease-out';
    }
  })();

  /** Move chips into ranked order with a FLIP so they glide, not jump. */
  function reorder(targets: Target[]) {
    const current = chips();
    if (current.map((c) => c.dataset.target).join() === targets.join()) return;
    const before = new Map(current.map((c) => [c, c.getBoundingClientRect()]));
    for (const t of targets) {
      const el = current.find((c) => c.dataset.target === t);
      if (el) chipBox.appendChild(el);
    }
    if (reduceMotion.matches) return;
    for (const el of current) {
      const a = before.get(el)!;
      const b = el.getBoundingClientRect();
      const dx = a.left - b.left;
      const dy = a.top - b.top;
      if (!dx && !dy) continue;
      el.animate([{ transform: `translate(${dx}px, ${dy}px)` }, { transform: 'none' }], {
        duration: 380,
        easing: settle,
      });
    }
  }

  function setStatus(text: string, state?: 'saved') {
    status.textContent = text;
    if (state) status.dataset.state = state;
    else delete status.dataset.state;
  }

  // `field-sizing: content` grows the box as you type, but it isn't everywhere
  // yet. Without it a long thought scrolls inside a one-line box, which hides
  // the very thing the visitor just wrote.
  const autoGrows = CSS.supports?.('field-sizing', 'content') ?? false;
  function grow() {
    if (autoGrows) return;
    input.style.height = 'auto';
    input.style.height = `${Math.min(input.scrollHeight, 140)}px`;
  }

  input.addEventListener('input', () => {
    grow();
    clearTimeout(debounce);
    debounce = window.setTimeout(rank, 60);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) {
      e.preventDefault();
      form.requestSubmit();
    }
  });

  form.querySelectorAll<HTMLButtonElement>('[data-example]').forEach((btn) => {
    btn.addEventListener('click', () => {
      input.value = btn.dataset.example ?? '';
      grow();
      rank();
      input.focus();
      track('dump_example_used', { locale: lang });
    });
  });

  // Choosing the chosen chip again un-chooses it, like the app — so "no chip"
  // stays reachable after a mis-tap, and saving files the thought as a Thought.
  function unchoose(radio: HTMLInputElement) {
    radio.checked = false;
    radio.dataset.wasChecked = 'false';
  }

  chipBox.addEventListener('click', (e) => {
    const radio = e.target as HTMLInputElement;
    if (radio.tagName !== 'INPUT') return;
    if (radio.dataset.wasChecked === 'true') {
      // Not preventDefault(): cancelling a radio click restores its *previous*
      // state, which is the checked one. Clear it after the click instead.
      setTimeout(() => unchoose(radio));
    } else {
      chipBox.querySelectorAll('input').forEach((r) => (r.dataset.wasChecked = 'false'));
      radio.dataset.wasChecked = 'true';
    }
  });

  // Space on an already-checked radio changes nothing, so the browser fires no
  // click and the handler above never runs. Without this, a chip chosen by
  // keyboard can never be un-chosen by keyboard.
  chipBox.addEventListener('keydown', (e) => {
    const radio = e.target as HTMLInputElement;
    if (e.key !== ' ' || radio.tagName !== 'INPUT' || !radio.checked) return;
    e.preventDefault();
    unchoose(radio);
  });

  // ─── Save ─────────────────────────────────────────────────────────────
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const text = input.value.trim().replace(/\s+/g, ' ');
    if (!text) return;
    const chosen = chipBox.querySelector<HTMLInputElement>('input:checked');
    const target = (chosen?.value as Target | undefined) ?? 'thought';

    const origin = input.getBoundingClientRect();
    input.value = '';
    grow();
    chipBox.querySelectorAll('input').forEach((r) => {
      r.checked = false;
      r.dataset.wasChecked = 'false';
    });
    rank();

    track('dump_saved', {
      target,
      locale: lang,
      // Did they accept what Aiora proposed, or overrule it? The interesting
      // number for whether the heuristics are any good.
      followed_suggestion: rankSuggestions(text, lang)[0].target === target,
      chose_chip: chosen !== null,
    });

    const slot = phone.querySelector<HTMLElement>(`[data-slot="${target}"]`)!;
    await bringIntoView(phone);
    await fly(text, origin, slot.getBoundingClientRect());
    land(target, text);
    setStatus(saved[target], 'saved');
  });

  function bringIntoView(el: HTMLElement): Promise<void> {
    const r = el.getBoundingClientRect();
    const visible = r.top >= 0 && r.bottom <= innerHeight;
    if (visible || r.height > innerHeight * 0.95) {
      // Tall phones on short screens: aim for the middle instead.
      if (r.top < innerHeight * 0.6 && r.bottom > innerHeight * 0.4) return Promise.resolve();
    }
    el.scrollIntoView({ behavior: reduceMotion.matches ? 'auto' : 'smooth', block: 'center' });
    return new Promise((res) => setTimeout(res, reduceMotion.matches ? 0 : 450));
  }

  function fly(text: string, from: DOMRect, to: DOMRect): Promise<void> {
    if (reduceMotion.matches) return Promise.resolve();
    const el = document.createElement('div');
    el.className = 'flyer';
    el.textContent = text.length > 34 ? text.slice(0, 32) + '…' : text;
    document.body.appendChild(el);
    const w = el.offsetWidth;
    const h = el.offsetHeight;
    const x0 = from.left + 14;
    const y0 = from.top + from.height / 2 - h / 2;
    const x1 = to.left + to.width / 2 - (w * 0.6) / 2;
    const y1 = to.top + Math.min(to.height / 2, 40) - (h * 0.6) / 2;
    el.style.left = '0px';
    el.style.top = '0px';
    // A thrown thing arcs: it lifts first, then drops in.
    const midX = (x0 + x1) / 2;
    const midY = Math.min(y0, y1) - 80;
    const anim = el.animate(
      [
        { transform: `translate(${x0}px, ${y0}px) scale(1)`, opacity: 1 },
        { transform: `translate(${midX}px, ${midY}px) scale(0.9)`, opacity: 1, offset: 0.45 },
        { transform: `translate(${x1}px, ${y1}px) scale(0.6)`, opacity: 0 },
      ],
      { duration: 820, easing: 'cubic-bezier(0.3, 0.7, 0.2, 1)' },
    );
    return anim.finished.then(() => el.remove()).catch(() => el.remove());
  }

  function land(target: Target, text: string) {
    const toast = phone.querySelector<HTMLElement>('[data-toast]')!;
    const mark = (el: Element) => {
      el.classList.remove('is-new');
      void (el as HTMLElement).offsetWidth;
      el.classList.add('is-new');
    };

    // New rows are clones of the server-rendered ones, so they carry the same
    // scoped-style attributes as everything Astro drew.
    if (target === 'task') {
      const list = phone.querySelector('[data-slot="task"]')!;
      const li = list.querySelector('.app-row')!.cloneNode(true) as HTMLElement;
      li.querySelector('.app-row-title')!.textContent = text;
      li.querySelector('.app-row-meta')!.textContent = chipLabel('task');
      list.prepend(li);
      while (list.children.length > 3) list.lastElementChild!.remove();
      mark(li);
    } else if (target === 'weeklyGoal') {
      const ul = phone.querySelector('[data-slot="weeklyGoal"]')!;
      const li = ul.querySelector('li')!.cloneNode(true) as HTMLElement;
      li.textContent = text;
      ul.prepend(li);
      while (ul.children.length > 3) ul.lastElementChild!.remove();
      mark(li);
    } else if (target === 'thought') {
      phone.querySelector('[data-thought-text]')!.textContent = text;
      mark(phone.querySelector('[data-slot="thought"]')!);
    } else {
      phone.querySelector<HTMLElement>('[data-shopping-badge]')!.hidden = false;
      mark(phone.querySelector('[data-slot="shopping"]')!);
    }

    toast.textContent = saved[target];
    toast.classList.add('is-on');
    clearTimeout(Number(toast.dataset.timer));
    toast.dataset.timer = String(setTimeout(() => toast.classList.remove('is-on'), 2600));
  }

  function chipLabel(target: Target): string {
    const labels = JSON.parse(form.dataset.chipLabels ?? '{}') as Record<Target, string>;
    return labels[target] ?? '';
  }

  // ─── Greeting + weekday follow the visitor's clock, like the app header ─
  const hello = phone.querySelector<HTMLElement>('[data-greeting]');
  if (hello) {
    const [morning, afternoon, evening] = JSON.parse(hello.dataset.greetings ?? '[]') as string[];
    const h = new Date().getHours();
    hello.textContent = h >= 5 && h < 12 ? morning : h >= 12 && h < 17 ? afternoon : evening;
  }
  const weekday = phone.querySelector<HTMLElement>('[data-weekday]');
  if (weekday) {
    try {
      const day = new Intl.DateTimeFormat(document.documentElement.lang, { weekday: 'long' }).format(new Date());
      weekday.textContent = `${day.charAt(0).toLocaleUpperCase() + day.slice(1)} · 22°C`;
    } catch {
      /* keep the server-rendered weekday */
    }
  }

  rank();
}
