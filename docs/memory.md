# KASHI — A City Beyond Time
# PROJECT MEMORY / CONTEXT HANDOFF

**Document:** `memory.md`  
**Version:** 1.0  
**Purpose:** Persistent project memory for AI agents working on the Kashi website.

---

# 0. PURPOSE OF THIS FILE

This file is the **living memory of the project**.

It exists so that if development is:

- paused,
- resumed,
- moved to another AI coding tool,
- moved to another developer,
- or continued in a new conversation,

the next AI can understand the current state without reconstructing the entire project from scratch.

This file should contain:

```text
Important decisions
+
Implemented features
+
Current architecture decisions
+
Known bugs
+
Resolved bugs
+
Changes from original plan
+
Asset decisions
+
Design decisions
+
Technical decisions
+
Pending work
+
Important discoveries
```

---

# 1. MEMORY RULES

## Rule 1 — This is a living document.

AI agents must update this file whenever an important project-level decision is made.

---

## Rule 2 — Do not store useless information.

Do NOT record:

```text
"Changed margin from 32px to 36px for testing."
```

unless that change becomes a permanent design decision.

---

## Rule 3 — Record decisions, not every action.

Good:

```text
Decision:
The landing page uses a full-screen Ganga hero instead of a Maa Ganga-specific hero.
Reason:
The project should represent the whole city rather than one religious symbol.
```

Bad:

```text
Opened Hero.tsx.
Changed line 24.
Ran npm install.
```

---

## Rule 4 — Never silently overwrite history.

If an important decision changes:

```text
Previous:
X

New:
Y

Reason:
Z
```

Record the change.

---

## Rule 5 — Never delete important technical history.

If a bug is fixed, keep a short record:

```text
Bug
Cause
Fix
Status
```

This prevents future agents from reintroducing the same problem.

---

## Rule 6 — Keep the file readable.

Use short entries.

Do not dump entire conversations into this file.

---

# 2. PROJECT IDENTITY

## Project Name

```text
KASHI — A City Beyond Time
```

## Project Type

Immersive cinematic cultural website focused on:

```text
Kashi / Varanasi
```

## Primary Objective

Create an interactive digital experience that allows visitors to experience Kashi through:

- visual storytelling
- cinematic transitions
- photography
- typography
- 3D interactions
- editorial travel-poster design
- cultural storytelling
- food
- architecture
- history
- atmosphere

The website should feel like an **experience**, not a conventional tourism website.

---

# 3. SOURCE DOCUMENTS

The following documents define the project:

```text
prd.md
architecture.md
rules.md
design.md
task.md
memory.md
```

Priority:

```text
prd.md
    ↓
architecture.md
    ↓
design.md
    ↓
rules.md
    ↓
task.md
    ↓
memory.md
```

However, `memory.md` records **later implementation decisions**.

If implementation intentionally differs from an earlier plan, the current decision in `memory.md` should be respected unless explicitly reversed.

---

# 4. CURRENT PROJECT STATUS

## Overall Status

```text
IMPLEMENTATION
```

The project documentation foundation has been created.

Current planning documents:

```text
[✓] prd.md
[✓] architecture.md
[✓] rules.md
[✓] design.md
[✓] task.md
[✓] memory.md
```

Actual application implementation status should be updated below as development progresses.

---

# 5. CURRENT DEVELOPMENT PHASE

```text
Phase:
PHASE 4 — Remaining chapters as routes (Phases 0–2 complete, landing extended)

Current Task:
TASK 9.x — Where Gods Reside (or TASK 10.x / 11.x)

Last Completed Task:
TASK 3.x — Opening realized as the page preloader (3D door still outstanding)
TASK 4.1–4.6 — Hero, journey index, chapter presentation
TASK 5.1–5.3 — Navigation, feedback, return
Plus: Steps to Eternity, Story of Kashi and The Spirit of Kashi as landing sections

Next Task:
Where Gods Reside, Kashi Unfolded or Kashi Rasoi — the three chapters that are
still their own routes and are not built yet.
```

---

# 6. COMPLETED FEATURES

Maintain a checklist.

```text
[✓] Project foundation (Phase 0)
[✓] Global design tokens (Task 1.1)
[✓] Typography (Task 1.2)
[✓] Global layout utilities (Task 1.3)
[✓] Global UI primitives (Task 1.4)
[✓] Global motion system (Task 1.5)

[✓] Landing route + shell (Task 2.1)
[✓] Landing state architecture (Task 2.2)
[✓] Landing hero — first pass (TASK 4.1–4.3)
[✓] Journey navigation — first pass (TASK 4.4–4.6)
[✓] Smooth scroll (architecture.md §7)
[✓] Page preloader (TASK 3 behaviour; 3D door still outstanding)
[✓] Steps to Eternity — living photograph hero experience with dual navigation (Prompt locked)
[✓] Story of Kashi — landing section, ink band
[✓] The Spirit of Kashi — landing section, light band
[✓] Navigation, feedback and return (TASK 5.1–5.3)
[ ] Infinite Door 3D scene (TASK 3.1–3.5) — blocked, no model asset
[ ] Ganga hero — living-photograph treatment (TASK 4.2)
[ ] Landing responsive QA (TASK 6.2) — needs a running app
[ ] Landing accessibility QA (TASK 6.3) — needs a running app
[ ] Landing performance (TASK 6.4) — needs a running app

[✓] Where Gods Reside — dedicated page (/temples & /where-gods-reside), large cinematic image preview window with alternating composition across 8 locked temples
[ ] Kashi Unfolded — blocked, no poster assets
[ ] Kashi Rasoi — blocked, no food models or images

[ ] Global page transitions — blocked, no galli video (TASK 13.2–13.4)
[✓] Global navigation (TASK 14.1–14.3)
[✓] Asset fallbacks (TASK 18.3)
[✓] Error handling (TASK 18.1, 18.2, 18.4)
[✓] Keyboard bypass + focus (TASK 16.2)
[✓] Reduced motion (TASK 16.3)
[✓] Contrast on the light bands (TASK 16.4)
[ ] Responsive / touch QA (TASK 15.x) — needs a running app
[ ] Performance optimization (TASK 17.x) — needs measurement
[ ] Visual QA (TASK 19.x) — needs a running app
[ ] Production readiness (TASK 21.x) — needs a working shell
```

See §52a for exactly which tasks are blocked and what unblocks each one.

Not started deliberately: `data/` and `types/` are scaffolded but empty. Content
models belong to their chapters (TASK 7.2, 9.2, 10.2, 11.2, 8.2) and are not
part of Phase 1.

AI agents must update this checklist when tasks are genuinely completed.

---

# 7. MAJOR PRODUCT DECISIONS

---

## Decision 7.1 — Website is NOT a single long-scroll website.

Status:

```text
LOCKED
```

The experience consists of dedicated chapter/page experiences.

Structure:

```text
Landing
   ↓
Dedicated experience
   ↓
Back to Landing
```

---

## Decision 7.2 — Landing page comes first.

Status:

```text
LOCKED
```

The complete landing page must be implemented and stabilized before redirected experiences are developed.

---

## Decision 7.3 — Kashi is represented as a whole city.

Status:

```text
LOCKED
```

The landing experience should focus on:

```text
Kashi
+
Ganga
+
Ghats
+
City atmosphere
```

rather than reducing the identity of the project to one temple or religious symbol.

---

# 8. FINAL WEBSITE JOURNEY

Current approved sequence:

```text
01 — The Infinite Door — Beyond Kashi
          ↓
02 — KASHI — A City Beyond Time
          ↓
03 — Steps to Eternity
          ↓
04 — Story of Kashi
          ↓
05 — Where Gods Reside
          ↓
06 — Kashi Unfolded
          ↓
07 — Kashi Rasoi
          ↓
08 — The Spirit of Kashi
```

---

# 9. OPENING — THE INFINITE DOOR

## Status

```text
LOCKED CONCEPT
```

## Visual

```text
Near-total darkness
+
monumental minimal doorway
+
white/golden light rays
+
realistic human silhouette
```

Important:

```text
NO temple architecture in the doorway.
```

## Animation

```text
Darkness
↓
door/light appears
↓
silhouette approaches
↓
threshold
↓
white exposure
↓
landing
```

## Duration

```text
Maximum approximately 12 seconds.
```

It must not feel like a loading screen.

---

# 10. LANDING PAGE

## Approved Title

```text
KASHI — A City Beyond Time
```

## Visual Focus

```text
Ganga
+
ghats
+
Varanasi city atmosphere
```

The landing page should establish the overall identity of the city.

---

# 11. STEPS TO ETERNITY

## Concept

The dedicated ghat experience as one continuous horizontal cinematic canvas:

```text
STATE 0 — STEPS TO ETERNITY CHAPTER INTRO (No specific ghat identity)
   ↓ (Continuous physical spatial travel)
STATE 1 — ASSI GHAT (Ghat 01)
   ↓ (Continuous physical spatial travel)
STATE 2 — DASHASHWAMEDH GHAT (Ghat 02)
   ↓ (Continuous physical spatial travel)
STATE 3 — MANIKARNIKA GHAT (Ghat 03)
   ↓ (Continuous physical spatial travel)
STATE 4 — KEDAR GHAT (Ghat 04)
   ↓ (Continuous physical spatial travel)
STATE 5 — HARISHCHANDRA GHAT (Ghat 05)
   ↓ (Continuous physical spatial travel)
STATE 6 — GULERIA GHAT (Ghat 06)
   ↓ (Continuous physical spatial travel)
STATE 7 — CHET SINGH GHAT (Ghat 07)
   ↓ (Continuous physical spatial travel)
STATE 8 — NAMO GHAT (Ghat 08)
```

Transition from Landing Hero:
- Atmospheric gradient bridge that melts the dusk river waters of the Landing Hero into the dark gold atmosphere of the Steps to Eternity Intro without any hard horizontal line.

Canvas & Movement:
- 900vw continuous physical track (9 panels).
- True continuous movement with zero card/slide replacement and zero snapping.
- Continuous positions supported (e.g. 50% Assi + 50% Dashashwamedh simultaneously visible).
- Real-time 1:1 drag, horizontal trackpad gesture, Shift+wheel, momentum gliding.
- Normal vertical scroll remains completely un-hijacked throughout.

Each ghat gets:

```text
one hero photograph
+
living photograph effect
+
title
+
tagline
+
description
+
navigation
```

---

# 12. FINALIZED GHATS

Exactly eight ghats are currently approved.

```text
01 — Assi Ghat
02 — Dashashwamedh Ghat
03 — Manikarnika Ghat
04 — Kedar Ghat
05 — Harishchandra Ghat
06 — Guleria Ghat
07 — Chet Singh Ghat
08 — Namo Ghat
```

---

# 13. GHAT ASSET RULE

The approved uploaded/assigned photographs are the selected hero photographs.

## NON-NEGOTIABLE

Do not replace the selected ghat images unless the project owner explicitly requests it.

The photographs will receive a subtle:

```text
living photograph
```

treatment.

This means:

```text
very slow scale
+
subtle position drift
+
controlled atmosphere
```

The image must still clearly feel like a photograph.

---

# 14. GHAT TITLE BEHAVIOR

Approved interaction:

```text
Ghat name initially centered
        ↓
scroll
        ↓
name moves toward left corner
```

Do not casually replace this interaction.

---

# 15. STORY OF KASHI

## Format

Short cinematic experience.

It should contain approximately:

```text
4 chapters
```

The story combines:

```text
mythological context
+
documented history
+
Shiva
+
Ganga
+
Kashi
```

It should NOT become a long academic history page.

---

# 16. APPROVED SHIVA STATEMENT

The project has an approved Hindi thematic line:

```text
जहाँ कण-कण में शिव का वास है,
और हर घाट पर महादेव का अहसास है,
वो हमारी नगरी काशी है।
```

Use it as an important emotional/editorial moment where appropriate.

---

# 17. WHERE GODS RESIDE

## Concept

Dedicated redirected temple page (`/temples` and `/where-gods-reside`).

DECISION (2026-09-27):
All 3D temple models, Three.js models, and GLB viewers were eliminated.
The visual centerpiece is now a **LARGE IMAGE PREVIEW WINDOW** displaying ONE photograph at a time with subtle arrow navigation (← →) and photo counter (e.g. 01 / 04).

Layout alternates across all 8 locked temples:

```text
Temple 01 (Kashi Vishwanath):
Information → Left
Image Window → Right

Temple 02 (Kaal Bhairav):
Image Window → Left
Information → Right

Temple 03 (Sankat Mochan):
Information → Left
Image Window → Right

Temple 04 (Durga Temple):
Image Window → Left
Information → Right

Temple 05 (Annapurna Temple):
Information → Left
Image Window → Right

Temple 06 (Tulsi Manas Temple):
Image Window → Left
Information → Right

Temple 07 (Sankatha Devi Temple):
Information → Left
Image Window → Right

Temple 08 (New Vishwanath Temple — BHU):
Image Window → Left
Information → Right
```

Ending concludes with:
"EIGHT TEMPLES. ONE ETERNAL CITY."
and "← BACK TO KASHI".

---

# 18. TEMPLE IMAGE INTERACTION

Desktop:
- Large cinematic window (16:10 aspect ratio)
- Subtle navigation arrows (← →) with keyboard arrow navigation and touch swipe
- One photograph visible at a time with smooth crossfade
- Photo counter (e.g. 01 / 04) resets per temple
- Temple counter (01 / 08 ... 08 / 08) tracks the journey

Scroll:
- Pure vertical scroll through all 8 chapters without hijacking.

---

# 19. KASHI UNFOLDED

## Concept

Editorial travel-poster experience.

Final poster count:

```text
9
```

Grid:

```text
Desktop → 3 × 3
Tablet → 2 columns
Mobile → 1 column
```

---

# 20. POSTER VISUAL LANGUAGE

Posters use:

```text
retro editorial travel-poster style
+
dull / muted palette
+
editorial typography
+
aged-paper feeling
+
structure PNG overlays
+
thin border
+
distinct accent colors
```

Each poster should have a distinct palette.

Do not make all nine posters identical.

---

# 21. POSTER INTERACTION

Default grid:

```text
poster cards
```

Hover:

```text
subtle attention
```

Click:

```text
poster expands to approximately 80% viewport
```

Detail screen:

```text
image/poster
+
title
+
tagline
+
description
```

Detail screens should remain relatively simple.

---

# 22. SHAAM-E-BANARAS

This is one of the finalized Kashi Unfolded posters.

Approved tagline:

```text
The Ganga glows after dusk.
```

Description should mention:

```text
Assi
Dashashwamedh
Namo
Manikarnika
```

---

# 23. POSTER COLOR RULE

Sarnath uses a:

```text
muted olive / green
```

palette.

Other posters must use different primary/accent palettes.

However, all palettes must remain consistent with the overall Kashi visual language.

---

# 24. KASHI RASOI

## Concept

Food / delicacy experience.

Primary visual:

```text
central rotating 3D delicacy
```

Interaction:

```text
scroll
→ model rotation / progression
```

Supporting text sits around the central model.

The 3D object is the visual anchor.

---

# 25. THE SPIRIT OF KASHI

## Concept

Final emotional chapter.

The experience returns to:

```text
Ganga
+
quiet atmosphere
+
reflection
```

It should feel slower and calmer than previous chapters.

---

# 26. ENDING RULE

Do NOT add a conventional tourism CTA section such as:

```text
Plan Your Visit
Book Now
Hotels
Packages
```

The website should end emotionally rather than commercially.

---

# 27. PAGE TRANSITIONS

The project uses short Banaras galli POV footage as a transition where appropriate.

Target duration:

```text
~3 seconds maximum
```

Returning may use a reversed version where appropriate.

Transitions must not become repetitive or annoying.

---

# 28. BACK TO LANDING RULE

Every redirected experience must provide a way to:

```text
Back to Landing Page
```

This is a global navigation requirement.

---

# 29. DESIGN SYSTEM MEMORY

## Fonts

Exactly two primary fonts:

```text
Caesura Bold
Peristiva
```

---

## Typography Hierarchy

Primary content hierarchy:

```text
Heading
Subheading
Body
```

Small UI/metadata text may exist as a utility size.

Do not introduce additional primary typography systems without approval.

---

# 30. DESIGN SYSTEM MEMORY — COLOR

Approved base palette:

```text
Kashi Ink
#10100E

Deep Charcoal
#191816

Aged Ivory
#E8E1D3

Sand
#CFC4B1

Banaras Brass
#B59A63

Ganga Mist
#AEB8B3

Burnt Terracotta
#985F49
```

Overall feeling:

```text
muted
warm
cinematic
editorial
timeless
```

Avoid neon and generic web gradients.

---

# 31. DESIGN TOKEN RULE

All reusable visual values must be centralized.

This includes:

```text
colors
fonts
font sizes
spacing
radius
shadows
opacity
motion
z-index
breakpoints
overlays
```

Components should consume variables rather than hardcoded values.

---

# 32. DESIGN CHANGE RULE

If a global design change is required:

```text
Modify token
↓
Allow components to inherit change
```

Do not manually modify hundreds of components.

---

# 33. ARCHITECTURE MEMORY

The exact technical architecture is defined in:

```text
architecture.md
```

AI agents should read that document before making structural changes.

Do not create an alternative architecture without a recorded decision.

---

# 34. IMPLEMENTATION MEMORY

The exact task sequence is defined in:

```text
task.md
```

Current principle:

```text
Finish landing
↓
Finish Ghats
↓
Finish Story
↓
Finish Temples
↓
Finish Kashi Unfolded
↓
Finish Rasoi
↓
Finish Spirit
↓
Global polish
```

---

# 35. IMPORTANT ASSET MEMORY

The following asset groups are considered important project assets:

```text
Infinite Door assets
Ganga landing visual
8 Ghat hero photographs
Temple 3D models
9 Kashi Unfolded poster assets
Food 3D models
Banaras galli transition video
Typography assets
```

Never replace important approved assets without recording the decision.

---

# 36. CURRENT ASSET STATUS

Maintain this table during development.

| Asset Group | Status | Notes |
|---|---|---|
| Typography assets | **MISSING — BLOCKER** | `Caesura-Bold.woff2` + `Peristiva.woff2` not in repo. See §52 |
| Infinite Door | Pending | `public/images/hero/infinite-door.jpg` present (placeholder for TASK 3.x) |
| Ganga Hero | Pending | `public/images/hero/ganga-hero.jpg` present (for TASK 4.x) |
| Assi Ghat | Approved | Do not replace |
| Dashashwamedh Ghat | Approved | Do not replace |
| Manikarnika Ghat | Approved | Do not replace |
| Kedar Ghat | Approved | Do not replace |
| Harishchandra Ghat | Approved | Do not replace |
| Guleria Ghat | Approved | Do not replace |
| Chet Singh Ghat | Approved | Do not replace |
| Namo Ghat | Approved | Do not replace |
| Story images | Received | `public/images/story/{origin,ganga,buddha,contemporary}.jpg` |
| Temple Models | Pending | `public/models/temples/` scaffolded, empty |
| Poster Assets | Pending | `public/images/posters/` scaffolded, empty |
| Food Models | Pending | `public/models/food/` scaffolded, empty |
| Galli Transition Video | Pending | `public/videos/transitions/` scaffolded, empty |

Asset folder conventions (TASK 0.3, architecture.md §37–38): lowercase kebab-case
filenames; `public/images/{landing,ghats,posters,temples,food,story}`,
`public/models/{door,temples,food}`, `public/videos/{transitions,atmospheric}`,
`public/fonts`, `public/textures`, `public/icons`.

---

# 37. DECISION LOG

New important decisions must be appended here.

---

## Decision Template

```text
### YYYY-MM-DD — Decision: [TITLE]

Status:
LOCKED / TEMPORARY / REVISIT

Decision:
[What was decided.]

Reason:
[Why.]

Impact:
[What parts of the project this affects.]

Related:
[Files/components/tasks if relevant.]
```

---

### 2026-09-24 — Decision: Token names and values follow design.md literally

Status:
LOCKED

Decision:
`styles/tokens.css` implements the token set from design.md §81 as written —
including `--font-size-heading: clamp(3.5rem, 7vw, 7rem)`,
`--font-size-ui: 0.72rem`, `--tracking-heading: 0.015em`, `--leading-heading: 0.92`,
`--shadow-soft` / `--shadow-deep`, `--poster-border`, `--overlay-background`.

Reason:
design.md is the approved visual specification. A previous pass at this layer
(commit `26f094f`, not restored) had silently drifted from it — `clamp(3.2rem…)`,
`--font-size-ui: 0.75rem`, negative heading tracking, `--shadow-card`,
`--glow-brass` — which would have made every later chapter inherit unapproved
values.

Impact:
All typography, spacing, shadow and motion values site-wide.

Related:
`styles/tokens.css`

---

### 2026-09-24 — Decision: Tailwind's default spacing scale IS the `--space-*` scale

Status:
LOCKED

Decision:
`tailwind.config.ts` does not redefine spacing. Tailwind's default 4px-based
scale is numerically identical to design.md §25 (`space-4` = 1rem = Tailwind
`4`), so `p-6` / `gap-8` are already token-equivalent. Only genuinely new keys
are added: `gutter`, `section`, `grid`, `btn`, `poster`.

Reason:
Two parallel spacing scales would be a second source of truth and would make
"change the token, inherit the change" impossible.

Impact:
Every layout component. Do not introduce a second spacing namespace.

Related:
`tailwind.config.ts`, `styles/tokens.css` §12

---

### 2026-09-24 — Decision: `--duration-*` is canonical; `--transition-*` is a documented alias

Status:
LOCKED

Decision:
Durations are defined once as `--duration-fast|normal|slow|cinematic`
(180/400/800/1200ms). design.md §81's `--transition-*` names are kept as
aliases pointing at them.

Reason:
The name `--transition-fast` reads like a transition shorthand; the alias keeps
documentation parity while giving the canonical value a correct name that
Tailwind's `transitionDuration` scale can consume.

Impact:
`styles/tokens.css`, `styles/animations.css`, `lib/animation.ts`.
Reduced motion overrides `--duration-*`; the aliases follow automatically.

Related:
`styles/tokens.css` §24, design.md §40, §77

---

### 2026-09-24 — Decision: Entrance reveals are CSS-driven, not JS

Status:
LOCKED

Decision:
The shared reveal patterns (`styles/animations.css`) are CSS animations.
`lib/animation.ts` mirrors the same values for GSAP where a timeline is
genuinely required (scroll choreography, chapter sequencing).

Reason:
CSS animations run off the main thread and stay smooth while the page is still
loading imagery — which is exactly when the first chapter reveal plays. GSAP
is reserved for the choreography CSS cannot express (architecture.md §26).

Impact:
TASK 3.x–12.x entrance motion. Scroll-linked motion still uses GSAP.

Related:
`styles/animations.css`, `lib/animation.ts`

---

### 2026-09-24 — Decision: Motion values are defined in exactly two files

Status:
LOCKED

Decision:
`styles/tokens.css` owns every motion value for CSS. `lib/animation.ts` mirrors
durations, easings and GSAP equivalents for JavaScript, with a comment stating
the mirror must be updated together.

Reason:
JS cannot reliably read a `cubic-bezier()` back out of a CSS custom property;
design.md §41 explicitly permits project-level constants for GSAP. A documented
mirror is better than components inventing curves.

Impact:
Any future change to a duration or curve must touch both files.

Related:
`styles/tokens.css` §24–26, `lib/animation.ts`

---

### 2026-09-24 — Decision: Container and Section live in `components/layout`

Status:
LOCKED

Decision:
`Container` and `Section` are owned by `components/layout/` (they are layout
primitives, TASK 1.3) and re-exported from `components/ui/index.ts` so the
primitive set in TASK 1.4 is importable from one place.

Reason:
One canonical implementation, two sanctioned import paths — rather than
duplicating the component to satisfy a task listing.

Impact:
Future layout work imports from `@/components/layout`.

Related:
`components/layout/`, `components/ui/index.ts`

---

### 2026-09-24 — Decision: No substitute webfont while the licensed binaries are missing

Status:
TEMPORARY — resolve before any visual QA

Decision:
`@font-face` points at the expected paths in `public/fonts/`. Until those files
exist, `--font-display` / `--font-editorial` fall through to a generic serif.
No Google Font or other substitute family is loaded.

Reason:
A previous pass loaded Cinzel + Newsreader from Google Fonts as a fallback. That
would have made an unapproved third and fourth typeface the *de facto* visual
identity, broke rules.md §20 (approved stack) and design.md §11 (two fonts only),
and added a render-blocking third-party request.

Impact:
Type currently renders in a generic serif. See §52.

Related:
`styles/fonts.css`, `styles/tokens.css` §7

---

### 2026-09-24 — Decision: Reduced motion keeps a 200ms opacity-only fade

Status:
LOCKED

Decision:
`--duration-reduced-motion: 200ms` is added and is deliberately **not** zeroed
by the `prefers-reduced-motion` block. Under reduced motion every entrance
reveal becomes a plain opacity fade at that duration — no translate, no scale,
no clip-path uncovering.

Reason:
design.md §77 collapses the `--duration-*` tokens to `0ms`, which is correct for
*movement*. Taken literally for entrances it makes content snap into place,
which rules.md §39 explicitly rules out ("the same experience presented more
calmly"). A purpose-named token resolves the two documents without weakening
either: the four `--duration-*` tokens still go to zero, so every ordinary CSS
transition in the site is instant under reduced motion.

Impact:
`styles/animations.css` only. Do not generalise this token — it exists for the
reduced-motion reveal and nothing else.

Related:
`styles/tokens.css` §24, design.md §77, rules.md §39

---

### 2026-09-24 — Decision: Smooth scroll is Lenis, mounted once at the root

Status:
LOCKED

Decision:
`components/providers/SmoothScrollProvider.tsx` mounts Lenis in the root layout
so every chapter shares one scroll feel (architecture.md §2.3, §7). Configuration
lives in `SMOOTH_SCROLL` (`lib/animation.ts`).

Three properties are non-negotiable:

```text
1. It never runs under prefers-reduced-motion — the provider does not
   instantiate Lenis at all, and destroy() restores native scrolling.
2. syncTouch stays FALSE. Touch devices keep their native momentum and their
   own gestures; Lenis only tracks position. This is what architecture.md §7
   asks for when it says native scrolling may serve mobile better.
3. Lenis owns the rAF loop (autoRaf), so no GSAP ticker bridge exists yet.
```

Reason:
Smooth scrolling is large, continuous, self-initiated motion — exactly what the
reduced-motion preference is about. And hijacking touch on a phone is how a
cinematic site becomes unusable.

Impact:
Every route. Overlays that scroll internally MUST carry `data-lenis-prevent`.

Related:
`components/providers/SmoothScrollProvider.tsx`, `lib/animation.ts`,
`app/globals.css` (the Lenis vendor stylesheet is written out there rather than
imported, so the rules can be audited)

---

### 2026-09-24 — Decision: The landing is `/kashi`; `/` redirects for now

Status:
TEMPORARY — resolves in TASK 3.1

Decision:
The landing route is `app/(experience)/kashi/page.tsx`, following
architecture.md §13–15. The root `app/page.tsx` redirects to it.

Reason:
The approved flow is `/ → The Infinite Door → /kashi`. `/enter` does not exist
until TASK 3.x, so the root skips straight to the landing rather than showing a
dead end. When TASK 3.1 lands, the root becomes `redirect(ROUTES.enter)` and
nothing else changes — that is the whole reason `lib/routes.ts` exists.
`ROUTES` is imported in `app/page.tsx` already for exactly this swap.

Impact:
Root routing only.

Related:
`app/page.tsx`, `app/(experience)/kashi/page.tsx`, `lib/routes.ts`

---

### 2026-09-24 — Decision: The design-system showcase moved to `/foundations`

Status:
LOCKED

Decision:
The Phase 1 verification page that used to live at `/` now lives at
`/foundations`, is `noindex`, and is not linked from the experience.

Reason:
`/` is the root of a cinematic experience and cannot host a component gallery.
The page is still worth keeping: it is where the TASK 19.1–19.4 audits get run,
by looking at one route instead of six.

Impact:
None on the experience. If the page ever disagrees with `styles/tokens.css`, the
tokens are right — delete the stale demo, do not edit the token to match it.

Related:
`app/foundations/page.tsx`

---

### 2026-09-24 — Decision: The landing reveal is a CSS animation, coordinated by JS

Status:
LOCKED

Decision:
`LandingOpening` is a CSS animation, not a JS-driven one. The veil lifts on its
own with `forwards` fill, and always resolves even if hydration fails or the
bundle is slow. `LandingProvider` runs a timer only to keep state in step with
what is already happening on screen.

Its duration is set once, as `--entrance-duration`, on the landing root and
inherited by both the veil and the hero copy. The hero's own reveal delay is
derived from it in CSS:

```css
--reveal-base-delay: calc(var(--entrance-duration, 1400ms) * 0.5);
```

Reason:
A visitor must never be stranded behind an opaque panel because JavaScript did
not arrive, and the veil and the hero must not be timed by two numbers that can
drift apart. `ENTRANCE.durationMs` in `features/landing/constants.ts` is the
single source.

Impact:
Only the landing. Skipping is instant, never animated — the visitor asked.

Related:
`features/landing/constants.ts`, `features/landing/components/LandingOpening.tsx`,
`features/landing/landing.module.css`

---

### 2026-09-24 — Decision: 404 built in Phase 2, not Phase 18

Status:
LOCKED

Decision:
`app/not-found.tsx` exists now, in the design.md §97 hierarchy (404 / Something
is missing. / Return to Kashi).

Reason:
The Phase 2 journey list links to `/ghats`, `/story`, `/temples`, `/unfolded`,
`/rasoi` and `/spirit`, none of which exist until TASK 7–12. Without a 404 the
visitor gets the browser's default error page — a dead end in the middle of a
cinematic experience, which rules.md §47 does not allow. It is the same
"every failure has a graceful fallback" rule, applied early.

Impact:
None. TASK 18.4 becomes a review of this file rather than new work.

Related:
`app/not-found.tsx`

---

### 2026-09-24 — Note: Phase 2 reached into TASK 4.1–4.6

Status:
RECORDED — deviation, explicitly requested

Decision:
Phase 2 was asked to deliver "a modern aesthetic landing page", so beyond the
TASK 2.1 shell and the TASK 2.2 state architecture it also built the hero
(TASK 4.1–4.3) and the journey list (TASK 4.4–4.6), and created
`data/navigation.ts` + `types/navigation.ts` (TASK 4.4's data).

Reason:
Explicit user instruction, which outranks the roadmap (rules.md §3 puts explicit
user instruction first; task.md §23 only forbids implementing future tasks
*silently*).

Impact:
TASK 4.1–4.6 are now **refinement**, not creation. The living-photograph
treatment (TASK 4.2) and the restrained hover behaviour are still outstanding —
`ChapterEntry` currently has hover/focus/pending states but no image, and the
hero photograph is static.

Related:
`features/landing/sections/*`, `data/navigation.ts`

---

# 38. CHANGE LOG

Use this for significant changes.

```text
### YYYY-MM-DD — Change: [TITLE]

Previous:
[Previous implementation/decision.]

New:
[New implementation/decision.]

Reason:
[Reason for change.]

Affected:
[Pages/components.]

Status:
IMPLEMENTED / PENDING
```

---

### 2026-09-24 — Change: THE LANDING IS NOW A SINGLE-PAGE EXPERIENCE

Previous:
**Decision 7.1 (LOCKED)** — "Website is NOT a single long-scroll website. The
experience consists of dedicated chapter/page experiences: Landing → Dedicated
experience → Back to Landing."

Steps to Eternity, Story of Kashi and The Spirit of Kashi were each to be their
own route (`/ghats`, `/story`, `/spirit`) reached from the landing.

New:
Those three chapters are **sections of the landing page itself**. The landing is
now one long-scroll experience alternating between ink and ivory bands:

```text
preloader
    ↓
hero            ink
journey         ink     — the index of chapters
steps           ivory   — Steps to Eternity, eight ghats
story           ink     — Story of Kashi, four chapters
spirit          ivory   — The Spirit of Kashi
closing         ink
```

`data/navigation.ts` records the distinction per chapter as `kind: "section" |
"route"`, and each chapter's `href` is either an in-page anchor or a route.

Where Gods Reside, Kashi Unfolded and Kashi Rasoi **are still their own routes**
and are unchanged by this.

Reason:
Explicit instruction from the project owner. rules.md §3 puts an explicit user
instruction above `prd.md`, `architecture.md` and `rules.md`, so this supersedes
the architecture's routing model deliberately rather than by accident.

Impact — read this before planning anything else:
- **Decision 7.1 is REVERSED.** It is no longer true that the site is not a
  single long-scroll page. Do not "correct" this back.
- **Decision 7.2** ("landing page comes first") still holds and is now satisfied.
- architecture.md §14–§21 (route architecture) applies to the three remaining
  chapters only.
- TASK 5.3 ("Back to Landing" on every redirected experience) now applies only
  to the three route chapters. It is satisfied on the landing itself by the
  "Back to the beginning" link at the end of the page.
- TASK 13.x (page transitions) now concerns only route changes between the
  landing and the three remaining chapters.
- The single-page structure makes the landing heavy. On a slow connection the
  eight ghat photographs are the main cost; they lazy-load and are size-hinted,
  but this must be measured before release (TASK 6.4, TASK 17.1).

Affected:
`app/(experience)/kashi/page.tsx`, `data/navigation.ts`, `types/navigation.ts`,
`features/landing/**`

Status:
IMPLEMENTED

---

### 2026-09-24 — Decision: A light-surface accent token exists because brass fails on ivory

Status:
LOCKED

Decision:
`--color-light-accent: #6e5326` and `.type-tone-light-accent` exist, alongside
`--border-light`. On the ivory bands, indexes and section labels use
`tone="light-accent"`; the section rail switches its own colours via
`--rail-fg` / `--rail-hover` / `--rail-active` component tokens driven by
`data-band`.

Reason:
`--palette-brass` (#B59A63) on `--color-light-background` (#E8E1D3) measures
about **2:1** — illegible as text, and a breach of rules.md §60 and prd.md §19.
The dark-ground accent cannot simply be reused on the light band. The new value
is the same hue taken to ~5.5:1 on ivory, so an index can still read as an
accent rather than being flattened to plain body colour.

Impact:
Anything placed on a light band. **Do not use `tone="accent"` or
`text-accent` on ivory** — use the `light-accent` equivalents. `border-edge`
is likewise invisible on ivory; use `--border-light`.

Related:
`styles/tokens.css` §3, `styles/typography.css`, `components/typography/tone.ts`,
`components/ui/IndexLabel.tsx`, `features/landing/landing.module.css`

---

### 2026-09-24 — Decision: TASK 3 is realized as a preloader, not a 3D door

Status:
TEMPORARY — the 3D scene is still outstanding

Decision:
The "Infinite Door" opening slot is implemented as a page preloader
(`features/landing/components/LandingOpening.tsx`, exported as
`LandingPreloader`). It reports **real** progress — the hero image and font
readiness — and is held by three rules:

```text
1. Never fake progress (rules.md §54). A failed asset counts as settled, so a
   missing photograph gives a fast start rather than a stall.
2. Always release (rules.md §55). A provider-level ceiling timer AND a CSS
   failsafe animation both hide the panel, so there is no path — including
   JavaScript failing entirely — to an infinite loading screen.
3. Never render under prefers-reduced-motion.
```

Reason:
`public/models/door/` is empty. A WebGL doorway would have nothing to render, so
building the scene now would mean inventing the asset. The loader satisfies the
parts of TASK 3 that are actually about behaviour — hold the page, report
honest progress, respect reduced motion, never trap the visitor — and gives the
3D scene a place to land without changing that contract.

Impact:
TASK 3.1–3.5 (scene, lighting, silhouette, typography, animation) remain
**unbuilt**. Do not record them as done. When the model arrives it goes inside
this component.

Related:
`features/landing/components/LandingOpening.tsx`,
`features/landing/hooks/usePreloadAssets.ts`, `features/landing/constants.ts`

---

### 2026-09-24 — Decision: Asset fallbacks, error boundaries and a skip link

Status:
LOCKED

Decision:
Three pieces of shared infrastructure now exist:

```text
components/media/SafeImage.tsx        TASK 18.3 — an image that degrades
app/error.tsx                         TASK 18.1/18.2 — route error boundary
app/global-error.tsx                  TASK 18.1 — root error boundary
app/loading.tsx                       architecture.md §47 — route loading state
components/navigation/SkipLink.tsx    TASK 16.2 — keyboard bypass
components/navigation/BackToLanding.tsx  TASK 14.1 — the universal return
```

Reason:
These are the parts of the roadmap that do not depend on missing assets, and
each one is a rule rather than a preference: rules.md §47 (every failure
degrades gracefully), §59 (focus must always be visible) and §28 (every
chapter offers the same way back).

Notes:
- `SafeImage` is a client island around the image only — it never makes the
  section around it client-rendered (architecture.md §43). When a `fill` image
  fails it reproduces `position: absolute; inset: 0` itself, or the fallback
  would collapse inside its frame.
- The skip link uses `:focus`, not `:focus-visible`. A skip link is routinely
  focused programmatically and `:focus-visible` does not fire reliably for that.
- Every route's `<main>` carries `id="main"`, which is what the skip link
  targets. **A new route must do the same.**
- Both error boundaries log rather than render the error (rules.md §50).
- `BackToLanding` is a real anchor to `ROUTES.kashi` with no router
  interception — navigation is never hijacked to force an animation
  (rules.md §27, §29).

Impact:
Every future route inherits a working error state, loading state, skip link and
return control. No chapter should hand-roll any of them.

Related:
`components/media/`, `components/navigation/`, `app/error.tsx`,
`app/global-error.tsx`, `app/loading.tsx`, `app/layout.tsx`

---

### 2026-09-24 — Decision: The Hindi statement carries `lang="hi"`

Status:
LOCKED

Decision:
The three lines of the approved Shiva statement are marked `lang="hi"`.

Reason:
Without it a screen reader reads Devanagari with English phonetics, which makes
the project's most important editorial moment unintelligible to the visitors who
most need it read aloud (TASK 16.1). The statement is still not translated — it
is locked.

Impact:
`data/story.ts` consumers. Any future Hindi or Devanagari content must do the
same.

Related:
`features/landing/sections/StoryOfKashi.tsx`

---

### 2026-09-24 — Note: Story chapter titles diverge slightly from prd.md

Status:
REVISIT — needs the project owner's confirmation

Decision:
The four Story chapters are Origins / Shiva and the River / Sarnath / The City
Now.

prd.md CF-04 suggests Origins / Shiva and Kashi / Ganga and the City / Kashi
Through Time.

Reason:
The four approved photographs are `origin.jpg`, `ganga.jpg`, `buddha.jpg` and
`contemporary.jpg`. There is no asset for a separate "Shiva and Kashi" and a
separate "Ganga and the City", but there is one for Sarnath — which the PRD's
four chapters do not account for. Matching the chapters to the assets that
exist seemed safer than inventing a fifth image, and the merged chapter keeps
Shiva and the river as one story, which is how the tradition holds them.

Impact:
prd.md CF-04 is not contradicted on substance — the arc (origins → Shiva and
the river → documented history → the living present) and the four-chapter limit
both hold. What differs is the split.

If the owner prefers the PRD's exact titles, the change is confined to
`data/story.ts` — but an image for the new chapter would have to be supplied.

Related:
`data/story.ts`

---

# 39. BUG LOG

Every meaningful bug should be recorded here.

---

## Bug Template

```text
### BUG-[NUMBER] — [TITLE]

Status:
OPEN / INVESTIGATING / FIXED / WONTFIX

First Seen:
YYYY-MM-DD

Affected:
[Page/component]

Symptoms:
[What the user sees.]

Cause:
[Known cause.]

Fix:
[What was changed.]

Regression Risk:
LOW / MEDIUM / HIGH

Notes:
[Anything future AI agents need to know.]
```

---

# 40. RESOLVED BUGS

Keep resolved bugs here.

```text
No resolved bugs recorded yet.
```

When a bug is fixed, move its record here rather than deleting it.

---

# 41. CURRENT BUGS

---

### BUG-001 — Webfonts render as generic serif

Status:
OPEN — asset blocker, not a code defect

First Seen:
2026-09-24

Affected:
Every route. All typography.

Symptoms:
Headings and body copy render in the browser's default serif instead of
Caesura Bold / Peristiva. The hierarchy, scale, tracking and leading are all
correct — only the letterforms are wrong.

Cause:
`public/fonts/Caesura-Bold.woff2` and `public/fonts/Peristiva.woff2` do not
exist in the repository. `styles/fonts.css` declares both faces at those exact
paths, so the requests 404 and the stack falls through.

Fix:
Supply the two licensed binaries at the declared paths. No code change needed —
`@font-face` is already wired.

Regression Risk:
LOW

Notes:
Do NOT work around this by loading a substitute webfont. A previous pass pulled
Cinzel + Newsreader from Google Fonts, which would have silently replaced the
approved identity with unapproved typefaces and added a render-blocking
third-party request. See §37 decision of the same date.

---

```text
No other known bugs.
```

Update this immediately when meaningful bugs are discovered.

---

# 42. TECHNICAL DISCOVERIES

Use this section for implementation discoveries that future AI agents should know.

Example:

```text
### Discovery — [DATE]

Problem:
[What was discovered.]

Finding:
[What was learned.]

Required behavior:
[What future implementation must do.]
```

---

### Discovery — 2026-09-24 — Tailwind opacity modifiers do not work on token colours

Problem:
Tokens are exposed to Tailwind as `var(--color-*)`. Utilities such as
`bg-palette-ivory/5` cannot apply an alpha channel to a `var()` colour and
produce no usable rule.

Finding:
Subtle interactive surfaces must use a real token instead. `--color-surface`
(#211F1B) already sits a step above `--color-background-primary` (#10100E) and
is the correct hover ground.

Required behavior:
Never write `bg-<token>/<alpha>` or `text-<token>/<alpha>`. Either add a token
for the value or use an existing surface/overlay token. Opacity is expressed
through the `--opacity-*` tokens.

---

### Discovery — 2026-09-24 — Repository state at the start of this session

Problem:
The working tree contained no application source at all — only `docs/`,
`public/images/`, `node_modules/` and `package-lock.json`. Git HEAD
(commit `26f094f`) contained a previous, complete Phase 0 + Phase 1 pass whose
files had been removed from the working tree, and `docs/memory.md` had been
reverted to its unfilled template.

Finding:
That previous pass had drifted from `design.md` in ways that would have
propagated into every chapter: type scale, UI size, tracking, shadow and glow
tokens invented outside the spec; Google Fonts loaded as a substitute for the
two approved families; buttons using brass as the primary variant; arbitrary
Tailwind values (`text-[10px]`, `tracking-[0.2em]`, `px-8 py-4.5`) standing in
for the token scale.

Required behavior:
Phase 0 and Phase 1 were rebuilt from the documents rather than restored from
that commit. Do not resurrect `26f094f` as-is. It remains in history as
reference only — if a future agent wants a value from it, check it against
`design.md` first.

---

### Discovery — 2026-09-24 — Lenis needs no GSAP bridge yet

Problem:
The conventional Lenis setup drives its rAF loop from `gsap.ticker`, and GSAP
ScrollTrigger must be told to read Lenis' position — otherwise scroll-linked
animations jitter while Lenis is transforming the page.

Finding:
Lenis 1.3 owns its own loop via `autoRaf`, so nothing needs to drive it today.
GSAP is therefore **not** in the landing bundle, which is the right cost for a
phase with no scroll-driven animation in it.

Required behavior:
When the first ScrollTrigger animation is added (TASK 4.2's living photograph, or
TASK 7.x), the bridge must be installed at the same time or scroll animations
will lag behind the scroll position:

```ts
lenis.on("scroll", ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

…and `autoRaf` must be switched off, so there is exactly one loop. Load GSAP by
dynamic import so it stays out of the initial bundle (architecture.md §17.5).

Related:
`lib/animation.ts` (`SMOOTH_SCROLL`), `components/providers/SmoothScrollProvider.tsx`

---

### Discovery — 2026-09-24 — Where motion values live

Problem:
CSS custom properties holding a `cubic-bezier()` are not reliably readable from
JavaScript across browsers.

Finding:
GSAP timelines cannot consume the CSS curve, and components that need a
duration in JS would otherwise hardcode one.

Required behavior:
Use `lib/animation.ts` for JS-side motion (`DURATION`, `EASE`, `GSAP_EASE`,
`REVEAL`). It mirrors `styles/tokens.css` and must be updated with it. Use
`useReducedMotion()` before creating any GSAP timeline or Three.js camera move —
the CSS token overrides cannot reach them.

---

# 43. PERFORMANCE NOTES

Record important performance discoveries here.

Examples:

```text
3D model X causes mobile memory spikes.
Image Y is too large.
Video Z should only load after interaction.
```

Current:

```text
· No third-party font requests. Fonts are self-hosted from /public/fonts and
  loaded with font-display: swap. A previous pass imported Cinzel + Newsreader
  from Google Fonts, which was both a render-blocking third-party request and a
  third/fourth typeface. Do not reintroduce it.

· Reveals are CSS animations, so chapter entrances stay on the compositor while
  photography is still decoding. Only transform / opacity / clip-path animate.

· Reveal utilities set `will-change: transform, opacity`. They are applied to a
  bounded set of elements; do not apply them to long lists or the whole page.

· `useMediaQuery` uses useSyncExternalStore rather than useState + useEffect, so
  the first client paint already has the correct value — no layout flash and no
  double work on mobile.
```

---

# 44. BROWSER / DEVICE ISSUES

Record browser-specific behavior here.

Example:

```text
Chrome:
[Issue]

Safari:
[Issue]

Firefox:
[Issue]

Mobile Safari:
[Issue]

Android Chrome:
[Issue]
```

Current:

```text
No browser-specific issues recorded yet.
```

---

# 45. AI AGENT HANDOFF

When switching AI tools, the new agent must read:

```text
prd.md
architecture.md
rules.md
design.md
task.md
memory.md
```

Then determine:

```text
1. What is already implemented?
2. What is the current task?
3. What decisions are locked?
4. What bugs exist?
5. What changed from the original plan?
6. What should be implemented next?
```

Do NOT immediately start rewriting code.

---

# 46. HANDOFF SUMMARY

At the end of a development session, update this section.

```text
## LAST SESSION

Date:
2026-09-24

AI / Developer:
Claude Code

Completed:
- PHASE 0 — Project foundation
- PHASE 1 — Global design system (TASK 1.1–1.5)
- TASK 2.1 — Landing route and shell
- TASK 2.2 — Landing state architecture
- Smooth scroll (Lenis)
- Landing hero and journey list (TASK 4.1–4.6 pulled forward — see §37)

Current State:
`/` redirects to `/kashi`, which is the whole experience on one route: a
preloader, then six alternating bands (ink / ivory) — hero, journey index,
Steps to Eternity, Story of Kashi, The Spirit of Kashi, closing. Error
boundaries, a loading state, asset fallbacks, a skip link and a shared
"Back to Landing" control are all in place. Three chapters (Where Gods Reside,
Kashi Unfolded, Kashi Rasoi) are still their own routes and are **not built** —
they are blocked on missing assets, see §52a.

Current Task:
Nothing further can be completed without assets or a working shell. See §52a.

Next Task:
Supply `public/fonts/Caesura-Bold.woff2` and `public/fonts/Peristiva.woff2`
first — every page currently renders in the wrong typeface. Then the nine
Kashi Unfolded poster images, then the temple models.

Important Changes:
- **Decision 7.1 was reversed.** The landing is a single long-scroll page.
  Read the §38 change record before planning anything else.
- Phase 0 + Phase 1 were rebuilt from the documents, not restored from commit
  `26f094f`, which had drifted from design.md (§42).
- Brass does not work on ivory — use `light-accent` tones on light bands (§37).
- `/` now redirects; the design system reference moved to `/foundations`.

Known Bugs:
- BUG-001 — the two licensed webfonts are missing; type renders as a generic
  serif. Asset blocker, not a code defect.

Important Notes:
- Read `components/ui/index.ts`, `components/layout/index.ts` and
  `features/landing/index.ts` before building anything new. Container, rhythm,
  label, heading, copy, divider, action, reveal and smooth scroll all exist.
- Do not introduce a third typeface to work around BUG-001.
- Anything scrollable inside an overlay needs `data-lenis-prevent`.

Verification:
NOT RUN. The tool harness in these sessions could not execute any shell
command, so `npm run typecheck`, `npm run lint` and `npm run build` were never
executed against this code — for the Phase 1, Phase 2 or one-page-landing work.
Everything was reviewed statically only:

  · every Tailwind class used resolves to a key in `tailwind.config.ts` or to a
    core utility;
  · no arbitrary Tailwind values appear anywhere;
  · every colour, size, space and motion value resolves to a declared token;
  · no `bg-<token>/<alpha>` or `text-<token>/<alpha>` is used — Tailwind cannot
    apply an alpha channel to a `var()` colour (see §42);
  · no accent-coloured small text is placed on the ivory bands.

The first action of the next session must be:

```text
npm run typecheck
npm run lint
npm run build
npm run dev   →  walk / at 375px, 768px and 1440px, with reduced motion on,
                 and confirm the preloader always releases
```

Nothing in memory.md should be treated as verified until that has passed.

Highest unverified risks:
- `components/typography/{Heading,Subheading,Text}.tsx` render a polymorphic
  `as` element typed as a union of intrinsic tags. If `tsc` objects to the JSX
  spread in those files, change `as` to `React.ElementType` (as
  `components/layout/*` already does) — no runtime behaviour changes.
- `next-env.d.ts` references `.next/types/routes.d.ts`, so typed routes may be
  active. If `tsc` rejects `<Link href={string}>` in `components/ui/TextLink.tsx`
  or `features/landing/components/ChapterEntry.tsx`, widen the `href` type at the
  Link boundary — chapter hrefs come from data and can never be route literals.
- `features/landing` never had its Tailwind classes verified against a real
  build. `gap-x-grid`, `max-w-measure-wide` and the `light-*` colour group are
  the ones most worth watching for in the first build.
```

---

### SESSION — 2026-09-24

Completed:
- TASK 0.1 — Project foundation (Next.js 15.5 App Router, TypeScript strict,
  Tailwind, ESLint, scripts, `.env.example`)
- TASK 0.2 — Folder structure (`app`, `components`, `features`, `data`, `hooks`,
  `lib`, `styles`, `types`, `public`)
- TASK 0.3 — Asset system (`public/{images,models,videos,textures,icons,fonts}`)
- TASK 0.4 — Fonts (`styles/fonts.css`, `--font-display`, `--font-editorial`)
- TASK 1.1 — Design tokens (`styles/tokens.css`)
- TASK 1.2 — Typography (`styles/typography.css`, `components/typography/*`)
- TASK 1.3 — Layout utilities (`styles/utilities.css`,
  `components/layout/{Container,Section}`)
- TASK 1.4 — UI primitives (`components/ui/{Button,TextLink,IndexLabel,Divider,
  SectionLabel}`)
- TASK 1.5 — Motion system (`styles/animations.css`, `lib/animation.ts`,
  `hooks/{useReducedMotion,useMediaQuery,useDevice}`)

Decisions:
- Tokens follow design.md literally (see §37).
- Tailwind's default spacing scale is the `--space-*` scale — no second scale.
- `--duration-*` canonical, `--transition-*` alias.
- Reveals are CSS; GSAP mirrors the values for timeline work only.
- Container/Section owned by `components/layout`, re-exported from `components/ui`.
- No substitute webfont while the licensed binaries are missing.

New files:
```text
app/{layout.tsx,page.tsx,globals.css}
styles/{tokens.css,fonts.css,typography.css,utilities.css,animations.css}
components/typography/{Heading,Subheading,Text,tone,index}
components/layout/{Container,Section,index}
components/ui/{Button,TextLink,TextLink.module.css,IndexLabel,Divider,SectionLabel,index}
lib/{utils,constants,routes,animation}.ts
hooks/{useReducedMotion,useMediaQuery,useDevice,index}.ts
```

Bugs:
- BUG-001 — webfonts missing, type falls back to a generic serif (OPEN, asset).

Verification:
NOT RUN — the session's tool harness could not execute shell commands. See the
"Verification" note under LAST SESSION.

Changes:
- Rebuilt Phase 0 + Phase 1 from the documents instead of restoring commit
  `26f094f` (see §42 discovery).

Next:
- TASK 2.1 — Create Landing Route

---

## SESSION — 2026-09-24 (Phase 2)

Completed:
- TASK 2.1 — Landing route and shell at `/kashi`
- TASK 2.2 — Landing state architecture (`LandingProvider` + `useLanding`)
- Smooth scroll — Lenis mounted at the root (architecture.md §7)
- Landing hero (TASK 4.1–4.3 pulled forward at the user's request)
- Journey navigation list (TASK 4.4–4.6 pulled forward), data-driven
- `app/not-found.tsx` (TASK 18.4 pulled forward — see §37)
- Design-system showcase moved from `/` to `/foundations`

Decisions:
- Lenis at the root, `syncTouch: false`, never under reduced motion, no GSAP.
- `/` redirects to `/kashi` until TASK 3.1 adds `/enter`.
- The landing reveal is CSS-driven; JS only mirrors its state.
- Phase 2 reached into TASK 4.x — explicitly requested, recorded in §37.

New files:
```text
app/page.tsx                         (was the showcase — now redirects)
app/(experience)/kashi/page.tsx       the landing route
app/foundations/page.tsx              design-system reference (noindex)
app/not-found.tsx                     on-brand 404
components/providers/SmoothScrollProvider.tsx
features/landing/constants.ts
features/landing/landing.module.css
features/landing/context/LandingProvider.tsx
features/landing/hooks/useActiveSection.ts
features/landing/components/{LandingOpening,ScrollCue,ChapterEntry,SectionRail}.tsx
features/landing/sections/{LandingHero,JourneyNavigation,LandingClosing}.tsx
features/landing/index.ts
data/navigation.ts
types/navigation.ts
```

Modified:
```text
app/layout.tsx          wrapped children in SmoothScrollProvider
app/globals.css         added the Lenis stylesheet block
styles/animations.css   --reveal-base-delay added to the reveal utilities
lib/animation.ts        SMOOTH_SCROLL, smoothScrollEase
components/typography/Subheading.tsx   `span` added to the allowed elements
```

Bugs:
- BUG-001 still open — the webfonts are still missing.

Known limitation:
- The journey list links to `/ghats`, `/story`, `/temples`, `/unfolded`,
  `/rasoi` and `/spirit`. **None of those routes exist until TASK 7–12**, so
  choosing a chapter currently lands on the 404. That is expected at this stage
  and is why the 404 was built early; do not paper over it by inventing
  placeholder chapters.

Next:
- TASK 3.1 — Build Infinite Door Scene at `/enter`

---

## SESSION — 2026-09-24 (Phase 2 → one-page landing)

Completed:
- TASK 3 — opening realized as a page preloader (real progress, ceiling timer,
  CSS failsafe, reduced-motion safe). **3D door still outstanding.**
- TASK 4.1–4.6 — hero, journey index, chapter presentation
- TASK 5.1–5.3 — chapter navigation, navigation feedback, return to the top
- Steps to Eternity as a landing section (light band, 8 ghats, approved photos)
- Story of Kashi as a landing section (ink band, 4 chapters + Shiva statement)
- The Spirit of Kashi as a landing section (light band, Ganga bookend)
- Alternating ink / ivory bands across the whole page

Decisions:
- **Decision 7.1 reversed** — the landing is now a single long-scroll page. See
  the change record in §38; read it before planning anything else.
- `--color-light-accent` added; brass is unusable on ivory.
- The preloader carries its own ceiling timer and a CSS failsafe.

New files:
```text
data/ghats.ts                       eight finalized ghats
data/story.ts                       four chapters + the Shiva statement
types/content.ts                    Ghat, StoryChapter contracts
features/landing/hooks/usePreloadAssets.ts
features/landing/sections/StepsToEternity.tsx
features/landing/sections/StoryOfKashi.tsx
features/landing/sections/SpiritOfKashi.tsx
```

Modified:
```text
app/(experience)/kashi/page.tsx     composes all six bands
data/navigation.ts                  kind: section | route; anchors for 3 chapters
types/navigation.ts                 ChapterKind added
features/landing/constants.ts       PRELOADER replaces ENTRANCE; 6 section ids
features/landing/components/LandingOpening.tsx   curtain → preloader
features/landing/components/ChapterEntry.tsx     arrow states section vs route
features/landing/components/SectionRail.tsx      band-aware colours
features/landing/landing.module.css              preloader, plates, chapter rows
features/landing/sections/LandingClosing.tsx     "Back to the beginning"
components/ui/IndexLabel.tsx        tone prop (light band)
components/ui/SectionLabel.tsx      tone passed through to the index
styles/tokens.css                   --color-light-accent, --border-light
styles/typography.css               .type-tone-light-accent
tailwind.config.ts                  light.accent
```

Bugs:
- BUG-001 still open — the webfonts are still missing.
- Fixed during this session: brass index labels and section labels on the ivory
  bands measured ~2:1 (see the §38 decision on `--color-light-accent`), and the
  ghat name was rendered as an `<h3>` inside a `<span>`, which is invalid HTML.

Known limitations:
- Where Gods Reside, Kashi Unfolded and Kashi Rasoi are still routes and are
  **not built**. The journey index links to them and currently lands on the 404.
  Expected at this stage — do not invent placeholder chapters.
- The Infinite Door 3D scene is unbuilt (no model asset).

Next:
- Where Gods Reside, Kashi Unfolded or Kashi Rasoi.

---

## SESSION — 2026-09-24 (error handling, navigation, accessibility)

Requested:
Complete the whole of `task.md`.

Completed (everything in the roadmap that is not asset-blocked):
- TASK 14.1 — `BackToLanding`, used by the 404 and ready for every route chapter
- TASK 14.2 — current-section indicator (the landing's section rail)
- TASK 14.3 — keyboard navigation verified by construction: every control is a
  real anchor or button, Lenis never takes over touch, anchors work without JS
- TASK 16.1 — semantic HTML; the Devanagari statement now carries `lang="hi"`
- TASK 16.2 — skip link, targeting the `id="main"` every route's `<main>` carries
- TASK 16.3 — reduced motion already centralised in the token layer
- TASK 16.4 — light-band contrast resolved with `--color-light-accent`
- TASK 18.1 — `app/error.tsx` and `app/global-error.tsx`
- TASK 18.2 — route-level error handling, with `reset()` as the recovery action
- TASK 18.3 — `components/media/SafeImage.tsx`, applied to all landing imagery
- TASK 18.4 — 404 (built earlier, now using the shared return control)
- architecture.md §47 — `app/loading.tsx`

New files:
```text
components/media/{SafeImage.tsx,index.ts}
components/navigation/{SkipLink.tsx,BackToLanding.tsx,index.ts}
app/{error.tsx,global-error.tsx,loading.tsx}
```

Modified:
```text
app/layout.tsx                        skip link mounted first
app/{not-found,error,foundations}.tsx `id="main"`
app/(experience)/kashi/page.tsx       `id="main"`
features/landing/sections/*.tsx       next/image → SafeImage; lang="hi"
styles/utilities.css                  .u-skip-link
```

Not completed — blocked:
Everything listed in **§52a**. Temple, poster and food assets and the galli
transition video do not exist in the repository; the webfonts are still missing;
and the QA and production tasks in Phases 15, 19 and 21 need a running shell.

Bugs:
- BUG-001 still open — webfonts.

Verification:
NOT RUN — the tool harness could not execute a single shell command in this
session. See the "Verification" block under LAST SESSION.

Next:
Supply the font binaries, then the nine poster images, then the temple models.
See §52a.

---

# 47. SESSION LOG

Keep only meaningful development sessions.

---

## SESSION TEMPLATE

```text
### SESSION — YYYY-MM-DD

Completed:
- TASK X.X
- TASK X.X

Decisions:
- [Decision]

Bugs:
- [Bug]

Changes:
- [Change]

Next:
- TASK X.X
```

---

# 48. DO NOT STORE

Do not use this file for:

```text
Full source code
Full conversations
Temporary experiments
Random brainstorming
Every npm command
Every small CSS adjustment
Every console log
Every failed build attempt
```

Unless the information has future value.

---

# 49. MEMORY UPDATE TRIGGERS

The AI should update `memory.md` when:

```text
A major design decision changes
A route is completed
A major component is introduced
A significant bug is found
A significant bug is fixed
An approved asset changes
Architecture changes
Technology changes
A performance issue is discovered
A browser-specific issue is discovered
A requirement is removed
A requirement is added
A previous decision is reversed
A workaround becomes necessary
A future AI needs special context
```

---

# 50. MEMORY QUALITY RULE

Before adding an entry, ask:

```text
"If another AI joined this project tomorrow,
would this information help it avoid making a mistake?"
```

If yes:

```text
Record it.
```

If no:

```text
Do not clutter memory.md.
```

---

# 51. CURRENT LOCKED DECISIONS SUMMARY

These decisions should be treated as locked unless explicitly changed:

```text
[LOCKED] Website is an immersive Kashi experience.
[LOCKED] Landing page is completed before redirected pages.
[LOCKED] Website is not one giant long-scroll page.
[LOCKED] Opening is The Infinite Door — Beyond Kashi.
[LOCKED] Opening has no temple architecture.
[LOCKED] Opening ≤ approximately 12 seconds.
[LOCKED] Landing title: KASHI — A City Beyond Time.
[LOCKED] Landing focuses on the whole city/Ganga/ghats.
[LOCKED] Eight finalized ghats.
[LOCKED] Approved ghat photographs must not be replaced casually.
[LOCKED] Ghat title begins centered and moves toward the left.
[LOCKED] Story of Kashi uses a short four-chapter structure.
[LOCKED] Where Gods Reside uses alternating temple/text layout.
[LOCKED] Temple models are horizontally draggable.
[LOCKED] Kashi Unfolded has nine posters.
[LOCKED] Kashi Unfolded uses a 3×3 desktop grid.
[LOCKED] Posters have distinct palettes.
[LOCKED] Shaam-e-Banaras tagline: The Ganga glows after dusk.
[LOCKED] Kashi Rasoi centers on a rotating 3D delicacy.
[LOCKED] Ending is The Spirit of Kashi.
[LOCKED] Ending returns to Ganga.
[LOCKED] No Plan Your Visit section.
[LOCKED] Two primary fonts: Caesura Bold + Peristiva.
[LOCKED] Design values are tokenized.
[LOCKED] Every redirected page has Back to Landing.
```

---

# 52. CURRENT OPEN QUESTIONS

Use this only for unresolved decisions.

```text
OPEN — 2026-09-24
The licensed webfont binaries (Caesura Bold, Peristiva) are not in the
repository. They must be supplied at:
  public/fonts/Caesura-Bold.woff2
  public/fonts/Peristiva.woff2
Until then all type renders in a generic serif (BUG-001). This blocks honest
visual QA of TASK 19.1 (Typography Audit) but does not block any chapter work.

OPEN — 2026-09-24
`public/images/hero/infinite-door.jpg` and `ganga-hero.jpg` are present but have
not been confirmed as the approved assets for TASK 3.1 / TASK 4.1. Confirm
before building those scenes; do not substitute them without a recorded
decision.
```

---

# 52a. ASSET-BLOCKED TASKS

The project owner asked for the whole of `task.md` to be completed. A large
block of it cannot be, and must not be faked. rules.md §16 forbids inventing
cultural content, §17 forbids claiming a feature works when it does not, and
§11 forbids substituting an approved asset.

Every one of these is blocked on **files that do not exist in the repository**.
The directories below are scaffolded and empty:

| Directory | Needed for |
|---|---|
| `public/models/door/` | TASK 3.1–3.5 — the Infinite Door scene |
| `public/models/temples/` | TASK 9.2–9.9 — Where Gods Reside |
| `public/models/food/` | TASK 11.2–11.8 — Kashi Rasoi |
| `public/images/temples/` | Temple fallback imagery (TASK 9.8, §25.1) |
| `public/images/posters/` | TASK 10.2–10.10 — nine Kashi Unfolded posters |
| `public/images/food/` | Food fallback imagery |
| `public/videos/transitions/` | TASK 13.2–13.4 — the galli transition |
| `public/fonts/` | Caesura Bold + Peristiva (BUG-001) |

Blocked outright:

```text
TASK 3.1–3.5    Infinite Door scene, lighting, silhouette, typography, animation
TASK 9.2–9.9    Temple data, viewer, drag rotation, scroll nav, 3D safeguards
TASK 10.2–10.10 Poster data, grid, cards, palettes, hover, expansion, detail
TASK 11.2–11.8  Food data, 3D viewer, scroll rotation, model optimisation
TASK 12.x       done — The Spirit of Kashi is a landing section
TASK 13.2–13.4  Galli transition video, reverse transition, cleanup
TASK 17.3       3D optimisation — there are no 3D assets to optimise
TASK 19.5       Asset audit — there are no poster/temple/food assets to audit
TASK 20         Full user journey — three chapters do not exist
```

Blocked by tooling, not assets — needs a working shell:

```text
TASK 15.1–15.4  Responsive and touch QA    (must be measured, not reasoned)
TASK 19.1–19.4  Typography / colour / spacing / motion audits
TASK 21.1–21.5  Production build, typecheck, lint, console audit, perf audit
```

**What unblocks the most, in order:** the two font files (every page is
currently rendering in the wrong typeface), then the nine poster images, then
the temple models.

Do **not** resolve these by inventing placeholder posters, generating substitute
photographs, or shipping a `TempleViewer` that shows a static image while the
README calls it 3D. rules.md §17 exists precisely to stop that.

Do not put questions here that can already be answered by:

```text
prd.md
architecture.md
rules.md
design.md
task.md
```

---

# 53. FINAL MEMORY PRINCIPLE

`memory.md` is the project's institutional memory.

The goal is simple:

```text
AI #1 builds something
        ↓
AI #2 understands it
        ↓
AI #3 improves it
        ↓
AI #4 debugs it
        ↓
No important context is lost
```

A new AI should be able to enter the project, read this file plus the five source documents, and understand:

```text
What KASHI is
Why it exists
What has been decided
What has been built
What changed
What is broken
What must not be changed
What needs to happen next
```

---

# 54. LANDING HERO EDITORIAL RECOMPOSITION (2026-09-25)

```text
Decision:
Recomposed LandingHero into a cohesive full-viewport cinematic editorial cover.

Changes:
1. Photograph: Replaced the broken cutout (/images/hero/ganga-cutout.png) with the full-resolution Ganga dawn master photograph (/images/hero/ganga-hero.jpg).
2. Viewport: Removed the max-w-6xl container restriction and top offset so the hero fills the viewport without dead empty cream canvas areas.
3. KASHI Masthead: Rendered in monumental Banaras brass (#E5B869) positioned in the upper dawn sky above the temple skyline, functioning as an authentic editorial magazine masthead.
4. Headline & Copy: Rendered "A City Beyond Time" in warm ivory (#FAF6F0) and narrative description in warm sand (#D6CEBE) over a gentle photographic vignette, resolving legibility over river water.
5. Bottom Information: Aligned SCROLL indicator, hairline divider, and "VARANASI · UTTAR PRADESH" in the lower-left grid.
6. Spatial Action Dock: Consolidated floating controls into an integrated editorial rail with consistent 36px circular bounds, subtle borders, and micro-tooltips.
7. Motion: Wired compositor-only subtle reveal entrance animations using project animation tokens.
```

# 55. KASHI ──> काशी INTERACTION & ARCHITECTURAL DEPTH LAYERING (2026-09-25)

```text
Decision:
Implemented progressive Devanagari discovery interaction and 3D architectural depth layering.

Changes:
1. Top-Left Label: Completely removed "THE CITY AND THE RIVER" and the golden dot; the top-left area is now completely clean.
2. Bottom-Left Scroll Cue: Removed the vertical line, pulsing bar, and gesture indicators. Kept pure typographical "Scroll" anchor.
3. Architectural Depth Layering:
   - Layer 1 (z-0): Master Ganga photograph (ganga-hero.jpg).
   - Layer 2 (z-10): Interactive typography layer (KASHI / काशी).
   - Layer 3 (z-20): Architectural foreground cutout (ganga-cutout.png, pointer-events-none). Temple spires and ghat silhouettes naturally overlap and pass in front of intersecting letters.
   - Layer 4 (z-30): Foreground editorial UI (title, description, navigation, links).
4. Progressive Translation Interaction (KASHI ──> काशी):
   - Two interactive horizontal zones: [KA] and [SHI].
   - Hovering KA crossfades to "का" (intermediate state: काSHI).
   - Hovering SHI crossfades to "शी" (intermediate state: KAशी).
   - Moving cursor across both zones forms the unified Devanagari word "काशी" with a continuous shirorekha headline.
   - Devanagari typeface: Rozha One / Martel editorial display serif harmonizing in golden color, weight, and cap scale with English serif.
   - State machine: On reaching full Hindi state, locks and persists for 12 seconds (within 10-15s window) without competing timers; then smoothly crossfades back to KASHI. Partial state resets after 3s grace if user leaves.
```

# 56. UPDATED SUNSET HERO PHOTOGRAPH & LAYOUT REFINEMENT (2026-09-25)

```text
Decision:
Updated hero background to the vibrant sunset Ganga photograph and fine-tuned editorial composition.

Changes:
1. Photograph: Updated /images/hero/ganga-hero.jpg and re-derived /images/hero/ganga-cutout.png with the new photo's warm sunset colors and lighting while maintaining identical sub-pixel architectural masking.
2. Bottom-Left Scroll: Removed "Scroll" text completely; retained clean location metadata (VARANASI · UTTAR PRADESH).
3. KASHI Masthead Elevation: Elevated KASHI / काशी higher in the sky (top-[3.5vh] to top-[4.5vh]) so the letters are fully visible and authoritative, with temple spires gently overlapping their base.
4. Headline & Paragraph Placement: Repositioned "A City Beyond Time" and the 3-line narrative copy to the bottom-right region with larger display typography (text-4xl to text-[4rem] for title; text-base to text-[1.15rem] for paragraph).
```

# 57. HERO COMPOSITION & TIMING ADJUSTMENTS (2026-09-25)

```text
Decision:
Fine-tuned KASHI position, removed ghost architectural overlays, restored bottom-left text position, and updated Hindi hold duration to 5s.

Changes:
1. KASHI Title Position: Lowered the large "KASHI" / "काशी" title (top-[13vh] to top-[15vh]) so it rests naturally across the upper/middle sky above the ghat skyline.
2. Ghost Architectural Silhouette Removed: Removed ganga-cutout.png and all overlay artifacts behind KASHI. The typography overlays exclusively the clean, uninterrupted sky of the new master background photograph.
3. Subheadline & Paragraph Position: Restored "A City Beyond Time" and the 3-line narrative paragraph to the bottom-left area, stacked cleanly above "VARANASI · UTTAR PRADESH".
4. Hindi Transition Timing: Changed the full Hindi (काशी) hold duration from 12 seconds to a maximum of 5 seconds (5000ms) before smoothly reverting to English.
```

# 58. TARGETED 'K' TEMPLE OVERLAP (2026-09-25)

```text
Decision:
Applied a targeted architectural mask exclusively for the left temple structure so the letter 'K' of KASHI sits below the temple spire, while keeping the rest of the text and sky completely clean.

Changes:
1. Left Temple Overlap: Added a dedicated, precision-feathered overlay (/images/hero/left-temple-cutout.png) containing strictly the left temple tower and pinnacle.
2. Letter Placement: The letter 'K' (and 'का') is positioned below/behind the left temple structure, achieving natural architectural depth.
3. Clean Background: The remaining letters (A, S, H, I / शी) have zero overlays or silhouettes across the sky.
4. No other elements modified.
```

**Never assume future AI agents remember the conversation.**

If something is important enough to affect future implementation, put it here.
