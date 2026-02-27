import { createEmptyCard } from "ts-fsrs"
import {
  safeParseJpdbJsonData,
  mapJpdbGradeToFSRS,
  type JpdbJsonData,
  type JpdbReview,
} from "./jpdb-schemas"
import { simulateFSRSReviews } from "../fsrs/spaced-repetition-processor"
import { NormalizedReviewSchema } from "../fsrs/processing-schemas"
import { getItemStatusFromFSRSCard } from "../types"
import type {
  ImportItem,
  ProcessedCard,
  ImportProcessResult,
} from "../types"

/**
 * Normalizes a timestamp to ensure it's a Date object
 */
function normalizeTimestamp(timestamp: number): Date {
  // JPDB uses seconds, convert to milliseconds if needed
  if (timestamp < 1e12) {
    return new Date(timestamp * 1000)
  }
  return new Date(timestamp)
}

/**
 * Transforms jpdb reviews to normalized format for FSRS simulation
 */
function transformReviews(jpdbReviews: JpdbReview[]) {
  return jpdbReviews.map((review) => {
    const normalized = {
      timestamp: normalizeTimestamp(review.timestamp),
      grade: mapJpdbGradeToFSRS(review.grade),
    }
    return NormalizedReviewSchema.parse(normalized)
  })
}

/**
 * Processes validated JPDB JSON data and returns import items and processed cards
 */
export function processJpdbData(data: JpdbJsonData): ImportProcessResult {
  const vocabItems: ImportItem[] = []
  const kanjiItems: ImportItem[] = []
  const processedCards: ProcessedCard[] = []

  // Process vocabulary JP->EN cards
  for (const card of data.cards_vocabulary_jp_en) {
    if (!card.spelling || card.spelling.trim() === "") {
      continue
    }

    const reviews = transformReviews(card.reviews)
    if (reviews.length === 0) continue

    // Simulate FSRS reviews to get final card state
    const { finalCard, logs } = simulateFSRSReviews(createEmptyCard(), reviews)
    const status = getItemStatusFromFSRSCard(finalCard)

    processedCards.push({
      searchTerm: card.spelling,
      type: "vocabulary",
      fsrsCard: finalCard,
      fsrsLogs: logs,
    })

    vocabItems.push({
      id: card.spelling,
      status,
    })
  }

  // Process kanji keyword->char cards
  for (const card of data.cards_kanji_keyword_char) {
    if (!card.character || card.character.trim() === "") {
      continue
    }

    const reviews = transformReviews(card.reviews)
    if (reviews.length === 0) continue

    // Simulate FSRS reviews to get final card state
    const { finalCard, logs } = simulateFSRSReviews(createEmptyCard(), reviews)
    const status = getItemStatusFromFSRSCard(finalCard)

    processedCards.push({
      searchTerm: card.character,
      type: "kanji",
      fsrsCard: finalCard,
      fsrsLogs: logs,
    })

    kanjiItems.push({
      id: card.character,
      status,
    })
  }

  // Validate we found some data
  if (vocabItems.length === 0 && kanjiItems.length === 0) {
    throw new Error("No vocabulary or kanji cards found in the JPDB file")
  }

  return { vocabItems, kanjiItems, processedCards }
}

/**
 * Processes a JPDB JSON file and returns import items and processed cards
 */
export async function processJpdbFile(file: File): Promise<ImportProcessResult> {
  const jsonText = await file.text()

  let jpdbData: unknown
  try {
    jpdbData = JSON.parse(jsonText)
  } catch {
    throw new Error("Invalid JSON file. Please check the file format.")
  }

  // Validate the JSON structure
  const parseResult = safeParseJpdbJsonData(jpdbData)
  if (!parseResult.success) {
    throw new Error(
      "Invalid JPDB JSON format. Please check your file and try again.",
    )
  }

  return processJpdbData(parseResult.data as JpdbJsonData)
}
