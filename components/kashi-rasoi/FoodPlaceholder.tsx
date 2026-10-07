"use client";

import React from "react";

interface FoodPlaceholderProps {
  number?: string;
  title: string;
  aspect?: string; // e.g. "16/10", "4/3", "16/9"
  assetPath?: string;
  caption?: string;
  variant?: "card" | "hero" | "supporting" | "preparation";
  className?: string;
}

export function FoodPlaceholder({
  number,
  title,
  aspect = "16/10",
  assetPath,
  caption,
  className = "",
}: FoodPlaceholderProps) {
  // Map aspect ratio string to tailwind-safe style or class
  const getAspectStyle = () => {
    switch (aspect) {
      case "16/10":
        return { aspectRatio: "16 / 10" };
      case "4/3":
        return { aspectRatio: "4 / 3" };
      case "16/9":
        return { aspectRatio: "16 / 9" };
      case "1/1":
        return { aspectRatio: "1 / 1" };
      default:
        return { aspectRatio: aspect };
    }
  };

  return (
    <div
      style={getAspectStyle()}
      className={`relative w-full overflow-hidden rounded-xl bg-[#0e0e0c] border border-white/10 select-none group/ph ${className}`}
    >
      {/* Background Architectural Grid */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Subtle Radial Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,rgba(0,0,0,0.65)_100%)] pointer-events-none" />

      {/* Corner Registration Crosshairs */}
      <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-white/30 pointer-events-none" />
      <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-white/30 pointer-events-none" />
      <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-white/30 pointer-events-none" />
      <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-white/30 pointer-events-none" />

      {/* Center Camera Aperture / Frame Indicator */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10">
        <div className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center mb-3 bg-white/[0.02] text-white/50 group-hover/ph:border-white/30 group-hover/ph:text-white/80 transition-colors duration-300">
          <svg
            className="w-5 h-5 stroke-[1.25]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <circle cx="12" cy="12" r="3.5" />
            <path d="M17 7h.01" />
          </svg>
        </div>

        <div className="flex items-center gap-2 mb-1.5">
          {number && (
            <span className="font-mono text-[10px] tracking-widest text-[#b59a63] uppercase px-1.5 py-0.5 rounded bg-[#b59a63]/10 border border-[#b59a63]/25">
              {number}
            </span>
          )}
          <span className="font-mono text-[10px] tracking-wider text-white/40 uppercase">
            PLACEHOLDER MEDIA
          </span>
        </div>

        <h4 className="font-editorial text-sm sm:text-base text-white/85 max-w-[85%] leading-snug tracking-wide">
          {title}
        </h4>

        {caption && (
          <p className="mt-1 text-xs text-white/45 max-w-[80%] line-clamp-2">
            {caption}
          </p>
        )}
      </div>

      {/* Bottom Technical Metadata Bar */}
      <div className="absolute bottom-2.5 inset-x-3 flex items-center justify-between font-mono text-[9px] text-white/30 tracking-wider pointer-events-none border-t border-white/5 pt-1.5">
        <span className="uppercase">ASPECT {aspect}</span>
        {assetPath ? (
          <span className="truncate max-w-[200px] text-white/25">
            {assetPath}
          </span>
        ) : (
          <span>FUTURE MEDIA ASSET</span>
        )}
      </div>
    </div>
  );
}
