import { z } from "zod"
import { Rating, type FSRS } from "ts-fsrs"
import { CustomFSRSRating as ProcessorCustomFSRSRating } from "../services/spaced-repetition-processor"

export const FSRSProcessingGradeSchema = z.union([
  z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  z.any().refine((val) => {
    return (
      val === ProcessorCustomFSRSRating.Ignore ||
      val === ProcessorCustomFSRSRating.Forget ||
      val === ProcessorCustomFSRSRating.NeverForget
    )
  }, "Must be a valid custom FSRS rating symbol"),
])
export type FSRSProcessingGrade = z.infer<typeof FSRSProcessingGradeSchema>

export const FSRSCardSchema = z
  .object({
    due: z.date(),
    stability: z.number(),
    difficulty: z.number(),
    elapsed_days: z.number(),
    scheduled_days: z.number(),
    reps: z.number(),
    lapses: z.number(),
    state: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    learning_steps: z.number().optional(),
  })
  .passthrough()

export const FSRSReviewLogSchema = z
  .object({
    rating: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
    state: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
    due: z.date(),
    stability: z.number(),
    difficulty: z.number(),
    elapsed_days: z.number(),
    last_elapsed_days: z.number(),
    scheduled_days: z.number(),
    learning_steps: z.number(),
    review: z.date(),
  })
  .passthrough()

export const NormalizedReviewSchema = z.object({
  timestamp: z.date(),
  grade: z.any(),
  source: z.string(),
})
export type NormalizedReview = z.infer<typeof NormalizedReviewSchema>

export const NormalizedCardSchema = z.object({
  searchTerm: z.string().trim().min(1),
  reviews: z.array(NormalizedReviewSchema),
  source: z.string().min(1),
})
export type NormalizedCard = z.infer<typeof NormalizedCardSchema>

export const DBPracticeItemTypeSchema = z.enum([
  "vocabulary",
  "kanji",
  "radical",
])
export type DBPracticeItemType = z.infer<typeof DBPracticeItemTypeSchema>

export const PracticeModeSchema = z.enum(["readings", "kana"])
export type PracticeMode = z.infer<typeof PracticeModeSchema>

export const ProcessedCardSchema = z.object({
  practice_item_key: z.string().trim().min(1),
  type: DBPracticeItemTypeSchema,
  fsrs_card: FSRSCardSchema,
  mode: PracticeModeSchema,
  fsrs_logs: z.array(FSRSReviewLogSchema),
  lesson_id: z.string().nullable(),
  source: z.string().min(1),
})
export type ProcessedCard = z.infer<typeof ProcessedCardSchema>

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

export const WaniKaniSubjectSchema = z
  .object({
    slug: z.string(),
    type: DBPracticeItemTypeSchema,
  })
  .passthrough()

export type WaniKaniSubject = z.infer<typeof WaniKaniSubjectSchema>

export const ImportInputSchema = z.object({
  cards: z.unknown(),
  source: z.string().min(1),
})
export type ImportInput = z.infer<typeof ImportInputSchema>

export const ValidationResultSchema = z.object({
  valid: z.boolean(),
  cards: z.array(NormalizedCardSchema),
  errors: z.array(z.string()),
})
export type ValidationResult = z.infer<typeof ValidationResultSchema>

export const ImportStatsSchema = z.object({
  processed: z.number().int().nonnegative(),
  duplicatesRemoved: z.number().int().nonnegative(),
  duration: z.string(),
})
export type ImportStats = z.infer<typeof ImportStatsSchema>

export const ImportResultSchema = z.object({
  success: z.boolean(),
  message: z.string(),
  stats: ImportStatsSchema.optional(),
})
export type ImportResult = z.infer<typeof ImportResultSchema>

export const DeduplicationStatsSchema = z.object({
  deduplicatedCards: z.array(ProcessedCardSchema),
  duplicatesRemoved: z.number().int().nonnegative(),
})
export type DeduplicationStats = z.infer<typeof DeduplicationStatsSchema>

export const BatchProcessingContextSchema = z.object({
  userId: z.string().min(1),
  source: z.string().min(1),
  fsrsInstance: z.custom<FSRS>((val) => val instanceof Object),
})
export type BatchProcessingContext = z.infer<
  typeof BatchProcessingContextSchema
>

export const TimestampSchema = z.union([z.date(), z.string(), z.number().int()])

export const RawReviewSchema = z.object({
  timestamp: TimestampSchema,
  grade: z.unknown(),
  source: z.string(),
})
export type RawReview = z.infer<typeof RawReviewSchema>

export function parseNormalizedCard(data: unknown): NormalizedCard {
  return NormalizedCardSchema.parse(data)
}

export function parseProcessedCard(data: unknown): ProcessedCard {
  return ProcessedCardSchema.parse(data)
}

export function parseJpdbJsonData(data: unknown): JpdbJsonData {
  return JpdbJsonDataSchema.parse(data)
}

export function parseImportInput(data: unknown): ImportInput {
  return ImportInputSchema.parse(data)
}

export function safeParseJpdbJsonData(data: unknown) {
  return JpdbJsonDataSchema.safeParse(data)
}

export function safeParseImportInput(data: unknown) {
  return ImportInputSchema.safeParse(data)
}

export function normalizeTimestamp(timestamp: unknown): Date {
  const parsed = TimestampSchema.parse(timestamp)

  if (parsed instanceof Date) {
    return parsed
  } else if (typeof parsed === "string") {
    return new Date(parsed)
  } else if (typeof parsed === "number") {
    return new Date(parsed * 1000)
  }

  throw new Error(`Invalid timestamp format: ${timestamp}`)
}

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
