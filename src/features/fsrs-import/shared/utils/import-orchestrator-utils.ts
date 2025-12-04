import { type DBPracticeItemType, type PracticeMode, type ProcessedCard } from "../types/fsrs-types"

// =============================================================================
// PRACTICE MODE UTILITIES
// =============================================================================

const KANJI_REGEX = /[\u4e00-\u9faf\u3400-\u4dbf]/

/**
 * Determines the practice mode based on item type and content.
 * Returns "meanings" for kanji/radical types or vocabulary containing kanji.
 * Returns "spellings" for pure kana vocabulary.
 */
export function determineMode(
  practiceItemType: DBPracticeItemType,
  originalSpelling: string,
): PracticeMode {
  // Non-vocabulary types always use meanings mode
  if (practiceItemType !== "vocabulary") {
    return "meanings"
  }

  // Vocabulary with kanji or empty spelling uses meanings, pure kana uses spellings
  return !originalSpelling || KANJI_REGEX.test(originalSpelling)
    ? "meanings"
    : "spellings"
}

/**
 * Normalizes search terms by trimming whitespace and handling null/undefined.
 */
export function normalizeSearchTerm(term: string | null | undefined): string {
  return typeof term === "string" ? term.trim() : ""
}

// =============================================================================
// CARD STRUCTURE VALIDATION
// =============================================================================

const VALID_TYPES = ["vocabulary", "kanji", "radical"] as const
const VALID_MODES = ["meanings", "spellings"] as const

/**
 * Validates that a card has all required fields and proper structure.
 */
export function validateCardStructure(card: any): card is ProcessedCard {
  if (!card || typeof card !== "object" || Array.isArray(card)) {
    return false
  }

  // Validate practice_item_key
  if (
    typeof card.practice_item_key !== "string" ||
    card.practice_item_key.trim() === ""
  ) {
    return false
  }

  // Validate type
  if (!VALID_TYPES.includes(card.type)) {
    return false
  }

  // Validate mode
  if (!VALID_MODES.includes(card.mode)) {
    return false
  }

  // Validate fsrs_card
  if (!card.fsrs_card || typeof card.fsrs_card !== "object") {
    return false
  }

  // Validate fsrs_logs
  if (!Array.isArray(card.fsrs_logs)) {
    return false
  }

  return true
}
