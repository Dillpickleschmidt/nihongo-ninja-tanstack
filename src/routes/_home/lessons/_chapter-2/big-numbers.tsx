// routes/lessons/_chapter-2/big-numbers.tsx
import { createFileRoute } from "@tanstack/solid-router"
import BigNumbers from "@/components/charts/BigNumbers"
import YouTubeVideo from "@/features/youtube/YouTube"

export const Route = createFileRoute("/_home/lessons/_chapter-2/big-numbers")({
  loader: async () => ({
    contentBox: {
      nextButtonLink: "/lessons/_chapter-2/practice/japanese-money",
    },
  }),
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div class="mb-32">
      {/* --- Header --- */}
      <header class="mx-auto max-w-3xl px-6 py-14 text-center">
        <h1 class="mb-3 text-5xl font-extrabold tracking-tight">
          <span class="italic">BIG</span> Numbers
        </h1>
        <div class="mx-auto mb-6 h-1 w-20 rounded bg-emerald-400" />
      </header>

      {/* --- Main Content --- */}
      <main class="mx-auto max-w-3xl space-y-16 px-6 leading-relaxed">
        {/* Intro */}
        <section class="space-y-6">
          <p>
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

          <p class="text-muted-foreground text-base italic">
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
        </section>

        {/* Digits Practice */}
        <section class="space-y-6">
          <p>
            Read the following numbers. Fill in the answers (in{" "}
            <span class="font-japanese">ひらがな</span>) if you want to check
            your knowledge.
          </p>
          <DigitsPractice />
        </section>

        {/* Kanji Numbers Practice */}
        <section class="space-y-6">
          <p>
            Read the following <span class="font-japanese">漢字</span> (kanji)
            numbers. Fill in the answers (in{" "}
            <span class="font-japanese">ひらがな</span>) if you want to check
            your knowledge{" "}
            <span class="text-muted-foreground text-base">
              (this might feel painful at first, but you'll improve if you
              practice!)
            </span>
            .
          </p>
          <NumbersKanjiPractice />
        </section>

        {/* Wrap-up */}
        <section>
          <p>
            By practicing these numbers, you will become more comfortable with
            reading and understanding prices. In the next lesson, we'll dive
            deep into Japanese currency and shopping.
          </p>
        </section>
      </main>
    </div>
  )
}

import { TextField, TextFieldInput } from "@/components/ui/text-field"
import { For } from "solid-js"

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
            <label class="mb-1 text-center text-base">{item}</label>
            <TextField class="w-full max-w-xs">
              <TextFieldInput class="text-center text-xl" />
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
            <label class="mb-1 text-center text-base">{item}</label>
            <TextField class="w-full max-w-xs">
              <TextFieldInput class="text-center text-xl" />
            </TextField>
          </div>
        )}
      </For>
    </div>
  )
}
