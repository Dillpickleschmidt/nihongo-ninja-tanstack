// Vocabulary item validation schemas and utilities
import { z } from "zod"
import { RequiredStringSchema, NonEmptyStringArraySchema } from "./common"
import type { VocabItemFormData } from "../types/vocabulary"

// Base vocabulary item validation schema (internal only)
const BaseVocabItemSchema = z.object({
  word: RequiredStringSchema.min(1, "Word is required"),
  furigana: z.string(),
  english: NonEmptyStringArraySchema.refine(
    (arr) => arr.some((meaning) => meaning.trim().length > 0),
    "At least one English meaning is required",
  ),
  isVerb: z.boolean(),
})

// Extended vocabulary item form data schema
export const VocabItemFormDataSchema = BaseVocabItemSchema.extend({
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

// Validation for individual vocab item fields (minimal requirements)
export const VocabItemFieldValidationSchema = z.object({
  word: RequiredStringSchema,
  english: NonEmptyStringArraySchema.refine(
    (arr) => arr.some((meaning) => meaning.trim().length > 0),
    "At least one English meaning is required",
  ),
})

// Helper to validate minimal requirements for a vocab item
export function validateVocabItemMinimal(formData: VocabItemFormData): boolean {
  return (
    formData.word.trim().length > 0 &&
    formData.english.some((meaning) => meaning.trim().length > 0)
  )
}
