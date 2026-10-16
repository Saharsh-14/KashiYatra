import { AnalyticsSummary, DayMetric, DeviceMetric, PageMetric, SourceMetric } from "@/types/analytics";

interface VercelAggregateRow {
  date?: string;
  hour?: string;
  pageviews?: number;
  visitors?: number;
  deviceType?: string;
  requestPath?: string;
  referrerHostname?: string;
  [key: string]: unknown;
}

interface VercelAggregateResponse {
  data?: VercelAggregateRow[];
  error?: { message: string };
}

export function isVercelConfigured(): boolean {
  const token = process.env.VERCEL_TOKEN || process.env.VERCEL_API_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID || process.env.PROJECT_ID_IN_VERCEL;
  return Boolean(token && projectId);
}

/**
 * Fetch real aggregate data from Vercel Web Analytics REST API if configured.
 */
export async function fetchVercelAnalytics(
  range: "24h" | "7d" | "30d" | "all"
): Promise<Partial<AnalyticsSummary> | null> {
  const token = process.env.VERCEL_TOKEN || process.env.VERCEL_API_TOKEN;
  const projectId = process.env.VERCEL_PROJECT_ID || process.env.PROJECT_ID_IN_VERCEL;
  const teamId = process.env.VERCEL_TEAM_ID;

  if (!token || !projectId) {
    return null;
  }

  const now = new Date();
  let days = 7;
  if (range === "24h") days = 1;
  else if (range === "30d") days = 30;
  else if (range === "all") days = 90;

  const since = new Date(now.getTime() - days * 24 * 60 * 60 * 1000).toISOString();
  const until = now.toISOString();

  const baseUrl = "https://api.vercel.com/v1/query/web-analytics/visits/aggregate";

  async function queryVercel(by: string[]): Promise<VercelAggregateRow[]> {
    try {
      const url = new URL(baseUrl);
      url.searchParams.set("projectId", projectId!);
      if (teamId) url.searchParams.set("teamId", teamId);
      url.searchParams.set("since", since);
      url.searchParams.set("until", until);
      for (const b of by) {
        url.searchParams.append("by[]", b);
      }

      const res = await fetch(url.toString(), {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        next: { revalidate: 60 },
      });

      if (!res.ok) {
        return [];
      }

      const json = (await res.json()) as VercelAggregateResponse;
      return json.data || [];
    } catch {
      return [];
    }
  }

  try {
    const [timeRows, deviceRows, pathRows, referrerRows] = await Promise.all([
      queryVercel(["day"]),
      queryVercel(["deviceType"]),
      queryVercel(["requestPath"]),
      queryVercel(["referrerHostname"]),
    ]);

    let totalViews = 0;
    let uniqueVisitors = 0;

    const trafficGraph: DayMetric[] = timeRows.map((r) => {
      const v = Number(r.pageviews || 0);
      const u = Number(r.visitors || 0);
      totalViews += v;
      uniqueVisitors += u;
      const d = r.date || "";
      const displayDate = d
        ? new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric" })
        : "";
      return {
        date: d,
        displayDate,
        views: v,
        visitors: u,
        sessions: Math.max(u, Math.round(v * 0.75)),
      };
    });

    // Map Vercel device types to our 4 categories: mobile, laptop, desktop, tablet
    let mobileCount = 0;
    let laptopCount = 0;
    let desktopCount = 0;
    let tabletCount = 0;

    for (const r of deviceRows) {
      const dt = (r.deviceType || "").toLowerCase();
      const count = Number(r.pageviews || r.visitors || 0);
      if (dt.includes("mobile") || dt.includes("phone")) {
        mobileCount += count;
      } else if (dt.includes("tablet") || dt.includes("ipad")) {
        tabletCount += count;
      } else if (dt.includes("laptop")) {
        laptopCount += count;
      } else {
        desktopCount += count;
      }
    }

    const deviceTotal = mobileCount + laptopCount + desktopCount + tabletCount || 1;
    const devices: Record<string, DeviceMetric> = {
      mobile: {
        type: "mobile",
        label: "Mobile Phones",
        count: mobileCount,
        percentage: Math.round((mobileCount / deviceTotal) * 100),
        color: "#b59a63",
      },
      laptop: {
        type: "laptop",
        label: "Laptops",
        count: laptopCount,
        percentage: Math.round((laptopCount / deviceTotal) * 100),
        color: "#985f49",
      },
      desktop: {
        type: "desktop",
        label: "Desktop PCs",
        count: desktopCount,
        percentage: Math.round((desktopCount / deviceTotal) * 100),
        color: "#aeb8b3",
      },
      tablet: {
        type: "tablet",
        label: "Tablets",
        count: tabletCount,
        percentage: Math.round((tabletCount / deviceTotal) * 100),
        color: "#cfc4b1",
      },
    };

    const topPages: PageMetric[] = pathRows.slice(0, 10).map((r) => {
      const p = r.requestPath || "/";
      const v = Number(r.pageviews || 0);
      const u = Number(r.visitors || 0);
      return {
        path: p,
        title: getTitleForPath(p),
        views: v,
        visitors: u,
        percentage: totalViews > 0 ? Math.round((v / totalViews) * 100) : 0,
      };
    });

    const trafficSources: SourceMetric[] = referrerRows.map((r) => {
      const host = (r.referrerHostname || "").toLowerCase();
      let sourceName: SourceMetric["source"] = "Other";
      if (!host || host === "direct" || host.includes("kashiyatra")) sourceName = "Direct";
      else if (host.includes("google")) sourceName = "Google";
      else if (host.includes("instagram")) sourceName = "Instagram";
      else if (host.includes("twitter") || host.includes("t.co") || host.includes("x.com")) sourceName = "X / Twitter";
      else if (host.includes("youtube")) sourceName = "YouTube";
      else if (host.includes("linkedin")) sourceName = "LinkedIn";
      else if (host.includes("facebook")) sourceName = "Facebook";

      const count = Number(r.pageviews || r.visitors || 0);
      return {
        source: sourceName,
        label: sourceName === "Other" && host ? host : sourceName,
        count,
        visitors: count,
        percentage: totalViews > 0 ? Math.round((count / totalViews) * 100) : 0,
      };
    });

    return {
      totalViews,
      uniqueVisitors,
      totalSessions: Math.max(uniqueVisitors, Math.round(totalViews * 0.75)),
      viewsPerSession: uniqueVisitors > 0 ? Number((totalViews / uniqueVisitors).toFixed(2)) : 1,
      devices: devices as AnalyticsSummary["devices"],
      trafficGraph,
      topPages,
      trafficSources,
      sourceEngine: "vercel",
      vercelConnected: true,
    };
  } catch {
    return null;
  }
}

export function getTitleForPath(path: string): string {
  const clean = path.split("?")[0].replace(/\/$/, "") || "/";
  const titles: Record<string, string> = {
    "/": "KASHI — A City Beyond Time",
    "/enter": "Gateway to Kashi",
    "/kashi": "The Living City",
    "/ghats": "The Sacred River Ghats",
    "/temples": "Where Gods Reside",
    "/where-gods-reside": "Where Gods Reside",
    "/unfolded": "Kashi Unfolded Archival",
    "/kashi-unfolded": "Kashi Unfolded Archival",
    "/rasoi": "Kashi Rasoi — Sacred Kitchen",
    "/kashi-rasoi": "Kashi Rasoi — Sacred Kitchen",
    "/spirit": "Spirit of Kashi",
    "/foundations": "Design Foundations",
  };

  if (titles[clean]) return titles[clean];
  if (clean.startsWith("/ghats/")) return `Ghat • ${clean.replace("/ghats/", "")}`;
  if (clean.startsWith("/temples/")) return `Temple • ${clean.replace("/temples/", "")}`;
  if (clean.startsWith("/rasoi/") || clean.startsWith("/kashi-rasoi/"))
    return `Rasoi • ${clean.split("/").pop()}`;
  return clean;
}
