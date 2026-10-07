"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, ArrowRight } from "lucide-react";
import { ROUTES } from "@/lib/routes";

export function TemplesFooter() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative z-[1] w-full bg-[#EDE5D3] py-24 sm:py-32 px-6 sm:px-12 text-center overflow-hidden">
      <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
        {/* Ornamental Divider */}
        <div className="flex items-center gap-4 mb-8 select-none opacity-50">
          <span className="w-10 h-[1px] bg-[#8E764D]" />
          <span className="text-[10px] text-[#8E764D] tracking-[0.4em]">◆</span>
          <span className="w-10 h-[1px] bg-[#8E764D]" />
        </div>

        {/* Closing Title */}
        <h3
          className="font-serif uppercase tracking-[0.06em] text-[#2C241D] mb-5"
          style={{ fontSize: "clamp(1.3rem, 2.2vw, 2rem)", fontWeight: 700 }}
        >
          Eight Doorways · One Eternal City
        </h3>

        {/* Reflection */}
        <p className="text-[13px] sm:text-[14px] leading-[1.8] text-[#5A5044] max-w-md mb-12">
          From the sacred spires of Vishveshvara to the quiet courtyards above the ghats,
          the divine remains woven into the eternal fabric of Varanasi.
        </p>

        {/* Navigation Actions */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mb-14">
          <Link
            href={ROUTES.kashi}
            className="group inline-flex items-center gap-2 text-[11px] tracking-[0.22em] font-semibold text-[#7A6B5B] hover:text-[#2C241D] uppercase transition-colors"
          >
            Return to Kashi
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <span className="text-[#C9BC9F] hidden sm:inline">·</span>

          <button
            onClick={scrollToTop}
            className="group inline-flex items-center gap-2 text-[11px] tracking-[0.22em] font-semibold text-[#8E764D] hover:text-[#5A4528] uppercase transition-colors"
          >
            Back to Top
            <ArrowUp size={13} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        {/* Heritage Stamp */}
        <p className="text-[10px] tracking-[0.25em] text-[#A09480] uppercase select-none">
          Kashi Yatra · Sacred Architecture
        </p>
      </div>
    </footer>
  );
}
