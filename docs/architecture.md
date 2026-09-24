# KASHI — A City Beyond Time
## System Architecture & Implementation Blueprint

**Document:** `architecture.md`  
**Version:** 1.0  
**Status:** Implementation Architecture  
**Purpose:** Define the complete website flow, project structure, technology stack, component boundaries, data flow, asset organization, routing, animation architecture, 3D architecture, and integration strategy.

---

# 1. Architecture Overview

KASHI — A City Beyond Time is a cinematic, chapter-based web experience.

The architecture must support:

- Multiple dedicated routes
- Cinematic transitions between routes
- Shared visual language
- Reusable animation primitives
- Data-driven content
- High-resolution photography
- Lazy-loaded 3D scenes
- Scroll-driven experiences
- Responsive layouts
- Reduced-motion fallbacks
- Progressive asset loading
- Strong performance
- Maintainable code

The system should be designed so that visual complexity remains isolated inside reusable systems rather than becoming duplicated page-specific code.

---

# 2. Architectural Philosophy

The implementation follows six principles.

## 2.1 Route-Based Chapters

Each major experience is an independent route.

```text
Landing
   ↓
Chapter
   ↓
Detail / Sub-experience
```

This avoids building one enormous page with every interaction mounted simultaneously.

---

## 2.2 Data-Driven Content

Content should not be hardcoded directly inside visual components.

Instead:

```text
Content Data
     ↓
Reusable Components
     ↓
Page Composition
```

Example:

```ts
const ghats = [...]
```

The same principle applies to:

- Ghats
- Temples
- Posters
- Food
- Story chapters

---

## 2.3 Shared Experience Layer

All pages should reuse a common system for:

- Navigation
- Page transitions
- Chapter transitions
- Loading
- Typography
- Buttons
- Image reveals
- Scroll behavior
- Reduced motion
- Error handling

---

## 2.4 Feature Isolation

Complex experiences should live in their own feature modules.

For example:

```text
features/
├── infinite-door/
├── ghats/
├── story/
├── temples/
├── posters/
├── food/
└── spirit/
```

This prevents one section from contaminating the architecture of another.

---

## 2.5 Progressive Loading

Heavy assets must be loaded only when required.

Examples:

```text
Landing
  ↓
Load landing assets

User enters Ghats
  ↓
Load ghat assets

User enters Temples
  ↓
Load temple 3D assets
```

The browser should not download every 3D model, photograph and video during initial page load.

---

## 2.6 Graceful Degradation

Every advanced interaction must have a fallback.

```text
Advanced experience
       ↓
Supported?
 ┌─────┴─────┐
 YES         NO
 ↓            ↓
3D/animation  Static fallback
```

---

# 3. Technology Stack

## 3.1 Core Framework

### Next.js

Use:

- Next.js
- App Router
- React Server Components where appropriate

Purpose:

- Routing
- Metadata
- Asset handling
- Server/client boundaries
- Deployment
- SEO

---

# 4. Programming Languages

## TypeScript

Primary language.

All application code should use TypeScript.

Avoid JavaScript files unless a specific configuration requires them.

Recommended:

```text
.ts
.tsx
```

---

# 5. Styling

## Tailwind CSS

Tailwind should provide:

- Layout
- Responsive utilities
- Typography utilities
- Spacing
- Basic visual styling
- State utilities

Complex visual effects should not become hundreds of inline Tailwind class strings.

Reusable visual systems should use:

- CSS modules
- global CSS
- component-level style abstractions

when appropriate.

---

# 6. Animation Stack

## Recommended

### GSAP

Use GSAP for:

- Timeline-based animations
- Scroll-driven animations
- Complex entrance sequences
- Chapter transitions
- Camera choreography
- Text choreography
- Image movement
- Cinematic sequences

Use:

```text
GSAP
ScrollTrigger
```

where appropriate.

---

# 7. Smooth Scrolling

A smooth-scroll solution may be used for cinematic sections.

Recommended conceptual architecture:

```text
Native Scroll
     ↓
Smooth Scroll Controller
     ↓
GSAP / ScrollTrigger
     ↓
Visual Experience
```

The smooth-scroll implementation must not break:

- keyboard scrolling
- accessibility
- mobile scrolling
- browser navigation

If native scrolling provides a better mobile experience, smooth scrolling can be disabled or simplified on mobile.

---

# 8. 3D / WebGL

## Recommended Stack

### Three.js

Use Three.js for:

- Infinite Door
- Temple models
- Food models
- Camera systems
- Lighting
- Model interaction

### React Three Fiber

Use React Three Fiber where React integration provides meaningful architectural benefits.

### Drei

Use Drei selectively for common Three.js helpers.

The final dependency set should remain minimal.

---

# 9. Image Handling

Use the Next.js image system where appropriate.

Requirements:

- Responsive image sizing
- Lazy loading
- Modern image formats
- Correct dimensions
- Appropriate quality
- Priority loading only for true above-the-fold assets

Large hero images should not be loaded at unnecessarily high resolutions on mobile.

---

# 10. Fonts

Fonts should be loaded through a controlled font system.

Recommended architecture:

```text
app/
└── fonts/
```

or Next.js font loading.

Fonts should be treated as product assets.

Avoid loading many font families.

---

# 11. Optional Supporting Technologies

Potential technologies may include:

```text
GSAP
Three.js
React Three Fiber
Drei
Lenis or equivalent smooth-scroll solution
```

Additional libraries should only be introduced if they solve a real problem.

Do not install a dependency merely because it provides an effect that can be implemented simply with existing tools.

---

# 12. High-Level System Architecture

```text
                         ┌──────────────────────┐
                         │       Browser        │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │      Next.js App     │
                         │      App Router      │
                         └──────────┬───────────┘
                                    │
              ┌─────────────────────┼─────────────────────┐
              │                     │                     │
              ▼                     ▼                     ▼
       ┌─────────────┐       ┌──────────────┐      ┌──────────────┐
       │ Page Routes │       │ Shared UI    │      │ Experience   │
       │             │       │ System       │      │ Features     │
       └──────┬──────┘       └──────┬───────┘      └──────┬───────┘
              │                     │                     │
              └─────────────────────┼─────────────────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   Animation System   │
                         └──────────┬───────────┘
                                    │
                 ┌──────────────────┼──────────────────┐
                 ▼                  ▼                  ▼
           DOM Animation       Scroll System       3D System
                 │                  │                  │
                 └──────────────────┼──────────────────┘
                                    ▼
                         ┌──────────────────────┐
                         │      Data Layer      │
                         └──────────┬───────────┘
                                    │
                                    ▼
                         ┌──────────────────────┐
                         │   Assets / Content   │
                         └──────────────────────┘
```

---

# 13. Recommended Folder Structure

The project should follow this structure:

```text
kashi/
│
├── app/
│   │
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   │
│   ├── loading.tsx
│   ├── error.tsx
│   ├── not-found.tsx
│   │
│   ├── (experience)/
│   │   │
│   │   ├── enter/
│   │   │   └── page.tsx
│   │   │
│   │   ├── kashi/
│   │   │   └── page.tsx
│   │   │
│   │   ├── ghats/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── story/
│   │   │   └── page.tsx
│   │   │
│   │   ├── temples/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── unfolded/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   │
│   │   ├── rasoi/
│   │   │   └── page.tsx
│   │   │
│   │   └── spirit/
│   │       └── page.tsx
│   │
│   └── api/
│       └── ...
│
├── components/
│   │
│   ├── ui/
│   │
│   ├── navigation/
│   │
│   ├── layout/
│   │
│   ├── typography/
│   │
│   ├── media/
│   │
│   ├── transitions/
│   │
│   └── loaders/
│
├── features/
│   │
│   ├── infinite-door/
│   │   ├── components/
│   │   ├── scene/
│   │   ├── hooks/
│   │   └── index.ts
│   │
│   ├── landing/
│   │   ├── components/
│   │   ├── sections/
│   │   └── index.ts
│   │
│   ├── ghats/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── animations/
│   │   └── index.ts
│   │
│   ├── story/
│   │   ├── components/
│   │   ├── chapters/
│   │   └── index.ts
│   │
│   ├── temples/
│   │   ├── components/
│   │   ├── scene/
│   │   ├── models/
│   │   └── index.ts
│   │
│   ├── unfolded/
│   │   ├── components/
│   │   ├── posters/
│   │   └── index.ts
│   │
│   ├── rasoi/
│   │   ├── components/
│   │   ├── scene/
│   │   └── index.ts
│   │
│   └── spirit/
│       ├── components/
│       └── index.ts
│
├── data/
│   │
│   ├── ghats.ts
│   ├── temples.ts
│   ├── posters.ts
│   ├── food.ts
│   ├── story.ts
│   └── navigation.ts
│
├── hooks/
│   │
│   ├── useMediaQuery.ts
│   ├── useReducedMotion.ts
│   ├── useScrollProgress.ts
│   ├── usePageTransition.ts
│   └── useDevice.ts
│
├── lib/
│   │
│   ├── utils.ts
│   ├── constants.ts
│   ├── routes.ts
│   ├── animation.ts
│   ├── performance.ts
│   └── accessibility.ts
│
├── animations/
│   │
│   ├── transitions/
│   ├── reveals/
│   ├── text/
│   ├── images/
│   └── shared/
│
├── three/
│   │
│   ├── core/
│   ├── cameras/
│   ├── lighting/
│   ├── loaders/
│   ├── materials/
│   └── utilities/
│
├── public/
│   │
│   ├── images/
│   │   ├── ghats/
│   │   ├── landing/
│   │   ├── posters/
│   │   ├── temples/
│   │   ├── food/
│   │   └── story/
│   │
│   ├── models/
│   │   ├── temples/
│   │   ├── food/
│   │   └── door/
│   │
│   ├── videos/
│   │   ├── transitions/
│   │   └── atmospheric/
│   │
│   ├── textures/
│   │
│   ├── icons/
│   │
│   └── fonts/
│
├── styles/
│   │
│   ├── typography.css
│   ├── animations.css
│   └── utilities.css
│
├── types/
│   │
│   ├── content.ts
│   ├── navigation.ts
│   ├── animation.ts
│   └── three.ts
│
├── tests/
│   ├── components/
│   ├── features/
│   └── e2e/
│
├── docs/
│   ├── prd.md
│   └── architecture.md
│
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

# 14. Route Architecture

## 14.1 Root Route

```text
/
```

Purpose:

Initial entry point.

Recommended behavior:

```text
/
 ↓
Opening Experience
 ↓
/kashi
```

The root route should not contain every chapter.

---

## 14.2 Opening

```text
/enter
```

Purpose:

The Infinite Door — Beyond Kashi.

Responsibilities:

- 3D doorway
- Character silhouette
- Lighting
- Camera
- Intro animation
- Exposure transition

---

# 15. Landing Route

```text
/kashi
```

Purpose:

**KASHI — A City Beyond Time**

Responsibilities:

- Ganga hero
- Main title
- Chapter discovery
- Navigation
- Introduction

---

# 16. Ghats Routes

```text
/ghats
/ghats/[slug]
```

Example:

```text
/ghats
/ghats/assi-ghat
/ghats/dashashwamedh-ghat
/ghats/manikarnika-ghat
```

## `/ghats`

Purpose:

Overview / chapter introduction.

## `/ghats/[slug]`

Purpose:

Individual ghat experience.

The route is driven by:

```ts
ghats.find((ghat) => ghat.slug === slug)
```

---

# 17. Story Route

```text
/story
```

The story should remain a single immersive experience rather than requiring a separate URL for every chapter.

Internally:

```text
/story
 ├── Chapter 01
 ├── Chapter 02
 ├── Chapter 03
 └── Chapter 04
```

This keeps the narrative continuous.

---

# 18. Temple Routes

```text
/temples
/temples/[slug]
```

Example:

```text
/temples/kashi-vishwanath
```

The route can support direct linking to a specific temple.

---

# 19. Kashi Unfolded Routes

```text
/unfolded
/unfolded/[slug]
```

Example:

```text
/unfolded/shaam-e-banaras
```

The grid exists at:

```text
/unfolded
```

Individual poster detail experiences exist at:

```text
/unfolded/[slug]
```

---

# 20. Rasoi Route

```text
/rasoi
```

The food experience remains a single immersive chapter.

Internal navigation is driven by food data.

---

# 21. Spirit Route

```text
/spirit
```

The final chapter.

Purpose:

- Return to Ganga
- Reduce motion
- Reflection
- Closing statement

---

# 22. Route Flow

The intended default journey is:

```text
/
│
▼
/enter
│
│  The Infinite Door
│
▼
/kashi
│
│  KASHI — A City Beyond Time
│
├───────────────┐
▼               ▼
/ghats          /story
│
├── /ghats/assi-ghat
├── /ghats/dashashwamedh-ghat
├── /ghats/manikarnika-ghat
├── /ghats/kedar-ghat
├── /ghats/harishchandra-ghat
├── /ghats/guleria-ghat
├── /ghats/chet-singh-ghat
└── /ghats/namo-ghat

        ↓

/temples
│
└── /temples/[slug]

        ↓

/unfolded
│
├── /unfolded/[slug]
│
└── 9 poster experiences

        ↓

/rasoi

        ↓

/spirit
```

---

# 23. Navigation Flow Model

Navigation should be treated as a stateful experience.

```text
Current Route
      │
      ├── Continue
      │      ↓
      │  Next Chapter
      │
      ├── Back
      │      ↓
      │  Previous Context
      │
      └── Home
             ↓
           /kashi
```

The browser's native back button must continue to work.

Do not replace normal browser history with a completely custom navigation system.

---

# 24. Page Transition Architecture

Transitions should be centralized.

Do not implement unrelated transition logic independently inside every page.

Recommended:

```text
components/
└── transitions/
    ├── PageTransition.tsx
    ├── ChapterTransition.tsx
    ├── GalliTransition.tsx
    └── ExposureTransition.tsx
```

## Transition Controller

Conceptually:

```text
Navigation Event
      ↓
Transition Controller
      ↓
Exit Animation
      ↓
Route Change
      ↓
New Route Mount
      ↓
Enter Animation
```

---

# 25. Animation Architecture

Animations should be categorized.

```text
animations/
├── transitions/
├── reveals/
├── text/
├── images/
└── shared/
```

## 25.1 Transitions

Used for:

- Route changes
- Chapter changes
- Opening sequence

## 25.2 Reveals

Used for:

- Text
- Images
- Cards
- Content blocks

## 25.3 Text

Used for:

- Character reveals
- Line reveals
- Word reveals
- Typography movement

## 25.4 Images

Used for:

- Parallax
- Zoom
- Crop movement
- Living-photo effects

## 25.5 Shared

Reusable utilities.

---

# 26. GSAP Architecture

GSAP should not be called indiscriminately inside components.

Use a predictable pattern.

Conceptual:

```text
Component
   ↓
useLayoutEffect / GSAP context
   ↓
Create timeline
   ↓
Register cleanup
   ↓
Kill/revert on unmount
```

Every animation must clean itself up.

This is especially important when navigating between routes.

---

# 27. Scroll Architecture

Scroll-driven sections should follow:

```text
Scroll Position
      ↓
Scroll Controller
      ↓
Normalized Progress
      ↓
Feature Animation
```

Do not make every component independently listen to scroll events.

Where practical, centralize expensive scroll calculations.

---

# 28. Living Photograph Architecture

The living-photo system should be reusable.

Suggested:

```text
components/media/LivingImage.tsx
```

Possible props:

```ts
type LivingImageProps = {
  src: string;
  alt: string;
  intensity?: number;
  parallax?: number;
  zoom?: number;
  atmospheric?: boolean;
};
```

The component can provide:

- subtle zoom
- parallax
- depth
- movement
- grain

Different sections can configure intensity without duplicating implementation.

---

# 29. 3D Architecture

3D scenes should be isolated from standard UI.

Example:

```text
three/
├── core/
│   ├── Scene.tsx
│   └── Renderer.ts
│
├── cameras/
├── lighting/
├── loaders/
├── materials/
└── utilities/
```

Feature-specific 3D implementation stays inside:

```text
features/
├── infinite-door/
├── temples/
└── rasoi/
```

This creates:

```text
Shared Three Utilities
          ↓
Feature-Specific Scene
          ↓
Feature Page
```

---

# 30. Infinite Door Architecture

```text
/enter
   │
   ▼
InfiniteDoorPage
   │
   ├── DoorScene
   │    ├── Camera
   │    ├── Lights
   │    ├── Door
   │    └── Character
   │
   ├── IntroText
   │
   └── ExposureTransition
```

Sequence:

```text
Initial darkness
      ↓
Light begins
      ↓
Character visible
      ↓
Character approaches
      ↓
Door grows in frame
      ↓
Character crosses threshold
      ↓
White exposure
      ↓
Navigate to /kashi
```

---

# 31. Temple Architecture

The temple system should separate:

```text
Temple Data
      ↓
Temple Viewer
      ↓
Three.js Scene
```

Example:

```ts
type Temple = {
  id: string;
  slug: string;
  name: string;
  description: string;
  model: string;
  image: string;
};
```

The viewer should accept the data rather than containing temple-specific content.

---

# 32. Food Architecture

The food system follows the same principle.

```text
Food Data
    ↓
Food Viewer
    ↓
3D Model
    ↓
Scroll Interaction
    ↓
Supporting Information
```

Example:

```ts
type FoodItem = {
  id: string;
  slug: string;
  name: string;
  description: string;
  model: string;
  image: string;
};
```

---

# 33. Kashi Unfolded Architecture

```text
/unfolded
     │
     ▼
PosterGrid
     │
     ├── PosterCard
     ├── PosterCard
     ├── PosterCard
     ├── ...
     └── PosterCard
```

Click:

```text
PosterCard
     ↓
/unfolded/[slug]
```

The poster detail page receives data from:

```text
data/posters.ts
```

---

# 34. Data Layer

All content should live in:

```text
data/
```

Recommended:

```text
data/
├── ghats.ts
├── temples.ts
├── posters.ts
├── food.ts
├── story.ts
└── navigation.ts
```

## Why?

It provides:

- Single source of truth
- Easy content updates
- Type safety
- Reusable rendering
- Easier testing

---

# 35. Type Layer

Shared types should live in:

```text
types/
```

Example:

```text
types/
├── content.ts
├── navigation.ts
├── animation.ts
└── three.ts
```

Types should be shared by:

- data
- components
- feature modules
- route pages

---

# 36. Navigation Data

Navigation should not be duplicated across pages.

Use:

```text
data/navigation.ts
```

Example structure:

```ts
const chapters = [
  {
    id: "ghats",
    title: "Steps to Eternity",
    href: "/ghats",
  },
  {
    id: "story",
    title: "Story of Kashi",
    href: "/story",
  },
];
```

The navigation UI renders this data.

---

# 37. Asset Architecture

All public assets should have predictable locations.

```text
public/
├── images/
├── models/
├── videos/
├── textures/
├── icons/
└── fonts/
```

## Images

```text
public/images/
├── landing/
├── ghats/
├── posters/
├── temples/
├── food/
└── story/
```

## Models

```text
public/models/
├── door/
├── temples/
└── food/
```

## Videos

```text
public/videos/
├── transitions/
└── atmospheric/
```

---

# 38. Asset Naming Convention

Use lowercase kebab-case.

Good:

```text
assi-ghat.webp
dashashwamedh-ghat.webp
shaam-e-banaras.webp
kashi-vishwanath.glb
```

Avoid:

```text
IMG_29382.JPG
Final Image NEW 2.png
TempleFinalFINAL.glb
```

Asset names should be predictable and searchable.

---

# 39. Image Format Strategy

Preferred formats:

```text
WebP
AVIF
```

Use PNG where transparency is required.

Examples:

- Architectural overlays
- Logos
- Certain graphical elements

Do not use PNG for large photographic backgrounds unless transparency is required.

---

# 40. 3D Model Format Strategy

Preferred:

```text
.glb / .gltf
```

Models should be:

- optimized
- compressed
- appropriately textured
- free of unnecessary geometry

---

# 41. Video Strategy

Transition videos should be:

- short
- compressed
- optimized
- loaded only when required

The Banaras galli transition should remain approximately:

**≤ 3 seconds**

Avoid using large background videos where a photograph + animation achieves the same effect.

---

# 42. Server vs Client Components

Use Server Components by default where possible.

Client Components are required for:

- GSAP interactions
- ScrollTrigger
- Three.js
- browser APIs
- pointer interaction
- touch interaction
- animation state
- client-side navigation behavior

Conceptually:

```text
Server Component
      ↓
Content / Layout
      ↓
Client Component
      ↓
Interaction
```

Do not mark entire routes as `"use client"` unless necessary.

---

# 43. Client Boundary Strategy

Keep client boundaries as small as practical.

Example:

```text
GhatPage
├── Server-rendered content
├── Server-rendered image
└── LivingImageClient
```

rather than:

```text
GhatPage
└── Entire page is client-rendered
```

This improves:

- performance
- maintainability
- hydration cost

---

# 44. Responsive Architecture

Use shared components with responsive behavior.

Avoid creating completely separate pages for desktop and mobile.

Preferred:

```text
Same Feature
     ↓
Responsive Layout
     ↓
Device-specific interaction
```

Example:

```text
TempleViewer
├── DesktopControls
└── TouchControls
```

---

# 45. Device Capability Detection

The system may detect:

- mobile
- tablet
- desktop
- reduced motion
- low-power conditions

Use this information to adjust:

- 3D quality
- animation intensity
- video loading
- texture resolution
- particle counts

Do not use device detection as a substitute for responsive CSS.

---

# 46. Reduced Motion Architecture

Create a shared hook:

```text
hooks/useReducedMotion.ts
```

Conceptual:

```ts
const prefersReducedMotion = useReducedMotion();
```

Every major animation system should respect it.

---

# 47. Loading Architecture

Use:

```text
app/loading.tsx
```

for global route loading where appropriate.

Feature-specific loading:

```text
features/
└── feature/
    └── components/
        └── FeatureLoader.tsx
```

3D loaders should provide:

- progress
- subtle visual feedback
- fallback state

---

# 48. Error Boundary Architecture

Use:

```text
app/error.tsx
```

for route-level failures.

Complex feature systems may also use local error boundaries.

For example:

```text
TempleViewer
     ↓
3D error
     ↓
Static temple image
```

The failure of a single 3D model must not destroy the entire page.

---

# 49. State Management

Do not introduce a global state-management library initially.

Use:

- React state
- Context where appropriate
- URL state where appropriate
- local feature state

Global state should be introduced only if a real cross-route requirement appears.

Likely global concerns:

- reduced-motion preference
- navigation transition state
- audio preference if sound is later introduced

---

# 50. URL as State

Use URLs for shareable content.

Examples:

```text
/unfolded/shaam-e-banaras
/ghats/assi-ghat
/temples/kashi-vishwanath
```

This allows:

- direct linking
- browser history
- refresh persistence
- sharing

Do not encode important page state only inside React state.

---

# 51. Scroll Restoration

Route transitions must account for scroll position.

When entering a new chapter:

```text
New route
   ↓
Scroll to top
   ↓
Enter animation
```

When using browser back/forward:

Respect browser navigation semantics where possible.

---

# 52. Prefetching Strategy

Next.js route prefetching should be used where beneficial.

Potential strategy:

```text
User hovers chapter link
       ↓
Prefetch route
```

Heavy 3D assets should not necessarily be downloaded just because the route is prefetched.

Separate:

```text
Route prefetch
```

from:

```text
3D asset preload
```

---

# 53. Asset Loading Priority

## Highest priority

- Landing hero
- Critical fonts
- Opening experience assets

## Medium priority

- First visible chapter assets

## Low priority

- Future chapter assets
- Offscreen posters
- 3D models for later chapters

---

# 54. Caching Strategy

Static assets should be cache-friendly.

Recommended:

- Immutable hashed application assets
- Long-lived static media caching
- CDN delivery where available
- Appropriate Next.js caching

Large media assets should not be repeatedly downloaded.

---

# 55. Component Dependency Flow

The dependency direction should generally be:

```text
Data
 ↓
Feature Logic
 ↓
Feature Components
 ↓
Shared Components
 ↓
Page Composition
```

Avoid reverse dependencies such as:

```text
Shared UI
 ↓
Specific Ghat Feature
```

Shared components must remain generic.

---

# 56. Feature Dependency Rules

A feature may import:

- Shared UI
- Shared hooks
- Shared utilities
- Shared types
- Its own components

A feature should not directly depend on another unrelated feature.

Bad:

```text
ghats/
  imports/
    temples/
```

Better:

```text
components/
hooks/
lib/
```

Shared logic should move upward into reusable modules.

---

# 57. CSS Architecture

Global CSS should contain only global concerns:

- Reset
- Base typography
- CSS variables
- Global accessibility
- Global utility behavior

Feature-specific styling should stay close to the feature.

Avoid a single massive stylesheet.

---

# 58. Design Tokens

Create centralized tokens for:

```text
Colors
Typography
Spacing
Border Radius
Z-index
Motion durations
Easing
Breakpoints
```

Example conceptual structure:

```text
styles/
└── tokens.css
```

This ensures the product remains visually coherent.

---

# 59. Z-Index System

Because the website contains:

- navigation
- overlays
- modals
- transitions
- 3D scenes
- loading screens

Use a controlled z-index scale.

Example:

```text
base
content
navigation
overlay
modal
transition
loader
```

Do not randomly use:

```text
z-[999999]
```

throughout the codebase.

---

# 60. Modal / Expanded Poster Architecture

Poster expansion should be accessible.

Flow:

```text
Poster Card
    ↓
Open
    ↓
Expanded View
    ↓
Focus Management
    ↓
Close
    ↓
Return Focus to Card
```

The expanded poster must:

- trap focus where appropriate
- support Escape
- support keyboard interaction
- provide accessible close control

---

# 61. Navigation Transition Controller

A central controller should coordinate:

```text
Current Page
     ↓
Transition Start
     ↓
Exit Animation
     ↓
Navigation
     ↓
New Page
     ↓
Entry Animation
```

This prevents individual pages from inventing incompatible transition behavior.

---

# 62. Audio Architecture — Future Ready

Sound is not required for MVP.

However, architecture should not prevent future ambient sound.

Potential future structure:

```text
audio/
├── AudioProvider
├── AudioController
└── tracks/
```

If implemented later:

- sound must be optional
- autoplay restrictions must be respected
- user preference must persist
- reduced-motion/accessibility considerations must apply

---

# 63. Testing Architecture

Testing should exist at three levels.

## 63.1 Unit

Test:

- utility functions
- data transformations
- route helpers
- content parsing

## 63.2 Component

Test:

- navigation
- poster cards
- modals
- loaders
- fallback states

## 63.3 End-to-End

Test complete journeys:

```text
Landing
 ↓
Ghats
 ↓
Poster
 ↓
Temple
 ↓
Rasoi
 ↓
Spirit
```

Also test:

- direct URLs
- browser back
- browser forward
- mobile viewport
- reduced motion

---

# 64. Performance Testing

Performance checks should include:

- Lighthouse
- Core Web Vitals
- Network waterfall
- JavaScript bundle analysis
- 3D frame performance
- mobile performance

Test on actual lower-powered devices when possible.

---

# 65. Development Workflow

Recommended implementation order:

```text
1. Project Foundation
        ↓
2. Design Tokens
        ↓
3. Routing
        ↓
4. Shared Navigation
        ↓
5. Transition System
        ↓
6. Landing
        ↓
7. Infinite Door
        ↓
8. Ghats
        ↓
9. Story
        ↓
10. Temples
        ↓
11. Kashi Unfolded
        ↓
12. Rasoi
        ↓
13. Spirit
        ↓
14. Responsive QA
        ↓
15. Performance
        ↓
16. Accessibility
        ↓
17. Final Polish
```

---

# 66. Implementation Dependency Graph

```text
                    ┌─────────────┐
                    │ Foundation  │
                    └──────┬──────┘
                           │
             ┌─────────────┼─────────────┐
             ▼             ▼             ▼
         Routing       Design System   Assets
             │             │             │
             └─────────────┼─────────────┘
                           ▼
                    Shared Components
                           │
             ┌─────────────┼─────────────┐
             ▼             ▼             ▼
        Navigation      Animation       Loading
             │             │             │
             └─────────────┼─────────────┘
                           ▼
                    Page Architecture
                           │
        ┌──────────┬───────┼────────┬──────────┐
        ▼          ▼       ▼        ▼          ▼
      Ghats      Story   Temples  Unfolded   Rasoi
        │          │       │        │          │
        └──────────┴───────┼────────┴──────────┘
                           ▼
                         Spirit
                           │
                           ▼
                     Final Polish
```

---

# 67. Environment Variables

Use:

```text
.env.local
```

for local secrets.

Provide:

```text
.env.example
```

for documentation.

No secret should be committed to Git.

The current MVP should minimize environment-dependent services.

---

# 68. Backend Strategy

The initial website does not require a traditional backend for its core content.

Primary content can be statically defined.

```text
Static Content
      ↓
Next.js
      ↓
Rendered Experience
```

A backend should only be introduced when a feature actually requires:

- user accounts
- CMS
- analytics storage
- dynamic content
- user-generated content

Do not add backend complexity prematurely.

---

# 69. CMS Strategy

A CMS is not required for MVP.

The first version should use typed local content.

If the content volume later becomes difficult to manage, a CMS can replace the data layer without rewriting the presentation layer.

This is another reason to keep content separate from components.

---

# 70. API Strategy

The initial architecture should minimize API dependence.

Potential future APIs:

```text
/api/...
```

Only create API routes when required.

Do not create unnecessary endpoints for static content.

---

# 71. Deployment Architecture

Recommended deployment:

```text
Git Repository
      ↓
Deployment Platform
      ↓
Next.js Application
      ↓
CDN
      ↓
Users
```

Static media should be CDN-friendly.

Large models and videos should be delivered efficiently.

---

# 72. Git Architecture

Recommended branch model:

```text
main
│
├── develop
│
├── feature/infinite-door
├── feature/ghats
├── feature/temples
├── feature/unfolded
└── feature/rasoi
```

Commit messages should describe the actual change.

Examples:

```text
feat: add infinite door scene
feat: add ghat data architecture
fix: restore mobile poster layout
perf: lazy load temple models
refactor: extract page transition controller
```

---

# 73. Documentation

The repository should contain:

```text
docs/
├── prd.md
└── architecture.md
```

Future documentation can include:

```text
docs/
├── animation-guidelines.md
├── content-guide.md
├── asset-guide.md
└── deployment.md
```

---

# 74. File Ownership Rules

## `app/`

Routes and page composition.

## `components/`

Generic reusable UI.

## `features/`

Feature-specific behavior.

## `data/`

Content.

## `hooks/`

Reusable React hooks.

## `lib/`

Pure utilities and shared application logic.

## `animations/`

Reusable animation systems.

## `three/`

Shared Three.js infrastructure.

## `public/`

Static assets.

## `types/`

Shared TypeScript types.

## `tests/`

Automated tests.

---

# 75. What Must NOT Happen

Avoid:

## 75.1 Giant Page Components

Bad:

```text
page.tsx
└── 2000+ lines
```

---

## 75.2 Duplicated Animation Logic

Bad:

```text
Ghat1 animation
Ghat2 animation
Ghat3 animation
...
```

Instead:

```text
LivingImage
```

with configuration.

---

## 75.3 Global Client Rendering

Do not make the entire application:

```tsx
"use client";
```

unless absolutely necessary.

---

## 75.4 Loading Every Asset Immediately

Do not preload:

- all 8 ghat images
- all 9 posters
- every temple model
- every food model
- every transition video

during the first render.

---

## 75.5 Feature Cross-Contamination

Do not let:

```text
ghats
```

directly control:

```text
temples
```

or:

```text
rasoi
```

Feature boundaries must remain clear.

---

## 75.6 Uncontrolled Z-Index

Do not randomly assign extreme z-index values.

---

## 75.7 Animation Without Cleanup

Every GSAP/animation lifecycle must clean up on unmount.

---

# 76. Example Data Flow — Ghat

```text
data/ghats.ts
       ↓
/ghats/[slug]/page.tsx
       ↓
GhatPage
       ↓
GhatHero
       ↓
LivingImage
       ↓
Animation System
       ↓
Browser
```

---

# 77. Example Data Flow — Poster

```text
data/posters.ts
       ↓
/unfolded/page.tsx
       ↓
PosterGrid
       ↓
PosterCard
       ↓
User Click
       ↓
/unfolded/[slug]
       ↓
PosterDetail
```

---

# 78. Example Data Flow — Temple

```text
data/temples.ts
       ↓
/temples/[slug]
       ↓
TemplePage
       ↓
TempleViewer
       ↓
Three.js / R3F
       ↓
GLB Loader
       ↓
Model
```

---

# 79. Example Data Flow — Food

```text
data/food.ts
       ↓
/rasoi
       ↓
FoodExperience
       ↓
FoodViewer
       ↓
Three.js
       ↓
Scroll Controller
       ↓
Camera / Model Rotation
```

---

# 80. Example Data Flow — Opening

```text
/enter
  ↓
InfiniteDoor
  ↓
Three.js Scene
  ↓
Animation Timeline
  ↓
Character reaches threshold
  ↓
ExposureTransition
  ↓
router.push("/kashi")
```

---

# 81. Cross-Feature Communication

Features should communicate through:

- Route changes
- Shared navigation
- Shared transition controller
- URL state
- Shared context only where genuinely required

Avoid direct component-to-component communication between unrelated pages.

---

# 82. Shared Experience Context

A lightweight context may eventually manage:

```text
ExperienceContext
├── transition state
├── reduced motion
├── navigation state
└── optional audio state
```

Do not put all application data into context.

Content belongs in `data/`.

---

# 83. Performance Isolation

Each expensive system should be independently loadable.

```text
Landing
 └── no temple 3D

Temples
 └── temple 3D loaded here

Rasoi
 └── food 3D loaded here
```

This ensures one expensive feature does not increase the initial cost of every page.

---

# 84. Rendering Strategy

Prefer:

```text
Server-rendered structure
+
Client-side interaction islands
```

Example:

```text
Server:
  title
  description
  image
  metadata

Client:
  animation
  scroll
  3D
  interaction
```

This should be the default architecture.

---

# 85. SEO vs Experience Balance

Cinematic effects must never prevent crawlers from understanding:

- page title
- chapter name
- primary text
- content hierarchy
- relevant imagery

Core information should exist in HTML even if animation changes how it appears visually.

---

# 86. Accessibility vs Animation Balance

The visual experience should be enhanced by motion, not dependent on it.

A reduced-motion user should still receive:

- the same content
- the same navigation
- the same story
- the same core interactions where practical

Only the presentation intensity changes.

---

# 87. Final Architecture Model

The complete application can be understood as:

```text
                         KASHI APPLICATION
                                │
               ┌────────────────┼────────────────┐
               │                │                │
               ▼                ▼                ▼
           ROUTING          EXPERIENCE        CONTENT
               │                │                │
               │                │                │
         Next.js App         Features          Data
         Router              │                │
               │             │                │
               │      ┌──────┼──────┐         │
               │      ▼      ▼      ▼         │
               │    Ghats  Temples Rasoi      │
               │      │      │      │         │
               └──────┼──────┼──────┼─────────┘
                      │      │      │
                      ▼      ▼      ▼
                 Shared UI / Animation
                         │
              ┌──────────┼──────────┐
              ▼          ▼          ▼
             DOM        GSAP       Three.js
              │          │          │
              └──────────┼──────────┘
                         ▼
                    Browser / CDN
```

---

# 88. Final Architecture Principles

The implementation must preserve these rules throughout development:

1. **Routes define chapters.**
2. **Features own complex behavior.**
3. **Data owns content.**
4. **Components own reusable presentation.**
5. **Animations are reusable systems, not page-specific hacks.**
6. **Three.js is isolated from ordinary UI.**
7. **Heavy assets are loaded progressively.**
8. **Server rendering is preferred wherever interaction is unnecessary.**
9. **Client components remain as small as practical.**
10. **URL state is used for shareable experiences.**
11. **Every major interaction has a fallback.**
12. **Every major page can return to `/kashi`.**
13. **Mobile is an intentional experience, not a scaled desktop layout.**
14. **Performance is considered during implementation, not after it.**
15. **Accessibility is part of architecture, not final polish.**
16. **The visual system remains coherent across all chapters.**
17. **No feature should depend directly on an unrelated feature.**
18. **Do not introduce infrastructure that the MVP does not need.**
19. **Do not let technical complexity become visible as UX complexity.**
20. **Technology serves the story; the story serves Kashi.**

---

# 89. Final System Flow

The complete experience should ultimately behave as:

```text
USER
 │
 ▼
/
 │
 ▼
THE INFINITE DOOR
 │
 │  3D + cinematic animation
 ▼
KASHI — A CITY BEYOND TIME
 │
 ├───────────────┐
 │               │
 ▼               ▼
STEPS TO       STORY OF
ETERNITY       KASHI
 │               │
 └───────┬───────┘
         ▼
WHERE GODS RESIDE
 │
 │  Interactive 3D temples
 ▼
KASHI UNFOLDED
 │
 │  3 × 3 editorial poster grid
 ▼
POSTER DETAIL
 │
 ▼
KASHI RASOI
 │
 │  Interactive 3D food
 ▼
THE SPIRIT OF KASHI
 │
 ▼
GANGA / REFLECTION
 │
 ▼
END
```

The architecture exists to make this flow feel continuous even though the implementation is divided into independent, maintainable technical systems.

---

# 90. Definition of Architectural Completion

The architecture is considered correctly implemented when:

- [ ] Every major chapter has a dedicated route.
- [ ] Route transitions are centralized.
- [ ] Shared components are reusable.
- [ ] Feature-specific logic remains isolated.
- [ ] Content is separated from presentation.
- [ ] Ghat, temple, poster and food data are typed.
- [ ] Heavy 3D assets are lazy-loaded.
- [ ] Images are optimized.
- [ ] Mobile behavior is explicitly supported.
- [ ] Reduced-motion behavior exists.
- [ ] Error and loading states exist.
- [ ] Browser navigation works.
- [ ] Direct URLs work.
- [ ] Browser back/forward works.
- [ ] No feature has unnecessary cross-dependencies.
- [ ] No unnecessary backend exists.
- [ ] No unnecessary global state exists.
- [ ] Performance is measured before final release.
- [ ] Accessibility is tested before final release.

---

# 91. Architecture Closing Principle

The application should feel like **one continuous experience to the user**, while internally remaining **a collection of isolated, reusable and maintainable systems**.

Externally:

```text
One Kashi
```

Internally:

```text
Routes
+
Features
+
Components
+
Data
+
Animation
+
3D
+
Assets
```

That separation is the foundation that allows the website to become visually ambitious without becoming technically unmaintainable.
