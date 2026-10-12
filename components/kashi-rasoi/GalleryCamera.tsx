"use client";

import React, { useRef, useEffect, useState, useCallback } from "react";
import gsap from "gsap";
import { KASHI_RASOI_FOODS } from "@/data/kashi-rasoi";
import { WebPagePanel } from "./WebPagePanel";

interface GalleryCameraProps {
  currentIndex: number;
  onIndexChange: (index: number) => void;
}

/**
 * Computes shortest circular signed distance between a panel index and continuous scroll progress.
 * For total = 9, returned diff is always within (-4.5, 4.5].
 */
function getCircularDist(index: number, pos: number, total: number = 9): number {
  let diff = (index - pos) % total;
  if (diff < 0) diff += total;
  if (diff > total / 2) diff -= total;
  return diff;
}

/**
 * Mathematical model for 3D curved cylinder positioning.
 * Computes exact spatial transform for a panel at distance `d` from active center.
 */
function computePanel3D(d: number, viewportWidth: number) {
  const isMobile = viewportWidth < 640;
  const isTablet = viewportWidth >= 640 && viewportWidth < 1024;

  // Radius of the 3D cylindrical stage
  const radius = isMobile
    ? Math.max(760, viewportWidth * 1.55)
    : isTablet
    ? Math.max(1200, viewportWidth * 1.3)
    : Math.max(1650, viewportWidth * 1.15);

  // Angular step per panel along the cylinder
  // Tuned so adjacent panels (d = ±1) sit clearly visible beside the center panel
  const angleStepDeg = isMobile ? 32 : isTablet ? 29 : 27.5;
  const angleDeg = d * angleStepDeg;
  const angleRad = (angleDeg * Math.PI) / 180;

  // X coordinate follows the cylindrical arc (sine)
  const x = Math.sin(angleRad) * radius;


  // Rotation:
  // d > 0 (right): rotateY is positive (right edge moves back in Z, left edge faces user)
  // d < 0 (left): rotateY is negative (left edge moves back in Z, right edge faces user)
  // d = 0: rotateY is 0 (flat facing the user)
  const maxRot = isMobile ? 22 : 46;
  const rotRate = isMobile ? 18 : 24.5;
  const rawRot = d * rotRate;
  const rotateY = Math.max(-maxRot, Math.min(maxRot, rawRot));

  // Z coordinate with strict 3D depth isolation:
  // Cylindrical arc base depth (receding into -Z)
  const baseZ = (Math.cos(angleRad) - 1) * radius;

  // Clearance calculation:
  // When side panels rotate, their inner edges swing forward in 3D.
  // extraZ and activeElevation guarantee that every point of any side panel
  // remains strictly behind the active center card, eliminating 3D polygon bleeding.
  const absD = Math.abs(d);
  const extraFactor = isMobile ? 55 : 85;
  const extraZ = -(absD * extraFactor + Math.pow(absD, 1.2) * (extraFactor * 0.5));
  const activeElevation = Math.max(0, 1 - absD * 2) * (isMobile ? 35 : 55);
  const z = baseZ + extraZ + activeElevation;

  // Scale: subtle intrinsic scale to complement perspective divide
  const scale = Math.max(0.70, 1 - absD * (isMobile ? 0.075 : 0.045));

  // Opacity: center and ±1 panels remain bright & legible; ±2 recedes into background darkness
  const opacity = Math.max(0, 1 - Math.pow(absD / 2.65, 1.85));

  // Stacking z-index: center panels layered strictly above receding sides
  const zIndex = Math.round(200 - absD * 40);

  return { x, z, rotateY, scale, opacity, zIndex };
}

export function GalleryCamera({
  currentIndex,
  onIndexChange,
}: GalleryCameraProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const totalPanels = KASHI_RASOI_FOODS.length; // 9

  // Continuous physics scroll position: unbounded for infinite circular scrolling
  const physicsRef = useRef({
    current: currentIndex,
    target: currentIndex,
  });

  const isInteractingRef = useRef(false);
  const lastActiveIndexRef = useRef(currentIndex);
  const settleTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animFrameRef = useRef<number | null>(null);

  const [viewportWidth, setViewportWidth] = useState(1400);

  // Resize listener
  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Direct GPU DOM update loop (zero React re-renders during motion)
  const applyTransforms = useCallback(
    (pos: number) => {
      const w = window.innerWidth;
      panelRefs.current.forEach((el, index) => {
        if (!el) return;
        // Circular distance calculation for seamless infinite loop
        const d = getCircularDist(index, pos, totalPanels);

        // Cull panels that are far off-screen / behind camera (beyond visible arc)
        if (Math.abs(d) > 2.85) {
          el.style.opacity = "0";
          el.style.pointerEvents = "none";
          el.style.visibility = "hidden";
          return;
        }

        const { x, z, rotateY, scale, opacity, zIndex } = computePanel3D(d, w);

        el.style.visibility = "visible";
        el.style.pointerEvents = "auto";
        el.style.zIndex = `${zIndex}`;
        el.style.opacity = `${opacity.toFixed(3)}`;
        el.style.transform = `translate3d(calc(-50% + ${x.toFixed(1)}px), -50%, ${z.toFixed(1)}px) rotateY(${rotateY.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
      });

      // Synchronize active index threshold with modular wrapping (0..8)
      const nearest = ((Math.round(pos) % totalPanels) + totalPanels) % totalPanels;
      if (nearest !== lastActiveIndexRef.current) {
        lastActiveIndexRef.current = nearest;
        onIndexChange(nearest);
      }
    },
    [totalPanels, onIndexChange]
  );

  // Physics animation frame loop
  const updatePhysics = useCallback(() => {
    const diff = physicsRef.current.target - physicsRef.current.current;
    // Luxurious cinematic damping (0.088)
    physicsRef.current.current += diff * 0.088;

    applyTransforms(physicsRef.current.current);

    if (isInteractingRef.current || Math.abs(diff) > 0.0004) {
      animFrameRef.current = requestAnimationFrame(updatePhysics);
    } else {
      physicsRef.current.current = physicsRef.current.target;
      applyTransforms(physicsRef.current.current);
      animFrameRef.current = null;
    }
  }, [applyTransforms]);

  const triggerLoop = useCallback(() => {
    if (!animFrameRef.current) {
      animFrameRef.current = requestAnimationFrame(updatePhysics);
    }
  }, [updatePhysics]);

  // Initial mount transform
  useEffect(() => {
    applyTransforms(physicsRef.current.current);
  }, [applyTransforms, viewportWidth]);

  // Sync external index changes along the shortest circular path
  useEffect(() => {
    const curNormalized =
      ((Math.round(physicsRef.current.target) % totalPanels) + totalPanels) % totalPanels;
    if (curNormalized !== currentIndex) {
      const diff = getCircularDist(currentIndex, physicsRef.current.current, totalPanels);
      if (settleTimeoutRef.current) clearTimeout(settleTimeoutRef.current);
      gsap.killTweensOf(physicsRef.current);
      gsap.to(physicsRef.current, {
        target: physicsRef.current.current + diff,
        duration: 0.75,
        ease: "power3.out",
        onUpdate: triggerLoop,
      });
    }
  }, [currentIndex, totalPanels, triggerLoop]);

  // Mouse wheel / trackpad scroll handling with INFINITE unbounded progression
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const isMobile = window.innerWidth < 640;

      if (!isMobile) {
        // Laptop / Desktop: 100% UNCHANGED
        const delta =
          Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
        const step = delta * 0.0016;

        gsap.killTweensOf(physicsRef.current);

        // Unbounded infinite circular progress
        physicsRef.current.target += step;

        isInteractingRef.current = true;
        triggerLoop();

        // Debounced settle: smoothly glides into the nearest whole panel without abrupt snapping
        if (settleTimeoutRef.current) clearTimeout(settleTimeoutRef.current);
        settleTimeoutRef.current = setTimeout(() => {
          isInteractingRef.current = false;
          const bounded = Math.round(physicsRef.current.target);

          gsap.to(physicsRef.current, {
            target: bounded,
            duration: 0.68,
            ease: "power2.out",
            onUpdate: triggerLoop,
          });
        }, 190);
        return;
      }

      // Mobile View: Controlled card-by-card step
      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const step = Math.sign(delta) * Math.min(0.35, Math.abs(delta * 0.001));

      gsap.killTweensOf(physicsRef.current);
      physicsRef.current.target += step;

      isInteractingRef.current = true;
      triggerLoop();

      if (settleTimeoutRef.current) clearTimeout(settleTimeoutRef.current);
      settleTimeoutRef.current = setTimeout(() => {
        isInteractingRef.current = false;
        const bounded = Math.round(physicsRef.current.target);

        gsap.to(physicsRef.current, {
          target: bounded,
          duration: 0.5,
          ease: "power2.out",
          onUpdate: triggerLoop,
        });
      }, 140);
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      el.removeEventListener("wheel", handleWheel);
      if (settleTimeoutRef.current) clearTimeout(settleTimeoutRef.current);
    };
  }, [triggerLoop]);

  // Pointer drag gestures with unbounded infinite circular progression
  const dragRef = useRef({
    startX: 0,
    startY: 0,
    startTarget: 0,
    lastX: 0,
    lastY: 0,
    lastTime: 0,
    velocity: 0,
  });

  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.button !== 0 && e.pointerType === "mouse") return;

    isInteractingRef.current = true;
    if (settleTimeoutRef.current) clearTimeout(settleTimeoutRef.current);
    gsap.killTweensOf(physicsRef.current);

    dragRef.current.startX = e.clientX;
    dragRef.current.startY = e.clientY;
    dragRef.current.startTarget = physicsRef.current.target;
    dragRef.current.lastX = e.clientX;
    dragRef.current.lastY = e.clientY;
    dragRef.current.lastTime = performance.now();
    dragRef.current.velocity = 0;

    triggerLoop();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isInteractingRef.current) return;
    const isMobile = window.innerWidth < 640;

    if (!isMobile) {
      // Laptop / Desktop: 100% UNCHANGED
      const now = performance.now();
      const dt = Math.max(1, now - dragRef.current.lastTime);
      const dx = e.clientX - dragRef.current.startX;
      const stepPerPx = 1 / 800;

      const newTarget = dragRef.current.startTarget - dx * stepPerPx;
      dragRef.current.velocity = -(e.clientX - dragRef.current.lastX) / dt;
      dragRef.current.lastX = e.clientX;
      dragRef.current.lastTime = now;

      physicsRef.current.target = newTarget;
      triggerLoop();
      return;
    }

    // Mobile View: Natural touch drag tracking
    const now = performance.now();
    const dt = Math.max(1, now - dragRef.current.lastTime);
    const dx = e.clientX - dragRef.current.startX;
    const dy = e.clientY - dragRef.current.startY;

    // Follow horizontal swipe primarily, or vertical swipe smoothly
    const primaryDelta = Math.abs(dx) >= Math.abs(dy) ? dx : dy;
    const lastDelta =
      Math.abs(dx) >= Math.abs(dy)
        ? e.clientX - dragRef.current.lastX
        : e.clientY - dragRef.current.lastY;

    // Smooth mobile ratio (~280px per full card advance)
    const mobileStepPerPx = 1 / Math.max(260, window.innerWidth * 0.75);
    const newTarget = dragRef.current.startTarget - primaryDelta * mobileStepPerPx;

    // Velocity in cards / millisecond
    dragRef.current.velocity = -(lastDelta * mobileStepPerPx) / dt;
    dragRef.current.lastX = e.clientX;
    dragRef.current.lastY = e.clientY;
    dragRef.current.lastTime = now;

    physicsRef.current.target = newTarget;
    triggerLoop();
  };

  const handlePointerUp = () => {
    if (!isInteractingRef.current) return;
    isInteractingRef.current = false;
    const isMobile = window.innerWidth < 640;

    if (!isMobile) {
      // Laptop / Desktop: 100% UNCHANGED
      const momentum = dragRef.current.velocity * 160;
      const rawTarget = physicsRef.current.target + momentum;
      const target = Math.round(rawTarget);

      gsap.to(physicsRef.current, {
        target: target,
        duration: 0.75,
        ease: "power3.out",
        onUpdate: triggerLoop,
      });
      return;
    }

    // Mobile View: Smooth, controlled card-by-card snap (max 1 card per flick)
    const deltaFromStart = physicsRef.current.target - dragRef.current.startTarget;
    const velocity = dragRef.current.velocity;

    let targetShift = 0;
    // Flick threshold: ~0.0008 cards/ms (~0.25 px/ms)
    if (Math.abs(velocity) > 0.0008) {
      targetShift = Math.sign(velocity);
    } else if (Math.abs(deltaFromStart) > 0.18) {
      // Dragged past 18% of a card
      targetShift = Math.sign(deltaFromStart);
    }

    // Advance at most 1 card per swipe on mobile
    const targetIndex = Math.round(dragRef.current.startTarget + targetShift);

    gsap.to(physicsRef.current, {
      target: targetIndex,
      duration: 0.52,
      ease: "power2.out",
      onUpdate: triggerLoop,
    });
  };

  // Click on panel: side glides to center via shortest circular path; center card remains focused
  const handlePanelClick = (index: number) => {
    const diff = getCircularDist(index, physicsRef.current.current, totalPanels);

    if (Math.abs(diff) < 0.38) {
      // Center panel: already centered, no detail window
      return;
    }

    // Side panel: smoothly glide it to center along the shortest circular arc
    if (settleTimeoutRef.current) clearTimeout(settleTimeoutRef.current);
    isInteractingRef.current = false;
    gsap.killTweensOf(physicsRef.current);

    gsap.to(physicsRef.current, {
      target: physicsRef.current.current + diff,
      duration: 0.8,
      ease: "power3.out",
      onUpdate: triggerLoop,
    });
  };

  // Keyboard navigation: unbounded infinite cycling
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        const next = Math.round(physicsRef.current.current) + 1;
        gsap.to(physicsRef.current, {
          target: next,
          duration: 0.65,
          ease: "power2.out",
          onUpdate: triggerLoop,
        });
      } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        const prev = Math.round(physicsRef.current.current) - 1;
        gsap.to(physicsRef.current, {
          target: prev,
          duration: 0.65,
          ease: "power2.out",
          onUpdate: triggerLoop,
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [triggerLoop]);

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className="relative w-full h-full min-h-screen overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing select-none bg-transparent touch-none"
      style={{
        perspective: `${viewportWidth < 640 ? 1100 : 1450}px`,
        perspectiveOrigin: "50% 50%",
      }}
    >
      {/* 3D Curved Cylindrical Array of Webpages */}
      <div
        className="relative w-0 h-0"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {KASHI_RASOI_FOODS.map((food, index) => {
          const isCenter = index === currentIndex;
          return (
            <div
              key={food.id}
              ref={(el) => {
                panelRefs.current[index] = el;
              }}
              className="absolute left-0 top-0 will-change-transform isolate"
              style={{
                backfaceVisibility: "hidden",
              }}
            >
              <WebPagePanel
                food={food}
                isCenter={isCenter}
                onClick={() => handlePanelClick(index)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
