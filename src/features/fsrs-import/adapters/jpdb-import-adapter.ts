// src/features/fsrs-import/jpdbAdapter.ts

import { Rating } from "ts-fsrs"
import {
  type ImportAdapter,
  type NormalizedCard,
  type NormalizedReview,
  CustomFSRSRating,
  normalizeReview,
} from "./import-adapter-interface"

type JpdbReview = {
  timestamp: number // Unix timestamp in seconds
  grade:
    | "unknown"
    | "known"
    | "something"
    | "hard"
    | "okay"
    | "easy"
    | "nothing"
    | "never-forget"
  from_anki: boolean
}

type JpdbVocabularyCard = {
  vid: number
  spelling: string
  reading: string
  reviews: JpdbReview[]
}

type JpdbKanjiCard = {
  character: string
  reviews: JpdbReview[]
}

export type JpdbJsonData = {
  cards_vocabulary_jp_en: JpdbVocabularyCard[]
  cards_vocabulary_en_jp: JpdbVocabularyCard[]
  cards_kanji_keyword_char: JpdbKanjiCard[]
  cards_kanji_char_keyword: JpdbKanjiCard[]
}

/**
 * jpdb.io import adapter implementation
 */
export const jpdbAdapter: ImportAdapter<JpdbJsonData> = {
  validateInput: (data: any): data is JpdbJsonData => {
    // Check if data is an object
    if (typeof data !== "object" || data === null) {
      return false
    }

    // Check if all required arrays exist and are arrays
    const requiredArrays = [
      "cards_vocabulary_jp_en",
      "cards_vocabulary_en_jp",
      "cards_kanji_keyword_char",
      "cards_kanji_char_keyword",
    ]

    for (const arrayName of requiredArrays) {
      if (!(arrayName in data) || !Array.isArray(data[arrayName])) {
        return false
      }
    }

    return true
  },

  transformCards: (data: JpdbJsonData): NormalizedCard[] => {
    const allCards: NormalizedCard[] = []

    // Process vocabulary JP->EN cards
    for (const card of data.cards_vocabulary_jp_en) {
      const normalizedCard = transformVocabularyCard(card, "vocabulary-jp-en")
      if (normalizedCard) {
        allCards.push(normalizedCard)
      }
    }

    // Process vocabulary EN->JP cards
    for (const card of data.cards_vocabulary_en_jp) {
      const normalizedCard = transformVocabularyCard(card, "vocabulary-en-jp")
      if (normalizedCard) {
        allCards.push(normalizedCard)
      }
    }

    // Process kanji keyword->char cards
    for (const card of data.cards_kanji_keyword_char) {
      const normalizedCard = transformKanjiCard(card, "kanji-keyword-char")
      if (normalizedCard) {
        allCards.push(normalizedCard)
      }
    }

    // Process kanji char->keyword cards
    for (const card of data.cards_kanji_char_keyword) {
      const normalizedCard = transformKanjiCard(card, "kanji-char-keyword")
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

  normalizeGrade: (grade: any) => {
    switch (grade) {
      case "okay":
        return Rating.Good
      case "hard":
        return Rating.Hard
      case "something":
        return Rating.Again
      case "easy":
        return Rating.Easy
      case "known":
        return Rating.Good
      case "unknown":
        return CustomFSRSRating.Ignore
      case "nothing":
        return CustomFSRSRating.Forget
      case "never-forget":
        return CustomFSRSRating.NeverForget
      default:
        return Rating.Again
    }
  },
}

/**
 * Transforms a jpdb vocabulary card to normalized format
 */
function transformVocabularyCard(
  card: JpdbVocabularyCard,
  cardType: string,
): NormalizedCard | null {
  // Filter out cards with empty or whitespace-only spelling
  if (!card.spelling || card.spelling.trim() === "") {
    return null
  }

  const normalizedReviews = transformReviews(
    card.reviews,
    `jpdb-${cardType}-${card.vid}`,
  )

  return {
    searchTerm: card.spelling,
    reviews: normalizedReviews,
    source: `jpdb-${cardType}-${card.vid}`,
  }
}

/**
 * Transforms a jpdb kanji card to normalized format
 */
function transformKanjiCard(
  card: JpdbKanjiCard,
  cardType: string,
): NormalizedCard | null {
  // Filter out cards with empty or whitespace-only character
  if (!card.character || card.character.trim() === "") {
    return null
  }

  const normalizedReviews = transformReviews(
    card.reviews,
    `jpdb-${cardType}-${card.character}`,
  )

  return {
    searchTerm: card.character,
    reviews: normalizedReviews,
    source: `jpdb-${cardType}-${card.character}`,
  }
}

/**
 * Transforms jpdb reviews to normalized format
 */
function transformReviews(
  jpdbReviews: JpdbReview[],
  source: string,
): NormalizedReview[] {
  return jpdbReviews.map((review) => {
    // Normalize the raw review using the generic helper
    return normalizeReview({
      timestamp: review.timestamp, // Unix timestamp in seconds
      grade: jpdbAdapter.normalizeGrade(review.grade),
      source: source,
    })
  })
}
