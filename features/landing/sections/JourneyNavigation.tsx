import { Container, Section } from "@/components/layout";
import { Heading, Text } from "@/components/typography";
import { SectionLabel } from "@/components/ui";
import { chapters } from "@/data/navigation";
import { ChapterEntry } from "../components/ChapterEntry";
import { ExperienceMetricBar } from "../components/ExperienceMetricBar";

/**
 * The journey (task.md TASK 2.1 shell; visual language per TASK 4.4–4.6).
 *
 * Rendered entirely from `data/navigation.ts`, so adding, removing or reordering
 * a chapter is a data change and never a component change (architecture.md §2.2,
 * rules.md §24).
 *
 * Augmented with the Experience Metric Bar (docs/design.md §5.5, Archetype 5).
 */
export function JourneyNavigation() {
  return (
    <Section id="journey" label="The journey" spacing="cinematic">
      <Container>
        <div className="reveal-rise flex flex-col gap-6">
          <SectionLabel>The journey</SectionLabel>
          <Heading as="h2" size="subheading">
            Begin anywhere.
          </Heading>
          <Text tone="secondary" measure="wide">
            Each chapter is a place to stay for a while rather than a page to get
            through. The city is not linear, and neither is this.
          </Text>
        </div>

        <nav aria-label="Chapters of the journey" className="mt-16 md:mt-24">
          <ol className="m-0 list-none p-0">
            {chapters.map((chapter) => (
              <ChapterEntry key={chapter.id} chapter={chapter} />
            ))}
          </ol>
        </nav>

        {/* Experience Metric Bar (docs/design.md §5.5) */}
        <div className="reveal-rise mt-20 md:mt-28">
          <ExperienceMetricBar />
        </div>
      </Container>
    </Section>
  );
}
