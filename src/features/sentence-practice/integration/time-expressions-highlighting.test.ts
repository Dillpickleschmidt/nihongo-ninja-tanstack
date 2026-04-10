import { describe, expect, it } from "vitest"
import { questions as timeExpressionQuestions } from "../../../../scripts/data/sentence-practice/chapter-3/time-expressions"
import { prepareQuestion } from "../core/questionProcessor"
import { checkAnswer } from "../core/answer-processing/answerChecker"

describe("time expressions highlighting", () => {
  it("highlights the missing ろ instead of drifting into テレビ", () => {
    const source = timeExpressionQuestions.find(
      (question) => question.english === "I usually watch TV at around nine o'clock.",
    )

    if (!source) {
      throw new Error("Missing time expression source question")
    }

    const prepared = prepareQuestion({
      _id: "highlight-time-expression" as any,
      _creationTime: 0,
      setId: "chapter-3-time-expressions",
      order: 0,
      english: source.english,
      hint: source.hint,
      answers: source.answers,
      modelAnswerPOS: [],
    })

    const result = checkAnswer(
      "たいてい、くじごにテレビをみる",
      prepared.preparedAnswersForMatching,
    )

    expect(result.bestMatch).toBe("たいてい九時ごろにテレビを見る")
    expect(result.errorRanges).toEqual([])
    expect(result.bestMatchErrors).toEqual([{ start: 7, end: 8 }])

    const noPronounAlternative = result.allMatches.find(
      (match) => match.displayText === "たいてい九時ごろテレビを見る",
    )
    expect(noPronounAlternative?.answerErrors).toEqual([{ start: 7, end: 8 }])
  })

  it("maps kana-space alternative highlights onto the plain display text", () => {
    const source = timeExpressionQuestions.find(
      (question) => question.english === "I usually watch TV at around nine o'clock.",
    )

    if (!source) {
      throw new Error("Missing time expression source question")
    }

    const prepared = prepareQuestion({
      _id: "highlight-time-expression-alt" as any,
      _creationTime: 0,
      setId: "chapter-3-time-expressions",
      order: 0,
      english: source.english,
      hint: source.hint,
      answers: source.answers,
      modelAnswerPOS: [],
    })

    const result = checkAnswer(
      "たいてい、くじごろテレビをみる",
      prepared.preparedAnswersForMatching,
    )
    const pronounAlternative = result.allMatches.find(
      (match) => match.displayText === "僕、たいてい九時ごろテレビを見る",
    )

    expect(pronounAlternative?.displayText).toBe("僕、たいてい九時ごろテレビを見る")
    expect(pronounAlternative?.answerErrors).toEqual([{ start: 0, end: 2 }])
  })
})
