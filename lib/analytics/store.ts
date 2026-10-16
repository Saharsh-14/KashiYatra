import fs from "fs";
import path from "path";
import crypto from "crypto";
import {
  AnalyticsEvent,
  AnalyticsSummary,
  DayMetric,
  DeviceMetric,
  DeviceType,
  PageMetric,
  SourceMetric,
  TrafficSource,
} from "@/types/analytics";
import { fetchVercelAnalytics, getTitleForPath, isVercelConfigured } from "./vercel";

// Resolve storage path: Use project data folder, fallback to /tmp if in read-only environment
function getStorageFilePath(): string {
  const primaryPath = path.join(process.cwd(), "data", "analytics-store.json");
  try {
    const dir = path.dirname(primaryPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    return primaryPath;
  } catch {
    const tmpDir = process.env.TMPDIR || process.env.TEMP || "/tmp";
    return path.join(tmpDir, "kashi-analytics-store.json");
  }
}

interface AnalyticsStoreData {
  version: number;
  events: AnalyticsEvent[];
  updatedAt: string;
}

let memoryCache: AnalyticsStoreData | null = null;
let isWriting = false;

function loadStore(): AnalyticsStoreData {
  if (memoryCache) {
    return memoryCache;
  }

  const filePath = getStorageFilePath();
  try {
    if (fs.existsSync(filePath)) {
      const raw = fs.readFileSync(filePath, "utf-8");
      memoryCache = JSON.parse(raw);
      return memoryCache!;
    }
  } catch {
    // Return empty store on read error
  }

  memoryCache = {
    version: 1,
    events: [],
    updatedAt: new Date().toISOString(),
  };
  return memoryCache;
}

async function persistStore(data: AnalyticsStoreData): Promise<void> {
  memoryCache = data;
  if (isWriting) return;
  isWriting = true;

  try {
    const filePath = getStorageFilePath();
    const tempPath = `${filePath}.${Date.now()}.tmp`;
    await fs.promises.writeFile(tempPath, JSON.stringify(data, null, 2), "utf-8");
    await fs.promises.rename(tempPath, filePath);
  } catch (err) {
    console.error("[Kashi Analytics] Failed to persist analytics store:", err);
  } finally {
    isWriting = false;
  }
}

/**
 * Anonymize visitor IP with a salt for privacy-compliant unique visitor tracking.
 */
export function hashVisitor(ip: string, userAgent: string, dateStr: string): string {
  const salt = process.env.ANALYTICS_SECRET_KEY || "kashi_salt_2026";
  return crypto
    .createHash("sha256")
    .update(`${ip}:${userAgent}:${salt}:${dateStr}`)
    .digest("hex")
    .slice(0, 16);
}

/**
 * Classify traffic source from referrer string.
 */
export function parseTrafficSource(referrer: string | null | undefined): {
  source: TrafficSource;
  host: string;
} {
  if (!referrer || referrer.trim() === "") {
    return { source: "Direct", host: "direct" };
  }

  try {
    const parsed = new URL(referrer);
    const host = parsed.hostname.toLowerCase();

    if (
      host.includes("thekashiyatra.in") ||
      host.includes("kashiyatra.in") ||
      host === "localhost" ||
      host === "127.0.0.1"
    ) {
      return { source: "Direct", host: "direct" };
    }
    if (host.includes("google.")) {
      return { source: "Google", host };
    }
    if (host.includes("instagram.") || host === "l.instagram.com") {
      return { source: "Instagram", host };
    }
    if (host.includes("twitter.") || host.includes("t.co") || host.includes("x.com")) {
      return { source: "X / Twitter", host };
    }
    if (host.includes("youtube.")) {
      return { source: "YouTube", host };
    }
    if (host.includes("linkedin.")) {
      return { source: "LinkedIn", host };
    }
    if (host.includes("facebook.") || host.includes("fb.com")) {
      return { source: "Facebook", host };
    }
    return { source: "Other", host };
  } catch {
    return { source: "Direct", host: "direct" };
  }
}

/**
 * Infer device type from user agent and screen metrics.
 */
export function parseDeviceType(
  userAgent: string,
  screenHint?: { width?: number; height?: number; touch?: boolean }
): DeviceType {
  const ua = (userAgent || "").toLowerCase();

  // 1. Tablet check
  if (
    ua.includes("ipad") ||
    (ua.includes("tablet") && !ua.includes("mobile")) ||
    (screenHint?.touch && (screenHint.width || 0) >= 768 && (screenHint.width || 0) <= 1024)
  ) {
    return "tablet";
  }

  // 2. Mobile phone check
  if (
    ua.includes("mobile") ||
    ua.includes("iphone") ||
    ua.includes("android") ||
    (screenHint?.touch && (screenHint.width || 0) < 768)
  ) {
    return "mobile";
  }

  // 3. Laptop vs Desktop PC check
  // Typical laptop screens: width <= 1536px, or 1080p with touch/battery, or screen height <= 900
  const width = screenHint?.width || 1440;
  const height = screenHint?.height || 900;

  if (width <= 1536 || height <= 960) {
    return "laptop";
  }

  return "desktop";
}

/**
 * Record a real page view event.
 */
export async function recordPageView(params: {
  path: string;
  ip: string;
  userAgent: string;
  referrer: string;
  sessionId: string;
  deviceHint?: DeviceType;
  screen?: { width?: number; height?: number; touch?: boolean };
}): Promise<AnalyticsEvent | null> {
  // Never track analytics dashboard or internal API requests to avoid skewing data
  if (
    params.path.startsWith("/saharsh") ||
    params.path.startsWith("/api") ||
    params.path.startsWith("/_next") ||
    params.path.includes("favicon")
  ) {
    return null;
  }

  const now = new Date();
  const dateStr = now.toISOString().slice(0, 10); // "YYYY-MM-DD"
  const visitorId = hashVisitor(params.ip, params.userAgent, dateStr);
  const { source, host } = parseTrafficSource(params.referrer);
  const deviceType =
    params.deviceHint || parseDeviceType(params.userAgent, params.screen);

  const event: AnalyticsEvent = {
    id: `ev_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    timestamp: now.getTime(),
    date: dateStr,
    path: params.path || "/",
    sessionId: params.sessionId || `sess_${visitorId}_${dateStr}`,
    visitorId,
    deviceType,
    source,
    referrerHost: host,
    userAgent: params.userAgent.slice(0, 120),
  };

  const store = loadStore();
  store.events.push(event);

  // Keep max 25,000 events in memory/disk to maintain lightning performance
  if (store.events.length > 25000) {
    store.events = store.events.slice(-25000);
  }

  store.updatedAt = now.toISOString();
  await persistStore(store);

  return event;
}

/**
 * Query analytics summary for a given time range.
 */
export async function getAnalyticsSummary(
  range: "24h" | "7d" | "30d" | "all" = "7d",
  forceEngine?: "first-party" | "vercel"
): Promise<AnalyticsSummary> {
  const vercelAvailable = isVercelConfigured();

  // If user specifically requested or Vercel is configured and not forced to first-party
  if (vercelAvailable && forceEngine !== "first-party") {
    const vercelData = await fetchVercelAnalytics(range);
    if (vercelData && vercelData.totalViews !== undefined) {
      return {
        range,
        totalViews: vercelData.totalViews || 0,
        uniqueVisitors: vercelData.uniqueVisitors || 0,
        totalSessions: vercelData.totalSessions || 0,
        viewsPerSession: vercelData.viewsPerSession || 1,
        devices: vercelData.devices!,
        trafficGraph: vercelData.trafficGraph || [],
        topPages: vercelData.topPages || [],
        trafficSources: vercelData.trafficSources || [],
        recentEvents: [],
        sourceEngine: "vercel",
        vercelConnected: true,
        lastUpdated: new Date().toLocaleTimeString(),
      };
    }
  }

  // Use First-Party Live Real-time Engine
  const store = loadStore();
  const now = Date.now();

  let cutoff = now - 7 * 24 * 60 * 60 * 1000;
  let dayCount = 7;
  if (range === "24h") {
    cutoff = now - 24 * 60 * 60 * 1000;
    dayCount = 1;
  } else if (range === "30d") {
    cutoff = now - 30 * 24 * 60 * 60 * 1000;
    dayCount = 30;
  } else if (range === "all") {
    cutoff = 0;
    dayCount = 30;
  }

  const filteredEvents = store.events.filter((e) => e.timestamp >= cutoff);

  const totalViews = filteredEvents.length;
  const uniqueVisitorsSet = new Set<string>();
  const totalSessionsSet = new Set<string>();

  const deviceCounts: Record<DeviceType, number> = {
    mobile: 0,
    laptop: 0,
    desktop: 0,
    tablet: 0,
  };

  const pathCounts: Record<string, { views: number; visitors: Set<string> }> = {};
  const sourceCounts: Record<TrafficSource, { count: number; visitors: Set<string> }> = {
    Google: { count: 0, visitors: new Set() },
    Instagram: { count: 0, visitors: new Set() },
    Direct: { count: 0, visitors: new Set() },
    "X / Twitter": { count: 0, visitors: new Set() },
    YouTube: { count: 0, visitors: new Set() },
    LinkedIn: { count: 0, visitors: new Set() },
    Facebook: { count: 0, visitors: new Set() },
    Other: { count: 0, visitors: new Set() },
  };

  const dayBuckets: Record<string, { views: number; visitors: Set<string>; sessions: Set<string> }> =
    {};

  // Initialize day buckets so chart is never missing days
  const today = new Date();
  for (let i = dayCount - 1; i >= 0; i--) {
    const d = new Date(today.getTime() - i * 24 * 60 * 60 * 1000);
    const key = d.toISOString().slice(0, 10);
    dayBuckets[key] = { views: 0, visitors: new Set(), sessions: new Set() };
  }

  for (const ev of filteredEvents) {
    uniqueVisitorsSet.add(ev.visitorId);
    totalSessionsSet.add(ev.sessionId);

    // Device count
    if (deviceCounts[ev.deviceType] !== undefined) {
      deviceCounts[ev.deviceType]++;
    } else {
      deviceCounts.mobile++;
    }

    // Path count
    if (!pathCounts[ev.path]) {
      pathCounts[ev.path] = { views: 0, visitors: new Set() };
    }
    pathCounts[ev.path].views++;
    pathCounts[ev.path].visitors.add(ev.visitorId);

    // Source count
    if (sourceCounts[ev.source]) {
      sourceCounts[ev.source].count++;
      sourceCounts[ev.source].visitors.add(ev.visitorId);
    } else {
      sourceCounts.Other.count++;
      sourceCounts.Other.visitors.add(ev.visitorId);
    }

    // Day bucket
    if (dayBuckets[ev.date]) {
      dayBuckets[ev.date].views++;
      dayBuckets[ev.date].visitors.add(ev.visitorId);
      dayBuckets[ev.date].sessions.add(ev.sessionId);
    }
  }

  const uniqueVisitors = uniqueVisitorsSet.size;
  const totalSessions = totalSessionsSet.size;
  const deviceTotal = totalViews || 1;

  const devices: Record<DeviceType, DeviceMetric> = {
    mobile: {
      type: "mobile",
      label: "Mobile Phones",
      count: deviceCounts.mobile,
      percentage: Math.round((deviceCounts.mobile / deviceTotal) * 100),
      color: "#b59a63", // Banaras Brass
    },
    laptop: {
      type: "laptop",
      label: "Laptops",
      count: deviceCounts.laptop,
      percentage: Math.round((deviceCounts.laptop / deviceTotal) * 100),
      color: "#985f49", // Burnt Terracotta
    },
    desktop: {
      type: "desktop",
      label: "Desktop PCs",
      count: deviceCounts.desktop,
      percentage: Math.round((deviceCounts.desktop / deviceTotal) * 100),
      color: "#aeb8b3", // Ganga Mist
    },
    tablet: {
      type: "tablet",
      label: "Tablets",
      count: deviceCounts.tablet,
      percentage: Math.round((deviceCounts.tablet / deviceTotal) * 100),
      color: "#cfc4b1", // Sand
    },
  };

  const trafficGraph: DayMetric[] = Object.keys(dayBuckets)
    .sort()
    .map((dateStr) => {
      const b = dayBuckets[dateStr];
      const d = new Date(dateStr);
      const displayDate = d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
      return {
        date: dateStr,
        displayDate,
        views: b.views,
        visitors: b.visitors.size,
        sessions: b.sessions.size,
      };
    });

  const topPages: PageMetric[] = Object.entries(pathCounts)
    .map(([p, data]) => ({
      path: p,
      title: getTitleForPath(p),
      views: data.views,
      visitors: data.visitors.size,
      percentage: totalViews > 0 ? Math.round((data.views / totalViews) * 100) : 0,
    }))
    .sort((a, b) => b.views - a.views)
    .slice(0, 10);

  const trafficSources: SourceMetric[] = (
    Object.entries(sourceCounts) as [TrafficSource, { count: number; visitors: Set<string> }][]
  )
    .map(([source, data]) => ({
      source,
      label: source,
      count: data.count,
      visitors: data.visitors.size,
      percentage: totalViews > 0 ? Math.round((data.count / totalViews) * 100) : 0,
    }))
    .sort((a, b) => b.count - a.count);

  const recentEvents = filteredEvents
    .slice(-15)
    .reverse()
    .map((e) => ({
      id: e.id,
      timestamp: e.timestamp,
      path: e.path,
      deviceType: e.deviceType,
      source: e.source,
    }));

  return {
    range,
    totalViews,
    uniqueVisitors,
    totalSessions,
    viewsPerSession: totalSessions > 0 ? Number((totalViews / totalSessions).toFixed(2)) : 0,
    devices,
    trafficGraph,
    topPages,
    trafficSources,
    recentEvents,
    sourceEngine: "first-party",
    vercelConnected: vercelAvailable,
    lastUpdated: new Date().toLocaleTimeString(),
  };
}
