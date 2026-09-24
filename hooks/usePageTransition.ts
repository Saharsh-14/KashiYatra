"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

export function usePageTransition() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigateWithTransition = useCallback(
    (url: string, durationMs = 800) => {
      setIsTransitioning(true);
      setTimeout(() => {
        router.push(url);
        setTimeout(() => setIsTransitioning(false), 300);
      }, durationMs);
    },
    [router]
  );

  return {
    isTransitioning,
    navigateWithTransition,
  };
}
