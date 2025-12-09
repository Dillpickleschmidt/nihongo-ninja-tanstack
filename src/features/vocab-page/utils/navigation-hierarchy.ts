import type { Folder, Deck } from './folder-utils'
import {
  getRootFolders,
  getRootDecks,
  getFolderChildren,
  getDecksInFolder,
} from './folder-utils'

export type HierarchyNode =
  | { type: 'folder'; id: string; data: Folder }
  | { type: 'deck'; id: string; data: Deck }

export function getRootLevelItems(
  folders: Folder[],
  decks: Deck[]
): HierarchyNode[] {
  const items: HierarchyNode[] = []

  for (const folder of getRootFolders(folders)) {
    items.push({ type: 'folder', id: folder.id, data: folder })
  }

  for (const deck of getRootDecks(decks)) {
    items.push({ type: 'deck', id: deck.id, data: deck })
  }

  return items
}

export function getFolderLevelItems(
  folders: Folder[],
  decks: Deck[],
  folderId: string
): HierarchyNode[] {
  const items: HierarchyNode[] = []

  for (const folder of getFolderChildren(folders, folderId)) {
    items.push({ type: 'folder', id: folder.id, data: folder })
  }

  for (const deck of getDecksInFolder(decks, folderId)) {
    items.push({ type: 'deck', id: deck.id, data: deck })
  }

  return items
}
