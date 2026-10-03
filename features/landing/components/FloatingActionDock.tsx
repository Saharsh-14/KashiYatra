"use client";

import React, { useState } from "react";
import { Ticket, MapPin, Headphones, Landmark } from "lucide-react";

/**
 * Floating Viewport Action Dock (docs/design.md §5.9, Archetype 9).
 *
 * Subtle tactile dock anchored to the right viewport edge, providing quick
 * spatial access without cluttering the editorial reading flow.
 */
export function FloatingActionDock() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const actions = [
    {
      id: "pass",
      label: "River Pass",
      href: "#steps-to-eternity",
      icon: Ticket,
    },
    {
      id: "ghats",
      label: "Ghats Index",
      href: "#steps-to-eternity",
      icon: MapPin,
    },
    {
      id: "temples",
      label: "Temples",
      href: "#where-gods-reside",
      icon: Landmark,
    },
    {
      id: "audio",
      label: "Sacred Chants",
      href: "#story-of-kashi",
      icon: Headphones,
    },
  ];

  return (
    <aside
      aria-label="Quick spatial shortcuts"
      className="fixed right-4 md:right-6 lg:right-8 top-1/2 z-navigation hidden -translate-y-1/2 flex-col items-center gap-2 p-1.5 rounded-full bg-[#181614]/75 backdrop-blur-md border border-[#38332B]/80 shadow-[0_8px_30px_rgba(0,0,0,0.4)] lg:flex"
    >
      {actions.map((action) => {
        const Icon = action.icon;
        const isHovered = activeTooltip === action.id;

        return (
          <div key={action.id} className="relative flex items-center justify-center">
            {/* Tooltip that slides out on hover */}
            {isHovered && (
              <span className="type-ui pointer-events-none absolute right-12 whitespace-nowrap rounded-[2px] bg-[#12110F] px-2.5 py-1 text-[10px] uppercase tracking-widest text-[#E8E1D3] shadow-xl border border-[#38332B] animate-in fade-in slide-in-from-right-2">
                {action.label}
              </span>
            )}

            <a
              href={action.href}
              onMouseEnter={() => setActiveTooltip(action.id)}
              onMouseLeave={() => setActiveTooltip(null)}
              aria-label={action.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-transparent text-[#CFC4B1] transition-all hover:bg-[#26231E] hover:border-[#B59A63]/50 hover:text-[#FAF6F0]"
            >
              <Icon size={16} strokeWidth={1.5} />
            </a>
          </div>
        );
      })}
    </aside>
  );
}
