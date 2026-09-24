import React from "react";
import { cn } from "@/lib/utils";

interface IndexLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  number: string | number;
  label?: string;
}

export function IndexLabel({ number, label, className, ...props }: IndexLabelProps) {
  const formattedNumber = typeof number === "number" ? String(number).padStart(2, "0") : number;

  return (
    <div
      className={cn("inline-flex items-center gap-3 font-display uppercase tracking-[0.25em]", className)}
      {...props}
    >
      <span className="text-xs text-brand-accent font-semibold">{formattedNumber}</span>
      {label && (
        <>
          <span className="w-4 h-[1px] bg-brand-accent/40" />
          <span className="text-[11px] text-palette-sand/80">{label}</span>
        </>
      )}
    </div>
  );
}
