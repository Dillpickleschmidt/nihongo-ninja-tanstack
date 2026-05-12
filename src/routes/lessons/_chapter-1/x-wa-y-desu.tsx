import { createFileRoute } from "@tanstack/solid-router"
import YouTubeVideo from "@/features/youtube/YouTube"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import GlowBox from "@/features/lessons/components/GlowBox"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import RevealBlock from "@/features/lessons/components/RevealBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute("/lessons/_chapter-1/x-wa-y-desu")({

  component: XWaYDesu,
})

function XWaYDesu() {
  return (
    <div class="pb-32">
      <LessonHeader
        chapter="Chapter 1 · Grammar"
        title={
          <>
            <span class="text-dynamic-accent">X</span>は
            <span class="text-dynamic-accent">Y</span>です
          </>
        }
        subtitle="Your first Japanese sentence pattern."
      >
        <OverviewItem>
          The{" "}
          <span class="font-japanese font-semibold text-muted-foreground dark:text-white/60">
            X<span class="font-semibold text-dynamic-accent">は</span>Y
            <span class="font-semibold text-dynamic-accent">です</span>
          </span>{" "}
          sentence pattern
        </OverviewItem>
        <OverviewItem>
          What the particle{" "}
          <span class="font-japanese font-semibold text-muted-foreground dark:text-white/60">は</span> does
          (and doesn't do)
        </OverviewItem>
        <OverviewItem>How context replaces words in Japanese</OverviewItem>
      </LessonHeader>

      {/* Content */}
      <div class="space-y-14 px-8">
        {/* Fundamentals intro */}
        <div class="space-y-6">
          <SectionLabel>A few things to keep in mind</SectionLabel>
          <p class="text-sm text-muted-foreground dark:text-white/40 italic">
            These will make more sense as we go:
          </p>
          <div class="space-y-4 leading-relaxed text-foreground/75 dark:text-white/70">
            <p>
              <span class="font-semibold text-foreground dark:text-white/90">
                1. Japanese builds toward the verb at the end.
              </span>{" "}
              English says "You are a first-year student." In Japanese, the
              order is closer to "You, a first-year student are." As Yoda would
              say, "Much to learn, you have."
            </p>
            <p>
              <span class="font-semibold text-foreground dark:text-white/90">
                2. Particles mark what each word does in the sentence.
              </span>{" "}
              You're about to meet your first one:{" "}
              <span class="font-japanese font-semibold text-dynamic-accent">
                は
              </span>
              .
            </p>
            <p>
              <span class="font-semibold text-foreground dark:text-white/90">
                3. If something is obvious from context, you leave it out.
              </span>{" "}
              You'll see this in action shortly.
            </p>
          </div>
        </div>

        {/* Video */}
        <YouTubeVideo
          videoId="EEmWIzJg5GQ"
          title="Japanese sentence structure"
          credit="80/20 Japanese"
        />

        {/* Key Pattern — glow box */}
        <GlowBox>
          <SectionLabel class="text-dynamic-accent">Key Pattern</SectionLabel>
          <div class="mt-6 space-y-3 font-japanese text-2xl font-bold text-foreground dark:text-white sm:text-3xl">
            <div class="flex items-baseline justify-between gap-4">
              <span>
                わたし<span class="text-dynamic-accent">は</span> がくせい
                <span class="text-dynamic-accent">です</span>。
              </span>
              <span class="shrink-0 text-sm font-normal text-muted-foreground/70 dark:text-white/30">
                I am a student.
              </span>
            </div>
            <div class="flex items-baseline justify-between gap-4">
              <span>
                おとうさん<span class="text-dynamic-accent">は</span> せんせい
                <span class="text-dynamic-accent">です</span>。
              </span>
              <span class="shrink-0 text-sm font-normal text-muted-foreground/70 dark:text-white/30">
                (My) dad is a teacher.
              </span>
            </div>
            <div class="flex items-baseline justify-between gap-4">
              <span>
                やまださん<span class="text-dynamic-accent">は</span>{" "}
                だいがくせい<span class="text-dynamic-accent">です</span>。
              </span>
              <span class="shrink-0 text-sm font-normal text-muted-foreground/70 dark:text-white/30">
                Yamada-san is a college student.
              </span>
            </div>
          </div>
        </GlowBox>

        {/* は — accent border callout */}
        <AsideBlock label="The は Particle">
          <p class="mt-2 leading-relaxed text-foreground/75 dark:text-white/70">
            <span class="font-japanese font-semibold text-dynamic-accent">
              は
            </span>{" "}
            marks the topic of a sentence. It tells the listener what you're
            talking about. Pronounced "wa," not "ha," when used as a particle.
          </p>
          <div class="mt-3 font-japanese text-lg text-foreground dark:text-white/90">
            おとうさん
            <span class="text-dynamic-accent">は</span> せんせいです。
            <span class="ml-3 text-sm text-muted-foreground/70 dark:text-white/30">
              As for (my) dad, he's a teacher.
            </span>
          </div>
          <p class="mt-3 text-sm leading-relaxed text-muted-foreground dark:text-white/50">
            It's easy to read{" "}
            <span class="font-japanese text-foreground/75 dark:text-white/70">は</span> as "is," but
            that's not what it's really doing. You can literally translate it as
            "as for..." or "speaking of..." Everything after{" "}
            <span class="font-japanese text-foreground/75 dark:text-white/70">は</span> is about the
            topic that precedes{" "}
            <span class="font-japanese text-foreground/75 dark:text-white/70">は</span>. That's why{" "}
            <span class="font-japanese text-foreground/75 dark:text-white/70">は</span> is commonly
            referred to as the topic particle.
          </p>
          <p class="mt-3 text-sm leading-relaxed text-muted-foreground dark:text-white/50">
            I know it seems odd but it'll make more sense why in later lessons.
          </p>
        </AsideBlock>

        {/* です — plain text with politeness */}
        <div class="space-y-4 leading-relaxed text-foreground/75 dark:text-white/70">
          <SectionLabel>About です</SectionLabel>
          <p>
            Japanese speakers adjust their formality based on who they're
            talking to. Adding{" "}
            <span class="font-japanese font-semibold text-dynamic-accent">
              です
            </span>{" "}
            to the end of these sentences makes them polite. Dropping it (just{" "}
            <span class="font-japanese text-foreground dark:text-white/90">がくせい</span> instead of{" "}
            <span class="font-japanese text-foreground dark:text-white/90">がくせいです</span>) is
            more casual. You'd hear it between close friends or family.
          </p>
          <p>
            It's not always clear-cut though. Two coworkers might use{" "}
            <span class="font-japanese text-foreground dark:text-white/90">です</span> when they
            first meet and drop it over time. Within a friend group, one person
            might keep using{" "}
            <span class="font-japanese text-foreground dark:text-white/90">です</span> while nobody
            else does. We'll start with polite forms here since you can use them
            with anyone, and cover casual speech later.
          </p>
        </div>

        {/* Dropping the topic */}
        <div class="space-y-4">
          <SectionLabel>Dropping the topic</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            When it's obvious who or what you're talking about, drop the topic
            entirely:
          </p>
          <div class="flex items-center gap-3 font-japanese text-lg">
            <span class="text-muted-foreground/70 dark:text-white/30 line-through decoration-foreground/20 dark:decoration-white/20">
              わたしは
            </span>
            <span class="font-semibold text-foreground dark:text-white">がくせいです。</span>
          </div>
          <p class="text-sm text-muted-foreground dark:text-white/50">
            This is normal, not lazy. Japanese speakers do this constantly.
          </p>
        </div>

        {/* Context decides */}
        <div class="space-y-4">
          <SectionLabel>Context decides</SectionLabel>
          <div>
            <p class="font-japanese text-2xl font-bold text-foreground dark:text-white/90">
              がくせいです。
            </p>
            <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
              Could mean "I am," "you are," or "they are" a student. Context
              tells you which.
            </p>
          </div>
          <div>
            <p class="font-japanese text-2xl font-bold text-foreground dark:text-white/90">
              ともだちです。
            </p>
            <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
              Could mean one friend or many. No singular/plural distinction.
            </p>
          </div>
        </div>

        {/* Video */}
        <RevealBlock closedLabel="See a video on this">
          <YouTubeVideo
            videoId="15ukUhFolU4"
            title="The REAL Most Basic Japanese Sentence Structures"
            credit="ToKini Andy"
          />
        </RevealBlock>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            Japanese builds toward the verb at the end
          </SummaryItem>
          <SummaryItem>
            <span class="font-japanese font-semibold text-foreground/80 dark:text-white/80">は</span>{" "}
            marks the topic (particles tell you what role each word plays)
          </SummaryItem>
          <SummaryItem>
            <span class="font-japanese font-semibold text-foreground/80 dark:text-white/80">は</span> is
            pronounced "wa"
          </SummaryItem>
          <SummaryItem>
            Adding{" "}
            <span class="font-japanese font-semibold text-foreground/80 dark:text-white/80">です</span>{" "}
            makes the sentence polite
          </SummaryItem>
          <SummaryItem>Drop the topic when context is clear</SummaryItem>
          <SummaryItem>No singular/plural (context decides)</SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
