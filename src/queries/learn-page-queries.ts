// features/learn-page/queries/learn-page-queries.ts
import { queryOptions } from "@tanstack/solid-query"
import { getDeckBySlug } from "@/data/utils/core"
import { fetchThumbnailUrl } from "@/data/utils/thumbnails"
import { getDueFSRSCardsCount } from "@/features/supabase/db/fsrs"
import { getVocabHierarchy } from "@/features/resolvers/kanji"
import { getUserProgress } from "@/features/supabase/db/fsrs"
import { getUserTextbookProgress } from "@/features/supabase/db/user-textbook-progress"
import { getUserModuleCompletions } from "@/features/supabase/db/module-completions"
import { detectSequentialJump, getUpcomingModules } from "@/features/learn-page/utils/learning-position-detector"
import { getVocabularyForModule } from "@/data/utils/vocab"
import type {
  VocabularyItem,
  TextbookIDEnum,
  LearningPathItem,
} from "@/data/types"
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
      const vocabModuleId = deck.learning_path_items.find((item) =>
        item.id.endsWith("_vocab-list"),
      )?.id

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

export const shouldPromptPositionUpdateQueryOptions = (
  userId: string | null,
  textbookId: TextbookIDEnum,
  learningPathItems: LearningPathItem[],
  completionsWithDates: ModuleCompletion[],
  dismissedPromptId: string | undefined,
  currentPosition: string | null,
) =>
  queryOptions({
    queryKey: [
      "should-prompt-position-update",
      userId,
      textbookId,
      // Only include the module paths we actually check (first 2), not full objects with timestamps
      completionsWithDates.slice(0, 2).map((c) => c.module_path),
      dismissedPromptId,
      currentPosition,
    ],
    queryFn: async (): Promise<{
      shouldPrompt: boolean
      suggestedPosition: string | null
    }> => {
      if (!userId) {
        return { shouldPrompt: false, suggestedPosition: null }
      }

      // Check for sequential jump pattern
      const jumpDetection = detectSequentialJump(
        completionsWithDates.slice(0, 2), // Only need the 2 most recent
        currentPosition,
        learningPathItems,
      )

      // Don't prompt if this suggestion was already dismissed
      if (
        jumpDetection.shouldPrompt &&
        jumpDetection.suggestedModuleId === dismissedPromptId
      ) {
        return { shouldPrompt: false, suggestedPosition: null }
      }

      return {
        shouldPrompt: jumpDetection.shouldPrompt,
        suggestedPosition: jumpDetection.suggestedModuleId,
      }
    },
    placeholderData: { shouldPrompt: false, suggestedPosition: null },
  })

type ModuleWithCurrent = LearningPathItem & { isCurrent?: boolean }

export const upcomingModulesQueryOptions = (
  userId: string | null,
  textbookId: TextbookIDEnum,
  learningPathItems: LearningPathItem[],
  currentPosition: string | null,
  cachedModuleIds?: string[],
) => {
  const initialData = cachedModuleIds
    ? cachedModuleIds
        .map((id, index) => {
          const found = learningPathItems.find((item) => item.id === id)
          return found ? { ...found, isCurrent: index === 0 } : null
        })
        .filter((item): item is ModuleWithCurrent => item !== null)
    : undefined

  return queryOptions({
    queryKey: ["upcoming-modules", userId, textbookId, currentPosition],
    queryFn: async (): Promise<ModuleWithCurrent[]> => {
      if (!currentPosition) return learningPathItems.slice(0, 6)

      const currentModule = learningPathItems.find(
        (item) => item.id === currentPosition,
      )
      const upcoming = getUpcomingModules(currentPosition, learningPathItems, 5)

      return currentModule
        ? [{ ...currentModule, isCurrent: true }, ...upcoming]
        : upcoming
    },
    initialData,
  })
}
