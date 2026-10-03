import { Container } from "@/components/layout";
import { BackToLanding } from "@/components/navigation";
import { Heading, Subheading } from "@/components/typography";

/**
 * 404 (design.md §97, task.md TASK 18.4).
 *
 * Hierarchy follows design.md §97 exactly: the code, the statement, the way
 * back. The return control is the shared `BackToLanding` rather than a bespoke
 * link, so there is one return affordance across the whole site (TASK 14.1).
 */
export default function NotFound() {
  return (
    <main id="main" className="flex min-h-svh items-center">
      <Container size="narrow">
        <div className="flex flex-col gap-6">
          <p className="type-label type-tone-accent">404</p>

          <Heading as="h1">Something is missing.</Heading>

          <Subheading as="p" tone="muted">
            This part of Kashi has not been built yet, or the path no longer
            exists.
          </Subheading>

          <BackToLanding />
        </div>
      </Container>
    </main>
  );
}
