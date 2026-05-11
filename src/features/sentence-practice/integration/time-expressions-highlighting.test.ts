import { describe, expect, it } from "vitest"
import { questions as timeExpressionQuestions } from "../../../../scripts/data/sentence-practice/chapter-3/time-expressions"
import { prepareQuestion } from "../core/questionProcessor"
import { checkAnswer } from "../core/answer-processing/answerChecker"

describe("time expressions highlighting", () => {
  it("highlights omitted kana in the matched answer script", () => {
    const source = timeExpressionQuestions.find(
      (question) => question.english === "I usually watch TV at around nine o'clock.",
    )

    if (!source) {
      throw new Error("Missing time expression source question")
    }

    const prepared = prepareQuestion({
      english: source.english,
      hint: source.hint,
      answers: source.answers,
      canonicalAnswerTokens: [],
    })

    const result = checkAnswer(
      "たいてい、くじごにテレビをみる",
      prepared.preparedAnswersForMatching,
    )

    expect(result.bestMatch).toBe("たいていくじごろにテレビをみる")
    expect(result.errorRanges).toEqual([])
    expect(result.bestMatchErrors).toEqual([{ start: 7, end: 8 }])

    const noPronounAlternative = result.allMatches.find(
      (match) => match.displayText === "たいていくじごろテレビをみる",
    )
    expect(noPronounAlternative?.answerErrors).toEqual([{ start: 7, end: 8 }])
  })

  it("highlights omitted alternative text in the matched answer script", () => {
    const source = timeExpressionQuestions.find(
      (question) => question.english === "I usually watch TV at around nine o'clock.",
    )

    if (!source) {
      throw new Error("Missing time expression source question")
    }

    const prepared = prepareQuestion({
      english: source.english,
      hint: source.hint,
      answers: source.answers,
      canonicalAnswerTokens: [],
    })

    const result = checkAnswer(
      "たいてい、くじごろテレビをみる",
      prepared.preparedAnswersForMatching,
    )
    const pronounAlternative = result.allMatches.find(
      (match) => match.displayText === "ぼく、たいていくじごろテレビをみる",
    )

    expect(pronounAlternative?.displayText).toBe("ぼく、たいていくじごろテレビをみる")
    expect(pronounAlternative?.answerErrors).toEqual([{ start: 0, end: 3 }])
  })
})
