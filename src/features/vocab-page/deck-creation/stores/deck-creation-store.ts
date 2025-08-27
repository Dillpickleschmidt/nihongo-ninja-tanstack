import { createStore } from "solid-js/store"
import type { DeckCreationStore } from "../types/deck-creation-types"
import {
  createEmptyVocabItemFormData,
  vocabularyItemToFormData,
  type VocabItemFormData,
  type VocabularyItem,
} from "../../types/vocabulary-types"

// Optional initial data for editing existing decks
export interface DeckCreationInitialData {
  deckId?: number
  name?: string
  description?: string
  folderId?: string
  folderName?: string
  vocabItems?: VocabularyItem[]
  allowedPracticeModes?: PracticeModeEnum[]
}

// Create initial store state
const createInitialState = (
  initialData?: DeckCreationInitialData,
): DeckCreationStore => {
  // Store original values for comparison in edit mode
  const originalData = initialData
    ? {
        deckId: initialData.deckId,
        name: initialData.name || "",
        description: initialData.description || "",
        folderId: initialData.folderId || "root",
        folderName: initialData.folderName || "Root",
      }
    : null

  // If we have initial vocab items, convert them to form data
  let vocabFormData: Map<number, VocabItemFormData>
  let activeIds: number[]
  let nextId: number

  if (initialData?.vocabItems && initialData.vocabItems.length > 0) {
    // Convert vocabulary items to form data
    vocabFormData = new Map()
    activeIds = []

    initialData.vocabItems.forEach((item, index) => {
      const formData = vocabularyItemToFormData(item)
      vocabFormData.set(index, formData)
      activeIds.push(index)
    })

    nextId = initialData.vocabItems.length
  } else {
    // Default: start with 2 empty items
    vocabFormData = new Map([
      [0, createEmptyVocabItemFormData()],
      [1, createEmptyVocabItemFormData()],
    ])
    activeIds = [0, 1]
    nextId = 2
  }

  return {
    deck: {
      name: initialData?.name || "",
      description: initialData?.description || "",
      selectedFolderId: initialData?.folderId || "root",
      selectedFolderName: initialData?.folderName || "Root",
      allowedPracticeModes: initialData?.allowedPracticeModes || [
        "meanings",
        "spellings",
      ],
    },
    vocabItems: {
      nextId,
      activeIds,
      formData: vocabFormData,
    },
    validation: {
      errors: {},
      hasAttemptedSubmit: false,
      isFormValid: false,
    },
    ui: {
      currentTab: "items",
    },
    original: originalData,
  }
}

export function createDeckCreationStore(initialData?: DeckCreationInitialData) {
  const [store, setStore] = createStore(createInitialState(initialData))

  const actions = {
    // Deck metadata actions
    updateDeckName: (name: string) => {
      setStore("deck", "name", name)
    },

    updateDeckDescription: (description: string) => {
      setStore("deck", "description", description)
    },

    updateDeckFolder: (folderId: string, folderName: string) => {
      setStore("deck", "selectedFolderId", folderId)
      setStore("deck", "selectedFolderName", folderName)
    },

    updateAllowedPracticeModes: (modes: PracticeModeEnum[]) => {
      setStore("deck", "allowedPracticeModes", modes)
    },

    // Vocab items actions
    addVocabItem: () => {
      const newId = store.vocabItems.nextId
      setStore("vocabItems", "activeIds", (prev) => [...prev, newId])
      setStore("vocabItems", "formData", (prev) =>
        new Map(prev).set(newId, createEmptyVocabItemFormData()),
      )
      setStore("vocabItems", "nextId", (prev) => prev + 1)
    },

    removeVocabItem: (id: number) => {
      setStore("vocabItems", "activeIds", (prev) =>
        prev.filter((itemId) => itemId !== id),
      )
      setStore("vocabItems", "formData", (prev) => {
        const newMap = new Map(prev)
        newMap.delete(id)
        return newMap
      })
    },

    updateVocabItemFormData: (id: number, formData: VocabItemFormData) => {
      setStore("vocabItems", "formData", (prev) =>
        new Map(prev).set(id, formData),
      )
    },

    // Validation actions
    setValidationErrors: (errors: Record<string, string[]>) => {
      setStore("validation", "errors", errors)
    },

    clearValidationErrors: () => {
      setStore("validation", "errors", {})
    },

    setHasAttemptedSubmit: (attempted: boolean) => {
      setStore("validation", "hasAttemptedSubmit", attempted)
    },

    setFormValid: (isValid: boolean) => {
      setStore("validation", "isFormValid", isValid)
    },

    // UI actions
    setCurrentTab: (tab: string) => {
      setStore("ui", "currentTab", tab)
    },

    // Reset action
    resetStore: () => {
      setStore(createInitialState())
    },

    // Helper to check if we're in edit mode
    isEditMode: () => {
      return !!initialData
    },
  }

  return {
    store,
    actions,
  }
}

export type DeckCreationStoreActions = ReturnType<
  typeof createDeckCreationStore
>["actions"]
