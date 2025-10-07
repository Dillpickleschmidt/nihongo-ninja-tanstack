// core/conjugation/types.ts
export type ConjugationForm =
  | "normal"
  | "te-form"
  | "tari-form"
  | "tai-form"
  | "potential"
  | "volitional"
  | "imperative"
  | "conditional"
  | "passive"
  | "causative"
  | "causativePassive"
  | "adverb"

export type ConjugationOptions = {
  polite: boolean
  negative: boolean
  past: boolean
  adverb?: boolean
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

export type ConjugatedWord = {
  word: string
  pos: PartOfSpeech
  form: ConjugationForm
  polarity: "positive" | "negative"
  tense: "past" | "non-past"
  politeOnly?: boolean
  shortOnly?: boolean
}

export type BlankableWord = {
  word: string | ConjugatedWord
  blank: boolean
}

export type ConjugatableSegment = string | ConjugatedWord | BlankableWord

export type UnprocessedAnswer = {
  segments: ConjugatableSegment[]
  notes?: string
}

export type UnprocessedQuestion = {
  english: string
  hint?: string
  answers: UnprocessedAnswer[]
}
