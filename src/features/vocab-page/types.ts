export interface BuiltInDeck {
  id: string
  name: string
  description: string
  isImported: boolean
}

export interface Chapter {
  id: string
  number: number
  title: string
  parts: BuiltInDeck[]
}

export interface Textbook {
  id: string
  name: string
  shortName: string
  chapters: Chapter[]
}

import type { ServiceDeckEnum } from "@/data/types"

export interface UserDeck {
  id: string
  name: string
  importedAt: Date
  source: "textbook" | "user" | ServiceDeckEnum
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
