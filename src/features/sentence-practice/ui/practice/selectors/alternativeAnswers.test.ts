import { describe, expect, it } from "vitest"
import type { AnswerMatch } from "../../../core/types"
import { getAlternativeAnswers } from "./alternativeAnswers"

function createMatch({
  answerOverrides,
  ...matchOverrides
}: Partial<AnswerMatch> & {
  answerOverrides?: Partial<AnswerMatch["answer"]>
}): AnswerMatch {
  return {
    answer: {
      original: "行きましょう",
      plain: "行きましょう",
      kana: "いきましょう",
      originalPoliteForm: true,
      pronounType: "none",
      honorificType: "none",
      sourceAnswerIndex: 0,
      ...answerOverrides,
    },
    displayText: "行きましょう",
    similarity: 1,
    userErrors: [],
    answerErrors: [],
    ...matchOverrides,
  }
}

describe("getAlternativeAnswers", () => {
  it("filters out the best match, kana variations, and opposite politeness", () => {
    const matches = [
      createMatch({
        answerOverrides: { original: "行きましょう", originalPoliteForm: true },
      }),
      createMatch({
        answerOverrides: { original: "参りましょう", originalPoliteForm: true },
      }),
      createMatch({
        answerOverrides: { original: "いきましょう", isKanaVariation: true },
      }),
      createMatch({
        answerOverrides: { original: "行こう", originalPoliteForm: false },
      }),
    ]

    expect(getAlternativeAnswers(matches, 0).map((match) => match.answer.original)).toEqual([
      "参りましょう",
    ])
  })
})
