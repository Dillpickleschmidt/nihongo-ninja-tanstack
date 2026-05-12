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
    displayTextMode: "plain",
    similarity: 1,
    userErrors: [],
    displayTextErrors: [],
    ...matchOverrides,
  }
}

describe("getAlternativeAnswers", () => {
  it("filters out the best match, input aliases, and opposite politeness", () => {
    const matches = [
      createMatch({
        answerOverrides: { original: "行きましょう", originalPoliteForm: true },
      }),
      createMatch({
        answerOverrides: { original: "参りましょう", originalPoliteForm: true },
      }),
      createMatch({
        answerOverrides: { original: "いきましょう", isInputAlias: true },
      }),
      createMatch({
        answerOverrides: { original: "行こう", originalPoliteForm: false },
      }),
    ]

    expect(getAlternativeAnswers(matches, 0).map((match) => match.answer.original)).toEqual([
      "参りましょう",
    ])
  })

  it("hides pronoun substitutions but keeps dropped-subject variants", () => {
    const matches = [
      createMatch({ answerOverrides: { original: "私は行きましょう" } }),
      createMatch({ answerOverrides: { original: "僕は行きましょう", pronounType: "僕[ぼく]" } }),
      createMatch({ answerOverrides: { original: "行きましょう", pronounType: "dropped" } }),
    ]

    expect(getAlternativeAnswers(matches, 0).map((match) => match.answer.original)).toEqual([
      "行きましょう",
    ])
  })

  it("hides honorific substitutions from main alternatives", () => {
    const matches = [
      createMatch({ answerOverrides: { original: "田中さんです" } }),
      createMatch({ answerOverrides: { original: "田中くんです", honorificType: "くん" } }),
      createMatch({ answerOverrides: { original: "田中先生です", honorificType: "先生[せんせい]" } }),
    ]

    expect(getAlternativeAnswers(matches, 0)).toEqual([])
  })
})
