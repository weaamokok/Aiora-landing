// A real countdown in the focus section: 25:00 ticking down in real time while
// the section is on screen, with the stretch and water cues counting to their
// own moments. It pauses off-screen, and with reduced motion it simply shows
// a still moment of a session in progress.

const section = document.querySelector<HTMLElement>('[data-focus]');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

if (section) init(section);

function init(section: HTMLElement) {
  const TOTAL = 25 * 60;
  const STRETCH_EVERY = 5 * 60;
  const WATER_EVERY = 10 * 60;

  const ring = section.querySelector<SVGCircleElement>('[data-ring]')!;
  const C = Number(ring.dataset.circumference);
  const ringTime = section.querySelector<HTMLElement>('[data-ring-time]')!;
  const liveTime = section.querySelector<HTMLElement>('[data-live-time]')!;
  const liveBar = section.querySelector<HTMLElement>('[data-live-bar]')!;
  const stretch = section.querySelector<HTMLElement>('[data-cue="stretch"]')!;
  const water = section.querySelector<HTMLElement>('[data-cue="water"]')!;

  const mmss = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  // Start a little way in, so the ring already reads as "in progress".
  let elapsed = reduce ? 6 * 60 + 18 : 2 * 60 + 41;
  let timer = 0;

  function paint() {
    const left = Math.max(0, TOTAL - elapsed);
    ringTime.textContent = mmss(left);
    liveTime.textContent = mmss(left);
    ring.style.strokeDashoffset = String(C * (elapsed / TOTAL));
    liveBar.style.width = `${(elapsed / TOTAL) * 100}%`;
    stretch.textContent = mmss(STRETCH_EVERY - (elapsed % STRETCH_EVERY));
    water.textContent = mmss(WATER_EVERY - (elapsed % WATER_EVERY));
    if (left === 0) elapsed = 0;
  }

  paint();
  if (reduce) return;

  const io = new IntersectionObserver(([entry]) => {
    clearInterval(timer);
    if (entry.isIntersecting) {
      timer = window.setInterval(() => {
        elapsed += 1;
        paint();
      }, 1000);
    }
  });
  io.observe(section);
}
