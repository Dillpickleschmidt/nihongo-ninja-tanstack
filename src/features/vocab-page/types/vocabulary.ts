// features/vocab-page/types/vocabulary.ts
// Vocabulary type system and conversion utilities

import type {
  VocabularyItem,
  PartOfSpeech,
  ExampleSentence,
  Mnemonics,
  Particle,
} from "@/data/types"
import { Json } from "@/features/supabase/db/database.types"
import { extractSegmentText } from "@/data/utils/text"

// Re-export existing types for convenience
export type { VocabularyItem } from "@/data/types"

// Verb detection utility
export function isVerbPartOfSpeech(
  partOfSpeech: PartOfSpeech | string | undefined,
): boolean {
  if (!partOfSpeech) return false

  // All part-of-speech types except adjectives are verbs
  const adjectiveTypes: PartOfSpeech[] = ["I-adjective", "Na-adjective"]

  return !adjectiveTypes.includes(partOfSpeech as PartOfSpeech)
}

// Database types from global.d.ts (which import from database.types.ts)
export type DBVocabularyItem =
  SupabaseDB["public"]["Tables"]["vocabulary_items"]["Row"]
export type DBVocabularyItemInsert =
  SupabaseDB["public"]["Tables"]["vocabulary_items"]["Insert"]
export type DBVocabularyItemUpdate =
  SupabaseDB["public"]["Tables"]["vocabulary_items"]["Update"]

// Form data structure (for user input in deck creation)
export interface VocabItemFormData {
  word: string
  furigana: string
  english: string[]
  isVerb: boolean
  notes: string[]
  particles: Array<{ particle: string; label?: string }>
  examples: Array<{ japanese: string; english: string }>
  readingMnemonics: string[]
  kanjiMnemonics: string[]
}

// Conversion utilities
export function dbItemToVocabularyItem(
  dbItem: DBVocabularyItem,
): VocabularyItem {
  return {
    word: dbItem.word,
    furigana: dbItem.furigana || dbItem.word,
    english: dbItem.english,
    part_of_speech: undefined, // User-created items don't have part_of_speech
    info: dbItem.info || undefined,
    mnemonics: (dbItem.mnemonics as unknown as Mnemonics) || undefined,
    example_sentences:
      (dbItem.example_sentences as unknown as ExampleSentence[]) || undefined,
    particles: (dbItem.particles as Particle[]) || undefined,
    videos: (dbItem.videos as VocabularyItem["videos"]) || undefined,
    overwrite_word: undefined,
    extra: undefined,
  }
}

// For built-in vocabulary imports only
export function builtInVocabToDBInsert(
  item: VocabularyItem,
  deckId: string,
): DBVocabularyItemInsert {
  return {
    deck_id: deckId,
    word: item.word,
    furigana: item.furigana || null,
    english: item.english,
    is_verb: isVerbPartOfSpeech(item.part_of_speech),
    info: item.info || null,
    mnemonics: item.mnemonics || null,
    example_sentences: (item.example_sentences as unknown as Json) || null,
    particles: item.particles || null,
    videos: item.videos || null,
  }
}

// For converting static vocabulary to form data (deck copying/editing)
export function vocabularyItemToFormData(
  item: VocabularyItem,
): VocabItemFormData {
  return {
    word: item.word,
    furigana: item.furigana || item.word,
    english: [...item.english],
    isVerb: isVerbPartOfSpeech(item.part_of_speech),
    notes: item.info || [],
    particles: item.particles || [],
    examples:
      item.example_sentences?.map((ex) => ({
        japanese: extractSegmentText(ex.japanese),
        english: extractSegmentText(ex.english),
      })) || [],
    readingMnemonics: item.mnemonics?.reading || [],
    kanjiMnemonics: item.mnemonics?.kanji || [],
  }
}

export function formDataToDBInsert(
  formData: VocabItemFormData,
  deckId: string,
): DBVocabularyItemInsert | null {
  if (
    !formData.word.trim() ||
    formData.english.length === 0 ||
    !formData.english.some((meaning) => meaning.trim().length > 0)
  ) {
    return null
  }

  const insert: DBVocabularyItemInsert = {
    deck_id: deckId,
    word: formData.word.trim(),
    furigana: formData.furigana.trim() || null,
    english: formData.english.filter((e) => e.trim()).map((e) => e.trim()),
    is_verb: formData.isVerb, // Direct boolean from form
    info:
      formData.notes.length > 0
        ? formData.notes.filter((n) => n.trim()).map((n) => n.trim())
        : null,
    mnemonics: null,
    example_sentences: null,
    particles:
      formData.particles.length > 0
        ? formData.particles.filter((p) => p.particle.trim() || p.label?.trim())
        : null,
    videos: null,
  }

  // Handle mnemonics
  const readingMnemonics = formData.readingMnemonics.filter((m) => m.trim())
  const kanjiMnemonics = formData.kanjiMnemonics.filter((m) => m.trim())

  if (readingMnemonics.length > 0 || kanjiMnemonics.length > 0) {
    insert.mnemonics = {
      reading: readingMnemonics,
      kanji: kanjiMnemonics,
    } as unknown as Json
  }

  // Handle example sentences
  const validExamples = formData.examples.filter(
    (e) => e.japanese.trim() || e.english.trim(),
  )
  if (validExamples.length > 0) {
    insert.example_sentences = validExamples.map((e) => ({
      japanese: [e.japanese.trim()],
      english: [e.english.trim()],
    })) as unknown as Json
  }

  return insert
}

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

// Helper to convert multiple built-in VocabularyItems to DB inserts
export function builtInVocabItemsToDBInserts(
  items: VocabularyItem[],
  deckId: string,
): DBVocabularyItemInsert[] {
  return items.map((item) => builtInVocabToDBInsert(item, deckId))
}

// Lightweight conversion for preview purposes only
export function formDataToVocabularyItem(
  formData: VocabItemFormData,
): VocabularyItem {
  return {
    word: formData.word,
    furigana: formData.furigana || formData.word,
    english: formData.english,
    part_of_speech: undefined, // Preview doesn't need part_of_speech
    info: formData.notes.length > 0 ? formData.notes : undefined,
    particles: formData.particles.length > 0 ? formData.particles : undefined,
    example_sentences:
      formData.examples.length > 0
        ? formData.examples.map((ex) => ({
            japanese: [ex.japanese],
            english: [ex.english],
          }))
        : undefined,
    mnemonics:
      formData.readingMnemonics.length > 0 || formData.kanjiMnemonics.length > 0
        ? {
            reading: formData.readingMnemonics,
            kanji: formData.kanjiMnemonics,
          }
        : undefined,
    videos: undefined,
    overwrite_word: undefined,
    extra: undefined,
  }
}
