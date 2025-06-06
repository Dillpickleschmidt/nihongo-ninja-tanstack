// app/data/utils/vocab.ts
import { dynamic_modules } from "@/data/dynamic_modules"
import { vocabulary } from "@/data/vocabulary"
import type {
  Card,
  DynamicModule,
  RichVocabItem,
  VocabularyItem,
} from "@/data/types"
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

/**
 * Adds hiragana and ruby text to VocabularyItem objects.
 * @param items - An array of VocabularyItem objects to transform.
 * @param furiganaSize - Optional font size for furigana text.
 * @returns An array of RichVocabItem objects.
 */
export function addKanaAndRuby(
  items: VocabItem[],
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
    let hiragana = ""
    let skip = false

    for (let i = text.length - 1; i >= 0; i--) {
      const char = text[i]
      if (char === "[") skip = true
      else if (char === "]") skip = false
      else if (skip && char === " ") skip = false
      else if (!skip && char !== " ") hiragana = char + hiragana
    }

    return hiragana
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
  furiganaSize?: string,
): T extends string[] ? string[] : string {
  const convert = (text: string): string => {
    let rubyText = ""
    let tempArr: string[] = []
    let foundFurigana = false

    for (let i = 0; i < text.length; i++) {
      const char = text[i]
      tempArr.push(char)

      if (char === "[") {
        foundFurigana = true
        rubyText += `<ruby>${tempArr.join("")}<rp>(</rp><rt><span style="font-size: ${furiganaSize}; user-select: none;">`
        tempArr = []
      } else if (char === "]") {
        rubyText += `${tempArr.join("")}</span></rt><rp>)</rp>`
        tempArr = []
      } else if (char === " " || i === text.length - 1) {
        if (foundFurigana) {
          rubyText += `${tempArr.join("")}</ruby>`
        } else {
          rubyText += tempArr.join("").trim()
        }
        tempArr = []
      }
    }

    return rubyText.replace(/[\[\]]/g, "")
  }

  if (Array.isArray(furigana)) {
    return furigana.map(convert) as T extends string[] ? string[] : string
  } else {
    return convert(furigana) as T extends string[] ? string[] : string
  }
}

/**
 * Transforms a single VocabularyItem into a Card for practice mode.
 * @param item - A VocabularyItem object to transform.
 * @param mode - The practice mode ("readings" or "kana").
 * @returns A Card object ready for practice.
 */
export function transformVocabToCard(
  item: VocabularyItem,
  mode: "readings" | "kana",
): Card {
  // First, enhance with hiragana and ruby text
  const richItem = addKanaAndRuby([item])[0] // Get the first (and only) result

  // Then transform to Card
  const answerCategories = buildAnswerCategories(richItem, mode)

  return {
    ...richItem,
    key: item.word,
    answerCategories,
    cardStyle: "multiple-choice",
    wrongAnswerCount: 0,
  }
}

/**
 * Transforms an array of VocabularyItems into Cards for practice mode.
 * @param items - An array of VocabularyItem objects to transform.
 * @param mode - The practice mode ("readings" or "kana").
 * @returns An array of Card objects ready for practice.
 */
export function transformVocabToCards(
  items: VocabularyItem[],
  mode: "readings" | "kana",
): Card[] {
  return items.map((item) => transformVocabToCard(item, mode))
}

function buildAnswerCategories(
  richItem: RichVocabItem,
  mode: "readings" | "kana",
): Card["answerCategories"] {
  if (richItem.english.length === 0) {
    throw new Error(
      `Vocabulary item "${richItem.word}" missing English translations`,
    )
  }

  if (mode === "kana" && richItem.hiragana.every((h) => !h)) {
    throw new Error(
      `Vocabulary item "${richItem.word}" missing hiragana for kana mode`,
    )
  }

  const categories = [{ category: "English", answers: richItem.english }]

  if (mode === "kana") {
    categories.push({ category: "Kana", answers: richItem.hiragana })
  }

  return categories
}
