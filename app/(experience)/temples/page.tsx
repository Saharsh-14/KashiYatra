import type { Metadata } from "next";
import { WhereGodsResideExperience } from "@/features/temples";

export const metadata: Metadata = {
  title: "Where Gods Reside — The Eight Sacred Temples",
  description:
    "A city where the sacred is not confined to a single temple. Journey through the eight sanctuaries of Kashi in cinematic vertical rhythm.",
  alternates: { canonical: "/temples" },
};

/**
 * Dedicated Page: Where Gods Reside (/temples).
 *
 * Implements the full editorial, alternating temple chapter experience.
 */
export default function TemplesPage() {
  return <WhereGodsResideExperience />;
}
