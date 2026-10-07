"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import Image from "next/image";
import {
  KASHI_RASOI_FOODS,
  KashiRasoiFood,
  getKashiRasoiFood,
} from "@/data/kashi-rasoi";
import { GalleryCamera } from "./GalleryCamera";
import { EditorialFoodPage } from "./EditorialFoodPage";
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
  const [selectedFood, setSelectedFood] = useState<KashiRasoiFood | null>(
    initialFood || null
  );

  const galleryLayerRef = useRef<HTMLDivElement>(null);
  const editorialLayerRef = useRef<HTMLDivElement>(null);
  const isTransitioningRef = useRef(false);

  // Sync browser back/forward history
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const parts = path.split("/").filter(Boolean);
      if (parts.length >= 2 && parts[0] === "kashi-rasoi") {
        const slug = parts[1];
        const food = getKashiRasoiFood(slug);
        if (food) {
          setSelectedFood(food);
          const idx = KASHI_RASOI_FOODS.findIndex((f) => f.id === food.id);
          if (idx !== -1) setCurrentIndex(idx);
          return;
        }
      }
      setSelectedFood(null);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Open White Editorial Case Study with cinematic expansion
  const handleSelectFood = useCallback((food: KashiRasoiFood) => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setSelectedFood(food);

    const idx = KASHI_RASOI_FOODS.findIndex((f) => f.id === food.id);
    if (idx !== -1) setCurrentIndex(idx);

    if (typeof window !== "undefined") {
      window.history.pushState(
        { slug: food.slug },
        "",
        `/kashi-rasoi/${food.slug}`
      );
    }

    if (galleryLayerRef.current && editorialLayerRef.current) {
      gsap.killTweensOf([galleryLayerRef.current, editorialLayerRef.current]);

      // Step 1: 3D Gallery recedes into darkness
      gsap.to(galleryLayerRef.current, {
        opacity: 0,
        scale: 0.93,
        duration: 0.65,
        ease: "power3.inOut",
        onComplete: () => {
          if (galleryLayerRef.current) {
            galleryLayerRef.current.style.pointerEvents = "none";
          }
        },
      });

      // Step 2: Editorial page expands toward viewer
      gsap.set(editorialLayerRef.current, {
        display: "flex",
        opacity: 0,
        scale: 0.9,
      });

      gsap.to(editorialLayerRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.75,
        delay: 0.12,
        ease: "power3.out",
        onComplete: () => {
          isTransitioningRef.current = false;
        },
      });
    }
  }, []);

  // Return to 3D Curved Gallery
  const handleBackToGallery = useCallback(() => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    if (typeof window !== "undefined") {
      window.history.pushState({}, "", "/kashi-rasoi");
    }

    if (galleryLayerRef.current && editorialLayerRef.current) {
      gsap.killTweensOf([galleryLayerRef.current, editorialLayerRef.current]);

      // Step 1: Editorial page contracts
      gsap.to(editorialLayerRef.current, {
        opacity: 0,
        scale: 0.92,
        duration: 0.5,
        ease: "power3.in",
        onComplete: () => {
          if (editorialLayerRef.current) {
            editorialLayerRef.current.style.display = "none";
          }
          setSelectedFood(null);
        },
      });

      // Step 2: 3D Gallery returns to view
      gsap.to(galleryLayerRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        delay: 0.1,
        ease: "power3.out",
        onComplete: () => {
          if (galleryLayerRef.current) {
            galleryLayerRef.current.style.pointerEvents = "auto";
          }
          isTransitioningRef.current = false;
        },
      });
    } else {
      setSelectedFood(null);
    }
  }, []);

  const currentFood = KASHI_RASOI_FOODS[currentIndex] || KASHI_RASOI_FOODS[0];

  return (
    <div className="relative w-full h-full min-h-screen bg-[#070706] overflow-hidden select-none">
      {/* Background Image of Kashi Ghats & Exhibition Stage */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/images/kashi-rasoi-bg.jpg"
          alt="Kashi Rasoi Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[1.3]"
        />
        {/* Subtle vignette overlay to balance 30% brighter background with panel contrast */}
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      {/* ================================================================
          STATE 1 — 3D GALLERY OF HUGE WEBPAGE COMPOSITIONS
          ================================================================ */}
      <div
        ref={galleryLayerRef}
        className="w-full h-full min-h-screen will-change-transform"
      >
        {/* Minimal Corner HUD (Back to Kashi & Chapter indicator) */}
        <RasoiHUD
          currentFood={currentFood}
          isEditorialOpen={Boolean(selectedFood)}
        />

        {/* 3D Curved Wall Gallery Camera */}
        <GalleryCamera
          currentIndex={currentIndex}
          onIndexChange={(idx) => setCurrentIndex(idx)}
          onSelectFood={handleSelectFood}
          isEditorialOpen={Boolean(selectedFood)}
        />
      </div>

      {/* ================================================================
          STATE 2 — SELECTED FOOD WHITE EDITORIAL WEBPAGE
          ================================================================ */}
      <div
        ref={editorialLayerRef}
        style={{ display: selectedFood ? "flex" : "none" }}
        className="fixed inset-0 z-50 items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-xl will-change-transform"
      >
        {selectedFood && (
          <EditorialFoodPage
            food={selectedFood}
            onBackToGallery={handleBackToGallery}
          />
        )}
      </div>
    </div>
  );
}
