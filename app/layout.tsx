import type { Metadata, Viewport } from "next";
import { SkipLink } from "@/components/navigation";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { SITE_METADATA } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: SITE_METADATA.title,
    /* Every chapter page sets its own title and inherits the site name. */
    template: `%s | ${SITE_METADATA.name}`,
  },
  description: SITE_METADATA.description,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://kashiyatra.in",
  ),
  openGraph: {
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    siteName: SITE_METADATA.title,
    locale: SITE_METADATA.locale,
    type: "website",
  },
};

export const viewport: Viewport = {
  /* One-off: the browser chrome colour is read by the UA before any CSS custom
     property is available, so it cannot reference `--palette-ink`. Kept in sync
     with that token by hand — it is the only place this value is repeated. */
  themeColor: "#10100e",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background-primary text-content-primary min-h-svh">
        <SkipLink />
        {/* Mounted at the root so every chapter inherits the same scroll feel
            (architecture.md §2.3 — the shared experience layer). */}
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
