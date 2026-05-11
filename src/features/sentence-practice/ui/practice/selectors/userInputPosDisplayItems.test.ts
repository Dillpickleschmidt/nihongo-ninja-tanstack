import { describe, expect, it } from "vitest"
import type { ProcessedQuestion } from "../../../core/types"
import { createRichSegment } from "../../../core/textProcessor"
import { getUserInputPosDisplayItems } from "./userInputPosDisplayItems"

function createQuestion(): ProcessedQuestion {
  const answer = [
    createRichSegment("楓[かえで]さんは 図書館[としょかん]で", false),
    createRichSegment("歌[うた]って", true),
    createRichSegment("いた", true),
  ]

  return {
    english: "Test",
    preparedAnswerTokens: [
      [
        { text: "楓", pos: ["名詞"] },
        { text: "さん", pos: ["名詞"] },
        { text: "は", pos: ["助詞"] },
        { text: "図書館", pos: ["名詞"] },
        { text: "で", pos: ["助詞"] },
        { text: "歌っていた", pos: ["動詞"] },
      ],
    ],
    displayAnswer: answer,
    answers: [answer],
    validAnswers: [],
    preparedAnswersForMatching: [],
  }
}

describe("getUserInputPosDisplayItems", () => {
  it("renders completed tokens and keeps the current partial token gray", () => {
    expect(getUserInputPosDisplayItems("かえでさんはとしょか", createQuestion()))
      .toEqual([
        { kind: "token", text: "かえで", pos: ["名詞"] },
        { kind: "token", text: "さん", pos: ["名詞"] },
        { kind: "token", text: "は", pos: ["助詞"] },
        { kind: "incomplete", text: "としょか" },
      ])
  })

  it("keeps typos in the current token gray without disturbing confirmed tokens", () => {
    expect(getUserInputPosDisplayItems("かえでさんはとしょかの", createQuestion()))
      .toEqual([
        { kind: "token", text: "かえで", pos: ["名詞"] },
        { kind: "token", text: "さん", pos: ["名詞"] },
        { kind: "token", text: "は", pos: ["助詞"] },
        { kind: "incomplete", text: "としょかの" },
      ])
  })

  it("renders a completed expected token with its precomputed POS", () => {
    expect(getUserInputPosDisplayItems("かえでさんはとしょかん", createQuestion()))
      .toEqual([
        { kind: "token", text: "かえで", pos: ["名詞"] },
        { kind: "token", text: "さん", pos: ["名詞"] },
        { kind: "token", text: "は", pos: ["助詞"] },
        { kind: "token", text: "としょかん", pos: ["名詞"] },
      ])
  })

  it("does not block matching when the expected answer has punctuation the user omitted", () => {
    const answer = [
      createRichSegment("兄[あに]は 昨日[きのう]、 公園[こうえん]で", false),
      createRichSegment("テニスをしていた", true),
    ]
    const question: ProcessedQuestion = {
      english: "Test",
      preparedAnswerTokens: [
        [
          { text: "兄", pos: ["名詞"] },
          { text: "は", pos: ["助詞"] },
          { text: "昨日", pos: ["名詞"] },
          { text: "、", pos: ["記号"] },
          { text: "公園", pos: ["名詞"] },
          { text: "で", pos: ["助詞"] },
          { text: "テニス", pos: ["名詞"] },
          { text: "を", pos: ["助詞"] },
          { text: "していた", pos: ["動詞"] },
        ],
      ],
      displayAnswer: answer,
      answers: [answer],
      validAnswers: [],
      preparedAnswersForMatching: [],
    }

    expect(getUserInputPosDisplayItems("あにはきのうこうえんでテニスをしていた", question))
      .toEqual([
        { kind: "token", text: "あに", pos: ["名詞"] },
        { kind: "token", text: "は", pos: ["助詞"] },
        { kind: "token", text: "きのう", pos: ["名詞"] },
        { kind: "token", text: "こうえん", pos: ["名詞"] },
        { kind: "token", text: "で", pos: ["助詞"] },
        { kind: "token", text: "テニス", pos: ["名詞"] },
        { kind: "token", text: "を", pos: ["助詞"] },
        { kind: "token", text: "していた", pos: ["動詞"] },
      ])
  })
})
