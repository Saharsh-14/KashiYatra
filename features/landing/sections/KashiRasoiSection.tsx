"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanding } from "../context/LandingProvider";
import { useReducedMotion } from "@/hooks";
import { saveLandingScrollPosition } from "@/lib/scrollRestoration";

interface FoodAsset {
  id: string;
  name: string;
  src: string;
  width: number;
  height: number;
  left: string;
  bottom: string;
  widthPercent: string;
}

const FOOD_ASSETS: FoodAsset[] = [
  {
    id: "kachori",
    name: "Kachori Sabji",
    src: "/images/food/kachori-transparent.png",
    width: 912,
    height: 554,
    left: "5.2%",
    bottom: "17.8%",
    widthPercent: "26.5%",
  },
  {
    id: "chaat",
    name: "Chaat",
    src: "/images/food/chaat-transparent.png",
    width: 902,
    height: 509,
    left: "34.0%",
    bottom: "17.5%",
    widthPercent: "24.0%",
  },
  {
    id: "lassi",
    name: "Lassi",
    src: "/images/food/lassi-transparent.png",
    width: 526,
    height: 617,
    left: "57.2%",
    bottom: "14.8%",
    widthPercent: "14.2%",
  },
  {
    id: "paan",
    name: "Paan",
    src: "/images/food/paan-transparent.png",
    width: 905,
    height: 522,
    left: "71.6%",
    bottom: "14.2%",
    widthPercent: "25.5%",
  },
];

interface CurlingTendrilConfig {
  xRel: number;
  start: number;
  dur: number;
  amp: number;
  f1: number;
  f2: number;
  p1: number;
  p2: number;
  w: number;
}

/**
 * Eight delicate curling steam tendrils rising across distinct regions of the heading.
 * Inspired directly by the natural cooking steam rising above the wok on the left.
 */
const COOKING_STEAM_TENDRILS: CurlingTendrilConfig[] = [
  // 1. Left temple line-art & spires (x ~ 0.16)
  { xRel: 0.16, start: 0.1, dur: 1.5, amp: 14, f1: 0.038, f2: 0.065, p1: 0.4, p2: 1.2, w: 9 },
  // 2. Main stem & curve of 'K' (x ~ 0.29)
  { xRel: 0.29, start: 0.25, dur: 1.6, amp: 16, f1: 0.034, f2: 0.055, p1: 1.8, p2: 2.6, w: 12 },
  // 3. 'K' to 'a' transition & left temple spires (x ~ 0.39)
  { xRel: 0.39, start: 0.45, dur: 1.7, amp: 15, f1: 0.040, f2: 0.070, p1: 3.1, p2: 0.8, w: 10 },
  // 4. 'Rasoi' left 'Ra' (x ~ 0.47)
  { xRel: 0.47, start: 0.6, dur: 1.7, amp: 18, f1: 0.032, f2: 0.060, p1: 0.9, p2: 3.4, w: 13 },
  // 5. 'ash' & central spire (x ~ 0.57)
  { xRel: 0.57, start: 0.75, dur: 1.6, amp: 16, f1: 0.036, f2: 0.068, p1: 2.4, p2: 1.9, w: 11 },
  // 6. 'Rasoi' middle 'so' (x ~ 0.66)
  { xRel: 0.66, start: 0.9, dur: 1.6, amp: 15, f1: 0.042, f2: 0.058, p1: 4.2, p2: 0.5, w: 12 },
  // 7. 'hi' & right temple spire (x ~ 0.77)
  { xRel: 0.77, start: 1.05, dur: 1.5, amp: 14, f1: 0.035, f2: 0.072, p1: 1.1, p2: 2.8, w: 9 },
  // 8. 'Rasoi' ending 'i' and right line-art (x ~ 0.87)
  { xRel: 0.87, start: 1.2, dur: 1.5, amp: 12, f1: 0.039, f2: 0.064, p1: 3.5, p2: 1.4, w: 8 },
];

/**
 * Kashi Rasoi Heading Component with Natural Wispy Cooking Steam Reveal.
 *
 * Sequence:
 * 1. Heading starts partially veiled behind initial subtle steam.
 * 2. As the section enters view, individual thin, curling wisps of cooking steam
 *    rise past different portions of the heading:
 *    - small wisp crosses 'K' & left spires -> 'K' unveils
 *    - wisp curls through 'Rasoi' & 'as' -> letters unveil
 *    - wisp curls through 'hi' & central spire -> spire unveils
 * 3. As each wisp moves upward, its region of the heading becomes visible with soft organic edges.
 * 4. At ~2.8s, the steam tendrils gently dissipate and clear away.
 * 5. Complete heading remains in its exact final reference resting position.
 */
function KashiRasoiHeading() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headingMaskRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isEntering } = useLanding();
  const prefersReducedMotion = useReducedMotion();
  const [isComplete, setIsComplete] = useState(false);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setIsComplete(true);
      return;
    }

    if (isEntering) return;
    if (hasStartedRef.current) return;

    const el = containerRef.current;
    if (!el) return;

    const startAnimation = () => {
      if (hasStartedRef.current) return;
      hasStartedRef.current = true;

      const canvas = canvasRef.current;
      if (!canvas || !canvas.parentElement) return;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const containerRect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);

      // Canvas dimensions with margin to allow steam to curl freely beyond bounds
      const displayW = containerRect.width * 1.3;
      const displayH = containerRect.height * 1.4;
      canvas.width = displayW * dpr;
      canvas.height = displayH * dpr;
      ctx.scale(dpr, dpr);

      // Heading sub-rect inside canvas coordinate system
      const hw = containerRect.width;
      const hh = containerRect.height;
      const hx = (displayW - hw) / 2;
      const hy = (displayH - hh) * 0.65; // headroom for rising steam

      const duration = 2800; // 2.8 seconds
      const startTime = performance.now();
      let animId: number;

      const loop = (now: number) => {
        const elapsed = now - startTime;
        const t = Math.min(1.0, elapsed / duration);
        const curSec = elapsed / 1000;

        if (t >= 1.0) {
          if (headingMaskRef.current) {
            headingMaskRef.current.style.webkitMaskImage = "none";
            headingMaskRef.current.style.maskImage = "none";
          }
          ctx.clearRect(0, 0, displayW, displayH);
          setIsComplete(true);
          return;
        }

        // 1. Organic CSS multi-radial-gradient reveal mask on the constant full-size DOM heading
        if (headingMaskRef.current) {
          const gradients: string[] = [];
          for (const tr of COOKING_STEAM_TENDRILS) {
            if (curSec >= tr.start) {
              const wProg = Math.min(1.0, (curSec - tr.start) / 1.05);
              if (wProg > 0) {
                const rx = 10 + wProg * 18;
                const ry = 28 + wProg * 35;
                const innerStop = Math.floor(25 * wProg);
                const outerStop = Math.floor(70 + 25 * wProg);
                const posX = (tr.xRel * 100).toFixed(1);
                gradients.push(
                  `radial-gradient(ellipse ${rx.toFixed(1)}% ${ry.toFixed(1)}% at ${posX}% 52%, black ${innerStop}%, transparent ${outerStop}%)`
                );
              }
            }
          }

          if (gradients.length > 0) {
            const maskStr = gradients.join(", ");
            headingMaskRef.current.style.webkitMaskImage = maskStr;
            headingMaskRef.current.style.maskImage = maskStr;
          } else {
            headingMaskRef.current.style.webkitMaskImage = "linear-gradient(transparent, transparent)";
            headingMaskRef.current.style.maskImage = "linear-gradient(transparent, transparent)";
          }
        }

        // 2. Render delicate curling cooking steam tendrils on canvas
        ctx.clearRect(0, 0, displayW, displayH);
        for (const tr of COOKING_STEAM_TENDRILS) {
          const age = curSec - tr.start;
          if (age < 0 || age > tr.dur) continue;

          const progress = age / tr.dur;
          const headY = hh * 1.15 - progress * (hh * 1.5);
          const tailY = headY + hh * (0.65 - progress * 0.2);

          let wispAlpha = 1.0;
          if (progress < 0.18) wispAlpha = progress / 0.18;
          else if (progress > 0.65) wispAlpha = (1.0 - progress) / 0.35;

          const steps = 40;
          for (let s = 0; s < steps; s++) {
            const frac = s / (steps - 1);
            const yRel = headY + frac * (tailY - headY);
            if (yRel < -45 || yRel > hh * 1.25) continue;

            // Delicate multi-harmonic curling wave
            const curl =
              Math.sin(yRel * tr.f1 + tr.p1 + age * 2.2) * tr.amp +
              Math.cos(yRel * tr.f2 + tr.p2 + age * 1.5) * (tr.amp * 0.55) +
              Math.sin(yRel * tr.f1 * 2.3 + tr.p1) * (tr.amp * 0.25);

            const xRel = hw * tr.xRel + curl + progress * 16.0;
            const taper = Math.sin(frac * Math.PI);
            const segW = tr.w * 0.35 + tr.w * taper;
            const segAlpha = wispAlpha * taper * 0.32;

            if (segAlpha > 0.005) {
              const px = hx + xRel;
              const py = hy + yRel;
              const grad = ctx.createRadialGradient(px, py, 0, px, py, segW);
              // Soft warm ivory / golden ambient steam
              grad.addColorStop(0, `rgba(255, 248, 230, ${segAlpha * 0.95})`);
              grad.addColorStop(0.45, `rgba(250, 225, 180, ${segAlpha * 0.6})`);
              grad.addColorStop(1, "rgba(235, 195, 145, 0)");

              ctx.fillStyle = grad;
              ctx.beginPath();
              ctx.arc(px, py, segW, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }

        animId = requestAnimationFrame(loop);
      };

      animId = requestAnimationFrame(loop);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStartedRef.current) {
            startAnimation();
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isEntering, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      aria-label="Kashi Rasoi Title"
      className="absolute pointer-events-none select-none z-25"
      style={{
        left: "25.98%",
        top: "8.54%",
        width: "47.43%",
        aspectRatio: "2 / 1",
      }}
    >
      {/* 
        DOM Heading Image:
        - Rendered at 100% FINAL NORMAL SIZE continuously from Frame 1.
        - NO scale transforms, zoom, font-size, or dimension animations.
        - Visibility is controlled solely by CSS mask as steam wisps travel across.
        - When reveal completes, mask is set to 'none'.
      */}
      <div
        ref={headingMaskRef}
        className="relative w-full h-full"
        style={{
          WebkitMaskImage: isComplete
            ? "none"
            : "linear-gradient(transparent, transparent)",
          maskImage: isComplete
            ? "none"
            : "linear-gradient(transparent, transparent)",
        }}
      >
        <Image
          src="/images/food/kashi-rasoi-heading.png"
          alt="Kashi Rasoi — The Living Culinary Soul of Banaras"
          fill
          priority
          sizes="(min-width: 1024px) 40vw, 50vw"
          className="object-contain pointer-events-none select-none"
          draggable={false}
        />
      </div>

      {/* Cooking steam canvas: renders ONLY the rising, curling steam tendrils on top */}
      {!isComplete && (
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="pointer-events-none absolute -inset-x-[15%] -inset-y-[20%] w-[130%] h-[140%] z-30"
        />
      )}
    </div>
  );
}

/**
 * Kashi Rasoi Section — Landing Page Implementation.
 *
 * Visual Source of Truth:
 * - The supplied clean background image is locked and unmodified.
 * - The four supplied food assets are placed on the foreground counter area:
 *   Order: Kachori Sabji → Chaat → Lassi → Paan
 * - Existing labels & pointer graphics remain exactly as supplied within each asset.
 * - Subtle, premium physical hover interaction (subtle scale & brightness transition).
 * - Clickable gateways: clicking any food navigates to /kashi-rasoi.
 * - Kashi Rasoi heading with integrated yellow architectural line-art revealed through warm smoke.
 */
export function KashiRasoiSection() {
  return (
    <section
      id="rasoi"
      aria-label="Kashi Rasoi"
      className="relative w-full z-10 min-h-screen lg:h-screen overflow-hidden select-none"
    >
      {/* 
        ========================================================================
        ATMOSPHERIC BLENDING BRIDGE
        Blends the opening part with Kashi Unfolded's #060504 bottom boundary.
        ========================================================================
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28 sm:h-40 md:h-52 bg-gradient-to-b from-[#060504] via-[#060504]/75 via-40% to-transparent z-30"
      />

      {/* 
        ========================================================================
        RESPONSIVE 16:9 CINEMATIC STAGE
        Locks background, heading, and the 4 food assets in the identical coordinate system.
        Guarantees that on every screen size, the foods stay anchored to the counter
        and the heading remains in its exact reference position.
        ========================================================================
      */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{
            width: "max(100vw, calc(100vh * 16 / 9))",
            height: "max(100vh, calc(100vw * 9 / 16))",
            aspectRatio: "16 / 9",
          }}
        >
          {/* Locked Clean Background Image */}
          <Image
            src="/images/landing/kashi-rasoi-kachori-bg.jpg"
            alt="Kashi Rasoi — Authentic morning kachori stall and Ganges sunrise"
            fill
            priority
            sizes="100vw"
            className="object-cover pointer-events-none select-none"
            draggable={false}
          />

          {/* 
            ====================================================================
            KASHI RASOI HEADING (Revealed via warm cooking smoke)
            Exact position, scale, typography, and architectural line-art
            ====================================================================
          */}
          <KashiRasoiHeading />

          {/* 
            ====================================================================
            FOUR FOOD ASSETS (Clickable Gateways to /kashi-rasoi)
            Kachori Sabji → Chaat → Lassi → Paan
            ====================================================================
          */}
          <div className="absolute inset-0 pointer-events-none z-20">
            {FOOD_ASSETS.map((item) => (
              <Link
                key={item.id}
                href="/kashi-rasoi"
                scroll={true}
                onClick={saveLandingScrollPosition}
                aria-label={`Enter Kashi Rasoi via ${item.name}`}
                className="group absolute pointer-events-auto cursor-pointer block select-none outline-none focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C59B4E]/60 transition-all duration-400 ease-out"
                style={{
                  left: item.left,
                  bottom: item.bottom,
                  width: item.widthPercent,
                  aspectRatio: `${item.width} / ${item.height}`,
                  transformOrigin: "center bottom",
                }}
              >
                {/* 
                  Subtle physical hover:
                  - Smooth scale increase (scale-100 -> scale-[1.028])
                  - Subtle brightness adjustment
                  - Subtle natural contact depth
                */}
                <div className="relative w-full h-full transition-all duration-400 ease-out transform group-hover:scale-[1.028] group-hover:brightness-[1.05] group-active:scale-[0.99]">
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1024px) 30vw, 40vw"
                    className="object-contain pointer-events-none select-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)] group-hover:drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] transition-all duration-400"
                    draggable={false}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
