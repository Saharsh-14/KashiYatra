"use client";

import React, { useEffect, useState, useCallback } from "react";
import { ArrowUp } from "lucide-react";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";

/**
 * ScrollToTop Button (Kashi Landing Experience)
 *
 * Fixed in the bottom-right corner throughout the landing page.
 * Features:
 * - Direct smooth scroll to top of page
 * - Circular SVG progress indicator reflecting page scroll depth
 * - Elegant Kashi brass/gold dark glassmorphic styling
 * - Tactile micro-motion on hover
 * - Floating tooltip indicator
 */
export function ScrollToTop() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  let smoothScrollApi: ReturnType<typeof useSmoothScroll> | null = null;
  try {
    smoothScrollApi = useSmoothScroll();
  } catch {
    smoothScrollApi = null;
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress = docHeight > 0 ? Math.min(1, Math.max(0, currentY / docHeight)) : 0;
      setScrollProgress(progress);
      setIsScrolled(currentY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToTop = useCallback(() => {
    if (smoothScrollApi) {
      smoothScrollApi.scrollTo(0);
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [smoothScrollApi]);

  // Circular progress calculations for SVG ring (radius 20, perimeter ~125.66)
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - scrollProgress * circumference;

  return (
    <div
      className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-40 flex items-center justify-end transition-all duration-300 ${
        isScrolled
          ? "opacity-100 translate-y-0"
          : "opacity-70 hover:opacity-100 translate-y-0"
      }`}
    >
      {/* Editorial Tooltip on Hover */}
      <div
        className={`pointer-events-none absolute right-14 whitespace-nowrap rounded-[2px] bg-[#12110F]/95 px-2.5 py-1 text-[10px] uppercase font-mono tracking-[0.25em] text-[#E8E1D3] shadow-2xl border border-[#38332B] transition-all duration-200 ${
          isHovered
            ? "opacity-100 -translate-x-1"
            : "opacity-0 translate-x-2"
        }`}
        aria-hidden="true"
      >
        <span>Top</span>
        <span className="ml-1.5 text-[#D4AF37]">·</span>
        <span className="ml-1 text-[9px] text-[#A69B8D]">
          {Math.round(scrollProgress * 100)}%
        </span>
      </div>

      {/* Interactive Button */}
      <button
        type="button"
        onClick={handleScrollToTop}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Scroll to top of the page"
        title="Scroll to top"
        className="group relative flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#141210]/85 hover:bg-[#201D18] backdrop-blur-md border border-[#3D362C]/80 hover:border-[#D4AF37]/90 text-[#D8CFBF] hover:text-[#FAF6F0] shadow-[0_8px_25px_rgba(0,0,0,0.45)] hover:shadow-[0_0_24px_rgba(212,175,55,0.3)] transition-all duration-300 active:scale-95 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/60"
      >
        {/* SVG Scroll Progress Ring */}
        <svg
          className="absolute inset-0 h-full w-full -rotate-90 pointer-events-none"
          viewBox="0 0 48 48"
          aria-hidden="true"
        >
          {/* Subtle background track */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="2"
          />
          {/* Dynamic Gold Progress Arc */}
          <circle
            cx="24"
            cy="24"
            r={radius}
            fill="none"
            stroke="#D4AF37"
            strokeWidth="2"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-[stroke-dashoffset] duration-150 ease-out"
          />
        </svg>

        {/* Upward Arrow Icon with Micro-motion */}
        <ArrowUp
          size={18}
          strokeWidth={2}
          className="transition-transform duration-300 group-hover:-translate-y-1 text-[#D6CEBE] group-hover:text-[#FFFBF2]"
        />
      </button>
    </div>
  );
}
