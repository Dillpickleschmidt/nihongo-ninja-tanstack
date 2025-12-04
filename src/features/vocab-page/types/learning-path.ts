// features/vocab-page/types/learning-path.ts
// Types related to learning paths and textbooks

// types related to learning paths and their structure

/**
 * Content at current folder level (immediate children only)
 */
export interface FolderContent {
  folders: DeckFolder[] // immediate child folders
  decks: UserDeck[] // decks in current folder
}
