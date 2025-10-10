// features/learn-page-v2/components/content/ProgressSummary.tsx
import { Show } from "solid-js"
import { Loader2 } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { useLearnPageContext } from "@/features/learn-page-v2/context/LearnPageContext"

export function ProgressSummary() {
  const context = useLearnPageContext()

  const vocabStats = () =>
    context.vocabStatsQuery.data?.vocab ?? { total: 0, week: 0 }
  const kanjiStats = () =>
    context.vocabStatsQuery.data?.kanji ?? { total: 0, week: 0 }

  return (
    <div class="text-foreground border-card-foreground/70 rounded-xl border bg-neutral-200/5 px-6 py-5 text-sm backdrop-blur-sm">
      {/* ─── Metrics row ─── */}
      <div class="flex justify-between">
        {/* Knowledge Growth */}
        <div>
          <h4 class="text-muted-foreground mb-1 text-xs tracking-wide uppercase">
            Knowledge
          </h4>
          <Show
            when={
              !context.vocabStatsQuery.isPending &&
              !context.vocabStatsQuery.isError
            }
            fallback={
              <div class="flex min-h-[73px] w-32 items-center justify-center">
                {context.vocabStatsQuery.isPending ? (
                  <Loader2 class="h-8 w-8 animate-spin text-emerald-400" />
                ) : (
                  <span class="text-destructive text-sm">Error</span>
                )}
              </div>
            }
          >
            <p class="text-lg font-semibold text-nowrap text-neutral-200">
              <span class="text-xl">{vocabStats().total.toLocaleString()}</span>{" "}
              Vocab
            </p>
            <p class="text-base font-semibold text-neutral-200">
              {kanjiStats().total.toLocaleString()} Kanji
            </p>
            <p class="mt-1 text-xs text-nowrap text-emerald-400">
              +{vocabStats().week} V · +{kanjiStats().week} K this week
            </p>
          </Show>
        </div>

        {/* Consistency — centered column */}
        <div class="flex justify-center">
          <div>
            <h4 class="text-muted-foreground mb-1 text-xs tracking-wide uppercase">
              Consistency
            </h4>
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
          <h4 class="text-muted-foreground mb-1 text-xs tracking-wide uppercase">
            Streak
          </h4>
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
