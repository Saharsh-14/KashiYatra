import { Container, Section } from "@/components/layout";
import { SafeImage } from "@/components/media";
import { Heading, Text } from "@/components/typography";
import { Divider, IndexLabel, SectionLabel } from "@/components/ui";
import { shivaStatement, storyChapters } from "@/data/story";
import { VisitorSchedulePanel } from "../components/VisitorSchedulePanel";
import styles from "../landing.module.css";

const ROMAN_NUMERALS = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII"];

/**
 * Story of Kashi — chapter two, back on the ink band.
 *
 * Implements the Editorial Exhibition Catalog Spread and Split Schedule Panel
 * (docs/design.md §5.7 & §5.8, Archetypes 7 & 8).
 */
export function StoryOfKashi() {
  return (
    <Section
      id="story-of-kashi"
      label="Story of Kashi"
      spacing="cinematic"
      className="bg-[#FAF6F0] text-slate-900"
    >
      <Container>
        {/* Catalog Running Header */}
        <div className="reveal-rise flex items-center justify-between border-b border-slate-200 pb-4 text-xs type-ui text-slate-500">
          <span>04 &nbsp; / &nbsp; THE CHRONICLES OF BANARAS</span>
          <span className="hidden sm:inline">ARCHIVAL RECORD & ORAL TRADITION</span>
        </div>

        <div className="reveal-rise mt-8 flex flex-col gap-5">
          <div className="inline-flex items-center gap-2">
            <span className="type-ui text-xs font-semibold uppercase tracking-widest text-[#B59A63]">
              04 / STORY OF KASHI
            </span>
          </div>
          <Heading as="h2" className="text-slate-900 font-serif">
            Told, and recorded.
          </Heading>
          <Text tone="light-secondary" measure="wide" className="text-slate-700">
            Four moments, kept deliberately short. Where something rests on what
            has been handed down rather than on what has been documented, it
            says so.
          </Text>
        </div>

        <div className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-32">
          {storyChapters.map((chapter, index) => (
            <article
              key={chapter.id}
              data-flipped={index % 2 === 1}
              className={`${styles.chapter} reveal-rise`}
            >
              <div className="relative">
                {/* Image has NO card background */}
                <div className="relative aspect-[16/9] overflow-hidden rounded-sm border border-slate-300/60 bg-transparent shadow-md transition-shadow hover:shadow-xl">
                  <SafeImage
                    src={chapter.image}
                    alt={chapter.imageAlt}
                    fallbackLabel={chapter.title}
                    fill
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>

                {/* Overlapping Inset Callout — NO dark card background */}
                <div className="hidden sm:block absolute -bottom-5 -right-4 z-content overflow-hidden rounded-sm border border-slate-300/80 bg-transparent shadow-lg w-28 h-20 md:w-36 md:h-24">
                  <SafeImage
                    src={chapter.image}
                    alt=""
                    aria-hidden="true"
                    fill
                    sizes="144px"
                    className="object-cover scale-150 brightness-105"
                  />
                  <div className="absolute bottom-1 right-1.5 bg-[#FAF6F0]/90 px-1 py-0.5 rounded-xs border border-slate-300/60">
                    <span className="type-ui text-[9px] font-semibold text-slate-800">DETAIL</span>
                  </div>
                </div>
              </div>

              <div className={styles.chapterBody}>
                <div className="flex items-center gap-3">
                  <span className="font-serif text-base font-semibold text-[#B59A63]">
                    {ROMAN_NUMERALS[index] ?? chapter.index}
                  </span>
                  <span className="h-3 w-[1px] bg-slate-300" />
                  <IndexLabel index={chapter.index} tone="light-accent" />
                </div>

                <Heading as="h3" size="subheading" className="text-slate-900 font-serif">
                  {chapter.title}
                </Heading>

                <Text tone="light-secondary" className="text-slate-700">{chapter.narrative}</Text>

                <p className={styles.chapterBasis}>
                  <span className="block h-[1px] w-6 bg-[#B59A63]" aria-hidden="true" />
                  <span className="type-label text-[#B59A63] font-semibold">
                    {chapter.basis === "record" ? "Recorded" : "Tradition"}
                  </span>
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Split 50/50 Schedule & Timings Panel */}
        <div className="reveal-rise mt-24 md:mt-32">
          <VisitorSchedulePanel />
        </div>

        <div className="mt-24 md:mt-32">
          <Divider variant="strong" className="border-slate-200" />
        </div>

        <div
          className={`${styles.statement} reveal-rise mx-auto mt-16 max-w-measure-wide text-center md:mt-24`}
        >
          {shivaStatement.map((line) => (
            <p key={line} lang="hi" className="font-serif text-xl sm:text-2xl text-slate-800 leading-relaxed">
              {line}
            </p>
          ))}
        </div>
      </Container>
    </Section>
  );
}
