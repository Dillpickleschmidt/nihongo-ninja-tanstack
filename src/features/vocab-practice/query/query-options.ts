// features/vocab-practice/query/query-options.ts
import { queryOptions } from "@tanstack/solid-query"
import {
  getDueFSRSCards,
  getFSRSCards,
  type FSRSCardData,
} from "@/features/supabase/db/fsrs"
import { getVocabularyForModule } from "@/data/utils/vocab"
import { getVocabHierarchy } from "@/features/resolvers/kanji"
import type { VocabHierarchy } from "@/data/wanikani/hierarchy-builder"
import type { VocabularyItem } from "@/data/types"
import type { PracticeMode } from "../types"
import { fetchKanjiSvgsBatch } from "@/utils/svg-processor"
import {
  getDeckInfoServerFn,
  getVocabForDeck,
} from "@/features/supabase/db/deck"

/**
 * Get vocabulary hierarchy for a practice module
 * Conditionally builds full hierarchy or flat hierarchy based on mode and service
 */
export const practiceHierarchyQueryOptions = (
  moduleId: string,
  vocabulary: VocabularyItem[],
  mode: PracticeMode,
  userOverrides: any,
  isLiveService: boolean,
) => {
  // Stringify userOverrides for stable query key comparison between server and client
  const queryKey = [
    "practice-hierarchy",
    moduleId,
    mode,
    JSON.stringify(userOverrides),
    isLiveService,
  ] as const

  return queryOptions({
    queryKey,
    queryFn: async (): Promise<VocabHierarchy> => {
      // For live services or spellings mode, build flat hierarchy
      if (isLiveService || mode === "spellings") {
        return {
          vocabulary: vocabulary.map((vocab) => ({
            word: vocab.word,
            kanjiComponents: [],
          })),
          kanji: [],
          radicals: [],
        }
      }

      // For meanings mode with local FSRS, build full hierarchy
      const vocabWords = vocabulary.map((v) => v.word)
      const hierarchy = await getVocabHierarchy({
        data: {
          slugs: vocabWords,
          userOverrides,
        },
      })

      if (!hierarchy) {
        console.error(
          "[practiceHierarchyQueryOptions] getVocabHierarchy returned null!",
        )
        throw new Error("Failed to build vocabulary hierarchy")
      }

      return hierarchy
    },
  })
}

/**
 * Get vocabulary list for a practice module
 */
export const moduleVocabularyQueryOptions = (moduleId: string) =>
  queryOptions({
    queryKey: ["module-vocabulary", moduleId] as const,
    queryFn: () => getVocabularyForModule(moduleId),
  })

/**
 * Get FSRS cards for a practice module
 * Only enabled when using local FSRS mode
 */
export const practiceModuleFSRSCardsQueryOptions = (
  userId: string | null,
  slugs: string[],
  enabled: boolean,
) =>
  queryOptions({
    queryKey: ["practice-module-fsrs", userId, slugs] as const,
    queryFn: async (): Promise<FSRSCardData[]> => {
      if (!userId || slugs.length === 0) return []
      return await getFSRSCards(userId, slugs)
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
    queryKey: ["practice-due-fsrs", userId] as const,
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
    queryKey: ["hierarchy-svgs", characters] as const,
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
    queryKey: ["user-deck-info", deckId] as const,
    queryFn: () => getDeckInfoServerFn({ data: { deck_id: deckId } }),
  })

/**
 * Get vocabulary for a user deck
 */
export const userDeckVocabularyQueryOptions = (deckId: number) =>
  queryOptions({
    queryKey: ["user-deck-vocabulary", deckId] as const,
    queryFn: () => getVocabForDeck(deckId),
  })

/**
 * Get hierarchy for a user deck
 * Conditionally builds full hierarchy or flat hierarchy
 */
export const userDeckHierarchyQueryOptions = (
  deckId: number,
  vocabulary: VocabularyItem[],
  mode: PracticeMode,
  userOverrides: any,
  isLiveService: boolean,
) => {
  // Stringify userOverrides for stable query key comparison between server and client
  const queryKey = [
    "user-deck-hierarchy",
    deckId,
    mode,
    JSON.stringify(userOverrides), // string-based instead of reference-based comparison
    isLiveService,
  ] as const

  return queryOptions({
    queryKey,
    queryFn: async (): Promise<VocabHierarchy> => {
      // For live services or spellings mode, build flat hierarchy
      if (isLiveService || mode === "spellings") {
        return {
          vocabulary: vocabulary.map((vocab) => ({
            word: vocab.word,
            kanjiComponents: [],
          })),
          kanji: [],
          radicals: [],
        }
      }

      // For meanings mode with local FSRS, build full hierarchy
      const vocabWords = vocabulary.map((v) => v.word)
      const hierarchy = await getVocabHierarchy({
        data: {
          slugs: vocabWords,
          userOverrides,
        },
      })

      if (!hierarchy) {
        console.error(
          "[userDeckHierarchyQueryOptions] getVocabHierarchy returned null!",
        )
        throw new Error("Failed to build vocabulary hierarchy")
      }

      return hierarchy
    },
  })
}
