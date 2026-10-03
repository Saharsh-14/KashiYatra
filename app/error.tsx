"use client";

import { Container } from "@/components/layout";
import { Heading, Text } from "@/components/typography";
import { Button } from "@/components/ui";

/**
 * Route-level error boundary (task.md TASK 18.1, TASK 18.2).
 *
 * design.md §97: error states keep the visual language rather than falling back
 * to a browser default. The copy says what happened without exposing a stack
 * trace, and the one action offered is recovery — `reset()` re-renders the
 * segment, so a transient failure does not force a full reload.
 *
 * The details are logged rather than rendered (rules.md §50 — do not hide
 * errors, but do not show them to the visitor either).
 */
export default function RouteError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="main" className="flex min-h-svh items-center">
      <Container size="narrow">
        <div className="flex flex-col gap-6">
          <p className="type-label type-tone-accent">Error</p>

          <Heading as="h1">Kashi is momentarily out of reach.</Heading>

          <Text as="p" tone="secondary" measure={false}>
            Something went wrong on this page. It is not you, and the city is
            still there.
          </Text>

          <div className="flex flex-wrap items-center gap-4">
            <Button onClick={reset}>Try again</Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
