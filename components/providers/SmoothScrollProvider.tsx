"use client";

import Lenis from "lenis";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { SMOOTH_SCROLL, smoothScrollEase } from "@/lib/animation";
import { useReducedMotion } from "@/hooks";

type ScrollTarget = number | string | HTMLElement;

interface ScrollToOptions {
  /** Pixels of lead-in. Negative stops short of the target. */
  offset?: number;
  /** Jump with no easing — used when the motion would be disorienting. */
  immediate?: boolean;
}

interface SmoothScrollApi {
  /** Scroll to a target, through Lenis when it is running. */
  scrollTo: (target: ScrollTarget, options?: ScrollToOptions) => void;
  /** Pause scrolling — for overlays and modals that own the viewport. */
  stop: () => void;
  /** Resume scrolling after `stop()`. */
  start: () => void;
  /** False when smooth scrolling is off (reduced motion) or not yet mounted. */
  isActive: boolean;
}

const SmoothScrollContext = createContext<SmoothScrollApi | null>(null);

/**
 * Smooth scroll controller (architecture.md §7).
 *
 *     Native scroll  →  Lenis  →  visual experience
 *
 * Three rules this provider exists to enforce:
 *
 * 1. It never runs under `prefers-reduced-motion`. Smooth scrolling is exactly
 *    the kind of large, continuous, self-initiated movement that preference is
 *    about, so the native scrollbar takes over untouched (rules.md §39).
 *
 * 2. It never takes over touch. `syncTouch` stays off, so a phone keeps its
 *    native momentum and the browser's own gestures keep working — the provider
 *    only tracks position (architecture.md §7, rules.md §38).
 *
 * 3. It always tears itself down. `destroy()` on unmount restores native
 *    scrolling, so navigating away cannot leave the document hijacked
 *    (rules.md §33, §73).
 *
 * Overlays that scroll internally must carry `data-lenis-prevent` so Lenis
 * ignores wheel events inside them.
 */
export function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const prefersReducedMotion = useReducedMotion();
  const lenisRef = useRef<Lenis | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      ...SMOOTH_SCROLL,
      easing: smoothScrollEase,
    });
    lenisRef.current = lenis;
    setIsActive(true);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      setIsActive(false);
    };
  }, [prefersReducedMotion]);

  const scrollTo = useCallback<SmoothScrollApi["scrollTo"]>(
    (target, options) => {
      const lenis = lenisRef.current;

      if (lenis) {
        lenis.scrollTo(target, {
          offset: options?.offset ?? 0,
          immediate: options?.immediate ?? false,
        });
        return;
      }

      /* Reduced motion, or before Lenis has mounted: scroll natively, and jump
         rather than glide when motion is unwelcome. */
      const behaviour: ScrollBehavior =
        options?.immediate || prefersReducedMotion ? "auto" : "smooth";

      if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: behaviour });
        return;
      }

      const element =
        typeof target === "string"
          ? document.querySelector<HTMLElement>(target)
          : target;

      element?.scrollIntoView({ behavior: behaviour, block: "start" });
    },
    [prefersReducedMotion],
  );

  const stop = useCallback(() => lenisRef.current?.stop(), []);
  const start = useCallback(() => lenisRef.current?.start(), []);

  const value = useMemo<SmoothScrollApi>(
    () => ({ scrollTo, stop, start, isActive }),
    [scrollTo, stop, start, isActive],
  );

  return (
    <SmoothScrollContext.Provider value={value}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

export function useSmoothScroll(): SmoothScrollApi {
  const context = useContext(SmoothScrollContext);

  if (!context) {
    throw new Error(
      "useSmoothScroll must be used inside a <SmoothScrollProvider>.",
    );
  }

  return context;
}
