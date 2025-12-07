// src/data/types/index.ts

export type TextbookIDEnum = "genki_1" | "genki_2" | "getting_started"

export interface LearningPathChapter {
  slug: string // e.g., "chapter-1"
  title: string
  description?: string
  disabled?: boolean
  heading?: string
  features?: string[]
  learning_path_item_ids: string[] // Module IDs for this chapter
  disabled_modules?: string[] // Module IDs that are disabled
}
