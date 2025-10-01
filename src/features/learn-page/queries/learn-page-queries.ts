// features/learn-page/queries/learn-page-queries.ts
import { queryOptions } from "@tanstack/solid-query"
import { getDeckBySlug } from "@/data/utils/core"
import { fetchThumbnailUrl } from "@/data/utils/thumbnails"
import { getDueFSRSCardsCount } from "@/features/supabase/db/fsrs"
import { getVocabHierarchy } from "@/features/resolvers/kanji"
import { getUserProgress } from "@/features/supabase/db/fsrs"
import { getUserModuleCompletions } from "@/features/supabase/db/module-completions"
import { getVocabularyForModule } from "@/data/utils/vocab"
import type { VocabularyItem } from "@/data/types"
import type { VocabHierarchy } from "@/data/wanikani/hierarchy-builder"
import type { ResourceProvider } from "@/data/resources-config"

export const vocabHierarchyQueryOptions = (
  deck: NonNullable<ReturnType<typeof getDeckBySlug>>,
  userOverrides: any,
) =>
  queryOptions({
    queryKey: ["vocab-hierarchy", deck.slug, userOverrides],
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
  textbookId: string,
  deckSlug: string,
  slugs: string[],
) =>
  queryOptions({
    queryKey: ["fsrs-progress", userId, textbookId, deckSlug],
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
