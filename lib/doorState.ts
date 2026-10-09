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
 */
export function shouldSkipInfiniteDoor(): boolean {
  if (typeof window === "undefined") return false;

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
