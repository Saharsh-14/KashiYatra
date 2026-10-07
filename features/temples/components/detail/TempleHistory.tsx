"use client";

import React from "react";
import Image from "next/image";
import type { TempleDetailData } from "@/types/content";

interface TempleHistoryProps {
  history: TempleDetailData["history"];
  fallbackImage?: string;
}

export function TempleHistory({ history, fallbackImage }: TempleHistoryProps) {
  const displayImage = history.image || fallbackImage;

  return (
    <section className="w-full py-12 sm:py-16 border-b border-[#E3DACB]">
      {/* Section Header */}
      <div className="mb-8 sm:mb-10 max-w-2xl">
        {history.eyebrow && (
          <span className="text-[10px] sm:text-[11px] tracking-[0.28em] font-semibold text-[#8E764D] uppercase block mb-1.5">
            {history.eyebrow}
          </span>
        )}
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold tracking-[0.03em] text-[#1E1A17] uppercase">
          {history.heading}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Historical Narrative & Timeline Milestones */}
        <div className="lg:col-span-7 space-y-6">
          {history.paragraphs.map((p, idx) => (
            <p
              key={idx}
              className={`leading-[1.8] ${
                idx === 0
                  ? "font-serif text-base sm:text-lg text-[#1E1A17]"
                  : "text-sm sm:text-base text-[#4A423B]"
              }`}
            >
              {p}
            </p>
          ))}

          {/* Historical Timeline Milestones */}
          {history.milestones && history.milestones.length > 0 && (
            <div className="mt-8 pt-6 border-t border-[#E3DACB]/80 space-y-4">
              <span className="text-[10px] sm:text-[10.5px] tracking-[0.24em] font-semibold text-[#8E764D] uppercase block">
                Key Historical Milestones
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {history.milestones.slice(0, 2).map((m, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#F5EFE4] rounded-sm border border-[#E3DACB]/60"
                  >
                    <span className="font-serif text-xl sm:text-2xl font-bold text-[#8E764D] block mb-1">
                      {m.year}
                    </span>
                    <span className="text-xs text-[#524A3D] leading-relaxed block">
                      {m.event}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Architectural Photography Frame or Blank Space */}
        <div className="lg:col-span-5">
          {displayImage ? (
            <div className="relative w-full h-[300px] sm:h-[360px] rounded-sm overflow-hidden bg-[#ECE5D8] border border-[#E3DACB] shadow-sm">
              <Image
                src={displayImage}
                alt={history.imageCaption || "Architecture of the sanctuary"}
                fill
                sizes="(max-width: 1024px) 100vw, 450px"
                className={`object-cover ${history.objectPosition || "object-center"}`}
              />
            </div>
          ) : (
            <div className="w-full h-[220px] sm:h-[260px] rounded-sm bg-[#F0EAE0]/60 border border-[#E3DACB] flex flex-col items-center justify-center p-6 text-center select-none shadow-[inset_0_1px_3px_rgba(0,0,0,0.02)]">
              <span className="w-6 h-[1px] bg-[#C5B8A5] mb-2.5" />
              <span className="text-[10px] sm:text-[11px] tracking-[0.24em] font-serif uppercase text-[#8A7968]">
                Visual Record
              </span>
              <span className="text-[10px] text-[#A89886] mt-1 tracking-wide">
                Archival photography pending
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
