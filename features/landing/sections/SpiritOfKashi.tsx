import { Container, Section } from "@/components/layout";
import { SafeImage } from "@/components/media";
import { Heading, Text } from "@/components/typography";
import { SectionLabel } from "@/components/ui";
import styles from "../landing.module.css";

/**
 * The Spirit of Kashi — chapter six, closing on the light band.
 *
 * The journey began on the Ganga, so it returns to the Ganga: the same
 * photograph that opened the page, now printed rather than full-bleed. The
 * bookend is the point — the visitor ends where they started, having been
 * through everything in between.
 *
 * design.md §67 and prd.md CF-09: quieter than everything before it, and with
 * no commercial call to action anywhere. No "Plan Your Visit", no booking, no
 * newsletter. The experience ends emotionally or it does not end correctly.
 */
export function SpiritOfKashi() {
  return (
    <Section
      id="spirit-of-kashi"
      label="The Spirit of Kashi"
      spacing="cinematic"
      className="bg-[#FAF6F0] text-slate-900"
    >
      <Container size="narrow">
        <div className="reveal-rise flex flex-col gap-5">
          <div className="inline-flex items-center gap-2">
            <span className="type-ui text-xs font-semibold uppercase tracking-widest text-[#B59A63]">
              04 / THE SPIRIT OF KASHI
            </span>
          </div>
          <Heading as="h2" className="text-slate-900 font-serif">
            The river, still.
          </Heading>
          <Text tone="light-secondary" measure="wide" className="text-slate-700">
            Everything above is a way of approaching the same thing. The river
            does not change because it has been described, and the city does not
            wait to be understood before carrying on with its morning.
          </Text>
        </div>

        <figure className="reveal-rise m-0 mt-16 md:mt-24 bg-transparent">
          {/* Natural image plate with NO card background */}
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-slate-300/60 bg-transparent shadow-md transition-shadow hover:shadow-xl">
            <SafeImage
              src="/images/hero/ganga-hero.jpg"
              alt="The Ganga at Kashi, seen from the water."
              fallbackLabel="The Ganga at Kashi"
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <figcaption className="mt-4 flex flex-col gap-1 bg-transparent">
            <Text as="span" size="ui" tone="light-secondary" measure={false} className="text-slate-600">
              The Ganga, where the city meets it.
            </Text>
          </figcaption>
        </figure>

        <Text className="reveal-rise mt-16 text-slate-800 font-serif text-lg leading-relaxed" measure="wide">
          What a website can hold of a place like this is small. What it can do
          is point — and then get out of the way.
        </Text>
      </Container>
    </Section>
  );
}
