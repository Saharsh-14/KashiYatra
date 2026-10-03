import React from "react";
import { SafeImage } from "@/components/media";
import { Heading, Text } from "@/components/typography";

/**
 * Ghat Excursion Ticket & River Pass (docs/design.md §5.3, Dark Slate Edition).
 *
 * Rendered on deep charcoal ground with subtle hairline rules:
 * - Panoramic header banner crop (~4.2:1 aspect ratio)
 * - 4 vertical columns separated by 1px hairline rules
 * - High-contrast monumental date stamp
 * - Authentic barcode graphic with alphanumeric tracking
 */
export function GhatExcursionTicket() {
  return (
    <div className="mx-auto mt-20 max-w-5xl md:mt-28">
      <div className="overflow-hidden rounded-sm border border-slate-300/80 bg-transparent text-slate-900 shadow-sm transition-shadow hover:shadow-md">
        {/* Top Panoramic Banner (Natural image plate with no card background) */}
        <div className="relative aspect-[4.2/1] w-full overflow-hidden bg-transparent">
          <SafeImage
            src="/images/hero/ganga-hero.jpg"
            alt="Dawn excursion boats along the Varanasi ghats"
            fallbackLabel="Kashi Ghat Yatra Pass"
            fill
            sizes="(min-width: 1024px) 1000px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6F0]/90 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-4 md:bottom-4 md:left-6">
            <span className="type-ui rounded-sm bg-[#FAF6F0]/95 px-2.5 py-1 text-[#B59A63] border border-slate-300/60 shadow-xs">
              RIVER PASS — KASHI YATRA
            </span>
          </div>
        </div>

        {/* Bottom Data Tier: 4 Columns with Clean Hairline Separators (No dark box) */}
        <div className="grid grid-cols-1 divide-y divide-slate-200 md:grid-cols-4 md:divide-x md:divide-y-0 bg-[#F4EFE6]/40">
          {/* Column 1: Editorial Context */}
          <div className="flex flex-col justify-between p-5 md:p-6">
            <div>
              <p className="type-ui uppercase tracking-wider text-slate-500 font-semibold text-[10px]">
                EXCURSION ROUTE
              </p>
              <Text
                as="p"
                size="ui"
                tone="light-secondary"
                measure={false}
                className="mt-2 text-xs leading-relaxed text-slate-700"
              >
                Tour of the sacred crescent. Early morning rowing boats, ancient stone steps, and dawn chanting across the water.
              </Text>
            </div>
            <p className="mt-4 type-ui text-[10px] text-slate-400">
              * Valid across all 84 registered ghats
            </p>
          </div>

          {/* Column 2: Monumental Date Stamp */}
          <div className="flex items-center justify-between p-5 md:flex-col md:items-start md:justify-center md:p-6">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                12
              </span>
              <div className="flex flex-col border-l border-slate-300 pl-3">
                <span className="type-ui font-semibold text-slate-900">
                  OCTOBER
                </span>
                <span className="type-ui text-slate-500">2026</span>
              </div>
            </div>
            <p className="type-ui mt-2 hidden text-[11px] text-slate-500 md:block">
              Morning Ganga Aarti & Darshan
            </p>
          </div>

          {/* Column 3: Event Title & Timings */}
          <div className="flex flex-col justify-between p-5 md:p-6">
            <div>
              <Heading
                as="h4"
                size="subheading"
                className="text-base tracking-wide uppercase md:text-lg text-slate-900 font-serif"
              >
                KASHI GHAT YATRA
              </Heading>
              <p className="type-ui text-xs tracking-wider text-[#B59A63] font-semibold">
                Heritage Wooden Boat Pass
              </p>
            </div>
            <div className="mt-4 flex items-center gap-6">
              <div>
                <span className="type-ui block text-[10px] text-slate-400">
                  DEPARTURE
                </span>
                <span className="font-serif text-sm font-semibold text-slate-800">
                  05:30 AM
                </span>
              </div>
              <div className="h-6 w-[1px] bg-slate-200" />
              <div>
                <span className="type-ui block text-[10px] text-slate-400">
                  RETURN
                </span>
                <span className="font-serif text-sm font-semibold text-slate-800">
                  08:15 AM
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: Barcode & Tracking */}
          <div className="flex flex-col items-center justify-center p-5 md:p-6">
            {/* High Density Barcode lines in dark slate */}
            <div
              className="flex h-12 w-full max-w-[160px] items-stretch justify-between gap-[2px] opacity-80"
              aria-label="Ticket barcode 082458 204"
            >
              {[
                3, 1, 2, 4, 1, 2, 1, 3, 2, 1, 4, 2, 1, 3, 1, 2, 4, 1, 2, 3, 1,
                2, 4, 1, 3, 2, 1, 3,
              ].map((w, i) => (
                <div
                  key={i}
                  className="bg-slate-800"
                  style={{ width: `${w}px` }}
                />
              ))}
            </div>
            <p className="type-ui mt-2 tracking-widest text-[9px] text-slate-400">
              082458 204 484050 48460014
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
