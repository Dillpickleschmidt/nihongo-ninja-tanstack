import type { VocabItemFormData } from "../../types/vocabulary-types"

// Store state structure
export interface DeckCreationStore {
  deck: {
    name: string
    description: string
    selectedFolderId: string
    selectedFolderName: string
  }
  vocabItems: {
    nextId: number
    activeIds: number[]
    formData: Map<number, VocabItemFormData>
  }
  validation: {
    errors: Record<string, string[]>
    hasAttemptedSubmit: boolean
    isFormValid: boolean
  }
  ui: {
    currentTab: string
  }
}

// Form field validation states
export interface FieldValidationState {
  isValid: boolean
  error?: string
  isRequired?: boolean
  showError?: boolean
}

// Vocab item validation context
export interface VocabItemValidationContext {
  itemId: number
  isFirstItem: boolean
  hasAttemptedSubmit: boolean
  formData: VocabItemFormData
}
