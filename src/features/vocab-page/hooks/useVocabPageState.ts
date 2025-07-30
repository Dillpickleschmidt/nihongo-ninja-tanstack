// features/vocab-page/hooks/useVocabPageState.ts
import { createSignal, createEffect } from "solid-js"
import { useNavigate } from "@tanstack/solid-router"
import { DEFAULT_EXPANDED_TEXTBOOKS, NEWLY_IMPORTED_TIMEOUT } from "../types"
import type {
  UserDeck,
  ImportRequest,
  VocabBuiltInDeck,
  VocabTextbook,
} from "../types"
import type { TextbookIDEnum } from "@/data/types"

export function useVocabPageState(
  importRequest?: ImportRequest | null,
  initialTextbooks?: [TextbookIDEnum, VocabTextbook][],
) {
  const navigate = useNavigate()
  const [leftPanelOpen, setLeftPanelOpen] = createSignal(true)
  const [rightPanelOpen, setRightPanelOpen] = createSignal(true)

  // Destructure import request
  const pendingImport = importRequest?.deck
  const expansionData = importRequest?.location

  // Initialize expansion state with auto-expansion for imports
  const initialExpandedTextbooks = new Set(DEFAULT_EXPANDED_TEXTBOOKS)
  const initialExpandedChapters = new Set<string>()

  if (expansionData) {
    initialExpandedTextbooks.add(expansionData.textbookId)
    initialExpandedChapters.add(expansionData.chapterId)
  }

  const [expandedTextbooks, setExpandedTextbooks] = createSignal<Set<string>>(
    initialExpandedTextbooks,
  )
  const [expandedChapters, setExpandedChapters] = createSignal<Set<string>>(
    initialExpandedChapters,
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
    createSignal<VocabBuiltInDeck | null>(null)

  // Use pre-loaded textbooks from server
  const [textbooks, setTextbooks] = createSignal<
    [TextbookIDEnum, VocabTextbook][]
  >(initialTextbooks || [])

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

  const updateDeckImportStatus = (deckId: string, isImported: boolean) => {
    setTextbooks((prev) =>
      prev.map(([textbookId, textbook]) => [
        textbookId,
        {
          ...textbook,
          chapters: textbook.chapters.map((chapter) => ({
            ...chapter,
            decks: chapter.decks.map((deck) =>
              deck.id === deckId ? { ...deck, isImported } : deck,
            ),
          })),
        },
      ]),
    )
  }

  const generateDeckTitle = (builtInDeck: VocabBuiltInDeck): string => {
    for (const [, textbook] of textbooks()) {
      for (const chapter of textbook.chapters) {
        const deck = chapter.decks.find((d) => d.id === builtInDeck.id)
        if (deck) {
          return `${textbook.short_name || textbook.name} Ch.${chapter.number} ${deck.title}`
        }
      }
    }
    return builtInDeck.title
  }

  const importDeck = (builtInDeck: VocabBuiltInDeck) => {
    const fullTitle = generateDeckTitle(builtInDeck)

    updateDeckImportStatus(builtInDeck.id, true)

    const newUserDeck: UserDeck = {
      id: builtInDeck.id,
      name: fullTitle,
      importedAt: new Date(),
      source: "textbook",
    }

    setUserDecks((prev) => [newUserDeck, ...prev])
    setSelectedUserDeck(newUserDeck)

    // Mark as newly imported
    setNewlyImportedDecks((prev) => new Set([...prev, newUserDeck.id]))

    // Remove from newly imported after timeout
    setTimeout(() => {
      setNewlyImportedDecks((prev) => {
        const newSet = new Set(prev)
        newSet.delete(newUserDeck.id)
        return newSet
      })
    }, NEWLY_IMPORTED_TIMEOUT)
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
      // Ensure left panel is open to show the expanded hierarchy
      setLeftPanelOpen(true)
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
