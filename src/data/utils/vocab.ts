// src/data/utils/vocab.ts
import { dynamic_modules } from "@/data/dynamic_modules"
import { vocabularySets } from "@/data/vocabulary_sets"
import type {
  DynamicModule,
  ExampleSentence,
  RichVocabItem,
  VocabularyItem,
} from "@/data/types"
import type { KanaItem } from "@/features/kana-quiz/hooks/useKanaQuiz"
import type { PracticeMode } from "@/features/vocab-practice/types"
import { getVocabularyByKeys } from "./vocab.server"

/**
 * Get a dynamic module by its ID
 */
export function getDynamicModule(moduleId: string): DynamicModule | null {
  return dynamic_modules[moduleId] || null
}

/**
 * Get vocabulary items for a specific dynamic module
 */
export async function getModuleVocabulary(
  moduleId: string,
): Promise<VocabularyItem[]> {
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

  // Use the new server function to fetch only the required vocabulary
  return getVocabularyByKeys({ data: vocabKeys })
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
    // Convert furigana to ruby HTML
    let convertedHtml = text.replace(
      /([一-龯ぁ-んァ-ン]+)\[(.+?)\]/g,
      `<ruby>$1<rp>(</rp><rt><span${sizeStyle}>$2</span></rt><rp>)</rp></ruby>`,
    )

    // Strip spaces from the text, preserving tags
    convertedHtml = convertedHtml.replace(/<[^>]+>|\s/g, (match) =>
      match.startsWith("<") ? match : "",
    )

    return convertedHtml
  }

  if (Array.isArray(furigana)) {
    return furigana.map(convert) as T extends string[] ? string[] : string
  } else {
    return convert(furigana) as T extends string[] ? string[] : string
  }
}

/**
 * Parses a furigana string and returns both base and kana forms
 * @param furigana - A string containing kanji with furigana in brackets (e.g., "人[ひと]", "食[た]べ 物[もの]")
 * @returns An object with base (kanji without brackets/spaces) and kana (hiragana reading) properties
 */
export function parseFuriganaString(furigana: string): {
  base: string
  kana: string
} {
  // Extract base form by removing furigana brackets and spaces
  const base = furigana.replace(/\[(.+?)\]/g, "").replace(/\s/g, "")

  // Extract kana form using existing function
  const kana = extractHiragana(furigana)

  return { base, kana }
}

export type ProcessedSentencePart =
  | { type: "html"; content: string }
  | { type: "input"; index: number }

export type ProcessedSentenceResult = {
  displayParts: ProcessedSentencePart[]
  inputValidationTargets: string[][]
}

// Updated getExampleSentenceParts function using the new helper
export function getExampleSentenceParts(
  sentence: ExampleSentence,
  mode: PracticeMode,
): ProcessedSentenceResult {
  const displayParts: ProcessedSentencePart[] = []
  const inputValidationTargets: string[][] = []
  let inputCount = 0

  const parts = mode === "kana" ? sentence.japanese : sentence.english

  parts.forEach((part, index) => {
    if (typeof part === "string") {
      // If in 'kana' mode, convertFuriganaToRubyHtml will now strip spaces for us.
      // If in 'readings' mode, the 'part' is already English and spaces should be preserved.
      const htmlContent =
        mode === "kana" ? convertFuriganaToRubyHtml(part) : part

      displayParts.push({
        type: "html",
        content: htmlContent, // Use the potentially modified content
      })
    } else {
      // This is the target word's location for the input field.
      displayParts.push({ type: "input", index: inputCount })

      // Extract the validation targets from the JAPANESE side of the example sentence.
      const japaneseTargetPart = sentence.japanese[index]

      if (
        typeof japaneseTargetPart !== "string" &&
        japaneseTargetPart &&
        japaneseTargetPart.t
      ) {
        // Use the new parseFuriganaString helper
        const { base, kana } = parseFuriganaString(japaneseTargetPart.t)

        // Use a Set to ensure unique values
        const targets = new Set<string>()
        targets.add(base)
        if (base !== kana) {
          targets.add(kana)
        }
        inputValidationTargets.push(Array.from(targets))
      } else {
        // Fallback for missing target (should ideally not happen if structure is consistent)
        inputValidationTargets.push([])
      }
      inputCount++
    }
  })

  return { displayParts, inputValidationTargets }
}
