"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { KashiRasoiFood, getAdjacentFoods } from "@/data/kashi-rasoi";
import { ROUTES } from "@/lib/routes";
import { markInfiniteDoorCompleted } from "@/lib/doorState";

interface EditorialFoodPageProps {
  food: KashiRasoiFood;
  onBackToGallery: () => void;
}

export function EditorialFoodPage({
  food,
  onBackToGallery,
}: EditorialFoodPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const adjacent = getAdjacentFoods(food.id);

  // Scroll to top when opening and mark door completed
  useEffect(() => {
    markInfiniteDoorCompleted();
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [food.id]);

  return (
    <div
      ref={containerRef}
      className="relative w-[94vw] max-w-[1400px] h-[92vh] max-h-[960px] rounded-2xl sm:rounded-3xl bg-[#ffffff] text-[#121210] overflow-y-auto shadow-[0_50px_140px_rgba(0,0,0,0.95)] border border-neutral-200/80 selection:bg-[#b59a63] selection:text-white"
    >
      {/* ================================================================
          TOP FLOATING BAR (Sticky inside the white case-study sheet)
          ================================================================ */}
      <header className="sticky top-0 z-30 flex items-center justify-between px-6 sm:px-10 py-5 bg-[#ffffff]/90 backdrop-blur-md border-b border-neutral-200/80">
        <div className="flex items-center gap-4 sm:gap-6 font-mono text-xs uppercase tracking-widest">
          <button
            onClick={onBackToGallery}
            className="group flex items-center gap-2 text-black/70 hover:text-black font-semibold transition-colors"
          >
            <span className="w-6 h-6 rounded-full border border-black/20 group-hover:border-black flex items-center justify-center transition-colors">
              <svg
                className="w-3 h-3 transform group-hover:-translate-x-0.5 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </span>
            <span>BACK TO GALLERY</span>
          </button>

          <span className="text-black/20 hidden sm:inline">|</span>

          <Link
            href={ROUTES.kashi}
            scroll={false}
            onClick={() => markInfiniteDoorCompleted()}
            className="hidden sm:inline text-black/45 hover:text-black transition-colors"
          >
            BACK TO KASHI
          </Link>
        </div>

        {/* Minimal Black Circular Close Button (as seen in reference video) */}
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline font-mono text-xs tracking-widest text-black/40">
            CHAPTER {food.number} / 08
          </span>

          <button
            onClick={onBackToGallery}
            aria-label="Close case study"
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black text-white hover:bg-neutral-800 transition-all flex items-center justify-center shadow-md hover:scale-105"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
      </header>

      {/* ================================================================
          CASE STUDY EDITORIAL BODY
          ================================================================ */}
      <div className="px-6 sm:px-12 md:px-16 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* LEFT COLUMN: Sticky Narrative & Metadata */}
          <aside className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs tracking-widest font-semibold px-2.5 py-0.5 rounded bg-black text-white">
                  {food.number}
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-black/50">
                  {food.category}
                </span>
              </div>

              <p className="font-editorial text-sm sm:text-base text-[#8c703d] tracking-wide">
                {food.devanagariName}
              </p>

              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-black font-normal tracking-tight leading-[1.02]">
                {food.name}
              </h1>

              <p className="font-editorial text-base sm:text-lg text-neutral-600 italic leading-relaxed pt-1">
                &ldquo;{food.tagline}&rdquo;
              </p>
            </div>

            {/* Short text description block */}
            <div className="p-6 rounded-2xl bg-neutral-100 border border-neutral-200/80 space-y-3">
              <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest block border-b border-neutral-200 pb-2">
                [ SHORT DESCRIPTION PLACEHOLDER ]
              </span>
              <p className="font-editorial text-base text-neutral-800 leading-relaxed">
                {food.shortDescription}
              </p>
            </div>

            {/* Craft Information */}
            <div className="space-y-4 pt-2 border-t border-neutral-200">
              <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest block">
                CRAFT SPECIFICATIONS
              </span>

              <div className="space-y-2.5 font-editorial text-sm">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-neutral-400 w-20 flex-shrink-0">
                    HEARTH:
                  </span>
                  <span className="text-neutral-800 font-medium">
                    {food.craft.title}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-neutral-400 w-20 flex-shrink-0">
                    VESSEL:
                  </span>
                  <span className="text-neutral-800">
                    {food.craft.cookware}
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs text-neutral-400 w-20 flex-shrink-0">
                    HOURS:
                  </span>
                  <span className="text-neutral-800">
                    {food.timing} · {food.origin}
                  </span>
                </div>
              </div>

              <p className="font-editorial text-xs sm:text-sm text-neutral-500 leading-relaxed pt-1">
                {food.craft.description}
              </p>
            </div>

            {/* Tag Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {food.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] text-neutral-600 px-2.5 py-1 rounded-full border border-neutral-200 bg-neutral-50"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Adjacent Chapter Controls */}
            <div className="pt-6 border-t border-neutral-200 flex items-center justify-between font-mono text-xs">
              <Link
                href={`/kashi-rasoi/${adjacent.prev.slug}`}
                className="group flex items-center gap-2 text-neutral-500 hover:text-black transition-colors"
              >
                <span>← {adjacent.prev.number}</span>
                <span className="hidden sm:inline group-hover:underline">
                  {adjacent.prev.name}
                </span>
              </Link>

              <Link
                href={`/kashi-rasoi/${adjacent.next.slug}`}
                className="group flex items-center gap-2 text-neutral-500 hover:text-black transition-colors"
              >
                <span className="hidden sm:inline group-hover:underline">
                  {adjacent.next.name}
                </span>
                <span>{adjacent.next.number} →</span>
              </Link>
            </div>
          </aside>

          {/* RIGHT COLUMN: Large Editorial Visual Case Study (Placeholders) */}
          <section className="lg:col-span-7 space-y-10 sm:space-y-14">

            {/* 1. Large Hero Visual Placeholder */}
            <div className="space-y-3">
              <div className="flex items-center justify-between font-mono text-[11px] text-neutral-400 tracking-wider">
                <span>[ LARGE HERO IMAGE PLACEHOLDER ]</span>
                <span>{food.placeholders.hero.aspect} WIDESCREEN</span>
              </div>

              <div className="relative w-full aspect-[16/10] rounded-2xl bg-[#ebe9e4] border border-neutral-300 overflow-hidden flex flex-col justify-between p-6 sm:p-8">
                {/* Thin grid on light placeholder */}
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage: `
                      linear-gradient(to right, rgba(0, 0, 0, 0.4) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 1px, transparent 1px)
                    `,
                    backgroundSize: "28px 28px",
                  }}
                />

                {/* Corner markers */}
                <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-neutral-400" />
                <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-neutral-400" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-neutral-400" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-neutral-400" />

                <div className="relative z-10 m-auto text-center flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full border border-neutral-400 bg-white/40 flex items-center justify-center text-neutral-600 mb-2">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <circle cx="12" cy="12" r="3.5" />
                      <path d="M17 7h.01" />
                    </svg>
                  </div>
                  <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest font-semibold">
                    {food.placeholders.hero.title}
                  </span>
                  <p className="font-editorial text-xs text-neutral-600 mt-1 max-w-sm">
                    High-resolution editorial photography of {food.name}
                  </p>
                </div>

                <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-neutral-500 border-t border-neutral-300 pt-2">
                  <span>TARGET ASSET</span>
                  <span>{food.mediaDir}/{food.placeholders.hero.fileName}</span>
                </div>
              </div>
            </div>

            {/* Long Narrative Text Block */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#faf9f6] border border-neutral-200 space-y-4">
              <span className="font-mono text-xs tracking-widest uppercase text-[#8c703d] font-semibold block">
                THE HISTORIC NARRATIVE
              </span>
              <p className="font-editorial text-lg sm:text-xl text-neutral-800 leading-relaxed">
                {food.longDescription}
              </p>
            </div>

            {/* 2. Secondary Supporting Image Placeholders (2 Columns) */}
            <div className="space-y-4">
              <span className="font-mono text-[11px] text-neutral-400 tracking-wider block">
                [ SUPPORTING IMAGE PLACEHOLDERS ]
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Supporting 1 */}
                <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#ebe9e4] border border-neutral-300 overflow-hidden flex flex-col justify-between p-5">
                  <div className="relative z-10 m-auto text-center flex flex-col items-center">
                    <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-wider font-semibold">
                      {food.placeholders.supporting1.title}
                    </span>
                    <span className="font-editorial text-xs text-neutral-500 mt-1">
                      Alleyway context & preparation
                    </span>
                  </div>
                  <div className="relative z-10 flex items-center justify-between font-mono text-[9px] text-neutral-400 border-t border-neutral-300 pt-2">
                    <span>ASPECT {food.placeholders.supporting1.aspect}</span>
                    <span className="truncate max-w-[140px]">{food.placeholders.supporting1.fileName}</span>
                  </div>
                </div>

                {/* Supporting 2 */}
                <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#ebe9e4] border border-neutral-300 overflow-hidden flex flex-col justify-between p-5">
                  <div className="relative z-10 m-auto text-center flex flex-col items-center">
                    <span className="font-mono text-[11px] text-neutral-500 uppercase tracking-wider font-semibold">
                      {food.placeholders.supporting2.title}
                    </span>
                    <span className="font-editorial text-xs text-neutral-500 mt-1">
                      Texture & serving vessel
                    </span>
                  </div>
                  <div className="relative z-10 flex items-center justify-between font-mono text-[9px] text-neutral-400 border-t border-neutral-300 pt-2">
                    <span>ASPECT {food.placeholders.supporting2.aspect}</span>
                    <span className="truncate max-w-[140px]">{food.placeholders.supporting2.fileName}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Optional Preparation Image Placeholder */}
            {food.placeholders.preparation && (
              <div className="space-y-3">
                <div className="flex items-center justify-between font-mono text-[11px] text-neutral-400 tracking-wider">
                  <span>[ OPTIONAL PREPARATION IMAGE PLACEHOLDER ]</span>
                  <span>{food.placeholders.preparation.aspect} PANORAMA</span>
                </div>

                <div className="relative w-full aspect-[16/9] rounded-2xl bg-[#ebe9e4] border border-neutral-300 overflow-hidden flex flex-col justify-between p-6">
                  <div className="relative z-10 m-auto text-center flex flex-col items-center">
                    <span className="font-mono text-xs text-neutral-600 uppercase tracking-widest font-semibold">
                      {food.placeholders.preparation.title}
                    </span>
                    <span className="font-editorial text-xs text-neutral-500 mt-1">
                      The live culinary craft & wood-fired embers
                    </span>
                  </div>
                  <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-neutral-500 border-t border-neutral-300 pt-2">
                    <span>PREPARATION ARCHIVE</span>
                    <span>{food.mediaDir}/{food.placeholders.preparation.fileName}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Return Action */}
            <div className="pt-10 pb-6 text-center border-t border-neutral-200">
              <button
                onClick={onBackToGallery}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black text-white hover:bg-neutral-800 font-mono text-xs tracking-widest uppercase transition-all duration-300 hover:scale-105"
              >
                <span>RETURN TO 3D GALLERY</span>
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
