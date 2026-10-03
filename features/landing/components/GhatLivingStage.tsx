"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { SafeImage } from "@/components/media";
import { ghats } from "@/data/ghats";
import styles from "../landing.module.css";

interface GhatLivingStageProps {
  onGhatChange?: (index: number) => void;
}

export function GhatLivingStage({ onGhatChange }: GhatLivingStageProps) {
  // Track continuous physical position along the 9-panel canvas (0 to 8 * viewportWidth)
  const [viewportWidth, setViewportWidth] = useState(1440);
  const [progress, setProgress] = useState(0); // 0.0 (Intro) to 8.0 (Namo)

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const targetXRef = useRef(0);
  const currentXRef = useRef(0);
  const rafIdRef = useRef<number | null>(null);

  // Subtle interactive parallax offset based on cursor position
  const [cursorOffset, setCursorOffset] = useState({ x: 0, y: 0 });

  // Drag interaction state
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollXRef = useRef(0);
  const lastMoveXRef = useRef(0);
  const lastMoveTimeRef = useRef(0);
  const velocityRef = useRef(0);
  const isHorizontalGestureRef = useRef(false);

  // Measure viewport width
  useEffect(() => {
    const updateWidth = () => {
      const w = window.innerWidth || 1440;
      setViewportWidth(w);
      // Re-clamp target and current
      const maxScroll = 8 * w;
      targetXRef.current = Math.min(targetXRef.current, maxScroll);
      currentXRef.current = Math.min(currentXRef.current, maxScroll);
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Continuous physics engine with requestAnimationFrame
  useEffect(() => {
    let prevIndex = -1;

    const animate = () => {
      const target = targetXRef.current;
      const current = currentXRef.current;
      const diff = target - current;

      if (Math.abs(diff) > 0.4) {
        currentXRef.current += diff * 0.12;
      } else {
        currentXRef.current = target;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${-currentXRef.current}px, 0, 0)`;
      }

      const prog = currentXRef.current / (viewportWidth || 1440);
      setProgress(prog);

      const nearestIdx = Math.round(prog);
      if (nearestIdx !== prevIndex) {
        prevIndex = nearestIdx;
        if (onGhatChange) {
          onGhatChange(nearestIdx);
        }
      }

      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [viewportWidth, onGhatChange]);

  const maxScrollX = 8 * viewportWidth;

  // Gliding to a specific panel (0 = Intro, 1..8 = Ghats)
  const glideToPanel = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(8, index));
      targetXRef.current = clamped * viewportWidth;
    },
    [viewportWidth],
  );

  const goToPrev = useCallback(() => {
    const currentIndex = currentXRef.current / viewportWidth;
    const target = Math.max(0, Math.ceil(currentIndex - 0.05) - 1);
    glideToPanel(target);
  }, [glideToPanel, viewportWidth]);

  const goToNext = useCallback(() => {
    const currentIndex = currentXRef.current / viewportWidth;
    const target = Math.min(8, Math.floor(currentIndex + 0.05) + 1);
    glideToPanel(target);
  }, [glideToPanel, viewportWidth]);

  // Mouse move for subtle living photograph perspective
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setCursorOffset({ x: x * 2, y: y * 2 });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setCursorOffset({ x: 0, y: 0 });
  }, []);

  // Continuous horizontal wheel / trackpad gesture (NEVER hijacks vertical scroll)
  const handleWheel = useCallback(
    (e: React.WheelEvent<HTMLDivElement>) => {
      const absX = Math.abs(e.deltaX);
      const absY = Math.abs(e.deltaY);

      // Support horizontal wheel swipe or Shift+Wheel
      if (absX > absY || e.shiftKey) {
        const delta = e.shiftKey ? e.deltaY * 1.5 : e.deltaX * 1.2;
        targetXRef.current = Math.max(0, Math.min(maxScrollX, targetXRef.current + delta));
      }
      // If vertical scroll (e.deltaY) is dominant, do NOTHING!
      // Browser vertical scroll continues down the page naturally.
    },
    [maxScrollX],
  );

  // Pointer drag handling for 1:1 real-time horizontal travel
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
    dragStartScrollXRef.current = targetXRef.current;
    lastMoveXRef.current = e.clientX;
    lastMoveTimeRef.current = Date.now();
    velocityRef.current = 0;
    isHorizontalGestureRef.current = false;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current) return;
    const currentX = e.clientX;
    const currentTime = Date.now();
    const dx = currentX - dragStartXRef.current;

    if (!isHorizontalGestureRef.current && Math.abs(dx) > 8) {
      isHorizontalGestureRef.current = true;
    }

    if (isHorizontalGestureRef.current) {
      // 1:1 real-time drag
      const newTarget = Math.max(0, Math.min(maxScrollX, dragStartScrollXRef.current - dx));
      targetXRef.current = newTarget;

      // Track velocity for smooth momentum glide
      const timeDelta = currentTime - lastMoveTimeRef.current;
      if (timeDelta > 0) {
        velocityRef.current = (currentX - lastMoveXRef.current) / timeDelta;
      }
      lastMoveXRef.current = currentX;
      lastMoveTimeRef.current = currentTime;
    }
  };

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;

    if (isHorizontalGestureRef.current) {
      // Apply momentum glide based on release velocity
      const momentum = velocityRef.current * 180;
      targetXRef.current = Math.max(0, Math.min(maxScrollX, targetXRef.current - momentum));
    }
    isHorizontalGestureRef.current = false;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goToNext();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goToPrev();
    }
  };

  // Active indices & metadata
  const roundedIndex = Math.round(progress);
  const isIntro = roundedIndex === 0;
  const currentGhat = !isIntro && roundedIndex >= 1 && roundedIndex <= 8 ? ghats[roundedIndex - 1] : null;

  return (
    <div
      ref={containerRef}
      role="region"
      aria-label="Steps to Eternity — Continuous Ghat Journey"
      tabIndex={0}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onWheel={handleWheel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onKeyDown={handleKeyDown}
      className="group relative w-full h-screen min-h-screen overflow-hidden bg-[#0c0c0a] select-none focus:outline-none cursor-grab active:cursor-grabbing"
    >
      {/* =========================================================================
          THE CONTINUOUS HORIZONTAL CANVAS TRACK (900vw wide: Intro + 8 Ghats)
          Physical movement through space — no card replacement, no snap points.
          ========================================================================= */}
      <div
        ref={trackRef}
        className="flex flex-row h-full will-change-transform"
        style={{ width: "900vw" }}
      >
        {/* =====================================================================
            PANEL 0: STEPS TO ETERNITY CHAPTER INTRO (100vw x 100vh)
            Breathing space & cinematic transition from the Landing Hero.
            ===================================================================== */}
        <div className="relative w-screen h-full flex-shrink-0 flex items-center justify-center overflow-hidden bg-[#0c0c0a]">
          {/* Atmospheric Bridge from Landing Hero (INTRO ONLY) */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-44 sm:h-64 z-20 pointer-events-none bg-gradient-to-b from-[#10100E] via-[#10100E]/75 via-40% to-transparent"
          />

          {/* Subtle river ambient background */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_46%,rgba(181,154,99,0.16)_0%,rgba(12,12,10,0.55)_60%,#0c0c0a_100%)] pointer-events-none"
          />
          <div aria-hidden="true" className={styles.riverAtmosphereSheen} />

          {/* Intro Content */}
          <div className="relative z-10 max-w-3xl px-6 sm:px-12 text-center flex flex-col items-center gap-5 sm:gap-6 pointer-events-none">
            {/* Eyebrow */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#B59A63]/50" />
              <span className="type-ui text-xs tracking-[0.3em] font-medium uppercase text-[#B59A63]">
                THE RIVERFRONT · EIGHTY-FOUR GHATS
              </span>
              <span className="h-px w-8 bg-[#B59A63]/50" />
            </div>

            {/* Main Title */}
            <h2 className="font-serif text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-normal tracking-tight text-[#FAF6F0] leading-[1.02] drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
              Steps to Eternity
            </h2>

            {/* Devanagari script */}
            <span className="font-serif text-lg sm:text-xl text-[#D4AF37]/90 tracking-widest -mt-2">
              अनंत की सीढ़ियाँ
            </span>

            {/* Narrative Evocation */}
            <p className="mt-2 text-base sm:text-lg md:text-[1.15rem] leading-relaxed text-[#D6CEBE]/85 font-normal max-w-2xl font-serif italic drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
              Along the crescent bend of the Ganga, eighty-four stone ghats
              descend into sacred waters. Here, dawn rituals, burning pyres, and
              evening prayers weave the timeless soul of Kashi.
            </p>

            {/* Interactive Glide-To-Assi Trigger */}
            <div className="pt-4 pointer-events-auto">
              <button
                type="button"
                onClick={() => glideToPanel(1)}
                className="inline-flex items-center gap-3 px-6 sm:px-8 py-3.5 rounded-full border border-[#B59A63]/60 hover:border-[#B59A63] bg-[#181614]/80 hover:bg-[#26231E] text-[#FAF6F0] transition-all duration-300 backdrop-blur-md group/cta shadow-[0_12px_40px_rgba(0,0,0,0.6)] hover:shadow-[0_16px_50px_rgba(181,154,99,0.25)]"
                aria-label="Begin Ghat Journey starting at Assi Ghat"
              >
                <span className="type-ui text-xs sm:text-sm tracking-[0.22em] uppercase font-medium text-[#FAF6F0]">
                  Explore the Ghats · 01 Assi
                </span>
                <svg
                  className="w-4 h-4 text-[#B59A63] transition-transform duration-300 group-hover/cta:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Soft atmospheric right boundary blend into Assi Ghat */}
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0c0c0a]/60 to-transparent pointer-events-none z-10"
          />
        </div>

        {/* =====================================================================
            PANELS 1 TO 8: THE 8 GHATS (One continuous horizontal landscape)
            Assi → Dashashwamedh → Manikarnika → Kedar → Harishchandra → Guleria → Chet Singh → Namo
            ===================================================================== */}
        {ghats.map((ghat, idx) => {
          const panelIndex = idx + 1; // 1 to 8
          // Distance of this panel from the center of the viewport
          const panelDist = Math.abs(progress - panelIndex);
          // Is this panel centered enough to settle its title to the left?
          const isCentered = panelDist < 0.35;

          // Parallax transform calculation for living photograph
          const tiltX = -cursorOffset.y * 1.1;
          const tiltY = cursorOffset.x * 1.3;
          const panX = cursorOffset.x * 6;
          const panY = cursorOffset.y * 4;

          return (
            <div
              key={ghat.id}
              className="relative w-screen h-full flex-shrink-0 overflow-hidden bg-[#0c0c0a]"
            >
              {/* The Hero Photograph with slow breathing & 3D parallax */}
              <div
                className="relative w-full h-full transition-transform duration-500 ease-out"
                style={{
                  transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translate3d(${panX}px, ${panY}px, 0)`,
                }}
              >
                <div
                  className={`w-full h-full transform transition-transform duration-700 ease-out ${styles.livingPhotoBreathing}`}
                >
                  <SafeImage
                    src={ghat.image}
                    alt={ghat.imageAlt}
                    fallbackLabel={ghat.name}
                    fill
                    priority={idx === 0}
                    sizes="100vw"
                    className="object-cover object-center select-none"
                  />
                </div>
              </div>

              {/* Minimal localized bottom scrim strictly for typography legibility */}
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-44 sm:h-56 pointer-events-none bg-gradient-to-t from-[#0c0c0a]/75 via-[#0c0c0a]/20 to-transparent"
              />

              {/* Dynamic Ghat Typography (Physical movement across canvas: Center → Left) */}
              <div
                className="pointer-events-none absolute z-20 transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={
                  !isCentered
                    ? {
                        top: "48%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "90%",
                        textAlign: "center",
                      }
                    : {
                        top: "auto",
                        bottom: "clamp(5.5rem, 11vh, 7.5rem)",
                        left: "clamp(2rem, 6vw, 6rem)",
                        transform: "translate(0, 0)",
                        width: "min(38rem, 85vw)",
                        textAlign: "left",
                      }
                }
              >
                {/* Index, Devanagari & Significance Eyebrow */}
                <div
                  className={`flex flex-wrap items-center gap-2 transition-all duration-700 ease-out ${
                    !isCentered
                      ? "justify-center mb-2 sm:mb-3"
                      : "justify-start mb-1.5"
                  }`}
                >
                  <span className="type-ui text-xs sm:text-sm tracking-[0.2em] font-medium text-[#B59A63]">
                    0{ghat.index}
                  </span>
                  {ghat.devanagariName && (
                    <>
                      <span className="h-3 w-[1px] bg-[#B59A63]/40" />
                      <span className="font-serif text-sm sm:text-base text-[#D4AF37]/90 tracking-wide">
                        {ghat.devanagariName}
                      </span>
                    </>
                  )}
                  {isCentered && ghat.significance && (
                    <>
                      <span className="h-3 w-[1px] bg-white/20 hidden sm:inline" />
                      <span className="type-ui text-[10px] sm:text-[11px] tracking-wider uppercase text-[#D6CEBE]/70 hidden sm:inline">
                        {ghat.significance}
                      </span>
                    </>
                  )}
                </div>

                {/* Ghat Name Title */}
                <h3
                  className={`font-serif tracking-tight text-[#FAF6F0] drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] leading-[1.02] ${
                    !isCentered
                      ? "text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] font-normal"
                      : "text-4xl sm:text-6xl md:text-7xl font-normal"
                  }`}
                >
                  {ghat.name}
                </h3>

                {/* Supporting Information (Reveals once settled on the left) */}
                <div
                  className={`transition-all duration-700 ease-out pt-2 sm:pt-3 flex flex-col gap-2 ${
                    isCentered
                      ? "opacity-100 translate-y-0 pointer-events-auto delay-150"
                      : "opacity-0 translate-y-3 pointer-events-none"
                  }`}
                >
                  {/* Tagline */}
                  <p className="font-serif italic text-sm sm:text-base md:text-lg text-[#E8E1D3]/95 leading-snug drop-shadow-[0_1px_8px_rgba(0,0,0,0.6)]">
                    "{ghat.tagline}"
                  </p>

                  {/* Short, meaningful essence description */}
                  {ghat.description && (
                    <p className="text-xs sm:text-[0.88rem] md:text-[0.92rem] leading-relaxed text-[#D6CEBE]/85 max-w-lg font-normal drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
                      {ghat.description}
                    </p>
                  )}

                  {/* Time of day metadata */}
                  {ghat.timeOfDay && (
                    <div className="flex items-center gap-1.5 pt-0.5 text-[10px] sm:text-[11px] type-ui text-[#D6CEBE]/60 tracking-wider">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B59A63]/80" />
                      <span>{ghat.timeOfDay}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* =========================================================================
          FIXED VIEWPORT OVERLAYS: TOP EDITORIAL BAR (Ghat Counter only)
          ========================================================================= */}
      {!isIntro && currentGhat && (
        <div className="absolute top-0 right-0 z-30 flex items-center justify-end px-6 sm:px-12 md:px-16 pt-7 sm:pt-9 pointer-events-none">
          <div className="flex items-center gap-3 animate-in fade-in duration-500 bg-black/30 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-white/10">
            <span className="type-ui text-xs tracking-widest text-white/50">
              GHAT
            </span>
            <span className="font-serif text-base sm:text-lg text-[#E8E1D3] font-normal tracking-wider">
              {String(currentGhat.index).padStart(2, "0")}
              <span className="text-white/30 text-xs ml-1 font-sans">/ 08</span>
            </span>
          </div>
        </div>
      )}

      {/* =========================================================================
          FIXED VIEWPORT OVERLAYS: LEFT & RIGHT CINEMATIC STEPPERS
          ========================================================================= */}
      {/* Prev Button (Glides back along the continuous canvas) */}
      {progress > 0.15 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goToPrev();
          }}
          aria-label={
            progress < 1.15
              ? "Return to Steps to Eternity Intro"
              : `Previous Ghat: ${ghats[Math.max(0, Math.round(progress) - 2)]?.name ?? "Previous"}`
          }
          className="absolute left-4 sm:left-8 md:left-12 top-1/2 -translate-y-1/2 z-30 flex items-center gap-2 px-3.5 py-3.5 rounded-full bg-black/40 hover:bg-black/80 border border-white/10 hover:border-[#B59A63]/60 text-white/70 hover:text-white transition-all duration-300 backdrop-blur-md group/btn"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:-translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="type-ui text-[11px] tracking-widest uppercase hidden md:inline opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pr-1">
            {progress < 1.15 ? "INTRO" : (ghats[Math.max(0, Math.round(progress) - 2)]?.name.split(" ")[0] ?? "PREV")}
          </span>
        </button>
      )}

      {/* Next Button (Glides forward along the continuous canvas) */}
      {progress < 7.85 && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            goToNext();
          }}
          aria-label={
            isIntro
              ? "Begin Ghat Journey: Assi Ghat"
              : `Next Ghat: ${ghats[Math.min(7, Math.round(progress))]?.name ?? "Next"}`
          }
          className="absolute right-4 sm:right-8 md:right-12 top-1/2 -translate-y-1/2 z-30 flex items-center gap-2 px-3.5 py-3.5 rounded-full bg-black/40 hover:bg-black/80 border border-white/10 hover:border-[#B59A63]/60 text-white/70 hover:text-white transition-all duration-300 backdrop-blur-md group/btn"
        >
          <span className="type-ui text-[11px] tracking-widest uppercase hidden md:inline opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 pl-1">
            {isIntro ? "01 ASSI" : (ghats[Math.min(7, Math.round(progress))]?.name.split(" ")[0] ?? "NEXT")}
          </span>
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}

      {/* =========================================================================
          FIXED VIEWPORT OVERLAYS: BOTTOM WAYFINDER & DUAL NAVIGATION INDICATOR
          ========================================================================= */}
      <div className="absolute bottom-0 inset-x-0 z-30 px-6 sm:px-12 md:px-16 pb-6 sm:pb-8 pt-8 bg-gradient-to-t from-[#0c0c0a]/95 via-[#0c0c0a]/65 to-transparent flex flex-col gap-2.5">
        {/* The 9-Stage Timeline / Wayfinder (Intro + 8 Ghats) */}
        <div className="flex items-center justify-between sm:justify-center gap-1 sm:gap-4 overflow-x-auto no-scrollbar py-1">
          {/* State 0: Intro Tab */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              glideToPanel(0);
            }}
            className={`group/way flex items-center gap-1.5 px-2 py-1.5 rounded transition-all duration-300 ${
              isIntro
                ? "text-[#E8E1D3] font-medium"
                : "text-white/40 hover:text-white/80"
            }`}
            aria-label="Jump to Steps to Eternity Introduction"
            aria-current={isIntro ? "true" : undefined}
          >
            <span
              className={`block transition-all duration-500 rounded-full ${
                isIntro
                  ? "w-5 sm:w-6 h-[2px] bg-[#B59A63]"
                  : "w-2 sm:w-2.5 h-[1.5px] bg-white/20 group-hover/way:bg-white/40"
              }`}
            />
            <span className="type-ui text-[10px] sm:text-[11px] tracking-wider uppercase whitespace-nowrap">
              INTRO
            </span>
          </button>

          {/* States 1–8: The 8 Ghats */}
          {ghats.map((ghat, idx) => {
            const stageNumber = idx + 1;
            const isCurrent = stageNumber === roundedIndex;
            return (
              <button
                key={ghat.id}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  glideToPanel(stageNumber);
                }}
                className={`group/way flex items-center gap-1.5 px-2 py-1.5 rounded transition-all duration-300 ${
                  isCurrent
                    ? "text-[#E8E1D3] font-medium"
                    : "text-white/40 hover:text-white/80"
                }`}
                aria-label={`Jump to Ghat 0${ghat.index}: ${ghat.name}`}
                aria-current={isCurrent ? "true" : undefined}
              >
                <span
                  className={`block transition-all duration-500 rounded-full ${
                    isCurrent
                      ? "w-5 sm:w-6 h-[2px] bg-[#B59A63]"
                      : "w-2 sm:w-2.5 h-[1.5px] bg-white/20 group-hover/way:bg-white/40"
                  }`}
                />
                <span className="type-ui text-[10px] sm:text-[11px] tracking-wider uppercase whitespace-nowrap hidden lg:inline">
                  {ghat.name.split(" ")[0]}
                </span>
                <span className="type-ui text-[10px] tracking-widest font-mono lg:hidden">
                  0{ghat.index}
                </span>
              </button>
            );
          })}
        </div>

        {/* Continuous navigation guide hint */}
        <div className="flex items-center justify-center text-[10px] sm:text-[11px] type-ui text-white/40 tracking-wider px-2 pt-0.5">
          <span className="flex items-center gap-1.5">
            <span className="text-[#B59A63]">↔</span>{" "}
            Drag, swipe or scroll horizontally to travel across the riverfront
          </span>
        </div>
      </div>
    </div>
  );
}
