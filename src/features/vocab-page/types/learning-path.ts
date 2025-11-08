// features/vocab-page/types/learning-path.ts
// Types related to learning paths and textbooks

import type { LearningPathChapter } from "@/data/types"

/**
 * A vocabulary module from static textbook data.
 * Represents a specific vocabulary practice set within a textbook chapter.
 */
export interface VocabModule extends LearningPathChapter {
  isImported?: boolean
}

/**
 * Content at current folder level (immediate children only)
 */
export interface FolderContent {
  folders: DeckFolder[] // immediate child folders
  decks: UserDeck[] // decks in current folder
}
