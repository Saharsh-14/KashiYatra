import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-palette-ink text-palette-ivory px-6 text-center">
      <div className="max-w-md flex flex-col items-center space-y-6">
        <span className="font-display text-xs tracking-[0.3em] uppercase text-brand-accent">
          Chapter Not Found
        </span>
        <h1 className="font-display text-6xl md:text-7xl font-bold tracking-tight text-palette-ivory">
          404
        </h1>
        <p className="font-editorial text-lg text-palette-sand italic">
          Something has dissolved into the river mist.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="inline-block px-8 py-3 border border-brand-accent/40 font-display text-xs tracking-[0.2em] uppercase text-brand-accent hover:bg-brand-accent hover:text-palette-ink transition-colors duration-300"
          >
            Return to Kashi
          </Link>
        </div>
      </div>
    </main>
  );
}
