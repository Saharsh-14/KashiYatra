import type { Metadata } from "next";
import { WhereGodsResideExperience } from "@/features/temples";

export const metadata: Metadata = {
  title: "Where Gods Reside — The Eight Sacred Temples",
  description:
    "A city where the sacred is not confined to a single temple. Journey through the eight sanctuaries of Kashi in cinematic vertical rhythm.",
  alternates: { canonical: "/where-gods-reside" },
};

/**
 * Dedicated Page: Where Gods Reside (/where-gods-reside).
 *
 * Alternate canonical route for Where Gods Reside.
 */
export default function WhereGodsResideRoutePage() {
  return <WhereGodsResideExperience />;
}
