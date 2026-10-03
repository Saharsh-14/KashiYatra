import React from "react";
import { cn } from "@/lib/utils";

export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  /** `strong` is for a deliberate editorial break; `default` for quiet rules. */
  variant?: "default" | "strong";
  /** Vertical rules separate inline metadata. */
  orientation?: "horizontal" | "vertical";
  /** Decorative rules carry no semantics and are hidden from assistive tech. */
  decorative?: boolean;
}

/**
 * Divider (design.md §32).
 *
 * Borders in KASHI are editorial hairlines, not UI chrome — `1px` at low
 * opacity, never a heavy dashboard rule.
 */
export function Divider({
  variant = "default",
  orientation = "horizontal",
  decorative = false,
  className,
  ...props
}: DividerProps) {
  return (
    <hr
      aria-hidden={decorative || undefined}
      className={cn(
        "border-0",
        orientation === "horizontal"
          ? "w-full border-t"
          : "h-full min-h-4 border-l",
        variant === "strong" ? "border-edge-strong" : "border-edge",
        className,
      )}
      {...props}
    />
  );
}
