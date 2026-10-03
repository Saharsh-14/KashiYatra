import React from "react";
import Link from "next/link";
import { Ticket, Compass, Users } from "lucide-react";
import { Heading, Text } from "@/components/typography";

/**
 * Experience Metric Bar with Hairline Dividers (docs/design.md §5.5, Archetype 5).
 *
 * Framed in Deep Charcoal with full-height 1px hairline rules, providing
 * operational context alongside the journey without disrupting cinematic tone.
 */
export function ExperienceMetricBar() {
  return (
    <div className="mx-auto mt-16 max-w-5xl rounded-sm border border-slate-300/80 bg-transparent text-slate-900 p-6 md:mt-24 md:p-10 shadow-xs">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-0">
        {/* Left Column: Context & Hours (5 cols) */}
        <div className="flex flex-col justify-between md:col-span-5 md:pr-10">
          <div>
            <span className="type-ui text-xs font-semibold uppercase tracking-widest text-[#B59A63]">
              EXPERIENCE THE CRESCENT
            </span>
            <Heading as="h3" size="subheading" className="mt-2 text-slate-900 font-serif">
              Quiet hours on the water.
            </Heading>
            <div className="mt-4">
              <span className="type-ui block text-slate-500 text-xs">
                DAILY DARSHAN HOURS
              </span>
              <p className="font-serif text-lg text-slate-800 font-semibold">
                04:00 AM — 11:00 PM
              </p>
              <p className="type-ui mt-1 text-xs text-slate-500">
                Mangala Aarti begins at dawn; Maha Aarti concludes at dusk.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href="#steps-to-eternity"
              className="type-ui inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-2.5 text-slate-800 transition-colors hover:border-[#B59A63] hover:text-[#B59A63]"
            >
              Explore Eight Steps ↓
            </Link>
          </div>
        </div>

        {/* Center Hairline Divider (Desktop Only) */}
        <div className="hidden md:col-span-1 md:flex md:justify-center">
          <div className="h-full w-[1px] bg-slate-200" />
        </div>

        {/* Right Column: Key Operational Features (6 cols) */}
        <div className="flex flex-col justify-center divide-y divide-slate-200 md:col-span-6 md:pl-6">
          {/* Row 1: Passes */}
          <div className="flex items-start gap-4 pb-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-slate-300 bg-[#FAF6F0] text-[#B59A63]">
              <Ticket size={18} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="type-ui font-semibold uppercase tracking-wider text-slate-900 text-xs">
                RIVER ROWING TICKETS
              </h4>
              <Text as="p" size="ui" tone="light-secondary" measure={false} className="mt-1 text-slate-600 text-xs">
                Hand-rowed wooden boats from Assi to Manikarnika without middleman pricing.
              </Text>
            </div>
          </div>

          {/* Row 2: Convergence */}
          <div className="flex items-start gap-4 py-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-slate-300 bg-[#FAF6F0] text-[#B59A63]">
              <Compass size={18} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="type-ui font-semibold uppercase tracking-wider text-slate-900 text-xs">
                SACRED CONVERGENCE
              </h4>
              <Text as="p" size="ui" tone="light-secondary" measure={false} className="mt-1 text-slate-600 text-xs">
                The ancient northward crescent between the sacred Varuna and Assi rivers.
              </Text>
            </div>
          </div>

          {/* Row 3: Dawn Chants & Groups */}
          <div className="flex items-start gap-4 pt-5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-slate-300 bg-[#FAF6F0] text-[#B59A63]">
              <Users size={18} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="type-ui font-semibold uppercase tracking-wider text-slate-900 text-xs">
                PILGRIMS & HERITAGE WALKS
              </h4>
              <Text as="p" size="ui" tone="light-secondary" measure={false} className="mt-1 text-slate-600 text-xs">
                Silent dawn walks along stone pathways and traditional wrestling akharas.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
