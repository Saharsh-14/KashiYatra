import React from "react";
import { SafeImage } from "@/components/media";
import { Heading, Text } from "@/components/typography";

/**
 * Split 50/50 Schedule & Visitor Timings Panel (docs/design.md §5.7, Archetype 7).
 *
 * Left side presents a salon gallery of ghat scenes; right side provides
 * an understated tabular schedule with clean 1px hairline dividers.
 */
export function VisitorSchedulePanel() {
  return (
    <div className="mx-auto mt-20 max-w-5xl overflow-hidden rounded-sm border border-slate-300/80 bg-transparent text-slate-900 shadow-sm md:mt-28">
      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* Left Side: Salon Gallery Wall (5 cols) - NO card background */}
        <div className="relative min-h-[300px] overflow-hidden border-b border-slate-200 bg-transparent md:col-span-5 md:min-h-full md:border-b-0 md:border-r">
          <SafeImage
            src="/images/ghats/chet-singh.jpg"
            alt="Historical stone ramparts and river steps of Varanasi"
            fallbackLabel="Ghat Architecture"
            fill
            sizes="(min-width: 1024px) 450px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6F0]/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#FAF6F0]/50" />
          <div className="absolute bottom-4 left-4 z-content">
            <span className="type-ui rounded-sm bg-[#FAF6F0]/95 px-2.5 py-1 text-xs font-semibold text-slate-800 shadow-xs border border-slate-300/60">
              CHET SINGH FORT STEPS
            </span>
          </div>
        </div>

        {/* Right Side: Tabular Timings & Schedule (7 cols) on Light Cream */}
        <div className="flex flex-col justify-between p-6 bg-[#F4EFE6]/30 md:p-10 md:col-span-7">
          <div>
            <span className="type-ui text-xs font-semibold uppercase tracking-widest text-[#B59A63]">
              PRACTICAL DIRECTORY
            </span>
            <Heading as="h3" size="subheading" className="mt-2 text-slate-900 font-serif">
              Visitor Hours & Sacred Timings
            </Heading>
            <Text tone="light-secondary" size="body" measure={false} className="mt-2 text-sm text-slate-600">
              The ghats follow the cycle of the sun. Morning rituals commence before dawn, and evening prayers begin at dusk.
            </Text>

            {/* Subsection 1: Boat Rates */}
            <div className="mt-8">
              <h4 className="type-ui uppercase tracking-wider text-slate-500 font-semibold text-[11px]">
                REGULATED RIVER RATES
              </h4>
              <div className="mt-3 divide-y divide-slate-200 text-sm">
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-slate-800">Morning Rowing Boat (Assi → Manikarnika)</span>
                  <span className="font-serif font-semibold text-slate-900">₹300 / hr</span>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-slate-800">Sunset Aarti Shared Cruise</span>
                  <span className="font-serif font-semibold text-slate-900">₹150 / person</span>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-slate-800">Full Crescent Heritage Boat (Private)</span>
                  <span className="font-serif font-semibold text-slate-900">₹1,200 / tour</span>
                </div>
              </div>
            </div>

            {/* Subsection 2: Aarti Timings */}
            <div className="mt-8">
              <h4 className="type-ui uppercase tracking-wider text-slate-500 font-semibold text-[11px]">
                DAILY AARTI SCHEDULE
              </h4>
              <div className="mt-3 divide-y divide-slate-200 text-sm">
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-slate-800">Subah-e-Banaras (Assi Ghat)</span>
                  <span className="font-serif font-semibold text-[#B59A63]">05:00 AM — 06:30 AM</span>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-slate-800">Ganga Maha Aarti (Dashashwamedh)</span>
                  <span className="font-serif font-semibold text-[#B59A63]">06:45 PM — 07:45 PM</span>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-8 type-ui text-xs text-slate-500">
            * Timings shift by 15–30 minutes seasonally in accordance with sunrise and sunset.
          </p>
        </div>
      </div>
    </div>
  );
}
