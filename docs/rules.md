# KASHI — A City Beyond Time
# AI IMPLEMENTATION RULEBOOK

**Document:** `rules.md`  
**Version:** 1.0  
**Audience:** AI coding agents, autonomous development agents, code-generation assistants, and human developers using AI assistance  
**Status:** Mandatory implementation rules

---

# 1. PURPOSE OF THIS DOCUMENT

This document is the operational rulebook for any AI agent implementing, modifying, debugging, refactoring, or extending the KASHI website.

The AI must treat:

```text
prd.md
architecture.md
rules.md
```

as the primary project specification.

These documents are not suggestions.

They define the intended:

- Product
- User experience
- Architecture
- Visual direction
- Technical boundaries
- Interaction behavior
- Asset usage
- Development constraints
- Quality standards

If an AI agent encounters a conflict between an implementation shortcut and these documents, the implementation shortcut must lose.

---

# 2. PROJECT PRINCIPLE

The website is not merely a collection of web pages.

It is a cinematic digital experience about Kashi.

The implementation must preserve:

> **The feeling of entering, exploring, and eventually leaving Kashi.**

Technology exists to support that feeling.

Therefore:

```text
Experience > Technical novelty
Clarity > Complexity
Intentional motion > Random animation
Performance > Excessive effects
Authenticity > Decoration
Consistency > Individual component creativity
```

---

# 3. SOURCE OF TRUTH HIERARCHY

When deciding what to implement, use this priority order:

```text
1. Explicit user instruction
2. Current approved project decision
3. prd.md
4. architecture.md
5. rules.md
6. Existing implementation
7. AI assumption
```

An AI assumption is always the weakest source.

If something is not specified, the AI must choose the smallest reasonable solution that fits the existing architecture.

Do not invent major product decisions.

---

# 4. ABSOLUTE RULE

## DO NOT CHANGE APPROVED DESIGN DECISIONS WITHOUT PERMISSION.

This includes:

- Section names
- Page structure
- User journey
- Selected images
- Selected ghats
- Poster structure
- Poster colors
- Major interactions
- Navigation behavior
- Visual identity
- 3D requirements
- Animation concepts
- Typography direction
- Content hierarchy

If a change appears beneficial, the AI may recommend it.

It must not silently implement it.

---

# 5. GENERAL AI BEHAVIOR

The AI must behave like a senior engineer working inside an existing product team.

It should:

- inspect before modifying
- understand before refactoring
- preserve before replacing
- reuse before creating
- simplify before adding dependencies
- test before claiming success
- verify before deleting
- ask only when genuinely blocked

The AI must never behave like a generic website generator.

---

# 6. BEFORE WRITING CODE

Before implementing any feature, the AI must:

1. Read the relevant project documentation.
2. Inspect the existing folder structure.
3. Inspect related components.
4. Inspect existing routes.
5. Inspect relevant data files.
6. Inspect relevant assets.
7. Determine whether the required functionality already exists.
8. Reuse existing systems where possible.
9. Identify the smallest correct implementation.

Do not immediately create new files.

---

# 7. UNDERSTAND THE EXISTING CODE FIRST

Before modifying a component:

```text
Read component
     ↓
Read its parent
     ↓
Read its dependencies
     ↓
Understand data flow
     ↓
Modify
```

Never modify code based solely on a filename.

---

# 8. DO NOT DESTROY WORKING SYSTEMS

If an existing feature works:

```text
DO NOT rewrite it
```

unless:

- the user explicitly requests a rewrite
- the architecture requires it
- there is a confirmed bug
- the implementation fundamentally violates project requirements

A working implementation is valuable even if it is not the AI's preferred coding style.

---

# 9. MINIMAL CHANGE PRINCIPLE

When fixing a bug:

> Change the smallest amount of code necessary to fix the actual problem.

Do not turn:

```text
1 bug
```

into:

```text
1 bug + architecture rewrite + dependency changes + visual redesign
```

---

# 10. NO UNSOLICITED REDESIGN

The AI must never redesign the website because it thinks the design could be better.

Do not change:

- colors
- typography
- spacing
- layouts
- images
- animations
- card designs
- navigation
- page hierarchy

unless requested or required to fix a documented issue.

---

# 11. ASSET PROTECTION RULE

User-selected assets are protected.

If the project specifies an image for a ghat, poster, temple, or section:

```text
USE THAT IMAGE.
```

Do not:

- replace it
- regenerate it
- search for another image
- crop it into an entirely different composition
- substitute stock imagery

unless explicitly instructed.

The AI may optimize an asset technically while preserving its visual identity.

---

# 12. GHAT ASSET RULE

The finalized ghat images are fixed project assets.

The eight selected ghats are:

1. Assi Ghat
2. Dashashwamedh Ghat
3. Manikarnika Ghat
4. Kedar Ghat
5. Harishchandra Ghat
6. Guleria Ghat
7. Chet Singh Ghat
8. Namo Ghat

Do not replace these selections.

Do not silently add additional ghats.

Do not remove one because another seems more visually attractive.

---

# 13. KASHI UNFOLDED RULE

The Kashi Unfolded poster collection is an approved product decision.

The poster system must preserve:

- 9-poster structure
- 3 × 3 grid
- editorial travel-poster aesthetic
- individual visual identities
- approved poster colors
- approved imagery
- approved taglines
- poster detail experience

Do not make all posters visually identical.

---

# 14. SHAAM-E-BANARAS RULE

The approved tagline is:

> **The Ganga glows after dusk.**

Do not replace it with a generic alternative.

The description must acknowledge the relevant famous ghats:

- Assi
- Dashashwamedh
- Namo
- Manikarnika

---

# 15. TAGLINE RULE

Do not automatically write taglines beginning with:

> "Where..."

The project intentionally avoids repetitive "Where..." taglines.

Every tagline should be specific to the subject.

---

# 16. CONTENT AUTHENTICITY

Do not fabricate historical or cultural claims.

If factual content is required and the information is not present in the approved project content:

```text
Do not invent it.
```

Use one of:

1. Existing verified content
2. User-provided content
3. A reliable research source, if web research is authorized
4. A clearly marked placeholder during development

Never present invented information as historical fact.

---

# 17. NO FAKE FUNCTIONALITY

Never claim a feature works when it does not.

Examples:

Bad:

```text
"3D viewer implemented"
```

when it is actually a static image.

Bad:

```text
"Navigation complete"
```

when links are placeholders.

Bad:

```text
"Fully responsive"
```

without testing responsive layouts.

The AI must report the actual implementation state.

---

# 18. NO PLACEHOLDER LEAKAGE

Temporary placeholders may exist during development.

But before completion, remove:

```text
Lorem ipsum
Test title
Example image
Placeholder model
TODO text
Dummy navigation
Fake loading percentage
```

unless intentionally retained as a documented development state.

---

# 19. NO RANDOM DEPENDENCIES

Do not install packages simply because they are popular.

Before adding a dependency, determine:

- Why is it required?
- Can existing libraries solve it?
- Does it increase bundle size?
- Does it conflict with the architecture?
- Is it maintained?
- Is it necessary for the MVP?

Prefer:

```text
Existing tools
>
Small custom solution
>
New dependency
```

---

# 20. TECHNOLOGY CONSTRAINT

The approved stack is centered around:

- Next.js
- React
- TypeScript
- Tailwind CSS
- GSAP
- Three.js
- React Three Fiber where appropriate

Do not replace the stack with another framework or animation ecosystem without explicit approval.

---

# 21. TYPESCRIPT RULE

Use TypeScript throughout application code.

Avoid:

```ts
any
```

unless there is a documented technical reason.

Prefer:

```ts
unknown
```

with proper narrowing.

Types should represent actual domain objects.

---

# 22. COMPONENT RULE

Components should have one clear responsibility.

Bad:

```text
GhatPage
 ├── routing
 ├── data loading
 ├── 3D engine
 ├── navigation
 ├── footer
 ├── analytics
 ├── all animations
 └── every ghat
```

Better:

```text
GhatPage
 ├── GhatHero
 ├── GhatInfo
 ├── GhatNavigation
 └── LivingImage
```

---

# 23. FILE SIZE RULE

Large files are a warning sign.

If a component becomes difficult to understand, separate it by responsibility.

Do not split files artificially just to reduce line count.

The goal is:

```text
Cohesion
+
Readability
+
Maintainability
```

---

# 24. DATA SEPARATION RULE

Do not hardcode repeated content inside JSX.

Bad:

```tsx
<h1>Assi Ghat</h1>
<p>...</p>
```

repeated across multiple components.

Prefer:

```text
data/ghats.ts
```

and render from structured data.

---

# 25. SINGLE SOURCE OF TRUTH

A piece of content should have one canonical source.

Example:

```text
Ghat name
description
image
slug
```

should exist in one ghat data object rather than being copied across multiple files.

---

# 26. SLUG RULE

Routes using content slugs must be stable.

Example:

```text
assi-ghat
dashashwamedh-ghat
shaam-e-banaras
```

Do not randomly change slugs because of stylistic preference.

Changing a slug can break:

- links
- navigation
- bookmarks
- direct URLs
- SEO

---

# 27. ROUTING RULE

Use Next.js App Router conventions.

Routes should remain predictable.

Do not create hidden navigation mechanisms that bypass browser history.

The following must work:

```text
Back
Forward
Refresh
Direct URL
New tab
```

where applicable.

---

# 28. NAVIGATION RULE

Every major chapter should provide a clear way to:

- continue
- go back
- return to landing

The user should never become trapped inside an animation.

---

# 29. BROWSER HISTORY RULE

Do not break browser navigation.

If the user presses:

```text
Back
```

the application must behave naturally.

Do not intercept browser history simply to force a cinematic animation unless the behavior has been deliberately designed and tested.

---

# 30. ANIMATION PRINCIPLE

Animations must communicate something.

Good:

```text
Image slowly moves
→ creates living-photo feeling
```

Bad:

```text
Image rotates
→ because animation looks cool
```

Every significant animation should have a purpose.

---

# 31. NO ANIMATION OVERLOAD

Not everything needs to move.

Use motion hierarchy:

```text
Primary motion
    ↓
Secondary motion
    ↓
Atmospheric motion
```

If everything moves equally, nothing feels important.

---

# 32. CINEMATIC ≠ SLOW

Do not make animations unnecessarily slow.

The experience should feel:

- deliberate
- atmospheric
- immersive

but not:

- sluggish
- frustrating
- unresponsive

---

# 33. ANIMATION CLEANUP

Every GSAP animation, ScrollTrigger, event listener, observer, timer, and animation frame must be cleaned up.

Conceptually:

```text
Mount
 ↓
Create animation
 ↓
Use
 ↓
Unmount
 ↓
Cleanup
```

Never leave animations running after navigation.

---

# 34. GSAP RULE

Use GSAP where timeline control is valuable.

Do not use GSAP for simple CSS transitions.

Prefer:

```css
transition
transform
opacity
```

for simple interactions.

Use GSAP for:

- timelines
- scroll choreography
- coordinated motion
- complex sequencing

---

# 35. SCROLL RULE

Do not attach unnecessary scroll listeners to dozens of components.

Prefer centralized scroll systems.

Avoid expensive work on every scroll tick.

Use:

- ScrollTrigger
- requestAnimationFrame
- normalized progress
- throttling where appropriate

when necessary.

---

# 36. MOBILE RULE

Mobile is not an afterthought.

Every feature must have a mobile behavior defined.

Do not assume:

```text
desktop interaction = mobile interaction
```

Examples:

```text
Mouse drag
→ Touch drag

Hover
→ Tap / intentional reveal

Large 3D scene
→ Reduced complexity

Horizontal desktop layout
→ Responsive stacked layout
```

---

# 37. HOVER RULE

Never make critical functionality depend only on hover.

Hover is unavailable on many touch devices.

Anything important must have a non-hover path.

---

# 38. TOUCH RULE

Touch interactions must not interfere with:

- native scrolling
- browser gestures
- accessibility
- navigation

A draggable 3D model must not make the entire page impossible to scroll.

---

# 39. REDUCED MOTION RULE

Respect:

```text
prefers-reduced-motion
```

When enabled:

- reduce transitions
- disable unnecessary parallax
- simplify 3D movement
- reduce camera motion
- avoid intense exposure effects
- preserve content

Reduced motion does not mean removing the experience.

It means presenting the same experience more calmly.

---

# 40. 3D RULE

3D is an enhancement.

It must never be the only way to access important information.

If a model fails:

```text
3D Model
   ↓
Failure
   ↓
Static image / fallback
```

The page must remain usable.

---

# 41. 3D PERFORMANCE RULE

3D scenes must be optimized.

Avoid:

- unnecessarily high-poly models
- huge textures
- excessive lights
- unnecessary post-processing
- unnecessary particles
- continuously running animation when nothing changes

The AI should prioritize stable frame rates.

---

# 42. 3D LOADING RULE

Do not load all 3D models globally.

Load models near the feature that needs them.

Example:

```text
Landing
→ no temple model

Temple page
→ temple model loads

Rasoi
→ food model loads
```

---

# 43. IMAGE PERFORMANCE RULE

Use appropriate image sizes.

Do not load a 5000px image for a 300px mobile element.

Use:

- responsive sizes
- modern formats
- lazy loading
- priority loading only when necessary

---

# 44. HERO IMAGE RULE

The actual first-visible hero asset may be prioritized.

But do not mark every image:

```text
priority
```

Only genuinely critical images should receive high loading priority.

---

# 45. VIDEO RULE

Videos must be used intentionally.

The Banaras galli transition should remain short.

Avoid:

- unnecessary autoplay videos
- huge background videos
- videos where a photograph animation is sufficient

---

# 46. TRANSITION VIDEO RULE

The galli transition is a transition mechanism, not a page itself.

Flow:

```text
Current Page
 ↓
Galli Transition
 ↓
New Page
```

Do not allow the transition video to become a content blocker.

---

# 47. ERROR HANDLING PRINCIPLE

Every failure should degrade gracefully.

The user should see:

```text
Something went wrong
+
Useful recovery action
```

not:

```text
White screen
```

---

# 48. ERROR CLASSIFICATION

When an error occurs, first classify it.

## Type A — Syntax / Build Error

Examples:

- TypeScript error
- JSX error
- import failure

Action:

```text
Fix immediately.
```

---

## Type B — Runtime Error

Examples:

- undefined data
- invalid DOM access
- component crash

Action:

```text
Identify root cause
→ fix
→ test route
```

---

## Type C — Asset Error

Examples:

- image missing
- model missing
- video missing

Action:

```text
Verify path
→ verify filename
→ verify import/reference
→ add fallback
```

Do not replace the user's asset automatically.

---

## Type D — Performance Error

Examples:

- low FPS
- slow initial load
- memory spikes

Action:

```text
Profile
→ identify bottleneck
→ optimize actual bottleneck
```

Do not randomly remove visual features.

---

## Type E — UX Error

Examples:

- impossible navigation
- broken back button
- unreadable text
- animation blocks interaction

Action:

Fix the experience, not merely the console warning.

---

# 49. ERROR DEBUGGING RULE

Never blindly patch symptoms.

Use:

```text
Observe
 ↓
Reproduce
 ↓
Locate
 ↓
Understand
 ↓
Fix root cause
 ↓
Test
```

Not:

```text
Error
 ↓
Random code change
 ↓
Another error
 ↓
Another random change
```

---

# 50. CONSOLE ERROR RULE

Before considering a feature complete:

```text
No unexpected console errors.
```

Warnings should also be investigated when they indicate real architectural problems.

Do not hide errors with:

```text
console.clear()
```

or by suppressing warnings.

---

# 51. NETWORK ERROR RULE

If an asset fails:

1. Check the URL/path.
2. Check filename casing.
3. Check asset existence.
4. Check import/public path behavior.
5. Check network response.
6. Add fallback if appropriate.

Do not immediately substitute another asset.

---

# 52. DATA ERROR RULE

If a slug does not exist:

```text
404 / not-found state
```

Do not silently render a random item.

Example:

```text
/ghats/not-a-real-ghat
```

must not display Assi Ghat.

---

# 53. NULL SAFETY

Do not assume data exists.

Bad:

```ts
ghat.image.src
```

when `ghat` may be undefined.

Use:

```text
validation
+
safe access
+
fallback
```

where necessary.

---

# 54. LOADING STATE RULE

Loading states should feel like part of the visual language.

Avoid generic:

```text
Loading...
```

unless appropriate.

The loader should be:

- minimal
- unobtrusive
- consistent
- short-lived

Never fake progress.

---

# 55. NO INFINITE LOADING

Every asynchronous operation must have a failure path.

Bad:

```text
Loading...
forever
```

Better:

```text
Loading
 ↓
Success
OR
Error fallback
```

---

# 56. ACCESSIBILITY RULE

The AI must preserve:

- semantic HTML
- keyboard navigation
- focus visibility
- alt text
- button semantics
- accessible labels
- readable contrast
- Escape behavior for overlays
- reduced-motion support

Do not sacrifice accessibility simply to make an animation easier.

---

# 57. IMAGE ALT RULE

Meaningful images require meaningful alternative text.

Decorative images should be treated as decorative.

Do not write:

```text
image
photo
photo1
```

as meaningful alt text.

---

# 58. BUTTON RULE

If something performs an action:

```text
Use button
```

If something navigates:

```text
Use link
```

Do not use:

```text
<div onClick={...}>
```

for basic interactive controls.

---

# 59. FOCUS RULE

Keyboard users must be able to determine:

```text
Where am I?
What is focused?
How do I close this?
How do I continue?
```

Do not remove focus outlines without providing an accessible replacement.

---

# 60. TEXT READABILITY RULE

Do not allow:

- tiny text
- unreadable overlays
- low contrast
- excessive letter spacing
- text hidden behind imagery

Cinematic design is not an excuse for poor readability.

---

# 61. SEO RULE

Each route should have appropriate:

- title
- description
- metadata
- semantic headings

Do not hide all meaningful content inside canvas/WebGL.

---

# 62. SECURITY RULE

Never expose secrets in:

- client components
- public files
- Git
- browser bundles

Never commit:

```text
.env.local
API keys
tokens
private credentials
```

Use:

```text
.env.example
```

for documentation.

---

# 63. USER DATA RULE

The current project does not require unnecessary user data collection.

Do not add:

- authentication
- tracking
- databases
- analytics
- personal profiles

unless explicitly requested.

---

# 64. BACKEND RULE

Do not create a backend merely because modern websites often have one.

If static data solves the requirement:

```text
Use static data.
```

Backend infrastructure requires justification.

---

# 65. AI GENERATED CONTENT RULE

AI-generated copy must fit the established voice.

The writing should feel:

- cinematic
- restrained
- culturally respectful
- concise
- atmospheric

Avoid:

- generic travel-blog writing
- excessive superlatives
- fake spirituality
- cliché marketing language
- repetitive "Where..." statements

---

# 66. AI DESIGN RULE

Do not generate random UI patterns.

The AI must maintain:

```text
Editorial
+
Cinematic
+
Minimal
+
Culturally grounded
```

Visual decisions should feel like they belong to the same website.

---

# 67. CULTURAL RESPECT RULE

Kashi must not be reduced to:

- generic spirituality
- exotic decoration
- tourist clichés
- stereotypical temple imagery

The website should communicate the city's complexity:

```text
History
+
Faith
+
Daily life
+
Architecture
+
Food
+
River
+
People
+
Memory
```

---

# 68. NO EXCESSIVE DECORATION

Do not add:

- random particles
- unnecessary gradients
- floating icons
- excessive glow
- meaningless noise
- decorative 3D objects

unless they support the visual concept.

---

# 69. NO "AI LOOK"

Avoid visual patterns that make the website feel like a generic AI-generated website.

Examples to avoid:

- excessive glassmorphism
- generic gradient backgrounds
- template-like cards
- random glowing blobs
- unnecessary neon
- generic dashboard layouts
- excessive rounded cards
- stock-looking imagery

The visual language must remain specific to Kashi.

---

# 70. NO TECH SHOWCASE FOR ITS OWN SAKE

Do not add:

```text
WebGL
because WebGL is impressive.
```

Use WebGL because the interaction requires it.

Do not add:

```text
parallax
because parallax is trendy.
```

Use it because it enhances the intended experience.

---

# 71. PERFORMANCE BUDGET MINDSET

Every visual effect has a cost.

Before adding an effect ask:

```text
Does this improve the experience enough to justify its cost?
```

If no:

```text
Do not add it.
```

---

# 72. MOBILE PERFORMANCE

Assume many users will access the website from mobile devices.

Optimize:

- JavaScript
- images
- 3D
- videos
- animations
- fonts

Do not build exclusively for a high-end desktop GPU.

---

# 73. MEMORY MANAGEMENT

Heavy features must release resources when leaving a route.

Especially:

- Three.js scenes
- textures
- geometries
- materials
- videos
- event listeners
- GSAP timelines
- ScrollTriggers

---

# 74. REFACTORING RULE

Refactor when:

- duplication is significant
- architecture is clearly violated
- a component has multiple unrelated responsibilities
- performance requires structural change
- a bug is caused by poor structure

Do not refactor merely because the AI prefers a different style.

---

# 75. NO MASS REFACTORING

Never modify dozens of unrelated files for a small feature.

If a feature requires architectural change:

```text
Identify affected files
→ change only those
→ verify regressions
```

---

# 76. DEPENDENCY LOCK RULE

Do not casually upgrade major packages during feature work.

Package upgrades can introduce unrelated failures.

If a dependency must change:

1. Explain why internally.
2. Check compatibility.
3. Update lockfile.
4. Run build.
5. Test affected features.

---

# 77. BUILD VERIFICATION RULE

After significant changes, run appropriate checks:

```text
TypeScript
Lint
Build
Tests
```

The AI must not say:

> "It should work."

when it can actually verify it.

---

# 78. DEFINITION OF DONE

A feature is not complete merely because the code exists.

A feature is complete when:

- it renders
- it behaves correctly
- it follows the design
- it works responsively
- it handles errors
- it does not introduce console errors
- it does not break navigation
- it respects reduced motion
- it does not create obvious performance regressions
- its assets load correctly

---

# 79. VISUAL QA RULE

For visual features, code inspection is not enough.

The AI should inspect the rendered result when the tooling permits it.

Check:

- spacing
- hierarchy
- cropping
- animation
- contrast
- overflow
- responsiveness
- z-index
- transitions

---

# 80. RESPONSIVE QA

At minimum test conceptual breakpoints:

```text
Mobile
Tablet
Desktop
Large Desktop
```

Do not optimize only for one screen size.

---

# 81. ROUTE QA

Every route must be checked for:

```text
Direct navigation
Refresh
Back
Forward
Internal links
Missing content
Invalid slug
```

---

# 82. ANIMATION QA

Check:

```text
First load
Repeated navigation
Back navigation
Forward navigation
Refresh
Mobile
Reduced motion
Slow device
```

Animations must not accumulate across route changes.

---

# 83. ASSET QA

Before release verify:

- every referenced image exists
- every model exists
- every video exists
- paths are correct
- filenames match casing
- no broken URLs remain

---

# 84. PLACEHOLDER RULE

During development, placeholders are allowed only when the actual asset or content is unavailable.

Mark them clearly.

Example:

```text
TODO: Replace with finalized temple model.
```

Never disguise placeholders as final assets.

---

# 85. USER INSTRUCTION OVERRIDE

If the user explicitly changes a previous decision, the new explicit instruction supersedes the old one.

The AI should then update:

- implementation
- relevant data
- documentation
- architecture if necessary

Do not preserve outdated behavior merely because it was previously approved.

---

# 86. CONFLICT RESOLUTION

If two project documents appear to conflict:

```text
Latest explicit user decision
        ↓
wins
```

If no explicit user decision resolves it:

```text
PRD
 ↓
Architecture
 ↓
Rules
 ↓
Existing implementation
```

If still ambiguous and the decision materially affects the product:

```text
Ask the user.
```

---

# 87. WHEN TO ASK THE USER

Ask only when the missing information blocks a correct implementation.

Good reasons:

- Two approved designs conflict.
- An asset is missing and substitution would change the intended experience.
- A major interaction is unspecified.
- A destructive architectural decision is required.
- A required external service is unavailable.
- A product decision cannot reasonably be inferred.

Do not ask for permission for every small implementation detail.

---

# 88. WHEN NOT TO ASK

Do not ask:

> Should I create a component?

if architecture already determines it.

Do not ask:

> What filename should I use?

if naming conventions already exist.

Do not ask:

> Should I use TypeScript?

if the architecture says TypeScript.

The AI should make normal engineering decisions autonomously.

---

# 89. NEVER DELETE WITHOUT VERIFICATION

Before deleting:

- files
- routes
- components
- assets
- dependencies
- data

verify they are unused or explicitly approved for removal.

---

# 90. GIT SAFETY

Do not perform destructive Git operations unless explicitly instructed.

Never casually use:

```text
git reset --hard
git clean -fd
force push
```

Do not destroy user work to make a build pass.

---

# 91. NO SECRET ASSUMPTIONS

If the AI makes an assumption that affects architecture, document it.

Example:

```text
Assumption:
Temple models are stored as GLB files under /public/models/temples.
```

Do not silently build an entire subsystem around an unstated assumption.

---

# 92. CODE QUALITY RULE

Code should be:

- readable
- typed
- modular
- predictable
- composable
- documented when complexity warrants it

Do not over-comment obvious code.

Comments should explain:

```text
WHY
```

not merely:

```text
WHAT
```

---

# 93. MAGIC NUMBER RULE

Avoid unexplained values.

Bad:

```ts
duration: 473
```

Better:

```ts
duration: CINEMATIC_TRANSITION_DURATION
```

or a clearly named configuration value.

---

# 94. CONFIGURATION RULE

Repeated experience-level settings should be centralized.

Examples:

```text
animation duration
transition duration
breakpoints
3D quality
parallax intensity
```

Do not scatter them randomly across the application.

---

# 95. FEATURE CONFIGURATION

Where possible, make visual variations data/config driven.

Example:

```ts
{
  intensity: 0.4,
  zoom: 1.04,
  parallax: 0.2
}
```

instead of creating a new component for every variation.

---

# 96. NO OVER-ENGINEERING

Do not build abstractions before they are needed.

Bad:

```text
GenericExperienceOrchestratorFactory
```

for one animation.

Good:

```text
Reusable abstraction
```

only after a real repeated pattern exists.

---

# 97. NO UNDER-ENGINEERING

Do not put complex systems into a single file just to move quickly.

If a system has:

- rendering
- data
- animation
- interaction
- cleanup

separate those responsibilities.

---

# 98. DEBUGGING OUTPUT

When reporting an implementation result, be accurate.

Preferred:

```text
Implemented:
- Ghat route
- data-driven content
- living-image animation
- mobile fallback

Verified:
- TypeScript
- production build
- direct route
```

Avoid:

```text
Everything is perfect.
```

without verification.

---

# 99. FINAL RESPONSE RULE FOR AI CODING AGENTS

When a task is completed, report:

```text
1. What changed
2. Files created/modified
3. Important implementation decisions
4. Verification performed
5. Known limitations
```

Keep it concise.

Do not dump unnecessary internal reasoning.

---

# 100. CONSTRAINTS SUMMARY

The AI is constrained by the following:

```text
┌─────────────────────────────────────────────┐
│              AI CONSTRAINTS                 │
├─────────────────────────────────────────────┤
│ Do not redesign without approval            │
│ Do not replace approved assets              │
│ Do not invent cultural facts                │
│ Do not fabricate functionality              │
│ Do not add unnecessary dependencies         │
│ Do not replace the approved stack           │
│ Do not break browser navigation             │
│ Do not ignore mobile                        │
│ Do not ignore accessibility                 │
│ Do not ignore reduced motion                │
│ Do not load all heavy assets initially      │
│ Do not leave animations running             │
│ Do not hide errors                           │
│ Do not delete blindly                        │
│ Do not expose secrets                        │
│ Do not over-engineer                         │
│ Do not under-engineer complex systems       │
│ Do not silently change product decisions    │
└─────────────────────────────────────────────┘
```

---

# 101. THE GOLDEN RULES

If the AI remembers nothing else, it must remember these:

### Rule 1

> **Never change an approved product decision without permission.**

### Rule 2

> **Understand the existing system before modifying it.**

### Rule 3

> **Reuse before creating.**

### Rule 4

> **Preserve user assets.**

### Rule 5

> **Do not invent facts or functionality.**

### Rule 6

> **Every animation must have a purpose.**

### Rule 7

> **Performance is a feature.**

### Rule 8

> **Mobile and accessibility are first-class requirements.**

### Rule 9

> **Every failure must have a graceful fallback.**

### Rule 10

> **Never claim something works until it has been verified.**

---

# 102. FINAL AI OPERATING MODEL

Every implementation task should follow this loop:

```text
┌──────────────────────┐
│  RECEIVE TASK        │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│  READ SPECIFICATION  │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│  INSPECT CODEBASE    │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│  CHECK EXISTING      │
│  COMPONENTS / ASSETS │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│  PLAN MINIMAL CHANGE │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│      IMPLEMENT       │
└──────────┬───────────┘
           ↓
┌──────────────────────┐
│       VERIFY         │
│ Build / Type / UX    │
└──────────┬───────────┘
           ↓
      ┌────┴────┐
      │         │
    PASS       FAIL
      │         │
      │         ▼
      │   Diagnose Root
      │      Cause
      │         │
      │         ▼
      │       Fix
      │         │
      │         └───────┐
      │                 │
      └────────────┬────┘
                   ↓
          ┌──────────────────┐
          │ REPORT ACCURATELY│
          └──────────────────┘
```

---

# 103. FINAL PRINCIPLE

The AI is not the creative owner of KASHI.

The AI is the implementation partner.

Its responsibility is to transform the approved vision into a technically excellent experience while protecting:

```text
The design
The story
The assets
The architecture
The performance
The accessibility
The user's intent
```

The final website should feel:

> **Like one continuous cinematic journey through Kashi — not like a collection of AI-generated web pages.**

That is the standard.

