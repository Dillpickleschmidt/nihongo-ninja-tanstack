// core/conjugation/types.ts
// Conjugation engine types (runtime only, not stored in DB)
import type { PartOfSpeech } from "convex/validators"

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

// Used by conjugation engine for runtime conjugation
export type ConjugatedWord = {
  word: string
  pos: PartOfSpeech
  form: ConjugationForm
  polarity: "positive" | "negative"
  tense: "past" | "non-past"
}
