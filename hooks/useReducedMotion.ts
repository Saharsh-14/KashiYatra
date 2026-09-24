"use client";

import { useEffect, useState } from "react";

export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(media.matches);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReduced(event.matches);
    };

    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return prefersReduced;
}
