import type { LearningPathModule } from "./generation"
import type { ImportSubCategory } from "@/features/import-page/shared/data/jlpt-data"

/**
 * Transforms learning path modules into UI-friendly ImportSubCategory format
 * for use with ImportAccordion component
 */
export function transformModulesToUIFormat(
  modules: LearningPathModule[],
  grammarPatterns: Array<{ pattern: string; lineIds: number[] }>,
): {
  grammar: ImportSubCategory
  vocabulary: ImportSubCategory
  kanji: ImportSubCategory
} {
  const grammarItems: ImportSubCategory["items"] = []
  const vocabItems: ImportSubCategory["items"] = []
  const kanjiItems: ImportSubCategory["items"] = []

  let globalVocabIndex = 0

  // Use grammar patterns directly
  grammarPatterns.forEach((item) => {
    grammarItems.push({
      id: `grammar-pattern-${grammarItems.length}`,
      main: item.pattern,
      meaning: "Grammar pattern",
      status: "decent",
    })
  })

  // Flatten vocabulary from all modules with simple IDs
  modules.forEach((module) => {
    if (module.type === "vocabulary") {
      module.words.forEach((word) => {
        vocabItems.push({
          id: `vocab-${globalVocabIndex}`,
          main: word.word,
          meaning: word.english || word.furigana || "Vocabulary",
          status: "decent",
        })
        globalVocabIndex++
      })
    }
  })

  return {
    grammar: {
      id: "learning-grammar",
      title: "Grammar Patterns",
      description: "Grammar patterns extracted from content",
      items: grammarItems,
    },
    vocabulary: {
      id: "learning-vocabulary",
      title: "Vocabulary",
      description: "Vocabulary extracted from content",
      items: vocabItems,
    },
    kanji: {
      id: "learning-kanji",
      title: "Kanji",
      description: "Kanji characters found in vocabulary",
      items: kanjiItems,
    },
  }
}
