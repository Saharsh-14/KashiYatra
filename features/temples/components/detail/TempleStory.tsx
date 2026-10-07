"use client";

import React from "react";
import type { TempleDetailData } from "@/types/content";

interface TempleStoryProps {
  story: TempleDetailData["story"];
}

export function TempleStory({ story }: TempleStoryProps) {
  return (
    <section className="w-full py-12 sm:py-16 border-b border-[#E3DACB]">
      {/* Section Header */}
      <div className="mb-8 sm:mb-10 max-w-2xl">
        {story.eyebrow && (
          <span className="text-[10px] sm:text-[11px] tracking-[0.28em] font-semibold text-[#8E764D] uppercase block mb-1.5">
            {story.eyebrow}
          </span>
        )}
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.03em] text-[#1E1A17] uppercase">
          {story.heading}
        </h2>
      </div>

      {/* Two-Part Narrative Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left: The Pillar of Light Narrative */}
        <div className="lg:col-span-6 space-y-5 text-[#3D352D]">
          <p className="font-serif text-base sm:text-lg leading-[1.75] text-[#1E1A17]">
            {story.leadParagraph}
          </p>
          <p className="text-sm sm:text-[15px] leading-[1.8] text-[#554C42]">
            {story.secondaryParagraph}
          </p>
        </div>

        {/* Right: Avimukta — The Never-Forsaken Focus Block */}
        <div className="lg:col-span-6 bg-[#F3EDE2]/80 border-l-[3px] border-[#8E764D] p-6 sm:p-8 rounded-r-sm">
          <span className="text-[10px] sm:text-[11px] tracking-[0.24em] font-semibold text-[#8E764D] uppercase block mb-2">
            Eternal Threshold
          </span>
          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1E1A17] tracking-[0.02em] uppercase mb-3">
            {story.focusTitle}
          </h3>
          <p className="text-xs sm:text-[14px] leading-[1.8] text-[#4A423B]">
            {story.focusContent}
          </p>
        </div>
      </div>
    </section>
  );
}
