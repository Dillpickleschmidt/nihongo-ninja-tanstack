import { createMemo } from "solid-js"
import { VocabItemFieldValidationSchema } from "../../validation"
import type {
  VocabItemValidationContext,
  FieldValidationState,
} from "../types/deck-creation-types"

export function useVocabItemValidation(
  context: () => VocabItemValidationContext,
) {
  // Validate word field
  const wordValidation = createMemo((): FieldValidationState => {
    const ctx = context()
    const word = ctx.formData.word.trim()

    const isValid = word.length > 0
    const isRequired = true

    return {
      isValid,
      error: !isValid ? "Word is required" : undefined,
      isRequired,
      showError: false, // Let component decide when to show
    }
  })

  // Validate english meanings field
  const englishValidation = createMemo((): FieldValidationState => {
    const ctx = context()
    const englishMeanings = ctx.formData.english

    const hasValidMeaning = englishMeanings.some(
      (meaning) => meaning.trim().length > 0,
    )
    const isRequired = true

    return {
      isValid: hasValidMeaning,
      error: !hasValidMeaning
        ? "At least one English meaning is required"
        : undefined,
      isRequired,
      showError: false, // Let component decide when to show
    }
  })

  // Overall item validation
  const itemValidation = createMemo(() => {
    const ctx = context()
    const result = VocabItemFieldValidationSchema.safeParse({
      word: ctx.formData.word,
      english: ctx.formData.english,
    })

    return {
      isValid: result.success,
      errors: result.success
        ? []
        : result.error.issues.map((issue) => ({
            field: `item-${ctx.itemId}-${issue.path.join(".")}`,
            message: issue.message,
            itemId: ctx.itemId,
          })),
    }
  })

  return {
    wordValidation,
    englishValidation,
    itemValidation,
  }
}
