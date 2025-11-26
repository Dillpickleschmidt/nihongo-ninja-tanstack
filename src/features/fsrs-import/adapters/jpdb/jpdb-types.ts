import { z } from "zod"

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
