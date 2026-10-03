import type { StoryChapter } from "@/types/content";

/**
 * Story of Kashi — four chapters.
 *
 * prd.md CF-04 requires the chapter set to stay short and cinematic, and
 * requires inherited tradition to be distinguishable from documented history.
 * Both are structural here: each chapter declares whether it rests on
 * `tradition` or on `record`, and the UI states that rather than blending the
 * two into one authoritative voice.
 *
 * rules.md §16 is the constraint that matters most in this file: do not
 * fabricate historical or cultural claims. The prose below therefore describes
 * what is told and what is documented, and stops short of asserting either.
 *
 * Chapter four is the emotional close and carries the approved Shiva statement
 * (memory.md §16, TASK 8.5).
 */
export const storyChapters: readonly StoryChapter[] = [
  {
    id: "origins",
    index: 1,
    title: "Origins",
    narrative:
      "Before it was written about, it was already old. The earliest records are not the beginning of the city — they are the moment it began to be described.",
    image: "/images/story/origin.jpg",
    imageAlt: "Old riverside architecture at Kashi, seen across the water.",
    basis: "tradition",
  },
  {
    id: "shiva-and-the-river",
    index: 2,
    title: "Shiva and the River",
    narrative:
      "Here the two are not separate stories. The river comes down and the city gathers where it does, and the telling of how that happened belongs to faith rather than to chronology.",
    image: "/images/story/ganga.jpg",
    imageAlt: "The Ganga flowing past the ghats of Kashi.",
    basis: "tradition",
  },
  {
    id: "sarnath",
    index: 3,
    title: "Sarnath",
    narrative:
      "A short distance north, the first sermon is recorded. It is one of the few parts of this landscape that history can date rather than inherit.",
    image: "/images/story/buddha.jpg",
    imageAlt: "The stupa and monastic remains at Sarnath.",
    basis: "record",
  },
  {
    id: "the-city-now",
    index: 4,
    title: "The City Now",
    narrative:
      "Kashi is not preserved. It is lived in — continuously, by people who treat its oldest structures as ordinary parts of a working day.",
    image: "/images/story/contemporary.jpg",
    imageAlt: "Present-day life along the ghats and lanes of Kashi.",
    basis: "record",
  },
];

/**
 * The approved Hindi statement (memory.md §16, TASK 8.5).
 *
 * LOCKED. It is a major editorial moment at the close of the story and must not
 * be reworded, translated away or replaced.
 */
export const shivaStatement = [
  "जहाँ कण-कण में शिव का वास है,",
  "और हर घाट पर महादेव का अहसास है,",
  "वो हमारी नगरी काशी है।",
] as const;
