import React from "react";
import { cn } from "@/lib/utils";
import { toneClass, type TypographyTone } from "./tone";

type TextElement = "p" | "span" | "div" | "figcaption" | "blockquote" | "li";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: TextElement;
  /**
   * `body` is the only reading size. `ui` is the utility size for metadata —
   * never for content anyone has to actually read (design.md §18).
   */
  size?: "body" | "ui";
  tone?: TypographyTone;
  /** Constrain to the editorial measure so long copy stays readable (§24). */
  measure?: false | "body" | "wide";
}

/**
 * Body copy — Peristiva (design.md §17, §23).
 */
export function Text({
  as: Component = "p",
  size = "body",
  tone = "secondary",
  measure = "body",
  className,
  children,
  ...props
}: TextProps) {
  return (
    <Component
      className={cn(
        size === "body" ? "type-body" : "type-ui",
        toneClass(tone),
        measure === "body" && "u-measure",
        measure === "wide" && "u-measure-wide",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
