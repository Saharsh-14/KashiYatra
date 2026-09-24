/**
 * Master project constants for KASHI — A City Beyond Time
 */

export const SITE_METADATA = {
  title: "KASHI — A City Beyond Time",
  description:
    "An immersive digital cultural experience and interactive exhibition exploring the spirit, mythology, architecture, ghats, and living pulse of Varanasi.",
  url: "https://kashiyatra.in",
  author: "Kashi Yatra Heritage",
} as const;

export const CHAPTERS = [
  {
    id: "landing",
    number: "00",
    title: "The Threshold",
    subtitle: "Entry into Eternity",
    route: "/",
  },
  {
    id: "ghats",
    number: "01",
    title: "Steps to Eternity",
    subtitle: "The Ghats of Kashi",
    route: "/ghats",
  },
  {
    id: "story",
    number: "02",
    title: "The Eternal City",
    subtitle: "History, Myth & Ganga",
    route: "/story",
  },
  {
    id: "temples",
    number: "03",
    title: "Where Gods Reside",
    subtitle: "Sacred Shrines & Living Stone",
    route: "/temples",
  },
  {
    id: "unfolded",
    number: "04",
    title: "Kashi Unfolded",
    subtitle: "Retro Editorial Posters",
    route: "/unfolded",
  },
  {
    id: "rasoi",
    number: "05",
    title: "Kashi Rasoi",
    subtitle: "Sacred Flavors of the Alleys",
    route: "/rasoi",
  },
  {
    id: "spirit",
    number: "06",
    title: "The Living Spirit",
    subtitle: "Aarti, Silence & Reflection",
    route: "/spirit",
  },
] as const;

export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  wide: 1440,
} as const;
