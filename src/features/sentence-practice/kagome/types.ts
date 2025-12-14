// Kagome WASM Tokenization Types

export interface KagomeToken {
  readonly id: number
  readonly start: number
  readonly end: number
  readonly surface: string
  readonly class: string
  readonly pos: string[]
  readonly base_form: string
  readonly reading: string
  readonly pronunciation: string
  readonly features: string[]
}

export interface PatternMatch {
  readonly pattern_name: string
  readonly confidence: number
  readonly start_char: number
  readonly end_char: number
  readonly category: "Construction" | "Conjugation"
}

export interface CompoundSpan {
  readonly start: number // token index (inclusive)
  readonly end: number // token index (inclusive)
  readonly text: string // dictionary form
}

export interface TokenizationResult {
  tokens: KagomeToken[]
  grammarMatches: PatternMatch[]
  compoundSpans: CompoundSpan[]
}

// Part of Speech categories
export type POS =
  | "名詞" // noun
  | "動詞" // verb
  | "形容詞" // adjective
  | "形容動詞" // na-adjective
  | "助詞" // particle
  | "助動詞" // auxiliary verb
  | "副詞" // adverb
  | "連体詞" // attributive
  | "接続詞" // conjunction
  | "感動詞" // interjection
  | "接頭詞" // prefix
  | "接尾詞" // suffix
  | string

// Global Kagome WASM functions (declared by kagome-worker.js)
declare global {
  function kagome_tokenize(text: string): KagomeToken[]
  function kagome_tokenize_batch(texts: string[]): KagomeToken[][]
}
