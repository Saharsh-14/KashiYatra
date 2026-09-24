"use client";

import React from "react";
import { Container, Section, Button, TextLink, IndexLabel, SectionLabel, Divider } from "@/components/ui";
import { Heading, Subheading, Text } from "@/components/typography";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  const paletteSwatches = [
    { name: "Kashi Ink", hex: "#10100E", varName: "--palette-ink", border: true },
    { name: "Deep Charcoal", hex: "#191816", varName: "--palette-charcoal", border: true },
    { name: "Warm Ivory", hex: "#E8E1D3", varName: "--palette-ivory", light: true },
    { name: "Soft Sand", hex: "#CFC4B1", varName: "--palette-sand", light: true },
    { name: "Banaras Brass", hex: "#B59A63", varName: "--palette-brass" },
    { name: "Ganga Mist", hex: "#AEB8B3", varName: "--palette-ganga-mist" },
    { name: "Burnt Terracotta", hex: "#985F49", varName: "--palette-terracotta" },
  ];

  return (
    <main className="min-h-screen bg-palette-ink text-palette-ivory py-16 md:py-24">
      <Container size="default">
        {/* Header Badge */}
        <header className="space-y-4 mb-16 pb-8 border-b border-palette-ivory/10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-accent animate-pulse" />
              <SectionLabel>Phase 0 & Phase 1 — Global Design System & Foundation</SectionLabel>
            </div>
            <IndexLabel number="00" label="Architecture Baseline" />
          </div>

          <h1 className="heading-hero text-palette-ivory tracking-tight">
            KASHI
          </h1>
          <p className="font-editorial text-xl md:text-2xl text-palette-sand/90 italic font-light max-w-2xl leading-relaxed">
            A City Beyond Time — System Architecture, Typography & Design Tokens
          </p>
        </header>

        {/* Section 1: Typography Hierarchy (TASK 1.2) */}
        <Section spacing="default" className="border-b border-palette-ivory/10">
          <div className="space-y-10">
            <div>
              <IndexLabel number="01" label="Typography System" className="mb-2" />
              <h2 className="font-display text-3xl font-bold tracking-tight text-palette-ivory uppercase">
                Approved Typography Hierarchy
              </h2>
              <p className="font-editorial text-sm italic text-palette-sand/70">
                Caesura Bold (Display/Authority) & Peristiva (Editorial/Culture)
              </p>
            </div>

            <div className="space-y-8 p-8 bg-palette-charcoal/60 rounded-sm border border-palette-ivory/10">
              {/* Display / Heading */}
              <div>
                <span className="label-ui text-brand-accent block mb-2">
                  Display / Heading (--font-display: Caesura Bold)
                </span>
                <Heading size="section">Steps to Eternity</Heading>
              </div>

              {/* Subheading */}
              <div>
                <span className="label-ui text-brand-accent block mb-2">
                  Subheading (--font-size-subheading)
                </span>
                <Subheading>The Ghats of Varanasi along the Sacred River</Subheading>
              </div>

              {/* Body */}
              <div>
                <span className="label-ui text-brand-accent block mb-2">
                  Editorial Body (--font-editorial: Peristiva)
                </span>
                <Text variant="lead">
                  &ldquo;Varanasi is older than history, older than tradition, older even than legend, and looks twice as old as all of them put together.&rdquo;
                </Text>
                <Text variant="body" className="mt-2">
                  Each stone stair descending into the Ganges holds memories of millennia of pilgrims, scholars, poets, and seekers. Here, sacred rites and ordinary life blend into a single eternal cadence.
                </Text>
              </div>

              {/* UI / Metadata */}
              <div>
                <span className="label-ui text-brand-accent block mb-2">
                  UI / Metadata (--font-size-ui)
                </span>
                <span className="label-ui text-palette-sand">
                  25.3176° N, 82.9739° E • SUBHEADINGS & METADATA CAPS
                </span>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 2: Design Tokens & Palette (TASK 1.1) */}
        <Section spacing="default" className="border-b border-palette-ivory/10">
          <div className="space-y-10">
            <div>
              <IndexLabel number="02" label="Color Foundations" className="mb-2" />
              <h2 className="font-display text-3xl font-bold tracking-tight text-palette-ivory uppercase">
                Curated Color Palette Tokens
              </h2>
              <p className="font-editorial text-sm italic text-palette-sand/70">
                Muted, deep, cinematic tones inspired by dawn mist, stone ghats, brass lamps, and river water.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
              {paletteSwatches.map((swatch) => (
                <div
                  key={swatch.varName}
                  className="flex flex-col p-3 bg-palette-charcoal/80 border border-palette-ivory/10 rounded-sm"
                >
                  <div
                    className={`w-full h-20 rounded-sm mb-3 ${
                      swatch.border ? "border border-palette-ivory/20" : ""
                    }`}
                    style={{ backgroundColor: swatch.hex }}
                  />
                  <span className="font-display text-xs font-semibold text-palette-ivory">
                    {swatch.name}
                  </span>
                  <span className="font-mono text-[10px] text-brand-accent mt-0.5">
                    {swatch.hex}
                  </span>
                  <span className="font-mono text-[9px] text-palette-sand/50 truncate">
                    {swatch.varName}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Section 3: Global UI Primitives (TASK 1.4) */}
        <Section spacing="default" className="border-b border-palette-ivory/10">
          <div className="space-y-10">
            <div>
              <IndexLabel number="03" label="UI Primitives" className="mb-2" />
              <h2 className="font-display text-3xl font-bold tracking-tight text-palette-ivory uppercase">
                Reusable Primitive Components
              </h2>
              <p className="font-editorial text-sm italic text-palette-sand/70">
                Accessible, token-driven UI primitives (Button, TextLink, IndexLabel, SectionLabel, Divider).
              </p>
            </div>

            <div className="p-8 bg-palette-charcoal/60 rounded-sm border border-palette-ivory/10 space-y-8">
              {/* Buttons */}
              <div className="space-y-4">
                <span className="label-ui text-brand-accent block">Button Variants</span>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button variant="primary" size="md">
                    <span>Primary Brass</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-2" />
                  </Button>
                  <Button variant="secondary" size="md">
                    Secondary Charcoal
                  </Button>
                  <Button variant="outline" size="md">
                    Outline Accent
                  </Button>
                  <Button variant="ghost" size="md">
                    Ghost Link
                  </Button>
                </div>
              </div>

              <Divider variant="subtle" />

              {/* Links & Labels */}
              <div className="space-y-4">
                <span className="label-ui text-brand-accent block">Links & Badges</span>
                <div className="flex flex-wrap gap-8 items-center">
                  <TextLink href="/" variant="brass">
                    Explore Ghats →
                  </TextLink>
                  <TextLink href="/" variant="sand">
                    Read Mythology →
                  </TextLink>
                  <IndexLabel number="07" label="Chet Singh" />
                  <SectionLabel>Live Cultural Event</SectionLabel>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Section 4: Motion System & Architecture (TASK 1.5) */}
        <Section spacing="default">
          <div className="space-y-10">
            <div>
              <IndexLabel number="04" label="Motion System" className="mb-2" />
              <h2 className="font-display text-3xl font-bold tracking-tight text-palette-ivory uppercase">
                Motion Curves & Reduced-Motion Guard
              </h2>
              <p className="font-editorial text-sm italic text-palette-sand/70">
                Standardized timing tokens and strict adherence to prefers-reduced-motion.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-palette-charcoal/80 border border-palette-ivory/10 rounded-sm space-y-3">
                <div className="flex items-center gap-2 text-brand-accent font-display text-xs tracking-wider uppercase">
                  <Sparkles className="w-4 h-4" />
                  <span>Cinematic Easing Tokens</span>
                </div>
                <p className="font-editorial text-sm text-palette-sand leading-relaxed">
                  --transition-fast: 180ms<br />
                  --transition-normal: 400ms<br />
                  --transition-slow: 800ms<br />
                  --transition-cinematic: 1200ms
                </p>
              </div>

              <div className="p-6 bg-palette-charcoal/80 border border-palette-ivory/10 rounded-sm space-y-3">
                <div className="flex items-center gap-2 text-brand-accent font-display text-xs tracking-wider uppercase">
                  <Sparkles className="w-4 h-4" />
                  <span>Accessibility Safeguards</span>
                </div>
                <p className="font-editorial text-sm text-palette-sand leading-relaxed">
                  All animations automatically collapse to 0ms when <code>prefers-reduced-motion: reduce</code> is signaled by the operating system.
                </p>
              </div>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="pt-12 mt-12 border-t border-palette-ivory/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs font-display text-palette-sand/50 tracking-widest uppercase">
          <span>KASHI — Project Foundation (Phase 0 & 1 Complete)</span>
          <span className="font-editorial italic capitalize">Ready for Phase 2: Landing Page Foundation</span>
        </footer>
      </Container>
    </main>
  );
}
