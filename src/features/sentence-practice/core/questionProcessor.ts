import type {
  SentenceAnswer,
  SentenceAnswerToken,
} from "../../../../convex/validators"
import type { ProcessedQuestion, RichSegment, RichAnswer } from "./types"
import { prepareAnswersForMatching } from "./answer-processing/preparedMatching"
import { processSegments } from "./segmentProcessor"
import { generateValidAnswers } from "./answer-processing/variationGenerator"
import { SEGMENT_SEPARATOR } from "./textProcessor"

// Processes segments (polite + casual) and generates all valid answer strings
export function prepareQuestion(question: {
  english: string
  hint?: string
  answers: SentenceAnswer[]
  preparedAnswerTokens: SentenceAnswerToken[][]
}): ProcessedQuestion {
  const { english, hint, answers: rawAnswers } = question
  const processedAnswers: RichSegment[][] = []
  const seenSequences = new Set<string>()
  const validAnswers = new Map<string, RichAnswer>()

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
    for (const answer of generateValidAnswers(seq, sourceIndex, isPolite)) {
      validAnswers.set(answer.original, { ...answer, notes })
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

  const answerList = Array.from(validAnswers.values())

  return {
    english,
    hint,
    preparedAnswerTokens: question.preparedAnswerTokens,
    displayAnswer: processedAnswers[0] ?? [],
    answers: processedAnswers,
    validAnswers: answerList,
    preparedAnswersForMatching: prepareAnswersForMatching(answerList),
  }
}

function joinSegments(segments: RichSegment[]): string {
  return segments.map((segment) => segment.original).join(SEGMENT_SEPARATOR)
}
