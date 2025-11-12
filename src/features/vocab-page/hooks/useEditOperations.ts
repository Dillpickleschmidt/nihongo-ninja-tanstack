// features/vocab-page/hooks/useEditOperations.ts
import { EditTransaction } from "@/features/vocab-page/logic/edit-transaction"
import { executeEditTransactionServerFn } from "@/features/supabase/db/folder"
import { saveFoldersAndDecks } from "@/features/vocab-page/storage/sessionStorage"
import type { AppState } from "@/features/vocab-page/logic/edit-transaction"
import type { User } from "@supabase/supabase-js"
interface UseEditOperationsProps {
  folders: () => DeckFolder[]
  userDecks: () => UserDeck[]
  shareStatus: () => Record<string, boolean>
  updateData: (updates: { folders?: DeckFolder[]; decks?: UserDeck[] }) => void
  refetchFoldersAndDecks: () => void
  user?: User | null
}

/**
 * Hook to handle edit operations and transactions
 */
export function useEditOperations(props: UseEditOperationsProps) {
  // Core edit transaction execution
  const executeEdit = async (transaction: EditTransaction) => {
    const currentState: AppState = {
      folders: props.folders(),
      decks: props.userDecks(),
    }

    // 1. Validate transaction
    const preview = transaction.preview(currentState)
    if (!preview.success) {
      alert(`Edit failed: ${preview.error}`)
      return
    }

    // 2. Optimistic update
    props.updateData({
      folders: preview.newState!.folders,
      decks: preview.newState!.decks,
    })

    // 3. Persistence (different strategies)
    try {
      if (props.user) {
        // Database transaction
        await executeEditTransactionServerFn({
          data: { operations: transaction.getOperations() },
        })
        // Refetch to get updated data and real IDs
        props.refetchFoldersAndDecks()
      } else {
        // Session storage (atomic write)
        saveFoldersAndDecks({
          ...preview.newState!,
          shareStatus: props.shareStatus(),
        })
      }
    } catch (error) {
      // 4. Rollback
      props.updateData({
        folders: currentState.folders,
        decks: currentState.decks,
      })
      console.error("Edit failed:", error)
      alert(
        `Edit failed: ${error instanceof Error ? error.message : "Unknown error"}`,
      )
    }
  }

  // Individual edit operation helpers
  const editDeck = async (
    deckId: string,
    updates: { name?: string; folderId?: number | null },
  ) => {
    const transaction = new EditTransaction()
    transaction.add({
      type: "update-deck",
      deckId,
      updates,
    })
    await executeEdit(transaction)
  }

  const editFolder = async (
    folderId: number,
    updates: { name?: string; parentId?: number | null },
  ) => {
    const transaction = new EditTransaction()
    transaction.add({
      type: "update-folder",
      folderId,
      updates,
    })
    await executeEdit(transaction)
  }

  const deleteDeck = async (deckId: string) => {
    const transaction = new EditTransaction()
    transaction.add({
      type: "delete-deck",
      deckId,
    })
    await executeEdit(transaction)
  }

  const deleteFolder = async (
    folderId: number,
    strategy: "move-up" | "delete-all",
  ) => {
    const transaction = new EditTransaction()
    transaction.add({
      type: "delete-folder",
      folderId,
      strategy,
    })
    await executeEdit(transaction)
  }

  return {
    // Core execution
    executeEdit,

    // Individual operations
    editDeck,
    editFolder,
    deleteDeck,
    deleteFolder,
  }
}
