// Vocabulary item validation schemas and utilities
import { z } from "zod"
import { RequiredStringSchema, NonEmptyStringArraySchema } from "./common"
import type { VocabItemFormData } from "../types/vocabulary"

// Base vocabulary item validation schema
export const BaseVocabItemSchema = z.object({
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

// Partial validation schema for form input (allows incomplete data)
export const PartialVocabItemSchema = VocabItemFormDataSchema.partial()

// Type inference
export type ValidatedVocabItemFormData = z.infer<typeof VocabItemFormDataSchema>
export type PartialVocabItemFormData = z.infer<typeof PartialVocabItemSchema>

// Validation context for vocab items
export interface VocabItemValidationContext {
  itemId: number
  isFirstItem: boolean
  hasAttemptedSubmit: boolean
  formData: VocabItemFormData
}

// Validation state for form fields
export interface FieldValidationState {
  isValid: boolean
  error?: string
  isRequired?: boolean
  showError?: boolean
}

// Helper to validate minimal requirements for a vocab item
export function validateVocabItemMinimal(formData: VocabItemFormData): boolean {
  return (
    formData.word.trim().length > 0 &&
    formData.english.some((meaning) => meaning.trim().length > 0)
  )
}

// Validation for a collection of vocab items
export function validateVocabItemCollection(
  items: Record<string, VocabItemFormData>,
): { isValid: boolean; validCount: number; errors: Record<string, string[]> } {
  const errors: Record<string, string[]> = {}
  let validCount = 0

  for (const [itemId, formData] of Object.entries(items)) {
    if (validateVocabItemMinimal(formData)) {
      validCount++

      const result = VocabItemFormDataSchema.safeParse(formData)
      if (!result.success) {
        errors[itemId] = result.error.issues.map((issue) => issue.message)
      }
    }
  }

  return {
    isValid: validCount >= 1 && Object.keys(errors).length === 0,
    validCount,
    errors,
  }
}
