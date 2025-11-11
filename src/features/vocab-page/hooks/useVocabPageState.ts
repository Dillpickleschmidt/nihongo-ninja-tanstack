// features/vocab-page/hooks/useVocabPageState.ts
import { createSignal, createEffect, createResource } from "solid-js"
import { createStore, reconcile } from "solid-js/store"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/query/query-options"
import type { FoldersAndDecksData } from "@/features/supabase/db/folder"
import type { User } from "@supabase/supabase-js"
import {
  buildBreadcrumbPath,
  getFolderContents,
  getParentFolderId,
} from "../logic/folder-utils"
import { getUserFoldersAndDecks } from "@/features/supabase/db/folder"
import {
  saveFoldersAndDecks,
  loadFoldersAndDecks,
} from "@/features/vocab-page/storage/sessionStorage"

export function useVocabPageState(
  foldersAndDecksPromise: Promise<FoldersAndDecksData>,
  user: User | null,
) {
  // === SIGNALS ===
  // Panel state
  const [rightPanelOpen, setRightPanelOpen] = createSignal(true)

  // Folder/deck data (immediate UI updates)
  const initialLocalData = user
    ? { folders: [], decks: [], shareStatus: {} }
    : { ...loadFoldersAndDecks(), shareStatus: {} }
  const [userData, setUserData] = createStore(initialLocalData)

  // Get settings for active learning path
  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(user?.id || null),
  )

  // Deck selection state
  const [selectedUserDeck, setSelectedUserDeck] = createSignal<UserDeck | null>(
    null,
  )

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

  // === COMPUTED VALUES ===
  // Folder navigation computations
  const viewBreadcrumbPath = () =>
    buildBreadcrumbPath(userData.folders, currentViewFolderId())
  const currentViewContent = () =>
    getFolderContents(userData.folders, userData.decks, currentViewFolderId())
  const canNavigateUp = () => currentViewFolderId() !== null

  // === UI SYNC EFFECTS ===
  // Sync database resource data to local signals for signed-in users
  createEffect(() => {
    if (user) {
      const data = foldersAndDecks() as FoldersAndDecksData | undefined
      if (data && data.decks.length > 0) {
        // Simply sync the data to local state
        setUserData(reconcile(data, { key: "deck_id" }))
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

  return {
    // Panel state
    rightPanelOpen,
    setRightPanelOpen,

    // Content state
    userDecks: () => userData.decks,
    folders: () => userData.folders,
    shareStatus: () => userData.shareStatus,
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

    // Internal state setters (for edit operations hook)
    setUserData,
    refetchFoldersAndDecks,
  }
}
