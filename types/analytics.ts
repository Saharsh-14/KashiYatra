export type DeviceType = "mobile" | "laptop" | "desktop" | "tablet";

export type TrafficSource =
  | "Google"
  | "Instagram"
  | "Direct"
  | "X / Twitter"
  | "YouTube"
  | "LinkedIn"
  | "Facebook"
  | "Other";

export interface AnalyticsEvent {
  id: string;
  timestamp: number; // Unix epoch ms
  date: string; // YYYY-MM-DD
  path: string; // e.g. "/", "/ghats", "/rasoi"
  sessionId: string;
  visitorId: string; // SHA-256 hash of IP + daily salt
  deviceType: DeviceType;
  source: TrafficSource;
  referrerHost: string;
  userAgent?: string;
}

export interface DeviceMetric {
  type: DeviceType;
  label: string;
  count: number;
  percentage: number;
  color: string;
}

export interface DayMetric {
  date: string; // "YYYY-MM-DD"
  displayDate: string; // "Oct 12"
  views: number;
  visitors: number;
  sessions: number;
}

export interface PageMetric {
  path: string;
  title: string;
  views: number;
  visitors: number;
  percentage: number;
}

export interface SourceMetric {
  source: TrafficSource;
  label: string;
  count: number;
  visitors?: number;
  percentage: number;
}


export interface AnalyticsSummary {
  range: "24h" | "7d" | "30d" | "all";
  totalViews: number;
  uniqueVisitors: number;
  totalSessions: number;
  viewsPerSession: number;
  devices: Record<DeviceType, DeviceMetric>;
  trafficGraph: DayMetric[];
  topPages: PageMetric[];
  trafficSources: SourceMetric[];
  recentEvents: Array<{
    id: string;
    timestamp: number;
    path: string;
    deviceType: DeviceType;
    source: TrafficSource;
  }>;
  sourceEngine: "first-party" | "vercel" | "hybrid";
  vercelConnected: boolean;
  lastUpdated: string;
}
