// features/vocab-page/types.ts
import type { BuiltInDeck } from "@/data/types"

// Built-in deck with import state for vocab page
export interface VocabBuiltInDeck extends BuiltInDeck {
  isImported?: boolean
}

// Chapter with decks for vocab page
export interface Chapter {
  id: string
  number: number
  title: string
  decks: VocabBuiltInDeck[]
}

// Textbook for vocab page
export interface VocabTextbook {
  id: string
  name: string
  short_name: string
  chapters: Chapter[]
}

// UserDeck is now provided by global database types from global.d.ts
// No local interface needed - using Database["public"]["Tables"]["user_decks"]["Row"]

// Folder Navigation Types
export interface FolderNavigationState {
  currentFolderId: number | null  // null = root level
  breadcrumbPath: DeckFolder[]    // path from root to current folder
}

// Content at current folder level (immediate children only)
export interface FolderContent {
  folders: DeckFolder[]    // immediate child folders
  decks: UserDeck[]       // decks in current folder
}

// Expansion state tracking for collapsible UI
export interface ExpansionData {
  textbookId: string
  chapterId: string
}

// Import request from URL parameters or routing
export interface ImportRequest {
  deck: VocabBuiltInDeck
  location: ExpansionData
}

// Constants
export const NEWLY_IMPORTED_TIMEOUT = 2500
export const DEFAULT_EXPANDED_TEXTBOOKS = new Set(["genki_1"])
