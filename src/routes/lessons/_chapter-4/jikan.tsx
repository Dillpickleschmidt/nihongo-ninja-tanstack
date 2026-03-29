import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import MinutesChart1 from "@/components/charts/MinutesChart1"
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

export const Route = createFileRoute("/lessons/_chapter-4/jikan")({
  component: Jikan,
})

function Jikan() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        間
      </span>

      <LessonHeader
        chapter="Chapter 4 · Grammar"
        title={<>Time Duration</>}
        subtitle="How to say how long something takes."
      >
        <OverviewItem>
          Hours with{" "}
          <span class="font-japanese font-semibold text-white/60">時間</span>{" "}
          (no particle needed)
        </OverviewItem>
        <OverviewItem>
          Approximate time with ぐらい / くらい
        </OverviewItem>
        <OverviewItem>Half hours with 半, minutes with 分</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="leading-relaxed text-white/70">
          <p>
            Now that you can tell the time in Japanese, let's learn how to say
            how long something takes!
          </p>
        </div>

        {/* Basic Pattern */}
        <div class="space-y-4">
          <SectionLabel>Basic pattern</SectionLabel>
          <GlowBox>
            <p class="text-center text-xl text-white/90">
              [number]{" "}
              <Furigana furigana={<span class="text-xs">じかん</span>}>
                時間
              </Furigana>{" "}
              <span class="text-sm text-white/40">(no particle needed!)</span>
            </p>
          </GlowBox>

          <div class="grid gap-2 sm:grid-cols-3">
            <div class="rounded-lg bg-white/[0.04] px-4 py-3 text-center">
              <span class="font-japanese text-lg text-white/90">一時間</span>
              <span class="ml-2 text-sm text-white/40">1 hour</span>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3 text-center">
              <span class="font-japanese text-lg text-white/90">三時間</span>
              <span class="ml-2 text-sm text-white/40">3 hours</span>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3 text-center">
              <span class="font-japanese text-lg text-white/90">七時間</span>
              <span class="ml-2 text-sm text-white/40">7 hours</span>
            </div>
          </div>

          <p class="leading-relaxed text-white/70">
            Unlike other nouns in Japanese, when talking about duration, 時間
            stands alone without any particle:
          </p>

          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-white/80">
              田中さんは図書館で三時間勉強しました。
            </p>
            <p class="mt-1 text-white/50">
              Tanaka studied at the library for three hours.
            </p>
          </div>
        </div>

        {/* Approximate */}
        <div class="space-y-4">
          <SectionLabel>Making it approximate</SectionLabel>
          <p class="leading-relaxed text-white/70">
            Want to say "about 3 hours"? Add ぐらい (or くらい) after it:
          </p>

          <div class="rounded-lg bg-white/[0.04] px-4 py-3 text-center">
            <span class="font-japanese text-lg text-white/90">
              三時間ぐらい / 三時間くらい
            </span>
            <span class="ml-2 text-sm text-white/40">about 3 hours</span>
          </div>

          <AsideBlock>
            <p class="text-sm leading-relaxed text-white/60">
              ぐらい and くらい mean exactly the same thing - くらい is just a
              more casual way of writing it.
            </p>
          </AsideBlock>

          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-white/80">
              昨日二時間ぐらいテレビを見ました。
            </p>
            <p class="mt-1 text-white/50">
              I watched TV for about two hours yesterday.
            </p>
          </div>
        </div>

        {/* Half Hours */}
        <div class="space-y-4">
          <SectionLabel>Half hours</SectionLabel>
          <p class="leading-relaxed text-white/70">
            To say "and a half", add 半:
          </p>

          <div class="grid gap-2 sm:grid-cols-2">
            <div class="rounded-lg bg-white/[0.04] px-4 py-3 text-center">
              <span class="font-japanese text-lg text-white/90">一時間半</span>
              <span class="ml-2 text-sm text-white/40">1.5 hours</span>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3 text-center">
              <span class="font-japanese text-lg text-white/90">七時間半</span>
              <span class="ml-2 text-sm text-white/40">7.5 hours</span>
            </div>
          </div>

          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-white/80">
              トイレに一時間半いました。
            </p>
            <p class="mt-1 text-white/50">
              I was in the bathroom for an hour and a half.
            </p>
          </div>
        </div>

        {/* Combining */}
        <div class="space-y-4">
          <SectionLabel>Combining them</SectionLabel>
          <p class="leading-relaxed text-white/70">
            Want to combine them all? Remember ぐらい comes last:
          </p>

          <div class="rounded-lg bg-white/[0.04] px-4 py-3 text-center">
            <span class="font-japanese text-lg text-white/90">
              一時間半ぐらい
            </span>
            <span class="ml-2 text-sm text-white/40">
              about an hour and a half
            </span>
          </div>
        </div>

        {/* Minutes */}
        <div class="space-y-4">
          <SectionLabel>Expressing minutes</SectionLabel>
          <p class="leading-relaxed text-white/70">
            For exact minutes, use 分 (no particle needed!):
          </p>

          <div class="grid gap-2 sm:grid-cols-2">
            <div class="rounded-lg bg-white/[0.04] px-4 py-3 text-center">
              <span class="font-japanese text-lg text-white/90">三十分</span>
              <span class="ml-2 text-sm text-white/40">30 minutes</span>
            </div>
            <div class="rounded-lg bg-white/[0.04] px-4 py-3 text-center">
              <span class="font-japanese text-lg text-white/90">四十五分</span>
              <span class="ml-2 text-sm text-white/40">45 minutes</span>
            </div>
          </div>

          <p class="leading-relaxed text-white/70">
            Remember the unique readings of{" "}
            <span class="font-japanese font-medium text-white/90">
              分 (ふん・ぷん)
            </span>{" "}
            for each number!
          </p>

          <div class="py-6">
            <RevealBlock closedLabel="Review: minutes 1–10 (ふん・ぷん readings)">
              <MinutesChart1 />
            </RevealBlock>
          </div>

          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-white/80">
              バスを四十五分待ちました。
            </p>
            <p class="mt-1 text-white/50">
              I waited for the bus for 45 minutes.
            </p>
          </div>
        </div>

        {/* Hour + Minute */}
        <div class="space-y-4">
          <SectionLabel>Hour + minute duration</SectionLabel>
          <div class="rounded-lg bg-white/[0.04] p-4">
            <p class="font-japanese text-lg text-white/80">
              バスを一時間四十五分待ちました。
            </p>
            <p class="mt-1 text-white/50">
              I waited for the bus for an hour and 45 minutes.
            </p>
          </div>
        </div>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>
          <p class="text-center text-sm italic text-white/40">
            *Choose the correct expression for each situation*
          </p>

          <div class="space-y-6">
            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                Someone asks how long you studied yesterday. How would you say
                "I studied for 2 hours"?
              </p>
              <SelectText
                answer="二時間勉強しました。"
                a="二時間に勉強しました。"
                b="二時間を勉強しました。"
                c="二時間勉強しました。"
                d="二時間で勉強しました。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                You want to say you slept for about 8 hours. Which is correct?
              </p>
              <SelectText
                answer="八時間ぐらい寝ました。"
                a="八時間ぐらい寝ました。"
                b="八時間で寝ました。"
                c="八時間ぐらいに寝ました。"
                d="八時間を寝ました。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                How would you say "I waited for my friend for 1.5 hours"?
              </p>
              <SelectText
                answer="一時間半友だちを待ちました。"
                a="一時間半友だちを待ちました。"
                b="一時間と半友だちを待ちました。"
                c="一時間半に友だちを待ちました。"
                d="一時間と三十分友だちを待ちました。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-white/70">
                You want to say you studied for about 1.5 hours. Which is
                correct?
              </p>
              <SelectText
                answer="一時間半くらい勉強しました。"
                a="一時間半くらい勉強しました。"
                b="一時間くらい半勉強しました。"
                c="一時間ぐらいと半勉強しました。"
                d="一時間半で勉強しました。"
                class="text-xl"
              />
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            [number] 時間 for hours (no particle needed)
          </SummaryItem>
          <SummaryItem>
            Add ぐらい / くらい after for "about X hours"
          </SummaryItem>
          <SummaryItem>Add 半 for "and a half"</SummaryItem>
          <SummaryItem>
            Order: 時間 → 半 → ぐらい (一時間半ぐらい)
          </SummaryItem>
          <SummaryItem>
            分 for minutes, also no particle needed
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
