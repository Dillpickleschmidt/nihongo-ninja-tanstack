import { z } from "zod"

export const FSRSProcessingGradeSchema = z.union([
  z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  z.enum(["IGNORE_REVIEW", "FORGET_CARD", "NEVER_FORGET_CARD"]),
])
export type FSRSProcessingGrade = z.infer<typeof FSRSProcessingGradeSchema>

export const FSRSCardSchema = z.looseObject({
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

export const FSRSReviewLogSchema = z.looseObject({
  rating: z.union([
    z.literal(0), // Forget rating
    z.literal(1),
    z.literal(2),
    z.literal(3),
    z.literal(4),
  ]),
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

export const DBPracticeItemTypeSchema = z.enum([
  "vocabulary",
  "kanji",
  "radical",
])
export type DBPracticeItemType = z.infer<typeof DBPracticeItemTypeSchema>

export const PracticeModeSchema = z.enum(["meanings", "spellings"])
export type PracticeMode = z.infer<typeof PracticeModeSchema>

export const ProcessedCardSchema = z.object({
  practice_item_key: z.string().trim().min(1),
  type: DBPracticeItemTypeSchema,
  fsrs_card: FSRSCardSchema,
  mode: PracticeModeSchema,
  fsrs_logs: z.array(FSRSReviewLogSchema),
  source: z.string().min(1),
})
export type ProcessedCard = z.infer<typeof ProcessedCardSchema>

export function parseProcessedCard(data: unknown): ProcessedCard {
  return ProcessedCardSchema.parse(data)
}
