// src/features/import-page/types.ts
export type ItemStatus = "learning" | "decent" | "mastered" | null

export interface ImportState {
  [itemId: string]: ItemStatus
}

// Import-related types
export interface ImportItem {
  id: string
  main: string // Kanji or Grammar Pattern
  meaning: string // English definition
  status?: ItemStatus // Optional initial status
}

export interface ImportSubCategory {
  id: string
  title: string
  description?: string
  items: ImportItem[]
}

export interface ImportCategory {
  id: string
  title: string
  subcategories: ImportSubCategory[]
}

export interface JLPTLevel {
  id: string
  label: string // "N5"
  description: string // "Beginner"
  color: string // For UI accents
  categories: ImportCategory[]
}
