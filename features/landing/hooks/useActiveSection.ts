"use client";

import { useEffect, useState } from "react";

interface ActiveSectionOptions {
  /**
   * The band across the viewport that counts as "here". The default is a thin
   * strip around the middle, so a section becomes active when it genuinely owns
   * the screen rather than the moment its first pixel appears.
   */
  rootMargin?: string;
}

/**
 * Which section currently owns the viewport.
 *
 * Uses IntersectionObserver rather than a scroll listener: the callback fires
 * only on crossings, so scrolling never runs our code per frame — the rule in
 * architecture.md §27 that scroll work must not be duplicated across components.
 *
 * `ids` must be a stable reference (a module-level constant). An inline array
 * would re-create the observer on every render.
 */
export function useActiveSection(
  ids: readonly string[],
  { rootMargin = "-45% 0px -45% 0px" }: ActiveSectionOptions = {},
): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null);

    if (elements.length === 0) return;

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.add(entry.target.id);
          } else {
            visible.delete(entry.target.id);
          }
        }

        /* Resolve in document order rather than in callback order, so a
           boundary where two sections swap cannot report the outgoing one. */
        setActiveId(ids.find((id) => visible.has(id)) ?? null);
      },
      { rootMargin, threshold: 0 },
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [ids, rootMargin]);

  return activeId;
}
