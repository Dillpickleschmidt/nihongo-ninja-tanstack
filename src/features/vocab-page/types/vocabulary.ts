// Vocabulary type system and conversion utilities
import type { DeckVocabItemInput, VocabularyItem } from "convex/validators"
import type { Doc } from "convex/_generated/dataModel"
import { extractSegmentText } from "@/data/utils/text/furigana"
import type { VocabItemFormData } from "../validation/vocabulary-validation"

// Re-export type from validation schema
export type { VocabItemFormData } from "../validation/vocabulary-validation"

// Helper to create empty form data
export function createEmptyVocabItemFormData(): VocabItemFormData {
  return {
    word: "",
    furigana: "",
    english: [""],
    isVerb: false,
    notes: [],
    particles: [],
    examples: [],
    readingMnemonics: [],
    kanjiMnemonics: [],
  }
}

// Shared helper to process form data fields (used by both API and preview conversions)
function processFormDataFields(formData: VocabItemFormData) {
  const validParticles = formData.particles
    .filter((p) => p.particle.trim() || p.label?.trim())
    .map((p) => ({
      particle: p.particle.trim(),
      label: p.label?.trim(),
    }))

  const validExamples = formData.examples.filter(
    (e) => e.japanese.trim() || e.english.trim(),
  )

  const readingMnemonics = formData.readingMnemonics.filter((m) => m.trim())
  const kanjiMnemonics = formData.kanjiMnemonics.filter((m) => m.trim())

  const hasMnemonics = readingMnemonics.length > 0 || kanjiMnemonics.length > 0

  return {
    info:
      formData.notes.length > 0
        ? formData.notes.filter((n) => n.trim()).map((n) => n.trim())
        : undefined,
    particles: validParticles.length > 0 ? validParticles : undefined,
    exampleSentences:
      validExamples.length > 0
        ? validExamples.map((e) => ({
            japanese: [e.japanese.trim()],
            english: [e.english.trim()],
          }))
        : undefined,
    mnemonics: hasMnemonics
      ? { reading: readingMnemonics, kanji: kanjiMnemonics }
      : undefined,
  }
}

// Convert form data to Convex API input
export function formDataToDeckVocabItemInput(
  formData: VocabItemFormData,
): DeckVocabItemInput | null {
  if (
    !formData.word.trim() ||
    formData.english.length === 0 ||
    !formData.english.some((meaning) => meaning.trim().length > 0)
  ) {
    return null
  }

  const processed = processFormDataFields(formData)

  return {
    word: formData.word.trim(),
    furigana: formData.furigana.trim() || undefined,
    english: formData.english.filter((e) => e.trim()).map((e) => e.trim()),
    isVerb: formData.isVerb || undefined,
    ...processed,
  }
}

// Convert form data to VocabularyItem for preview display
export function formDataToVocabularyItem(
  formData: VocabItemFormData,
): VocabularyItem {
  const processed = processFormDataFields(formData)

  return {
    key: formData.word, // Use word as key for preview
    word: formData.word,
    furigana: formData.furigana || formData.word,
    english: formData.english,
    partOfSpeech: undefined,
    ...processed,
  }
}

// Convert DB item back to form data (for edit mode)
export function deckVocabItemToFormData(
  item: Doc<"deckVocabularyItems">,
): VocabItemFormData {
  return {
    word: item.word,
    furigana: item.furigana || item.word,
    english: [...item.english],
    isVerb: item.isVerb || false,
    notes: item.info || [],
    particles: item.particles || [],
    examples:
      item.exampleSentences?.map((ex) => ({
        japanese: extractSegmentText(ex.japanese),
        english: extractSegmentText(ex.english),
      })) || [],
    readingMnemonics: item.mnemonics?.reading || [],
    kanjiMnemonics: item.mnemonics?.kanji || [],
  }
}
