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
import { EditTransaction } from "../logic/edit-transaction"
import { getVocabForDeck } from "@/features/supabase/db/deck"
import type { DeckCreationInitialData } from "../pages/create/stores/deck-creation-store"
import { copyDeck } from "@/features/vocab-page/utils/deckCopyUtils"
import { executeEditTransactionServerFn } from "@/features/supabase/db/folder"

interface VocabPageProviderProps {
  user: User | null
}

function useVocabPageState(user: User | null) {
  const queryClient = useQueryClient()

  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(user?.id || null),
  )

  const foldersAndDecksQuery = useCustomQuery(() =>
    userFoldersAndDecksQueryOptions(user?.id || null),
  )

  const [rightPanelOpen, setRightPanelOpen] = createSignal(true)

  const initialLocalData = { ...loadFoldersAndDecks(), shareStatus: {} }
  const [localUserData, setLocalUserData] = createStore(initialLocalData)

  const [selectedUserDeck, setSelectedUserDeck] = createSignal<UserDeck | null>(
    null,
  )

  const [currentViewFolderId, setCurrentViewFolderId] = createSignal<
    number | null
  >(null)

  const [editingFolder, setEditingFolder] = createSignal<DeckFolder | null>(
    null,
  )
  const [copyingDeck, setCopyingDeck] = createSignal<UserDeck | null>(null)

  const userData = () => {
    if (user) {
      return (
        foldersAndDecksQuery.data || { folders: [], decks: [], shareStatus: {} }
      )
    }
    return localUserData
  }

  const viewBreadcrumbPath = () =>
    buildBreadcrumbPath(userData().folders, currentViewFolderId())
  const currentViewContent = () =>
    getFolderContents(
      userData().folders,
      userData().decks,
      currentViewFolderId(),
    )
  const canNavigateUp = () => currentViewFolderId() !== null

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

  const navigateToParentView = () => {
    const parentId = getParentFolderId(
      userData().folders,
      currentViewFolderId(),
    )
    setCurrentViewFolderId(parentId)
  }

  const handleDeckSelect = (deck: UserDeck) => {
    if (deck.folder_id !== currentViewFolderId()) {
      setCurrentViewFolderId(deck.folder_id)
    }

    setSelectedUserDeck(deck)
  }

  const handleDeckDeselect = () => {
    setSelectedUserDeck(null)
  }

  const updateData = (updates: {
    folders?: DeckFolder[]
    decks?: UserDeck[]
  }) => {
    if (user) {
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
      if (updates.folders) setLocalUserData("folders", updates.folders)
      if (updates.decks) setLocalUserData("decks", updates.decks)
    }
  }

  // Core edit transaction execution (inlined from useEditOperations)
  const executeEdit = async (transaction: EditTransaction) => {
    const currentState = {
      folders: userData().folders,
      decks: userData().decks,
    }

    // 1. Validate transaction
    const preview = transaction.preview(currentState)
    if (!preview.success) {
      alert(`Edit failed: ${preview.error}`)
      return
    }

    // 2. Optimistic update
    updateData({
      folders: preview.newState!.folders,
      decks: preview.newState!.decks,
    })

    // 3. Persistence (different strategies)
    try {
      if (user) {
        // Database transaction
        await executeEditTransactionServerFn({
          data: { operations: transaction.getOperations() },
        })
        // Refetch to get updated data and real IDs
        foldersAndDecksQuery.refetch()
      } else {
        // Session storage (atomic write)
        saveFoldersAndDecks({
          ...preview.newState!,
          shareStatus: userData().shareStatus,
        })
      }
    } catch (error) {
      // 4. Rollback
      updateData({
        folders: currentState.folders,
        decks: currentState.decks,
      })
      console.error("Edit failed:", error)
      alert(
        `Edit failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      )
    }
  }

  const handleEditDeck = async (deck: UserDeck) => {
    try {
      const vocabItems = await getVocabForDeck(deck.deck_id)

      const folder = userData().folders.find(
        (f) => f.folder_id === deck.folder_id,
      )

      const initialData: DeckCreationInitialData = {
        deckId: deck.deck_id,
        name: deck.deck_name,
        description: deck.deck_description || "",
        folderId: deck.folder_id ? deck.folder_id.toString() : "root",
        folderName: folder?.folder_name || "Root",
        vocabItems: vocabItems,
      }

      sessionStorage.setItem("vocabPageDeckEdit", JSON.stringify(initialData))
      window.location.hash = "#/vocab/create"
    } catch (error) {
      console.error("Failed to load deck data for editing:", error)
    }
  }

  const handleSaveFolderEdit = (transaction: EditTransaction) => {
    executeEdit(transaction)
  }

  const handleDeckRename = (deck: UserDeck, newName: string) => {
    const transaction = new EditTransaction()
    transaction.add({
      type: "update-deck",
      deckId: deck.deck_id,
      updates: { name: newName },
    })
    executeEdit(transaction)
  }

  const handleDeckMove = (deck: UserDeck, targetFolderId: string) => {
    const folderId = targetFolderId === "root" ? null : parseInt(targetFolderId)
    const transaction = new EditTransaction()
    transaction.add({
      type: "update-deck",
      deckId: deck.deck_id,
      updates: { folderId },
    })
    executeEdit(transaction)
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

  const handleDeleteDeck = (deck: UserDeck) => {
    const transaction = new EditTransaction()
    transaction.add({
      type: "delete-deck",
      deckId: deck.deck_id,
    })
    executeEdit(transaction)
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

    // Modal state (managed in context, rendered in VocabLayout)
    editingFolder,
    setEditingFolder,
    copyingDeck,
    setCopyingDeck,

    // Edit operation handlers
    handleSaveFolderEdit,
    handleEditDeck,
    handleDeckRename,
    handleDeckMove,
    handleDeleteDeck,
    handleCopyDeck,

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
