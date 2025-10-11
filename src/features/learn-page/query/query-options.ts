// features/learn-page-v2/query/query-options.ts
import {
  queryOptions,
  type DefaultError,
  type UseQueryResult,
} from "@tanstack/solid-query"
import { getDeckBySlug, getTextbookLearningPath } from "@/data/utils/core"
import { fetchThumbnailUrl } from "@/data/utils/thumbnails"
import { getDueFSRSCardsCount, getFSRSCards } from "@/features/supabase/db/fsrs"
import { getUserProgress } from "@/features/supabase/db/fsrs"
import { getUserModuleProgress } from "@/features/supabase/db/module-progress"
import { getUpcomingModules } from "@/features/learn-page/utils/learning-position-detector"
import { getVocabSets, getVocabularyForModule } from "@/data/utils/vocab"
import { getVocabHierarchy } from "@/features/resolvers/kanji"
import { dynamic_modules } from "@/data/dynamic_modules"
import type { TextbookIDEnum, VocabularyItem } from "@/data/types"
import type { ResourceProvider } from "@/data/resources-config"
import type { FSRSCardData } from "@/features/supabase/db/fsrs"
import type { VocabHierarchy } from "@/data/wanikani/hierarchy-builder"
import {
  getUserDailyTime,
  getUserSessions,
  getUserWeekTimeData,
} from "@/features/supabase/db/module-progress"
import { getVocabularyStats } from "@/features/supabase/db/fsrs"

export const vocabHierarchyQueryOptions = (
  activeTextbook: string,
  deck: NonNullable<ReturnType<typeof getDeckBySlug>>,
  userOverrides: any,
) =>
  queryOptions({
    queryKey: ["vocab-hierarchy", activeTextbook, deck.slug, userOverrides],
    queryFn: async () => {
      const vocabModuleId = deck.learning_path_items.find((moduleId) =>
        moduleId.endsWith("_vocab-list"),
      )

      let chapterVocabulary: VocabularyItem[] = []
      if (vocabModuleId) {
        chapterVocabulary = await getVocabularyForModule(vocabModuleId)
      }

      const vocabForHierarchy = chapterVocabulary.map((item) => item.word)
      const wkHierarchyData: VocabHierarchy | null = await getVocabHierarchy({
        data: {
          slugs: vocabForHierarchy,
          userOverrides,
        },
      })

      const slugs = [
        ...new Set([
          ...(wkHierarchyData?.vocabulary.map((item) => item.word) || []),
          ...(wkHierarchyData?.kanji.map((item) => item.kanji) || []),
          ...(wkHierarchyData?.radicals.map((item) => item.radical) || []),
        ]),
      ]

      return {
        chapterVocabulary,
        wordHierarchyData: wkHierarchyData,
        slugs,
      }
    },
    placeholderData: {
      chapterVocabulary: [],
      wordHierarchyData: null,
      slugs: [],
    },
  })

export const dueFSRSCardsCountQueryOptions = (userId: string | null) =>
  queryOptions({
    queryKey: ["fsrs-due-count", userId],
    queryFn: async () => {
      if (!userId) return 0
      return getDueFSRSCardsCount(userId)
    },
  })

export const completedModulesQueryOptions = (userId: string | null) =>
  queryOptions({
    queryKey: ["module-progress", userId, "completed"],
    queryFn: async () => {
      if (!userId) return []
      return getUserModuleProgress(userId, {
        orderBy: "completed_at",
        ascending: false,
      })
    },
  })

export const resourceThumbnailQueryOptions = (
  resourceId: string,
  resourceUrl: string,
  creatorId: ResourceProvider,
) =>
  queryOptions({
    queryKey: ["resource-thumbnail", resourceId],
    queryFn: () => fetchThumbnailUrl(resourceUrl, creatorId),
  })

export type ModuleWithCurrent = {
  id: string
  isCurrent?: boolean
  disabled?: boolean
}

export const upcomingModulesQueryOptions = (
  userId: string | null,
  textbookId: TextbookIDEnum,
  currentPosition: string | null,
) => {
  const queryFn = async (): Promise<ModuleWithCurrent[]> => {
    const learningPathItems = getTextbookLearningPath(textbookId)

    if (!currentPosition) {
      return learningPathItems.slice(0, 6).map((id) => ({ id }))
    }

    const currentModuleId = learningPathItems.find(
      (moduleId) => moduleId === currentPosition,
    )
    const upcoming = getUpcomingModules(currentPosition, learningPathItems, 15)

    return currentModuleId
      ? [{ id: currentModuleId, isCurrent: true }, ...upcoming]
      : upcoming
  }

  return queryOptions({
    queryKey: [
      "upcoming-modules",
      userId,
      textbookId,
      currentPosition,
    ] as const,
    queryFn,
  })
}

export type VocabModuleProgress = {
  completed: number
  total: number
  percentage: number
  meanings: {
    completed: number
    total: number
    percentage: number
  }
  spellings: {
    completed: number
    total: number
    percentage: number
  }
}

export const moduleProgressQueryOptions = (
  userId: string | null,
  upcomingModulesQuery: UseQueryResult<ModuleWithCurrent[], DefaultError>,
) => {
  return queryOptions({
    queryKey: [
      "module-progress",
      userId,
      upcomingModulesQuery.data?.map((m) => m.id),
    ] as const,
    queryFn: async (): Promise<Record<string, VocabModuleProgress>> => {
      const upcomingModules = upcomingModulesQuery.data!
      const vocabPracticeModuleIds = upcomingModules
        .map((item) => item.id)
        .filter((moduleId) => {
          const module = dynamic_modules[moduleId]
          return module && module.session_type === "vocab-practice"
        })

      if (!userId || vocabPracticeModuleIds.length === 0) return {}

      // Collect all vocab set IDs needed across all modules
      const allVocabSetIds = new Set<string>()
      vocabPracticeModuleIds.forEach((moduleId) => {
        const module = dynamic_modules[moduleId]
        if (module?.vocab_set_ids) {
          module.vocab_set_ids.forEach((setId) => allVocabSetIds.add(setId))
        }
      })

      // Fetch all vocabulary sets in a single query
      const vocabSets = await getVocabSets({ data: Array.from(allVocabSetIds) })

      // Build map of moduleId -> vocab keys and collect all unique keys
      const moduleVocabMap = new Map<string, string[]>()
      const allVocabKeys = new Set<string>()

      for (const moduleId of vocabPracticeModuleIds) {
        const module = dynamic_modules[moduleId]
        if (!module || !module.vocab_set_ids) continue

        const vocabKeys: string[] = []
        for (const setId of module.vocab_set_ids) {
          const keys = vocabSets[setId]
          if (keys) {
            vocabKeys.push(...keys)
            keys.forEach((key) => allVocabKeys.add(key))
          }
        }

        moduleVocabMap.set(moduleId, vocabKeys)
      }

      // Fetch all FSRS cards in a single query
      const fsrsCards = await getFSRSCards(userId, Array.from(allVocabKeys))

      // Build HashMap for O(1) lookups: "key:mode" -> FSRSCardData
      const fsrsCardIndex = new Map<string, FSRSCardData>()
      fsrsCards.forEach((card) => {
        if (card.type === "vocabulary") {
          fsrsCardIndex.set(`${card.practice_item_key}:${card.mode}`, card)
        }
      })

      // Calculate progress for each module
      const progressMap: Record<string, VocabModuleProgress> = {}

      for (const [moduleId, vocabKeys] of moduleVocabMap.entries()) {
        // Get allowed practice modes for this module
        const module = dynamic_modules[moduleId]
        const allowedModes = module?.allowed_practice_modes || [
          "meanings",
          "spellings",
        ]

        const meaningsAllowed = allowedModes.includes("meanings")
        const spellingsAllowed = allowedModes.includes("spellings")

        let total = 0
        let completed = 0
        let meaningsTotal = 0
        let meaningsCompleted = 0
        let spellingsTotal = 0
        let spellingsCompleted = 0

        for (const key of vocabKeys) {
          // Check meanings if allowed
          if (meaningsAllowed) {
            meaningsTotal++
            const meaningCard = fsrsCardIndex.get(`${key}:meanings`)
            if (meaningCard) {
              meaningsCompleted++
              completed++
            }
            total++
          }

          // Check spellings if allowed
          if (spellingsAllowed) {
            spellingsTotal++
            const spellingCard = fsrsCardIndex.get(`${key}:spellings`)
            if (spellingCard) {
              spellingsCompleted++
              completed++
            }
            total++
          }
        }

        const percentage = total > 0 ? Math.round((completed / total) * 100) : 0
        const meaningsPercentage =
          meaningsTotal > 0
            ? Math.round((meaningsCompleted / meaningsTotal) * 100)
            : 0
        const spellingsPercentage =
          spellingsTotal > 0
            ? Math.round((spellingsCompleted / spellingsTotal) * 100)
            : 100

        progressMap[moduleId] = {
          completed,
          total,
          percentage,
          meanings: {
            completed: meaningsCompleted,
            total: meaningsTotal,
            percentage: meaningsPercentage,
          },
          spellings: {
            completed: spellingsCompleted,
            total: spellingsTotal,
            percentage: spellingsPercentage,
          },
        }
      }

      return progressMap
    },
    enabled: !upcomingModulesQuery.isPending && !upcomingModulesQuery.isError,
  })
}

// ============================================================================
// Progress Page Query Options (from original progress-page)
// ============================================================================

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
  })
