"use client";

import React from "react";
import type { TempleDetailData } from "@/types/content";

interface TempleDailyAartiProps {
  dailyAarti: TempleDetailData["dailyAarti"];
}

export function TempleDailyAarti({ dailyAarti }: TempleDailyAartiProps) {
  return (
    <section
      id="daily-aarti"
      className="w-full py-10 sm:py-14 border-b border-[#E3DACB]"
    >
      {/* Section Header */}
      <div className="mb-8">
        <span className="text-[10px] sm:text-[11px] tracking-[0.28em] font-semibold text-[#8E764D] uppercase block mb-1.5">
          Sacred Rituals
        </span>
        <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.03em] text-[#1E1A17] uppercase">
          {dailyAarti.heading}
        </h2>
      </div>

      {/* Editorial Aarti List */}
      <div className="divide-y divide-[#E3DACB] border-y border-[#E3DACB]">
        {dailyAarti.items.map((aarti, idx) => (
          <div
            key={idx}
            className="py-5 sm:py-6 px-2 sm:px-4 grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-baseline transition-colors duration-200 hover:bg-[#F4EFE6]/50 rounded-sm"
          >
            {/* Aarti Name */}
            <div className="md:col-span-4 lg:col-span-4">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1E1A17] uppercase tracking-[0.02em]">
                {aarti.name}
              </h3>
            </div>

            {/* Time (Visually Prominent) */}
            <div className="md:col-span-3 lg:col-span-3">
              <div className="inline-block px-3 py-1 bg-[#ECE3D2] rounded-[2px] text-xs sm:text-sm font-semibold tracking-[0.04em] text-[#6E5528]">
                {aarti.time}
              </div>
            </div>

            {/* Description (Smaller, Refined) */}
            <div className="md:col-span-5 lg:col-span-5">
              <p className="text-xs sm:text-[13.5px] leading-relaxed text-[#5C5349]">
                {aarti.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
