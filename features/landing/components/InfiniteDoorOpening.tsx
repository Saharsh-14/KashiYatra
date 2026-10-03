"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useReducedMotion } from "@/hooks";
import { useLanding } from "../context/LandingProvider";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  pulseSpeed: number;
  phase: number;
}

/**
 * THE INFINITE DOOR — BEYOND KASHI
 *
 * Cinematic Opening Sequence:
 * - Scene 01 (0.0s - 2.0s): Total darkness, faint volumetric dust & distant warm whisper.
 * - Scene 02 (2.0s - 4.2s): Monumental freestanding ancient stone doorway emerges from gloom.
 * - Scene 03 (4.0s - 7.5s): Blazing white-golden sunlight spills through with realistic volumetric god rays.
 * - Scene 04 (4.0s - 9.8s): The Boy walks forward toward the threshold:
 *                            - Real alternating left/right leg walking cycle with lifting feet & grounded stance.
 *                            - Natural arm & stick movements, weight shifts, and stride-driven forward translation.
 *                            - Literary quote frames the boy's silhouette directly in the center.
 * - Scene 05 (9.8s - 10.8s): Threshold moment — boy crosses through doorway, light consumes screen to 100% white.
 * - Scene 06 (10.8s - 11.9s): Doorway scene is eliminated; luminous white curtain dissolves DIRECTLY into the KASHI landing page.
 *
 * Skip button: Discreetly placed in top-right corner for instant, smooth whiteout entrance.
 */
export function InfiniteDoorOpening() {
  const { completeEntrance, skipEntrance } = useLanding();
  const prefersReducedMotion = useReducedMotion();

  const [hasExited, setHasExited] = useState(false);

  // DOM Refs for high-performance direct animation
  const containerRef = useRef<HTMLDivElement | null>(null);
  const dollyRef = useRef<HTMLDivElement | null>(null);
  const darknessRef = useRef<HTMLDivElement | null>(null);
  const boyContainerRef = useRef<HTMLDivElement | null>(null);
  const boyCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const shadowRef = useRef<HTMLDivElement | null>(null);
  const quoteRef = useRef<HTMLDivElement | null>(null);
  const whiteoutRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Animation timeline reference
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // Sprite sheet image reference
  const walkSheetRef = useRef<HTMLImageElement | null>(null);
  const fallbackImgRef = useRef<HTMLImageElement | null>(null);

  // Particles
  const particlesRef = useRef<Particle[]>([]);

  // Preload walk cycle sprite sheet and fallback silhouette
  useEffect(() => {
    const sheet = new window.Image();
    sheet.src = "/images/hero/boy-walk-cycle.png";
    sheet.onload = () => {
      walkSheetRef.current = sheet;
    };

    const fallback = new window.Image();
    fallback.src = "/images/hero/boy-silhouette.png";
    fallback.onload = () => {
      fallbackImgRef.current = fallback;
    };
  }, []);

  // Initialize particles once
  useEffect(() => {
    const count = 65;
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - 0.5) * 0.00012,
        vy: -0.00015 - Math.random() * 0.00022,
        size: 1.0 + Math.random() * 2.0,
        alpha: 0.15 + Math.random() * 0.45,
        pulseSpeed: 1.0 + Math.random() * 2.0,
        phase: Math.random() * Math.PI * 2,
      });
    }
    particlesRef.current = particles;
  }, []);

  // Handle immediate skip
  const handleSkip = useCallback(() => {
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    if (whiteoutRef.current) {
      // Rapid white flash into Kashi
      gsap.to(whiteoutRef.current, {
        opacity: 1,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => {
          // Immediately eliminate doorway scene & dark container background
          if (dollyRef.current) {
            dollyRef.current.style.display = "none";
          }
          if (containerRef.current) {
            containerRef.current.style.backgroundColor = "transparent";
          }
          skipEntrance();
          // Smoothly dissolve white curtain directly to reveal Kashi landing page
          gsap.to(whiteoutRef.current, {
            opacity: 0,
            duration: 0.7,
            ease: "power2.out",
            onComplete: () => {
              setHasExited(true);
            },
          });
        },
      });
    } else {
      skipEntrance();
      setHasExited(true);
    }
  }, [skipEntrance]);

  // Reduced motion: immediate entrance
  useEffect(() => {
    if (prefersReducedMotion) {
      skipEntrance();
      setHasExited(true);
    }
  }, [prefersReducedMotion, skipEntrance]);

  // Master Cinematic Timeline
  useEffect(() => {
    if (prefersReducedMotion || hasExited) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      timelineRef.current = tl;

      // 0. Initial States
      gsap.set(darknessRef.current, { opacity: 1 });
      gsap.set(dollyRef.current, { scale: 1.0, y: 0 });
      gsap.set(boyContainerRef.current, {
        bottom: "3.5%",
        scale: 0.98,
        opacity: 0,
      });
      gsap.set(quoteRef.current, { opacity: 0 });
      gsap.set(whiteoutRef.current, { opacity: 0 });

      // -----------------------------------------------------------------------
      // TIMELINE (0.0s to 11.9s)
      // -----------------------------------------------------------------------

      // Scene 01 (0.0s - 2.0s): Total darkness
      // Scene 02 (2.0s - 4.2s): Doorway reveals as darkness lifts
      tl.to(
        darknessRef.current,
        {
          opacity: 0,
          duration: 2.2,
          ease: "power2.inOut",
        },
        1.8,
      );

      // Camera Dolly (2.5s - 10.8s): Slow, monumental forward push
      tl.to(
        dollyRef.current,
        {
          scale: 1.18,
          y: -22,
          duration: 8.3,
          ease: "power1.inOut",
        },
        2.5,
      );

      // Boy Fade-in (3.6s - 4.4s)
      tl.to(
        boyContainerRef.current,
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
        },
        3.6,
      );

      {/* Scene 04: Literary Quote Framing the Boy (fades in 3.8s, lingers, fades out 8.2s) */}
      tl.to(
        quoteRef.current,
        {
          opacity: 1,
          duration: 0.9,
          ease: "power2.out",
        },
        3.8,
      );

      tl.to(
        quoteRef.current,
        {
          opacity: 0,
          duration: 1.2,
          ease: "power2.in",
        },
        8.2,
      );

      // Scene 05: The Threshold Moment (9.8s - 10.8s) — Screen becomes completely luminous white
      tl.to(
        whiteoutRef.current,
        {
          opacity: 1,
          duration: 1.0,
          ease: "power3.in",
          onComplete: () => {
            // Once screen is 100% white, DOORWAY IS PERMANENTLY REMOVED
            if (dollyRef.current) {
              dollyRef.current.style.display = "none";
            }
            if (containerRef.current) {
              containerRef.current.style.backgroundColor = "transparent";
            }
            // Signal landing page to be ready underneath
            completeEntrance();
          },
        },
        9.8,
      );

      // Scene 06 (10.8s - 11.9s): Luminous White Curtain Dissolves DIRECTLY into Kashi Landing
      tl.to(
        whiteoutRef.current,
        {
          opacity: 0,
          duration: 1.1,
          ease: "power2.out",
          onComplete: () => {
            setHasExited(true);
          },
        },
        10.8,
      );
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [prefersReducedMotion, hasExited, completeEntrance]);

  // Canvas & Walking Animation Loop (60 FPS)
  useEffect(() => {
    if (prefersReducedMotion || hasExited) return;

    let isCancelled = false;

    const renderLoop = (now: number) => {
      if (isCancelled) return;

      if (startTimeRef.current === null) {
        startTimeRef.current = now;
      }

      const elapsed = (now - startTimeRef.current) / 1000;

      // -----------------------------------------------------------------------
      // 1. BOY WALKING CYCLE & STRIDE-DRIVEN DISPLACEMENT
      // -----------------------------------------------------------------------
      if (elapsed >= 3.6 && elapsed <= 10.8) {
        const walkElapsed = Math.max(0, elapsed - 3.6);
        // 12.8 frames/sec = 1.25s per 16-frame full cycle (two steps)
        const walkFps = 12.8;
        const frameIndex = Math.floor(walkElapsed * walkFps) % 16;

        // Render current walk frame on the boy canvas
        const boyCanvas = boyCanvasRef.current;
        if (boyCanvas) {
          const bCtx = boyCanvas.getContext("2d");
          if (bCtx) {
            bCtx.clearRect(0, 0, 345, 1120);

            if (walkSheetRef.current && walkSheetRef.current.complete) {
              // Draw high-resolution articulated walk cycle frame
              bCtx.drawImage(
                walkSheetRef.current,
                frameIndex * 345,
                0,
                345,
                1120,
                0,
                0,
                345,
                1120,
              );
            } else if (fallbackImgRef.current && fallbackImgRef.current.complete) {
              // Graceful fallback
              bCtx.drawImage(fallbackImgRef.current, 0, 0, 345, 1120);
            }
          }
        }

        // Stride-driven forward movement:
        // Boy advances from bottom: 3.5% (foreground terrace) to 14.5% (doorway step)
        // Duration: 3.8s to 9.8s (6.0s total walk time across ~9.6 footsteps)
        const walkNorm = Math.max(0, Math.min(1, (elapsed - 3.8) / 6.0));
        // Sine impulse adds natural propulsion on every foot push-off (eliminating drag feel)
        const stepPush = Math.sin(walkElapsed * Math.PI * 3.2) * 0.0075;
        const currentProgress = Math.max(0, Math.min(1, walkNorm + stepPush));

        // Ease smoothly forward
        const smoothProgress =
          currentProgress < 0.5
            ? 2 * currentProgress * currentProgress
            : 1 - Math.pow(-2 * currentProgress + 2, 2) / 2;

        const bottomPercent = 3.5 + (14.5 - 3.5) * smoothProgress;
        const boyScale = 0.98 - (0.98 - 0.58) * smoothProgress;

        if (boyContainerRef.current) {
          boyContainerRef.current.style.bottom = `${bottomPercent}%`;
          boyContainerRef.current.style.transform = `translateX(-50%) scale(${boyScale})`;
        }

        // Realistic contact shadow grounded on stone pavement:
        // Shifts weight under the stance foot (frames 0..7: left foot; frames 8..15: right foot)
        if (shadowRef.current) {
          const isLeftStance = frameIndex < 8;
          const stanceShift = isLeftStance ? -5 : 5;
          shadowRef.current.style.transform = `translateX(${stanceShift}px) scaleY(0.5) scaleX(${boyScale})`;
        }
      }

      // -----------------------------------------------------------------------
      // 2. VOLUMETRIC RAYS & ATMOSPHERIC DUST CANVAS
      // -----------------------------------------------------------------------
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          const w = canvas.width;
          const h = canvas.height;

          ctx.clearRect(0, 0, w, h);

          // Center of the doorway light portal
          const cx = w * 0.502;
          const cy = h * 0.44;

          // Volumetric rays intensity curve
          let raysIntensity = 0.0;
          if (elapsed > 2.0 && elapsed < 9.8) {
            raysIntensity = Math.min(1.0, (elapsed - 2.0) / 2.5);
          } else if (elapsed >= 9.8 && elapsed < 10.8) {
            raysIntensity = 1.0 + (elapsed - 9.8) * 1.5; // bloom flare spike at threshold
          }

          if (raysIntensity > 0.01) {
            ctx.save();
            ctx.globalCompositeOperation = "screen";

            // Soft atmospheric volumetric rays
            const rayCount = 10;
            for (let i = 0; i < rayCount; i++) {
              const baseAngle =
                -Math.PI * 0.42 + (i / (rayCount - 1)) * Math.PI * 0.84;
              const angleDrift = Math.sin(elapsed * 0.5 + i * 1.2) * 0.025;
              const angle = baseAngle + angleDrift;
              const rayLen = Math.max(w, h) * 1.25;
              const endX = cx + Math.sin(angle) * rayLen;
              const endY = cy + Math.cos(angle) * rayLen;

              const rayGrad = ctx.createLinearGradient(cx, cy, endX, endY);
              const beamAlpha =
                (0.06 + 0.035 * Math.sin(elapsed * 0.9 + i * 1.6)) *
                Math.min(1.0, raysIntensity);

              rayGrad.addColorStop(
                0,
                `rgba(255, 245, 225, ${beamAlpha * 1.4})`,
              );
              rayGrad.addColorStop(
                0.25,
                `rgba(235, 195, 125, ${beamAlpha * 0.8})`,
              );
              rayGrad.addColorStop(
                0.6,
                `rgba(220, 160, 90, ${beamAlpha * 0.2})`,
              );
              rayGrad.addColorStop(1, "rgba(220, 160, 90, 0)");

              ctx.fillStyle = rayGrad;
              ctx.beginPath();
              ctx.moveTo(cx, cy);
              const spread = 0.055 + 0.015 * Math.sin(elapsed * 0.7 + i);
              ctx.lineTo(
                cx + Math.sin(angle - spread) * rayLen,
                cy + Math.cos(angle - spread) * rayLen,
              );
              ctx.lineTo(
                cx + Math.sin(angle + spread) * rayLen,
                cy + Math.cos(angle + spread) * rayLen,
              );
              ctx.closePath();
              ctx.fill();
            }

            // Radial bloom around doorway
            const bloomRad =
              Math.min(w, h) * (0.32 + 0.05 * Math.sin(elapsed * 1.1));
            const bloomGrad = ctx.createRadialGradient(
              cx,
              cy,
              0,
              cx,
              cy,
              bloomRad,
            );
            bloomGrad.addColorStop(
              0,
              `rgba(255, 250, 235, ${0.4 * Math.min(1.0, raysIntensity)})`,
            );
            bloomGrad.addColorStop(
              0.35,
              `rgba(235, 195, 125, ${0.18 * Math.min(1.0, raysIntensity)})`,
            );
            bloomGrad.addColorStop(1, "rgba(235, 195, 125, 0)");

            ctx.fillStyle = bloomGrad;
            ctx.beginPath();
            ctx.arc(cx, cy, bloomRad, 0, Math.PI * 2);
            ctx.fill();

            ctx.restore();
          }

          // Floating atmospheric dust motes
          ctx.save();
          ctx.globalCompositeOperation = "screen";

          const particles = particlesRef.current;
          for (let p of particles) {
            p.x += p.vx;
            p.y += p.vy;

            if (p.y < -0.05) p.y = 1.05;
            if (p.x < -0.05) p.x = 1.05;
            if (p.x > 1.05) p.x = -0.05;

            const px = p.x * w;
            const py = p.y * h;

            const dx = (px - cx) / w;
            const dy = (py - cy) / h;
            const distToBeam = Math.sqrt(dx * dx * 1.5 + dy * dy);
            const inLight = Math.max(0, 1.0 - distToBeam * 2.2);

            const pulse =
              Math.sin(elapsed * p.pulseSpeed + p.phase) * 0.35 + 0.65;
            const finalAlpha = p.alpha * (0.3 + inLight * 1.1) * pulse;

            if (finalAlpha > 0.02) {
              const particleSize = p.size * (1.0 + inLight * 0.4);

              ctx.fillStyle = `rgba(${Math.round(240 + inLight * 15)}, ${Math.round(
                210 + inLight * 30,
              )}, ${Math.round(155 + inLight * 65)}, ${finalAlpha})`;

              ctx.beginPath();
              ctx.arc(px, py, particleSize, 0, Math.PI * 2);
              ctx.fill();
            }
          }
          ctx.restore();
        }
      }

      animFrameRef.current = requestAnimationFrame(renderLoop);
    };

    animFrameRef.current = requestAnimationFrame(renderLoop);

    return () => {
      isCancelled = true;
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [prefersReducedMotion, hasExited]);

  // Sync canvas dimensions
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (hasExited) return null;

  return (
    <div
      ref={containerRef}
      role="dialog"
      aria-label="The Infinite Door — Entering Kashi"
      className="fixed inset-0 z-[100] overflow-hidden select-none bg-[#050504] cursor-default"
    >
      {/* =====================================================================
          CINEMATIC CAMERA DOLLY CONTAINER
          ===================================================================== */}
      <div
        ref={dollyRef}
        className="absolute inset-0 will-change-transform"
        style={{
          transformOrigin: "50% 45%",
        }}
      >
        {/* Layer 1: Monumental Freestanding Doorway Plate */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero/infinite-door-empty.jpg"
            alt="The Infinite Doorway of Kashi"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_42%] sm:object-[center_45%]"
          />
        </div>

        {/* Layer 2: Volumetric Rays & Dust Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none z-10"
        />

        {/* Layer 3: The Boy Walking toward the threshold */}
        <div
          ref={boyContainerRef}
          className="absolute z-20 pointer-events-none will-change-transform flex flex-col items-center"
          style={{
            left: "50%",
            transform: "translateX(-50%)",
            transformOrigin: "50% 100%",
          }}
        >
          {/* High-fidelity 60 FPS Walking Cycle Canvas */}
          <div className="relative w-16 sm:w-20 md:w-24 aspect-[345/1120] drop-shadow-[0_0_16px_rgba(255,220,150,0.25)]">
            <canvas
              ref={boyCanvasRef}
              width={345}
              height={1120}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Contact shadow dynamically anchored to stance foot */}
          <div
            ref={shadowRef}
            className="w-14 sm:w-16 h-2.5 rounded-full bg-black/85 blur-[3px] -mt-2 transform scale-y-50 will-change-transform"
          />
        </div>
      </div>

      {/* =====================================================================
          SCENE 01: TOTAL DARKNESS OVERLAY (0 - 2 sec)
          ===================================================================== */}
      <div
        ref={darknessRef}
        aria-hidden="true"
        className="absolute inset-0 z-30 pointer-events-none bg-[#050504]"
      >
        {/* Breathing warm ember in distance during pitch darkness */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-32 h-32 rounded-full bg-[#E5B869]/15 blur-3xl animate-pulse" />
        </div>
      </div>

      {/* =====================================================================
          LITERARY EDITORIAL QUOTE: FRAMING THE BOY IN THE CENTER
          Arrangement:
          THE THREE WORLDS        [BOY]        FORM ONE CITY OF MINE
          AND KASHI IS MY         [BOY]        ROYAL PALACE THEREIN
          ===================================================================== */}
      <div
        ref={quoteRef}
        aria-hidden="true"
        className="absolute inset-x-0 z-40 flex items-center justify-center pointer-events-none px-4 sm:px-8"
        style={{
          top: "68%",
          transform: "translateY(-50%)",
        }}
      >
        <div className="w-full max-w-6xl grid grid-cols-[1fr_auto_1fr] items-center gap-3 sm:gap-6 md:gap-8 lg:gap-10">
          {/* Left Wing: Right-aligned toward the boy */}
          <div className="flex flex-col items-end text-right font-serif uppercase tracking-[0.22em] sm:tracking-[0.26em] md:tracking-[0.3em] text-[#FFFBF2] leading-[1.6] sm:leading-[1.8] drop-shadow-[0_2px_4px_rgba(0,0,0,1)] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] drop-shadow-[0_0_24px_rgba(0,0,0,0.9)]">
            <span className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-medium whitespace-nowrap">
              The three worlds
            </span>
            <span className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-medium text-[#F0C068] whitespace-nowrap mt-1 sm:mt-2">
              and Kashi is my
            </span>
          </div>

          {/* Central Frame: Spacer sized to match the boy's silhouette width */}
          <div className="w-20 sm:w-24 md:w-28 lg:w-32 h-16 shrink-0 pointer-events-none" />

          {/* Right Wing: Left-aligned toward the boy */}
          <div className="flex flex-col items-start text-left font-serif uppercase tracking-[0.22em] sm:tracking-[0.26em] md:tracking-[0.3em] text-[#FFFBF2] leading-[1.6] sm:leading-[1.8] drop-shadow-[0_2px_4px_rgba(0,0,0,1)] drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] drop-shadow-[0_0_24px_rgba(0,0,0,0.9)]">
            <span className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-medium whitespace-nowrap">
              form one city of mine,
            </span>
            <span className="text-sm sm:text-lg md:text-2xl lg:text-3xl font-medium text-[#FFFBF2] whitespace-nowrap mt-1 sm:mt-2">
              royal palace therein.
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================================
          SCENE 05 & 06: LUMINOUS WHITE SCREEN & DIRECT LANDING REVEAL
          Screen flashes 100% white, doorway is removed behind it, and white
          dissolves directly into the KASHI landing page.
          ===================================================================== */}
      <div
        ref={whiteoutRef}
        aria-hidden="true"
        className="fixed inset-0 z-50 pointer-events-none bg-[#FFFFFF]"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 45%, #FFFFFF 20%, #FFF8E7 65%, #FFFFFF 100%)",
          }}
        />
      </div>

      {/* =====================================================================
          SKIP CONTROL: Minimalist, discreet corner button
          ===================================================================== */}
      <button
        type="button"
        onClick={handleSkip}
        className="fixed top-6 right-6 sm:top-8 sm:right-10 z-[120] flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[#FAF6F0]/20 bg-[#10100E]/50 backdrop-blur-md text-[11px] sm:text-xs font-mono tracking-[0.25em] text-[#D6CEBE]/70 hover:text-[#FAF6F0] hover:border-[#E5B869]/70 hover:bg-[#10100E]/80 transition-all duration-300 pointer-events-auto select-none"
        aria-label="Skip introduction to Kashi"
      >
        <span>SKIP</span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#E5B869]" />
      </button>
    </div>
  );
}
