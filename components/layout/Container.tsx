import React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  /**
   * `default` — the standard page container (1440px).
   * `wide`    — cinematic container for image-led compositions (1680px).
   * `narrow`  — text-led editorial block.
   * `full`    — full-bleed; the gutter is kept as a safety inset.
   */
  size?: "default" | "wide" | "narrow" | "full";
}

/**
 * Horizontal structure for every page (design.md §28, task.md 1.3).
 *
 * All widths and gutters resolve to tokens, so a change to `--container-max`
 * or `--page-gutter` moves the whole site at once.
 */
export function Container({
  as: Component = "div",
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "u-container",
        size === "wide" && "u-container-wide",
        size === "narrow" && "u-container-narrow",
        size === "full" && "u-container-full",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
