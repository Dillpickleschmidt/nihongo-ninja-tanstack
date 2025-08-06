import { DeckCreationSchema } from "../schemas/deck-schemas"
import type { DeckCreationStore, ValidationResult } from "../types/deck-creation-types"

// Validate the entire deck creation form
export function validateDeckCreation(store: DeckCreationStore): ValidationResult {
  // Convert Map to plain object for Zod validation
  const formData = {
    deck: store.deck,
    vocabItems: Object.fromEntries(
      Array.from(store.vocabItems.formData.entries()).map(([id, data]) => [
        id.toString(),
        data
      ])
    )
  }

  const result = DeckCreationSchema.safeParse(formData)
  
  if (result.success) {
    return {
      isValid: true,
      errors: []
    }
  }

  return {
    isValid: false,
    errors: result.error.issues.map(issue => ({
      field: issue.path.join('.'),
      message: issue.message
    }))
  }
}

// Helper to get error message for a specific field
export function getFieldError(errors: Record<string, string[]>, fieldPath: string): string | undefined {
  return errors[fieldPath]?.[0]
}

// Helper to check if a field has errors
export function hasFieldError(errors: Record<string, string[]>, fieldPath: string): boolean {
  return Boolean(errors[fieldPath]?.length)
}

// Helper to group validation errors by item ID
export function groupErrorsByItem(errors: ValidationResult["errors"]): Record<number, string[]> {
  const grouped: Record<number, string[]> = {}
  
  errors.forEach(error => {
    if (error.itemId !== undefined) {
      if (!grouped[error.itemId]) {
        grouped[error.itemId] = []
      }
      grouped[error.itemId].push(error.message)
    }
  })
  
  return grouped
}

// Helper to create error message for required fields
export function createRequiredFieldError(fieldName: string, isFirstCard?: boolean): string {
  const suffix = isFirstCard ? " (preview)" : ""
  return `${fieldName} is required${suffix}`
}