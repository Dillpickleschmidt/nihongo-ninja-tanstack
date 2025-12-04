import { getVocabHierarchy } from "@/features/resolvers/kanji"
import type {
  VocabHierarchy,
  KanjiEntry,
  RadicalEntry,
} from "@/features/resolvers/util/hierarchy-builder"
import type { VocabularyItem } from "@/data/types"
import type { PracticeMode } from "@/features/vocab-practice/types"

export type VocabModuleAllData = {
  vocabulary: VocabularyItem[]
  hierarchy: VocabHierarchy
  kanji: KanjiEntry[]
  radicals: RadicalEntry[]
}

/**
 * Build vocabulary hierarchy with conditional logic for flat vs full hierarchy
 * - Flat hierarchy: for live services, spellings mode, or prerequisites disabled (just vocabulary list)
 * - Full hierarchy: for meanings mode with local FSRS and prerequisites enabled (includes kanji/radicals)
 */
export async function buildVocabModuleAll(
  vocabulary: VocabularyItem[],
  mode: PracticeMode,
  isLiveService: boolean,
  prerequisitesEnabled: boolean,
): Promise<VocabModuleAllData> {
  // For live services, spellings mode, or prerequisites disabled: build flat hierarchy
  if (isLiveService || mode === "spellings" || !prerequisitesEnabled) {
    return {
      vocabulary,
      hierarchy: {
        vocabulary: vocabulary.map((vocab) => ({
          word: vocab.word,
          kanjiComponents: [],
        })),
        kanji: [],
        radicals: [],
      },
      kanji: [],
      radicals: [],
    }
  }

  // For meanings mode with local FSRS and prerequisites enabled: build full hierarchy
  const vocabWords = vocabulary.map((v) => v.word)
  const result = await getVocabHierarchy(vocabWords)

  if (!result) {
    console.error("[buildVocabModuleAll] getVocabHierarchy returned null!")
    throw new Error("Failed to build vocabulary hierarchy")
  }

  return {
    vocabulary,
    hierarchy: result.hierarchy,
    kanji: result.kanji,
    radicals: result.radicals,
  }
}
