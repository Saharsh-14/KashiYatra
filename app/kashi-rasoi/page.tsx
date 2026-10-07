import type { Metadata } from "next";
import { RasoiGallery } from "@/components/kashi-rasoi";

export const metadata: Metadata = {
  title: "Kashi Rasoi — The Living Culinary Exhibition",
  description:
    "An immersive 3D digital exhibition of Kashi's sacred culinary heritage across nine eternal chapters. From pre-dawn Kachori Sabzi to midnight Banarasi Paan.",
  alternates: { canonical: "/kashi-rasoi" },
};

/**
 * Dedicated Page: Kashi Rasoi (/kashi-rasoi)
 *
 * Cinematic 3D spatial gallery showcasing the 9 food chapters of Varanasi.
 */
export default function KashiRasoiPage() {
  return <RasoiGallery />;
}
