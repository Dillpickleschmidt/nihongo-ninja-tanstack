// src/data/types/index.ts
// --- Top-Level Collection Types ---

import { ResourceProvider } from "../resources-config"

// Textbooks: Keyed by a unique textbook ID
export type TextbookCollection = Record<TextbookIDEnum, Textbook>

// StaticModules: Keyed by a unique static module ID
export type StaticModuleCollection = Record<string, StaticModule>

// DynamicModules: Keyed by a unique dynamic module ID
export type DynamicModuleCollection = Record<string, DynamicModule>

// External Resources: Keyed by a unique resource ID
export type ExternalResourceCollection = Record<string, ExternalResource>

// Vocabulary: Keyed by the vocabulary word itself
export type VocabularyCollection = Record<string, VocabularyItem>

// All vocabulary sets, keyed by their unique ID.
export type VocabularySetCollection = Record<string, IndividualVocabularySet>

// --- Textbook and Learning Path Types ---

export interface Textbook {
  id: TextbookIDEnum // this will also be the key in TextbookCollection
  name: string
  short_name?: string
  publisher?: string
  publication_year?: number
  cover_image_url?: string
  level: string
  chapters: BuiltInDeck[]
}
export type TextbookIDEnum = "genki_1" | "genki_2"

export interface LearningPathItem {
  type: "static_module" | "dynamic_module" | "external_resource"
  id: string
  daily_prog_amount?: number // number of minutes counted towards daily goal
}

// --- Deck Types ---

// A textbook chapter deck with learning paths and resources
export interface Deck {
  id: string // e.g., "genki_1_ch1"
  slug: string // e.g., "chapter-1"
  title: string
  description?: string
  disabled?: boolean
  external_resource_ids?: string[]
}

export type BuiltInDeck = Deck & {
  chapter_number: number
  learning_path_items: LearningPathItem[]
  isImported?: boolean
}

// A named set of vocabulary keys (words), for use in modules.
export interface IndividualVocabularySet {
  keys: string[]
}

// --- Dynamic Module Types ---

export interface DynamicModule {
  // Anything dynamic that has data needing to be passed
  title: string
  session_type:
    | "vocab-list" // Counts for 2 minutes
    | "vocab-practice" // Each partial answer counts for 15 seconds
    | "sentence-practice" // Each answer counts for 1 minute
    | "vocab-test" // Completing it counts for 15 minutes
  vocab_set_ids: string[]
  description?: string
  instructions?: string
}

// --- Static Module Types ---

export interface StaticModule {
  title: string
  link: string // URL to the static content
  lesson_type:
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
  daily_prog_amount?: number // Todo: default to 10 minutes
}

// --- External Resource Types ---

export interface ExternalResource {
  title: string
  description?: string
  internal_url?: string
  external_url: string
  creator_id: ResourceProvider
  prerequisite_vocab_keys?: string[] // Generally, these won't be presented in the
  //learning path until after completion of the modules before them, but these are
  // here in case users want to skip to them but want to know what exactly they should
  // learn first, or for resources that aren't even used in the core paths.
  prerequisite_module_ids?: string[]
  difficulty_rating: "easy" | "medium" | "hard"
  resource_type:
    | "video"
    | "article"
    | "podcast"
    | "tool"
    | "forum"
    | "news"
    | "textbook_companion"
    | "listening_practice"
    | "reading_practice"
    | "grammar_guide"
    | "other"
  daily_prog_amount?: number // Todo: default to 15 minutes if not overridden in LearningPathItem
}

// --- Vocabulary Types ---

export interface VocabularyItem {
  word: string // The Japanese word/phrase
  furigana: string // Japanese word with hiragana in brackets
  english: string[] // English translations
  chapter: number // TEMPORARY, WILL BE REMOVED
  part_of_speech?: PartOfSpeech // For verb and adjective conjugation
  info?: string[] // Additional information/notes
  mnemonics?: string[] // Memory aids
  example_sentences?: ExampleSentence[] // Usage examples
  videos?: Video[] // Related video content
  particles?: Particle[] // Associated particles
  overwrite_word?: string // Alternative word for immersion kit matching
  extra?: any // Just notes for myself (anything I might want to add later; not used in the app)
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
