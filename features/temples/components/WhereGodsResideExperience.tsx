"use client";

import React, { useState, useEffect } from "react";
import { temples } from "@/data/temples";
import { WhereGodsResideHeader } from "./WhereGodsResideHeader";
import { WhereGodsResidePortal } from "@/features/landing/sections/WhereGodsResidePortal";
import { TempleSection } from "./TempleSection";
import { WhereGodsResideEnding } from "./WhereGodsResideEnding";

/**
 * Where Gods Reside — Full Immersive Experience.
 *
 * Requirements:
 * - Dedicated redirected page
 * - Sacred Threshold entrance chamber (no temple names revealed)
 * - 8 locked temples in strict order (01 to 08) discovered one by one
 * - Alternating composition (Image Right vs Image Left)
 * - Large visual centerpiece image window (one photo at a time)
 * - Quiet minimal ending: "EIGHT DOORWAYS. ONE ETERNAL CITY."
 * - Vertical scrolling journey
 */
export function WhereGodsResideExperience() {
  const [activeTempleIndex, setActiveTempleIndex] = useState<number>(0);

  // Track active temple as user scrolls through the threshold & the 8 sections
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            if (id === "threshold") {
              setActiveTempleIndex(0);
              return;
            }
            const match = id.match(/temple-(\d+)/);
            if (match) {
              const idx = parseInt(match[1], 10);
              if (!isNaN(idx)) {
                setActiveTempleIndex(idx);
              }
            }
          }
        });
      },
      {
        rootMargin: "-25% 0px -40% 0px",
        threshold: 0.1,
      }
    );

    // Observe threshold section
    const thresholdEl = document.getElementById("threshold");
    if (thresholdEl) observer.observe(thresholdEl);

    // Observe each of the 8 temples
    temples.forEach((temple) => {
      const el = document.getElementById(
        `temple-${String(temple.index).padStart(2, "0")}`
      );
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleStepInside = () => {
    const temple1 = document.getElementById("temple-01");
    if (temple1) {
      temple1.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0908] text-[#E8E1D3] selection:bg-[#B59A63]/30 selection:text-[#FAF6F0]">
      {/* Pinned Chapter Header */}
      <WhereGodsResideHeader
        activeTempleIndex={activeTempleIndex}
        totalTemples={temples.length}
      />

      <main id="main">
        {/* Sacred Threshold Entry Chamber — Unified Fixed Cosmic Hero */}
        <WhereGodsResidePortal id="threshold" onStepInside={handleStepInside} />

        {/* 8 Temples in Locked Sequence with Alternating Compositions */}
        <div className="relative">
          {temples.map((temple) => (
            <TempleSection
              key={temple.id}
              temple={temple}
              totalTemples={temples.length}
            />
          ))}
        </div>

        {/* Quiet Minimal Ending */}
        <WhereGodsResideEnding />
      </main>
    </div>
  );
}
