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
      return conjugateSegmentInContext(
        segment,
        isPolite,
        segments,
        sourceIndex,
      ).map((text) => ({
        ...createRichSegment(text, isBlank),
        sourceIndex,
        source: segment,
      }))
    },
  )
  return cartesian(perSegmentOptions)
}

function conjugateSegmentInContext(
  segment: SentenceSegment,
  isPolite: boolean,
  segments: SentenceSegment[],
  sourceIndex: number,
): string[] {
  // Casual final か becomes ？, so drop a following sentence-ending 。.
  if (!isPolite && followsSentenceFinalKa(segments, sourceIndex)) {
    return [segment.text.replace(/^\s*。/, "")]
  }

  if (isKaQuestionSegment(segment)) {
    if (isPolite) return [segment.text]
    return [
      isSentenceFinalKa(segments, sourceIndex)
        ? replaceTrailingKaWithQuestionMark(segment.text)
        : segment.text,
    ]
  }

  return conjugateSegment(segment, isPolite)
}

// True when this non-conjugated segment is sentence-final question か:
// last segment ending in か/か。, ending in か。, or ending in か before next 。.
export function isSentenceFinalKa(
  segments: SentenceSegment[],
  sourceIndex: number,
): boolean {
  const segment = segments[sourceIndex]
  if (!isKaQuestionSegment(segment)) return false

  const text = segment.text.trim()
  const isLastSegment = sourceIndex === segments.length - 1
  if (isLastSegment && (text.endsWith("か") || text.endsWith("か。"))) {
    return true
  }
  if (text.endsWith("か。")) return true

  const next = segments[sourceIndex + 1]
  return text.endsWith("か") && next?.text.trim().startsWith("。") === true
}

function isKaQuestionSegment(segment: SentenceSegment | undefined): boolean {
  return !segment?.conjugation && /か。?$/.test(segment?.text.trim() ?? "")
}

function followsSentenceFinalKa(
  segments: SentenceSegment[],
  sourceIndex: number,
): boolean {
  return (
    segments[sourceIndex]?.text.trim().startsWith("。") === true &&
    isSentenceFinalKa(segments, sourceIndex - 1)
  )
}

function replaceTrailingKaWithQuestionMark(text: string): string {
  return text.replace(/か。?$/, "？")
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
