import type { VocabItemFormData } from '@/features/vocab-page/types/vocabulary'
import type { Infer } from 'convex/values'
import { practiceModeValidator } from 'convex/validators'

export type PracticeMode = Infer<typeof practiceModeValidator>

// Store state structure
export interface DeckCreationStore {
  deck: {
    name: string
    description: string
    selectedFolderId: string
    selectedFolderName: string
    allowedPracticeModes: PracticeMode[]
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
  // Original data for edit mode comparison
  original: {
    deckId?: string
    name: string
    description: string
    folderId: string
    folderName: string
  } | null
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
