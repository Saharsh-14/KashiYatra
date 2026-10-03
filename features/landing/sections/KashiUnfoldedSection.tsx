"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/routes";

interface FadingStardust {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  speed: number;
  offset: number;
  color: string;
}

/**
 * Kashi Unfolded — The Ceremonial Discovery Pass.
 *
 * Full-screen Atmospheric Composition:
 * - Covers the ENTIRE viewport screen seamlessly with deep archival darkness (#060504).
 * - ZERO white bottom haze washing out the section — dark atmosphere extends to the screen edge.
 * - ZERO overlapping duplicate ghost images:
 *   - Background map is clean procedural cartography (no baked-in text or ticket).
 *   - Lower-left ghat fragment is strictly pure water, boats, and temples (no text, no ticket).
 *   - Foreground ticket and typography are crisp, isolated, and cleanly composed.
 * - Entire ticket is clickable, routing to /unfolded.
 */
export function KashiUnfoldedSection() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const ticketRef = useRef<HTMLDivElement>(null);
  const stardustCanvasRef = useRef<HTMLCanvasElement>(null);

  // Parallax & 3D tilt state
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  // Smooth mouse move handler for subtle 3D tilt and midground parallax
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMousePos({ x, y });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  }, []);

  // Click handler: initiates smooth cinematic transition into /unfolded
  const handleTicketClick = useCallback(() => {
    if (isEntering) return;
    setIsEntering(true);
    setTimeout(() => {
      router.push(ROUTES.unfolded);
    }, 450);
  }, [isEntering, router]);

  // Keyboard navigation for accessibility
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleTicketClick();
      }
    },
    [handleTicketClick]
  );

  // Subtle 3D tilt angles (restrained: max ~3.5 degrees for natural tactile feel)
  const tiltX = isHovered ? -mousePos.y * 3.5 : 0;
  const tiltY = isHovered ? mousePos.x * 4.2 : 0;
  // Dynamic shadow offset matching the cursor angle
  const shadowX = -mousePos.x * 10;
  const shadowY = 22 + -mousePos.y * 8;

  // Layer 1: Procedural fading cosmic stardust in the top transition runway
  useEffect(() => {
    const canvas = stardustCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    const height = 240;

    const resize = () => {
      if (!canvas.parentElement) return;
      width = canvas.parentElement.clientWidth;
      canvas.width = width;
      canvas.height = height;
    };
    resize();
    window.addEventListener("resize", resize);

    // Generate ~50 delicate stardust particles that disperse downward
    const stars: FadingStardust[] = [];
    for (let i = 0; i < 50; i++) {
      const yNorm = Math.pow(Math.random(), 1.45);
      const y = yNorm * 200;
      stars.push({
        x: Math.random() * (width || 1400),
        y,
        size: Math.random() < 0.85 ? Math.random() * 0.85 + 0.35 : Math.random() * 1.4 + 0.7,
        baseAlpha: Math.random() * 0.5 + 0.2,
        speed: Math.random() * 0.0018 + 0.0008,
        offset: Math.random() * Math.PI * 2,
        color:
          Math.random() < 0.65
            ? "rgba(255, 246, 230," // warm starlight
            : "rgba(205, 232, 255,", // pale celestial ice
      });
    }

    let startTime = performance.now();
    const render = (now: number) => {
      const elapsed = now - startTime;
      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        const fadeOut = Math.pow(Math.max(0, 1 - s.y / 200), 1.8);
        if (fadeOut <= 0.001) continue;

        const twinkle = 0.68 + 0.32 * Math.sin(elapsed * s.speed + s.offset);
        const alpha = s.baseAlpha * twinkle * fadeOut;

        ctx.fillStyle = `${s.color}${alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="unfolded"
      aria-label="Kashi Unfolded — The Ceremonial Discovery Pass"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      /*
       * Clean Full-Screen Viewport Coverage:
       * - min-h-screen flex flex-col justify-center covers the ENTIRE viewport screen.
       * - bg-[#060504] deep archival darkness extending all the way down to the screen edge.
       * - ZERO white bottom haze washing out the section.
       * - mt-0, z-10: clean sequential flow directly after Where Gods Reside with zero overlap.
       */
      className="relative w-full z-10 min-h-screen lg:h-screen flex flex-col justify-center bg-[#060504] text-[#FAF6F0] overflow-hidden select-none py-12 sm:py-16 lg:py-0"
    >
      {/* 
        ========================================================================
        LAYER 1: ATMOSPHERE & COSMIC HAND-OFF
        ========================================================================
      */}
      {/* 
        Top Atmospheric Transition Bridge:
        Starts with #0c0c0a (matching the ending tone of Where Gods Reside),
        gently dissolving over the top into #060504.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28 sm:h-36 bg-gradient-to-b from-[#0c0c0a] to-transparent z-10"
      />

      {/* Ambient fading cosmic stardust canvas: particles dissolve downward into darkness */}
      <canvas
        ref={stardustCanvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[240px] w-full z-15"
      />

      {/* Subtle physical parchment texture/grain */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.035] mix-blend-overlay bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Cinematic Transition Overlay (fades dark upon ticket click) */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-30 bg-[#060504] transition-opacity duration-500 ease-in-out ${isEntering ? "opacity-90" : "opacity-0"
          }`}
      />

      {/* 
        ========================================================================
        LAYER 2: UNIFIED CINEMATIC BACKGROUND
        - Seamlessly blends the antique golden Varanasi street map and sacred twilight ghats
        - Covers the ENTIRE screen from edge to edge (100% width, 100% height)
        - ZERO overlapping image collages, ZERO duplicate ghost text, ZERO ticket stubs
        - ZERO white haze or bottom washout — deep dark archival parchment throughout
        ========================================================================
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-5 overflow-hidden transition-transform duration-700 ease-out"
        style={{
          transform: `scale(1.05) translate3d(${mousePos.x * -8}px, ${mousePos.y * -8}px, 0)`,
        }}
      >
        <Image
          src="/images/landing/kashi-unfolded-unified-bg.jpg"
          alt="Ancient Varanasi Cartographic Map and Sacred Riverfront"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.82] contrast-[1.02]"
        />

        {/* Ambient warm golden glow centered behind the ticket pass */}
        <div className="absolute right-[12%] top-[50%] h-[500px] w-[640px] -translate-y-1/2 rounded-full bg-[#B59A63]/12 blur-[130px]" />

        {/* Soft edge vignette framing the screen organically without hard borders */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(6,5,4,0.4)_78%,rgba(6,5,4,0.92)_100%)]" />
      </div>

      {/* 
        ========================================================================
        LAYER 3: FOREGROUND (Editorial Typography + Hero Ceremonial Pass)
        ========================================================================
      */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-14 xl:gap-18">

        {/* LEFT COLUMN: Editorial Typography */}
        <div className="w-full lg:w-5/12 xl:w-5/12 flex flex-col items-start text-left z-30">
          {/* Eyebrow Label */}
          <span className="font-ui text-xs font-semibold uppercase tracking-[0.35em] text-[#C59B4E] mb-3 sm:mb-4">
            KASHI
          </span>

          {/* Main Title: Ivory white + Muted Antique Gold */}
          <h2 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-bold tracking-tight leading-[0.92]">
            <span className="text-[#FAF6F0] block drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
              KASHI
            </span>
            <span className="text-[#C59B4E] block mt-1.5 sm:mt-2 [text-shadow:0_0_30px_rgba(197,155,78,0.3)]">
              UNFOLDED
            </span>
          </h2>

          {/* Editorial Tagline */}
          <p className="font-serif italic text-lg sm:text-xl lg:text-2xl text-[#CFC4B1]/90 mt-4 sm:mt-6 leading-snug max-w-md drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            “The city, collected in fragments.”
          </p>

          {/* Discovery Cue: Ceremonial Pass Tap to Enter */}
          <button
            type="button"
            onClick={handleTicketClick}
            className="mt-8 sm:mt-10 inline-flex items-center gap-2.5 py-2 px-3.5 rounded-full bg-[#12100E]/70 border border-[#B59A63]/30 backdrop-blur-sm shadow-xl hover:border-[#B59A63]/60 hover:bg-[#1a1714]/80 transition-all duration-200 cursor-pointer text-left"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C59B4E] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C59B4E]" />
            </span>
            <span className="font-ui text-[11px] uppercase tracking-[0.25em] text-[#E8E1D3]">
              CEREMONIAL PASS · TAP TO ENTER →
            </span>
          </button>
        </div>

        {/* RIGHT COLUMN: The Large Antique Ceremonial Ticket Artifact */}
        <div className="w-full lg:w-7/12 xl:w-7/12 flex items-center justify-center lg:justify-end xl:pl-6 z-30 perspective-[1400px]">

          {/* 
            THE ENTIRE TICKET OBJECT (Sole Clickable Trigger)
            - 3D perspective rotation
            - Subtly angled at -15.5deg to match reference
            - Subtle natural drop shadow
            - Refined hover lift and slight brightness boost
            - Expand & zoom on click transition
          */}
          <div
            ref={ticketRef}
            role="button"
            tabIndex={0}
            onClick={handleTicketClick}
            onKeyDown={handleKeyDown}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Ceremonial Kashi Unfolded Pass — Click anywhere to enter Kashi Unfolded"
            className={`group relative cursor-pointer outline-none select-none ${isEntering ? "scale-105" : ""
              }`}
            style={{
              transform: `
                perspective(1200px)
                rotate(-15.5deg)
                rotateX(${tiltX}deg)
                rotateY(${tiltY}deg)
                scale(${isEntering ? 1.05 : isHovered ? 1.018 : 1})
                translateZ(${isEntering ? 60 : isHovered ? 15 : 0}px)
              `,
              transition: isEntering
                ? "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), filter 0.45s ease"
                : isHovered
                  ? "transform 0.15s ease-out, filter 0.25s ease"
                  : "transform 0.6s ease-out, filter 0.6s ease",
            }}
          >
            {/* Gentle Floating Motion Wrapper */}
            <div className="animate-ticket-float">

              {/* Ticket Graphic with Distressed Torn Edges & Tactile Drop Shadow */}
              <div
                className="relative w-[320px] sm:w-[480px] md:w-[560px] lg:w-[640px] xl:w-[700px] aspect-[960/536] transition-all duration-300"
                style={{
                  filter: `
                    drop-shadow(${shadowX}px ${shadowY}px 32px rgba(0, 0, 0, 0.85))
                    drop-shadow(0 8px 24px rgba(197, 155, 78, ${isHovered ? 0.16 : 0.05}))
                    brightness(${isHovered ? 1.04 : 1})
                  `,
                }}
              >
                <Image
                  src="/images/landing/kashi-ticket-artifact@2x.png"
                  alt="Kashi Unfolded Antique Ceremonial Travel Ticket"
                  fill
                  priority
                  sizes="(min-width: 1280px) 700px, (min-width: 1024px) 640px, (min-width: 768px) 560px, 320px"
                  className="object-contain pointer-events-none select-none"
                  draggable={false}
                />

                {/* Subtle Specular Sheen sweep across the antique paper surface on hover */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-tr from-transparent via-[#F7E7CE]/12 to-transparent opacity-0 mix-blend-screen transition-opacity duration-700 ${isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  style={{
                    transform: `translate(${mousePos.x * 15}px, ${mousePos.y * 15}px)`,
                  }}
                />

                {/* Natural warm paper aura */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute -inset-2 rounded-2xl bg-[#B59A63]/8 blur-xl transition-opacity duration-500 ${isHovered ? "opacity-100" : "opacity-0"
                    }`}
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Scoped Keyframes for subtle organic ticket floating movement */}
      <style jsx global>{`
        @keyframes ticketFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-8px) rotate(0.35deg);
          }
        }
        .animate-ticket-float {
          animation: ticketFloat 6.8s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
