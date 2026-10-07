"use client";

import React from "react";
import type { TempleDetailData } from "@/types/content";

interface TempleClosingProps {
  closing: TempleDetailData["closing"];
}

export function TempleClosing({ closing }: TempleClosingProps) {
  return (
    <section className="w-full py-14 sm:py-20 border-b border-[#E3DACB]">
      {/* Contemplative Statement */}
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block w-8 h-[1.5px] bg-[#8E764D] mb-6" />
        <blockquote className="font-serif text-lg sm:text-2xl lg:text-[1.75rem] text-[#1E1A17] leading-[1.65] italic">
          “{closing.statement}”
        </blockquote>
      </div>
    </section>
  );
}
