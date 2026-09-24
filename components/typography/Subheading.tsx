import React from "react";
import { cn } from "@/lib/utils";

interface SubheadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h2" | "h3" | "h4" | "p";
}

export function Subheading({
  children,
  className,
  as: Component = "h2",
  ...props
}: SubheadingProps) {
  return (
    <Component
      className={cn(
        "heading-sub text-palette-sand/90 font-normal leading-snug",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
