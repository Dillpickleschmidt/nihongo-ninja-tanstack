import { z } from "zod"

export const FSRSProcessingGradeSchema = z.union([
  z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  z.enum(["IGNORE_REVIEW", "FORGET_CARD", "NEVER_FORGET_CARD"]),
])
export type FSRSProcessingGrade = z.infer<typeof FSRSProcessingGradeSchema>

export const NormalizedReviewSchema = z.object({
  timestamp: z.date(),
  grade: FSRSProcessingGradeSchema,
})
export type NormalizedReview = z.infer<typeof NormalizedReviewSchema>
