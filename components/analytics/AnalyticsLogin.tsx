"use client";

import { useState } from "react";
import { Lock, KeyRound, ShieldAlert, Eye, EyeOff, Loader2 } from "lucide-react";

interface AnalyticsLoginProps {
  onSuccess: () => void;
}

export function AnalyticsLogin({ onSuccess }: AnalyticsLoginProps) {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/analytics/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Authentication failed. Access denied.");
        setLoading(false);
        return;
      }

      onSuccess();
    } catch {
      setError("An unexpected network error occurred. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-palette-ink flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-palette-brass/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-palette-terracotta/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Central Login Card */}
      <div className="relative w-full max-w-md bg-palette-charcoal/90 backdrop-blur-xl border border-edge/80 rounded-2xl p-8 shadow-deep">
        {/* Emblem */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-14 h-14 rounded-2xl bg-surface-elevated border border-palette-brass/40 flex items-center justify-center shadow-soft mb-4 text-palette-brass">
            <Lock className="w-6 h-6" />
          </div>

          <h1 className="font-editorial text-2xl text-palette-ivory font-normal tracking-wide">
            KashiYatra Analytics
          </h1>
          <p className="text-xs text-content-muted mt-1.5 font-ui">
            Private Dashboard • Restricted to Saharsh
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div className="mb-6 p-3.5 rounded-lg bg-red-950/40 border border-red-500/30 flex items-start gap-2.5 text-xs text-red-200">
            <ShieldAlert className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="dashboard-passkey"
              className="block text-xs font-ui text-content-secondary uppercase tracking-wider mb-2 font-medium"
            >
              Enter Passkey
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-content-muted">
                <KeyRound className="w-4 h-4" />
              </div>
              <input
                id="dashboard-passkey"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                autoFocus
                disabled={loading}
                className="w-full bg-surface-elevated/80 border border-edge focus:border-palette-brass text-palette-ivory placeholder:text-content-muted rounded-xl pl-10 pr-11 py-3 text-sm font-mono tracking-widest focus:outline-none focus:ring-1 focus:ring-palette-brass transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-content-muted hover:text-content-primary transition-colors"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || !password.trim()}
            className="w-full py-3.5 px-4 rounded-xl bg-palette-brass text-palette-ink font-ui font-semibold text-sm hover:brightness-110 active:brightness-95 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 shadow-soft"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Verifying Credentials...
              </>
            ) : (
              "Access Private Analytics"
            )}
          </button>
        </form>

        {/* Footer note */}
        <div className="mt-8 pt-6 border-t border-edge/60 text-center">
          <p className="text-[11px] text-content-muted font-ui">
            Protected with cryptographically signed session tokens & rate-limiting.
          </p>
        </div>
      </div>
    </div>
  );
}
