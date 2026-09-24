export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-palette-ink text-palette-ivory">
      <div className="flex flex-col items-center gap-6">
        <span className="font-display text-sm tracking-[0.3em] uppercase text-brand-accent animate-pulse">
          KASHI
        </span>
        <div className="w-24 h-[1px] bg-palette-ivory/20 overflow-hidden relative">
          <div className="absolute inset-0 bg-brand-accent/80 animate-[shimmer_1.8s_infinite] -translate-x-full" />
        </div>
        <p className="font-editorial text-xs italic text-palette-sand/70 tracking-wider">
          A City Beyond Time
        </p>
      </div>
    </div>
  );
}
