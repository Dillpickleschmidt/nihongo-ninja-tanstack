// src/features/vocab-page/storage/sessionStorage.ts

/**
 * Session storage utilities for unsigned users
 * Provides persistent state across browser sessions without database
 */

import type { FoldersAndDecksData } from "@/features/supabase/db/folder"
import { isServer } from "solid-js/web"

const STORAGE_KEY = "nihongo-ninja-vocab-data"

/**
 * Saves folders and decks to session storage
 */
export function saveFoldersAndDecks(data: FoldersAndDecksData): void {
  // No-op during SSR
  if (isServer) {
    return
  }

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
  // Return empty state during SSR
  if (isServer) {
    return { folders: [], decks: [], shareStatus: {} }
  }

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
  return { folders: [], decks: [], shareStatus: {} }
}

/**
 * Clears all vocab data from session storage
 */
export function clearFoldersAndDecks(): void {
  // No-op during SSR
  if (isServer) {
    return
  }

  try {
    sessionStorage.removeItem(STORAGE_KEY)
  } catch (error) {
    console.warn("Failed to clear session storage:", error)
  }
}
