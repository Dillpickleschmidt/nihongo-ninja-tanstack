import {
  queryOptions,
  type DefaultError,
  type UseQueryResult,
} from "@tanstack/solid-query"
import { getCookie } from "@/utils/cookie-utils"
import { UserSettingsSchema } from "@/features/main-cookies/schemas/user-settings"
import { USER_SETTINGS_COOKIE } from "@/features/main-cookies/types"
import {
  getDueFSRSCards,
  getFSRSCards,
  type FSRSCardData,
} from "@/features/supabase/db/fsrs"
import {
  getTranscriptData,
  getModuleMetadata,
} from "@/features/supabase/db/learning-paths"
import { getVocabularyForModule } from "@/data/utils/vocab"
import { getVocabHierarchy } from "@/features/resolvers/kanji"
import type { VocabHierarchy } from "@/data/wanikani/hierarchy-builder"
import type {
  VocabularyItem,
  TextbookIDEnum,
  LearningPathChapter,
} from "@/data/types"
import type { PracticeMode } from "@/features/vocab-practice/types"
import { fetchKanjiSvgsBatch } from "@/utils/svg-processor"
import {
  getDeckInfoServerFn,
  getVocabForDeck,
} from "@/features/supabase/db/deck"
import {
  getLearningPathChapterItems,
  fetchAllLearningPaths,
} from "@/data/utils/core"
import { chapters } from "@/data/chapters"
import { fetchThumbnailUrl } from "@/data/utils/thumbnails"
import { dynamic_modules } from "@/data/dynamic_modules"
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
import { getUpcomingModules } from "@/query/utils/learning-position-detector"
import type { ResourceProvider } from "@/data/resources-config"
import {
  fetchUserSettingsFromDB,
  syncUserSettingsToDb,
  updateUserSettingsCookie,
} from "@/query/utils/user-settings"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"
import { buildVocabHierarchy } from "@/query/utils/hierarchy-builder"
import { mergeCompletionsWithLocal } from "@/query/utils/completion-manager"
import { buildModuleProgressMap } from "@/query/utils/progress-calculator"
import { queryKeys } from "@/query/utils/query-keys"

// ============================================================================
// Background Settings Query Options
// ============================================================================

export type BackgroundSettings = {
  blur: number | undefined
  backgroundOpacityOffset: number
  showGradient: boolean
}

const defaultBackgroundSettings: BackgroundSettings = {
  blur: undefined,
  backgroundOpacityOffset: 0,
  showGradient: true,
}

export const backgroundSettingsQueryOptions = () => {
  return queryOptions({
    queryKey: queryKeys.backgroundSettings(),
    queryFn: async () => defaultBackgroundSettings,
    initialData: defaultBackgroundSettings,
    staleTime: Infinity,
    gcTime: Infinity,
  })
}

// ============================================================================
// User Settings Query Options
// ============================================================================

/**
 * Parse user settings from cookie, returning parsed data or defaults
 */
function parseUserSettingsCookie(): UserSettings {
  const cookieValue = getCookie(USER_SETTINGS_COOKIE)
  if (!cookieValue) {
    return UserSettingsSchema.parse({})
  }

  try {
    const parsed = UserSettingsSchema.parse(JSON.parse(cookieValue))
    return parsed
  } catch (e) {
    console.error("[parseUserSettingsCookie] Failed to parse cookie:", e)
    return UserSettingsSchema.parse({})
  }
}

/**
 * Returns settings with newest timestamp (cookie or DB) for multi-device sync
 */
export const userSettingsQueryOptions = (userId: string | null) => {
  const initialData = parseUserSettingsCookie()

  return queryOptions({
    queryKey: queryKeys.userSettings(userId),
    queryFn: async () => {
      const cookieData = parseUserSettingsCookie()

      // If no user, return cookie only
      if (!userId) {
        return cookieData
      }

      // Fetch from DB
      const dbSettings = await fetchUserSettingsFromDB(userId)
      if (!dbSettings) {
        // Shouldn't happen but in case the db somehow didn't get set during sign-up
        syncUserSettingsToDb(userId, cookieData, Date.now()).catch((err) =>
          console.warn("Failed to write default settings", err),
        )
        return cookieData
      }

      // Special case: If cookie has default "getting_started" but DB has real progress,
      // prefer DB (user likely signed out and local cookie is stale)
      if (
        cookieData["active-learning-path"] === "getting_started" &&
        dbSettings["active-learning-path"] &&
        dbSettings["active-learning-path"] !== "getting_started"
      ) {
        updateUserSettingsCookie(dbSettings)
        return dbSettings
      }

      // Compare timestamps
      const cookieTimestamp = cookieData.timestamp || 0
      const dbTimestamp = dbSettings.timestamp || 0

      // If DB is fresher, use it and update cookie
      if (dbTimestamp > cookieTimestamp) {
        updateUserSettingsCookie(dbSettings)
        return dbSettings
      }

      // Cookie is fresher or equal
      return cookieData
    },
    initialData,
    gcTime: Infinity,
  })
}

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
  })

/**
 * Get user deck info
 */
export const userDeckInfoQueryOptions = (deckId: string) =>
  queryOptions({
    queryKey: queryKeys.userDeckInfo(deckId),
    queryFn: () => getDeckInfoServerFn({ data: { deck_id: deckId } }),
  })

/**
 * Get vocabulary for a user deck
 */
export const userDeckVocabularyQueryOptions = (deckId: string) =>
  queryOptions({
    queryKey: queryKeys.userDeckVocabulary(deckId),
    queryFn: () => getVocabForDeck(deckId),
  })

/**
 * Get hierarchy for a user deck
 */
export const userDeckHierarchyQueryOptions = (
  deckId: string,
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
  deck: LearningPathChapter,
  userOverrides: any,
) =>
  queryOptions({
    queryKey: queryKeys.vocabHierarchy(
      activeTextbook,
      deck.slug,
      userOverrides,
    ),
    queryFn: async () => {
      const vocabModuleId = deck.learning_path_item_ids.find((moduleId) =>
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

/**
 * Get all learning paths (static textbooks + user-created)
 */
export const allLearningPathsQueryOptions = (userId: string | null) =>
  queryOptions({
    queryKey: queryKeys.allLearningPaths(userId),
    queryFn: () => fetchAllLearningPaths(userId),
    staleTime: 5 * 60 * 1000, // 5 minutes cache
  })

/**
 * Query for getting all modules for a specific chapter in a learning path
 */
export const chapterModulesQueryOptions = (
  learningPathId: string,
  chapterSlug: string,
) => {
  return queryOptions({
    queryKey: queryKeys.chapterModules(learningPathId, chapterSlug),
    queryFn: async () => {
      return await getLearningPathChapterItems(learningPathId, chapterSlug)
    },
  })
}

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
    queryFn: async () => {
      return await mergeCompletionsWithLocal(userId)
    },
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
    // Get all module IDs for the textbook by flattening all chapters
    const chapterMap = chapters[textbookId]
    const learningPathItems = chapterMap
      ? Object.values(chapterMap).flatMap((ch) => ch.learning_path_item_ids)
      : []

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
          return module && module.source_type === "vocab-practice"
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

// ============================================================================
// Module Detail Dialog Query Options
// ============================================================================

/**
 * Get transcript data for a learning path.
 */
export const transcriptDataQueryOptions = (learningPathId: string) =>
  queryOptions({
    queryKey: queryKeys.transcriptData(learningPathId),
    queryFn: () => getTranscriptData(learningPathId),
    staleTime: Infinity,
    gcTime: Infinity,
  })

/**
 * Get metadata for a specific module (transcript line IDs and vocab items).
 * Only enabled when the dialog is open to avoid unnecessary queries.
 */
export const moduleMetadataQueryOptions = (
  learningPathId: string,
  moduleId: string,
  enabled: boolean,
) =>
  queryOptions({
    queryKey: queryKeys.moduleMetadata(learningPathId, moduleId),
    queryFn: () => getModuleMetadata(learningPathId, moduleId),
    enabled,
  })
