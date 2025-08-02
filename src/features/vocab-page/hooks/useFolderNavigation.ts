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
import type { FolderContent, FolderNavigationState } from "../types"

export interface UseFolderNavigationResult {
  // Current state
  currentFolderId: () => number | null
  breadcrumbPath: () => DeckFolder[]
  currentFolderContent: () => FolderContent
  isLoading: () => boolean

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
  const [isLoading, setIsLoading] = createSignal(false)

  // Compute breadcrumb path reactively
  const breadcrumbPath = createMemo(() =>
    buildBreadcrumbPath(folders(), currentFolderId()),
  )

  // Compute current folder content reactively
  const currentFolderContent = createMemo(() =>
    getFolderContents(folders(), decks(), currentFolderId()),
  )

  // Check if we can navigate up (not at root)
  const canNavigateUp = createMemo(() => currentFolderId() !== null)

  // Navigation functions
  const navigateToFolder = (folderId: number | null) => {
    setIsLoading(true)

    // Simulate async navigation (can be used for future database calls)
    setTimeout(() => {
      setCurrentFolderId(folderId)
      setIsLoading(false)
    }, 0)
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
    isLoading,

    // Actions
    navigateToFolder,
    navigateToParent,
    navigateToRoot,

    // Utilities
    canNavigateUp,
  }
}
