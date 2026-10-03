import type { Metadata } from "next";
import {
  FloatingActionDock,
  KashiRasoiSection,
  KashiUnfoldedSection,
  LandingFooter,
  LandingHero,
  LandingPreloader,
  LandingProvider,
  SpiritOfKashiSection,
  StepsToEternity,
  WhereGodsResidePortal,
} from "@/features/landing";
import { SITE_METADATA } from "@/lib/constants";

/**
 * KASHI — A City Beyond Time.
 *
 * Updated with anti-slop editorial design:
 * - Architectural rounded Hero with bold amber typography and frosted glass card (Image 2)
 * - Steps to Eternity: 2-column editorial ghat plates with tactile Excursion Ticket
 * - Story of Kashi: Catalog spread with Roman numerals, detail insets & 50/50 Schedule Panel
 * - Where Gods Reside: Portal inviting visitors into the 8 sacred sanctuaries (/temples)
 * - Kashi Unfolded: 9 collectible authentic travel posters with interactive inspection
 * - Kashi Rasoi: Morning kachori & sacred alchemical flavours with sunrise Ganges vista
 * - Spirit of Kashi: Video section immediately following Kashi Rasoi
 * - Floating viewport action dock (side margin rail removed to prevent collision)
 */
export const metadata: Metadata = {
  title: { absolute: SITE_METADATA.title },
  description: SITE_METADATA.description,
  alternates: { canonical: "/kashi" },
};

export default function KashiLandingPage() {
  return (
    <LandingProvider>
      <LandingPreloader />

      <main id="main" className="min-h-screen bg-[#FAF6F0] text-slate-900">
        <LandingHero />
        <StepsToEternity />
        <WhereGodsResidePortal />
        <KashiUnfoldedSection />
        <KashiRasoiSection />
        <SpiritOfKashiSection />
        <LandingFooter />
      </main>

      {/* Kept floating buttons only per user request */}
      <FloatingActionDock />
    </LandingProvider>
  );
}
