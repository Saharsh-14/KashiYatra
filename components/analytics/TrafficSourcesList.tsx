"use client";

import { SourceMetric, TrafficSource } from "@/types/analytics";
import { Globe, Compass } from "lucide-react";


interface TrafficSourcesListProps {
  sources: SourceMetric[];
  totalViews: number;
}

function getSourceIcon(source: TrafficSource) {
  switch (source) {
    case "Google":
      return (
        <div className="w-5 h-5 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 flex items-center justify-center text-[11px] font-bold">
          G
        </div>
      );
    case "Instagram":
      return (
        <div className="w-5 h-5 rounded-full bg-pink-500/10 text-pink-400 border border-pink-500/20 flex items-center justify-center text-[11px] font-bold">
          IG
        </div>
      );
    case "Direct":
      return (
        <div className="w-5 h-5 rounded-full bg-palette-brass/10 text-palette-brass border border-palette-brass/20 flex items-center justify-center">
          <Compass className="w-3 h-3" />
        </div>
      );
    case "X / Twitter":
      return (
        <div className="w-5 h-5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 flex items-center justify-center text-[11px] font-bold">
          𝕏
        </div>
      );
    case "YouTube":
      return (
        <div className="w-5 h-5 rounded-full bg-red-600/10 text-red-500 border border-red-600/20 flex items-center justify-center text-[10px] font-bold">
          ▶
        </div>
      );
    case "LinkedIn":
      return (
        <div className="w-5 h-5 rounded-full bg-blue-600/10 text-blue-400 border border-blue-600/20 flex items-center justify-center text-[10px] font-bold">
          in
        </div>
      );
    default:
      return (
        <div className="w-5 h-5 rounded-full bg-content-muted/10 text-content-muted border border-edge flex items-center justify-center">
          <Globe className="w-3 h-3" />
        </div>
      );
  }
}

function getSourceBarColor(source: TrafficSource) {
  switch (source) {
    case "Google":
      return "bg-gradient-to-r from-red-500/80 to-amber-500/80";
    case "Instagram":
      return "bg-gradient-to-r from-pink-500/80 to-purple-500/80";
    case "Direct":
      return "bg-gradient-to-r from-palette-brass to-palette-sand";
    case "X / Twitter":
      return "bg-gradient-to-r from-sky-400/80 to-blue-500/80";
    default:
      return "bg-gradient-to-r from-palette-ganga-mist to-palette-sand";
  }
}

export function TrafficSourcesList({ sources, totalViews }: TrafficSourcesListProps) {
  if (!sources || sources.length === 0) {
    return (
      <div className="py-8 text-center text-content-muted text-xs font-ui">
        No referrer streams detected yet.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {sources.map((s) => {
        const percentage = totalViews > 0 ? Math.round((s.count / totalViews) * 100) : 0;

        return (
          <div
            key={s.source}
            className="p-3 rounded-lg bg-surface/40 hover:bg-surface-elevated/70 border border-edge/60 hover:border-palette-brass/40 transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                {getSourceIcon(s.source)}
                <div>
                  <span className="text-xs font-medium text-palette-ivory font-ui block">
                    {s.label}
                  </span>
                  <span className="text-[10px] text-content-muted">
                    {(s.visitors ?? s.count).toLocaleString()} unique {(s.visitors ?? s.count) === 1 ? "visitor" : "visitors"}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-xs font-mono font-bold text-palette-ivory block">
                  {s.count.toLocaleString()}
                </span>
                <span className="text-[10px] font-mono text-palette-brass font-medium">
                  {percentage}%
                </span>
              </div>
            </div>

            <div className="w-full bg-palette-ink h-1.5 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-700 ease-out ${getSourceBarColor(
                  s.source
                )}`}
                style={{ width: `${Math.max(percentage, 2)}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
