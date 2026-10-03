import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ghats } from "@/data/ghats";
import { GhatExperience } from "@/features/ghats";

interface GhatPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return ghats.map((ghat) => ({
    slug: ghat.slug,
  }));
}

export async function generateMetadata({ params }: GhatPageProps): Promise<Metadata> {
  const { slug } = await params;
  const ghat = ghats.find((g) => g.slug === slug);
  if (!ghat) return { title: "Ghat Not Found" };

  return {
    title: `${ghat.name} — Steps to Eternity`,
    description: ghat.description,
    alternates: { canonical: `/ghats/${ghat.slug}` },
  };
}

export default async function GhatDetailPage({ params }: GhatPageProps) {
  const { slug } = await params;
  const ghat = ghats.find((g) => g.slug === slug);
  if (!ghat) notFound();

  return <GhatExperience ghat={ghat} />;
}
