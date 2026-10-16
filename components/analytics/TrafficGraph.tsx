"use client";

import { useState } from "react";
import { DayMetric } from "@/types/analytics";

interface TrafficGraphProps {
  data: DayMetric[];
  range: "24h" | "7d" | "30d" | "all";
  onRangeChange: (r: "7d" | "30d") => void;
}

export function TrafficGraph({ data, range, onRangeChange }: TrafficGraphProps) {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const points = data && data.length > 0 ? data : [];
  const maxVal = Math.max(
    ...points.map((p) => Math.max(p.views, p.visitors)),
    10
  );

  // SVG dimensions
  const width = 800;
  const height = 280;
  const padLeft = 45;
  const padRight = 25;
  const padTop = 30;
  const padBottom = 40;

  const chartW = width - padLeft - padRight;
  const chartH = height - padTop - padBottom;

  const getX = (index: number) => {
    if (points.length <= 1) return padLeft + chartW / 2;
    return padLeft + (index / (points.length - 1)) * chartW;
  };

  const getY = (val: number) => {
    return padTop + chartH - (val / maxVal) * chartH;
  };

  // Generate smooth SVG paths
  const viewsPoints = points.map((p, i) => `${getX(i)},${getY(p.views)}`).join(" ");
  const visitorsPoints = points.map((p, i) => `${getX(i)},${getY(p.visitors)}`).join(" ");

  const viewsAreaPath = points.length > 0
    ? `M ${getX(0)},${getY(points[0].views)} ` +
      points.slice(1).map((p, i) => `L ${getX(i + 1)},${getY(p.views)}`).join(" ") +
      ` L ${getX(points.length - 1)},${padTop + chartH} L ${getX(0)},${padTop + chartH} Z`
    : "";

  const activePoint = hoverIndex !== null && points[hoverIndex] ? points[hoverIndex] : null;

  return (
    <div className="w-full">
      {/* Header controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 gap-3">
        <div>
          <h3 className="text-base font-editorial text-palette-ivory">
            Traffic Trends
          </h3>
          <p className="text-xs text-content-muted mt-0.5">
            Website visits & unique visitors over the selected period
          </p>
        </div>

        {/* Range switcher & legend */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 text-xs text-content-secondary font-ui">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-palette-brass inline-block shadow-sm" />
              Page Views
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-palette-ganga-mist inline-block shadow-sm" />
              Unique Visitors
            </span>
          </div>

          <div className="inline-flex p-1 bg-surface-elevated rounded-lg border border-edge">
            <button
              onClick={() => onRangeChange("7d")}
              className={`px-3 py-1 text-xs rounded-md font-ui transition-colors ${
                range === "7d"
                  ? "bg-palette-brass text-palette-ink font-semibold"
                  : "text-content-secondary hover:text-content-primary"
              }`}
            >
              7 Days
            </button>
            <button
              onClick={() => onRangeChange("30d")}
              className={`px-3 py-1 text-xs rounded-md font-ui transition-colors ${
                range === "30d"
                  ? "bg-palette-brass text-palette-ink font-semibold"
                  : "text-content-secondary hover:text-content-primary"
              }`}
            >
              30 Days
            </button>
          </div>
        </div>
      </div>

      {/* SVG Canvas */}
      <div className="relative w-full aspect-[21/9] min-h-[260px] bg-surface/30 rounded-xl p-2 border border-edge/60">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full h-full overflow-visible"
          onMouseLeave={() => setHoverIndex(null)}
        >
          <defs>
            <linearGradient id="viewsAreaGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#b59a63" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#b59a63" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="viewsLineGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#b59a63" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>
            <filter id="glowBrass" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Gridlines */}
          {[0, 0.25, 0.5, 0.75, 1].map((step) => {
            const y = padTop + chartH * (1 - step);
            const labelVal = Math.round(maxVal * step);
            return (
              <g key={step}>
                <line
                  x1={padLeft}
                  y1={y}
                  x2={width - padRight}
                  y2={y}
                  stroke="rgba(232, 225, 211, 0.08)"
                  strokeDasharray="3 3"
                />
                <text
                  x={padLeft - 10}
                  y={y + 4}
                  textAnchor="end"
                  className="text-[10px] fill-content-muted font-mono"
                >
                  {labelVal}
                </text>
              </g>
            );
          })}

          {/* Area fill */}
          {viewsAreaPath && (
            <path
              d={viewsAreaPath}
              fill="url(#viewsAreaGrad)"
              className="transition-all duration-500 ease-out"
            />
          )}

          {/* Page Views Polyline */}
          {viewsPoints && (
            <polyline
              points={viewsPoints}
              fill="none"
              stroke="url(#viewsLineGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glowBrass)"
              className="transition-all duration-500"
            />
          )}

          {/* Unique Visitors Polyline */}
          {visitorsPoints && (
            <polyline
              points={visitorsPoints}
              fill="none"
              stroke="#aeb8b3"
              strokeWidth="2"
              strokeDasharray="4 4"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.8"
              className="transition-all duration-500"
            />
          )}

          {/* Interactive vertical hover line & points */}
          {hoverIndex !== null && points[hoverIndex] && (
            <g>
              <line
                x1={getX(hoverIndex)}
                y1={padTop}
                x2={getX(hoverIndex)}
                y2={padTop + chartH}
                stroke="#b59a63"
                strokeWidth="1.5"
                strokeDasharray="2 2"
                opacity="0.8"
              />
              {/* Views marker */}
              <circle
                cx={getX(hoverIndex)}
                cy={getY(points[hoverIndex].views)}
                r="5"
                fill="#b59a63"
                stroke="#10100e"
                strokeWidth="2"
              />
              {/* Visitors marker */}
              <circle
                cx={getX(hoverIndex)}
                cy={getY(points[hoverIndex].visitors)}
                r="4"
                fill="#aeb8b3"
                stroke="#10100e"
                strokeWidth="2"
              />
            </g>
          )}

          {/* Hover trigger zones */}
          {points.map((p, i) => (
            <rect
              key={p.date}
              x={getX(i) - (chartW / points.length) / 2}
              y={padTop}
              width={chartW / points.length}
              height={chartH}
              fill="transparent"
              className="cursor-pointer"
              onMouseEnter={() => setHoverIndex(i)}
            />
          ))}

          {/* X Axis Date labels */}
          {points.map((p, i) => {
            // Show label every N items depending on length
            const step = points.length > 15 ? 4 : points.length > 8 ? 2 : 1;
            if (i % step !== 0 && i !== points.length - 1) return null;

            return (
              <text
                key={p.date}
                x={getX(i)}
                y={padTop + chartH + 20}
                textAnchor="middle"
                className="text-[10px] fill-content-muted font-ui"
              >
                {p.displayDate}
              </text>
            );
          })}
        </svg>

        {/* Floating Tooltip */}
        {activePoint && hoverIndex !== null && (
          <div
            className="absolute pointer-events-none z-20 bg-palette-charcoal/95 backdrop-blur-md border border-palette-brass/40 rounded-lg p-2.5 shadow-deep transition-all duration-150 transform -translate-x-1/2 -translate-y-full"
            style={{
              left: `${(getX(hoverIndex) / width) * 100}%`,
              top: `${(getY(activePoint.views) / height) * 100 - 8}%`,
            }}
          >
            <div className="text-[11px] font-medium text-palette-ivory pb-1 border-b border-edge/60">
              {activePoint.displayDate} ({activePoint.date})
            </div>
            <div className="flex flex-col gap-1 mt-1.5 text-[11px]">
              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-1.5 text-palette-brass">
                  <span className="w-2 h-2 rounded-full bg-palette-brass" />
                  Page Views:
                </span>
                <span className="font-mono font-bold text-palette-ivory">
                  {activePoint.views.toLocaleString()}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-1.5 text-palette-ganga-mist">
                  <span className="w-2 h-2 rounded-full bg-palette-ganga-mist" />
                  Unique Visitors:
                </span>
                <span className="font-mono font-bold text-palette-ivory">
                  {activePoint.visitors.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
