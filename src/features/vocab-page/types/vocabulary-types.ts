// Unified Vocabulary Type System
// This file provides conversion utilities between existing types and form data structures

import type {
  VocabularyItem,
  PartOfSpeech,
  ExampleSentence,
  Mnemonics,
  Particle,
} from "@/data/types"
import { Json } from "@/features/supabase/db/database.types"

// Re-export existing types for convenience
export type { VocabularyItem } from "@/data/types"

// Database types from global.d.ts (which import from database.types.ts)
export type DBVocabularyItem =
  Database["public"]["Tables"]["vocabulary_items"]["Row"]
export type DBVocabularyItemInsert =
  Database["public"]["Tables"]["vocabulary_items"]["Insert"]
export type DBVocabularyItemUpdate =
  Database["public"]["Tables"]["vocabulary_items"]["Update"]

// Form data structure (for user input in deck creation)
export interface VocabItemFormData {
  word: string
  furigana: string
  english: string[]
  partOfSpeech: string
  notes: string[]
  particles: Array<{ particle: string; label: string }>
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
    chapter: dbItem.chapter || 1, // VocabularyItem requires chapter (temporary field)
    part_of_speech: dbItem.part_of_speech || undefined,
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

export function vocabularyItemToDBInsert(
  item: VocabularyItem,
  deckId: number,
): DBVocabularyItemInsert {
  return {
    deck_id: deckId,
    word: item.word,
    furigana: item.furigana || null,
    english: item.english,
    part_of_speech: item.part_of_speech || null,
    chapter: item.chapter || null,
    info: item.info || null,
    mnemonics: item.mnemonics || null,
    example_sentences: (item.example_sentences as unknown as Json) || null,
    particles: item.particles || null,
    videos: item.videos || null,
  }
}

export function vocabularyItemToFormData(
  item: VocabularyItem,
): VocabItemFormData {
  return {
    word: item.word,
    furigana: item.furigana || item.word,
    english: [...item.english], // Copy array
    partOfSpeech: item.part_of_speech || "",
    notes: item.info ? [...item.info] : [],
    particles: item.particles ? item.particles.map((p) => ({ ...p })) : [],
    examples: item.example_sentences
      ? item.example_sentences.map((ex) => ({
          japanese: ex.japanese[0] || "",
          english: ex.english[0] || "",
        }))
      : [],
    readingMnemonics: item.mnemonics?.reading
      ? [...item.mnemonics.reading]
      : [],
    kanjiMnemonics: item.mnemonics?.kanji ? [...item.mnemonics.kanji] : [],
  }
}

export function formDataToVocabularyItem(
  formData: VocabItemFormData,
): VocabularyItem | null {
  if (
    !formData.word.trim() ||
    formData.english.length === 0 ||
    !formData.english.some((meaning) => meaning.trim().length > 0)
  ) {
    return null
  }

  const item: VocabularyItem = {
    word: formData.word.trim(),
    furigana: formData.furigana.trim() || formData.word.trim(),
    english: formData.english.filter((e) => e.trim()).map((e) => e.trim()),
    chapter: 1, // VocabularyItem requires chapter (temporary field)
    part_of_speech:
      formData.partOfSpeech && formData.partOfSpeech.trim()
        ? (formData.partOfSpeech as PartOfSpeech)
        : undefined,
  }

  // Add optional fields if they have content
  if (formData.notes.length > 0) {
    const validNotes = formData.notes
      .filter((n) => n.trim())
      .map((n) => n.trim())
    if (validNotes.length > 0) {
      item.info = validNotes
    }
  }

  if (formData.particles.length > 0) {
    const validParticles = formData.particles.filter(
      (p) => p.particle.trim() || p.label.trim(),
    )
    if (validParticles.length > 0) {
      item.particles = validParticles.map((p) => ({
        particle: p.particle.trim(),
        label: p.label.trim(),
      }))
    }
  }

  if (
    formData.readingMnemonics.length > 0 ||
    formData.kanjiMnemonics.length > 0
  ) {
    const readingMnemonics = formData.readingMnemonics
      .filter((m) => m.trim())
      .map((m) => m.trim())
    const kanjiMnemonics = formData.kanjiMnemonics
      .filter((m) => m.trim())
      .map((m) => m.trim())

    if (readingMnemonics.length > 0 || kanjiMnemonics.length > 0) {
      item.mnemonics = {
        reading: readingMnemonics,
        kanji: kanjiMnemonics,
      }
    }
  }

  if (formData.examples.length > 0) {
    const validExamples = formData.examples.filter(
      (e) => e.japanese.trim() || e.english.trim(),
    )
    if (validExamples.length > 0) {
      item.example_sentences = validExamples.map((e) => ({
        japanese: [e.japanese.trim()],
        english: [e.english.trim()],
      }))
    }
  }

  return item
}

export function formDataToDBInsert(
  formData: VocabItemFormData,
  deckId: number,
): DBVocabularyItemInsert | null {
  const vocabularyItem = formDataToVocabularyItem(formData)
  if (!vocabularyItem) return null

  return vocabularyItemToDBInsert(vocabularyItem, deckId)
}

// Helper to create empty form data
export function createEmptyVocabItemFormData(): VocabItemFormData {
  return {
    word: "",
    furigana: "",
    english: [""],
    partOfSpeech: "",
    notes: [],
    particles: [],
    examples: [],
    readingMnemonics: [],
    kanjiMnemonics: [],
  }
}

// Helper to convert multiple form data items
export function convertAllFormDataToVocabularyItems(
  formDataMap: Map<number, VocabItemFormData>,
): VocabularyItem[] {
  const validItems: VocabularyItem[] = []

  for (const formData of formDataMap.values()) {
    const item = formDataToVocabularyItem(formData)
    if (item) {
      validItems.push(item)
    }
  }

  return validItems
}
