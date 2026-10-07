"use client";

import React from "react";
import type { TempleDetailData } from "@/types/content";

interface TempleWhyItMattersProps {
  whyItMatters: TempleDetailData["whyItMatters"];
}

export function TempleWhyItMatters({ whyItMatters }: TempleWhyItMattersProps) {
  return (
    <section className="w-full py-14 sm:py-20 border-b border-[#E3DACB]">
      {/* Eyebrow */}
      <span className="text-[10px] sm:text-[11px] tracking-[0.28em] font-semibold text-[#8E764D] uppercase block mb-2">
        Significance & Living Essence
      </span>

      {/* Heading */}
      <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.03em] text-[#1E1A17] uppercase mb-8">
        {whyItMatters.heading}
      </h2>

      {/* Three Massive Editorial Words */}
      <div className="flex flex-wrap items-baseline gap-x-4 sm:gap-x-6 gap-y-2 mb-8 select-none">
        {whyItMatters.pillars.map((pillar, idx) => (
          <span
            key={idx}
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1E1A17]"
          >
            {pillar}
          </span>
        ))}
      </div>

      {/* Explanatory Paragraph */}
      <div className="max-w-3xl space-y-6">
        <p className="font-serif text-base sm:text-lg lg:text-xl leading-[1.8] text-[#3D352D]">
          {whyItMatters.paragraph}
        </p>

        {/* Highlighted Points if provided */}
        {whyItMatters.points && whyItMatters.points.length > 0 && (
          <ul className="space-y-3 pt-2">
            {whyItMatters.points.map((point, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-sm sm:text-base text-[#4A423B]"
              >
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#8E764D] mt-2 shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Highlighted Note / Tradition if provided */}
        {whyItMatters.note && (
          <div className="mt-6 p-5 sm:p-6 bg-[#F5EFE4] rounded-sm border-l-2 border-[#8E764D]">
            <p className="text-xs sm:text-[13.5px] text-[#524A3D] leading-relaxed italic">
              {whyItMatters.note}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
