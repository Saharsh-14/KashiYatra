import React from "react";
import { cn } from "@/lib/utils";

interface SectionLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function SectionLabel({ children, className, ...props }: SectionLabelProps) {
  return (
    <div
      className={cn(
        "font-display text-[11px] tracking-[0.3em] uppercase text-brand-accent/90 flex items-center gap-3",
        className
      )}
      {...props}
    >
      <span className="w-2 h-2 rounded-full bg-brand-accent/60" />
      {children}
    </div>
  );
}
