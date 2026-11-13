// A real countdown in the focus section: 25:00 ticking down in real time while
// the section is on screen, with the stretch and water cues counting to their
// own moments. The session's goals tick off one at a time underneath, the way
// the app's goal line does: a tick holds for a moment, then the next goal fades
// in, and finishing them all says "All done" while the timer keeps running.
// It pauses off-screen, and with reduced motion it simply shows a still moment
// of a session in progress.

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

  const goalLine = section.querySelector<HTMLElement>('[data-goal]')!;
  const goals: string[] = JSON.parse(goalLine.dataset.goals ?? '[]');
  const goalText = goalLine.querySelector<HTMLElement>('[data-goal-text]')!;
  const goalTitle = goalLine.querySelector<HTMLElement>('[data-goal-title]')!;
  const goalProgress = goalLine.querySelector<HTMLElement>('[data-goal-progress]')!;
  const progressOf = (n: number) =>
    (goalLine.dataset.progress ?? '').replace('{{current}}', String(n)).replace('{{total}}', String(goals.length));

  // Beats (seconds) per goal: open, then ticked and held, then the next one.
  const OPEN = 5;
  const HELD = 2;
  const ALL_DONE = 5;
  const PER_GOAL = OPEN + HELD;
  const CYCLE = goals.length * PER_GOAL + ALL_DONE;
  let shown = '';

  function paintGoal(beat: number) {
    const b = beat % CYCLE;
    const index = Math.floor(b / PER_GOAL);
    const allDone = index >= goals.length;
    const done = allDone || b % PER_GOAL >= OPEN;
    const title = allDone ? goalLine.dataset.allDone ?? '' : goals[index];
    const progress = allDone ? '' : progressOf(index + 1);

    goalLine.toggleAttribute('data-done', done);
    if (title === shown) return;
    const first = shown === '';
    shown = title;
    const swap = () => {
      goalTitle.textContent = title;
      goalProgress.textContent = progress;
      goalText.classList.remove('is-swapping');
    };
    if (first || reduce) return swap();
    goalText.classList.add('is-swapping');
    window.setTimeout(swap, 250);
  }

  const mmss = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  // Start a little way in, so the ring already reads as "in progress".
  let elapsed = reduce ? 6 * 60 + 18 : 2 * 60 + 41;
  let timer = 0;
  // With reduced motion: the first goal done, the second one open.
  let beat = reduce ? PER_GOAL : 0;

  function paint() {
    const left = Math.max(0, TOTAL - elapsed);
    ringTime.textContent = mmss(left);
    liveTime.textContent = mmss(left);
    ring.style.strokeDashoffset = String(C * (elapsed / TOTAL));
    liveBar.style.width = `${(elapsed / TOTAL) * 100}%`;
    stretch.textContent = mmss(STRETCH_EVERY - (elapsed % STRETCH_EVERY));
    water.textContent = mmss(WATER_EVERY - (elapsed % WATER_EVERY));
    if (left === 0) elapsed = 0;
    if (goals.length) paintGoal(beat);
  }

  paint();
  if (reduce) return;

  const io = new IntersectionObserver(([entry]) => {
    clearInterval(timer);
    if (entry.isIntersecting) {
      timer = window.setInterval(() => {
        elapsed += 1;
        beat += 1;
        paint();
      }, 1000);
    }
  });
  io.observe(section);
}
