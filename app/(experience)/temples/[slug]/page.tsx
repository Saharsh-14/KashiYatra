import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { temples } from "@/data/temples";
import { TempleDetailView } from "@/features/temples/components/TempleDetailView";

interface TemplePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return temples.map((temple) => ({
    slug: temple.slug,
  }));
}

export async function generateMetadata({
  params,
}: TemplePageProps): Promise<Metadata> {
  const { slug } = await params;
  const temple = temples.find((t) => t.slug === slug);
  if (!temple) return { title: "Sanctuary Not Found" };

  return {
    title: `${temple.name} — Temples of Kashi`,
    description: temple.description,
    alternates: { canonical: `/temples/${temple.slug}` },
  };
}

export default async function TempleDetailPage({ params }: TemplePageProps) {
  const { slug } = await params;
  const temple = temples.find((t) => t.slug === slug);
  if (!temple) notFound();

  return <TempleDetailView temple={temple} />;
}
