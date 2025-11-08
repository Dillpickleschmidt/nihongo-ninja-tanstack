// vocab-page/logic/folder-utils.ts

/**
 * Unified folder management, hierarchy, and navigation functions.
 * These functions handle all folder operations without side effects.
 *
 * Organized into sections:
 * 1. Basic queries (find, get children, etc.)
 * 2. Path and hierarchy operations
 * 3. CRUD operations
 * 4. Tree building and flattening
 * 5. Search and statistics
 */

import type { FolderContent } from "../types/learning-path"

// ============================================================================
// SECTION 1: Basic Queries
// ============================================================================

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

// ============================================================================
// SECTION 2: Path and Hierarchy Operations
// ============================================================================

/**
 * Builds the breadcrumb path from root to the current folder
 */
export function buildBreadcrumbPath(
  folders: DeckFolder[],
  currentFolderId: number | null,
): DeckFolder[] {
  if (currentFolderId === null) return []

  const path: DeckFolder[] = []
  const folderIds = getFolderPath(folders, currentFolderId)

  for (const folderId of folderIds) {
    const folder = findFolder(folders, folderId)
    if (folder) {
      path.push(folder)
    }
  }

  return path
}

/**
 * Gets the contents (folders and decks) of a specific folder level
 */
export function getFolderContents(
  folders: DeckFolder[],
  decks: UserDeck[],
  folderId: number | null,
): FolderContent {
  const folderChildren = getFolderChildren(folders, folderId)
  const deckChildren = decks.filter((deck) => deck.folder_id === folderId)

  return {
    folders: folderChildren,
    decks: deckChildren,
  }
}

/**
 * Builds a folder path from a folder ID to the root
 */
export function buildFolderPath(
  folderId: string | number | null,
  folders: DeckFolder[],
): DeckFolder[] {
  const path: DeckFolder[] = []

  if (folderId === "root" || folderId === null) {
    return path
  }

  let currentId: number | null =
    typeof folderId === "string" ? parseInt(folderId) : folderId

  while (currentId !== null) {
    const folder = folders.find((f) => f.folder_id === currentId)
    if (!folder) break
    path.unshift(folder)
    currentId = folder.parent_folder_id
  }

  return path
}

/**
 * Gets the current folder ID for an item
 */
export function getCurrentFolderId(item: UserDeck | DeckFolder): number | null {
  if ("deck_id" in item) {
    return item.folder_id
  } else {
    return item.parent_folder_id
  }
}

/**
 * Gets the depth of a folder (0 = root level, 1 = first level, etc.)
 */
export function getFolderDepth(
  folders: DeckFolder[],
  folderId: number | null,
): number {
  if (folderId === null) return 0

  const path = getFolderPath(folders, folderId)
  return path.length
}

/**
 * Gets the parent folder ID of a given folder
 */
export function getParentFolderId(
  folders: DeckFolder[],
  folderId: number | null,
): number | null {
  if (folderId === null) return null

  const folder = findFolder(folders, folderId)
  return folder?.parent_folder_id || null
}

/**
 * Checks if a folder is an ancestor of another folder
 */
export function isFolderAncestor(
  folders: DeckFolder[],
  ancestorId: number,
  descendantId: number,
): boolean {
  const path = getFolderPath(folders, descendantId)
  return path.includes(ancestorId)
}

/**
 * Gets the root folder of a folder hierarchy
 */
export function getRootFolder(
  folders: DeckFolder[],
  folderId: number,
): DeckFolder | null {
  const path = getFolderPath(folders, folderId)
  if (path.length === 0) return null

  return findFolder(folders, path[0])
}

/**
 * Gets all folders at a specific depth level
 */
export function getFoldersAtDepth(
  folders: DeckFolder[],
  depth: number,
): DeckFolder[] {
  return folders.filter(
    (folder) => getFolderDepth(folders, folder.folder_id) === depth,
  )
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

// ============================================================================
// SECTION 3: CRUD Operations
// ============================================================================

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
 * Finds or creates a folder path based on an array of folder names
 * Returns the updated folder list and the target folder ID
 */
export function findOrCreateFolderPath(
  folders: DeckFolder[],
  pathNames: string[],
  userId: string = "temp-user-id",
): { folders: DeckFolder[]; targetFolderId: number } {
  let currentFolders = [...folders]
  let currentParentId: number | null = null

  // Use negative IDs to avoid conflicts with positive database IDs
  let nextId = -Date.now()

  for (const folderName of pathNames) {
    // Try to find existing folder
    let existingFolder = currentFolders.find(
      (f) =>
        f.folder_name === folderName && f.parent_folder_id === currentParentId,
    )

    if (!existingFolder) {
      // Create new folder
      const newFolder: DeckFolder = {
        folder_id: nextId--,
        folder_name: folderName,
        parent_folder_id: currentParentId,
        user_id: userId,
        created_at: new Date().toISOString(),
      }

      currentFolders.push(newFolder)
      existingFolder = newFolder
    }

    currentParentId = existingFolder.folder_id
  }

  return {
    folders: currentFolders,
    targetFolderId: currentParentId!,
  }
}

/**
 * Resets the folder ID counter (useful for testing)
 */
export function resetFolderIdCounter(startId: number = 1000): void {
  nextFolderId = startId
}

// ============================================================================
// SECTION 4: Tree Building and Flattening
// ============================================================================

/**
 * Builds a hierarchical tree structure from flat folder list
 */
export interface FolderTreeNode {
  folder: DeckFolder
  children: FolderTreeNode[]
  depth: number
}

export function buildFolderTree(
  folders: DeckFolder[],
  rootParentId: number | null = null,
): FolderTreeNode[] {
  const rootFolders = getFolderChildren(folders, rootParentId)

  return rootFolders.map((folder) => ({
    folder,
    children: buildFolderTree(folders, folder.folder_id),
    depth: getFolderDepth(folders, folder.folder_id),
  }))
}

/**
 * Flattens a folder tree into a list with depth information
 */
export interface FlatFolderNode {
  folder: DeckFolder
  depth: number
  hasChildren: boolean
}

export function flattenFolderTree(
  folders: DeckFolder[],
  rootParentId: number | null = null,
  currentDepth: number = 0,
): FlatFolderNode[] {
  const result: FlatFolderNode[] = []
  const childFolders = getFolderChildren(folders, rootParentId)

  for (const folder of childFolders) {
    const children = getFolderChildren(folders, folder.folder_id)
    result.push({
      folder,
      depth: currentDepth,
      hasChildren: children.length > 0,
    })

    // Recursively add children
    result.push(
      ...flattenFolderTree(folders, folder.folder_id, currentDepth + 1),
    )
  }

  return result
}

// ============================================================================
// SECTION 5: Search and Statistics
// ============================================================================

/**
 * Searches for folders by name (case-insensitive, partial match)
 */
export function searchFolders(
  folders: DeckFolder[],
  searchTerm: string,
): DeckFolder[] {
  const normalizedTerm = searchTerm.toLowerCase().trim()
  if (!normalizedTerm) return []

  return folders.filter((folder) =>
    folder.folder_name.toLowerCase().includes(normalizedTerm),
  )
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
 * Gets folder statistics
 */
export interface FolderStats {
  totalFolders: number
  maxDepth: number
  rootFolders: number
  totalDecks: number
}

export function getFolderStats(
  folders: DeckFolder[],
  decks: UserDeck[],
): FolderStats {
  const rootFolders = getFolderChildren(folders, null)
  const depths = folders.map((f) => getFolderDepth(folders, f.folder_id))

  return {
    totalFolders: folders.length,
    maxDepth: depths.length > 0 ? Math.max(...depths) : 0,
    rootFolders: rootFolders.length,
    totalDecks: decks.length,
  }
}
