import { ROUTES } from "@/lib/routes";
import type { Chapter } from "@/types/navigation";

/**
 * The journey, in the approved order (memory.md §8).
 *
 * "The Infinite Door" is not listed: it is the opening the visitor passes
 * through, not a chapter they choose.
 *
 * PRODUCT CHANGE — 2026-09-24 (recorded in docs/memory.md §37):
 * Steps to Eternity, Story of Kashi and The Spirit of Kashi were moved from
 * dedicated routes onto the landing page itself. They are now sections, and
 * their `href` is an in-page anchor. Where Gods Reside, Kashi Unfolded and
 * Kashi Rasoi remain their own routes.
 *
 * Section anchors must match the ids declared in `features/landing/constants.ts`.
 *
 * Titles and ordering are locked (rules.md §4). The supporting lines are the
 * only editable part, and they must stay atmospheric — no historical or
 * cultural claims, and no tagline may open with "Where…" (rules.md §15, §16).
 */
export const chapters: readonly Chapter[] = [
  {
    id: "ghats",
    index: 1,
    title: "Steps to Eternity",
    summary:
      "Eight ways of meeting the river, and the life arranged on every one of them.",
    href: "#steps-to-eternity",
    kind: "section",
  },
  {
    id: "story",
    index: 2,
    title: "Story of Kashi",
    summary:
      "Four chapters on what is told and what is recorded, kept apart rather than blended.",
    href: "#story-of-kashi",
    kind: "section",
  },
  {
    id: "temples",
    index: 3,
    title: "Where Gods Reside",
    summary:
      "The shrines at the centre of the lanes, and the traffic of daily life around them.",
    href: ROUTES.temples,
    kind: "route",
  },
  {
    id: "unfolded",
    index: 4,
    title: "Kashi Unfolded",
    summary:
      "Nine printed impressions — the city as a set of posters rather than a list of sights.",
    href: ROUTES.unfolded,
    kind: "route",
  },
  {
    id: "rasoi",
    index: 5,
    title: "Kashi Rasoi",
    summary:
      "What the lanes taste like, and why the food here belongs to the place it is made in.",
    href: ROUTES.rasoi,
    kind: "route",
  },
  {
    id: "spirit",
    index: 6,
    title: "The Spirit of Kashi",
    summary: "What is left when the visiting is over, and the river is still there.",
    href: "#spirit-of-kashi",
    kind: "section",
  },
];
