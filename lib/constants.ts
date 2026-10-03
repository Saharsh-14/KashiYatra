/**
 * Application-wide constants.
 *
 * Mirrored from `styles/tokens.css` where a value is needed in JavaScript —
 * CSS custom properties are not readable from a media query string.
 */

export const SITE_METADATA = {
  name: "KASHI",
  title: "KASHI — A City Beyond Time",
  description:
    "An immersive digital experience of Kashi — the ghats, the Ganga, the temples, the streets and the stories of Varanasi.",
  locale: "en_US",
} as const;

/**
 * Breakpoints (design.md §70).
 * Keep in sync with the `screens` block in `tailwind.config.ts` and with the
 * `--breakpoint-*` tokens in `styles/tokens.css`.
 */
export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

/** Minimum practical touch target (design.md §74). */
export const TOUCH_TARGET_MIN = 44;

/**
 * Reveal stagger step, in milliseconds.
 * Matches the `.reveal-step-*` utilities in `styles/animations.css`.
 */
export const REVEAL_STAGGER_MS = 60;
