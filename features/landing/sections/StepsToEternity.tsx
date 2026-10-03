"use client";

import React, { useState, useCallback, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { ghats } from "@/data/ghats";

interface StepConfig {
  ghatId: string;
  index: number;
  topPct: number;
  leftPct: number;
  widthPct: number;
  heightPct: number;
  zIndex: number;
}

/**
 * The 8 steps precisely fitted onto the physical stone staircase of the background image.
 *
 * Stacking Order (Top to Bottom, 08 down to 01):
 * 1. Namo (top step — 08)
 * 2. Chet Singh (07)
 * 3. Guleria (06)
 * 4. Harishchandra (05)
 * 5. Kedar (04)
 * 6. Manikarnika (03)
 * 7. Dashashwamedh (02)
 * 8. Assi (lowest grand step meeting the river — 01)
 */
const STEPS_LAYOUT: StepConfig[] = [
  {
    ghatId: "namo",
    index: 8,
    topPct: 15,
    leftPct: 4.5,
    widthPct: 18,
    heightPct: 6.5,
    zIndex: 18,
  },
  {
    ghatId: "chet-singh",
    index: 7,
    topPct: 22,
    leftPct: 5,
    widthPct: 23,
    heightPct: 7,
    zIndex: 17,
  },
  {
    ghatId: "guleria",
    index: 6,
    topPct: 29.5,
    leftPct: 5.5,
    widthPct: 28,
    heightPct: 7.5,
    zIndex: 16,
  },
  {
    ghatId: "harishchandra",
    index: 5,
    topPct: 37.5,
    leftPct: 6.5,
    widthPct: 35,
    heightPct: 8.5,
    zIndex: 15,
  },
  {
    ghatId: "kedar",
    index: 4,
    topPct: 46.5,
    leftPct: 7.5,
    widthPct: 40,
    heightPct: 9.5,
    zIndex: 14,
  },
  {
    ghatId: "manikarnika",
    index: 3,
    topPct: 56.5,
    leftPct: 8.5,
    widthPct: 46,
    heightPct: 10.5,
    zIndex: 13,
  },
  {
    ghatId: "dashashwamedh",
    index: 2,
    topPct: 67.5,
    leftPct: 9.5,
    widthPct: 54,
    heightPct: 11,
    zIndex: 12,
  },
  {
    ghatId: "assi",
    index: 1,
    topPct: 79,
    leftPct: 10.5,
    widthPct: 62,
    heightPct: 13,
    zIndex: 11,
  },
];

const TOTAL_PANELS = 9; // 0 = Intro + 8 ghats

export function StepsToEternity() {
  const [activePanel, setActivePanel] = useState(0); // 0 = Intro, 1..8 = closest ghat index
  const [hoveredGhatIndex, setHoveredGhatIndex] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Continuous scroll coordinates in pixels
  const targetXRef = useRef(0);
  const currentXRef = useRef(0);
  const maxScrollRef = useRef(0);
  const animFrameRef = useRef<number | null>(null);
  const activePanelRef = useRef(0);

  // Drag interaction state
  const isPointerDownRef = useRef(false);
  const hasMovedRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollXRef = useRef(0);
  const lastPointerXRef = useRef(0);
  const lastPointerTimeRef = useRef(0);
  const velocityRef = useRef(0);

  // Update layout bounds on resize
  useEffect(() => {
    const updateBounds = () => {
      const viewportWidth = window.innerWidth;
      maxScrollRef.current = (TOTAL_PANELS - 1) * viewportWidth;
      targetXRef.current = Math.max(0, Math.min(maxScrollRef.current, targetXRef.current));
      currentXRef.current = Math.max(0, Math.min(maxScrollRef.current, currentXRef.current));
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(-${currentXRef.current}px, 0, 0)`;
      }
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, []);

  // Smooth continuous animation loop with lerp damping
  const startAnimation = useCallback(() => {
    if (animFrameRef.current !== null) return;

    const animate = () => {
      const target = targetXRef.current;
      const current = currentXRef.current;
      const diff = target - current;

      // Snappy response while dragging, silky momentum glide on release or wheel
      const factor = isPointerDownRef.current ? 0.28 : 0.095;
      const next = current + diff * factor;

      if (Math.abs(diff) < 0.2) {
        currentXRef.current = target;
        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(-${target}px, 0, 0)`;
        }
        animFrameRef.current = null;
      } else {
        currentXRef.current = next;
        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(-${next}px, 0, 0)`;
        }
        animFrameRef.current = requestAnimationFrame(animate);
      }

      // Update active indicator if closest panel index changed
      const viewportWidth = window.innerWidth || 1;
      const activeIdx = Math.max(0, Math.min(TOTAL_PANELS - 1, Math.round(currentXRef.current / viewportWidth)));
      if (activeIdx !== activePanelRef.current) {
        activePanelRef.current = activeIdx;
        setActivePanel(activeIdx);
      }

      // Update progress bar smoothly without React state re-render
      const maxScroll = maxScrollRef.current || 1;
      const progress = Math.max(0, Math.min(1, currentXRef.current / maxScroll));
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    animFrameRef.current = requestAnimationFrame(animate);
  }, []);

  // Cleanup animation frame on unmount
  useEffect(() => {
    return () => {
      if (animFrameRef.current !== null) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  // Smoothly scroll to a specific panel (e.g. navigation clicks or CTA)
  const scrollToPanel = useCallback(
    (index: number) => {
      const viewportWidth = window.innerWidth;
      const maxScroll = (TOTAL_PANELS - 1) * viewportWidth;
      const target = Math.max(0, Math.min(maxScroll, index * viewportWidth));
      targetXRef.current = target;
      startAnimation();
    },
    [startAnimation]
  );

  // Wheel handler for continuous smooth horizontal travel
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleWheel = (e: WheelEvent) => {
      const isHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const delta = isHorizontal ? e.deltaX : e.deltaY;
      const maxScroll = maxScrollRef.current;

      const rect = section.getBoundingClientRect();
      const isFullyInView = rect.top <= 40 && rect.bottom >= window.innerHeight - 40;

      // If user is vertical wheel scrolling and the section hasn't locked into the viewport,
      // allow native page scrolling to bring it into view:
      if (!isHorizontal && !isFullyInView) {
        return;
      }

      // Boundary release:
      // At the start (scroll 0) scrolling backward/up -> release to scroll up the page
      if (targetXRef.current <= 0 && delta < 0) {
        return;
      }
      // At the end (maxScroll) scrolling forward/down -> release to scroll down the page
      if (targetXRef.current >= maxScroll && delta > 0) {
        return;
      }

      // Inside the continuous track: intercept wheel and scroll horizontally
      e.preventDefault();

      let scrollDelta = delta;
      if (e.deltaMode === 1) {
        scrollDelta *= 32;
      } else if (e.deltaMode === 2) {
        scrollDelta *= window.innerHeight;
      } else {
        // Multiply slightly for natural mouse wheel travel
        scrollDelta *= 1.15;
      }

      targetXRef.current = Math.max(0, Math.min(maxScroll, targetXRef.current + scrollDelta));
      startAnimation();
    };

    section.addEventListener("wheel", handleWheel, { passive: false });
    return () => section.removeEventListener("wheel", handleWheel);
  }, [startAnimation]);

  // Pointer drag handlers for click-and-drag continuous scrolling
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    // Only primary button
    if (e.button !== 0) return;
    isPointerDownRef.current = true;
    hasMovedRef.current = false;
    dragStartXRef.current = e.clientX;
    dragStartScrollXRef.current = targetXRef.current;
    lastPointerXRef.current = e.clientX;
    lastPointerTimeRef.current = performance.now();
    velocityRef.current = 0;
    setIsDragging(true);
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isPointerDownRef.current) return;
      const diffX = dragStartXRef.current - e.clientX;
      if (Math.abs(diffX) > 4) {
        hasMovedRef.current = true;
      }

      const now = performance.now();
      const dt = now - lastPointerTimeRef.current;
      if (dt > 0) {
        velocityRef.current = (lastPointerXRef.current - e.clientX) / dt;
      }
      lastPointerXRef.current = e.clientX;
      lastPointerTimeRef.current = now;

      const maxScroll = maxScrollRef.current;
      targetXRef.current = Math.max(0, Math.min(maxScroll, dragStartScrollXRef.current + diffX));
      startAnimation();
    },
    [startAnimation]
  );

  const handlePointerUp = useCallback(() => {
    if (!isPointerDownRef.current) return;
    isPointerDownRef.current = false;
    setIsDragging(false);

    // Apply inertia on release
    const momentum = velocityRef.current * 180;
    const maxScroll = maxScrollRef.current;
    targetXRef.current = Math.max(0, Math.min(maxScroll, targetXRef.current + momentum));
    startAnimation();
  }, [startAnimation]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const viewportWidth = window.innerWidth;
      const maxScroll = maxScrollRef.current;
      if (e.key === "ArrowRight") {
        targetXRef.current = Math.min(maxScroll, targetXRef.current + viewportWidth * 0.45);
        startAnimation();
      } else if (e.key === "ArrowLeft") {
        targetXRef.current = Math.max(0, targetXRef.current - viewportWidth * 0.45);
        startAnimation();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [startAnimation]);

  return (
    <section
      id="steps-to-eternity"
      ref={sectionRef}
      aria-label="Steps to Eternity — The Ghats of Kashi"
      className={`relative w-full h-screen min-h-[640px] max-h-[1080px] bg-[#0c0c0a] text-[#FAF6F0] overflow-hidden select-none touch-pan-y ${
        isDragging ? "cursor-grabbing" : "cursor-grab"
      }`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* =========================================================================
          CONTINUOUS HORIZONTAL SCROLL TRACK — 9 panels wide (Intro + 8 Ghats)
          Translates smoothly by exact pixel coordinates without rigid snapping.
          ========================================================================= */}
      <div
        ref={trackRef}
        className="flex flex-row h-full will-change-transform select-none"
        style={{
          width: `${TOTAL_PANELS * 100}vw`,
          transform: "translate3d(0px, 0, 0)",
        }}
      >
        {/* =====================================================================
            PANEL 0: INTRO — Staircase Steps + Editorial Title
            ===================================================================== */}
        <div className="relative w-screen h-full flex-shrink-0 border-r border-white/5">
          <div className="relative w-full h-full">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/landing/steps-to-eternity-bg.jpg"
                alt="Ancient stone steps of Varanasi at sunset along the sacred River Ganga"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center select-none filter brightness-[0.92] contrast-[1.05]"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-28 sm:h-36 bg-gradient-to-b from-[#10100E] via-[#10100E]/70 to-transparent z-10"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#0c0c0a] via-[#0c0c0a]/75 to-transparent z-10"
              />
            </div>

            {/* Interactive Step Panels on the Stone Staircase */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              {STEPS_LAYOUT.map((step) => {
                const ghat = ghats.find((g) => g.id === step.ghatId) || ghats[step.index - 1];
                const isHovered = hoveredGhatIndex === ghat.index;

                return (
                  <div
                    key={ghat.id}
                    onClick={(e) => {
                      if (hasMovedRef.current) return;
                      e.stopPropagation();
                      scrollToPanel(ghat.index);
                    }}
                    onMouseEnter={() => setHoveredGhatIndex(ghat.index)}
                    onMouseLeave={() => setHoveredGhatIndex(null)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Ghat 0${ghat.index}: ${ghat.name} — Click to view`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        scrollToPanel(ghat.index);
                      }
                    }}
                    className="group absolute cursor-pointer pointer-events-auto transition-all duration-350 ease-[cubic-bezier(0.16,1,0.3,1)] focus:outline-none"
                    style={{
                      top: `${step.topPct}%`,
                      left: `${step.leftPct}%`,
                      width: `${step.widthPct}%`,
                      height: `${step.heightPct}%`,
                      zIndex: isHovered ? 50 : step.zIndex,
                      transform: isHovered
                        ? "translate3d(0, -9px, 0) scale(1.018)"
                        : "translate3d(0, 0, 0) scale(1)",
                    }}
                  >
                    <div
                      className="relative w-full h-full overflow-hidden bg-[#161412] transition-all duration-350 shadow-[0_12px_28px_-4px_rgba(0,0,0,0.85),0_4px_12px_rgba(0,0,0,0.7)] group-hover:shadow-[0_24px_48px_-6px_rgba(0,0,0,0.95),0_0_28px_rgba(229,193,120,0.35)] rounded-tr-md"
                      style={{
                        clipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 100%, 0 100%)",
                        WebkitClipPath: "polygon(0 0, calc(100% - 18px) 0, 100% 100%, 0 100%)",
                      }}
                    >
                      <div
                        className={`relative w-full h-full transition-all duration-500 ${
                          isHovered ? "brightness-115 contrast-108" : "brightness-[0.9] contrast-100"
                        }`}
                      >
                        <Image
                          src={ghat.image}
                          alt={ghat.imageAlt}
                          fill
                          priority={step.index <= 2 || step.index === 8}
                          sizes="(max-width: 1024px) 70vw, 55vw"
                          className="object-cover object-center select-none"
                        />
                      </div>

                      {/* Top Bevel Highlight */}
                      <div
                        aria-hidden="true"
                        className={`absolute top-0 inset-x-0 h-[1.5px] transition-opacity duration-300 z-20 pointer-events-none ${
                          isHovered
                            ? "bg-gradient-to-r from-[#D4AF37] via-[#FFF3D1] to-[#B59A63] opacity-100 shadow-[0_0_12px_#F3E5AB]"
                            : "bg-gradient-to-r from-[#C5A059]/90 via-[#E5C178]/70 to-[#9E824C]/40 opacity-80"
                        }`}
                      />

                      {/* Right Edge Highlight */}
                      <div
                        aria-hidden="true"
                        className="absolute top-0 right-0 w-[2.5px] h-full bg-gradient-to-b from-[#FFF3D1] via-[#E5C178]/70 to-transparent opacity-75 z-20 pointer-events-none"
                      />

                      {/* Vignette */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent pointer-events-none z-10"
                      />

                      {/* Ghat Badge */}
                      <div className="absolute left-2.5 sm:left-3.5 top-1/2 -translate-y-1/2 z-20 flex items-center gap-1.5 pointer-events-none">
                        <span
                          className={`type-ui text-[9px] sm:text-[10px] font-mono tracking-widest px-1.5 py-0.5 rounded transition-colors duration-300 ${
                            isHovered
                              ? "bg-[#B59A63] text-black font-bold"
                              : "bg-black/65 text-[#E8E1D3] border border-white/10"
                          }`}
                        >
                          0{ghat.index}
                        </span>
                        <span className="type-ui text-[10px] sm:text-[11px] tracking-wider uppercase font-medium text-[#FAF6F0] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] opacity-85 group-hover:opacity-100 transition-opacity hidden md:inline">
                          {ghat.name}
                        </span>
                      </div>

                      {/* Bottom Hover Glow */}
                      <div
                        aria-hidden="true"
                        className={`absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-[#B59A63]/80 via-[#F3E5AB]/60 to-transparent transition-opacity duration-300 z-20 pointer-events-none ${
                          isHovered ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right-side Editorial Content */}
            <div
              className="absolute z-20 flex flex-col justify-start items-start text-left pointer-events-auto"
              style={{
                top: "14%",
                left: "67%",
                right: "5%",
                maxWidth: "460px",
              }}
            >
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] xl:text-[5.5rem] font-normal tracking-tight text-[#FAF6F0] leading-[0.98] drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
                Steps to <br />
                <span className="text-[#C5A059] bg-gradient-to-r from-[#F3E5AB] via-[#E5C178] to-[#B59A63] bg-clip-text text-transparent [text-shadow:0_0_35px_rgba(212,175,55,0.25)]">
                  Eternity
                </span>
              </h2>

              <span
                className="font-serif text-lg sm:text-xl lg:text-2xl text-[#E09F3E] tracking-widest block font-medium mt-2 sm:mt-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
                style={{ fontFamily: "'Noto Serif Devanagari', 'Rozha One', serif" }}
              >
                अनंत की सीढ़ियाँ
              </span>

              <p className="mt-4 sm:mt-5 text-xs sm:text-sm md:text-[0.95rem] lg:text-[1rem] leading-relaxed text-[#D6CEBE]/85 font-normal max-w-sm lg:max-w-md font-serif italic drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
                Along the crescent bend of the Ganga, eighty-four stone ghats
                descend into sacred waters. Here, dawn rituals, burning pyres, and
                evening prayers weave the timeless soul of Kashi.
              </p>

              <div className="mt-6 sm:mt-8">
                <button
                  type="button"
                  onClick={(e) => {
                    if (hasMovedRef.current) return;
                    e.stopPropagation();
                    scrollToPanel(1);
                  }}
                  className="group/cta inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border border-[#B59A63]/60 hover:border-[#F3E5AB] bg-[#141210]/80 hover:bg-[#201D18] text-[#FAF6F0] transition-all duration-300 backdrop-blur-md shadow-[0_12px_40px_rgba(0,0,0,0.8)] hover:shadow-[0_16px_50px_rgba(181,154,99,0.3)]"
                  aria-label="Begin exploring the Ghats"
                >
                  <span className="type-ui text-xs sm:text-[13px] tracking-[0.22em] uppercase font-medium text-[#FAF6F0]">
                    BEGIN THE JOURNEY →
                  </span>
                  <ArrowRight
                    size={15}
                    strokeWidth={1.75}
                    className="text-[#B59A63] transition-transform duration-300 group-hover/cta:translate-x-1"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================================
            PANELS 1–8: INDIVIDUAL GHAT PANELS
            ===================================================================== */}
        {ghats.map((ghat) => (
          <div
            key={ghat.id}
            className="relative w-screen h-full flex-shrink-0 border-r border-white/5"
          >
            <div className="relative w-full h-full">
              {/* Full-bleed Photograph without overlays */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={ghat.image}
                  alt={ghat.imageAlt}
                  fill
                  sizes="100vw"
                  className="object-cover object-center select-none"
                  priority={ghat.index <= 2}
                />
              </div>

              {/* Ghat Editorial Content */}
              <div className="relative z-20 flex flex-col justify-center h-full px-8 sm:px-16 md:px-24 lg:px-32 max-w-4xl">
                {/* Ghat Name */}
                <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-[#FAF6F0] leading-none tracking-tight drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
                  {ghat.name}
                </h2>

                {/* Devanagari */}
                {ghat.devanagariName && (
                  <span
                    className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#E09F3E] tracking-widest block mt-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
                    style={{ fontFamily: "'Noto Serif Devanagari', 'Rozha One', serif" }}
                  >
                    {ghat.devanagariName}
                  </span>
                )}

                {/* Description */}
                <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-[#D6CEBE]/85 font-light leading-relaxed max-w-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
                  {ghat.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>



      {/* =======================================================================
          BOTTOM INDEX NAVIGATION BAR (persists across all panels)
          Includes continuous progress rail and interactive panel tabs.
          ======================================================================= */}
      <div
        className="absolute inset-x-0 z-30 flex flex-col items-center gap-2 px-4 pointer-events-auto"
        style={{ bottom: "2.5%" }}
      >
        {/* Continuous Horizontal Scroll Progress Rail */}
        <div className="w-48 sm:w-64 md:w-80 h-[2px] bg-white/10 rounded-full overflow-hidden mb-1 relative">
          <div
            ref={progressBarRef}
            className="h-full bg-gradient-to-r from-[#B59A63] via-[#F3E5AB] to-[#D4AF37] rounded-full transition-transform duration-75 origin-left"
            style={{
              width: "100%",
              transform: "scaleX(0)",
            }}
          />
        </div>

        {/* Horizontal Ghats Index */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-3 md:gap-5 overflow-x-auto no-scrollbar py-1 max-w-full px-2">
          {/* INTRO Tab */}
          <button
            type="button"
            onClick={() => scrollToPanel(0)}
            className={`group/way flex items-center gap-1.5 px-2 py-0.5 rounded transition-all duration-300 ${
              activePanel === 0
                ? "text-[#FAF6F0] font-medium"
                : "text-white/40 hover:text-white/80"
            }`}
            aria-label="View Steps to Eternity overview"
            aria-current={activePanel === 0 ? "true" : undefined}
          >
            <span
              className={`block transition-all duration-500 rounded-full ${
                activePanel === 0
                  ? "w-4 sm:w-5 h-[2px] bg-[#B59A63]"
                  : "w-2 h-[1.5px] bg-white/20 group-hover/way:bg-white/40"
              }`}
            />
            <span className="type-ui text-[9px] sm:text-[10.5px] tracking-wider uppercase whitespace-nowrap">
              INTRO
            </span>
          </button>

          {/* The 8 Ghats */}
          {ghats.map((ghat) => {
            const isSelected = activePanel === ghat.index;
            return (
              <React.Fragment key={ghat.id}>
                <span className="text-white/20 text-xs select-none hidden sm:inline">—</span>
                <button
                  type="button"
                  onClick={() => scrollToPanel(ghat.index)}
                  className={`group/way flex items-center gap-1.5 px-1 sm:px-2 py-0.5 rounded transition-all duration-300 ${
                    isSelected
                      ? "text-[#FAF6F0] font-medium"
                      : "text-white/40 hover:text-white/80"
                  }`}
                  aria-label={`Go to Ghat 0${ghat.index}: ${ghat.name}`}
                  aria-current={isSelected ? "true" : undefined}
                >
                  <span
                    className={`block transition-all duration-500 rounded-full ${
                      isSelected
                        ? "w-3 sm:w-4 h-[2px] bg-[#B59A63]"
                        : "w-0 h-[1.5px] bg-transparent"
                    }`}
                  />
                  <span className="type-ui text-[9px] sm:text-[10.5px] tracking-wider uppercase whitespace-nowrap hidden md:inline">
                    {ghat.name.split(" ")[0]}
                  </span>
                  <span className="type-ui text-[9px] tracking-widest font-mono md:hidden">
                    0{ghat.index}
                  </span>
                </button>
              </React.Fragment>
            );
          })}
        </div>

        {/* Travel Hint */}
        <div className="text-[9.5px] sm:text-[10.5px] type-ui text-white/40 tracking-wider flex items-center gap-1.5">
          <span className="text-[#B59A63]">⤹</span>
          <span>Drag or scroll smoothly to travel continuously across the riverfront</span>
        </div>
      </div>
    </section>
  );
}
