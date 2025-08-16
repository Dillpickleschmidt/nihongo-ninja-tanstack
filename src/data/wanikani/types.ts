// =============================================================================
// Progress State
// =============================================================================
export type ProgressState = "well_known" | "learning" | "not_seen"

// =============================================================================
// Raw Database Row Types
// =============================================================================
export type VocabRow = {
  id: number
  characters: string
  slug: string
}

export type KanjiRow = {
  id: number
  characters: string
  slug: string
  meanings: string // JSON string of meanings
  meaning_mnemonic: string
  reading_mnemonic: string
}

export type RadicalRow = {
  id: number
  characters: string | null
  slug: string
  meanings: string // JSON string of meanings
  meaning_mnemonic: string
}

// =============================================================================
// Relation Tables
// =============================================================================
export type VocabKanjiRelation = {
  vocab_id: number
  kanji_id: number
}

export type KanjiRadicalRelation = {
  kanji_id: number
  radical_id: number
}

// =============================================================================
// WaniKani API Types
// =============================================================================
export interface WaniKaniMeaning {
  meaning: string
  primary: boolean
}
