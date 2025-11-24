// src/data/types/index.ts

import { ResourceProvider } from "../resources-config"

// Unified Module type
export type Module = StaticModule | DynamicModule | ExternalResource

/**
 * A module that has been resolved from a chapter's learning path items.
 * Contains the module's key (ID), the actual module object, and disabled status.
 */
export interface ResolvedModule {
  key: string
  module: Module
  disabled: boolean
}

// --- Textbook and Learning Path Types ---

export interface Textbook {
  id: TextbookIDEnum // this will also be the key in TextbookCollection
  name: string
  short_name?: string
  publisher?: string
  publication_year?: number
  cover_image_url?: string
  level: string
  chapterSlugs: string[] // Chapter slugs for this textbook
}
export type TextbookIDEnum = "genki_1" | "genki_2" | "getting_started"

// --- Learning Path Types ---

/**
 * A learning path (textbook or user-created).
 * Combines metadata about the path with its chapters.
 */
export interface LearningPath {
  id: string
  name: string
  short_name: string
  chapters: LearningPathChapter[]
  isUserCreated: boolean
}

/**
 * A chapter in a learning path (textbook or user-created).
 * Contains metadata with module IDs (lightweight, no full module data).
 */
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

/**
 * A learning path chapter with fully resolved module data.
 * Extends LearningPathChapter but replaces module IDs with actual ResolvedModule objects.
 */
export interface LearningPathChapterWithModules
  extends Omit<LearningPathChapter, "learning_path_item_ids"> {
  learning_path_items: ResolvedModule[]
}

// A named set of vocabulary keys (words), for use in modules.
export interface IndividualVocabularySet {
  keys: Set<string>
}

// --- Dynamic Module Types ---

export interface DynamicModule {
  // Anything dynamic that has data needing to be passed
  title: string
  source_type:
  | "vocab-list" // Counts for 2 minutes
  | "vocab-practice" // Each partial answer counts for 15 seconds
  | "sentence-practice" // Each answer counts for 1 minute
  | "vocab-test" // Completing it counts for 15 minutes
  vocab_set_ids: string[]
  description?: string
  instructions?: string
  allowed_practice_modes?: PracticeModeEnum[]
}

// --- Static Module Types ---

export interface StaticModule {
  title: string
  link: string // URL to the static content
  source_type:
  | "grammar-notes"
  | "chapter-vocab-overview"
  | "lesson"
  | "vocab-test"
  | "conjugation-practice" // static base url
  | "counter-practice" // static base url
  | "worksheet"
  | "video"
  | "audio"
  | "reading"
  | "culture-note"
  | "game"
  description?: string
  daily_prog_amount?: number // Todo: default to 10 minutes
}

// --- External Resource Types ---

export interface ExternalResource extends StaticModule {
  external_url: string
  description?: string
  creator_id: ResourceProvider
  prerequisite_vocab_keys?: string[] // Generally, these won't be presented in the
  //learning path until after completion of the modules before them, but these are
  // here in case users want to skip to them but want to know what exactly they should
  // learn first, or for resources that aren't even used in the core paths.
  prerequisite_module_ids?: string[]
  difficulty_rating: "easy" | "medium" | "hard"
}

// --- Vocabulary Types ---

export interface VocabularyItem {
  word: string // The Japanese word/phrase
  furigana: string // Japanese word with hiragana in brackets
  english: string[] // English translations
  part_of_speech?: PartOfSpeech // For verb and adjective conjugation
  info?: string[] // Additional information/notes
  mnemonics?: Mnemonics // Memory aids
  example_sentences?: ExampleSentence[] // Usage examples
  videos?: Video[] // Related video content
  particles?: Particle[] // Associated particles
  overwrite_word?: string // Alternative word for immersion kit matching
  extra?: any // Just notes for myself (anything I might want to add later; not used in the app)
}

export type Mnemonics = {
  kanji: string[] // Kanji mnemonics
  reading: string[] // Reading mnemonics
}

export interface ExampleSentence {
  japanese: (string | { t: string })[]
  english: (string | { t: string })[]
  audio_url?: string
}

export type Video = {
  src: string
  title: string
}

export type Particle = {
  label?: string
  particle: string
}

export type PartOfSpeech =
  | "Ichidan verb"
  | "Godan verb with 'u' ending"
  | "Godan verb with 'tsu' ending"
  | "Godan verb with 'ru' ending"
  | "Godan verb - Iku/Yuku special class"
  | "Godan verb with 'ku' ending"
  | "Godan verb with 'gu' ending"
  | "Godan verb with 'bu' ending"
  | "Godan verb with 'mu' ending"
  | "Godan verb with 'nu' ending"
  | "Godan verb with 'su' ending"
  | "Godan verb with 'ru' ending (irregular verb)"
  | "Godan verb - -aru special class"
  | "Suru verb - included"
  | "Suru verb - compound word"
  | "Suru verb - special class"
  | "Kuru verb - special class"
  | "I-adjective"
  | "Na-adjective"

/**
 * Enhanced vocabulary item with reading aids
 */
export type RichVocabItem = VocabularyItem & {
  hiragana: string[] // Word converted to hiragana
  rubyText: string[] // Ruby (furigana) text components
}
