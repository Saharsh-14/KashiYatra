"use client";

import React from "react";
import Link from "next/link";
import { KASHI_RASOI_FOODS } from "@/data/kashi-rasoi";
import { ROUTES } from "@/lib/routes";

interface RasoiNavigationProps {
  currentIndex: number;
  onSelectIndex: (index: number) => void;
  className?: string;
}

export function RasoiNavigation({
  currentIndex,
  onSelectIndex,
  className = "",
}: RasoiNavigationProps) {
  const activeFood = KASHI_RASOI_FOODS[currentIndex] || KASHI_RASOI_FOODS[0];

  return (
    <div className={`pointer-events-none fixed inset-0 z-30 flex flex-col justify-between p-4 sm:p-8 select-none ${className}`}>
      
      {/* Top HUD */}
      <div className="flex items-center justify-between w-full pointer-events-auto">
        {/* Minimal BACK TO KASHI */}
        <Link
          href={ROUTES.kashi}
          className="group flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/40 hover:bg-black/80 backdrop-blur-md border border-white/10 hover:border-white/30 text-white/70 hover:text-white transition-all duration-300 font-mono text-xs tracking-widest uppercase"
        >
          <svg
            className="w-3.5 h-3.5 transform group-hover:-translate-x-1 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span>BACK TO KASHI</span>
        </Link>

        {/* Center Title Badge */}
        <div className="hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 font-mono text-[11px] tracking-widest uppercase text-white/60">
          <span className="w-1.5 h-1.5 rounded-full bg-[#b59a63] animate-pulse" />
          <span>KASHI RASOI · 3D EXHIBITION</span>
        </div>

        {/* Current Chapter Indicator */}
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 font-mono text-xs tracking-widest">
          <span className="text-white/40">CHAPTER</span>
          <span className="text-[#b59a63] font-semibold">{activeFood.number}</span>
          <span className="text-white/30">/ 08</span>
        </div>
      </div>

      {/* Bottom HUD */}
      <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 pointer-events-auto">
        {/* Bottom Left: Title & Subtitle */}
        <div className="hidden lg:block">
          <p className="font-mono text-[10px] tracking-widest text-[#b59a63] uppercase">
            CHAPTER {activeFood.number} · {activeFood.category}
          </p>
          <h2 className="font-display text-lg text-white font-normal tracking-wide">
            {activeFood.name}
          </h2>
        </div>

        {/* Bottom Center: Chapter Selector Pills */}
        <div className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 rounded-full bg-black/60 backdrop-blur-xl border border-white/15 shadow-2xl overflow-x-auto max-w-full">
          {KASHI_RASOI_FOODS.map((food, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={food.id}
                onClick={() => onSelectIndex(idx)}
                aria-label={`Jump to ${food.number}: ${food.name}`}
                className={`relative px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full font-mono text-xs transition-all duration-300 flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#b59a63] text-black font-semibold shadow-lg shadow-[#b59a63]/20"
                    : "text-white/40 hover:text-white hover:bg-white/10"
                }`}
              >
                <span>{food.number}</span>
                {isActive && (
                  <span className="hidden md:inline text-[11px] font-sans font-medium whitespace-nowrap">
                    {food.name}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Bottom Right: Gesture Hint */}
        <div className="hidden lg:flex items-center gap-2 font-mono text-[10px] text-white/40 uppercase tracking-widest">
          <svg
            className="w-4 h-4 text-white/30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M8 9l4-4 4 4" />
            <path d="M8 15l4 4 4-4" />
          </svg>
          <span>DRAG OR SCROLL TO ROTATE</span>
        </div>
      </div>
    </div>
  );
}
