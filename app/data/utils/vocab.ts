// app/data/utils/vocab.ts
import { dynamic_modules } from "@/data/dynamic_modules"
import { vocabulary } from "@/data/vocabulary"
import type { DynamicModule, VocabularyItem } from "@/data/types"
import type { KanaItem } from "@/features/kana-quiz/hooks/useKanaQuiz"

/**
 * Get a dynamic module by its ID
 */
export function getDynamicModule(moduleId: string): DynamicModule | null {
  return dynamic_modules[moduleId] || null
}

/**
 * Get vocabulary items for a specific dynamic module
 */
export function getModuleVocabulary(moduleId: string): VocabularyItem[] {
  const module = getDynamicModule(moduleId)
  if (!module || !module.ordered_vocab_keys) {
    return []
  }

  return module.ordered_vocab_keys
    .map((key) => vocabulary[key])
    .filter(Boolean) as VocabularyItem[]
}

/**
 * Extract module ID from URL path
 * Ex: "/learn/hiragana-quiz" -> "hiragana-quiz"
 */
export function getModuleIdFromPath(path: string): string {
  const segments = path.split("/")
  return segments[segments.length - 1] || ""
}

/**
 * Load module data for route loader - abstracts all the logic
 */
export function loadModuleData(path: string) {
  const moduleId = getModuleIdFromPath(path)
  const module = getDynamicModule(moduleId)

  if (!module) {
    throw new Error(`Module "${moduleId}" not found`)
  }

  const vocabulary = getModuleVocabulary(moduleId)

  return {
    module,
    vocabulary,
    moduleId,
  }
}

/**
 * Transform VocabularyItem[] to KanaItem[]
 */
export function vocabularyToKana(vocabulary: VocabularyItem[]): KanaItem[] {
  return vocabulary.map((item) => ({
    hiragana: item.word,
    romaji: item.english,
  }))
}
