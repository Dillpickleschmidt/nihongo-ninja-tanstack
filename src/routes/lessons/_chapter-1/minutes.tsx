import { createFileRoute } from "@tanstack/solid-router"
import { useBreakpoints } from "@/hooks/useBreakpoints"
import MinutesChart1 from "@/components/charts/MinutesChart1"
import MinutesChart2 from "@/components/charts/MinutesChart2"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/custom/collapsible"
import LessonHeader, {
  OverviewItem,
} from "@/features/lessons/components/LessonHeader"
import SectionLabel from "@/features/lessons/components/SectionLabel"
import LessonSummary, {
  SummaryItem,
} from "@/features/lessons/components/LessonSummary"

export const Route = createFileRoute("/lessons/_chapter-1/minutes")({
  loader: () => ({ maxWidth: "max-w-5xl" }),
  component: Minutes,
})

function Minutes() {
  const bp = useBreakpoints()

  return (
    <div class="relative pb-32">
      {/* Background character */}
      <span class="pointer-events-none absolute top-8 left-24 select-none font-japanese text-[10rem] leading-none text-foreground/[0.04] dark:text-white/[0.03] sm:top-11 sm:left-auto sm:right-8 sm:text-[11rem]">
        分
      </span>

      <LessonHeader
        chapter="Chapter 1 · Getting Started"
        title={
          <>
            Counting Minutes{" "}
            <span class="text-dynamic-accent">ぷん・ふん</span>
          </>
        }
        subtitle="Which minutes use ぷん and which use ふん."
      >
        <OverviewItem>Minutes 1–30 readings</OverviewItem>
        <OverviewItem>
          When to use{" "}
          <span class="font-japanese font-semibold text-muted-foreground dark:text-white/60">ぷん</span> vs{" "}
          <span class="font-japanese font-semibold text-muted-foreground dark:text-white/60">ふん</span>
        </OverviewItem>
        <OverviewItem>Putting hours and minutes together</OverviewItem>
      </LessonHeader>

      {/* Two-column layout: Charts */}
      <div class="grid w-full gap-8 px-8 lg:grid-cols-2 lg:items-start">
        {/* Left: Minutes 1–10 */}
        <div class="max-w-md">
          <Collapsible
            defaultOpen={bp.lg()}
            class="rounded-xl bg-card/60 dark:bg-white/[0.04] ring-1 ring-border dark:ring-white/10"
          >
            <CollapsibleTrigger class="p-4 text-lg font-semibold text-foreground/80 dark:text-white/80">
              Minutes 1–10
            </CollapsibleTrigger>
            <CollapsibleContent class="p-4">
              <MinutesChart1 />
            </CollapsibleContent>
          </Collapsible>
        </div>

        {/* Right: Minutes 11–30 */}
        <div class="max-w-md">
          <Collapsible
            defaultOpen={bp.lg()}
            class="rounded-xl bg-card/60 dark:bg-white/[0.04] ring-1 ring-border dark:ring-white/10"
          >
            <CollapsibleTrigger class="p-4 text-lg font-semibold text-foreground/80 dark:text-white/80">
              Minutes 11–30
            </CollapsibleTrigger>
            <CollapsibleContent class="p-4">
              <MinutesChart2 />
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>

      {/* Explanations */}
      <div class="mx-auto mt-14 max-w-3xl space-y-14 px-8">
        <div class="space-y-4">
          <SectionLabel>Putting it together</SectionLabel>
          <p class="leading-relaxed text-foreground/75 dark:text-white/70">
            Japanese uses{" "}
            <span class="font-japanese font-semibold text-foreground dark:text-white/90">
              ぷん・ふん
            </span>{" "}
            for counting minutes.
          </p>

          <div class="space-y-2">
            <div class="flex items-baseline justify-between gap-4 rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
              <span class="text-sm text-muted-foreground dark:text-white/40">Five past twelve</span>
              <span class="font-japanese text-lg text-foreground dark:text-white/90">
                じゅうにじごふん
              </span>
            </div>
            <div class="flex items-baseline justify-between gap-4 rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
              <span class="text-sm text-muted-foreground dark:text-white/40">4:20</span>
              <span class="font-japanese text-lg text-foreground dark:text-white/90">
                よじにじっぷん
              </span>
            </div>
            <div class="flex items-baseline justify-between gap-4 rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
              <span class="text-sm text-muted-foreground dark:text-white/40">7:37</span>
              <span class="font-japanese text-lg text-foreground dark:text-white/90">
                しちじさんじゅうななふん
              </span>
            </div>
            <div class="flex items-baseline justify-between gap-4 rounded-lg bg-card/60 dark:bg-white/[0.04] px-4 py-3">
              <span class="text-sm text-muted-foreground dark:text-white/40">10:15</span>
              <span class="font-japanese text-lg text-foreground dark:text-white/90">
                じゅうじじゅうごふん
              </span>
            </div>
          </div>

          <p class="text-center font-semibold text-foreground/75 dark:text-white/70">
            You'll just have to memorize which minutes from 1–10 use ぷん and
            which use ふん.
          </p>
          <p class="text-center text-sm italic text-muted-foreground dark:text-white/40">
            You'll get better with practice!
          </p>
        </div>

        {/* Summary */}
        <LessonSummary>
          <SummaryItem>
            Minutes use ぷん or ふん depending on the number
          </SummaryItem>
          <SummaryItem>
            1, 3, 4, 6, 8, 10 use ぷん; the rest use ふん
          </SummaryItem>
          <SummaryItem>
            Combine [hour]じ + [minutes]ぷん/ふん for full times
          </SummaryItem>
          <SummaryItem>
            Memorize 1–10, then the pattern repeats for higher numbers
          </SummaryItem>
        </LessonSummary>
      </div>
    </div>
  )
}
