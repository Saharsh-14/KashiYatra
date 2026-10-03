import React from "react";
import { cn } from "@/lib/utils";
import { toneClass, type TypographyTone } from "./tone";

type SubheadingElement = "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";

export interface SubheadingProps
  extends Omit<React.HTMLAttributes<HTMLElement>, "color"> {
  as?: SubheadingElement;
  /**
   * Peristiva by default — the editorial voice (design.md §16).
   * `display` switches to Caesura Bold when the hierarchy specifically calls
   * for architectural weight.
   */
  font?: "editorial" | "display";
  tone?: TypographyTone;
}

/**
 * Subheading — the second voice in the hierarchy (design.md §16, §23).
 *
 * Carries supporting statements, chapter introductions and section titles
 * that sit under a hero line.
 */
export function Subheading({
  as: Component = "h2",
  font = "editorial",
  tone = "secondary",
  className,
  children,
  ...props
}: SubheadingProps) {
  return (
    <Component
      className={cn(
        "type-subheading",
        font === "display" ? "font-display" : "font-editorial",
        toneClass(tone),
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
