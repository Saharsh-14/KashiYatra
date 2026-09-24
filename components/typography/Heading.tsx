import React from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4";
  size?: "hero" | "section" | "display";
}

export function Heading({
  children,
  className,
  as: Component = "h1",
  size = "section",
  ...props
}: HeadingProps) {
  const sizeClasses = {
    hero: "heading-hero text-palette-ivory font-bold",
    section: "font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-palette-ivory",
    display: "font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-normal text-palette-ivory",
  };

  return (
    <Component className={cn(sizeClasses[size], className)} {...props}>
      {children}
    </Component>
  );
}
