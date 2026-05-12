import { createFileRoute } from "@tanstack/solid-router"
import Furigana from "@/components/text/Furigana"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute("/lessons/_chapter-6/dame")({
  component: Dame,
})

function Dame() {
  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-foreground/[0.04] dark:text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        駄
      </span>

      <LessonHeader
        chapter="Chapter 6 · Grammar"
        title={
          <>
            <span class="font-japanese text-red-400">だめ</span> — No Good
          </>
        }
        subtitle="A versatile word for saying something isn't allowed, won't work, or is hopeless."
      >
        <OverviewItem>Not allowed: [action] はだめです</OverviewItem>
        <OverviewItem>No good / useless: [thing] はだめです</OverviewItem>
        <OverviewItem>Direct prohibition: だめ！</OverviewItem>
      </LessonHeader>

      <div class="space-y-14 px-8">
        {/* Intro */}
        <div class="leading-relaxed text-foreground/75 dark:text-white/70">
          <p>
            てはいけません is well and good and all, but its use is fairly
            limited, and sometimes you just want something more versatile. For
            that, we have{" "}
            <span class="font-japanese font-medium text-red-400">だめ</span>!
          </p>
        </div>

        {/* What does だめ mean */}
        <div class="space-y-4">
          <SectionLabel>
            What does{" "}
            <span class="font-japanese text-xs text-red-400">だめ</span> mean?
          </SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            The word だめ is typically written in hiragana as だめ, or in
            katakana as <span class="text-nowrap">ダメ</span>, or occasionally
            in kanji as 駄目, though the hiragana/katakana forms are both far
            more common. Its meanings include:
          </p>
          <div class="grid grid-cols-2 gap-2 sm:grid-cols-5">
            {["No good", "Not allowed", "Impossible", "Useless", "Hopeless"].map(
              (m) => (
                <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-2 text-center text-sm text-muted-foreground dark:text-white/60">
                  {m}
                </div>
              ),
            )}
          </div>
          <p class="text-sm text-muted-foreground dark:text-white/50">
            Its meaning depends on the context in which it is used.
          </p>
        </div>

        {/* Basic Uses */}
        <div class="space-y-6">
          <SectionLabel>
            Basic uses of{" "}
            <span class="font-japanese text-xs text-red-400">だめ</span>
          </SectionLabel>

          {/* 1. Not allowed */}
          <div class="space-y-4">
            <p class="text-lg font-bold text-foreground dark:text-white/90">
              1. To say something is not allowed
            </p>
            <p class="text-sm text-muted-foreground dark:text-white/50">
              Structure:{" "}
              <span class="font-japanese text-foreground/75 dark:text-white/70">
                [Action] + は + だめです。
              </span>
            </p>
            <div class="space-y-2">
              <div class="flex items-baseline justify-between gap-4 rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
                <span class="font-japanese text-lg text-foreground dark:text-white/90">
                  ここでタバコを吸ってはだめです。
                </span>
                <span class="shrink-0 text-sm text-muted-foreground dark:text-white/40">
                  Smoking is not allowed here.
                </span>
              </div>
              <div class="flex items-baseline justify-between gap-4 rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
                <span class="font-japanese text-lg text-foreground dark:text-white/90">
                  今、テレビを見てはだめです。
                </span>
                <span class="shrink-0 text-sm text-muted-foreground dark:text-white/40">
                  You must not watch TV now.
                </span>
              </div>
            </div>
          </div>

          {/* 2. No good / useless */}
          <div class="space-y-4">
            <p class="text-lg font-bold text-foreground dark:text-white/90">
              2. To say something is no good or useless
            </p>
            <p class="text-sm text-muted-foreground dark:text-white/50">
              Structure:{" "}
              <span class="font-japanese text-foreground/75 dark:text-white/70">
                [Thing] + は + だめです。
              </span>
            </p>
            <div class="space-y-2">
              <div class="flex items-baseline justify-between gap-4 rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
                <span class="font-japanese text-lg text-foreground dark:text-white/90">
                  このペンはだめです。
                </span>
                <span class="shrink-0 text-sm text-muted-foreground dark:text-white/40">
                  This pen doesn't work.
                </span>
              </div>
              <div class="flex items-baseline justify-between gap-4 rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
                <span class="font-japanese text-lg text-foreground dark:text-white/90">
                  この建物はもうだめです。
                </span>
                <span class="shrink-0 text-sm text-muted-foreground dark:text-white/40">
                  This building is no good anymore.
                </span>
              </div>
            </div>
          </div>

          {/* 3. Direct prohibition */}
          <div class="space-y-4">
            <p class="text-lg font-bold text-foreground dark:text-white/90">
              3. To say someone shouldn't do something
            </p>
            <div class="space-y-2">
              <div class="flex items-baseline justify-between gap-4 rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
                <span class="font-japanese text-lg text-foreground dark:text-white/90">
                  だめ！それを食べないで！
                </span>
                <span class="shrink-0 text-sm text-muted-foreground dark:text-white/40">
                  No! Don't eat that!
                </span>
              </div>
              <div class="flex items-baseline justify-between gap-4 rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
                <span class="font-japanese text-lg text-foreground dark:text-white/90">
                  だめですよ！
                </span>
                <span class="shrink-0 text-sm text-muted-foreground dark:text-white/40">
                  No, you can't!
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Fun Example */}
        <div class="space-y-4">
          <SectionLabel>Fun example</SectionLabel>
          <div class="rounded-lg bg-card/60 dark:bg-white/[0.04] p-4">
            <p class="mb-3 text-sm font-semibold text-muted-foreground dark:text-white/50">
              POV: You're at a fancy restaurant with your 6-year-old for some
              reason:
            </p>
            <div class="space-y-2 text-sm">
              <div>
                <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                  A: このスープを指で食べます！
                </p>
                <p class="text-muted-foreground dark:text-white/40">
                  I'm going to eat this soup with my fingers!
                </p>
              </div>
              <div>
                <p class="font-japanese text-base text-foreground/80 dark:text-white/80">
                  B: いやいや、だめです。
                  <Furigana furigana={<span class="text-xs">ぜったい</span>}>
                    絶対
                  </Furigana>
                  だめです！
                </p>
                <p class="text-muted-foreground dark:text-white/40">
                  No no, don't do that. Absolutely not allowed!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Practice */}
        <div class="space-y-5">
          <h3 class="text-center text-2xl font-bold">Practice</h3>
          <p class="text-center text-sm italic text-muted-foreground dark:text-white/40">
            *Choose the correct answers*
          </p>
          <p class="text-center text-sm italic text-muted-foreground dark:text-white/40">[wip]</p>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            だめ = no good, not allowed, useless, hopeless
          </SummaryItem>
          <SummaryItem>
            [Action] てはだめです = "you must not do [action]"
          </SummaryItem>
          <SummaryItem>
            [Thing] はだめです = "[thing] is no good / doesn't work"
          </SummaryItem>
          <SummaryItem>
            だめ！ on its own = direct "No!" / "Don't!"
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
