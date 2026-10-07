"use client";

import React from "react";
import type { TempleDetailData } from "@/types/content";

interface TempleIntroductionProps {
  intro: TempleDetailData["introduction"];
}

export function TempleIntroduction({ intro }: TempleIntroductionProps) {
  return (
    <section className="w-full py-12 sm:py-16 border-b border-[#E3DACB]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Column: Title & Subtitle */}
        <div className="lg:col-span-5">
          {intro.eyebrow && (
            <span className="text-[10px] sm:text-[11px] tracking-[0.28em] font-semibold text-[#8E764D] uppercase block mb-2">
              {intro.eyebrow}
            </span>
          )}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.03em] text-[#1E1A17] uppercase leading-[1.14] mb-3">
            {intro.heading}
          </h1>
          <p className="text-xs sm:text-sm tracking-[0.24em] font-semibold text-[#7A6B5B] uppercase">
            {intro.subheading}
          </p>
        </div>

        {/* Right Column: Lead Narrative & Cultural Context */}
        <div className="lg:col-span-7 space-y-6 pt-1 lg:pt-3">
          <p className="font-serif text-lg sm:text-xl lg:text-[1.35rem] leading-[1.7] text-[#1E1A17] font-medium">
            {intro.leadText}
          </p>

          <div className="w-12 h-[1.5px] bg-[#8E764D] my-6" />

          <p className="text-sm sm:text-base lg:text-[1.05rem] leading-[1.8] text-[#4A423B]">
            {intro.secondaryText}
          </p>
        </div>
      </div>
    </section>
  );
}
