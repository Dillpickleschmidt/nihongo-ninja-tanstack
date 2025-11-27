import type { DBPracticeItemType } from "@/features/fsrs-import/shared/types/fsrs-types"
import type { NormalizedCard } from "@/features/fsrs-import/shared/types/import-data-models"

export function createVocabKanjiTypeResolver(
  vocabIds: Set<string>,
  kanjiIds: Set<string>,
  allVocab: Array<{ word: string }>,
  allKanji: Array<{ id: string }>
) {
  return (id: string): DBPracticeItemType => {
    if (vocabIds.has(id) || allVocab.some((v) => v.word === id)) {
      return "vocabulary"
    }
    if (kanjiIds.has(id) || allKanji.some((k) => k.id === id)) {
      return "kanji"
    }
    return "vocabulary"
  }
}

export function createNormalizedCardTypeResolver(
  cards: NormalizedCard[]
) {
  return (id: string): DBPracticeItemType => {
    const card = cards.find((c) => c.searchTerm === id)
    return card?.type || "vocabulary"
  }
}

export function createVocabularyOnlyTypeResolver() {
  return (): DBPracticeItemType => "vocabulary"
}
