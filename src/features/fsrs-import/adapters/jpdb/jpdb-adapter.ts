import { type NormalizedCard, NormalizedReviewSchema } from "../../shared/types/import-data-models"
import { normalizeTimestamp } from "../adapter-utils"
import type { JpdbJsonData, JpdbVocabularyCard, JpdbKanjiCard, JpdbReview } from "./jpdb-types"
import { safeParseJpdbJsonData, mapJpdbGradeToFSRS } from "./jpdb-schemas"
import { simulateFSRSReviews } from "../../services/spaced-repetition-processor"
import { createEmptyCard, State } from "ts-fsrs"
import type { ImportItem, ItemStatus } from "@/features/import-page/shared/types"
import { getVocabFromDB } from "@/features/resolvers/vocabulary"
import { getKanjiDetails } from "@/features/resolvers/kanji"

/**
 * jpdb.io import adapter implementation
 */
export const jpdbAdapter = {
  validateInput: (data: any): data is JpdbJsonData => {
    const result = safeParseJpdbJsonData(data)
    return result.success
  },

  transformCards: (data: JpdbJsonData): NormalizedCard[] => {
    const allCards: NormalizedCard[] = []

    // Process vocabulary JP->EN cards
    for (const card of data.cards_vocabulary_jp_en) {
      const normalizedCard = transformVocabularyCard(card)
      if (normalizedCard) {
        allCards.push(normalizedCard)
      }
    }

    // Process vocabulary EN->JP cards
    for (const card of data.cards_vocabulary_en_jp) {
      const normalizedCard = transformVocabularyCard(card)
      if (normalizedCard) {
        allCards.push(normalizedCard)
      }
    }

    // Process kanji keyword->char cards
    for (const card of data.cards_kanji_keyword_char) {
      const normalizedCard = transformKanjiCard(card)
      if (normalizedCard) {
        allCards.push(normalizedCard)
      }
    }

    // Process kanji char->keyword cards
    for (const card of data.cards_kanji_char_keyword) {
      const normalizedCard = transformKanjiCard(card)
      if (normalizedCard) {
        allCards.push(normalizedCard)
      }
    }

    return allCards
  },

  getSupportedCardTypes: (): string[] => {
    return [
      "vocabulary-jp-en",
      "vocabulary-en-jp",
      "kanji-keyword-char",
      "kanji-char-keyword",
    ]
  },

  normalizeGrade: mapJpdbGradeToFSRS,
}

/**
 * Transforms a jpdb vocabulary card to normalized format
 */
function transformVocabularyCard(
  card: JpdbVocabularyCard,
): NormalizedCard | null {
  // Filter out cards with empty or whitespace-only spelling
  if (!card.spelling || card.spelling.trim() === "") {
    return null
  }

  const normalizedReviews = transformReviews(card.reviews)

  return {
    searchTerm: card.spelling,
    type: "vocabulary",
    reviews: normalizedReviews,
  }
}

/**
 * Transforms a jpdb kanji card to normalized format
 */
function transformKanjiCard(
  card: JpdbKanjiCard,
): NormalizedCard | null {
  // Filter out cards with empty or whitespace-only character
  if (!card.character || card.character.trim() === "") {
    return null
  }

  const normalizedReviews = transformReviews(card.reviews)

  return {
    searchTerm: card.character,
    type: "kanji",
    reviews: normalizedReviews,
  }
}

/**
 * Transforms jpdb reviews to normalized format
 */
function transformReviews(
  jpdbReviews: JpdbReview[],
) {
  return jpdbReviews.map((review) => {
    const normalized = {
      timestamp: normalizeTimestamp(review.timestamp),
      grade: mapJpdbGradeToFSRS(review.grade),
    }
    return NormalizedReviewSchema.parse(normalized)
  })
}

/**
 * Determines import item status based on FSRS card state after review simulation
 */
function getItemStatusFromFSRSCard(fsrsCard: any): ItemStatus {
  // If no reviews, card remains in New state
  if (fsrsCard.state === State.New) {
    return null
  }

  if (fsrsCard.state === State.Learning) {
    return "learning"
  }

  if (fsrsCard.state === State.Relearning) {
    return "learning"
  }

  if (fsrsCard.state === State.Review) {
    // Use stability as a proxy for mastery
    // High stability (21+ days) indicates well-learned card
    if (fsrsCard.stability >= 21) {
      return "mastered"
    } else {
      return "decent"
    }
  }

  return null
}

/**
 * Result type for JPDB transformation with both UI and FSRS outputs
 */
export interface JpdbTransformResult {
  vocabImportItems: ImportItem[]
  kanjiImportItems: ImportItem[]
  normalizedCards: NormalizedCard[]
}

/**
 * Transforms JPDB JSON data to both ImportItem[] (for UI) and NormalizedCard[] (for FSRS import)
 * Filters to only vocabulary JP->EN and kanji keyword->char cards
 * Determines status by simulating FSRS reviews
 * Fetches meanings from database via batch lookups
 */
export async function transformJpdbData(
  data: JpdbJsonData,
): Promise<JpdbTransformResult> {
  const vocabImportItems: ImportItem[] = []
  const kanjiImportItems: ImportItem[] = []
  const normalizedCards: NormalizedCard[] = []

  // Collect vocabulary spellings and kanji characters for batch lookup
  const vocabSpellings = data.cards_vocabulary_jp_en
    .filter((card) => card.spelling && card.spelling.trim() !== "")
    .map((card) => card.spelling)

  const kanjiChars = data.cards_kanji_keyword_char
    .filter((card) => card.character && card.character.trim() !== "")
    .map((card) => card.character)

  // Batch lookup meanings from database
  const [vocabItems, kanjiDetails] = await Promise.all([
    vocabSpellings.length > 0 ? getVocabFromDB(vocabSpellings) : Promise.resolve([]),
    kanjiChars.length > 0 ? getKanjiDetails(kanjiChars, []) : Promise.resolve({ kanji: [], radicals: [] }),
  ])

  // Create lookup maps for O(1) access
  const vocabMap = new Map(vocabItems.map((v) => [v.word, v]))
  const kanjiMap = new Map(kanjiDetails.kanji.map((k) => [k.kanji, k]))

  // Process vocabulary JP->EN cards
  for (const card of data.cards_vocabulary_jp_en) {
    if (!card.spelling || card.spelling.trim() === "") {
      continue
    }

    const normalizedCard = transformVocabularyCard(card)
    if (!normalizedCard) continue

    // Add to normalized cards for FSRS import
    normalizedCards.push(normalizedCard)

    // Simulate FSRS reviews to determine status
    const { finalCard } = simulateFSRSReviews(createEmptyCard(), normalizedCard.reviews)
    const status = getItemStatusFromFSRSCard(finalCard)

    // Fetch meaning from lookup map
    const vocabData = vocabMap.get(card.spelling)
    const meaning = vocabData?.english.join(", ") || ""

    vocabImportItems.push({
      id: card.spelling,
      meaning,
      status,
    })
  }

  // Process kanji keyword->char cards
  for (const card of data.cards_kanji_keyword_char) {
    if (!card.character || card.character.trim() === "") {
      continue
    }

    const normalizedCard = transformKanjiCard(card)
    if (!normalizedCard) continue

    // Add to normalized cards for FSRS import
    normalizedCards.push(normalizedCard)

    // Simulate FSRS reviews to determine status
    const { finalCard } = simulateFSRSReviews(createEmptyCard(), normalizedCard.reviews)
    const status = getItemStatusFromFSRSCard(finalCard)

    // Fetch meaning from lookup map
    const kanjiData = kanjiMap.get(card.character)
    const meaning = kanjiData?.meanings.join(", ") || ""

    kanjiImportItems.push({
      id: card.character,
      meaning,
      status,
    })
  }

  return { vocabImportItems, kanjiImportItems, normalizedCards }
}
