import type { SentenceSegment } from "convex/validators"
import type { RichSegment } from "./types"
import { ConjugationEngine, type ConjugatedWord } from "./conjugation"
import { createRichSegment } from "./textProcessor"

const conjugationEngine = new ConjugationEngine()

function transformToConjugatedWord(
  segment: SentenceSegment,
): string | ConjugatedWord {
  if (!segment.conjugation) {
    return segment.text
  }
  return {
    word: segment.text,
    pos: segment.conjugation.pos,
    form: segment.conjugation.form ?? "normal",
    polarity: segment.conjugation.polarity,
    tense: segment.conjugation.tense,
  } as ConjugatedWord
}

// Returns conjugated text (first variant if multiple exist)
export function conjugateSegment(
  segment: SentenceSegment,
  isPolite: boolean,
): string {
  const transformed = transformToConjugatedWord(segment)
  const results = conjugationEngine.conjugateSegments([transformed], isPolite)
  return results[0][0]
}

// Conjugates and pre-computes all text representations
export function processSegments(
  segments: SentenceSegment[],
  isPolite: boolean,
): RichSegment[] {
  return segments.map((segment) => {
    const conjugatedText = conjugateSegment(segment, isPolite)
    return createRichSegment(conjugatedText, segment.blank ?? false)
  })
}
