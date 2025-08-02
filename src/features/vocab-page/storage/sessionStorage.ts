// src/features/vocab-page/storage/sessionStorage.ts

/**
 * Session storage utilities for unsigned users
 * Provides persistent state across browser sessions without database
 */

import type { FoldersAndDecksData } from "@/features/supabase/db/folder-operations"

const STORAGE_KEY = "nihongo-ninja-vocab-data"

/**
 * Saves folders and decks to session storage
 */
export function saveFoldersAndDecks(data: FoldersAndDecksData): void {
  try {
    const serialized = JSON.stringify(data)
    sessionStorage.setItem(STORAGE_KEY, serialized)
  } catch (error) {
    console.warn("Failed to save to session storage:", error)
  }
}

/**
 * Loads folders and decks from session storage
 */
export function loadFoldersAndDecks(): FoldersAndDecksData {
  try {
    const serialized = sessionStorage.getItem(STORAGE_KEY)
    if (serialized) {
      const data = JSON.parse(serialized) as FoldersAndDecksData
      return data
    }
  } catch (error) {
    console.warn("Failed to load from session storage:", error)
  }

  // Return empty state if no data or error
  return { folders: [], decks: [] }
}

/**
 * Clears all vocab data from session storage
 */
export function clearFoldersAndDecks(): void {
  try {
    sessionStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.warn("Failed to clear session storage:", error)
  }
}

/**
 * Checks if session storage has any vocab data
 */
export function hasStoredData(): boolean {
  try {
    return sessionStorage.getItem(STORAGE_KEY) !== null
  } catch (error) {
    return false
  }
}

/**
 * Gets the size of stored data (for debugging)
 */
export function getStorageInfo(): { hasData: boolean; size: number } {
  try {
    const data = sessionStorage.getItem(STORAGE_KEY)
    return {
      hasData: data !== null,
      size: data ? data.length : 0,
    }
  } catch (error) {
    return { hasData: false, size: 0 }
  }
}

