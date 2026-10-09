"use client";

import { useEffect } from "react";

const LANDING_SCROLL_POS_KEY = "kashi_landing_scroll_pos";

/**
 * Save the landing page's current vertical scroll position into sessionStorage.
 */
export function saveLandingScrollPosition(): void {
  if (typeof window === "undefined") return;

  const lenis = (window as any).__lenis;
  const currentY =
    typeof lenis?.scroll === "number" && !isNaN(lenis.scroll)
      ? lenis.scroll
      : window.scrollY || document.documentElement.scrollTop || 0;

  try {
    sessionStorage.setItem(
      LANDING_SCROLL_POS_KEY,
      String(Math.round(currentY))
    );
  } catch {
    // ignore sessionStorage errors
  }
}

/**
 * Restore the landing page's saved scroll position once the page has rendered and its layout is ready.
 */
export function restoreLandingScrollPosition(): () => void {
  if (typeof window === "undefined") return () => {};

  let savedStr: string | null = null;
  try {
    savedStr = sessionStorage.getItem(LANDING_SCROLL_POS_KEY);
  } catch {
    return () => {};
  }

  if (!savedStr) return () => {};

  const targetY = parseFloat(savedStr);
  if (isNaN(targetY) || targetY <= 0) {
    try {
      sessionStorage.removeItem(LANDING_SCROLL_POS_KEY);
    } catch {}
    return () => {};
  }

  // Prevent browser's native automatic scroll restoration from interfering
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  let cancelled = false;
  let attempts = 0;
  const maxAttempts = 50;

  const executeRestore = () => {
    if (cancelled) return;

    const doc = document.documentElement;
    const body = document.body;
    const currentHeight = Math.max(
      doc.scrollHeight,
      body ? body.scrollHeight : 0
    );
    const winHeight = window.innerHeight;
    const maxScroll = Math.max(0, currentHeight - winHeight);

    attempts++;

    // Check if layout is ready: document is tall enough to reach targetY, or max attempts reached
    const isLayoutReady =
      currentHeight >= targetY || maxScroll >= targetY || attempts >= maxAttempts;

    if (isLayoutReady) {
      const clampedY = Math.min(targetY, maxScroll > 0 ? maxScroll : targetY);

      // 1. Native scroll
      window.scrollTo({ top: clampedY, behavior: "instant" });

      // 2. Lenis instance if active
      const lenis = (window as any).__lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(clampedY, { immediate: true });
      }

      // Reinforce position for the next 4 animation frames to counteract any asynchronous layout reflows
      let reinforceCount = 0;
      const reinforce = () => {
        if (cancelled) return;
        reinforceCount++;

        window.scrollTo({ top: clampedY, behavior: "instant" });
        if (lenis && typeof lenis.scrollTo === "function") {
          lenis.scrollTo(clampedY, { immediate: true });
        }

        if (reinforceCount < 4) {
          requestAnimationFrame(reinforce);
        } else {
          try {
            sessionStorage.removeItem(LANDING_SCROLL_POS_KEY);
          } catch {}
        }
      };
      requestAnimationFrame(reinforce);
    } else {
      requestAnimationFrame(executeRestore);
    }
  };

  requestAnimationFrame(executeRestore);

  return () => {
    cancelled = true;
  };
}

/**
 * Hook to be used on the landing page:
 * 1. Automatically intercepts any clicks navigating to Kashi Rasoi to store scroll position.
 * 2. Restores the saved scroll position once the landing page has rendered and its layout is ready.
 */
export function useLandingScrollRestoration(): void {
  useEffect(() => {
    // Intercept clicks navigating to Kashi Rasoi in capture phase
    const handleNavigationClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (anchor) {
        const href = anchor.getAttribute("href");
        if (
          href &&
          (href === "/kashi-rasoi" ||
            href.startsWith("/kashi-rasoi/") ||
            href.startsWith("/rasoi"))
        ) {
          saveLandingScrollPosition();
        }
      }
    };

    document.addEventListener("click", handleNavigationClick, { capture: true });

    // Restore position if returning from Kashi Rasoi
    const cancelRestore = restoreLandingScrollPosition();

    return () => {
      document.removeEventListener("click", handleNavigationClick, {
        capture: true,
      });
      cancelRestore();
    };
  }, []);
}
