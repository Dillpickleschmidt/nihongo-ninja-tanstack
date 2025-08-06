// features/vocab-page/hooks/useVocabPageState.ts
import { createSignal, createEffect, createResource } from "solid-js"
import { type DeferredPromise } from "@tanstack/solid-router"
import { DEFAULT_EXPANDED_TEXTBOOKS, NEWLY_IMPORTED_TIMEOUT } from "../types"
import type { ImportRequest, VocabBuiltInDeck, VocabTextbook } from "../types"
import type { TextbookIDEnum } from "@/data/types"
import type { FoldersAndDecksData } from "@/features/supabase/db/folder-operations"
import type { User } from "@supabase/supabase-js"
import { useFolderNavigation } from "./useFolderNavigation"
import {
  importBuiltInDeckServerFn,
  getUserFoldersAndDecks,
} from "@/features/supabase/db/folder-operations"
import {
  saveFoldersAndDecks,
  loadFoldersAndDecks,
} from "@/features/vocab-page/storage/sessionStorage"
import {
  importDeckWithFolders,
  isDeckAlreadyImported,
} from "@/features/vocab-page/logic/deck-import-logic"
import type { NavTabId } from "@/features/vocab-page/center-panel/CenterNavBar"

export function useVocabPageState(
  importRequest?: ImportRequest | null,
  initialTextbooks?: [TextbookIDEnum, VocabTextbook][],
  foldersAndDecksPromise?: DeferredPromise<FoldersAndDecksData>,
  user?: User | null,
) {
  const [leftPanelOpen, setLeftPanelOpen] = createSignal(true)
  const [rightPanelOpen, setRightPanelOpen] = createSignal(true)

  // Center panel navigation state
  const [activeNavTab, setActiveNavTab] = createSignal<NavTabId>("vocab-cards")
  const [vocabCardsTabState, setVocabCardsTabState] =
    createSignal<UserDeck | null>(null)

  // Extract expansion data from import request for auto-expansion
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

  // Load folders and decks from database
  const [foldersAndDecks, { refetch: refetchFoldersAndDecks }] = createResource(
    foldersAndDecksPromise, // Source: The DeferredPromise from the loader
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

  const [newlyImportedDecks, setNewlyImportedDecks] = createSignal<Set<string>>(
    new Set(),
  )
  const [selectedUserDeck, setSelectedUserDeck] = createSignal<UserDeck | null>(
    null,
  )

  // Local signals for immediate UI updates (optimistic updates)
  const initialLocalData = user
    ? { folders: [], decks: [] }
    : loadFoldersAndDecks()
  const [localFolders, setLocalFolders] = createSignal<DeckFolder[]>(
    initialLocalData.folders,
  )
  const [localDecks, setLocalDecks] = createSignal<UserDeck[]>(
    initialLocalData.decks,
  )

  // Extract folders and decks - use local state as primary source, fall back to resource
  const folders = () => {
    const local = localFolders()
    if (local.length > 0 || !user) {
      return local
    }
    const data = foldersAndDecks() as FoldersAndDecksData | undefined
    return data?.folders ?? []
  }

  const userDecks = () => {
    const local = localDecks()
    if (local.length > 0 || !user) {
      return local
    }
    const data = foldersAndDecks() as FoldersAndDecksData | undefined
    return data?.decks ?? []
  }

  // Sync database data to local state when it loads (for authenticated users)
  // Only sync on initial load, not on subsequent updates to preserve optimistic state
  // DB fetch function forces refresh on failures
  createEffect(() => {
    if (user && foldersAndDecks.state === "ready") {
      const data = foldersAndDecks() as FoldersAndDecksData | undefined
      const currentFolders = localFolders()
      const currentDecks = localDecks()

      // Only sync if we don't have local data (initial load)
      if (data && currentFolders.length === 0 && currentDecks.length === 0) {
        setLocalFolders(data.folders)
        setLocalDecks(data.decks)
      }
    }
  })

  // Auto-sync local state to session storage for unsigned users
  createEffect(() => {
    if (!user) {
      const currentFolders = localFolders()
      const currentDecks = localDecks()
      if (currentFolders.length > 0 || currentDecks.length > 0) {
        saveFoldersAndDecks({
          folders: currentFolders,
          decks: currentDecks,
        })
      }
    }
  })

  // Folder navigation
  const folderNavigation = useFolderNavigation(folders, userDecks)

  // Use pre-loaded textbooks from server
  const [textbooks, setTextbooks] = createSignal<
    [TextbookIDEnum, VocabTextbook][]
  >(initialTextbooks || [])

  // Computed textbooks with up-to-date import status derived from user decks
  const textbooksWithImportStatus = () => {
    const currentDecks = userDecks()
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

  const importDeck = async (builtInDeck: VocabBuiltInDeck) => {
    // 1. Optimistic local update (immediate UI response for all users)
    const currentFolders = folders()
    const currentDecks = userDecks()
    const userId = user?.id || "session-user"

    const localResult = importDeckWithFolders(
      currentFolders,
      currentDecks,
      builtInDeck,
      textbooks(),
      userId,
    )

    // Update local state immediately for UI feedback (all users)
    setLocalFolders(localResult.folders)
    setLocalDecks(localResult.decks)
    setSelectedUserDeck(localResult.importedDeck)

    // Navigate immediately to the folder containing the new deck (all users)
    if (localResult.targetFolderId !== null) {
      folderNavigation.navigateToFolder(localResult.targetFolderId)
    }

    // Mark as newly imported
    const importedDeckId = localResult.importedDeck.deck_id.toString()
    setNewlyImportedDecks((prev) => new Set([...prev, importedDeckId]))

    if (user) {
      // Background database sync (don't await, don't update UI unless error)
      importBuiltInDeckServerFn({
        data: {
          builtInDeck,
          textbooks: textbooks(),
        },
      }).catch((error) => {
        console.error("Database sync failed:", error)
        // Only revert on error
        setLocalFolders(currentFolders)
        setLocalDecks(currentDecks)
        setSelectedUserDeck(null)
        folderNavigation.navigateToRoot()
        alert("Failed to save deck to your account. Please try again.")
      })
    } else {
      // For unsigned users: Save to session storage
      saveFoldersAndDecks({
        folders: localResult.folders,
        decks: localResult.decks,
      })
    }

    // Remove from newly imported after timeout (for all users)
    setTimeout(() => {
      setNewlyImportedDecks((prev) => {
        const newSet = new Set(prev)
        newSet.delete(importedDeckId)
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

  // Enhanced tab and deck selection handlers
  const handleTabChange = (newTab: NavTabId) => {
    if (activeNavTab() === "vocab-cards" && newTab !== "vocab-cards") {
      // Leaving vocab-cards: save whatever the current state is
      setVocabCardsTabState(selectedUserDeck())
    }

    if (newTab === "vocab-cards") {
      // Entering vocab-cards: restore saved state
      setSelectedUserDeck(vocabCardsTabState())
    } else {
      // On other tabs: always deselect
      setSelectedUserDeck(null)
    }

    setActiveNavTab(newTab)
  }

  const handleDeckSelect = (deck: UserDeck) => {
    setSelectedUserDeck(deck)
    setVocabCardsTabState(deck) // Keep vocab-cards state in sync
    setActiveNavTab("vocab-cards")
  }

  const handleDeckDeselect = () => {
    setSelectedUserDeck(null)
    if (activeNavTab() === "vocab-cards") {
      setVocabCardsTabState(null) // Update vocab-cards state when explicitly deselecting
    }
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

    // Enhanced tab and deck selection handlers
    handleTabChange,
    handleDeckSelect,
    handleDeckDeselect,

    // Internal state setters (for edit operations hook)
    setLocalFolders,
    setLocalDecks,
    refetchFoldersAndDecks,
  }
}
