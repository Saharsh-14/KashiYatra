"use client";

import React from "react";
import { temples } from "@/data/temples";
import { TemplesTopBar } from "./TemplesTopBar";
import { TempleEditorialCard } from "./TempleEditorialCard";
import { TemplesFooter } from "./TemplesFooter";

/**
 * Dedicated Temples Page — Luxury Editorial Gallery.
 *
 * Visual direction:
 * - Full-width sections (no boxed container)
 * - Warm parchment background (#EDE5D3) — opaque, overriding the global dark body
 * - Generous section heights (~400px+)
 * - Large bold serif typography
 * - Thin horizontal dividers between sections
 * - Alternating photo/info layout
 * - Subtle paper texture grain
 */
export function WhereGodsResideExperience() {
  return (
    <div
      className="relative min-h-screen text-[#2C241D] selection:bg-[#B59A63]/30 selection:text-[#2C241D]"
      style={{
        background: `
          radial-gradient(ellipse 120% 80% at 20% 10%, rgba(210, 190, 155, 0.25) 0%, transparent 60%),
          radial-gradient(ellipse 100% 60% at 80% 90%, rgba(195, 175, 140, 0.2) 0%, transparent 50%),
          radial-gradient(ellipse 60% 40% at 50% 50%, rgba(220, 205, 180, 0.15) 0%, transparent 40%),
          linear-gradient(180deg, #F0E8D5 0%, #EDE5D3 25%, #EBE3D0 50%, #EDE5D3 75%, #E8E0CC 100%)
        `,
      }}
    >
      {/* Subtle paper noise texture */}
      <div
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      {/* Discreet Sticky Navigation Top Bar */}
      <TemplesTopBar />

      {/* Main Temple Gallery — Full Width, Direct Start */}
      <main id="temples-gallery" className="relative z-[1] w-full">
        {temples.map((temple, i) => (
          <TempleEditorialCard
            key={temple.id}
            temple={temple}
            totalTemples={temples.length}
            isLast={i === temples.length - 1}
          />
        ))}
      </main>

      {/* Editorial Closing Section */}
      <TemplesFooter />
    </div>
  );
}
