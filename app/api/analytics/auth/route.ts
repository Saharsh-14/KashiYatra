import { NextRequest, NextResponse } from "next/server";
import {
  AUTH_COOKIE_NAME,
  COOKIE_MAX_AGE,
  checkRateLimit,
  createAuthToken,
  registerFailedAttempt,
  resetFailedAttempts,
  verifyAuthToken,
  verifyPassword,
} from "@/lib/analytics/auth";

export async function GET(req: NextRequest) {
  const token = req.cookies.get(AUTH_COOKIE_NAME)?.value;
  const authenticated = verifyAuthToken(token);
  return NextResponse.json({ authenticated });
}

export async function POST(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for");
  const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";

  // Check brute force protection
  const rateLimit = checkRateLimit(ip);
  if (!rateLimit.allowed) {
    return NextResponse.json(
      {
        error: `Too many failed attempts. Please wait ${rateLimit.waitSeconds} seconds before trying again.`,
      },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();
    const { password } = body;

    if (!password || !verifyPassword(password)) {
      registerFailedAttempt(ip);
      return NextResponse.json(
        { error: "Invalid passkey. Access denied." },
        { status: 401 }
      );
    }

    // Reset failed counter upon successful login
    resetFailedAttempts(ip);

    const token = createAuthToken();
    const response = NextResponse.json({
      success: true,
      message: "Authentication successful",
    });

    response.cookies.set(AUTH_COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: COOKIE_MAX_AGE,
    });

    return response;
  } catch {
    return NextResponse.json({ error: "Invalid request payload" }, { status: 400 });
  }
}

export async function DELETE() {
  const response = NextResponse.json({
    success: true,
    message: "Logged out successfully",
  });

  response.cookies.set(AUTH_COOKIE_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 0,
  });

  return response;
}
