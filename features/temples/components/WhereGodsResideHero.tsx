"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

interface WhereGodsResideHeroProps {
  onEnter?: () => void;
}

/**
 * Where Gods Reside — The Sacred Threshold (Opening Chamber).
 *
 * Requirements:
 * - A SACRED THRESHOLD: Moving from the public riverfront into the intimate spiritual interior.
 * - ASYMMETRIC COMPOSITION:
 *   Architectural void + Dramatically oversized staggered typography + One vertical photographic aperture.
 * - ZERO TEMPLE NAMES / NO BADGES / NO SPOILERS:
 *   The user does not know which temples await. Discovery is preserved.
 * - Exact Supporting Line: "Every temple here is a doorway to the divine."
 * - Minimal Entry Trigger: "STEP INSIDE →"
 */
export function WhereGodsResideHero({ onEnter }: WhereGodsResideHeroProps) {
  const [isApertureHovered, setIsApertureHovered] = useState(false);

  const handleStepInside = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onEnter) {
      onEnter();
    } else {
      const firstTemple = document.getElementById("temple-01");
      if (firstTemple) {
        firstTemple.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="threshold"
      aria-label="The Sacred Threshold"
      className="relative min-h-screen w-full flex items-center justify-center bg-[#0A0908] text-[#E8E1D3] px-6 sm:px-10 lg:px-16 pt-24 pb-16 overflow-hidden"
    >
      {/* Deep atmospheric ambient glow behind the aperture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(181,154,99,0.12)_0%,transparent_70%)] blur-3xl opacity-70"
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT: Asymmetric Architectural Typography & Statement */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Sacred Chapter Marker */}
            <div className="flex items-center gap-3 mb-8 sm:mb-12">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B59A63]" />
              <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] font-ui text-[#8E887D]">
                The Threshold
              </span>
            </div>

            {/* Dramatically Oversized Asymmetric Title */}
            <h1 className="font-display font-bold uppercase tracking-tight text-[#E8E1D3] leading-[0.92] select-none text-[3.5rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.25rem] xl:text-[8rem]">
              <span className="block">Where</span>
              <span className="block pl-10 sm:pl-20 md:pl-28 text-[#CFC4B1]">
                Gods
              </span>
              <span className="block pl-20 sm:pl-40 md:pl-56 text-[#B59A63]">
                Reside
              </span>
            </h1>

            {/* Exact Locked Supporting Statement */}
            <div className="mt-10 sm:mt-14 md:mt-16 pl-3 sm:pl-5 border-l border-[#B59A63]/50">
              <p className="text-xl sm:text-2xl md:text-3xl font-editorial italic text-[#FAF6F0] leading-snug max-w-xl text-balance">
                “Every temple here is a doorway to the divine.”
              </p>
            </div>

            {/* Entry Action Trigger */}
            <div className="mt-12 sm:mt-16 md:mt-20">
              <button
                type="button"
                onClick={handleStepInside}
                onMouseEnter={() => setIsApertureHovered(true)}
                onMouseLeave={() => setIsApertureHovered(false)}
                className="group relative inline-flex items-center gap-4 px-8 sm:px-10 py-4 sm:py-5 rounded-[2px] bg-[#141311] hover:bg-[#1E1C18] border border-[#E8E1D3]/20 hover:border-[#B59A63] text-sm sm:text-base font-ui uppercase tracking-[0.3em] text-[#E8E1D3] hover:text-[#FAF6F0] transition-all duration-500 shadow-2xl focus:outline-none focus:ring-1 focus:ring-[#B59A63]"
              >
                <span>Step Inside</span>
                <ArrowDown
                  size={18}
                  strokeWidth={1.5}
                  className="text-[#B59A63] transition-transform duration-500 group-hover:translate-y-1.5"
                />
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-[#B59A63]/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                />
              </button>
            </div>
          </div>

          {/* RIGHT: The Vertical Photographic Aperture */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <button
              type="button"
              onClick={handleStepInside}
              onMouseEnter={() => setIsApertureHovered(true)}
              onMouseLeave={() => setIsApertureHovered(false)}
              aria-label="Step inside to begin the sacred temple journey"
              className="group relative w-full max-w-[340px] sm:max-w-[400px] aspect-[2/3] rounded-[2px] overflow-hidden border border-[#E8E1D3]/15 shadow-[0_30px_90px_rgba(0,0,0,0.85)] bg-[#12110F] cursor-pointer text-left focus:outline-none focus:ring-1 focus:ring-[#B59A63]"
            >
              {/* Architectural Corner Markings */}
              <div className="pointer-events-none absolute top-3 left-3 w-3 h-3 border-t border-l border-[#B59A63]/60 z-20" />
              <div className="pointer-events-none absolute top-3 right-3 w-3 h-3 border-t border-r border-[#B59A63]/60 z-20" />
              <div className="pointer-events-none absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#B59A63]/60 z-20" />
              <div className="pointer-events-none absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#B59A63]/60 z-20" />

              {/* The Atmospheric Aperture Photograph */}
              <div
                className={`relative w-full h-full transition-transform duration-1000 ease-out ${
                  isApertureHovered ? "scale-[1.04]" : "scale-100"
                }`}
              >
                <Image
                  src="/images/temples/threshold-aperture.jpg"
                  alt="Atmospheric stone doorway bathed in quiet shadows and lantern glow"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-center select-none"
                />
              </div>

              {/* Shadow vignette framing the portal */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0A0908] via-transparent to-[#0A0908]/40" />

              {/* Quiet Minimal Caption at the Base */}
              <div className="absolute inset-x-0 bottom-0 p-5 flex items-center justify-between text-[10px] sm:text-[11px] uppercase tracking-[0.25em] font-ui text-[#CFC4B1]/80 backdrop-blur-sm bg-[#0A0908]/60 border-t border-[#E8E1D3]/10">
                <span>The Sacred Interior</span>
                <span className="text-[#B59A63] font-mono group-hover:translate-y-0.5 transition-transform">
                  Enter ↓
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
