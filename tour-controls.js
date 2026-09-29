(() => {
  const root = document.documentElement;
  const tour = document.querySelector('.tour-embed');
  const desktop = matchMedia('(hover: hover) and (pointer: fine)');
  let hovered = false;
  const unlock = () => {
    hovered = false;
    root.classList.remove('tour-keyboard-active');
  };
  tour.addEventListener('pointerenter', () => {
    if (!desktop.matches) return;
    hovered = true;
    root.classList.add('tour-keyboard-active');
    tour.querySelector('iframe')?.focus({ preventScroll: true });
  });
  tour.addEventListener('pointerleave', () => {
    unlock();
    if (tour.contains(document.activeElement)) document.activeElement.blur();
  });
  // Tab navigation must also allow a keyboard user to leave the tour.
  document.addEventListener('focusin', event => {
    if (!tour.contains(event.target)) unlock();
  });
  document.addEventListener('keydown', event => {
    if (hovered && ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      event.preventDefault();
    }
  });
  desktop.addEventListener('change', unlock);
})();
