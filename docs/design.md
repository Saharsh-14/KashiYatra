# KASHI — A City Beyond Time
# DESIGN SYSTEM & EDITORIAL VISUAL LANGUAGE

**Document:** `docs/design.md`  
**Purpose:** Single source of truth for visual design, typography, color palette, spacing rhythm, layout archetypes, item placement, and component architecture.

---

## 1. DESIGN PHILOSOPHY & CORE PRINCIPLE

KASHI is a cinematic, editorial cultural journey — not a conventional commercial travel portal.

### Visual Foundations
- **Inspiration:** Photographic archives, Indian fine-print editorial design, travel lithographs, museum exhibition catalogs, and cinematic art direction.
- **Aesthetic:** Timeless, architectural, restrained, warm, and atmospheric.
- **Anti-Patterns:** Avoid SaaS dashboards, generic travel templates, heavy glassmorphism, bright neon gradients, overly rounded pill cards, and generic spiritual clichés.

### The Contrast Principle
```text
DARK / QUIET / IMMERSIVE   (River at night, cosmic stillness, hero depths)
         ↓
IMAGE / CULTURE / LIGHT    (Warm parchment, ghat stone, morning sun, ritual fire)
         ↓
TYPOGRAPHY / DETAIL        (Architectural authority paired with human narrative)
```
The interface remains visually quiet so the imagery and authentic typography carry the emotional weight.

---

## 2. COLOR PALETTE & SEMANTIC TOKENS

All colors are grounded in the natural light, materials, and stone of Varanasi. Do not introduce saturated digital hues.

### 2.1 Primitive Palette Tokens
```css
:root {
  --palette-ink: #10100E;         /* Ganga at night, primary dark surfaces, hero */
  --palette-charcoal: #191816;    /* Secondary dark surfaces, panels, elevated cards */
  --palette-ivory: #E8E1D3;       /* Aged paper, primary text on dark, light surfaces */
  --palette-sand: #CFC4B1;        /* Secondary text, captions, subtle borders */
  --palette-brass: #B59A63;       /* Banaras brass accent: active states, indexes, rules */
  --palette-ganga-mist: #AEB8B3;  /* Cool morning water, atmospheric highlights */
  --palette-terracotta: #985F49;  /* Temple brick, clay kulhad, poster accents */
}
```

### 2.2 Semantic Tokens (Dark & Light Surfaces)
```css
:root {
  /* Dark / Immersive Foundation */
  --color-background-primary: var(--palette-ink);
  --color-background-secondary: var(--palette-charcoal);
  --color-surface: #211F1B;
  --color-surface-elevated: #28251F;
  --color-text-primary: var(--palette-ivory);
  --color-text-secondary: var(--palette-sand);
  --color-text-muted: #8E887D;
  --color-accent: var(--palette-brass);
  --color-border: rgba(232, 225, 211, 0.18);
  --color-border-strong: rgba(232, 225, 211, 0.34);
  --color-overlay: rgba(16, 16, 14, 0.72);

  /* Light / Editorial Paper Foundation */
  --color-light-background: #E8E1D3;
  --color-light-surface: #F0EADF;
  --color-light-text-primary: #171613;
  --color-light-text-secondary: #4B463D;
  --color-light-border: rgba(16, 16, 14, 0.18);
}
```

### 2.3 Color Usage Ratio
- **70% Neutral Foundation:** Dark Ink or Aged Ivory base.
- **20% Photographic Imagery:** Authentic tones of river, stone, and morning mist.
- **10% (or less) Accent:** Banaras Brass and Terracotta used strictly for indexes, hairlines, and active markers. Never dominate the interface with brass.

---

## 3. TYPOGRAPHY SYSTEM

The identity relies strictly on **two primary typefaces** and **three primary content sizes**.

### 3.1 Primary Font Families
- **Display / Headings:** `Caesura Bold` — monumental, architectural, authoritative.
- **Editorial / Body / UI:** `Peristiva` (Regular) — editorial, human, cultural, comfortable.

```css
:root {
  --font-display: "Caesura", serif;
  --font-editorial: "Peristiva", serif;
  --font-heading: var(--font-display);
  --font-body: var(--font-editorial);
  --font-ui: var(--font-editorial);
}
```

### 3.2 Content Size Hierarchy & Tokens
```css
:root {
  /* 1. Heading */
  --font-size-heading: clamp(3.5rem, 7vw, 7rem);

  /* 2. Subheading */
  --font-size-subheading: clamp(1.5rem, 2.5vw, 2.5rem);

  /* 3. Body */
  --font-size-body: clamp(0.95rem, 1vw, 1rem);

  /* Utility / Micro UI (Not a content tier) */
  --font-size-ui: 0.72rem;

  /* Line Heights */
  --leading-heading: 0.92;
  --leading-subheading: 1.05;
  --leading-body: 1.55;
  --leading-ui: 1.2;

  /* Letter Spacing */
  --tracking-heading: 0.015em;
  --tracking-subheading: 0.01em;
  --tracking-body: 0em;
  --tracking-ui: 0.12em; /* UI kickers, badges, navigation */
}
```

### 3.3 Text Constraints
```css
:root {
  --measure-body: 38rem;  /* Narrative descriptions */
  --measure-wide: 52rem;  /* Wide chapter intros */
}
```
Never let long-form editorial copy stretch edge-to-edge across wide viewports.

---

## 4. SPACING, VERTICAL RHYTHM & CONTAINERS

All spacing follows an intentional 4px base scale.

### 4.1 Spacing Scale
```css
:root {
  --space-1: 0.25rem;  /* 4px */
  --space-2: 0.5rem;   /* 8px */
  --space-3: 0.75rem;  /* 12px */
  --space-4: 1rem;     /* 16px */
  --space-5: 1.25rem;  /* 20px */
  --space-6: 1.5rem;   /* 24px */
  --space-8: 2rem;     /* 32px */
  --space-10: 2.5rem;  /* 40px */
  --space-12: 3rem;    /* 48px */
  --space-16: 4rem;    /* 64px */
  --space-20: 5rem;    /* 80px */
  --space-24: 6rem;    /* 96px */
  --space-32: 8rem;    /* 128px */
  --space-40: 10rem;   /* 160px */
}
```

### 4.2 Section Spacing & Rhythmic Gaps
```css
:root {
  --section-padding-y: clamp(5rem, 12vw, 12rem);          /* Major cinematic chapters */
  --section-padding-y-compact: clamp(3rem, 7vw, 6rem);    /* Informational & catalog sections */
  --page-gutter: clamp(2rem, 5vw, 6rem);                  /* Desktop side margin */
  --page-gutter-mobile: 1.25rem;                          /* Mobile side margin */
  
  --space-header-to-content: clamp(2rem, 4vw, 4rem);      /* Header stack to main grid */
  --space-media-to-caption: var(--space-4);               /* Photo frame to under-image text */
  --space-row-padding-y: clamp(1.25rem, 2vw, 2rem);       /* Tabular list row vertical padding */
  --space-card-interior: clamp(1.25rem, 2vw, 2.25rem);    /* Ticket & panel internal padding */

  --grid-gap: clamp(1rem, 2vw, 2rem);
  --grid-gap-wide: clamp(1.5rem, 3vw, 3rem);
  --grid-gap-tight: clamp(0.5rem, 1vw, 1rem);

  --container-max: 1440px;
  --container-wide: 1680px;
  --container-editorial: 1200px;
  --container-narrow: 960px;
}
```

---

## 5. SECTION LAYOUT ARCHETYPES & ITEM PLACEMENT
*(Derived from the 10 museum, editorial catalog, and Kashi reference studies)*

### 5.1 Hero with Fixed Navigation Spine (Archetype 1)
```text
┌─────────────────────────────────────────────────────────────┬──────────┐
│                                                             │  ( N )   │ ← Top-right circular monogram
│  KICKER (THE CITY AND THE RIVER)                            │          │
│                                                             │          │
│  KASHI                                                      │  Kashi—  │ ← Right fixed vertical index
│  A City Beyond Time                                         │    —     │
│                                                             │    —     │
│  Some cities are visited. This one is entered — through its │    —     │
│  river, its steps, its lanes and its kitchens...            │    —     │
│                                                             │          │
│  SCROLL                                                     │          │
│  │ (1px vertical guideline)                                 │          │
└─────────────────────────────────────────────────────────────┴──────────┘
```
- **Placement:** Left editorial stack aligned to `--page-gutter`, constrained to `max-width: 32rem`.
- **Scroll Mark:** Bottom-left `SCROLL` micro-label in UI size + 28px vertical 1px brass rule.
- **Fixed Right Spine:** `position: fixed; right: var(--page-gutter); top: 50%; transform: translateY(-50%)`. Active section shown with em-dash (`Kashi —`) in brass; inactive sections shown with subtle 14px horizontal dashes.

### 5.2 Two-Column Editorial Photo Grid (Archetype 2 — Steps to Eternity)
```text
01 / STEPS TO ETERNITY
Eight steps.
Each ghat is a different arrangement of the same three things — stone, water...

┌─────────────────────────────────┐   ┌─────────────────────────────────┐
│                                 │   │                                 │
│      [ Photo: Assi Ghat ]       │   │   [ Photo: Dashashwamedh ]      │
│      Aspect Ratio: 16:10 / 3:2  │   │   Aspect Ratio: 16:10 / 3:2     │
│                                 │   │                                 │
└─────────────────────────────────┘   └─────────────────────────────────┘
01  Assi Ghat                         02  Dashashwamedh Ghat
Where the city thins out...           The busiest steps, and the loudest...
```
- **Surface:** Transitions to Light Aged Ivory (`var(--palette-ivory)`).
- **Grid:** 50/50 desktop, 1-col mobile, gap `--grid-gap-wide`.
- **Under-Image Caption Rule (Strict):** **No text overlaid on the image.** Captions sit strictly beneath the photo frame with `--space-media-to-caption` gap:
  - Line 1: Accent numeral (`01`) in brass + 2 spaces + Ghat Title in Caesura Bold (`clamp(1.25rem, 2vw, 1.75rem)`).
  - Line 2: Single-line poetic descriptor in muted sand/charcoal (`var(--color-light-text-secondary)`).

### 5.3 Excursion Ticket & Boat Pass Card (Archetype 3 — Historic Passes)
```text
┌────────────────────────────────────────────────────────────────────────┐
│ [ PANORAMIC ARTWORK / GHAT HISTORIC ARCHIVE BANNER — 4.2:1 RATIO ]     │
├───────────────┬─────────────────┬──────────────────────┬───────────────┤
│ Tour of the   │       12  June  │  KASHI GHAT YATRA    │ ||||||||||||| │
│ Northern      │           2026  │  Morning Boat Pass   │ ||||||||||||| │
│ Ghats...      │                 │                      │ ||||||||||||| │
│               │                 │  start: 05:30 AM     │ ||||||||||||| │
│               │                 │  end:   08:00 AM     │ 082458 204... │
└───────────────┴─────────────────┴──────────────────────┴───────────────┘
```
- **Surface:** Parchment Ivory card with 1px border (`rgba(16, 16, 14, 0.22)`), `var(--radius-sm)`.
- **Top Header:** Full-bleed panoramic banner crop (4:1 to 4.5:1 ratio).
- **Bottom Data Tier:** 4 horizontal columns separated by 1px vertical hairline dividers:
  1. *Context Note (20%):* Small descriptive text (`--font-size-ui`).
  2. *Monumental Date (20%):* Giant day numeral (`clamp(2rem, 3.5vw, 3rem)`) + vertical divider + stacked Month/Year.
  3. *Pass Title & Schedule (40%):* Uppercase title + departure & return timestamps.
  4. *Barcode & Serial (20%):* High-density vertical barcode element with serial tracking number underneath.

### 5.4 Light Triptych Showcase (Archetype 4 — 40/60 Asymmetric Exhibition)
```text
┌─────────────────────────┬──────────────────────────────────────────────┐
│ CURRENT EXHIBITION      │ ┌──────────────┐┌──────────────┐┌──────────┐ │
│                         │ │              ││              ││          │ │
│ Banaras Silk & Sacred   │ │   Card 01    ││   Card 02    ││ Card 03  │ │
│ Metallurgy              │ │   (3:4)      ││   (3:4)      ││ (3:4)    │ │
│                         │ │              ││              ││          │ │
│ Browse Collection →     │ └──────────────┘└──────────────┘└──────────┘ │
└─────────────────────────┴──────────────────────────────────────────────┘
```
- **Proportions:** 40% editorial narrative column on left / 60% triptych gallery on right.
- **Triptych:** 3 portrait cards (3:4 ratio) side-by-side with tight gap (`--space-4`). On mobile, converts to horizontal scroll with snap.

### 5.5 Experience Metric Bar with Hairline Dividers (Archetype 5)
```text
┌──────────────────────┬───┬─────────────────────────────────────────────┐
│ Experience KASHI     │ │ │ 🎟  GHAT TICKETS                            │
│                      │ │ │     Book morning rowing boats & skip lines. │
│ Daily Darshan Hours  │ │ ├─────────────────────────────────────────────┤
│ 04:00 AM — 11:00 PM  │ │ │ 📍  SACRED CONVERGENCE                      │
│                      │ │ │     At the meeting of Varuna and Assi.      │
│ [ Plan Your Visit ]  │ │ ├─────────────────────────────────────────────┤
│                      │ │ │ 👥  FOR GROUPS                              │
│                      │ │ │     Private heritage walks & dawn chanting. │
└──────────────────────┴───┴─────────────────────────────────────────────┘
```
- Deep charcoal horizontal block framed by full-height 1px vertical hairline dividers.
- Stacked feature rows with micro-icons and two-line descriptions.

### 5.6 Structured Exhibition & Ritual List Rows (Archetype 6)
```text
Upcoming Observances & Assemblies                       VIEW ALL CALENDAR →
───────────────────────────────────────────────────────────────────────────
[ FULL-WIDTH FRAMED PANORAMIC PHOTOGRAPH / PAINTING OF THE FESTIVAL ]
───────────────────────────────────────────────────────────────────────────
Dev Deepawali on the Ghats   A million clay lamps illuminate     [ MORE INFO ]
November 15, 2026            both banks of the Ganga from Assi...
───────────────────────────────────────────────────────────────────────────
```
- Horizontal hairline list rows with 3 distinct columns:
  - Col 1 (25%): Title in bold serif + date/lunar phase below.
  - Col 2 (55%): Narrative paragraph in Peristiva body text.
  - Col 3 (20%): Right-aligned outline pill button (`MORE INFO`).

### 5.7 Split Key-Value Schedule Panel (Archetype 7 — Visitor Info)
```text
┌─────────────────────────────────┬───────────────────────────────────────┐
│                                 │ Visitor Info                          │
│    [ Salon Gallery Wall:        │ ───────────────────────────────────── │
│      Framed lithographs &       │ Morning Rowing (Assi)         ₹300/hr │
│      photographs arranged       │ Sunset Aarti Cruise           ₹500/hr │
│      asymmetrically ]           │ Morning Mangala Aarti        04:30 AM │
└─────────────────────────────────┴───────────────────────────────────────┘
```
- 50/50 Split: Left salon art wall, right dark ink panel with clean tabular rows and right-aligned prices/times.

### 5.8 Editorial Catalog Spread with Overlapping Detail Insets (Archetype 8)
- Multi-column book spread with top page numbers (`02  03`) and Roman numeral chapter markers (`I`, `II`).
- **Floating Overlapping Detail Insets:** A secondary thumbnail (4:3 or 1:1) overlapping the main image or column boundary with a 1px border to evoke physical exhibition catalogs.

### 5.9 Floating Viewport Action Dock (Archetype 9)
- `position: fixed; right: 0; top: 50%; transform: translateY(-50%); z-index: var(--z-navigation)`.
- Square brass/charcoal action tiles (`44px × 44px`) for quick access (Pass, Map, Audio Guide) with slide-left hover tooltip.

---

## 6. CARD RULES, ALIGNMENT & CONTROLLED ASYMMETRY

- **When to Use Cards:** Only for distinct physical artifacts (Posters, Tickets, Ghats, Temples). Never wrap arbitrary paragraphs into generic modern cards.
- **Corner Radii:** Square or micro-rounded corners only (`--radius-sm: 2px`). Avoid large bubbly border radii (`16px+`).
- **Controlled Asymmetry:** Use purposeful ratios:
  - `60% / 40%` (Image / Narrative)
  - `50% / 50%` (Photo Grid or Salon / Schedule Panel)
  - `25% / 55% / 20%` (Structured List Row)
- **Whitespace as Silence:** Whitespace is an active design element communicating majesty, silence, and spatial reverence. Never fill empty space just because it is available.

---

## 7. COMPONENTS, ELEVATION & MOTION

### 7.1 Buttons & Interactive Controls
- **Primary Button:** Background Ivory (`var(--palette-ivory)`), text Ink (`var(--palette-ink)`), `height: 2.75rem`, `border-radius: var(--radius-pill)`.
- **Secondary / Outline Button:** Transparent background, 1px border Ivory opacity, text Ivory.
- **Pill Button:** Subtle outline pill (`border: 1px solid var(--color-border); border-radius: 999px; font-size: var(--font-size-ui)`).
- **Touch Target:** Interactive controls must maintain a minimum `44px × 44px` physical hit area.

### 7.2 Layering (Z-Index Scale)
```css
:root {
  --z-base: 0;
  --z-content: 10;
  --z-overlay: 20;
  --z-navigation: 30;
  --z-dock: 35;
  --z-modal: 40;
  --z-transition: 50;
  --z-loader: 60;
}
```

### 7.3 Motion & Transitions
```css
:root {
  --transition-fast: 180ms;
  --transition-normal: 400ms;
  --transition-slow: 800ms;
  --transition-cinematic: 1200ms;
  --ease-standard: cubic-bezier(0.2, 0.65, 0.3, 1);
  --ease-smooth: cubic-bezier(0.16, 1, 0.3, 1);

  /* Living Photograph Drift */
  --living-image-scale: 1.04;
  --living-image-duration: 12s;
  --living-image-drift: 1.5%;
}
```
All animations must respect `@media (prefers-reduced-motion: reduce)`.

---

## 8. NON-NEGOTIABLE DESIGN LAWS & QA CHECKLIST

```text
1. Exactly Two Fonts: Caesura Bold (Display/Headings) + Peristiva (Body/Editorial/UI).
2. Exactly Three Content Sizes: Heading + Subheading + Body.
3. Every visual value must be backed by a CSS token or tokenized utility.
4. Muted cinematic palette: 70% neutral, 20% imagery, ≤10% brass accent.
5. Captions in photo grids sit strictly UNDER the image (no overlaid text on ghat cards).
6. Dividers are subtle 1px hairlines, never heavy dashboard borders.
7. Mobile is intentionally designed with horizontal snap carousels and 44px touch targets.
```

The website should feel less like a website being browsed and more like a sacred place being entered.
