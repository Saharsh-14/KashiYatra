"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { X, Camera } from "lucide-react";
import type { Poster } from "@/types/content";
import {
  unfoldedPosterDetails,
  type UnfoldedPosterDetail,
  type ImagePlaceholder,
} from "@/data/unfoldedPosterDetails";

interface UnfoldedDetailModalProps {
  poster: Poster | null;
  onClose: () => void;
}

/**
 * Elegant vintage archival image or placeholder.
 * If photograph src exists, renders real image inside archival matting frame with caption.
 * Otherwise, renders museum-quality parchment placeholder with corner registration marks.
 */
function ArchivalImagePlaceholder({
  placeholder,
  isHero = false,
  accentColor = "#8B2515",
  onClick,
  isActive = false,
}: {
  placeholder: ImagePlaceholder;
  isHero?: boolean;
  accentColor?: string;
  onClick?: () => void;
  isActive?: boolean;
}) {
  // If real photograph is provided, render the image (pure image with archival matting frame, no captions)
  if (placeholder.src) {
    return (
      <div
        onClick={onClick}
        className={`group relative w-full h-full rounded-[2px] border overflow-hidden select-none transition-all duration-300 shadow-sm ${
          isActive
            ? "border-[#8B2515] ring-2 ring-[#8B2515]/60 scale-[1.02]"
            : "border-[#523A28]/30 hover:border-[#8B2515]/60 hover:shadow-md"
        } ${onClick ? "cursor-pointer" : ""}`}
      >
        <Image
          src={placeholder.src}
          alt={placeholder.label}
          fill
          unoptimized
          sizes={isHero ? "(min-width: 1024px) 50vw, 90vw" : "(min-width: 1024px) 15vw, 30vw"}
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Subtle vintage inner matting frame line */}
        <div className="absolute inset-[3px] border border-white/20 pointer-events-none z-10" />
      </div>
    );
  }

  // Archival placeholder fallback
  return (
    <div
      onClick={onClick}
      className={`relative w-full h-full rounded-[2px] border border-[#523A28]/25 bg-gradient-to-b from-[#EDE4D4] to-[#E5DAC8] overflow-hidden flex flex-col items-center justify-center p-3 select-none transition-all duration-300 hover:border-[#523A28]/45 shadow-inner ${
        isHero ? "min-h-[220px]" : "min-h-[75px]"
      } ${onClick ? "cursor-pointer" : ""}`}
    >
      {/* Subtle vintage inner matting frame line */}
      <div className="absolute inset-[3px] border border-[#523A28]/15 pointer-events-none" />

      {/* L-shaped corner registration marks */}
      <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l border-[#523A28]/35 pointer-events-none" />
      <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r border-[#523A28]/35 pointer-events-none" />
      <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l border-[#523A28]/35 pointer-events-none" />
      <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r border-[#523A28]/35 pointer-events-none" />

      {/* Subtle fine diagonal paper grain pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 8px)`,
        }}
      />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center px-2">
        <div
          className={`rounded-full flex items-center justify-center mb-1.5 ${
            isHero
              ? "w-8 h-8 sm:w-9 sm:h-9 bg-[#523A28]/10 text-[#523A28]/70"
              : "w-5 h-5 bg-[#523A28]/10 text-[#523A28]/60"
          }`}
        >
          <Camera size={isHero ? 16 : 11} strokeWidth={1.5} />
        </div>

        {/* Subtle developer code label */}
        <span
          className="font-mono text-[9px] sm:text-[10px] tracking-[0.2em] uppercase font-semibold px-2 py-0.5 rounded-[1px] border border-[#523A28]/20 bg-[#F5EFE3]/80 text-[#3D2619]"
          style={{ color: accentColor }}
        >
          {placeholder.code}
        </span>
      </div>
    </div>
  );
}

export function UnfoldedDetailModal({ poster, onClose }: UnfoldedDetailModalProps) {
  const [isOpening, setIsOpening] = useState(false);
  const [activePlaceholder, setActivePlaceholder] = useState<ImagePlaceholder | null>(null);

  const detail: UnfoldedPosterDetail | undefined = poster
    ? unfoldedPosterDetails[poster.id]
    : undefined;

  // Reset active photo on poster change
  useEffect(() => {
    setActivePlaceholder(null);
  }, [poster?.id]);

  // Trigger smooth 600ms expansion transition on mount
  useEffect(() => {
    if (detail) {
      const timer = setTimeout(() => setIsOpening(true), 20);
      return () => clearTimeout(timer);
    } else {
      setIsOpening(false);
    }
  }, [detail]);

  // Handle escape key to close smoothly
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!poster || !detail) return null;

  const currentHero = activePlaceholder || detail.heroPlaceholder;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={detail.title}
      data-lenis-prevent="true"
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 lg:p-6 bg-black/60 backdrop-blur-[4px] transition-opacity duration-[600ms] ease-out ${
        isOpening ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* 
        80% Viewport Detail Experience Panel
        Warm ivory aged paper, thin vintage borders, subtle shadow.
        Desktop: Fits strictly inside viewport with no unnecessary scrolling.
      */}
      <div
        data-lenis-prevent="true"
        onClick={(e) => e.stopPropagation()}
        className={`relative w-[96vw] lg:w-[80vw] max-w-[1240px] h-[92vh] lg:h-[80vh] max-h-[760px] min-h-0 rounded-[3px] border border-[#523A28]/40 bg-[#F7F3E9] text-[#2C1810] shadow-[0_25px_65px_-12px_rgba(26,18,12,0.45)] overflow-hidden transition-all duration-[600ms] ease-out flex flex-col ${
          isOpening
            ? "scale-100 opacity-100 translate-y-0"
            : "scale-[0.96] opacity-0 translate-y-2"
        }`}
      >
        {/* Subtle vintage inner matting frame line */}
        <div className="absolute inset-[3px] border border-[#523A28]/20 pointer-events-none z-30" />

        {/* Minimal Elegant Close Button (×) */}
        <button
          onClick={onClose}
          aria-label="Close detail view"
          className="group absolute top-3 right-3 sm:top-4 sm:right-4 z-40 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-[#523A28]/25 bg-[#FAF5EC]/90 text-[#523A28] shadow-sm backdrop-blur-sm transition-all duration-200 hover:bg-[#8B2515] hover:text-white hover:border-[#8B2515] focus:outline-none focus:ring-1 focus:ring-[#8B2515]"
        >
          <X size={16} className="transition-transform duration-200 group-hover:rotate-90" />
        </button>

        {/* Main 2-Column Content Layout (Desktop) / 1-Column Scrollable (Mobile) */}
        <div
          data-lenis-prevent="true"
          className="relative flex flex-col lg:flex-row w-full h-full min-h-0 overflow-y-auto lg:overflow-hidden"
        >

          {/* ===================================================================
              LEFT / MAIN AREA (roughly 52% on Desktop): Hero & 3 Image Strip
              =================================================================== */}
          <div className="relative w-full lg:w-[52%] h-[46vh] sm:h-[50vh] lg:h-full shrink-0 p-3.5 sm:p-5 lg:p-6 flex flex-col justify-between bg-[#EFE6D5]/35 border-b lg:border-b-0 lg:border-r border-[#523A28]/20 overflow-hidden">
            

            {/* Large Hero Image or Active Preview */}
            <div className="relative flex-1 w-full min-h-0 mb-3">
              <ArchivalImagePlaceholder
                placeholder={currentHero}
                isHero={true}
                accentColor={detail.accentColor}
              />
            </div>

            {/* Curated Editorial Photo Strip: 3 Supporting Thumbnails */}
            <div className="shrink-0 pt-2 border-t border-[#523A28]/15">

              {/* 3 Thumbnails Grid */}
              <div className="grid grid-cols-3 gap-2">
                {detail.supportingPlaceholders.map((sp, idx) => (
                  <div key={idx} className="relative aspect-[4/3] w-full">
                    <ArchivalImagePlaceholder
                      placeholder={sp}
                      isHero={false}
                      accentColor={detail.accentColor}
                      onClick={() =>
                        setActivePlaceholder(currentHero.code === sp.code ? null : sp)
                      }
                      isActive={currentHero.code === sp.code}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ===================================================================
              RIGHT / CONTENT AREA (roughly 48% on Desktop): Editorial Narrative
              =================================================================== */}
          <div
            data-lenis-prevent="true"
            tabIndex={0}
            className="archival-scrollbar relative w-full lg:w-[48%] h-auto lg:h-full min-h-0 flex-1 flex flex-col overflow-y-auto overscroll-contain focus:outline-none p-4 sm:p-6 lg:p-7 selection:bg-[#8B2515]/20 text-[#2C1810]"
          >
            
            <div className="space-y-3.5 sm:space-y-4 pb-8">
              

              {/* MAIN: Location Title & Poetic Tagline */}
              <div>
                <h2
                  className="font-serif font-black text-2xl sm:text-3xl lg:text-[34px] xl:text-4xl uppercase tracking-tight leading-[1.05] drop-shadow-sm [font-stretch:condensed]"
                  style={{ color: detail.accentColor }}
                >
                  {detail.title}
                </h2>

                {detail.subtitle && (
                  <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#523A28]/70 font-semibold mt-1">
                    {detail.subtitle}
                  </p>
                )}

                <p className="mt-1.5 font-editorial italic text-xs sm:text-sm text-[#523A28]/90 font-medium leading-relaxed">
                  “{detail.tagline}”
                </p>
              </div>

              {/* Delicate Vintage Divider */}
              <div className="flex items-center gap-3 py-0.5">
                <div className="flex-1 h-[1px] bg-[#523A28]/20" />
                <span className="text-xs" style={{ color: detail.accentColor }}>
                  ❖
                </span>
                <div className="flex-1 h-[1px] bg-[#523A28]/20" />
              </div>

              {/* CONTENT: Short Introduction */}
              <div className="space-y-1">
                <span className="block font-mono text-[8.5px] uppercase tracking-widest text-[#523A28]/60 font-semibold">
                  Introduction
                </span>
                <p className="font-serif text-xs sm:text-[13px] leading-relaxed text-[#3D2619] first-letter:text-base first-letter:font-bold first-letter:float-left first-letter:mr-1">
                  {detail.intro}
                </p>
              </div>

              {/* Helper: Story / Significance Renderer */}
              {(() => {
                const renderStory = () => (
                  <div className="space-y-1.5">
                    <span className="block font-mono text-[8.5px] uppercase tracking-widest text-[#523A28]/60 font-semibold">
                      {detail.storyTitle || "Significance & Narrative"}
                    </span>
                    {detail.story.split("\n\n").map((paragraph, pIdx) => (
                      <p key={pIdx} className="font-serif text-xs sm:text-[12.5px] leading-relaxed text-[#3D2619]/90">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                );

                const renderSections = () => (
                  <div className="space-y-3 pt-1">
                    {detail.sections!.map((section, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 sm:p-3.5 rounded-sm border border-[#523A28]/20 bg-[#FAF6EE]/80 shadow-[0_1px_3px_rgba(0,0,0,0.04)] space-y-2"
                      >
                        <div>
                          <span className="block font-mono text-[8px] uppercase tracking-[0.2em] text-[#8B2515] font-bold">
                            {section.title}
                          </span>
                          {section.subtitle && (
                            <h4
                              className="font-serif text-xs sm:text-[13px] font-bold uppercase tracking-tight mt-0.5"
                              style={{ color: detail.accentColor }}
                            >
                              {section.subtitle}
                            </h4>
                          )}
                        </div>

                        {section.content && (
                          <p className="font-serif text-[11.5px] sm:text-xs leading-relaxed text-[#3D2619]/90">
                            {section.content}
                          </p>
                        )}

                        {/* Timing Information (if present, e.g. Ganga Aarti / Subah-e-Banaras) */}
                        {section.timing && (
                          <div className="mt-2 pt-2 border-t border-[#523A28]/15 bg-white/60 p-2.5 rounded-sm text-[11px] font-mono text-[#2C1810] space-y-1.5">
                            <span className="block text-[8.5px] uppercase tracking-widest font-bold text-[#523A28]/70">
                              Timing & Schedule
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1 text-[10.5px]">
                              {section.timing.winter && (
                                <div className="flex items-baseline justify-between sm:justify-start sm:gap-2">
                                  <span className="text-[#523A28]/70 text-[9px] uppercase tracking-wider font-semibold">Winter:</span>
                                  <span className="font-semibold text-[#8B2515]">{section.timing.winter}</span>
                                </div>
                              )}
                              {section.timing.summer && (
                                <div className="flex items-baseline justify-between sm:justify-start sm:gap-2">
                                  <span className="text-[#523A28]/70 text-[9px] uppercase tracking-wider font-semibold">Summer:</span>
                                  <span className="font-semibold text-[#8B2515]">{section.timing.summer}</span>
                                </div>
                              )}
                              {section.timing.duration && (
                                <div className="flex items-baseline justify-between sm:justify-start sm:gap-2">
                                  <span className="text-[#523A28]/70 text-[9px] uppercase tracking-wider font-semibold">Duration:</span>
                                  <span className="font-medium text-[#2C1810]">{section.timing.duration}</span>
                                </div>
                              )}
                              {section.timing.location && (
                                <div className="flex items-baseline justify-between sm:justify-start sm:gap-2">
                                  <span className="text-[#523A28]/70 text-[9px] uppercase tracking-wider font-semibold">Location:</span>
                                  <span className="font-medium text-[#2C1810]">{section.timing.location}</span>
                                </div>
                              )}
                              {section.timing.programme && (
                                <div className="col-span-1 sm:col-span-2 flex items-baseline justify-between sm:justify-start sm:gap-2 border-t border-[#523A28]/10 pt-1">
                                  <span className="text-[#523A28]/70 text-[9px] uppercase tracking-wider font-semibold">Programme:</span>
                                  <span className="font-semibold text-[#2C1810]">{section.timing.programme}</span>
                                </div>
                              )}
                            </div>
                            {section.timing.note && (
                              <p className="text-[10px] font-editorial italic text-[#523A28]/85 pt-1 border-t border-[#523A28]/10 leading-normal">
                                {section.timing.note}
                              </p>
                            )}
                          </div>
                        )}

                        {/* Visitor Info Boxes (if present, e.g. Archaeological Site, Museum & Palace) */}
                        {section.visitorInfo && (
                          <div className={`gap-2.5 pt-1 ${section.visitorInfo.length === 1 ? "grid grid-cols-1" : "grid grid-cols-1 sm:grid-cols-2"}`}>
                            {section.visitorInfo.map((box, bIdx) => (
                              <div
                                key={bIdx}
                                className="p-2.5 rounded-sm border border-[#523A28]/15 bg-white/70 shadow-xs space-y-1.5"
                              >
                                <span className="block font-mono text-[8.5px] uppercase tracking-wider font-bold text-[#8B2515]">
                                  {box.heading}
                                </span>

                                <div className="text-[10.5px] font-mono text-[#2C1810] space-y-1">
                                  {box.timing && (
                                    <div className="flex items-baseline justify-between border-b border-[#523A28]/10 pb-0.5">
                                      <span className="text-[#523A28]/70 text-[9px] uppercase font-semibold">Timing:</span>
                                      <span className="font-semibold text-[#8B2515]">{box.timing}</span>
                                    </div>
                                  )}
                                  {box.schedule && (
                                    <div className="flex items-baseline justify-between border-b border-[#523A28]/10 pb-0.5">
                                      <span className="text-[#523A28]/70 text-[9px] uppercase font-semibold">Opening:</span>
                                      <span className="font-semibold text-[#8B2515]">{box.schedule}</span>
                                    </div>
                                  )}
                                  {box.duration && (
                                    <div className="flex items-baseline justify-between border-b border-[#523A28]/10 pb-0.5">
                                      <span className="text-[#523A28]/70 text-[9px] uppercase font-semibold">Visit:</span>
                                      <span className="font-medium text-[#2C1810]">{box.duration}</span>
                                    </div>
                                  )}
                                  {box.location && (
                                    <div className="flex items-baseline justify-between border-b border-[#523A28]/10 pb-0.5">
                                      <span className="text-[#523A28]/70 text-[9px] uppercase font-semibold">Location:</span>
                                      <span className="font-medium text-[#2C1810] truncate max-w-[65%] text-right">{box.location}</span>
                                    </div>
                                  )}
                                  {box.closed && (
                                    <div className="flex items-baseline justify-between border-b border-[#523A28]/10 pb-0.5">
                                      <span className="text-[#523A28]/70 text-[9px] uppercase font-semibold">Closed:</span>
                                      <span className="font-semibold text-[#8B2515]">{box.closed}</span>
                                    </div>
                                  )}
                                  {box.rates && (
                                    <div className="space-y-0.5 pt-0.5">
                                      {box.rates.map((rate, rIdx) => (
                                        <div key={rIdx} className="flex flex-wrap items-baseline justify-between gap-x-2 text-[10px]">
                                          <span className="text-[#523A28]/70 text-[8.5px] shrink-0">{rate.label}:</span>
                                          <span className="font-semibold text-right">{rate.price}</span>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>

                                {box.note && (
                                  <p className="text-[9.5px] font-editorial italic text-[#523A28]/85 pt-1 border-t border-[#523A28]/10 leading-snug">
                                    {box.note}
                                  </p>
                                )}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                );

                return (
                  <>
                    {detail.storyPosition === "before-sections" && renderStory()}
                    {detail.sections && detail.sections.length > 0 && renderSections()}
                    {detail.storyPosition !== "before-sections" && renderStory()}
                  </>
                );
              })()}

              {/* CONTENT: Key Highlights Bullet Points */}
              <div className="pt-1">
                <span className="block font-mono text-[8.5px] uppercase tracking-widest text-[#523A28]/60 font-semibold mb-2">
                  Key Highlights
                </span>
                <ul className="space-y-1.5">
                  {detail.highlights.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 font-serif text-[11.5px] sm:text-xs text-[#2C1810] leading-snug"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full mt-1 shrink-0"
                        style={{ backgroundColor: detail.accentColor }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>


          </div>

        </div>
      </div>
    </div>
  );
}
