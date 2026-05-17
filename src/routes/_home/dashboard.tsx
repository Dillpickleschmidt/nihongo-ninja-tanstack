import { createFileRoute } from "@tanstack/solid-router"
import {
  For,
  Index,
  Show,
  createEffect,
  createMemo,
  createSignal,
  onCleanup,
  onMount,
} from "solid-js"
import { useQueryClient } from "@tanstack/solid-query"
import { convexQuery, useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { queryKeys } from "~/query/query-keys"
import {
  DAILY_PROGRESS_TARGET_UNITS,
  getLocalDateKey,
} from "@/lib/progress/weights"
import { useSrs } from "@/features/srs/use-srs"
import { getUser } from "@/lib/auth"
import { usePreferences } from "@/lib/preferences"
import { parsePreferencesCookie } from "@/query/model/preferences"
import { ProgressRing, getProgressColor } from "@/features/stats/ProgressRing"
import { ModuleCard } from "@/features/stats/ModuleCard"
import { ActivityItem } from "@/features/stats/ActivityItem"
import { Skeleton } from "@/components/ui/custom/skeleton"
import { DashboardCard } from "@/features/dashboard/DashboardCard"
import { ReviewModeDialog } from "@/features/dashboard/ReviewModeDialog"
import { TodayActionsPanel } from "@/features/dashboard/TodayActionsPanel"
import { ToolShowcase } from "@/features/dashboard/ToolShowcase"
import {
  PRACTICE_TOOLS,
  MEDIA_RESOURCES,
  REFERENCE_TOOLS,
} from "@/features/dashboard/dashboard-cards-data"

export const Route = createFileRoute("/_home/dashboard")({
  loader: ({ context, preload }) => {
    if (!preload) {
      context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
        blur: 4,
        opacityOffset: -0.22,
        showGradient: false,
      })
    }

    const todayKey = getLocalDateKey()
    const streakRange = getLastNDaysRange(30)

    if (context.auth.userId) {
      context.queryClient.prefetchQuery(
        convexQuery(api.api.fsrs.getDueFSRSCardsCount, {}),
      )
      context.queryClient.prefetchQuery(
        convexQuery(api.api.progress.getDailyModuleStatsForDate, {
          dateKey: todayKey,
        }),
      )
      context.queryClient.prefetchQuery(
        convexQuery(api.api.progress.getRecentModuleActivity, { limit: 10 }),
      )
      context.queryClient.prefetchQuery(
        convexQuery(api.api.progress.getDailyProgressRange, {
          fromDateKey: streakRange.fromDateKey,
          toDateKey: streakRange.toDateKey,
        }),
      )
    }

    const prefs = parsePreferencesCookie()
    const pathId = prefs.activeLearningPath
    if (pathId) {
      context.queryClient.prefetchQuery(
        convexQuery(api.api.learning_paths.getDashboardData, { pathId }),
      )
    }
  },
  component: DashboardComponent,
})

function DashboardComponent() {
  const queryClient = useQueryClient()
  const [scrollY, setScrollY] = createSignal(0)

  createEffect(() => {
    queryClient.setQueryData(queryKeys.backgroundSettings(), {
      blur: scrollY() < 5 ? 4 : 22,
      opacityOffset: -0.22,
      showGradient: false,
    })
  })

  onMount(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    onCleanup(() => window.removeEventListener("scroll", handleScroll))
  })

  const today = new Date()
  const todayKey = () => getLocalDateKey()
  const streakRange = createMemo(() => getLastNDaysRange(30))
  const user = getUser()
  const { dueCounts } = useSrs()
  const { preferences } = usePreferences()
  const selectedPathId = () => preferences().activeLearningPath
  const [dialogOpen, setDialogOpen] = createSignal(false)

  const dashboardQuery = useConvexQuery(
    api.api.learning_paths.getDashboardData,
    () => ({ pathId: selectedPathId()! }),
    () => ({ enabled: !!selectedPathId() }),
  )

  const dailyStatsQuery = useConvexQuery(
    api.api.progress.getDailyModuleStatsForDate,
    () => ({ dateKey: todayKey() }),
    () => ({ enabled: !!user() }),
  )

  const recentActivityQuery = useConvexQuery(
    api.api.progress.getRecentModuleActivity,
    () => ({ limit: 10 }),
    () => ({ enabled: !!user() }),
  )

  const dailyProgressRangeQuery = useConvexQuery(
    api.api.progress.getDailyProgressRange,
    () => ({
      fromDateKey: streakRange().fromDateKey,
      toDateKey: streakRange().toDateKey,
    }),
    () => ({ enabled: !!user() }),
  )

  const dailySummary = createMemo(() => {
    const rows = dailyStatsQuery.data()
    if (rows === undefined) return undefined

    let progressUnits = 0
    let questionsAnswered = 0
    for (const row of rows) {
      progressUnits += row.progressUnits
      questionsAnswered += row.questionsAnswered
    }

    return {
      moduleCount: rows.length,
      progressUnits,
      questionsAnswered,
      progressPercent: Math.min(
        100,
        Math.round((progressUnits / DAILY_PROGRESS_TARGET_UNITS) * 100),
      ),
    }
  })

  const reversedModules = createMemo(() => {
    const rows = dailyStatsQuery.data()
    return rows === undefined ? undefined : [...rows].reverse()
  })

  const streakStats = createMemo(() => getStreakStats(dailyProgressRangeQuery.data(), today))
  const activityTape = createMemo(() =>
    buildActivityTape(dailyProgressRangeQuery.data(), today, 30),
  )

  const nextModule = () => {
    const chapters = dashboardQuery.data()?.chapters
    const completed = new Set(dashboardQuery.data()?.completedModules ?? [])
    if (!chapters) return undefined
    for (const chapter of chapters) {
      for (const mod of chapter.modules) {
        if (!mod.disabled && !completed.has(mod.moduleId)) {
          return { ...mod, chapterTitle: chapter.title }
        }
      }
    }
    return undefined
  }

  const todayLabel = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })
  const todayLabelJa = formatJapaneseDate(today)

  return (
    <div class="relative min-h-screen text-foreground dark:text-white">
      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up { animation: fade-up 0.5s ease-out forwards; }
        .perforated {
          background-image: linear-gradient(
            to right,
            color-mix(in srgb, var(--dynamic-accent) 32%, transparent) 0 5px,
            transparent 5px 12px
          );
          background-size: 12px 1px;
          background-repeat: repeat-x;
          background-position: left center;
        }
      `}</style>

      <main class="mx-auto max-w-7xl px-6 pt-16 pb-32 sm:px-8 lg:pt-20">
        {/* HERO ───────────────────────────────────────────────── */}
        <section class="relative">
          <span class="pointer-events-none absolute -top-6 left-0 select-none font-japanese text-[10rem] leading-none text-foreground/4.5 sm:-top-10 sm:-left-4 sm:text-[14rem] dark:text-white/3">
            道
          </span>

          <div class="relative flex animate-fade-up flex-col gap-7 opacity-0 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div>
              <div class="flex items-baseline gap-5 flex-wrap">
                <h1 class="font-excalifont text-5xl tracking-tight text-foreground/90 sm:text-6xl dark:text-white/90">
                  Today
                </h1>
                <span class="font-japanese text-base text-muted-foreground dark:text-white/40">
                  {todayLabelJa}
                </span>
              </div>
              <p class="mt-3 text-base text-muted-foreground dark:text-white/45">
                {todayLabel}
              </p>
            </div>

            <TodayActionsPanel
              class="w-full shrink-0 lg:w-[31rem]"
              mod={nextModule()}
              nextLoading={
                dashboardQuery.data() === undefined && !!selectedPathId()
              }
              meanings={dueCounts().vocabMeanings}
              spellings={dueCounts().vocabSpellings}
              total={dueCounts().vocabTotal}
              onStartReview={() => setDialogOpen(true)}
            />
          </div>

          {/* Snapshot strip */}
          <div
            class="mt-10 grid items-center gap-10 animate-fade-up opacity-0 lg:grid-cols-[auto_1fr] lg:gap-14"
            style={{ "animation-delay": "100ms" }}
          >
            <div class="flex justify-center lg:block">
              <ProgressRing progress={dailySummary()?.progressPercent ?? 0} />
            </div>

            <div class="space-y-10">
              <div class="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
                <div class="grid grid-cols-3 gap-6 sm:gap-10">
                  <StatBlock
                    value={dailySummary()?.progressUnits.toLocaleString() ?? "–"}
                    label={`of ${DAILY_PROGRESS_TARGET_UNITS.toLocaleString()} XP`}
                    sub="60 XP ≈ 1 minute of practice"
                    valueColor={getProgressColor(dailySummary()?.progressPercent ?? 0)}
                  />
                  <StatBlock
                    value={dailySummary() ? String(dailySummary()!.questionsAnswered) : "–"}
                    label="questions"
                  />
                  <StatBlock
                    value={dailySummary() ? String(dailySummary()!.moduleCount) : "–"}
                    label="modules"
                  />
                </div>

                <StreakBig days={streakStats().current} best={streakStats().best} />
              </div>

              {/* Daily activity tape — spans stats + streak */}
              <div class="flex items-center gap-1">
                <For each={activityTape()}>
                  {(d) => (
                    <div
                      class="flex-1 rounded-sm transition-all"
                      classList={{
                        "h-px bg-foreground/20 dark:bg-white/15": !d.active,
                        "h-1.5": d.active && !d.isToday,
                        "h-2.5": d.isToday,
                      }}
                      style={
                        d.active
                          ? {
                              background: "var(--dynamic-accent)",
                              opacity: d.isToday ? 1 : 0.85,
                            }
                          : undefined
                      }
                    />
                  )}
                </For>
              </div>
            </div>
          </div>
        </section>

        {/* TODAY + WEEK + ACTIVITY ─────────────────────────────── */}
        <section class="mt-10 grid gap-x-10 gap-y-8 lg:grid-cols-[3fr_2fr]">
          <div class="max-h-64 overflow-y-auto pr-1">
            <SectionLabelLine label="Today's modules" kanji="今" delay={150} />
            <Show
              when={dailyStatsQuery.data() !== undefined}
              fallback={<SkeletonRows count={3} />}
            >
              <Show
                when={dailyStatsQuery.data()!.length > 0}
                fallback={
                  <p
                    class="mt-6 animate-fade-up text-sm text-muted-foreground opacity-0 dark:text-white/25"
                    style={{ "animation-delay": "220ms" }}
                  >
                    Nothing practiced yet today. Pick a practice tool to start.
                  </p>
                }
              >
                <div class="mt-2 divide-y divide-border/50 dark:divide-white/5">
                  <For each={reversedModules()!}>
                    {(row) => (
                      <div
                        class="animate-fade-up opacity-0"
                        style={{ "animation-delay": "220ms" }}
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
          </div>

          <div class="max-h-56 overflow-y-auto pr-1">
            <SectionLabelLine label="Recent activity" delay={200} />
            <div class="mt-2">
              <Show
                when={recentActivityQuery.data() !== undefined}
                fallback={<SkeletonDots count={5} />}
              >
                <Show
                  when={recentActivityQuery.data()!.length > 0}
                  fallback={
                    <p class="text-sm text-muted-foreground dark:text-white/25">
                      No recent activity
                    </p>
                  }
                >
                  <div
                    class="animate-fade-up divide-y divide-border/40 opacity-0 dark:divide-white/4"
                    style={{ "animation-delay": "270ms" }}
                  >
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
            </div>
          </div>
        </section>

        {/* PRACTICE TOOLS ──────────────────────────────────────── */}
        <section class="mt-8">
          <SectionLabelLine
            label="Practice tools"
            kanji="練"
            delay={200}
          />
          <ToolShowcase
            tools={PRACTICE_TOOLS}
            vocabDueCount={() => dueCounts().vocabTotal}
          />
        </section>

        {/* MEDIA ──────────────────────────────────────────────── */}
        <section class="mt-24">
          <SectionLabelLine
            label="Media & immersion"
            kanji="観"
            delay={450}
          />
          <div class="mt-7 grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            <Index each={MEDIA_RESOURCES}>
              {(card, index) => <DashboardCard card={card()} index={index} />}
            </Index>
          </div>
        </section>

        {/* REFERENCE ──────────────────────────────────────────── */}
        <section class="mt-20">
          <SectionLabelLine
            label="Reference & extras"
            kanji="辞"
            delay={500}
          />
          <div class="mt-7 grid gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            <Index each={REFERENCE_TOOLS}>
              {(card, index) => <DashboardCard card={card()} index={index} />}
            </Index>
          </div>
        </section>
      </main>

      <ReviewModeDialog
        open={dialogOpen()}
        onOpenChange={setDialogOpen}
        meaningsCount={dueCounts().vocabMeanings}
        spellingsCount={dueCounts().vocabSpellings}
      />
    </div>
  )
}

/* ── Subcomponents ────────────────────────────────────────────── */

function StatBlock(props: {
  value: string
  label: string
  sub?: string
  valueColor?: string
}) {
  return (
    <div>
      <div
        class="text-3xl font-bold tabular-nums text-foreground/85 sm:text-4xl dark:text-white/85"
        style={props.valueColor ? { color: props.valueColor } : undefined}
      >
        {props.value}
      </div>
      <div class="mt-1.5 text-[0.95rem] text-muted-foreground dark:text-white/35">
        {props.label}
      </div>
      <Show when={props.sub}>
        <div class="mt-0.5 text-xs text-muted-foreground/70 dark:text-white/20">
          {props.sub}
        </div>
      </Show>
    </div>
  )
}

type ActivityTapeDay = {
  active: boolean
  isToday: boolean
}

function StreakBig(props: { days: number; best: number }) {
  return (
    <div class="flex items-baseline gap-3">
      <span
        class="font-excalifont text-6xl leading-none tabular-nums"
        style={{ color: "var(--dynamic-accent)" }}
      >
        {props.days}
      </span>
      <div class="text-left">
        <div class="text-base text-muted-foreground dark:text-white/45 whitespace-nowrap">
          day streak
        </div>
        <div class="text-xs text-muted-foreground/70 dark:text-white/25 whitespace-nowrap">
          best · <span class="tabular-nums">{props.best}</span>
        </div>
      </div>
    </div>
  )
}

function SectionLabelLine(props: {
  label: string
  kanji?: string
  delay?: number
}) {
  return (
    <div
      class="flex items-center gap-4 animate-fade-up opacity-0"
      style={{ "animation-delay": `${props.delay ?? 0}ms` }}
    >
      <Show when={props.kanji}>
        <span class="font-japanese text-base text-muted-foreground/60 dark:text-white/30">
          {props.kanji}
        </span>
      </Show>
      <h2 class="font-excalifont text-lg text-foreground/85 dark:text-white/80">
        {props.label}
      </h2>
      <div
        class="h-px flex-1"
        style={{
          background:
            "linear-gradient(to right, color-mix(in srgb, var(--dynamic-accent) 30%, transparent), transparent 90%)",
        }}
      />
    </div>
  )
}

function SkeletonRows(props: { count: number }) {
  return (
    <div class="mt-4 divide-y divide-border/50 dark:divide-white/5">
      <For each={Array.from({ length: props.count })}>
        {(_, i) => (
          <div class="flex items-center gap-4 py-4">
            <Skeleton
              class="h-4 rounded bg-muted/70 dark:bg-white/4"
              style={{
                "animation-delay": `${i() * 100}ms`,
                width: `${44 - i() * 5}%`,
              }}
            />
          </div>
        )}
      </For>
    </div>
  )
}

function SkeletonDots(props: { count: number }) {
  return (
    <div class="divide-y divide-border/40 dark:divide-white/4">
      <For each={Array.from({ length: props.count })}>
        {(_, i) => (
          <div class="flex items-center gap-3 py-2.5">
            <Skeleton class="h-2 w-2 rounded-full bg-muted/70 dark:bg-white/6" />
            <Skeleton
              class="h-4 rounded bg-muted/60 dark:bg-white/3"
              style={{
                "animation-delay": `${i() * 60}ms`,
                width: `${72 - i() * 8}%`,
              }}
            />
          </div>
        )}
      </For>
    </div>
  )
}

/* ── Helpers ──────────────────────────────────────────────────── */

const JA_DAY = ["日", "月", "火", "水", "木", "金", "土"] as const
const JA_DIGITS = ["〇", "一", "二", "三", "四", "五", "六", "七", "八", "九"] as const

function toJaNumber(n: number): string {
  if (n < 10) return JA_DIGITS[n]
  if (n < 20) return n === 10 ? "十" : `十${JA_DIGITS[n - 10]}`
  const tens = Math.floor(n / 10)
  const ones = n % 10
  const tensPart = tens === 1 ? "十" : `${JA_DIGITS[tens]}十`
  return ones === 0 ? tensPart : `${tensPart}${JA_DIGITS[ones]}`
}

function formatJapaneseDate(d: Date): string {
  return `${toJaNumber(d.getMonth() + 1)}月${toJaNumber(d.getDate())}日 (${JA_DAY[d.getDay()]})`
}

type DailyProgressSummary = {
  dateKey: string
  progressUnits: number
}

function getStreakStats(
  rows: DailyProgressSummary[] | undefined,
  today: Date,
) {
  if (rows === undefined) return { current: 0, best: 0 }

  const activeDays = getActiveDays(rows)
  let current = 0
  const cursor = new Date(today)

  while (activeDays.has(getLocalDateKey(cursor))) {
    current++
    cursor.setDate(cursor.getDate() - 1)
  }

  let best = 0
  let running = 0
  for (const day of buildActivityTape(rows, today, 30)) {
    if (day.active) {
      running++
      best = Math.max(best, running)
    } else {
      running = 0
    }
  }

  return { current, best }
}

function buildActivityTape(
  rows: DailyProgressSummary[] | undefined,
  today: Date,
  days: number,
): ActivityTapeDay[] {
  const activeDays = getActiveDays(rows)
  const todayKey = getLocalDateKey(today)
  const start = new Date(today)
  start.setDate(start.getDate() - (days - 1))

  return Array.from({ length: days }, (_, index) => {
    const day = new Date(start)
    day.setDate(start.getDate() + index)
    const dateKey = getLocalDateKey(day)
    return {
      active: activeDays.has(dateKey),
      isToday: dateKey === todayKey,
    }
  })
}

function getActiveDays(rows: DailyProgressSummary[] | undefined) {
  return new Set(
    (rows ?? [])
      .filter((row) => row.progressUnits > 0)
      .map((row) => row.dateKey),
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
