// features/vocab-page/utils/deckCopyUtils.ts

import { getVocabularyForSet } from "@/data/utils/vocab"
import { dynamic_modules } from "@/data/dynamic_modules"
import {
  getVocabForDeck,
  createCustomDeckServerFn,
} from "@/features/supabase/db/folder-operations"
import type { VocabItemFormData } from "@/features/vocab-page/types/vocabulary-types"
import type { VocabularyItem } from "@/data/types"

/**
 * Helper to extract text from example sentence items that can be strings or objects with 't' property
 */
function extractText(items: (string | { t: string })[]): string {
  if (!items || items.length === 0) return ""
  return items
    .map((item) => {
      if (typeof item === "string") return item
      return item.t || ""
    })
    .join("")
}

/**
 * Converts a VocabularyItem to VocabItemFormData with proper handling of all fields
 */
function vocabularyItemToFormData(item: VocabularyItem): VocabItemFormData {
  return {
    word: item.word,
    furigana: item.furigana || item.word,
    english: [...item.english],
    partOfSpeech: item.part_of_speech || "",
    notes: item.info ? [...item.info] : [],
    particles: item.particles
      ? item.particles.map((p) => ({
          particle: p.particle,
          label: p.label || "",
        }))
      : [],
    examples: item.example_sentences
      ? item.example_sentences.map((ex) => ({
          japanese: extractText(ex.japanese),
          english: extractText(ex.english),
        }))
      : [],
    readingMnemonics: item.mnemonics?.reading
      ? [...item.mnemonics.reading]
      : [],
    kanjiMnemonics: item.mnemonics?.kanji ? [...item.mnemonics.kanji] : [],
  }
}

/**
 * Loads vocabulary for a deck based on its source type
 */
export async function loadDeckVocabulary(
  deck: UserDeck,
): Promise<VocabItemFormData[]> {
  if (deck.source === "built-in" && deck.original_deck_id) {
    // Load from local files for built-in decks
    const module = dynamic_modules[deck.original_deck_id]
    if (module && module.vocab_set_ids) {
      const vocab = await getVocabularyForSet(module.vocab_set_ids)
      return vocab.map(vocabularyItemToFormData)
    }
  } else {
    // Load from database for user decks
    const vocab = await getVocabForDeck(deck.deck_id)
    return vocab.map(vocabularyItemToFormData)
  }

  return []
}

/**
 * Interface for copy deck parameters
 */
export interface CopyDeckParams {
  sourceDeck: UserDeck
  newName: string
  targetFolderId: string
  userId: string
}

/**
 * Copies a deck with all its vocabulary to a new location
 */
export async function copyDeck(params: CopyDeckParams): Promise<UserDeck> {
  const { sourceDeck, newName, targetFolderId } = params

  // Load vocabulary from the source deck
  const vocabularyItems = await loadDeckVocabulary(sourceDeck)

  // Determine target folder ID
  const targetFolder =
    targetFolderId === "root" ? null : parseInt(targetFolderId)

  // Create the new deck with vocabulary
  const newDeck = await createCustomDeckServerFn({
    data: {
      deck_name: newName,
      deck_description: sourceDeck.deck_description,
      folder_id: targetFolder,
      vocabulary_items: vocabularyItems,
    },
  })

  return newDeck
}

