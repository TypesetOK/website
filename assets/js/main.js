/**
 * TypesetOK (TOK) — Main Website Engine
 * High performance, zero bloat, WCAG 2.2 AA compliant.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll Progress Bar
  const progressBar = document.getElementById('scrollProgressBar');
  if (progressBar) {
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
          progressBar.style.width = `${scrollPercent}%`;
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // 2. Active Section Highlighting in Header Nav
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.toggle('active', href === `#${id}`);
          });
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach(sec => observer.observe(sec));
  }

  // 3. Mobile Navigation Drawer Toggle
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileDrawer = document.getElementById('mobileNavDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileDrawer) {
    const setDrawerOpen = (isOpen) => {
      mobileDrawer.classList.toggle('open', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileToggle.setAttribute('aria-label', window.tokT ? window.tokT(isOpen ? 'menu_close' : 'menu_open') : (isOpen ? 'Close Menu' : 'Open Menu'));
    };

    mobileToggle.addEventListener('click', () => {
      setDrawerOpen(!mobileDrawer.classList.contains('open'));
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => setDrawerOpen(false));
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
        setDrawerOpen(false);
        mobileToggle.focus();
      }
    });
  }

  // 4. Floating Download Button Glide (Scroll Observer)
  const floatingDownload = document.getElementById('floatingDownloadWidget');
  const heroDownloadCard = document.getElementById('heroDownloadCard');

  // Shown only once the hero download card has scrolled away above the viewport: on
  // phones the card starts below the fold, and anchor jumps skip past it entirely, so a
  // position check on scroll is used rather than an IntersectionObserver.
  if (floatingDownload) {
    let pending = false;
    const update = () => {
      pending = false;
      const scrolledPast = heroDownloadCard
        ? heroDownloadCard.getBoundingClientRect().bottom < 0
        : window.scrollY > 350;
      floatingDownload.classList.toggle('active', scrolledPast);
    };
    window.addEventListener('scroll', () => {
      if (!pending) {
        pending = true;
        window.requestAnimationFrame(update);
      }
    }, { passive: true });
    update();
  }

  // 5. Release links: the static hrefs point at the releases page; when the
  // GitHub API answers they are upgraded to direct asset downloads.
  const RELEASES_API = 'https://api.github.com/repos/TypesetOK/typesetok/releases?per_page=15';
  const RELEASES_CACHE_KEY = 'tok_releases_v1';
  const RELEASES_CACHE_MS = 30 * 60 * 1000;
  const GITHUB_DOWNLOAD_PREFIX = 'https://github.com/TypesetOK/typesetok/releases/download/';

  async function loadReleases() {
    try {
      const cached = JSON.parse(sessionStorage.getItem(RELEASES_CACHE_KEY) || 'null');
      if (cached && Date.now() - cached.at < RELEASES_CACHE_MS) return cached.releases;
    } catch (e) { /* storage unavailable */ }
    const res = await fetch(RELEASES_API, { headers: { 'Accept': 'application/vnd.github+json' } });
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data)) return null;
    const releases = data
      .filter(r => r && !r.draft && !r.prerelease && Array.isArray(r.assets))
      .map(r => ({
        tag: String(r.tag_name || ''),
        assets: r.assets.map(a => ({ name: String(a.name || '').toLowerCase(), url: String(a.browser_download_url || '') }))
      }));
    try {
      sessionStorage.setItem(RELEASES_CACHE_KEY, JSON.stringify({ at: Date.now(), releases }));
    } catch (e) { /* storage unavailable */ }
    return releases;
  }

  // Only trust URLs that point at this project's own release downloads.
  function findAsset(releases, test) {
    for (const r of releases) {
      const asset = r.assets.find(a => test(a.name) && a.url.startsWith(GITHUB_DOWNLOAD_PREFIX));
      if (asset) return asset.url;
    }
    return null;
  }

  function setHref(selector, url) {
    if (!url) return;
    document.querySelectorAll(selector).forEach(a => { a.href = url; });
  }

  async function applyLatestRelease() {
    let releases;
    try {
      releases = await loadReleases();
    } catch (e) {
      return; // offline or rate-limited: the static links already work
    }
    if (!releases || !releases.length) return;

    const latest = releases[0];
    if (/^v?\d+(\.\d+)*$/.test(latest.tag)) {
      document.querySelectorAll('.release-version-tag').forEach(el => { el.textContent = latest.tag; });
      document.querySelectorAll('.floating-widget-title').forEach(el => { el.textContent = `TypesetOK ${latest.tag}`; });
    }

    const inLatest = [latest];
    setHref('.download-link-portable', findAsset(inLatest, n => n.includes('windows') && n.includes('desktop') && n.endsWith('.zip')));
    setHref('.download-link-installer', findAsset(inLatest, n => n.endsWith('setup.exe') || n.endsWith('.msi')));
    setHref('.download-link-cli', findAsset(inLatest, n => n.includes('cli') && n.includes('windows') && n.endsWith('.zip')));
    // Linux/macOS CLIs are not built for every release: use the newest one that has them.
    setHref('.download-link-cli-linux', findAsset(releases, n => n.includes('cli') && n.includes('linux')));
    setHref('.download-link-cli-macos', findAsset(releases, n => n.includes('cli') && n.includes('macos')));
  }

  applyLatestRelease();

  // 5b. Scroll Reveal Observer (CSS hides .reveal-on-scroll only under .js-reveal)
  const reveals = document.querySelectorAll('.reveal-on-scroll');
  document.documentElement.classList.add('js-reveal');
  if (reveals.length && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    reveals.forEach(el => revealObserver.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('revealed'));
  }

  // 6. Modals Management (Architecture & Source Guide)
  const modalBackdrop = document.getElementById('modalBackdrop');
  const sourceModal = document.getElementById('sourceModal');
  const archModal = document.getElementById('archModal');
  let modalOpener = null;
  let activeModal = null;

  function openModal(modal) {
    if (!modalBackdrop || !modal) return;
    modalOpener = document.activeElement;
    activeModal = modal;
    modalBackdrop.classList.add('open');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    const closeBtn = modal.querySelector('.modal-close-btn');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('open');
    if (sourceModal) {
      sourceModal.classList.remove('open');
      sourceModal.setAttribute('aria-hidden', 'true');
    }
    if (archModal) {
      archModal.classList.remove('open');
      archModal.setAttribute('aria-hidden', 'true');
    }
    document.body.style.overflow = '';
    activeModal = null;
    if (modalOpener && typeof modalOpener.focus === 'function') modalOpener.focus();
    modalOpener = null;
  }

  // Keep Tab inside the open dialog (aria-modal="true").
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab' || !activeModal) return;
    const focusable = [...activeModal.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')]
      .filter(el => el.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });

  document.querySelectorAll('[data-open-modal="source"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(sourceModal);
    });
  });

  document.querySelectorAll('[data-open-modal="architecture"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(archModal);
    });
  });

  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', closeModal);
  });

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeModal);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('open')) {
      closeModal();
    }
  });

});

