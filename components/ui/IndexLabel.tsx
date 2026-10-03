import React from "react";
import { cn } from "@/lib/utils";
import { toneClass, type TypographyTone } from "@/components/typography/tone";

export interface IndexLabelProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color"> {
  /** 1-based editorial index — rendered as `01`. */
  index: number;
  /** Zero-padding width. Two digits covers every chapter in the project. */
  pad?: number;
  /**
   * Accent by default. Pass `light-accent` when the index sits on the light
   * band — brass on ivory is roughly 2:1 and would be unreadable there.
   */
  tone?: TypographyTone;
}

/**
 * Editorial index (design.md §48).
 *
 * Small, aligned and subtle. Tabular figures keep indexes in a column from
 * shifting as the numbers change, which is what makes an editorial list read as
 * deliberate rather than incidental.
 */
export function IndexLabel({
  index,
  pad = 2,
  tone = "accent",
  className,
  ...props
}: IndexLabelProps) {
  const value = String(index).padStart(pad, "0");

  return (
    <span
      className={cn("type-index inline-block", toneClass(tone), className)}
      {...props}
    >
      {value}
    </span>
  );
}
