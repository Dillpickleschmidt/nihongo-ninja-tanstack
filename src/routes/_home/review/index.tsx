import { createFileRoute, Link } from "@tanstack/solid-router"
import { For, Index, Show, createMemo, createSignal, untrack } from "solid-js"
import { Skeleton } from "@/components/ui/custom/skeleton"
import { convexQuery, useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { queryKeys } from "~/query/query-keys"
import {
  DAILY_PROGRESS_TARGET_UNITS,
  getLocalDateKey,
} from "@/lib/progress/weights"
import { useSrs } from "@/features/srs/use-srs"
import { getUser } from "@/lib/auth"
import { ProgressRing, getProgressColor } from "@/features/stats/ProgressRing"
import { ModuleCard } from "@/features/stats/ModuleCard"
import { DistributionBar } from "@/features/stats/DistributionBar"
import { ActivityItem } from "@/features/stats/ActivityItem"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export const Route = createFileRoute("/_home/review/")({
  loader: ({ context, preload }) => {
    if (!preload) {
      context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
        blur: 4,
        opacityOffset: -0.22,
        showGradient: false,
      })
    }

    const todayKey = getLocalDateKey()
    const range = getLastNDaysRange(7)

    if (context.auth.userId) {
      context.queryClient.prefetchQuery(
        convexQuery(api.api.progress.getDailyModuleStatsForDate, {
          dateKey: todayKey,
        }),
      )
      context.queryClient.prefetchQuery(
        convexQuery(api.api.progress.getRecentModuleActivity, { limit: 12 }),
      )
      context.queryClient.prefetchQuery(
        convexQuery(api.api.progress.getDistribution, {
          fromDateKey: range.fromDateKey,
          toDateKey: range.toDateKey,
        }),
      )
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const todayKey = () => getLocalDateKey()
  const range = createMemo(() => getLastNDaysRange(7))
  const { dueCounts } = useSrs()
  const user = getUser()
  const [dialogOpen, setDialogOpen] = createSignal(false)

  const dailyStatsQuery = useConvexQuery(
    api.api.progress.getDailyModuleStatsForDate,
    () => ({ dateKey: todayKey() }),
    () => ({ enabled: !!user() }),
  )

  const recentActivityQuery = useConvexQuery(
    api.api.progress.getRecentModuleActivity,
    () => ({ limit: 12 }),
    () => ({ enabled: !!user() }),
  )

  const distributionQuery = useConvexQuery(
    api.api.progress.getDistribution,
    () => ({
      fromDateKey: range().fromDateKey,
      toDateKey: range().toDateKey,
    }),
    () => ({ enabled: !!user() }),
  )

  const derived = createMemo(() => {
    const rows = dailyStatsQuery.data() || []
    let progressUnits = 0
    let questionsAnswered = 0

    for (const row of rows) {
      progressUnits += row.progressUnits
      questionsAnswered += row.questionsAnswered
    }

    return {
      progressUnits,
      questionsAnswered,
      progressPercent: Math.min(
        100,
        Math.round((progressUnits / DAILY_PROGRESS_TARGET_UNITS) * 100),
      ),
    }
  })

  const reversedModules = createMemo(() =>
    [...(dailyStatsQuery.data() ?? [])].reverse(),
  )

  const weeklyTotalXP = createMemo(() =>
    (distributionQuery.data() ?? []).reduce(
      (sum, row) => sum + row.progressUnits,
      0,
    ),
  )

  const todayLabel = untrack(() => {
    const d = new Date()
    return d.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    })
  })

  return (
    <main class="p-4 pt-12 pb-24 mx-auto max-w-5xl font-excalifont">
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 0.3s ease-out forwards; }
      `}</style>

      {/* Hero - 2 column: stats left, due counts + action right */}
      <div class="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
        {/* Left: title + progress stats */}
        <div>
          <div class="animate-fade-up opacity-0">
            <h1 class="text-3xl font-bold text-white/90">Today</h1>
            <p class="text-sm text-white/25 mt-1">{todayLabel}</p>
          </div>

          <div
            class="mt-10 flex items-center gap-10 lg:gap-14 animate-fade-up opacity-0"
            style={{ "animation-delay": "75ms" }}
          >
            <ProgressRing progress={derived().progressPercent} />

            <div class="flex gap-10 lg:gap-14">
              <div>
                <div
                  class="text-4xl font-bold tabular-nums"
                  style={{ color: getProgressColor(derived().progressPercent) }}
                >
                  {derived().progressUnits.toLocaleString()}
                </div>
                <div class="text-sm text-white/30 mt-1">
                  of {DAILY_PROGRESS_TARGET_UNITS.toLocaleString()} XP
                </div>
                <div class="text-xs text-white/20 mt-1">
                  60 XP ≈ 1 minute of practice
                </div>
              </div>

              <div>
                <div class="text-4xl font-bold tabular-nums text-white/85">
                  {derived().questionsAnswered}
                </div>
                <div class="text-sm text-white/30 mt-1">questions</div>
              </div>

              <div>
                <div class="text-4xl font-bold tabular-nums text-white/85">
                  {dailyStatsQuery.data()?.length ?? 0}
                </div>
                <div class="text-sm text-white/30 mt-1">modules</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: due counts + continue button */}
        <div
          class="rounded-2xl border border-white/5 bg-white/[0.02] p-6 animate-fade-up opacity-0"
          style={{ "animation-delay": "100ms" }}
        >
          <h2 class="text-sm font-medium text-white/40 mb-4">Due for Review</h2>

          <div class="space-y-3">
            <div class="flex items-center justify-between gap-8">
              <span class="text-sm text-white/60">Sentences</span>
              <span class="text-lg font-bold tabular-nums text-white/30">–</span>
            </div>
            <div class="flex items-center justify-between gap-8">
              <span class="text-sm text-white/60">Meanings</span>
              <span class="text-lg font-bold tabular-nums text-white/85">
                <Show when={dueCounts().vocabMeanings !== undefined} fallback="–">
                  {dueCounts().vocabMeanings}
                </Show>
              </span>
            </div>
            <div class="flex items-center justify-between gap-8">
              <span class="text-sm text-white/60">Spellings</span>
              <span class="text-lg font-bold tabular-nums text-white/85">
                <Show when={dueCounts().vocabSpellings !== undefined} fallback="–">
                  {dueCounts().vocabSpellings}
                </Show>
              </span>
            </div>
          </div>

          <div class="mt-2 pt-3 border-t border-white/5 flex items-center justify-between">
            <span class="text-sm text-white/40">Total</span>
            <span class="text-lg font-bold tabular-nums text-dynamic-accent">
              <Show when={dueCounts().vocabTotal !== undefined} fallback="–">
                {dueCounts().vocabTotal}
              </Show>
            </span>
          </div>

          <Button
            type="button"
            disabled={
              dueCounts().vocabTotal === undefined || dueCounts().vocabTotal === 0
            }
            class="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-dynamic-accent/80 px-4 py-2.5 text-sm font-medium text-white transition-[background-color,transform] hover:bg-dynamic-accent hover:scale-[1.02]"
            style={{
              "box-shadow":
                "0 8px 16px -4px color-mix(in srgb, var(--dynamic-accent) 30%, transparent)",
            }}
            onClick={() => setDialogOpen(true)}
          >
            Start Review
          </Button>
        </div>
      </div>

      {/* Progress bar */}
      <div
        class="mt-8 h-1 w-full overflow-hidden rounded-full bg-white/6 animate-fade-up opacity-0"
        style={{ "animation-delay": "100ms" }}
      >
        <div
          class="h-full rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${Math.min(100, derived().progressPercent)}%`,
            background: getProgressColor(derived().progressPercent),
            opacity: "0.5",
          }}
        />
      </div>

      {/* Today's Modules */}
      <section class="mt-12">
        <h2
          class="text-lg font-semibold text-white/70 animate-fade-up opacity-0"
          style={{ "animation-delay": "125ms" }}
        >
          Today's Modules
        </h2>
        <Show
          when={dailyStatsQuery.data() !== undefined}
          fallback={<SkeletonRows count={3} />}
        >
          <Show
            when={dailyStatsQuery.data()!.length > 0}
            fallback={
              <p
                class="text-sm text-white/25 mt-4 animate-fade-up opacity-0"
                style={{ "animation-delay": "175ms" }}
              >
                No modules practiced yet today
              </p>
            }
          >
            <div class="mt-4 divide-y divide-white/5">
              <For each={reversedModules()}>
                {(row, i) => (
                  <div
                    class="animate-fade-up opacity-0"
                    style={{ "animation-delay": `${150 + i() * 50}ms` }}
                  >
                    <ModuleCard
                      modulePath={row.modulePath}
                      moduleType={row.moduleType}
                      progressUnits={row.progressUnits}
                      questionsAnswered={row.questionsAnswered}
                      lastUpdatedAt={row.lastUpdatedAt}
                    />
                  </div>
                )}
              </For>
            </div>
          </Show>
        </Show>
      </section>

      {/* Two-column: Distribution + Recent Activity */}
      <div class="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <section
          class="animate-fade-up opacity-0"
          style={{ "animation-delay": "250ms" }}
        >
          <div class="mb-4 flex items-center justify-between">
            <h2 class="text-lg font-semibold text-white/70">This Week</h2>
            <div class="text-right">
              <div class="text-sm text-white/55 tabular-nums">
                {weeklyTotalXP().toLocaleString()} XP
              </div>
            </div>
          </div>
          <DistributionBar
            data={distributionQuery.data()}
            rangeLabel={`${formatDateShort(range().fromDateKey)} – ${formatDateShort(range().toDateKey)}`}
          />
        </section>

        <section
          class="animate-fade-up opacity-0"
          style={{ "animation-delay": "300ms" }}
        >
          <h2 class="text-lg font-semibold text-white/70 mb-4">
            Recent Activity
          </h2>
          <Show
            when={recentActivityQuery.data() !== undefined}
            fallback={<SkeletonDots count={5} />}
          >
            <Show
              when={recentActivityQuery.data()!.length > 0}
              fallback={<p class="text-sm text-white/25">No recent activity</p>}
            >
              <div class="divide-y divide-white/4">
                <For each={recentActivityQuery.data()}>
                  {(row) => (
                    <ActivityItem
                      modulePath={row.modulePath}
                      moduleType={row.moduleType}
                      progressUnits={row.progressUnits}
                      questionsAnswered={row.questionsAnswered}
                      lastUpdatedAt={row.lastUpdatedAt}
                    />
                  )}
                </For>
              </div>
            </Show>
          </Show>
        </section>
      </div>

      <ReviewModeDialog
        open={dialogOpen()}
        onOpenChange={setDialogOpen}
        meaningsCount={dueCounts().vocabMeanings}
        spellingsCount={dueCounts().vocabSpellings}
      />
    </main>
  )
}

function ReviewModeDialog(props: {
  open: boolean
  onOpenChange: (open: boolean) => void
  meaningsCount: number | undefined
  spellingsCount: number | undefined
}) {
  return (
    <Dialog open={props.open} onOpenChange={props.onOpenChange}>
      <DialogContent class="border-white/10 bg-[#121212] sm:max-w-md">
        <DialogHeader>
          <DialogTitle class="text-white/90">Choose Review Mode</DialogTitle>
          <DialogDescription class="text-white/45">
            Pick the type of review you want to practice right now.
          </DialogDescription>
        </DialogHeader>

        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <ReviewModeOption
            mode="meanings"
            label="Meanings"
            symbol="読"
            symbolClass="text-sky-300"
            count={props.meaningsCount}
          />
          <ReviewModeOption
            mode="spellings"
            label="Spellings"
            symbol="あ"
            symbolClass="text-orange-300"
            count={props.spellingsCount}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

function ReviewModeOption(props: {
  mode: "meanings" | "spellings"
  label: string
  symbol: string
  symbolClass: string
  count: number | undefined
}) {
  const disabled = () => props.count === undefined || props.count === 0

  return (
    <Show
      when={!disabled()}
      fallback={
        <Button
          type="button"
          variant="outline"
          disabled
          class="h-auto min-h-28 flex-col gap-2 border-white/10 bg-white/[0.02] p-4"
        >
          <span class={`text-lg font-bold ${props.symbolClass}`}>
            {props.symbol}
          </span>
          <span class="text-sm font-medium">{props.label}</span>
          <span class="text-xs text-white/35">{props.count ?? "–"} due</span>
        </Button>
      }
    >
      <Link
        to="/review/session"
        search={{ mode: props.mode }}
        class="inline-flex h-auto min-h-28 items-center justify-center rounded-md border border-white/10 bg-white/[0.02] p-4 text-white transition-colors hover:bg-white/[0.05]"
      >
        <div class="flex flex-col items-center gap-2">
          <span class={`text-lg font-bold ${props.symbolClass}`}>
            {props.symbol}
          </span>
          <span class="text-sm font-medium">{props.label}</span>
          <span class="text-xs text-white/45">{props.count} due</span>
        </div>
      </Link>
    </Show>
  )
}

function SkeletonRows(props: { count: number }) {
  const items = () => Array.from({ length: props.count }, (_, i) => i)
  return (
    <div class="mt-4 divide-y divide-white/5">
      <Index each={items()}>
        {(i) => (
          <div class="py-4 flex items-center gap-4">
            <Skeleton
              class="h-4 rounded bg-white/4"
              style={{
                "animation-delay": `${i() * 100}ms`,
                width: `${40 - i() * 5}%`,
              }}
            />
          </div>
        )}
      </Index>
    </div>
  )
}

function SkeletonDots(props: { count: number }) {
  const items = () => Array.from({ length: props.count }, (_, i) => i)
  return (
    <div class="divide-y divide-white/4">
      <Index each={items()}>
        {(i) => (
          <div class="flex items-center gap-3 py-3">
            <Skeleton class="h-2 w-2 rounded-full bg-white/6" />
            <Skeleton
              class="h-4 rounded bg-white/3"
              style={{
                "animation-delay": `${i() * 60}ms`,
                width: `${70 - i() * 8}%`,
              }}
            />
          </div>
        )}
      </Index>
    </div>
  )
}

function formatDateShort(dateKey: string) {
  const [year, month, day] = dateKey.split("-")
  const d = new Date(Number(year), Number(month) - 1, Number(day))
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" })
}

function getLastNDaysRange(days: number) {
  const end = new Date()
  const start = new Date()
  start.setDate(start.getDate() - (days - 1))

  return {
    fromDateKey: getLocalDateKey(start),
    toDateKey: getLocalDateKey(end),
  }
}
