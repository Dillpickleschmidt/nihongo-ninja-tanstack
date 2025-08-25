// src/features/resolvers/types/index.ts
// Core types for the vocabulary and kanji/radical override stacking system

/**
 * Individual stack configuration (used for both vocabulary and kanji)
 */
export type Stack = {
  name: string // Display name (e.g., "JPDB Frequency", "WaniKani Core")
  enabled: boolean // Whether this stack is active
  locked: boolean // Whether user can disable/reorder
  sourceId: string // Identifier for the data source (vocabulary.ts, wanikani.db, jpdb-keywords.json, etc.)
  priority: number // Stacking order (lower = higher priority)
}

/**
 * Complete override settings for a user
 */
export type OverrideSettings = {
  vocabularyOverrides: Stack[]
  kanjiOverrides: Stack[]
}
