"use client";

import { useEffect, useState } from "react";

interface PreloadResult {
  /** 0 → 1. Derived from assets that actually finished, never simulated. */
  progress: number;
  /** True once every asset has resolved or failed. */
  isComplete: boolean;
}

/**
 * Real preload progress for a small, fixed set of assets.
 *
 * rules.md §54: never fake progress. Every tick here corresponds to an asset
 * that genuinely settled, and a failed asset counts as settled — a missing
 * photograph must degrade into a fast start, not a stalled preloader
 * (rules.md §55).
 *
 * `urls` must be a stable reference (a module-level constant); an inline array
 * would restart the whole preload on every render.
 */
export function usePreloadAssets(urls: readonly string[]): PreloadResult {
  const [settled, setSettled] = useState(0);

  useEffect(() => {
    /* The font readiness promise counts as one unit of work, so the bar reflects
       the two things that actually decide whether the first paint is right:
       the hero image and the typefaces. */
    const total = urls.length + 1;
    let cancelled = false;

    const settle = () => {
      if (cancelled) return;
      setSettled((current) => Math.min(current + 1, total));
    };

    urls.forEach((url) => {
      const image = new window.Image();
      image.onload = settle;
      image.onerror = settle;
      image.src = url;
    });

    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(settle, settle);
    } else {
      settle();
    }

    return () => {
      cancelled = true;
    };
  }, [urls]);

  const total = urls.length + 1;

  return {
    progress: Math.min(settled / total, 1),
    isComplete: settled >= total,
  };
}
