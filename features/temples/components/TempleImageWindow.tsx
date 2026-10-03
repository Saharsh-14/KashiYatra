"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Camera } from "lucide-react";
import type { TemplePhoto } from "@/types/content";

interface TempleImageWindowProps {
  templeName: string;
  templeSlug: string;
  photos: readonly TemplePhoto[];
  templeIndex: number;
}

/**
 * Temple Image Preview Window (VISUAL CENTERPIECE).
 *
 * Rules:
 * - Replaces the 3D model area with a large, visually dominant, cinematic window.
 * - Displays EXACTLY ONE photograph at a time.
 * - Subtle arrows (← →) and photo counter (e.g. 01 / 04).
 * - Smooth, photographic crossfade transition.
 * - Consistent frame proportions and edge treatment across all 8 temples.
 * - Resilient placeholder handling if physical assets are pending.
 * - Touch-swipe and keyboard arrow support for natural interaction.
 */
export function TempleImageWindow({
  templeName,
  templeSlug,
  photos,
  templeIndex,
}: TempleImageWindowProps) {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [imageErrorMap, setImageErrorMap] = useState<Record<number, boolean>>({});

  const totalPhotos = photos.length;
  const currentPhoto = photos[currentIdx] || photos[0];
  const photoFormatted = String(currentIdx + 1).padStart(2, "0");
  const totalFormatted = String(totalPhotos).padStart(2, "0");

  // Touch swipe handling
  const touchStartXRef = useRef<number | null>(null);

  const goToPrev = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIdx((prev) => (prev === 0 ? totalPhotos - 1 : prev - 1));
  }, [isTransitioning, totalPhotos]);

  const goToNext = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIdx((prev) => (prev === totalPhotos - 1 ? 0 : prev + 1));
  }, [isTransitioning, totalPhotos]);

  // Transition timeout
  useEffect(() => {
    if (!isTransitioning) return;
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 450);
    return () => clearTimeout(timer);
  }, [isTransitioning, currentIdx]);

  // Preload next image in sequence
  useEffect(() => {
    if (totalPhotos <= 1) return;
    const nextIdx = (currentIdx + 1) % totalPhotos;
    const nextUrl = photos[nextIdx]?.url;
    if (nextUrl && typeof window !== "undefined") {
      const img = new window.Image();
      img.src = nextUrl;
    }
  }, [currentIdx, photos, totalPhotos]);

  // Keyboard navigation when window is focused
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      goToPrev();
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      goToNext();
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
    touchStartXRef.current = null;
  };

  const hasImageFailed = imageErrorMap[currentIdx] === true;

  return (
    <div
      tabIndex={0}
      role="region"
      aria-label={`${templeName} photograph preview, photo ${currentIdx + 1} of ${totalPhotos}`}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="group relative w-full aspect-[16/10] sm:aspect-[16/10] min-h-[360px] sm:min-h-[440px] md:min-h-[500px] lg:min-h-[540px] xl:min-h-[580px] rounded-[2px] bg-[#141311] border border-[#E8E1D3]/15 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] focus:outline-none focus:ring-1 focus:ring-[#B59A63]/60 transition-shadow duration-500"
    >
      {/* Architectural Corner Crop Marks */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-2.5 left-2.5 w-3 h-3 border-t border-l border-[#B59A63]/50 z-20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-2.5 right-2.5 w-3 h-3 border-t border-r border-[#B59A63]/50 z-20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-2.5 left-2.5 w-3 h-3 border-b border-l border-[#B59A63]/50 z-20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-2.5 right-2.5 w-3 h-3 border-b border-r border-[#B59A63]/50 z-20"
      />

      {/* Main Single Image Area */}
      <div className="relative w-full h-full">
        {!hasImageFailed ? (
          <div
            className={`relative w-full h-full transition-all duration-500 ease-out ${
              isTransitioning
                ? "opacity-40 scale-[1.015] blur-[1px]"
                : "opacity-100 scale-100 blur-0"
            }`}
          >
            <Image
              src={currentPhoto.url}
              alt={currentPhoto.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 55vw"
              priority={templeIndex === 1}
              className="object-cover object-center select-none"
              onError={() => {
                setImageErrorMap((prev) => ({ ...prev, [currentIdx]: true }));
              }}
            />
          </div>
        ) : (
          /* High-Fidelity Architectural Asset Placeholder */
          <div
            className={`relative w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-[#151412] text-[#E8E1D3] transition-all duration-500 ease-out ${
              isTransitioning ? "opacity-50 scale-[0.99]" : "opacity-100 scale-100"
            }`}
          >
            {/* Top metadata badge */}
            <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.25em] font-ui text-[#8E887D]">
              <span className="flex items-center gap-2">
                <Camera size={13} className="text-[#B59A63]" />
                <span>Archive Frame · {templeSlug.replace(/-/g, " ")}</span>
              </span>
              <span className="text-[#B59A63]">Plate {photoFormatted}</span>
            </div>

            {/* Architectural Drafting Center */}
            <div className="my-auto text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border border-[#B59A63]/25 flex items-center justify-center mb-4 bg-[#1A1815]">
                <span className="font-mono text-xs text-[#B59A63]">
                  {photoFormatted}
                </span>
              </div>
              <h4 className="text-lg sm:text-xl md:text-2xl font-display font-medium text-[#E8E1D3] max-w-md">
                {currentPhoto.caption || currentPhoto.alt}
              </h4>
              <p className="mt-2 text-xs sm:text-sm font-editorial italic text-[#CFC4B1]/75 max-w-sm">
                {currentPhoto.alt}
              </p>
              <div className="mt-4 px-3 py-1 rounded border border-[#E8E1D3]/10 bg-[#10100E]/60 text-[10px] sm:text-[11px] font-mono tracking-wider text-[#8E887D]">
                ASSET: {currentPhoto.url}
              </div>
            </div>

            {/* Bottom notice */}
            <div className="text-[10px] uppercase tracking-[0.2em] font-ui text-[#8E887D]/70 text-center">
              Kashi Temple Architectural Documentation Window
            </div>
          </div>
        )}

        {/* Subtle Edge Vignette */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#10100E]/85 via-transparent to-[#10100E]/30"
        />
      </div>

      {/* Persistent Window Footer Bar — Contains Photo Caption, Counter, and Minimal Navigation */}
      <div className="absolute inset-x-0 bottom-0 z-30 px-4 sm:px-6 py-3.5 sm:py-4 bg-[#10100E]/80 backdrop-blur-md border-t border-[#E8E1D3]/10 flex items-center justify-between gap-4">
        {/* Current Photo Caption */}
        <div className="flex flex-col min-w-0 pr-2">
          <span className="text-[10px] uppercase tracking-[0.25em] font-ui text-[#B59A63] line-clamp-1">
            Photo {photoFormatted} of {totalFormatted}
          </span>
          <span className="text-xs sm:text-sm font-editorial text-[#E8E1D3] truncate">
            {currentPhoto.caption || currentPhoto.alt}
          </span>
        </div>

        {/* Minimal Navigation System (Arrows + Counter) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Previous Arrow Button */}
          <button
            type="button"
            onClick={goToPrev}
            aria-label={`Previous photo (${(currentIdx === 0 ? totalPhotos : currentIdx) + " / " + totalPhotos})`}
            className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-[2px] bg-[#191816] hover:bg-[#28251F] border border-[#E8E1D3]/15 hover:border-[#B59A63]/60 text-[#CFC4B1] hover:text-[#FAF6F0] transition-all focus:outline-none focus:ring-1 focus:ring-[#B59A63]"
          >
            <ArrowLeft size={15} strokeWidth={1.5} />
          </button>

          {/* Photo Counter Indicator */}
          <div className="px-2.5 py-1 rounded-[2px] bg-[#12110F] border border-[#E8E1D3]/10 font-mono text-[11px] sm:text-xs text-[#E8E1D3] tracking-widest select-none">
            <span className="text-[#B59A63] font-semibold">{photoFormatted}</span>
            <span className="mx-1 text-[#8E887D]/60">/</span>
            <span className="text-[#8E887D]">{totalFormatted}</span>
          </div>

          {/* Next Arrow Button */}
          <button
            type="button"
            onClick={goToNext}
            aria-label={`Next photo (${((currentIdx + 2 > totalPhotos ? 1 : currentIdx + 2) + " / " + totalPhotos)})`}
            className="w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-[2px] bg-[#191816] hover:bg-[#28251F] border border-[#E8E1D3]/15 hover:border-[#B59A63]/60 text-[#CFC4B1] hover:text-[#FAF6F0] transition-all focus:outline-none focus:ring-1 focus:ring-[#B59A63]"
          >
            <ArrowRight size={15} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
