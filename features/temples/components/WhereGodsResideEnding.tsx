import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ROUTES } from "@/lib/routes";
import { markInfiniteDoorCompleted } from "@/lib/doorState";

/**
 * Where Gods Reside — Quiet Cinematic Conclusion.
 *
 * Requirements:
 * Text:
 * EIGHT TEMPLES.
 * ONE ETERNAL CITY.
 *
 * Then provide:
 * ← BACK TO KASHI
 *
 * Keep the ending minimal.
 */
export function WhereGodsResideEnding() {
  return (
    <section
      id="conclusion"
      aria-label="Chapter Conclusion"
      className="relative min-h-[70vh] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-24 sm:py-32 bg-[#10100E] border-t border-[#E8E1D3]/10 overflow-hidden"
    >
      {/* Subtle architectural ambient illumination */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-25"
      >
        <div className="w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(181,154,99,0.15)_0%,transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        {/* Subtle decorative motif */}
        <div className="w-12 h-px bg-gradient-to-r from-transparent via-[#B59A63]/60 to-transparent mb-10" />

        {/* Text: EIGHT DOORWAYS. ONE ETERNAL CITY. */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight text-[#E8E1D3] leading-[1.1] mb-2">
          Eight Doorways.
        </h2>
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold uppercase tracking-tight text-[#B59A63] leading-[1.1] mb-12 sm:mb-16">
          One Eternal City.
        </h2>

        {/* Ending Link: ← BACK TO KASHI */}
        <Link
          href={`${ROUTES.kashi}#where-gods-reside`}
          onClick={() => markInfiniteDoorCompleted()}
          className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-[2px] bg-[#191816] hover:bg-[#25221C] border border-[#E8E1D3]/20 hover:border-[#B59A63] text-sm sm:text-base font-ui uppercase tracking-[0.25em] text-[#E8E1D3] transition-all duration-300 shadow-lg focus:outline-none focus:ring-1 focus:ring-[#B59A63]"
        >
          <ArrowLeft
            size={18}
            strokeWidth={1.5}
            className="text-[#B59A63] transition-transform duration-300 group-hover:-translate-x-1.5"
          />
          <span>Back to Kashi</span>
        </Link>
      </div>
    </section>
  );
}
