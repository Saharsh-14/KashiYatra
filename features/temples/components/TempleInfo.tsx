import React from "react";
import type { Temple } from "@/types/content";

interface TempleInfoProps {
  temple: Temple;
  totalTemples?: number;
}

/**
 * Temple Information Side.
 *
 * Requirements:
 * - Temple Number: 01 / 08
 * - Temple Name: Large and prominent (e.g. KASHI VISHWANATH)
 * - Short Descriptor: (e.g. The heart of Kashi.)
 * - Short Description: 2–4 concise sentences explaining significance.
 * - Concise, editorial, refined, minimal.
 */
export function TempleInfo({
  temple,
  totalTemples = 8,
}: TempleInfoProps) {
  const formattedIndex = String(temple.index).padStart(2, "0");
  const formattedTotal = String(totalTemples).padStart(2, "0");

  return (
    <div className="flex flex-col justify-center max-w-xl">
      {/* Temple Journey Number Counter */}
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-ui text-[#B59A63] font-semibold">
          Temple
        </span>
        <div className="inline-flex items-center px-2.5 py-0.5 rounded-[2px] bg-[#191816] border border-[#E8E1D3]/15 font-mono text-xs sm:text-sm tracking-wider text-[#E8E1D3]">
          <span className="text-[#B59A63] font-medium">{formattedIndex}</span>
          <span className="mx-1.5 text-[#8E887D]/50">/</span>
          <span className="text-[#8E887D]">{formattedTotal}</span>
        </div>

        {/* Devanagari touch if present */}
        {temple.devanagariName && (
          <span
            aria-hidden="true"
            className="text-xs sm:text-sm font-serif text-[#8E887D]/80 ml-auto select-none"
          >
            {temple.devanagariName}
          </span>
        )}
      </div>

      {/* Temple Name — Large & Prominent */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-display font-bold uppercase tracking-tight text-[#E8E1D3] leading-[1.08] mb-3 sm:mb-4 text-balance">
        {temple.name}
      </h2>

      {/* Short Descriptor */}
      <p className="text-base sm:text-lg md:text-xl font-editorial italic text-[#B59A63] mb-4 sm:mb-6 leading-snug">
        {temple.descriptor}
      </p>

      {/* Architectural Separator Line */}
      <div
        aria-hidden="true"
        className="w-12 h-px bg-gradient-to-r from-[#B59A63]/60 to-transparent mb-5 sm:mb-6"
      />

      {/* Short Description (2–4 concise sentences) */}
      <p className="text-sm sm:text-base font-body text-[#CFC4B1]/90 leading-relaxed font-normal">
        {temple.description}
      </p>
    </div>
  );
}
