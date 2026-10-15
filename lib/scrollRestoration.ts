"use client";

import { useEffect } from "react";

const LANDING_SCROLL_POS_KEY = "kashi_landing_scroll_pos";

/**
 * Save the landing page's current vertical scroll position into sessionStorage.
 */
export function saveLandingScrollPosition(): void {
  if (typeof window === "undefined") return;

  const scrollY = window.scrollY || document.documentElement.scrollTop || 0;
  const lenis = window.__lenis;
  const lenisScroll =
    typeof lenis?.scroll === "number" && !isNaN(lenis.scroll) ? lenis.scroll : 0;

  let currentY = Math.max(scrollY, lenisScroll);

  if (currentY <= 0) {
    const rasoiEl = document.getElementById("rasoi");
    if (rasoiEl) {
      currentY =
        rasoiEl.getBoundingClientRect().top +
        (window.scrollY || document.documentElement.scrollTop || 0);
    }
  }

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
    // ignore
  }

  const hash = window.location.hash;
  const isRasoiTarget = hash === "#rasoi" || savedStr !== null;

  if (!isRasoiTarget && (!hash || hash.length <= 1)) {
    return () => {};
  }

  // Prevent browser's native automatic scroll restoration from interfering
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  let cancelled = false;
  let attempts = 0;
  const maxAttempts = 60;

  const executeRestore = () => {
    if (cancelled) return;

    let targetY: number | null = null;

    if (savedStr) {
      const parsed = parseFloat(savedStr);
      if (!isNaN(parsed) && parsed > 0) {
        targetY = parsed;
      }
    }

    // If targetY is not determined yet, check hash or rasoi element
    if (targetY === null || targetY <= 0) {
      const targetId =
        hash && hash.length > 1
          ? hash.slice(1)
          : savedStr !== null
          ? "rasoi"
          : null;
      if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
          const rect = el.getBoundingClientRect();
          targetY =
            rect.top + (window.scrollY || document.documentElement.scrollTop || 0);
        }
      }
    }

    if (targetY === null || targetY <= 0) {
      attempts++;
      if (attempts < maxAttempts) {
        requestAnimationFrame(executeRestore);
      }
      return;
    }

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
      const lenis = window.__lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(clampedY, { immediate: true });
      }

      // Reinforce position for the next 5 animation frames to counteract any asynchronous layout reflows
      let reinforceCount = 0;
      const reinforce = () => {
        if (cancelled) return;
        reinforceCount++;

        window.scrollTo({ top: clampedY, behavior: "instant" });
        if (lenis && typeof lenis.scrollTo === "function") {
          lenis.scrollTo(clampedY, { immediate: true });
        }

        if (reinforceCount < 5) {
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
