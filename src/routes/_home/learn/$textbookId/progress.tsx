// routes/_home/learn/$textbookId/progress.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { Show } from "solid-js"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { UpcomingModulesList } from "@/features/learn-page/components/content/UpcomingModulesList"
import { HeroDailyProgress } from "@/features/progress-page/components/HeroDailyProgress"
import { ProgressSummary } from "@/features/progress-page/components/ProgressSummary"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { useLearnPageContext } from "@/features/learn-page/context/LearnPageContext"
import { Route as ParentRoute } from "@/routes/_home/learn/$textbookId"
import {
  userDailyTimeQueryOptions,
  userSessionsQueryOptions,
  userWeekTimeDataQueryOptions,
  vocabularyStatsQueryOptions,
} from "@/features/progress-page/query/query-options"
import { dueFSRSCardsCountQueryOptions } from "@/features/learn-page/query/query-options"
import {
  calculateStreak,
  calculatePersonalBestStreak,
  normalizeWeekData,
  calculatePercentChange,
  calculateAverageDailyTime,
} from "@/features/progress-page/utils/stats-calculator"
import type { User } from "@supabase/supabase-js"

export const Route = createFileRoute("/_home/learn/$textbookId/progress")({
  loader: async ({ context }) => {
    const uid = context.user?.id
    if (!uid) return {}

    // Prefetch all queries
    const today = new Date()
    context.queryClient.prefetchQuery(userDailyTimeQueryOptions(uid, today))
    context.queryClient.prefetchQuery(userSessionsQueryOptions(uid))
    context.queryClient.prefetchQuery(userWeekTimeDataQueryOptions(uid))
    context.queryClient.prefetchQuery(vocabularyStatsQueryOptions(uid))
    context.queryClient.prefetchQuery(dueFSRSCardsCountQueryOptions(uid))

    return {}
  },

  component: function RouteComponent() {
    const loader = ParentRoute.useLoaderData()
    const { upcomingModulesQuery, completionsQuery } = useLearnPageContext()

    if (!loader()?.user) {
      return (
        <div class="flex h-[80vh] items-center justify-center text-center">
          <div>
            <h2 class="text-2xl font-bold">Sign in to see your progress</h2>
            <p class="text-muted-foreground mt-2">
              Track your daily learning and habits.
            </p>
          </div>
        </div>
      )
    }

    const userId = (loader().user as User).id

    // Queries
    const todayTimeQuery = useCustomQuery(() =>
      userDailyTimeQueryOptions(userId, new Date()),
    )
    const yesterdayTimeQuery = useCustomQuery(() => {
      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      return userDailyTimeQueryOptions(userId, yesterday)
    })
    const sessionsQuery = useCustomQuery(() => userSessionsQueryOptions(userId))
    const weekTimeQuery = useCustomQuery(() =>
      userWeekTimeDataQueryOptions(userId),
    )
    const vocabStatsQuery = useCustomQuery(() =>
      vocabularyStatsQueryOptions(userId),
    )
    const dueCountQuery = useCustomQuery(() =>
      dueFSRSCardsCountQueryOptions(userId),
    )

    // Calculate derived stats
    const sessions = () => sessionsQuery.data || []
    const todaySeconds = () => todayTimeQuery.data ?? 0
    const yesterdaySeconds = () => yesterdayTimeQuery.data ?? 0
    const minutesToday = () => Math.round(todaySeconds() / 60)
    const totalTime = () =>
      sessions().reduce((sum, s) => sum + s.duration_seconds, 0)
    const streak = () => calculateStreak(sessions())
    const personalBest = () => calculatePersonalBestStreak(sessions())
    const weekData = () => normalizeWeekData(weekTimeQuery.data || [])
    const percentChange = () =>
      calculatePercentChange(todaySeconds(), yesterdaySeconds())
    const avgDay = () => calculateAverageDailyTime(sessions(), 30)
    const totalHours = () => Math.round(totalTime() / 3600)

    // Filter completed modules from upcoming (KEY FIX - same as RightSidebar)
    const upcomingFiltered = () => {
      const upcoming = upcomingModulesQuery.data || []
      const completedSet = new Set(
        completionsQuery.data?.map((c) => c.module_path) || [],
      )
      return upcoming.filter((item) => !completedSet.has(item.id))
    }

    const vocabStats = () =>
      vocabStatsQuery.data || {
        vocab: { total: 0, week: 0 },
        kanji: { total: 0, week: 0 },
      }
    const dueCount = () => dueCountQuery.data || 0
    const dailyGoal = 30 // TODO: make this configurable

    return (
      <SSRMediaQuery showFrom="lg">
        <div class="h-[calc(100vh-141px)] overflow-hidden px-10 py-6">
          <div class="text-foreground mx-auto grid h-full w-[min(1200px,92vw)] grid-cols-[55%_45%] gap-8">
            {/* LEFT COLUMN */}
            <div class="flex flex-col justify-between">
              <div>
                <HeroDailyProgress
                  minutesToday={minutesToday()}
                  dailyGoal={dailyGoal}
                  streak={streak()}
                  weekData={weekData()}
                  percentChange={percentChange()}
                />
                <ProgressSummary
                  vocab={vocabStats().vocab}
                  kanji={vocabStats().kanji}
                  avgDay={avgDay()}
                  totalHours={totalHours()}
                  streak={streak()}
                  personalBest={personalBest()}
                />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div class="bg-card/30 flex flex-col overflow-hidden rounded-xl shadow-inner backdrop-blur-md">
              <h3 class="text-muted-foreground px-6 pt-5 text-sm font-semibold tracking-wide uppercase">
                What's Next
              </h3>
              <div class="flex-1 overflow-hidden">
                <UpcomingModulesList
                  variant="lg"
                  upcomingModules={upcomingFiltered}
                />
              </div>
            </div>
          </div>
        </div>
      </SSRMediaQuery>
    )
  },
})
