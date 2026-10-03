// "Keep it. Plan it. Or let it go." — scroll-driven sorting.
//
// The HTML already shows the sorted end state (every note inside its bin), so
// without JS or with reduced motion the section is complete and readable. This
// script only *lifts* the notes back into a loose pile and lets scrolling file
// them away one by one. It never hijacks the wheel: the section is a tall track
// with a sticky stage, and progress is just where you are in the track.
//
// Motion notes, because "scroll-linked" and "smooth" fight each other:
//
//  * Position follows a **damped** copy of scroll progress, not the raw value.
//    Wheel and trackpad deltas arrive in chunks, and mapping them straight onto
//    a transform makes notes step from one position to the next. The damping is
//    frame-rate independent, so it feels the same at 60 and 120Hz.
//  * Each note eases **in and out** (smoothstep). An ease-out alone starts at
//    full speed, which is the jerk you feel at the top of every window.
//  * A note in flight **arcs, grows and lifts its shadow**, then settles. Two
//    points joined by a straight line read as sliding; this reads as thrown.
//  * Windows **overlap**, so there is usually more than one note in the air and
//    the section flows instead of ticking over one item at a time.

const section = document.querySelector<HTMLElement>('[data-sort]');
const reduce = matchMedia('(prefers-reduced-motion: reduce)');

if (section && !reduce.matches) init(section);

function init(section: HTMLElement) {
  const track = section.querySelector<HTMLElement>('.sort-track')!;
  const stage = section.querySelector<HTMLElement>('[data-stage]')!;
  const notes = [...stage.querySelectorAll<HTMLElement>('[data-item]')];
  const steps = [...section.querySelectorAll<HTMLElement>('[data-step]')];
  section.dataset.live = '';

  // Where each note starts, measured against where it rests.
  let offsets = new Map<HTMLElement, { dx: number; dy: number; r: number }>();

  function measure() {
    const s = stage.getBoundingClientRect();
    offsets = new Map();
    for (const n of notes) {
      const prev = n.style.transform;
      n.style.transform = 'none';
      const r = n.getBoundingClientRect();
      n.style.transform = prev;
      const px = parseFloat(n.style.getPropertyValue('--px')) / 100;
      const py = parseFloat(n.style.getPropertyValue('--py')) / 100;
      const rot = parseFloat(n.style.getPropertyValue('--pr'));
      const isRelease = n.classList.contains('note--release');
      offsets.set(n, {
        dx: isRelease ? 0 : s.left + px * s.width - r.left,
        dy: isRelease ? 0 : s.top + py * s.height - r.top,
        r: rot,
      });
    }
  }

  const clamp01 = (n: number) => Math.min(1, Math.max(0, n));
  /** Smoothstep: zero velocity at both ends, so nothing starts or stops abruptly. */
  const ease = (t: number) => t * t * (3 - 2 * t);

  // Windows of track progress. START and the tail leave a beat of stillness at
  // each end — the pile, then everything filed.
  const START = 0.08;
  const SPAN = 0.26; // one note's flight
  const STAGGER = 0.14; // < SPAN, so flights overlap
  const ARC = 30; // px of lift at the top of the arc

  /** How hard a thrown note leans: peaks mid-flight, gone by the time it lands. */
  const inFlight = (e: number) => Math.sin(Math.PI * e);

  function progress() {
    const rect = track.getBoundingClientRect();
    const total = rect.height - innerHeight;
    return clamp01(-rect.top / (total || 1));
  }

  function paint(p: number) {
    for (const n of notes) {
      const i = Number(n.dataset.item);
      const local = clamp01((p - START - i * STAGGER) / SPAN);
      const e = ease(local);
      const o = offsets.get(n);
      if (!o) continue;

      if (n.classList.contains('note--release')) {
        // Held in the pile, then it lifts, blurs and turns into a sparkle.
        const inPile = p < START + i * STAGGER;
        n.style.opacity = String(inPile ? 1 : 1 - e);
        n.style.transform = `translate3d(0, ${-e * 44}px, 0) scale(${1 - e * 0.25})`;
        n.style.filter = e > 0.001 ? `blur(${e * 6}px)` : '';
        const spark = n.querySelector<HTMLElement>('.release-spark');
        if (spark) {
          spark.style.opacity = String(inFlight(local));
          spark.style.transform = `scale(${0.6 + e * 0.8}) rotate(${e * 45}deg)`;
        }
        const label = n.querySelector<HTMLElement>('.release-label');
        if (label) label.style.opacity = local > 0 ? '1' : '0';
        continue;
      }

      const k = 1 - e;
      const lift = inFlight(e);
      n.style.transform =
        `translate3d(${o.dx * k}px, ${o.dy * k - lift * ARC}px, 0)` +
        ` rotate(${o.r * k}deg) scale(${1 + lift * 0.05})`;
      // Drives the shadow in CSS, so elevation rises and falls with the arc.
      n.style.setProperty('--lift', lift.toFixed(3));
      n.style.zIndex = lift > 0.01 ? '3' : '';
    }

    // Steps: four captions for five notes — the last covers keep + release.
    const stepFor = (i: number) => Math.min(i, steps.length - 1);
    let active = -1;
    for (const n of notes) {
      const i = Number(n.dataset.item);
      if (p >= START + i * STAGGER - 0.02) active = stepFor(i);
    }
    steps.forEach((s, i) => {
      s.classList.toggle('is-active', i === Math.max(active, 0));
      s.classList.toggle('is-done', i < active);
    });
  }

  // ─── Damped follow ────────────────────────────────────────────────────
  // `shown` chases `target` instead of jumping to it. TAU is the time constant:
  // higher is smoother but laggier; 85ms keeps the notes glued to the scroll
  // while absorbing the chunkiness of a wheel.
  const TAU = 85;
  let target = progress();
  let shown = target;
  let raf = 0;
  let last = 0;

  function frame(now: number) {
    const dt = last ? Math.min(now - last, 64) : 16;
    last = now;
    const gap = target - shown;
    if (Math.abs(gap) < 0.0002) {
      shown = target;
      paint(shown);
      raf = 0;
      last = 0;
      return;
    }
    shown += gap * (1 - Math.exp(-dt / TAU));
    paint(shown);
    raf = requestAnimationFrame(frame);
  }

  function onScroll() {
    target = progress();
    // No snapping, even for a big jump. Teleporting `shown` to catch up is a
    // visible tear mid-flight, and it fires on a hard flick, not just on anchor
    // links; the damping closes any gap in about a third of a second, which
    // reads as the notes hurrying after you.
    if (!raf) raf = requestAnimationFrame(frame);
  }

  function reset() {
    measure();
    target = progress();
    shown = target;
    paint(shown);
  }

  reset();
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', reset);
  document.fonts?.ready.then(reset);
  reduce.addEventListener('change', () => location.reload());
}
