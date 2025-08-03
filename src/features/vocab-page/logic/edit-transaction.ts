// vocab-page/logic/edit-transaction.ts

/**
 * Transaction coordinator for atomic edit operations.
 * Manages multiple operations that must succeed or fail together.
 */

import {
  applyEditOperation,
  type EditOperation,
  type EditResult,
} from "./deck-edit-operations"

export interface AppState {
  folders: DeckFolder[]
  decks: UserDeck[]
}

/**
 * Coordinates multiple edit operations into an atomic transaction
 */
export class EditTransaction {
  private operations: EditOperation[] = []

  /**
   * Add an operation to the transaction
   */
  add(operation: EditOperation): void {
    this.operations.push(operation)
  }

  /**
   * Get all operations in the transaction
   */
  getOperations(): EditOperation[] {
    return [...this.operations]
  }

  /**
   * Get the number of operations in the transaction
   */
  size(): number {
    return this.operations.length
  }

  /**
   * Check if the transaction is empty
   */
  isEmpty(): boolean {
    return this.operations.length === 0
  }

  /**
   * Clear all operations from the transaction
   */
  clear(): void {
    this.operations = []
  }

  /**
   * Preview what the state would look like after applying all operations.
   * This is the same as validate() but with a clearer intent for optimistic updates.
   */
  preview(currentState: AppState): EditResult {
    return this.validate(currentState)
  }

  /**
   * Validate that all operations in the transaction can be applied successfully.
   * Returns the final state if successful, or the first error encountered.
   */
  validate(currentState: AppState): EditResult {
    if (this.operations.length === 0) {
      return { success: false, error: "Transaction is empty" }
    }

    let state = currentState
    
    // Apply each operation sequentially to build up the final state
    for (let i = 0; i < this.operations.length; i++) {
      const operation = this.operations[i]
      const result = applyEditOperation(state.folders, state.decks, operation)
      
      if (!result.success) {
        // Include operation context in error message
        const operationDescription = this.describeOperation(operation)
        const errorMessage = `Operation ${i + 1} failed (${operationDescription}): ${result.error}`
        return { success: false, error: errorMessage }
      }
      
      // Use the new state for the next operation
      state = result.newState!
    }

    return {
      success: true,
      newState: state
    }
  }

  /**
   * Create a human-readable description of an operation for error messages
   */
  private describeOperation(operation: EditOperation): string {
    switch (operation.type) {
      case 'update-deck':
        const deckUpdates = []
        if (operation.updates.name) deckUpdates.push('name')
        if (operation.updates.folderId !== undefined) deckUpdates.push('folder')
        return `update deck ${operation.deckId} (${deckUpdates.join(', ')})`
      
      case 'update-folder':
        const folderUpdates = []
        if (operation.updates.name) folderUpdates.push('name')
        if (operation.updates.parentId !== undefined) folderUpdates.push('parent')
        return `update folder ${operation.folderId} (${folderUpdates.join(', ')})`
      
      case 'delete-deck':
        return `delete deck ${operation.deckId}`
      
      case 'delete-folder':
        return `delete folder ${operation.folderId} (${operation.strategy})`
      
      default:
        return 'unknown operation'
    }
  }
}

/**
 * Helper function to create a transaction with a single operation
 */
export function createSingleTransaction(operation: EditOperation): EditTransaction {
  const transaction = new EditTransaction()
  transaction.add(operation)
  return transaction
}

/**
 * Helper function to create a deck update transaction
 */
export function createDeckUpdateTransaction(
  deckId: number,
  updates: { name?: string; folderId?: number | null }
): EditTransaction {
  const transaction = new EditTransaction()
  transaction.add({
    type: 'update-deck',
    deckId,
    updates
  })
  return transaction
}

/**
 * Helper function to create a folder update transaction
 */
export function createFolderUpdateTransaction(
  folderId: number,
  updates: { name?: string; parentId?: number | null }
): EditTransaction {
  const transaction = new EditTransaction()
  transaction.add({
    type: 'update-folder',
    folderId,
    updates
  })
  return transaction
}

/**
 * Helper function to create a deck deletion transaction
 */
export function createDeckDeletionTransaction(deckId: number): EditTransaction {
  const transaction = new EditTransaction()
  transaction.add({
    type: 'delete-deck',
    deckId
  })
  return transaction
}

/**
 * Helper function to create a folder deletion transaction
 */
export function createFolderDeletionTransaction(
  folderId: number,
  strategy: 'move-up' | 'delete-all'
): EditTransaction {
  const transaction = new EditTransaction()
  transaction.add({
    type: 'delete-folder',
    folderId,
    strategy
  })
  return transaction
}

/**
 * Helper function to create a transaction that moves a deck to a different folder
 * and optionally renames it at the same time
 */
export function createDeckMoveTransaction(
  deckId: number,
  targetFolderId: number | null,
  newName?: string
): EditTransaction {
  const transaction = new EditTransaction()
  
  const updates: { folderId: number | null; name?: string } = {
    folderId: targetFolderId
  }
  
  if (newName !== undefined) {
    updates.name = newName
  }
  
  transaction.add({
    type: 'update-deck',
    deckId,
    updates
  })
  
  return transaction
}

/**
 * Helper function to create a transaction that moves a folder to a different parent
 * and optionally renames it at the same time
 */
export function createFolderMoveTransaction(
  folderId: number,
  targetParentId: number | null,
  newName?: string
): EditTransaction {
  const transaction = new EditTransaction()
  
  const updates: { parentId: number | null; name?: string } = {
    parentId: targetParentId
  }
  
  if (newName !== undefined) {
    updates.name = newName
  }
  
  transaction.add({
    type: 'update-folder',
    folderId,
    updates
  })
  
  return transaction
}