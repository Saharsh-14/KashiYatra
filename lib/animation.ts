import gsap from "gsap";
import { prefersReducedMotion } from "./accessibility";

/**
 * Central animation curves and timing constants
 */
export const EASING = {
  cinematic: "power3.out",
  editorial: "power2.out",
  gentle: "sine.out",
  dramatic: "expo.out",
  linear: "none",
} as const;

export const DURATIONS = {
  micro: 0.2,
  fast: 0.4,
  normal: 0.8,
  slow: 1.2,
  atmospheric: 1.8,
} as const;

/**
 * Executes an animation safely with respect to prefers-reduced-motion
 */
export function runMotion(animate: () => gsap.core.Tween | gsap.core.Timeline | void) {
  if (prefersReducedMotion()) {
    return;
  }
  return animate();
}

/**
 * Standardized entrance animations
 */
export const MOTION_PRESETS = {
  fadeUp: (target: gsap.TweenTarget, vars: gsap.TweenVars = {}) => {
    if (prefersReducedMotion()) {
      return gsap.set(target, { opacity: 1, y: 0 });
    }
    return gsap.fromTo(
      target,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: DURATIONS.normal,
        ease: EASING.cinematic,
        ...vars,
      }
    );
  },
  fadeIn: (target: gsap.TweenTarget, vars: gsap.TweenVars = {}) => {
    if (prefersReducedMotion()) {
      return gsap.set(target, { opacity: 1 });
    }
    return gsap.fromTo(
      target,
      { opacity: 0 },
      {
        opacity: 1,
        duration: DURATIONS.normal,
        ease: EASING.editorial,
        ...vars,
      }
    );
  },
  staggerCards: (targets: gsap.TweenTarget, vars: gsap.TweenVars = {}) => {
    if (prefersReducedMotion()) {
      return gsap.set(targets, { opacity: 1, y: 0 });
    }
    return gsap.fromTo(
      targets,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: DURATIONS.slow,
        stagger: 0.12,
        ease: EASING.cinematic,
        ...vars,
      }
    );
  },
};
