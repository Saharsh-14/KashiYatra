import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_METADATA } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: SITE_METADATA.title,
    template: `%s | ${SITE_METADATA.title}`,
  },
  description: SITE_METADATA.description,
  metadataBase: new URL("https://kashiyatra.in"),
  openGraph: {
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    siteName: SITE_METADATA.title,
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#10100E",
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
    <html lang="en" className="dark">
      <body className="bg-palette-ink text-palette-ivory min-h-screen selection:bg-brand-accent selection:text-palette-ink antialiased">
        {children}
      </body>
    </html>
  );
}
