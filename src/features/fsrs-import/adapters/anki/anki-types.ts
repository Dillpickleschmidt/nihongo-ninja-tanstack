import { z } from "zod"

export const AnkiNoteSchema = z.object({
  id: z.number().int().positive(),
  guid: z.string(),
  mid: z.number().int().positive(), // model ID
  mod: z.number().int().positive(), // modification timestamp (seconds)
  usn: z.number().int(),
  tags: z.string(), // space-separated
  flds: z.string(), // fields separated by \x1f (ASCII 31)
})
export type AnkiNote = z.infer<typeof AnkiNoteSchema>

export const AnkiCardSchema = z.object({
  id: z.number().int().positive(),
  nid: z.number().int().positive(), // note ID
  did: z.number().int().positive(), // deck ID
  ord: z.number().int().nonnegative(), // ordinal (template or cloze index)
  mod: z.number().int().positive(), // modification time (seconds)
  usn: z.number().int(),
  type: z.number().int().min(0).max(3), // 0=new, 1=learning, 2=review, 3=relearning
  queue: z.number().int(), // -3=buried, -2=suspended, -1=suspended, 0=new, 1=learning, 2=review, 3=day learn, 4=preview
  due: z.number().int(), // format depends on card type
  ivl: z.number().int(), // interval in days
  factor: z.number().int(), // ease factor in permille (1000 = 1.0x)
  reps: z.number().int().nonnegative(),
  lapses: z.number().int().nonnegative(),
  left: z.number().int(), // reps left today
  odue: z.number().int(), // original due (filtered decks)
  odid: z.number().int(), // original deck ID (filtered decks)
  flags: z.number().int(),
  data: z.string(),
})
export type AnkiCard = z.infer<typeof AnkiCardSchema>

export const AnkiReviewSchema = z.object({
  id: z.number().int().positive(), // epoch milliseconds
  cid: z.number().int().positive(), // card ID
  usn: z.number().int(),
  ease: z.number().int().min(1).max(4), // 1=wrong, 2=hard, 3=ok, 4=easy
  ivl: z.number().int(), // negative=seconds, positive=days
  lastIvl: z.number().int(),
  factor: z.number().int(), // ease factor in permille
  time: z.number().int().nonnegative(), // milliseconds (max 60000)
  type: z.number().int().min(0).max(5), // 0=learn, 1=review, 2=relearn, 3=filtered, 4=manual, 5=rescheduled
})
export type AnkiReview = z.infer<typeof AnkiReviewSchema>

export const AnkiExtractedDataSchema = z.object({
  notes: z.array(AnkiNoteSchema),
  cards: z.map(z.number(), z.array(AnkiCardSchema)), // keyed by note ID
  reviews: z.map(z.number(), z.array(AnkiReviewSchema)), // keyed by card ID
  fieldCount: z.number().int().positive(),
  totalCards: z.number().int().nonnegative(),
  skippedCards: z.number().int().nonnegative(), // no reviews (reps = 0)
})
export type AnkiExtractedData = z.infer<typeof AnkiExtractedDataSchema>

export const FieldMappingSchema = z.object({
  wordFieldIndex: z.number().int().nonnegative(),
  englishFieldIndex: z.number().int().nonnegative(),
})
export type FieldMapping = z.infer<typeof FieldMappingSchema>
