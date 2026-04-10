import type { AnswerMatch } from "../../../core/types"

export function getAlternativeAnswers(
  allMatches: AnswerMatch[],
  bestMatchIndex: number,
): AnswerMatch[] {
  const bestMatchPoliteForm =
    allMatches[bestMatchIndex]?.answer.originalPoliteForm ?? true

  return allMatches.filter((match, index) => {
    if (index === bestMatchIndex) return false
    if (match.answer.isVariation) return false
    if (match.answer.isKanaVariation) return false
    return match.answer.originalPoliteForm === bestMatchPoliteForm
  })
}
