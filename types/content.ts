/**
 * Content contracts (architecture.md §35).
 *
 * Types describe domain objects, not presentation. Anything a component needs
 * to render must exist here — components never reach into a data object for a
 * shape that was not declared.
 */

/** A ghat, as presented in "Steps to Eternity". */
export interface Ghat {
  id: string;
  /** Stable URL segment. Never change one casually (rules.md §26). */
  slug: string;
  /** 1-based editorial index, rendered as `01`. */
  index: number;
  name: string;
  devanagariName?: string;
  /** One restrained line. Atmospheric — never a factual claim. */
  tagline: string;
  /** Short, meaningful description communicating essence and significance. */
  description?: string;
  significance?: string;
  timeOfDay?: string;
  accentColor?: string;
  image: string;
  /** Meaningful alternative text. Never "photo" or "image" (rules.md §57). */
  imageAlt: string;
}


/** A chapter of "Story of Kashi". */
export interface StoryChapter {
  id: string;
  index: number;
  title: string;
  /** Short narrative. Kept concise — this is not an article (prd.md CF-04). */
  narrative: string;
  image: string;
  imageAlt: string;
  /**
   * Whether the chapter describes inherited tradition or documented record.
   * prd.md CF-04 requires the two to be distinguishable rather than blended
   * into a single voice, so the distinction is a field rather than a nuance
   * buried in prose.
   */
  basis: "tradition" | "record";
}

/** An editorial travel poster from "Kashi Unfolded". */
export interface Poster {
  id: string;
  slug: string;
  index: number;
  title: string;
  tagline: string;
  location: string;
  image: string;
  imageAlt: string;
  accentColor?: string;
}

/** A photograph of a temple in "Where Gods Reside". */
export interface TemplePhoto {
  id: string;
  url: string;
  alt: string;
  caption?: string;
}

/** A temple, as presented in "Where Gods Reside". */
export interface Temple {
  id: string;
  slug: string;
  /** 1-based editorial index (1 to 8). */
  index: number;
  name: string;
  devanagariName?: string;
  /** Short descriptor, e.g. "The heart of Kashi." */
  descriptor: string;
  /** 2–4 concise sentences explaining significance. */
  description: string;
  /** Curated collection of photographs for this temple. */
  photos: TemplePhoto[];
}
