import { z } from "zod"
import { ProcessedCardSchema, type ProcessedCard } from "./fsrs-types"

// =============================================================================
// NORMALIZED DATA MODELS (from import sources)
// =============================================================================

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

export function parseNormalizedCard(data: unknown): NormalizedCard {
  return NormalizedCardSchema.parse(data)
}

// =============================================================================
// IMPORT PIPELINE DATA MODELS
// =============================================================================

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
  fsrsInstance: z.custom<any>((val) => val instanceof Object),
})
export type BatchProcessingContext = z.infer<
  typeof BatchProcessingContextSchema
>

export const ImportInputSchema = z.object({
  cards: z.unknown(),
  source: z.string().min(1),
})
export type ImportInput = z.infer<typeof ImportInputSchema>

export function safeParseImportInput(data: unknown) {
  return ImportInputSchema.safeParse(data)
}
