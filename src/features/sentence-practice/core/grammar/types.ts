// core/grammar/types.ts
export type Honorific =
  | "さん"
  | "くん"
  | "ちゃん"
  | "先生[せんせい]"
  | "様[さま]"

export type SinglePronoun =
  | "私[わたし]"
  | "私[わたくし]"
  | "僕[ぼく]"
  | "俺[おれ]"
  | "あたし"
  | "うち"

export type PluralPronoun =
  | "私たち[わたしたち]"
  | "僕たち[ぼくたち]"
  | "俺たち[おれたち]"

export interface GrammarSegment {
  type: "honorific" | "pronoun" | "particle"
  value: string
  position: "prefix" | "suffix" | "standalone"
}

export interface GrammarModification {
  type: "add" | "remove" | "replace"
  segment: GrammarSegment
  replacement?: GrammarSegment
}
