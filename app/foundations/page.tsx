import type { Metadata } from "next";
import {
  Button,
  Divider,
  IndexLabel,
  SectionLabel,
  TextLink,
} from "@/components/ui";
import { Container, Section } from "@/components/layout";
import { Heading, Subheading, Text } from "@/components/typography";

/**
 * DESIGN SYSTEM REFERENCE
 *
 * An internal page, not product content. It exercises every token, type role
 * and primitive on one screen so the Phase 19 audits (Typography, Colour,
 * Spacing, Motion) can be run by looking at one route instead of six.
 *
 * It is noindex and is not linked from the experience. If it ever starts
 * drifting from `styles/tokens.css`, the tokens are right and this page is
 * wrong — delete the stale demo, do not change the token to match it.
 */

export const metadata: Metadata = {
  title: "Design System",
  robots: { index: false, follow: false },
};

const PALETTE = [
  { name: "Kashi Ink", token: "--palette-ink", className: "bg-palette-ink" },
  {
    name: "Deep Charcoal",
    token: "--palette-charcoal",
    className: "bg-palette-charcoal",
  },
  { name: "Aged Ivory", token: "--palette-ivory", className: "bg-palette-ivory" },
  { name: "Sand", token: "--palette-sand", className: "bg-palette-sand" },
  { name: "Banaras Brass", token: "--palette-brass", className: "bg-palette-brass" },
  {
    name: "Ganga Mist",
    token: "--palette-ganga-mist",
    className: "bg-palette-ganga-mist",
  },
  {
    name: "Burnt Terracotta",
    token: "--palette-terracotta",
    className: "bg-palette-terracotta",
  },
] as const;

const ROLES = [
  { role: "heading", note: "Caesura Bold · hero & chapter titles" },
  { role: "subheading", note: "Peristiva · supporting editorial voice" },
  { role: "body", note: "Peristiva · reading content" },
  { role: "ui", note: "Peristiva · labels, indexes, metadata" },
] as const;

export default function DesignSystemPage() {
  return (
    <main id="main">
      <Container>
        <Section spacing="compact">
          <div className="reveal-rise flex flex-col gap-6">
            <SectionLabel>Design System</SectionLabel>
            <Heading>KASHI</Heading>
            <Text tone="secondary">
              The token layer, the typography hierarchy, the layout primitives
              and the shared motion language. Every chapter composes from these
              systems rather than restating visual decisions.
            </Text>
            <TextLink href="/kashi" underline="always">
              Return to Kashi
            </TextLink>
            <Divider className="reveal-step-3" />
          </div>
        </Section>
      </Container>

      <Container>
        <Section label="Typography hierarchy">
          <div className="flex flex-col gap-10">
            <SectionLabel index={1}>Typography</SectionLabel>

            <div className="flex flex-col gap-8">
              {ROLES.map(({ role, note }, i) => (
                <div
                  key={role}
                  className={`reveal-rise reveal-step-${i + 1} flex flex-col gap-2`}
                >
                  <Text size="ui" tone="muted" measure={false}>
                    {note}
                  </Text>
                  {role === "heading" && <Heading as="h2">A city beyond time</Heading>}
                  {role === "subheading" && (
                    <Subheading as="p">
                      The Ganga carries the city the way memory carries a person.
                    </Subheading>
                  )}
                  {role === "body" && (
                    <Text>
                      Three content sizes and one utility size. Responsive scaling
                      lives inside the token, so no component branches on a
                      breakpoint to change its type.
                    </Text>
                  )}
                  {role === "ui" && (
                    <p className="type-label type-tone-accent">
                      Steps to Eternity
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Section>
      </Container>

      <Container>
        <Section label="Colour palette">
          <div className="flex flex-col gap-10">
            <SectionLabel index={2}>Palette</SectionLabel>
            <ul className="u-grid list-none gap-6 p-0">
              {PALETTE.map(({ name, token, className }) => (
                <li key={token} className="flex flex-col gap-3">
                  <div
                    className={`${className} h-20 w-full rounded-sm border border-edge`}
                  />
                  <div className="flex flex-col gap-1">
                    <Text size="ui" tone="primary" measure={false}>
                      {name}
                    </Text>
                    <Text size="ui" tone="muted" measure={false}>
                      {token}
                    </Text>
                  </div>
                </li>
              ))}
            </ul>
            <Text size="ui" tone="muted">
              Accent colours stay under roughly a tenth of the surface area.
              Brass marks selection and metadata; it never carries the interface.
            </Text>
          </div>
        </Section>
      </Container>

      <Container>
        <Section label="Primitives">
          <div className="flex flex-col gap-10">
            <SectionLabel index={3}>Primitives</SectionLabel>

            <div className="flex flex-col gap-8">
              <div className="flex flex-wrap items-center gap-4">
                <Button>Enter Kashi</Button>
                <Button variant="secondary">Back to Landing</Button>
                <Button variant="accent">Shaam-e-Banaras</Button>
                <Button disabled>Unavailable</Button>
              </div>

              <div className="flex flex-wrap items-end gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>

              <div className="flex flex-wrap items-center gap-6">
                <TextLink href="/ghats" underline="always">
                  Steps to Eternity
                </TextLink>
                <TextLink href="/unfolded">Kashi Unfolded</TextLink>
              </div>

              <div className="flex items-center gap-4">
                {[1, 2, 3].map((n) => (
                  <IndexLabel key={n} index={n} />
                ))}
                <Divider orientation="vertical" decorative className="h-4" />
                <SectionLabel index={4}>Where Gods Reside</SectionLabel>
              </div>

              <Divider variant="strong" />
            </div>
          </div>
        </Section>
      </Container>

      <Container>
        <Section label="Motion">
          <div className="flex flex-col gap-10">
            <SectionLabel index={5}>Motion</SectionLabel>
            <Text size="ui" tone="muted">
              Reveals are CSS-driven so they stay smooth while imagery loads.
              With reduced motion enabled, movement is dropped and only the fade
              remains.
            </Text>
            <ul className="u-grid list-none gap-6 p-0">
              {[1, 2, 3].map((n) => (
                <li
                  key={n}
                  className={`reveal-rise reveal-step-${n} flex min-h-32 flex-col justify-between gap-4 rounded-sm border border-edge bg-surface p-6`}
                >
                  <IndexLabel index={n} />
                  <Text size="ui" tone="muted" measure={false}>
                    Staggered {n * 60}ms
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </Container>
    </main>
  );
}
