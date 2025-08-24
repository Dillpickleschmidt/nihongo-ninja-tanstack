// src/features/resolvers/types/index.ts
// Core types for the vocabulary and kanji/radical override stacking system

/**
 * Source types for vocabulary and kanji override stacks
 */
export type StackSourceType =
  | "user-deck" // User-created vocabulary decks
  | "jpdb-import" // Imported JPDB data
  | "wanikani-import" // Imported WaniKani data
  | "built-in" // Built-in vocabulary collections (textbooks, etc.)
  | "json" // Custom JSON imports

/**
 * Individual stack configuration (used for both vocabulary and kanji)
 */
export type Stack = {
  name: string // Display name (e.g., "JPDB Frequency", "WaniKani Core")
  enabled: boolean // Whether this stack is active
  locked: boolean // Whether user can disable/reorder
  sourceType: StackSourceType
  sourceId: string // Identifier for the data source (deck ID, import ID, etc.)
  priority: number // Stacking order (lower = higher priority)
}

/**
 * Complete override settings for a user
 */
export type OverrideSettings = {
  vocabularyOverrides: Stack[]
  kanjiOverrides: Stack[]
}
