import type { SentenceSegment } from "convex/validators"
import type { ProcessedSegment } from "./types"
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

// Returns every conjugated variant for the segment. Plain-text segments
// yield a single-element array.
export function conjugateSegment(
  segment: SentenceSegment,
  isPolite: boolean,
): string[] {
  const transformed = transformToConjugatedWord(segment)
  const results = conjugationEngine.conjugateSegments([transformed], isPolite)
  return results[0]
}

// Conjugates each segment, fans out the per-segment variants into complete
// sequences via cartesian product. A segment that conjugates to N forms
// multiplies the number of returned sequences by N.
export function processSegments(
  segments: SentenceSegment[],
  isPolite: boolean,
): ProcessedSegment[][] {
  const perSegmentOptions: ProcessedSegment[][] = segments.map(
    (segment, sourceIndex) => {
      const isBlank = segment.blank ?? false
      return conjugateSegment(segment, isPolite).map((text) => ({
        ...createRichSegment(text, isBlank),
        sourceIndex,
        source: segment,
      }))
    },
  )
  return cartesian(perSegmentOptions)
}

function cartesian<T>(arrays: T[][]): T[][] {
  let acc: T[][] = [[]]
  for (const options of arrays) {
    const next: T[][] = []
    for (const prefix of acc) {
      for (const item of options) {
        next.push([...prefix, item])
      }
    }
    acc = next
  }
  return acc
}
