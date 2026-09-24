# KASHI — A City Beyond Time
# IMPLEMENTATION TASK ROADMAP

**Document:** `task.md`  
**Version:** 1.0  
**Purpose:** Break the complete Kashi website into small, sequential, AI-executable implementation tasks.

---

# 0. HOW TO USE THIS FILE

This document is the implementation roadmap for the entire project.

The project must **not** be generated as one giant implementation.

Instead:

```text
One task
   ↓
Implement
   ↓
Run / inspect
   ↓
Fix
   ↓
Verify
   ↓
Move to next task
```

Each task should be small enough to give to an AI coding agent as a focused instruction.

---

# 1. IMPLEMENTATION ORDER

The website must be developed in this order:

```text
PHASE 0
Project Foundation

        ↓

PHASE 1
Global Design System

        ↓

PHASE 2
Landing Page Foundation

        ↓

PHASE 3
Landing Page — Infinite Door

        ↓

PHASE 4
Landing Page — KASHI / Ganga

        ↓

PHASE 5
Landing Page — Journey Navigation

        ↓

PHASE 6
Landing Page — Final Integration

        ↓

PHASE 7
Steps to Eternity — Ghats

        ↓

PHASE 8
Story of Kashi

        ↓

PHASE 9
Where Gods Reside — Temples

        ↓

PHASE 10
Kashi Unfolded — Posters

        ↓

PHASE 11
Kashi Rasoi — Food

        ↓

PHASE 12
The Spirit of Kashi

        ↓

PHASE 13
Transitions + Global Navigation

        ↓

PHASE 14
Responsive / Accessibility / Performance

        ↓

PHASE 15
Final QA + Production
```

---

# 2. CRITICAL DEVELOPMENT RULE

## Finish one experience before starting the next.

The preferred workflow is:

```text
Landing Page
    ↓
Fully functional
    ↓
Fully styled
    ↓
Responsive
    ↓
Interactions working
    ↓
Verified
    ↓
Only then begin redirected page #1
```

Do not build:

```text
Landing 30%
Ghats 30%
Temples 20%
Posters 20%
```

Instead build:

```text
Landing 100%
↓
Ghats 100%
↓
Story 100%
↓
Temples 100%
...
```

---

# 3. TASK FORMAT

Every task follows this structure:

```text
TASK ID
Title

Objective
What needs to be implemented.

Scope
What this task is allowed to modify.

Requirements
Exact expected behavior.

Dependencies
What must already exist.

Completion Criteria
How the AI knows the task is complete.

Do Not
Things that must not be changed.
```

---

# PHASE 0 — PROJECT FOUNDATION

---

## TASK 0.1 — Initialize Project

### Objective

Create the base application according to `architecture.md`.

### Requirements

Set up:

- Next.js
- TypeScript
- App Router
- Tailwind CSS if specified by architecture
- ESLint
- required dependencies
- project scripts
- environment variable structure

### Completion Criteria

- Application starts successfully.
- TypeScript compiles.
- Linting works.
- Production build works.
- No unnecessary dependencies are installed.

### Do Not

- Build visual sections yet.
- Add placeholder pages unnecessarily.
- Install libraries without a clear requirement.

---

## TASK 0.2 — Establish Folder Structure

### Objective

Implement the folder architecture defined in `architecture.md`.

### Requirements

Create appropriate directories for:

```text
app/
components/
features/
lib/
hooks/
data/
styles/
public/
```

Exact structure must follow `architecture.md`.

### Completion Criteria

- Folder structure is clean.
- Responsibilities are separated.
- No giant monolithic component exists.

---

## TASK 0.3 — Configure Asset System

### Objective

Create a predictable system for images, fonts, models, and videos.

### Requirements

Organize:

```text
public/
├── fonts/
├── images/
├── models/
├── videos/
└── icons/
```

Create logical subdirectories where required.

### Completion Criteria

All asset imports follow one consistent convention.

---

## TASK 0.4 — Configure Fonts

### Objective

Integrate the project's two approved fonts.

### Fonts

```text
Caesura Bold
Peristiva
```

### Requirements

Define font-face declarations.

Create:

```text
--font-display
--font-editorial
```

### Completion Criteria

Both fonts render correctly.

No third primary font is introduced.

---

# PHASE 1 — GLOBAL DESIGN SYSTEM

---

## TASK 1.1 — Create Design Tokens

### Objective

Implement the complete token system from `design.md`.

### Requirements

Create centralized variables for:

- colors
- typography
- spacing
- layout
- radius
- shadows
- opacity
- motion
- z-index
- overlays

### Completion Criteria

Components can consume centralized variables.

---

## TASK 1.2 — Implement Global Typography

### Objective

Create the global typography hierarchy.

### Required hierarchy

```text
Heading
Subheading
Body
UI / metadata
```

### Requirements

Implement:

- font families
- sizes
- line heights
- tracking
- responsive scaling

### Completion Criteria

Typography behaves consistently throughout the application.

---

## TASK 1.3 — Implement Global Layout Utilities

### Objective

Create reusable layout primitives.

### Include

- Page container
- Wide container
- Section wrapper
- Page gutter
- Editorial text width
- Grid utilities

### Completion Criteria

Pages can be built without repeatedly creating custom layout values.

---

## TASK 1.4 — Implement Global UI Primitives

Create reusable primitives for:

```text
Button
TextLink
IndexLabel
Divider
Container
SectionLabel
```

### Completion Criteria

Primitives use tokens and support required states.

---

## TASK 1.5 — Implement Global Motion System

### Objective

Centralize motion behavior.

### Requirements

Define:

- durations
- easing
- reduced-motion behavior
- common reveal patterns

### Completion Criteria

Motion values are not randomly hardcoded across components.

---

# PHASE 2 — LANDING PAGE FOUNDATION

The entire landing page must be completed before moving to redirected pages.

---

## TASK 2.1 — Create Landing Route

### Objective

Create the primary homepage route.

### Requirements

Create the landing page shell.

It should support:

```text
Opening experience
↓
Ganga / city hero
↓
Journey navigation
↓
Ending
```

### Completion Criteria

Landing route loads without errors.

---

## TASK 2.2 — Create Landing Page State Architecture

### Objective

Define how the landing page controls its major experiences.

### Requirements

Create clean state management for:

- opening complete
- opening skip/progression if applicable
- active section
- navigation state
- transition state

### Completion Criteria

State is predictable and does not create unnecessary global state.

---

# PHASE 3 — THE INFINITE DOOR

---

## TASK 3.1 — Build Infinite Door Scene

### Objective

Create the opening scene.

### Visual requirements

```text
Near-total darkness
+
monumental minimal doorway
+
white/golden light
+
realistic silhouette
```

No temple architecture.

### Completion Criteria

The scene visually matches the approved concept.

---

## TASK 3.2 — Add Door Lighting

Implement:

- light bloom
- atmospheric glow
- exposure
- subtle depth

Lighting must remain cinematic.

---

## TASK 3.3 — Add Silhouette

### Requirements

Add the human silhouette walking toward the doorway.

The silhouette must remain realistic and understated.

---

## TASK 3.4 — Add Opening Typography

Add the approved quote/title treatment.

Typography must not overpower the scene.

---

## TASK 3.5 — Implement Door Animation

### Sequence

```text
Dark scene
↓
door/light revealed
↓
silhouette moves forward
↓
light intensifies
↓
threshold crossed
↓
white exposure
↓
landing page
```

---

## TASK 3.6 — Implement Opening Duration

The complete opening should remain:

```text
≤ 12 seconds
```

The experience must not become an unnecessary loading screen.

---

## TASK 3.7 — Add Opening Skip / Accessibility Behavior

Provide a safe way to bypass or shorten the opening where appropriate.

Respect:

```text
prefers-reduced-motion
```

---

## TASK 3.8 — Test Infinite Door

Verify:

- desktop
- mobile
- reduced motion
- slow devices
- refresh
- direct route access

Do not move forward until the opening is stable.

---

# PHASE 4 — KASHI LANDING / GANGA

---

## TASK 4.1 — Build Ganga Hero

### Title

```text
KASHI — A City Beyond Time
```

### Visual focus

```text
Ganga
+
ghats
+
city atmosphere
```

---

## TASK 4.2 — Implement Hero Image Treatment

Add:

- controlled crop
- subtle movement
- atmospheric overlay
- cinematic depth

Avoid excessive animation.

---

## TASK 4.3 — Add Landing Typography

Implement:

- main title
- supporting statement
- section metadata if required

Use the approved typography system.

---

## TASK 4.4 — Add Landing Navigation

Create the navigation system that allows users to discover the major chapters.

Potential destinations:

```text
Steps to Eternity
Story of Kashi
Where Gods Reside
Kashi Unfolded
Kashi Rasoi
The Spirit of Kashi
```

---

## TASK 4.5 — Create Journey Navigation Visual

The landing page should communicate that Kashi is an experience composed of chapters.

Do not make it look like a conventional website menu.

---

## TASK 4.6 — Add Chapter Preview Interactions

Each chapter preview should have:

```text
title
index
short supporting text
visual cue
```

Hover/touch interaction must remain restrained.

---

# PHASE 5 — LANDING PAGE NAVIGATION

---

## TASK 5.1 — Implement Chapter Navigation

Connect landing chapter entries to their routes.

Required destinations:

```text
/ghats
/story
/temples
/unfolded
/rasoi
/spirit
```

Exact route names may follow `architecture.md`.

---

## TASK 5.2 — Implement Navigation Feedback

When a chapter is selected:

```text
selection
↓
transition
↓
destination
```

No abrupt route changes unless technically necessary.

---

## TASK 5.3 — Implement Back to Landing

Every redirected experience must provide:

```text
Back to Landing Page
```

It must return safely to the homepage.

---

# PHASE 6 — LANDING PAGE FINAL INTEGRATION

---

## TASK 6.1 — Add Landing Transitions

Connect:

```text
Infinite Door
→
Ganga
→
Journey
```

---

## TASK 6.2 — Add Landing Responsive Behavior

Complete:

- desktop
- tablet
- mobile

Do not simply shrink desktop layouts.

---

## TASK 6.3 — Landing Accessibility

Verify:

- keyboard navigation
- focus states
- readable text
- reduced motion
- touch targets
- semantic HTML

---

## TASK 6.4 — Landing Performance

Optimize:

- hero images
- fonts
- animation
- initial JavaScript
- 3D/video assets if present

---

## TASK 6.5 — LANDING PAGE FREEZE

At this point:

**STOP changing the landing architecture unless a critical issue is found.**

The landing page is now the baseline for all subsequent experiences.

---

# PHASE 7 — STEPS TO ETERNITY

## GHATS

The first redirected experience.

---

## TASK 7.1 — Create Ghats Route

Create:

```text
Steps to Eternity
```

route/page.

---

## TASK 7.2 — Create Ghat Data Model

Create structured data for the eight finalized ghats.

```text
Assi Ghat
Dashashwamedh Ghat
Manikarnika Ghat
Kedar Ghat
Harishchandra Ghat
Guleria Ghat
Chet Singh Ghat
Namo Ghat
```

Each data object should support:

```text
name
index
image
tagline
description
metadata
```

---

## TASK 7.3 — Add Approved Ghat Images

Use the finalized assigned hero photographs.

**Do not replace the selected images.**

---

## TASK 7.4 — Build Ghat Hero Component

Create:

```text
GhatHero
```

with:

- image
- title
- index
- tagline
- description

---

## TASK 7.5 — Implement Living Photograph Effect

Add subtle:

```text
scale
+
drift
+
atmospheric movement
```

The photograph should still clearly remain a photograph.

---

## TASK 7.6 — Implement Ghat Title Movement

Required behavior:

```text
Centered title
↓
scroll
↓
title moves toward left corner
```

---

## TASK 7.7 — Implement Ghat Navigation

Users should be able to move between the eight ghats.

Navigation should feel editorial, not like a standard carousel.

---

## TASK 7.8 — Implement Ghat Scroll Experience

Scrolling should move through:

```text
Assi
↓
Dashashwamedh
↓
Manikarnika
↓
Kedar
↓
Harishchandra
↓
Guleria
↓
Chet Singh
↓
Namo
```

---

## TASK 7.9 — Add Back to Landing

Implement persistent but subtle return navigation.

---

## TASK 7.10 — Ghat Responsive QA

Verify:

- desktop
- tablet
- mobile
- touch scrolling
- reduced motion

---

# PHASE 8 — STORY OF KASHI

---

## TASK 8.1 — Create Story Route

Create the short cinematic history experience.

---

## TASK 8.2 — Create Four-Chapter Story Data

Structure:

```text
Chapter 01
Chapter 02
Chapter 03
Chapter 04
```

Content should combine:

```text
mythological connection
+
documented historical context
+
Shiva / Ganga relationship
```

Keep the experience concise.

---

## TASK 8.3 — Build Chapter Layout

Each chapter:

```text
Index
↓
Title
↓
Short narrative
↓
Visual
```

---

## TASK 8.4 — Implement Chapter Transitions

Transitions should be cinematic but restrained.

---

## TASK 8.5 — Add Closing Shiva Statement

Use the approved thematic line:

```text
जहाँ कण-कण में शिव का वास है,
और हर घाट पर महादेव का अहसास है,
वो हमारी नगरी काशी है।
```

Treat it as a major editorial moment.

---

## TASK 8.6 — Story Responsive QA

Verify all screen sizes and motion preferences.

---

# PHASE 9 — WHERE GODS RESIDE

## TEMPLES

---

## TASK 9.1 — Create Temple Route

Create the temple experience.

---

## TASK 9.2 — Create Temple Data Model

Each temple should support:

```text
name
index
description
model
image / fallback
metadata
```

---

## TASK 9.3 — Build Temple Viewer

Create:

```text
TempleViewer
```

for the 3D temple model.

---

## TASK 9.4 — Implement Drag Rotation

Desktop:

```text
left mouse drag
→ horizontal model rotation
```

Mobile:

```text
touch drag
→ model rotation
```

---

## TASK 9.5 — Implement Temple Scroll Navigation

Vertical scroll should transition between temple entries.

---

## TASK 9.6 — Implement Alternating Layout

Required pattern:

```text
Temple 1:
Model → Right
Text → Left

Temple 2:
Text → Right
Model → Left
```

Continue alternating.

---

## TASK 9.7 — Add Temple Transition Motion

Motion should support the model and editorial layout.

---

## TASK 9.8 — Add Performance Safeguards

3D models must not unnecessarily destroy performance.

Implement:

- lazy loading
- disposal
- appropriate texture sizes
- fallback behavior

---

## TASK 9.9 — Temple Responsive QA

Mobile must remain usable even if 3D rendering is constrained.

---

# PHASE 10 — KASHI UNFOLDED

## POSTER EXPERIENCE

---

## TASK 10.1 — Create Unfolded Route

Create the Kashi Unfolded page.

---

## TASK 10.2 — Create Poster Data Model

Create data for all nine finalized posters.

Each object should contain:

```text
index
title
tagline
description
image
accent palette
structure overlay
```

---

## TASK 10.3 — Create Poster Grid

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

---

## TASK 10.4 — Build Poster Card

Create:

```text
PosterCard
```

with:

- border
- title
- image
- structure overlay
- index
- accent color

---

## TASK 10.5 — Implement Distinct Poster Palettes

Each poster must retain its own approved visual palette.

No two posters should become visually indistinguishable.

---

## TASK 10.6 — Implement Poster Hover

Desktop interaction:

```text
subtle elevation
+
slight image movement
+
typographic response
```

No excessive 3D effects.

---

## TASK 10.7 — Implement Poster Expansion

Clicking a poster should expand it to approximately:

```text
80% viewport
```

while maintaining visual focus.

---

## TASK 10.8 — Build Poster Detail View

Detail view should remain simple:

```text
Large image/poster
+
Title
+
Tagline
+
Description
+
Close/back
```

Do not add unnecessary animation.

---

## TASK 10.9 — Implement Shaam-e-Banaras

Approved tagline:

```text
The Ganga glows after dusk.
```

Description must reference:

```text
Assi
Dashashwamedh
Namo
Manikarnika
```

---

## TASK 10.10 — Poster Responsive QA

Verify all nine posters across devices.

---

# PHASE 11 — KASHI RASOI

## FOOD EXPERIENCE

---

## TASK 11.1 — Create Rasoi Route

Create the food experience.

---

## TASK 11.2 — Create Food Data Model

Each delicacy should support:

```text
name
description
image/model
origin/context
index
```

---

## TASK 11.3 — Build Central 3D Food Viewer

Create the central visual model.

---

## TASK 11.4 — Implement Scroll-Driven Rotation

Scroll should control model progression/rotation.

---

## TASK 11.5 — Build Supporting Editorial Layout

Use:

```text
left/right text
+
central model
```

depending on the approved composition.

---

## TASK 11.6 — Implement Food Navigation

Users should move between delicacies naturally.

---

## TASK 11.7 — Optimize Food Models

Apply:

- lazy loading
- model disposal
- texture optimization
- fallback behavior

---

## TASK 11.8 — Rasoi Responsive QA

Create a usable mobile equivalent.

---

# PHASE 12 — THE SPIRIT OF KASHI

---

## TASK 12.1 — Create Spirit Route

Create the final experience.

---

## TASK 12.2 — Return to Ganga

The visual experience should return to:

```text
Ganga
+
quiet atmosphere
+
reflection
```

---

## TASK 12.3 — Build Closing Statement

The final statement should be emotionally reflective.

Avoid a commercial CTA.

---

## TASK 12.4 — Implement Ending Motion

Motion should gradually slow down.

The final chapter should feel calmer than the earlier experiences.

---

## TASK 12.5 — Add Final Navigation

Provide only necessary navigation.

Avoid:

```text
Plan Your Visit
Book Now
Hotels
Packages
```

---

# PHASE 13 — GLOBAL TRANSITIONS

---

## TASK 13.1 — Create Page Transition System

Implement the global transition architecture.

---

## TASK 13.2 — Implement Galli Transition

Use the short Banaras galli POV video where appropriate.

Maximum intended duration:

```text
~3 seconds
```

---

## TASK 13.3 — Implement Reverse Transition

When returning:

```text
forward video
→ reverse where appropriate
```

---

## TASK 13.4 — Ensure Transition Cleanup

Every transition must:

- release resources
- stop media
- remove listeners
- clean animations
- avoid duplicate timelines

---

# PHASE 14 — GLOBAL NAVIGATION

---

## TASK 14.1 — Implement Universal Back Navigation

Every redirected experience must provide:

```text
Back to Landing Page
```

---

## TASK 14.2 — Implement Current Chapter Indicator

The UI should communicate the current chapter where useful.

---

## TASK 14.3 — Implement Keyboard Navigation

Ensure major navigation is keyboard accessible.

---

# PHASE 15 — RESPONSIVE SYSTEM

---

## TASK 15.1 — Desktop QA

Test:

```text
1024px+
1440px
1920px+
```

---

## TASK 15.2 — Tablet QA

Test:

```text
768px+
```

---

## TASK 15.3 — Mobile QA

Test:

```text
320px
375px
390px
430px
```

---

## TASK 15.4 — Touch Interaction QA

Verify:

- drag
- swipe
- scroll
- poster opening
- navigation
- model rotation

---

# PHASE 16 — ACCESSIBILITY

---

## TASK 16.1 — Semantic HTML

Verify:

```text
header
nav
main
section
article
footer
button
a
```

are used appropriately.

---

## TASK 16.2 — Keyboard Accessibility

Verify:

- tab navigation
- focus visibility
- enter/space activation
- modal escape
- logical focus order

---

## TASK 16.3 — Reduced Motion

Verify all major animation systems respect:

```text
prefers-reduced-motion
```

---

## TASK 16.4 — Contrast

Verify text remains readable over:

- photographs
- video
- dark backgrounds
- light poster backgrounds

---

# PHASE 17 — PERFORMANCE

---

## TASK 17.1 — Image Optimization

Optimize:

- hero images
- poster images
- thumbnails
- backgrounds

Use appropriate formats and responsive sizes.

---

## TASK 17.2 — Font Optimization

Ensure:

- only required font files load
- fonts are preloaded where appropriate
- font loading does not block the entire experience

---

## TASK 17.3 — 3D Optimization

Audit:

- polygon count
- texture resolution
- model loading
- memory usage
- disposal

---

## TASK 17.4 — Video Optimization

Optimize:

- loading strategy
- playback
- mobile behavior
- transition videos

---

## TASK 17.5 — Code Splitting

Heavy experiences should not load unnecessarily on unrelated pages.

Examples:

```text
Three.js
GSAP-heavy modules
3D viewers
large media
```

should be loaded strategically.

---

# PHASE 18 — ERROR HANDLING

---

## TASK 18.1 — Add Global Error Boundary

Create a user-friendly error state.

---

## TASK 18.2 — Add Route Error Handling

Every major route should fail gracefully.

---

## TASK 18.3 — Add Asset Fallbacks

If:

```text
image
model
video
```

fails to load, the page should remain usable.

---

## TASK 18.4 — Add 404 Page

404 should use the Kashi visual identity.

---

# PHASE 19 — FINAL VISUAL QA

---

## TASK 19.1 — Typography Audit

Check every page for:

- correct fonts
- correct hierarchy
- correct sizes
- correct line heights
- no accidental third font

---

## TASK 19.2 — Color Audit

Check:

- token usage
- accent consistency
- poster palettes
- contrast
- no random colors

---

## TASK 19.3 — Spacing Audit

Check:

- page gutters
- section spacing
- grid gaps
- alignment
- mobile spacing

---

## TASK 19.4 — Motion Audit

Check:

- transitions
- GSAP timelines
- image movement
- model interactions
- reduced motion

---

## TASK 19.5 — Asset Audit

Verify every approved asset.

Particularly:

```text
8 Ghat photographs
9 Poster assets
Temple models
Food models
Opening assets
Transition video
```

No approved asset should be silently replaced.

---

# PHASE 20 — FINAL USER JOURNEY TEST

Perform the entire experience exactly as a first-time visitor:

```text
Open website
↓
Infinite Door
↓
Cross threshold
↓
KASHI landing
↓
Explore journey
↓
Steps to Eternity
↓
Back
↓
Story of Kashi
↓
Back
↓
Where Gods Reside
↓
Back
↓
Kashi Unfolded
↓
Open posters
↓
Back
↓
Kashi Rasoi
↓
Back
↓
The Spirit of Kashi
↓
End
```

Verify there are no dead ends.

---

# PHASE 21 — PRODUCTION READINESS

---

## TASK 21.1 — Production Build

Run:

```text
npm run build
```

Fix all build errors.

---

## TASK 21.2 — TypeScript Audit

Run strict type checking.

No unnecessary:

```text
any
```

types.

---

## TASK 21.3 — Lint Audit

Run project linting.

Resolve warnings where practical.

---

## TASK 21.4 — Console Audit

Production experience should not contain:

```text
uncaught errors
repeated warnings
failed network requests
```

---

## TASK 21.5 — Final Performance Audit

Check:

```text
initial load
route transitions
memory
CPU
animation smoothness
mobile performance
```

---

# 22. AI CODING AGENT EXECUTION RULES

When giving a task to an AI coding agent, use this pattern:

```text
Read:
- architecture.md
- design.md
- rules.md
- task.md

Current task:
TASK X.X — [TASK NAME]

Implement only this task.

Before coding:
1. Inspect the existing implementation.
2. Reuse existing components.
3. Reuse existing design tokens.
4. Do not recreate systems that already exist.

After coding:
1. Run the relevant checks.
2. Fix errors introduced by this task.
3. Verify responsive behavior if applicable.
4. Report exactly what changed.
5. Report any unresolved issue.
```

---

# 23. TASK ISOLATION RULE

An AI agent should **not silently implement future tasks**.

For example:

If instructed:

```text
TASK 7.4 — Build Ghat Hero Component
```

it should not also implement:

```text
TASK 7.5 — Living Photograph
TASK 7.6 — Title Movement
TASK 7.7 — Navigation
```

unless explicitly requested.

This keeps the implementation controllable.

---

# 24. DEPENDENCY RULE

If a task requires something that does not yet exist:

```text
Do not invent a parallel architecture.
```

Instead:

1. Identify the missing dependency.
2. Implement the smallest required foundation if it belongs to the current task.
3. Otherwise report the dependency.

---

# 25. NO REWRITING RULE

An AI agent must not rewrite working systems simply because it prefers another implementation.

Before replacing an existing implementation:

```text
Is it broken?
Is it incompatible?
Is it causing measurable problems?
```

If not:

```text
Reuse it.
```

---

# 26. DESIGN TOKEN RULE

Before introducing a new value, check:

```text
Does an existing token already represent this?
```

If yes:

```text
Reuse it.
```

If no and the value will recur:

```text
Create a new token.
```

If it is genuinely one-off:

```text
Document why it is one-off.
```

---

# 27. COMPONENT REUSE RULE

Before creating a new component:

```text
Search existing components.
```

If an existing component is 80%+ compatible:

```text
Extend it.
```

Do not create duplicate versions such as:

```text
Hero.tsx
HeroNew.tsx
HeroFinal.tsx
HeroFinal2.tsx
```

---

# 28. DATA-DRIVEN RULE

Repeated content should be data-driven.

Bad:

```text
Eight separate hardcoded Ghat components.
```

Good:

```text
ghats[]
+
one reusable GhatHero
```

Same principle applies to:

```text
posters
temples
food
chapters
```

---

# 29. MEDIA RULE

Large media should be loaded only when required.

Do not load:

```text
all 3D models
all videos
all full-resolution images
```

on the initial landing page.

Use lazy loading and route-level loading where appropriate.

---

# 30. ANIMATION RULE

Every animation must have a reason.

Ask:

```text
Does this improve storytelling?
Does this improve navigation?
Does this communicate hierarchy?
Does this create atmosphere?
```

If the answer is no:

```text
Do not add it.
```

---

# 31. ROUTING RULE

All major experiences should have clean dedicated routes.

The exact implementation must follow `architecture.md`.

Do not build the entire project as one enormous homepage component.

---

# 32. FINAL IMPLEMENTATION ORDER — SHORT VERSION

```text
01. Foundation
02. Design Tokens
03. Typography
04. Global Components

05. Landing Shell
06. Infinite Door
07. Ganga Hero
08. Landing Journey
09. Landing Navigation
10. Landing Transitions
11. Landing Responsive
12. Landing QA

13. Steps to Eternity
14. Story of Kashi
15. Where Gods Reside
16. Kashi Unfolded
17. Kashi Rasoi
18. The Spirit of Kashi

19. Global Page Transitions
20. Global Navigation
21. Responsive QA
22. Accessibility
23. Performance
24. Error Handling
25. Visual QA
26. Full User Journey QA
27. Production Build
28. Final Deployment
```

---

# 33. DEFINITION OF DONE

The project is considered complete only when:

```text
[ ] Landing page is complete
[ ] Infinite Door works
[ ] Ganga landing experience works
[ ] Landing navigation works
[ ] All redirected pages work
[ ] Eight ghats are implemented
[ ] Four Story chapters are implemented
[ ] Temple experience works
[ ] Nine Kashi Unfolded posters work
[ ] Kashi Rasoi works
[ ] Spirit ending works
[ ] Page transitions work
[ ] Back-to-Landing works everywhere
[ ] Mobile works
[ ] Tablet works
[ ] Desktop works
[ ] Reduced motion works
[ ] Accessibility checked
[ ] Assets optimized
[ ] 3D optimized
[ ] Videos optimized
[ ] No critical console errors
[ ] Production build succeeds
[ ] Full user journey works
```

---

# 34. FINAL RULE

**Build KASHI as a sequence of completed experiences, not as a collection of unfinished features.**

The implementation philosophy is:

```text
Foundation
    ↓
Landing
    ↓
Chapter
    ↓
Chapter
    ↓
Chapter
    ↓
Chapter
    ↓
Chapter
    ↓
Ending
    ↓
Polish
    ↓
QA
    ↓
Production
```

Every task should leave the project in a better, working state than before.

The AI should always know:

```text
What am I building?
Why am I building it?
What already exists?
What am I NOT supposed to touch?
How do I know I'm finished?
```

That is the purpose of this roadmap.
