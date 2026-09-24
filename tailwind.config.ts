import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./features/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          ink: "#10100E",
          charcoal: "#191816",
          ivory: "#E8E1D3",
          sand: "#CFC4B1",
          brass: "#B59A63",
          gangaMist: "#AEB8B3",
          terracotta: "#985F49",
        },
        surface: {
          DEFAULT: "var(--color-surface, #211F1B)",
          elevated: "var(--color-surface-elevated, #28251F)",
          dark: "var(--palette-ink, #10100E)",
          light: "var(--color-light-surface, #F0EADF)",
        },
        brand: {
          accent: "var(--color-accent, #B59A63)",
          terracotta: "var(--color-accent-secondary, #985F49)",
          mist: "var(--palette-ganga-mist, #AEB8B3)",
        },
        kashiText: {
          primary: "var(--color-text-primary, #E8E1D3)",
          secondary: "var(--color-text-secondary, #CFC4B1)",
          muted: "var(--color-text-muted, #8E887D)",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Cinzel", "Playfair Display", "serif"],
        editorial: ["var(--font-editorial)", "Newsreader", "Lora", "serif"],
        heading: ["var(--font-heading)", "var(--font-display)", "serif"],
        body: ["var(--font-body)", "var(--font-editorial)", "serif"],
        ui: ["var(--font-ui)", "var(--font-editorial)", "serif"],
      },
      spacing: {
        gutter: "var(--space-gutter, 2rem)",
      },
      screens: {
        mobile: "640px",
        tablet: "768px",
        desktop: "1024px",
        wide: "1440px",
      },
    },
  },
  plugins: [],
};

export default config;
