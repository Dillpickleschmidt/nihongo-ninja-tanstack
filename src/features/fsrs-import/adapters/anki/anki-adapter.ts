import type { NormalizedReview } from "../../shared/types/import-data-models"
import type { AnkiExtractedData, AnkiNote, FieldMapping } from "./anki-types"
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

export function transformAnkiToImportItems(
  data: AnkiExtractedData,
  fieldMapping: FieldMapping,
): ImportItem[] {
  const vocabItems: ImportItem[] = []

  for (const note of data.notes) {
    const extracted = extractNoteData(note, data, fieldMapping)
    if (!extracted) continue

    const status = getItemStatus(extracted.queue, extracted.ivl)

    vocabItems.push({
      id: `imp-vocab-anki-${extracted.noteId}`,
      main: extracted.searchTerm,
      meaning: extracted.meaning,
      status,
    })
  }

  return vocabItems
}
