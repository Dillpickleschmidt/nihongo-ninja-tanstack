import { createMemo } from 'solid-js'
import {
  DeckMetadataSchema,
  validateDeckNameUnique,
} from '@/features/vocab-page/validation/deck-folder-validation'
import { VocabItemFieldValidationSchema } from '@/features/vocab-page/validation/vocabulary-validation'
import type {
  DeckCreationStore,
  VocabItemValidationContext,
  FieldValidationState,
} from '../types/deck-creation-types'
import type { Deck } from '@/features/vocab-page/context/VocabContext'

interface UseDeckValidationProps {
  store: () => DeckCreationStore
  existingDecks: Deck[]
}

export function useDeckValidation(props: UseDeckValidationProps) {
  const deckMetadataValidation = createMemo(() => {
    const store = props.store()
    const result = DeckMetadataSchema.safeParse({
      deckName: store.deck.name,
      deckDescription: store.deck.description,
      folderId: store.deck.selectedFolderId,
    })
    return {
      isValid: result.success,
      errors: result.success
        ? []
        : result.error.issues.map((issue) => ({
          field: issue.path.join('.'),
          message: issue.message,
        })),
    }
  })

  const deckNameValidation = createMemo(() => {
    const store = props.store()
    const name = store.deck.name

    // Check format first
    if (!name.trim()) {
      return { isValid: false, error: 'Name is required' }
    }

    // Check uniqueness
    return validateDeckNameUnique(
      name,
      props.existingDecks,
      store.original?.deckId // Exclude current deck when editing
    )
  })

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

export function useVocabItemValidation(
  context: () => VocabItemValidationContext
) {
  const wordValidation = createMemo((): FieldValidationState => {
    const ctx = context()
    const word = ctx.formData.word.trim()

    const isValid = word.length > 0
    const isRequired = true

    return {
      isValid,
      error: !isValid ? 'Word is required' : undefined,
      isRequired,
      showError: false, // Let component decide when to show
    }
  })

  const englishValidation = createMemo((): FieldValidationState => {
    const ctx = context()
    const englishMeanings = ctx.formData.english

    const hasValidMeaning = englishMeanings.some(
      (meaning) => meaning.trim().length > 0
    )
    const isRequired = true

    return {
      isValid: hasValidMeaning,
      error: !hasValidMeaning
        ? 'At least one English meaning is required'
        : undefined,
      isRequired,
      showError: false, // Let component decide when to show
    }
  })

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
          field: `item-${ctx.itemId}-${issue.path.join('.')}`,
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
