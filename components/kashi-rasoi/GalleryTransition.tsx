"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { KashiRasoiFood } from "@/data/kashi-rasoi";
import { FoodDetail } from "./FoodDetail";

interface GalleryTransitionProps {
  selectedFood: KashiRasoiFood | null;
  onCloseDetail: () => void;
  children: React.ReactNode;
}

export function GalleryTransition({
  selectedFood,
  onCloseDetail,
  children,
}: GalleryTransitionProps) {
  const galleryRef = useRef<HTMLDivElement>(null);
  const detailRef = useRef<HTMLDivElement>(null);
  const isAnimatingRef = useRef(false);

  // Animate gallery and detail based on selectedFood
  useEffect(() => {
    if (isAnimatingRef.current) return;

    if (selectedFood && detailRef.current && galleryRef.current) {
      isAnimatingRef.current = true;
      gsap.killTweensOf([galleryRef.current, detailRef.current]);

      // Step 1: Prepare detail container
      gsap.set(detailRef.current, {
        display: "block",
        opacity: 0,
        scale: 0.96,
        y: 20,
      });

      // Step 2: Gallery dims and recedes into depth
      gsap.to(galleryRef.current, {
        opacity: 0,
        scale: 0.92,
        duration: 0.65,
        ease: "power3.inOut",
        onComplete: () => {
          if (galleryRef.current) {
            galleryRef.current.style.pointerEvents = "none";
          }
        },
      });

      // Step 3: Detail view expands smoothly into view
      gsap.to(detailRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.75,
        delay: 0.15,
        ease: "power3.out",
        onComplete: () => {
          isAnimatingRef.current = false;
        },
      });
    } else if (!selectedFood && galleryRef.current) {
      // Return to gallery animation
      isAnimatingRef.current = true;
      gsap.killTweensOf([galleryRef.current]);

      if (detailRef.current) {
        gsap.to(detailRef.current, {
          opacity: 0,
          scale: 0.95,
          y: 20,
          duration: 0.5,
          ease: "power3.in",
          onComplete: () => {
            if (detailRef.current) {
              detailRef.current.style.display = "none";
            }
          },
        });
      }

      gsap.to(galleryRef.current, {
        opacity: 1,
        scale: 1,
        duration: 0.7,
        delay: 0.1,
        ease: "power3.out",
        onComplete: () => {
          if (galleryRef.current) {
            galleryRef.current.style.pointerEvents = "auto";
          }
          isAnimatingRef.current = false;
        },
      });
    }
  }, [selectedFood]);

  return (
    <div className="relative w-full h-full min-h-screen bg-[#060605] overflow-hidden">
      {/* 3D Gallery Layer */}
      <div
        ref={galleryRef}
        className="w-full h-full min-h-screen will-change-transform"
      >
        {children}
      </div>

      {/* Food Detail Modal / View Layer */}
      <div
        ref={detailRef}
        style={{ display: selectedFood ? "block" : "none" }}
        className="fixed inset-0 z-50 overflow-y-auto bg-[#080807] will-change-transform"
      >
        {selectedFood && (
          <FoodDetail
            food={selectedFood}
            onBackToGallery={onCloseDetail}
            isModal={true}
          />
        )}
      </div>
    </div>
  );
}
