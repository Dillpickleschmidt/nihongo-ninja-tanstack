import { createSignal, createMemo } from "solid-js"
import {
  DeckNameSchema,
  DescriptionSchema,
  validateDeckNameUnique,
} from "../validation/deck-folder-validation"
import { useVocab } from "../context/VocabContext"

/**
 * Hook for real-time deck form validation with error messages.
 * Validates name format, description length, and uniqueness.
 *
 * @param excludeDeckId - Optional deck ID to exclude from uniqueness check (for editing)
 */
export function useDeckFormValidation(excludeDeckId?: string) {
  const { decks } = useVocab()

  const [name, setName] = createSignal("")
  const [description, setDescription] = createSignal("")
  const [touched, setTouched] = createSignal({
    name: false,
    description: false,
  })

  const nameError = createMemo(() => {
    if (!touched().name) return undefined

    // Check format first
    const formatResult = DeckNameSchema.safeParse(name())
    if (!formatResult.success) {
      return formatResult.error.errors[0].message
    }

    // Check uniqueness
    const uniqueResult = validateDeckNameUnique(name(), decks(), excludeDeckId)
    if (!uniqueResult.isValid) {
      return uniqueResult.error
    }

    return undefined
  })

  const descriptionError = createMemo(() => {
    if (!touched().description) return undefined
    const result = DescriptionSchema.safeParse(description())
    return result.success ? undefined : result.error.errors[0].message
  })

  const isValid = createMemo(
    () => !nameError() && !descriptionError() && name().length > 0,
  )

  const markTouched = (field: "name" | "description") => {
    setTouched((prev) => ({ ...prev, [field]: true }))
  }

  const reset = () => {
    setName("")
    setDescription("")
    setTouched({ name: false, description: false })
  }

  return {
    // Field values
    name,
    setName,
    description,
    setDescription,

    // Touched state
    touched,
    markTouched,

    // Errors
    nameError,
    descriptionError,

    // Form state
    isValid,
    reset,
  }
}
