// vocab-page/logic/deck-edit-operations.ts

/**
 * Pure business logic functions for deck and folder editing operations.
 * These functions are framework-agnostic and can be unit tested easily.
 */

// Operation type definitions
export interface UpdateDeckOperation {
  type: 'update-deck'
  deckId: number
  updates: {
    name?: string
    folderId?: number | null
  }
}

export interface UpdateFolderOperation {
  type: 'update-folder'
  folderId: number
  updates: {
    name?: string
    parentId?: number | null
  }
}

export interface DeleteDeckOperation {
  type: 'delete-deck'
  deckId: number
}

export interface DeleteFolderOperation {
  type: 'delete-folder'
  folderId: number
  strategy: 'move-up' | 'delete-all'
}

export type EditOperation = 
  | UpdateDeckOperation 
  | UpdateFolderOperation 
  | DeleteDeckOperation 
  | DeleteFolderOperation

// Result types
export interface EditResult {
  success: boolean
  newState?: {
    folders: DeckFolder[]
    decks: UserDeck[]
  }
  error?: string
}

export interface ValidationResult {
  isValid: boolean
  error?: string
}

// Validation constants
export const VALIDATION_RULES = {
  NAME_MIN_LENGTH: 1,
  NAME_MAX_LENGTH: 80,
} as const

/**
 * Validates a deck or folder name according to business rules
 */
export function validateName(name: string): ValidationResult {
  if (!name || name.trim().length === 0) {
    return { isValid: false, error: 'Name cannot be empty' }
  }

  if (name.trim().length > VALIDATION_RULES.NAME_MAX_LENGTH) {
    return { isValid: false, error: `Name cannot exceed ${VALIDATION_RULES.NAME_MAX_LENGTH} characters` }
  }

  return { isValid: true }
}

/**
 * Checks if a deck name would be a duplicate within the target folder
 */
export function validateDeckNameUnique(
  name: string,
  folderId: number | null,
  decks: UserDeck[],
  excludeDeckId?: number
): ValidationResult {
  const duplicateDeck = decks.find(deck => 
    deck.deck_name.trim().toLowerCase() === name.trim().toLowerCase() &&
    deck.folder_id === folderId &&
    deck.deck_id !== excludeDeckId
  )

  if (duplicateDeck) {
    return { isValid: false, error: 'A deck with this name already exists in this folder' }
  }

  return { isValid: true }
}

/**
 * Checks if a folder name would be a duplicate within the target parent
 */
export function validateFolderNameUnique(
  name: string,
  parentId: number | null,
  folders: DeckFolder[],
  excludeFolderId?: number
): ValidationResult {
  const duplicateFolder = folders.find(folder => 
    folder.folder_name.trim().toLowerCase() === name.trim().toLowerCase() &&
    folder.parent_folder_id === parentId &&
    folder.folder_id !== excludeFolderId
  )

  if (duplicateFolder) {
    return { isValid: false, error: 'A folder with this name already exists in this location' }
  }

  return { isValid: true }
}

/**
 * Checks if moving a folder would create a circular reference
 */
export function validateNoCircularReference(
  folderId: number,
  newParentId: number | null,
  folders: DeckFolder[]
): ValidationResult {
  if (newParentId === null) {
    return { isValid: true } // Moving to root is always safe
  }

  if (folderId === newParentId) {
    return { isValid: false, error: 'Cannot move folder into itself' }
  }

  // Check if newParentId is a descendant of folderId
  let currentId: number | null = newParentId
  while (currentId !== null) {
    const currentFolder = folders.find(f => f.folder_id === currentId)
    if (!currentFolder) break

    if (currentFolder.parent_folder_id === folderId) {
      return { isValid: false, error: 'Cannot move folder into its own descendant' }
    }

    currentId = currentFolder.parent_folder_id
  }

  return { isValid: true }
}

/**
 * Gets all descendants of a folder (for deletion operations)
 */
export function getFolderDescendants(
  folderId: number,
  folders: DeckFolder[]
): DeckFolder[] {
  const descendants: DeckFolder[] = []
  const directChildren = folders.filter(f => f.parent_folder_id === folderId)

  for (const child of directChildren) {
    descendants.push(child)
    descendants.push(...getFolderDescendants(child.folder_id, folders))
  }

  return descendants
}

/**
 * Gets all decks within a folder and its descendants
 */
export function getDecksInFolderTree(
  folderId: number,
  folders: DeckFolder[],
  decks: UserDeck[]
): UserDeck[] {
  const folderIds = new Set([folderId])
  const descendants = getFolderDescendants(folderId, folders)
  descendants.forEach(folder => folderIds.add(folder.folder_id))

  return decks.filter(deck => deck.folder_id && folderIds.has(deck.folder_id))
}

/**
 * Applies a deck update operation to the current state
 */
export function applyUpdateDeck(
  folders: DeckFolder[],
  decks: UserDeck[],
  operation: UpdateDeckOperation
): EditResult {
  const { deckId, updates } = operation
  
  // Find the deck
  const deckIndex = decks.findIndex(d => d.deck_id === deckId)
  if (deckIndex === -1) {
    return { success: false, error: 'Deck not found' }
  }

  const currentDeck = decks[deckIndex]
  const newDeck = { ...currentDeck }

  // Validate and apply name update
  if (updates.name !== undefined) {
    const nameValidation = validateName(updates.name)
    if (!nameValidation.isValid) {
      return { success: false, error: nameValidation.error }
    }

    const targetFolderId = updates.folderId !== undefined ? updates.folderId : currentDeck.folder_id
    const uniqueValidation = validateDeckNameUnique(updates.name, targetFolderId, decks, deckId)
    if (!uniqueValidation.isValid) {
      return { success: false, error: uniqueValidation.error }
    }

    newDeck.deck_name = updates.name.trim()
  }

  // Apply folder update
  if (updates.folderId !== undefined) {
    // Validate folder exists (if not null)
    if (updates.folderId !== null) {
      const targetFolder = folders.find(f => f.folder_id === updates.folderId)
      if (!targetFolder) {
        return { success: false, error: 'Target folder not found' }
      }
    }

    newDeck.folder_id = updates.folderId
  }

  // Create new state
  const newDecks = [...decks]
  newDecks[deckIndex] = newDeck

  return {
    success: true,
    newState: {
      folders,
      decks: newDecks
    }
  }
}

/**
 * Applies a folder update operation to the current state
 */
export function applyUpdateFolder(
  folders: DeckFolder[],
  decks: UserDeck[],
  operation: UpdateFolderOperation
): EditResult {
  const { folderId, updates } = operation
  
  // Find the folder
  const folderIndex = folders.findIndex(f => f.folder_id === folderId)
  if (folderIndex === -1) {
    return { success: false, error: 'Folder not found' }
  }

  const currentFolder = folders[folderIndex]
  const newFolder = { ...currentFolder }

  // Validate and apply name update
  if (updates.name !== undefined) {
    const nameValidation = validateName(updates.name)
    if (!nameValidation.isValid) {
      return { success: false, error: nameValidation.error }
    }

    const targetParentId = updates.parentId !== undefined ? updates.parentId : currentFolder.parent_folder_id
    const uniqueValidation = validateFolderNameUnique(updates.name, targetParentId, folders, folderId)
    if (!uniqueValidation.isValid) {
      return { success: false, error: uniqueValidation.error }
    }

    newFolder.folder_name = updates.name.trim()
  }

  // Validate and apply parent update
  if (updates.parentId !== undefined) {
    const circularValidation = validateNoCircularReference(folderId, updates.parentId, folders)
    if (!circularValidation.isValid) {
      return { success: false, error: circularValidation.error }
    }

    // Validate parent exists (if not null)
    if (updates.parentId !== null) {
      const targetParent = folders.find(f => f.folder_id === updates.parentId)
      if (!targetParent) {
        return { success: false, error: 'Target parent folder not found' }
      }
    }

    newFolder.parent_folder_id = updates.parentId
  }

  // Create new state
  const newFolders = [...folders]
  newFolders[folderIndex] = newFolder

  return {
    success: true,
    newState: {
      folders: newFolders,
      decks
    }
  }
}

/**
 * Applies a deck deletion operation to the current state
 */
export function applyDeleteDeck(
  folders: DeckFolder[],
  decks: UserDeck[],
  operation: DeleteDeckOperation
): EditResult {
  const { deckId } = operation
  
  // Find the deck
  const deckIndex = decks.findIndex(d => d.deck_id === deckId)
  if (deckIndex === -1) {
    return { success: false, error: 'Deck not found' }
  }

  // Create new state without the deck
  const newDecks = decks.filter(d => d.deck_id !== deckId)

  return {
    success: true,
    newState: {
      folders,
      decks: newDecks
    }
  }
}

/**
 * Applies a folder deletion operation to the current state
 */
export function applyDeleteFolder(
  folders: DeckFolder[],
  decks: UserDeck[],
  operation: DeleteFolderOperation
): EditResult {
  const { folderId, strategy } = operation
  
  // Find the folder
  const folder = folders.find(f => f.folder_id === folderId)
  if (!folder) {
    return { success: false, error: 'Folder not found' }
  }

  // Get all descendants
  const descendants = getFolderDescendants(folderId, folders)
  const allFolderIds = new Set([folderId, ...descendants.map(f => f.folder_id)])

  let newFolders = folders.filter(f => !allFolderIds.has(f.folder_id))
  let newDecks = [...decks]

  if (strategy === 'move-up') {
    // Move decks to parent folder
    newDecks = decks.map(deck => {
      if (deck.folder_id && allFolderIds.has(deck.folder_id)) {
        return { ...deck, folder_id: folder.parent_folder_id }
      }
      return deck
    })
  } else if (strategy === 'delete-all') {
    // Delete all decks in the folder tree
    newDecks = decks.filter(deck => 
      !deck.folder_id || !allFolderIds.has(deck.folder_id)
    )
  }

  return {
    success: true,
    newState: {
      folders: newFolders,
      decks: newDecks
    }
  }
}

/**
 * Main function that applies any edit operation to the current state
 */
export function applyEditOperation(
  folders: DeckFolder[],
  decks: UserDeck[],
  operation: EditOperation
): EditResult {
  switch (operation.type) {
    case 'update-deck':
      return applyUpdateDeck(folders, decks, operation)
    case 'update-folder':
      return applyUpdateFolder(folders, decks, operation)
    case 'delete-deck':
      return applyDeleteDeck(folders, decks, operation)
    case 'delete-folder':
      return applyDeleteFolder(folders, decks, operation)
    default:
      return { success: false, error: 'Unknown operation type' }
  }
}