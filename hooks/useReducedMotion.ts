"use client";

import { useMediaQuery } from "./useMediaQuery";

/**
 * The user's reduced-motion preference (design.md §77, rules.md §39).
 *
 * CSS covers declarative transitions through the token overrides in
 * `styles/tokens.css`. This hook exists for the motion CSS cannot reach:
 * GSAP timelines, scroll choreography and Three.js camera work, all of which
 * must check it explicitly rather than assume.
 *
 * Reduced motion means fewer and gentler animations — never a missing
 * experience. Content, navigation and hierarchy stay identical.
 */
export function useReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)");
}
