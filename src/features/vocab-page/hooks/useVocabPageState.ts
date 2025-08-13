// features/vocab-page/hooks/useVocabPageState.ts
import { createSignal, createEffect, createResource } from "solid-js"
import { type DeferredPromise } from "@tanstack/solid-router"
import { DEFAULT_EXPANDED_TEXTBOOKS, NEWLY_IMPORTED_TIMEOUT } from "../types"
import type { ImportRequest, VocabBuiltInDeck, VocabTextbook } from "../types"
import type { TextbookIDEnum } from "@/data/types"
import type { FoldersAndDecksData } from "@/features/supabase/db/folder-operations"
import type { User } from "@supabase/supabase-js"
import {
  buildBreadcrumbPath,
  getFolderContents,
  getParentFolderId,
} from "../logic/folder-hierarchy"
import { getUserFoldersAndDecks } from "@/features/supabase/db/folder-operations"
import { importBuiltInDeckServerFn } from "@/features/supabase/db/deck-operations"
import {
  saveFoldersAndDecks,
  loadFoldersAndDecks,
} from "@/features/vocab-page/storage/sessionStorage"
import {
  importDeckWithFolders,
  isDeckAlreadyImported,
} from "@/features/vocab-page/logic/deck-import-logic"
import type { NavTabId } from "@/features/vocab-page/center-panel/CenterNavBar"
import { useDeckSelection } from "./useDeckSelection"

export function useVocabPageState(
  importRequest?: ImportRequest | null,
  initialTextbooks?: [TextbookIDEnum, VocabTextbook][],
  foldersAndDecksPromise?: DeferredPromise<FoldersAndDecksData>,
  user?: User | null,
) {
  // === SIGNALS ===
  // Panel state
  const [leftPanelOpen, setLeftPanelOpen] = createSignal(true)
  const [rightPanelOpen, setRightPanelOpen] = createSignal(true)

  // Center panel navigation state
  const [activeNavTab, setActiveNavTab] = createSignal<NavTabId>("vocab-cards")
  const [vocabCardsTabState, setVocabCardsTabState] =
    createSignal<UserDeck | null>(null)

  // Extract expansion data from import request for auto-expansion
  const expansionData = importRequest?.location
  const initialExpandedTextbooks = new Set(DEFAULT_EXPANDED_TEXTBOOKS)
  const initialExpandedChapters = new Set<string>()

  if (expansionData) {
    initialExpandedTextbooks.add(expansionData.textbookId)
    initialExpandedChapters.add(expansionData.chapterId)
  }

  // Expansion state
  const [expandedTextbooks, setExpandedTextbooks] = createSignal<Set<string>>(
    initialExpandedTextbooks,
  )
  const [expandedChapters, setExpandedChapters] = createSignal<Set<string>>(
    initialExpandedChapters,
  )

  // Folder/deck data (immediate UI updates)
  const initialLocalData = user
    ? { folders: [], decks: [] }
    : loadFoldersAndDecks()
  const [folderData, setFolderData] = createSignal<DeckFolder[]>(
    initialLocalData.folders,
  )
  const [deckData, setDeckData] = createSignal<UserDeck[]>(
    initialLocalData.decks,
  )
  const [newlyImportedDecks, setNewlyImportedDecks] = createSignal<Set<string>>(
    new Set(),
  )

  // Enhanced tab change handler
  const handleTabChange = (newTab: NavTabId) => {
    if (activeNavTab() === "vocab-cards" && newTab !== "vocab-cards") {
      // Leaving vocab-cards: save whatever the current state is
      setVocabCardsTabState(deckSelection.selectedUserDeck())
    }

    if (newTab === "vocab-cards") {
      // Entering vocab-cards: only restore saved state if nothing is currently selected
      if (
        vocabCardsTabState() &&
        !deckSelection.selectedUserDeck() &&
        !deckSelection.selectedBuiltInDeck()
      ) {
        deckSelection.handleUserDeckSelect(vocabCardsTabState()!)
      }
    } else {
      // On other tabs: always deselect
      deckSelection.handleDeselect()
    }

    setActiveNavTab(newTab)
  }

  // Deck selection hook
  const deckSelection = useDeckSelection(handleTabChange)

  // Folder navigation state (which folder user is viewing)
  const [currentViewFolderId, setCurrentViewFolderId] = createSignal<
    number | null
  >(null)

  // Database resource (background updates)
  const [foldersAndDecks, { refetch: refetchFoldersAndDecks }] = createResource(
    foldersAndDecksPromise,
    async (resolvedInitialData, { refetching }) => {
      if (refetching) {
        if (user?.id) {
          return getUserFoldersAndDecks(user.id)
        } else {
          return { folders: [], decks: [] }
        }
      } else {
        return resolvedInitialData || { folders: [], decks: [] }
      }
    },
  )

  // Use pre-loaded textbooks from server
  const [textbooks, setTextbooks] = createSignal<
    [TextbookIDEnum, VocabTextbook][]
  >(initialTextbooks || [])

  // === COMPUTED VALUES ===
  // Folder navigation computations
  const viewBreadcrumbPath = () =>
    buildBreadcrumbPath(folderData(), currentViewFolderId())
  const currentViewContent = () =>
    getFolderContents(folderData(), deckData(), currentViewFolderId())
  const canNavigateUp = () => currentViewFolderId() !== null

  // Computed textbooks with up-to-date import status derived from user decks
  const textbooksWithImportStatus = () => {
    const currentDecks = deckData()
    return textbooks().map(([textbookId, textbook]) => [
      textbookId,
      {
        ...textbook,
        chapters: textbook.chapters.map((chapter) => ({
          ...chapter,
          decks: chapter.decks.map((deck) => ({
            ...deck,
            isImported: isDeckAlreadyImported(currentDecks, deck.id),
          })),
        })),
      },
    ]) as [TextbookIDEnum, VocabTextbook][]
  }

  // === UI SYNC EFFECTS ===
  // Sync database resource data to local signals for signed-in users
  createEffect(() => {
    if (user) {
      const data = foldersAndDecks() as FoldersAndDecksData | undefined
      if (data) {
        // Always update local signals from database for signed-in users
        setFolderData(data.folders)
        setDeckData(data.decks)

        // Reset navigation state to avoid stale folder references
        // TODO: Could be smarter and try to preserve navigation if folder still exists
        setCurrentViewFolderId(null)
      }
    }
  })

  // Auto-sync local state to session storage for unsigned users
  createEffect(() => {
    if (!user) {
      const currentFolders = folderData()
      const currentDecks = deckData()
      if (currentFolders.length > 0 || currentDecks.length > 0) {
        saveFoldersAndDecks({
          folders: currentFolders,
          decks: currentDecks,
        })
      }
    }
  })

  // === HELPER FUNCTIONS ===
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

  // Folder navigation actions
  const navigateToParentView = () => {
    const parentId = getParentFolderId(folderData(), currentViewFolderId())
    setCurrentViewFolderId(parentId)
  }

  // Enhanced deck selection handlers
  const handleDeckSelect = (deck: UserDeck) => {
    // Navigate to the deck's folder if we're not already there
    if (deck.folder_id !== currentViewFolderId()) {
      setCurrentViewFolderId(deck.folder_id)
    }

    deckSelection.handleUserDeckSelect(deck)
    setVocabCardsTabState(deck) // Keep vocab-cards state in sync
  }

  const handleDeckDeselect = () => {
    deckSelection.handleDeselect()
    if (activeNavTab() === "vocab-cards") {
      setVocabCardsTabState(null) // Update vocab-cards state when explicitly deselecting
    }
  }

  // === UI SYNC LOGIC ===
  // Immediate local update with visual feedback
  const updateLocalStateOptimistically = (
    operation: string,
    builtInDeck: VocabBuiltInDeck,
  ) => {
    const currentFolders = folderData()
    const currentDecks = deckData()
    const userId = user?.id || "session-user"
    const deckId = builtInDeck.id

    // Apply local changes immediately
    const localResult = importDeckWithFolders(
      currentFolders,
      currentDecks,
      builtInDeck,
      textbooks(),
      userId,
    )

    setFolderData(localResult.folders)
    setDeckData(localResult.decks)
    deckSelection.handleUserDeckSelect(localResult.importedDeck)

    // Navigate immediately to the folder containing the new deck
    if (localResult.targetFolderId !== null) {
      setCurrentViewFolderId(localResult.targetFolderId)
    }

    // Mark as newly imported
    const importedDeckId = localResult.importedDeck.deck_id.toString()
    setNewlyImportedDecks((prev) => new Set([...prev, importedDeckId]))

    return { localResult, currentFolders, currentDecks }
  }

  // Background database sync with error handling
  const syncToDatabase = async (
    builtInDeck: VocabBuiltInDeck,
    fallbackData: { currentFolders: DeckFolder[]; currentDecks: UserDeck[] },
  ) => {
    const deckId = builtInDeck.id

    try {
      if (user) {
        await importBuiltInDeckServerFn({
          data: {
            builtInDeck,
            textbooks: textbooks(),
          },
        })
      } else {
        // For unsigned users: Save to session storage
        saveFoldersAndDecks({
          folders: folderData(),
          decks: deckData(),
        })
      }
    } catch (error) {
      console.error("Database sync failed:", error)

      // Revert local changes
      setFolderData(fallbackData.currentFolders)
      setDeckData(fallbackData.currentDecks)
      deckSelection.handleDeselect()
      setCurrentViewFolderId(null)

      alert("Failed to save deck to your account. Please try again.")
    }
  }

  // Combined operation (local + background sync)
  const importDeck = async (builtInDeck: VocabBuiltInDeck) => {
    const fallbackData = updateLocalStateOptimistically("import", builtInDeck)

    // Background sync (don't await)
    syncToDatabase(builtInDeck, fallbackData)

    // Remove from newly imported after timeout
    const importedDeckId =
      fallbackData.localResult.importedDeck.deck_id.toString()
    setTimeout(() => {
      setNewlyImportedDecks((prev) => {
        const newSet = new Set(prev)
        newSet.delete(importedDeckId)
        return newSet
      })
    }, NEWLY_IMPORTED_TIMEOUT)
  }

  return {
    // Panel state
    leftPanelOpen,
    setLeftPanelOpen,
    rightPanelOpen,
    setRightPanelOpen,

    // Center panel navigation
    activeNavTab,
    setActiveNavTab,

    // Content state
    textbooks: textbooksWithImportStatus,
    expandedTextbooks,
    expandedChapters,
    userDecks: deckData,
    folders: folderData,
    newlyImportedDecks,
    selectedUserDeck: deckSelection.selectedUserDeck,
    selectedBuiltInDeck: deckSelection.selectedBuiltInDeck,

    // Folder view navigation
    currentViewFolderId,
    viewBreadcrumbPath,
    currentViewContent,
    canNavigateUp,
    setCurrentViewFolderId,
    navigateToParentView,

    // Actions
    toggleTextbook,
    toggleChapter,
    importDeck,

    // Enhanced tab and deck selection handlers
    handleTabChange,
    handleDeckSelect,
    handleDeckDeselect,
    handleBuiltInDeckSelect: deckSelection.handleBuiltInDeckSelect,

    // Internal state setters (for edit operations hook)
    setFolderData,
    setDeckData,
    refetchFoldersAndDecks,
  }
}
