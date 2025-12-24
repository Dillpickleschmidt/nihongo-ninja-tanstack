import { z } from "zod"
import { Rating } from "ts-fsrs"
import { CustomFSRSRating as ProcessorCustomFSRSRating } from "../fsrs/spaced-repetition-processor"

// Zod schemas for JPDB JSON structure
export const JpdbGradeSchema = z.enum([
  "unknown",
  "known",
  "something",
  "hard",
  "okay",
  "easy",
  "nothing",
  "never-forget",
  "fail",
])
export type JpdbGrade = z.infer<typeof JpdbGradeSchema>

export const JpdbReviewSchema = z.object({
  timestamp: z.number().int().positive(),
  grade: JpdbGradeSchema,
  from_anki: z.boolean(),
})
export type JpdbReview = z.infer<typeof JpdbReviewSchema>

export const JpdbVocabularyCardSchema = z.object({
  vid: z.number().int().positive(),
  spelling: z.string(),
  reading: z.string(),
  reviews: z.array(JpdbReviewSchema),
})
export type JpdbVocabularyCard = z.infer<typeof JpdbVocabularyCardSchema>

export const JpdbKanjiCardSchema = z.object({
  character: z.string(),
  reviews: z.array(JpdbReviewSchema),
})
export type JpdbKanjiCard = z.infer<typeof JpdbKanjiCardSchema>

export const JpdbJsonDataSchema = z.object({
  cards_vocabulary_jp_en: z.array(JpdbVocabularyCardSchema),
  cards_vocabulary_en_jp: z.array(JpdbVocabularyCardSchema),
  cards_kanji_keyword_char: z.array(JpdbKanjiCardSchema),
  cards_kanji_char_keyword: z.array(JpdbKanjiCardSchema),
})
export type JpdbJsonData = z.infer<typeof JpdbJsonDataSchema>

/**
 * Maps JPDB grades to FSRS ratings
 */
export function mapJpdbGradeToFSRS(grade: JpdbGrade): any {
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
      return ProcessorCustomFSRSRating.Ignore
    case "nothing":
      return ProcessorCustomFSRSRating.Forget
    case "never-forget":
      return ProcessorCustomFSRSRating.NeverForget
    case "fail":
      return Rating.Again
    default:
      return Rating.Again
  }
}

export function safeParseJpdbJsonData(data: unknown) {
  return JpdbJsonDataSchema.safeParse(data)
}
