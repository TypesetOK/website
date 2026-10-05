/**
 * TypesetOK (TOK) — Multilingual Translation Engine
 * Supports: Hebrew (he), US English (en), Spanish (es), French (fr).
 * Natural, professional, typesetter-oriented terminology without emojis.
 */

const TOK_TRANSLATIONS = {
  he: {
    // Navigation
    nav_home: "ראשי",
    nav_comparison: "השוואה למעמדים",
    nav_matrix: "השוואת וורד ואינדיזיין",
    nav_quotes: "קולות מהשטח",
    nav_features: "יכולות",
    nav_story: "ארכיטקטורה",
    nav_engineering: "בנצ'מרק",
    btn_download: "הורדה",
    btn_github: "מאגר GitHub",
    btn_architecture: "מפרט טכני",
    btn_source_guide: "מדריך פיתוח",

    // Hero
    hero_badge: "תוכנת עימוד שולחנית מקצועית בקוד פתוח • ללא עלות וללא נעילה",
    hero_title_1: "עימוד ספרים אמיתי.",
    hero_title_2: "חופשי, פתוח ומדויק לדפוס.",
    hero_desc: "TypesetOK נבנתה במיוחד עבור מעמדים, מעצבי ספרים ומוציאים לאור. טיפול טבעי באות העברית, ניקוד וטעמים מדויקים ללא שיבושים, עמודי ש״ס ומקראות גדולות עם ריבוי מפרשים, ועמידה מלאה בתקני דפוס.",
    hero_cta_download: "הורד את התוכנה",
    hero_cta_github: "מאגר הקוד ב-GitHub",
    hero_cta_arch: "מפרט ארכיטקטוני מלא",
    metric_tests: "58 / 58",
    metric_tests_label: "בדיקות ליבה ב-Rust עוברות",
    metric_clippy: "0 אזהרות",
    metric_clippy_label: "קוד נקי בתקן Clippy",
    metric_standards: "ת״י 6100 & ISO 15930",
    metric_standards_label: "עמידה מלאה בתקני דפוס ויוניקוד",

    // Download Center
    dl_card_badge: "מהדורה רשמית ל-Windows",
    dl_card_os: "Windows 10 / 11 (x64)",
    dl_btn_portable_title: "הורדה ישירה (ללא התקנה)",
    dl_btn_portable_sub: "קובץ ZIP נייד — לחלץ ולהפעיל מיד",
    dl_btn_installer_title: "הורדה עם מתקין (Windows Setup)",
    dl_btn_installer_sub: "התקנה מסודרת לשולחן העבודה",
    dl_cli_label: "אפשרויות נוספות:",
    dl_cli_windows: "CLI ל-Windows",
    dl_cli_linux: "Linux CLI",
    dl_cli_macos: "macOS CLI",
    dl_floating_btn: "הורדת TypesetOK",

    // Storytelling
    story_pretitle: "פרק א׳: עמודי התווך של הארכיטקטורה",
    story_title: "שלושה עקרונות הנדסיים מנחים",
    story_subtitle: "כיצד תוכנן מנוע העימוד של TypesetOK לפתור את האתגרים ההיסטוריים של עולם הדפוס העברי.",
    scene1_num: "עקרון 01",
    scene1_title: "נרמול קפדני לפי תקן ישראלי ת\"י 6100",
    scene1_desc: "מעבדי תמלילים ומערכות עימוד מערביות משבשות לעיתים קרובות את סדר האותיות והניקוד ביוניקוד. TypesetOK אוכפת סדר יוניקוד דטרמיניסטי מלא ומפעילה מנוע גימטריה דטרמיניסטי למניעת צירופי טאבו ושמות קודש (15 ← ט״ו, 16 ← ט״ז, 270 ← ע״ר).",
    scene2_num: "עקרון 02",
    scene2_title: "פותר אילוצים רב-תזרימי (Talmud Solver)",
    scene2_desc: "עמודי ש\"ס ומקראות גדולות הם פסגת הקושי הטיפוגרפי העולמי: גמרא במרכז, רש\"י בצד אחד ותוספות בצד השני, כאשר כל שינוי בפסקה אחת משפיע על גלישת הטקסט של שני הפירושים האחרים. מפרט המערכת מגדיר פותר אילוצים מתמטי ייעודי לסנכרון רציף.",
    scene3_num: "עקרון 03",
    scene3_title: "קדם-דפוס נייטיב: ISO 15930 (PDF/X-1a)",
    scene3_desc: "ללא הסתמכות על מנועי הדפסת דפדפן המוגבלים ל-sRGB. מנוע ה-Rust מתוכנן לייצר ישירות קובצי דפוס מובהקים: שחור 100% K (DeviceCMYK), צלבי רישום וסימני חיתוך וקטוריים, תיבות BleedBox ו-TrimBox של 3 מ\"מ, ופרופילי Fogra 39.",

    // Comparison
    comp_pretitle: "פרק ב׳: השוואה מעשית למעמדים",
    comp_title: "שבירת שורות בוורד מול דיוק של TypesetOK",
    comp_subtitle: "הזיזו את הסליידר או לחצו על הלחצנים כדי להשוות בין אופן פעולת מעבד תמלילים רגיל לבין בלוק העימוד המאוזן של TypesetOK.",
    comp_preset_before: "וורד (לפני)",
    comp_preset_half: "חצי-חצי (50%)",
    comp_preset_after: "TypesetOK (אחרי)",
    comp_before_label: "מעבד תמלילים מסורתי (וורד)",
    comp_before_note: "בוורד: שורות מתוחות, חללים לבנים בולטים, היעדר אותיות התפשטות ואי-אחידות בצפיפות העמוד.",
    comp_after_label: "מפרט TypesetOK (Knuth-Plass + אהלתר״ם)",
    comp_after_note: "ב-TypesetOK: בלוק טיפוגרפי מאוזן, חלוקת שורות מותאמת לפסקה כולה, אותיות מתרחבות אהלתר״ם וסנכרון מלא לקווי בסיס.",

    // A11y Panel
    a11y_panel_title: "תפריט נגישות מורחב",
    a11y_font_inc: "הגדל גופן (+)",
    a11y_font_dec: "הקטן גופן (-)",
    a11y_contrast: "ניגודיות גבוהה",
    a11y_theme: "ערכת נושא (יום / לילה / מערכת)",
    a11y_readable_font: "גופן קריא ופשוט",
    a11y_links: "הדגשת קישורים",
    a11y_headings: "הדגשת כותרות",
    a11y_big_cursor: "סמן עכבר מוגדל",
    a11y_motion: "עצירת תנועה",
    a11y_spacing: "ריווח שורות רחב",
    a11y_letters: "ריווח אותיות",
    a11y_monochrome: "גווני אפור",
    a11y_reset: "איפוס כל הגדרות הנגישות"
  },

  en: {
    // Navigation
    nav_home: "Home",
    nav_comparison: "Comparison",
    nav_matrix: "Word vs InDesign",
    nav_quotes: "Typesetter Voices",
    nav_features: "Features",
    nav_story: "Architecture",
    nav_engineering: "Benchmarks",
    btn_download: "Download",
    btn_github: "GitHub Repo",
    btn_architecture: "Tech Spec",
    btn_source_guide: "Dev Guide",

    // Hero
    hero_badge: "Open-Source Professional Desktop Typesetting • Free & Unlocked",
    hero_title_1: "Real Book Typesetting.",
    hero_title_2: "Free, Open, and Press-Ready.",
    hero_desc: "TypesetOK is purpose-built for typesetters, book designers, and publishers. Native Hebrew typography, flawless vocalization and cantillation, multi-commentary Talmud layouts, and complete print-standard compliance.",
    hero_cta_download: "Download Software",
    hero_cta_github: "View on GitHub",
    hero_cta_arch: "Architecture Spec",
    metric_tests: "58 / 58",
    metric_tests_label: "Core Rust unit tests passing",
    metric_clippy: "0 Warnings",
    metric_clippy_label: "Strict Clippy compliance",
    metric_standards: "SI 6100 & ISO 15930",
    metric_standards_label: "Full Unicode & Pre-press standards",

    // Download Center
    dl_card_badge: "Official Windows Release",
    dl_card_os: "Windows 10 / 11 (x64)",
    dl_btn_portable_title: "Direct Download (Portable)",
    dl_btn_portable_sub: "Standalone ZIP — Extract and run immediately",
    dl_btn_installer_title: "Download Installer (Windows Setup)",
    dl_btn_installer_sub: "Standard desktop installation",
    dl_cli_label: "Additional options:",
    dl_cli_windows: "Windows CLI",
    dl_cli_linux: "Linux CLI",
    dl_cli_macos: "macOS CLI",
    dl_floating_btn: "Download TypesetOK",

    // Storytelling
    story_pretitle: "Chapter I: Architectural Pillars",
    story_title: "Three Guiding Engineering Principles",
    story_subtitle: "How the TypesetOK engine solves historic bottlenecks in Hebrew publishing.",
    scene1_num: "Pillar 01",
    scene1_title: "Strict Normalization via Israeli Standard SI 6100",
    scene1_desc: "General word processors and legacy Western DTP software often mangle Unicode Hebrew vocalization and cantillation. TypesetOK enforces deterministic canonical Unicode ordering and taboo gematria substitution (15 → ט״ו, 16 → ט״ז).",
    scene2_num: "Pillar 02",
    scene2_title: "Multi-Flow Constraint Solver (Talmud Layout)",
    scene2_desc: "Talmud and rabbinic editions are the absolute pinnacle of typesetting complexity: central text flanked by commentators whose heights dynamically dictate layout. TypesetOK specifies a dedicated mathematical constraint solver for seamless cross-page sync.",
    scene3_num: "Pillar 03",
    scene3_title: "Native Pre-Press Engine: ISO 15930 (PDF/X-1a)",
    scene3_desc: "No relying on browser print engines crippled by sRGB. The Rust engine directly targets pure DeviceCMYK 100% K black, vector crop marks, 3mm BleedBox, Fogra 39 profiles, and PostScript /ToUnicode mapping for pristine text search.",

    // Comparison
    comp_pretitle: "Chapter II: Practical Typesetting Comparison",
    comp_title: "Word Processing vs TypesetOK Precision",
    comp_subtitle: "Drag the slider or click presets to see the difference between primitive word stretching and TypesetOK's balanced paragraph line breaking with authentic Hebrew expanding letters.",
    comp_preset_before: "Word (Before)",
    comp_preset_half: "Split (50%)",
    comp_preset_after: "TypesetOK (After)",
    comp_before_label: "Standard Word Processor (MS Word)",
    comp_before_note: "In Word: loose stretched lines, gaping white rivers, missing extending letters, and uneven page density.",
    comp_after_label: "TypesetOK Specification (Knuth-Plass + Expanding Glyphs)",
    comp_after_note: "In TypesetOK: harmonious typographic block, global paragraph optimization, authentic expanding letters, and strict baseline synchronization.",

    // A11y Panel
    a11y_panel_title: "Accessibility Preferences",
    a11y_font_inc: "Increase Text (+)",
    a11y_font_dec: "Decrease Text (-)",
    a11y_contrast: "High Contrast",
    a11y_theme: "Theme (Light / Dark / System)",
    a11y_readable_font: "Simple Dyslexia Font",
    a11y_links: "Highlight Links",
    a11y_headings: "Highlight Headings",
    a11y_big_cursor: "Large Cursor",
    a11y_motion: "Reduce Motion",
    a11y_spacing: "Wide Line Spacing",
    a11y_letters: "Wide Letter Spacing",
    a11y_monochrome: "Grayscale Mode",
    a11y_reset: "Reset All Preferences"
  },

  es: {
    // Navigation
    nav_home: "Inicio",
    nav_comparison: "Comparativa",
    nav_matrix: "Word vs InDesign",
    nav_quotes: "Voces del Sector",
    nav_features: "Capacidades",
    nav_story: "Arquitectura",
    nav_engineering: "Métricas",
    btn_download: "Descargar",
    btn_github: "Repositorio GitHub",
    btn_architecture: "Especificación",
    btn_source_guide: "Guía Dev",

    // Hero
    hero_badge: "Autoedición profesional de código abierto • Gratuita y sin ataduras",
    hero_title_1: "Composición tipográfica real.",
    hero_title_2: "Libre, abierta y lista para imprenta.",
    hero_desc: "TypesetOK está diseñada específicamente para maquetadores, diseñadores de libros y editores. Soporte nativo para hebreo, vocalización precisa sin desajustes, diseño de páginas rabínicas complejas y pleno cumplimiento de estándares de impresión.",
    hero_cta_download: "Descargar Programa",
    hero_cta_github: "Ver en GitHub",
    hero_cta_arch: "Especificación Técnica",
    metric_tests: "58 / 58",
    metric_tests_label: "Pruebas unitarias superadas en Rust",
    metric_clippy: "0 Advertencias",
    metric_clippy_label: "Estándar estricto Clippy",
    metric_standards: "SI 6100 & ISO 15930",
    metric_standards_label: "Cumplimiento normativo total",

    // Download Center
    dl_card_badge: "Versión Oficial para Windows",
    dl_card_os: "Windows 10 / 11 (x64)",
    dl_btn_portable_title: "Descarga Directa (Portable)",
    dl_btn_portable_sub: "Archivo ZIP — Descomprimir y ejecutar",
    dl_btn_installer_title: "Descargar Instalador (Windows Setup)",
    dl_btn_installer_sub: "Instalación estándar de escritorio",
    dl_cli_label: "Otras opciones:",
    dl_cli_windows: "Windows CLI",
    dl_cli_linux: "Linux CLI",
    dl_cli_macos: "macOS CLI",
    dl_floating_btn: "Descargar TypesetOK",

    // Storytelling
    story_pretitle: "Capítulo I: Pilares de Arquitectura",
    story_title: "Tres Principios de Ingeniería",
    story_subtitle: "Cómo el motor TypesetOK resuelve los cuellos de botella históricos del libro hebreo.",
    scene1_num: "Pilar 01",
    scene1_title: "Normalización estricta según la norma israelí SI 6100",
    scene1_desc: "Los procesadores de texto comunes suelen alterar el orden de las vocales y los signos diacríticos en hebreo. TypesetOK impone un orden canónico determinista y sustitución de gematría tabú.",
    scene2_num: "Pilar 02",
    scene2_title: "Solucionador multiflujo para páginas complejas (Talmud)",
    scene2_desc: "El diseño del Talmud es la cumbre de la complejidad: texto central y comentarios laterales que interactúan dinámicamente sin romper la simetría de la página.",
    scene3_num: "Pilar 03",
    scene3_title: "Preprensa nativa: ISO 15930 (PDF/X-1a)",
    scene3_desc: "Sin depender de motores de navegador. Salida directa con 100% K negro puro (DeviceCMYK), sangrado de 3 mm y perfiles Fogra 39.",

    // Comparison
    comp_pretitle: "Capítulo II: Comparativa Práctica",
    comp_title: "Procesador Común vs Precisión TypesetOK",
    comp_subtitle: "Mueva el control deslizante para comparar el espaciado deficiente con la justificación óptima Knuth-Plass.",
    comp_preset_before: "Word (Antes)",
    comp_preset_half: "Mitad (50%)",
    comp_preset_after: "TypesetOK (Después)",
    comp_before_label: "Procesador de Texto Común (Word)",
    comp_before_note: "En Word: espaciado irregular, 'ríos' blancos y falta de regularidad en la mancha tipográfica.",
    comp_after_label: "Especificación TypesetOK (Knuth-Plass + Letras Expansibles)",
    comp_after_note: "En TypesetOK: mancha tipográfica armónica, minimización global de demerits y rejilla base alineada.",

    // A11y Panel
    a11y_panel_title: "Opciones de Accesibilidad",
    a11y_font_inc: "Aumentar Letra (+)",
    a11y_font_dec: "Reducir Letra (-)",
    a11y_contrast: "Alto Contraste",
    a11y_theme: "Tema (Día / Noche / Sistema)",
    a11y_readable_font: "Fuente Dislexia",
    a11y_links: "Resaltar Enlaces",
    a11y_headings: "Resaltar Títulos",
    a11y_big_cursor: "Cursor Grande",
    a11y_motion: "Detener Movimiento",
    a11y_spacing: "Interlineado Amplio",
    a11y_letters: "Espaciado de Letras",
    a11y_monochrome: "Escala de Grises",
    a11y_reset: "Restablecer Opciones"
  },

  fr: {
    // Navigation
    nav_home: "Accueil",
    nav_comparison: "Comparaison",
    nav_matrix: "Word vs InDesign",
    nav_quotes: "Retours d'Expérience",
    nav_features: "Fonctions",
    nav_story: "Architecture",
    nav_engineering: "Performances",
    btn_download: "Télécharger",
    btn_github: "Dépôt GitHub",
    btn_architecture: "Spécification",
    btn_source_guide: "Guide Dev",

    // Hero
    hero_badge: "PAO professionnelle open source • Gratuite et sans verrouillage",
    hero_title_1: "La vraie composition de livres.",
    hero_title_2: "Libre, ouverte et prête pour l'impression.",
    hero_desc: "TypesetOK est spécialement conçue pour les typographes, maquettistes et éditeurs. Typographie hébraïque native, vocalisation sans bavure, mise en page du Talmud à commentaires multiples et conformité prépresse totale.",
    hero_cta_download: "Télécharger le Logiciel",
    hero_cta_github: "Voir sur GitHub",
    hero_cta_arch: "Spécification Technique",
    metric_tests: "58 / 58",
    metric_tests_label: "Tests unitaires validés en Rust",
    metric_clippy: "0 Avertissement",
    metric_clippy_label: "Conformité stricte Clippy",
    metric_standards: "SI 6100 & ISO 15930",
    metric_standards_label: "Normes d'impression et Unicode",

    // Download Center
    dl_card_badge: "Version Officielle pour Windows",
    dl_card_os: "Windows 10 / 11 (x64)",
    dl_btn_portable_title: "Téléchargement Direct (Portable)",
    dl_btn_portable_sub: "Fichier ZIP — Extraire et lancer",
    dl_btn_installer_title: "Télécharger l'Installateur (Setup)",
    dl_btn_installer_sub: "Installation bureau classique",
    dl_cli_label: "Options complémentaires :",
    dl_cli_windows: "CLI Windows",
    dl_cli_linux: "CLI Linux",
    dl_cli_macos: "CLI macOS",
    dl_floating_btn: "Télécharger TypesetOK",

    // Storytelling
    story_pretitle: "Chapitre I: Piliers d'Architecture",
    story_title: "Trois Principes d'Ingénierie",
    story_subtitle: "Comment le moteur TypesetOK résout les défis historiques de l'édition hébraïque.",
    scene1_num: "Pilier 01",
    scene1_title: "Normalisation stricte selon la norme SI 6100",
    scene1_desc: "Les logiciels de traitement de texte altèrent souvent l'ordre des voyelles et signes diacritiques. TypesetOK impose un ordre canonique déterministe.",
    scene2_num: "Pilier 02",
    scene2_title: "Résolveur de contraintes multiflux (Talmud)",
    scene2_desc: "Le sommet de la mise en page : texte central et commentaires périphériques synchronisés de façon fluide sur chaque page.",
    scene3_num: "Pilier 03",
    scene3_title: "Prépresse natif : ISO 15930 (PDF/X-1a)",
    scene3_desc: "Sortie directe sans intermédiaire web : 100% noir K (DeviceCMYK), repères de coupe vectoriels et profils Fogra 39.",

    // Comparison
    comp_pretitle: "Chapitre II: Comparaison Pratique",
    comp_title: "Traitement de Texte vs Rigueur TypesetOK",
    comp_subtitle: "Glissez le curseur pour comparer les césures approximatives de Word avec l'optimisation Knuth-Plass de TypesetOK.",
    comp_preset_before: "Word (Avant)",
    comp_preset_half: "Partage (50%)",
    comp_preset_after: "TypesetOK (Après)",
    comp_before_label: "Traitement de Texte Standard (Word)",
    comp_before_note: "Sous Word: espacements anarchiques, 'lézardes' blanches et manque de régularité.",
    comp_after_label: "Spécification TypesetOK (Knuth-Plass + Lettres Étirables)",
    comp_after_note: "Sous TypesetOK: bloc typographique homogène, minimisation des défauts et alignement sur la grille.",

    // A11y Panel
    a11y_panel_title: "Options d'Accessibilité",
    a11y_font_inc: "Agrandir le Texte (+)",
    a11y_font_dec: "Réduire le Texte (-)",
    a11y_contrast: "Contraste Élevé",
    a11y_theme: "Thème (Jour / Nuit / Système)",
    a11y_readable_font: "Police Lisible",
    a11y_links: "Surligner les Liens",
    a11y_headings: "Surligner les Titres",
    a11y_big_cursor: "Grand Curseur",
    a11y_motion: "Arrêter les Mouvements",
    a11y_spacing: "Interligne Large",
    a11y_letters: "Espacement des Lettres",
    a11y_monochrome: "Nuances de Gris",
    a11y_reset: "Réinitialiser les Options"
  }
};

/**
 * Initializes and switches the application language.
 */
function setAppLanguage(lang) {
  if (!TOK_TRANSLATIONS[lang]) lang = 'he';
  
  localStorage.setItem('tok_lang', lang);
  document.documentElement.lang = lang;
  
  // RTL for Hebrew, LTR for English, Spanish, French
  const isRtl = lang === 'he';
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

  const strings = TOK_TRANSLATIONS[lang];

  // Update text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (strings[key]) {
      el.textContent = strings[key];
    }
  });

  // Update HTML nodes
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (strings[key]) {
      el.innerHTML = strings[key];
    }
  });

  // Update language switcher active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const active = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('tok_lang') || 'he';
  setAppLanguage(savedLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = btn.getAttribute('data-lang');
      setAppLanguage(lang);
    });
  });
});
