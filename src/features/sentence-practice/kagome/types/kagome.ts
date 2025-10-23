/**
 * Kagome WASM Tokenization Types
 * Types for Japanese morphological analysis using Kagome
 */

/**
 * Represents a single token from Kagome morphological analysis
 */
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

/**
 * Grammar pattern match from analysis
 */
export interface GrammarMatch {
  readonly pattern_name: string
  readonly confidence: number
  readonly start_char: number
  readonly end_char: number
  readonly category: "Construction" | "Conjugation"
  readonly conjugation_pattern: string
}

/**
 * Part of Speech (POS) categories from Kagome
 * Common categories:
 * - 名詞 (noun)
 * - 動詞 (verb)
 * - 形容詞 (adjective)
 * - 助詞 (particle)
 * - 助動詞 (auxiliary verb)
 * - 副詞 (adverb)
 */
export type POS =
  | "名詞" // noun
  | "動詞" // verb
  | "形容詞" // adjective
  | "助詞" // particle
  | "助動詞" // auxiliary verb
  | "副詞" // adverb
  | "連体詞" // attributive
  | "接続詞" // conjunction
  | "感動詞" // interjection
  | "接頭詞" // prefix
  | "接尾詞" // suffix
  | string // fallback for any other POS

/**
 * Word class classification from Kagome
 */
export type WordClass = "KNOWN" | "UNKNOWN" | "USER"

/**
 * Kagome tokenization result
 */
export interface KagomeTokenizationResult {
  readonly text: string
  readonly tokens: KagomeToken[]
}

/**
 * Global Kagome WASM functions
 */
declare global {
  function kagome_tokenize(text: string): KagomeToken[]
  function kagome_tokenize_batch(texts: string[]): KagomeToken[][]
}
