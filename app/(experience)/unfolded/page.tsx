import type { Metadata } from "next";
import { KashiUnfoldedExperience } from "@/features/unfolded";

export const metadata: Metadata = {
  title: "Kashi Unfolded — The Nine Archival Lithographs",
  description:
    "The city as a series of authentic printed travel lithographs. Stone geometry, evening river fires, Buddhist stupas, and ancient fortresses preserved across nine collectible artworks.",
  alternates: { canonical: "/unfolded" },
};

/**
 * Dedicated Page: Kashi Unfolded (/unfolded).
 *
 * Reached exclusively via the ceremonial pass artifact on the landing page.
 */
export default function KashiUnfoldedPage() {
  return <KashiUnfoldedExperience />;
}
