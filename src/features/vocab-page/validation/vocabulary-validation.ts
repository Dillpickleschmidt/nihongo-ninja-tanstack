// Vocabulary item validation schemas and utilities
import { z } from "zod"
import { RequiredStringSchema, NonEmptyStringArraySchema } from "./constants"

// Reusable English meanings schema
const EnglishMeaningsSchema = NonEmptyStringArraySchema.refine(
  (arr) => arr.some((meaning) => meaning.trim().length > 0),
  "At least one English meaning is required",
)

// Base vocabulary item validation schema (internal only)
const BaseVocabItemSchema = z.object({
  word: RequiredStringSchema,
  furigana: z.string(),
  english: EnglishMeaningsSchema,
  isVerb: z.boolean(),
})

// Extended vocabulary item form data schema
const VocabItemFormDataSchema = BaseVocabItemSchema.extend({
  notes: z.array(z.string()).default([]),
  particles: z
    .array(
      z.object({
        particle: z.string(),
        label: z.string().optional(),
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

// Infer type from schema
export type VocabItemFormData = z.infer<typeof VocabItemFormDataSchema>

// Validation for individual vocab item fields (minimal requirements)
export const VocabItemFieldValidationSchema = z.object({
  word: RequiredStringSchema,
  english: EnglishMeaningsSchema,
})

// Helper to validate minimal requirements for a vocab item
export function validateVocabItemMinimal(formData: VocabItemFormData): boolean {
  return (
    formData.word.trim().length > 0 &&
    formData.english.some((meaning) => meaning.trim().length > 0)
  )
}
