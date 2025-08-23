export type Language =
  | "English"
  | "German"
  | "Spanish"
  | "Russian"
  | "Swedish"
  | "French"
  | "Dutch"
  | "Hungarian"
  | "Slovenian"

export type SearchType = "0" | "1" | "2" | "3"

export type NameType =
  | "Company"
  | "Female"
  | "Male"
  | "Place"
  | "Given"
  | "Organization"
  | "Person"
  | "Product"
  | "RailwayStation"
  | "Surname"
  | "Unclassified"
  | "Work"

export type SuggestionType = "Default" | "KanjiReading"

export interface RequestPayload {
  query: string
  language?: Language
  no_english?: boolean
}

export interface RadicalsPayload {
  radicals: string[]
}

export interface RadicalSearchPayload {
  query: string
}

export interface CompletionPayload {
  input: string
  lang:
    | "en-US"
    | "de-DE"
    | "es-ES"
    | "fr-FR"
    | "nl-NL"
    | "sv-SE"
    | "ru"
    | "hu"
    | "sl-SI"
  search_type: SearchType
  radicals?: string[]
}

export interface ShortNewsPayload {
  after: number
}

export interface DetailedNewsPayload {
  id: number
}

export interface Reading {
  kana: string
  kanji?: string
  furigana?: string
}

export interface Sense {
  glosses: string[]
  pos: string[]
  language: Language
}

export interface PitchItem {
  part: string
  high: boolean
}

export interface Word {
  reading: Reading
  common: boolean
  senses: Sense[]
  audio?: string
  pitch?: PitchItem[]
}

export interface Kanji {
  literal: string
  meanings: string[]
  grade?: number
  stroke_count?: number
  frequency?: number
  jlpt?: number
  onyomi?: string[]
  kunyomi?: string[]
  chinese?: string[]
  korean_r?: string[]
  korean_h?: string[]
  parts?: string[]
  radical?: string
  stroke_frames?: string
}

export interface Name {
  kana: string
  kanji?: string
  transcription: string
  name_type: NameType[]
}

export interface Sentence {
  content: string
  furigana: string
  translation: string
  language: string
}

export interface RadicalSearchItem {
  l: string
}

export interface Suggestion {
  primary: string
  secondary?: string
}

export interface NewsEntry {
  id: number
  title: string
  html: string
  creation_time: number
  trimmed?: boolean
}

export interface WordResponse {
  kanji?: Kanji[]
  words: Word[]
}

export interface KanjiResponse {
  kanji: Kanji[]
}

export interface NameResponse {
  names: Name[]
}

export interface SentenceResponse {
  sentences: Sentence[]
}

export interface RadicalsResponse {
  kanji: string[]
  possible_radicals: string[]
}

export interface RadicalSearchResponse {
  "4": RadicalSearchItem[]
}

export interface CompletionResponse {
  suggestions: Suggestion[]
  suggestion_type: SuggestionType
}

export interface ShortNewsResponse {
  entries: NewsEntry[]
}

export interface DetailedNewsResponse {
  entry: NewsEntry
}

export interface JotobaError {
  code: number
  error: string
  message: string
}
