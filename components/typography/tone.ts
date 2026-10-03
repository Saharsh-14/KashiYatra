/**
 * Tone is a separate axis from size, so the hierarchy stays stable while a
 * component can still sit quietly on the page.
 *
 * The class names map 1:1 to `styles/typography.css` — no colour value is
 * written in a component.
 */
export type TypographyTone =
  | "primary"
  | "secondary"
  | "muted"
  | "accent"
  | "light-primary"
  | "light-secondary"
  | "light-accent";

const TONE_CLASS: Record<TypographyTone, string> = {
  primary: "type-tone-primary",
  secondary: "type-tone-secondary",
  muted: "type-tone-muted",
  accent: "type-tone-accent",
  "light-primary": "type-tone-light-primary",
  "light-secondary": "type-tone-light-secondary",
  "light-accent": "type-tone-light-accent",
};

export function toneClass(tone: TypographyTone): string {
  return TONE_CLASS[tone];
}
