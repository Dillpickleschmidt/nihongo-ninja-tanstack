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
    if (shouldHidePronounVariant(match)) return false
    if (shouldHideHonorificVariant(match)) return false
    return match.answer.originalPoliteForm === bestMatchPoliteForm
  })
}

function shouldHidePronounVariant(match: AnswerMatch): boolean {
  const pronounType = match.answer.pronounType ?? "none"
  return pronounType !== "none" && pronounType !== "dropped"
}

function shouldHideHonorificVariant(match: AnswerMatch): boolean {
  return (match.answer.honorificType ?? "none") !== "none"
}
