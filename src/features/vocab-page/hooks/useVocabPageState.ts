// features/vocab-page/hooks/useVocabPageState.ts
import { createSignal, createEffect, createResource } from "solid-js"
import { createStore, reconcile } from "solid-js/store"
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
    ? { folders: [], decks: [], shareStatus: {} }
    : { ...loadFoldersAndDecks(), shareStatus: {} }
  const [userData, setUserData] = createStore(initialLocalData)
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
      if (refetching && user?.id) {
        return getUserFoldersAndDecks(user.id)
      }
      return resolvedInitialData || { folders: [], decks: [], shareStatus: {} }
    },
  )

  // Use pre-loaded textbooks from server
  const [textbooks, setTextbooks] = createSignal<
    [TextbookIDEnum, VocabTextbook][]
  >(initialTextbooks || [])

  // === COMPUTED VALUES ===
  // Folder navigation computations
  const viewBreadcrumbPath = () =>
    buildBreadcrumbPath(userData.folders, currentViewFolderId())
  const currentViewContent = () =>
    getFolderContents(userData.folders, userData.decks, currentViewFolderId())
  const canNavigateUp = () => currentViewFolderId() !== null

  const textbooksWithImportStatus = () => {
    return textbooks().map(([textbookId, textbook]) => [
      textbookId,
      {
        ...textbook,
        chapters: textbook.chapters.map((chapter) => ({
          ...chapter,
          decks: chapter.decks.map((deck) => ({
            ...deck,
            isImported: isDeckAlreadyImported(userData.decks, deck.id),
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
      if (data && data.decks.length > 0) {
        const selectedDeck = deckSelection.selectedUserDeck()
        const hasTemporaryDeck =
          selectedDeck &&
          selectedDeck.deck_id < 0 &&
          selectedDeck.source === "built-in"

        if (hasTemporaryDeck) {
          const realDeck = data.decks.find(
            (deck) =>
              deck.source === "built-in" &&
              deck.original_deck_id === selectedDeck.original_deck_id &&
              deck.deck_id > 0,
          )

          if (realDeck && realDeck.deck_id !== selectedDeck.deck_id) {
            setUserData(reconcile(data, { key: "deck_id" }))
            setCurrentViewFolderId(realDeck.folder_id)
            deckSelection.handleUserDeckSelect(realDeck)
          }
        } else {
          setUserData(reconcile(data, { key: "deck_id" }))
        }
      }
    }
  })

  // Auto-sync local state to session storage for unsigned users
  createEffect(() => {
    if (!user) {
      if (userData.folders.length > 0 || userData.decks.length > 0) {
        saveFoldersAndDecks(userData)
      }
    }
  })

  // === HELPER FUNCTIONS ===
  const toggleTextbook = (textbookId: string) => {
    setExpandedTextbooks((prev) => {
      const newSet = new Set(prev)
      newSet.has(textbookId)
        ? newSet.delete(textbookId)
        : newSet.add(textbookId)
      return newSet
    })
  }

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters((prev) => {
      const newSet = new Set(prev)
      newSet.has(chapterId) ? newSet.delete(chapterId) : newSet.add(chapterId)
      return newSet
    })
  }

  // Folder navigation actions
  const navigateToParentView = () => {
    const parentId = getParentFolderId(userData.folders, currentViewFolderId())
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

  // Get stable key for deck tracking
  const getDeckTrackingKey = (deck: UserDeck) => {
    return deck.original_deck_id || deck.deck_id.toString()
  }

  // === UI SYNC LOGIC ===
  // Optimistic update for immediate UI feedback
  const updateLocalStateOptimistically = (
    operation: string,
    builtInDeck: VocabBuiltInDeck,
  ) => {
    const userId = user?.id || "session-user"
    const localResult = importDeckWithFolders(
      userData.folders,
      userData.decks,
      builtInDeck,
      textbooks(),
      userId,
    )

    setUserData({
      folders: localResult.folders,
      decks: localResult.decks,
      shareStatus: localResult.shareStatus,
    })

    deckSelection.handleUserDeckSelect(localResult.importedDeck)

    if (localResult.targetFolderId !== null) {
      setCurrentViewFolderId(localResult.targetFolderId)
    }

    const importedDeckKey = getDeckTrackingKey(localResult.importedDeck)
    setNewlyImportedDecks((prev) => new Set([...prev, importedDeckKey]))

    return { localResult, userData }
  }

  const syncToDatabase = async (
    builtInDeck: VocabBuiltInDeck,
    fallbackData: any,
  ) => {
    try {
      if (user) {
        await importBuiltInDeckServerFn({
          data: {
            builtInDeck,
            textbooks: textbooks(),
          },
        })
        await refetchFoldersAndDecks()
      } else {
        saveFoldersAndDecks(userData)
      }
    } catch (error) {
      console.error("Database sync failed:", error)
      setUserData(fallbackData.userData)
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
    const importedDeckKey = getDeckTrackingKey(
      fallbackData.localResult.importedDeck,
    )
    setTimeout(() => {
      setNewlyImportedDecks((prev) => {
        const newSet = new Set(prev)
        newSet.delete(importedDeckKey)
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
    userDecks: () => userData.decks,
    folders: () => userData.folders,
    shareStatus: () => userData.shareStatus,
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
    setUserData,
    refetchFoldersAndDecks,
  }
}
