// features/vocab-page/hooks/useVocabPageState.ts
import { createSignal, createEffect } from "solid-js"
import { useNavigate } from "@tanstack/solid-router"
import { DEFAULT_EXPANDED_TEXTBOOKS, NEWLY_IMPORTED_TIMEOUT } from "../types"
import type { ImportRequest, VocabBuiltInDeck, VocabTextbook } from "../types"
import type { TextbookIDEnum } from "@/data/types"
import { useFolderNavigation } from "./useFolderNavigation"
import { importDeckWithFolders } from "../logic/deck-import-logic"

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
  const [folders, setFolders] = createSignal<DeckFolder[]>([])
  const [newlyImportedDecks, setNewlyImportedDecks] = createSignal<Set<string>>(
    new Set(),
  )
  const [selectedUserDeck, setSelectedUserDeck] = createSignal<UserDeck | null>(
    null,
  )

  // Folder navigation
  const folderNavigation = useFolderNavigation(folders, userDecks)

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
    updateDeckImportStatus(builtInDeck.id, true)

    // Use smart import logic with folder creation
    const result = importDeckWithFolders(
      folders(),
      userDecks(),
      builtInDeck,
      textbooks(),
      "temp-user-id", // TODO: Get actual user ID
    )

    // Update state with results
    setFolders(result.folders)
    setUserDecks(result.decks)
    setSelectedUserDeck(result.importedDeck)

    // Navigate to the folder containing the new deck
    if (result.targetFolderId !== null) {
      folderNavigation.navigateToFolder(result.targetFolderId)
    }

    // Mark as newly imported
    setNewlyImportedDecks(
      (prev) => new Set([...prev, result.importedDeck.deck_id.toString()]),
    )

    // Remove from newly imported after timeout
    setTimeout(() => {
      setNewlyImportedDecks((prev) => {
        const newSet = new Set(prev)
        newSet.delete(result.importedDeck.deck_id.toString())
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
    folders,
    newlyImportedDecks,
    selectedUserDeck,

    // Folder navigation
    folderNavigation,

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
