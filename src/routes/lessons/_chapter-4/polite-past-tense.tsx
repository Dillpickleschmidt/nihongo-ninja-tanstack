import type { JSX } from "solid-js"
import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import {
  StudentBubble,
  SenseiBubble,
} from "@/features/lessons/components/DialogueBubbles"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import AsideBlock from "@/features/lessons/components/AsideBlock"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute(
  "/lessons/_chapter-4/polite-past-tense",
)({
  component: PolitePastTense,
})

function PolitePastTense() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-foreground/[0.04] dark:text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        昨
      </span>

      <LessonHeader
        chapter="Chapter 4 · Grammar"
        title={<>Past Tense in Polite Japanese</>}
        subtitle="です → でした, ます → ました, ません → ませんでした."
      >
        <OverviewItem>
          Nouns: <span class="font-japanese font-semibold text-sky-400">です</span>{" "}
          → <span class="font-japanese font-semibold text-orange-400">でした</span>
        </OverviewItem>
        <OverviewItem>
          Verbs: <span class="font-japanese font-semibold text-sky-400">ます</span>{" "}
          → <span class="font-japanese font-semibold text-orange-400">ました</span>
        </OverviewItem>
        <OverviewItem>
          Negative: <span class="font-japanese font-semibold text-sky-400">ません</span>{" "}
          → <span class="font-japanese font-semibold text-orange-400">ませんでした</span>
        </OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="leading-relaxed text-foreground/75 dark:text-white/70">
          <p>
            Today we'll learn how to talk about past events in polite Japanese,
            starting with the simplest form.
          </p>
        </div>

        {/* 1. です → でした */}
        <div class="space-y-4">
          <div class="text-center">
            <p class="font-japanese text-2xl">
              <span class="text-sky-400">です</span>
              <span class="mx-2 text-lg text-muted-foreground dark:text-white/40">→</span>
              <span class="text-orange-400">でした</span>
            </p>
            <SectionLabel class="mt-1">1. Nouns</SectionLabel>
          </div>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            This basic transformation lets us describe past states:
          </p>

          <div class="grid gap-2 sm:grid-cols-3">
            <ConjCard
              from={<>学生<span class="text-sky-400">です</span></>}
              to={<>学生<span class="text-orange-400">でした</span></>}
            />
            <ConjCard
              from={<>先生<span class="text-sky-400">です</span></>}
              to={<>先生<span class="text-orange-400">でした</span></>}
            />
            <ConjCard
              from={<>大学生<span class="text-sky-400">です</span></>}
              to={<>大学生<span class="text-orange-400">でした</span></>}
            />
          </div>

          <div class="space-y-3">
            <StudentBubble>
              <p class="font-japanese text-lg text-foreground dark:text-white/90">
                専攻は何ですか。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/50">What's your major?</p>
            </StudentBubble>
            <SenseiBubble>
              <p class="font-japanese text-lg text-foreground dark:text-white/90">
                <Furigana furigana={<span class="text-xs">きょねん</span>}>
                  去年
                </Furigana>
                は経済<span class="text-orange-400">でした</span>。
                <Furigana furigana={<span class="text-xs">ことし</span>}>
                  今年
                </Furigana>
                は政治<span class="text-sky-400">です</span>。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/50">
                Last year it was Economics. This year it's Political Science.
              </p>
            </SenseiBubble>
          </div>
        </div>

        {/* 2. ます → ました */}
        <div class="space-y-4">
          <div class="text-center">
            <p class="font-japanese text-2xl">
              <span class="text-sky-400">ます</span>
              <span class="mx-2 text-lg text-muted-foreground dark:text-white/40">→</span>
              <span class="text-orange-400">ました</span>
            </p>
            <SectionLabel class="mt-1">2. Verbs</SectionLabel>
          </div>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Now let's look at how to describe past actions{" "}
            <span class="text-muted-foreground dark:text-white/40">(verbs)</span>:
          </p>

          <div class="grid gap-2 sm:grid-cols-3">
            <ConjCard
              from={<>行き<span class="text-sky-400">ます</span></>}
              to={<>行き<span class="text-orange-400">ました</span></>}
            />
            <ConjCard
              from={<>食べ<span class="text-sky-400">ます</span></>}
              to={<>食べ<span class="text-orange-400">ました</span></>}
            />
            <ConjCard
              from={<>飲み<span class="text-sky-400">ます</span></>}
              to={<>飲み<span class="text-orange-400">ました</span></>}
            />
          </div>

          <div class="space-y-3">
            <StudentBubble>
              <p class="font-japanese text-lg text-foreground dark:text-white/90">
                昨日、図書館に行き
                <span class="text-orange-400">ました</span>か。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/50">
                Did you go to the library yesterday?
              </p>
            </StudentBubble>
            <SenseiBubble>
              <p class="font-japanese text-lg text-foreground dark:text-white/90">
                はい、図書館で勉強
                <span class="text-orange-400">しました</span>
                。それから、カフェでコーヒーを飲み
                <span class="text-orange-400">ました</span>。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/50">
                Yes, I studied at the library. After that, I drank coffee at a
                cafe.
              </p>
            </SenseiBubble>
          </div>
        </div>

        {/* 3. Negative Past */}
        <div class="space-y-4">
          <div class="text-center">
            <p class="font-japanese text-2xl">
              <span class="text-sky-400">ません</span>
              <span class="mx-2 text-lg text-muted-foreground dark:text-white/40">→</span>
              <span class="text-orange-400">ませんでした</span>
            </p>
            <SectionLabel class="mt-1">3. Negative past</SectionLabel>
          </div>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            For describing actions that didn't happen:
          </p>

          <div class="grid gap-2 sm:grid-cols-2">
            <ConjCard
              from={<>飲み<span class="text-sky-400">ません</span></>}
              to={<>飲み<span class="text-orange-400">ませんでした</span></>}
            />
            <ConjCard
              from={<>見<span class="text-sky-400">ません</span></>}
              to={<>見<span class="text-orange-400">ませんでした</span></>}
            />
          </div>

          <AsideBlock label="Quick note">
            <p class="mt-2 text-sm leading-relaxed text-muted-foreground dark:text-white/60">
              You might sometimes hear variations like{" "}
              <span class="font-japanese">行かなかった</span> instead of{" "}
              <span class="font-japanese">行きませんでした</span>. Don't worry
              about these for now - we'll learn more about short forms in later
              chapters!
            </p>
          </AsideBlock>

          <div class="space-y-3">
            <StudentBubble>
              <p class="font-japanese text-lg text-foreground dark:text-white/90">
                昨日、映画を見ましたか。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/50">
                Did you watch a movie yesterday?
              </p>
            </StudentBubble>
            <SenseiBubble>
              <p class="font-japanese text-lg text-foreground dark:text-white/90">
                いいえ、見<span class="text-orange-400">ませんでした</span>
                。図書館で勉強<span class="text-orange-400">しました</span>。
              </p>
              <p class="mt-1 text-sm text-muted-foreground dark:text-white/50">
                No, I didn't watch a movie. I studied at the library.
              </p>
            </SenseiBubble>
          </div>
        </div>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>
          <p class="text-center text-sm italic text-muted-foreground dark:text-white/40">
            *Choose the correct form for each situation*
          </p>

          <div class="space-y-6">
            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                Your friend asks what your major was last year. How would you
                say "It was Economics"?
              </p>
              <SelectText
                answer="経済でした。"
                a="経済です。"
                b="経済でした。"
                c="経済だでした。"
                d="経済ました。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                You want to say you didn't study Japanese yesterday. Which is
                correct?
              </p>
              <SelectText
                answer="日本語を勉強しませんでした。"
                a="日本語を勉強しますでした。"
                b="日本語を勉強でした。"
                c="日本語を勉強しませんでした。"
                d="日本語を勉強じゃありませんでした。"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                Complete this conversation: "昨日の晩ご飯は何を___？" (What did
                you eat for dinner yesterday?)
              </p>
              <SelectText
                answer="食べましたか"
                a="食べますか"
                b="食べましたか"
                c="食べでしたか"
                d="食べませんでしたか"
                class="text-xl"
              />
            </div>

            <div class="space-y-3">
              <p class="leading-relaxed text-foreground/75 dark:text-white/70">
                Your friend asks if you watched a movie last week. How would you
                say "No, I didn't watch it"?
              </p>
              <SelectText
                answer="いいえ、見ませんでした。"
                a="いいえ、見ましたでした。"
                b="いいえ、見ませんでした。"
                c="いいえ、見でした。"
                d="いいえ、見ますでした。"
                class="text-xl"
              />
            </div>
          </div>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            です → でした (noun/adjective past)
          </SummaryItem>
          <SummaryItem>
            ます → ました (verb past)
          </SummaryItem>
          <SummaryItem>
            ません → ませんでした (negative verb past)
          </SummaryItem>
          <SummaryItem>
            Just swap the ending — the stem stays the same
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}

function ConjCard(props: { from: JSX.Element; to: JSX.Element }) {
  return (
    <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3 text-center">
      <span class="font-japanese text-lg">{props.from}</span>
      <span class="mx-2 text-muted-foreground dark:text-white/40">→</span>
      <span class="font-japanese text-lg">{props.to}</span>
    </div>
  )
}

