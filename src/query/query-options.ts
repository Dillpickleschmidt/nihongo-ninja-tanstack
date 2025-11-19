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
  getUserFoldersAndDecks,
  type FoldersAndDecksData,
} from "@/features/supabase/db/folder"
import {
  getLearningPathChapterItems,
  fetchAllLearningPaths,
} from "@/data/utils/core"
import { chapters } from "@/data/chapters"
import { fetchThumbnailUrl } from "@/data/utils/thumbnails"
import { dynamic_modules } from "@/data/dynamic_modules"
import { static_modules } from "@/data/static_modules"
import { external_resources } from "@/data/external_resources"
import { createSRSAdapter } from "@/features/srs-services/factory"
import type {
  DueCountResult,
  SeenCardsStatsResult,
} from "@/features/srs-services/types"
import type { AllServicePreferences } from "@/features/main-cookies/schemas/user-settings"
import {
  getUserDailyAggregates,
  getSessionsPaginated,
  getUserModuleCompletions,
} from "@/features/supabase/db/module-progress"
import { transformSessionsToDeck } from "@/features/vocab-page/pages/main/utils/recentlyStudiedAdapter"
import type { RecentlyStudiedDeck } from "@/features/vocab-page/pages/main/utils/recentlyStudiedAdapter"
import type { ResourceProvider } from "@/data/resources-config"
import {
  fetchUserSettingsFromDB,
  syncUserSettingsToDb,
  updateUserSettingsCookie,
} from "@/query/utils/user-settings"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"
import { getServiceConnectionStatus } from "@/features/main-cookies/functions/service-credentials"
import { buildVocabHierarchy } from "@/query/utils/hierarchy-builder"
import { getCompletedModules } from "@/query/utils/completion-manager"
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
  })
}

export const bottomNavClassQueryOptions = () => {
  return queryOptions({
    queryKey: queryKeys.bottomNavClass(),
    queryFn: async () => "",
    initialData: "",
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

/**
 * Service connection status query (returns only booleans, never exposes tokens)
 * Safe to cache in TanStack Query - no sensitive data exposed to client
 */
export const serviceConnectionStatusQueryOptions = (userId: string | null) => {
  return queryOptions({
    queryKey: queryKeys.serviceConnectionStatus(userId),
    queryFn: () => getServiceConnectionStatus(),
    staleTime: 5 * 60 * 1000, // 5 minutes
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

/**
 * Get user folders and decks
 */
export const userFoldersAndDecksQueryOptions = (userId: string | null) =>
  queryOptions({
    queryKey: queryKeys.userFoldersAndDecks(userId),
    queryFn: async (): Promise<FoldersAndDecksData> => {
      if (!userId) {
        return { folders: [], decks: [], shareStatus: {} }
      }
      return await getUserFoldersAndDecks(userId)
    },
    enabled: !!userId,
    staleTime: 5 * 60 * 1000, // 5 minutes
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

type ModuleProgress = Awaited<
  ReturnType<typeof getUserModuleCompletions>
>[number]
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
    queryFn: async () => {
      return await getCompletedModules(userId)
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

export type UpcomingModule = {
  moduleId: string
  title: string
  sourceType: string
  linkTo: string
  learningPathId: string
  chapterSlug: string
  chapterTitle: string
}

export const upcomingModulesQueryOptions = (
  userId: string | null,
  learningPathId: TextbookIDEnum,
  chapterSlug: string,
  queryClient: any, // QueryClient for cache reuse
) => {
  const queryFn = async (): Promise<UpcomingModule[]> => {
    // Get the active chapter
    const chapter = chapters[learningPathId]?.[chapterSlug]
    if (!chapter) return []

    // Get completed modules (reuses cache if prefetched)
    const completedModules = userId
      ? await queryClient.ensureQueryData(completedModulesQueryOptions(userId))
      : []
    const completedSet = new Set(completedModules.map((c) => c.module_path))

    // Filter to incomplete modules from this chapter only
    const incompleteModuleIds = chapter.learning_path_item_ids
      .filter((id) => !completedSet.has(id))
      .slice(0, 10) // First 10 incomplete modules

    // Merge all module sources
    const modules = {
      ...static_modules,
      ...dynamic_modules,
      ...external_resources,
    }

    // Enrich with full context
    return incompleteModuleIds.map((moduleId) => {
      const module = modules[moduleId]

      // Build proper link with chapter context
      let linkTo = `/practice/${moduleId}` // Default fallback

      if (module) {
        if ("link" in module && module.link) {
          // Static modules and external resources have direct links
          linkTo = module.link
        } else if (module.source_type === "vocab-practice") {
          // Vocab practice goes to the learning path chapter view
          linkTo = `/vocab/${learningPathId}/${chapterSlug}/${moduleId}`
        } else if (module.source_type === "sentence-practice") {
          const strippedId = moduleId.replace(/^sentence-practice-/, "")
          linkTo = `/sentence-practice/${strippedId}`
        }
      }

      return {
        moduleId,
        title: module?.title || moduleId,
        sourceType: module?.source_type || "misc",
        linkTo,
        learningPathId,
        chapterSlug,
        chapterTitle: chapter.title,
      }
    })
  }

  return queryOptions({
    queryKey: queryKeys.upcomingModules(userId, learningPathId, chapterSlug),
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
  upcomingModulesQuery: UseQueryResult<UpcomingModule[], DefaultError>,
) => {
  return queryOptions({
    queryKey: queryKeys.moduleProgress(
      userId,
      upcomingModulesQuery.data?.map((m) => m.moduleId),
    ),
    queryFn: async (): Promise<Record<string, VocabModuleProgress>> => {
      const upcomingModules = upcomingModulesQuery.data!
      // Filter for vocab-practice modules only
      const vocabPracticeModuleIds = upcomingModules
        .filter((item) => item.sourceType === "vocab-practice")
        .map((item) => item.moduleId)

      if (!userId) return {}
      return await buildModuleProgressMap(userId, vocabPracticeModuleIds)
    },
    enabled: !upcomingModulesQuery.isPending && !upcomingModulesQuery.isError,
  })
}

/**
 * Query for getting all-time daily aggregates via RPC
 * Returns a dictionary mapping dates (YYYY-MM-DD) to total seconds practiced
 */
export const userDailyAggregatesQueryOptions = (userId: string | null) =>
  queryOptions({
    queryKey: queryKeys.userDailyAggregates(userId),
    queryFn: async () => {
      if (!userId) return {}
      return await getUserDailyAggregates(userId)
    },
  })

/**
 * Query for getting paginated practice sessions with optional module_type filtering
 * Returns recent sessions, newest first
 */
export const userSessionsPaginatedQueryOptions = (
  userId: string | null,
  moduleType: string | null,
  offset: number,
  limit: number,
) =>
  queryOptions({
    queryKey: queryKeys.userSessionsPaginated(
      userId,
      moduleType,
      offset,
      limit,
    ),
    queryFn: async () => {
      if (!userId) return []
      return await getSessionsPaginated(
        userId,
        offset,
        limit,
        moduleType || undefined,
      )
    },
    enabled: !!userId,
  })

// ============================================================================
// Vocab Dashboard Query Options
// ============================================================================

/**
 * Query for getting recently studied decks (from user practice sessions)
 * Returns up to 10 most recently practiced decks (filtered to vocab-practice sessions)
 * Reuses cached paginated session data to avoid duplicate fetches
 */
export const recentlyStudiedDecksQueryOptions = (
  userId: string | null,
  userDecks: UserDeck[],
  queryClient: any, // QueryClient for cache reuse
) =>
  queryOptions({
    queryKey: queryKeys.recentlyStudiedDecks(userId),
    queryFn: async (): Promise<RecentlyStudiedDeck[]> => {
      if (!userId) return []
      const sessions = await queryClient.ensureQueryData(
        userSessionsPaginatedQueryOptions(userId, "vocab-practice", 0, 20),
      )
      return transformSessionsToDeck(sessions, userDecks, 10)
    },
    enabled: !!userId,
    staleTime: 5 * 60 * 1000, // 5 minutes
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
