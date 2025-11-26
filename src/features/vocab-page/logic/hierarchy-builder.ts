/**
 * Declarative hierarchy builder for vocab content
 * Separates "what to show" (data structure) from "how to show it" (presentation)
 */

import type { LearningPath, LearningPathChapter } from "@/data/types"
import type { ModuleOrDeck } from "../utils/learningPathToDeckAdapter"
import {
  getFolderChildren,
  getDecksInFolder,
  getRootFolders,
  getRootDecks,
} from "./folder-utils"
import { filterVocabPracticeModules } from "../utils/learningPathToDeckAdapter"

/**
 * Discriminated union representing all possible hierarchy node types
 */
export type HierarchyNode =
  | {
      type: "learning-path"
      id: string
      data: LearningPath
      children: HierarchyNode[]
    }
  | {
      type: "chapter"
      id: string
      data: LearningPathChapter
      children: HierarchyNode[]
    }
  | {
      type: "module"
      id: string
      data: ModuleOrDeck
      children: []
    }
  | {
      type: "folder"
      id: string
      data: DeckFolder
      children: HierarchyNode[]
    }
  | {
      type: "deck"
      id: string
      data: UserDeck
      children: []
    }

/**
 * Builds the complete vocabulary hierarchy from all data sources
 * This is the single source of truth for "what exists in the hierarchy"
 *
 * Structure:
 * - Learning paths → chapters → modules/decks
 * - User folders (recursive) → decks
 * - Root-level user decks
 */
export function buildVocabHierarchy(
  folders: DeckFolder[],
  decks: UserDeck[],
  learningPaths: LearningPath[],
): HierarchyNode[] {
  const hierarchy: HierarchyNode[] = []

  // 1. Build learning path hierarchy
  for (const path of learningPaths) {
    const chapterNodes: HierarchyNode[] = []

    for (const chapter of path.chapters) {
      const modules = filterVocabPracticeModules(chapter, decks)
      const moduleNodes: HierarchyNode[] = modules.map((module) => ({
        type: "module",
        id: module.moduleId,
        data: module,
        children: [],
      }))

      chapterNodes.push({
        type: "chapter",
        id: `${path.id}-${chapter.slug}`,
        data: chapter,
        children: moduleNodes,
      })
    }

    hierarchy.push({
      type: "learning-path",
      id: path.id,
      data: path,
      children: chapterNodes,
    })
  }

  // 2. Build user folder/deck hierarchy (recursive)
  const rootFolders = getRootFolders(folders)
  for (const folder of rootFolders) {
    hierarchy.push(buildFolderNode(folder, folders, decks))
  }

  // 3. Add root-level user decks (not in any folder)
  const rootDecks = getRootDecks(decks)
  for (const deck of rootDecks) {
    hierarchy.push({
      type: "deck",
      id: deck.deck_id,
      data: deck,
      children: [],
    })
  }

  return hierarchy
}

/**
 * Recursively builds a folder node with all its children (subfolders and decks)
 */
function buildFolderNode(
  folder: DeckFolder,
  allFolders: DeckFolder[],
  allDecks: UserDeck[],
): HierarchyNode {
  const children: HierarchyNode[] = []

  // Add child folders (recursive)
  const childFolders = getFolderChildren(allFolders, folder.folder_id)
  for (const childFolder of childFolders) {
    children.push(buildFolderNode(childFolder, allFolders, allDecks))
  }

  // Add decks in this folder
  const folderDecks = getDecksInFolder(allDecks, folder.folder_id)
  for (const deck of folderDecks) {
    children.push({
      type: "deck",
      id: deck.deck_id,
      data: deck,
      children: [],
    })
  }

  return {
    type: "folder",
    id: folder.folder_id.toString(),
    data: folder,
    children,
  }
}

/**
 * Filters hierarchy to only root-level items (depth 1)
 * Used by FolderBrowserGrid for flat grid display
 *
 * Returns:
 * - Top-level learning paths (without nested chapters)
 * - Root folders (without nested contents)
 * - Root-level decks
 */
export function getRootLevelItems(
  folders: DeckFolder[],
  decks: UserDeck[],
  learningPaths: LearningPath[],
): HierarchyNode[] {
  const rootItems: HierarchyNode[] = []

  // Add learning paths (top level only, no children)
  for (const path of learningPaths) {
    rootItems.push({
      type: "learning-path",
      id: path.id,
      data: path,
      children: [], // No children for flat display
    })
  }

  // Add root folders (no children for flat display)
  const rootFolders = getRootFolders(folders)
  for (const folder of rootFolders) {
    rootItems.push({
      type: "folder",
      id: folder.folder_id.toString(),
      data: folder,
      children: [], // No children for flat display
    })
  }

  // Add root-level decks
  const rootDecks = getRootDecks(decks)
  for (const deck of rootDecks) {
    rootItems.push({
      type: "deck",
      id: deck.deck_id,
      data: deck,
      children: [],
    })
  }

  return rootItems
}
