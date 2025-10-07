// features/progress-page/query/query-options.ts
import { queryOptions } from "@tanstack/solid-query"
import {
  getUserDailyTime,
  getUserSessions,
  getUserWeekTimeData,
} from "@/features/supabase/db/module-progress"
import { getVocabularyStats } from "@/features/supabase/db/fsrs"

/**
 * Query for getting time spent on a specific date
 */
export const userDailyTimeQueryOptions = (userId: string | null, date: Date) =>
  queryOptions({
    queryKey: ["user-daily-time", userId, date.toDateString()],
    queryFn: async () => {
      if (!userId) return 0
      return getUserDailyTime(userId, date)
    },
  })

/**
 * Query for getting all user sessions
 */
export const userSessionsQueryOptions = (
  userId: string | null,
  options?: { startDate?: Date; endDate?: Date },
) =>
  queryOptions({
    queryKey: [
      "user-sessions",
      userId,
      options?.startDate?.toISOString(),
      options?.endDate?.toISOString(),
    ],
    queryFn: async () => {
      if (!userId) return []
      return getUserSessions(userId, options)
    },
    placeholderData: [],
  })

/**
 * Query for getting last 7 days of time data (optimized - single query)
 */
export const userWeekTimeDataQueryOptions = (userId: string | null) =>
  queryOptions({
    queryKey: ["user-week-time-data", userId],
    queryFn: async () => {
      if (!userId) return []
      return getUserWeekTimeData(userId)
    },
    placeholderData: [0, 0, 0, 0, 0, 0, 0],
  })

/**
 * Query for vocabulary and kanji counts (total and this week)
 * Optimized - uses single RPC call instead of 4 separate queries
 */
export const vocabularyStatsQueryOptions = (userId: string | null) =>
  queryOptions({
    queryKey: ["vocabulary-stats", userId],
    queryFn: async () => {
      if (!userId)
        return {
          vocab: { total: 0, week: 0 },
          kanji: { total: 0, week: 0 },
        }

      const stats = await getVocabularyStats(userId)

      return {
        vocab: { total: stats.vocab_total, week: stats.vocab_week },
        kanji: { total: stats.kanji_total, week: stats.kanji_week },
      }
    },
    placeholderData: {
      vocab: { total: 0, week: 0 },
      kanji: { total: 0, week: 0 },
    },
  })
