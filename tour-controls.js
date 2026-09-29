(() => {
  const tour = document.querySelector('.tour-embed');
  if (!tour) return;
  const desktop = matchMedia('(hover: hover) and (pointer: fine)');
  // Only cancel the host page's Up Arrow action on hover.
  // Never focus the cross-origin iframe or lock page scrolling on hover.
  document.addEventListener('keydown', event => {
    if (!desktop.matches || !tour.matches(':hover') || event.key !== 'ArrowUp') return;
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    const target = event.target;
    if (target instanceof Element && target.closest('input, textarea, select, [contenteditable]:not([contenteditable="false"])')) return;
    event.preventDefault();
  });
})();
