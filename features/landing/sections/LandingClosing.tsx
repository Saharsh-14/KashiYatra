import { Container, Section } from "@/components/layout";
import { Text } from "@/components/typography";
import { Divider, TextLink } from "@/components/ui";

/**
 * The end of the landing page, back on the ink band.
 *
 * The real ending of the journey is The Spirit of Kashi, immediately above.
 * This is only the last band of the page — and it ends on a statement, not an
 * offer.
 *
 * There is deliberately no "Plan Your Visit", no booking link and no newsletter
 * form anywhere in this file (prd.md CF-09, memory.md §26). The one link is
 * backwards, to the top of the page — the only navigation a single-page
 * experience actually needs at its end (TASK 5.3).
 */
export function LandingClosing() {
  return (
    <Section
      id="closing"
      label="Closing"
      spacing="cinematic"
      className="bg-[#FAF6F0] text-slate-900"
    >
      <Container size="narrow">
        <div className="reveal-rise flex flex-col gap-8">
          <div className="w-full h-[1px] bg-slate-200" />

          <Text as="p" tone="light-secondary" measure={false} className="text-slate-700 text-lg leading-relaxed font-serif">
            There is no itinerary at the end of this. Kashi is not arranged for
            visitors — it is arranged for itself, and everything above is only a
            way of walking through it.
          </Text>

          <p className="type-ui text-xs uppercase tracking-widest text-slate-500">
            Kashi — A City Beyond Time
          </p>

          <div>
            <TextLink href="#hero" underline="always" className="text-[#B59A63] font-semibold hover:text-slate-900 transition-colors">
              Back to the beginning
            </TextLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
