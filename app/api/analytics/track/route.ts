import { NextRequest, NextResponse } from "next/server";
import { recordPageView } from "@/lib/analytics/store";
import { DeviceType } from "@/types/analytics";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));
    const path = typeof body.path === "string" ? body.path : "/";

    // Extract real IP behind reverse proxies/Vercel/Cloudflare
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : req.headers.get("x-real-ip") || "127.0.0.1";
    const userAgent = req.headers.get("user-agent") || "unknown";
    const referrer = typeof body.referrer === "string" ? body.referrer : req.headers.get("referer") || "";

    // Session identifier from cookie or generated
    let sessionId = req.cookies.get("ky_session_id")?.value;
    let isNewSession = false;
    if (!sessionId) {
      sessionId = `sess_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
      isNewSession = true;
    }

    const deviceHint = body.deviceHint as DeviceType | undefined;
    const screen = body.screen as { width?: number; height?: number; touch?: boolean } | undefined;

    await recordPageView({
      path,
      ip,
      userAgent,
      referrer,
      sessionId,
      deviceHint,
      screen,
    });

    const response = NextResponse.json({ success: true });

    // Set or refresh session cookie with 30-minute inactivity timeout
    if (isNewSession || !req.cookies.get("ky_session_id")) {
      response.cookies.set("ky_session_id", sessionId, {
        path: "/",
        maxAge: 30 * 60, // 30 minutes
        sameSite: "lax",
        httpOnly: true,
      });
    }

    return response;
  } catch (error) {
    console.error("[Kashi Analytics] Tracking error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
