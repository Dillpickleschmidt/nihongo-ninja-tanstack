// features/fsrs-import/types.ts

export type JpdbReview = {
  timestamp: number // Unix timestamp (in seconds)
  /**
   * "unknown" is ignored
   * "nothing" implies using FSRS forget method
   * "something" maps to FSRS Rating.Again
   * "never-forget" implies the card should no longer be shown via SR
   */
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

export type JpdbVocabularyCard = {
  vid: number
  spelling: string
  reading: string
  reviews: JpdbReview[] // ordered chronologically
}

export type JpdbKanjiCard = {
  character: string
  reviews: JpdbReview[] // ordered chronologically
}

/**
 * The top-level structure of the jpdb.io JSON export file.
 */
export type JpdbJsonData = {
  cards_vocabulary_jp_en: JpdbVocabularyCard[]
  cards_vocabulary_en_jp: JpdbVocabularyCard[]
  cards_kanji_keyword_char: JpdbKanjiCard[]
  cards_kanji_char_keyword: JpdbKanjiCard[]
}

export type DBPracticeItemType = "vocabulary" | "kanji" | "radical"

/**
 * Represents the result of mapping a jpdb.io item to a WaniKani subject.
 */
export type WaniKaniSubjectMapping = {
  id: number // WaniKani subject ID
  slug: string // WaniKani subject slug (becomes practice_item_key)
  type: DBPracticeItemType // for Supabase
}

// Custom actions for specific jpdb.io grades.
export const CustomFSRSRating = {
  Ignore: Symbol("IGNORE_REVIEW"), // jpdb "unknown": skip review
  Forget: Symbol("FORGET_CARD"), // jpdb "nothing": use FSRS forget method
  NeverForget: Symbol("NEVER_FORGET_CARD"), // jpdb "never-forget": mark card as completed
} as const

// Type for FSRS Grades or custom actions.
export type FSRSProcessingGrade =
  | import("ts-fsrs").Grade
  | (typeof CustomFSRSRating)[keyof typeof CustomFSRSRating]
