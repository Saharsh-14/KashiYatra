"use client";

import React from "react";
import type { TempleDetailData } from "@/types/content";

interface TempleTimingsProps {
  timings: TempleDetailData["timings"];
}

function getShortLabel(label: string): string {
  return label
    .replace(/^Temple\s+/i, "")
    .replace(/\s+Darshan$/i, "")
    .replace(/^Opening Hours\s*\((.*?)\)$/i, "$1")
    .replace(/\s+Closure$/i, " Break")
    .replace(/^Best Time for Darshan$/i, "Best Time")
    .trim();
}

function getShortTime(time: string): string {
  return time
    .replace(/^After\s+/i, "")
    .replace(/Sapta Rishi Aarti/i, "Sapta Rishi")
    .replace(/(\d{1,2}:\d{2})\s*AM\s*–\s*(\d{1,2}:\d{2})\s*AM/i, "$1 – $2 AM")
    .replace(/(\d{1,2}:\d{2})\s*PM\s*–\s*(\d{1,2}:\d{2})\s*PM/i, "$1 – $2 PM")
    .trim();
}

export function TempleTimings({ timings }: TempleTimingsProps) {
  return (
    <section
      id="darshan-timings"
      className="w-full pt-6 sm:pt-14 pb-6 sm:pb-10 border-b border-[#E3DACB]"
    >
      {/* Section Header */}
      <div className="mb-4 sm:mb-8">
        <span className="text-[9px] sm:text-[11px] tracking-[0.24em] sm:tracking-[0.28em] font-semibold text-[#8E764D] uppercase block mb-1">
          Practical Visitor Guide
        </span>
        <h2 className="font-serif text-xl sm:text-3xl font-bold tracking-[0.03em] text-[#1E1A17] uppercase">
          {timings.heading}
        </h2>
      </div>

      {/* Editorial Scannable Grid (3 columns on desktop, 2 on tablet & mobile) */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-[#E3DACB] rounded-sm overflow-hidden border border-[#E3DACB]">
        {timings.items.map((item, idx) => (
          <div
            key={idx}
            className="bg-[#FAF7F2] p-2.5 min-[380px]:p-3 sm:p-5 lg:p-6 flex flex-col justify-between transition-colors duration-300 hover:bg-[#F4EFE6]"
          >
            <span className="text-[9px] sm:text-[11px] tracking-[0.14em] sm:tracking-[0.2em] font-medium text-[#8A7968] uppercase mb-1 sm:mb-2 block truncate">
              <span className="sm:hidden">{getShortLabel(item.label)}</span>
              <span className="hidden sm:inline">{item.label}</span>
            </span>
            <span className="font-serif text-[11px] min-[360px]:text-xs min-[390px]:text-sm sm:text-lg lg:text-xl font-semibold text-[#1E1A17] tracking-[0.01em] leading-snug">
              <span className="sm:hidden">{getShortTime(item.time)}</span>
              <span className="hidden sm:inline">{item.time}</span>
            </span>
          </div>
        ))}
      </div>

      {/* Auxiliary Notice */}
      {timings.note && (
        <p className="text-[11px] sm:text-[13px] text-[#7A6B5B] italic mt-3 sm:mt-4 pl-1 flex items-center gap-1.5 sm:gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#B59A63]/60 flex-shrink-0" />
          <span>{timings.note}</span>
        </p>
      )}
    </section>
  );
}
