"use client";

import { useEffect, useCallback, useRef, useState } from "react";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isClosingRef = useRef(false);
  const { stop, start } = useSmoothScroll();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollDown, setCanScrollDown] = useState(true);

  /* ── Track scroll progress & bottom state ────────────────────────── */
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const maxScroll = el.scrollHeight - el.clientHeight;
    if (maxScroll > 0) {
      const progress = Math.min(100, Math.max(0, (el.scrollTop / maxScroll) * 100));
      setScrollProgress(progress);
      setCanScrollDown(el.scrollTop < maxScroll - 35);
    }
  };

  const handleScrollDown = () => {
    contentRef.current?.scrollBy({ top: 320, behavior: "smooth" });
  };

  /* ── Lock body scroll & stop Lenis when modal is open ────────────── */
  useEffect(() => {
    if (isOpen) {
      stop();
      const scrollY = window.scrollY;
      const originalOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      // Focus the scroll container so keyboard arrow/page keys work immediately
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

  /* ── Overlay click → close ───────────────────────────────────────── */
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
        aria-labelledby="privacy-policy-title"
        className="relative w-[94vw] sm:w-[88vw] md:w-[80vw] h-[88vh] sm:h-[84vh] md:h-[82vh] max-w-[1100px] rounded-lg overflow-hidden flex flex-col"
        style={{
          backgroundColor: "rgba(14, 12, 10, 0.95)",
          border: "1px solid rgba(214, 206, 190, 0.12)",
          boxShadow:
            "0 25px 70px rgba(0, 0, 0, 0.75), 0 0 50px rgba(200, 165, 92, 0.08)",
          animation:
            "privacyModalIn 450ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      >
        {/* Top Reading Progress Bar */}
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-white/5 z-30 overflow-hidden pointer-events-none">
          <div
            className="h-full bg-gradient-to-r from-[#C8A55C]/70 via-[#F59E0B] to-[#C8A55C] transition-all duration-100 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* ── Close button ─────────────────────────────────────────── */}
        <button
          onClick={handleClose}
          type="button"
          aria-label="Close Privacy Policy"
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
          <header className="mb-10 sm:mb-14 pr-12">
            <h2
              id="privacy-policy-title"
              className="type-ui tracking-[0.3em] uppercase text-[#FAF6F0]/95 font-medium mb-3"
              style={{ fontSize: "clamp(20px, 2.5vw, 30px)" }}
            >
              Privacy Policy
            </h2>
            <p className="type-ui text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#D6CEBE]/50">
              Last Updated — 2026
            </p>
          </header>

          {/* Policy sections */}
          <div className="space-y-10 sm:space-y-12 max-w-[760px]">
            <PolicySection number="1" title="Introduction">
              <p>
                Welcome to KashiYatra — an immersive digital experience created
                to explore the heritage, culture, places, traditions, and visual
                identity of Kashi.
              </p>
              <p>
                We respect your privacy and aim to keep the information you
                provide while using this website safe and transparent.
              </p>
            </PolicySection>

            <PolicySection number="2" title="Information We Collect">
              <p>
                KashiYatra does not require you to create an account or provide
                personal information to explore the website.
              </p>
              <p>
                If you voluntarily contact us through an email link or other
                communication channel, we may receive the information you choose
                to provide, such as your name, email address, or message.
              </p>
            </PolicySection>

            <PolicySection number="3" title="Website Usage">
              <p>
                The website may collect basic technical information necessary for
                functionality, performance, security, and improving the user
                experience.
              </p>
              <p>
                This may include information such as browser type, device type,
                approximate location, and interaction with the website, depending
                on the analytics or hosting services used by the website.
              </p>
            </PolicySection>

            <PolicySection number="4" title="Cookies and Analytics">
              <p>
                KashiYatra may use cookies or analytics technologies to
                understand how visitors interact with the website and to improve
                its performance.
              </p>
              <p>
                If analytics or third-party services are not enabled, no
                additional analytics data is intentionally collected by
                KashiYatra.
              </p>
            </PolicySection>

            <PolicySection number="5" title="External Links">
              <p>
                KashiYatra may contain links to external websites, social media
                platforms, or other third-party services.
              </p>
              <p>
                Once you leave KashiYatra, those websites operate under their own
                privacy policies and terms. We are not responsible for the
                privacy practices or content of external websites.
              </p>
            </PolicySection>

            <PolicySection number="6" title="Data Security">
              <p>
                We take reasonable measures to protect information associated
                with the website. However, no online service can guarantee
                complete security of information transmitted over the internet.
              </p>
            </PolicySection>

            <PolicySection number="7" title="Children's Privacy">
              <p>
                KashiYatra is intended for a general audience and does not
                knowingly collect personal information from children.
              </p>
            </PolicySection>

            <PolicySection number="8" title="Changes to This Policy">
              <p>
                This Privacy Policy may be updated when the website, its
                functionality, or the services used by it change. Any updated
                version will be reflected on this page.
              </p>
            </PolicySection>

            <PolicySection number="9" title="Contact">
              <p>
                For questions regarding this Privacy Policy, you can contact us
                through the contact information provided on the KashiYatra
                website.
              </p>
            </PolicySection>
          </div>

          {/* Bottom breathing room */}
          <div className="h-12 sm:h-16" />
        </div>

        {/* Bottom subtle shadow when more content can be scrolled */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[rgba(14,12,10,0.95)] to-transparent z-10 transition-opacity duration-300 ${
            canScrollDown ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Bottom floating "Scroll down" prompt */}
        {canScrollDown && (
          <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 z-20 transition-all duration-300">
            <button
              onClick={handleScrollDown}
              type="button"
              className="pointer-events-auto flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-[#C8A55C]/40 text-[#FAF6F0] text-[11px] tracking-[0.16em] uppercase hover:bg-black/95 hover:border-[#C8A55C]/80 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.6)] cursor-pointer"
              aria-label="Scroll down"
            >
              <span>Scroll down</span>
              <span className="text-[#C8A55C] text-xs animate-bounce">↓</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Individual policy section ───────────────────────────────────────── */
function PolicySection({
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
