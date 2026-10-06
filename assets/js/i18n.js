/**
 * TypesetOK (TOK) — Multilingual Translation Engine
 * Supports: Hebrew (he), US English (en), Spanish (es), French (fr).
 *
 * Hebrew is authored directly in index.html and is the no-JS default; the
 * engine snapshots it and uses it for 'he' and as the fallback for missing keys.
 * The 'he' table below therefore only holds strings that do not exist as
 * Hebrew in the markup (runtime labels and English-only aria-labels).
 *
 * Markup usage:
 *   data-i18n="key"        -> textContent
 *   data-i18n-html="key"   -> innerHTML (constant strings with minimal markup only)
 *   data-i18n-attr="aria-label:key1;title:key2"
 *
 * Hebrew sample text being demonstrated (comparison sample, Talmud specimen,
 * Unicode code-point demo, gematria examples) intentionally stays Hebrew.
 */

const TOK_TRANSLATIONS = {
  he: {
    menu_open: "פתיחת תפריט הניווט",
    menu_close: "סגירת תפריט הניווט",
    theme_menu: "בחירת ערכת נושא",
    theme_label_light: "ערכת נושא: מצב יום (בהיר)",
    theme_label_dark: "ערכת נושא: מצב לילה (כהה)",
    theme_label_system: "ערכת נושא: לפי המערכת (אוטומטי)",
    aria_reading_progress: "התקדמות הקריאה",
    aria_home: "TypesetOK – דף הבית",
    aria_main_nav: "ניווט ראשי",
    aria_lang_selector: "בחירת שפה",
    aria_github_repo: "מאגר הקוד ב-GitHub",
    aria_mobile_nav: "ניווט לנייד",
    aria_open_github: "פתיחת TypesetOK ב-GitHub",
    aria_cmyk_bars: "פסי צבע CMYK",
    aria_comp_slider: "סליידר השוואה",
    modal_close: "סגירה"
  },

  en: {
    // Document
    meta_title: "TypesetOK — Professional Open-Source Book Typesetting Software for Hebrew",
    meta_description: "A modern open-source desktop publishing (DTP) system for advanced Hebrew typography, sacred texts (Talmud, Mikraot Gedolot, responsa) and very large documents. Rust core, Knuth-Plass line breaking, native PDF/X-1a output.",
    skip_link: "Skip to main content",

    // Accessible names
    aria_reading_progress: "Reading progress",
    aria_home: "TypesetOK home",
    aria_main_nav: "Main navigation",
    aria_lang_selector: "Language",
    aria_github_repo: "GitHub repository",
    aria_mobile_nav: "Mobile navigation",
    aria_open_github: "Open TypesetOK on GitHub",
    aria_download_hub: "TypesetOK download center",
    aria_dl_portable: "Download TypesetOK directly, no installation required",
    aria_dl_installer: "Download the Windows Setup installer",
    aria_cmyk_bars: "CMYK color bars",
    aria_comparison: "Typesetting comparison",
    aria_comp_slider: "Comparison slider",
    modal_close: "Close",
    menu_open: "Open navigation menu",
    menu_close: "Close navigation menu",

    // Theme
    theme_label: "Theme: light / dark / system",
    theme_menu: "Choose theme",
    theme_light: "Light mode",
    theme_dark: "Dark mode",
    theme_system: "Match system (auto)",
    theme_label_light: "Theme: light mode",
    theme_label_dark: "Theme: dark mode",
    theme_label_system: "Theme: match system (auto)",

    // Navigation
    nav_home: "Home",
    nav_comparison: "Comparison",
    nav_matrix: "Word vs InDesign",
    nav_quotes: "Typesetter Voices",
    nav_features: "Features",
    nav_story: "Architecture",
    nav_engineering: "Benchmarks",
    btn_download: "Download",
    btn_github: "GitHub",
    btn_architecture: "Tech Spec",
    btn_source_guide: "Dev Guide",
    mnav_download: "Download for Windows",

    // Hero
    hero_badge: "Professional open-source desktop typesetting • Free, no lock-in",
    hero_title_1: "Real book typesetting.",
    hero_title_2: "Free, open and press-ready.",
    hero_desc: "<strong>TypesetOK</strong> is built specifically for typesetters, book designers and publishers: native handling of Hebrew script, accurate niqqud (vowel points) and te'amim (cantillation marks) without corruption, Talmud and Mikraot Gedolot pages with multiple commentaries, and full compliance with print standards.",
    hero_point_1: "Smooth work on huge documents of hundreds or thousands of pages, with no display freezes",
    hero_point_2: "Balanced justification with extending letters to prevent “rivers” of white space",
    hero_point_3: "Press-ready output: PDF/X-1a with pure 100% K black, crop marks and 3 mm bleed",
    hero_cta_download: "Download Software",
    hero_cta_github: "Source code on GitHub",
    hero_cta_arch: "Full architecture spec",
    metric_tests: "174 / 174",
    metric_tests_label: "Rust core tests passing",
    metric_clippy: "0 warnings",
    metric_clippy_label: "Clean code under Clippy",
    metric_standards: "SI 6100 & ISO 15930",
    metric_standards_label: "Full print and Unicode standards compliance",

    // Download Center
    dl_card_badge: "Official release",
    dl_card_os: "Windows 10 / 11 (64-bit)",
    dl_btn_portable_title: "Direct download (no installation)",
    dl_btn_portable_sub: "Portable ZIP — extract and run",
    dl_btn_installer_title: "Download with installer (Windows Setup)",
    dl_btn_installer_sub: "Standard desktop installation",
    dl_cli_label: "More options:",
    dl_cli_windows: "Windows CLI",
    dl_cli_linux: "Linux CLI",
    dl_cli_macos: "macOS CLI",
    dl_source_link: "Source code on GitHub ↗",
    dl_note_oss: "✓ 100% open source",
    dl_note_free: "✓ Free, no sign-up",
    dl_note_official: "✓ Official file from GitHub Releases",
    dl_floating_btn: "Download TypesetOK",

    // Storytelling
    story_pretitle: "Chapter 1: Architectural pillars",
    story_title: "Three guiding engineering principles",
    story_subtitle: "How the TypesetOK layout engine was designed to solve the long-standing challenges of Hebrew printing.",
    scene1_num: "Principle 01",
    scene1_title: "Strict normalization per Israeli Standard SI 6100",
    scene1_desc: "Word processors and Western layout systems frequently scramble the Unicode order of Hebrew letters and vowel points. TypesetOK enforces a fully deterministic Unicode order and runs a deterministic gematria engine that avoids taboo combinations and divine names (15 → ט״ו, 16 → ט״ז, 270 → ע״ר).",
    story1_point_1: "Canonical Unicode order: letter → shin/sin dot → dagesh → niqqud → meteg → te'amim",
    story1_point_2: "O(1) fractional indexing with no need to renumber the document",
    scene2_num: "Principle 02",
    scene2_title: "Multi-flow constraint solver (Talmud Solver)",
    scene2_desc: "Talmud and Mikraot Gedolot pages are the summit of typographic difficulty: the Gemara in the center, Rashi on one side and Tosafot on the other, where every change in one paragraph affects how the other two commentaries flow. The system specification defines a dedicated mathematical constraint solver that keeps them continuously in sync.",
    story2_point_1: "Synchronization of parallel text flows on the same page and across spreads",
    story2_point_2: "Total-fit Knuth-Plass line breaking to prevent widows, orphans and loose lines",
    scene3_num: "Principle 03",
    scene3_title: "Native pre-press: ISO 15930 (PDF/X-1a)",
    scene3_desc: "No reliance on browser print engines limited to sRGB. The Rust engine is designed to produce true print files directly: 100% K black (DeviceCMYK), vector registration and crop marks, 3 mm BleedBox and TrimBox, and Fogra 39 profiles.",
    story3_point_1: "Strict /ToUnicode tables: vocalized text that can be copied and searched in the PDF",
    story3_point_2: "Full spot color (Spot/Pantone) support straight from the settings file",
    story3_proof_text: "Print-safe document — pure CMYK plate separation",

    // Comparison
    comp_pretitle: "Chapter 2: A hands-on comparison for typesetters",
    comp_title: "Word's line breaking vs. TypesetOK precision",
    comp_subtitle: "Drag the slider or use the buttons to compare how an ordinary word processor sets text with TypesetOK's balanced text block.",
    comp_preset_before: "Word (before)",
    comp_preset_half: "Split (50%)",
    comp_preset_after: "TypesetOK (after)",
    comp_before_label: "Traditional word processor (Word)",
    comp_before_note: "In Word: stretched lines, conspicuous white gaps, no extending letters and uneven page color.",
    comp_after_label: "TypesetOK spec (Knuth-Plass + extending letters)",
    comp_after_note: "In TypesetOK: a balanced typographic block, line breaks optimized across the whole paragraph, extending letters and full baseline-grid alignment.",

    // Matrix
    matrix_pretitle: "Chapter 3: A realistic, practical comparison",
    matrix_title: "Word, InDesign and TypesetOK — head to head",
    matrix_subtitle: "A factual, precise comparison between the tools on the market and the dedicated answer TypesetOK was designed to provide for the typesetting world.",
    matrix_aria: "Practical comparison of typesetting tools",
    matrix_th_challenge: "Key typesetting challenge",
    matrix_th_word: "Microsoft Word",
    matrix_th_indesign: "Adobe InDesign",
    m1_title: "Huge documents and books (500+ pages)",
    m1_sub: "Stability, responsiveness and no cascading reflow",
    m1_word_badge: "Critical difficulty",
    m1_word: "Changing one sentence on page 10 reflows the entire book; heavy documents become too slow for day-to-day work.",
    m1_id_badge: "Partial solution (Book)",
    m1_id: "Supports splitting into files (Book), but files of hundreds of pages become heavy and slow, and the interface stutters during long sessions.",
    m1_tok_badge: "Excellent, built in",
    m1_tok: "Virtualized Rust core with a minimal memory footprint. Only 3 active pages are rendered — smooth work on 1,000+ page documents.",
    m2_title: "Niqqud, te'amim and Hebrew accuracy",
    m2_sub: "Unicode order, mark positioning and standard geresh/gershayim",
    m2_word_badge: "Frequent corruption",
    m2_word: "Vowel points jump outside the letters, geresh and gershayim flip into Latin quotation marks, and Unicode handling is inconsistent.",
    m2_id_badge: "Requires the world-ready engine",
    m2_id: "You must enable the World-Ready Composer; with many Hebrew fonts the vowel points can still be misplaced without tedious manual adjustments.",
    m2_tok_badge: "Full SI 6100 compliance",
    m2_tok: "Built-in canonical normalization per the Israeli standard. Deterministic Unicode order: letter, dagesh, niqqud and te'amim exactly in place.",
    m3_title: "Sacred texts and parallel texts",
    m3_sub: "Talmud pages, Mikraot Gedolot and parallel commentaries",
    m3_word_badge: "Impossible",
    m3_word: "No support for multiple synchronized parallel columns on one page. You cannot set the classic Talmud page layout (tzurat hadaf) or a Chumash with commentaries.",
    m3_id_badge: "Requires expensive plug-ins",
    m3_id: "No built-in support; requires complex third-party plug-ins costing thousands, which tend to break with Adobe version updates.",
    m3_tok_badge: "Built-in multi-flow engine",
    m3_tok: "A dedicated mathematical constraint solver (Talmud Solver) that keeps the Gemara and the surrounding commentaries continuously in sync, with no accidental page breaks.",
    m4_title: "Justification and spacing",
    m4_sub: "Balancing the text block and preventing “rivers” of white space",
    m4_word_badge: "Word-space stretching only",
    m4_word: "Crude stretching of word spaces creates gaping white “rivers” that hurt both readability and the look of the book.",
    m4_id_badge: "Local/weighted line breaking",
    m4_id: "A high-quality engine, but limited with Hebrew extending letters; horizontal font scaling can distort the letterforms.",
    m4_tok_badge: "Knuth-Plass + extending letters",
    m4_tok: "Global optimization across the whole paragraph combined with authentic extending letters, keeping word spacing natural.",
    m5_title: "Professional pre-press export",
    m5_sub: "PDF/X, 100% K black, bleed and crop marks",
    m5_word_badge: "Office output (RGB)",
    m5_word: "Plain PDF export with no color separation, no true print black, and no crop marks or bleed.",
    m5_id_badge: "Full print support",
    m5_id: "Highly advanced print export, but it requires complex manual export settings and deep technical knowledge of color management.",
    m5_tok_badge: "One-click native PDF/X-1a",
    m5_tok: "Direct ISO 15930 output from the Rust core: 100% K black (DeviceCMYK), crop marks, 3 mm bleed and /ToUnicode tables.",

    // Quotes
    quotes_pretitle: "Chapter 4: Voices from the field",
    quotes_title: "What are typesetters saying in professional forums?",
    quotes_subtitle: "Real challenges and everyday frustrations that typesetters and designers face with Word and InDesign — and how TypesetOK was built to solve them.",
    quote_solution_label: "The TypesetOK solution:",
    q1_source: "Typesetters' forum (Prog)",
    q1_tag: "Pain point: layout collapse in Word",
    q1_text: "“The client only asked to add one sentence on page 40... and the entire layout of a 350-page book in Word simply fell apart. The footnotes ran off, the headings jumped to the next page, and I had to go through it page by page as if I were starting from scratch.”",
    q1_solution: "An independent page model with section locking (Page Pinning). A local change in a paragraph is resolved locally and does not bring down the rest of the book.",
    q2_source: "Torah forum (typesetting sacred texts)",
    q2_tag: "Pain point: multiple commentaries in InDesign",
    q2_text: "“Setting a Talmud page or a Chumash with Rashi and Tosafot in InDesign is an ordeal. There is no built-in tool for multiple parallel texts that flow together. You have to buy plug-ins costing thousands of shekels, and every Adobe version update breaks them and holds up a publication for months.”",
    q2_solution: "A multi-flow solver (Talmud Solver) built into the core — continuous synchronization between the main text and the commentaries on the same page and across spreads, with no third-party plug-in required.",
    q3_tag: "Pain point: niqqud and “rivers” in Hebrew",
    q3_text: "“Most general publishing suites treat RTL and Hebrew as a secondary patch over Latin engines. Complex vowel points (nikud) misalign, and justified alignment produces hideous white rivers because systems don't support traditional letter expansion.”",
    q3_solution: "Designed from the ground up for Hebrew: SI 6100 enforced for full normalization, combined with the Knuth-Plass algorithm and traditional letter extension, exactly as in the classic editions.",
    q4_source: "Association of printers and pre-press houses",
    q4_tag: "Pain point: files rejected by the print shop",
    q4_text: "“Typesetters send PDFs exported from word processors and are surprised when the printer rejects them: the black text is built from four inks instead of clean black (100% K), there is no 3 mm bleed for trimming, and vocalized text turns into gibberish when copied or searched.”",
    q4_solution: "Direct export to ISO 15930 (PDF/X-1a): pure K black in DeviceCMYK separation, vector crop marks, BleedBox and /ToUnicode tables for flawless search.",

    // Features
    features_pretitle: "Chapter 5: Core capabilities",
    features_title: "The six pillars of the architecture",
    features_subtitle: "Built for engineers, publishers and professional typesetters who will not compromise on performance or on the fine rules of typography.",
    f1_title: "Independent Rust core & virtualization for huge documents",
    f1_desc: "Older monolithic systems freeze completely on documents over 100 pages. TypesetOK strictly separates the Rust layout and memory core from the UI and keeps only three active pages in the DOM at any moment — ensuring stable performance on 1,000+ page documents.",
    f2_title: "SI 6100 and deterministic gematria",
    f2_desc: "Strict Unicode normalization per the Israeli standard, with automatic handling of standard geresh and gershayim and the traditional taboo substitutions (15 → ט״ו, 16 → ט״ז, 270 → ע״ר).",
    f3_title: "Three-tier Hebrew justification (Knuth-Plass)",
    f3_desc: "A principled justification hierarchy: controlled word-space stretching (Tier 1), traditional extending letters (Tier 2), and subtle micro-tracking of ±2% em (Tier 3).",
    f4_title: "Multi-flow constraint solver for sacred texts",
    f4_desc: "A dedicated mathematical algorithm for laying out Talmud and Mikraot Gedolot pages. Perfect synchronization between the Gemara and the commentaries across pages, with no faulty overflow.",
    f5_title: "Native ISO 15930 pre-press",
    f5_desc: "Direct PDF/X-1a and PDF/X-4 export with 100% K DeviceCMYK, Fogra 39 profile, spot colors and crop marks. /ToUnicode tables keep vocalized text copyable.",
    f6_title: "Crash resilience: ACID WAL & .tok",
    f6_desc: "An internal database with write-ahead logging for continuous background autosave without data loss, alongside an official package format (.tok) based on a protected atomic ZIP archive.",

    // Engineering
    eng_pretitle: "Chapter 6: Engineering transparency and verified data",
    eng_title: "Real test results from the repository",
    eng_subtitle: "No empty marketing talk — every figure below was verified in the TypesetOK Rust repository.",
    eng_th_metric: "Engineering metric / test",
    eng_th_target: "Architectural target",
    eng_th_result: "Actual result (verified)",
    eng_th_status: "Status",
    eng_r1_name: "Workspace unit tests",
    eng_r1_target: "100% pass across all 7 crates",
    eng_r1_result: "174 / 174 tests passing",
    eng_r2_name: "Code quality checks (Clippy)",
    eng_r2_target: "0 warnings with the <code>-D warnings</code> flag",
    eng_r2_result: "0 warnings (clean build)",
    eng_r3_name: "Consistent formatting (rustfmt)",
    eng_r3_target: "Fully passes <code>cargo fmt --check</code>",
    eng_r3_result: "100% compliant with the style rules",
    eng_r4_name: "Bit-for-bit determinism",
    eng_r4_target: "Identical SHA-256 across consecutive runs",
    eng_r5_name: "Document stress test",
    eng_r5_target: "1,000 consecutive vocalized pages",
    eng_r5_result: "1,001 pages / 49,001 lines in 3.1 s",
    dev_pretitle: "Chapter 7: Development, community and open source",
    dev_title: "A free, open project for the typesetting community",
    dev_desc: "TypesetOK was born from a real need in Hebrew printing and Torah publishing for a modern, reliable, fast typesetting tool free of outdated commercial lock-in. All research, specifications and core code are published openly on GitHub.",
    dev_btn_github: "Repository on GitHub",
    dev_btn_issues: "Suggestions & bug reports",

    // CTA
    cta_title: "Ready to take your typesetting to another level? Download TypesetOK",
    cta_desc: "The software is open and free to use. Download the portable version directly, with no installation, or explore the source code and technical specification.",
    cta_btn_download: "Direct download (portable ZIP)",
    cta_btn_github: "View on GitHub",
    cta_btn_spec: "Read the tech spec",

    // Footer
    footer_desc: "An open-source desktop publishing system. Modern research and development for advanced Hebrew typography, sacred texts and very large documents.",
    footer_nav_title: "Navigation",
    footer_nav_download: "Download",
    footer_nav_arch: "Architecture & principles",
    footer_nav_features: "Core features",
    footer_std_title: "Standards",
    footer_std_si: "Israeli Standard SI 6100",
    footer_std_iso: "ISO 15930 (PDF/X-1a)",
    footer_std_kp: "Knuth-Plass algorithm",
    footer_arch_report: "Architecture report",
    footer_comm_title: "Community & code",
    footer_github: "GitHub Repository",
    footer_releases: "Releases",
    footer_issues: "Issues & Research",
    footer_source: "Build from source",

    // A11y Panel
    a11y_open: "Open accessibility menu",
    a11y_menu_title: "Accessibility menu",
    a11y_close: "Close accessibility menu",
    a11y_panel_title: "Accessibility menu",
    a11y_font_inc: "Larger text",
    a11y_font_dec: "Smaller text",
    a11y_contrast: "High contrast",
    a11y_theme: "Display mode",
    a11y_readable_font: "Simple readable font",
    a11y_links: "Highlight links",
    a11y_headings: "Highlight headings",
    a11y_big_cursor: "Large cursor",
    a11y_motion: "Stop motion",
    a11y_spacing: "Wide line spacing",
    a11y_letters: "Letter spacing",
    a11y_monochrome: "Grayscale",
    a11y_reset: "Reset accessibility settings",

    // Floating widget
    float_sub: "Portable version, no installation",
    float_title: "Download now",
    float_btn: "Free download",

    // Modals
    source_modal_title: "Running the tests from source (Rust engine)",
    source_modal_intro: "<strong>TypesetOK</strong> is in the core engine development stage. Developers and researchers are welcome to clone the repository and run the official test suite:",
    source_modal_req: "<strong>Requirements:</strong> Rust 1.85+ with the official Cargo toolchain.",
    arch_modal_title: "Engineering architecture report: TypesetOK (TOK)",
    arch_principles: "Core architectural principles",
    arch_p1: "1. <strong>Full independence of the document model (TDM):</strong> the document model is completely decoupled from the browser's DOM, HTML tags and CSS rules. All semantic structures are written in pure Rust.",
    arch_p2: "2. <strong>The pre-pagination principle:</strong> the UI engine is not allowed to guess page breaks or column splits. The Rust core performs all Knuth-Plass computations and hands over pages that are already paginated.",
    arch_p3: "3. <strong>Dual PDF pipeline:</strong> a controlled, fast on-screen display layer alongside a fully independent native pre-press pipeline in Rust that produces standards-compliant PDF/X-1a with 100% K black and a 3 mm BleedBox.",
    arch_p4: "4. <strong>Virtual caret layer:</strong> works around the built-in <code>contenteditable</code> failures of browsers using a transparent Canvas layer and a virtual caret.",
    arch_p5: "5. <strong>Built-in support for huge documents:</strong> an incremental, convergence-based pagination algorithm (Convergence Pagination) with full virtualization of only 3 active pages.",
    arch_compare: "<strong>Compared with existing systems:</strong><br>InDesign (a heavy, slow RTL patch) | Affinity Publisher (0% Hebrew support) | Tag (an old monolithic program from the 1990s) | Typst (code/markup only, no visual desktop editing)."
  },

  es: {
    // Document
    meta_title: "TypesetOK — Software profesional de composición de libros en hebreo, de código abierto",
    meta_description: "Sistema moderno de autoedición (DTP) de código abierto para tipografía hebrea avanzada, textos sagrados (Talmud, Mikraot Gedolot, responsa) y documentos de gran tamaño. Núcleo en Rust, algoritmo Knuth-Plass y salida PDF/X-1a nativa.",
    skip_link: "Saltar al contenido principal",

    // Accessible names
    aria_reading_progress: "Progreso de lectura",
    aria_home: "Inicio de TypesetOK",
    aria_main_nav: "Navegación principal",
    aria_lang_selector: "Idioma",
    aria_github_repo: "Repositorio en GitHub",
    aria_mobile_nav: "Navegación móvil",
    aria_open_github: "Abrir TypesetOK en GitHub",
    aria_download_hub: "Centro de descargas de TypesetOK",
    aria_dl_portable: "Descarga directa de TypesetOK, sin instalación",
    aria_dl_installer: "Descargar el instalador para Windows (Setup)",
    aria_cmyk_bars: "Barras de color CMYK",
    aria_comparison: "Comparativa de composición",
    aria_comp_slider: "Control deslizante de comparación",
    modal_close: "Cerrar",
    menu_open: "Abrir menú de navegación",
    menu_close: "Cerrar menú de navegación",

    // Theme
    theme_label: "Tema: claro / oscuro / sistema",
    theme_menu: "Elegir tema",
    theme_light: "Modo claro",
    theme_dark: "Modo oscuro",
    theme_system: "Según el sistema (automático)",
    theme_label_light: "Tema: modo claro",
    theme_label_dark: "Tema: modo oscuro",
    theme_label_system: "Tema: según el sistema (automático)",

    // Navigation
    nav_home: "Inicio",
    nav_comparison: "Comparativa",
    nav_matrix: "Word vs InDesign",
    nav_quotes: "Voces del oficio",
    nav_features: "Capacidades",
    nav_story: "Arquitectura",
    nav_engineering: "Pruebas",
    btn_download: "Descargar",
    btn_github: "GitHub",
    btn_architecture: "Especificación",
    btn_source_guide: "Guía de desarrollo",
    mnav_download: "Descargar para Windows",

    // Hero
    hero_badge: "Autoedición profesional de código abierto • Gratuita y sin ataduras",
    hero_title_1: "Composición de libros de verdad.",
    hero_title_2: "Libre, abierta y lista para imprenta.",
    hero_desc: "<strong>TypesetOK</strong> está diseñada específicamente para maquetadores, diseñadores de libros y editoriales: tratamiento nativo de la escritura hebrea, niqqud (puntos vocálicos) y te'amim (signos de cantilación) exactos y sin alteraciones, páginas de Talmud y Mikraot Gedolot con múltiples comentarios, y pleno cumplimiento de los estándares de impresión.",
    hero_point_1: "Trabajo fluido en documentos de cientos o miles de páginas, sin bloqueos de la pantalla",
    hero_point_2: "Justificación equilibrada con letras extensibles para evitar «ríos» de espacio en blanco",
    hero_point_3: "Salida lista para imprenta: PDF/X-1a con negro puro 100% K, marcas de corte y sangrado de 3 mm",
    hero_cta_download: "Descargar el programa",
    hero_cta_github: "Código fuente en GitHub",
    hero_cta_arch: "Especificación de arquitectura completa",
    metric_tests: "174 / 174",
    metric_tests_label: "Pruebas del núcleo en Rust superadas",
    metric_clippy: "0 advertencias",
    metric_clippy_label: "Código limpio según Clippy",
    metric_standards: "SI 6100 & ISO 15930",
    metric_standards_label: "Cumplimiento total de los estándares de impresión y Unicode",

    // Download Center
    dl_card_badge: "Versión oficial",
    dl_card_os: "Windows 10 / 11 (64 bits)",
    dl_btn_portable_title: "Descarga directa (sin instalación)",
    dl_btn_portable_sub: "ZIP portátil — descomprimir y ejecutar",
    dl_btn_installer_title: "Descargar con instalador (Windows Setup)",
    dl_btn_installer_sub: "Instalación de escritorio estándar",
    dl_cli_label: "Más opciones:",
    dl_cli_windows: "CLI para Windows",
    dl_cli_linux: "CLI para Linux",
    dl_cli_macos: "CLI para macOS",
    dl_source_link: "Código fuente en GitHub ↗",
    dl_note_oss: "✓ 100% código abierto",
    dl_note_free: "✓ Gratis y sin registro",
    dl_note_official: "✓ Archivo oficial de GitHub Releases",
    dl_floating_btn: "Descargar TypesetOK",

    // Storytelling
    story_pretitle: "Capítulo 1: Pilares de la arquitectura",
    story_title: "Tres principios de ingeniería",
    story_subtitle: "Cómo se diseñó el motor de composición de TypesetOK para resolver los retos históricos de la imprenta hebrea.",
    scene1_num: "Principio 01",
    scene1_title: "Normalización estricta según la norma israelí SI 6100",
    scene1_desc: "Los procesadores de texto y los sistemas de maquetación occidentales alteran con frecuencia el orden Unicode de las letras y los puntos vocálicos hebreos. TypesetOK impone un orden Unicode totalmente determinista y aplica un motor de guematría determinista que evita combinaciones tabú y nombres divinos (15 → ט״ו, 16 → ט״ז, 270 → ע״ר).",
    story1_point_1: "Orden Unicode canónico: letra → punto de shin/sin → daguesh → niqqud → méteg → te'amim",
    story1_point_2: "Indexación fraccionaria O(1) sin necesidad de renumerar el documento",
    scene2_num: "Principio 02",
    scene2_title: "Solucionador de restricciones multiflujo (Talmud Solver)",
    scene2_desc: "Las páginas del Talmud y de Mikraot Gedolot son la cumbre de la dificultad tipográfica: la Guemará en el centro, Rashi a un lado y Tosafot al otro, de modo que cada cambio en un párrafo afecta al flujo de los otros dos comentarios. La especificación del sistema define un solucionador matemático de restricciones dedicado que los mantiene sincronizados de forma continua.",
    story2_point_1: "Sincronización de flujos de texto paralelos en la misma página y en páginas enfrentadas",
    story2_point_2: "Algoritmo Knuth-Plass de párrafo completo para evitar viudas, huérfanas y líneas flojas",
    scene3_num: "Principio 03",
    scene3_title: "Preimpresión nativa: ISO 15930 (PDF/X-1a)",
    scene3_desc: "Sin depender de los motores de impresión del navegador, limitados a sRGB. El motor en Rust está diseñado para generar directamente auténticos archivos de imprenta: negro 100% K (DeviceCMYK), marcas de registro y de corte vectoriales, BleedBox y TrimBox de 3 mm, y perfiles Fogra 39.",
    story3_point_1: "Tablas /ToUnicode rigurosas: texto vocalizado que se puede copiar y buscar en el PDF",
    story3_point_2: "Soporte completo de tintas planas (Spot/Pantone) directamente desde el archivo de configuración",
    story3_proof_text: "Documento seguro para imprenta — separación de planchas CMYK pura",

    // Comparison
    comp_pretitle: "Capítulo 2: Comparativa práctica para maquetadores",
    comp_title: "Cortes de línea en Word frente a la precisión de TypesetOK",
    comp_subtitle: "Mueva el control deslizante o use los botones para comparar cómo compone un procesador de textos habitual frente al bloque de texto equilibrado de TypesetOK.",
    comp_preset_before: "Word (antes)",
    comp_preset_half: "Mitad y mitad (50%)",
    comp_preset_after: "TypesetOK (después)",
    comp_before_label: "Procesador de textos tradicional (Word)",
    comp_before_note: "En Word: líneas estiradas, huecos blancos llamativos, sin letras extensibles y un gris tipográfico irregular.",
    comp_after_label: "Especificación TypesetOK (Knuth-Plass + letras extensibles)",
    comp_after_note: "En TypesetOK: bloque tipográfico equilibrado, cortes de línea optimizados para todo el párrafo, letras extensibles y alineación completa a la retícula de líneas base.",

    // Matrix
    matrix_pretitle: "Capítulo 3: Una comparativa práctica y realista",
    matrix_title: "Word, InDesign y TypesetOK, cara a cara",
    matrix_subtitle: "Una comparación objetiva y precisa entre las herramientas del mercado y la respuesta específica que TypesetOK se ha diseñado para ofrecer al mundo de la composición.",
    matrix_aria: "Comparativa práctica de herramientas de maquetación",
    matrix_th_challenge: "Reto clave de composición",
    matrix_th_word: "Microsoft Word",
    matrix_th_indesign: "Adobe InDesign",
    m1_title: "Documentos enormes y libros (500+ páginas)",
    m1_sub: "Estabilidad, capacidad de respuesta y sin reflujo en cascada",
    m1_word_badge: "Dificultad crítica",
    m1_word: "Cambiar una frase en la página 10 desplaza todo el libro; los documentos pesados se vuelven demasiado lentos para el trabajo diario.",
    m1_id_badge: "Solución parcial (Libro)",
    m1_id: "Permite dividir en archivos (Libro), pero los archivos de cientos de páginas se vuelven pesados y lentos, y la interfaz se entrecorta en sesiones largas.",
    m1_tok_badge: "Excelente e integrado",
    m1_tok: "Núcleo virtualizado en Rust con un consumo de memoria mínimo. Solo se renderizan 3 páginas activas: trabajo fluido en documentos de más de 1.000 páginas.",
    m2_title: "Niqqud, te'amim y precisión del hebreo",
    m2_sub: "Orden Unicode, posición de los signos y geresh/guershayim normalizados",
    m2_word_badge: "Alteraciones frecuentes",
    m2_word: "Los puntos vocálicos se salen de las letras, el geresh y el guershayim se convierten en comillas latinas y el tratamiento de Unicode es incoherente.",
    m2_id_badge: "Requiere el compositor internacional",
    m2_id: "Hay que activar el World-Ready Composer; con muchas fuentes hebreas los puntos vocálicos pueden descolocarse sin tediosos ajustes manuales.",
    m2_tok_badge: "Cumplimiento total de SI 6100",
    m2_tok: "Normalización canónica integrada según la norma israelí. Orden Unicode determinista: letra, daguesh, niqqud y te'amim exactamente en su lugar.",
    m3_title: "Textos sagrados y textos paralelos",
    m3_sub: "Páginas del Talmud, Mikraot Gedolot y comentarios paralelos",
    m3_word_badge: "Imposible",
    m3_word: "No admite varias columnas paralelas sincronizadas en una misma página. No es posible componer la página clásica del Talmud (tzurat hadaf) ni un Jumash con comentarios.",
    m3_id_badge: "Requiere plug-ins costosos",
    m3_id: "Sin soporte integrado; exige complejos complementos de terceros que cuestan miles y que suelen romperse con las actualizaciones de Adobe.",
    m3_tok_badge: "Motor multiflujo integrado",
    m3_tok: "Un solucionador matemático de restricciones dedicado (Talmud Solver) que mantiene la Guemará y los comentarios que la rodean sincronizados de forma continua, sin saltos de página accidentales.",
    m4_title: "Justificación y espaciado",
    m4_sub: "Equilibrio del bloque de texto y prevención de «ríos» blancos",
    m4_word_badge: "Solo estira los espacios",
    m4_word: "El estiramiento burdo de los espacios entre palabras crea enormes «ríos» blancos que perjudican la legibilidad y la estética del libro.",
    m4_id_badge: "Corte local/ponderado",
    m4_id: "Un motor de calidad, pero limitado con las letras extensibles hebreas; el escalado horizontal de la fuente puede deformar las letras.",
    m4_tok_badge: "Knuth-Plass + letras extensibles",
    m4_tok: "Optimización global de todo el párrafo combinada con auténticas letras extensibles para mantener un espaciado natural entre palabras.",
    m5_title: "Exportación profesional de preimpresión",
    m5_sub: "PDF/X, negro 100% K, sangrado y marcas de corte",
    m5_word_badge: "Salida ofimática (RGB)",
    m5_word: "Exportación PDF simple sin separación de colores, sin auténtico negro de imprenta y sin marcas de corte ni sangrado.",
    m5_id_badge: "Soporte completo de imprenta",
    m5_id: "Capacidades de exportación muy avanzadas, pero requieren ajustes manuales complejos y amplios conocimientos técnicos de gestión del color.",
    m5_tok_badge: "PDF/X-1a nativo con un clic",
    m5_tok: "Salida ISO 15930 directa desde el núcleo en Rust: negro 100% K (DeviceCMYK), marcas de corte, sangrado de 3 mm y tablas /ToUnicode.",

    // Quotes
    quotes_pretitle: "Capítulo 4: Voces del oficio",
    quotes_title: "¿Qué dicen los maquetadores en los foros profesionales?",
    quotes_subtitle: "Retos reales y frustraciones cotidianas de maquetadores y diseñadores con Word e InDesign, y cómo TypesetOK se creó para resolverlos.",
    quote_solution_label: "La solución de TypesetOK:",
    q1_source: "Foro de maquetadores (Prog)",
    q1_tag: "Problema: la maquetación se desmorona en Word",
    q1_text: "«El cliente solo pidió añadir una frase en la página 40... y toda la maquetación de un libro de 350 páginas en Word se desmoronó por completo. Las notas al pie se escaparon, los títulos saltaron a la página siguiente y tuve que revisarlo página por página como si empezara de cero.»",
    q1_solution: "Un modelo de páginas independiente con bloqueo de secciones (Page Pinning). Un cambio local en un párrafo se resuelve localmente y no desmorona el resto del libro.",
    q2_source: "Foro de Torá (composición de textos sagrados)",
    q2_tag: "Problema: múltiples comentarios en InDesign",
    q2_text: "«Componer una página del Talmud o un Jumash con Rashi y Tosafot en InDesign es un calvario. No hay ninguna herramienta integrada para varios textos paralelos que fluyan juntos. Hay que comprar plug-ins que cuestan miles de séqueles, y cada actualización de Adobe los inutiliza y retrasa una publicación durante meses.»",
    q2_solution: "Un solucionador multiflujo (Talmud Solver) integrado en el núcleo: sincronización continua entre el texto principal y los comentarios en la misma página y en páginas enfrentadas, sin necesidad de ningún complemento externo.",
    q3_tag: "Problema: niqqud y «ríos» en hebreo",
    q3_text: "«La mayoría de las suites de edición generalistas tratan el RTL y el hebreo como un parche secundario sobre motores latinos. Los puntos vocálicos complejos (niqqud) se desalinean y la justificación produce horribles ríos blancos porque los sistemas no admiten la extensión tradicional de letras.»",
    q3_solution: "Diseñada desde cero para el hebreo: aplicación de la norma SI 6100 para una normalización completa, combinada con el algoritmo Knuth-Plass y la extensión tradicional de letras, tal como en las ediciones clásicas.",
    q4_source: "Asociación de imprentas y empresas de preimpresión",
    q4_tag: "Problema: archivos rechazados por la imprenta",
    q4_text: "«Los maquetadores envían PDF exportados desde procesadores de texto y se sorprenden cuando la imprenta los rechaza: el texto negro está formado por cuatro tintas en lugar de un negro limpio (100% K), no hay sangrado de 3 mm para el corte y el texto vocalizado se convierte en un galimatías al copiarlo o buscarlo.»",
    q4_solution: "Exportación directa a ISO 15930 (PDF/X-1a): negro K puro en separación DeviceCMYK, marcas de corte vectoriales, BleedBox y tablas /ToUnicode para búsquedas impecables.",

    // Features
    features_pretitle: "Capítulo 5: Capacidades principales",
    features_title: "Los seis pilares de la arquitectura",
    features_subtitle: "Creado para ingenieros, editoriales y maquetadores profesionales que no están dispuestos a renunciar al rendimiento ni al rigor de las normas tipográficas.",
    f1_title: "Núcleo independiente en Rust y virtualización para documentos enormes",
    f1_desc: "Los sistemas monolíticos antiguos se bloquean por completo con documentos de más de 100 páginas. TypesetOK separa estrictamente el núcleo de composición y memoria en Rust de la interfaz y mantiene solo tres páginas activas en el DOM en cada momento, lo que garantiza un funcionamiento estable en documentos de más de 1.000 páginas.",
    f2_title: "SI 6100 y guematría determinista",
    f2_desc: "Normalización Unicode estricta según la norma israelí, con tratamiento automático del geresh y el guershayim normalizados y de las sustituciones tabú tradicionales (15 → ט״ו, 16 → ט״ז, 270 → ע״ר).",
    f3_title: "Justificación hebrea en tres niveles (Knuth-Plass)",
    f3_desc: "Una jerarquía de justificación rigurosa: estiramiento controlado de los espacios entre palabras (nivel 1), letras extensibles tradicionales (nivel 2) y un sutil microtracking de ±2% em (nivel 3).",
    f4_title: "Solucionador de restricciones multiflujo para textos sagrados",
    f4_desc: "Un algoritmo matemático dedicado a la composición de páginas del Talmud y de Mikraot Gedolot. Sincronización perfecta entre la Guemará y los comentarios a lo largo de las páginas, sin desbordamientos erróneos.",
    f5_title: "Preimpresión nativa ISO 15930",
    f5_desc: "Exportación directa a PDF/X-1a y PDF/X-4 con 100% K DeviceCMYK, perfil Fogra 39, tintas planas y marcas de corte. Tablas /ToUnicode para que el texto vocalizado se pueda copiar.",
    f6_title: "Resistencia a fallos: ACID WAL y .tok",
    f6_desc: "Una base de datos interna con registro de escritura anticipada (write-ahead logging) para un guardado automático continuo en segundo plano sin pérdida de datos, junto con un formato de paquete oficial (.tok) basado en un archivo ZIP atómico protegido.",

    // Engineering
    eng_pretitle: "Capítulo 6: Transparencia técnica y datos verificados",
    eng_title: "Resultados reales de las pruebas del repositorio",
    eng_subtitle: "Sin palabrería de marketing: todos los datos siguientes se han verificado en el repositorio de TypesetOK en Rust.",
    eng_th_metric: "Métrica técnica / prueba",
    eng_th_target: "Objetivo de arquitectura",
    eng_th_result: "Resultado real (verificado)",
    eng_th_status: "Estado",
    eng_r1_name: "Pruebas unitarias del workspace",
    eng_r1_target: "100% superadas en los 7 crates",
    eng_r1_result: "174 / 174 pruebas superadas",
    eng_r2_name: "Control de calidad del código (Clippy)",
    eng_r2_target: "0 advertencias con la opción <code>-D warnings</code>",
    eng_r2_result: "0 advertencias (compilación limpia)",
    eng_r3_name: "Formato uniforme (rustfmt)",
    eng_r3_target: "Supera por completo <code>cargo fmt --check</code>",
    eng_r3_result: "100% conforme con las reglas de estilo",
    eng_r4_name: "Determinismo bit a bit",
    eng_r4_target: "SHA-256 idéntico en ejecuciones consecutivas",
    eng_r5_name: "Prueba de carga de documento (stress test)",
    eng_r5_target: "1.000 páginas vocalizadas seguidas",
    eng_r5_result: "1.001 páginas / 49.001 líneas en 3,1 s",
    dev_pretitle: "Capítulo 7: Desarrollo, comunidad y código abierto",
    dev_title: "Un proyecto libre y abierto para la comunidad de la composición",
    dev_desc: "TypesetOK nació de una necesidad real de la imprenta hebrea y de la edición de literatura rabínica: una herramienta de composición moderna, fiable, rápida y libre de ataduras comerciales obsoletas. Toda la investigación, las especificaciones y el código del núcleo se publican con total transparencia en GitHub.",
    dev_btn_github: "Repositorio en GitHub",
    dev_btn_issues: "Sugerencias e informes de errores",

    // CTA
    cta_title: "¿Listo para llevar su composición a otro nivel? Descargue TypesetOK",
    cta_desc: "El programa es abierto y de uso gratuito. Descargue directamente la versión portátil, sin instalación, o explore el código fuente y la especificación técnica.",
    cta_btn_download: "Descarga directa (ZIP portátil)",
    cta_btn_github: "Ver en GitHub",
    cta_btn_spec: "Leer la especificación técnica",

    // Footer
    footer_desc: "Sistema de autoedición de código abierto. Investigación y desarrollo modernos para tipografía hebrea avanzada, textos sagrados y documentos de gran tamaño.",
    footer_nav_title: "Navegación",
    footer_nav_download: "Descargar",
    footer_nav_arch: "Arquitectura y principios",
    footer_nav_features: "Funciones principales",
    footer_std_title: "Estándares",
    footer_std_si: "Norma israelí SI 6100",
    footer_std_iso: "ISO 15930 (PDF/X-1a)",
    footer_std_kp: "Algoritmo Knuth-Plass",
    footer_arch_report: "Informe de arquitectura",
    footer_comm_title: "Comunidad y código",
    footer_github: "Repositorio en GitHub",
    footer_releases: "Versiones (Releases)",
    footer_issues: "Incidencias e investigación",
    footer_source: "Compilar desde el código fuente",

    // A11y Panel
    a11y_open: "Abrir menú de accesibilidad",
    a11y_menu_title: "Menú de accesibilidad",
    a11y_close: "Cerrar menú de accesibilidad",
    a11y_panel_title: "Menú de accesibilidad",
    a11y_font_inc: "Aumentar texto",
    a11y_font_dec: "Reducir texto",
    a11y_contrast: "Alto contraste",
    a11y_theme: "Modo de visualización",
    a11y_readable_font: "Fuente legible simple",
    a11y_links: "Resaltar enlaces",
    a11y_headings: "Resaltar títulos",
    a11y_big_cursor: "Cursor grande",
    a11y_motion: "Detener animaciones",
    a11y_spacing: "Interlineado amplio",
    a11y_letters: "Espaciado entre letras",
    a11y_monochrome: "Escala de grises",
    a11y_reset: "Restablecer la accesibilidad",

    // Floating widget
    float_sub: "Versión portátil, sin instalación",
    float_title: "Descargar ahora",
    float_btn: "Descarga gratuita",

    // Modals
    source_modal_title: "Ejecutar las pruebas desde el código fuente (motor en Rust)",
    source_modal_intro: "<strong>TypesetOK</strong> se encuentra en la fase de desarrollo del núcleo (Core Engine). Desarrolladores e investigadores están invitados a clonar el repositorio y ejecutar el conjunto oficial de pruebas:",
    source_modal_req: "<strong>Requisitos:</strong> Rust 1.85+ con la herramienta oficial Cargo.",
    arch_modal_title: "Informe técnico de arquitectura: TypesetOK (TOK)",
    arch_principles: "Principios fundamentales de la arquitectura",
    arch_p1: "1. <strong>Independencia total del modelo de documento (TDM):</strong> el modelo de documento está completamente desacoplado del DOM, de las etiquetas HTML y de las reglas CSS del navegador. Todas las estructuras semánticas están escritas en Rust puro.",
    arch_p2: "2. <strong>Principio de prepaginación:</strong> el motor de la interfaz no puede adivinar saltos de página ni repartos de columnas. El núcleo en Rust realiza todos los cálculos de Knuth-Plass y entrega páginas ya paginadas.",
    arch_p3: "3. <strong>Doble canal PDF:</strong> una capa de visualización en pantalla rápida y controlada, junto a un canal de preimpresión nativo en Rust totalmente independiente que genera PDF/X-1a conforme con negro 100% K y BleedBox de 3 mm.",
    arch_p4: "4. <strong>Capa de cursor virtual:</strong> evita los fallos inherentes de <code>contenteditable</code> en los navegadores mediante una capa Canvas transparente y un cursor virtual.",
    arch_p5: "5. <strong>Soporte integrado para documentos enormes:</strong> algoritmo de paginación incremental basado en convergencia (Convergence Pagination) y virtualización completa con solo 3 páginas activas.",
    arch_compare: "<strong>Comparación con los sistemas existentes:</strong><br>InDesign (parche RTL pesado y lento) | Affinity Publisher (0% de soporte para hebreo) | Tag (programa monolítico antiguo de los años 90) | Typst (solo código/markup, sin edición visual de escritorio)."
  },

  fr: {
    // Document
    meta_title: "TypesetOK — Logiciel professionnel open source de composition de livres en hébreu",
    meta_description: "Système moderne de PAO open source pour la typographie hébraïque avancée, les textes sacrés (Talmud, Mikraot Gedolot, responsa) et les très gros documents. Cœur en Rust, algorithme Knuth-Plass, sortie PDF/X-1a native.",
    skip_link: "Aller au contenu principal",

    // Accessible names
    aria_reading_progress: "Progression de la lecture",
    aria_home: "Accueil TypesetOK",
    aria_main_nav: "Navigation principale",
    aria_lang_selector: "Langue",
    aria_github_repo: "Dépôt GitHub",
    aria_mobile_nav: "Navigation mobile",
    aria_open_github: "Ouvrir TypesetOK sur GitHub",
    aria_download_hub: "Centre de téléchargement TypesetOK",
    aria_dl_portable: "Télécharger TypesetOK directement, sans installation",
    aria_dl_installer: "Télécharger l'installateur Windows (Setup)",
    aria_cmyk_bars: "Barres de couleur CMJN",
    aria_comparison: "Comparaison de composition",
    aria_comp_slider: "Curseur de comparaison",
    modal_close: "Fermer",
    menu_open: "Ouvrir le menu de navigation",
    menu_close: "Fermer le menu de navigation",

    // Theme
    theme_label: "Thème : clair / sombre / système",
    theme_menu: "Choisir le thème",
    theme_light: "Mode clair",
    theme_dark: "Mode sombre",
    theme_system: "Selon le système (auto)",
    theme_label_light: "Thème : mode clair",
    theme_label_dark: "Thème : mode sombre",
    theme_label_system: "Thème : selon le système (auto)",

    // Navigation
    nav_home: "Accueil",
    nav_comparison: "Comparaison",
    nav_matrix: "Word vs InDesign",
    nav_quotes: "Paroles de terrain",
    nav_features: "Fonctions",
    nav_story: "Architecture",
    nav_engineering: "Tests",
    btn_download: "Télécharger",
    btn_github: "GitHub",
    btn_architecture: "Spécification",
    btn_source_guide: "Guide développeur",
    mnav_download: "Télécharger pour Windows",

    // Hero
    hero_badge: "PAO professionnelle open source • Gratuite et sans verrouillage",
    hero_title_1: "La vraie composition de livres.",
    hero_title_2: "Libre, ouverte et prête pour l'impression.",
    hero_desc: "<strong>TypesetOK</strong> est conçue spécialement pour les compositeurs, les maquettistes de livres et les éditeurs : prise en charge native de l'écriture hébraïque, niqqud (points-voyelles) et te'amim (signes de cantillation) exacts et sans altération, pages de Talmud et de Mikraot Gedolot à commentaires multiples, et conformité totale aux normes d'impression.",
    hero_point_1: "Travail fluide sur des documents de centaines ou de milliers de pages, sans gel de l'affichage",
    hero_point_2: "Justification équilibrée avec lettres extensibles pour éviter les « lézardes » d'espaces blancs",
    hero_point_3: "Sortie prête pour l'impression : PDF/X-1a avec noir pur 100 % K, traits de coupe et fond perdu de 3 mm",
    hero_cta_download: "Télécharger le logiciel",
    hero_cta_github: "Code source sur GitHub",
    hero_cta_arch: "Spécification d'architecture complète",
    metric_tests: "174 / 174",
    metric_tests_label: "Tests du cœur Rust réussis",
    metric_clippy: "0 avertissement",
    metric_clippy_label: "Code propre selon Clippy",
    metric_standards: "SI 6100 & ISO 15930",
    metric_standards_label: "Conformité totale aux normes d'impression et Unicode",

    // Download Center
    dl_card_badge: "Version officielle",
    dl_card_os: "Windows 10 / 11 (64 bits)",
    dl_btn_portable_title: "Téléchargement direct (sans installation)",
    dl_btn_portable_sub: "ZIP portable — extraire et lancer",
    dl_btn_installer_title: "Télécharger avec installateur (Windows Setup)",
    dl_btn_installer_sub: "Installation bureau classique",
    dl_cli_label: "Autres options :",
    dl_cli_windows: "CLI Windows",
    dl_cli_linux: "CLI Linux",
    dl_cli_macos: "CLI macOS",
    dl_source_link: "Code source sur GitHub ↗",
    dl_note_oss: "✓ 100 % open source",
    dl_note_free: "✓ Gratuit, sans inscription",
    dl_note_official: "✓ Fichier officiel issu de GitHub Releases",
    dl_floating_btn: "Télécharger TypesetOK",

    // Storytelling
    story_pretitle: "Chapitre 1 : Les piliers de l'architecture",
    story_title: "Trois principes d'ingénierie directeurs",
    story_subtitle: "Comment le moteur de composition de TypesetOK a été conçu pour résoudre les défis historiques de l'imprimerie hébraïque.",
    scene1_num: "Principe 01",
    scene1_title: "Normalisation stricte selon la norme israélienne SI 6100",
    scene1_desc: "Les traitements de texte et les logiciels de mise en page occidentaux bouleversent souvent l'ordre Unicode des lettres et des points-voyelles hébreux. TypesetOK impose un ordre Unicode entièrement déterministe et applique un moteur de guématrie déterministe qui évite les combinaisons taboues et les noms divins (15 → ט״ו, 16 → ט״ז, 270 → ע״ר).",
    story1_point_1: "Ordre Unicode canonique : lettre → point de shin/sin → daguesh → niqqud → méteg → te'amim",
    story1_point_2: "Indexation fractionnaire en O(1), sans renumérotation du document",
    scene2_num: "Principe 02",
    scene2_title: "Solveur de contraintes multiflux (Talmud Solver)",
    scene2_desc: "Les pages du Talmud et des Mikraot Gedolot sont le sommet de la difficulté typographique : la Guemara au centre, Rachi d'un côté et les Tossafot de l'autre, chaque modification d'un paragraphe influant sur l'écoulement des deux autres commentaires. La spécification du système définit un solveur de contraintes mathématique dédié qui les maintient synchronisés en continu.",
    story2_point_1: "Synchronisation de flux de texte parallèles sur une même page et sur des doubles pages",
    story2_point_2: "Algorithme Knuth-Plass sur le paragraphe entier contre les veuves, les orphelines et les lignes lâches",
    scene3_num: "Principe 03",
    scene3_title: "Prépresse natif : ISO 15930 (PDF/X-1a)",
    scene3_desc: "Aucune dépendance aux moteurs d'impression des navigateurs, limités au sRGB. Le moteur Rust est conçu pour produire directement de véritables fichiers d'impression : noir 100 % K (DeviceCMYK), croix de repérage et traits de coupe vectoriels, BleedBox et TrimBox de 3 mm, et profils Fogra 39.",
    story3_point_1: "Tables /ToUnicode rigoureuses : texte vocalisé copiable et recherchable dans le PDF",
    story3_point_2: "Prise en charge complète des tons directs (Spot/Pantone) depuis le fichier de configuration",
    story3_proof_text: "Document sécurisé pour l'impression — séparation CMJN pure",

    // Comparison
    comp_pretitle: "Chapitre 2 : Comparaison pratique pour les compositeurs",
    comp_title: "Les coupures de Word face à la précision de TypesetOK",
    comp_subtitle: "Faites glisser le curseur ou utilisez les boutons pour comparer la composition d'un traitement de texte ordinaire avec le bloc de texte équilibré de TypesetOK.",
    comp_preset_before: "Word (avant)",
    comp_preset_half: "Moitié-moitié (50 %)",
    comp_preset_after: "TypesetOK (après)",
    comp_before_label: "Traitement de texte classique (Word)",
    comp_before_note: "Sous Word : lignes étirées, blancs voyants, absence de lettres extensibles et gris typographique irrégulier.",
    comp_after_label: "Spécification TypesetOK (Knuth-Plass + lettres extensibles)",
    comp_after_note: "Sous TypesetOK : bloc typographique équilibré, coupures optimisées sur l'ensemble du paragraphe, lettres extensibles et alignement complet sur la grille de lignes de base.",

    // Matrix
    matrix_pretitle: "Chapitre 3 : Une comparaison pratique et réaliste",
    matrix_title: "Word, InDesign et TypesetOK — face à face",
    matrix_subtitle: "Une comparaison factuelle et précise entre les outils du marché et la réponse dédiée que TypesetOK a été conçue pour apporter au monde de la composition.",
    matrix_aria: "Comparaison pratique des outils de mise en page",
    matrix_th_challenge: "Défi de composition clé",
    matrix_th_word: "Microsoft Word",
    matrix_th_indesign: "Adobe InDesign",
    m1_title: "Très gros documents et livres (500+ pages)",
    m1_sub: "Stabilité, réactivité et pas de recomposition en cascade",
    m1_word_badge: "Difficulté critique",
    m1_word: "Modifier une phrase en page 10 décale tout le livre ; les documents lourds deviennent trop lents pour le travail quotidien.",
    m1_id_badge: "Solution partielle (Livre)",
    m1_id: "Permet de découper en fichiers (Livre), mais les fichiers de centaines de pages deviennent lourds et lents, et l'interface saccade lors de longues sessions.",
    m1_tok_badge: "Excellent, intégré",
    m1_tok: "Cœur Rust virtualisé à l'empreinte mémoire minimale. Seules 3 pages actives sont rendues — travail fluide sur des documents de plus de 1 000 pages.",
    m2_title: "Niqqud, te'amim et exactitude de l'hébreu",
    m2_sub: "Ordre Unicode, position des signes et guéresh/guerchayim normalisés",
    m2_word_badge: "Altérations fréquentes",
    m2_word: "Les points-voyelles sortent des lettres, le guéresh et le guerchayim se transforment en guillemets latins, et le traitement Unicode est incohérent.",
    m2_id_badge: "Exige le compositeur international",
    m2_id: "Il faut activer le World-Ready Composer ; avec de nombreuses polices hébraïques, les points-voyelles peuvent encore se décaler sans de fastidieuses corrections manuelles.",
    m2_tok_badge: "Conformité SI 6100 complète",
    m2_tok: "Normalisation canonique intégrée selon la norme israélienne. Ordre Unicode déterministe : lettre, daguesh, niqqud et te'amim exactement à leur place.",
    m3_title: "Textes sacrés et textes parallèles",
    m3_sub: "Pages du Talmud, Mikraot Gedolot et commentaires parallèles",
    m3_word_badge: "Impossible",
    m3_word: "Aucune prise en charge de plusieurs colonnes parallèles synchronisées sur une même page. Impossible de composer la page classique du Talmud (tzourat hadaf) ou un Houmach avec ses commentaires.",
    m3_id_badge: "Exige des plug-ins coûteux",
    m3_id: "Aucune prise en charge native ; nécessite des extensions tierces complexes coûtant des milliers, qui ont tendance à casser lors des mises à jour d'Adobe.",
    m3_tok_badge: "Moteur multiflux intégré",
    m3_tok: "Un solveur de contraintes mathématique dédié (Talmud Solver) qui synchronise en continu la Guemara et les commentaires qui l'entourent, sans sauts de page intempestifs.",
    m4_title: "Justification et espacement",
    m4_sub: "Équilibre du bloc de texte et prévention des « lézardes » blanches",
    m4_word_badge: "Étirement des espaces uniquement",
    m4_word: "L'étirement grossier des espaces entre les mots crée de larges « lézardes » blanches qui nuisent à la lisibilité et à l'esthétique du livre.",
    m4_id_badge: "Coupure locale/pondérée",
    m4_id: "Un moteur de qualité, mais limité avec les lettres extensibles hébraïques ; la mise à l'échelle horizontale des polices peut déformer les lettres.",
    m4_tok_badge: "Knuth-Plass + lettres extensibles",
    m4_tok: "Optimisation globale sur l'ensemble du paragraphe, combinée à d'authentiques lettres extensibles pour préserver un espacement naturel entre les mots.",
    m5_title: "Export prépresse professionnel",
    m5_sub: "PDF/X, noir 100 % K, fond perdu et traits de coupe",
    m5_word_badge: "Sortie bureautique (RVB)",
    m5_word: "Export PDF simple sans séparation des couleurs, sans vrai noir d'impression, sans traits de coupe ni fond perdu.",
    m5_id_badge: "Prise en charge complète de l'impression",
    m5_id: "Des capacités d'export très avancées, mais qui exigent des réglages manuels complexes et de solides connaissances en gestion de la couleur.",
    m5_tok_badge: "PDF/X-1a natif en un clic",
    m5_tok: "Sortie ISO 15930 directe depuis le cœur Rust : noir 100 % K (DeviceCMYK), traits de coupe, fond perdu de 3 mm et tables /ToUnicode.",

    // Quotes
    quotes_pretitle: "Chapitre 4 : Paroles de terrain",
    quotes_title: "Que disent les compositeurs sur les forums professionnels ?",
    quotes_subtitle: "Les vrais défis et les frustrations quotidiennes des compositeurs et graphistes face à Word et InDesign — et comment TypesetOK a été conçue pour y répondre.",
    quote_solution_label: "La solution TypesetOK :",
    q1_source: "Forum des compositeurs (Prog)",
    q1_tag: "Problème : mise en page qui s'effondre sous Word",
    q1_text: "« Le client demandait simplement d'ajouter une phrase en page 40... et toute la mise en page d'un livre de 350 pages sous Word s'est complètement effondrée. Les notes de bas de page se sont envolées, les titres ont sauté à la page suivante, et j'ai dû tout reprendre page par page comme si je repartais de zéro. »",
    q1_solution: "Un modèle de pages indépendant avec verrouillage de sections (Page Pinning). Une modification locale dans un paragraphe est résolue localement et ne fait pas s'effondrer le reste du livre.",
    q2_source: "Forum de Torah (composition de textes sacrés)",
    q2_tag: "Problème : commentaires multiples sous InDesign",
    q2_text: "« Composer une page de Talmud ou un Houmach avec Rachi et les Tossafot sous InDesign est un calvaire. Il n'existe aucun outil intégré pour plusieurs textes parallèles qui s'écoulent ensemble. On doit acheter des plug-ins à des milliers de shekels, et chaque mise à jour d'Adobe les met hors service et retarde une publication de plusieurs mois. »",
    q2_solution: "Un solveur multiflux (Talmud Solver) intégré au cœur du logiciel — synchronisation continue entre le texte principal et les commentaires sur une même page et sur des doubles pages, sans aucune extension externe.",
    q3_tag: "Problème : niqqud et « lézardes » en hébreu",
    q3_text: "« La plupart des suites de publication généralistes traitent le RTL et l'hébreu comme un correctif secondaire plaqué sur des moteurs latins. Les points-voyelles complexes (niqqud) se désalignent, et la justification produit d'affreuses lézardes blanches parce que les systèmes ne gèrent pas l'extension traditionnelle des lettres. »",
    q3_solution: "Conçue dès l'origine pour l'hébreu : application de la norme SI 6100 pour une normalisation complète, combinée à l'algorithme Knuth-Plass et à l'extension traditionnelle des lettres, exactement comme dans les éditions classiques.",
    q4_source: "Association des imprimeurs et prestataires prépresse",
    q4_tag: "Problème : fichiers refusés par l'imprimeur",
    q4_text: "« Les compositeurs envoient des PDF issus de traitements de texte et s'étonnent que l'imprimeur les refuse : le texte noir est composé de quatre encres au lieu d'un noir pur (100 % K), il n'y a pas de fond perdu de 3 mm pour la coupe, et le texte vocalisé devient du charabia lorsqu'on le copie ou le recherche. »",
    q4_solution: "Export direct vers ISO 15930 (PDF/X-1a) : noir K pur en séparation DeviceCMYK, traits de coupe vectoriels, BleedBox et tables /ToUnicode pour une recherche irréprochable.",

    // Features
    features_pretitle: "Chapitre 5 : Fonctions clés",
    features_title: "Les six piliers de l'architecture",
    features_subtitle: "Conçu pour les ingénieurs, les éditeurs et les compositeurs professionnels qui refusent tout compromis sur les performances comme sur la rigueur typographique.",
    f1_title: "Cœur Rust indépendant et virtualisation des très gros documents",
    f1_desc: "Les anciens systèmes monolithiques se figent complètement au-delà de 100 pages. TypesetOK sépare strictement le cœur de composition et de mémoire en Rust de l'interface, et ne conserve que trois pages actives dans le DOM à tout instant — garantissant un fonctionnement stable sur des documents de plus de 1 000 pages.",
    f2_title: "SI 6100 et guématrie déterministe",
    f2_desc: "Normalisation Unicode stricte selon la norme israélienne, avec gestion automatique du guéresh et du guerchayim normalisés et des substitutions taboues traditionnelles (15 → ט״ו, 16 → ט״ז, 270 → ע״ר).",
    f3_title: "Justification hébraïque à trois niveaux (Knuth-Plass)",
    f3_desc: "Une hiérarchie de justification rigoureuse : étirement contrôlé des espaces entre les mots (niveau 1), lettres extensibles traditionnelles (niveau 2) et un léger micro-approche de ±2 % em (niveau 3).",
    f4_title: "Solveur de contraintes multiflux pour les textes sacrés",
    f4_desc: "Un algorithme mathématique dédié à la mise en page du Talmud et des Mikraot Gedolot. Synchronisation parfaite entre la Guemara et les commentaires d'une page à l'autre, sans débordement erroné.",
    f5_title: "Prépresse natif ISO 15930",
    f5_desc: "Export direct en PDF/X-1a et PDF/X-4 avec 100 % K DeviceCMYK, profil Fogra 39, tons directs et traits de coupe. Tables /ToUnicode pour un texte vocalisé copiable.",
    f6_title: "Résistance aux pannes : ACID WAL et .tok",
    f6_desc: "Une base de données interne avec journalisation anticipée (write-ahead logging) pour un enregistrement automatique continu en arrière-plan sans perte de données, ainsi qu'un format de paquet officiel (.tok) basé sur une archive ZIP atomique protégée.",

    // Engineering
    eng_pretitle: "Chapitre 6 : Transparence technique et données vérifiées",
    eng_title: "Résultats de tests réels dans le dépôt",
    eng_subtitle: "Pas de discours marketing creux — toutes les données ci-dessous ont été vérifiées dans le dépôt Rust de TypesetOK.",
    eng_th_metric: "Indicateur technique / test",
    eng_th_target: "Objectif d'architecture",
    eng_th_result: "Résultat réel (vérifié)",
    eng_th_status: "Statut",
    eng_r1_name: "Tests unitaires du workspace",
    eng_r1_target: "100 % de réussite sur les 7 crates",
    eng_r1_result: "174 / 174 tests réussis",
    eng_r2_name: "Contrôle qualité du code (Clippy)",
    eng_r2_target: "0 avertissement avec l'option <code>-D warnings</code>",
    eng_r2_result: "0 avertissement (build propre)",
    eng_r3_name: "Formatage uniforme (rustfmt)",
    eng_r3_target: "Passe intégralement <code>cargo fmt --check</code>",
    eng_r3_result: "100 % conforme aux règles de style",
    eng_r4_name: "Déterminisme bit à bit",
    eng_r4_target: "SHA-256 identique d'une exécution à l'autre",
    eng_r5_name: "Test de charge (stress test)",
    eng_r5_target: "1 000 pages vocalisées consécutives",
    eng_r5_result: "1 001 pages / 49 001 lignes en 3,1 s",
    dev_pretitle: "Chapitre 7 : Développement, communauté et open source",
    dev_title: "Un projet libre et ouvert pour la communauté de la composition",
    dev_desc: "TypesetOK est né d'un besoin réel de l'imprimerie hébraïque et de l'édition rabbinique : un outil de composition moderne, fiable, rapide et libéré des verrous commerciaux d'un autre âge. Toute la recherche, les spécifications et le code du cœur sont publiés en toute transparence sur GitHub.",
    dev_btn_github: "Dépôt sur GitHub",
    dev_btn_issues: "Suggestions et signalement de bugs",

    // CTA
    cta_title: "Prêt à faire passer votre composition à un autre niveau ? Téléchargez TypesetOK",
    cta_desc: "Le logiciel est ouvert et gratuit. Téléchargez directement la version portable, sans installation, ou explorez le code source et la spécification technique.",
    cta_btn_download: "Téléchargement direct (ZIP portable)",
    cta_btn_github: "Voir sur GitHub",
    cta_btn_spec: "Lire la spécification technique",

    // Footer
    footer_desc: "Système de PAO open source. Recherche et développement modernes pour la typographie hébraïque avancée, les textes sacrés et les très gros documents.",
    footer_nav_title: "Navigation",
    footer_nav_download: "Télécharger",
    footer_nav_arch: "Architecture et principes",
    footer_nav_features: "Fonctions clés",
    footer_std_title: "Normes",
    footer_std_si: "Norme israélienne SI 6100",
    footer_std_iso: "ISO 15930 (PDF/X-1a)",
    footer_std_kp: "Algorithme Knuth-Plass",
    footer_arch_report: "Rapport d'architecture",
    footer_comm_title: "Communauté et code",
    footer_github: "Dépôt GitHub",
    footer_releases: "Versions (Releases)",
    footer_issues: "Tickets et recherche",
    footer_source: "Compiler depuis les sources",

    // A11y Panel
    a11y_open: "Ouvrir le menu d'accessibilité",
    a11y_menu_title: "Menu d'accessibilité",
    a11y_close: "Fermer le menu d'accessibilité",
    a11y_panel_title: "Menu d'accessibilité",
    a11y_font_inc: "Agrandir le texte",
    a11y_font_dec: "Réduire le texte",
    a11y_contrast: "Contraste élevé",
    a11y_theme: "Mode d'affichage",
    a11y_readable_font: "Police simple et lisible",
    a11y_links: "Surligner les liens",
    a11y_headings: "Surligner les titres",
    a11y_big_cursor: "Grand curseur",
    a11y_motion: "Arrêter les animations",
    a11y_spacing: "Interligne large",
    a11y_letters: "Espacement des lettres",
    a11y_monochrome: "Niveaux de gris",
    a11y_reset: "Réinitialiser l'accessibilité",

    // Floating widget
    float_sub: "Version portable, sans installation",
    float_title: "Télécharger maintenant",
    float_btn: "Téléchargement gratuit",

    // Modals
    source_modal_title: "Lancer les tests depuis le code source (moteur Rust)",
    source_modal_intro: "<strong>TypesetOK</strong> est en phase de développement du cœur (Core Engine). Développeurs et chercheurs sont invités à cloner le dépôt et à exécuter la suite de tests officielle :",
    source_modal_req: "<strong>Prérequis :</strong> Rust 1.85+ avec l'outil officiel Cargo.",
    arch_modal_title: "Rapport d'architecture technique : TypesetOK (TOK)",
    arch_principles: "Principes fondamentaux de l'architecture",
    arch_p1: "1. <strong>Indépendance totale du modèle de document (TDM) :</strong> le modèle de document est entièrement découplé du DOM, des balises HTML et des règles CSS du navigateur. Toutes les structures sémantiques sont écrites en Rust pur.",
    arch_p2: "2. <strong>Principe de prépagination :</strong> le moteur d'interface n'a pas le droit de deviner les sauts de page ni la répartition des colonnes. Le cœur Rust effectue tous les calculs Knuth-Plass et transmet des pages déjà paginées.",
    arch_p3: "3. <strong>Double chaîne PDF :</strong> une couche d'affichage à l'écran rapide et maîtrisée, à côté d'une chaîne prépresse native en Rust totalement indépendante qui produit des PDF/X-1a conformes avec noir 100 % K et BleedBox de 3 mm.",
    arch_p4: "4. <strong>Couche de curseur virtuel :</strong> contourne les défaillances intrinsèques de <code>contenteditable</code> dans les navigateurs grâce à une couche Canvas transparente et un curseur virtuel.",
    arch_p5: "5. <strong>Prise en charge native des très gros documents :</strong> algorithme de pagination incrémentale par convergence (Convergence Pagination) et virtualisation complète limitée à 3 pages actives.",
    arch_compare: "<strong>Comparaison avec les systèmes existants :</strong><br>InDesign (correctif RTL lourd et lent) | Affinity Publisher (0 % de prise en charge de l'hébreu) | Tag (ancien logiciel monolithique des années 90) | Typst (code/markup uniquement, sans édition visuelle de bureau)."
  }
};

const TOK_DEFAULT_LANG = 'he';
const TOK_STORAGE_KEY = 'tok_lang';
const TOK_LOCALES = { he: 'he_IL', en: 'en_US', es: 'es_ES', fr: 'fr_FR' };
// Only these attributes may be translated through data-i18n-attr.
const TOK_ATTR_WHITELIST = ['aria-label', 'aria-description', 'title', 'alt', 'placeholder'];

function tokIsLang(lang) {
  return typeof lang === 'string' && Object.prototype.hasOwnProperty.call(TOK_TRANSLATIONS, lang);
}

// localStorage throws in some privacy modes / sandboxed frames.
function tokStorageGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (e) {
    return null;
  }
}

function tokStorageSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (e) {
    // ignore
  }
}

function tokLangFromUrl() {
  try {
    const raw = new URLSearchParams(window.location.search).get('lang');
    if (raw) {
      const lang = raw.trim().toLowerCase();
      if (tokIsLang(lang)) return lang;
    }
  } catch (e) {
    // ignore
  }
  return null;
}

// Priority: ?lang=xx (hreflang alternates) > saved preference > Hebrew.
function tokInitialLang() {
  const fromUrl = tokLangFromUrl();
  if (fromUrl) return fromUrl;
  const saved = tokStorageGet(TOK_STORAGE_KEY);
  if (tokIsLang(saved)) return saved;
  return TOK_DEFAULT_LANG;
}

let tokCurrentLang = tokInitialLang();

function tokLookup(lang, key) {
  const table = TOK_TRANSLATIONS[lang];
  if (table && Object.prototype.hasOwnProperty.call(table, key)) return table[key];
  return undefined;
}

/**
 * Translate a key for the current language (used by scripts that write text at runtime).
 * Falls back to Hebrew, then to the given fallback, then to the key itself.
 */
function tokT(key, fallback) {
  let value = tokLookup(tokCurrentLang, key);
  if (value === undefined) value = tokLookup(TOK_DEFAULT_LANG, key);
  if (value === undefined) value = fallback !== undefined ? fallback : key;
  return value;
}

// The Hebrew authored in index.html is the source of truth for 'he' and the
// fallback for any key missing in another language, so it is captured once.
const tokOriginalText = new WeakMap();
const tokOriginalHtml = new WeakMap();
const tokOriginalAttrs = new WeakMap();
let tokOriginalHead = null;

function tokPick(lang, key, original) {
  const value = tokLookup(lang, key);
  return value !== undefined ? value : original;
}

function tokParseAttrSpec(spec) {
  const pairs = [];
  (spec || '').split(';').forEach(part => {
    const idx = part.indexOf(':');
    if (idx < 1) return;
    const attr = part.slice(0, idx).trim().toLowerCase();
    const key = part.slice(idx + 1).trim();
    if (key && TOK_ATTR_WHITELIST.indexOf(attr) !== -1) pairs.push([attr, key]);
  });
  return pairs;
}

function tokApplyHead(lang) {
  const desc = document.querySelector('meta[name="description"]');
  const canonical = document.querySelector('link[rel="canonical"]');
  if (!tokOriginalHead) {
    tokOriginalHead = {
      title: document.title,
      description: desc ? desc.getAttribute('content') : null,
      canonical: canonical ? canonical.getAttribute('href') : null
    };
  }

  document.title = tokPick(lang, 'meta_title', tokOriginalHead.title);

  if (desc && tokOriginalHead.description !== null) {
    desc.setAttribute('content', tokPick(lang, 'meta_description', tokOriginalHead.description));
  }

  if (canonical && tokOriginalHead.canonical) {
    try {
      const url = new URL(tokOriginalHead.canonical, window.location.href);
      url.searchParams.delete('lang');
      if (lang !== TOK_DEFAULT_LANG) url.searchParams.set('lang', lang);
      canonical.setAttribute('href', url.toString());
    } catch (e) {
      // ignore malformed canonical
    }
  }

  const ogLocale = document.querySelector('meta[property="og:locale"]');
  if (ogLocale && TOK_LOCALES[lang]) ogLocale.setAttribute('content', TOK_LOCALES[lang]);

  const alternates = document.querySelectorAll('meta[property="og:locale:alternate"]');
  const others = Object.keys(TOK_LOCALES).filter(l => l !== lang).map(l => TOK_LOCALES[l]);
  if (alternates.length === others.length) {
    alternates.forEach((meta, i) => meta.setAttribute('content', others[i]));
  }
}

// Labels that other scripts set according to UI state.
function tokRefreshDynamicLabels() {
  const themeBtn = document.getElementById('toggleThemeBtn');
  const mode = document.documentElement.getAttribute('data-theme-setting');
  if (themeBtn && ['light', 'dark', 'system'].indexOf(mode) !== -1) {
    const label = tokT('theme_label_' + mode);
    themeBtn.setAttribute('aria-label', label);
    themeBtn.setAttribute('title', label);
  }

  const menuBtn = document.getElementById('mobileNavToggle');
  if (menuBtn) {
    const open = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-label', tokT(open ? 'menu_close' : 'menu_open'));
  }
}

function tokSyncUrl(lang) {
  try {
    const url = new URL(window.location.href);
    if (lang === TOK_DEFAULT_LANG) {
      url.searchParams.delete('lang');
    } else {
      url.searchParams.set('lang', lang);
    }
    const next = url.pathname + url.search + url.hash;
    const current = window.location.pathname + window.location.search + window.location.hash;
    if (next !== current) window.history.replaceState(window.history.state, '', next);
  } catch (e) {
    // file:// or sandboxed frames may refuse replaceState
  }
}

/**
 * Switches the page language. Options: { updateUrl: boolean } (default true).
 */
function setAppLanguage(lang, options) {
  if (!tokIsLang(lang)) lang = TOK_DEFAULT_LANG;
  const updateUrl = !options || options.updateUrl !== false;

  tokCurrentLang = lang;
  tokStorageSet(TOK_STORAGE_KEY, lang);

  const root = document.documentElement;
  root.lang = lang;
  // RTL for Hebrew, LTR for English, Spanish, French
  root.dir = lang === 'he' ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (!tokOriginalText.has(el)) tokOriginalText.set(el, el.textContent);
    const value = tokPick(lang, el.getAttribute('data-i18n'), tokOriginalText.get(el));
    if (el.textContent !== value) el.textContent = value;
  });

  // Values are constant strings from TOK_TRANSLATIONS only (never user/URL input).
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    if (!tokOriginalHtml.has(el)) tokOriginalHtml.set(el, el.innerHTML);
    const value = tokPick(lang, el.getAttribute('data-i18n-html'), tokOriginalHtml.get(el));
    if (el.innerHTML !== value) el.innerHTML = value;
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const pairs = tokParseAttrSpec(el.getAttribute('data-i18n-attr'));
    let originals = tokOriginalAttrs.get(el);
    if (!originals) {
      originals = {};
      pairs.forEach(([attr]) => { originals[attr] = el.getAttribute(attr); });
      tokOriginalAttrs.set(el, originals);
    }
    pairs.forEach(([attr, key]) => {
      const value = tokPick(lang, key, originals[attr]);
      if (value === null || value === undefined) {
        el.removeAttribute(attr);
      } else {
        el.setAttribute(attr, value);
      }
    });
  });

  tokApplyHead(lang);
  tokRefreshDynamicLabels();

  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });

  if (updateUrl) tokSyncUrl(lang);

  try {
    document.dispatchEvent(new CustomEvent('tok:languagechange', { detail: { lang: lang } }));
  } catch (e) {
    // ignore
  }
}

window.tokT = tokT;
window.TOK_I18N = {
  t: tokT,
  setLanguage: setAppLanguage,
  getLanguage: () => tokCurrentLang,
  languages: Object.keys(TOK_TRANSLATIONS)
};

function tokInitI18n() {
  setAppLanguage(tokCurrentLang, { updateUrl: false });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      setAppLanguage(btn.getAttribute('data-lang'));
    });
  });
}

// Deferred script: the DOM is already parsed, so apply before first paint where possible.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', tokInitI18n);
} else {
  tokInitI18n();
}
