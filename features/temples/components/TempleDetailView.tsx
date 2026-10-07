"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Temple } from "@/types/content";
import { temples } from "@/data/temples";
import { getTempleDetail } from "@/data/templeDetails";
import { ROUTES } from "@/lib/routes";

import { TempleHero } from "./detail/TempleHero";
import { TempleTimings } from "./detail/TempleTimings";
import { TempleDailyAarti } from "./detail/TempleDailyAarti";
import { TempleAtAGlance } from "./detail/TempleAtAGlance";
import { TempleIntroduction } from "./detail/TempleIntroduction";
import { TempleStory } from "./detail/TempleStory";
import { TempleHistory } from "./detail/TempleHistory";
import { TempleWhyItMatters } from "./detail/TempleWhyItMatters";
import { TempleClosing } from "./detail/TempleClosing";
import { TempleBottomNav } from "./detail/TempleBottomNav";

interface TempleDetailViewProps {
  temple: Temple;
}

export function TempleDetailView({ temple }: TempleDetailViewProps) {
  // Navigation pointers
  const currentIndex = temples.findIndex((t) => t.slug === temple.slug);
  const isLast = currentIndex === temples.length - 1;
  const nextTemple = temples[(currentIndex + 1) % temples.length];
  const prevTemple =
    temples[(currentIndex - 1 + temples.length) % temples.length];

  const formattedIndex = String(temple.index).padStart(2, "0");
  const detail = getTempleDetail(temple.slug, temple.name, temple.subtitle);

  const heroSrc =
    temple.heroImage || `/images/temples/${temple.slug}/hero.jpg`;

  return (
    <div className="relative min-h-screen bg-[#FAF7F2] text-[#1E1A17] selection:bg-[#B59A63]/30 selection:text-[#1E1A17]">
      {/* ─── Top Navigation Bar (Preserved Visual Reference Style) ─── */}
      <header className="sticky top-0 z-40 w-full h-14 sm:h-16 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E3DACB] px-5 sm:px-8 lg:px-12 flex items-center justify-between text-[#1E1A17]">
        {/* Left: All Temples link */}
        <Link
          href={ROUTES.temples}
          className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] font-medium text-[#7A6B5B] hover:text-[#1E1A17] transition-colors uppercase"
          aria-label="Return to all temples"
        >
          <ArrowLeft
            size={15}
            className="transition-transform duration-300 group-hover:-translate-x-1 text-[#8E764D]"
          />
          <span>All Temples</span>
        </Link>

        {/* Center: Temple Name */}
        <div className="font-serif text-xs sm:text-sm tracking-[0.24em] font-semibold text-[#1E1A17] uppercase select-none truncate px-4">
          {temple.name}
        </div>

        {/* Right Spacer for balanced centering */}
        <div className="w-[100px] hidden sm:block pointer-events-none" aria-hidden="true" />
      </header>

      {/* ─── Main Sanctuary Content Experience ─── */}
      <main className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 pt-8 sm:pt-12 pb-16">
        {/* 1. HERO SECTION */}
        <TempleHero temple={temple} />

        {/* 2. QUICK VISITOR INFORMATION — IMMEDIATELY AFTER HERO */}
        <TempleTimings timings={detail.timings} />

        {/* 3. DAILY AARTI */}
        <TempleDailyAarti dailyAarti={detail.dailyAarti} />

        {/* 4. TEMPLE AT A GLANCE */}
        {detail.atAGlance && <TempleAtAGlance data={detail.atAGlance} />}

        {/* 5. MAIN TEMPLE INTRODUCTION */}
        <TempleIntroduction intro={detail.introduction} />

        {/* 6. THE STORY */}
        <TempleStory story={detail.story} />

        {/* 7. HISTORY & ARCHITECTURE */}
        <TempleHistory
          history={detail.history}
        />

        {/* 8. WHY IT MATTERS */}
        <TempleWhyItMatters whyItMatters={detail.whyItMatters} />

        {/* 9. CLOSING */}
        <TempleClosing closing={detail.closing} />

        {/* 10. PREVIOUS / NEXT TEMPLE NAVIGATION */}
        <TempleBottomNav
          prevTemple={prevTemple}
          nextTemple={nextTemple}
          isLast={isLast}
        />
      </main>
    </div>
  );
}
