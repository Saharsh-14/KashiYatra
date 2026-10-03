import type { Config } from "tailwindcss";

/**
 * Tailwind is the IMPLEMENTATION layer only.
 * `styles/tokens.css` remains the single source of truth (design.md §84).
 *
 * Every value below resolves to a CSS custom property so that a token change
 * propagates through the whole application without touching components.
 *
 * Note: Tailwind's default 4px-based spacing scale is numerically identical to
 * the `--space-*` scale in design.md §25 (space-4 = 1rem = Tailwind `4`), so
 * spacing utilities are already token-equivalent and are not redefined here.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Primitives (design.md §6) */
        palette: {
          ink: "var(--palette-ink)",
          charcoal: "var(--palette-charcoal)",
          ivory: "var(--palette-ivory)",
          sand: "var(--palette-sand)",
          brass: "var(--palette-brass)",
          "ganga-mist": "var(--palette-ganga-mist)",
          terracotta: "var(--palette-terracotta)",
        },

        /* Semantic surfaces (design.md §7) */
        background: {
          primary: "var(--color-background-primary)",
          secondary: "var(--color-background-secondary)",
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          elevated: "var(--color-surface-elevated)",
        },

        /* Semantic text (design.md §7) */
        content: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
        },

        /* Accent — restrained, never dominant (design.md §9) */
        accent: {
          DEFAULT: "var(--color-accent)",
          secondary: "var(--color-accent-secondary)",
        },

        /* Editorial borders (design.md §32) */
        edge: {
          DEFAULT: "var(--color-border)",
          strong: "var(--color-border-strong)",
        },

        /* Overlays (design.md §7, §44, §56) */
        overlay: {
          DEFAULT: "var(--color-overlay)",
          light: "var(--image-overlay-light)",
          medium: "var(--image-overlay-medium)",
          heavy: "var(--image-overlay-heavy)",
          scrim: "var(--overlay-background)",
        },

        /* Light editorial surfaces (design.md §8) */
        light: {
          background: "var(--color-light-background)",
          surface: "var(--color-light-surface)",
          primary: "var(--color-light-text-primary)",
          secondary: "var(--color-light-text-secondary)",
          accent: "var(--color-light-accent)",
          border: "var(--color-light-border)",
        },

        /* Feedback (design.md §7) */
        error: "var(--color-error)",
        success: "var(--color-success)",
      },

      fontFamily: {
        display: ["var(--font-display)"],
        editorial: ["var(--font-editorial)"],
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        ui: ["var(--font-ui)"],
      },

      /* The complete content hierarchy: heading / subheading / body / ui (design.md §14) */
      fontSize: {
        heading: [
          "var(--font-size-heading)",
          { lineHeight: "var(--leading-heading)", letterSpacing: "var(--tracking-heading)" },
        ],
        subheading: [
          "var(--font-size-subheading)",
          { lineHeight: "var(--leading-subheading)", letterSpacing: "var(--tracking-subheading)" },
        ],
        body: [
          "var(--font-size-body)",
          { lineHeight: "var(--leading-body)", letterSpacing: "var(--tracking-body)" },
        ],
        ui: [
          "var(--font-size-ui)",
          { lineHeight: "var(--leading-ui)", letterSpacing: "var(--tracking-ui)" },
        ],
      },

      fontWeight: {
        display: "var(--font-weight-display)",
        editorial: "var(--font-weight-editorial)",
      },

      maxWidth: {
        container: "var(--container-max)",
        wide: "var(--container-wide)",
        measure: "var(--measure-body)",
        "measure-wide": "var(--measure-wide)",
      },

      spacing: {
        gutter: "var(--page-gutter)",
        "gutter-mobile": "var(--page-gutter-mobile)",
        section: "var(--section-padding-y)",
        "section-compact": "var(--section-padding-y-compact)",
        grid: "var(--grid-gap)",
        btn: "var(--button-padding-x)",
        poster: "var(--poster-grid-gap)",
      },

      height: {
        "button-sm": "var(--button-height-sm)",
        "button-md": "var(--button-height-md)",
        "button-lg": "var(--button-height-lg)",
      },

      minHeight: {
        "button-sm": "var(--button-height-sm)",
        "button-md": "var(--button-height-md)",
        "button-lg": "var(--button-height-lg)",
      },

      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        pill: "var(--radius-pill)",
      },

      boxShadow: {
        soft: "var(--shadow-soft)",
        deep: "var(--shadow-deep)",
        focus: "var(--focus-ring)",
      },

      opacity: {
        subtle: "var(--opacity-subtle)",
        muted: "var(--opacity-muted)",
        medium: "var(--opacity-medium)",
        strong: "var(--opacity-strong)",
      },

      blur: {
        sm: "var(--blur-sm)",
        md: "var(--blur-md)",
        lg: "var(--blur-lg)",
      },

      /* design.md §70 — a small, predictable breakpoint system. */
      screens: {
        mobile: "640px",
        tablet: "768px",
        desktop: "1024px",
        wide: "1440px",
      },

      /* design.md §40–41 */
      transitionDuration: {
        fast: "var(--duration-fast)",
        normal: "var(--duration-normal)",
        slow: "var(--duration-slow)",
        cinematic: "var(--duration-cinematic)",
      },

      transitionTimingFunction: {
        standard: "var(--ease-standard)",
        smooth: "var(--ease-smooth)",
      },

      /* design.md §69 — centralized layering. */
      zIndex: {
        base: "var(--z-base)",
        content: "var(--z-content)",
        overlay: "var(--z-overlay)",
        navigation: "var(--z-navigation)",
        modal: "var(--z-modal)",
        transition: "var(--z-transition)",
        loader: "var(--z-loader)",
      },
    },
  },
  plugins: [],
};

export default config;
