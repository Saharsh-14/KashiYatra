import React from "react";
import type { Temple } from "@/types/content";
import { TempleImageWindow } from "./TempleImageWindow";
import { TempleInfo } from "./TempleInfo";

interface TempleSectionProps {
  temple: Temple;
  totalTemples?: number;
}

/**
 * Temple Section — One of the 8 Sacred Chapters.
 *
 * Alternating Composition:
 * - Temple 01: Image Window → RIGHT, Information → LEFT
 * - Temple 02: Information → RIGHT, Image Window → LEFT
 * - Temple 03: Image Window → RIGHT, Information → LEFT
 * - Temple 04: Information → RIGHT, Image Window → LEFT
 * - Temple 05: Image Window → RIGHT, Information → LEFT
 * - Temple 06: Information → RIGHT, Image Window → LEFT
 * - Temple 07: Image Window → RIGHT, Information → LEFT
 * - Temple 08: Information → RIGHT, Image Window → LEFT
 *
 * Mobile:
 * Always stacks naturally: Image Window first, then Temple Info.
 */
export function TempleSection({
  temple,
  totalTemples = 8,
}: TempleSectionProps) {
  // Odd index (1, 3, 5, 7): Image Right, Info Left
  // Even index (2, 4, 6, 8): Image Left, Info Right
  const isImageRight = temple.index % 2 === 1;

  const sectionId = `temple-${String(temple.index).padStart(2, "0")}`;

  return (
    <section
      id={sectionId}
      aria-label={`Temple ${temple.index} of ${totalTemples} — ${temple.name}`}
      className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-[#E8E1D3]/10 overflow-hidden bg-[#10100E]"
    >
      {/* Background subtle atmospheric gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-20"
      >
        <div
          className={`absolute w-[500px] h-[500px] rounded-full blur-3xl ${
            isImageRight
              ? "right-0 top-1/4 bg-[radial-gradient(circle,rgba(181,154,99,0.15)_0%,transparent_70%)]"
              : "left-0 bottom-1/4 bg-[radial-gradient(circle,rgba(152,95,73,0.15)_0%,transparent_70%)]"
          }`}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Alternating 12-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* On Mobile: Image is ALWAYS order-1, Info is order-2 */}
          {/* On Desktop (lg): Follows alternating pattern */}

          {/* INFORMATION COLUMN */}
          <div
            className={`w-full lg:col-span-5 order-2 ${
              isImageRight ? "lg:order-1" : "lg:order-2"
            }`}
          >
            <TempleInfo temple={temple} totalTemples={totalTemples} />
          </div>

          {/* IMAGE PREVIEW WINDOW COLUMN */}
          <div
            className={`w-full lg:col-span-7 order-1 ${
              isImageRight ? "lg:order-2" : "lg:order-1"
            }`}
          >
            <TempleImageWindow
              templeName={temple.name}
              templeSlug={temple.slug}
              photos={temple.photos}
              templeIndex={temple.index}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
