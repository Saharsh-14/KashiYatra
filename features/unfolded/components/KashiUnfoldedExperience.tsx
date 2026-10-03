"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";
import { posters } from "@/data/posters";
import type { Poster } from "@/types/content";
import { UnfoldedDetailModal } from "./UnfoldedDetailModal";

/**
 * Kashi Unfolded — Fully Responsive Multi-Device Experience (/unfolded).
 *
 * Current state: Row 1 fitted with Shaam-e-Banaras (1), Sarnath (2), and Ramnagar Fort (3).
 * Rows 2 and 3 remain clean and empty.
 */
export function KashiUnfoldedExperience() {
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null);

  const getPosterCardImage = (poster: Poster) => {
    if (poster.id === "shaam-e-banaras") return "/images/posters/shaam-e-banaras-card.jpg";
    if (poster.id === "sarnath") return "/images/posters/sarnath-card.jpg";
    if (poster.id === "ramnagar") return "/images/posters/ramnagar-card.jpg";
    if (poster.id === "godowlia") return "/images/posters/godowlia-card.jpg";
    if (poster.id === "devdari") return "/images/posters/devdari-card.jpg";
    if (poster.id === "bhu") return "/images/posters/bhu-card.jpg";
    if (poster.id === "swarved") return "/images/posters/swarved-card.jpg";
    if (poster.id === "man-mandir") return "/images/posters/man-mandir-card.jpg";
    if (poster.id === "bharat-mata") return "/images/posters/bharat-mata-card.jpg";
    return poster.image;
  };

  return (
    <div className="w-full min-h-screen min-h-[100dvh] bg-[#E5D7C2] text-[#2C1810] selection:bg-[#8B2515]/20 selection:text-[#2C1810] overflow-x-hidden">
      {/* =======================================================================
          TIER 1: DESKTOP & LAPTOP SCREENS (>= 1024px)
          Fixed 16:9 Full HD wide composition centered with zero cropping
          ======================================================================= */}
      <div className="hidden lg:flex relative w-full h-screen h-[100dvh] overflow-hidden items-center justify-center bg-[#E5D7C2] select-none">
        {/* Proportional 16:9 Artboard Container */}
        <div
          className="relative"
          style={{
            width: "min(100vw, calc(100dvh * 16 / 9))",
            height: "min(100dvh, calc(100vw * 9 / 16))",
            aspectRatio: "16 / 9",
          }}
        >
          {/* Master 16:9 Artwork Image (100% visible, sharp, proportional) */}
          <Image
            src="/images/landing/kashi-unfolded-board-bg.jpg"
            alt="Kashi Unfolded Archival Canvas Board"
            fill
            priority
            quality={100}
            unoptimized
            sizes="100vw"
            className="object-contain object-center select-none pointer-events-none"
          />

          {/* Interactive '< BACK TO KASHI' Button positioned over printed button */}
          <Link
            href="/kashi#unfolded"
            className="group absolute z-30 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] drop-shadow-sm hover:drop-shadow cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#8B2515]/50"
            style={{
              top: "1.9%",
              right: "2.1%",
              width: "11.2%",
              aspectRatio: "981 / 219",
            }}
            aria-label="Back to Kashi"
            title="Back to Kashi"
          >
            <Image
              src="/images/landing/back-to-kashi-button.png"
              alt="Back to Kashi"
              fill
              priority
              quality={100}
              unoptimized
              sizes="(min-width: 1024px) 15vw, 150px"
              className="object-contain select-none"
            />
          </Link>

          {/* 
            Box 1 (Row 1, Col 1): Shaam-e-Banaras
            Positioned at exact pixel-calibrated coordinates of Box 1 (x: 126..384, y: 135..264).
          */}
          <div
            className="group absolute z-20 cursor-pointer overflow-hidden transition-all duration-200 hover:scale-[1.01] hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-[#8B2515]/40"
            style={{
              left: "12.305%",
              top: "23.438%",
              width: "25.195%",
              height: "22.396%",
            }}
            onClick={() => setSelectedPoster(posters[0])}
            role="button"
            tabIndex={0}
            aria-label="Shaam-e-Banaras — Where the Ganga glows after dusk"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedPoster(posters[0]);
              }
            }}
          >
            <Image
              src="/images/posters/shaam-e-banaras-card.jpg"
              alt="Shaam-e-Banaras — Where the Ganga glows after dusk"
              fill
              priority
              quality={100}
              unoptimized
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-fill object-center select-none"
            />
          </div>

          {/* 
            Box 2 (Row 1, Col 2): Sarnath
            Positioned at exact pixel-calibrated coordinates of Box 2 (x: 390..640, y: 135..264).
          */}
          <div
            className="group absolute z-20 cursor-pointer overflow-hidden transition-all duration-200 hover:scale-[1.01] hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-[#8B2515]/40"
            style={{
              left: "38.086%",
              top: "23.438%",
              width: "24.414%",
              height: "22.396%",
            }}
            onClick={() => setSelectedPoster(posters[1])}
            role="button"
            tabIndex={0}
            aria-label="Sarnath — Wisdom found its voice"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedPoster(posters[1]);
              }
            }}
          >
            <Image
              src="/images/posters/sarnath-card.jpg"
              alt="Sarnath — Wisdom found its voice"
              fill
              priority
              quality={100}
              unoptimized
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-fill object-center select-none"
            />
          </div>

          {/* 
            Box 3 (Row 1, Col 3): Ramnagar Fort
            Positioned at exact pixel-calibrated coordinates of Box 3 (x: 646..899, y: 135..264).
          */}
          <div
            className="group absolute z-20 cursor-pointer overflow-hidden transition-all duration-200 hover:scale-[1.01] hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-[#8B2515]/40"
            style={{
              left: "63.086%",
              top: "23.438%",
              width: "24.707%",
              height: "22.396%",
            }}
            onClick={() => setSelectedPoster(posters[2])}
            role="button"
            tabIndex={0}
            aria-label="Ramnagar Fort — History meets its legacy"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedPoster(posters[2]);
              }
            }}
          >
            <Image
              src="/images/posters/ramnagar-card.jpg"
              alt="Ramnagar Fort — History meets its legacy"
              fill
              priority
              quality={100}
              unoptimized
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-fill object-center select-none"
            />
          </div>

          {/* 
            Box 4 (Row 2, Col 1): Godowlia Market
            Positioned at exact pixel-calibrated coordinates of Box 4 (x: 126..384, y: 269..399).
          */}
          <div
            className="group absolute z-20 cursor-pointer overflow-hidden transition-all duration-200 hover:scale-[1.01] hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-[#8B2515]/40"
            style={{
              left: "12.305%",
              top: "46.701%",
              width: "25.195%",
              height: "22.569%",
            }}
            onClick={() => setSelectedPoster(posters[3])}
            role="button"
            tabIndex={0}
            aria-label="Godowlia Market — A living pulse of Kashi"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedPoster(posters[3]);
              }
            }}
          >
            <Image
              src="/images/posters/godowlia-card.jpg"
              alt="Godowlia Market — A living pulse of Kashi"
              fill
              priority
              quality={100}
              unoptimized
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-fill object-center select-none"
            />
          </div>

          {/* 
            Box 5 (Row 2, Col 2): Devdari Falls
            Positioned at exact pixel-calibrated coordinates of Box 5 (x: 390..640, y: 269..399).
          */}
          <div
            className="group absolute z-20 cursor-pointer overflow-hidden transition-all duration-200 hover:scale-[1.01] hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-[#8B2515]/40"
            style={{
              left: "38.086%",
              top: "46.701%",
              width: "24.414%",
              height: "22.569%",
            }}
            onClick={() => setSelectedPoster(posters[4])}
            role="button"
            tabIndex={0}
            aria-label="Devdari Falls — Nature's quiet escape"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedPoster(posters[4]);
              }
            }}
          >
            <Image
              src="/images/posters/devdari-card.jpg"
              alt="Devdari Falls — Nature's quiet escape"
              fill
              priority
              quality={100}
              unoptimized
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-fill object-center select-none"
            />
          </div>

          {/* 
            Box 6 (Row 2, Col 3): BHU
            Positioned at exact pixel-calibrated coordinates of Box 6 (x: 646..899, y: 269..399).
          */}
          <div
            className="group absolute z-20 cursor-pointer overflow-hidden transition-all duration-200 hover:scale-[1.01] hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-[#8B2515]/40"
            style={{
              left: "63.086%",
              top: "46.701%",
              width: "24.707%",
              height: "22.569%",
            }}
            onClick={() => setSelectedPoster(posters[5])}
            role="button"
            tabIndex={0}
            aria-label="BHU — Knowledge lives here"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedPoster(posters[5]);
              }
            }}
          >
            <Image
              src="/images/posters/bhu-card.jpg"
              alt="BHU — Knowledge lives here"
              fill
              priority
              quality={100}
              unoptimized
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-fill object-center select-none"
            />
          </div>

          {/* 
            Box 7 (Row 3, Col 1): Swarved Mahamandir
            Positioned at exact pixel-calibrated coordinates of Box 7 (x: 126..384, y: 404..533).
          */}
          <div
            className="group absolute z-20 cursor-pointer overflow-hidden transition-all duration-200 hover:scale-[1.01] hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-[#8B2515]/40"
            style={{
              left: "12.305%",
              top: "70.139%",
              width: "25.195%",
              height: "22.396%",
            }}
            onClick={() => setSelectedPoster(posters[6])}
            role="button"
            tabIndex={0}
            aria-label="Swarved Mahamandir — A modern beacon of Sanatan thought"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedPoster(posters[6]);
              }
            }}
          >
            <Image
              src="/images/posters/swarved-card.jpg"
              alt="Swarved Mahamandir — A modern beacon of Sanatan thought"
              fill
              priority
              quality={100}
              unoptimized
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-fill object-center select-none"
            />
          </div>

          {/* 
            Box 8 (Row 3, Col 2): Man Mandir Observatory
            Positioned at exact pixel-calibrated coordinates of Box 8 (x: 390..640, y: 404..533).
          */}
          <div
            className="group absolute z-20 cursor-pointer overflow-hidden transition-all duration-200 hover:scale-[1.01] hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-[#8B2515]/40"
            style={{
              left: "38.086%",
              top: "70.139%",
              width: "24.414%",
              height: "22.396%",
            }}
            onClick={() => setSelectedPoster(posters[7])}
            role="button"
            tabIndex={0}
            aria-label="Man Mandir Observatory — Where the skies met wisdom"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedPoster(posters[7]);
              }
            }}
          >
            <Image
              src="/images/posters/man-mandir-card.jpg"
              alt="Man Mandir Observatory — Where the skies met wisdom"
              fill
              priority
              quality={100}
              unoptimized
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-fill object-center select-none"
            />
          </div>

          {/* 
            Box 9 (Row 3, Col 3): Bharat Mata Temple
            Positioned at exact pixel-calibrated coordinates of Box 9 (x: 646..899, y: 404..533).
          */}
          <div
            className="group absolute z-20 cursor-pointer overflow-hidden transition-all duration-200 hover:scale-[1.01] hover:shadow-lg focus:outline-none focus:ring-1 focus:ring-[#8B2515]/40"
            style={{
              left: "63.086%",
              top: "70.139%",
              width: "24.707%",
              height: "22.396%",
            }}
            onClick={() => setSelectedPoster(posters[8])}
            role="button"
            tabIndex={0}
            aria-label="Bharat Mata Temple — A Nation in One Mother"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedPoster(posters[8]);
              }
            }}
          >
            <Image
              src="/images/posters/bharat-mata-card.jpg"
              alt="Bharat Mata Temple — A Nation in One Mother"
              fill
              priority
              quality={100}
              unoptimized
              sizes="(min-width: 1024px) 25vw, 100vw"
              className="object-fill object-center select-none"
            />
          </div>
        </div>
      </div>

      {/* =======================================================================
          TIER 2 & 3: TABLET & MOBILE VIEW (< 1024px)
          Native responsive layout with centered title & complete 9 lithograph cards
          ======================================================================= */}
      <div className="block lg:hidden min-h-screen min-h-[100dvh] w-full bg-[#E5D7C2] text-[#2C1810]">
        {/* Top Header Navigation */}
        <header className="sticky top-0 z-40 w-full border-b border-[#523A28]/15 bg-[#E5D7C2]/95 backdrop-blur-md px-4 py-3 sm:px-6 sm:py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#523A28]">
              Kashi Unfolded
            </span>
            <span className="text-[#523A28]/40 hidden sm:inline">•</span>
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#8B2515] hidden sm:inline">
              Varanasi, India
            </span>
          </div>

          <Link
            href="/kashi#unfolded"
            className="group relative h-7 sm:h-8 w-auto aspect-[981/219] transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none drop-shadow-sm"
            aria-label="Back to Kashi"
            title="Back to Kashi"
          >
            <Image
              src="/images/landing/back-to-kashi-button.png"
              alt="Back to Kashi"
              fill
              priority
              quality={100}
              unoptimized
              sizes="140px"
              className="object-contain select-none"
            />
          </Link>
        </header>

        {/* Vintage Header Title */}
        <div className="relative px-4 pt-8 pb-6 sm:px-8 sm:pt-12 sm:pb-8 text-center max-w-3xl mx-auto">
          <span className="inline-block font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#8B2515] mb-2 font-medium">
            Archival Folio • Nine Collectible Lithographs
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl font-black tracking-tight text-[#8B2515] uppercase [font-stretch:condensed] [letter-spacing:0.04em] drop-shadow-sm">
            Kashi Unfolded
          </h1>

          <p className="mt-3 text-xs sm:text-sm font-editorial italic text-[#523A28]/85 leading-relaxed max-w-xl mx-auto">
            “The city as a series of authentic printed travel lithographs. Stone geometry, evening river fires, Buddhist stupas, and ancient fortresses preserved across nine collectible artworks.”
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 text-[10px] sm:text-xs font-mono tracking-widest text-[#523A28]/70 uppercase">
            <span>Immortal Varanasi</span>
            <span>•</span>
            <span>09 Folios</span>
          </div>
        </div>

        {/* 9 Lithograph Frames for Mobile & Tablet */}
        <main className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Box 1: Shaam-e-Banaras */}
            <div
              onClick={() => setSelectedPoster(posters[0])}
              className="relative aspect-[1014/512] w-full rounded-[2px] overflow-hidden shadow-sm hover:shadow-md cursor-pointer transition-transform duration-200 hover:scale-[1.01]"
            >
              <Image
                src="/images/posters/shaam-e-banaras-card.jpg"
                alt="Shaam-e-Banaras — Where the Ganga glows after dusk"
                fill
                priority
                quality={100}
                unoptimized
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                className="object-cover object-center select-none"
              />
            </div>

            {/* Box 2: Sarnath */}
            <div
              onClick={() => setSelectedPoster(posters[1])}
              className="relative aspect-[1014/512] w-full rounded-[2px] overflow-hidden shadow-sm hover:shadow-md cursor-pointer transition-transform duration-200 hover:scale-[1.01]"
            >
              <Image
                src="/images/posters/sarnath-card.jpg"
                alt="Sarnath — Wisdom found its voice"
                fill
                priority
                quality={100}
                unoptimized
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                className="object-cover object-center select-none"
              />
            </div>

            {/* Box 3: Ramnagar Fort */}
            <div
              onClick={() => setSelectedPoster(posters[2])}
              className="relative aspect-[1014/512] w-full rounded-[2px] overflow-hidden shadow-sm hover:shadow-md cursor-pointer transition-transform duration-200 hover:scale-[1.01]"
            >
              <Image
                src="/images/posters/ramnagar-card.jpg"
                alt="Ramnagar Fort — History meets its legacy"
                fill
                priority
                quality={100}
                unoptimized
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                className="object-cover object-center select-none"
              />
            </div>

            {/* Box 4: Godowlia Market */}
            <div
              onClick={() => setSelectedPoster(posters[3])}
              className="relative aspect-[1014/512] w-full rounded-[2px] overflow-hidden shadow-sm hover:shadow-md cursor-pointer transition-transform duration-200 hover:scale-[1.01]"
            >
              <Image
                src="/images/posters/godowlia-card.jpg"
                alt="Godowlia Market — A living pulse of Kashi"
                fill
                priority
                quality={100}
                unoptimized
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                className="object-cover object-center select-none"
              />
            </div>

            {/* Box 5: Devdari Falls */}
            <div
              onClick={() => setSelectedPoster(posters[4])}
              className="relative aspect-[1014/512] w-full rounded-[2px] overflow-hidden shadow-sm hover:shadow-md cursor-pointer transition-transform duration-200 hover:scale-[1.01]"
            >
              <Image
                src="/images/posters/devdari-card.jpg"
                alt="Devdari Falls — Nature's quiet escape"
                fill
                priority
                quality={100}
                unoptimized
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                className="object-cover object-center select-none"
              />
            </div>

            {/* Box 6: BHU */}
            <div
              onClick={() => setSelectedPoster(posters[5])}
              className="relative aspect-[1014/512] w-full rounded-[2px] overflow-hidden shadow-sm hover:shadow-md cursor-pointer transition-transform duration-200 hover:scale-[1.01]"
            >
              <Image
                src="/images/posters/bhu-card.jpg"
                alt="BHU — Knowledge lives here"
                fill
                priority
                quality={100}
                unoptimized
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                className="object-cover object-center select-none"
              />
            </div>

            {/* Box 7: Swarved Mahamandir */}
            <div
              onClick={() => setSelectedPoster(posters[6])}
              className="relative aspect-[1014/512] w-full rounded-[2px] overflow-hidden shadow-sm hover:shadow-md cursor-pointer transition-transform duration-200 hover:scale-[1.01]"
            >
              <Image
                src="/images/posters/swarved-card.jpg"
                alt="Swarved Mahamandir — A modern beacon of Sanatan thought"
                fill
                priority
                quality={100}
                unoptimized
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                className="object-cover object-center select-none"
              />
            </div>

            {/* Box 8: Man Mandir Observatory */}
            <div
              onClick={() => setSelectedPoster(posters[7])}
              className="relative aspect-[1014/512] w-full rounded-[2px] overflow-hidden shadow-sm hover:shadow-md cursor-pointer transition-transform duration-200 hover:scale-[1.01]"
            >
              <Image
                src="/images/posters/man-mandir-card.jpg"
                alt="Man Mandir Observatory — Where the skies met wisdom"
                fill
                priority
                quality={100}
                unoptimized
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                className="object-cover object-center select-none"
              />
            </div>

            {/* Box 9: Bharat Mata Temple */}
            <div
              onClick={() => setSelectedPoster(posters[8])}
              className="relative aspect-[1014/512] w-full rounded-[2px] overflow-hidden shadow-sm hover:shadow-md cursor-pointer transition-transform duration-200 hover:scale-[1.01]"
            >
              <Image
                src="/images/posters/bharat-mata-card.jpg"
                alt="Bharat Mata Temple — A Nation in One Mother"
                fill
                priority
                quality={100}
                unoptimized
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                className="object-cover object-center select-none"
              />
            </div>
          </div>

          {/* Footer Bookmark */}
          <div className="mt-16 text-center border-t border-[#523A28]/15 pt-8">
            <p className="font-mono text-[10px] uppercase tracking-widest text-[#523A28]/70">
              End of Unfolded Folio • 09 Impressions Preserved
            </p>
            <div className="mt-5 flex justify-center">
              <Link
                href="/kashi#unfolded"
                className="group relative h-9 sm:h-10 w-auto aspect-[981/219] transition-transform duration-200 hover:scale-105 active:scale-95 focus:outline-none drop-shadow-sm"
                aria-label="Back to Kashi"
                title="Back to Kashi"
              >
                <Image
                  src="/images/landing/back-to-kashi-button.png"
                  alt="Back to Kashi"
                  fill
                  quality={100}
                  unoptimized
                  sizes="160px"
                  className="object-contain select-none"
                />
              </Link>
            </div>
          </div>
        </main>
      </div>

      {/* Large Vintage Editorial Detail Experience Overlay (~80% Viewport) */}
      <UnfoldedDetailModal
        poster={selectedPoster}
        onClose={() => setSelectedPoster(null)}
      />
    </div>
  );
}
