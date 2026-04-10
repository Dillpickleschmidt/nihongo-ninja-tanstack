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
  const validAnswers = new Map<string, RichAnswer>()

  for (const [sourceIndex, rawAnswer] of rawAnswers.entries()) {
    const politeSegments = processSegments(rawAnswer.segments, true)
    processedAnswers.push(politeSegments)

    for (const answer of generateValidAnswers(politeSegments, sourceIndex, true)) {
      validAnswers.set(answer.original, answer)
    }

    const casualSegments = processSegments(rawAnswer.segments, false)

    const politeJoined = joinSegments(politeSegments)
    const casualJoined = joinSegments(casualSegments)

    if (casualJoined !== politeJoined) {
      processedAnswers.push(casualSegments)

      for (const answer of generateValidAnswers(casualSegments, sourceIndex, false)) {
        validAnswers.set(answer.original, answer)
      }
    }
  }

  return {
    english,
    hint,
    displayAnswer: processedAnswers[0] ?? [],
    answers: processedAnswers,
    validAnswers: Array.from(validAnswers.values()),
  }
}

function joinSegments(segments: RichSegment[]): string {
  return segments.map((segment) => segment.original).join(SEGMENT_SEPARATOR)
}
