"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ROUTES } from "@/lib/routes";
import type { Temple } from "@/types/content";

interface TempleHeroProps {
  temple: Temple;
}

export function TempleHero({ temple }: TempleHeroProps) {
  const heroSrc = temple.heroImage || `/images/temples/${temple.slug}/hero.jpg`;

  const photos = temple.photos || [];

  const [currentIndex, setCurrentIndex] = useState(0);

  const totalPhotos = photos.length;

  const handlePrev = useCallback(() => {
    if (totalPhotos <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  }, [totalPhotos]);

  const handleNext = useCallback(() => {
    if (totalPhotos <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % totalPhotos);
  }, [totalPhotos]);

  // Keyboard arrow navigation
  useEffect(() => {
    if (totalPhotos <= 1) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext, totalPhotos]);

  return (
    <section className="w-full">
      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="text-[11px] sm:text-xs tracking-[0.22em] font-medium text-[#8A7968] uppercase mb-6 sm:mb-8 flex items-center gap-2 select-none"
      >
        <Link
          href={ROUTES.kashi}
          className="hover:text-[#1E1A17] transition-colors"
        >
          Kashi
        </Link>
        <span className="text-[#C5B8A5]">/</span>
        <Link
          href={ROUTES.temples}
          className="hover:text-[#1E1A17] transition-colors"
        >
          Temples
        </Link>
        <span className="text-[#C5B8A5]">/</span>
        <span className="text-[#1E1A17] font-semibold">{temple.name}</span>
      </nav>

      {/* Main Sanctuary Hero Window or Blank Space if No Photos */}
      {totalPhotos > 0 ? (
        <div className="group relative w-full h-[360px] sm:h-[480px] lg:h-[580px] rounded-sm overflow-hidden bg-[#ECE5D8] shadow-sm border border-[#E3DACB]">
          {/* Render photos with cross-fade transition */}
          {photos.map((photo, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={photo.id || idx}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <Image
                  src={photo.url}
                  alt={photo.alt || temple.name}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 1280px) 100vw, 1200px"
                  className={`object-cover ${photo.objectPosition || "object-center"} transform-gpu transition-transform duration-1000 ease-out`}
                />
              </div>
            );
          })}

          {/* Subtle cinematic gradient overlays */}
          <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/30 via-transparent to-black/15 pointer-events-none" />
          <div className="absolute inset-0 z-20 pointer-events-none bg-[#D4A857]/[0.03] mix-blend-overlay" />

          {/* Navigation Arrows (Prev / Next) */}
          {totalPhotos > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous photograph"
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/75 text-white/90 hover:text-white backdrop-blur-md border border-white/20 transition-all flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-md hover:scale-105 active:scale-95"
              >
                <ChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next photograph"
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-black/75 text-white/90 hover:text-white backdrop-blur-md border border-white/20 transition-all flex items-center justify-center opacity-80 sm:opacity-0 group-hover:opacity-100 focus:opacity-100 shadow-md hover:scale-105 active:scale-95"
              >
                <ChevronRight size={22} />
              </button>
            </>
          )}

          {/* Indicator Navigation Pills (Bottom Center) */}
          {totalPhotos > 1 && (
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 sm:bottom-6 z-30 flex items-center gap-2 select-none bg-black/35 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
              {photos.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => setCurrentIndex(dotIdx)}
                  aria-label={`Go to photograph ${dotIdx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    dotIdx === currentIndex
                      ? "w-7 bg-[#E8D19B]"
                      : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="relative w-full h-[240px] sm:h-[320px] lg:h-[380px] rounded-sm overflow-hidden bg-[#F0EAE0]/70 border border-[#E3DACB] flex flex-col items-center justify-center p-8 text-center select-none shadow-[inset_0_1px_4px_rgba(0,0,0,0.03)]">
          <span className="w-8 h-[1.5px] bg-[#C5B8A5] mb-4" />
          <p className="font-serif text-sm sm:text-base tracking-[0.2em] uppercase text-[#8A7968]">
            Sanctuary Photographic Archive
          </p>
          <p className="text-[11px] sm:text-xs text-[#A89886] mt-1.5 tracking-wider">
            Curated darshan imagery pending
          </p>
        </div>
      )}
    </section>
  );
}
