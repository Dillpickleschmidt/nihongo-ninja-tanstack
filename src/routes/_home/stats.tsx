import { createFileRoute } from "@tanstack/solid-router"
import { For, Show, createMemo } from "solid-js"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { queryKeys } from "~/query/query-keys"
import {
  DAILY_PROGRESS_TARGET_UNITS,
  getLocalDateKey,
} from "@/lib/progress/weights"

export const Route = createFileRoute("/_home/stats")({
  loader: ({ context, preload }) => {
    if (!preload) {
      context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
        blur: 4,
        opacityOffset: -0.22,
        showGradient: false,
      })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const todayKey = () => getLocalDateKey()
  const range = () => getLastNDaysRange(7)

  const dailyStatsQuery = useConvexQuery(
    api.api.progress.getDailyModuleStatsForDate,
    () => ({ dateKey: todayKey() }),
  )

  const dailyProgressQuery = useConvexQuery(
    api.api.progress.getDailyProgress,
    () => ({ dateKey: todayKey() }),
  )

  const recentActivityQuery = useConvexQuery(
    api.api.progress.getRecentModuleActivity,
    () => ({ limit: 12 }),
  )

  const distributionQuery = useConvexQuery(
    api.api.progress.getDistribution,
    () => ({
      fromDateKey: range().fromDateKey,
      toDateKey: range().toDateKey,
    }),
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

  return (
    <main class="p-4 pb-24 md:pl-72 md:pr-6 md:pt-6">
      <h1 class="text-2xl font-semibold">Stats</h1>

      <section class="mt-6 space-y-1">
        <h2 class="font-medium">Today Summary</h2>
        <p>date: {todayKey()}</p>
        <p>progress units (from daily stats): {derived().progressUnits}</p>
        <p>
          progress units (direct daily query):{" "}
          {dailyProgressQuery.data()?.progressUnits ?? 0}
        </p>
        <p>questions answered: {derived().questionsAnswered}</p>
        <p>
          daily progress: {derived().progressPercent}% (
          {derived().progressUnits} / {DAILY_PROGRESS_TARGET_UNITS})
        </p>
      </section>

      <section class="mt-8">
        <h2 class="font-medium">Today Module Breakdown</h2>
        <Show
          when={(dailyStatsQuery.data()?.length ?? 0) > 0}
          fallback={<p class="text-sm">No stats recorded today.</p>}
        >
          <table class="mt-2 w-full text-left text-sm">
            <thead>
              <tr>
                <th>modulePath</th>
                <th>moduleType</th>
                <th>progressUnits</th>
                <th>questions</th>
                <th>lastUpdatedAt</th>
              </tr>
            </thead>
            <tbody>
              <For each={dailyStatsQuery.data() || []}>
                {(row) => (
                  <tr>
                    <td>{row.modulePath}</td>
                    <td>{row.moduleType}</td>
                    <td>{row.progressUnits}</td>
                    <td>{row.questionsAnswered}</td>
                    <td>{new Date(row.lastUpdatedAt).toLocaleString()}</td>
                  </tr>
                )}
              </For>
            </tbody>
          </table>
        </Show>
      </section>

      <section class="mt-8">
        <h2 class="font-medium">Recent Module Activity</h2>
        <Show
          when={(recentActivityQuery.data()?.length ?? 0) > 0}
          fallback={<p class="text-sm">No recent activity yet.</p>}
        >
          <ul class="mt-2 space-y-1 text-sm">
            <For each={recentActivityQuery.data() || []}>
              {(row) => (
                <li>
                  {row.moduleType} / {row.modulePath} - {row.progressUnits}{" "}
                  units, {row.questionsAnswered} questions -{" "}
                  {new Date(row.lastUpdatedAt).toLocaleString()}
                </li>
              )}
            </For>
          </ul>
        </Show>
      </section>

      <section class="mt-8">
        <h2 class="font-medium">Distribution (Last 7 Days)</h2>
        <p class="text-sm">
          range: {range().fromDateKey} to {range().toDateKey}
        </p>
        <Show
          when={(distributionQuery.data()?.length ?? 0) > 0}
          fallback={<p class="text-sm">No distribution data yet.</p>}
        >
          <ul class="mt-2 space-y-1 text-sm">
            <For each={distributionQuery.data() || []}>
              {(row) => (
                <li>
                  {row.moduleType}: {row.progressUnits} units,{" "}
                  {row.questionsAnswered} questions
                </li>
              )}
            </For>
          </ul>
        </Show>
      </section>
    </main>
  )
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
