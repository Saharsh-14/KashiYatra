import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { KASHI_RASOI_FOODS, getKashiRasoiFood } from "@/data/kashi-rasoi";
import { RasoiGallery } from "@/components/kashi-rasoi";

interface FoodDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return KASHI_RASOI_FOODS.map((food) => ({
    id: food.slug,
  }));
}

export async function generateMetadata({
  params,
}: FoodDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const food = getKashiRasoiFood(id);
  if (!food) return { title: "Chapter Not Found — Kashi Rasoi" };

  return {
    title: `${food.number} ${food.name} — Kashi Rasoi`,
    description: food.shortDescription,
    alternates: { canonical: `/kashi-rasoi/${food.slug}` },
  };
}

export default async function FoodDetailPage({ params }: FoodDetailPageProps) {
  const { id } = await params;
  const food = getKashiRasoiFood(id);
  if (!food) notFound();

  return <RasoiGallery initialFoodSlug={food.slug} />;
}
