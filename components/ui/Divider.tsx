import React from "react";
import { cn } from "@/lib/utils";

interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  variant?: "subtle" | "accent" | "brass";
  orientation?: "horizontal" | "vertical";
}

export function Divider({
  variant = "subtle",
  orientation = "horizontal",
  className,
  ...props
}: DividerProps) {
  const variantClasses = {
    subtle: "border-palette-ivory/15",
    accent: "border-brand-accent/30",
    brass: "border-brand-accent",
  };

  if (orientation === "vertical") {
    return (
      <div
        className={cn("w-[1px] h-full self-stretch border-l", variantClasses[variant], className)}
        {...props}
      />
    );
  }

  return (
    <hr
      className={cn("w-full border-t border-0 my-8", variantClasses[variant], className)}
      {...props}
    />
  );
}
