// features/vocab-page/layout/VocabPageContext.tsx
import {
  createContext,
  useContext,
  ParentComponent,
  createSignal,
  createEffect,
} from "solid-js"
import { createStore } from "solid-js/store"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { useQueryClient } from "@tanstack/solid-query"
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
import { useEditOperations } from "../hooks/useEditOperations"
import { EditTransaction } from "../logic/edit-transaction"
import { getVocabForDeck } from "@/features/supabase/db/deck"
import type { DeckCreationInitialData } from "../pages/create/stores/deck-creation-store"
import { copyDeck } from "@/features/vocab-page/utils/deckCopyUtils"

interface VocabPageProviderProps {
  user: User | null
}

function useVocabPageState(user: User | null) {
  const queryClient = useQueryClient()

  // === QUERIES ===
  // Settings query
  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(user?.id || null),
  )

  // Folders and decks query
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

  // Modal opener handlers (set by VocabLayout)
  const [folderEditHandler, setFolderEditHandler] = createSignal<
    ((folder: DeckFolder) => void) | undefined
  >(undefined)

  const [deckCopyHandler, setDeckCopyHandler] = createSignal<
    ((deck: UserDeck) => void) | undefined
  >(undefined)

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
    getFolderContents(
      userData().folders,
      userData().decks,
      currentViewFolderId(),
    )
  const canNavigateUp = () => currentViewFolderId() !== null

  // === EFFECTS ===
  // Auto-sync local state to session storage for unsigned users
  createEffect(() => {
    if (!user) {
      if (
        localUserData.folders?.length > 0 ||
        localUserData.decks?.length > 0
      ) {
        saveFoldersAndDecks(localUserData)
      }
    }
  })

  // Folder navigation actions
  const navigateToParentView = () => {
    const parentId = getParentFolderId(
      userData().folders,
      currentViewFolderId(),
    )
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

  // === EDIT OPERATIONS ===
  // Optimistic update function that works for both signed-in and unsigned users
  const updateData = (updates: {
    folders?: DeckFolder[]
    decks?: UserDeck[]
  }) => {
    if (user) {
      // Signed-in: update TanStack Query cache
      const currentData = foldersAndDecksQuery.data || {
        folders: [],
        decks: [],
        shareStatus: {},
      }
      queryClient.setQueryData(
        userFoldersAndDecksQueryOptions(user.id).queryKey,
        {
          ...currentData,
          ...updates,
        },
      )
    } else {
      // Unsigned: update local store
      if (updates.folders) setLocalUserData("folders", updates.folders)
      if (updates.decks) setLocalUserData("decks", updates.decks)
    }
  }

  // Call useEditOperations with required props
  const editOperations = useEditOperations({
    folders: () => userData().folders,
    userDecks: () => userData().decks,
    shareStatus: () => userData().shareStatus,
    updateData,
    refetchFoldersAndDecks: () => foldersAndDecksQuery.refetch(),
    user,
  })

  // === HANDLER FUNCTIONS ===
  // These were previously in VocabLayout and set via signals

  const handleEditDeck = async (deck: UserDeck) => {
    try {
      // Load vocabulary items for the deck
      const vocabItems = await getVocabForDeck(deck.deck_id)

      // Find folder information
      const folder = userData().folders.find(
        (f) => f.folder_id === deck.folder_id,
      )

      // Prepare initial data for editing
      const initialData: DeckCreationInitialData = {
        deckId: deck.deck_id,
        name: deck.deck_name,
        description: deck.deck_description || "",
        folderId: deck.folder_id ? deck.folder_id.toString() : "root",
        folderName: folder?.folder_name || "Root",
        vocabItems: vocabItems,
      }

      // Store edit data and navigate to create page
      sessionStorage.setItem("vocabPageDeckEdit", JSON.stringify(initialData))

      // Navigate to create page
      window.location.hash = "#/vocab/create"
    } catch (error) {
      console.error("Failed to load deck data for editing:", error)
    }
  }

  const handleEditFolder = (folder: DeckFolder) => {
    // Will be called by FolderEditModal via context
    return folder
  }

  const handleSaveFolderEdit = (transaction: EditTransaction) => {
    editOperations.executeEdit(transaction)
  }

  const handleDeckRename = (deck: UserDeck, newName: string) => {
    editOperations.editDeck(deck.deck_id, { name: newName })
  }

  const handleDeckMove = (deck: UserDeck, targetFolderId: string) => {
    const folderId = targetFolderId === "root" ? null : parseInt(targetFolderId)
    editOperations.editDeck(deck.deck_id, { folderId })
  }

  const handleCopyDeck = async (
    deck: UserDeck,
    newName: string,
    targetFolderId: string,
  ) => {
    if (!user) {
      alert("Copying decks requires authentication")
      return
    }

    try {
      await copyDeck({
        sourceDeck: deck,
        newName,
        targetFolderId,
        userId: user.id,
      })

      // Refetch to show the new deck
      foldersAndDecksQuery.refetch()
    } catch (error) {
      console.error("Failed to copy deck:", error)
      alert(
        `Failed to copy deck: ${error instanceof Error ? error.message : "Unknown error"}`,
      )
    }
  }

  const handleDeleteDeck = async (deck: UserDeck) => {
    editOperations.deleteDeck(deck.deck_id)
  }

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

    // Edit operation handlers (direct access)
    handleSaveFolderEdit,

    // Deck operation handlers (direct references - no modals needed)
    deckEditHandler: () => handleEditDeck,
    deckRenameHandler: () => handleDeckRename,
    deckMoveHandler: () => handleDeckMove,
    deckDeleteHandler: () => handleDeleteDeck,

    // Modal opener handlers (set by VocabLayout)
    folderEditHandler,
    setFolderEditHandler,
    deckCopyHandler,
    setDeckCopyHandler,

    // Internal state setters
    refetchFoldersAndDecks: () => foldersAndDecksQuery.refetch(),
  }
}

type VocabPageState = ReturnType<typeof useVocabPageState>

const VocabPageContext = createContext<VocabPageState | undefined>()

export const VocabPageProvider: ParentComponent<VocabPageProviderProps> = (
  props,
) => {
  const state = useVocabPageState(props.user)

  return (
    <VocabPageContext.Provider value={state}>
      {props.children}
    </VocabPageContext.Provider>
  )
}

export function useVocabPageContext() {
  const context = useContext(VocabPageContext)
  if (!context) {
    throw new Error(
      "useVocabPageContext must be used within a VocabPageProvider",
    )
  }
  return context
}
