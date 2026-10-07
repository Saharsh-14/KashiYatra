"use client";

import React from "react";
import type { TempleAtAGlanceData } from "@/types/content";

interface TempleAtAGlanceProps {
  data: TempleAtAGlanceData;
}

export function TempleAtAGlance({ data }: TempleAtAGlanceProps) {
  const items = [
    { label: "Deity", value: data.deity },
    { label: "Significance", value: data.significance },
    { label: "Location", value: data.location },
    { label: "Present Temple", value: data.presentTemple },
    { label: "Best Experience", value: data.bestExperience },
  ];

  return (
    <section className="w-full py-8 sm:py-10 border-b border-[#E3DACB]">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col justify-start">
            <span className="text-[10px] sm:text-[10.5px] tracking-[0.24em] font-semibold text-[#8E764D] uppercase mb-1.5 block">
              {item.label}
            </span>
            <span className="font-serif text-sm sm:text-[15px] font-semibold text-[#1E1A17] leading-snug">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
