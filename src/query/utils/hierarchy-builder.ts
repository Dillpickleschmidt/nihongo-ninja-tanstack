import { getVocabHierarchy } from "@/features/resolvers/kanji"
import type { VocabHierarchy } from "@/data/wanikani/hierarchy-builder"
import type { VocabularyItem } from "@/data/types"
import type { PracticeMode } from "@/features/vocab-practice/types"

/**
 * Build vocabulary hierarchy with conditional logic for flat vs full hierarchy
 * - Flat hierarchy: for live services or spellings mode (just vocabulary list)
 * - Full hierarchy: for meanings mode with local FSRS (includes kanji/radicals)
 */
export async function buildVocabHierarchy(
  vocabulary: VocabularyItem[],
  mode: PracticeMode,
  userOverrides: any,
  isLiveService: boolean,
  errorContext: string,
): Promise<VocabHierarchy> {
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
    console.error(`[${errorContext}] getVocabHierarchy returned null!`)
    throw new Error("Failed to build vocabulary hierarchy")
  }

  return hierarchy
}
