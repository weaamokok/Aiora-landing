// The language menu is a native popover: the browser gives it light-dismiss,
// Escape, and top-layer stacking for free. Engines without popover support
// would otherwise leave the globe button inert, so wire a plain toggle there.
//
// (The footer lists every language as ordinary links too, so this is the second
// of two routes to the same place — but a button that does nothing still reads
// as broken.)

const button = document.querySelector<HTMLButtonElement>('[popovertarget="lang-menu"]');
const menu = document.getElementById('lang-menu');

if (button && menu && typeof (menu as HTMLElement & { showPopover?: unknown }).showPopover !== 'function') {
  menu.classList.add('lang-menu--fallback');
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', 'lang-menu');

  const close = () => {
    menu.classList.remove('is-open');
    button.setAttribute('aria-expanded', 'false');
  };

  button.addEventListener('click', (e) => {
    e.preventDefault();
    const open = menu.classList.toggle('is-open');
    button.setAttribute('aria-expanded', String(open));
  });

  // Light dismiss and Escape, the two things the native popover would do.
  addEventListener('pointerdown', (e) => {
    const t = e.target as Node;
    if (!menu.contains(t) && !button.contains(t)) close();
  });
  addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close();
  });
}
