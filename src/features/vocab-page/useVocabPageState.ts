import { createSignal, createEffect } from "solid-js"
import { useNavigate } from "@tanstack/solid-router"
import type { BuiltInDeck, UserDeck, VocabPageState } from "./types"
import { getVocabPracticeModulesFromTextbooks } from "@/data/utils/core"

export function useVocabPageState(pendingImport?: BuiltInDeck | null) {
  const navigate = useNavigate()
  const [leftPanelOpen, setLeftPanelOpen] = createSignal(true)
  const [rightPanelOpen, setRightPanelOpen] = createSignal(true)
  const [expandedTextbooks, setExpandedTextbooks] = createSignal<Set<string>>(
    new Set(["genki_1"]),
  )
  const [expandedChapters, setExpandedChapters] = createSignal<Set<string>>(
    new Set(),
  )
  const [userDecks, setUserDecks] = createSignal<UserDeck[]>([])
  const [newlyImportedDecks, setNewlyImportedDecks] = createSignal<Set<string>>(
    new Set(),
  )
  const [selectedUserDeck, setSelectedUserDeck] = createSignal<UserDeck | null>(
    null,
  )

  // Import confirmation modal state
  const [showImportModal, setShowImportModal] = createSignal(false)
  const [pendingImportDeck, setPendingImportDeck] =
    createSignal<BuiltInDeck | null>(null)

  // Create reactive textbooks with import state
  const [textbooks, setTextbooks] = createSignal(
    getVocabPracticeModulesFromTextbooks(),
  )

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

  const importDeck = (builtInDeck: BuiltInDeck) => {
    // Mark deck as imported in textbooks
    setTextbooks((prev) =>
      prev.map((textbook) => ({
        ...textbook,
        chapters: textbook.chapters.map((chapter) => ({
          ...chapter,
          parts: chapter.parts.map((part) =>
            part.id === builtInDeck.id ? { ...part, isImported: true } : part,
          ),
        })),
      })),
    )

    // Add to user decks
    const newUserDeck: UserDeck = {
      id: builtInDeck.id,
      name: builtInDeck.name,
      importedAt: new Date(),
      source: "textbook",
    }

    setUserDecks((prev) => [newUserDeck, ...prev])

    // Auto-select the newly imported deck
    setSelectedUserDeck(newUserDeck)

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

  const selectUserDeck = (deck: UserDeck) => {
    setSelectedUserDeck(deck)
  }

  const deselectUserDeck = () => {
    setSelectedUserDeck(null)
  }

  // Import modal functions
  const handleImportConfirm = () => {
    const deck = pendingImportDeck()
    if (deck) {
      importDeck(deck)
    }
    setShowImportModal(false)
    setPendingImportDeck(null)
  }

  const handleImportCancel = () => {
    setShowImportModal(false)
    setPendingImportDeck(null)
  }

  // Handle pending import from route loader
  createEffect(() => {
    if (pendingImport) {
      setPendingImportDeck(pendingImport)
      setShowImportModal(true)
      // Clean URL
      navigate({ to: "/vocab", search: { import: undefined }, replace: true })
    }
  })

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
    newlyImportedDecks,
    selectedUserDeck,

    // Actions
    toggleTextbook,
    toggleChapter,
    importDeck,
    selectUserDeck,
    deselectUserDeck,

    // Import modal state and actions
    showImportModal,
    pendingImportDeck,
    handleImportConfirm,
    handleImportCancel,
  }
}
