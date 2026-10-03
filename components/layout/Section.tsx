import React from "react";
import { cn } from "@/lib/utils";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  /**
   * `cinematic` — major chapter sections, generous vertical rhythm.
   * `compact`   — supporting sections.
   * `flush`     — no vertical padding; the section supplies its own.
   */
  spacing?: "cinematic" | "compact" | "flush";
  /** Renders a semantic <section> with an accessible name from this value. */
  label?: string;
}

/**
 * Vertical rhythm for chapter sections (design.md §26, task.md 1.3).
 *
 * Section spacing is the primary tool for the whitespace the design language
 * depends on, so it is tokenised rather than set per page.
 */
export function Section({
  as: Component = "section",
  spacing = "cinematic",
  label,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      aria-label={label}
      className={cn(
        spacing === "cinematic" && "u-section",
        spacing === "compact" && "u-section-compact",
        spacing === "flush" && "u-section-flush",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
