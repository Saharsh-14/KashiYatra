/**
 * Landing experience constants.
 *
 * Timings live here and are handed to CSS through custom properties, so the
 * JavaScript and the stylesheet cannot drift apart (design.md §83 permits an
 * inline style when the value originates from a central configuration).
 */

/**
 * Preloader.
 *
 * `failsafeMs` is a hard ceiling on how long the preloader may hold the page.
 * rules.md §55: every asynchronous operation must have a failure path, and an
 * asset that never resolves must not become an infinite loading screen. When
 * the ceiling is reached the landing is shown regardless of what loaded.
 */
export const PRELOADER = {
  /** Shortest time the preloader is shown, so it reads as intentional rather
   *  than flashing. This is pacing — the progress it displays is real. */
  minDisplayMs: 900,
  /** Hard ceiling. Never wait longer than this, whatever the network does. */
  failsafeMs: 16000,
  /** Time for the panel to leave once loading is done. */
  exitMs: 1200,
} as const;

/**
 * Assets worth waiting for.
 *
 * Deliberately tiny: only what the first viewport actually needs. Everything
 * else lazy-loads as the visitor scrolls (architecture.md §29, §53). Preloading
 * all eight ghat photographs here would turn a preloader into a download.
 */
export const PRELOAD_ASSETS = ["/images/hero/ganga-hero.jpg"] as const;

/**
 * Landing section ids, in document order.
 *
 * The ids are load-bearing: `data/navigation.ts` links to them and
 * `useActiveSection` observes them. Renaming one requires updating both.
 */
export const LANDING_SECTIONS = [
  "hero",
  "journey",
  "steps-to-eternity",
  "story-of-kashi",
  "spirit-of-kashi",
  "closing",
] as const;

export type LandingSectionId = (typeof LANDING_SECTIONS)[number];
