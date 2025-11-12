import { createMemo } from "solid-js"
import {
  DeckMetadataSchema,
  DeckNameValidationSchema,
  VocabItemFieldValidationSchema,
} from "@/features/vocab-page/validation"
import type {
  DeckCreationStore,
  VocabItemValidationContext,
  FieldValidationState,
} from "../types/deck-creation-types"

// ============================================================================
// Deck Metadata Validation
// ============================================================================

interface UseDeckValidationProps {
  store: () => DeckCreationStore
  existingDecks: UserDeck[]
}

/**
 * Hook for validating deck metadata (name, location, etc.)
 * Used in the deck details form
 */
export function useDeckValidation(props: UseDeckValidationProps) {
  // Validate deck metadata
  const deckMetadataValidation = createMemo(() => {
    const store = props.store()
    const result = DeckMetadataSchema.safeParse(store.deck)
    return {
      isValid: result.success,
      errors: result.success
        ? []
        : result.error.issues.map((issue) => ({
            field: issue.path.join("."),
            message: issue.message,
          })),
    }
  })

  // Validate deck name uniqueness
  const deckNameValidation = createMemo(() => {
    const store = props.store()
    const validationData = {
      name: store.deck.name,
      folderId: store.deck.selectedFolderId,
      existingDecks: props.existingDecks,
      excludeId: store.original?.deckId, // Exclude current deck when editing
    }

    const result = DeckNameValidationSchema.safeParse(validationData)
    return {
      isValid: result.success,
      error: result.success ? undefined : result.error.issues[0]?.message,
    }
  })

  // Check if deck name field should show required indicator
  const shouldShowNameRequired = createMemo(() => {
    const store = props.store()
    const hasAttemptedSubmit = store.validation.hasAttemptedSubmit
    const nameIsEmpty = store.deck.name.trim().length === 0

    return hasAttemptedSubmit && nameIsEmpty
  })

  return {
    deckMetadataValidation,
    deckNameValidation,
    shouldShowNameRequired,
  }
}

// ============================================================================
// Vocab Item Field Validation
// ============================================================================

/**
 * Hook for validating individual vocabulary item fields (word, english)
 * Used in the vocab item editor form
 */
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
