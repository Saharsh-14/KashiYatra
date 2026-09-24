# KASHI — A City Beyond Time
# DESIGN SYSTEM & VISUAL LANGUAGE

**Document:** `design.md`  
**Version:** 1.0  
**Status:** Approved Design Foundation  
**Purpose:** Single source of truth for visual design, typography, color, spacing, components, responsive behavior, and design tokens.

---

# 1. DESIGN PHILOSOPHY

KASHI is a cinematic editorial experience, not a conventional tourism website.

The visual language should feel:

- Cinematic
- Editorial
- Timeless
- Warm
- Atmospheric
- Architectural
- Human
- Restrained
- Premium
- Culturally grounded

The design should feel inspired by:

```text
Old photographic archives
+
Indian editorial design
+
Travel posters
+
Museum / cultural exhibition interfaces
+
Modern cinematic websites
```

It should **not** feel like:

- A generic travel template
- A SaaS dashboard
- A generic AI website
- Excessive glassmorphism
- Neon cyberpunk UI
- Overly rounded modern cards
- Excessive gradients
- Generic "spiritual" website aesthetics

---

# 2. CORE VISUAL PRINCIPLE

The website should maintain a contrast between:

```text
DARK / QUIET / IMMERSIVE
        ↓
IMAGE / CULTURE / LIGHT
        ↓
TYPOGRAPHY / INFORMATION
```

The UI should generally stay quiet while the imagery and typography carry the emotion.

---

# 3. DESIGN TOKENS — ABSOLUTE RULE

**Every reusable visual value must be represented by a design variable/token.**

Do not scatter raw values throughout components.

Avoid:

```css
color: #E8DCC8;
margin: 37px;
font-size: 84px;
```

Prefer:

```css
color: var(--color-text-primary);
margin: var(--space-8);
font-size: var(--font-size-display);
```

The objective is that changing the visual identity later should require changing tokens rather than rewriting components.

---

# 4. TOKEN ARCHITECTURE

Recommended structure:

```text
src/
└── styles/
    ├── tokens.css
    ├── globals.css
    └── typography.css
```

If the project architecture uses another styling location, preserve the same conceptual separation.

Token hierarchy:

```text
Primitive Tokens
      ↓
Semantic Tokens
      ↓
Component Tokens
      ↓
Components
```

Example:

```text
Primitive:
--palette-ink

Semantic:
--color-background-primary

Component:
--card-background

Component uses:
var(--card-background)
```

---

# 5. COLOR PALETTE

The palette is intentionally inspired by:

- Ganga at dawn
- aged paper
- stone
- charcoal
- muted brass
- old travel posters
- temple interiors
- evening light

Avoid highly saturated digital colors.

---

# 6. BASE COLOR PALETTE

## 6.1 Ink Black

```text
Name: Kashi Ink
HEX: #10100E
```

Use for:

- Primary dark backgrounds
- Navigation
- Hero sections
- Cinematic transitions
- Footer

Token:

```css
--palette-ink: #10100E;
```

---

## 6.2 Deep Charcoal

```text
Name: Deep Charcoal
HEX: #191816
```

Use for:

- Secondary dark surfaces
- Cards
- Panels
- Elevated UI

```css
--palette-charcoal: #191816;
```

---

## 6.3 Warm Ivory

```text
Name: Aged Ivory
HEX: #E8E1D3
```

Use for:

- Primary text on dark backgrounds
- Poster borders
- Editorial surfaces
- Light backgrounds

```css
--palette-ivory: #E8E1D3;
```

---

## 6.4 Soft Sand

```text
Name: Sand
HEX: #CFC4B1
```

Use for:

- Secondary text
- Muted labels
- Supporting UI
- Subtle borders

```css
--palette-sand: #CFC4B1;
```

---

## 6.5 Muted Brass

```text
Name: Banaras Brass
HEX: #B59A63
```

Use sparingly for:

- Active states
- Index numbers
- Small accents
- Dividers
- Important metadata
- Selected states

```css
--palette-brass: #B59A63;
```

Brass is an accent, **not a dominant UI color**.

---

## 6.6 Ganga Mist

```text
Name: Ganga Mist
HEX: #AEB8B3
```

Use for:

- Cool atmospheric accents
- Secondary surfaces
- Certain imagery overlays
- Subtle UI details

```css
--palette-ganga-mist: #AEB8B3;
```

---

## 6.7 Burnt Terracotta

```text
Name: Burnt Terracotta
HEX: #985F49
```

Use selectively for:

- Poster accents
- Cultural/editorial highlights
- Selected illustrations
- Supporting visual identity

```css
--palette-terracotta: #985F49;
```

---

# 7. SEMANTIC COLOR TOKENS

Components should **not** normally consume palette tokens directly.

Use semantic tokens.

```css
:root {
  --color-background-primary: var(--palette-ink);
  --color-background-secondary: var(--palette-charcoal);

  --color-surface: #211F1B;
  --color-surface-elevated: #28251F;

  --color-text-primary: var(--palette-ivory);
  --color-text-secondary: var(--palette-sand);
  --color-text-muted: #8E887D;

  --color-accent: var(--palette-brass);
  --color-accent-secondary: var(--palette-terracotta);

  --color-border: rgba(232, 225, 211, 0.18);
  --color-border-strong: rgba(232, 225, 211, 0.34);

  --color-overlay: rgba(16, 16, 14, 0.72);

  --color-error: #A85D55;
  --color-success: #77866B;
}
```

These values can be adjusted centrally.

---

# 8. LIGHT SURFACE TOKENS

Some editorial/poster experiences may require a light surface.

```css
:root {
  --color-light-background: #E8E1D3;
  --color-light-surface: #F0EADF;

  --color-light-text-primary: #171613;
  --color-light-text-secondary: #4B463D;

  --color-light-border: rgba(16, 16, 14, 0.18);
}
```

Do not create a completely separate visual identity for light sections.

They should still feel like KASHI.

---

# 9. COLOR USAGE RATIO

Recommended overall visual ratio:

```text
Dark / neutral foundation    ~70%
Imagery                      ~20%
Accent colors                ~10% or less
```

Accent colors must never dominate the interface.

---

# 10. GRADIENT RULE

Gradients are allowed only when they support:

- readability
- cinematic lighting
- image transitions
- atmospheric depth

Never use gradients merely as decoration.

Preferred:

```text
Transparent → dark overlay
```

Avoid:

```text
Bright purple → pink → blue
```

or other generic digital gradients.

---

# 11. TYPOGRAPHY SYSTEM

The project uses **exactly two primary typefaces**.

## Display / Headings

**Caesura Bold**

## Supporting / Editorial

**Peristiva**

The pairing should create:

```text
Caesura Bold
=
Authority / Architecture / Cinema

Peristiva
=
Editorial / Human / Cultural / Supporting voice
```

Do not introduce a third primary typeface.

---

# 12. FONT FILE ORGANIZATION

Recommended:

```text
public/
└── fonts/
    ├── Caesura-Bold.woff2
    └── Peristiva.woff2
```

If the actual font files have different filenames, preserve the actual filenames while maintaining the same role mapping.

---

# 13. FONT VARIABLES

Define fonts centrally.

```css
:root {
  --font-display: "Caesura", serif;
  --font-editorial: "Peristiva", serif;
}
```

Semantic aliases:

```css
--font-heading: var(--font-display);
--font-body: var(--font-editorial);
--font-ui: var(--font-editorial);
```

Do not directly write font family names repeatedly inside components.

---

# 14. TYPOGRAPHY RULE

The typography hierarchy is intentionally compact.

The project uses **three primary text sizes**:

```text
1. Heading
2. Subheading
3. Body
```

Do not create dozens of arbitrary font sizes.

Responsive scaling should happen through the same token.

---

# 15. HEADING SIZE

Primary heading:

```text
Desktop: clamp(3.5rem, 7vw, 7rem)
Mobile: clamp(2.5rem, 12vw, 4.5rem)
```

Recommended token:

```css
--font-size-heading: clamp(3.5rem, 7vw, 7rem);
```

Font:

```text
Caesura Bold
```

Usage:

- Hero titles
- Major chapter titles
- Section titles
- Poster titles where appropriate

---

# 16. SUBHEADING SIZE

Primary subheading:

```text
Desktop: clamp(1.5rem, 2.5vw, 2.5rem)
Mobile: clamp(1.25rem, 5vw, 1.75rem)
```

Token:

```css
--font-size-subheading: clamp(1.5rem, 2.5vw, 2.5rem);
```

Font:

```text
Peristiva
```

or Caesura Bold when the hierarchy specifically requires it.

---

# 17. BODY SIZE

Body text:

```text
Desktop: 1rem
Mobile: 0.95rem
```

Token:

```css
--font-size-body: clamp(0.95rem, 1vw, 1rem);
```

Font:

```text
Peristiva
```

---

# 18. MICRO UI TEXT

Small UI text is allowed as a supporting utility size.

This is **not a fourth content hierarchy**.

Use only for:

- navigation
- labels
- indexes
- metadata
- captions
- technical UI

Token:

```css
--font-size-ui: 0.72rem;
```

Do not use this for important reading content.

---

# 19. TYPOGRAPHY WEIGHTS

Caesura:

```text
Bold
```

Peristiva:

```text
Regular
```

Avoid artificial font-weight manipulation if the font does not contain the required weight.

Do not use:

```css
font-weight: 900;
```

on a font that only provides a regular/bold face.

---

# 20. LETTER SPACING

Heading:

```css
--tracking-heading: 0.015em;
```

Subheading:

```css
--tracking-subheading: 0.01em;
```

Body:

```css
--tracking-body: 0em;
```

UI:

```css
--tracking-ui: 0.12em;
```

UI labels may use increased tracking.

Do not excessively space editorial text.

---

# 21. LINE HEIGHT

```css
:root {
  --leading-heading: 0.92;
  --leading-subheading: 1.05;
  --leading-body: 1.55;
  --leading-ui: 1.2;
}
```

Headings should feel compact and architectural.

Body copy must remain comfortable to read.

---

# 22. TEXT TRANSFORMATION

Major headings:

```text
Prefer original casing / intentional typography.
```

UI labels:

```text
ALL CAPS
```

when appropriate.

Do not force:

```css
text-transform: uppercase;
```

globally.

---

# 23. TYPOGRAPHIC HIERARCHY

Recommended:

```text
H1
Caesura Bold
Heading size

H2
Caesura Bold / Peristiva
Heading or Subheading size

H3
Peristiva / Caesura
Subheading size

Body
Peristiva
Body size

Metadata
Peristiva
UI size
```

---

# 24. MAXIMUM TEXT WIDTH

Long-form text should not span the entire screen.

```css
--measure-body: 38rem;
--measure-wide: 52rem;
```

Use:

```text
measure-body
```

for descriptions.

Use:

```text
measure-wide
```

for larger editorial blocks.

---

# 25. SPACING SYSTEM

Spacing must use tokens.

Base unit:

```text
4px
```

Token system:

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

Use the closest existing token rather than inventing:

```text
37px
53px
71px
```

unless a very specific visual requirement demands it.

---

# 26. SECTION SPACING

Major cinematic sections:

```css
--section-padding-y: clamp(5rem, 12vw, 12rem);
```

Compact sections:

```css
--section-padding-y-compact: clamp(3rem, 7vw, 6rem);
```

---

# 27. PAGE GUTTERS

Desktop:

```css
--page-gutter: clamp(2rem, 5vw, 6rem);
```

Mobile:

```css
--page-gutter-mobile: 1.25rem;
```

All major page content should respect the global gutter.

---

# 28. CONTAINER SYSTEM

```css
--container-max: 1440px;
```

Optional wider cinematic container:

```css
--container-wide: 1680px;
```

Text content should use narrower containers.

---

# 29. GRID SYSTEM

Default editorial grid:

```text
12 columns desktop
4 columns mobile
```

Recommended gap:

```css
--grid-gap: clamp(1rem, 2vw, 2rem);
```

Do not force every section into a grid.

Use grids where they improve structure.

---

# 30. BORDER RADIUS

KASHI is not a highly rounded UI.

Default:

```css
--radius-sm: 2px;
--radius-md: 4px;
--radius-lg: 8px;
--radius-pill: 999px;
```

Use rounded corners sparingly.

Posters may use:

```text
small / nearly square corners
```

not large rounded cards.

---

# 31. SHADOWS

Shadows should be subtle.

```css
--shadow-soft:
  0 12px 40px rgba(0, 0, 0, 0.18);

--shadow-deep:
  0 24px 80px rgba(0, 0, 0, 0.32);
```

Do not use heavy UI shadows everywhere.

Depth should primarily come from:

- imagery
- lighting
- layering
- contrast
- motion

---

# 32. BORDERS

Default border:

```css
--border-thin: 1px solid var(--color-border);
```

Strong border:

```css
--border-strong: 1px solid var(--color-border-strong);
```

Borders should feel editorial rather than dashboard-like.

---

# 33. ICONOGRAPHY

Icons should be:

- minimal
- geometric
- thin
- quiet

Avoid decorative icon packs that conflict with the visual identity.

Icons should not compete with typography.

---

# 34. BUTTON SYSTEM

Buttons should be restrained.

Primary button:

```text
Background: Ivory
Text: Ink
```

Secondary:

```text
Transparent
Border: Ivory opacity
Text: Ivory
```

Accent:

```text
Brass
```

Use accent buttons sparingly.

---

# 35. BUTTON TYPOGRAPHY

Buttons use:

```text
Peristiva
UI size
```

Optional uppercase:

```text
letter-spacing: var(--tracking-ui)
```

---

# 36. BUTTON HEIGHT

```css
--button-height-sm: 2.25rem;
--button-height-md: 2.75rem;
--button-height-lg: 3.25rem;
```

Horizontal padding:

```css
--button-padding-x: 1.25rem;
```

---

# 37. NAVIGATION

Navigation should remain minimal.

Recommended visual structure:

```text
Logo / KASHI
        |
Navigation
        |
Current section / utility
```

Avoid large persistent navigation bars that dominate the cinematic experience.

---

# 38. NAVIGATION TYPOGRAPHY

Use:

```text
Peristiva
UI size
```

with increased tracking.

Primary navigation should be visually quiet.

---

# 39. OVERLAY NAVIGATION

If navigation overlays an image:

```text
Background: transparent
Text: ivory
Shadow / subtle scrim if required
```

Do not place an opaque heavy navbar over every hero.

---

# 40. PAGE TRANSITIONS

Transitions are part of the visual language.

Default transition tokens:

```css
--transition-fast: 180ms;
--transition-normal: 400ms;
--transition-slow: 800ms;
```

Cinematic transition:

```css
--transition-cinematic: 1200ms;
```

Use GSAP for complex timeline transitions.

---

# 41. EASING

Centralize easing values.

```css
--ease-standard: cubic-bezier(0.2, 0.65, 0.3, 1);
--ease-smooth: cubic-bezier(0.16, 1, 0.3, 1);
```

For GSAP, define equivalent project-level constants where required.

Do not randomly select easing values per component.

---

# 42. IMAGE TREATMENT

Images are primary design elements.

Preferred treatment:

```text
Natural photography
+
subtle motion
+
controlled crop
+
minimal overlay
```

Avoid excessive filters.

---

# 43. LIVING PHOTOGRAPH EFFECT

The ghat hero images should feel alive without becoming videos.

Recommended movement:

```text
Very slow scale
+
subtle positional drift
+
light / atmosphere where appropriate
```

Example token values:

```css
--living-image-scale: 1.04;
--living-image-duration: 12s;
--living-image-drift: 1.5%;
```

These values must remain configurable.

---

# 44. IMAGE OVERLAY TOKENS

```css
--image-overlay-light: rgba(16, 16, 14, 0.16);
--image-overlay-medium: rgba(16, 16, 14, 0.38);
--image-overlay-heavy: rgba(16, 16, 14, 0.68);
```

Use the minimum overlay necessary.

---

# 45. HERO SYSTEM

A hero should generally contain:

```text
Image / scene
+
Title
+
Minimal supporting text
+
Navigation / progress if necessary
```

Do not overcrowd the hero.

---

# 46. HERO TITLE PLACEMENT

Title placement may vary by chapter, but should generally follow:

```text
Center
→ introduction

Corner / edge
→ continued exploration
```

For "Steps to Eternity", the approved behavior is:

```text
Ghat name centered initially
        ↓
moves toward left corner during scroll
```

Do not change this behavior casually.

---

# 47. SECTION LABELS

Small labels can use:

```text
Peristiva
ALL CAPS
UI size
Tracking: var(--tracking-ui)
Color: var(--color-accent)
```

Example:

```text
01 / STEPS TO ETERNITY
```

---

# 48. INDEX SYSTEM

The website may use editorial indexes:

```text
01
02
03
...
```

Indexes should be:

- small
- consistent
- aligned
- subtle

Recommended color:

```text
var(--color-accent)
```

---

# 49. GHAT COMPONENT SYSTEM

A ghat experience can be composed from:

```text
GhatHero
├── GhatImage
├── GhatTitle
├── GhatIndex
├── GhatTagline
├── GhatDescription
└── GhatNavigation
```

The visual treatment must preserve the selected hero photograph.

---

# 50. KASHI UNFOLDED CARD SYSTEM

The Kashi Unfolded grid uses editorial poster cards.

Structure:

```text
PosterCard
├── Number
├── Image
├── Structure / PNG overlay
├── Heading
├── Tagline
└── Decorative poster details
```

---

# 51. POSTER CARD VISUAL LANGUAGE

Each poster should feel like an individual printed travel poster.

Shared rules:

```text
Dull / muted palette
+
editorial typography
+
aged-paper feeling
+
strong image composition
+
thin border
+
distinct accent color
```

Do not make all nine posters identical.

---

# 52. POSTER BORDER

Recommended:

```css
--poster-border: 1px solid rgba(16, 16, 14, 0.28);
```

Poster border color may adapt to the individual poster palette through a component token.

---

# 53. POSTER COLORS

Each poster should have its own controlled palette.

However:

```text
No neon
No extremely saturated digital colors
No random gradients
```

Every palette should remain compatible with the overall KASHI identity.

Sarnath's muted olive/green treatment remains distinct.

---

# 54. POSTER GRID

Desktop:

```text
3 × 3
```

Tablet:

```text
2 columns
```

Mobile:

```text
1 column
```

Use generous spacing.

Recommended:

```css
--poster-grid-gap: clamp(1rem, 2.5vw, 2.5rem);
```

---

# 55. POSTER EXPANSION

Clicking a poster may expand it to approximately:

```text
80vw × 80vh
```

subject to viewport constraints.

The expanded state should feel like viewing a physical poster rather than opening a generic modal.

---

# 56. MODAL / DETAIL OVERLAY

Overlay tokens:

```css
--overlay-background: rgba(16, 16, 14, 0.88);
--overlay-blur: 8px;
```

Use blur carefully.

The poster itself should remain the focal point.

---

# 57. TEMPLE COMPONENT SYSTEM

Temple experience:

```text
TempleSection
├── TempleModel
├── TempleTitle
├── TempleDescription
├── TempleIndex
└── TempleNavigation
```

Alternating layout:

```text
Temple 1
Image / Model → Right
Information → Left

Temple 2
Information → Right
Image / Model → Left
```

---

# 58. TEMPLE 3D INTERACTION

Desktop:

```text
Left mouse drag
→ rotate model horizontally
```

Scroll:

```text
Scroll
→ transition between temples
```

Mobile:

```text
Touch drag
→ rotate model

Vertical swipe / scroll
→ navigate
```

Interaction must not destroy normal page scrolling.

---

# 59. KASHI RASOI SYSTEM

Food experience:

```text
Central 3D delicacy
+
supporting editorial text
+
scroll-driven model interaction
```

The 3D model is the visual anchor.

Do not surround it with unnecessary UI.

---

# 60. RASOI 3D CONTROLS

Primary control:

```text
Scroll
→ model rotation / progression
```

Optional desktop interaction:

```text
Pointer movement
→ subtle response
```

Avoid excessive manual controls unless required.

---

# 61. STORY OF KASHI

The history experience should use restrained editorial typography.

Recommended hierarchy:

```text
Chapter number
↓
Chapter title
↓
Short narrative
↓
Image / visual
```

Avoid large walls of text.

---

# 62. AARTI / SHAAM-E-BANARAS

The Aarti experience is represented within the Kashi Unfolded poster system rather than as a separate primary chapter.

The poster should preserve the approved identity:

```text
SHAAM-E-BANARAS
The Ganga glows after dusk.
```

---

# 63. OPENING EXPERIENCE

"The Infinite Door — Beyond Kashi" should use a minimal visual language.

Recommended:

```text
Near-black environment
+
monumental doorway
+
white/golden light
+
silhouette
+
minimal typography
```

Do not introduce temple architecture into the doorway itself.

---

# 64. OPENING TYPOGRAPHY

Typography must remain subordinate to the visual event.

The opening should not become a text-heavy hero.

Use:

```text
Caesura Bold
```

for the primary statement.

Peristiva may support the quote or secondary information.

---

# 65. OPENING DURATION

The opening experience should remain approximately:

```text
≤ 12 seconds
```

It must never feel like a mandatory loading screen.

Provide a way to proceed when appropriate.

---

# 66. LANDING PAGE

Landing title:

> **KASHI — A City Beyond Time**

The landing experience should emphasize:

```text
Ganga
+
Ghats
+
City atmosphere
```

rather than reducing the website to a single religious symbol.

---

# 67. ENDING — THE SPIRIT OF KASHI

The ending returns to the Ganga.

Visual language:

```text
Quiet
+
reflective
+
minimal
+
warm
```

Avoid adding a conventional:

```text
Plan Your Visit
Book Now
Explore Hotels
```

section.

The experience should end emotionally, not commercially.

---

# 68. BACKGROUND SYSTEM

Default backgrounds:

```css
--background-primary: var(--color-background-primary);
--background-secondary: var(--color-background-secondary);
```

Image-led sections may use transparent backgrounds.

Avoid section-by-section random colors.

---

# 69. Z-INDEX SYSTEM

Centralize layering.

```css
:root {
  --z-base: 0;
  --z-content: 10;
  --z-overlay: 20;
  --z-navigation: 30;
  --z-modal: 40;
  --z-transition: 50;
  --z-loader: 60;
}
```

Do not use arbitrary:

```text
z-index: 99999
```

throughout the application.

---

# 70. RESPONSIVE BREAKPOINTS

Use a small, predictable breakpoint system.

```css
--breakpoint-mobile: 640px;
--breakpoint-tablet: 768px;
--breakpoint-desktop: 1024px;
--breakpoint-wide: 1440px;
```

If Tailwind is used, map the project tokens to Tailwind configuration where appropriate.

Do not create unnecessary breakpoints.

---

# 71. MOBILE TYPOGRAPHY

Mobile headings should remain dramatic but not consume the entire viewport.

Use:

```css
font-size: clamp(...);
```

rather than separate arbitrary sizes for every breakpoint.

---

# 72. MOBILE SPACING

Reduce:

- section padding
- grid gaps
- poster margins
- text width

but preserve the visual rhythm.

Do not simply scale everything down proportionally.

---

# 73. MOBILE NAVIGATION

Navigation must remain usable with touch.

Recommended:

```text
large enough tap target
+
minimal visual footprint
+
clear current location
```

---

# 74. TOUCH TARGET

Interactive controls should generally provide at least:

```text
44 × 44px
```

of practical touch area.

The visual icon may be smaller.

---

# 75. ACCESSIBILITY COLORS

Minimum contrast should be considered for all meaningful text.

If an image causes poor contrast:

```text
adjust overlay
```

before changing the approved typography or imagery.

---

# 76. FOCUS STATES

Focus states should use the accent system.

Example:

```css
--focus-ring:
  0 0 0 2px var(--color-accent);
```

Do not remove focus indicators.

---

# 77. REDUCED MOTION TOKENS

Centralize reduced-motion behavior.

```css
@media (prefers-reduced-motion: reduce) {
  :root {
    --transition-fast: 0ms;
    --transition-normal: 0ms;
    --transition-slow: 0ms;
    --living-image-duration: 0ms;
  }
}
```

Complex GSAP/3D animations must also explicitly respect the preference.

---

# 78. MOTION INTENSITY

Define a global motion scale:

```css
:root {
  --motion-intensity: 1;
}
```

Potential future variants:

```text
0 = reduced
0.5 = subtle
1 = standard
```

Animations should derive major movement values from this concept where practical.

---

# 79. OPACITY TOKENS

```css
--opacity-subtle: 0.45;
--opacity-muted: 0.65;
--opacity-medium: 0.8;
--opacity-strong: 0.92;
```

Avoid arbitrary opacity values everywhere.

---

# 80. BLUR TOKENS

```css
--blur-sm: 4px;
--blur-md: 8px;
--blur-lg: 16px;
```

Blur should be used mainly for:

- overlays
- atmospheric transitions
- modal backdrops

not as a default design effect.

---

# 81. DESIGN TOKEN FILE

A central token file should contain at minimum:

```css
:root {
  /* Colors */
  --palette-ink: #10100E;
  --palette-charcoal: #191816;
  --palette-ivory: #E8E1D3;
  --palette-sand: #CFC4B1;
  --palette-brass: #B59A63;
  --palette-ganga-mist: #AEB8B3;
  --palette-terracotta: #985F49;

  /* Typography */
  --font-display: "Caesura", serif;
  --font-editorial: "Peristiva", serif;

  --font-size-heading: clamp(3.5rem, 7vw, 7rem);
  --font-size-subheading: clamp(1.5rem, 2.5vw, 2.5rem);
  --font-size-body: clamp(0.95rem, 1vw, 1rem);
  --font-size-ui: 0.72rem;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-5: 1.25rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-10: 2.5rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-20: 5rem;
  --space-24: 6rem;
  --space-32: 8rem;
  --space-40: 10rem;

  /* Layout */
  --container-max: 1440px;
  --container-wide: 1680px;
  --page-gutter: clamp(2rem, 5vw, 6rem);
  --page-gutter-mobile: 1.25rem;

  /* Radius */
  --radius-sm: 2px;
  --radius-md: 4px;
  --radius-lg: 8px;
  --radius-pill: 999px;

  /* Motion */
  --transition-fast: 180ms;
  --transition-normal: 400ms;
  --transition-slow: 800ms;
  --transition-cinematic: 1200ms;

  /* Layering */
  --z-base: 0;
  --z-content: 10;
  --z-overlay: 20;
  --z-navigation: 30;
  --z-modal: 40;
  --z-transition: 50;
  --z-loader: 60;
}
```

This is a starting foundation. Components should consume semantic/component variables wherever practical.

---

# 82. COMPONENT TOKENIZATION

Components may define local tokens.

Example:

```css
.poster-card {
  --poster-padding: var(--space-4);
  --poster-border: var(--color-light-border);
  --poster-title-size: var(--font-size-subheading);
}
```

Then:

```css
.poster-card__title {
  font-size: var(--poster-title-size);
}
```

This allows individual component tuning without spreading values across the application.

---

# 83. DO NOT USE RAW DESIGN VALUES

Avoid:

```tsx
style={{
  marginTop: "47px",
  color: "#B59A63"
}}
```

Prefer:

```tsx
className="..."
```

with token-backed CSS/Tailwind utilities.

If inline style is required for a dynamic animation value, the value should still originate from a centralized token/configuration whenever possible.

---

# 84. TAILWIND RULE

If Tailwind is used:

```text
Tailwind = implementation layer
Design tokens = source of truth
```

Do not allow arbitrary Tailwind values to become the design system.

Avoid excessive:

```text
mt-[37px]
text-[73px]
bg-[#123456]
```

Prefer token-backed utilities.

---

# 85. COMPONENT NAMING

Use semantic names.

Good:

```text
GhatHero
PosterCard
PosterDetail
TempleViewer
LivingImage
ChapterHeader
PageTransition
```

Avoid:

```text
CoolCard
FancySection
Thing
Box2
NewComponentFinal
```

---

# 86. COMPONENT STATES

Interactive components should define states:

```text
Default
Hover
Focus
Active
Disabled
Loading
Error
```

Only implement states relevant to the component.

---

# 87. CARD RULE

Not every content block should become a card.

Use cards when the content represents a distinct object.

For example:

```text
Poster
Ghat
Temple
```

may justify a structured visual component.

A simple paragraph does not need a card.

---

# 88. EDITORIAL ALIGNMENT

Prefer strong alignments:

```text
Left edge
Center axis
Grid columns
```

Avoid random positioning unless intentionally part of the visual design.

---

# 89. ASYMMETRY

Asymmetry is allowed and encouraged when it creates editorial character.

But it must be controlled.

Good:

```text
Image 60%
Text 40%
```

Bad:

```text
Everything randomly offset
```

---

# 90. WHITESPACE

Whitespace is a major part of the design.

Do not fill empty space simply because it exists.

Empty space can communicate:

- scale
- silence
- importance
- transition
- reflection

---

# 91. VISUAL HIERARCHY

Every viewport should have an obvious primary focus.

Priority:

```text
1. Main image / scene
2. Main title
3. Supporting narrative
4. Navigation / metadata
5. Decorative details
```

Decorative elements must never compete with the primary content.

---

# 92. CONTENT DENSITY

Preferred:

```text
Low-to-medium density
```

Especially for cinematic chapters.

Avoid:

```text
Dashboard density
```

---

# 93. SECTION TRANSITIONS

Section transitions should visually communicate movement between chapters.

Possible mechanisms:

- fade
- exposure
- image morph
- short galli video
- scale
- directional movement

Do not use every transition technique everywhere.

---

# 94. TRANSITION CONSISTENCY

A transition should have a recognizable visual language.

Do not make:

```text
Page A → glitch
Page B → liquid distortion
Page C → spinning cube
```

unless explicitly designed.

The site should feel like one experience.

---

# 95. FOOTER

The footer should be minimal.

It should not look like a corporate website footer.

Potential elements:

```text
KASHI
Small closing statement
Navigation
Credits
```

Avoid:

- huge link clouds
- newsletter forms
- unnecessary social grids
- commercial CTAs

unless specifically requested.

---

# 96. LOADING EXPERIENCE

The loader should belong to the KASHI visual identity.

Use:

```text
dark background
+
restrained typography
+
subtle progress / transition
```

Do not use generic spinners as the primary experience unless necessary.

---

# 97. ERROR PAGE

Error pages should retain the visual language.

Example hierarchy:

```text
404
Something is missing.
Return to Kashi.
```

The exact copy may evolve, but the structure should remain minimal.

---

# 98. EMPTY STATES

Empty states should be quiet and informative.

Do not fill empty states with unnecessary illustrations.

---

# 99. DESIGN DOCUMENTATION RULE

Whenever a new reusable visual pattern is introduced, ask:

```text
Is this a one-off?
```

If no:

```text
Add a token/component rule.
```

Do not create undocumented recurring visual behavior.

---

# 100. DESIGN CHANGE RULE

If the visual identity needs to change later, the preferred workflow is:

```text
Change token
      ↓
Components inherit change
      ↓
Pages update automatically
```

Avoid:

```text
Search entire project
→ manually replace colors
→ manually replace sizes
→ manually replace spacing
→ hope nothing broke
```

---

# 101. DESIGN QA CHECKLIST

Before considering a visual implementation complete:

## Typography

- [ ] Caesura used for display hierarchy
- [ ] Peristiva used for editorial/supporting text
- [ ] No unnecessary third font
- [ ] Heading/subheading/body hierarchy is clear
- [ ] Text remains readable

## Color

- [ ] Approved palette used
- [ ] Accent is restrained
- [ ] No random colors
- [ ] No generic neon gradients
- [ ] Contrast is sufficient

## Spacing

- [ ] Tokenized spacing used
- [ ] Page gutters consistent
- [ ] Sections have breathing room
- [ ] No arbitrary spacing explosion

## Components

- [ ] Components are reusable
- [ ] States are handled
- [ ] Naming is semantic
- [ ] Component values use tokens

## Responsive

- [ ] Mobile checked
- [ ] Tablet checked
- [ ] Desktop checked
- [ ] Touch interactions work
- [ ] Text does not overflow

## Motion

- [ ] Animation has a purpose
- [ ] Motion is not excessive
- [ ] Reduced motion is respected
- [ ] Animations are cleaned up

## Assets

- [ ] Approved assets preserved
- [ ] Correct crops
- [ ] No broken paths
- [ ] Appropriate loading strategy

---

# 102. NON-NEGOTIABLE DESIGN RULES

```text
1. Two primary fonts only:
   Caesura Bold + Peristiva.

2. Three primary content sizes:
   Heading + Subheading + Body.

3. Every reusable visual value must be tokenized.

4. Components must consume tokens rather than hardcoded values.

5. The color palette must remain muted and cinematic.

6. Accent colors are controlled, not dominant.

7. Typography carries the editorial identity.

8. Imagery carries much of the emotional identity.

9. Whitespace is intentional.

10. Motion is purposeful.

11. Mobile is designed, not merely scaled.

12. Accessibility is part of the design.

13. Approved images and poster identities are protected.

14. No random UI trends.

15. No visual inconsistency between chapters.

16. Any future design change should be possible primarily
    by modifying centralized tokens.
```

---

# 103. FINAL DESIGN PRINCIPLE

The design system exists to make the entire website feel like it was created by **one intentional visual mind**.

Every page may have a different atmosphere.

Every poster may have a different palette.

Every chapter may have a different interaction.

But underneath all of it, the same identity must remain visible:

> **KASHI — A City Beyond Time.**

The design should feel less like a website being browsed and more like a place being experienced.
