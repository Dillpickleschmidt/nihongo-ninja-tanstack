import { createMemo } from "solid-js"
import { DeckMetadataSchema, DeckNameValidationSchema } from "../../validation"
import type { DeckCreationStore } from "../types/deck-creation-types"

interface UseDeckValidationProps {
  store: () => DeckCreationStore
  existingDecks: UserDeck[]
}

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
