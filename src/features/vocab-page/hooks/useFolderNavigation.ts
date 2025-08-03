// vocab-page/hooks/useFolderNavigation.ts

/**
 * SolidJS hook that bridges folder logic with reactive UI state.
 * Provides folder navigation functionality with automatic state management.
 */

import { createSignal, createMemo } from "solid-js"
import {
  buildBreadcrumbPath,
  getFolderContents,
  getParentFolderId,
} from "../logic/folder-hierarchy"
import type { FolderContent } from "../types"

export interface UseFolderNavigationResult {
  // Current state
  currentFolderId: () => number | null
  breadcrumbPath: () => DeckFolder[]
  currentFolderContent: () => FolderContent

  // Navigation actions
  navigateToFolder: (folderId: number | null) => void
  navigateToParent: () => void
  navigateToRoot: () => void

  // Utility functions
  canNavigateUp: () => boolean
}

export function useFolderNavigation(
  folders: () => DeckFolder[],
  decks: () => UserDeck[],
): UseFolderNavigationResult {
  const [currentFolderId, setCurrentFolderId] = createSignal<number | null>(
    null,
  )

  // Compute breadcrumb path reactively
  const breadcrumbPath = createMemo(() =>
    buildBreadcrumbPath(folders(), currentFolderId()),
  )

  // Compute current folder content reactively
  const currentFolderContent = createMemo(() => {
    const currentFolders = folders() // Access accessor here
    const currentDecks = decks() // Access accessor here
    return getFolderContents(currentFolders, currentDecks, currentFolderId())
  })

  // Check if we can navigate up (not at root)
  const canNavigateUp = createMemo(() => currentFolderId() !== null)

  // Navigation functions
  const navigateToFolder = (folderId: number | null) => {
    setCurrentFolderId(folderId)
  }

  const navigateToParent = () => {
    const parentId = getParentFolderId(folders(), currentFolderId())
    navigateToFolder(parentId)
  }

  const navigateToRoot = () => {
    navigateToFolder(null)
  }

  return {
    // State accessors
    currentFolderId,
    breadcrumbPath,
    currentFolderContent,

    // Actions
    navigateToFolder,
    navigateToParent,
    navigateToRoot,

    // Utilities
    canNavigateUp,
  }
}
