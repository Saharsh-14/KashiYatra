"use client";

import { useEffect, useLayoutEffect, useSyncExternalStore } from "react";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

const KASHI_DOOR_KEY = "kashi_door_entered";

const SUBPAGE_PATH_PATTERNS = [
  "/kashi-rasoi",
  "/rasoi",
  "/temples",
  "/where-gods-reside",
  "/unfolded",
  "/kashi-unfolded",
];

function isLandingPath(pathname: string): boolean {
  const clean = pathname.toLowerCase().replace(/\/$/, "");
  return clean === "" || clean === "/kashi";
}

function isReloadNavigation(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const navEntries = performance.getEntriesByType("navigation");
    if (navEntries.length > 0) {
      const navTiming = navEntries[0] as PerformanceNavigationTiming;
      return navTiming.type === "reload";
    }
    const perfNav = (performance as unknown as { navigation?: { type?: number } }).navigation;
    if (perfNav && perfNav.type === 1) {
      return true;
    }
  } catch {
    // ignore
  }
  return false;
}

// Track whether this document load was initiated by a page reload on the landing page
let isReloadOnLanding = false;

if (typeof window !== "undefined") {
  if (isReloadNavigation() && isLandingPath(window.location.pathname)) {
    isReloadOnLanding = true;
    try {
      sessionStorage.removeItem(KASHI_DOOR_KEY);
    } catch {
      // ignore
    }
  }

  // Also hook into beforeunload: when user refreshes or reloads while on the landing page,
  // clear the sessionStorage key so the intro door video plays fresh on reload
  window.addEventListener("beforeunload", () => {
    if (isLandingPath(window.location.pathname)) {
      try {
        sessionStorage.removeItem(KASHI_DOOR_KEY);
      } catch {
        // ignore
      }
    }
  });
}

const listeners = new Set<() => void>();

function notifyListeners() {
  listeners.forEach((listener) => {
    try {
      listener();
    } catch {
      // ignore listener errors
    }
  });
}

export function subscribeDoorState(callback: () => void): () => void {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

/**
 * Mark that the infinite door opening has already been shown/entered in this session.
 */
export function markInfiniteDoorCompleted(): void {
  if (typeof window === "undefined") return;
  isReloadOnLanding = false;
  try {
    sessionStorage.setItem(KASHI_DOOR_KEY, "true");
    notifyListeners();
  } catch {
    // sessionStorage unavailable or blocked in private mode
  }
}

/**
 * Check whether the infinite door opening video/sequence should be skipped.
 * Returns true if:
 * 1. The door has already been viewed/completed during this browser session.
 * 2. The user navigated from one of the redirected pages:
 *    - Kashi Rasoi (/kashi-rasoi, /rasoi)
 *    - Where Gods Reside (/temples, /where-gods-reside)
 *    - Kashi Unfolded (/unfolded, /kashi-unfolded)
 * 3. The URL contains a skip flag or a landing section hash (e.g., #rasoi, #unfolded, #where-gods-reside).
 *
 * NOTE: On page refresh / reload while on the landing page, this returns false so the intro
 * infinite door video plays every time.
 */
export function shouldSkipInfiniteDoor(): boolean {
  if (typeof window === "undefined") return false;

  // On page reload of the landing page, always play the infinite door intro sequence
  if (isReloadOnLanding) {
    return false;
  }

  // 1. Session storage flag
  try {
    if (sessionStorage.getItem(KASHI_DOOR_KEY) === "true") {
      return true;
    }
  } catch {
    // ignore
  }

  // 2. Referrer check: returning from any dedicated/redirected page
  if (typeof document !== "undefined" && document.referrer) {
    const isFromSubpage = SUBPAGE_PATH_PATTERNS.some((pattern) =>
      document.referrer.includes(pattern),
    );
    if (isFromSubpage) {
      markInfiniteDoorCompleted();
      return true;
    }
  }

  // 3. URL search params or hash flag
  if (
    window.location.search.includes("skipDoor=true") ||
    (window.location.hash && window.location.hash.length > 1)
  ) {
    markInfiniteDoorCompleted();
    return true;
  }

  return false;
}

/**
 * React hook using useSyncExternalStore for hydration-safe skipping of the infinite door.
 */
export function useShouldSkipInfiniteDoor(): boolean {
  return useSyncExternalStore(
    subscribeDoorState,
    shouldSkipInfiniteDoor,
    () => false, // SSR snapshot is always false
  );
}

