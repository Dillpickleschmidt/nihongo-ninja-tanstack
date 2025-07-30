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

// User's imported deck
export interface UserDeck {
  id: string
  name: string
  importedAt: Date
  source: "textbook" | "anki" | "wanikani" | "jpdb"
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
