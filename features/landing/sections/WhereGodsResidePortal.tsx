"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/lib/routes";

interface Star {
  x: number;
  y: number;
  size: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  color: string;
}

interface CloudyNebula {
  canvas: HTMLCanvasElement;
  relX: number;
  relY: number;
  width: number;
  height: number;
  baseAlpha: number;
  rotation: number;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  alpha: number;
  life: number;
  maxLife: number;
}

interface RotatingGalaxy {
  canvas: HTMLCanvasElement;
  relX: number;
  relY: number;
  width: number;
  height: number;
  baseAlpha: number;
  rotationAngle: number;
  rotationSpeed: number;
}

/**
 * Deterministic pseudo-random number generator (LCG).
 * Guarantees 100% identical and stable cosmic visuals on every mount and visit.
 */
function createPRNG(seed: number = 42) {
  let s = seed % 2147483647;
  if (s <= 0) s += 2147483646;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/**
 * Procedural generator: Visibly Rich Interstellar Nebula Complex.
 * Fully deterministic via PRNG seed.
 */
function createCloudyNebula(
  w: number,
  h: number,
  palette: { stop: number; color: string }[],
  puffsCount: number = 70,
  seed: number = 101
): HTMLCanvasElement {
  const rng = createPRNG(seed);
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;

  const cx = w / 2;
  const cy = h / 2;

  // Render layered organic dust puffs and wispy filaments
  for (let i = 0; i < puffsCount; i++) {
    const angle = rng() * Math.PI * 2;
    const dist = Math.pow(rng(), 1.6) * (w * 0.42);
    const px = cx + Math.cos(angle) * dist;
    const py = cy + Math.sin(angle) * (dist * 0.58);

    const rx = (rng() * 0.38 + 0.18) * w;
    const ry = (rng() * 0.28 + 0.12) * h;
    const rot = (rng() - 0.5) * Math.PI;

    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(rot);
    ctx.scale(1, ry / rx);

    const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, rx);
    for (const p of palette) {
      grad.addColorStop(p.stop, p.color);
    }
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(0, 0, rx, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // Soft perimeter feather mask — strictly guarantees 0 alpha at boundaries
  ctx.save();
  ctx.globalCompositeOperation = "destination-in";
  const edgeMask = ctx.createRadialGradient(
    cx,
    cy,
    Math.min(w, h) * 0.1,
    cx,
    cy,
    Math.min(w, h) * 0.48
  );
  edgeMask.addColorStop(0, "rgba(0,0,0,1)");
  edgeMask.addColorStop(0.65, "rgba(0,0,0,0.8)");
  edgeMask.addColorStop(1, "transparent");
  ctx.fillStyle = edgeMask;
  ctx.fillRect(0, 0, w, h);
  ctx.restore();

  return canvas;
}

/**
 * Procedural generator: Grand Design Spiral Galaxy (Top-Right Sky).
 * Fully deterministic via PRNG seed.
 */
function createGrandSpiralGalaxy(
  size: number,
  arms: number = 2,
  armTightness: number = 2.6,
  seed: number = 202
): HTMLCanvasElement {
  const rng = createPRNG(seed);
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;

  const cx = size / 2;
  const cy = size / 2;
  const maxRadius = size * 0.46;

  ctx.save();
  ctx.translate(cx, cy);

  // Perspective inclination tilt (3D orientation)
  ctx.scale(1, 0.58);

  // 1. Broad outer diffuse stellar halo
  const haloGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, maxRadius);
  haloGrad.addColorStop(0, "rgba(255, 235, 200, 0.55)");
  haloGrad.addColorStop(0.25, "rgba(215, 185, 140, 0.35)");
  haloGrad.addColorStop(0.55, "rgba(140, 115, 90, 0.16)");
  haloGrad.addColorStop(0.85, "rgba(55, 45, 40, 0.04)");
  haloGrad.addColorStop(1, "transparent");
  ctx.fillStyle = haloGrad;
  ctx.beginPath();
  ctx.arc(0, 0, maxRadius, 0, Math.PI * 2);
  ctx.fill();

  // 2. Diffuse cloudy spiral arm base
  for (let a = 0; a < arms; a++) {
    const armBaseAngle = (a * (Math.PI * 2)) / arms;
    const puffsOnArm = 180;
    for (let p = 0; p <= puffsOnArm; p++) {
      const progress = p / puffsOnArm;
      const theta = armBaseAngle + Math.pow(progress, 0.88) * Math.PI * armTightness;
      const r = 12 + progress * (maxRadius * 0.92);
      const px = Math.cos(theta) * r;
      const py = Math.sin(theta) * r;

      const puffR = 12 + progress * 24;
      const puffGrad = ctx.createRadialGradient(px, py, 0, px, py, puffR);
      const puffAlpha = (1 - progress * 0.6) * 0.22;
      puffGrad.addColorStop(0, `rgba(240, 215, 165, ${puffAlpha})`);
      puffGrad.addColorStop(0.5, `rgba(210, 180, 135, ${puffAlpha * 0.5})`);
      puffGrad.addColorStop(1, "transparent");

      ctx.fillStyle = puffGrad;
      ctx.beginPath();
      ctx.arc(px, py, puffR, 0, Math.PI * 2);
      ctx.fill();
    }

    // 3. Dense stellar clusters & H-II knots along arms
    const pointsPerArm = 850;
    for (let i = 0; i < pointsPerArm; i++) {
      const progress = i / pointsPerArm;
      const theta = armBaseAngle + Math.pow(progress, 0.88) * Math.PI * armTightness;
      const r = 10 + progress * (maxRadius * 0.92);

      const armWidth = 4 + progress * 26;
      const dispersion = (rng() - 0.5) * armWidth;
      const px = Math.cos(theta) * r + dispersion;
      const py = Math.sin(theta) * r + dispersion;

      const radialFactor = Math.max(0, 1 - r / maxRadius);
      const dotAlpha = radialFactor * (rng() * 0.65 + 0.35);
      const dotSize =
        rng() < 0.84
          ? rng() * 0.9 + 0.35
          : rng() * 1.8 + 0.8;

      if (progress < 0.25) {
        ctx.fillStyle = "rgba(255, 248, 225, 0.95)";
      } else if (rng() < 0.28) {
        ctx.fillStyle = "rgba(215, 235, 250, 0.9)";
      } else {
        ctx.fillStyle = "rgba(240, 215, 160, 0.85)";
      }

      ctx.globalAlpha = dotAlpha;
      ctx.beginPath();
      ctx.arc(px, py, dotSize, 0, Math.PI * 2);
      ctx.fill();

      // Dark dust absorption filaments
      if (rng() < 0.22 && progress > 0.1 && progress < 0.82) {
        const dustTheta = theta - 0.08;
        const dustR = r * 0.96;
        const dx = Math.cos(dustTheta) * dustR;
        const dy = Math.sin(dustTheta) * dustR;
        ctx.fillStyle = "rgba(2, 2, 5, 0.85)";
        ctx.globalAlpha = 0.85;
        ctx.beginPath();
        ctx.arc(dx, dy, rng() * 3 + 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  // 4. Radiant galactic nucleus & core
  ctx.globalAlpha = 1;
  const coreGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, maxRadius * 0.35);
  coreGrad.addColorStop(0, "rgba(255, 253, 245, 0.98)");
  coreGrad.addColorStop(0.18, "rgba(252, 238, 205, 0.88)");
  coreGrad.addColorStop(0.42, "rgba(225, 190, 135, 0.55)");
  coreGrad.addColorStop(0.72, "rgba(150, 120, 80, 0.18)");
  coreGrad.addColorStop(1, "transparent");
  ctx.fillStyle = coreGrad;
  ctx.beginPath();
  ctx.arc(0, 0, maxRadius * 0.35, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();

  // Strict edge feathering
  ctx.save();
  ctx.globalCompositeOperation = "destination-in";
  const edgeMask = ctx.createRadialGradient(
    cx,
    cy,
    maxRadius * 0.45,
    cx,
    cy,
    maxRadius * 0.98
  );
  edgeMask.addColorStop(0, "rgba(0,0,0,1)");
  edgeMask.addColorStop(0.7, "rgba(0,0,0,0.85)");
  edgeMask.addColorStop(1, "transparent");
  ctx.fillStyle = edgeMask;
  ctx.fillRect(0, 0, size, size);
  ctx.restore();

  return canvas;
}

/**
 * Procedural generator: Visibly Rich Celestial Blue Spiral Galaxy (Top-Left Sky).
 * Fully deterministic via PRNG seed.
 */
function createBlueSpiralGalaxy(size: number, seed: number = 303): HTMLCanvasElement {
  const rng = createPRNG(seed);
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;

  const cx = size / 2;
  const cy = size / 2;
  const maxRadius = size * 0.46;

  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(1, 0.54);

  // 1. Broad outer diffuse blue stellar halo
  const haloGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, maxRadius);
  haloGrad.addColorStop(0, "rgba(200, 240, 255, 0.65)");
  haloGrad.addColorStop(0.25, "rgba(120, 200, 255, 0.4)");
  haloGrad.addColorStop(0.55, "rgba(60, 130, 210, 0.18)");
  haloGrad.addColorStop(0.85, "rgba(25, 60, 120, 0.05)");
  haloGrad.addColorStop(1, "transparent");
  ctx.fillStyle = haloGrad;
  ctx.beginPath();
  ctx.arc(0, 0, maxRadius, 0, Math.PI * 2);
  ctx.fill();

  // 2. Diffuse cloudy spiral arm base
  const arms = 2;
  const armTightness = 2.5;
  for (let a = 0; a < arms; a++) {
    const armBaseAngle = a * Math.PI;
    const puffsOnArm = 160;
    for (let p = 0; p <= puffsOnArm; p++) {
      const progress = p / puffsOnArm;
      const theta = armBaseAngle + Math.pow(progress, 0.88) * Math.PI * armTightness;
      const r = 10 + progress * (maxRadius * 0.92);
      const px = Math.cos(theta) * r;
      const py = Math.sin(theta) * r;

      const puffR = 10 + progress * 22;
      const puffGrad = ctx.createRadialGradient(px, py, 0, px, py, puffR);
      const puffAlpha = (1 - progress * 0.6) * 0.24;
      puffGrad.addColorStop(0, `rgba(140, 215, 255, ${puffAlpha})`);
      puffGrad.addColorStop(0.5, `rgba(70, 150, 230, ${puffAlpha * 0.5})`);
      puffGrad.addColorStop(1, "transparent");

      ctx.fillStyle = puffGrad;
      ctx.beginPath();
      ctx.arc(px, py, puffR, 0, Math.PI * 2);
      ctx.fill();
    }

    // 3. Dense stellar clusters & H-II knots along arms
    const pointsPerArm = 800;
    for (let i = 0; i < pointsPerArm; i++) {
      const progress = i / pointsPerArm;
      const theta = armBaseAngle + Math.pow(progress, 0.88) * Math.PI * armTightness;
      const r = 10 + progress * (maxRadius * 0.92);

      const armWidth = 4 + progress * 24;
      const dispersion = (rng() - 0.5) * armWidth;
      const px = Math.cos(theta) * r + dispersion;
      const py = Math.sin(theta) * r + dispersion;

      const radialFactor = Math.max(0, 1 - r / maxRadius);
      const dotAlpha = radialFactor * (rng() * 0.65 + 0.35);
      const dotSize =
        rng() < 0.84
          ? rng() * 0.95 + 0.35
          : rng() * 1.8 + 0.8;

      if (progress < 0.2) {
        ctx.fillStyle = "rgba(240, 252, 255, 0.98)";
      } else if (rng() < 0.4) {
        ctx.fillStyle = "rgba(180, 230, 255, 0.92)";
      } else {
        ctx.fillStyle = "rgba(100, 185, 255, 0.82)";
      }

      ctx.globalAlpha = dotAlpha;
      ctx.beginPath();
      ctx.arc(px, py, dotSize, 0, Math.PI * 2);
      ctx.fill();

      // Dark dust absorption filaments
      if (rng() < 0.2 && progress > 0.1 && progress < 0.82) {
        const dustTheta = theta - 0.08;
        const dustR = r * 0.96;
        const dx = Math.cos(dustTheta) * dustR;
        const dy = Math.sin(dustTheta) * dustR;
        ctx.fillStyle = "rgba(2, 5, 15, 0.85)";
        ctx.globalAlpha = 0.85;
        ctx.beginPath();
        ctx.arc(dx, dy, rng() * 3 + 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  // 4. Radiant cyan-white galactic nucleus
  ctx.globalAlpha = 1;
  const coreGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, maxRadius * 0.32);
  coreGrad.addColorStop(0, "rgba(255, 255, 255, 0.98)");
  coreGrad.addColorStop(0.2, "rgba(215, 245, 255, 0.88)");
  coreGrad.addColorStop(0.45, "rgba(120, 205, 255, 0.5)");
  coreGrad.addColorStop(0.75, "rgba(50, 130, 220, 0.16)");
  coreGrad.addColorStop(1, "transparent");
  ctx.fillStyle = coreGrad;
  ctx.beginPath();
  ctx.arc(0, 0, maxRadius * 0.32, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();

  // Strict edge feathering
  ctx.save();
  ctx.globalCompositeOperation = "destination-in";
  const edgeMask = ctx.createRadialGradient(
    cx,
    cy,
    maxRadius * 0.38,
    cx,
    cy,
    maxRadius * 0.98
  );
  edgeMask.addColorStop(0, "rgba(0,0,0,1)");
  edgeMask.addColorStop(0.75, "rgba(0,0,0,0.85)");
  edgeMask.addColorStop(1, "transparent");
  ctx.fillStyle = edgeMask;
  ctx.fillRect(0, 0, size, size);
  ctx.restore();

  return canvas;
}

/**
 * Procedural generator: Elegant Distant Tilted Golden Spiral Galaxy (Lower-Left Sky).
 * Fully deterministic via PRNG seed.
 */
function createTiltedSpiralGalaxy(size: number, seed: number = 404): HTMLCanvasElement {
  const rng = createPRNG(seed);
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;

  const cx = size / 2;
  const cy = size / 2;
  const maxR = size * 0.46;

  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(1, 0.52);

  // Outer disc glow
  const discGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, maxR);
  discGrad.addColorStop(0, "rgba(255, 245, 220, 0.65)");
  discGrad.addColorStop(0.25, "rgba(215, 190, 140, 0.4)");
  discGrad.addColorStop(0.6, "rgba(110, 95, 75, 0.15)");
  discGrad.addColorStop(1, "transparent");
  ctx.fillStyle = discGrad;
  ctx.beginPath();
  ctx.arc(0, 0, maxR, 0, Math.PI * 2);
  ctx.fill();

  // Two delicate spiral arms
  for (let a = 0; a < 2; a++) {
    const baseAngle = a * Math.PI;
    for (let i = 0; i < 450; i++) {
      const p = i / 450;
      const theta = baseAngle + p * Math.PI * 2.3;
      const r = 8 + p * (maxR * 0.9);
      const px = Math.cos(theta) * r + (rng() - 0.5) * (14 * p + 2);
      const py = Math.sin(theta) * r + (rng() - 0.5) * (14 * p + 2);

      const alpha = (1 - p * 0.75) * (rng() * 0.55 + 0.3);
      ctx.fillStyle = p < 0.3 ? "rgba(255, 245, 225, 0.9)" : "rgba(225, 200, 155, 0.8)";
      ctx.globalAlpha = alpha;
      ctx.beginPath();
      ctx.arc(px, py, rng() * 1.1 + 0.4, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Radiant core
  ctx.globalAlpha = 1;
  const coreGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, maxR * 0.3);
  coreGrad.addColorStop(0, "rgba(255, 253, 245, 0.98)");
  coreGrad.addColorStop(0.35, "rgba(245, 225, 175, 0.7)");
  coreGrad.addColorStop(0.7, "rgba(165, 135, 90, 0.2)");
  coreGrad.addColorStop(1, "transparent");
  ctx.fillStyle = coreGrad;
  ctx.beginPath();
  ctx.arc(0, 0, maxR * 0.3, 0, Math.PI * 2);
  ctx.fill();

  ctx.restore();

  // Feather edges
  ctx.save();
  ctx.globalCompositeOperation = "destination-in";
  const edgeMask = ctx.createRadialGradient(
    cx,
    cy,
    maxR * 0.35,
    cx,
    cy,
    maxR * 0.98
  );
  edgeMask.addColorStop(0, "rgba(0,0,0,1)");
  edgeMask.addColorStop(0.75, "rgba(0,0,0,0.85)");
  edgeMask.addColorStop(1, "transparent");
  ctx.fillStyle = edgeMask;
  ctx.fillRect(0, 0, size, size);
  ctx.restore();

  return canvas;
}

/**
 * Procedural generator: Distant Giant Elliptical Galaxy & Cluster (Lower-Right Sky).
 * Fully deterministic via PRNG seed.
 */
function createEllipticalGalaxyCluster(w: number, h: number, seed: number = 505): HTMLCanvasElement {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) return canvas;

  const galaxies = [
    { x: w * 0.48, y: h * 0.48, r: 54, tilt: 0.22, alpha: 0.88 },
    { x: w * 0.24, y: h * 0.32, r: 28, tilt: -0.35, alpha: 0.62 },
    { x: w * 0.75, y: h * 0.35, r: 34, tilt: 0.55, alpha: 0.68 },
    { x: w * 0.34, y: h * 0.75, r: 24, tilt: 0.12, alpha: 0.52 },
    { x: w * 0.72, y: h * 0.72, r: 26, tilt: -0.28, alpha: 0.55 },
  ];

  for (const g of galaxies) {
    ctx.save();
    ctx.translate(g.x, g.y);
    ctx.rotate(g.tilt);
    ctx.scale(1, 0.64);

    const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, g.r);
    grad.addColorStop(0, `rgba(255, 250, 235, ${g.alpha})`);
    grad.addColorStop(0.28, `rgba(235, 210, 165, ${g.alpha * 0.65})`);
    grad.addColorStop(0.68, `rgba(120, 100, 85, ${g.alpha * 0.2})`);
    grad.addColorStop(1, "transparent");

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(0, 0, g.r, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  // Feather edges
  ctx.save();
  ctx.globalCompositeOperation = "destination-in";
  const edgeMask = ctx.createRadialGradient(
    w / 2,
    h / 2,
    Math.min(w, h) * 0.25,
    w / 2,
    h / 2,
    Math.min(w, h) * 0.48
  );
  edgeMask.addColorStop(0, "rgba(0,0,0,1)");
  edgeMask.addColorStop(0.75, "rgba(0,0,0,0.85)");
  edgeMask.addColorStop(1, "transparent");
  ctx.fillStyle = edgeMask;
  ctx.fillRect(0, 0, w, h);
  ctx.restore();

  return canvas;
}

// ── PERMANENT MODULE-LEVEL CACHES ──────────────────────────────────────────
// Generated once and kept in memory permanently so background never re-randomizes.
let cachedGrandGalaxy: HTMLCanvasElement | null = null;
let cachedBlueGalaxy: HTMLCanvasElement | null = null;
let cachedTiltedGalaxy: HTMLCanvasElement | null = null;
let cachedClusterGalaxy: HTMLCanvasElement | null = null;

let cachedNebulaViolet: HTMLCanvasElement | null = null;
let cachedNebulaBlue: HTMLCanvasElement | null = null;
let cachedNebulaAmber: HTMLCanvasElement | null = null;
let cachedNebulaPlum: HTMLCanvasElement | null = null;

function getCachedGalaxies() {
  if (!cachedGrandGalaxy) cachedGrandGalaxy = createGrandSpiralGalaxy(540, 2, 2.6, 202);
  if (!cachedBlueGalaxy) cachedBlueGalaxy = createBlueSpiralGalaxy(480, 303);
  if (!cachedTiltedGalaxy) cachedTiltedGalaxy = createTiltedSpiralGalaxy(440, 404);
  if (!cachedClusterGalaxy) cachedClusterGalaxy = createEllipticalGalaxyCluster(360, 260, 505);

  if (!cachedNebulaViolet) {
    cachedNebulaViolet = createCloudyNebula(820, 580, [
      { stop: 0, color: "rgba(145, 65, 175, 0.35)" },
      { stop: 0.35, color: "rgba(95, 42, 135, 0.22)" },
      { stop: 0.7, color: "rgba(45, 25, 85, 0.09)" },
      { stop: 1, color: "transparent" },
    ], 70, 601);
  }

  if (!cachedNebulaBlue) {
    cachedNebulaBlue = createCloudyNebula(780, 540, [
      { stop: 0, color: "rgba(50, 115, 180, 0.34)" },
      { stop: 0.38, color: "rgba(35, 80, 140, 0.22)" },
      { stop: 0.72, color: "rgba(20, 45, 90, 0.08)" },
      { stop: 1, color: "transparent" },
    ], 70, 702);
  }

  if (!cachedNebulaAmber) {
    cachedNebulaAmber = createCloudyNebula(640, 460, [
      { stop: 0, color: "rgba(180, 140, 70, 0.3)" },
      { stop: 0.36, color: "rgba(130, 100, 50, 0.18)" },
      { stop: 0.72, color: "rgba(65, 50, 30, 0.06)" },
      { stop: 1, color: "transparent" },
    ], 65, 803);
  }

  if (!cachedNebulaPlum) {
    cachedNebulaPlum = createCloudyNebula(720, 500, [
      { stop: 0, color: "rgba(150, 65, 80, 0.28)" },
      { stop: 0.38, color: "rgba(100, 48, 68, 0.16)" },
      { stop: 0.72, color: "rgba(45, 28, 45, 0.05)" },
      { stop: 1, color: "transparent" },
    ], 65, 904);
  }

  return {
    grand: cachedGrandGalaxy,
    blue: cachedBlueGalaxy,
    tilted: cachedTiltedGalaxy,
    cluster: cachedClusterGalaxy,
    nebViolet: cachedNebulaViolet,
    nebBlue: cachedNebulaBlue,
    nebAmber: cachedNebulaAmber,
    nebPlum: cachedNebulaPlum,
  };
}

export interface WhereGodsResidePortalProps {
  id?: string;
  onStepInside?: () => void;
}

/**
 * Where Gods Reside — Cosmic Gateway Entry.
 *
 * Guarantees:
 * 1. FIXED BACKGROUND AT ALL TIMES:
 *    - The 4 galaxies and nebulas are anchored in their exact corners with ZERO drifting.
 *    - In-place rotation keeps celestial arms gracefully spinning without moving across the screen.
 *    - Deterministic starfield and pre-rendered caches ensure 100% stable visuals.
 * 2. COMPONENTS NEVER CHANGE OR POP IN:
 *    - "WHERE GODS RESIDE" is always fully displayed and positioned.
 *    - “Every temple here is a doorway to the divine.” is always visible.
 *    - "STEP INSIDE →" button is always visible, interactive, and beautifully styled.
 * 3. IDENTICAL EXPERIENCE ACROSS ROUTES:
 *    - Consistent across landing page (/kashi) and dedicated chapter page (/temples).
 */
export function WhereGodsResidePortal({
  id = "where-gods-reside",
  onStepInside,
}: WhereGodsResidePortalProps) {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);

  const [isNavigating, setIsNavigating] = useState(false);
  const isCtaHoveredRef = useRef(false);

  // Rare shooting stars state
  const shootingStarsRef = useRef<ShootingStar[]>([]);
  const nextShootingStarTimeRef = useRef<number>(2000);

  const handleStepInside = useCallback(() => {
    if (onStepInside) {
      onStepInside();
      return;
    }

    if (isNavigating) return;
    setIsNavigating(true);

    setTimeout(() => {
      router.push(ROUTES.temples);
    }, 450);
  }, [isNavigating, onStepInside, router]);

  // Main Canvas Render Loop — Starts once, runs smoothly, never tears down on hover
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    let stars: Star[] = [];
    let nebulas: CloudyNebula[] = [];
    let rotatingGalaxies: RotatingGalaxy[] = [];

    const initCosmicScene = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      if (width === 0 || height === 0) return;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      const assets = getCachedGalaxies();

      // ── 1. DETERMINISTIC MULTI-SCALE STARFIELD (Clean points of light — ZERO drift) ──
      const starRng = createPRNG(777);
      const starCount = Math.floor((width * height) / 750);
      stars = [];
      const starPalette = [
        "#FAF6F0",
        "#E8E1D3",
        "#D4AF37",
        "#C5A059",
        "#D8E4EC",
        "#CFC4B1",
        "#F2E6D8",
      ];

      for (let i = 0; i < starCount; i++) {
        let sx = starRng() * width;
        let sy = starRng() * height;

        // Density bias along diagonal galactic stream
        const diagDist = Math.abs(sy - (sx * 0.38 + height * 0.22));
        if (diagDist < height * 0.28 && starRng() < 0.65) {
          sy += (starRng() - 0.5) * 60;
        }

        const isVeryBright = starRng() < 0.025;
        const isMid = starRng() < 0.22;

        let size: number;
        let baseAlpha: number;

        if (isVeryBright) {
          size = starRng() * 1.1 + 1.4;
          baseAlpha = starRng() * 0.3 + 0.7;
        } else if (isMid) {
          size = starRng() * 0.5 + 0.8;
          baseAlpha = starRng() * 0.35 + 0.35;
        } else {
          size = starRng() * 0.4 + 0.3;
          baseAlpha = starRng() * 0.25 + 0.12;
        }

        stars.push({
          x: sx,
          y: sy,
          size,
          baseAlpha,
          twinkleSpeed: starRng() * 0.0025 + 0.0007,
          twinkleOffset: starRng() * Math.PI * 2,
          color: starPalette[Math.floor(starRng() * starPalette.length)],
        });
      }

      // ── 2. FOUR FIXED NEBULA FORMATIONS (ZERO drift, anchored behind galaxies) ──
      nebulas = [
        // Upper-Right Deep Violet & Magenta Nebula Veil (Anchored with Grand Spiral)
        {
          canvas: assets.nebViolet,
          relX: 0.84,
          relY: 0.30,
          width: 820,
          height: 580,
          baseAlpha: 0.9,
          rotation: 0.25,
        },
        // Top-Left Deep Blue Celestial Cloud (Anchored with Blue Spiral)
        {
          canvas: assets.nebBlue,
          relX: 0.15,
          relY: 0.26,
          width: 780,
          height: 540,
          baseAlpha: 0.88,
          rotation: -0.2,
        },
        // Lower-Left Warm Antique Gold / Amber Dust Cloud (Anchored with Golden Spiral)
        {
          canvas: assets.nebAmber,
          relX: 0.18,
          relY: 0.70,
          width: 640,
          height: 460,
          baseAlpha: 0.82,
          rotation: 0.18,
        },
        // Lower-Right Deep Terracotta & Plum Veil (Anchored with Cluster)
        {
          canvas: assets.nebPlum,
          relX: 0.86,
          relY: 0.82,
          width: 720,
          height: 500,
          baseAlpha: 0.8,
          rotation: -0.3,
        },
      ];

      // ── 3. FOUR FIXED ROTATING GALAXIES (ZERO translation drift, in-place spin only) ──
      rotatingGalaxies = [
        // 1. Top-Right Grand Design Spiral Galaxy (Clockwise in-place rotation)
        {
          canvas: assets.grand,
          relX: 0.84,
          relY: 0.30,
          width: 540,
          height: 540,
          baseAlpha: 0.92,
          rotationAngle: 0.45,
          rotationSpeed: 0.0016,
        },
        // 2. Top-Left Celestial Blue Spiral Galaxy (Counter-Clockwise in-place rotation)
        {
          canvas: assets.blue,
          relX: 0.15,
          relY: 0.26,
          width: 480,
          height: 480,
          baseAlpha: 0.9,
          rotationAngle: -0.3,
          rotationSpeed: -0.0014,
        },
        // 3. Lower-Left Golden Spiral Galaxy (Clockwise in-place rotation)
        {
          canvas: assets.tilted,
          relX: 0.18,
          relY: 0.70,
          width: 440,
          height: 440,
          baseAlpha: 0.88,
          rotationAngle: -0.35,
          rotationSpeed: 0.0018,
        },
        // 4. Lower-Right Giant Elliptical Galaxy Cluster (Counter-Clockwise in-place rotation)
        {
          canvas: assets.cluster,
          relX: 0.86,
          relY: 0.82,
          width: 360,
          height: 260,
          baseAlpha: 0.85,
          rotationAngle: 0.05,
          rotationSpeed: -0.0012,
        },
      ];
    };

    initCosmicScene();
    window.addEventListener("resize", initCosmicScene);

    // Compute location of "GODS" word relative to container
    const getGodsPosition = () => {
      const textEl = textContainerRef.current;
      const sectionEl = sectionRef.current;
      if (!textEl || !sectionEl) {
        return { godsX: width * 0.48, godsY: height * 0.38 };
      }
      const textRect = textEl.getBoundingClientRect();
      const sectionRect = sectionEl.getBoundingClientRect();
      const relLeft = textRect.left - sectionRect.left;
      const relTop = textRect.top - sectionRect.top;
      return {
        godsX: relLeft + textRect.width * 0.68,
        godsY: relTop + textRect.height * 0.28,
      };
    };

    // Transition zone: smooth emergence from riverfront into deep cosmos
    const getTransitionAlpha = (y: number, transitionHeight: number): number => {
      if (y <= 40) return 0;
      if (y >= transitionHeight) return 1;
      const t = (y - 40) / (transitionHeight - 40);
      return t * t * (3 - 2 * t);
    };

    // Render loop
    const render = (timestamp: number) => {
      const transitionHeight = Math.min(height * 0.34, 460);
      const isHovered = isCtaHoveredRef.current;

      // ── A. CONTINUOUS DEEP-SPACE BASE GRADIENT ─────────────────────────────
      const baseGrad = ctx.createLinearGradient(0, 0, 0, height);
      baseGrad.addColorStop(0, "#0c0c0a");
      baseGrad.addColorStop(0.16, "#09080d");
      baseGrad.addColorStop(0.35, "#06050b");
      baseGrad.addColorStop(0.65, "#040308");
      baseGrad.addColorStop(1, "#020205");
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, width, height);

      // ── B. VISIBLE NEBULA FORMATIONS (FIXED POSITIONS — SCREEN BLEND) ───────
      ctx.save();
      ctx.globalCompositeOperation = "screen";
      for (let n = 0; n < nebulas.length; n++) {
        const neb = nebulas[n];
        const nx = neb.relX * width;
        const ny = neb.relY * height;

        const tAlpha = getTransitionAlpha(ny, transitionHeight);
        if (tAlpha <= 0.01) continue;

        ctx.save();
        ctx.translate(nx, ny);
        ctx.rotate(neb.rotation);
        ctx.globalAlpha = (isHovered ? neb.baseAlpha * 1.15 : neb.baseAlpha) * tAlpha;
        ctx.drawImage(
          neb.canvas,
          -neb.width / 2,
          -neb.height / 2,
          neb.width,
          neb.height
        );
        ctx.restore();
      }
      ctx.restore();

      // ── C. FOUR ROTATING GALAXIES (FIXED POSITIONS — IN-PLACE ROTATION ONLY) ─
      ctx.save();
      ctx.globalCompositeOperation = "screen";
      for (let g = 0; g < rotatingGalaxies.length; g++) {
        const gal = rotatingGalaxies[g];
        gal.rotationAngle += gal.rotationSpeed;

        const gx = gal.relX * width;
        const gy = gal.relY * height;

        const tAlpha = getTransitionAlpha(gy, transitionHeight);
        if (tAlpha <= 0.01) continue;

        ctx.save();
        ctx.translate(gx, gy);
        ctx.rotate(gal.rotationAngle);
        ctx.globalAlpha = (isHovered ? gal.baseAlpha * 1.15 : gal.baseAlpha) * tAlpha;
        ctx.drawImage(
          gal.canvas,
          -gal.width / 2,
          -gal.height / 2,
          gal.width,
          gal.height
        );
        ctx.restore();
      }
      ctx.restore();

      // ── D. MULTI-LAYER STAR FIELD (Pure points of light — ZERO drift) ───────
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        const tAlpha = getTransitionAlpha(star.y, transitionHeight);
        if (tAlpha <= 0.02) continue;

        const twinkle = Math.sin(timestamp * star.twinkleSpeed + star.twinkleOffset);
        const alpha = Math.max(0.04, Math.min(1, (star.baseAlpha + twinkle * 0.28) * tAlpha));

        ctx.fillStyle = star.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // ── E. RARE SHOOTING STARS ──────────────────────────────────────────────
      if (timestamp > nextShootingStarTimeRef.current) {
        const startX = Math.random() * (width * 0.65) + width * 0.15;
        const startY = Math.random() * (height * 0.3) + transitionHeight * 0.4;
        const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.25;
        const speed = Math.random() * 8 + 14;

        shootingStarsRef.current.push({
          x: startX,
          y: startY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          length: Math.random() * 85 + 75,
          alpha: 1,
          life: 0,
          maxLife: 46,
        });

        nextShootingStarTimeRef.current = timestamp + Math.random() * 8000 + 10000;
      }

      for (let s = shootingStarsRef.current.length - 1; s >= 0; s--) {
        const meteor = shootingStarsRef.current[s];
        meteor.life++;
        meteor.x += meteor.vx;
        meteor.y += meteor.vy;
        meteor.alpha = Math.max(0, 1 - meteor.life / meteor.maxLife);

        if (meteor.life >= meteor.maxLife) {
          shootingStarsRef.current.splice(s, 1);
          continue;
        }

        const dist = Math.hypot(meteor.vx, meteor.vy);
        const tailX = meteor.x - (meteor.vx / dist) * meteor.length;
        const tailY = meteor.y - (meteor.vy / dist) * meteor.length;

        const meteorGrad = ctx.createLinearGradient(tailX, tailY, meteor.x, meteor.y);
        meteorGrad.addColorStop(0, "transparent");
        meteorGrad.addColorStop(0.65, `rgba(235, 215, 175, ${meteor.alpha * 0.6})`);
        meteorGrad.addColorStop(1, `rgba(255, 255, 255, ${meteor.alpha})`);

        ctx.save();
        ctx.strokeStyle = meteorGrad;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(meteor.x, meteor.y);
        ctx.stroke();

        ctx.fillStyle = `rgba(255, 255, 255, ${meteor.alpha})`;
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, 1.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // ── F. ORGANIC VOLUMETRIC GLOW BEHIND "GODS" ────────────────────────────
      const { godsX, godsY } = getGodsPosition();
      ctx.save();
      const coreHalo = ctx.createRadialGradient(godsX, godsY, 8, godsX, godsY, 150);
      coreHalo.addColorStop(0, "rgba(212, 175, 55, 0.32)");
      coreHalo.addColorStop(0.35, "rgba(197, 160, 89, 0.18)");
      coreHalo.addColorStop(0.75, "rgba(140, 110, 60, 0.04)");
      coreHalo.addColorStop(1, "transparent");
      ctx.fillStyle = coreHalo;
      ctx.beginPath();
      ctx.arc(godsX, godsY, 150, 0, Math.PI * 2);
      ctx.fill();

      // Wide horizontal soft diffusion lobe
      ctx.save();
      ctx.translate(godsX, godsY);
      ctx.rotate(-0.06);
      ctx.scale(1.8, 0.9);
      const lobe1 = ctx.createRadialGradient(0, 0, 15, 0, 0, 240);
      lobe1.addColorStop(0, "rgba(197, 160, 89, 0.18)");
      lobe1.addColorStop(0.35, "rgba(160, 130, 70, 0.09)");
      lobe1.addColorStop(0.72, "rgba(90, 70, 35, 0.02)");
      lobe1.addColorStop(1, "transparent");
      ctx.fillStyle = lobe1;
      ctx.beginPath();
      ctx.arc(0, 0, 240, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", initCosmicScene);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      aria-label="Where Gods Reside — Cosmic Gateway"
      className="relative w-full min-h-screen flex flex-col justify-center pt-28 sm:pt-36 md:pt-40 pb-16 sm:pb-20 bg-[#0c0c0a] text-[#FAF6F0] overflow-hidden select-none z-10"
    >
      {/* Top Atmospheric Dissolve Bridge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-64 sm:h-80 bg-gradient-to-b from-[#0c0c0a] via-[#0c0c0a]/75 to-transparent z-10"
      />

      {/* The Procedural Multi-Layer Cosmic Universe Canvas — 100% Fixed and Stable */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Floating Celestial Composition — Left-side editorial placement */}
      <div className="relative z-20 w-full px-8 sm:px-14 md:px-20 lg:px-24 pt-4 pb-2 flex flex-col justify-center">
        {/* 
          MAIN TYPOGRAPHY — PERMANENTLY VISIBLE, FIXED, AND ROCK SOLID:
          Line 1: WHERE [pure white] GODS [warm antique gold with celestial glow]
          Line 2: RESIDE [pure white, crisp & elegant]
        */}
        <div ref={textContainerRef} className="relative inline-block my-2">
          <h2 className="font-display font-bold uppercase tracking-tight leading-[0.96] select-none text-[3.25rem] sm:text-[5rem] md:text-[6.5rem] lg:text-[7.75rem]">
            <span className="block">
              <span className="text-[#FAF6F0] [text-shadow:0_0_20px_rgba(250,246,240,0.2)]">
                Where{" "}
              </span>
              <span
                className="text-[#C5A059] [text-shadow:0_0_18px_rgba(197,160,89,0.7),0_0_38px_rgba(197,160,89,0.35)]"
              >
                Gods
              </span>
            </span>
            <span
              className="block text-[#FAF6F0] [text-shadow:0_0_20px_rgba(250,246,240,0.2)]"
            >
              Reside
            </span>
          </h2>
        </div>

        {/* SUPPORTING LINE — PERMANENTLY VISIBLE */}
        <div className="mt-8 sm:mt-12 max-w-xl">
          <p className="text-xl sm:text-2xl md:text-3xl font-editorial italic text-[#CFC4B1] leading-relaxed opacity-90">
            “Every temple here is a doorway to the divine.”
          </p>
        </div>

        {/* PORTAL INTERACTION: WHERE GODS RESIDE / ENTER THE TEMPLES (TEXT ONLY — NO BORDER) */}
        <div className="mt-8 sm:mt-12">
          <button
            type="button"
            onClick={handleStepInside}
            onMouseEnter={() => {
              isCtaHoveredRef.current = true;
            }}
            onMouseLeave={() => {
              isCtaHoveredRef.current = false;
            }}
            aria-label="Where Gods Reside — Enter the Temples"
            className="group relative inline-flex items-center gap-5 sm:gap-7 focus:outline-none cursor-pointer select-none transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            {/* The Text from the plaque */}
            <div className="flex flex-col text-left">
              <span
                className="text-lg sm:text-2xl md:text-[1.75rem] font-bold tracking-[0.22em] sm:tracking-[0.26em] uppercase text-[#F8F2E6] drop-shadow-[0_2px_14px_rgba(212,175,55,0.4)] group-hover:text-white group-hover:drop-shadow-[0_0_24px_rgba(212,175,55,0.8)] transition-all duration-300"
                style={{ fontFamily: "'Cinzel', Georgia, serif" }}
              >
                Where Gods Reside
              </span>
              <span
                className="text-[10px] sm:text-xs md:text-[13px] font-semibold tracking-[0.38em] uppercase text-[#C5A059] group-hover:text-[#E8D5B5] mt-1 sm:mt-1.5 transition-colors duration-300"
                style={{ fontFamily: "'Cinzel', Georgia, serif" }}
              >
                Enter The Temples
              </span>
            </div>

            {/* Vertical Golden Divider */}
            <div className="h-9 sm:h-12 w-px bg-gradient-to-b from-transparent via-[#C5A059]/70 to-transparent group-hover:via-[#FAF6F0] transition-colors duration-300" />

            {/* Arrow */}
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 sm:w-7 sm:h-7 text-[#C5A059] group-hover:text-[#FAF6F0] stroke-current stroke-[1.8] fill-none transition-all duration-300 group-hover:translate-x-2 drop-shadow-[0_0_12px_rgba(197,160,89,0.6)]"
            >
              <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
