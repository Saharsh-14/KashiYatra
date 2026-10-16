import { NextRequest, NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, verifyAuthToken } from "@/lib/analytics/auth";
import { getAnalyticsSummary } from "@/lib/analytics/store";

export async function GET(req: NextRequest) {
  // Enforce server-side authentication
  const token = req.cookies.get(AUTH_COOKIE_NAME)?.value;
  if (!verifyAuthToken(token)) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const rangeParam = searchParams.get("range") || "7d";
  const engineParam = searchParams.get("engine") as "first-party" | "vercel" | undefined;

  let range: "24h" | "7d" | "30d" | "all" = "7d";
  if (rangeParam === "24h" || rangeParam === "30d" || rangeParam === "all") {
    range = rangeParam;
  }

  try {
    const summary = await getAnalyticsSummary(range, engineParam);
    return NextResponse.json(summary);
  } catch (err) {
    console.error("[Kashi Analytics] Error generating summary:", err);
    return NextResponse.json(
      { error: "Failed to retrieve analytics data" },
      { status: 500 }
    );
  }
}
