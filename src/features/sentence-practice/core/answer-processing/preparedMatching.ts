import type { PreparedAnswerForMatching, RichAnswer } from "../types"
import {
  createVisibleTextWithMap,
  normalizeWithPositions,
} from "../textProcessor"

export function prepareAnswersForMatching(
  acceptedAnswers: RichAnswer[],
): PreparedAnswerForMatching[] {
  return acceptedAnswers.map((answer) => {
    const visiblePlain = createVisibleTextWithMap(answer.plain)
    const visibleKana = createVisibleTextWithMap(answer.kana)

    return {
      answer,
      normalizedPlain: normalizeWithPositions(answer.plain).text,
      normalizedKana: normalizeWithPositions(answer.kana).text,
      visiblePlain: visiblePlain.text,
      visibleKana: visibleKana.text,
      plainToVisible: visiblePlain.normalizedToVisible,
      kanaToVisible: visibleKana.normalizedToVisible,
    }
  })
}
