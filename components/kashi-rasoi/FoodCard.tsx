"use client";

import React from "react";
import { KashiRasoiFood } from "@/data/kashi-rasoi";
import { FoodPlaceholder } from "./FoodPlaceholder";

interface FoodCardProps {
  food: KashiRasoiFood;
  isActive?: boolean;
  isAdjacent?: boolean;
  onClick: () => void;
  className?: string;
  style?: React.CSSProperties;
}

export function FoodCard({
  food,
  isActive = false,
  isAdjacent = false,
  onClick,
  className = "",
  style,
}: FoodCardProps) {
  return (
    <div
      onClick={onClick}
      style={style}
      role="button"
      tabIndex={0}
      aria-label={`Open chapter ${food.number}: ${food.name}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className={`group relative w-[310px] sm:w-[480px] md:w-[560px] lg:w-[620px] flex-shrink-0 cursor-pointer rounded-2xl sm:rounded-3xl p-3 sm:p-4 bg-[#121210]/95 backdrop-blur-md border transition-all duration-500 ease-out select-none shadow-[0_25px_60px_rgba(0,0,0,0.85)] ${isActive
          ? "border-white/30 ring-1 ring-[#b59a63]/30"
          : "border-white/10 hover:border-white/25 hover:shadow-[0_30px_70px_rgba(0,0,0,0.95)]"
        } ${className}`}
    >
      {/* Top Card Bar: Number & Category */}
      <div className="flex items-center justify-between pb-3 px-1 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs tracking-widest text-[#b59a63] font-semibold px-2 py-0.5 rounded bg-[#b59a63]/10 border border-[#b59a63]/25">
            {food.number}
          </span>
          <span className="font-mono text-[10px] sm:text-xs text-white/40 uppercase tracking-widest">
            {food.category}
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 text-white/30 group-hover:text-white/70 transition-colors duration-300">
          <span className="font-mono text-[10px] tracking-wider uppercase">
            EXPLORE
          </span>
          <svg
            className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Main Visual Placeholder */}
      <div className="mt-3 relative overflow-hidden rounded-xl">
        <FoodPlaceholder
          number={food.number}
          title={food.placeholders.hero.title}
          aspect="16/10"
          assetPath={`${food.mediaDir}/${food.placeholders.hero.fileName}`}
          caption={food.tagline}
          variant="card"
          className="transition-transform duration-700 ease-out group-hover:scale-[1.015]"
        />

        {/* Hover Rim Glow */}
        <div className="absolute inset-0 rounded-xl pointer-events-none ring-1 ring-inset ring-white/10 group-hover:ring-[#b59a63]/30 transition-all duration-500" />
      </div>

      {/* Bottom Editorial Caption */}
      <div className="pt-3.5 pb-1 px-1 flex items-end justify-between gap-4">
        <div>
          <p className="font-editorial text-xs text-[#b59a63]/80 tracking-wide mb-0.5">
            {food.devanagariName}
          </p>
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl text-white tracking-wide font-normal group-hover:text-[#e8e1d3] transition-colors duration-300">
            {food.name}
          </h3>
          <p className="mt-1 font-editorial text-xs sm:text-sm text-white/45 max-w-[440px] line-clamp-1">
            {food.tagline}
          </p>
        </div>

        {/* Action button badge */}
        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/15 bg-white/[0.03] text-white/50 group-hover:border-[#b59a63]/50 group-hover:text-[#b59a63] group-hover:bg-[#b59a63]/10 transition-all duration-300">
          <svg
            className="w-4 h-4 transform group-hover:scale-110 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </div>
      </div>
    </div>
  );
}
