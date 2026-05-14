import { describe, expect, it } from "vitest"
import type { ProcessedQuestion, RichAnswer, RichSegment } from "../../../core/types"
import { createRichSegment, convertToKana, removeFurigana, SEGMENT_SEPARATOR } from "../../../core/textProcessor"
import {
  getBestCanonicalAnswerIndex,
  getUserInputPosDisplayItems,
} from "./userInputPosDisplayItems"

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

describe("getBestCanonicalAnswerIndex", () => {
  it("uses the first canonical answer before the user types", () => {
    expect(getBestCanonicalAnswerIndex("", createQuestion())).toBe(0)
  })

  it("ignores punctuation when choosing the best canonical answer", () => {
    const politeAnswer = [
      createRichSegment("父[とう]さんは 今[いま]、シャワーを ", false),
      createRichSegment("浴[あ]びています", true),
      createRichSegment("から、ちょっと 待[ま]ってください", false),
    ]
    const casualAnswer = [
      createRichSegment("父[とう]さんは 今[いま]、シャワーを ", false),
      createRichSegment("浴[あ]びている", true),
      createRichSegment("から、ちょっと 待[ま]ってください", false),
    ]
    const canonicalAnswers = [
      toCanonicalAnswer(politeAnswer),
      toCanonicalAnswer(casualAnswer),
    ]
    const question: ProcessedQuestion = {
      english: "Test",
      canonicalAnswerTokens: [[], []],
      displayAnswer: politeAnswer,
      answers: [politeAnswer, casualAnswer],
      canonicalAnswers,
      acceptedAnswers: [],
      preparedAnswersForMatching: [],
    }

    expect(
      getBestCanonicalAnswerIndex(
        "とうさんはいまシャワーをあびているから、ちょっとまってください",
        question,
      ),
    ).toBe(1)
  })

  it("keeps canonical order when early input matches multiple variants equally", () => {
    const baseAnswer = [
      createRichSegment("藤井[ふじい]さんは", false),
      createRichSegment("結婚[けっこん]しています", true),
    ]
    const contractedAnswer = [
      createRichSegment("藤井[ふじい]さんは", false),
      createRichSegment("結婚[けっこん]してる", true),
    ]
    const question: ProcessedQuestion = {
      english: "Test",
      canonicalAnswerTokens: [[], []],
      displayAnswer: baseAnswer,
      answers: [baseAnswer, contractedAnswer],
      canonicalAnswers: [
        toCanonicalAnswer(baseAnswer),
        toCanonicalAnswer(contractedAnswer),
      ],
      acceptedAnswers: [],
      preparedAnswersForMatching: [],
    }

    expect(getBestCanonicalAnswerIndex("ふ", question)).toBe(0)
    expect(getBestCanonicalAnswerIndex("藤井", question)).toBe(0)
  })
})

describe("getUserInputPosDisplayItems", () => {
  it("renders completed tokens and keeps the current partial token gray", () => {
    expect(getUserInputPosDisplayItems("かえでさんはとしょか", createQuestion()))
      .toEqual([
        { kind: "token", text: "楓", pos: "名詞" },
        { kind: "token", text: "さん", pos: "名詞" },
        { kind: "token", text: "は", pos: "助詞" },
        { kind: "neutral", text: "としょか" },
      ])
  })

  it("keeps typos in the current token gray without disturbing confirmed tokens", () => {
    expect(getUserInputPosDisplayItems("かえでさんはとしょかの", createQuestion()))
      .toEqual([
        { kind: "token", text: "楓", pos: "名詞" },
        { kind: "token", text: "さん", pos: "名詞" },
        { kind: "token", text: "は", pos: "助詞" },
        { kind: "neutral", text: "としょかの" },
      ])
  })

  it("renders a completed expected token with its precomputed POS", () => {
    expect(getUserInputPosDisplayItems("かえでさんはとしょかん", createQuestion()))
      .toEqual([
        { kind: "token", text: "楓", pos: "名詞" },
        { kind: "token", text: "さん", pos: "名詞" },
        { kind: "token", text: "は", pos: "助詞" },
        { kind: "token", text: "図書館", pos: "名詞" },
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
        { kind: "token", text: "兄", pos: "名詞" },
        { kind: "token", text: "は", pos: "助詞" },
        { kind: "token", text: "昨日", pos: "名詞" },
        { kind: "token", text: "公園", pos: "名詞" },
        { kind: "token", text: "で", pos: "助詞" },
        { kind: "token", text: "テニス", pos: "名詞" },
        { kind: "token", text: "を", pos: "助詞" },
        { kind: "token", text: "していた", pos: "動詞" },
      ])
  })

  it("does not block matching when the user types ignored punctuation", () => {
    const answer = [
      createRichSegment("昨日[きのう]", false),
      createRichSegment("兄[あに]は 公園[こうえん]で", false),
      createRichSegment("テニスをしていた", true),
    ]
    const question: ProcessedQuestion = {
      english: "Test",
      canonicalAnswerTokens: [
        [
          { t: "昨日", p: "名詞" },
          { t: "兄", p: "名詞" },
          { t: "は", p: "助詞" },
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

    expect(getUserInputPosDisplayItems("きのう、あにはこうえんでテニスをしていた", question))
      .toEqual([
        { kind: "token", text: "昨日", pos: "名詞" },
        { kind: "neutral", text: "、" },
        { kind: "token", text: "兄", pos: "名詞" },
        { kind: "token", text: "は", pos: "助詞" },
        { kind: "token", text: "公園", pos: "名詞" },
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
        { kind: "token", text: "楓", pos: "名詞" },
        { kind: "token", text: "さん", pos: "名詞" },
        { kind: "token", text: "は", pos: "助詞" },
        { kind: "token", text: "図書館", pos: "名詞" },
        { kind: "token", text: "で", pos: "助詞" },
        { kind: "token", text: "歌ってた", pos: "動詞" },
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
