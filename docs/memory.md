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
Phase 2 — Landing Page Foundation

Current Task:
TASK 2.1 — Create Landing Route

Last Completed Task:
PHASE 1 — Global Design System (TASK 1.1 to 1.5 & Data Layer)

Next Task:
TASK 2.1 — Create Landing Route (Page shell & layout structure)
```

---

# 6. COMPLETED FEATURES

Maintain a checklist.

```text
[✓] Project foundation (Phase 0)
[✓] Global design tokens (Phase 1)
[✓] Typography (Phase 1)
[✓] Global components (Phase 1)
[✓] Data layer & contracts (Ghats, Temples, Posters, Food, Story, Navigation)

[ ] Infinite Door
[ ] Ganga landing hero
[ ] Landing navigation
[ ] Landing transitions
[ ] Landing responsive implementation

[ ] Steps to Eternity
[ ] Story of Kashi
[ ] Where Gods Reside
[ ] Kashi Unfolded
[ ] Kashi Rasoi
[ ] The Spirit of Kashi

[ ] Global page transitions
[ ] Global navigation
[ ] Accessibility
[ ] Performance optimization
[ ] Error handling
[ ] Production QA
```

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

The dedicated ghat experience.

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

Dedicated temple experience.

Layout alternates:

```text
Temple 1:
Model → Right
Information → Left

Temple 2:
Information → Right
Model → Left
```

---

# 18. TEMPLE 3D INTERACTION

Desktop:

```text
Left mouse drag
→ horizontal rotation
```

Scroll:

```text
vertical scroll
→ move between temples
```

Mobile:

```text
touch drag
→ rotate
```

The implementation must preserve normal scrolling behavior.

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
| Infinite Door | Pending / In Progress / Complete | Update |
| Ganga Hero | Pending / In Progress / Complete | Update |
| Assi Ghat | Approved | Do not replace |
| Dashashwamedh Ghat | Approved | Do not replace |
| Manikarnika Ghat | Approved | Do not replace |
| Kedar Ghat | Approved | Do not replace |
| Harishchandra Ghat | Approved | Do not replace |
| Guleria Ghat | Approved | Do not replace |
| Chet Singh Ghat | Approved | Do not replace |
| Namo Ghat | Approved | Do not replace |
| Temple Models | Pending | Update |
| Poster Assets | Approved / Pending | Update |
| Food Models | Pending | Update |
| Galli Transition Video | Pending | Update |

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

```text
No known bugs recorded yet.
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
No performance discoveries recorded yet.
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
[YYYY-MM-DD]

AI / Developer:
[Name]

Completed:
- [Task]
- [Task]

Current State:
[Short description]

Current Task:
[TASK X.X]

Next Task:
[TASK X.X]

Important Changes:
- [Change]

Known Bugs:
- [Bug]

Important Notes:
- [Note]
```

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
No unresolved project-level questions recorded yet.
```

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

**Never assume future AI agents remember the conversation.**

If something is important enough to affect future implementation, put it here.
