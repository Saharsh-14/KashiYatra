import React from "react";
import { cn } from "@/lib/utils";
import { toneClass, type TypographyTone } from "@/components/typography/tone";
import { IndexLabel } from "./IndexLabel";

export interface SectionLabelProps
  extends React.HTMLAttributes<HTMLParagraphElement> {
  /** Optional editorial index, rendered as `01 / ` before the label. */
  index?: number;
  tone?: TypographyTone;
}

/**
 * Section label (design.md §47).
 *
 * The project's standard way of announcing a chapter:
 *
 *     01 / STEPS TO ETERNITY
 *
 * Uppercase, UI size, wide tracking. Quiet enough that it never competes with
 * the title it introduces.
 *
 * `tone` is passed through to the index as well, so a label on the light band
 * changes colour as one unit rather than leaving a brass numeral stranded on
 * ivory.
 */
export function SectionLabel({
  index,
  tone = "accent",
  className,
  children,
  ...props
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        "type-label flex items-center gap-2",
        toneClass(tone),
        className,
      )}
      {...props}
    >
      {index !== undefined && (
        <>
          <IndexLabel index={index} tone={tone} />
          {/* Decorative separator — the index already reads as an index without
              it, so it stays out of the accessibility tree and simply inherits
              the label's colour at reduced opacity. */}
          <span aria-hidden="true" className="opacity-muted">
            /
          </span>
        </>
      )}
      <span>{children}</span>
    </p>
  );
}
