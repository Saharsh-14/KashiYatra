"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { KashiRasoiFood, getAdjacentFoods } from "@/data/kashi-rasoi";
import { FoodPlaceholder } from "./FoodPlaceholder";
import { ROUTES } from "@/lib/routes";

interface FoodDetailProps {
  food: KashiRasoiFood;
  onBackToGallery?: () => void;
  isModal?: boolean;
}

export function FoodDetail({
  food,
  onBackToGallery,
  isModal = false,
}: FoodDetailProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const adjacent = getAdjacentFoods(food.id);

  // Scroll to top on mount
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [food.id]);

  const handleBack = () => {
    if (onBackToGallery) {
      onBackToGallery();
    } else {
      router.push(ROUTES.kashiRasoi);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`w-full min-h-screen bg-[#080807] text-[#e8e1d3] selection:bg-[#b59a63]/30 selection:text-white ${
        isModal ? "overflow-y-auto" : ""
      }`}
    >
      {/* Top Floating Control Bar */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#080807]/80 border-b border-white/10 px-4 sm:px-8 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Back Controls */}
          <div className="flex items-center gap-4 sm:gap-6">
            <button
              onClick={handleBack}
              className="group flex items-center gap-2 font-mono text-xs text-[#b59a63] hover:text-white tracking-widest uppercase transition-colors duration-200"
            >
              <span className="w-7 h-7 rounded-full border border-[#b59a63]/30 group-hover:border-white/50 flex items-center justify-center transition-colors">
                <svg
                  className="w-3.5 h-3.5 transform group-hover:-translate-x-0.5 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </span>
              <span>BACK TO GALLERY</span>
            </button>

            <span className="text-white/20 hidden sm:inline">/</span>

            <Link
              href={ROUTES.kashi}
              className="hidden sm:inline font-mono text-xs text-white/40 hover:text-white/80 tracking-widest uppercase transition-colors"
            >
              BACK TO KASHI
            </Link>
          </div>

          {/* Chapter Tracker & Close */}
          <div className="flex items-center gap-4">
            <div className="font-mono text-xs text-white/40 tracking-widest">
              CHAPTER <span className="text-white font-semibold">{food.number}</span> / 08
            </div>

            <button
              onClick={handleBack}
              aria-label="Close detail view"
              className="w-8 h-8 rounded-full border border-white/15 hover:border-white/40 flex items-center justify-center text-white/50 hover:text-white transition-all bg-white/[0.03]"
            >
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Editorial Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* ================================================================
              LEFT COLUMN — Sticky Editorial Information
              ================================================================ */}
          <aside className="lg:col-span-5 lg:sticky lg:top-24 space-y-8">
            {/* Chapter Header */}
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-mono text-xs tracking-widest text-[#b59a63] font-semibold px-2 py-0.5 rounded bg-[#b59a63]/10 border border-[#b59a63]/30">
                  CHAPTER {food.number}
                </span>
                <span className="font-mono text-xs text-white/40 uppercase tracking-widest">
                  {food.category}
                </span>
              </div>

              <p className="font-editorial text-sm sm:text-base text-[#b59a63] tracking-wide mb-1">
                {food.devanagariName}
              </p>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl text-white tracking-wide font-normal leading-[1.05]">
                {food.name}
              </h1>

              <p className="mt-3 font-editorial text-base text-white/60 italic leading-relaxed">
                &ldquo;{food.tagline}&rdquo;
              </p>
            </div>

            {/* SHORT DESCRIPTION PLACEHOLDER */}
            <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 space-y-3">
              <div className="flex items-center justify-between font-mono text-[10px] text-white/40 uppercase tracking-wider border-b border-white/5 pb-2">
                <span>[ SHORT DESCRIPTION PLACEHOLDER ]</span>
                <span className="text-[#b59a63]">KASHI ARCHIVE</span>
              </div>
              <p className="font-editorial text-base text-[#e8e1d3]/90 leading-relaxed">
                {food.shortDescription}
              </p>
            </div>

            {/* Craft & Ritual Highlights */}
            <div className="space-y-4 pt-2">
              <h3 className="font-mono text-[11px] text-white/40 uppercase tracking-widest">
                THE CRAFT & HERITAGE
              </h3>

              <div className="space-y-3 font-editorial text-sm">
                <div className="flex items-start gap-3 text-white/70">
                  <span className="font-mono text-xs text-[#b59a63] flex-shrink-0 mt-0.5">HEARTH:</span>
                  <span>{food.craft.title}</span>
                </div>
                <div className="flex items-start gap-3 text-white/70">
                  <span className="font-mono text-xs text-[#b59a63] flex-shrink-0 mt-0.5">VESSEL:</span>
                  <span>{food.craft.cookware}</span>
                </div>
                <div className="flex items-start gap-3 text-white/70">
                  <span className="font-mono text-xs text-[#b59a63] flex-shrink-0 mt-0.5">TIMING:</span>
                  <span>{food.timing} · {food.origin}</span>
                </div>
              </div>

              <p className="font-editorial text-xs sm:text-sm text-white/50 leading-relaxed pt-1">
                {food.craft.description}
              </p>
            </div>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {food.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] text-white/50 px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.02]"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Back to Gallery & Chapter Walk */}
            <div className="pt-6 border-t border-white/10 space-y-4">
              <button
                onClick={handleBack}
                className="w-full py-3.5 px-6 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/20 hover:border-[#b59a63]/50 text-white font-mono text-xs tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <svg
                  className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                <span>BACK TO GALLERY</span>
              </button>

              <div className="grid grid-cols-2 gap-3 font-mono text-xs">
                <Link
                  href={`/kashi-rasoi/${adjacent.prev.slug}`}
                  className="p-3 rounded-lg border border-white/10 hover:border-white/30 text-white/60 hover:text-white transition-colors text-left"
                >
                  <span className="block text-[10px] text-white/30 tracking-wider">PREVIOUS</span>
                  <span className="truncate block font-semibold">{adjacent.prev.number} · {adjacent.prev.name}</span>
                </Link>

                <Link
                  href={`/kashi-rasoi/${adjacent.next.slug}`}
                  className="p-3 rounded-lg border border-white/10 hover:border-white/30 text-white/60 hover:text-white transition-colors text-right"
                >
                  <span className="block text-[10px] text-white/30 tracking-wider">NEXT</span>
                  <span className="truncate block font-semibold">{adjacent.next.number} · {adjacent.next.name}</span>
                </Link>
              </div>
            </div>
          </aside>

          {/* ================================================================
              RIGHT COLUMN — Vertical Visual Spread (Placeholders)
              ================================================================ */}
          <section className="lg:col-span-7 space-y-8 sm:space-y-12">
            
            {/* 1. LARGE HERO IMAGE PLACEHOLDER */}
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-[11px] text-white/40 tracking-wider">
                <span>[ LARGE HERO IMAGE PLACEHOLDER ]</span>
                <span className="text-[#b59a63]">{food.placeholders.hero.aspect} WIDESCREEN</span>
              </div>
              <FoodPlaceholder
                number={food.number}
                title={food.placeholders.hero.title}
                aspect={food.placeholders.hero.aspect}
                assetPath={`${food.mediaDir}/${food.placeholders.hero.fileName}`}
                caption={`Primary visual composition of ${food.name}`}
                variant="hero"
              />
            </div>

            {/* Extended Long Description Editorial Block */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#11110f] border border-white/10 space-y-4">
              <h3 className="font-mono text-xs tracking-widest text-[#b59a63] uppercase">
                THE HISTORIC NARRATIVE
              </h3>
              <p className="font-editorial text-base sm:text-lg text-white/80 leading-relaxed">
                {food.longDescription}
              </p>
            </div>

            {/* 2. SUPPORTING IMAGE PLACEHOLDERS (Grid of 2) */}
            <div className="space-y-3">
              <div className="font-mono text-[11px] text-white/40 tracking-wider">
                <span>[ SUPPORTING IMAGE PLACEHOLDERS ]</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FoodPlaceholder
                  number={`${food.number}.A`}
                  title={food.placeholders.supporting1.title}
                  aspect={food.placeholders.supporting1.aspect}
                  assetPath={`${food.mediaDir}/${food.placeholders.supporting1.fileName}`}
                  caption="Alleyway scene & preparation detail"
                  variant="supporting"
                />

                <FoodPlaceholder
                  number={`${food.number}.B`}
                  title={food.placeholders.supporting2.title}
                  aspect={food.placeholders.supporting2.aspect}
                  assetPath={`${food.mediaDir}/${food.placeholders.supporting2.fileName}`}
                  caption="Authentic serving vessel & texture"
                  variant="supporting"
                />
              </div>
            </div>

            {/* 3. OPTIONAL PREPARATION IMAGE PLACEHOLDER */}
            {food.placeholders.preparation && (
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-[11px] text-white/40 tracking-wider">
                  <span>[ OPTIONAL PREPARATION IMAGE PLACEHOLDER ]</span>
                  <span className="text-white/30">CRAFT IN ACTION</span>
                </div>
                <FoodPlaceholder
                  number={`${food.number}.C`}
                  title={food.placeholders.preparation.title}
                  aspect={food.placeholders.preparation.aspect}
                  assetPath={`${food.mediaDir}/${food.placeholders.preparation.fileName}`}
                  caption={food.craft.title}
                  variant="preparation"
                />
              </div>
            )}

            {/* Bottom Return to Gallery Banner */}
            <div className="pt-8 pb-12 text-center border-t border-white/10">
              <p className="font-editorial text-sm text-white/40 italic mb-4">
                End of Chapter {food.number} — {food.name}
              </p>
              <button
                onClick={handleBack}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/[0.06] hover:bg-white/[0.12] border border-white/20 hover:border-[#b59a63] text-white font-mono text-xs tracking-widest uppercase transition-all duration-300"
              >
                <span>RETURN TO 3D GALLERY</span>
                <svg
                  className="w-4 h-4 text-[#b59a63]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 12h18" />
                  <path d="m14 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
