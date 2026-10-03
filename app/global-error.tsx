"use client";

import { Button } from "@/components/ui";
import "./globals.css";

/**
 * Root error boundary (task.md TASK 18.1).
 *
 * Next.js requires this file to render its own `<html>` and `<body>`, because it
 * replaces the root layout when the layout itself throws. It therefore cannot
 * use `Container` or the layout's typography wiring — but it still imports the
 * global stylesheet, so tokens, type roles and the KASHI palette are all
 * available and the fallback does not look like a different website
 * (design.md §97).
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-background-primary text-content-primary">
        <main className="flex min-h-svh items-center px-6">
          <div className="mx-auto flex w-full max-w-measure-wide flex-col gap-6">
            <p className="type-label type-tone-accent">Error</p>

            <h1 className="type-heading type-tone-primary">
              Kashi is momentarily out of reach.
            </h1>

            <p className="type-body type-tone-secondary">
              Something failed before the page could be built. Reloading is
              usually enough.
            </p>

            <Button className="w-fit" onClick={reset}>
              Try again
            </Button>
          </div>
        </main>
      </body>
    </html>
  );
}
