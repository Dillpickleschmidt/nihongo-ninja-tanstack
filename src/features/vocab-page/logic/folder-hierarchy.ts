// vocab-page/logic/folder-hierarchy.ts

/**
 * Folder hierarchy navigation and content management functions.
 * These functions handle folder navigation, breadcrumb paths, and content organization.
 */

import { findFolder, getFolderChildren, getFolderPath } from "./folder-manager"
import type { FolderContent } from "../types"

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


