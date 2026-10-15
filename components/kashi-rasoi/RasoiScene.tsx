"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  KASHI_RASOI_FOODS,
  getKashiRasoiFood,
} from "@/data/kashi-rasoi";
import { markInfiniteDoorCompleted } from "@/lib/doorState";
import { GalleryCamera } from "./GalleryCamera";
import { RasoiHUD } from "./RasoiHUD";

interface RasoiSceneProps {
  initialFoodSlug?: string;
}

export function RasoiScene({ initialFoodSlug }: RasoiSceneProps) {
  const initialFood = initialFoodSlug ? getKashiRasoiFood(initialFoodSlug) : null;
  const initialIndex = initialFood
    ? KASHI_RASOI_FOODS.findIndex((f) => f.id === initialFood.id)
    : 0;

  const [currentIndex, setCurrentIndex] = useState(
    initialIndex !== -1 ? initialIndex : 0
  );

  useEffect(() => {
    markInfiniteDoorCompleted();
  }, []);

  const currentFood = KASHI_RASOI_FOODS[currentIndex] || KASHI_RASOI_FOODS[0];

  return (
    <div className="relative w-full h-full min-h-screen bg-[#070706] overflow-hidden select-none">
      {/* Background Image of Kashi Ghats & Exhibition Stage */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/images/kashi-rasoi-bg.webp"
          alt="Kashi Rasoi Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[1.3]"
        />
        {/* Subtle vignette overlay to balance background with panel contrast */}
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      {/* 3D GALLERY OF WEBPAGE COMPOSITIONS */}
      <div className="w-full h-full min-h-screen will-change-transform">
        {/* Minimal Corner HUD (Back to Kashi) */}
        <RasoiHUD currentFood={currentFood} />

        {/* 3D Curved Wall Gallery Camera */}
        <GalleryCamera
          currentIndex={currentIndex}
          onIndexChange={(idx) => setCurrentIndex(idx)}
        />
      </div>
    </div>
  );
}

