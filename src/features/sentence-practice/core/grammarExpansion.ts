import type { SentenceSegment } from "../../../../convex/validators"
import type { ProcessedSegment, RichSegment } from "./types"
import { isSentenceFinalKa } from "./segmentProcessor"
import { createRichSegment, SEGMENT_SEPARATOR } from "./textProcessor"

type GrammarExpansionContext = {
  sourceSegments: SentenceSegment[]
  isPolite: boolean
}

export function expandGrammarSequences(
  sequences: ProcessedSegment[][],
  context: GrammarExpansionContext,
): ProcessedSegment[][] {
  let expanded = sequences
  expanded = addCasualExplanatoryQuestionVariants(expanded, context)
  return dedupeSequences(expanded)
}

function addCasualExplanatoryQuestionVariants(
  sequences: ProcessedSegment[][],
  context: GrammarExpansionContext,
): ProcessedSegment[][] {
  if (context.isPolite || !endsWithSourceKa(context.sourceSegments)) {
    return sequences
  }

  const variants: ProcessedSegment[][] = []

  for (const sequence of sequences) {
    const variant = createCasualExplanatoryQuestionVariant(
      sequence,
      context.sourceSegments,
    )
    if (variant) variants.push(variant)
  }

  return [...sequences, ...variants]
}

function createCasualExplanatoryQuestionVariant(
  sequence: ProcessedSegment[],
  sourceSegments: SentenceSegment[],
): ProcessedSegment[] | undefined {
  const questionSourceIndex = getQuestionKaSourceIndex(sourceSegments)
  if (questionSourceIndex === undefined) return undefined

  const questionSegmentIndex = sequence.findIndex(
    (segment) => segment.sourceIndex === questionSourceIndex,
  )
  if (questionSegmentIndex < 0) return undefined
  const questionPunctuation = getQuestionPunctuation(
    sequence[questionSegmentIndex].original,
  )
  if (questionPunctuation === undefined) return undefined

  const predicateSourceIndex = getPredicateSourceIndex(
    sourceSegments,
    questionSourceIndex,
  )
  if (predicateSourceIndex === undefined) return undefined

  const predicateSegmentIndex = findLastIndex(
    sequence,
    (segment) => segment.sourceIndex === predicateSourceIndex,
  )
  if (predicateSegmentIndex < 0) return undefined

  const predicateSegment = sequence[predicateSegmentIndex]
  if (isNegativeConjugatedSegment(predicateSegment.source)) return undefined
  if (shouldSkipPredicate(predicateSegment)) return undefined

  if (isCopulaQuestion(sourceSegments)) {
    return createCopulaQuestionVariant(
      sequence,
      sourceSegments,
      predicateSegmentIndex,
      questionSegmentIndex,
      questionPunctuation,
    )
  }

  return replaceRange(sequence, questionSegmentIndex, questionSegmentIndex + 1, [
    createProcessedSegment(`の？${questionPunctuation}`, sequence[questionSegmentIndex]),
  ])
}

function createCopulaQuestionVariant(
  sequence: ProcessedSegment[],
  sourceSegments: SentenceSegment[],
  predicateSegmentIndex: number,
  questionSegmentIndex: number,
  questionPunctuation: string,
): ProcessedSegment[] | undefined {
  const copulaSourceIndex = questionSegmentIndexSourceIndex(sourceSegments)
  const copulaSegmentIndex = findLastIndex(
    sequence,
    (segment) => segment.sourceIndex === copulaSourceIndex,
  )
  if (copulaSegmentIndex < 0) return undefined

  const suffix = isIAdjective(sourceSegments[sourceSegments.length - 3])
    ? `の？${questionPunctuation}`
    : `なの？${questionPunctuation}`

  return replaceRange(sequence, copulaSegmentIndex, questionSegmentIndex + 1, [
    createProcessedSegment(suffix, sequence[copulaSegmentIndex]),
  ])
}

function getQuestionPunctuation(original: string): string | undefined {
  return original === "？" ? "" : undefined
}

function getPredicateSourceIndex(
  sourceSegments: SentenceSegment[],
  questionSourceIndex: number,
): number | undefined {
  if (isCopulaQuestion(sourceSegments)) return questionSourceIndex - 2
  if (questionSourceIndex >= 1) return questionSourceIndex - 1
  return undefined
}

function endsWithSourceKa(sourceSegments: SentenceSegment[]): boolean {
  return getQuestionKaSourceIndex(sourceSegments) !== undefined
}

function getQuestionKaSourceIndex(
  sourceSegments: SentenceSegment[],
): number | undefined {
  const index = sourceSegments.findIndex((_, index) =>
    isSentenceFinalKa(sourceSegments, index),
  )
  return index >= 0 ? index : undefined
}

function isCopulaQuestion(sourceSegments: SentenceSegment[]): boolean {
  const questionSourceIndex = getQuestionKaSourceIndex(sourceSegments)
  return (
    questionSourceIndex !== undefined &&
    questionSourceIndex >= 2 &&
    sourceSegments[questionSourceIndex - 1]?.text === "です"
  )
}

function questionSegmentIndexSourceIndex(
  sourceSegments: SentenceSegment[],
): number {
  const questionSourceIndex = getQuestionKaSourceIndex(sourceSegments)
  return (questionSourceIndex ?? sourceSegments.length - 1) - 1
}

function isIAdjective(segment: SentenceSegment | undefined): boolean {
  return segment?.conjugation?.pos === "I-adjective"
}

function isNegativeConjugatedSegment(segment: SentenceSegment | undefined): boolean {
  return segment?.conjugation?.polarity === "negative"
}

function shouldSkipPredicate(segment: ProcessedSegment): boolean {
  const sourceText = segment.source.text
  const original = segment.original.replace(//g, "").trim()

  return (
    sourceText === "どう" ||
    sourceText.endsWith("どう") ||
    original === "どう" ||
    original.endsWith("どう") ||
    original.endsWith("の") ||
    original.endsWith("ん")
  )
}

function createProcessedSegment(
  original: string,
  sourceSegment: ProcessedSegment,
): ProcessedSegment {
  return {
    ...createRichSegment(original, sourceSegment.isBlank),
    sourceIndex: sourceSegment.sourceIndex,
    source: sourceSegment.source,
  }
}

function replaceRange<T>(
  items: T[],
  start: number,
  end: number,
  replacement: T[],
): T[] {
  return [...items.slice(0, start), ...replacement, ...items.slice(end)]
}

function dedupeSequences<T extends RichSegment>(sequences: T[][]): T[][] {
  const seen = new Set<string>()
  const deduped: T[][] = []

  for (const sequence of sequences) {
    const key = sequenceKey(sequence)
    if (seen.has(key)) continue
    seen.add(key)
    deduped.push(sequence)
  }

  return deduped
}

function sequenceKey(sequence: RichSegment[]): string {
  return sequence.map((segment) => segment.original).join(SEGMENT_SEPARATOR)
}

function findLastIndex<T>(items: T[], predicate: (item: T) => boolean): number {
  for (let i = items.length - 1; i >= 0; i--) {
    if (predicate(items[i])) return i
  }
  return -1
}
