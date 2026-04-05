export type SoundChangeType =
  | "generic"
  | "dates"
  | "hToP"
  | "hToP/B"
  | "p"
  | "k"
  | "s"
  | "t"
  | "kToG"
  | "sToZ"

export type NumberOverride = {
  number: number
  reading: string
}

export type CounterPattern = {
  id: string
  baseReading: string
  soundChangeType?: SoundChangeType
  numberOverrides?: NumberOverride[]
  range?: [number, number]
}

export type CounterPatternGroup = {
  chapter: number
  title: string
  patterns: CounterPattern[]
}

export type VocabItem = {
  word: string
  pluralWord: string
  patternId: string
}

export type GeneratedQuestion = {
  number: number
  vocab: VocabItem
  pattern: CounterPattern
  correctReading: string
}

export type Question = {
  word: string
  counter: string
  givenAnswer: string
  correctReading: string
  correct: boolean
}
