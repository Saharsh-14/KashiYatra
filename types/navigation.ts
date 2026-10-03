/**
 * Navigation contracts (architecture.md §35).
 *
 * A chapter is a destination in the journey — the landing's index is rendered
 * entirely from `data/navigation.ts`, so adding or reordering a chapter never
 * touches a component.
 */

/**
 * Where a chapter lives.
 *
 * `section` — a band on the landing page itself. Now the case for Steps to
 *             Eternity, Story of Kashi and The Spirit of Kashi.
 * `route`   — its own dedicated experience, still to be built.
 *
 * The distinction is data, not a component branch, because it is a product
 * decision about each chapter rather than a rendering detail.
 */
export type ChapterKind = "section" | "route";

export interface Chapter {
  /** Stable id. Used for keys and analytics, never for routing. */
  id: string;
  /** 1-based editorial index, rendered as `01`. */
  index: number;
  title: string;
  /** One restrained line. Atmospheric, never a factual claim. */
  summary: string;
  /** `#section-id` for a section, `/route` for a route. */
  href: string;
  kind: ChapterKind;
}
