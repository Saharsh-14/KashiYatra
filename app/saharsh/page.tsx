import { Metadata } from "next";
import { isServerAuthenticated } from "@/lib/analytics/auth";
import { ClientSaharshPage } from "./ClientSaharshPage";

export const metadata: Metadata = {
  title: "Private Analytics — Saharsh",
  description: "Private visitor analytics dashboard for KashiYatra.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export const dynamic = "force-dynamic";

export default async function SaharshAnalyticsPage() {
  const authenticated = await isServerAuthenticated();

  return <ClientSaharshPage initialAuthenticated={authenticated} />;
}
