// Loaded blocking in <head> so the saved/system theme applies before first paint
// (no light flash for dark-mode users). a11y.js takes over after DOMContentLoaded.
(function () {
  var mode = 'system';
  try {
    mode = localStorage.getItem('tok_theme') || 'system';
  } catch (e) { /* storage unavailable */ }
  var dark = mode === 'dark' ||
    (mode === 'system' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
})();
