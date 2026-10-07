"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ROUTES } from "@/lib/routes";
import type { Temple } from "@/types/content";

interface TempleBottomNavProps {
  prevTemple: Temple;
  nextTemple: Temple;
  isLast?: boolean;
}

export function TempleBottomNav({
  prevTemple,
  nextTemple,
  isLast = false,
}: TempleBottomNavProps) {
  return (
    <nav
      aria-label="Sanctuary Navigation"
      className="py-12 sm:py-16 flex flex-col sm:flex-row items-center justify-between gap-8 text-[#1E1A17]"
    >
      {/* Previous Temple Link */}
      <Link
        href={`/temples/${prevTemple.slug}`}
        className="group flex flex-col items-start gap-1.5 text-[#7A6B5B] hover:text-[#1E1A17] transition-colors w-full sm:w-auto"
      >
        <span className="inline-flex items-center gap-1.5 text-xs tracking-[0.22em] uppercase font-medium">
          <ArrowLeft
            size={13}
            className="group-hover:-translate-x-1.5 transition-transform text-[#8E764D]"
          />
          Previous
        </span>
        <span className="font-serif text-sm sm:text-base font-semibold text-[#1E1A17] group-hover:text-[#8E764D] transition-colors">
          {prevTemple.name}
        </span>
      </Link>

      {/* Return to All Sanctuaries */}
      <Link
        href={ROUTES.temples}
        className="text-xs tracking-[0.25em] font-semibold text-[#8E764D] hover:text-[#4A3922] uppercase transition-colors py-2 px-4 rounded-sm hover:bg-[#F3EDE2]"
      >
        All Sanctuaries
      </Link>

      {/* Next Temple Link */}
      <Link
        href={isLast ? ROUTES.temples : `/temples/${nextTemple.slug}`}
        className="group flex flex-col items-end gap-1.5 text-[#7A6B5B] hover:text-[#1E1A17] transition-colors text-right w-full sm:w-auto"
      >
        <span className="inline-flex items-center gap-1.5 text-xs tracking-[0.22em] uppercase font-medium">
          Next
          <ArrowRight
            size={13}
            className="group-hover:translate-x-1.5 transition-transform text-[#8E764D]"
          />
        </span>
        <span className="font-serif text-sm sm:text-base font-semibold text-[#1E1A17] group-hover:text-[#8E764D] transition-colors">
          {isLast ? "Back to All Temples" : nextTemple.name}
        </span>
      </Link>
    </nav>
  );
}
