// The nav floats over sections of different grounds (lilac morning, teal focus,
// dusk). Light frost on a dark ground is illegible, so the pill takes the tone
// of whatever section is under it. Sections opt in with `data-tone`.

const root = document.documentElement;
const probeY = 40; // roughly the pill's vertical centre

function update() {
  const sections = document.querySelectorAll<HTMLElement>('[data-tone]:not(html)');
  let tone = root.dataset.tone ?? 'light';
  for (const s of sections) {
    const r = s.getBoundingClientRect();
    if (r.top <= probeY && r.bottom > probeY) {
      tone = s.dataset.tone!;
      break;
    }
  }
  if (root.dataset.navTone !== tone) root.dataset.navTone = tone;
}

let ticking = false;
addEventListener(
  'scroll',
  () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      update();
      ticking = false;
    });
  },
  { passive: true },
);
addEventListener('resize', update);
update();
