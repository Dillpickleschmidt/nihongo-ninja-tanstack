import { z } from "zod"

export const MatchedKanjiRadicalSchema = z.object({
  character: z.string(),
  meaning: z.string(),
  source: z.string(),
})
export type MatchedKanjiRadical = z.infer<typeof MatchedKanjiRadicalSchema>

export const UnmatchedKanjiRadicalSchema = z.object({
  character: z.string(),
  source: z.string(),
})
export type UnmatchedKanjiRadical = z.infer<typeof UnmatchedKanjiRadicalSchema>

export const JpdbValidationResponseSchema = z.object({
  matched: z.array(MatchedKanjiRadicalSchema),
  unmatched: z.array(UnmatchedKanjiRadicalSchema),
  vocabularyCount: z.number().int().nonnegative(),
})
export type JpdbValidationResponse = z.infer<
  typeof JpdbValidationResponseSchema
>
