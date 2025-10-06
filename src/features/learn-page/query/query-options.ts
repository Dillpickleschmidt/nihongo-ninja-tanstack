// features/learn-page/query/query-options.ts
import { queryOptions } from "@tanstack/solid-query"
import { getDeckBySlug, getTextbookLearningPath } from "@/data/utils/core"
import { fetchThumbnailUrl } from "@/data/utils/thumbnails"
import { getDueFSRSCardsCount, getFSRSCards } from "@/features/supabase/db/fsrs"
import { getVocabHierarchy } from "@/features/resolvers/kanji"
import { getUserProgress } from "@/features/supabase/db/fsrs"
import { getUserModuleProgress } from "@/features/supabase/db/module-progress"
import { getUpcomingModules } from "@/features/learn-page/utils/learning-position-detector"
import {
  getVocabularyForModule,
  hasKanji,
  getVocabSets,
} from "@/data/utils/vocab"
import { dynamic_modules } from "@/data/dynamic_modules"
import type { VocabularyItem, TextbookIDEnum } from "@/data/types"
import type { VocabHierarchy } from "@/data/wanikani/hierarchy-builder"
import type { ResourceProvider } from "@/data/resources-config"
import type { FSRSCardData } from "@/features/supabase/db/fsrs"

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

export const fsrsProgressQueryOptions = (
  userId: string | null,
  activeTextbook: string,
  activeDeck: string,
  slugs: string[],
) =>
  queryOptions({
    queryKey: ["fsrs-progress", userId, activeTextbook, activeDeck, slugs],
    queryFn: async () => {
      if (!userId || slugs.length === 0) return null
      return getUserProgress(userId, slugs)
    },
    enabled: slugs.length > 0,
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
        completed: true,
        orderBy: "completed_at",
        ascending: false,
      })
    },
    placeholderData: [],
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

export type ModuleProgress = {
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
  upcomingModules: ModuleWithCurrent[],
) => {
  const vocabPracticeModuleIds = upcomingModules
    .map((item) => item.id)
    .filter((moduleId) => {
      const module = dynamic_modules[moduleId]
      return module && module.session_type === "vocab-practice"
    })

  return queryOptions({
    queryKey: [
      "module-progress",
      userId,
      upcomingModules.map((m) => m.id),
    ] as const,
    queryFn: async (): Promise<Record<string, ModuleProgress>> => {
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

      // Build Set of vocab items containing kanji
      const kanjiVocabSet = new Set<string>()
      allVocabKeys.forEach((key) => {
        if (hasKanji(key)) {
          kanjiVocabSet.add(key)
        }
      })

      // Calculate progress for each module
      const progressMap: Record<string, ModuleProgress> = {}

      for (const [moduleId, vocabKeys] of moduleVocabMap.entries()) {
        let total = 0
        let completed = 0
        let meaningsTotal = 0
        let meaningsCompleted = 0
        let spellingsTotal = 0
        let spellingsCompleted = 0

        for (const key of vocabKeys) {
          const hasKanjiChar = kanjiVocabSet.has(key)

          // All vocab items need meanings
          meaningsTotal++
          const meaningCard = fsrsCardIndex.get(`${key}:meanings`)
          if (meaningCard) {
            meaningsCompleted++
            completed++
          }
          total++

          if (hasKanjiChar) {
            // Kanji words also need spellings
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
    enabled: vocabPracticeModuleIds.length > 0,
    placeholderData: {},
  })
}
