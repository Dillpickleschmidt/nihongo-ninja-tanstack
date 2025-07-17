// src/data/wanikani/types.ts
export type ProgressState = "well_known" | "learning" | "not_seen"

export interface Radical {
  id: number
  characters: string | null
  slug: string
  meanings: string[]
  progress?: ProgressState
  meaning_mnemonic: string
}

export interface Kanji {
  id: number
  characters: string
  slug: string
  radicals: Radical[]
  meanings: string[]
  progress?: ProgressState
  meaning_mnemonic: string
  reading_mnemonic: string
}

export interface VocabHierarchy {
  id: number
  characters: string
  slug: string
  kanji: Kanji[]
  progress?: ProgressState
}

export interface HierarchySummary {
  vocab: { total: number; wellKnown: number; learning: number }
  kanji: { total: number; wellKnown: number; learning: number }
  radicals: { total: number; wellKnown: number; learning: number }
}

export interface FullHierarchyData {
  hierarchy: VocabHierarchy[]
  uniqueKanji: Kanji[]
  uniqueRadicals: Radical[]
  summary?: HierarchySummary
}

// --- Raw Database Row and Relation Types ---
export type VocabRow = { id: number; characters: string; slug: string }
export type KanjiRow = {
  id: number
  characters: string
  slug: string
  meanings: string
  meaning_mnemonic: string
  reading_mnemonic: string
}
export type RadicalRow = {
  id: number
  characters: string | null
  slug: string
  meanings: string
  meaning_mnemonic: string
}

export type VocabKanjiRelation = { vocab_id: number; kanji_id: number }
export type KanjiRadicalRelation = { kanji_id: number; radical_id: number }

export interface WaniKaniMeaning {
  meaning: string
  primary: boolean
}
