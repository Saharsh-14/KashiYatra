"use client";

import React from "react";
import { RasoiScene } from "./RasoiScene";

interface RasoiGalleryProps {
  initialFoodSlug?: string;
}

export function RasoiGallery({ initialFoodSlug }: RasoiGalleryProps) {
  return <RasoiScene initialFoodSlug={initialFoodSlug} />;
}
