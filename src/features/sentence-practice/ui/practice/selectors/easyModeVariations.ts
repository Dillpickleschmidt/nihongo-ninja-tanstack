import type { ProcessedQuestion } from "../../../core/types"
import { SEGMENT_SEPARATOR } from "../../../core/textProcessor"

export interface BlankVariation {
  blankIndex: number
  word: string
  variations: string[]
}

const SPACE_REGEX = /\s+/g

function cleanSegmentText(text: string): string {
  return text.replace(/\x1F/g, "").replace(SPACE_REGEX, "")
}

export function getEasyModeBlankVariations(
  question: ProcessedQuestion,
): BlankVariation[] {
  const variations: BlankVariation[] = []
  const blankIndices: number[] = []

  question.displayAnswer.forEach((segment, index) => {
    if (segment.isBlank) {
      blankIndices.push(index)
    }
  })

  for (const blankIndex of blankIndices) {
    const variationSet = new Set<string>()

    for (const answer of question.canonicalAnswers) {
      const segments = answer.plain.split(SEGMENT_SEPARATOR)
      const segment = segments[blankIndex]
      if (!segment) continue

      const cleaned = cleanSegmentText(segment.trim())
      if (cleaned) {
        variationSet.add(cleaned)
      }
    }

    variations.push({
      blankIndex,
      word: cleanSegmentText(question.displayAnswer[blankIndex].plain),
      variations: Array.from(variationSet).sort(),
    })
  }

  return variations
}
