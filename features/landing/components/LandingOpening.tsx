"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { useReducedMotion } from "@/hooks";
import { PRELOADER, PRELOAD_ASSETS } from "../constants";
import { usePreloadAssets } from "../hooks/usePreloadAssets";
import { useLanding } from "../context/LandingProvider";
import styles from "../landing.module.css";

/**
 * The page preloader, and the landing's opening sequence (TASK 3).
 *
 * It is the "Infinite Door" slot realized as a loader rather than a 3D scene:
 * `public/models/door/` is empty, so a WebGL doorway would have nothing to
 * render. When that model arrives, this component is where it goes — the
 * surrounding contract (hold the page, report real progress, always release)
 * will not need to change.
 *
 * design.md §96 asks the loader to belong to the KASHI identity rather than be
 * a generic spinner: ink ground, one hairline, restrained type, no ornament.
 *
 * Three guarantees, each of which is a rule rather than a preference:
 *
 * 1. The progress shown is real (rules.md §54). It counts the hero image and
 *    font readiness — the two things that decide whether the first paint is
 *    correct. A failed asset counts as settled, so a missing photograph gives a
 *    fast start rather than a stall.
 * 2. It always releases (rules.md §55). The provider holds a hard ceiling
 *    timer, and the panel carries a CSS failsafe that fades it out even if
 *    JavaScript stops entirely. There is no path to an infinite loading screen.
 * 3. Reducing motion does not mean staring at a static panel — under
 *    `prefers-reduced-motion` it is not rendered at all.
 */
export function LandingPreloader() {
  const { isEntering, completeEntrance, skipEntrance } = useLanding();
  const prefersReducedMotion = useReducedMotion();
  const { progress, isComplete } = usePreloadAssets(PRELOAD_ASSETS);

  const [minDisplayElapsed, setMinDisplayElapsed] = useState(false);
  const [hasExited, setHasExited] = useState(false);

  /* A minimum dwell so the panel reads as a deliberate opening rather than a
     flash. This is pacing, not simulated progress — the percentage above is
     still whatever genuinely loaded. */
  useEffect(() => {
    const timer = window.setTimeout(
      () => setMinDisplayElapsed(true),
      PRELOADER.minDisplayMs,
    );
    return () => window.clearTimeout(timer);
  }, []);

  /* Release once everything has settled and the minimum dwell has passed. */
  useEffect(() => {
    if (isComplete && minDisplayElapsed) completeEntrance();
  }, [isComplete, minDisplayElapsed, completeEntrance]);

  /* Reduced motion: no curtain at all, from the very first paint. */
  useEffect(() => {
    if (prefersReducedMotion) setHasExited(true);
  }, [prefersReducedMotion]);

  /* Unmount once the exit animation has played, so nothing is left layered
     over the page. */
  useEffect(() => {
    if (isEntering) return;
    const timer = window.setTimeout(
      () => setHasExited(true),
      PRELOADER.exitMs,
    );
    return () => window.clearTimeout(timer);
  }, [isEntering]);

  if (hasExited) return null;

  const percent = Math.round(progress * 100);

  return (
    <div
      className={styles.preloader}
      data-state={isEntering ? "entering" : "exiting"}
      style={
        {
          "--preloader-exit": `${PRELOADER.exitMs}ms`,
        } as CSSProperties
      }
    >
      <div className={styles.preloaderInner}>
        <p className="type-label type-tone-accent">
          Kashi — A City Beyond Time
        </p>

        <div
          className={styles.preloaderTrack}
          role="progressbar"
          aria-label="Entering Kashi"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={percent}
        >
          <span
            className={styles.preloaderFill}
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>

        <div className={styles.preloaderMeta}>
          <span className="type-index type-tone-muted">
            {String(percent).padStart(3, "0")}%
          </span>

          <button
            type="button"
            onClick={skipEntrance}
            className={`${styles.preloaderSkip} type-ui`}
          >
            Skip
          </button>
        </div>
      </div>
    </div>
  );
}
