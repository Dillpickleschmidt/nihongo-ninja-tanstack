import type { UnifiedFolder } from 'convex/model/folders'
import type { UnifiedDeck } from 'convex/model/decks'

export type Folder = UnifiedFolder
export type Deck = UnifiedDeck

export function getRootFolders(folders: Folder[]): Folder[] {
  return folders.filter((f) => !f.parentFolderId)
}

export function getRootDecks(decks: Deck[]): Deck[] {
  return decks.filter((d) => !d.folderId)
}

export function getFolderChildren(folders: Folder[], parentId: string): Folder[] {
  return folders.filter((f) => f.parentFolderId === parentId)
}

export function getDecksInFolder(decks: Deck[], folderId: string): Deck[] {
  return decks.filter((d) => d.folderId === folderId)
}

export function getFolderPath(folderId: string, folders: Folder[]): Folder[] {
  const path: Folder[] = []
  let current = folders.find((f) => f.id === folderId)
  while (current) {
    path.unshift(current)
    current = current.parentFolderId
      ? folders.find((f) => f.id === current!.parentFolderId)
      : undefined
  }
  return path
}

// ===== URL Path Utilities =====

/**
 * Build the full URL path for a folder
 * For built-in folders: ID is already the path (e.g., "genki_1/chapter-0")
 * For user folders: walk hierarchy and join IDs
 */
export function buildFolderUrlPath(folderId: string, folders: Folder[]): string {
  const folder = folders.find((f) => f.id === folderId)
  if (!folder) return folderId

  // Built-in folders have ID = path already
  if (folder.source === 'built-in') {
    return folder.id
  }

  // User folders: walk hierarchy and join IDs
  const path = getFolderPath(folderId, folders)
  return path.map((f) => f.id).join('/')
}

/**
 * Resolve a URL path to a folder by matching path segments
 * e.g., ["genki_1", "chapter-0"] -> finds folder with id "genki_1/chapter-0"
 */
export function resolveFolderFromPath(
  pathSegments: string[],
  folders: Folder[]
): Folder | null {
  if (pathSegments.length === 0) return null

  // Join segments to form the full path/ID
  const pathAsId = pathSegments.join('/')

  // Try exact match (works for built-in folders where ID = path)
  const exactMatch = folders.find((f) => f.id === pathAsId)
  if (exactMatch) return exactMatch

  // Fallback: walk hierarchy for user folders (Convex IDs don't match path segments)
  let currentFolder: Folder | undefined = folders.find(
    (f) => f.id === pathSegments[0] && !f.parentFolderId
  )

  for (let i = 1; i < pathSegments.length && currentFolder; i++) {
    const children = getFolderChildren(folders, currentFolder.id)
    currentFolder = children.find((f) => f.id === pathSegments[i])
  }

  return currentFolder ?? null
}

// ===== Breadcrumb Utilities =====

export interface BreadcrumbItem {
  label: string
  href: string
  current?: boolean
}

export function buildFolderBreadcrumbs(
  folders: Folder[],
  folderId: string | null
): BreadcrumbItem[] {
  const crumbs: BreadcrumbItem[] = [{ label: 'Vocabulary', href: '/vocab' }]

  if (!folderId) {
    crumbs[0].current = true
    return crumbs
  }

  const path = getFolderPath(folderId, folders)

  for (const folder of path) {
    crumbs.push({
      label: folder.folderName,
      href: `/vocab/${buildFolderUrlPath(folder.id, folders)}`,
    })
  }

  // Mark last item as current
  if (crumbs.length > 0) {
    crumbs[crumbs.length - 1].current = true
  }

  return crumbs
}
