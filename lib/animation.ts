/**
 * MOTION SYSTEM — Task 1.5
 *
 * `styles/tokens.css` owns every motion value. CSS can read those tokens
 * directly; JavaScript (GSAP, Three.js, pointer-driven motion) cannot read a
 * `cubic-bezier()` back out of a custom property reliably across browsers, so
 * the values are mirrored here once (design.md §41 explicitly allows this).
 *
 * IMPORTANT: if a duration or curve changes in `styles/tokens.css`, change it
 * here too. These are the only two places motion is allowed to be defined.
 */

/** Durations in milliseconds — mirror of the `--duration-*` tokens. */
export const DURATION = {
  fast: 180,
  normal: 400,
  slow: 800,
  cinematic: 1200,
} as const;

/** Durations in seconds — the unit GSAP and WAAPI expect. */
export const DURATION_SECONDS = {
  fast: DURATION.fast / 1000,
  normal: DURATION.normal / 1000,
  slow: DURATION.slow / 1000,
  cinematic: DURATION.cinematic / 1000,
} as const;

/** CSS timing functions — mirror of the `--ease-*` tokens. */
export const EASE = {
  standard: "cubic-bezier(0.2, 0.65, 0.3, 1)",
  smooth: "cubic-bezier(0.16, 1, 0.3, 1)",
} as const;

/**
 * GSAP equivalents of the CSS curves above.
 *
 * GSAP cannot consume a `cubic-bezier()` string as an ease, so each token is
 * mapped to the closest named GSAP curve. `power2.out` matches
 * `--ease-standard`; `expo.out` matches the stronger `--ease-smooth`.
 */
export const GSAP_EASE = {
  standard: "power2.out",
  smooth: "expo.out",
  /** For scrubbed, scroll-linked timelines — no easing, position is the input. */
  scrub: "none",
} as const;

export type MotionIntensity = 0 | 0.5 | 1;

/**
 * Scale a motion distance by the global intensity token (design.md §78).
 *
 * `0` — reduced motion: distance collapses.
 * `0.5` — subtle variant for constrained devices.
 * `1` — the standard cinematic value.
 */
export function scaleMotion(value: number, intensity: MotionIntensity = 1): number {
  return value * intensity;
}

/** Stagger between siblings — 60ms, matching `.reveal-step-*`. */
export const REVEAL_STAGGER_SECONDS = 0.06;

/**
 * Smooth-scroll configuration (architecture.md §7).
 *
 * Lenis is a scroll controller, not an animation system, so it has no CSS-token
 * equivalent — this object is the single place its values are tuned.
 *
 * `syncTouch` is deliberately false: touch devices keep their native momentum
 * and Lenis only tracks the position. That is what architecture.md §7 asks for
 * when it says native scrolling may serve mobile better.
 */
export const SMOOTH_SCROLL = {
  lerp: 0.1,
  wheelMultiplier: 1,
  touchMultiplier: 1.5,
  smoothWheel: true,
  syncTouch: false,
  autoRaf: true,
  /* Lenis handles in-page anchor clicks itself, so navigation stays a real
     anchor (`<a href="#journey">`) instead of a click handler. */
  anchors: true,
} as const;

/** Lenis' exponential ease-out — no bounce, settles rather than stops. */
export const smoothScrollEase = (t: number): number =>
  Math.min(1, 1.001 - Math.pow(2, -10 * t));

/**
 * Shared entrance presets, mirroring `styles/animations.css`.
 *
 * Components that cannot use the CSS classes (scroll-linked timelines, for
 * example) use these instead of hand-writing new values, so a change to the
 * reveal language happens in one place.
 */
export const REVEAL = {
  rise: {
    from: { opacity: 0, y: 24 },
    to: { opacity: 1, y: 0 },
    duration: DURATION_SECONDS.slow,
    ease: GSAP_EASE.smooth,
  },
  fade: {
    from: { opacity: 0, scale: 0.96 },
    to: { opacity: 1, scale: 1 },
    duration: DURATION_SECONDS.slow,
    ease: GSAP_EASE.smooth,
  },
  /** Text lines rising into place — chapter titles, editorial statements. */
  textLine: {
    from: { opacity: 0, y: "100%" },
    to: { opacity: 1, y: "0%" },
    duration: DURATION_SECONDS.slow,
    ease: GSAP_EASE.smooth,
    stagger: REVEAL_STAGGER_SECONDS,
  },
} as const;
