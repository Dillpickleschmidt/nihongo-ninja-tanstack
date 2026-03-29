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

export const Route = createFileRoute("/lessons/_chapter-7/adj-to-adv")({
  component: AdjToAdv,
})

function AdjToAdv() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        副
      </span>

      <LessonHeader
        chapter="Chapter 7 · Grammar"
        title={<>Converting Adjectives into Adverbs</>}
        subtitle="quick → quickly"
      >
        <OverviewItem>
          <span class="font-japanese font-semibold text-teal-400">い</span>{" "}
          → く (early → early [adverb])
        </OverviewItem>
        <OverviewItem>
          <span class="font-japanese font-semibold text-yellow-400">な</span>{" "}
          → に (quiet → quietly)
        </OverviewItem>
        <OverviewItem>Placement and easy mistakes</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="space-y-4">
          <p class="leading-relaxed text-white/70">
            Just like in English where we can turn "quick" into "quickly",
            Japanese lets you turn adjectives into adverbs to describe how
            actions are performed. Each type of adjective has its own conversion
            rule.
          </p>
          <div class="space-y-2">
            <p class="text-sm text-white/50">Part 1:</p>
            <YouTubeVideo
              videoId="VrDWfzfSkpQ"
              title="How to change Adjectives into Adverbial usage of adjective in Japanese (Part1)"
              credit="Miku Real Japanese"
            />
          </div>
          <div class="space-y-2">
            <p class="text-sm text-white/50">Part 2:</p>
            <YouTubeVideo
              videoId="JLmJJgr-CiY"
              title="How to change Adjectives into Adverbial usage of adjective in Japanese (Part2)"
              credit="Miku Real Japanese"
            />
          </div>
        </div>

        {/* い-Adjectives */}
        <div class="space-y-4">
          <div class="text-center">
            <p class="font-japanese text-2xl text-teal-400">い → く</p>
            <SectionLabel class="mt-1">い-adjectives</SectionLabel>
          </div>
          <p class="leading-relaxed text-white/70">Replace い with く</p>

          <div class="space-y-3">
            <div class="rounded-lg bg-white/[0.04]">
              <p class="px-4 pt-3 pb-2 font-japanese text-sm text-white/40">
                早い → <span class="text-teal-400">早く</span>
              </p>
              <div class="border-t border-white/5 px-4 pt-3 pb-4">
                <p class="font-japanese text-lg text-white/90">
                  早く起きます。
                </p>
                <p class="mt-1 text-sm text-white/40">I wake up early.</p>
              </div>
            </div>
            <div class="rounded-lg bg-white/[0.04]">
              <p class="px-4 pt-3 pb-2 font-japanese text-sm text-white/40">
                楽しい → <span class="text-teal-400">楽しく</span>
              </p>
              <div class="border-t border-white/5 px-4 pt-3 pb-4">
                <p class="font-japanese text-lg text-white/90">
                  楽しく勉強します。
                </p>
                <p class="mt-1 text-sm text-white/40">I study enjoyably.</p>
              </div>
            </div>
          </div>
        </div>

        {/* な-Adjectives */}
        <div class="space-y-4">
          <div class="text-center">
            <p class="font-japanese text-2xl text-yellow-400">な → に</p>
            <SectionLabel class="mt-1">な-adjectives</SectionLabel>
          </div>
          <p class="leading-relaxed text-white/70">Replace な with に</p>

          <div class="space-y-3">
            <div class="rounded-lg bg-white/[0.04]">
              <p class="px-4 pt-3 pb-2 font-japanese text-sm text-white/40">
                静か → <span class="text-yellow-400">静かに</span>
              </p>
              <div class="border-t border-white/5 px-4 pt-3 pb-4">
                <p class="font-japanese text-lg text-white/90">
                  静かに話します。
                </p>
                <p class="mt-1 text-sm text-white/40">I speak quietly.</p>
              </div>
            </div>
            <div class="rounded-lg bg-white/[0.04]">
              <p class="px-4 pt-3 pb-2 font-japanese text-sm text-white/40">
                上手 → <span class="text-yellow-400">上手に</span>
              </p>
              <div class="border-t border-white/5 px-4 pt-3 pb-4">
                <p class="font-japanese text-lg text-white/90">
                  上手に料理を作ります。
                </p>
                <p class="mt-1 text-sm text-white/40">I cook skillfully.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Common Examples */}
        <div class="space-y-4">
          <SectionLabel>Common examples</SectionLabel>
          <div class="grid gap-3 sm:grid-cols-2">
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-lg font-bold text-white/90">
                速く走る
              </p>
              <p class="text-sm text-white/50">run fast</p>
              <p class="mt-2 font-japanese text-white/70">
                彼は速く走ります。
              </p>
              <p class="mt-1 text-sm text-white/40">He runs fast.</p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-lg font-bold text-white/90">
                優しく話す
              </p>
              <p class="text-sm text-white/50">speak kindly</p>
              <p class="mt-2 font-japanese text-white/70">
                先生は優しく話します。
              </p>
              <p class="mt-1 text-sm text-white/40">
                The teacher speaks kindly.
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-lg font-bold text-white/90">
                丁寧に書く
              </p>
              <p class="text-sm text-white/50">write carefully</p>
              <p class="mt-2 font-japanese text-white/70">
                漢字を丁寧に書きます。
              </p>
              <p class="mt-1 text-sm text-white/40">
                I write kanji carefully.
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="font-japanese text-lg font-bold text-white/90">
                自由に話す
              </p>
              <p class="text-sm text-white/50">speak freely</p>
              <p class="mt-2 font-japanese text-white/70">
                自由に話してください。
              </p>
              <p class="mt-1 text-sm text-white/40">Please speak freely.</p>
            </div>
          </div>
        </div>

        {/* Easy Mistake */}
        <div class="space-y-4">
          <SectionLabel>Easy mistake</SectionLabel>
          <p class="leading-relaxed text-white/70">
            Don't add に to い-adjectives:
          </p>
          <div class="space-y-2">
            <div class="rounded-lg bg-red-500/5 p-4 ring-1 ring-red-500/20">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-red-400/60">
                Incorrect
              </p>
              <p class="font-japanese text-base text-white/50">
                ❌ 早くに起きます。
              </p>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4">
              <p class="mb-1 text-xs font-semibold uppercase tracking-wider text-white/30">
                Correct
              </p>
              <p class="font-japanese text-base text-white/80">
                早く起きます。
              </p>
            </div>
          </div>
        </div>

        {/* Position */}
        <AsideBlock label="Position in sentence">
          <p class="mt-2 text-sm leading-relaxed text-white/60">
            Like in English, adverbs usually come before the verb they modify:
          </p>
          <div class="mt-3 rounded-lg bg-white/[0.04] px-4 py-3">
            <p class="font-japanese text-base text-white/80">
              ゆっくり
              <span class="underline decoration-green-500 underline-offset-4">
                歩きます
              </span>
              。
            </p>
            <p class="mt-1 text-sm text-white/40">
              I walk slowly. (The adverb ゆっくり modifies 歩きます)
            </p>
          </div>
        </AsideBlock>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>

          <div class="space-y-6">
            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                How would you say "Please speak slowly"?
              </p>
              <SelectText
                answer="ゆっくり話してください。"
                a="ゆっくりに話してください。"
                b="ゆっくり話してください。"
                c="ゆっくりな話してください。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                You want to say "I wake up early"
              </p>
              <SelectText
                answer="早く起きます。"
                a="早い起きます。"
                b="早くに起きます。"
                c="早く起きます。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                How would you say "Let's study quietly"?
              </p>
              <SelectText
                answer="静かに勉強しましょう。"
                a="静かく勉強しましょう。"
                b="静かに勉強しましょう。"
                c="静か勉強しましょう。"
                class="text-xl"
              />
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            い-adj: replace い with く (早い → 早く)
          </SummaryItem>
          <SummaryItem>
            な-adj: replace な with に (静かな → 静かに)
          </SummaryItem>
          <SummaryItem>
            Don't mix them up — no くに or なく
          </SummaryItem>
          <SummaryItem>
            Adverbs go before the verb they modify
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
