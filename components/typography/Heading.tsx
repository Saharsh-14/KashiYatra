import React from "react";
import { cn } from "@/lib/utils";
import { toneClass, type TypographyTone } from "./tone";

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface HeadingProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color"> {
  /** Semantic level. Choose it for document outline, not for visual size. */
  as?: HeadingElement;
  /** `heading` is the hero/chapter scale; `subheading` steps it down one level. */
  size?: "heading" | "subheading";
  tone?: TypographyTone;
}

/**
 * Display heading — Caesura Bold (design.md §15, §23).
 *
 * Always the largest voice in its viewport. `size` switches between the two
 * tokenised scales rather than accepting an arbitrary font size, which is what
 * keeps the hierarchy to three content sizes across the whole site.
 */
export function Heading({
  as: Component = "h1",
  size = "heading",
  tone = "primary",
  className,
  children,
  ...props
}: HeadingProps) {
  return (
    <Component
      className={cn(
        size === "heading" ? "type-heading" : "type-subheading",
        toneClass(tone),
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
