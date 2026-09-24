# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router, TypeScript, Tailwind CSS with design tokens, Framer Motion/GSAP, Three.js/R3F)

## Users

Curious travelers, cultural explorers, pilgrims, photography and design enthusiasts seeking an authentic, cinematic, and emotionally resonant understanding of Kashi (Varanasi).

## Product Purpose

An immersive digital cultural experience and interactive exhibition that interprets the spirit, mythology, architecture, daily rituals, ghats, and streets of Kashi beyond conventional flat tourism directories.

## Positioning

An interactive digital exhibition + cinematic documentary + editorial travel journey combining rich photography, editorial typography, spatial 3D elements, and atmospheric storytelling rather than a generic booking portal.

## Operating Context

Desktop-first cinematic web experience with fluid responsive mobile adaptations; users explore chapters (Ghats, Temples, Narrow Lanes/Galli, Rituals & Aarti, Food & Flavors, Retro Travel Posters) through scroll-driven interactions, audio-visual atmosphere, and 3D views.

## Capabilities and Constraints

- Route-based chapters with progressive asset loading
- Shared experience layer with token-driven design system
- Two primary typefaces: Caesura Bold (Display) + Peristiva (Editorial/Body)
- Strict palette: Muted, deep, cinematic tones (Ganga dawn/dusk, terracotta, brass/marigold accent, stone gray, sacred dark)
- Accessible fallbacks for reduced-motion and non-WebGL environments

## Brand Commitments

- Name: KASHI — A City Beyond Time
- Voice: Poetic, reverent, editorial, authentic, grounded, timeless
- Protected identities: Authentic representation of Varanasi's ghats, spiritual traditions, and living heritage

## Evidence on Hand

- Comprehensive specifications in [docs/prd.md](file:///c:/Users/Asus/KashiYatra/docs/prd.md), [docs/design.md](file:///c:/Users/Asus/KashiYatra/docs/design.md), [docs/architecture.md](file:///c:/Users/Asus/KashiYatra/docs/architecture.md), [docs/rules.md](file:///c:/Users/Asus/KashiYatra/docs/rules.md)
- Master product roadmap and task checklist in [docs/task.md](file:///c:/Users/Asus/KashiYatra/docs/task.md)
- Established architectural rules and non-negotiable design principles

## Product Principles

1. **Experience Over Information:** Kashi is not merely browsed; it is entered and felt.
2. **One Intentional Mind:** Every chapter, poster, and interaction adheres to unified editorial and visual tokens.
3. **Restraint & Atmosphere:** Cinematic pacing, intentional whitespace, and subtle motion over frantic UI trends.
4. **Authenticity & Reverence:** Faithful cultural storytelling that honors the ancient and living reality of Varanasi.

## Accessibility & Inclusion

- Semantic HTML and WCAG AA contrast compliance
- Graceful degradation for 3D/canvas features and high-motion effects
- First-class support for `prefers-reduced-motion`
