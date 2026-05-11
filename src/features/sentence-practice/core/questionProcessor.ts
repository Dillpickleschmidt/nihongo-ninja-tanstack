import type {
  SentenceAnswer,
  SentenceAnswerToken,
} from "../../../../convex/validators"
import type { ProcessedQuestion, RichSegment, RichAnswer } from "./types"
import { prepareAnswersForMatching } from "./answer-processing/preparedMatching"
import { processSegments } from "./segmentProcessor"
import {
  generateAcceptedAnswers,
  generateCanonicalAnswers,
} from "./answer-processing/variationGenerator"
import { SEGMENT_SEPARATOR } from "./textProcessor"

// Processes segments (polite + casual), canonical answers, and input aliases
export function prepareQuestion(question: {
  english: string
  hint?: string
  answers: SentenceAnswer[]
  canonicalAnswerTokens: SentenceAnswerToken[][]
}): ProcessedQuestion {
  const { english, hint, answers: rawAnswers } = question
  const processedAnswers: RichSegment[][] = []
  const seenSequences = new Set<string>()
  const canonicalAnswers = new Map<string, RichAnswer>()

  const addSequence = (
    seq: RichSegment[],
    sourceIndex: number,
    isPolite: boolean,
    notes: string | undefined,
  ) => {
    const key = joinSegments(seq)
    if (!seenSequences.has(key)) {
      seenSequences.add(key)
      processedAnswers.push(seq)
    }
    for (const answer of generateCanonicalAnswers(seq, sourceIndex, isPolite)) {
      canonicalAnswers.set(answer.original, { ...answer, notes })
    }
  }

  for (const [sourceIndex, rawAnswer] of rawAnswers.entries()) {
    const register = rawAnswer.register
    const runPolite = register !== "casual"
    const runCasual = register !== "polite"

    if (runPolite) {
      for (const seq of processSegments(rawAnswer.segments, true)) {
        addSequence(seq, sourceIndex, true, rawAnswer.notes)
      }
    }

    if (runCasual) {
      for (const seq of processSegments(rawAnswer.segments, false)) {
        addSequence(seq, sourceIndex, false, rawAnswer.notes)
      }
    }
  }

  const canonicalAnswerList = Array.from(canonicalAnswers.values())
  const acceptedAnswerList = generateAcceptedAnswers(canonicalAnswerList)

  return {
    english,
    hint,
    canonicalAnswerTokens: question.canonicalAnswerTokens,
    displayAnswer: processedAnswers[0] ?? [],
    answers: processedAnswers,
    canonicalAnswers: canonicalAnswerList,
    acceptedAnswers: acceptedAnswerList,
    preparedAnswersForMatching: prepareAnswersForMatching(acceptedAnswerList),
  }
}

function joinSegments(segments: RichSegment[]): string {
  return segments.map((segment) => segment.original).join(SEGMENT_SEPARATOR)
}
