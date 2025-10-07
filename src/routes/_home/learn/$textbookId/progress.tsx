// routes/_home/learn/$textbookId.progress.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { For, Show, createMemo } from "solid-js"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { UpcomingModulesList } from "@/features/learn-page/components/content/UpcomingModulesList"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { useLearnPageContext } from "@/features/learn-page/context/LearnPageContext"
import { Route as ParentRoute } from "@/routes/_home/learn/$textbookId"
import {
  getUserDailyTime,
  getUserSessions,
} from "@/features/supabase/db/module-progress"
import { getDueFSRSCardsCount } from "@/features/supabase/db/fsrs"
import type { User } from "@supabase/supabase-js"

/*──────────────────────── helpers ────────────────────────*/
const DUR = (s: number) => {
  if (!s) return "0 m"
  const m = Math.floor(s / 60)
  const h = Math.floor(m / 60)
  const r = m % 60
  return h ? `${h} h ${r} m` : `${m} m`
}
const todayStr = () => new Date().toDateString()
const sameDay = (a: string | Date, b: Date) =>
  new Date(a).toDateString() === b.toDateString()

/*──────────────────────── HERO ────────────────────────*/
const HeroDailyProgress = (p: {
  minutesToday: number
  dailyGoal: number
  streak: number
  weekData: number[]
  percentChange: number
}) => {
  const completion = createMemo(() =>
    Math.min(100, (p.minutesToday / p.dailyGoal) * 100),
  )

  return (
    <div class="relative overflow-hidden rounded-xl bg-gradient-to-br from-emerald-600/20 via-emerald-500/10 to-transparent p-6 shadow-inner backdrop-blur-md">
      <div class="mb-5 flex items-center justify-between">
        <div>
          <p class="text-muted-foreground text-xs tracking-wide uppercase">
            Today's Goal
          </p>
          <h2 class="text-4xl font-bold text-white">
            {Math.floor(p.minutesToday)} / {p.dailyGoal} min
          </h2>
          <p class="mt-1 text-sm font-medium text-emerald-300">
            {completion() >= 100
              ? "Goal complete! Great work 🔥"
              : completion() >= 50
                ? "Halfway there — keep going!"
                : "You're off to a good start!"}
          </p>
        </div>

        <div
          class="relative h-24 w-24 rounded-full border-4 border-neutral-700"
          style={{
            background: `conic-gradient(var(--emerald-400) ${completion()}%, transparent ${completion()}%)`,
          }}
        >
          <div class="bg-card/80 absolute inset-2 flex items-center justify-center rounded-full text-2xl font-semibold text-emerald-300">
            {Math.round(completion())}%
          </div>
        </div>
      </div>

      <div class="mt-3 flex h-16 items-end justify-between">
        <For each={p.weekData}>
          {(h, i) => (
            <div
              class={`w-3 rounded ${
                i() === p.weekData.length - 1
                  ? "bg-emerald-400/90"
                  : "bg-emerald-400/50"
              }`}
              style={{ height: `${h}%` }}
            />
          )}
        </For>
      </div>
      <p class="text-muted-foreground mt-1 text-xs">
        {p.streak}‑day streak · 
        <span
          class={p.percentChange >= 0 ? "text-emerald-400" : "text-rose-400"}
        >
          {p.percentChange >= 0 ? "+" : ""}
          {p.percentChange} %
        </span>{" "}
        vs yesterday
      </p>
    </div>
  )
}

/*──────────────────────── PERFORMANCE SUMMARY ────────────────────────*/
const ProgressSummary = (p: {
  vocab: { total: number; week: number }
  kanji: { total: number; week: number }
  avgDay: number
  totalHours: number
  streak: number
  personalBest: number
}) => (
  <section class="bg-card/20 text-foreground mt-7 rounded-xl px-7 py-7 text-sm backdrop-blur-md">
    {/* ─── Metrics row ─── */}
    <div class="grid grid-cols-3 items-start gap-10">
      {/* Knowledge Growth */}
      <div>
        <h4 class="text-muted-foreground mb-1 text-xs tracking-wide uppercase">
          Knowledge
        </h4>
        <p class="text-lg font-semibold text-white">
          <span class="text-xl">{p.vocab.total.toLocaleString()}</span> Vocab
        </p>
        <p class="text-base font-semibold text-white">
          {p.kanji.total.toLocaleString()} Kanji
        </p>
        <p class="mt-1 text-xs text-emerald-400">
          +{p.vocab.week} V · +{p.kanji.week} K this week
        </p>
      </div>

      {/* Consistency — centered column */}
      <div class="flex justify-center">
        <div>
          <h4 class="text-muted-foreground mb-1 text-xs tracking-wide uppercase">
            Consistency
          </h4>
          <p class="text-lg font-semibold text-white">
            Avg Day <span class="text-sky-400">{p.avgDay} min</span>
          </p>
          <p class="mt-1.5 text-base font-semibold text-white">
            {p.totalHours} h total
          </p>
        </div>
      </div>

      {/* Streak */}
      <div class="text-right">
        <h4 class="text-muted-foreground mb-1 text-xs tracking-wide uppercase">
          Streak
        </h4>
        <p class="text-2xl leading-none font-bold text-amber-400">
          {p.streak} days
        </p>
        <p class="text-muted-foreground mt-2 text-xs">
          Personal best: {p.personalBest}
        </p>
      </div>
    </div>

    {/* ─── Buttons row ─── */}
    <div class="mt-3 grid grid-cols-3 gap-10 text-xs font-medium">
      <button class="border-foreground/10 bg-card/30 justify-self-start rounded-md border px-4 py-1.5 transition hover:border-emerald-400/40 hover:bg-emerald-500/10 hover:text-emerald-300">
        See Knowledge
      </button>

      <button class="border-foreground/10 bg-card/30 justify-self-center rounded-md border px-4 py-1.5 text-[9px] transition hover:border-sky-400/40 hover:bg-sky-500/10 hover:text-sky-300">
        Adjust Target?
      </button>

      <button class="border-foreground/10 bg-card/30 justify-self-end rounded-md border px-4 py-1.5 transition hover:border-indigo-400/40 hover:bg-indigo-500/10 hover:text-indigo-300">
        View History
      </button>
    </div>
  </section>
)

/*──────────────────────── MAIN DASHBOARD ────────────────────────*/
const DailyGoalDashboard = (p: {
  minutesToday: number
  dailyGoal: number
  sessions: any[]
  dueCount: number
  upcoming: any[]
  weekData: number[]
  streak: number
  personalBest: number
  totalTime: number
  percentChange: number
}) => {
  const completion = (p.minutesToday / p.dailyGoal) * 100
  const latestSession = p.sessions[0] || undefined

  const avgDay = 22 // placeholder
  const totalHours = Math.round(p.totalTime / 3600)
  const vocab = { total: 1240, week: 30 }
  const kanji = { total: 790, week: 12 }

  return (
    <div class="h-[calc(100vh-141px)] overflow-hidden px-10 py-6">
      <div class="text-foreground mx-auto grid h-full w-[min(1200px,92vw)] grid-cols-[55%_45%] gap-8">
        {/* LEFT COLUMN */}
        <div class="flex flex-col justify-between">
          <div>
            <HeroDailyProgress
              minutesToday={p.minutesToday}
              dailyGoal={p.dailyGoal}
              streak={p.streak}
              weekData={p.weekData}
              percentChange={p.percentChange}
            />
            <ProgressSummary
              dueCount={p.dueCount}
              latestSession={latestSession}
              vocab={vocab}
              kanji={kanji}
              avgDay={avgDay}
              totalHours={totalHours}
              streak={p.streak}
              personalBest={p.personalBest}
            />
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div class="bg-card/30 flex flex-col overflow-hidden rounded-xl shadow-inner backdrop-blur-md">
          <h3 class="text-muted-foreground px-6 pt-5 text-sm font-semibold tracking-wide uppercase">
            What's Next
          </h3>
          <div class="flex-1 overflow-hidden">
            <UpcomingModulesList
              variant="lg"
              upcomingModules={() => p.upcoming}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

/*──────────────────────── ROUTE ────────────────────────*/
export const Route = createFileRoute("/_home/learn/$textbookId/progress")({
  loader: async ({ context }) => {
    const uid = context.user?.id
    if (!uid) return {}
    const t = new Date()
    context.queryClient.prefetchQuery({
      queryKey: ["time-day", uid, t.toDateString()],
      queryFn: () => getUserDailyTime(uid, t),
    })
    context.queryClient.prefetchQuery({
      queryKey: ["sess", uid],
      queryFn: () => getUserSessions(uid),
    })
    context.queryClient.prefetchQuery({
      queryKey: ["fsrs-due", uid],
      queryFn: () => getDueFSRSCardsCount(uid),
    })
    return {}
  },

  component: function RouteComponent() {
    const loader = ParentRoute.useLoaderData()
    const { upcomingModulesQuery } = useLearnPageContext()

    if (!loader()?.user)
      return (
        <div class="flex h-[80vh] items-center justify-center text-center">
          <div>
            <h2 class="text-2xl font-bold">Sign in to see your progress</h2>
            <p class="text-muted-foreground mt-2">
              Track your daily learning and habits.
            </p>
          </div>
        </div>
      )

    const userId = (loader().user as User).id
    const tQ = useCustomQuery(() => ({
      queryKey: ["time-day", userId, todayStr()],
      queryFn: () => getUserDailyTime(userId, new Date()),
    }))
    const sQ = useCustomQuery(() => ({
      queryKey: ["sess", userId],
      queryFn: () => getUserSessions(userId),
    }))
    const fsrsQ = useCustomQuery(() => ({
      queryKey: ["fsrs-due", userId],
      queryFn: () => getDueFSRSCardsCount(userId),
    }))

    // placeholder / derived
    const dailyGoal = 30
    const minutesToday = Math.round((tQ.data ?? 0) / 60)
    const streak = 3
    const personalBest = 24
    const totalTime = 38 * 3600
    const percentChange = 18
    const weekData = [40, 70, 30, 90, 60, 80, 50]
    const upcoming = upcomingModulesQuery.data || []
    const sessions = sQ.data || []
    const dueCount = fsrsQ.data || 0

    return (
      <SSRMediaQuery showFrom="lg">
        <DailyGoalDashboard
          minutesToday={minutesToday}
          dailyGoal={dailyGoal}
          sessions={sessions}
          dueCount={dueCount}
          upcoming={upcoming}
          weekData={weekData}
          streak={streak}
          personalBest={personalBest}
          totalTime={totalTime}
          percentChange={percentChange}
        />
      </SSRMediaQuery>
    )
  },
})
