// app/data/utils/vocab.ts
import { dynamic_modules } from "@/data/dynamic_modules"
import { vocabulary } from "@/data/vocabulary"
import { vocabularySets } from "@/data/vocabulary_sets"
import type {
  DynamicModule,
  ExampleSentence,
  RichVocabItem,
  VocabularyItem,
} from "@/data/types"
import type { KanaItem } from "@/features/kana-quiz/hooks/useKanaQuiz"
import type { PracticeMode } from "@/features/vocab-practice/types"

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
  if (!module || !module.vocab_set_ids) {
    return []
  }

  // Gather all vocab keys from all sets, preserving order and uniqueness
  const seen = new Set<string>()
  const vocabKeys: string[] = []
  for (const setId of module.vocab_set_ids) {
    const set = vocabularySets[setId]
    if (set && Array.isArray(set.keys)) {
      for (const key of set.keys) {
        if (!seen.has(key)) {
          seen.add(key)
          vocabKeys.push(key)
        }
      }
    }
  }

  return vocabKeys
    .map((key) => vocabulary[key])
    .filter(Boolean) as VocabularyItem[]
}

/**
 * Extract module ID from URL path
 * Ex: "/practice/hiragana-quiz" -> "hiragana-quiz"
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

/**
 * Adds hiragana and ruby text to VocabularyItem objects.
 * @param items - An array of VocabularyItem objects to transform.
 * @param furiganaSize - Optional font size for furigana text.
 * @returns An array of RichVocabItem objects.
 */
export function addKanaAndRuby(
  items: VocabularyItem[],
  furiganaSize?: string,
  removeDuplicateKana = false,
): RichVocabItem[] {
  return items.map((item) => {
    const hiragana = extractHiragana(item.furigana)
    const rubyText = convertFuriganaToRubyHtml(item.furigana, furiganaSize)
    const finalHiragana =
      removeDuplicateKana && hiragana === item.word ? "" : hiragana
    return { ...item, hiragana: [finalHiragana], rubyText: [rubyText] }
  })
}

/**
 * Extracts hiragana from furigana string(s).
 * @param furigana - A string or array of strings containing kanji with furigana in brackets.
 * @returns A hiragana string or array of hiragana strings, depending on the input type.
 */
export function extractHiragana<T extends string | string[]>(
  furigana: T,
): T extends string[] ? string[] : string {
  const extract = (text: string): string => {
    let reading = text.replace(/([一-龯ぁ-んァ-ン]+)\[(.+?)\]/g, "$2")
    return reading.replace(/\s/g, "")
  }

  if (Array.isArray(furigana)) {
    return furigana.map(extract) as T extends string[] ? string[] : string
  } else {
    return extract(furigana) as T extends string[] ? string[] : string
  }
}

/**
 * Converts furigana string(s) to HTML ruby text.
 * @param furigana - A string or array of strings containing kanji with furigana in brackets.
 * @param furiganaSize - The font size for the furigana text (default: "0.75rem").
 * @returns An HTML string or array of HTML strings with ruby tags for furigana display,
 *          depending on the input type.
 */
export function convertFuriganaToRubyHtml<T extends string | string[]>(
  furigana: T,
  furiganaSize = "0.75rem",
): T extends string[] ? string[] : string {
  const convert = (text: string): string => {
    if (!text) return ""
    const sizeStyle = ` style="font-size: ${furiganaSize}; user-select: none;"`
    return text.replace(
      /([一-龯ぁ-んァ-ン]+)\[(.+?)\]/g,
      `<ruby>$1<rp>(</rp><rt><span${sizeStyle}>$2</span></rt><rp>)</rp></ruby>`,
    )
  }

  if (Array.isArray(furigana)) {
    return furigana.map(convert) as T extends string[] ? string[] : string
  } else {
    return convert(furigana) as T extends string[] ? string[] : string
  }
}

export type ProcessedSentencePart =
  | { type: "html"; content: string }
  | { type: "input" }

export function getExampleSentenceParts(
  sentence: ExampleSentence,
  mode: PracticeMode,
): ProcessedSentencePart[] {
  const parts = mode === "kana" ? sentence.japanese : sentence.english

  return parts.map((part) => {
    if (typeof part === "string") {
      const html = mode === "kana" ? convertFuriganaToRubyHtml(part) : part
      return {
        type: "html",
        // Strips spaces only when they are outside of HTML tags.
        content:
          mode === "kana"
            ? html.replace(/<[^>]+>|\s/g, (match) =>
                match.startsWith("<") ? match : "",
              )
            : html,
      }
    } else {
      // Mark the target word's location for the input field.
      return { type: "input" }
    }
  })
}
