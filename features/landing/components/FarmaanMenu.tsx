"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";

interface MenuItem {
  id: string;
  num: string;
  title: string;
  targetId: string;
  topPct: number;
  heightPct: number;
}

const MENU_ITEMS: MenuItem[] = [
  { id: "intro", num: "01", title: "INTRO", targetId: "hero", topPct: 15.6, heightPct: 9.3 },
  { id: "steps", num: "02", title: "STEPS TO ETERNITY", targetId: "steps-to-eternity", topPct: 27.3, heightPct: 9.3 },
  { id: "gods", num: "03", title: "WHERE GODS RESIDE", targetId: "where-gods-reside", topPct: 39.1, heightPct: 9.3 },
  { id: "unfolded", num: "04", title: "KASHI UNFOLDED", targetId: "unfolded", topPct: 50.8, heightPct: 9.8 },
  { id: "rasoi", num: "05", title: "KASHI RASOI", targetId: "rasoi", topPct: 63.0, heightPct: 9.3 },
  { id: "echoes", num: "06", title: "ECHOES OF KASHI", targetId: "spirit-of-kashi-video", topPct: 74.7, heightPct: 9.3 },
];

/**
 * THE FARMAAN — Royal Decree Roll-Down Navigation Menu
 *
 * Uses the authentic royal decree scroll artwork directly as the roll-down menu:
 * - Rolled royal scroll trigger in the top right
 * - Unrolls downwards physically on click (GSAP scaleY & depth transition)
 * - Interactive clickable zones over the 6 decree sections with subtle parchment glow
 * - Lenis smooth-scroll navigation to each section
 * - Preserves existing page design and aesthetic
 */
export function FarmaanMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // Smooth scroll controller
  let smoothScrollApi: ReturnType<typeof useSmoothScroll> | null = null;
  try {
    smoothScrollApi = useSmoothScroll();
  } catch {
    smoothScrollApi = null;
  }

  // Setup GSAP physical unrolling timeline
  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power2.inOut" },
        onReverseComplete: () => {
          if (containerRef.current) {
            containerRef.current.style.pointerEvents = "none";
          }
        },
      });

      tlRef.current = tl;

      // 1. Soft atmospheric backdrop overlay
      tl.to(
        overlayRef.current,
        {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        0
      );

      // 2. Unrolling of the royal decree scroll downwards
      // Starts compressed at the top (scaleY: 0.05) and rolls down to full length
      tl.fromTo(
        scrollWrapperRef.current,
        {
          opacity: 0,
          scaleY: 0.06,
          scaleX: 0.96,
          transformOrigin: "top center",
        },
        {
          opacity: 1,
          scaleY: 1,
          scaleX: 1,
          duration: 0.75,
          ease: "power3.out",
        },
        0.05
      );

      // Subtle drop shadow depth bloom as it unrolls
      tl.fromTo(
        scrollWrapperRef.current,
        {
          filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))",
        },
        {
          filter:
            "drop-shadow(0 25px 50px rgba(0,0,0,0.85)) drop-shadow(0 4px 18px rgba(197,160,89,0.3))",
          duration: 0.75,
          ease: "power2.out",
        },
        0.05
      );

      // 3. Staggered reveal of interactive button zones
      tl.fromTo(
        itemsRef.current.filter(Boolean),
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.04,
          duration: 0.35,
          ease: "power2.out",
        },
        0.35
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Open / Close handler
  const handleToggle = useCallback(() => {
    if (!tlRef.current) return;

    if (!isOpen) {
      if (containerRef.current) {
        containerRef.current.style.pointerEvents = "auto";
      }
      setIsOpen(true);
      tlRef.current.play();
    } else {
      setIsOpen(false);
      tlRef.current.reverse();
    }
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (isOpen && tlRef.current) {
      setIsOpen(false);
      tlRef.current.reverse();
    }
  }, [isOpen]);

  // Keyboard navigation (Escape to close)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleClose]);

  // Navigate to section
  const handleNavigate = useCallback(
    (targetId: string) => {
      handleClose();

      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          const rect = el.getBoundingClientRect();
          const targetTop = window.scrollY + rect.top;

          if (smoothScrollApi) {
            smoothScrollApi.scrollTo(targetTop);
          } else {
            window.scrollTo({
              top: targetTop,
              behavior: "smooth",
            });
          }
        } else if (targetId === "hero") {
          if (smoothScrollApi) {
            smoothScrollApi.scrollTo(0);
          } else {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }
        }
      }, 350);
    },
    [handleClose, smoothScrollApi]
  );

  return (
    <>
      {/* =====================================================================
          1. FARMAAN TRIGGER (The Authentic Rolled Royal Farmaan Scroll)
          ===================================================================== */}
      {!isOpen && (
        <div className="fixed top-5 right-5 sm:top-7 sm:right-8 z-50 flex items-center">
          <button
            type="button"
            onClick={handleToggle}
            aria-expanded={false}
            aria-label="Unroll royal Farmaan decree"
            className="group relative flex flex-col items-center focus:outline-none select-none transition-transform duration-300 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <div className="relative w-36 sm:w-44 md:w-52 aspect-[1010/165] drop-shadow-[0_8px_20px_rgba(0,0,0,0.7)] group-hover:drop-shadow-[0_12px_28px_rgba(197,160,89,0.45)] transition-all duration-300">
              <Image
                src="/images/landing/farmaan-scroll.png"
                alt="Royal Farmaan Scroll"
                fill
                priority
                className="object-contain"
              />
            </div>
          </button>
        </div>
      )}

      {/* =====================================================================
          2. FARMAAN OVERLAY & EXACT UNROLLED SCROLL MENU
          ===================================================================== */}
      <div
        ref={containerRef}
        aria-hidden={!isOpen}
        style={{ pointerEvents: "none" }}
        className="fixed inset-0 z-40 overflow-hidden flex items-start justify-end p-3 sm:p-6 md:p-8 lg:p-10 select-none"
      >
        {/* Soft atmospheric background dimming (preserves landing page visibility) */}
        <div
          ref={overlayRef}
          onClick={handleClose}
          className="absolute inset-0 bg-[#090807]/65 backdrop-blur-[3px] opacity-0 transition-opacity"
        />

        {/* =====================================================================
            3. THE EXACT UNROLLED ROYAL FARMAAN DECREE MENU
            ===================================================================== */}
        <div
          ref={scrollWrapperRef}
          className="relative z-10 w-[88vw] max-w-[390px] sm:max-w-[440px] md:max-w-[480px] lg:max-w-[510px] aspect-[682/1024] max-h-[calc(100vh-28px)] origin-top mt-2 sm:mt-4 mr-0 sm:mr-2"
          style={{ willChange: "transform, opacity, filter" }}
        >
          {/* One Simple Cross Close Button (Without any text) */}
          <button
            type="button"
            onClick={handleClose}
            aria-label="Close Farmaan menu"
            className="absolute -top-3 -right-3 sm:-top-3.5 sm:-right-3.5 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#18130E]/95 hover:bg-[#8E281F] border border-[#C5A059]/80 text-[#F5E8D0] flex items-center justify-center shadow-2xl transition-all duration-200 hover:scale-110 focus:outline-none cursor-pointer"
          >
            <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-current stroke-[1.8]" fill="none">
              <path d="M4 4L12 12M12 4L4 12" strokeLinecap="round" />
            </svg>
          </button>

          {/* Authentic Unrolled Scroll Graphic (Exactly as uploaded) */}
          <div className="relative w-full h-full pointer-events-none">
            <Image
              src="/images/landing/farmaan-decree-menu.png"
              alt="Royal Farmaan Decree Navigation Menu"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* =====================================================================
              4. INTERACTIVE CLICKABLE SLOTS FOR THE 6 SECTIONS
              ===================================================================== */}
          <nav aria-label="Farmaan Menu Navigation" className="absolute inset-0 z-20">
            {MENU_ITEMS.map((item, idx) => {
              const isHovered = hoveredItem === item.id;

              return (
                <button
                  key={item.id}
                  ref={(el) => {
                    itemsRef.current[idx] = el;
                  }}
                  type="button"
                  onClick={() => handleNavigate(item.targetId)}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{
                    top: `${item.topPct}%`,
                    height: `${item.heightPct}%`,
                    left: "14%",
                    width: "72%",
                  }}
                  aria-label={`Navigate to section ${item.num}: ${item.title}`}
                  className="group absolute rounded-lg cursor-pointer focus:outline-none transition-all duration-200 flex items-center justify-between px-3 sm:px-5"
                >
                  {/* Subtle warm amber/ink hover glow */}
                  <div
                    className={`absolute inset-0 rounded-lg transition-all duration-250 pointer-events-none ${
                      isHovered
                        ? "bg-[#7A4B1A]/18 shadow-[inset_0_0_20px_rgba(160,110,40,0.3)] ring-1 ring-[#9A6E2D]/40"
                        : "bg-transparent ring-0"
                    }`}
                  />

                  {/* Left decorative flourish indicator on hover */}
                  <span
                    className={`relative z-10 text-[10px] sm:text-xs text-[#6B471F] font-serif transition-all duration-200 ${
                      isHovered
                        ? "opacity-90 translate-x-0"
                        : "opacity-0 -translate-x-2"
                    }`}
                  >
                    ✦
                  </span>

                  {/* Screen reader text for complete accessibility */}
                  <span className="sr-only">
                    {item.num} — {item.title}
                  </span>

                  {/* Right decorative flourish indicator on hover */}
                  <span
                    className={`relative z-10 text-[10px] sm:text-xs text-[#6B471F] font-serif transition-all duration-200 ${
                      isHovered
                        ? "opacity-90 translate-x-0"
                        : "opacity-0 translate-x-2"
                    }`}
                  >
                    ✦
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}
