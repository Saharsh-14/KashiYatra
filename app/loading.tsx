import { Container } from "@/components/layout";

/**
 * Route loading state (architecture.md §47, design.md §96).
 *
 * The loader belongs to the KASHI identity: dark ground, one hairline, no
 * spinner and no "Loading…" — the same language as the landing's preloader, at
 * a smaller scale, because this one is only covering a route change.
 *
 * It is a server component with no state, so it costs nothing while it is
 * showing and cannot itself fail.
 */
export default function Loading() {
  return (
    <div
      role="status"
      aria-label="Loading"
      className="flex min-h-svh items-center justify-center bg-background-primary"
    >
      <Container size="narrow">
        <div className="flex flex-col gap-6">
          <p className="type-label type-tone-accent">Kashi</p>
          <span
            aria-hidden="true"
            className="block h-px w-full max-w-measure bg-edge"
          />
        </div>
      </Container>
    </div>
  );
}
