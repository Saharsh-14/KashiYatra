"use client";

import { useState, useEffect, useCallback } from "react";
import { AnalyticsSummary } from "@/types/analytics";
import { DeviceDonutChart } from "./DeviceDonutChart";
import { TrafficGraph } from "./TrafficGraph";
import { TopPagesList } from "./TopPagesList";
import { TrafficSourcesList } from "./TrafficSourcesList";
import {
  Eye,
  Users,
  Activity,
  Layers,
  RefreshCw,
  LogOut,
  ShieldCheck,
  Radio,
  CheckCircle2,
  Clock,
  Sparkles,
  Zap,
} from "lucide-react";

interface AnalyticsDashboardProps {
  onLogout: () => void;
}

export function AnalyticsDashboard({ onLogout }: AnalyticsDashboardProps) {
  const [data, setData] = useState<AnalyticsSummary | null>(null);
  const [range, setRange] = useState<"24h" | "7d" | "30d" | "all">("7d");
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [testSent, setTestSent] = useState(false);

  const fetchData = useCallback(
    async (selectedRange: "24h" | "7d" | "30d" | "all" = range, isRefresh = false) => {
      if (isRefresh) setRefreshing(true);
      else setLoading(true);

      try {
        const res = await fetch(`/api/analytics/data?range=${selectedRange}`);
        if (res.status === 401) {
          onLogout();
          return;
        }
        if (res.ok) {
          const json = await res.json();
          setData(json);
        }
      } catch (err) {
        console.error("Failed to fetch analytics:", err);
      } finally {
        setLoading(false);
        setRefreshing(false);
      }
    },
    [range, onLogout]
  );

  useEffect(() => {
    fetchData(range);
  }, [range, fetchData]);

  const handleTestPing = async () => {
    setTestSent(true);
    try {
      await fetch("/api/analytics/track", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          path: "/",
          referrer: "https://www.google.com/search?q=kashiyatra",
          deviceHint: "laptop",
        }),
      });
      // Refresh dashboard after 300ms
      setTimeout(() => {
        fetchData(range, true);
        setTimeout(() => setTestSent(false), 2500);
      }, 300);
    } catch {
      setTestSent(false);
    }
  };

  if (loading && !data) {
    return (
      <div className="min-h-screen bg-palette-ink flex flex-col items-center justify-center p-6 text-center">
        <div className="w-12 h-12 rounded-full border-2 border-palette-brass border-t-transparent animate-spin mb-4" />
        <h2 className="text-palette-ivory font-editorial text-lg tracking-wide">
          Decrypting Analytics Stream...
        </h2>
        <p className="text-xs text-content-muted mt-1 font-ui">
          Fetching real-time metrics for thekashiyatra.in
        </p>
      </div>
    );
  }

  const summary = data;

  return (
    <div className="min-h-screen bg-palette-ink text-content-primary selection:bg-palette-brass selection:text-palette-ink">
      {/* Top Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-gradient-to-b from-palette-brass/5 to-transparent pointer-events-none z-0" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Navigation / Header Bar */}
        <header className="flex flex-col md:flex-row md:items-center justify-between pb-8 mb-8 border-b border-edge/80 gap-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-editorial text-xl sm:text-2xl text-palette-ivory tracking-wide">
                KASHI YATRA
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono tracking-widest uppercase bg-palette-brass/10 border border-palette-brass/30 text-palette-brass font-medium">
                Confidential
              </span>
            </div>
            <div className="flex items-center gap-2 mt-1 text-xs text-content-muted font-ui">
              <span>Owner Dashboard for Saharsh</span>
              <span>•</span>
              <span className="font-mono text-content-secondary">
                {typeof window !== "undefined" && window.location.hostname !== "localhost"
                  ? window.location.hostname
                  : "thekashiyatra.in"}
              </span>
            </div>
          </div>

          {/* Action buttons & Live indicator */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Live Indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-elevated/70 border border-edge text-xs font-ui">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-content-secondary font-medium">Live Feed</span>
              {summary?.sourceEngine === "vercel" ? (
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-black/40 text-palette-ivory border border-edge">
                  Vercel API
                </span>
              ) : (
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-black/40 text-palette-brass border border-palette-brass/30">
                  Native Engine
                </span>
              )}
            </div>

            {/* Test Ping Trigger */}
            <button
              onClick={handleTestPing}
              disabled={testSent}
              className="px-3 py-1.5 rounded-lg bg-surface/80 hover:bg-surface-elevated border border-edge hover:border-palette-brass/40 text-xs font-ui text-content-secondary hover:text-palette-ivory transition-all duration-200 flex items-center gap-1.5"
              title="Send a sample page view event to test live tracking"
            >
              {testSent ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Ping Recorded!</span>
                </>
              ) : (
                <>
                  <Zap className="w-3.5 h-3.5 text-palette-brass" />
                  <span>Verify Tracker</span>
                </>
              )}
            </button>

            {/* Refresh Button */}
            <button
              onClick={() => fetchData(range, true)}
              disabled={refreshing}
              className="p-2 rounded-lg bg-surface/80 hover:bg-surface-elevated border border-edge hover:border-palette-brass/40 text-content-secondary hover:text-palette-ivory transition-all duration-200"
              title="Refresh Analytics"
            >
              <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin text-palette-brass" : ""}`} />
            </button>

            {/* Logout Button */}
            <button
              onClick={onLogout}
              className="px-3.5 py-1.5 rounded-lg bg-red-950/20 hover:bg-red-950/40 border border-red-500/20 hover:border-red-500/40 text-xs font-ui text-red-300 hover:text-red-200 transition-all duration-200 flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Exit</span>
            </button>
          </div>
        </header>

        {/* Time Range Filter Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs text-content-muted font-ui">Time Range:</span>
            <div className="inline-flex p-1 bg-surface-elevated/80 rounded-xl border border-edge">
              {(
                [
                  { key: "24h", label: "24 Hours" },
                  { key: "7d", label: "Last 7 Days" },
                  { key: "30d", label: "Last 30 Days" },
                  { key: "all", label: "All Time" },
                ] as const
              ).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setRange(tab.key)}
                  className={`px-3 py-1 text-xs rounded-lg font-ui transition-all duration-200 ${
                    range === tab.key
                      ? "bg-palette-brass text-palette-ink font-semibold shadow-sm"
                      : "text-content-secondary hover:text-content-primary"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-content-muted font-mono">
            <Clock className="w-3 h-3" />
            <span>Updated at {summary?.lastUpdated || "just now"}</span>
          </div>
        </div>

        {/* 1. KEY METRICS ROW (4 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Card 1: Total Page Views */}
          <div className="p-5 rounded-2xl bg-surface/50 border border-edge/80 hover:border-palette-brass/40 transition-all duration-300 relative overflow-hidden group shadow-soft">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-ui text-content-muted uppercase tracking-wider font-medium">
                Total Page Views
              </span>
              <div className="w-8 h-8 rounded-lg bg-palette-brass/10 text-palette-brass border border-palette-brass/20 flex items-center justify-center">
                <Eye className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-display font-medium text-palette-ivory mb-1">
              {(summary?.totalViews ?? 0).toLocaleString()}
            </div>
            <p className="text-[11px] text-content-secondary font-ui">
              Total times KashiYatra was viewed
            </p>
          </div>

          {/* Card 2: Unique Visitors */}
          <div className="p-5 rounded-2xl bg-surface/50 border border-edge/80 hover:border-palette-brass/40 transition-all duration-300 relative overflow-hidden group shadow-soft">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-ui text-content-muted uppercase tracking-wider font-medium">
                Unique Visitors
              </span>
              <div className="w-8 h-8 rounded-lg bg-palette-ganga-mist/10 text-palette-ganga-mist border border-palette-ganga-mist/20 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-display font-medium text-palette-ivory mb-1">
              {(summary?.uniqueVisitors ?? 0).toLocaleString()}
            </div>
            <p className="text-[11px] text-content-secondary font-ui">
              Distinct individual visitors
            </p>
          </div>

          {/* Card 3: Total Sessions */}
          <div className="p-5 rounded-2xl bg-surface/50 border border-edge/80 hover:border-palette-brass/40 transition-all duration-300 relative overflow-hidden group shadow-soft">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-ui text-content-muted uppercase tracking-wider font-medium">
                Total Sessions
              </span>
              <div className="w-8 h-8 rounded-lg bg-palette-terracotta/10 text-palette-terracotta border border-palette-terracotta/20 flex items-center justify-center">
                <Activity className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-display font-medium text-palette-ivory mb-1">
              {(summary?.totalSessions ?? 0).toLocaleString()}
            </div>
            <p className="text-[11px] text-content-secondary font-ui">
              Unique browsing sessions
            </p>
          </div>

          {/* Card 4: Views Per Session */}
          <div className="p-5 rounded-2xl bg-surface/50 border border-edge/80 hover:border-palette-brass/40 transition-all duration-300 relative overflow-hidden group shadow-soft">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-ui text-content-muted uppercase tracking-wider font-medium">
                Avg. Engagement
              </span>
              <div className="w-8 h-8 rounded-lg bg-palette-sand/10 text-palette-sand border border-palette-sand/20 flex items-center justify-center">
                <Layers className="w-4 h-4" />
              </div>
            </div>
            <div className="text-3xl font-display font-medium text-palette-ivory mb-1">
              {summary?.viewsPerSession ?? 0}
            </div>
            <p className="text-[11px] text-content-secondary font-ui">
              Average pages explored per session
            </p>
          </div>
        </div>

        {/* 2. TRAFFIC GRAPH SECTION */}
        <div className="p-6 rounded-2xl bg-palette-charcoal/80 border border-edge/80 shadow-deep mb-8">
          <TrafficGraph
            data={summary?.trafficGraph || []}
            range={range}
            onRangeChange={(r) => setRange(r)}
          />
        </div>

        {/* 3. DEVICE ANALYTICS (Donut Chart) & TRAFFIC SOURCES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Device Analytics Box */}
          <div className="p-6 rounded-2xl bg-palette-charcoal/80 border border-edge/80 shadow-deep flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-base font-editorial text-palette-ivory">
                    Device Analytics
                  </h3>
                  <p className="text-xs text-content-muted mt-0.5 font-ui">
                    Visitor distribution across mobile, laptops, PCs & tablets
                  </p>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-surface border border-edge text-palette-brass">
                  Donut Chart
                </span>
              </div>

              {summary?.devices && (
                <DeviceDonutChart
                  devices={summary.devices}
                  totalViews={summary.totalViews}
                />
              )}
            </div>
          </div>

          {/* Traffic Sources Box */}
          <div className="p-6 rounded-2xl bg-palette-charcoal/80 border border-edge/80 shadow-deep flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-base font-editorial text-palette-ivory">
                    Traffic Sources
                  </h3>
                  <p className="text-xs text-content-muted mt-0.5 font-ui">
                    Origin of visitors: Google, Instagram, Direct & referrals
                  </p>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-surface border border-edge text-content-secondary">
                  Referrers
                </span>
              </div>

              <TrafficSourcesList
                sources={summary?.trafficSources || []}
                totalViews={summary?.totalViews || 0}
              />
            </div>
          </div>
        </div>

        {/* 4. TOP PAGES & RECENT REAL-TIME LOGS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Top Pages (Takes 2 Columns on Desktop) */}
          <div className="lg:col-span-2 p-6 rounded-2xl bg-palette-charcoal/80 border border-edge/80 shadow-deep">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-base font-editorial text-palette-ivory">
                  Top Visited Pages
                </h3>
                <p className="text-xs text-content-muted mt-0.5 font-ui">
                  Most engaged chapters and portals of KashiYatra
                </p>
              </div>
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-surface border border-edge text-content-secondary">
                {(summary?.topPages || []).length} Recorded
              </span>
            </div>

            <TopPagesList
              pages={summary?.topPages || []}
              totalViews={summary?.totalViews || 0}
            />
          </div>

          {/* Real-Time Live Feed Drawer / Status */}
          <div className="p-6 rounded-2xl bg-palette-charcoal/80 border border-edge/80 shadow-deep flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Radio className="w-4 h-4 text-emerald-400 animate-pulse" />
                  <h3 className="text-base font-editorial text-palette-ivory">
                    Live Stream
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-content-muted">
                  Latest Events
                </span>
              </div>
              <p className="text-xs text-content-muted mb-4 font-ui">
                Incoming real-time visitor navigations
              </p>

              {summary?.recentEvents && summary.recentEvents.length > 0 ? (
                <div className="space-y-2.5 max-h-[360px] overflow-y-auto pr-1">
                  {summary.recentEvents.map((ev) => (
                    <div
                      key={ev.id}
                      className="p-2.5 rounded-lg bg-surface/50 border border-edge/50 text-xs font-ui"
                    >
                      <div className="flex items-center justify-between text-content-muted text-[10px] mb-1">
                        <span className="font-mono text-palette-brass font-medium capitalize">
                          {ev.deviceType} • {ev.source}
                        </span>
                        <span>
                          {new Date(ev.timestamp).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                            second: "2-digit",
                          })}
                        </span>
                      </div>
                      <div className="font-mono text-palette-ivory text-[11px] truncate">
                        {ev.path}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-12 text-center text-content-muted text-xs font-ui">
                  <Sparkles className="w-6 h-6 mx-auto mb-2 text-palette-brass/60" />
                  <span>Waiting for new visits...</span>
                  <div className="mt-2 text-[10px] text-content-secondary">
                    Click &quot;Verify Tracker&quot; above to simulate a test event.
                  </div>
                </div>
              )}
            </div>

            {/* Privacy & Security Note */}
            <div className="mt-6 pt-4 border-t border-edge/60 flex items-center gap-2 text-[11px] text-content-muted font-ui">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Zero PII stored. GDPR and privacy compliant.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
