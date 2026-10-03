"use client";

import { useEffect, useRef, useState } from "react";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";

/**
 * The Spirit of Kashi — Video Section.
 *
 * Core Requirements:
 * 1. Playback starts ONLY after 50% of the frame is visible in the viewport.
 * 2. Displays third-eye glowing poster prior to playback.
 * 3. Lock scroll during playback (from start until ~90% threshold, t >= 9.0s).
 * 4. At ~90% threshold, scroll lock releases.
 * 5. Stops and stays permanently frozen on the final full-city frame (no loop).
 * 6. Non-interactive video: pointer-events-none.
 * 7. Sacred couplet in left top corner, "शिव की नगरी" in right top corner.
 */
export function SpiritOfKashiSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isPlayingRef = useRef(false);
  const isLockedRef = useRef(false);
  const lockReleasedRef = useRef(false);
  const hasFinishedRef = useRef(false);
  const [isRevealed, setIsRevealed] = useState(false);

  let smoothScroll: ReturnType<typeof useSmoothScroll> | null = null;
  try {
    smoothScroll = useSmoothScroll();
  } catch {
    // Graceful fallback
  }

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    // Start playing only when 50% visibility threshold is achieved
    const startPlayback = () => {
      if (hasFinishedRef.current || isPlayingRef.current) return;
      isPlayingRef.current = true;
      video.muted = true;

      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            if (!lockReleasedRef.current && video.currentTime < (video.duration || 10.0) * 0.9) {
              isLockedRef.current = true;
            }
          })
          .catch(() => {
            // Autoplay blocked: wait for first interaction
            const onInteraction = () => {
              if (!hasFinishedRef.current) {
                video.muted = true;
                video.play().catch(() => { });
              }
              window.removeEventListener("click", onInteraction);
              window.removeEventListener("touchstart", onInteraction);
              window.removeEventListener("wheel", onInteraction);
            };
            window.addEventListener("click", onInteraction, { once: true });
            window.addEventListener("touchstart", onInteraction, { once: true });
            window.addEventListener("wheel", onInteraction, { once: true });
          });
      }
    };

    // Visibility check via IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // Exactly 50% visibility threshold for video playback
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && !hasFinishedRef.current) {
            startPlayback();
          }
        }
      },
      { threshold: [0.5] }
    );
    observer.observe(section);

    // Watch playback progress: reveal text and release lock at 90%, and stop permanently on final frame
    const checkTime = () => {
      const duration = video.duration || 10.0;

      // Reveal the two texts and release scroll lock at 90% threshold
      if (video.currentTime >= duration * 0.9) {
        setIsRevealed(true);
        if (!lockReleasedRef.current) {
          lockReleasedRef.current = true;
          isLockedRef.current = false;
          if (smoothScroll) {
            smoothScroll.start();
          }
        }
      }

      // Freeze on final frame right as video concludes
      if (video.currentTime >= duration - 0.08 && !hasFinishedRef.current) {
        setIsRevealed(true);
        hasFinishedRef.current = true;
        isPlayingRef.current = false;
        lockReleasedRef.current = true;
        isLockedRef.current = false;
        video.pause();
        if (smoothScroll) {
          smoothScroll.start();
        }
      }
    };
    video.addEventListener("timeupdate", checkTime);

    const handleEnded = () => {
      setIsRevealed(true);
      hasFinishedRef.current = true;
      isPlayingRef.current = false;
      lockReleasedRef.current = true;
      isLockedRef.current = false;
      video.pause();
      if (smoothScroll) {
        smoothScroll.start();
      }
    };
    video.addEventListener("ended", handleEnded);

    // Scroll trigger fallback: verify if 50% of the frame is visible
    const checkVisibilityByScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // Keep revealed if video has already played past 90% or finished
      if (video && (hasFinishedRef.current || (video.duration > 0 && video.currentTime >= video.duration * 0.9))) {
        setIsRevealed(true);
      }

      if (hasFinishedRef.current || isPlayingRef.current) return;

      // Check if at least 50% of the frame is inside the viewport
      const visibleTop = Math.max(0, rect.top);
      const visibleBottom = Math.min(viewportHeight, rect.bottom);
      const visibleHeight = Math.max(0, visibleBottom - visibleTop);
      const visibleRatio = rect.height > 0 ? visibleHeight / Math.min(rect.height, viewportHeight) : 0;

      if ((visibleRatio >= 0.5 || rect.top <= viewportHeight * 0.5) && rect.bottom >= viewportHeight * 0.2) {
        startPlayback();
      }
    };

    const handleScroll = () => {
      checkVisibilityByScroll();

      if (isLockedRef.current && isPlayingRef.current && !lockReleasedRef.current) {
        const sectionTop = section.offsetTop;
        if (window.scrollY > sectionTop + 4) {
          window.scrollTo(0, sectionTop);
        }
      }
    };

    const handleWheel = (e: WheelEvent) => {
      checkVisibilityByScroll();

      if (isLockedRef.current && isPlayingRef.current && !lockReleasedRef.current) {
        if (e.deltaY > 0 && window.scrollY >= section.offsetTop - 10) {
          e.preventDefault();
        }
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (isLockedRef.current && isPlayingRef.current && !lockReleasedRef.current) {
        const deltaY = touchStartY - e.touches[0].clientY;
        if (deltaY > 0 && window.scrollY >= section.offsetTop - 10) {
          e.preventDefault();
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isLockedRef.current && isPlayingRef.current && !lockReleasedRef.current) {
        if (
          ["ArrowDown", "PageDown", "Space"].includes(e.code) &&
          window.scrollY >= section.offsetTop - 10
        ) {
          e.preventDefault();
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("keydown", handleKeyDown, { passive: false });

    // Initial check in case user lands directly at or past this section
    checkVisibilityByScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("keydown", handleKeyDown);
      video.removeEventListener("timeupdate", checkTime);
      video.removeEventListener("ended", handleEnded);
    };
  }, [smoothScroll]);

  return (
    <section
      ref={sectionRef}
      id="spirit-of-kashi-video"
      aria-label="The Spirit of Kashi"
      className="relative w-full bg-black flex flex-col items-center justify-start overflow-hidden select-none"
    >
      {/* Video viewport: fits within screen height with object-contain, showing the full city at top and natural bottom space */}
      <div className="relative w-full h-screen max-h-screen flex items-center justify-center bg-black overflow-hidden pointer-events-none">
        <video
          ref={videoRef}
          src="/videos/spirit-of-kashi.mp4"
          poster="/images/landing/spirit-of-kashi-poster.jpg"
          muted
          playsInline
          preload="auto"
          className="w-full h-full max-h-screen object-contain block border-0 p-0 m-0 pointer-events-none select-none"
        />

        {/* First: Sacred Divine Couplet in Top-Left Corner — Plain Text */}
        <div
          className={`absolute top-6 left-6 sm:top-8 sm:left-8 md:top-10 md:left-12 lg:top-12 lg:left-14 z-20 pointer-events-none select-none transition-opacity duration-1000 ease-out ${isRevealed ? "opacity-100" : "opacity-0"
            }`}
        >
          <p
            className="font-['Noto_Serif_Devanagari',serif] font-light text-[#d8b4fe] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed tracking-wider text-left"
            style={{ fontFamily: "'Noto Serif Devanagari', 'Rozha One', serif" }}
          >
            ॥ जहाँ कण-कण में शिव का वास है,<br />
            और हर घाट पर महादेव का अहसास है ॥
          </p>
        </div>

        {/* Second: Shiv Ki Nagari in Top-Right Corner — Plain Text (Enlarged Size) */}
        <div
          className={`absolute top-6 right-6 sm:top-8 sm:right-8 md:top-10 md:right-12 lg:top-12 lg:right-14 z-20 pointer-events-none select-none transition-opacity duration-1000 ease-out ${isRevealed ? "opacity-100" : "opacity-0"
            }`}
        >
          <h2
            className="font-['Noto_Serif_Devanagari',serif] font-normal text-[#c084fc] text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl tracking-widest text-right"
            style={{ fontFamily: "'Noto Serif Devanagari', 'Rozha One', serif" }}
          >
            शिव की नगरी
          </h2>
        </div>
      </div>

      {/* Space at end of video matching the reference image — reduced to half */}
      <div className="relative w-full h-[12vh] bg-black pointer-events-none" />
    </section>
  );
}
