<div align="center">

<img src="assets/images/logo.jpg" alt="TypesetOK Logo" width="160" style="border-radius: 16px; margin-bottom: 14px;" />

# TypesetOK Website & Editorial Showcase
### אתר תדמית וסדנת עימוד מקצועית בקוד פתוח | Official Website & Live Interactive Playground

[![CI Validation](https://github.com/TypesetOK/website/actions/workflows/ci.yml/badge.svg)](https://github.com/TypesetOK/website/actions/workflows/ci.yml)
[![GitHub Pages](https://github.com/TypesetOK/website/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/TypesetOK/website/actions/workflows/deploy-pages.yml)
[![Live Site](https://img.shields.io/badge/Live%20Site-typesetok.github.io%2Fwebsite-1D63ED.svg)](https://typesetok.github.io/website/)
[![License](https://img.shields.io/badge/License-TOK--NCCL%20v1.0-blue.svg)](https://github.com/TypesetOK/typesetok/blob/main/LICENSE.md)
[![Standard](https://img.shields.io/badge/Standard-ת"י%206100%20(SI%206100)-blue.svg)]()
[![Pre-Press](https://img.shields.io/badge/PDF%2FX--1a-ISO%2015930-purple.svg)]()
[![A11y](https://img.shields.io/badge/Accessibility-WCAG%202.2%20AA-brightgreen.svg)]()

<p align="center">
  <b>[ <a href="#-עברית">עברית</a> | <a href="#-english">English</a> ]</b>
</p>

</div>

---

## 🇮🇱 עברית

### 📖 אודות האתר והקונספט
ריפו זה מכיל את קוד המקור של אתר התדמית וההורדה הרשמי של **TypesetOK (TOK)** — מפרט ארכיטקטוני ותוכנת עימוד שולחני (DTP) בקוד פתוח לטיפוגרפיה עברית מתקדמת, ספרי קודש (ש"ס, מקראות גדולות ושו"ת) ומסמכי ענק.

האתר עוצב ותוכנת לפי קונספט **Editorial Technology** — ממשק ענייני ומדויק עבור מעמדים ומוציאים לאור, המתמקד בפרקטיקה של עולם העימוד (נייר, רשתות קווי בסיס, תקני דפוס וייצוא PDF/X-1a). האתר מותאם להרצה מלאה כאתר סטטי ב-**GitHub Pages**, כולל תמיכה ב-4 שפות (עברית, אנגלית, ספרדית, צרפתית), מצב יום (נייר) כברירת מחדל יחד עם תמיכה במצב מערכת ומצב לילה, וכפתור הורדה צף ונגיש.

---

### 🌟 רכיבים מרכזיים באתר

1. **מרכז הורדות ראשי וכפתור צף (Download Hub):**
   * הורדה ישירה של הגרסה העדכנית ביותר (v0.6.0) מ-GitHub Releases: גרסה ניידת ללא התקנה (Portable ZIP), מתקין שולחני וכלי שורת פקודה (CLI).
   * כפתור הורדה חכם ההופך לרכיב צף (Sticky Widget) בצד המסך בעת גלילה מעבר לחלק העליון.

2. **השוואה מעשית מול וורד ואינדיזיין (Head-to-Head Matrix):**
   * טבלת השוואה עניינית ומעשית של התמודדות מול מסמכי ענק (500+ עמודים), ניקוד וטעמים, ספרי קודש ומפרשים מרובים, יישור בלוק הטקסט וייצוא קדם-דפוס.

3. **קולות מהשטח — ציטוטים מפורומי מעמדים:**
   * אתגרים אמיתיים ומצוקות מפורומי מעמדים (פרוג, פורום לתורה, איגודי דפוס) והמענה המבני של TypesetOK עבורם.

4. **סליידר השוואה לפני/אחרי (Before / After Comparison):**
   * השוואה ויזואלית חיה בין פלט מעבד תמלילים פשוט לבין בלוק העימוד המהודק והמאוזן של TypesetOK.

5. **שבעת עמודי התווך (Bento Grid):**
   * ליבת Rust עצמאית ווירטואליזציה (3 עמודים פעילים), ת״י 6100, יישור תלת-שלבי (Knuth-Plass), פותר אילוצים רב-תזרימי, קדם-דפוס ISO 15930, ומסד נתונים פנימי עמיד קריסות (ACID WAL).

6. **שקיפות הנדסית ואימות נתונים:**
   * תוצאות בדיקות אמת במאגר הקוד של הליבה (58/58 בדיקות עוברות, 0 אזהרות Clippy, דטרמיניזם ביט-אחר-ביט, עמידה במבחן עומס של 1,000 עמודים).

---

### ♿ נגישות (WCAG 2.2 AA) וביצועים (Core Web Vitals)

* **מצבי תצוגה מורחבים:** ברירת מחדל של מצב יום (Editorial Paper), עם אפשרות למצב לילה ומצב מערכת אוטומטי (Auto/System).
* **ניווט מקלדת מלא:** תמיכה מלאה בתקני נגישות, דילוג לתוכן מרכזי (Skip Link), ופוקוס ברור.
* **אפס תלויות כבדות:** קוד Vanilla JS ו-CSS מודולרי ללא ספריות ענק (LCP $\le$ 1.2s, INP $\le$ 50ms, CLS = 0).

---

### 🚀 הרצה מקומית

האתר הוא אתר סטטי עצמאי שאינו דורש תהליך בנייה מורכב:

```bash
# הרצה באמצעות שרת ה-HTTP המובנה של Python:
python -m http.server 8000

# פתיחה בדפדפן:
# http://localhost:8000
```

---

## 🇺🇸 English
 
### 📖 About
This repository contains the source code for the official website and download portal of **TypesetOK (TOK)** — an open-source desktop publishing system (DTP) dedicated to advanced Hebrew typography, sacred texts (Talmud, Mikraot Gedolot, Responsa), and large-scale manuscripts.

The site is designed under the **Editorial Technology** concept, turning the physical world of typography, baseline grids, and pre-press standards into an accessible digital surface. It is fully static, deployed directly to **GitHub Pages**, with editorial light mode as default (with System and Dark options), 4 languages (Hebrew, US English, Spanish, French), an accessible toolbar (WCAG 2.2 AA), and a smooth floating download widget.

---

### 🛠️ GitHub Actions CI & Pages Deployment

* **Continuous Integration (`.github/workflows/ci.yml`):**
  * Automated linting and tag well-formedness validation.
  * Broken asset & link verification.
  * CSS & JS syntax tree checks.
* **Automated GitHub Pages Deployment (`.github/workflows/deploy-pages.yml`):**
  * Automatically deploys on every push to `main`.
  * Pre-configured with `.nojekyll` and custom `404.html`.

---

### 📁 Repository Structure

```
website/
├── index.html                   # Semantic HTML5 Master Document (i18n & Schema.org)
├── 404.html                     # Custom Accessible 404 Page (Light mode default)
├── .nojekyll                    # Disables Jekyll processing on GitHub Pages
├── site.webmanifest             # Web App Manifest
├── robots.txt                   # Search Engine Crawler Directives
├── sitemap.xml                  # Canonical XML Sitemap
├── README.md                    # Dual-language Documentation
│
├── .github/
│   └── workflows/
│       ├── ci.yml               # Automated CI Validation Pipeline
│       └── deploy-pages.yml     # Automated GitHub Pages Deployment
│
├── scripts/
│   └── validate.py              # CI Quality & Integrity Checker
│
└── assets/
    ├── images/
    │   ├── logo.jpg             # TypesetOK Brand Logo
    │   └── favicon.svg          # Vector Favicon
    ├── css/
    │   ├── tokens.css           # Design Tokens (Colors, Typography, Light Default)
    │   ├── reset.css            # Accessible RTL Reset
    │   ├── main.css             # Editorial Grid & Layout Primitives
    │   ├── components.css       # Interactive Modules & Demos (Fluid mobile-safe)
    │   └── a11y-motion.css      # WCAG 2.2 AA Toolbar & Reduced Motion Overrides
    └── js/
        ├── main.js              # Navigation, Observers, Downloads & Modals
        ├── i18n.js              # Multi-lingual Engine (HE, EN, ES, FR)
        ├── a11y.js              # Universal Accessibility Controller & Theme Engine
        └── before-after.js      # Accessible Fluid Comparison Slider & Presets
```

---

### 📄 License

This repository and the TypesetOK project are licensed under the:
**[TypesetOK Source-Available Non-Commercial Copyleft License (TOK-NCCL v1.0)](https://github.com/TypesetOK/typesetok/blob/main/LICENSE.md)**

