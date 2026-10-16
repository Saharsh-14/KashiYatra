"use client";

import { useState } from "react";
import { AnalyticsLogin } from "@/components/analytics/AnalyticsLogin";
import { AnalyticsDashboard } from "@/components/analytics/AnalyticsDashboard";

interface ClientSaharshPageProps {
  initialAuthenticated: boolean;
}

export function ClientSaharshPage({ initialAuthenticated }: ClientSaharshPageProps) {
  const [authenticated, setAuthenticated] = useState(initialAuthenticated);

  const handleLogout = async () => {
    try {
      await fetch("/api/analytics/auth", { method: "DELETE" });
    } catch {
      // Ignore network errors on logout
    }
    setAuthenticated(false);
  };

  if (!authenticated) {
    return <AnalyticsLogin onSuccess={() => setAuthenticated(true)} />;
  }

  return <AnalyticsDashboard onLogout={handleLogout} />;
}
