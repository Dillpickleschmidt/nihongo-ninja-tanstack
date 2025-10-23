// features/learn-page-v2/components/content/ProgressSummary.tsx
import { Show } from "solid-js"
import { Flame, Loader2 } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { useLearnPageContext } from "@/features/learn-page/context/LearnPageContext"

export function ProgressSummary() {
  const context = useLearnPageContext()

  const display = () => {
    if (context.seenCardsStatsQuery.data === undefined) {
      return null
    }

    const result = context.seenCardsStatsQuery.data

    // Check for CLIENT_ONLY (Anki on SSR)
    if (result.stats === null && result.unavailableReason === "CLIENT_ONLY") {
      return (
        <div class="flex min-h-[73px] w-32 items-center justify-center">
          <Loader2 class="h-8 w-8 animate-spin text-emerald-400" />
        </div>
      )
    }

    // Check for NOT_SUPPORTED (JPDB)
    if (result.stats === null && result.unavailableReason === "NOT_SUPPORTED") {
      return (
        <div class="flex min-h-[73px] w-32 items-center justify-center">
          <div class="text-center">
            <div class="text-gray-400">
              <span class="text-base font-bold xl:text-lg">-</span>
            </div>
            <div class="text-muted-foreground text-xs xl:text-sm">
              Not available
            </div>
          </div>
        </div>
      )
    }

    // Handle actual errors or unexpected null stats
    if (context.seenCardsStatsQuery.isError || result.stats === null) {
      return (
        <div class="flex min-h-[73px] w-32 items-center justify-center">
          <div class="text-center">
            <div class="text-gray-400">
              <span class="text-base font-bold xl:text-lg">-</span>
            </div>
            <div class="text-muted-foreground text-xs xl:text-sm">
              Unable to load
            </div>
          </div>
        </div>
      )
    }

    // Normal display for real stats
    return (
      <>
        <p class="text-lg font-semibold text-nowrap text-neutral-200">
          <span class="text-xl">{result.stats.vocab.toLocaleString()}</span>{" "}
          Vocab
        </p>
        <p class="text-base font-semibold text-neutral-200">
          {result.stats.kanji.toLocaleString()} Kanji
        </p>
        <p class="mt-1 text-xs text-nowrap text-emerald-400">
          +{result.stats.vocabWeek} V · +{result.stats.kanjiWeek} K this week
        </p>
      </>
    )
  }

  return (
    <div class="text-foreground border-card-foreground/70 rounded-xl border bg-neutral-200/5 px-6 py-5 text-sm backdrop-blur-sm">
      {/* ─── Metrics row ─── */}
      <div class="grid grid-cols-3">
        {/* Knowledge Growth */}
        <div>{display()}</div>

        {/* Consistency — centered column */}
        <div class="ml-1 flex w-full justify-center">
          <div>
            {/* <h4 class="text-muted-foreground mb-1 text-xs tracking-wide uppercase"> */}
            {/*   Consistency */}
            {/* </h4> */}
            <Show
              when={
                !context.sessionsQuery.isPending &&
                !context.sessionsQuery.isError
              }
              fallback={
                <div class="flex min-h-[73px] w-32 items-center justify-center">
                  {context.sessionsQuery.isPending ? (
                    <Loader2 class="h-8 w-8 animate-spin text-sky-400" />
                  ) : (
                    <span class="text-destructive text-sm">Error</span>
                  )}
                </div>
              }
            >
              <p
                class="text-lg font-semibold text-neutral-200"
                title="Calculated from the past 30 days"
              >
                Avg Day{" "}
                <span class="text-sky-400">{context.avgDay().data} min</span>
              </p>
              <p class="mt-1.5 text-base font-semibold text-neutral-200">
                {context.totalHours().data} h total
              </p>
            </Show>
          </div>
        </div>

        {/* Streak */}
        <div class="text-right">
          {/* <h4 class="text-muted-foreground mb-1 text-xs tracking-wide uppercase"> */}
          {/*   Streak */}
          {/* </h4> */}
          <Show
            when={
              !context.sessionsQuery.isPending && !context.sessionsQuery.isError
            }
            fallback={
              <div class="flex min-h-[73px] w-32 items-center justify-center">
                {context.sessionsQuery.isPending ? (
                  <Loader2 class="h-8 w-8 animate-spin text-amber-400" />
                ) : (
                  <span class="text-destructive text-sm">Error</span>
                )}
              </div>
            }
          >
            <p class="text-2xl leading-none font-bold text-amber-400">
              <Flame class="-mt-1.5 mr-1 -ml-2 inline h-6 w-6" />
              {context.streak().data} days
            </p>
            <p class="text-muted-foreground mt-2 text-xs">
              Personal best: {context.personalBest().data}
            </p>
          </Show>
        </div>
      </div>

      {/* ─── Buttons row ─── */}
      <div class="mt-2.5 grid grid-cols-3 gap-10">
        <Button
          variant="ghost"
          class="border-foreground/10 bg-card/30 text-muted-foreground h-auto rounded-md border px-4 py-2 text-xs transition hover:border-emerald-400/40 hover:bg-emerald-500/10 hover:text-emerald-300"
        >
          View Progress
        </Button>

        <Button
          id="adjust-target-button"
          variant="ghost"
          class="border-foreground/10 bg-card/30 text-muted-foreground h-auto rounded-md border px-4 py-2 text-[10px] transition hover:border-sky-400/40 hover:bg-sky-500/10 hover:text-sky-300"
        >
          Adjust Target?
        </Button>

        <Button
          variant="ghost"
          class="border-foreground/10 bg-card/30 text-muted-foreground h-auto rounded-md border px-4 py-2 text-xs transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-indigo-300"
        >
          View History
        </Button>
      </div>
    </div>
  )
}
