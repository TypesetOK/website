/**
 * TypesetOK (TOK) — Universal Accessibility Engine (WCAG 2.2 AA/AAA)
 * Handles font scaling, high contrast, readable font, cursor, link highlights, and state persistence.
 */

document.addEventListener('DOMContentLoaded', () => {
  const triggerBtn = document.getElementById('a11yTriggerBtn');
  const drawer = document.getElementById('a11yDrawer');
  const closeBtn = document.getElementById('a11yCloseBtn');
  const resetBtn = document.getElementById('a11yResetBtn');
  const root = document.documentElement;

  if (!triggerBtn || !drawer) return;

  // Toggle drawer open/close
  triggerBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.toggle('open');
    triggerBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    if (isOpen) {
      drawer.focus();
    }
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
      triggerBtn.setAttribute('aria-expanded', 'false');
      triggerBtn.focus();
    });
  }

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      drawer.classList.remove('open');
      triggerBtn.setAttribute('aria-expanded', 'false');
      triggerBtn.focus();
    }
  });

  // State Management
  let a11yState = {
    fontScale: 0, // 0, 1, 2, 3
    highContrast: false,
    readableFont: false,
    highlightLinks: false,
    highlightHeadings: false,
    bigCursor: false,
    reducedMotion: false,
    lineSpacing: false,
    letterSpacing: false,
    monochrome: false
  };

  try {
    const saved = localStorage.getItem('tok_a11y_state');
    if (saved) {
      a11yState = Object.assign(a11yState, JSON.parse(saved));
    }
  } catch (err) {
    // Ignore localStorage parse errors
  }

  function applyA11yState() {
    // Font Scale
    if (a11yState.fontScale > 0) {
      root.setAttribute('data-font-scale', String(a11yState.fontScale));
    } else {
      root.removeAttribute('data-font-scale');
    }

    // High Contrast
    if (a11yState.highContrast) {
      root.setAttribute('data-high-contrast', 'true');
    } else {
      root.removeAttribute('data-high-contrast');
    }

    // Readable Font
    if (a11yState.readableFont) {
      root.setAttribute('data-readable-font', 'true');
    } else {
      root.removeAttribute('data-readable-font');
    }

    // Highlight Links
    if (a11yState.highlightLinks) {
      root.setAttribute('data-highlight-links', 'true');
    } else {
      root.removeAttribute('data-highlight-links');
    }

    // Highlight Headings
    if (a11yState.highlightHeadings) {
      root.setAttribute('data-highlight-headings', 'true');
    } else {
      root.removeAttribute('data-highlight-headings');
    }

    // Big Cursor
    if (a11yState.bigCursor) {
      root.setAttribute('data-big-cursor', 'true');
    } else {
      root.removeAttribute('data-big-cursor');
    }

    // Reduced Motion
    if (a11yState.reducedMotion) {
      root.setAttribute('data-reduced-motion', 'true');
    } else {
      root.removeAttribute('data-reduced-motion');
    }

    // Line Spacing
    if (a11yState.lineSpacing) {
      root.setAttribute('data-line-spacing', 'wide');
    } else {
      root.removeAttribute('data-line-spacing');
    }

    // Letter Spacing
    if (a11yState.letterSpacing) {
      root.setAttribute('data-letter-spacing', 'wide');
    } else {
      root.removeAttribute('data-letter-spacing');
    }

    // Monochrome
    if (a11yState.monochrome) {
      root.setAttribute('data-monochrome', 'true');
    } else {
      root.removeAttribute('data-monochrome');
    }

    // Update active button indicators in the drawer
    updateButtonStates();

    // Persist to localStorage
    try {
      localStorage.setItem('tok_a11y_state', JSON.stringify(a11yState));
    } catch (e) {}
  }

  function updateButtonStates() {
    const btnMap = {
      'btnA11yContrast': a11yState.highContrast,
      'btnA11yReadableFont': a11yState.readableFont,
      'btnA11yLinks': a11yState.highlightLinks,
      'btnA11yHeadings': a11yState.highlightHeadings,
      'btnA11yCursor': a11yState.bigCursor,
      'btnA11yMotion': a11yState.reducedMotion,
      'btnA11ySpacing': a11yState.lineSpacing,
      'btnA11yLetters': a11yState.letterSpacing,
      'btnA11yMonochrome': a11yState.monochrome
    };

    for (const [id, active] of Object.entries(btnMap)) {
      const el = document.getElementById(id);
      if (el) {
        el.classList.toggle('active', !!active);
        el.setAttribute('aria-pressed', active ? 'true' : 'false');
      }
    }
  }

  // Button Listeners
  const bindToggle = (id, prop) => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('click', () => {
        a11yState[prop] = !a11yState[prop];
        applyA11yState();
      });
    }
  };

  bindToggle('btnA11yContrast', 'highContrast');
  bindToggle('btnA11yReadableFont', 'readableFont');
  bindToggle('btnA11yLinks', 'highlightLinks');
  bindToggle('btnA11yHeadings', 'highlightHeadings');
  bindToggle('btnA11yCursor', 'bigCursor');
  bindToggle('btnA11yMotion', 'reducedMotion');
  bindToggle('btnA11ySpacing', 'lineSpacing');
  bindToggle('btnA11yLetters', 'letterSpacing');
  bindToggle('btnA11yMonochrome', 'monochrome');

  // Font Scaling Buttons
  const fontInc = document.getElementById('btnA11yFontInc');
  if (fontInc) {
    fontInc.addEventListener('click', () => {
      a11yState.fontScale = Math.min(3, a11yState.fontScale + 1);
      applyA11yState();
    });
  }

  const fontDec = document.getElementById('btnA11yFontDec');
  if (fontDec) {
    fontDec.addEventListener('click', () => {
      a11yState.fontScale = Math.max(0, a11yState.fontScale - 1);
      applyA11yState();
    });
  }

  // Reset All Button
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      a11yState = {
        fontScale: 0,
        highContrast: false,
        readableFont: false,
        highlightLinks: false,
        highlightHeadings: false,
        bigCursor: false,
        reducedMotion: false,
        lineSpacing: false,
        letterSpacing: false,
        monochrome: false
      };
      applyA11yState();
    });
  }

  // Theme Engine (Supports: Light, Dark, System — Default for Typesetters: Light/System)
  const themeToggle = document.getElementById('toggleThemeBtn');
  const themePopover = document.getElementById('themeMenuPopover');
  const a11yThemeToggle = document.getElementById('btnA11yTheme');
  const systemMedia = window.matchMedia('(prefers-color-scheme: dark)');

  const ICONS = {
    light: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    dark: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    system: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>'
  };

  function applyThemeMode(mode) {
    let effectiveTheme = mode;
    if (mode === 'system') {
      effectiveTheme = systemMedia.matches ? 'dark' : 'light';
    }

    root.setAttribute('data-theme', effectiveTheme);
    root.setAttribute('data-theme-setting', mode);
    try { localStorage.setItem('tok_theme', mode); } catch (e) { /* storage unavailable */ }

    if (themeToggle) {
      themeToggle.innerHTML = ICONS[mode] || ICONS.light;
      const labelMap = {
        light: window.tokT ? window.tokT('theme_label_light') : 'ערכת נושא: מצב יום (בהיר)',
        dark: window.tokT ? window.tokT('theme_label_dark') : 'ערכת נושא: מצב לילה (כהה)',
        system: window.tokT ? window.tokT('theme_label_system') : 'ערכת נושא: לפי המערכת (אוטומטי)'
      };
      themeToggle.setAttribute('aria-label', labelMap[mode] || 'ערכת נושא');
      themeToggle.setAttribute('title', labelMap[mode] || 'ערכת נושא');
    }

    if (themePopover) {
      themePopover.querySelectorAll('.theme-menu-item').forEach(btn => {
        const isCurrent = btn.getAttribute('data-theme-opt') === mode;
        btn.classList.toggle('active', isCurrent);
        btn.setAttribute('aria-checked', isCurrent ? 'true' : 'false');
      });
    }
  }

  // Handle system color scheme change in real time
  function savedTheme() {
    try { return localStorage.getItem('tok_theme') || 'system'; } catch (e) { return 'system'; }
  }

  systemMedia.addEventListener('change', () => {
    const saved = savedTheme();
    if (saved === 'system') {
      applyThemeMode('system');
    }
  });

  // Toggle dropdown on header button click
  if (themeToggle && themePopover) {
    themeToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = themePopover.classList.toggle('open');
      themeToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    themePopover.querySelectorAll('.theme-menu-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedMode = btn.getAttribute('data-theme-opt') || 'system';
        applyThemeMode(selectedMode);
        themePopover.classList.remove('open');
        themeToggle.setAttribute('aria-expanded', 'false');
      });
    });

    document.addEventListener('click', (e) => {
      if (!themePopover.contains(e.target) && e.target !== themeToggle) {
        themePopover.classList.remove('open');
        themeToggle.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && themePopover.classList.contains('open')) {
        themePopover.classList.remove('open');
        themeToggle.setAttribute('aria-expanded', 'false');
        themeToggle.focus();
      }
    });
  }

  // Accessibility panel theme button (cycles: light -> dark -> system)
  if (a11yThemeToggle) {
    a11yThemeToggle.addEventListener('click', () => {
      const current = savedTheme();
      const order = ['light', 'dark', 'system'];
      const next = order[(order.indexOf(current) + 1) % order.length];
      applyThemeMode(next);
    });
  }

  // Initial theme initialization: default to 'system' (or 'light' for typesetters)
  const initialTheme = savedTheme();
  applyThemeMode(initialTheme);

  // Initial application of accessibility state
  applyA11yState();
});
