// features/learn-page/query/query-options.ts
import { queryOptions } from "@tanstack/solid-query"
import { getDeckBySlug } from "@/data/utils/core"
import { fetchThumbnailUrl } from "@/data/utils/thumbnails"
import { getDueFSRSCardsCount } from "@/features/supabase/db/fsrs"
import { getVocabHierarchy } from "@/features/resolvers/kanji"
import { getUserProgress } from "@/features/supabase/db/fsrs"
import { getUserTextbookProgress } from "@/features/supabase/db/user-textbook-progress"
import { getUserModuleCompletions } from "@/features/supabase/db/module-completions"
import { getUpcomingModules } from "@/features/learn-page/utils/learning-position-detector"
import { getVocabularyForModule } from "@/data/utils/vocab"
import type { VocabularyItem, TextbookIDEnum } from "@/data/types"
import type { VocabHierarchy } from "@/data/wanikani/hierarchy-builder"
import type { ResourceProvider } from "@/data/resources-config"

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
    queryKey: ["fsrs-progress", userId, activeTextbook, activeDeck],
    queryFn: async () => {
      if (!userId || slugs.length === 0) return null
      return getUserProgress({ data: { slugs, userId } })
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
    queryKey: ["module-completions", userId],
    queryFn: async () => {
      if (!userId) return []
      return getUserModuleCompletions(userId)
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

export const userTextbookProgressQueryOptions = (
  userId: string | null,
  textbookId: TextbookIDEnum,
) =>
  queryOptions({
    queryKey: ["textbook-progress", userId, textbookId],
    queryFn: async () => {
      if (!userId) return null
      return getUserTextbookProgress(userId, textbookId)
    },
    placeholderData: null,
  })

export type ModuleWithCurrent = {
  id: string
  isCurrent?: boolean
  disabled?: boolean
}

export const upcomingModulesQueryOptions = (
  userId: string | null,
  textbookId: TextbookIDEnum,
  learningPathItems: string[],
  currentPosition: string | null,
  cachedModuleIds?: string[],
) => {
  const queryFn = async (): Promise<ModuleWithCurrent[]> => {
    if (!currentPosition)
      return learningPathItems.slice(0, 6).map((id) => ({ id }))

    const currentModuleId = learningPathItems.find(
      (moduleId) => moduleId === currentPosition,
    )
    const upcoming = getUpcomingModules(currentPosition, learningPathItems, 5)

    return currentModuleId
      ? [{ id: currentModuleId, isCurrent: true }, ...upcoming]
      : upcoming
  }

  const queryKey = [
    "upcoming-modules",
    userId,
    textbookId,
    currentPosition,
  ] as const

  if (cachedModuleIds) {
    const initialData = cachedModuleIds
      .map((id, index) => {
        const found = learningPathItems.find((moduleId) => moduleId === id)
        return found ? { id: found, isCurrent: index === 0 } : null
      })
      .filter((item) => item !== null) as ModuleWithCurrent[]

    return queryOptions({
      queryKey,
      queryFn,
      initialData,
    })
  }

  return queryOptions({
    queryKey,
    queryFn,
  })
}
