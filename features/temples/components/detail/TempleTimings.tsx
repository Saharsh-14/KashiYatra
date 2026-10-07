"use client";

import React from "react";
import type { TempleDetailData } from "@/types/content";

interface TempleTimingsProps {
  timings: TempleDetailData["timings"];
}

export function TempleTimings({ timings }: TempleTimingsProps) {
  return (
    <section
      id="darshan-timings"
      className="w-full pt-10 sm:pt-14 pb-10 border-b border-[#E3DACB]"
    >
      {/* Section Header */}
      <div className="mb-8">
        <span className="text-[10px] sm:text-[11px] tracking-[0.28em] font-semibold text-[#8E764D] uppercase block mb-1.5">
          Practical Visitor Guide
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.03em] text-[#1E1A17] uppercase">
          {timings.heading}
        </h2>
      </div>

      {/* Editorial Scannable Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E3DACB] rounded-sm overflow-hidden border border-[#E3DACB]">
        {timings.items.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#FAF7F2] p-5 sm:p-6 flex flex-col justify-between transition-colors duration-300 hover:bg-[#F4EFE6]"
          >
            <span className="text-[10px] sm:text-[11px] tracking-[0.2em] font-medium text-[#8A7968] uppercase mb-2 block">
              {item.label}
            </span>
            <span className="font-serif text-base sm:text-lg lg:text-xl font-semibold text-[#1E1A17] tracking-[0.01em]">
              {item.time}
            </span>
          </div>
        ))}
      </div>

      {/* Auxiliary Notice */}
      {timings.note && (
        <p className="text-xs sm:text-[13px] text-[#7A6B5B] italic mt-4 pl-1 flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B59A63]/60" />
          {timings.note}
        </p>
      )}
    </section>
  );
}
