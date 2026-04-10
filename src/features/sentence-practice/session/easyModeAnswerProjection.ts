import type { ProcessedQuestion, RichSegment } from "../core/types"
import { anyContainsKanji } from "../core/textProcessor"

export type BlankDraft = string | null | undefined

function removeLayoutSpacing(text: string): string {
  return text.replace(/\s+/g, "")
}

export function createBlankDraftsForQuestion(
  question: ProcessedQuestion | undefined,
): BlankDraft[] {
  if (!question) return []
  return question.displayAnswer.map((segment) =>
    segment.isBlank ? null : undefined,
  )
}

export function composeCanonicalAnswerText(
  displayAnswer: RichSegment[],
  blankDrafts: BlankDraft[],
): string {
  const blankValues = blankDrafts.filter(
    (value): value is string => typeof value === "string",
  )

  // If any blank uses kanji, keep the fixed segments in plain form so the
  // reconstructed sentence matches the script the learner is typing in.
  const shouldUseKana = !anyContainsKanji(blankValues)

  return displayAnswer
    .map((segment, index) => {
      if (segment.isBlank) {
        return blankDrafts[index] ?? ""
      }

      return removeLayoutSpacing(shouldUseKana ? segment.kana : segment.plain)
    })
    .join("")
}
