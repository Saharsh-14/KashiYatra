"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { cn } from "@/lib/utils";

export interface SafeImageProps extends Omit<ImageProps, "onError"> {
  /**
   * Shown in place of the image if it fails. Defaults to a neutral statement
   * rather than an empty frame, so the visitor is told what happened instead of
   * being left to guess whether the page is broken.
   */
  fallbackLabel?: string;
}

/**
 * An image that degrades instead of disappearing (task.md TASK 18.3).
 *
 * A photograph that fails to load must not take the composition with it. The
 * fallback keeps the frame's dimensions, keeps the alt text available to
 * assistive technology, and states plainly that the image is unavailable — so
 * the page stays usable and honest rather than showing a torn edge or nothing
 * at all (rules.md §47).
 *
 * This is a client island: it wraps only the image, never the section around it,
 * so the rest of the page stays server-rendered (architecture.md §43).
 */
export function SafeImage({
  fallbackLabel = "Image unavailable",
  className,
  alt,
  fill,
  ...props
}: SafeImageProps) {
  const [hasFailed, setHasFailed] = useState(false);

  if (hasFailed) {
    return (
      <span
        role="img"
        aria-label={alt}
        className={cn(
          "flex items-center justify-center bg-surface",
          /* `fill` images are positioned by next/image; the fallback has to
             reproduce that itself or it collapses to nothing inside the frame. */
          fill && "absolute inset-0",
          className,
        )}
      >
        <span className="type-label type-tone-muted px-4 text-center">
          {fallbackLabel}
        </span>
      </span>
    );
  }

  return (
    <Image
      {...props}
      fill={fill}
      alt={alt}
      className={className}
      onError={() => setHasFailed(true)}
    />
  );
}
