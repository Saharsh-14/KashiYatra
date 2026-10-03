"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Ghat } from "@/types/content";
import { ghats } from "@/data/ghats";
import { ROUTES, ghatRoute } from "@/lib/routes";

interface GhatExperienceProps {
  ghat: Ghat;
}

export function GhatExperience({ ghat }: GhatExperienceProps) {
  const currentIndex = ghat.index - 1;
  const prevGhat = currentIndex > 0 ? ghats[currentIndex - 1] : ghats[ghats.length - 1];
  const nextGhat = currentIndex < ghats.length - 1 ? ghats[currentIndex + 1] : ghats[0];

  return (
    <div className="relative min-h-screen bg-[#0c0c0a] text-[#FAF6F0] selection:bg-[#B59A63]/30 selection:text-[#FAF6F0]">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 sm:px-12 py-5 bg-[#0c0c0a]/80 backdrop-blur-md border-b border-white/10">
        <Link
          href={`${ROUTES.kashi}#steps-to-eternity`}
          className="inline-flex items-center gap-2.5 text-xs uppercase tracking-[0.25em] font-ui text-[#D6CEBE]/80 hover:text-[#FAF6F0] transition-colors"
        >
          <ArrowLeft size={16} className="text-[#B59A63]" />
          <span>Back to Steps to Eternity</span>
        </Link>

        <div className="flex items-center gap-3">
          <span className="type-ui text-xs tracking-widest text-[#B59A63]">
            GHAT 0{ghat.index}
          </span>
          <span className="text-white/30 text-xs font-mono">/ 08</span>
        </div>
      </header>

      {/* Main Hero Photograph Stage */}
      <main className="relative pt-24 pb-20 px-6 sm:px-12 md:px-20 max-w-7xl mx-auto flex flex-col gap-12">
        {/* Large Cinematic Image Window */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[68vh] rounded-[2px] overflow-hidden border border-[#E8E1D3]/15 shadow-[0_30px_90px_rgba(0,0,0,0.85)] bg-[#12110F]">
          <Image
            src={ghat.image}
            alt={ghat.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0a] via-transparent to-black/40" />

          {/* Floating Tagline on image */}
          <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-10 max-w-xl">
            <span className="type-ui text-xs tracking-[0.3em] uppercase text-[#B59A63] font-medium block mb-2">
              {ghat.significance}
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal text-[#FAF6F0] leading-none drop-shadow-lg">
              {ghat.name}
            </h1>
            {ghat.devanagariName && (
              <span
                className="font-serif text-xl sm:text-2xl text-[#E09F3E] tracking-widest block mt-2"
                style={{ fontFamily: "'Noto Serif Devanagari', 'Rozha One', serif" }}
              >
                {ghat.devanagariName}
              </span>
            )}
          </div>
        </div>

        {/* Narrative & Essence Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          <div className="lg:col-span-8 flex flex-col gap-6">
            <p className="font-serif italic text-2xl sm:text-3xl text-[#E8E1D3] leading-relaxed">
              "{ghat.tagline}"
            </p>

            <p className="text-base sm:text-lg text-[#D6CEBE]/90 font-light leading-relaxed font-sans max-w-3xl">
              {ghat.description}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-6 p-6 rounded-[2px] bg-[#141210]/90 border border-white/10">
            <div>
              <span className="type-ui text-[11px] uppercase tracking-widest text-[#B59A63] block mb-1">
                Sacred Atmosphere
              </span>
              <span className="text-sm font-serif text-[#FAF6F0]">
                {ghat.timeOfDay}
              </span>
            </div>

            <div>
              <span className="type-ui text-[11px] uppercase tracking-widest text-[#B59A63] block mb-1">
                Position in Kashi
              </span>
              <span className="text-sm font-sans text-[#D6CEBE]">
                Ghat 0{ghat.index} of 84 Sacred Thresholds along the crescent Ganga.
              </span>
            </div>
          </div>
        </div>

        {/* Stepper Footer: Previous / Next Ghat */}
        <div className="flex items-center justify-between pt-12 border-t border-white/10">
          <Link
            href={ghatRoute(prevGhat.slug)}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/15 hover:border-[#B59A63] text-sm text-[#D6CEBE] hover:text-[#FAF6F0] transition-colors"
          >
            <ArrowLeft size={16} className="text-[#B59A63]" />
            <span>0{prevGhat.index} · {prevGhat.name}</span>
          </Link>

          <Link
            href={ghatRoute(nextGhat.slug)}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/15 hover:border-[#B59A63] text-sm text-[#D6CEBE] hover:text-[#FAF6F0] transition-colors"
          >
            <span>0{nextGhat.index} · {nextGhat.name}</span>
            <ArrowRight size={16} className="text-[#B59A63]" />
          </Link>
        </div>
      </main>
    </div>
  );
}
