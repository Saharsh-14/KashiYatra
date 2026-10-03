import React from "react";
import Image from "next/image";
import { KashiWordInteract } from "../components/KashiWordInteract";

/**
 * Editorial Master Hero — KASHI: A City Beyond Time.
 *
 * Targeted refinement:
 * - 'K' of KASHI placed below the left temple structure via precision cutout mask (/images/hero/left-temple-cutout.png)
 * - Zero overlays over the rest of KASHI (ASHI / शी), keeping the sky completely clean.
 * - Everything else strictly preserved.
 */
export function LandingHero() {
  return (
    <section
      id="hero"
      aria-label="Kashi — A City Beyond Time"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#10100E] text-[#FAF6F0]"
    >
      {/* =========================================================================
          LAYER 1 (z-0): Clean Master Background Ganga Photography
          ========================================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/images/hero/ganga-hero.jpg"
          alt="Ancient stone ghats and temple spires of Varanasi along the sacred Ganga at dusk and dawn"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_32%] sm:object-[center_35%] scale-[1.01] transition-transform duration-1000 ease-out"
        />

        {/* Soft top atmospheric contrast for header & sky */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[32%] bg-gradient-to-b from-[#10100E]/40 via-[#10100E]/10 to-transparent pointer-events-none"
        />

        {/* Deep photographic vignette over river water for crystalline legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[58%] sm:h-[50%] bg-gradient-to-t from-[#10100E]/90 via-[#10100E]/50 to-transparent pointer-events-none"
        />
      </div>

      {/* =========================================================================
          LAYER 2 (z-10): Interactive Monumental Typography (KASHI ──> काशी)
          ========================================================================= */}
      <div
        className="absolute inset-x-0 top-[13vh] sm:top-[15vh] md:top-[14vh] lg:top-[13vh] z-10 flex justify-center px-4"
      >
        <KashiWordInteract />
      </div>

      {/* =========================================================================
          LAYER 3 (z-[15]): Clean Precision Temple Overlap for 'K'
          Overlaps the left portion of 'K' while keeping top-left and rest of sky 100% clean
          ========================================================================= */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-[15] pointer-events-none select-none"
      >
        <Image
          src="/images/hero/k-temple-overlap.png"
          alt=""
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-[center_32%] sm:object-[center_35%] scale-[1.01] transition-transform duration-1000 ease-out"
        />
      </div>

      {/* =========================================================================
          LAYER 4 (z-20): Foreground Editorial UI (Header + Headline + Metadata)
          ========================================================================= */}
      <div className="relative z-20 flex flex-col justify-between flex-1 w-full max-w-[1680px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16 pt-6 sm:pt-8 md:pt-9 pb-8 sm:pb-10 md:pb-12 pointer-events-none">
        {/* Top Editorial Bar */}
        <header className="reveal-fade flex w-full items-center justify-end pointer-events-auto">
          <span
            aria-hidden="true"
            className="font-serif text-sm sm:text-base font-semibold text-[#E8E1D3]/85 select-none tracking-widest"
          >
            N
          </span>
        </header>

        {/* Bottom Editorial Content Block - Bottom-Left Position */}
        <footer className="w-full mt-auto pt-20 sm:pt-28 md:pt-36 pointer-events-auto flex flex-col items-start text-left">
          <div className="max-w-xl lg:max-w-2xl text-left">
            {/* Secondary Headline */}
            <h2 className="reveal-rise reveal-step-2 font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] font-normal leading-[1.05] tracking-tight text-[#FAF6F0] drop-shadow-[0_2px_16px_rgba(0,0,0,0.6)]">
              A City Beyond Time
            </h2>

            {/* Narrative Body Block */}
            <p className="reveal-rise reveal-step-3 mt-4 sm:mt-5 text-base sm:text-lg md:text-[1.15rem] leading-relaxed text-[#D6CEBE]/95 font-normal max-w-xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
              Some cities are visited. This one is entered — through its river,
              its steps, its lanes and its kitchens, in the order the city
              suggests rather than the order a guidebook would.
            </p>

            {/* Location Metadata directly below the paragraph in bottom-left */}
            <div className="reveal-rise reveal-step-4 mt-7 sm:mt-8 flex items-center">
              <span className="type-ui text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#D6CEBE]/80">
                Varanasi · Uttar Pradesh
              </span>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
