"use client";

import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { IndexLabel } from "@/components/ui";
import { Text } from "@/components/typography";
import type { Chapter } from "@/types/navigation";
import styles from "../landing.module.css";
import { useLanding } from "../context/LandingProvider";

/**
 * One chapter in the journey list (task.md TASK 4.6).
 *
 * The whole row is the target — a large, forgiving hit area rather than a small
 * word to aim at. Hover, focus and pending states are all defined in
 * `landing.module.css`, gated so that nothing moves without a fine pointer and
 * nothing moves at all under reduced motion.
 *
 * `beginNavigation` records the chosen destination so the transition system
 * (TASK 13.1) can take over the moment it exists. Today the link navigates
 * normally and the pending state is brief — but it is real state, surfaced to
 * assistive technology through `aria-busy`, not a decoration.
 */
export function ChapterEntry({ chapter }: { chapter: Chapter }) {
  const { beginNavigation, pendingHref } = useLanding();
  const isPending = pendingHref === chapter.href;

  /* The arrow states where the chapter is, which is the one thing the visitor
     cannot tell from the title alone: down means it is a band on this page,
     right means it is its own experience. */
  const ArrowIcon = chapter.kind === "section" ? ArrowDown : ArrowRight;

  return (
    <li>
      <Link
        href={chapter.href}
        className={styles.entry}
        data-pending={isPending || undefined}
        aria-busy={isPending || undefined}
        onClick={() => beginNavigation(chapter.href)}
      >
        <IndexLabel index={chapter.index} />

        <span className="flex flex-col gap-2">
          <span className={`${styles.entryTitle} type-subheading block`}>
            {chapter.title}
          </span>
          <Text as="span" size="ui" tone="muted" measure="wide" className="block">
            {chapter.summary}
          </Text>
        </span>

        <ArrowIcon
          aria-hidden="true"
          strokeWidth={1}
          size={20}
          className={styles.entryArrow}
        />

        <span className={styles.entryRule} aria-hidden="true" />
      </Link>
    </li>
  );
}
