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

export const Route = createFileRoute(
  "/lessons/_chapter-6/te-form-adj-nouns",
)({
  component: TeFormAdjNouns,
})

function TeFormAdjNouns() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        連
      </span>

      <LessonHeader
        chapter="Chapter 6 · Grammar"
        title={
          <>
            Adjectives & Nouns –{" "}
            <span class="font-japanese text-green-500">て</span>-Form
          </>
        }
        subtitle="Connecting descriptions the same way you connect verbs."
      >
        <OverviewItem>い-adjectives: drop い, add くて</OverviewItem>
        <OverviewItem>な-adjectives: drop な, add で</OverviewItem>
        <OverviewItem>Nouns + です: drop です, add で</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="space-y-4">
          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="leading-relaxed text-white/70">
              Remember how we combined verbs with て form? Like:
            </p>
            <p class="mt-2 font-japanese text-lg text-white/80">
              ビールを
              <span class="underline decoration-green-500 underline-offset-4">
                飲んで
              </span>
              、ラーメンを
              <span class="underline decoration-green-500 underline-offset-4">
                食べて
              </span>
              、 あまりお金がありません。
            </p>
            <p class="mt-1 text-sm text-white/40">
              (I drink beer, eat ramen, and don't have much money)
            </p>
          </div>

          <p class="leading-relaxed text-white/70">
            Well, now you can do the same thing with adjectives and nouns! Time
            to level up your description game.
          </p>

          <YouTubeVideo
            videoId="RCR0N55l600"
            title="【How to connect adjectives】Japanese くて/で"
            credit="Miku Real Japanese"
          />
        </div>

        {/* い Adjectives */}
        <div class="space-y-4">
          <div class="text-center">
            <p class="font-japanese text-2xl text-teal-400">い → くて</p>
            <SectionLabel class="mt-1">い-adjectives</SectionLabel>
          </div>
          <p class="leading-relaxed text-white/70">
            Drop い, add くて
          </p>

          <div class="space-y-3">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-white/80">安い → 安くて</p>
              <div class="mt-2">
                <p class="text-white/70">
                  この店のカレーは
                  <span class="font-japanese">安くて、おいしいです</span>。
                </p>
                <p class="mt-1 text-sm text-white/40">
                  This shop's curry is cheap and delicious. (Perfect for broke
                  students)
                </p>
              </div>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-white/80">いい → よくて</p>
              <div class="mt-2">
                <p class="text-white/70">
                  先生はやさしくて、よくて、
                  <span class="line-through">単位をくれます</span>。
                </p>
                <p class="mt-1 text-sm text-white/40">
                  The teacher is kind and good and{" "}
                  <span class="line-through">gives passing grades</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* な Adjectives */}
        <div class="space-y-4">
          <div class="text-center">
            <p class="font-japanese text-2xl text-yellow-400">な → で</p>
            <SectionLabel class="mt-1">な-adjectives</SectionLabel>
          </div>
          <p class="leading-relaxed text-white/70">
            Drop な, add で
          </p>

          <div class="space-y-3">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-white/80">
                静か(な) → 静かで
              </p>
              <div class="mt-2">
                <p class="text-white/70">
                  図書館は
                  <span class="font-japanese">静かで、涼しいです</span>。
                </p>
                <p class="mt-1 text-sm text-white/40">
                  The library is quiet and cool. (Perfect for napping... I mean,
                  studying)
                </p>
              </div>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-white/80">
                元気(な) → 元気で
              </p>
              <div class="mt-2">
                <p class="text-white/70">
                  友だちは
                  <span class="font-japanese">元気で、うるさいです</span>。
                </p>
                <p class="mt-1 text-sm text-white/40">
                  My friend is energetic and noisy. (Usually at 3 AM)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Nouns */}
        <div class="space-y-4">
          <div class="text-center">
            <p class="font-japanese text-2xl text-orange-400">です → で</p>
            <SectionLabel class="mt-1">Nouns + です</SectionLabel>
          </div>
          <p class="leading-relaxed text-white/70">
            Drop です, add で
          </p>

          <div class="space-y-3">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-white/80">
                学生です → 学生で
              </p>
              <div class="mt-2">
                <p class="text-white/70">
                  私は
                  <span class="font-japanese">学生で、お金がありません</span>。
                </p>
                <p class="mt-1 text-sm text-white/40">
                  I'm a student and I have no money. (A universal truth)
                </p>
              </div>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-lg text-white/80">
                日本人です → 日本人で
              </p>
              <div class="mt-2">
                <p class="text-white/70">
                  山田先生は
                  <span class="font-japanese">日本人で、とても厳しいです</span>
                  。
                </p>
                <p class="mt-1 text-sm text-white/40">
                  Professor Yamada is Japanese and very strict. (RIP your
                  grades)
                </p>
              </div>
            </div>
          </div>

          <p class="text-sm text-white/40">
            *You're going to notice that very often, nouns behave the same as
            な adjectives like they do here.
          </p>
        </div>

        {/* Pro Tips */}
        <AsideBlock label="Pro tips">
          <div class="mt-2 space-y-4 text-sm leading-relaxed text-white/60">
            <div>
              <p>
                The last adjective sets the tense for everything{" "}
                <span class="text-white/30">(like verbs)</span>:
              </p>
              <p class="mt-1 font-japanese text-base text-white/70">
                テストは難しくて、よくなかったです。
              </p>
              <p class="mt-1 text-white/40">
                The test was difficult and (the result) wasn't good. (Story of
                my life)
              </p>
            </div>
            <div>
              <p>You can chain multiple adjectives:</p>
              <p class="mt-1 font-japanese text-base text-white/70">
                この部屋は小さくて、古くて、高くて、最悪です。
              </p>
              <p class="mt-1 text-white/40">
                This room is small, old, expensive, and the worst.
              </p>
            </div>
          </div>
        </AsideBlock>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>

          <div class="space-y-6">
            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                How would you complain that your professor is strict and their
                tests are difficult?
              </p>
              <SelectText
                answer="先生は厳しくて、テストも難しいです。"
                a="先生は厳しいで、テストも難しいです。"
                b="先生は厳しくて、テストも難しいです。"
                c="先生が厳しくて、テストが難しいです。"
                class="text-xl"
              />
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>い-adj: drop い, add くて (安い → 安くて)</SummaryItem>
          <SummaryItem>
            な-adj: drop な, add で (静かな → 静かで)
          </SummaryItem>
          <SummaryItem>
            Nouns: drop です, add で (学生です → 学生で)
          </SummaryItem>
          <SummaryItem>
            Last item sets the tense, just like verb chains
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
