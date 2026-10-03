import React from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "accent";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

/**
 * Button (design.md §34–§36).
 *
 * Restrained by design: no gradients, no glow, no large radii. Primary is
 * ivory-on-ink because that is the highest-contrast, most editorial pairing in
 * the palette. Brass is reserved for the accent variant and used sparingly —
 * accents must never dominate (design.md §9).
 *
 * Per rules.md §58 this is a real `<button>` for actions. For navigation use
 * `TextLink`, which renders an anchor.
 */

const VARIANT_CLASS: Record<ButtonVariant, string> = {
  primary:
    "bg-palette-ivory text-palette-ink hover:bg-palette-sand active:bg-palette-sand",
  secondary:
    "bg-transparent text-content-primary border border-edge-strong hover:border-edge hover:bg-surface",
  accent: "bg-accent text-palette-ink hover:bg-palette-ivory",
};

const SIZE_CLASS: Record<ButtonSize, string> = {
  sm: "h-button-sm px-btn",
  md: "h-button-md px-btn",
  lg: "h-button-lg px-btn",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    { variant = "primary", size = "md", className, children, ...props },
    ref,
  ) {
    return (
      <button
        ref={ref}
        className={cn(
          "u-transition-colors",
          "inline-flex items-center justify-center gap-2",
          "type-ui uppercase whitespace-nowrap",
          "rounded-sm",
          "disabled:pointer-events-none disabled:opacity-medium",
          VARIANT_CLASS[variant],
          SIZE_CLASS[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
