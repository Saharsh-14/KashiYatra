"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";

/**
 * KashiWordInteract
 *
 * Implements the progressive linguistic discovery interaction:
 * KASHI ──> [KA ──> का] + [SHI ──> शी] ──> काशी
 *
 * State Machine:
 * 1. DEFAULT: "KASHI"
 * 2. PARTIAL: "काSHI" or "KAशी" (depending on cursor entry zone)
 * 3. FULL: "काशी" (with continuous shirorekha headline)
 * 4. Once FULL is reached:
 *    - Persists for 12 seconds (within the 10-15s window).
 *    - Moving the cursor during the persistent state does NOT restart the timer.
 *    - After 12s, smoothly reverts to "KASHI".
 * 5. If user leaves while in PARTIAL, reverts gracefully after a 3s dwell.
 */
export function KashiWordInteract() {
  const [kaHindi, setKaHindi] = useState(false);
  const [shiHindi, setShiHindi] = useState(false);
  const [isFullLocked, setIsFullLocked] = useState(false);

  const fullTimerRef = useRef<NodeJS.Timeout | null>(null);
  const partialTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Check if both zones have become Hindi
  const isFull = kaHindi && shiHindi;

  // Clean timer cleanup on unmount
  useEffect(() => {
    return () => {
      if (fullTimerRef.current) clearTimeout(fullTimerRef.current);
      if (partialTimerRef.current) clearTimeout(partialTimerRef.current);
    };
  }, []);

  // When FULL state is reached, start the 12-second persistent countdown
  useEffect(() => {
    if (isFull && !isFullLocked) {
      setIsFullLocked(true);

      // Clear any partial grace timer
      if (partialTimerRef.current) {
        clearTimeout(partialTimerRef.current);
        partialTimerRef.current = null;
      }

      // 5 seconds persistence (per user specification)
      fullTimerRef.current = setTimeout(() => {
        setKaHindi(false);
        setShiHindi(false);
        setIsFullLocked(false);
        fullTimerRef.current = null;
      }, 5000);
    }
  }, [isFull, isFullLocked]);

  // Zone 1 (KA -> का) hover handler
  const handleEnterKa = useCallback(() => {
    if (partialTimerRef.current) {
      clearTimeout(partialTimerRef.current);
      partialTimerRef.current = null;
    }
    if (!isFullLocked) {
      setKaHindi(true);
    }
  }, [isFullLocked]);

  // Zone 2 (SHI -> शी) hover handler
  const handleEnterShi = useCallback(() => {
    if (partialTimerRef.current) {
      clearTimeout(partialTimerRef.current);
      partialTimerRef.current = null;
    }
    if (!isFullLocked) {
      setShiHindi(true);
    }
  }, [isFullLocked]);

  // When mouse leaves the entire word container
  const handleMouseLeaveWord = useCallback(() => {
    // If we haven't reached full Hindi, give 3s grace before reverting to English
    if (!isFullLocked && (kaHindi || shiHindi) && !(kaHindi && shiHindi)) {
      if (partialTimerRef.current) clearTimeout(partialTimerRef.current);
      partialTimerRef.current = setTimeout(() => {
        setKaHindi(false);
        setShiHindi(false);
        partialTimerRef.current = null;
      }, 3000);
    }
  }, [isFullLocked, kaHindi, shiHindi]);

  return (
    <div
      onMouseLeave={handleMouseLeaveWord}
      className="relative inline-flex items-baseline justify-center cursor-default select-none pointer-events-auto"
      aria-label="KASHI — काशी"
    >
      <h1 className="reveal-fade inline-flex items-baseline font-black leading-[0.82] text-[#E5B869] drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)] opacity-95 transition-all duration-700">
        {/* ===================================================================
            ZONE 1: "KA" ──> "का"
            =================================================================== */}
        <span
          onMouseEnter={handleEnterKa}
          onMouseMove={handleEnterKa}
          className="relative inline-block cursor-pointer transition-all duration-500 ease-out"
          style={{ verticalAlign: "baseline" }}
        >
          {/* English "KA" */}
          <span
            className={`font-serif uppercase tracking-[0.03em] sm:tracking-[0.04em] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              kaHindi
                ? "opacity-0 -translate-y-2 blur-[1.5px] pointer-events-none absolute left-0 top-0 scale-[0.98]"
                : "opacity-100 translate-y-0 blur-0 relative scale-100 inline-block"
            }`}
            style={{
              fontSize: "clamp(4.5rem, 15vw, 13.5rem)",
            }}
          >
            KA
          </span>

          {/* Hindi "का" */}
          <span
            className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              kaHindi
                ? "opacity-100 translate-y-0 blur-0 relative scale-100 inline-block"
                : "opacity-0 translate-y-2 blur-[1.5px] pointer-events-none absolute left-0 top-0 scale-[0.98]"
            }`}
            style={{
              fontFamily: "'Rozha One', 'Martel', 'Noto Serif Devanagari', 'Mangal', serif",
              fontWeight: 700,
              fontSize: "clamp(4.5rem, 15vw, 13.5rem)",
              letterSpacing: "0.01em",
            }}
          >
            का
          </span>
        </span>

        {/* ===================================================================
            ZONE 2: "SHI" ──> "शी"
            =================================================================== */}
        <span
          onMouseEnter={handleEnterShi}
          onMouseMove={handleEnterShi}
          className={`relative inline-block cursor-pointer transition-all duration-500 ease-out ${
            kaHindi && shiHindi ? "-ml-[0.02em]" : ""
          }`}
          style={{ verticalAlign: "baseline" }}
        >
          {/* English "SHI" */}
          <span
            className={`font-serif uppercase tracking-[0.03em] sm:tracking-[0.04em] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              shiHindi
                ? "opacity-0 -translate-y-2 blur-[1.5px] pointer-events-none absolute left-0 top-0 scale-[0.98]"
                : "opacity-100 translate-y-0 blur-0 relative scale-100 inline-block"
            }`}
            style={{
              fontSize: "clamp(4.5rem, 15vw, 13.5rem)",
            }}
          >
            SHI
          </span>

          {/* Hindi "शी" */}
          <span
            className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              shiHindi
                ? "opacity-100 translate-y-0 blur-0 relative scale-100 inline-block"
                : "opacity-0 translate-y-2 blur-[1.5px] pointer-events-none absolute left-0 top-0 scale-[0.98]"
            }`}
            style={{
              fontFamily: "'Rozha One', 'Martel', 'Noto Serif Devanagari', 'Mangal', serif",
              fontWeight: 700,
              fontSize: "clamp(4.5rem, 15vw, 13.5rem)",
              letterSpacing: "0.01em",
            }}
          >
            शी
          </span>
        </span>
      </h1>
    </div>
  );
}
