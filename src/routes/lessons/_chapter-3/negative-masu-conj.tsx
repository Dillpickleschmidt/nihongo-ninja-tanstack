import { createFileRoute } from "@tanstack/solid-router"
import { For } from "solid-js"
import Romaji from "@/components/text/Romaji"
import { TextField, TextFieldInput } from "@/components/ui/text-field"
import WanaKanaWrapper from "@/features/wanakana/WanaKana"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute(
  "/lessons/_chapter-3/negative-masu-conj",
)({
  component: NegativeMasuConj,
})

function NegativeMasuConj() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        否
      </span>

      <LessonHeader
        chapter="Chapter 3 · Grammar"
        title={
          <>
            Negative{" "}
            <span class="font-japanese text-emerald-500">ます</span> Form
          </>
        }
        subtitle="One attachment turns any ます verb negative."
      >
        <OverviewItem>
          Adding{" "}
          <span class="font-japanese font-semibold text-indigo-400">
            ません
          </span>{" "}
          to the stem
        </OverviewItem>
        <OverviewItem>Works with godan, ichidan, and irregulars</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="space-y-4">
          <p class="leading-relaxed text-white/70">
            Now that you know how to make{" "}
            <span class="font-japanese text-xl font-semibold text-emerald-500">
              ます
            </span>{" "}
            stems with godan, ichidan, and irregular verbs, you can easily make
            the negative forms. All you have to do is add{" "}
            <span class="font-japanese text-xl font-semibold text-indigo-400">
              ません
            </span>{" "}
            to the stem.
          </p>
        </div>

        {/* Examples */}
        <div class="space-y-4">
          <SectionLabel>Examples</SectionLabel>
          <div class="space-y-3">
            <div class="rounded-lg bg-white/[0.04] p-4 text-center">
              <div class="flex items-center justify-center gap-3 font-japanese text-xl">
                <Romaji romaji="To drink" class="text-xs">
                  飲む
                </Romaji>
                <span class="text-white/40">→</span>
                <span>飲み</span>
                <span class="text-white/40">→</span>
                <Romaji romaji="(I) don't drink" class="text-xs">
                  飲み
                  <span class="font-semibold text-indigo-400">ません</span>
                </Romaji>
              </div>
            </div>
            <div class="rounded-lg bg-white/[0.04] p-4 text-center">
              <div class="flex items-center justify-center gap-3 font-japanese text-xl">
                <Romaji romaji="To eat" class="text-xs">
                  食べる
                </Romaji>
                <span class="text-white/40">→</span>
                <span>食べ</span>
                <span class="text-white/40">→</span>
                <Romaji romaji="(I) don't eat" class="text-xs">
                  食べ
                  <span class="font-semibold text-indigo-400">ません</span>
                </Romaji>
              </div>
            </div>
          </div>
        </div>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>
          <p class="leading-relaxed text-white/70">
            Conjugate the following verbs into their negative{" "}
            <span class="font-japanese text-xl font-semibold text-emerald-500">
              ます
            </span>{" "}
            form, <span class="font-semibold text-white/90">using kanji</span>.
          </p>
          <p class="text-sm italic text-white/40">
            *From this lesson onwards, we'll expect you to write using kanji
            just as Japanese people would unless otherwise specified.
          </p>
          <NegativeMasuPractice />
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            Take the ます stem and add ません instead of ます
          </SummaryItem>
          <SummaryItem>
            飲む → 飲み + ません = 飲みません
          </SummaryItem>
          <SummaryItem>
            食べる → 食べ + ません = 食べません
          </SummaryItem>
          <SummaryItem>
            する → しません, 来る → 来ません
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}

const verbs = [
  "行く",
  "話す",
  "読む",
  "見る",
  "聞く",
  "起きる",
  "寝る",
  "する",
  "来る",
  "帰る",
  "勉強する",
]

export default function NegativeMasuPractice() {
  const randomizedVerbs = [...verbs].sort(() => Math.random() - 0.5)

  return (
    <div class="flex flex-col items-center text-xl">
      <For each={randomizedVerbs}>
        {(verb) => (
          <div class="mb-4 flex items-center">
            <div class="font-japanese w-28">{verb}</div>
            <div class="mr-4 text-white/40">→</div>
            <TextField class="w-48">
              <WanaKanaWrapper enabled={true} watch={verb}>
                <TextFieldInput class="font-japanese text-lg bg-white/4" />
              </WanaKanaWrapper>
            </TextField>
          </div>
        )}
      </For>
    </div>
  )
}
