"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { useReducedMotion } from "@/hooks";
import {
  shouldSkipInfiniteDoor,
  useIsomorphicLayoutEffect,
} from "@/lib/doorState";
import { useLandingScrollRestoration } from "@/lib/scrollRestoration";
import { PRELOADER } from "../constants";

/**
 * The landing experience's state machine (task.md TASK 2.2).
 *
 * Four things the landing has to coordinate, and nothing else:
 *
 *   phase            — has the reveal finished, or is the visitor still arriving
 *   entranceSkipped  — did they ask to skip it
 *   activeSectionId  — which chapter-level section owns the viewport
 *   pendingHref      — a chapter has been chosen and the transition is pending
 *
 * This is a `useReducer` rather than four `useState`s because the transitions
 * are the point: the reveal can only complete once, and a pending navigation
 * can only be resolved or cleared. It is deliberately scoped to the landing
 * route — it is not global state (architecture.md §49).
 */

export type LandingPhase = "entering" | "ready";

export interface LandingState {
  phase: LandingPhase;
  entranceSkipped: boolean;
  activeSectionId: string | null;
  pendingHref: string | null;
}

type LandingAction =
  | { type: "entrance/complete" }
  | { type: "entrance/skip" }
  | { type: "section/active"; id: string }
  | { type: "navigation/begin"; href: string }
  | { type: "navigation/clear" }
  | { type: "navigation/cancel" };

const INITIAL_STATE: LandingState = {
  phase: "entering",
  entranceSkipped: false,
  activeSectionId: null,
  pendingHref: null,
};

function landingReducer(
  state: LandingState,
  action: LandingAction,
): LandingState {
  switch (action.type) {
    case "entrance/complete":
      /* Idempotent: a skip that already finished must not be undone by the
         timer that was scheduled before it. */
      return state.phase === "ready" ? state : { ...state, phase: "ready" };

    case "entrance/skip":
      return { ...state, phase: "ready", entranceSkipped: true };

    case "section/active":
      return state.activeSectionId === action.id
        ? state
        : { ...state, activeSectionId: action.id };

    case "navigation/begin":
      return { ...state, pendingHref: action.href };

    /* The route never changed — a cancelled transition, or the visitor changed
       their mind. Clear the pending state so the UI stops showing progress. */
    case "navigation/clear":
    case "navigation/cancel":
      return state.pendingHref === null ? state : { ...state, pendingHref: null };

    default:
      return state;
  }
}

interface LandingContextValue extends LandingState {
  isEntering: boolean;
  completeEntrance: () => void;
  skipEntrance: () => void;
  setActiveSection: (id: string) => void;
  beginNavigation: (href: string) => void;
  clearNavigation: () => void;
}

const LandingContext = createContext<LandingContextValue | null>(null);

export interface LandingProviderProps {
  children: React.ReactNode;
  /**
   * Overrides the initial phase. A visitor arriving directly at the landing
   * route — a bookmark, a refresh, a shared link — has not watched the opening,
   * so the reveal plays. Nothing to configure today; this exists so TASK 6.1 can
   * hand the landing straight to "ready" when it arrives from the Infinite Door.
   */
  initialPhase?: LandingPhase;
}

export function LandingProvider({
  children,
  initialPhase,
}: LandingProviderProps) {
  const prefersReducedMotion = useReducedMotion();

  const [state, dispatch] = useReducer(landingReducer, {
    ...INITIAL_STATE,
    phase: initialPhase ?? INITIAL_STATE.phase,
  });

  /* Auto-release landing to ready before browser paints when returning from redirected pages */
  useIsomorphicLayoutEffect(() => {
    if (shouldSkipInfiniteDoor() && state.phase !== "ready") {
      dispatch({ type: "entrance/complete" });
    }
  }, [state.phase]);

  /* Track scroll before navigating to Kashi Rasoi and restore when returning */
  useLandingScrollRestoration();

  /* Reduced motion skips the reveal outright rather than shortening it: a
     transform-based curtain lifting is exactly what the preference is asking
     us not to do. */
  useEffect(() => {
    if (prefersReducedMotion) {
      dispatch({ type: "entrance/skip" });
    }
  }, [prefersReducedMotion]);

  /* Failsafe ceiling.
     The preloader releases the landing when its assets genuinely settle. This
     timer is the guarantee that it releases even if it does not — a stalled
     request, a component that never mounts, an error thrown during hydration.
     rules.md §55: there must be no path to an infinite loading state. */
  useEffect(() => {
    if (state.phase === "ready") return;

    const timer = window.setTimeout(
      () => dispatch({ type: "entrance/complete" }),
      PRELOADER.failsafeMs,
    );

    return () => window.clearTimeout(timer);
  }, [state.phase]);

  const completeEntrance = useCallback(
    () => dispatch({ type: "entrance/complete" }),
    [],
  );
  const skipEntrance = useCallback(
    () => dispatch({ type: "entrance/skip" }),
    [],
  );
  const setActiveSection = useCallback(
    (id: string) => dispatch({ type: "section/active", id }),
    [],
  );
  const beginNavigation = useCallback(
    (href: string) => dispatch({ type: "navigation/begin", href }),
    [],
  );
  const clearNavigation = useCallback(
    () => dispatch({ type: "navigation/clear" }),
    [],
  );

  const value = useMemo<LandingContextValue>(
    () => ({
      ...state,
      isEntering: state.phase === "entering",
      completeEntrance,
      skipEntrance,
      setActiveSection,
      beginNavigation,
      clearNavigation,
    }),
    [
      state,
      completeEntrance,
      skipEntrance,
      setActiveSection,
      beginNavigation,
      clearNavigation,
    ],
  );

  return (
    <LandingContext.Provider value={value}>{children}</LandingContext.Provider>
  );
}

export function useLanding(): LandingContextValue {
  const context = useContext(LandingContext);

  if (!context) {
    throw new Error("useLanding must be used inside a <LandingProvider>.");
  }

  return context;
}
