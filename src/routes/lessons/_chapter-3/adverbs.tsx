import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import YouTubeVideo from "@/features/youtube/YouTube"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute("/lessons/_chapter-3/adverbs")({
  component: Adverbs,
})

function Adverbs() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-foreground/[0.04] dark:text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        副
      </span>

      <LessonHeader
        chapter="Chapter 3 · Grammar"
        title={
          <>
            Using <span class="text-sky-400">Adverbs</span>
          </>
        }
        subtitle="Frequency, degree, and where adverbs go in a sentence."
      >
        <OverviewItem>Common frequency and degree adverbs</OverviewItem>
        <OverviewItem>Adverb placement with verbs and adjectives</OverviewItem>
        <OverviewItem>
          Negative adverbs: あまり and 全然
        </OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="space-y-4">
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Adverbs add detail to sentences by modifying verbs, adjectives, or
            even other adverbs. They can describe how often something happens,
            the degree of intensity, or the manner of an action.
          </p>

          <YouTubeVideo
            videoId="Cw1NqcHrVQA"
            title="What's different about Japanese adverbs of frequency and infrequency?"
            credit="ToKini Andy"
          />

          <div class="grid grid-cols-2 gap-2 sm:grid-cols-3">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg font-medium text-foreground dark:text-white/90">
                たいてい
              </span>
              <span class="ml-2 text-sm text-muted-foreground dark:text-white/40">Usually</span>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg font-medium text-foreground dark:text-white/90">
                時々
              </span>
              <span class="ml-2 text-sm text-muted-foreground dark:text-white/40">Sometimes</span>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg font-medium text-foreground dark:text-white/90">
                よく
              </span>
              <span class="ml-2 text-sm text-muted-foreground dark:text-white/40">Often</span>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg font-medium text-foreground dark:text-white/90">
                いつも
              </span>
              <span class="ml-2 text-sm text-muted-foreground dark:text-white/40">Always</span>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg font-medium text-foreground dark:text-white/90">
                ちょっと
              </span>
              <span class="ml-2 text-sm text-muted-foreground dark:text-white/40">A little</span>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
              <span class="font-japanese text-lg font-medium text-foreground dark:text-white/90">
                あまり
              </span>
              <span class="ml-2 text-sm text-muted-foreground dark:text-white/40">Not very</span>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3 sm:col-span-3 sm:w-1/3">
              <span class="font-japanese text-lg font-medium text-foreground dark:text-white/90">
                全然
              </span>
              <span class="ml-2 text-sm text-muted-foreground dark:text-white/40">Not at all</span>
            </div>
          </div>
        </div>

        {/* Modifying Verbs */}
        <div class="space-y-4">
          <SectionLabel>Modifying verbs</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Adverbs modifying verbs can be placed flexibly in the sentence.
            While they often appear immediately before the verb, they can also
            appear anywhere between the topic and the verb.
          </p>

          <div class="space-y-3">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4 text-center">
              <p class="font-japanese text-xl text-foreground dark:text-white/90">
                田中さんは
                <span class="font-bold text-sky-400">よく</span>
                本を読みます。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                Tanaka-san reads books <span class="italic">often</span>.
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4 text-center">
              <p class="font-japanese text-xl text-foreground dark:text-white/90">
                田中さんは本を
                <span class="font-bold text-sky-400">よく</span>
                読みます。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                Tanaka-san <span class="italic">often</span> reads books.
              </p>
            </div>
          </div>

          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Both sentences are correct and have the same meaning, with slight
            differences in emphasis, just like English adverb placements.
          </p>
        </div>

        {/* Modifying Adjectives */}
        <div class="space-y-4">
          <SectionLabel>Modifying adjectives</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            When an adverb modifies an adjective, it usually appears immediately
            before the adjective. This placement emphasizes or describes the
            degree of the adjective.
          </p>

          <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4 text-center">
            <p class="font-japanese text-xl text-foreground dark:text-white/90">
              このケーキは
              <span class="font-bold text-sky-400">ちょっと</span>
              <Furigana furigana={<span class="text-xs">あま</span>}>
                甘
              </Furigana>
              いです。
            </p>
            <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
              This cake is a little sweet.
            </p>
          </div>

          <p class="text-sm text-muted-foreground dark:text-white/40">
            *It's not a hard rule that they must be placed immediately before
            adjectives, but anywhere else would be far less common as it would
            generally add confusion. Just keep in mind that there might be a few
            situations where the adverb could appear slightly earlier.
          </p>
        </div>

        {/* Negative Adverbs */}
        <div class="space-y-4">
          <SectionLabel>Special notes on negative adverbs</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Adverbs like <span class="font-japanese text-xl">あまり</span> and{" "}
            <span class="font-japanese text-xl">全然</span> are used exclusively
            with negative verbs or adjectives.
          </p>

          <div class="space-y-3">
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4 text-center">
              <p class="font-japanese text-xl text-foreground dark:text-white/90">
                アリ君はムスリムだから
                <span class="font-bold text-sky-400">全然</span>
                お酒を飲みません。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                Ali is Muslim, therefore he doesn't drink at all.
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4 text-center">
              <p class="font-japanese text-xl text-foreground dark:text-white/90">
                <span class="font-bold text-sky-400">あまり</span>
                時間がありません。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                I don't have much time.
              </p>
            </div>
          </div>
        </div>

        {/* Common Pitfalls */}
        <div class="space-y-4">
          <SectionLabel>Common pitfalls</SectionLabel>

          <div class="space-y-2">
            <div class="rounded-lg bg-red-500/5 p-4 ring-1 ring-red-500/20">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/60">
                Incorrect
              </p>
              <p class="font-japanese text-base text-muted-foreground dark:text-white/50 line-through">
                私はあまり映画を見ます。
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                Correct
              </p>
              <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                私はあまり映画を見ません。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">I rarely see movies.</p>
            </div>
            <p class="text-sm text-muted-foreground dark:text-white/40">
              *あまり needs to be followed by a negative form.
            </p>
          </div>

          <div class="space-y-2">
            <div class="rounded-lg bg-red-500/5 p-4 ring-1 ring-red-500/20">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/60">
                Incorrect
              </p>
              <p class="font-japanese text-base text-muted-foreground dark:text-white/50 line-through">
                トムさんは全然肉を食べます。
              </p>
            </div>
            <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground/70 dark:text-white/30">
                Correct
              </p>
              <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                トムさんは全然肉を食べません。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/40">
                Tom doesn't eat any meat.
              </p>
            </div>
            <p class="text-sm text-muted-foreground dark:text-white/40">
              *<span class="font-japanese">全然</span> needs to be followed by a
              negative form.
            </p>
          </div>
        </div>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>
          <p class="text-center text-sm italic text-muted-foreground dark:text-white/40">
            *Choose the correct sentence for each question*
          </p>

          <div class="space-y-6">
            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                How would you say "I sometimes eat cake"?
              </p>
              <SelectText
                answer="私は時々ケーキを食べます。"
                a="私は全然ケーキを食べます。"
                b="私はたいていケーキを食べます。"
                c="私は時々ケーキを食べます。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                How would you say "Mr. Yamada never watches movies"?
              </p>
              <SelectText
                answer="山田さんは映画を全然見ません。"
                a="山田さんは映画を全然見ます。"
                b="山田さんは映画を時々見ます。"
                c="山田さんは映画を全然見ません。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                How would you say "Ms. Tanaka sometimes eats Japanese food"?
              </p>
              <SelectText
                answer="田中さんは日本料理を時々食べます。"
                a="田中さんは日本料理を時々食べます。"
                b="田中さんは日本料理をたいてい食べます。"
                c="田中さんは日本料理を全然食べません。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                How would you say "Mr. Sato doesn't eat sweets at all"?
              </p>
              <SelectText
                answer="佐藤さんはお菓子を全然食べません。"
                a="佐藤さんはお菓子を全然食べます。"
                b="佐藤さんはお菓子をたいてい食べます。"
                c="佐藤さんはお菓子を全然食べません。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                How would you say "I sometimes watch anime"?
              </p>
              <SelectText
                answer="私はアニメを時々見ます。"
                a="私はアニメをよく見ます。"
                b="私はアニメを時々見ます。"
                c="私はアニメをたいてい見ます。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                How would you say "Ms. Suzuki usually drinks tea"?
              </p>
              <SelectText
                answer="鈴木さんはお茶をたいてい飲みます。"
                a="鈴木さんはお茶をぜんぜん飲みません。"
                b="鈴木さんはお茶をたいてい飲みます。"
                c="鈴木さんはお茶を時々飲みます。"
                class="text-xl"
              />
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            Adverbs modify verbs, adjectives, or other adverbs
          </SummaryItem>
          <SummaryItem>
            With verbs: flexible placement between topic and verb
          </SummaryItem>
          <SummaryItem>
            With adjectives: usually placed immediately before
          </SummaryItem>
          <SummaryItem>
            あまり and 全然 require negative verb/adjective forms
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
