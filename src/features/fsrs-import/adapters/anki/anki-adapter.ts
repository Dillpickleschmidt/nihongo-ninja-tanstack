import type { NormalizedReview, NormalizedCard } from "../../shared/types/import-data-models"
import type { AnkiExtractedData, AnkiNote, FieldMapping } from "./anki-types"
import type { ImportAdapter } from "../import-adapter-interface"
import { mapAnkiEaseToFSRS } from "./anki-schemas"
import type { ImportItem } from "@/features/import-page/shared/types"

// --- Shared extraction logic (used by both UI and FSRS flows) ---

interface ExtractedNoteData {
  searchTerm: string
  meaning: string
  reviews: NormalizedReview[]
  queue: number
  ivl: number
  noteId: number
}

function extractNoteData(
  note: AnkiNote,
  data: AnkiExtractedData,
  fieldMapping: FieldMapping,
): ExtractedNoteData | null {
  const fields = note.flds.split("\x1f")
  const searchTerm = fields[fieldMapping.wordFieldIndex]

  if (!searchTerm?.trim()) {
    return null
  }

  const cardsByNoteId = data.cards.get(note.id)
  if (!cardsByNoteId || cardsByNoteId.length === 0) {
    return null
  }

  // Collect all reviews for cards from this note
  const reviews: NormalizedReview[] = []
  for (const card of cardsByNoteId) {
    const cardReviews = data.reviews.get(card.id)
    if (cardReviews) {
      for (const review of cardReviews) {
        reviews.push({
          timestamp: new Date(review.id), // Anki review ID is epoch ms
          grade: mapAnkiEaseToFSRS(review.ease),
          source: "anki",
        })
      }
    }
  }

  if (reviews.length === 0) {
    return null
  }

  const meaning = fields[fieldMapping.englishFieldIndex]
  if (!meaning?.trim()) {
    return null
  }

  const firstCard = cardsByNoteId[0]

  return {
    searchTerm,
    meaning,
    reviews,
    queue: firstCard.queue,
    ivl: firstCard.ivl,
    noteId: note.id,
  }
}

// --- Transform to ImportItem (for UI preview flow) ---

function getItemStatus(
  queue: number,
  ivl: number,
): "learning" | "decent" | "mastered" {
  if (queue === 1) return "learning"
  if (queue === 2) {
    return ivl >= 21 ? "mastered" : "decent"
  }
  return "learning"
}

/**
 * Result type for Anki transformation with both UI and FSRS outputs
 */
export interface AnkiTransformResult {
  importItems: ImportItem[]
  normalizedCards: NormalizedCard[]
}

/**
 * Transforms Anki extracted data to both ImportItem[] (for UI) and NormalizedCard[] (for FSRS import)
 * Single pass through notes, creating both outputs simultaneously
 */
export function transformAnkiData(
  data: AnkiExtractedData,
  fieldMapping: FieldMapping,
): AnkiTransformResult {
  const importItems: ImportItem[] = []
  const normalizedCards: NormalizedCard[] = []

  for (const note of data.notes) {
    const extracted = extractNoteData(note, data, fieldMapping)
    if (!extracted) continue

    // Add to normalized cards for FSRS import
    normalizedCards.push({
      searchTerm: extracted.searchTerm,
      reviews: extracted.reviews, // Already NormalizedReview[]
      source: `anki-${extracted.noteId}`,
    })

    // Create import item for UI display
    const status = getItemStatus(extracted.queue, extracted.ivl)
    importItems.push({
      id: `imp-vocab-anki-${extracted.noteId}`,
      main: extracted.searchTerm,
      meaning: extracted.meaning,
      status,
    })
  }

  return { importItems, normalizedCards }
}

/**
 * Anki ImportAdapter implementation for FSRS import orchestration
 * Handles transformation of Anki extracted data to NormalizedCard format
 */
export const ankiAdapter: ImportAdapter<{ data: AnkiExtractedData; mapping: FieldMapping }> = {
  validateInput: (input: any): input is { data: AnkiExtractedData; mapping: FieldMapping } => {
    return (
      input &&
      typeof input === "object" &&
      "data" in input &&
      "mapping" in input &&
      Array.isArray(input.data?.notes)
    )
  },

  transformCards: (input: { data: AnkiExtractedData; mapping: FieldMapping }): NormalizedCard[] => {
    const { normalizedCards } = transformAnkiData(input.data, input.mapping)
    return normalizedCards
  },

  getSupportedCardTypes: (): string[] => ["anki-note"],

  normalizeGrade: mapAnkiEaseToFSRS,
}
