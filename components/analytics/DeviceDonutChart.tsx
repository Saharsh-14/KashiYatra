"use client";

import { useState } from "react";
import { DeviceMetric, DeviceType } from "@/types/analytics";
import { Smartphone, Laptop, Monitor, Tablet } from "lucide-react";

interface DeviceDonutChartProps {
  devices: Record<DeviceType, DeviceMetric>;
  totalViews: number;
}

const DEVICE_ICONS: Record<DeviceType, React.ElementType> = {
  mobile: Smartphone,
  laptop: Laptop,
  desktop: Monitor,
  tablet: Tablet,
};

export function DeviceDonutChart({ devices, totalViews }: DeviceDonutChartProps) {
  const [hovered, setHovered] = useState<DeviceType | null>(null);

  const deviceList = Object.values(devices);
  const totalCount = deviceList.reduce((acc, curr) => acc + curr.count, 0) || 1;

  // SVG Geometry
  const size = 200;
  const strokeWidth = 28;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // Calculate segment offsets
  let accumulatedPercent = 0;
  const segments = deviceList.map((item) => {
    const percent = totalCount > 0 ? item.count / totalCount : 0;
    const strokeDasharray = `${percent * circumference} ${circumference}`;
    const strokeDashoffset = -accumulatedPercent * circumference;
    accumulatedPercent += percent;

    return {
      ...item,
      strokeDasharray,
      strokeDashoffset,
      percentVal: Math.round(percent * 100),
    };
  });

  const activeItem = hovered ? devices[hovered] : null;

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 justify-between">
      {/* Donut Chart Container */}
      <div className="relative flex items-center justify-center shrink-0 w-[200px] h-[200px]">
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="transform -rotate-90 origin-center transition-transform duration-500"
        >
          {/* Base background ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="rgb(232, 225, 211, 0.06)"
            strokeWidth={strokeWidth}
          />

          {/* Slices */}
          {totalViews > 0 ? (
            segments.map((seg) => (
              <circle
                key={seg.type}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="transparent"
                stroke={seg.color}
                strokeWidth={hovered === seg.type ? strokeWidth + 4 : strokeWidth}
                strokeDasharray={seg.strokeDasharray}
                strokeDashoffset={seg.strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHovered(seg.type)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  filter:
                    hovered === seg.type
                      ? `drop-shadow(0 0 8px ${seg.color})`
                      : "none",
                }}
              />
            ))
          ) : (
            <circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke="rgb(232, 225, 211, 0.12)"
              strokeWidth={strokeWidth}
              strokeDasharray="4 8"
            />
          )}
        </svg>

        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none px-4">
          {activeItem ? (
            <>
              <span className="text-[11px] tracking-wider uppercase text-content-muted font-ui">
                {activeItem.label}
              </span>
              <span className="text-xl font-display font-medium text-palette-ivory mt-0.5">
                {activeItem.percentage}%
              </span>
              <span className="text-[10px] text-content-secondary font-ui">
                {activeItem.count} visits
              </span>
            </>
          ) : (
            <>
              <span className="text-[11px] tracking-wider uppercase text-content-muted font-ui">
                Total Devices
              </span>
              <span className="text-2xl font-display font-medium text-palette-ivory mt-0.5">
                {totalViews}
              </span>
              <span className="text-[10px] text-palette-brass font-ui">
                Breakdown
              </span>
            </>
          )}
        </div>
      </div>

      {/* Breakdown Legend Cards */}
      <div className="grid grid-cols-2 gap-3 w-full">
        {deviceList.map((dev) => {
          const Icon = DEVICE_ICONS[dev.type] || Monitor;
          const isHovered = hovered === dev.type;

          return (
            <div
              key={dev.type}
              onMouseEnter={() => setHovered(dev.type)}
              onMouseLeave={() => setHovered(null)}
              className={`p-3 rounded-lg border transition-all duration-300 cursor-pointer ${
                isHovered
                  ? "bg-surface-elevated border-palette-brass/50 shadow-soft"
                  : "bg-surface/50 border-edge hover:border-palette-brass/30"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <div
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: dev.color }}
                  />
                  <Icon className="w-4 h-4 text-content-secondary" />
                  <span className="text-xs font-ui text-content-primary font-medium">
                    {dev.label}
                  </span>
                </div>
                <span className="text-xs font-mono font-semibold text-palette-ivory">
                  {dev.percentage}%
                </span>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-palette-ink/80 h-1.5 rounded-full overflow-hidden mt-2">
                <div
                  className="h-full rounded-full transition-all duration-700 ease-out"
                  style={{
                    width: `${dev.percentage}%`,
                    backgroundColor: dev.color,
                  }}
                />
              </div>

              <div className="flex justify-between items-center mt-1.5 text-[10px] text-content-muted">
                <span>Total count</span>
                <span className="text-content-secondary font-mono">
                  {dev.count.toLocaleString()}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
