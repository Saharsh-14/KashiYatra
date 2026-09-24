"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Kashi Application Error:", error);
  }, [error]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-palette-ink text-palette-ivory px-6 text-center">
      <div className="max-w-md space-y-6">
        <span className="font-display text-xs tracking-[0.3em] uppercase text-palette-terracotta">
          Temporal Anomaly
        </span>
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-palette-ivory">
          A Moment of Disruption
        </h1>
        <p className="font-editorial text-base text-palette-sand italic">
          An unexpected occurrence has taken place in the digital continuum.
        </p>
        <div className="pt-4 flex justify-center gap-4">
          <button
            onClick={() => reset()}
            className="px-6 py-2.5 border border-brand-accent/50 font-display text-xs tracking-[0.2em] uppercase text-brand-accent hover:bg-brand-accent hover:text-palette-ink transition-colors duration-300"
          >
            Attempt Recovery
          </button>
        </div>
      </div>
    </main>
  );
}
