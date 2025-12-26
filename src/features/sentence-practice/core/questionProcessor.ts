import type { Doc } from "../../../../convex/_generated/dataModel"
import type { ProcessedQuestion, RichSegment, RichAnswer } from "./types"
import { processSegments } from "./segmentProcessor"
import { generateValidAnswers } from "./answer-processing/variationGenerator"
import { SEGMENT_SEPARATOR } from "./textProcessor"

// Processes segments (polite + casual) and generates all valid answer strings
export function prepareQuestion(
  question: Doc<"sentencePracticeQuestions">,
): ProcessedQuestion {
  const { english, hint, answers: rawAnswers } = question
  const processedAnswers: RichSegment[][] = []

  for (const [sourceIndex, rawAnswer] of rawAnswers.entries()) {
    const politeSegments = processSegments(rawAnswer.segments, true)
    processedAnswers.push(politeSegments)

    const casualSegments = processSegments(rawAnswer.segments, false)
    const politeJoined = politeSegments
      .map((s) => s.original)
      .join(SEGMENT_SEPARATOR)
    const casualJoined = casualSegments
      .map((s) => s.original)
      .join(SEGMENT_SEPARATOR)
    if (casualJoined !== politeJoined) {
      processedAnswers.push(casualSegments)
    }
  }

  // Use Map for deduplication (keyed by original string)
  const validAnswers = new Map<string, RichAnswer>()
  for (const [sourceIndex, rawAnswer] of rawAnswers.entries()) {
    const politeSegments = processSegments(rawAnswer.segments, true)
    for (const answer of generateValidAnswers(
      politeSegments,
      sourceIndex,
      true,
    )) {
      validAnswers.set(answer.original, answer)
    }

    const casualSegments = processSegments(rawAnswer.segments, false)
    const politeJoined = politeSegments
      .map((s) => s.original)
      .join(SEGMENT_SEPARATOR)
    const casualJoined = casualSegments
      .map((s) => s.original)
      .join(SEGMENT_SEPARATOR)
    if (casualJoined !== politeJoined) {
      for (const answer of generateValidAnswers(
        casualSegments,
        sourceIndex,
        false,
      )) {
        validAnswers.set(answer.original, answer)
      }
    }
  }

  return {
    english,
    hint,
    answers: processedAnswers,
    validAnswers: Array.from(validAnswers.values()),
  }
}
