import { createSignal } from "solid-js"
import type { DeckPart, UserDeck, VocabPageState } from "./types"
import { getVocabPracticeModulesFromTextbooks } from "@/data/utils/core"

export function useVocabPageState() {
  const [leftPanelOpen, setLeftPanelOpen] = createSignal(true)
  const [rightPanelOpen, setRightPanelOpen] = createSignal(true)
  const [expandedTextbooks, setExpandedTextbooks] = createSignal<Set<string>>(
    new Set(["genki_1"]),
  )
  const [expandedChapters, setExpandedChapters] = createSignal<Set<string>>(
    new Set(),
  )
  const [userDecks, setUserDecks] = createSignal<UserDeck[]>([])
  const [selectedDeck, setSelectedDeck] = createSignal<
    DeckPart | UserDeck | null
  >(null)
  const [modalOpen, setModalOpen] = createSignal(false)
  const [newlyImportedDecks, setNewlyImportedDecks] = createSignal<Set<string>>(
    new Set(),
  )
  const [selectedUserDeck, setSelectedUserDeck] = createSignal<UserDeck | null>(
    null,
  )

  // Create reactive textbooks with import state
  const [textbooks, setTextbooks] = createSignal(getVocabPracticeModulesFromTextbooks())

  const toggleTextbook = (textbookId: string) => {
    setExpandedTextbooks((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(textbookId)) {
        newSet.delete(textbookId)
      } else {
        newSet.add(textbookId)
      }
      return newSet
    })
  }

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(chapterId)) {
        newSet.delete(chapterId)
      } else {
        newSet.add(chapterId)
      }
      return newSet
    })
  }

  const importDeck = (deckPart: DeckPart) => {
    // Mark deck as imported in textbooks
    setTextbooks((prev) =>
      prev.map((textbook) => ({
        ...textbook,
        chapters: textbook.chapters.map((chapter) => ({
          ...chapter,
          parts: chapter.parts.map((part) =>
            part.id === deckPart.id ? { ...part, isImported: true } : part,
          ),
        })),
      })),
    )

    // Add to user decks
    const newUserDeck: UserDeck = {
      id: `user-${deckPart.id}`,
      name: deckPart.name,
      originalDeckId: deckPart.id,
      importedAt: new Date(),
    }

    setUserDecks((prev) => [...prev, newUserDeck])

    // Mark as newly imported
    setNewlyImportedDecks((prev) => new Set([...prev, newUserDeck.id]))

    // Remove from newly imported after 2 seconds
    setTimeout(() => {
      setNewlyImportedDecks((prev) => {
        const newSet = new Set(prev)
        newSet.delete(newUserDeck.id)
        return newSet
      })
    }, 2500)
  }

  const openDeckModal = (deck: DeckPart | UserDeck) => {
    setSelectedDeck(deck)
    setModalOpen(true)
  }

  const closeDeckModal = () => {
    setSelectedDeck(null)
    setModalOpen(false)
  }

  const selectUserDeck = (deck: UserDeck) => {
    setSelectedUserDeck(deck)
  }

  const deselectUserDeck = () => {
    setSelectedUserDeck(null)
  }

  return {
    // Panel state
    leftPanelOpen,
    setLeftPanelOpen,
    rightPanelOpen,
    setRightPanelOpen,

    // Content state
    textbooks,
    expandedTextbooks,
    expandedChapters,
    userDecks,
    selectedDeck,
    modalOpen,
    newlyImportedDecks,
    selectedUserDeck,

    // Actions
    toggleTextbook,
    toggleChapter,
    importDeck,
    openDeckModal,
    closeDeckModal,
    selectUserDeck,
    deselectUserDeck,
  }
}
