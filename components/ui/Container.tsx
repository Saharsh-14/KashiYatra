import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "wide" | "narrow" | "full";
  as?: React.ElementType;
}

export function Container({
  children,
  className,
  size = "default",
  as: Component = "div",
  ...props
}: ContainerProps) {
  const sizeClasses = {
    default: "max-w-[1440px]",
    wide: "max-w-[1680px]",
    narrow: "max-w-[960px]",
    full: "w-full",
  };

  return (
    <Component
      className={cn(
        "mx-auto w-full px-6 md:px-12 lg:px-16",
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
