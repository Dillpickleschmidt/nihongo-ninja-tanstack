// src/data/utils/vocab.ts
import { dynamic_modules } from "@/data/dynamic_modules"
import { getVocabularyBySets } from "@/features/supabase/db/core-vocab"
import type {
  DynamicModule,
  ExampleSentence,
  RichVocabItem,
  VocabularyItem,
} from "@/data/types"
import type { KanaItem } from "@/features/kana-quiz/hooks/useKanaQuiz"
import type { PracticeMode } from "@/features/vocab-practice/types"
import {
  extractHiragana as _extractHiragana,
  convertFuriganaToRubyHtml as _convertFuriganaToRubyHtml,
  parseFuriganaString as _parseFuriganaString,
} from "./text"

/**
 * Check if text contains kanji characters
 */
export function hasKanji(text: string): boolean {
  return /[一-龯]/.test(text)
}

function getModuleFromPath(path: string): DynamicModule | null {
  const segments = path.split("/")
  const moduleId = segments[segments.length - 1] || ""
  return dynamic_modules[moduleId] || null
}

export async function getVocabularyForModule(
  moduleId: string,
): Promise<VocabularyItem[]> {
  const module = dynamic_modules[moduleId] || null
  if (!module || !module.vocab_set_ids) {
    return []
  }

  return getVocabularyBySets(module.vocab_set_ids)
}

/**
 * Get vocabulary slugs (words) for a module from path
 */
export async function getVocabularyWordsForModule(
  path: string,
): Promise<string[]> {
  const segments = path.split("/")
  const moduleId = segments[segments.length - 1] || ""
  const vocabulary = await getVocabularyForModule(moduleId)
  return vocabulary.map((v) => v.word)
}

/**
 * Get module title from path
 */
export function getModuleTitleFromPath(path: string): string | undefined {
  const module = getModuleFromPath(path)
  return module?.title
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
// Re-export from text.ts for backward compatibility
export const extractHiragana = _extractHiragana

// Re-export from text.ts for backward compatibility
export const convertFuriganaToRubyHtml = _convertFuriganaToRubyHtml

// Re-export from text.ts for backward compatibility
export const parseFuriganaString = _parseFuriganaString

export type ProcessedSentencePart =
  | { type: "html"; content: string }
  | { type: "input"; index: number }

export type ProcessedSentenceResult = {
  displayParts: ProcessedSentencePart[]
  inputValidationTargets: string[][]
}

/**
 * Process example sentence parts for practice modes
 */
export function getExampleSentenceParts(
  sentence: ExampleSentence,
  mode: PracticeMode,
): ProcessedSentenceResult {
  const displayParts: ProcessedSentencePart[] = []
  const inputValidationTargets: string[][] = []
  let inputCount = 0

  const parts = mode === "spellings" ? sentence.japanese : sentence.english

  parts.forEach((part, index) => {
    if (typeof part === "string") {
      // If in 'spellings' mode, convertFuriganaToRubyHtml will now strip spaces for us.
      // If in 'meanings' mode, the 'part' is already English and spaces should be preserved.
      const htmlContent =
        mode === "spellings" ? convertFuriganaToRubyHtml(part) : part

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
