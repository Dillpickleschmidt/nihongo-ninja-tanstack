import { describe, expect, it } from "vitest"
import type { ProcessedQuestion, RichAnswer, RichSegment } from "../../../core/types"
import { createRichSegment, convertToKana, removeFurigana, SEGMENT_SEPARATOR } from "../../../core/textProcessor"
import { getUserInputPosDisplayItems } from "./userInputPosDisplayItems"

function createQuestion(): ProcessedQuestion {
  const answer = [
    createRichSegment("楓[かえで]さんは 図書館[としょかん]で", false),
    createRichSegment("歌[うた]って", true),
    createRichSegment("いた", true),
  ]

  return {
    english: "Test",
    canonicalAnswerTokens: [
      [
        { t: "楓", p: "名詞" },
        { t: "さん", p: "名詞" },
        { t: "は", p: "助詞" },
        { t: "図書館", p: "名詞" },
        { t: "で", p: "助詞" },
        { t: "歌っていた", p: "動詞" },
      ],
    ],
    displayAnswer: answer,
    answers: [answer],
    canonicalAnswers: [toCanonicalAnswer(answer)],
    acceptedAnswers: [],
    preparedAnswersForMatching: [],
  }
}

describe("getUserInputPosDisplayItems", () => {
  it("renders completed tokens and keeps the current partial token gray", () => {
    expect(getUserInputPosDisplayItems("かえでさんはとしょか", createQuestion()))
      .toEqual([
        { kind: "token", text: "かえで", pos: "名詞" },
        { kind: "token", text: "さん", pos: "名詞" },
        { kind: "token", text: "は", pos: "助詞" },
        { kind: "incomplete", text: "としょか" },
      ])
  })

  it("keeps typos in the current token gray without disturbing confirmed tokens", () => {
    expect(getUserInputPosDisplayItems("かえでさんはとしょかの", createQuestion()))
      .toEqual([
        { kind: "token", text: "かえで", pos: "名詞" },
        { kind: "token", text: "さん", pos: "名詞" },
        { kind: "token", text: "は", pos: "助詞" },
        { kind: "incomplete", text: "としょかの" },
      ])
  })

  it("renders a completed expected token with its precomputed POS", () => {
    expect(getUserInputPosDisplayItems("かえでさんはとしょかん", createQuestion()))
      .toEqual([
        { kind: "token", text: "かえで", pos: "名詞" },
        { kind: "token", text: "さん", pos: "名詞" },
        { kind: "token", text: "は", pos: "助詞" },
        { kind: "token", text: "としょかん", pos: "名詞" },
      ])
  })

  it("does not block matching when the expected answer has punctuation the user omitted", () => {
    const answer = [
      createRichSegment("兄[あに]は 昨日[きのう]、 公園[こうえん]で", false),
      createRichSegment("テニスをしていた", true),
    ]
    const question: ProcessedQuestion = {
      english: "Test",
      canonicalAnswerTokens: [
        [
          { t: "兄", p: "名詞" },
          { t: "は", p: "助詞" },
          { t: "昨日", p: "名詞" },
          { t: "、", p: "記号" },
          { t: "公園", p: "名詞" },
          { t: "で", p: "助詞" },
          { t: "テニス", p: "名詞" },
          { t: "を", p: "助詞" },
          { t: "していた", p: "動詞" },
        ],
      ],
      displayAnswer: answer,
      answers: [answer],
      canonicalAnswers: [toCanonicalAnswer(answer)],
      acceptedAnswers: [],
      preparedAnswersForMatching: [],
    }

    expect(getUserInputPosDisplayItems("あにはきのうこうえんでテニスをしていた", question))
      .toEqual([
        { kind: "token", text: "あに", pos: "名詞" },
        { kind: "token", text: "は", pos: "助詞" },
        { kind: "token", text: "きのう", pos: "名詞" },
        { kind: "token", text: "こうえん", pos: "名詞" },
        { kind: "token", text: "で", pos: "助詞" },
        { kind: "token", text: "テニス", pos: "名詞" },
        { kind: "token", text: "を", pos: "助詞" },
        { kind: "token", text: "していた", pos: "動詞" },
      ])
  })

  it("matches te-iru contractions as canonical answer forms", () => {
    const answer = [
      createRichSegment("楓[かえで]さんは 図書館[としょかん]で", false),
      createRichSegment("歌[うた]ってた", true),
    ]
    const question: ProcessedQuestion = {
      english: "Test",
      canonicalAnswerTokens: [
        [
          { t: "楓", p: "名詞" },
          { t: "さん", p: "名詞" },
          { t: "は", p: "助詞" },
          { t: "図書館", p: "名詞" },
          { t: "で", p: "助詞" },
          { t: "歌ってた", p: "動詞" },
        ],
      ],
      displayAnswer: answer,
      answers: [answer],
      canonicalAnswers: [toCanonicalAnswer(answer)],
      acceptedAnswers: [],
      preparedAnswersForMatching: [],
    }

    expect(getUserInputPosDisplayItems("かえでさんはとしょかんでうたってた", question))
      .toEqual([
        { kind: "token", text: "かえで", pos: "名詞" },
        { kind: "token", text: "さん", pos: "名詞" },
        { kind: "token", text: "は", pos: "助詞" },
        { kind: "token", text: "としょかん", pos: "名詞" },
        { kind: "token", text: "で", pos: "助詞" },
        { kind: "token", text: "うたってた", pos: "動詞" },
      ])
  })
})

function toCanonicalAnswer(segments: RichSegment[]): RichAnswer {
  const original = segments.map((segment) => segment.original).join(SEGMENT_SEPARATOR)
  return {
    original,
    plain: removeFurigana(original),
    kana: convertToKana(original),
  }
}
