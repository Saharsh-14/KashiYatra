"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ROUTES } from "@/lib/routes";
import { markInfiniteDoorCompleted } from "@/lib/doorState";

export function TemplesTopBar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-[#EDE5D3]/90 backdrop-blur-lg border-b border-[#C9BC9F]/30 transition-all">
      <div className="w-full max-w-[1400px] mx-auto h-12 sm:h-14 px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Return to Landing */}
        <Link
          href={`${ROUTES.kashi}#where-gods-reside`}
          onClick={() => markInfiniteDoorCompleted()}
          className="group inline-flex items-center gap-2 text-[11px] tracking-[0.2em] font-medium text-[#7A6B5B] hover:text-[#2C241D] transition-colors uppercase"
          aria-label="Return to Kashi Yatra"
        >
          <ArrowLeft
            size={14}
            className="transition-transform duration-300 group-hover:-translate-x-1 text-[#8E764D]"
          />
          <span className="hidden sm:inline">Kashi Yatra</span>
        </Link>

        {/* Chapter */}
        <div className="text-[11px] sm:text-[12px] tracking-[0.3em] font-semibold text-[#2C241D] uppercase select-none">
          Temples of Kashi
        </div>

        {/* Count */}
        <div className="text-[10px] sm:text-[11px] tracking-[0.22em] font-medium text-[#8A7A60] uppercase select-none">
          08 Sanctuaries
        </div>
      </div>
    </header>
  );
}
