"use client";

import { useEffect, useRef, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { DeviceType } from "@/types/analytics";

function AnalyticsTrackerInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastRecordedRef = useRef<string | null>(null);

  useEffect(() => {
    // Never track the private dashboard or internal API paths
    if (!pathname || pathname.startsWith("/saharsh") || pathname.startsWith("/api")) {
      return;
    }

    const fullUrl = `${pathname}${searchParams?.toString() ? `?${searchParams.toString()}` : ""}`;

    // Prevent immediate duplicate fires for the exact same path in React Strict Mode
    if (lastRecordedRef.current === fullUrl) {
      return;
    }
    lastRecordedRef.current = fullUrl;

    try {
      const touch =
        typeof window !== "undefined" &&
        ("ontouchstart" in window || navigator.maxTouchPoints > 0);

      const sw = typeof window !== "undefined" ? window.screen.width : 1024;
      const sh = typeof window !== "undefined" ? window.screen.height : 768;
      const innerW = typeof window !== "undefined" ? window.innerWidth : 1024;

      let deviceHint: DeviceType = "desktop";
      const minDimension = Math.min(sw, innerW);

      if (touch && minDimension < 768) {
        deviceHint = "mobile";
      } else if (touch && minDimension >= 768 && minDimension <= 1024) {
        deviceHint = "tablet";
      } else if (!touch && sw <= 1536) {
        deviceHint = "laptop";
      } else {
        deviceHint = "desktop";
      }

      const payload = {
        path: pathname,
        referrer: typeof document !== "undefined" ? document.referrer : "",
        screen: {
          width: sw,
          height: sh,
          touch,
        },
        deviceHint,
      };

      // Non-blocking beacon request
      if (typeof navigator !== "undefined" && navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], {
          type: "application/json",
        });
        const sent = navigator.sendBeacon("/api/analytics/track", blob);
        if (!sent) {
          fetch("/api/analytics/track", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
            keepalive: true,
          }).catch(() => {});
        }
      } else {
        fetch("/api/analytics/track", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
          keepalive: true,
        }).catch(() => {});
      }
    } catch {
      // Quiet fail-safe: Analytics tracking must never interrupt user browsing
    }
  }, [pathname, searchParams]);

  return null;
}

export function AnalyticsTracker() {
  return (
    <Suspense fallback={null}>
      <AnalyticsTrackerInner />
    </Suspense>
  );
}
