import { createFileRoute } from "@tanstack/solid-router"
import { For } from "solid-js"
import { TextField, TextFieldInput } from "@/components/ui/text-field"
import WanakanaWrapper from "@/features/wanakana/WanaKana"
import BigNumbers from "@/components/charts/BigNumbers"
import YouTubeVideo from "@/features/youtube/YouTube"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute("/lessons/_chapter-2/big-numbers")({
  component: BigNumbersLesson,
})

function BigNumbersLesson() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        万
      </span>

      <LessonHeader
        chapter="Chapter 2 · Numbers"
        title={
          <>
            <span class="italic">BIG</span> Numbers
          </>
        }
        subtitle="Hundreds, thousands, and ten-thousands in Japanese."
      >
        <OverviewItem>Numbers from 100 to 99,999</OverviewItem>
        <OverviewItem>Reading digits and kanji numbers</OverviewItem>
        <OverviewItem>Irregular readings for 百, 千, 万</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="space-y-4">
          <p class="leading-relaxed text-white/70">
            Understanding big numbers in Japanese is essential for navigating
            everyday situations, such as reading prices, dealing with currency,
            or discussing quantities. It's especially important because Japanese
            currency primarily deals with large values. In this lesson, we'll
            explore big numbers in Japanese and practice reading them as both
            digits and kanji.
          </p>

          <YouTubeVideo
            videoId="qqT1oL7Edyk"
            title="How to Count in Japanese (1 to 1 Million+) 🇯🇵"
            credit="NihongoDekita with Sayaka"
          />

          <BigNumbers />

          <p class="text-sm italic text-white/40">
            *Note that <span class="font-japanese not-italic">一万</span> is{" "}
            <span class="font-japanese not-italic">
              <span class="underline underline-offset-[3px]">いち</span>まん
            </span>{" "}
            (not <span class="font-japanese not-italic">まん</span>), while 千
            is just <span class="font-japanese not-italic">せん</span> (not{" "}
            <span class="font-japanese not-italic">いちせん</span>), and 百 is
            just <span class="font-japanese not-italic">ひゃく</span> (not{" "}
            <span class="font-japanese not-italic">いちひゃく</span>).
          </p>
        </div>

        {/* Digits Practice */}
        <div class="space-y-4">
          <SectionLabel>Read the digits</SectionLabel>
          <p class="leading-relaxed text-white/70">
            Read the following numbers. Fill in the answers (in{" "}
            <span class="font-japanese">ひらがな</span>) if you want to check
            your knowledge.
          </p>
          <DigitsPractice />
        </div>

        {/* Kanji Numbers Practice */}
        <div class="space-y-4">
          <SectionLabel>Read the kanji</SectionLabel>
          <p class="leading-relaxed text-white/70">
            Read the following <span class="font-japanese">漢字</span> (kanji)
            numbers. Fill in the answers (in{" "}
            <span class="font-japanese">ひらがな</span>) if you want to check
            your knowledge{" "}
            <span class="text-sm text-white/40">
              (this might feel painful at first, but you'll improve if you
              practice!)
            </span>
            .
          </p>
          <NumbersKanjiPractice />
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            百 (ひゃく) = 100, 千 (せん) = 1,000, 万 (まん) = 10,000
          </SummaryItem>
          <SummaryItem>
            一万 is いちまん, but 千 is just せん and 百 is just ひゃく
          </SummaryItem>
          <SummaryItem>
            Watch for irregular readings (さんびゃく, はっぴゃく, etc.)
          </SummaryItem>
          <SummaryItem>
            Practice reading both digits and kanji numbers
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}

function DigitsPractice() {
  const items = [
    "15",
    "37",
    "58",
    "79",
    "123",
    "256",
    "389",
    "612",
    "785",
    "941",
    "1,243",
    "2,589",
    "3,752",
    "5,981",
    "6,374",
    "8,895",
    "9,221",
    "12,345",
    "68,734",
    "95,678",
  ]

  return (
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      <For each={items}>
        {(item) => (
          <div class="flex flex-col items-center">
            <label class="mb-1 text-center text-base text-white/70">
              {item}
            </label>
            <TextField class="w-full max-w-xs">
              <WanakanaWrapper enabled={true} watch={null}>
                <TextFieldInput class="text-center text-xl" />
              </WanakanaWrapper>
            </TextField>
          </div>
        )}
      </For>
    </div>
  )
}

function NumbersKanjiPractice() {
  const items = [
    "十五", // 15
    "四十二", // 42
    "七十五", // 75
    "百六", // 106
    "二百三十四", // 234
    "三百五十七", // 357
    "四百八十二", // 482
    "五百九十九", // 599
    "千三十四", // 1034
    "千八百五十", // 1850
    "二千四百二十", // 2420
    "三千六百七十五", // 3675
    "四千九百八十三", // 4983
    "六千五百七", // 6507
    "七千九百十二", // 7912
    "一万一千五百", // 11500
    "一万三千四百二十", // 13420
    "三万二千六百五十", // 32650
    "五万七千八百四十", // 57840
    "九万四千三百二十一", // 94321
  ]

  return (
    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
      <For each={items}>
        {(item) => (
          <div class="flex flex-col items-center">
            <label class="font-japanese mb-1 text-center text-base text-white/70">
              {item}
            </label>
            <TextField class="w-full max-w-xs">
              <WanakanaWrapper enabled={true} watch={null}>
                <TextFieldInput class="text-center text-xl" />
              </WanakanaWrapper>
            </TextField>
          </div>
        )}
      </For>
    </div>
  )
}
