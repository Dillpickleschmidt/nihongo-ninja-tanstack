import type { UnifiedFolder } from "convex/model/folders"
import type { UnifiedDeck } from "convex/model/decks"

// ===== Core Filtering =====

export function getRootFolders(folders: UnifiedFolder[]): UnifiedFolder[] {
  return folders.filter((f) => !f.parentFolderId)
}

export function getRootDecks(decks: UnifiedDeck[]): UnifiedDeck[] {
  return decks.filter((d) => !d.folderId)
}

export function getFolderChildren(
  folders: UnifiedFolder[],
  parentId: string,
): UnifiedFolder[] {
  return folders.filter((f) => f.parentFolderId === parentId)
}

export function getDecksInFolder(
  decks: UnifiedDeck[],
  folderId: string,
): UnifiedDeck[] {
  return decks.filter((d) => d.folderId === folderId)
}

export function getFolderPath(
  folderId: string,
  folders: UnifiedFolder[],
): UnifiedFolder[] {
  const path: UnifiedFolder[] = []
  let current = folders.find((f) => f.id === folderId)
  while (current) {
    path.unshift(current)
    current = current.parentFolderId
      ? folders.find((f) => f.id === current!.parentFolderId)
      : undefined
  }
  return path
}

// ===== HierarchyNode =====

export type HierarchyNode =
  | { type: "folder"; id: string; data: UnifiedFolder }
  | { type: "deck"; id: string; data: UnifiedDeck }

export function getRootLevelItems(
  folders: UnifiedFolder[],
  decks: UnifiedDeck[],
): HierarchyNode[] {
  const items: HierarchyNode[] = []

  for (const folder of getRootFolders(folders)) {
    items.push({ type: "folder", id: folder.id, data: folder })
  }

  for (const deck of getRootDecks(decks)) {
    items.push({ type: "deck", id: deck.id, data: deck })
  }

  return items
}

export function getFolderLevelItems(
  folders: UnifiedFolder[],
  decks: UnifiedDeck[],
  folderId: string,
): HierarchyNode[] {
  const items: HierarchyNode[] = []

  for (const folder of getFolderChildren(folders, folderId)) {
    items.push({ type: "folder", id: folder.id, data: folder })
  }

  for (const deck of getDecksInFolder(decks, folderId)) {
    items.push({ type: "deck", id: deck.id, data: deck })
  }

  return items
}
