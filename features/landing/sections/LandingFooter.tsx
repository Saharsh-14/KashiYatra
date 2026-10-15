"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PrivacyPolicyModal } from "../components/PrivacyPolicyModal";
import { TermsOfUseModal } from "../components/TermsOfUseModal";
import { AboutKashiYatraModal } from "../components/AboutKashiYatraModal";
import { OurVisionModal } from "../components/OurVisionModal";

/**
 * LandingFooter — Final section showing Varanasi Ghats at night with floating diyas.
 * Features a continuous translucent black window, golden temple skyline on the bottom-right,
 * the sacred golden Trishul Kashiyatra emblem, and the 6 designated text zones.
 */
export function LandingFooter() {
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isVisionOpen, setIsVisionOpen] = useState(false);

  return (
    <>
      <footer
        id="kashi-night"
        aria-label="Varanasi Ghats at Night"
        className="relative w-full min-h-screen bg-black flex flex-col items-center justify-start select-none m-0 p-0 border-0"
      >
        {/* =====================================================================
          MOBILE EDITORIAL FOOTER (Clean, luxury vertical composition < md)
          ===================================================================== */}
        <div className="block md:hidden relative w-full overflow-hidden bg-black text-[#FAF6F0]">
          {/* Background photo with atmospheric dark overlay */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src="/images/landing/kashi-night-ghats.webp"
              alt="Varanasi illuminated ghats at night"
              fill
              sizes="100vw"
              className="object-cover object-bottom brightness-[0.4] contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black/95" />
          </div>

          {/* Golden temple watermark in bottom-right background */}
          <div className="absolute right-0 bottom-0 w-[80%] max-w-[340px] pointer-events-none opacity-40 mix-blend-screen z-0">
            <Image
              src="/images/landing/golden-temple-ghats.webp"
              alt=""
              width={1024}
              height={364}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center px-6 pt-16 pb-12">
            {/* Sacred Golden Trishul Emblem */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              <div
                aria-hidden="true"
                className="absolute w-28 h-28 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.3)_0%,transparent_70%)] blur-xl pointer-events-none"
              />
              <Image
                src="/images/landing/kashiyatra-trishul-logo.webp"
                alt="Kashiyatra Emblem"
                fill
                sizes="128px"
                className="object-contain mix-blend-screen drop-shadow-[0_0_18px_rgba(245,158,11,0.5)]"
              />
            </div>

            {/* Quote */}
            <div className="w-full max-w-[300px] mt-3 mb-8 flex justify-center">
              <Image
                src="/images/landing/varanasi-calls-quote.webp"
                alt="You don't simply come to Varanasi. Somehow, Varanasi calls you."
                width={829}
                height={77}
                className="w-full h-auto object-contain drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
              />
            </div>

            {/* Editorial Link Columns in Responsive Grid */}
            <div className="w-full grid grid-cols-2 gap-6 mb-8 text-left">
              {/* Column 1: Explore Kashi */}
              <div>
                <h3 className="type-ui text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C5A059] mb-2.5">
                  EXPLORE KASHI
                </h3>
                <ul className="space-y-2 text-[13px] text-[#D6CEBE]/90">
                  <li>
                    <Link href="#steps-to-eternity" className="hover:text-white transition-colors block py-0.5">
                      Steps to Eternity
                    </Link>
                  </li>
                  <li>
                    <Link href="#where-gods-reside" className="hover:text-white transition-colors block py-0.5">
                      Where Gods Reside
                    </Link>
                  </li>
                  <li>
                    <Link href="#unfolded" className="hover:text-white transition-colors block py-0.5">
                      Kashi Unfolded
                    </Link>
                  </li>
                  <li>
                    <Link href="#rasoi" className="hover:text-white transition-colors block py-0.5">
                      Kashi Rasoi
                    </Link>
                  </li>
                  <li>
                    <Link href="#spirit-of-kashi-video" className="hover:text-white transition-colors block py-0.5">
                      The Spirit of Kashi
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Column 2: Experience & Connect */}
              <div className="space-y-5">
                <div>
                  <h3 className="type-ui text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C5A059] mb-2.5">
                    EXPERIENCE
                  </h3>
                  <ul className="space-y-2 text-[13px] text-[#D6CEBE]/90">
                    <li>
                      <button
                        type="button"
                        onClick={() => setIsAboutOpen(true)}
                        className="hover:text-white transition-colors block text-left py-0.5"
                      >
                        About KashiYatra
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        onClick={() => setIsVisionOpen(true)}
                        className="hover:text-white transition-colors block text-left py-0.5"
                      >
                        Our Vision
                      </button>
                    </li>
                    <li>
                      <a href="mailto:saharshjais1423@gmail.com" className="hover:text-white transition-colors block py-0.5">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="type-ui text-[11px] font-semibold tracking-[0.25em] uppercase text-[#C5A059] mb-2.5">
                    CONNECT
                  </h3>
                  <ul className="space-y-2 text-[13px] text-[#D6CEBE]/90">
                    <li>
                      <a
                        href="https://www.linkedin.com/in/saharsh-jaiswal-vns/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors block py-0.5"
                      >
                        LinkedIn
                      </a>
                    </li>
                    <li>
                      <a href="mailto:saharshjais1423@gmail.com" className="hover:text-white transition-colors block py-0.5">
                        Email
                      </a>
                    </li>
                    <li>
                      <a href="tel:+919559522633" className="hover:text-white transition-colors block py-0.5 tabular-nums">
                        +91-9559522633
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-white/10 mb-5" />

            {/* Bottom Credits & Legal */}
            <div className="w-full flex flex-col items-center gap-2.5 text-center">
              <div className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-[#D6CEBE]/90">
                <button
                  onClick={() => setIsPrivacyOpen(true)}
                  className="hover:text-white transition-colors py-0.5 cursor-pointer"
                >
                  Privacy
                </button>
                <span>·</span>
                <button
                  onClick={() => setIsTermsOpen(true)}
                  className="hover:text-white transition-colors py-0.5 cursor-pointer"
                >
                  Terms
                </button>
              </div>

              <p className="text-[9.5px] tracking-[0.12em] uppercase text-[#D6CEBE]/70">
                Designed • Developed • Crafted by{" "}
                <a
                  href="https://www.linkedin.com/in/saharsh-jaiswal-vns/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FAF6F0] hover:text-[#C8A55C] transition-colors"
                >
                  Saharsh Jaiswal
                </a>
              </p>

              <span className="text-[9.5px] tracking-[0.2em] uppercase text-white/50">
                © 2026 KASHIYATRA
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================================
          DESKTOP EDITORIAL FOOTER (100% UNCHANGED AND PRESERVED >= md)
          ===================================================================== */}
        <div className="hidden md:block relative w-full">
          {/* Background photo — Varanasi Ghats at Night with floating diyas */}
          <Image
            src="/images/landing/kashi-night-ghats.webp"
            alt="Varanasi illuminated ghats at night with sacred floating diyas on the Ganges"
            width={1920}
            height={1080}
            sizes="100vw"
            className="w-full h-auto min-h-[560px] md:min-h-0 object-cover block"
            priority
          />

          {/* Translucent black window extending from the bottom up to the marked skyline */}
          {/* Continuous translucent surface with NO hard horizontal divider line */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 top-[19.6%] bg-black/40 backdrop-blur-[2px] pointer-events-none"
          />

          {/* Golden temple structure blended seamlessly in the bottom-right rectangular region — UNCHANGED */}
          <div className="absolute right-0 bottom-0 w-[55%] md:w-[48%] lg:w-[44%] max-w-[900px] pointer-events-none select-none z-10">
            <Image
              src="/images/landing/golden-temple-ghats.webp"
              alt="Golden temple skyline and ripples on the sacred Ganga"
              width={1024}
              height={364}
              className="w-full h-auto object-contain block mix-blend-screen drop-shadow-[0_0_20px_rgba(245,158,11,0.35)]"
            />
          </div>

          {/* Sacred Golden Trishul Kashiyatra Emblem in the marked left rectangular area — UNCHANGED */}
          <div className="absolute left-0 top-[19.6%] bottom-0 w-[38%] md:w-[35%] lg:w-[32%] flex items-center justify-center pointer-events-none select-none z-10 p-3 sm:p-5 md:p-6">
            <div className="relative w-full h-[58%] sm:h-[62%] md:h-[64%] flex items-center justify-center -translate-y-[20%]">
              {/* Subtle warm ambient diya glow blending into the night atmosphere */}
              <div
                aria-hidden="true"
                className="absolute w-44 sm:w-56 md:w-64 h-44 sm:h-56 md:h-64 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.24)_0%,transparent_70%)] blur-2xl pointer-events-none"
              />

              <Image
                src="/images/landing/kashiyatra-trishul-logo.webp"
                alt="Kashiyatra Golden Trishul Emblem"
                fill
                sizes="(max-width: 768px) 30vw, 22vw"
                className="object-contain mix-blend-screen drop-shadow-[0_0_20px_rgba(245,158,11,0.4)] drop-shadow-[0_8px_20px_rgba(0,0,0,0.6)] filter transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>
          </div>

          {/* Quote Line centered directly below KASHIYATRA logo — "You don't simply come to Varanasi. Somehow, Varanasi calls you." */}
          <div className="absolute left-[3%] sm:left-[4%] md:left-[17.5%] lg:left-[16%] md:-translate-x-1/2 ml-[1cm] -mt-[0.5cm] top-[73%] sm:top-[73.5%] md:top-[74%] w-[90%] sm:w-[70%] md:w-[48vw] lg:w-[38vw] max-w-[620px] flex items-center md:justify-center z-20 pointer-events-none select-none">
            <Image
              src="/images/landing/varanasi-calls-quote.webp"
              alt="You don't simply come to Varanasi. Somehow, Varanasi calls you."
              width={829}
              height={77}
              className="w-full h-auto object-contain block drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)] filter"
            />
          </div>

          {/* RED BOX 2 — EXPLORE KASHI */}
          <div className="absolute left-[43%] md:left-[42%] lg:left-[43%] top-[34%] sm:top-[36%] md:top-[38%] z-20 w-auto pointer-events-auto">
            <div className="flex flex-col items-start text-left">
              <h3 className="type-ui text-[17px] sm:text-lg font-medium tracking-[0.25em] uppercase text-[#FAF6F0]/90">
                EXPLORE KASHI
              </h3>
              <ul className="mt-3 sm:mt-3.5 space-y-2 sm:space-y-2.5">
                <li>
                  <Link
                    href="#steps-to-eternity"
                    className="text-[18px] sm:text-[19px] text-[#D6CEBE]/90 hover:text-[#FAF6F0] transition-colors duration-200 block"
                  >
                    Steps to Eternity
                  </Link>
                </li>
                <li>
                  <Link
                    href="#where-gods-reside"
                    className="text-[18px] sm:text-[19px] text-[#D6CEBE]/90 hover:text-[#FAF6F0] transition-colors duration-200 block"
                  >
                    Where Gods Reside
                  </Link>
                </li>
                <li>
                  <Link
                    href="#unfolded"
                    className="text-[18px] sm:text-[19px] text-[#D6CEBE]/90 hover:text-[#FAF6F0] transition-colors duration-200 block"
                  >
                    Kashi Unfolded
                  </Link>
                </li>
                <li>
                  <Link
                    href="#rasoi"
                    className="text-[18px] sm:text-[19px] text-[#D6CEBE]/90 hover:text-[#FAF6F0] transition-colors duration-200 block"
                  >
                    Kashi Rasoi
                  </Link>
                </li>
                <li>
                  <Link
                    href="#spirit-of-kashi-video"
                    className="text-[18px] sm:text-[19px] text-[#D6CEBE]/90 hover:text-[#FAF6F0] transition-colors duration-200 block"
                  >
                    The Spirit of Kashi
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* RED BOX 3 — THE EXPERIENCE */}
          <div className="absolute left-[64%] md:left-[63%] lg:left-[64%] top-[34%] sm:top-[36%] md:top-[38%] z-20 w-auto pointer-events-auto">
            <div className="flex flex-col items-start text-left">
              <h3 className="type-ui text-[17px] sm:text-lg font-medium tracking-[0.25em] uppercase text-[#FAF6F0]/90">
                EXPERIENCE
              </h3>
              <ul className="mt-3 sm:mt-3.5 space-y-2 sm:space-y-2.5">
                <li>
                  <button
                    type="button"
                    onClick={() => setIsAboutOpen(true)}
                    className="text-[18px] sm:text-[19px] text-[#D6CEBE]/90 hover:text-[#FAF6F0] transition-colors duration-200 block text-left cursor-pointer"
                  >
                    About KashiYatra
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => setIsVisionOpen(true)}
                    className="text-[18px] sm:text-[19px] text-[#D6CEBE]/90 hover:text-[#FAF6F0] transition-colors duration-200 block text-left cursor-pointer"
                  >
                    Our Vision
                  </button>
                </li>
                <li>
                  <a
                    href="mailto:saharshjais1423@gmail.com"
                    className="text-[18px] sm:text-[19px] text-[#D6CEBE]/90 hover:text-[#FAF6F0] transition-colors duration-200 block"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* RED BOX 4 — CONNECT (TEXT ONLY) — shifted right by 5x (375%) */}
          <div className="absolute left-[43%] md:left-[42%] lg:left-[42%] top-[34%] sm:top-[36%] md:top-[38%] z-20 w-auto pointer-events-auto translate-x-[425%]">
            <div className="flex flex-col items-start text-left">
              <h3 className="type-ui text-[17px] sm:text-lg font-medium tracking-[0.25em] uppercase text-[#FAF6F0]/90">
                CONNECT
              </h3>
              <ul className="mt-3 sm:mt-3.5 space-y-2 sm:space-y-2.5">
                <li>
                  <a
                    href="https://www.linkedin.com/in/saharsh-jaiswal-vns/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[18px] sm:text-[19px] text-[#D6CEBE]/90 hover:text-[#FAF6F0] transition-colors duration-200 block"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:saharshjais1423@gmail.com"
                    className="text-[18px] sm:text-[19px] text-[#D6CEBE]/90 hover:text-[#FAF6F0] transition-colors duration-200 block"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+919559522633"
                    className="text-[18px] sm:text-[19px] text-[#D6CEBE]/90 hover:text-[#FAF6F0] transition-colors duration-200 block tabular-nums"
                  >
                    +91-9559522633
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* RED BOX 5 — BOTTOM LEFT (© 2026 KASHIYATRA) */}
          <div className="absolute left-[5%] sm:left-[6%] md:left-[7%] lg:left-[8%] bottom-[4.5%] sm:bottom-[5%] z-20 pointer-events-auto">
            <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#FAF6F0] select-none">
              © 2026 KASHIYATRA
            </span>
          </div>

          {/* RED BOX 6 — BOTTOM MIDDLE (Privacy · Terms & Crafted By) */}
          <div className="absolute left-[42%] md:left-[41%] lg:left-[42%] bottom-[3.2%] sm:bottom-[3.8%] md:bottom-[4.2%] z-20 pointer-events-auto flex flex-col items-start gap-1 sm:gap-1.5">
            <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#FAF6F0]">
              <button
                onClick={() => setIsPrivacyOpen(true)}
                className="hover:text-[#FAF6F0]/80 transition-colors duration-200 cursor-pointer"
              >
                Privacy
              </button>
              <span>·</span>
              <button
                onClick={() => setIsTermsOpen(true)}
                className="hover:text-[#FAF6F0]/80 transition-colors duration-200 cursor-pointer"
              >
                Terms
              </button>
            </div>
            <p className="-ml-[2cm] text-[8.5px] sm:text-[9.5px] md:text-[10px] tracking-[0.14em] uppercase text-[#D6CEBE]/70 select-none whitespace-nowrap">
              Designed • Developed • Crafted by{" "}
              <a
                href="https://www.linkedin.com/in/saharsh-jaiswal-vns/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FAF6F0] hover:text-[#C8A55C] transition-colors duration-200"
              >
                Saharsh Jaiswal
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      <PrivacyPolicyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      {/* Terms of Use Modal */}
      <TermsOfUseModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />

      {/* About KashiYatra Modal */}
      <AboutKashiYatraModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />

      {/* Our Vision Modal */}
      <OurVisionModal
        isOpen={isVisionOpen}
        onClose={() => setIsVisionOpen(false)}
      />
    </>
  );
}
