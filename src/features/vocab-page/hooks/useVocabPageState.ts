// features/vocab-page/hooks/useVocabPageState.ts
import { createSignal, createEffect, createResource } from "solid-js"
import { useNavigate, type DeferredPromise } from "@tanstack/solid-router"
import { DEFAULT_EXPANDED_TEXTBOOKS, NEWLY_IMPORTED_TIMEOUT } from "../types"
import type { ImportRequest, VocabBuiltInDeck, VocabTextbook } from "../types"
import type { TextbookIDEnum } from "@/data/types"
import type { FoldersAndDecksData } from "@/features/supabase/db/folder-operations"
import type { User } from "@supabase/supabase-js"
import { useFolderNavigation } from "./useFolderNavigation"
import {
  importBuiltInDeckServerFn,
  getUserFoldersAndDecks,
  executeEditTransactionServerFn,
} from "@/features/supabase/db/folder-operations"
import {
  saveFoldersAndDecks,
  loadFoldersAndDecks,
} from "@/features/vocab-page/storage/sessionStorage"
import { importDeckWithFolders, isDeckAlreadyImported } from "@/features/vocab-page/logic/deck-import-logic"
import { EditTransaction } from "@/features/vocab-page/logic/edit-transaction"
import type { AppState } from "@/features/vocab-page/logic/edit-transaction"

export function useVocabPageState(
  importRequest?: ImportRequest | null,
  initialTextbooks?: [TextbookIDEnum, VocabTextbook][],
  foldersAndDecksPromise?: DeferredPromise<FoldersAndDecksData>,
  user?: User | null,
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
  createEffect(() => {
    if (user && foldersAndDecks.state === "ready") {
      const data = foldersAndDecks()
      if (data) {
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

  // Import confirmation modal state
  const [showImportModal, setShowImportModal] = createSignal(false)
  const [pendingImportDeck, setPendingImportDeck] =
    createSignal<VocabBuiltInDeck | null>(null)

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

    // Update local state immediately
    setLocalFolders(localResult.folders)
    setLocalDecks(localResult.decks)
    setSelectedUserDeck(localResult.importedDeck)

    // Navigate to the folder containing the new deck (using temporary ID)
    if (localResult.targetFolderId !== null) {
      folderNavigation.navigateToFolder(localResult.targetFolderId)
    }

    // Mark as newly imported
    const importedDeckId = localResult.importedDeck.deck_id.toString()
    setNewlyImportedDecks((prev) => new Set([...prev, importedDeckId]))

    if (user) {
      // 2. Database sync (background, with navigation reconciliation)
      try {
        const dbResult = await importBuiltInDeckServerFn({
          data: {
            builtInDeck,
            textbooks: textbooks(),
          },
        })
      } catch (error) {
        console.error("Database sync failed:", error)
        // Revert optimistic update
        setLocalFolders(currentFolders)
        setLocalDecks(currentDecks)
        alert("Failed to save deck to your account. Please try again.")
      }
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

  // Edit operation functions
  const executeEdit = async (transaction: EditTransaction) => {
    const currentState: AppState = { folders: folders(), decks: userDecks() }
    
    // 1. Validate transaction
    const preview = transaction.preview(currentState)
    if (!preview.success) {
      alert(`Edit failed: ${preview.error}`)
      return
    }

    // 2. Optimistic update (same logic for all user types)
    setLocalFolders(preview.newState!.folders)
    setLocalDecks(preview.newState!.decks)

    // 3. Persistence (different strategies)
    try {
      if (user) {
        // Database transaction
        await executeEditTransactionServerFn({ data: { operations: transaction.getOperations() } })
      } else {
        // Session storage (atomic write)
        saveFoldersAndDecks(preview.newState!)
      }
    } catch (error) {
      // 4. Rollback (same logic for all user types)
      setLocalFolders(currentState.folders)
      setLocalDecks(currentState.decks)
      console.error("Edit failed:", error)
      alert(`Edit failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  }

  const editDeck = async (deckId: number, updates: { name?: string; folderId?: number | null }) => {
    const transaction = new EditTransaction()
    transaction.add({
      type: 'update-deck',
      deckId,
      updates
    })
    await executeEdit(transaction)
  }

  const editFolder = async (folderId: number, updates: { name?: string; parentId?: number | null }) => {
    const transaction = new EditTransaction()
    transaction.add({
      type: 'update-folder',
      folderId,
      updates
    })
    await executeEdit(transaction)
  }

  const deleteDeck = async (deckId: number) => {
    const transaction = new EditTransaction()
    transaction.add({
      type: 'delete-deck',
      deckId
    })
    await executeEdit(transaction)
  }

  const deleteFolder = async (folderId: number, strategy: 'move-up' | 'delete-all') => {
    const transaction = new EditTransaction()
    transaction.add({
      type: 'delete-folder',
      folderId,
      strategy
    })
    await executeEdit(transaction)
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

    // Edit operations
    executeEdit,
    editDeck,
    editFolder,
    deleteDeck,
    deleteFolder,

    // Import modal state and actions
    showImportModal,
    pendingImportDeck,
    handleImportConfirm,
    handleImportCancel,

    // Loading state - use a more explicit check
    isLoadingFoldersAndDecks: () => foldersAndDecks.loading,
  }
}
