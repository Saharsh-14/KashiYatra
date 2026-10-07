"use client";

import React from "react";
import Image from "next/image";
import { KashiRasoiFood } from "@/data/kashi-rasoi";

interface WebPagePanelProps {
  food: KashiRasoiFood;
  isCenter: boolean;
  onClick: () => void;
  style?: React.CSSProperties;
}

export function WebPagePanel({
  food,
  isCenter,
  onClick,
  style,
}: WebPagePanelProps) {
  const isKachoriSection = food.id === "kachori-sabzi";
  const isTamatarSection = food.id === "tamatar-chaat";
  const isSweetsSection = food.id === "banarasi-sweets";
  const isGolgappeSection = food.id === "golgappe";
  const isPaanSection = food.id === "banarasi-paan";
  const isMalaiyoSection = food.id === "malaiyo";
  const isChaiSection = food.id === "chai-toast";
  const isLassiSection = food.id === "banarasi-lassi";

  // =========================================================================
  // 1. KACHORI SABJI SECTION — CUSTOM CODED MASTER REFERENCE REPRODUCTION
  // =========================================================================
  if (isKachoriSection) {
    return (
      <div
        onClick={onClick}
        style={style}
        role="button"
        tabIndex={0}
        aria-label="Kachori Sabji"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
        className={`group relative w-[78vw] max-w-[1180px] min-w-[340px] h-[66vh] min-h-[480px] max-h-[680px] rounded-2xl md:rounded-3xl select-none cursor-pointer overflow-hidden transition-all duration-500 bg-[#0c0b0a] border shadow-[0_35px_100px_rgba(0,0,0,0.95)] ${
          isCenter
            ? "border-white/30 ring-1 ring-[#e5a952]/30"
            : "border-white/10 hover:border-white/20 opacity-80 hover:opacity-100"
        }`}
      >
        {/* Background Photo — Clean photographic master asset */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/kashi-rasoi/food/kachori-sabzi/background.jpg"
            alt="Banarasi Kachori Sabji"
            fill
            priority={isCenter}
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        </div>

        {/* Master Reference Typography — Hand-coded HTML/CSS matching the master reference */}
        {/* Top-Right: Editorial Title & Subtitle */}
        <div className="absolute z-10 top-6 sm:top-8 md:top-10 lg:top-11 right-6 sm:right-8 md:right-10 lg:right-12 text-right pointer-events-none max-w-[280px] sm:max-w-[320px] md:max-w-[360px]">
          <h1 className="font-master-title font-bold tracking-[0.02em] leading-[0.88] uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
            <div className="text-[#e5a952] text-4xl sm:text-5xl md:text-[54px] lg:text-[62px]">
              KACHORI
            </div>
            <div className="text-[#e5a952] text-4xl sm:text-5xl md:text-[54px] lg:text-[62px] mt-0.5 sm:mt-1">
              SABJI
            </div>
          </h1>

          <p className="font-master-body text-[12px] sm:text-[13.5px] md:text-[15px] lg:text-[16px] text-[#f8f3ea] font-normal leading-[1.3] mt-2 sm:mt-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            The breakfast that gets<br />
            Banaras moving before<br />
            the city wakes up.
          </p>
        </div>

        {/* Left Column: Price & Famous Spots Directory */}
        <div className="absolute z-10 top-[36%] sm:top-[37%] md:top-[38%] left-6 sm:left-8 md:left-10 lg:left-12 pointer-events-none max-w-[220px] sm:max-w-[250px]">
          {/* Price */}
          <div className="drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            <div className="font-master-title text-2xl sm:text-3xl md:text-[34px] font-bold text-[#e5a952] leading-none">
              ₹30 – ₹70
            </div>
            <span className="font-master-body text-xs sm:text-[13px] md:text-[14px] text-[#d6cabc] block mt-0.5 sm:mt-1">
              approx.
            </span>
          </div>

          {/* Famous Spots */}
          <div className="mt-4 sm:mt-5 md:mt-6 space-y-2 sm:space-y-2.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            <div>
              <span className="font-master-title text-[9.5px] sm:text-[10.5px] md:text-[11.5px] tracking-[0.18em] text-[#e5a952] uppercase font-bold">
                FAMOUS SPOTS
              </span>
            </div>

            <div className="font-master-body text-[11px] sm:text-[12px] md:text-[13.5px] text-[#f8f3ea] leading-[1.28] space-y-1.5 sm:space-y-2">
              <div>
                <div className="font-medium text-white">The Ram Bhandar,</div>
                <div className="font-normal text-white">Thatheri Bazar</div>
              </div>

              <div className="w-8 sm:w-10 h-px bg-white/20" />

              <div>
                <div className="font-medium text-white">Neelu Kachori Bhandar,</div>
                <div className="font-normal text-white">Kachaudi Gali</div>
              </div>

              <div className="w-8 sm:w-10 h-px bg-white/20" />

              <div>
                <div className="font-medium text-white">Prasidhh Chachi Ki Dukaan,</div>
                <div className="font-normal text-white">Lanka</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 2. TAMATAR CHAAT SECTION — CUSTOM CODED MASTER REFERENCE REPRODUCTION
  // =========================================================================
  if (isTamatarSection) {
    return (
      <div
        onClick={onClick}
        style={style}
        role="button"
        tabIndex={0}
        aria-label="Tamatar Chaat"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
        className={`group relative w-[78vw] max-w-[1180px] min-w-[340px] h-[66vh] min-h-[480px] max-h-[680px] rounded-2xl md:rounded-3xl select-none cursor-pointer overflow-hidden transition-all duration-500 bg-[#0c0b0a] border shadow-[0_35px_100px_rgba(0,0,0,0.95)] ${
          isCenter
            ? "border-white/30 ring-1 ring-[#d84323]/30"
            : "border-white/10 hover:border-white/20 opacity-80 hover:opacity-100"
        }`}
      >
        {/* Background Photo — Clean photographic master asset */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/kashi-rasoi/food/tamatar-chaat/background.jpg"
            alt="Banarasi Tamatar Chaat"
            fill
            priority={isCenter}
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
        </div>

        {/* Master Reference Typography — Right Column Layout */}
        <div className="absolute z-10 top-5 sm:top-7 md:top-8 lg:top-9 right-6 sm:right-8 md:right-10 lg:right-12 pointer-events-none max-w-[240px] sm:max-w-[270px] md:max-w-[310px]">
          {/* Title with copper accent rule */}
          <h1 className="font-master-title font-bold tracking-[0.02em] leading-[0.88] uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
            <div className="text-[#d84323] text-4xl sm:text-5xl md:text-[54px] lg:text-[62px]">
              TAMATAR
            </div>
            <div className="flex items-center text-[#d84323] text-4xl sm:text-5xl md:text-[54px] lg:text-[62px] mt-0.5 sm:mt-1">
              <span className="w-6 sm:w-8 md:w-10 h-[1.5px] bg-[#d4954b]/80 mr-2 sm:mr-3 inline-block -translate-y-0.5" />
              <span>CHAAT</span>
            </div>
          </h1>

          {/* Subtitle */}
          <p className="font-master-body text-[12px] sm:text-[13.5px] md:text-[15px] lg:text-[16px] text-[#f8f3ea] font-normal leading-[1.3] mt-2 sm:mt-2.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            A tangy burst of Banaras<br />
            in every bite.
          </p>

          {/* Price Block (Centered relative to itself) */}
          <div className="mt-3 sm:mt-3.5 md:mt-4 text-center w-fit drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            <div className="font-master-title text-2xl sm:text-3xl md:text-[32px] font-bold text-[#e5a952] leading-none">
              ₹20 – ₹50
            </div>
            <span className="font-master-body text-xs sm:text-[13px] md:text-[14px] text-[#d6cabc] block mt-0.5 sm:mt-1">
              approx.
            </span>
          </div>

          {/* Divider Line */}
          <div className="w-full h-px bg-white/20 my-2.5 sm:my-3 md:my-3.5" />

          {/* Famous Spots */}
          <div className="space-y-1.5 sm:space-y-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            <div>
              <span className="font-master-title text-[9.5px] sm:text-[10.5px] md:text-[11.5px] tracking-[0.18em] text-[#e5a952] uppercase font-bold">
                FAMOUS SPOTS
              </span>
            </div>

            <div className="font-master-body text-[11px] sm:text-[12px] md:text-[13px] text-[#f8f3ea] leading-[1.28] space-y-1.5 sm:space-y-2">
              <div>
                <div className="font-medium text-white">Kashi Chaat Bhandar,</div>
                <div className="font-normal text-white">Vishwanath Gali</div>
              </div>

              <div className="w-full h-px bg-white/20" />

              <div>
                <div className="font-medium text-white">Baba Tamatar Chaat,</div>
                <div className="font-normal text-white">Godowlia</div>
              </div>

              <div className="w-full h-px bg-white/20" />

              <div>
                <div className="font-medium text-white">Deena Chaat Bhandar,</div>
                <div className="font-normal text-white">Lanka</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 3. BANARASI SWEETS SECTION — CUSTOM CODED MASTER REFERENCE REPRODUCTION
  // =========================================================================
  if (isSweetsSection) {
    return (
      <div
        onClick={onClick}
        style={style}
        role="button"
        tabIndex={0}
        aria-label="Banarasi Sweets"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
        className={`group relative w-[78vw] max-w-[1180px] min-w-[340px] h-[66vh] min-h-[480px] max-h-[680px] rounded-2xl md:rounded-3xl select-none cursor-pointer overflow-hidden transition-all duration-500 bg-[#0c0b0a] border shadow-[0_35px_100px_rgba(0,0,0,0.95)] ${
          isCenter
            ? "border-white/30 ring-1 ring-[#c8a663]/30"
            : "border-white/10 hover:border-white/20 opacity-80 hover:opacity-100"
        }`}
      >
        {/* Background Photo — Clean photographic master asset */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/kashi-rasoi/food/banarasi-sweets/background.jpg"
            alt="Heritage Banarasi Sweets Platter"
            fill
            priority={isCenter}
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
          {/* Subtle text readability shadow behind the left typography column */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent w-[45%] pointer-events-none" />
        </div>

        {/* Master Reference Typography — Left Column Layout */}
        <div className="absolute z-10 top-7 sm:top-10 md:top-12 lg:top-14 left-6 sm:left-9 md:left-12 lg:left-14 pointer-events-none max-w-[280px] sm:max-w-[310px] md:max-w-[340px]">
          {/* Title */}
          <h1 className="font-master-title font-bold tracking-[0.02em] leading-[0.88] uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
            <div className="text-[#ede3d2] text-4xl sm:text-5xl md:text-[54px] lg:text-[62px]">
              BANARASI
            </div>
            <div className="text-[#ede3d2] text-4xl sm:text-5xl md:text-[54px] lg:text-[62px] mt-0.5 sm:mt-1">
              SWEETS
            </div>
          </h1>

          {/* Subtitle */}
          <p className="font-master-body text-[12px] sm:text-[13.5px] md:text-[15px] lg:text-[16px] text-[#ede3d2] font-normal leading-[1.3] mt-2.5 sm:mt-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            The old-city sweetness<br />
            of Banaras,
          </p>

          {/* Lotus Divider */}
          <div className="w-[145px] sm:w-[165px] md:w-[180px] my-3 sm:my-3.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            <Image
              src="/kashi-rasoi/food/banarasi-sweets/lotus-divider.png"
              alt="Lotus divider"
              width={176}
              height={23}
              className="w-full h-auto"
            />
          </div>

          {/* Famous Spots Section */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            {/* Temple Spire Line Art */}
            <div className="shrink-0 w-[24px] sm:w-[28px] md:w-[32px]">
              <Image
                src="/kashi-rasoi/food/banarasi-sweets/temple-spire.png"
                alt="Temple Shikhara"
                width={35}
                height={126}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Spots Column */}
            <div className="space-y-1 sm:space-y-1.5">
              <div>
                <span className="font-master-title text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.24em] text-[#d4b06a] uppercase font-bold">
                  FAMOUS SPOTS
                </span>
              </div>

              <div className="font-master-body text-[11px] sm:text-[12px] md:text-[13px] text-[#ede3d2] space-y-1 sm:space-y-1.5 leading-[1.2]">
                <div className="flex items-center gap-1.5">
                  <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-[#d4b06a] shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                  </svg>
                  <span className="font-medium">Ksheer Sagar</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-[#d4b06a] shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                  </svg>
                  <span className="font-medium">Rajshree</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <svg className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-[#d4b06a] shrink-0 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
                  </svg>
                  <span className="font-medium">Rasvanti, Thatheri Bazar</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 4. GOLGAPPA SECTION — CUSTOM CODED MASTER REFERENCE REPRODUCTION
  // =========================================================================
  if (isGolgappeSection) {
    return (
      <div
        onClick={onClick}
        style={style}
        role="button"
        tabIndex={0}
        aria-label="Banarasi Golgappa"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
        className={`group relative w-[78vw] max-w-[1180px] min-w-[340px] h-[66vh] min-h-[480px] max-h-[680px] rounded-2xl md:rounded-3xl select-none cursor-pointer overflow-hidden transition-all duration-500 bg-[#0c0b0a] border shadow-[0_35px_100px_rgba(0,0,0,0.95)] ${
          isCenter
            ? "border-white/30 ring-1 ring-[#e5a952]/30"
            : "border-white/10 hover:border-white/20 opacity-80 hover:opacity-100"
        }`}
      >
        {/* Background Photo — Clean photographic master asset */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/kashi-rasoi/food/golgappe/background.jpg"
            alt="Banarasi Golgappe"
            fill
            priority={isCenter}
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
          {/* Subtle text readability shadow behind the left typography column */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent w-[48%] pointer-events-none" />
        </div>

        {/* Master Reference Typography — Left Column Layout */}
        <div className="absolute z-10 top-6 sm:top-8 md:top-10 lg:top-12 left-6 sm:left-8 md:left-11 lg:left-13 pointer-events-none max-w-[280px] sm:max-w-[310px] md:max-w-[350px]">
          {/* Title */}
          <h1 className="font-master-title font-bold tracking-[0.02em] leading-[0.88] uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
            <span className="text-[#f1dda8] text-4xl sm:text-5xl md:text-[54px] lg:text-[62px]">
              GOLGAPPA
            </span>
          </h1>

          {/* Subtitle */}
          <p className="font-master-body text-[12.5px] sm:text-[14px] md:text-[15.5px] lg:text-[17px] text-[#f8f3ea] font-normal leading-[1.28] mt-2 sm:mt-2.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            A burst of Banaras<br />
            in every bite.
          </p>

          {/* Subtle Horizontal Divider */}
          <div className="w-[180px] sm:w-[210px] h-px bg-white/20 my-3 sm:my-3.5" />

          {/* Price Block */}
          <div className="flex items-start gap-2.5 sm:gap-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            {/* Coins Stack Circle Icon */}
            <div className="shrink-0 w-6 sm:w-7 h-6 sm:h-7 rounded-full border border-[#c8a663]/60 flex items-center justify-center text-[#c8a663] mt-0.5">
              <svg className="w-3.5 h-3.5 stroke-[1.6]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <ellipse cx="12" cy="6" rx="8" ry="3" />
                <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
                <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
              </svg>
            </div>

            <div>
              <span className="font-master-title text-[9px] sm:text-[10px] tracking-[0.2em] text-[#c8a663] uppercase font-bold block">
                PRICE
              </span>
              <div className="font-master-title text-xl sm:text-2xl md:text-[26px] font-bold text-[#f8f3ea] leading-tight">
                ₹20 – ₹50
              </div>
              <span className="font-master-body text-[11px] sm:text-[12px] text-[#d6cabc] block -mt-0.5">
                approx.
              </span>
            </div>
          </div>

          {/* Subtle Horizontal Divider */}
          <div className="w-[180px] sm:w-[210px] h-px bg-white/20 my-3 sm:my-3.5" />

          {/* Famous Spots Block */}
          <div className="flex items-start gap-2.5 sm:gap-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            {/* Pin Circle Icon */}
            <div className="shrink-0 w-6 sm:w-7 h-6 sm:h-7 rounded-full border border-[#c8a663]/60 flex items-center justify-center text-[#c8a663] mt-0.5">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
              </svg>
            </div>

            <div>
              <span className="font-master-title text-[9px] sm:text-[10px] tracking-[0.2em] text-[#c8a663] uppercase font-bold block mb-1.5">
                FAMOUS SPOTS
              </span>

              {/* Vertical timeline connector */}
              <div className="relative pl-3 border-l border-[#c8a663]/50 space-y-2 font-master-body text-[11px] sm:text-[12px] md:text-[12.5px] text-[#f8f3ea] leading-[1.2]">
                <div className="relative">
                  <span className="absolute -left-[15px] top-1.5 w-1.5 h-1.5 rounded-full bg-[#c8a663]" />
                  <div className="font-medium text-white">Kashi Chaat Bhandar,</div>
                  <div className="font-normal text-white/90">Vishwanath Gali</div>
                </div>

                <div className="relative">
                  <span className="absolute -left-[15px] top-1.5 w-1.5 h-1.5 rounded-full bg-[#c8a663]" />
                  <div className="font-medium text-white">Deena Chaat Bhandar,</div>
                  <div className="font-normal text-white/90">Lanka</div>
                </div>

                <div className="relative">
                  <span className="absolute -left-[15px] top-1.5 w-1.5 h-1.5 rounded-full bg-[#c8a663]" />
                  <div className="font-medium text-white">Shree Ram Bhandar,</div>
                  <div className="font-normal text-white/90">Thatheri Bazar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 5. BANARASI PAAN SECTION — CUSTOM CODED MASTER REFERENCE REPRODUCTION
  // =========================================================================
  if (isPaanSection) {
    return (
      <div
        onClick={onClick}
        style={style}
        role="button"
        tabIndex={0}
        aria-label="Banarasi Paan"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
        className={`group relative w-[78vw] max-w-[1180px] min-w-[340px] h-[66vh] min-h-[480px] max-h-[680px] rounded-2xl md:rounded-3xl select-none cursor-pointer overflow-hidden transition-all duration-500 bg-[#0c0b0a] border shadow-[0_35px_100px_rgba(0,0,0,0.95)] ${
          isCenter
            ? "border-white/30 ring-1 ring-[#b82435]/35"
            : "border-white/10 hover:border-white/20 opacity-80 hover:opacity-100"
        }`}
      >
        {/* Background Photo — Clean photographic master asset */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/kashi-rasoi/food/banarasi-paan/background.jpg"
            alt="Banarasi Paan"
            fill
            priority={isCenter}
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
          {/* Subtle text readability shadow behind the left typography column */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent w-[48%] pointer-events-none" />
        </div>

        {/* Master Reference Typography — Left Column Layout */}
        <div className="absolute z-10 top-6 sm:top-8 md:top-10 lg:top-12 left-6 sm:left-8 md:left-11 lg:left-13 pointer-events-none max-w-[280px] sm:max-w-[310px] md:max-w-[350px]">
          {/* Title */}
          <h1 className="font-master-title font-bold tracking-[0.02em] leading-[0.88] uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
            <div className="text-[#f8f3ea] text-4xl sm:text-5xl md:text-[54px] lg:text-[62px]">
              BANARASI
            </div>
            <div className="text-[#c22b38] text-4xl sm:text-5xl md:text-[54px] lg:text-[62px] mt-0.5 sm:mt-1">
              PAAN
            </div>
          </h1>

          {/* Subtitle */}
          <p className="font-master-body text-[12.5px] sm:text-[14px] md:text-[15.5px] lg:text-[17px] text-[#f8f3ea] font-normal leading-[1.28] mt-2.5 sm:mt-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            The ritual that leaves<br />
            Banaras on your lips.
          </p>

          {/* Subtle Horizontal Divider with Accent Diamond */}
          <div className="relative w-[180px] sm:w-[210px] my-3 sm:my-3.5 flex items-center">
            <div className="flex-1 h-px bg-white/20" />
            <span className="mx-2 text-[#c22b38] text-[8px] transform rotate-45 inline-block">◆</span>
            <div className="flex-1 h-px bg-white/20" />
          </div>

          {/* Price Block */}
          <div className="flex items-start gap-2.5 sm:gap-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            {/* Coins Stack Circle Icon */}
            <div className="shrink-0 w-6 sm:w-7 h-6 sm:h-7 rounded-full border border-[#c22b38]/70 flex items-center justify-center text-[#c22b38] mt-0.5">
              <svg className="w-3.5 h-3.5 stroke-[1.6]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <ellipse cx="12" cy="6" rx="8" ry="3" />
                <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
                <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
              </svg>
            </div>

            <div>
              <span className="font-master-title text-[9px] sm:text-[10px] tracking-[0.2em] text-[#c22b38] uppercase font-bold block">
                PRICE
              </span>
              <div className="font-master-title text-xl sm:text-2xl md:text-[26px] font-bold text-[#f8f3ea] leading-tight">
                ₹20 – ₹100
              </div>
              <span className="font-master-body text-[11px] sm:text-[12px] text-[#d6cabc] block -mt-0.5">
                approx.
              </span>
            </div>
          </div>

          {/* Subtle Horizontal Divider */}
          <div className="w-[180px] sm:w-[210px] h-px bg-white/20 my-3 sm:my-3.5" />

          {/* Famous Spots Block */}
          <div className="flex items-start gap-2.5 sm:gap-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            {/* Pin Circle Icon */}
            <div className="shrink-0 w-6 sm:w-7 h-6 sm:h-7 rounded-full border border-[#c22b38]/70 flex items-center justify-center text-[#c22b38] mt-0.5">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
              </svg>
            </div>

            <div>
              <span className="font-master-title text-[9px] sm:text-[10px] tracking-[0.2em] text-[#c22b38] uppercase font-bold block mb-1.5">
                FAMOUS SPOTS
              </span>

              {/* Vertical timeline connector */}
              <div className="relative pl-3 border-l border-[#c22b38]/50 space-y-2 font-master-body text-[11px] sm:text-[12px] md:text-[12.5px] text-[#f8f3ea] leading-[1.2]">
                <div className="relative">
                  <span className="absolute -left-[15px] top-1.5 w-1.5 h-1.5 rounded-full bg-[#c22b38]" />
                  <div className="font-medium text-white">Keshav Paan Bhandar,</div>
                  <div className="font-normal text-white/90">Kachauri Gali</div>
                </div>

                <div className="relative">
                  <span className="absolute -left-[15px] top-1.5 w-1.5 h-1.5 rounded-full bg-[#c22b38]" />
                  <div className="font-medium text-white">Tambul Paan,</div>
                  <div className="font-normal text-white/90">Godowlia</div>
                </div>

                <div className="relative">
                  <span className="absolute -left-[15px] top-1.5 w-1.5 h-1.5 rounded-full bg-[#c22b38]" />
                  <div className="font-medium text-white">Ramnagar Paan Bhandar,</div>
                  <div className="font-normal text-white/90">Ramnagar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 6. MALAIYO SECTION — CUSTOM CODED MASTER REFERENCE REPRODUCTION
  // =========================================================================
  if (isMalaiyoSection) {
    return (
      <div
        onClick={onClick}
        style={style}
        role="button"
        tabIndex={0}
        aria-label="Banarasi Malaiyo"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
        className={`group relative w-[78vw] max-w-[1180px] min-w-[340px] h-[66vh] min-h-[480px] max-h-[680px] rounded-2xl md:rounded-3xl select-none cursor-pointer overflow-hidden transition-all duration-500 bg-[#0c0b0a] border shadow-[0_35px_100px_rgba(0,0,0,0.95)] ${
          isCenter
            ? "border-white/30 ring-1 ring-[#d7e68b]/30"
            : "border-white/10 hover:border-white/20 opacity-80 hover:opacity-100"
        }`}
      >
        {/* Background Photo — Clean photographic master asset */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/kashi-rasoi/food/malaiyo/background.jpg"
            alt="Banarasi Malaiyo"
            fill
            priority={isCenter}
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
          {/* Subtle text readability shadow behind the left typography column */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent w-[50%] pointer-events-none" />
        </div>

        {/* Master Reference Typography — Left Column Layout */}
        <div className="absolute z-10 top-6 sm:top-8 md:top-10 lg:top-12 left-6 sm:left-8 md:left-11 lg:left-13 pointer-events-none max-w-[280px] sm:max-w-[320px] md:max-w-[360px]">
          {/* Title: MALA (cream) + IYO (pistachio-saffron yellow) */}
          <h1 className="font-master-title font-bold tracking-[0.02em] leading-[0.88] uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
            <span className="text-[#f7f4ea] text-4xl sm:text-5xl md:text-[54px] lg:text-[62px]">
              MALA
            </span>
            <span className="text-[#d7e68b] text-4xl sm:text-5xl md:text-[54px] lg:text-[62px]">
              IYO
            </span>
          </h1>

          {/* Delicate divider with center diamond */}
          <div className="flex items-center gap-2 w-[180px] sm:w-[220px] my-2 sm:my-2.5">
            <div className="h-px flex-1 bg-[#d7e68b]/40" />
            <div className="w-1.5 h-1.5 rotate-45 bg-[#d7e68b]" />
            <div className="h-px flex-1 bg-[#d7e68b]/40" />
          </div>

          {/* Subtitle */}
          <p className="font-master-body text-[12.5px] sm:text-[14px] md:text-[15.5px] lg:text-[17px] text-[#f7f4ea] font-normal leading-[1.28] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            The winter indulgence<br />
            Banaras waits for.
          </p>

          {/* Subtle Horizontal Divider */}
          <div className="w-[180px] sm:w-[210px] h-px bg-white/20 my-3 sm:my-3.5" />

          {/* Price Block */}
          <div className="flex items-start gap-2.5 sm:gap-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            {/* Coins Stack Circle Icon */}
            <div className="shrink-0 w-6 sm:w-7 h-6 sm:h-7 rounded-full border border-[#d7e68b]/70 flex items-center justify-center text-[#d7e68b] mt-0.5">
              <svg className="w-3.5 h-3.5 stroke-[1.6]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <ellipse cx="12" cy="6" rx="8" ry="3" />
                <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
                <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
              </svg>
            </div>

            <div>
              <span className="font-master-title text-[9px] sm:text-[10px] tracking-[0.2em] text-[#d7e68b] uppercase font-bold block">
                PRICE
              </span>
              <div className="font-master-title text-xl sm:text-2xl md:text-[26px] font-bold text-white leading-tight">
                ₹30 – ₹60
              </div>
              <span className="font-master-body text-[11px] sm:text-[12px] text-[#d6cabc] block -mt-0.5">
                approx.
              </span>
            </div>
          </div>

          {/* Subtle Horizontal Divider */}
          <div className="w-[180px] sm:w-[210px] h-px bg-white/20 my-3 sm:my-3.5" />

          {/* Famous Spots Block */}
          <div className="flex items-start gap-2.5 sm:gap-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            {/* Pin Circle Icon */}
            <div className="shrink-0 w-6 sm:w-7 h-6 sm:h-7 rounded-full border border-[#d7e68b]/70 flex items-center justify-center text-[#d7e68b] mt-0.5">
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
              </svg>
            </div>

            <div>
              <span className="font-master-title text-[9px] sm:text-[10px] tracking-[0.2em] text-[#d7e68b] uppercase font-bold block mb-1.5">
                FAMOUS SPOTS
              </span>

              {/* Vertical timeline connector */}
              <div className="relative pl-3 border-l border-[#d7e68b]/50 space-y-2 font-master-body text-[11.5px] sm:text-[12.5px] md:text-[13px] text-[#f8f3ea] leading-[1.2]">
                <div className="relative">
                  <span className="absolute -left-[15px] top-1.5 w-1.5 h-1.5 rounded-full bg-[#d7e68b]" />
                  <div className="font-medium text-white">Pahalwan Lassi</div>
                </div>

                <div className="relative">
                  <span className="absolute -left-[15px] top-1.5 w-1.5 h-1.5 rounded-full bg-[#d7e68b]" />
                  <div className="font-medium text-white">Shreeji</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 7. CHAI & TOAST SECTION — CUSTOM CODED MASTER REFERENCE REPRODUCTION
  // =========================================================================
  if (isChaiSection) {
    return (
      <div
        onClick={onClick}
        style={style}
        role="button"
        tabIndex={0}
        aria-label="Kulhad Chai & Makhan Toast"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
        className={`group relative w-[78vw] max-w-[1180px] min-w-[340px] h-[66vh] min-h-[480px] max-h-[680px] rounded-2xl md:rounded-3xl select-none cursor-pointer overflow-hidden transition-all duration-500 bg-[#0c0b0a] border shadow-[0_35px_100px_rgba(0,0,0,0.95)] ${
          isCenter
            ? "border-white/30 ring-1 ring-[#b59a63]/30"
            : "border-white/10 hover:border-white/20 opacity-80 hover:opacity-100"
        }`}
      >
        {/* Background Photo — Clean photographic master asset */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/kashi-rasoi/food/chai-toast/background.jpg"
            alt="Kulhad Chai & Makhan Toast live photo"
            fill
            priority={isCenter}
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
          {/* Subtle text readability shadow behind the left typography column */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent w-3/5 pointer-events-none" />
        </div>

        {/* Master Reference Typography — Hand-coded HTML/CSS matching the master reference */}
        <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-9 md:p-11 lg:p-12 pointer-events-none">
          {/* Top-Left: Main Editorial Title & Subtitle */}
          <div className="max-w-[560px]">
            <h1 className="font-master-title text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-[#f5efe6] tracking-[0.02em] leading-[0.96] uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              <div>KULHAD CHAI</div>
              <div className="flex items-center mt-0.5 sm:mt-1">
                <span className="text-[#c8985c] font-master-italic italic font-semibold mr-2 sm:mr-3 text-2xl sm:text-3xl md:text-4xl lg:text-[46px] lowercase">
                  &amp;
                </span>
                <span>MAKHAN TOAST</span>
              </div>
            </h1>

            <p className="font-master-italic italic text-sm sm:text-base md:text-lg lg:text-[19px] text-[#d6cabc] mt-2.5 sm:mt-3.5 tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              For Banaras, there’s never a wrong time for chai.
            </p>
          </div>

          {/* Bottom-Left: Three Stacked Metadata Blocks with Divider Lines */}
          <div className="w-[190px] sm:w-[210px] md:w-[230px] space-y-2.5 sm:space-y-3 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            {/* 1. PRICE */}
            <div>
              <span className="font-mono text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.14em] text-[#a69b8d] uppercase font-medium">
                PRICE —
              </span>
              <div className="font-master-title text-2xl sm:text-3xl md:text-[32px] font-bold text-[#f5efe6] leading-none mt-1">
                ₹20–₹40
              </div>
              <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.18em] text-[#9c9182] uppercase block mt-1">
                APPROX.
              </span>
            </div>

            <div className="w-full h-px bg-white/20" />

            {/* 2. FAMOUS SPOTS */}
            <div>
              <span className="font-mono text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.14em] text-[#a69b8d] uppercase font-medium">
                FAMOUS SPOTS —
              </span>
              <div className="font-master-body text-xs sm:text-sm md:text-[15px] font-medium text-[#f5efe6] leading-snug mt-1">
                <div>Laxmi Chai Wala,</div>
                <div>Chowk · Assi Ghat</div>
              </div>
            </div>

            <div className="w-full h-px bg-white/20" />

            {/* 3. BEST ENJOYED */}
            <div>
              <span className="font-mono text-[9px] sm:text-[10px] md:text-[11px] tracking-[0.14em] text-[#a69b8d] uppercase font-medium">
                BEST ENJOYED —
              </span>
              <div className="font-master-body text-xs sm:text-sm md:text-[15px] font-medium text-[#f5efe6] leading-snug mt-1">
                Morning to late night
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 8. KULHAD LASSI SECTION — CUSTOM CODED MASTER REFERENCE REPRODUCTION
  // =========================================================================
  if (isLassiSection) {
    return (
      <div
        onClick={onClick}
        style={style}
        role="button"
        tabIndex={0}
        aria-label="Kulhad Lassi"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onClick();
          }
        }}
        className={`group relative w-[78vw] max-w-[1180px] min-w-[340px] h-[66vh] min-h-[480px] max-h-[680px] rounded-2xl md:rounded-3xl select-none cursor-pointer overflow-hidden transition-all duration-500 bg-[#0c0b0a] border shadow-[0_35px_100px_rgba(0,0,0,0.95)] ${
          isCenter
            ? "border-white/30 ring-1 ring-[#98ab67]/30"
            : "border-white/10 hover:border-white/20 opacity-80 hover:opacity-100"
        }`}
      >
        {/* Background Photo — Clean photographic master asset */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <Image
            src="/kashi-rasoi/food/banarasi-lassi/background.jpg?v=4"
            alt="Banarasi Kulhad Lassi"
            fill
            priority={isCenter}
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-[1.015]"
          />
          {/* Subtle text readability shadow behind the left typography column */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/10 to-transparent w-[45%] pointer-events-none" />
        </div>

        {/* Master Reference Typography — Hand-coded HTML/CSS matching the master reference */}
        <div className="relative z-10 h-full flex flex-col justify-start p-5 sm:p-7 md:p-8 lg:p-9 pointer-events-none max-w-[340px] sm:max-w-[380px] md:max-w-[420px]">
          {/* Top-Left: Main Didone Title & Subtitle */}
          <div>
            <h1 className="font-master-title font-bold tracking-[0.015em] leading-[0.90] uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
              <div className="text-[#98ab67] text-4xl sm:text-5xl md:text-[54px] lg:text-[62px]">
                KULHAD
              </div>
              <div className="text-[#98ab67] text-4xl sm:text-5xl md:text-[54px] lg:text-[62px] mt-0.5 sm:mt-1">
                LASSI
              </div>
            </h1>

            <p className="font-master-body text-[13px] sm:text-[14.5px] md:text-[16px] lg:text-[17px] text-white font-normal leading-[1.3] mt-2 sm:mt-3 max-w-[360px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              <span className="whitespace-nowrap">A creamy favourite that Banaras reaches for</span><br />
              <span>all year round.</span>
            </p>
          </div>

          {/* Middle-Left: Rustic Torn Parchment Price Badge */}
          <div className="relative mt-2.5 sm:mt-3.5 md:mt-4 w-[150px] sm:w-[170px] md:w-[195px] aspect-[188/74] drop-shadow-[0_6px_20px_rgba(0,0,0,0.9)] transform origin-left">
            <Image
              src="/kashi-rasoi/food/banarasi-lassi/parchment_price_tag.png?v=4"
              alt="Price: ₹40 - ₹80 approx."
              fill
              className="object-contain object-left"
              priority
            />
          </div>

          {/* Bottom-Left: Famous Spots Directory */}
          <div className="mt-3 sm:mt-3.5 md:mt-4 space-y-1.5 sm:space-y-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            <div>
              <span className="font-master-title text-[9.5px] sm:text-[10.5px] md:text-[11.5px] tracking-[0.18em] text-[#98ab67] uppercase font-bold">
                FAMOUS SPOTS
              </span>
            </div>

            <div className="font-master-body text-[11.5px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-white leading-[1.24] space-y-1 sm:space-y-1.5">
              <div>
                <div className="font-medium text-white">Blue Lassi,</div>
                <div className="font-normal text-white">Kachauri Gali</div>
              </div>
              <div>
                <div className="font-medium text-white">Pahalwan Lassi,</div>
                <div className="font-normal text-white">Lanka</div>
              </div>
              <div>
                <div className="font-medium text-white">Shiv Prasad Lassi Bhandar,</div>
                <div className="font-normal text-white">Ramnagar</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 3. ALL OTHER 7 SECTIONS — CLEAN EMPTY BOXES (EXACT FINALIZED CARD SIZE)
  // =========================================================================
  return (
    <div
      onClick={onClick}
      style={style}
      role="button"
      tabIndex={0}
      aria-label={`Empty box for Chapter ${food.number} ${food.name}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
      className={`group relative w-[78vw] max-w-[1180px] min-w-[340px] h-[66vh] min-h-[480px] max-h-[680px] rounded-2xl md:rounded-3xl select-none cursor-pointer overflow-hidden transition-all duration-500 bg-[#121110]/60 backdrop-blur-sm border shadow-[0_35px_100px_rgba(0,0,0,0.85)] flex flex-col justify-between p-6 sm:p-8 md:p-10 ${
        isCenter
          ? "border-white/30 ring-1 ring-[#b59a63]/30"
          : "border-white/10 hover:border-white/20 opacity-70 hover:opacity-100"
      }`}
    >
      {/* Subtle Architectural Grid Canvas */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Minimal Corner Crosshairs */}
      <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-white/20 pointer-events-none" />
      <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-white/20 pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-white/20 pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-white/20 pointer-events-none" />

      {/* Top Header Tag */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="font-mono text-xs tracking-widest text-[#b59a63] font-semibold px-2.5 py-0.5 rounded bg-[#b59a63]/10 border border-[#b59a63]/25">
          CHAPTER {food.number}
        </span>
        <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase">
          AWAITING DESIGN
        </span>
      </div>

      {/* Center Empty Canvas Indicator */}
      <div className="relative z-10 m-auto flex flex-col items-center justify-center text-center space-y-3">
        <div className="w-12 h-12 rounded-2xl border border-dashed border-white/20 flex items-center justify-center text-white/30 group-hover:border-[#b59a63]/40 group-hover:text-[#b59a63] transition-colors">
          <svg
            className="w-5 h-5 stroke-[1.5]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M12 8v8M8 12h8" />
          </svg>
        </div>
        <div>
          <h3 className="font-display text-xl sm:text-2xl text-white/80 font-normal">
            {food.name}
          </h3>
          <p className="font-mono text-[11px] text-white/40 tracking-wider mt-1">
            {food.devanagariName}
          </p>
        </div>
        <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase px-3 py-1 rounded-full border border-white/10 bg-white/[0.02]">
          EMPTY BOX · READY FOR YOUR INSTRUCTIONS
        </span>
      </div>

      {/* Bottom Status Line */}
      <div className="relative z-10 flex items-center justify-between text-white/30 font-mono text-[10px] tracking-wider pt-2 border-t border-white/5">
        <span>SLOT {food.number} / 08</span>
        <span className="text-[#b59a63]/70">
          {isCenter ? "CURRENTLY ACTIVE" : "CLICK TO BRING TO CENTER"}
        </span>
      </div>
    </div>
  );
}
