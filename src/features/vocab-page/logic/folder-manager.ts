// vocab-page/logic/folder-manager.ts

/**
 * Core folder management operations as pure functions.
 * These functions handle CRUD operations on folder collections without side effects.
 */

let nextFolderId = 1000 // Start from 1000 to avoid conflicts with other IDs

/**
 * Creates a new folder and adds it to the collection
 */
export function createFolder(
  folders: DeckFolder[],
  name: string,
  parentId: number | null,
  userId: string = "temp-user-id",
): { folders: DeckFolder[]; newFolder: DeckFolder } {
  const newFolder: DeckFolder = {
    folder_id: nextFolderId++,
    folder_name: name,
    parent_folder_id: parentId,
    user_id: userId,
    created_at: new Date().toISOString(),
  }

  return {
    folders: [...folders, newFolder],
    newFolder,
  }
}

/**
 * Updates an existing folder in the collection
 */
export function updateFolder(
  folders: DeckFolder[],
  folderId: number,
  updates: Partial<Pick<DeckFolder, "folder_name" | "parent_folder_id">>,
): DeckFolder[] {
  return folders.map((folder) =>
    folder.folder_id === folderId ? { ...folder, ...updates } : folder,
  )
}

/**
 * Removes a folder and all its descendants from the collection
 */
export function deleteFolder(
  folders: DeckFolder[],
  folderId: number,
): DeckFolder[] {
  // Get all descendant folder IDs to delete
  const toDelete = getAllDescendantIds(folders, folderId)
  toDelete.add(folderId) // Include the folder itself

  return folders.filter((folder) => !toDelete.has(folder.folder_id))
}

/**
 * Finds a folder by ID
 */
export function findFolder(
  folders: DeckFolder[],
  folderId: number,
): DeckFolder | null {
  return folders.find((folder) => folder.folder_id === folderId) || null
}

/**
 * Gets immediate children of a folder (or root level if parentId is null)
 */
export function getFolderChildren(
  folders: DeckFolder[],
  parentId: number | null,
): DeckFolder[] {
  return folders.filter((folder) => folder.parent_folder_id === parentId)
}

/**
 * Finds a folder by name within a parent folder
 */
export function findFolderByName(
  folders: DeckFolder[],
  name: string,
  parentId: number | null,
): DeckFolder | null {
  return (
    folders.find(
      (folder) =>
        folder.folder_name === name && folder.parent_folder_id === parentId,
    ) || null
  )
}

/**
 * Gets all folder IDs in a subtree rooted at the given folder
 */
export function getAllDescendantIds(
  folders: DeckFolder[],
  rootId: number,
): Set<number> {
  const descendants = new Set<number>()
  const queue = [rootId]

  while (queue.length > 0) {
    const currentId = queue.shift()!
    const children = getFolderChildren(folders, currentId)

    for (const child of children) {
      descendants.add(child.folder_id)
      queue.push(child.folder_id)
    }
  }

  return descendants
}

/**
 * Counts the total number of decks in a folder (including subfolders)
 */
export function countDecksInFolder(
  folders: DeckFolder[],
  decks: UserDeck[],
  folderId: number | null,
): number {
  // Count decks directly in this folder
  let count = decks.filter((deck) => deck.folder_id === folderId).length

  // Count decks in all subfolders
  const subfolders = getFolderChildren(folders, folderId)
  for (const subfolder of subfolders) {
    count += countDecksInFolder(folders, decks, subfolder.folder_id)
  }

  return count
}

/**
 * Validates that a folder move operation would not create a circular reference
 */
export function validateFolderMove(
  folders: DeckFolder[],
  folderId: number,
  newParentId: number | null,
): boolean {
  if (newParentId === null) return true // Moving to root is always valid
  if (folderId === newParentId) return false // Can't be parent of itself

  // Check if newParentId is a descendant of folderId
  const descendants = getAllDescendantIds(folders, folderId)
  return !descendants.has(newParentId)
}

/**
 * Gets the path from root to a folder as an array of folder IDs
 */
export function getFolderPath(
  folders: DeckFolder[],
  folderId: number | null,
): number[] {
  if (folderId === null) return []

  const path: number[] = []
  let currentId: number | null = folderId

  while (currentId !== null) {
    path.unshift(currentId)
    const folder = findFolder(folders, currentId)
    currentId = folder?.parent_folder_id || null
  }

  return path
}

/**
 * Resets the folder ID counter (useful for testing)
 */
export function resetFolderIdCounter(startId: number = 1000): void {
  nextFolderId = startId
}
