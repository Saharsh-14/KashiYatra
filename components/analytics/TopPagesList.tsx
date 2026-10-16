"use client";

import { PageMetric } from "@/types/analytics";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface TopPagesListProps {
  pages: PageMetric[];
  totalViews: number;
}

export function TopPagesList({ pages, totalViews }: TopPagesListProps) {
  if (!pages || pages.length === 0) {
    return (
      <div className="py-8 text-center text-content-muted text-xs font-ui">
        No page visit records detected yet.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {pages.map((p, idx) => {
        const rank = (idx + 1).toString().padStart(2, "0");
        const percentage = totalViews > 0 ? Math.round((p.views / totalViews) * 100) : 0;

        return (
          <div
            key={p.path}
            className="group relative p-3 rounded-lg bg-surface/40 hover:bg-surface-elevated/70 border border-edge/60 hover:border-palette-brass/40 transition-all duration-200"
          >
            <div className="flex items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-3 min-w-0">
                <span className="font-editorial text-xs text-palette-brass font-bold shrink-0">
                  {rank}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-medium text-palette-ivory truncate group-hover:text-palette-brass transition-colors">
                      {p.title}
                    </span>
                    <Link
                      href={p.path}
                      target="_blank"
                      className="opacity-0 group-hover:opacity-100 text-content-muted hover:text-palette-ivory transition-opacity"
                    >
                      <ExternalLink className="w-3 h-3" />
                    </Link>
                  </div>
                  <span className="text-[10px] text-content-muted font-mono truncate block">
                    {p.path}
                  </span>
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="text-xs font-mono font-bold text-palette-ivory block">
                  {p.views.toLocaleString()} <span className="text-[10px] text-content-muted font-normal">views</span>
                </span>
                <span className="text-[10px] text-content-secondary font-ui">
                  {p.visitors.toLocaleString()} visitors
                </span>
              </div>
            </div>

            {/* Visual proportion fill */}
            <div className="w-full bg-palette-ink h-1.5 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-palette-brass to-palette-terracotta rounded-full transition-all duration-700 ease-out"
                style={{ width: `${Math.max(percentage, 3)}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
