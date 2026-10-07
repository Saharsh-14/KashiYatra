"use client";

import React from "react";
import Link from "next/link";
import { KashiRasoiFood } from "@/data/kashi-rasoi";
import { ROUTES } from "@/lib/routes";

interface RasoiHUDProps {
  currentFood?: KashiRasoiFood;
  isEditorialOpen?: boolean;
}

export function RasoiHUD({
  isEditorialOpen = false,
}: RasoiHUDProps) {
  if (isEditorialOpen) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-30 flex flex-col justify-between p-6 sm:p-10 select-none">
      {/* Top Line */}
      <div className="flex items-center justify-between w-full pointer-events-auto">
        {/* BACK TO KASHI */}
        <Link
          href={ROUTES.kashi}
          className="group flex items-center gap-2 font-mono text-xs text-white/50 hover:text-white tracking-widest uppercase transition-colors"
        >
          <span className="w-6 h-6 rounded-full border border-white/20 group-hover:border-white/60 flex items-center justify-center transition-colors">
            <svg
              className="w-3 h-3 transform group-hover:-translate-x-0.5 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </span>
          <span>BACK TO KASHI</span>
        </Link>
      </div>
    </div>
  );
}
