import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "sm" | "default" | "lg" | "none";
  as?: React.ElementType;
}

export function Section({
  children,
  className,
  spacing = "default",
  as: Component = "section",
  ...props
}: SectionProps) {
  const spacingClasses = {
    none: "",
    sm: "py-12 md:py-16",
    default: "py-20 md:py-32",
    lg: "py-28 md:py-48",
  };

  return (
    <Component
      className={cn("relative w-full overflow-hidden", spacingClasses[spacing], className)}
      {...props}
    >
      {children}
    </Component>
  );
}
