import type { Doc } from "../../../../convex/_generated/dataModel"
import type { ProcessedQuestion, RichSegment, RichAnswer } from "./types"
import { processSegments } from "./segmentProcessor"
import { generateValidAnswers } from "./variationGenerator"
import { SEGMENT_SEPARATOR } from "./textProcessor"

// Processes segments (polite + casual) and generates all valid answer strings
export function prepareQuestion(question: Doc<"sentencePracticeQuestions">): ProcessedQuestion {
  const { english, hint, answers: rawAnswers } = question
  const processedAnswers: RichSegment[][] = []

  for (const rawAnswer of rawAnswers) {
    const politeSegments = processSegments(rawAnswer.segments, true)
    processedAnswers.push(politeSegments)

    const casualSegments = processSegments(rawAnswer.segments, false)
    const politeJoined = politeSegments.map((s) => s.original).join(SEGMENT_SEPARATOR)
    const casualJoined = casualSegments.map((s) => s.original).join(SEGMENT_SEPARATOR)
    if (casualJoined !== politeJoined) {
      processedAnswers.push(casualSegments)
    }
  }

  // Use Map for deduplication (keyed by original string)
  const validAnswers = new Map<string, RichAnswer>()
  for (const segments of processedAnswers) {
    for (const answer of generateValidAnswers(segments)) {
      validAnswers.set(answer.original, answer)
    }
  }

  return { english, hint, answers: processedAnswers, validAnswers: Array.from(validAnswers.values()) }
}
