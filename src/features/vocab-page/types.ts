// features/vocab-page/types.ts
import type { BuiltInDeck } from "@/data/types"

export interface Chapter {
  id: string
  number: number
  title: string
  parts: BuiltInDeck[]
}

export interface Textbook {
  id: string
  name: string
  short_name: string
  chapters: Chapter[]
}

export interface UserDeck {
  id: string
  name: string
  importedAt: Date
  source: "built-in" | "anki" | "wanikani" | "jpdb"
}

export interface PanelState {
  leftPanelOpen: boolean
  rightPanelOpen: boolean
}

export interface ExpansionData {
  textbookId: string
  chapterId: string
}

export interface ImportRequest {
  deck: BuiltInDeck
  location: ExpansionData
}

export interface VocabPageState {
  panelState: PanelState
  expandedTextbooks: Set<string>
  expandedChapters: Set<string>
  userDecks: UserDeck[]
}
