import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"
import YouTubeVideo from "@/features/youtube/YouTube"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import GlowBox from "@/features/lessons/components/GlowBox"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute("/lessons/_chapter-3/word-order")({
  component: WordOrder,
})

function WordOrder() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        順
      </span>

      <LessonHeader
        chapter="Chapter 3 · Grammar"
        title={<>Word Order</>}
        subtitle="Why Japanese lets you rearrange almost everything."
      >
        <OverviewItem>Topic-comment structure</OverviewItem>
        <OverviewItem>Common word order patterns</OverviewItem>
        <OverviewItem>Emphasis, new information, and omission</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* The Basics */}
        <div class="space-y-4">
          <SectionLabel>The basics</SectionLabel>
          <p class="leading-relaxed text-white/70">
            In Japanese, the verb almost always comes last. Everything else can
            be rearranged, because particles (not word order) tell you what role
            each word plays in the sentence.
          </p>
        </div>

        {/* Topic-Comment */}
        <div class="space-y-4">
          <SectionLabel>Topic-comment: a simple concept</SectionLabel>
          <YouTubeVideo
            videoId="U2q5GsB0swQ"
            title="Basic Sentence Structure in Japanese"
            credit="Kaname Naito"
          />
          <p class="leading-relaxed text-white/70">
            You pick a topic, mark it with は, then say something about it:
          </p>

          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="font-japanese text-xl text-white/90">
              コーヒーはおいしいです。
            </p>
            <p class="mt-1 text-sm text-white/40">
              Coffee? Delicious.
            </p>
          </div>

          <p class="leading-relaxed text-white/70">
            <span class="font-semibold italic text-white/90">Coffee</span> is
            the topic,{" "}
            <span class="font-semibold italic text-white/90">
              it's delicious
            </span>{" "}
            is the comment. That's the whole pattern.
          </p>
        </div>

        {/* Word Order Patterns */}
        <div class="space-y-4">
          <SectionLabel>Word order patterns</SectionLabel>
          <p class="leading-relaxed text-white/70">
            While word order is flexible, some patterns are more common and
            natural-sounding than others. Here are a few general guidelines:
          </p>

          <div class="space-y-2">
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <span class="font-semibold text-white/90">1. Topic</span>
              <span class="text-white/50">
                {" "}
                (+<span class="font-japanese">は</span>) often comes{" "}
                <span class="font-semibold text-white/70">first</span>{" "}
                <span class="text-xs text-white/30">
                  (if it's even needed)
                </span>
              </span>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <span class="font-semibold text-white/90">
                2. Time expressions
              </span>
              <span class="text-white/50">
                {" "}
                often come{" "}
                <span class="font-semibold text-white/70">early</span> in the
                sentence
              </span>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <span class="font-semibold text-white/90">
                3. Place expressions
              </span>
              <span class="text-white/50">
                {" "}
                often{" "}
                <span class="font-semibold text-white/70">follow</span> time
                expressions
              </span>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <span class="font-semibold text-white/90">4. The object</span>
              <span class="text-white/50">
                {" "}
                (+<span class="font-japanese">を</span>) usually comes{" "}
                <span class="font-semibold text-white/70">
                  before the verb
                </span>
              </span>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3">
              <span class="font-semibold text-white/90">5. The verb</span>
              <span class="text-white/50">
                {" "}
                almost always comes{" "}
                <span class="font-semibold text-white/70">last</span>
              </span>
            </div>
          </div>
        </div>

        {/* Example */}
        <div class="space-y-4">
          <div class="space-y-3">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-xl text-white/90">
                私は明日東京でラーメンを食べます。
              </p>
              <p class="mt-1 text-sm text-white/40">
                (As for me, I'll eat ramen in Tokyo tomorrow.)
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-xl text-white/90">
                明日東京で私はラーメンを食べます。
              </p>
              <p class="mt-1 text-sm text-white/40">
                (Tomorrow in Tokyo, I will eat ramen.)
              </p>
            </div>
          </div>

          <p class="leading-relaxed text-white/70">
            Both are grammatically correct, but the emphasis changes slightly.
          </p>
          <p class="text-center text-sm text-white/40">
            *Remember, particles pair with the end of nouns. Move the noun, and
            the particle follows.
          </p>
        </div>

        {/* Emphasis */}
        <div class="space-y-4">
          <SectionLabel>Emphasis and new information</SectionLabel>
          <p class="leading-relaxed text-white/70">
            Important or new information tends to go closer to the end of the
            sentence, just before the verb. The topic (は) is the exception,
            which usually stays first.
          </p>

          <div class="space-y-3">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-white/90">
                私は<span class="font-semibold text-dynamic-accent">東京で</span>ラーメンを食べます。
              </p>
              <p class="mt-1 text-sm text-white/40">
                I eat ramen <span class="font-semibold">in Tokyo</span>. (emphasizing Tokyo)
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-white/90">
                私は東京で<span class="font-semibold text-dynamic-accent">ラーメンを</span>食べます。
              </p>
              <p class="mt-1 text-sm text-white/40">
                I eat <span class="font-semibold">ramen</span> in Tokyo. (emphasizing ramen)
              </p>
            </div>
          </div>

          <p class="text-sm text-white/50">
            What's closer to the verb gets more emphasis.
          </p>
        </div>

        {/* Omission */}
        <div class="space-y-4">
          <SectionLabel>Omission</SectionLabel>
          <p class="leading-relaxed text-white/70">
            In conversational Japanese, it's common to omit parts of the
            sentence that are clear from context. This includes topics,
            subjects, objects, and even particles sometimes. For example,
            instead of saying:
          </p>

          <div class="space-y-2">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-white/80">
                私はコーヒーが
                <Furigana furigana={<span class="text-xs">す</span>}>
                  好
                </Furigana>
                きです。
              </p>
              <p class="mt-1 text-sm text-white/40">I like coffee.</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="text-xs font-semibold uppercase tracking-wider text-white/30">
                More likely
              </p>
              <p class="mt-1 font-japanese text-lg text-white/80">
                コーヒーが好きです。
              </p>
              <p class="mt-1 text-sm text-white/40">Like coffee.</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="text-xs font-semibold uppercase tracking-wider text-white/30">
                Or even just
              </p>
              <p class="mt-1 font-japanese text-lg text-white/80">好き。</p>
              <p class="mt-1 text-sm text-white/40">Like.</p>
            </div>
          </div>
        </div>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>
          <p class="text-center text-sm italic text-white/40">[wip]</p>
          <div class="space-y-3">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-white/90">
                私は毎朝図書館で読みます。
              </p>
              <p class="mt-1 text-sm text-white/40">
                (I read at the library every morning.)
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-white/90">
                田中さんは
                <Romaji romaji="every week" class="text-xs">
                  毎
                  <Furigana furigana={<span class="text-xs">しゅう</span>}>
                    週
                  </Furigana>
                </Romaji>
                日曜日の
                <Furigana furigana={<span class="text-xs">よる</span>}>
                  夜
                </Furigana>
                にアメリカンアイドルを見ます。
              </p>
              <p class="mt-1 text-sm text-white/40">
                (Mr. Tanaka watches American Idol every Sunday evening.)
              </p>
            </div>
          </div>
        </div>

        {/* Video */}
        <div>
          <YouTubeVideo
            videoId="ed4rmIY4mL0"
            title="【N5】Genki 1 Lesson 3 Grammar Made Clear | ます CONJUGATION SIMPLIFIED"
            credit="ToKini Andy"
            startTime={3091}
            timestamps={[
              { label: "Word Order", time: 3091 },
              { label: "More about は", time: 3360 },
            ]}
          />
        </div>

        {/* Resource */}
        <div class="rounded-lg bg-white/[0.03] p-6 ring-1 ring-white/[0.06]">
          <SectionLabel>Additional resources</SectionLabel>
          <div class="mt-4 text-sm">
            <a
              href="https://8020japanese.com/japanese-word-order/"
              target="_blank"
              class="text-dynamic-accent underline decoration-dynamic-accent/30 underline-offset-2 hover:decoration-dynamic-accent/60"
            >
              Japanese Word Order - 80/20 Japanese
            </a>
            <p class="mt-0.5 text-white/40">
              An alternative explanation of word order and particles.
            </p>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            Verbs almost always come last; everything else is flexible
          </SummaryItem>
          <SummaryItem>
            Topic (は) first → time → place → object (を) → verb
          </SummaryItem>
          <SummaryItem>
            New or important info goes closer to the verb
          </SummaryItem>
          <SummaryItem>
            Context-obvious words (topic, subject, particles) are often dropped
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
