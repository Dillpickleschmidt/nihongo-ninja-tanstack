import {
  type ImportAdapter,
  type NormalizedCard,
  type NormalizedReview,
  normalizeReview,
} from "./import-adapter-interface"
import {
  type JpdbJsonData,
  type JpdbVocabularyCard,
  type JpdbKanjiCard,
  type JpdbReview,
  safeParseJpdbJsonData,
  mapJpdbGradeToFSRS,
  normalizeTimestamp,
} from "../core/schemas"

/**
 * jpdb.io import adapter implementation
 */
export const jpdbAdapter: ImportAdapter<JpdbJsonData> = {
  validateInput: (data: any): data is JpdbJsonData => {
    const result = safeParseJpdbJsonData(data)
    return result.success
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

  normalizeGrade: mapJpdbGradeToFSRS,
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
    return normalizeReview({
      timestamp: normalizeTimestamp(review.timestamp),
      grade: mapJpdbGradeToFSRS(review.grade),
      source: source,
    })
  })
}
