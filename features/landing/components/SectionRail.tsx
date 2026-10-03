"use client";

import { LANDING_SECTIONS } from "../constants";
import styles from "../landing.module.css";
import { useLanding } from "../context/LandingProvider";
import { useActiveSection } from "../hooks/useActiveSection";

const SECTION_LABELS: Record<(typeof LANDING_SECTIONS)[number], string> = {
  hero: "Kashi",
  journey: "The journey",
  "steps-to-eternity": "Steps",
  "story-of-kashi": "Story",
  "spirit-of-kashi": "Spirit",
  closing: "Closing",
};

/** Bands that sit on ivory. The rail has to know, or it goes invisible. */
const LIGHT_BANDS = new Set<string>(["steps-to-eternity", "spirit-of-kashi"]);

/**
 * Where the visitor is on this page.
 *
 * A real navigation with real anchors, not decoration — rules.md §59 requires a
 * keyboard user to be able to tell what they are looking at and how to move.
 * `aria-current` marks the section that owns the viewport, so the state is
 * available to assistive technology as well as to the eye.
 *
 * Desktop only: on a phone the rail would be chrome competing with the content,
 * and design.md §73 asks navigation to keep a minimal footprint.
 */
export function SectionRail() {
  const activeId = useActiveSection(LANDING_SECTIONS);
  const { isEntering } = useLanding();

  const band = activeId && LIGHT_BANDS.has(activeId) ? "light" : "dark";

  return (
    <nav
      className={styles.rail}
      data-visible={!isEntering}
      data-band={band}
      aria-label="Sections of this page"
    >
      {LANDING_SECTIONS.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`${styles.railItem} type-ui`}
          aria-current={activeId === id ? "true" : undefined}
        >
          <span className={styles.railLabel}>
            {SECTION_LABELS[id]}
            {activeId === id ? " —" : ""}
          </span>
          <span className={styles.railMark} aria-hidden="true" />
        </a>
      ))}
    </nav>
  );
}
