import {
  queryOptions,
  type DefaultError,
  type UseQueryResult,
} from "@tanstack/solid-query"
import { getCookie } from "@/utils/cookie-utils"
import { UserSettingsSchema } from "@/features/main-cookies/schemas/user-settings"
import {
  getDueFSRSCards,
  getFSRSCards,
  type FSRSCardData,
} from "@/features/supabase/db/fsrs"
import { getVocabularyForModule } from "@/data/utils/vocab"
import { getVocabHierarchy } from "@/features/resolvers/kanji"
import type { VocabHierarchy } from "@/data/wanikani/hierarchy-builder"
import type { VocabularyItem, TextbookIDEnum } from "@/data/types"
import type { PracticeMode } from "@/features/vocab-practice/types"
import { fetchKanjiSvgsBatch } from "@/utils/svg-processor"
import {
  getDeckInfoServerFn,
  getVocabForDeck,
} from "@/features/supabase/db/deck"
import { getDeckBySlug, getLearningPathModules } from "@/data/utils/core"
import { fetchThumbnailUrl } from "@/data/utils/thumbnails"
import { createSRSAdapter } from "@/features/srs-services/factory"
import type {
  DueCountResult,
  SeenCardsStatsResult,
} from "@/features/srs-services/types"
import type { AllServicePreferences } from "@/features/main-cookies/schemas/user-settings"
import {
  getUserDailyTime,
  getUserModuleProgress,
  getUserSessions,
  getUserWeekTimeData,
} from "@/features/supabase/db/module-progress"
import { getUpcomingModules } from "@/features/learn-page/utils/learning-position-detector"
import { dynamic_modules } from "@/data/dynamic_modules"
import type { ResourceProvider } from "@/data/resources-config"
import { fetchUserSettingsFromDB } from "@/query/utils/user-settings"
import { buildVocabHierarchy } from "@/query/utils/hierarchy-builder"
import { mergeCompletionsWithLocal } from "@/query/utils/completion-manager"
import { buildModuleProgressMap } from "@/query/utils/progress-calculator"
import { queryKeys } from "@/query/utils/query-keys"

// ============================================================================
// User Settings Query Options
// ============================================================================

/**
 * Query options for DB-only user settings
 * - Only fetches from Supabase, doesn't touch cookies
 * - Used to track DB sync status separately from cookie query
 */
export const dbUserSettingsQueryOptions = (userId: string | null) =>
  queryOptions({
    queryKey: queryKeys.dbUserSettings(userId),
    queryFn: async () => {
      if (!userId) return null
      return await fetchUserSettingsFromDB(userId)
    },
    enabled: !!userId,
  })

/**
 * Query options for combined user settings (device-specific + user-specific)
 * - Returns cookie data immediately (fast path)
 * - DB sync happens in background via fetchUserSettingsFromDB
 */
export const userSettingsQueryOptions = (userId: string | null) =>
  queryOptions({
    queryKey: queryKeys.userSettings(userId),
    queryFn: async () => {
      const cookieValue = getCookie("user-settings")
      if (cookieValue) {
        try {
          const parsed = JSON.parse(cookieValue)
          const result = UserSettingsSchema.safeParse(parsed)
          if (result.success) {
            return result.data
          }
        } catch {}
      }

      return UserSettingsSchema.parse({})
    },
    placeholderData: UserSettingsSchema.parse({}),
    staleTime: Infinity,
    gcTime: Infinity,
  })

// ============================================================================
// Vocab Practice Query Options
// ============================================================================

/**
 * Get vocabulary hierarchy for a practice module
 */
export const practiceHierarchyQueryOptions = (
  moduleId: string,
  vocabulary: VocabularyItem[],
  mode: PracticeMode,
  userOverrides: any,
  isLiveService: boolean,
) =>
  queryOptions({
    queryKey: queryKeys.practiceHierarchy(
      moduleId,
      mode,
      userOverrides,
      isLiveService,
    ),
    queryFn: () =>
      buildVocabHierarchy(
        vocabulary,
        mode,
        userOverrides,
        isLiveService,
        "practiceHierarchyQueryOptions",
      ),
  })

/**
 * Get vocabulary list for a practice module
 */
export const moduleVocabularyQueryOptions = (moduleId: string) =>
  queryOptions({
    queryKey: queryKeys.moduleVocabulary(moduleId),
    queryFn: () => getVocabularyForModule(moduleId),
  })

/**
 * Get FSRS cards for a practice module
 * Only enabled when using local FSRS mode
 * Filters by practice mode to ensure separate progress tracking
 */
export const practiceModuleFSRSCardsQueryOptions = (
  userId: string | null,
  slugs: string[],
  mode: PracticeMode,
  enabled: boolean,
) =>
  queryOptions({
    queryKey: queryKeys.practiceModuleFSRS(userId, slugs, mode),
    queryFn: async (): Promise<FSRSCardData[]> => {
      if (!userId || slugs.length === 0) return []
      return await getFSRSCards(userId, slugs, mode)
    },
    enabled: enabled && !!userId && slugs.length > 0,
  })

/**
 * Get due FSRS cards for review mixing
 * Only enabled when using local FSRS mode
 */
export const practiceDueFSRSCardsQueryOptions = (
  userId: string | null,
  enabled: boolean,
) =>
  queryOptions({
    queryKey: queryKeys.practiceDueFSRS(userId),
    queryFn: async (): Promise<FSRSCardData[]> => {
      if (!userId) return []
      return await getDueFSRSCards({ data: userId })
    },
    enabled: enabled && !!userId,
  })

/**
 * Get SVG data for kanji and radicals
 */
export const hierarchySvgsQueryOptions = (characters: string[]) =>
  queryOptions({
    queryKey: queryKeys.hierarchySvgs(characters),
    queryFn: async (): Promise<Map<string, string>> => {
      if (characters.length === 0) return new Map()
      return await fetchKanjiSvgsBatch(characters)
    },
    staleTime: Infinity, // SVGs never change
  })

/**
 * Get user deck info
 */
export const userDeckInfoQueryOptions = (deckId: number) =>
  queryOptions({
    queryKey: queryKeys.userDeckInfo(deckId),
    queryFn: () => getDeckInfoServerFn({ data: { deck_id: deckId } }),
  })

/**
 * Get vocabulary for a user deck
 */
export const userDeckVocabularyQueryOptions = (deckId: number) =>
  queryOptions({
    queryKey: queryKeys.userDeckVocabulary(deckId),
    queryFn: () => getVocabForDeck(deckId),
  })

/**
 * Get hierarchy for a user deck
 */
export const userDeckHierarchyQueryOptions = (
  deckId: number,
  vocabulary: VocabularyItem[],
  mode: PracticeMode,
  userOverrides: any,
  isLiveService: boolean,
) =>
  queryOptions({
    queryKey: queryKeys.userDeckHierarchy(
      deckId,
      mode,
      userOverrides,
      isLiveService,
    ),
    queryFn: () =>
      buildVocabHierarchy(
        vocabulary,
        mode,
        userOverrides,
        isLiveService,
        "userDeckHierarchyQueryOptions",
      ),
  })

// ============================================================================
// Learn Page Query Options
// ============================================================================

export const vocabHierarchyQueryOptions = (
  activeTextbook: string,
  deck: NonNullable<ReturnType<typeof getDeckBySlug>>,
  userOverrides: any,
) =>
  queryOptions({
    queryKey: queryKeys.vocabHierarchy(
      activeTextbook,
      deck.slug,
      userOverrides,
    ),
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

export const dueCardsCountQueryOptions = (
  userId: string | null,
  preferences: AllServicePreferences,
) =>
  queryOptions({
    queryKey: queryKeys.dueCardsCount(userId, preferences),
    queryFn: async () => {
      if (!userId)
        return {
          total: 0,
          meanings: { vocab: 0, kanji: 0 },
          spellings: 0,
        }

      const adapter = createSRSAdapter(userId, preferences)
      return adapter.getDueCount()
    },
    staleTime: (query) => {
      const data = query.state.data as DueCountResult | undefined
      // If CLIENT_ONLY, mark as immediately stale to force refetch
      // Once real data is fetched, it becomes cached forever
      return data?.unavailableReason === "CLIENT_ONLY" ? 0 : Infinity
    },
  })

export const seenCardsStatsQueryOptions = (
  userId: string | null,
  preferences: AllServicePreferences,
) =>
  queryOptions({
    queryKey: queryKeys.seenCardsStats(userId, preferences),
    queryFn: async (): Promise<SeenCardsStatsResult> => {
      if (!userId) return { stats: null }

      const adapter = createSRSAdapter(userId, preferences)
      return adapter.getSeenCardsStats()
    },
    staleTime: (query) => {
      const data = query.state.data as SeenCardsStatsResult | undefined
      // If CLIENT_ONLY, mark as immediately stale to force refetch
      // Once real data is fetched, it becomes cached forever
      return data?.unavailableReason === "CLIENT_ONLY" ? 0 : Infinity
    },
  })

type ModuleProgress = Awaited<ReturnType<typeof getUserModuleProgress>>[number]
export type ModuleProgressWithLocal =
  | ModuleProgress
  | {
      module_path: string
      user_id: string | null
      completed_at: null
    }

export const completedModulesQueryOptions = (userId: string | null) =>
  queryOptions({
    queryKey: queryKeys.completedModules(userId),
    refetchOnMount: "always", // Ensure localStorage completions load on client
    queryFn: () => mergeCompletionsWithLocal(userId),
  })

export const resourceThumbnailQueryOptions = (
  resourceId: string,
  resourceUrl: string,
  creatorId: ResourceProvider,
) =>
  queryOptions({
    queryKey: queryKeys.resourceThumbnail(resourceId),
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
    const learningPathItems = getLearningPathModules(textbookId)

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
    queryKey: queryKeys.upcomingModules(userId, textbookId, currentPosition),
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
    queryKey: queryKeys.moduleProgress(
      userId,
      upcomingModulesQuery.data?.map((m) => m.id),
    ),
    queryFn: async (): Promise<Record<string, VocabModuleProgress>> => {
      const upcomingModules = upcomingModulesQuery.data!
      const vocabPracticeModuleIds = upcomingModules
        .map((item) => item.id)
        .filter((moduleId) => {
          const module = dynamic_modules[moduleId]
          return module && module.session_type === "vocab-practice"
        })

      return await buildModuleProgressMap(userId, vocabPracticeModuleIds)
    },
    enabled: !upcomingModulesQuery.isPending && !upcomingModulesQuery.isError,
  })
}

/**
 * Query for getting time spent on a specific date
 */
export const userDailyTimeQueryOptions = (userId: string | null, date: Date) =>
  queryOptions({
    queryKey: queryKeys.userDailyTime(userId, date),
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
    queryKey: queryKeys.userSessions(
      userId,
      options?.startDate,
      options?.endDate,
    ),
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
    queryKey: queryKeys.userWeekTimeData(userId),
    queryFn: async () => {
      if (!userId) return []
      return getUserWeekTimeData(userId)
    },
  })
