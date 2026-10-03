"use client";

import { useEffect, useCallback, useRef } from "react";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";

interface TermsOfUseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TermsOfUseModal({ isOpen, onClose }: TermsOfUseModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isClosingRef = useRef(false);
  const { stop, start } = useSmoothScroll();

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
        aria-labelledby="terms-of-use-title"
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
          aria-label="Close Terms of Use"
          className="absolute top-4 right-4 sm:top-5 sm:right-6 z-30 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-[#D6CEBE]/70 hover:text-[#FAF6F0] bg-white/[0.04] hover:bg-white/[0.1] border border-white/10 hover:border-[#C8A55C]/40 transition-all duration-200 cursor-pointer shadow-sm group"
        >
          <span className="text-xl sm:text-2xl leading-none group-hover:scale-110 transition-transform">×</span>
        </button>

        {/* ── Scrollable content ───────────────────────────────────── */}
        <div
          ref={contentRef}
          data-lenis-prevent="true"
          tabIndex={0}
          className="modal-scrollbar h-full overflow-y-auto overscroll-contain focus:outline-none px-6 sm:px-12 md:px-16 lg:px-20 py-8 sm:py-12 md:py-14"
        >
          {/* Header */}
          <header className="mb-10 sm:mb-14 pr-12">
            <h2
              id="terms-of-use-title"
              className="type-ui tracking-[0.3em] uppercase text-[#FAF6F0]/95 font-medium mb-3"
              style={{ fontSize: "clamp(20px, 2.5vw, 30px)" }}
            >
              TERMS OF USE
            </h2>
            <p className="type-ui text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#D6CEBE]/50">
              Last Updated — 2026
            </p>
          </header>

          {/* Terms sections */}
          <div className="space-y-10 sm:space-y-12 max-w-[760px]">
            <TermsSection number="1" title="ABOUT KASHIYATRA">
              <p>
                KashiYatra is an immersive digital project created to present
                and explore the cultural, historical, architectural, spiritual,
                and culinary character of Kashi.
              </p>
              <p>
                The website is intended primarily for educational,
                informational, and experiential purposes.
              </p>
            </TermsSection>

            <TermsSection number="2" title="USE OF THE WEBSITE">
              <p>
                You may browse and interact with KashiYatra for personal and
                informational purposes.
              </p>
              <p>
                You agree not to intentionally misuse the website, interfere
                with its functionality, attempt to gain unauthorized access, or
                use the website for unlawful purposes.
              </p>
            </TermsSection>

            <TermsSection number="3" title="CONTENT AND ACCURACY">
              <p>
                The information presented on KashiYatra is provided for general
                informational and educational purposes.
              </p>
              <p>
                Kashi is a city with a long and complex cultural and historical
                tradition. Certain stories, traditions, interpretations, and
                historical accounts may vary across sources and communities.
              </p>
              <p>
                We aim to present information respectfully and accurately, but
                KashiYatra does not guarantee that every piece of information will
                always be complete, current, or universally accepted.
              </p>
            </TermsSection>

            <TermsSection number="4" title="IMAGES AND CREATIVE CONTENT">
              <p>
                The visual content, illustrations, interface design, animations,
                written content, and other creative elements of KashiYatra may be
                original, licensed, generated, or sourced from third parties.
              </p>
              <p>
                Third-party material remains subject to the rights and
                permissions of its respective owners.
              </p>
              <p>
                You may not reproduce, redistribute, modify, or commercially
                use protected content from the website without appropriate
                permission.
              </p>
            </TermsSection>

            <TermsSection number="5" title="EXTERNAL WEBSITES">
              <p>
                KashiYatra may provide links to third-party websites, social
                media platforms, or other external resources.
              </p>
              <p>
                These links are provided for convenience and additional
                information. KashiYatra does not control or guarantee the
                content, availability, or policies of external websites.
              </p>
            </TermsSection>

            <TermsSection number="6" title="INTELLECTUAL PROPERTY">
              <p>
                The KashiYatra name, logo, interface, original written content,
                original visual design, and original interactive experiences are
                part of the KashiYatra project and may not be reproduced or
                commercially distributed without permission.
              </p>
              <p>
                Third-party trademarks, names, images, and materials remain the
                property of their respective owners.
              </p>
            </TermsSection>

            <TermsSection number="7" title="AVAILABILITY">
              <p>
                We aim to keep KashiYatra available and functional, but we do
                not guarantee that the website will always be available,
                uninterrupted, or free from technical issues.
              </p>
              <p>
                Features may be modified, updated, or removed as the project
                evolves.
              </p>
            </TermsSection>

            <TermsSection number="8" title="LIMITATION OF LIABILITY">
              <p>
                KashiYatra is provided on an informational and experiential
                basis. We are not responsible for losses or damages arising from
                reliance on information presented on the website or from the use
                of external websites linked through KashiYatra.
              </p>
            </TermsSection>

            <TermsSection number="9" title="CHANGES TO THESE TERMS">
              <p>
                These Terms of Use may be updated as the website or project
                develops. Continued use of KashiYatra after changes are published
                constitutes acceptance of the updated terms.
              </p>
            </TermsSection>

            <TermsSection number="10" title="CONTACT">
              <p>
                For questions regarding these Terms of Use, please use the
                contact information provided on the KashiYatra website.
              </p>
            </TermsSection>
          </div>

          {/* Bottom breathing room */}
          <div className="h-12 sm:h-16" />
        </div>
      </div>
    </div>
  );
}

/* ── Individual terms section ────────────────────────────────────────── */
function TermsSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h3 className="type-ui text-[13px] sm:text-[14px] tracking-[0.22em] uppercase text-[#FAF6F0]/85 mb-4 sm:mb-5">
        <span className="text-[#C8A55C]/60 mr-2 tabular-nums">{number}.</span>
        {title}
      </h3>
      <div className="space-y-4 text-[14px] sm:text-[15px] leading-[1.85] text-[#D6CEBE]/80">
        {children}
      </div>
    </section>
  );
}
