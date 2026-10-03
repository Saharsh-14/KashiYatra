"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ROUTES } from "@/lib/routes";

interface WhereGodsResideHeaderProps {
  activeTempleIndex: number; // 0 = threshold, 1..8 = temple
  totalTemples?: number;
}

/**
 * Where Gods Reside — Chapter Top Navigation.
 *
 * Keeps the experience quiet:
 * - When on the threshold, shows "Threshold" without revealing temple numbers.
 * - Once inside the journey, shows the subtle progress: 01 / 08.
 * - Pinned "Back to Kashi" link.
 */
export function WhereGodsResideHeader({
  activeTempleIndex = 0,
  totalTemples = 8,
}: WhereGodsResideHeaderProps) {
  const isInside = activeTempleIndex > 0;
  const formattedActive = String(activeTempleIndex).padStart(2, "0");
  const formattedTotal = String(totalTemples).padStart(2, "0");

  return (
    <header
      role="banner"
      className="fixed top-0 inset-x-0 z-50 h-16 md:h-20 bg-[#0A0908]/85 backdrop-blur-md border-b border-[#E8E1D3]/10 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Back Link */}
        <Link
          href={ROUTES.kashi}
          className="group inline-flex items-center gap-2.5 text-xs sm:text-sm uppercase tracking-[0.2em] font-ui text-[#CFC4B1] hover:text-[#FAF6F0] transition-colors py-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B59A63]"
          aria-label="Back to Kashi landing page"
        >
          <ArrowLeft
            size={16}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:-translate-x-1 text-[#B59A63]"
          />
          <span>Back to Kashi</span>
        </Link>

        {/* Center Chapter Label */}
        <div className="hidden sm:flex flex-col items-center">
          <span className="text-[10px] uppercase tracking-[0.35em] font-ui text-[#B59A63]">
            Chapter III
          </span>
          <span className="text-xs uppercase tracking-[0.25em] font-ui text-[#E8E1D3]/90">
            Where Gods Reside
          </span>
        </div>

        {/* Right Status / Journey Counter */}
        <div className="flex items-center gap-2.5">
          {isInside ? (
            <>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] font-ui text-[#8E887D]">
                Temple
              </span>
              <div className="flex items-baseline font-mono text-xs sm:text-sm tracking-wider px-2.5 py-1 rounded-[2px] bg-[#141311] border border-[#E8E1D3]/15 text-[#E8E1D3]">
                <span className="text-[#B59A63] font-semibold">{formattedActive}</span>
                <span className="mx-1 text-[#8E887D]/50">/</span>
                <span className="text-[#8E887D]">{formattedTotal}</span>
              </div>
            </>
          ) : (
            <div className="px-3 py-1 rounded-[2px] border border-[#B59A63]/30 bg-[#141311] text-[10px] sm:text-[11px] uppercase tracking-[0.3em] font-ui text-[#B59A63]">
              Threshold
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
