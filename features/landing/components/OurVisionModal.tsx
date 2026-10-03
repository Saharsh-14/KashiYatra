"use client";

import { useEffect, useCallback, useRef, useState } from "react";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";

interface OurVisionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OurVisionModal({ isOpen, onClose }: OurVisionModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isClosingRef = useRef(false);
  const { stop, start } = useSmoothScroll();
  const [scrollProgress, setScrollProgress] = useState(0);

  /* ── Track scroll progress ─────────────────────────────────────────── */
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const maxScroll = el.scrollHeight - el.clientHeight;
    if (maxScroll > 0) {
      const progress = Math.min(100, Math.max(0, (el.scrollTop / maxScroll) * 100));
      setScrollProgress(progress);
    }
  };

  /* ── Lock body scroll & pause Lenis when modal is open ──────────── */
  useEffect(() => {
    if (isOpen) {
      stop();
      const scrollY = window.scrollY;
      const originalOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      // Focus the scroll container so keyboard navigation works immediately
      const focusTimer = setTimeout(() => {
        contentRef.current?.focus();
      }, 60);

      return () => {
        clearTimeout(focusTimer);
        document.body.style.overflow = originalOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;

        // Ensure instantaneous scroll restoration with NO smooth scroll animation
        const prevScrollBehavior = document.documentElement.style.scrollBehavior;
        document.documentElement.style.scrollBehavior = "auto";
        window.scrollTo({ top: scrollY, left: 0, behavior: "instant" });
        document.documentElement.style.scrollBehavior = prevScrollBehavior;

        start();
      };
    }
  }, [isOpen, stop, start]);

  /* ── Close with Escape key ───────────────────────────────────────── */
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  /* ── Animated close ──────────────────────────────────────────────── */
  const handleClose = useCallback(() => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;

    const overlay = overlayRef.current;
    const modal = modalRef.current;

    if (overlay) {
      overlay.style.transition = "opacity 320ms cubic-bezier(0.4, 0, 0.2, 1)";
      overlay.style.opacity = "0";
    }
    if (modal) {
      modal.style.transition =
        "opacity 280ms cubic-bezier(0.4, 0, 0.2, 1), transform 280ms cubic-bezier(0.4, 0, 0.2, 1)";
      modal.style.opacity = "0";
      modal.style.transform = "scale(0.96) translateY(8px)";
    }

    setTimeout(() => {
      isClosingRef.current = false;
      onClose();
    }, 330);
  }, [onClose]);

  /* ── Overlay click → close (outside click only) ──────────────────── */
  const handleOverlayClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlayRef.current) {
        handleClose();
      }
    },
    [handleClose]
  );

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      data-lenis-prevent="true"
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 md:p-8"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        animation: "privacyOverlayIn 400ms cubic-bezier(0.4, 0, 0.2, 1) forwards",
      }}
    >
      {/* ── Modal container ─────────────────────────────────────────── */}
      <div
        ref={modalRef}
        data-lenis-prevent="true"
        role="dialog"
        aria-modal="true"
        aria-labelledby="our-vision-title"
        className="relative w-[94vw] sm:w-[88vw] md:w-[80vw] h-[88vh] sm:h-[84vh] md:h-[80vh] max-w-[1100px] rounded-lg overflow-hidden flex flex-col"
        style={{
          backgroundColor: "rgba(14, 12, 10, 0.95)",
          border: "1px solid rgba(214, 206, 190, 0.12)",
          boxShadow:
            "0 25px 70px rgba(0, 0, 0, 0.75), 0 0 50px rgba(200, 165, 92, 0.08)",
          animation:
            "privacyModalIn 450ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        {/* ── Single Control: Small "×" close button at top-right ────── */}
        <button
          onClick={handleClose}
          type="button"
          aria-label="Close Our Vision"
          className="absolute top-4 right-4 sm:top-5 sm:right-6 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[#D6CEBE]/70 hover:text-[#FAF6F0] bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-[#C8A55C]/40 transition-all duration-200 cursor-pointer shadow-sm group"
        >
          <span className="text-xl sm:text-2xl leading-none group-hover:scale-110 transition-transform">×</span>
        </button>

        {/* Top subtle shadow when scrolled */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-[rgba(14,12,10,0.95)] to-transparent z-20 transition-opacity duration-300 ${
            scrollProgress > 2 ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* ── Scrollable content ───────────────────────────────────── */}
        <div
          ref={contentRef}
          data-lenis-prevent="true"
          tabIndex={0}
          onScroll={handleScroll}
          className="modal-scrollbar h-full overflow-y-auto overscroll-contain focus:outline-none px-6 sm:px-12 md:px-16 lg:px-20 py-8 sm:py-12 md:py-14"
        >
          {/* Header */}
          <header className="mb-8 sm:mb-12 pr-12">
            <h2
              id="our-vision-title"
              className="type-ui tracking-[0.3em] uppercase text-[#FAF6F0]/95 font-medium mb-3"
              style={{ fontSize: "clamp(20px, 2.5vw, 30px)" }}
            >
              OUR VISION
            </h2>
          </header>

          {/* Vision Content */}
          <div className="space-y-10 sm:space-y-12 max-w-[780px]">
            {/* Introductory statement */}
            <div className="space-y-5 text-[15px] sm:text-[16px] md:text-[16.5px] leading-[1.85] text-[#D6CEBE]/85">
              <p>
                Our vision is to present Kashi beyond the postcard.
              </p>
              <p>
                Kashi is more than its monuments and famous landmarks. It lives in the rhythm of its ghats, the glow of its evenings, the sounds of its streets, the traditions passed through generations, and the quiet moments along the river.
              </p>
              <p>
                KashiYatra brings these fragments together into one immersive digital experience — allowing people to discover the city not just through information, but through atmosphere, emotion, movement, and story.
              </p>
            </div>

            {/* BEYOND THE ORDINARY */}
            <section className="pt-2 sm:pt-4">
              <h3 className="type-ui text-[13px] sm:text-[14px] tracking-[0.24em] uppercase text-[#FAF6F0]/90 mb-4 sm:mb-5">
                BEYOND THE ORDINARY
              </h3>
              <div className="space-y-4 sm:space-y-5 text-[15px] sm:text-[16px] md:text-[16.5px] leading-[1.85] text-[#D6CEBE]/85">
                <p>
                  We want to move away from the conventional travel experience where a city is reduced to a list of places and photographs.
                </p>
                <p>
                  Instead, KashiYatra creates a journey where every interaction reveals another layer of the city.
                </p>
              </div>
            </section>

            {/* PRESERVING THE SOUL */}
            <section className="pt-2 sm:pt-4">
              <h3 className="type-ui text-[13px] sm:text-[14px] tracking-[0.24em] uppercase text-[#FAF6F0]/90 mb-4 sm:mb-5">
                PRESERVING THE SOUL
              </h3>
              <div className="space-y-4 sm:space-y-5 text-[15px] sm:text-[16px] md:text-[16.5px] leading-[1.85] text-[#D6CEBE]/85">
                <p>
                  While the experience is designed for the digital world, the identity of Kashi remains at its heart.
                </p>
                <p>
                  Our goal is not to redefine Kashi, but to reinterpret its timeless character through a contemporary lens while respecting the culture, heritage, and traditions that make it unique.
                </p>
              </div>
            </section>

            {/* THE IDEA */}
            <section className="pt-2 sm:pt-4">
              <h3 className="type-ui text-[13px] sm:text-[14px] tracking-[0.24em] uppercase text-[#FAF6F0]/90 mb-4 sm:mb-5">
                THE IDEA
              </h3>
              <div className="pt-2 sm:pt-4 pb-4">
                <div className="w-12 h-[1px] bg-gradient-to-r from-[#C8A55C]/40 to-transparent mb-5 sm:mb-6" aria-hidden="true" />
                <p className="text-[17px] sm:text-[19px] md:text-[20px] leading-[1.75] text-[#FAF6F0] italic font-editorial font-medium">
                  A timeless city.<br />
                  A new way to experience it.
                </p>
              </div>
            </section>
          </div>

          {/* Bottom breathing room */}
          <div className="h-10 sm:h-14" />
        </div>
      </div>
    </div>
  );
}
