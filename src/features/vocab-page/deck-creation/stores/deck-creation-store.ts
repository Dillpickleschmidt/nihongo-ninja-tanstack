import { createStore } from "solid-js/store"
import type { DeckCreationStore } from "../types/deck-creation-types"
import type { VocabItemFormData } from "../schemas/vocab-item-schemas"

// Helper function to create empty vocab item form data
const createEmptyFormData = (): VocabItemFormData => ({
  word: "",
  furigana: "",
  english: [""],
  partOfSpeech: "",
  chapter: "1",
  notes: [],
  particles: [],
  examples: [],
  readingMnemonics: [],
  kanjiMnemonics: []
})

// Create initial store state
const createInitialState = (): DeckCreationStore => ({
  deck: {
    name: "",
    description: "",
    selectedFolderId: "root",
    selectedFolderName: "Root"
  },
  vocabItems: {
    nextId: 2, // Start with 2 because we initialize with items 0 and 1
    activeIds: [0, 1], // Start with 2 cards as requested
    formData: new Map([
      [0, createEmptyFormData()],
      [1, createEmptyFormData()]
    ])
  },
  validation: {
    errors: {},
    hasAttemptedSubmit: false,
    isFormValid: false
  },
  ui: {
    currentTab: "items"
  }
})

export function createDeckCreationStore() {
  const [store, setStore] = createStore(createInitialState())

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

    // Vocab items actions
    addVocabItem: () => {
      const newId = store.vocabItems.nextId
      setStore("vocabItems", "activeIds", prev => [...prev, newId])
      setStore("vocabItems", "formData", prev => new Map(prev).set(newId, createEmptyFormData()))
      setStore("vocabItems", "nextId", prev => prev + 1)
    },

    removeVocabItem: (id: number) => {
      setStore("vocabItems", "activeIds", prev => prev.filter(itemId => itemId !== id))
      setStore("vocabItems", "formData", prev => {
        const newMap = new Map(prev)
        newMap.delete(id)
        return newMap
      })
    },

    updateVocabItemFormData: (id: number, formData: VocabItemFormData) => {
      setStore("vocabItems", "formData", prev => new Map(prev).set(id, formData))
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
    }
  }

  return {
    store,
    actions
  }
}

export type DeckCreationStoreActions = ReturnType<typeof createDeckCreationStore>["actions"]