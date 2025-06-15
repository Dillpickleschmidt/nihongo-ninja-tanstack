export type ProgressState = "well_known" | "learning" | "not_seen"

export interface Radical {
  id: number
  characters: string | null
  slug: string
  progress: ProgressState
}

export interface Kanji {
  id: number
  characters: string
  slug: string
  radicals: Radical[]
  progress: ProgressState
}

export interface VocabHierarchy {
  id: number
  characters: string
  slug: string
  kanji: Kanji[]
  progress: ProgressState
}

export interface HierarchySummary {
  vocab: { total: number; wellKnown: number; learning: number }
  kanji: { total: number; wellKnown: number; learning: number }
  radicals: { total: number; wellKnown: number; learning: number }
}

// The complete data structure returned by the server function.
export interface FullHierarchyData {
  hierarchy: VocabHierarchy[]
  uniqueKanji: Kanji[]
  uniqueRadicals: Radical[]
  summary: HierarchySummary
}

// --- Raw Database Row and Relation Types ---
export type VocabRow = { id: number; characters: string; slug: string }
export type KanjiRow = Omit<Kanji, "radicals" | "progress">
export type RadicalRow = Omit<Radical, "progress">
export type VocabKanjiRelation = { vocab_id: number; kanji_id: number }
export type KanjiRadicalRelation = { kanji_id: number; radical_id: number }

// --- User Progress Data Type ---

// Represents the structure of the user's progress data (e.g., from FSRS).
export type UserProgressData = {
  vocabProgress: Map<number, { stability: number }>
  kanjiProgress: Map<number, { stability: number }>
  radicalProgress: Map<number, { stability: number }>
}
