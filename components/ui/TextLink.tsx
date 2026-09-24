import React from "react";
import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";

interface TextLinkProps extends LinkProps {
  children: React.ReactNode;
  className?: string;
  variant?: "brass" | "sand" | "ivory";
}

export function TextLink({
  children,
  className,
  variant = "brass",
  ...props
}: TextLinkProps) {
  const variantClasses = {
    brass: "text-brand-accent hover:text-palette-ivory decoration-brand-accent/40",
    sand: "text-palette-sand hover:text-palette-ivory decoration-palette-sand/40",
    ivory: "text-palette-ivory hover:text-brand-accent decoration-palette-ivory/40",
  };

  return (
    <Link
      className={cn(
        "inline-flex items-center gap-1 font-display text-xs tracking-[0.2em] uppercase underline underline-offset-4 transition-colors duration-200",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
