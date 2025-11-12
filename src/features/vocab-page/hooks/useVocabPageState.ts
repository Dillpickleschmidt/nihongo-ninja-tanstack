// features/vocab-page/hooks/useVocabPageState.ts
import { createSignal, createEffect } from "solid-js"
import type { EditTransaction } from "../logic/edit-transaction"
import { createStore } from "solid-js/store"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import {
  userSettingsQueryOptions,
  userFoldersAndDecksQueryOptions,
} from "@/query/query-options"
import type { User } from "@supabase/supabase-js"
import {
  buildBreadcrumbPath,
  getFolderContents,
  getParentFolderId,
} from "../logic/folder-utils"
import {
  saveFoldersAndDecks,
  loadFoldersAndDecks,
} from "@/features/vocab-page/storage/sessionStorage"

export function useVocabPageState(user: User | null) {
  // === QUERIES ===
  // Settings query
  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(user?.id || null),
  )

  // Folders and decks query (replaces createResource)
  const foldersAndDecksQuery = useCustomQuery(() =>
    userFoldersAndDecksQueryOptions(user?.id || null),
  )

  // === SIGNALS ===
  // Panel state
  const [rightPanelOpen, setRightPanelOpen] = createSignal(true)

  // Local data for unsigned users (session storage)
  const initialLocalData = { ...loadFoldersAndDecks(), shareStatus: {} }
  const [localUserData, setLocalUserData] = createStore(initialLocalData)

  // Deck selection state
  const [selectedUserDeck, setSelectedUserDeck] = createSignal<UserDeck | null>(
    null,
  )

  // Folder navigation state (which folder user is viewing)
  const [currentViewFolderId, setCurrentViewFolderId] = createSignal<
    number | null
  >(null)

  // === COMPUTED VALUES ===
  // Get data from query (signed-in) or local storage (unsigned)
  const userData = () => {
    if (user) {
      return (
        foldersAndDecksQuery.data || { folders: [], decks: [], shareStatus: {} }
      )
    }
    return localUserData
  }

  // Folder navigation computations
  const viewBreadcrumbPath = () =>
    buildBreadcrumbPath(userData().folders, currentViewFolderId())
  const currentViewContent = () =>
    getFolderContents(userData().folders, userData().decks, currentViewFolderId())
  const canNavigateUp = () => currentViewFolderId() !== null

  // === EFFECTS ===
  // Auto-sync local state to session storage for unsigned users
  createEffect(() => {
    if (!user) {
      if (localUserData.folders?.length > 0 || localUserData.decks?.length > 0) {
        saveFoldersAndDecks(localUserData)
      }
    }
  })

  // Folder navigation actions
  const navigateToParentView = () => {
    const parentId = getParentFolderId(userData.folders, currentViewFolderId())
    setCurrentViewFolderId(parentId)
  }

  // Deck selection handlers
  const handleDeckSelect = (deck: UserDeck) => {
    // Navigate to the deck's folder if we're not already there
    if (deck.folder_id !== currentViewFolderId()) {
      setCurrentViewFolderId(deck.folder_id)
    }

    setSelectedUserDeck(deck)
  }

  const handleDeckDeselect = () => {
    setSelectedUserDeck(null)
  }

  // Folder edit handlers (set by VocabLayout)
  const [folderEditHandler, setFolderEditHandler] = createSignal<
    ((folder: DeckFolder) => void) | undefined
  >(undefined)

  const [folderDeleteHandler, setFolderDeleteHandler] = createSignal<
    ((transaction: EditTransaction) => void) | undefined
  >(undefined)

  // Deck operation handlers (set by VocabLayout)
  const [deckEditHandler, setDeckEditHandler] = createSignal<
    ((deck: UserDeck) => void) | undefined
  >(undefined)

  const [deckRenameHandler, setDeckRenameHandler] = createSignal<
    ((deck: UserDeck, newName: string) => void) | undefined
  >(undefined)

  const [deckMoveHandler, setDeckMoveHandler] = createSignal<
    ((deck: UserDeck, targetFolderId: string) => void) | undefined
  >(undefined)

  const [deckCopyHandler, setDeckCopyHandler] = createSignal<
    ((deck: UserDeck) => void) | undefined
  >(undefined)

  const [deckDeleteHandler, setDeckDeleteHandler] = createSignal<
    ((deck: UserDeck) => void) | undefined
  >(undefined)

  return {
    // Panel state
    rightPanelOpen,
    setRightPanelOpen,

    // Queries
    settingsQuery,
    foldersAndDecksQuery,

    // Content state
    userDecks: () => userData().decks,
    folders: () => userData().folders,
    shareStatus: () => userData().shareStatus,
    selectedUserDeck,

    // Folder view navigation
    currentViewFolderId,
    viewBreadcrumbPath,
    currentViewContent,
    canNavigateUp,
    setCurrentViewFolderId,
    navigateToParentView,

    // Deck selection handlers
    handleDeckSelect,
    handleDeckDeselect,

    // Folder edit handlers (accessible via context)
    folderEditHandler,
    setFolderEditHandler,
    folderDeleteHandler,
    setFolderDeleteHandler,

    // Deck operation handlers (accessible via context)
    deckEditHandler,
    setDeckEditHandler,
    deckRenameHandler,
    setDeckRenameHandler,
    deckMoveHandler,
    setDeckMoveHandler,
    deckCopyHandler,
    setDeckCopyHandler,
    deckDeleteHandler,
    setDeckDeleteHandler,

    // Internal state setters (for edit operations hook)
    setUserData: user ? undefined : setLocalUserData,
    refetchFoldersAndDecks: () => foldersAndDecksQuery.refetch(),
  }
}
