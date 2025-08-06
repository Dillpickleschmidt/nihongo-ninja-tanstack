import { z } from "zod"

// Based on the existing VocabItemFormData interface and VocabularyItem type
export const VocabItemFormDataSchema = z.object({
  word: z.string().min(1, "Word is required"),
  furigana: z.string(),
  english: z
    .array(z.string())
    .min(1, "At least one English meaning is required")
    .refine(
      (arr) => arr.some((meaning) => meaning.trim().length > 0),
      "At least one English meaning must not be empty",
    ),
  partOfSpeech: z.string(),
  notes: z.array(z.string()).default([]),
  particles: z
    .array(
      z.object({
        particle: z.string(),
        label: z.string(),
      }),
    )
    .default([]),
  examples: z
    .array(
      z.object({
        japanese: z.string(),
        english: z.string(),
      }),
    )
    .default([]),
  readingMnemonics: z.array(z.string()).default([]),
  kanjiMnemonics: z.array(z.string()).default([]),
})

export type VocabItemFormData = z.infer<typeof VocabItemFormDataSchema>

// Validation for individual vocab item fields
export const VocabItemFieldValidationSchema = z.object({
  word: z.string().min(1, "Word is required"),
  english: z
    .array(z.string())
    .min(1)
    .refine(
      (arr) => arr.some((meaning) => meaning.trim().length > 0),
      "At least one English meaning is required",
    ),
})

// Helper schemas for partial validation during form input
export const PartialVocabItemSchema = VocabItemFormDataSchema.partial()

export type PartialVocabItemFormData = z.infer<typeof PartialVocabItemSchema>

