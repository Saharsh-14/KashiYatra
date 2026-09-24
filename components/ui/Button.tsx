import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variantClasses = {
      primary:
        "bg-brand-accent text-palette-ink font-bold hover:bg-palette-ivory hover:text-palette-ink",
      secondary:
        "bg-palette-charcoal text-palette-ivory hover:bg-palette-ivory/10 border border-palette-ivory/15",
      outline:
        "border border-brand-accent/50 text-brand-accent hover:border-brand-accent hover:bg-brand-accent/10",
      ghost: "text-palette-sand hover:text-palette-ivory hover:bg-palette-ivory/5",
    };

    const sizeClasses = {
      sm: "px-4 py-2 text-[10px] tracking-[0.2em]",
      md: "px-6 py-3.5 text-xs tracking-[0.22em]",
      lg: "px-8 py-4.5 text-xs tracking-[0.25em]",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-display uppercase transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]",
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
