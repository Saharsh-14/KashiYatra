"use client";

import { BREAKPOINTS } from "@/lib/constants";
import { useMediaQuery } from "./useMediaQuery";

export type DeviceClass = "mobile" | "tablet" | "desktop" | "wide";

/**
 * Coarse device class, derived from the shared breakpoints.
 *
 * Deliberately NOT a substitute for responsive CSS (architecture.md §45) — it
 * exists only to choose between materially different behaviour: lower 3D
 * quality, a shorter transition, an interaction that has no pointer equivalent.
 * Layout must still be handled by CSS.
 */
export function useDevice(): DeviceClass {
  const isWide = useMediaQuery(`(min-width: ${BREAKPOINTS.wide}px)`);
  const isDesktop = useMediaQuery(`(min-width: ${BREAKPOINTS.desktop}px)`);
  const isTablet = useMediaQuery(`(min-width: ${BREAKPOINTS.tablet}px)`);

  if (isWide) return "wide";
  if (isDesktop) return "desktop";
  if (isTablet) return "tablet";
  return "mobile";
}
