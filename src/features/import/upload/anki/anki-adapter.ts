import { createEmptyCard } from "ts-fsrs"
import { mapAnkiEaseToFSRS } from "./anki-schemas"
import { NormalizedReviewSchema } from "../fsrs/processing-schemas"
import { simulateFSRSReviews } from "../fsrs/spaced-repetition-processor"
import { getItemStatusFromFSRSCard } from "../types"
import type { ImportProcessResult, ImportItem, ProcessedCard } from "../types"
import type { AnkiExtractedData, FieldMapping } from "./anki-types"

/**
 * Strips HTML tags from a string (Anki fields often contain HTML)
 */
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim()
}

/**
 * Transforms extracted Anki data + confirmed field mapping into ImportProcessResult.
 * Runs FSRS simulation inline for each note's review history.
 */
export function transformAnkiData(
  data: AnkiExtractedData,
  fieldMapping: FieldMapping,
): ImportProcessResult {
  const vocabItems: ImportItem[] = []
  const processedCards: ProcessedCard[] = []

  for (const note of data.notes) {
    const fields = note.flds.split("\x1f")
    const word = stripHtml(fields[fieldMapping.wordFieldIndex] ?? "")
    if (!word) continue

    // Collect all reviews across all cards for this note
    const noteCards = data.cards.get(note.id) ?? []
    const allReviews: { timestamp: Date; grade: ReturnType<typeof mapAnkiEaseToFSRS> }[] = []

    for (const card of noteCards) {
      const cardReviews = data.reviews.get(card.id) ?? []
      for (const review of cardReviews) {
        allReviews.push({
          timestamp: new Date(review.id), // review.id is epoch milliseconds
          grade: mapAnkiEaseToFSRS(review.ease),
        })
      }
    }

    // Sort chronologically
    allReviews.sort(
      (a, b) => a.timestamp.getTime() - b.timestamp.getTime(),
    )

    if (allReviews.length === 0) continue

    // Parse through schema for validation
    const normalizedReviews = allReviews.map((r) =>
      NormalizedReviewSchema.parse(r),
    )

    const { finalCard, logs } = simulateFSRSReviews(
      createEmptyCard(),
      normalizedReviews,
    )
    const status = getItemStatusFromFSRSCard(finalCard)

    processedCards.push({
      searchTerm: word,
      type: "vocabulary",
      fsrsCard: finalCard,
      fsrsLogs: logs,
    })

    vocabItems.push({ id: word, status })
  }

  if (vocabItems.length === 0) {
    throw new Error("No vocabulary cards with review history found in the Anki deck")
  }

  return { vocabItems, kanjiItems: [], processedCards }
}
