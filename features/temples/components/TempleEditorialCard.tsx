"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import type { Temple } from "@/types/content";

interface TempleEditorialCardProps {
  temple: Temple;
  totalTemples: number;
  isLast?: boolean;
}

/**
 * Single Temple Editorial Section — Full-width alternating layout.
 *
 * Reference design analysis:
 * - Photo column: ~55% width, fills full section height
 * - Info column: ~45% width, vertically centered, transparent parchment ground
 * - Section height: ~400–450px on desktop, natural on mobile
 * - Divider: thin 1px line between sections
 * - Illustration watermark: faint, positioned on the outer edge of info column
 * - Typography: bold serif titles ~36px, small-caps subtitle, spaced tracking
 * - "EXPLORE →" with a small dash/line before it
 */
export function TempleEditorialCard({
  temple,
  totalTemples,
  isLast = false,
}: TempleEditorialCardProps) {
  const isPhotoLeft = temple.index % 2 !== 0;
  const formattedIndex = String(temple.index).padStart(2, "0");

  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  const heroSrc = temple.heroImage || `/images/temples/${temple.slug}/hero.jpg`;

  return (
    <article
      ref={cardRef}
      id={`temple-${formattedIndex}`}
      className={`w-full overflow-hidden ${!isLast ? "border-b border-[#C9BC9F]/40" : ""}`}
    >
      <Link
        href={`/temples/${temple.slug}`}
        className="group relative block w-full outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#8E764D]/50"
        aria-label={`Explore ${temple.name}`}
      >
        {/* Section Container with Parchment Base */}
        <div
          className="relative grid grid-cols-1 lg:grid-cols-2 lg:h-[245px] bg-[#EDE5D3] overflow-hidden"
          style={{ minHeight: "clamp(220px, 16vw, 245px)" }}
        >
          {/* ─── PHOTO BANNER (Expands from half section ~50% to 100% full section on hover) ─── */}
          <div
            className={`relative lg:absolute lg:top-0 lg:bottom-0 ${
              isPhotoLeft ? "lg:left-0" : "lg:right-0"
            } w-full h-[220px] sm:h-[240px] lg:h-full lg:w-1/2 group-hover:lg:w-full transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0 overflow-hidden pointer-events-none`}
          >
            <div className="relative w-full h-full transform-gpu transition-transform duration-[900ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.04]">
              <Image
                src={heroSrc}
                alt={`${temple.name} — Temple of Kashi`}
                fill
                priority={temple.index <= 2}
                sizes="100vw"
                className="object-cover object-center"
              />
              {/* Warm cinematic tonal grading */}
              <div
                className="absolute inset-0 pointer-events-none mix-blend-multiply transition-opacity duration-500 group-hover:opacity-40"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(40,30,15,0.12) 0%, transparent 40%, transparent 65%, rgba(40,30,15,0.25) 100%)",
                }}
              />
              {/* Subtle warm wash */}
              <div className="absolute inset-0 pointer-events-none bg-[#D4A857]/[0.06] mix-blend-overlay" />

              {/* Soft directional fade towards text (active only in half-section rest state, turns off when expanding to entire section) */}
              <div
                className="absolute inset-0 pointer-events-none transition-opacity duration-700 opacity-100 group-hover:opacity-0"
                style={{
                  background: isPhotoLeft
                    ? "linear-gradient(to right, transparent 0%, transparent 40%, rgba(237, 229, 211, 0.25) 65%, rgba(237, 229, 211, 0.75) 86%, #EDE5D3 100%)"
                    : "linear-gradient(to left, transparent 0%, transparent 40%, rgba(237, 229, 211, 0.25) 65%, rgba(237, 229, 211, 0.75) 86%, #EDE5D3 100%)",
                }}
              />

              {/* Hover contrast scrim — fades in to ensure text remains clearly readable over image */}
              <div
                className={`absolute inset-0 pointer-events-none transition-opacity duration-700 opacity-0 group-hover:opacity-100 ${
                  isPhotoLeft
                    ? "bg-gradient-to-r from-black/20 via-black/55 to-black/85"
                    : "bg-gradient-to-l from-black/20 via-black/55 to-black/85"
                }`}
              />
            </div>
          </div>

          {/* ─── INFO / EDITORIAL COLUMN (Positioned on top of image in z-10) ─── */}
          <div
            className={`relative z-10 flex flex-col justify-center overflow-hidden ${
              isPhotoLeft ? "lg:col-start-2" : "lg:col-start-1"
            } px-6 sm:px-10 lg:px-12 xl:px-16 py-5 lg:py-5`}
          >
            {/* ── Foreground Editorial Text Block — Centered & Vertically Balanced ── */}
            <div
              className={`relative z-10 w-full max-w-[420px] mx-auto h-full flex flex-col justify-between transition-all duration-700 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-5"
              }`}
            >
              {/* Header group: Title + Subtitle */}
              <div>
                {/* Temple Name — Bold Serif */}
                <h2
                  className="font-serif uppercase leading-[1.14] tracking-[0.025em] text-[#1E1A14] group-hover:text-[#FFFDF8] group-hover:drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] transition-all duration-500 line-clamp-2"
                  style={{
                    fontSize: "clamp(1.18rem, 1.45vw, 1.55rem)",
                    fontWeight: 800,
                  }}
                >
                  {temple.name}
                </h2>

                {/* Subtitle — Small Caps */}
                {temple.subtitle && (
                  <p className="text-[9px] sm:text-[9.5px] tracking-[0.24em] font-semibold text-[#7D6E55] group-hover:text-[#E5CA8F] uppercase mt-1 transition-colors duration-500">
                    {temple.subtitle}
                  </p>
                )}
              </div>

              {/* Description — 2 lines */}
              <p className="text-[11.5px] sm:text-[12px] lg:text-[12.5px] leading-[1.55] text-[#524A3D] group-hover:text-[#EDE5D3] group-hover:drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] my-2 line-clamp-2 transition-all duration-500">
                {temple.description}
              </p>

              {/* EXPLORE → */}
              <div className="inline-flex items-center gap-2.5 pt-0.5">
                <span className="block w-4 h-[1.5px] bg-[#8E764D] group-hover:w-8 group-hover:bg-[#E5CA8F] transition-all duration-400" />
                <span className="text-[10px] sm:text-[10.5px] tracking-[0.25em] font-bold text-[#8E764D] group-hover:text-[#E5CA8F] uppercase transition-colors duration-400">
                  Explore
                </span>
                <span className="text-[12px] text-[#8E764D] group-hover:text-[#E5CA8F] transition-all duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
