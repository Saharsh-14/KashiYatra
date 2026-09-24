import React from "react";
import { cn } from "@/lib/utils";

interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: "body" | "lead" | "caption" | "quote";
  as?: React.ElementType;
}

export function Text({
  children,
  className,
  variant = "body",
  as: Component = "p",
  ...props
}: TextProps) {
  const variantClasses = {
    body: "text-body text-palette-sand/85 font-normal",
    lead: "font-editorial text-xl md:text-2xl text-palette-sand font-light leading-relaxed",
    caption: "font-editorial text-xs italic text-palette-sand/65 tracking-wide",
    quote: "font-editorial text-lg md:text-xl italic text-palette-ivory/90 border-l-2 border-brand-accent/50 pl-4 my-4",
  };

  return (
    <Component className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </Component>
  );
}
