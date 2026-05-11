import { describe, expect, it } from "vitest"
import type { ProcessedQuestion } from "../core/types"
import { createRichSegment } from "../core/textProcessor"
import {
  composeCanonicalAnswerText,
  createBlankDraftsForQuestion,
} from "./easyModeAnswerProjection"

function createQuestion(segments: Array<{ text: string; isBlank: boolean }>): ProcessedQuestion {
  const displayAnswer = segments.map((segment) =>
    createRichSegment(segment.text, segment.isBlank),
  )

  return {
    english: "Test",
    preparedAnswerTokens: [],
    displayAnswer,
    answers: [displayAnswer],
    validAnswers: [],
    preparedAnswersForMatching: [],
  }
}

describe("easyModeAnswerProjection", () => {
  it("initializes blank drafts from the display answer", () => {
    const question = createQuestion([
      { text: "仕事[しごと]で", isBlank: false },
      { text: "疲[つか]れたら", isBlank: true },
      { text: "帰[かえ]ります", isBlank: false },
    ])

    expect(createBlankDraftsForQuestion(question)).toEqual([
      undefined,
      null,
      undefined,
    ])
  })

  it("assembles kana output when all blank drafts are kana", () => {
    const question = createQuestion([
      { text: "仕事[しごと]で", isBlank: false },
      { text: "疲[つか]れたら", isBlank: true },
      { text: "帰[かえ]ります", isBlank: false },
    ])

    expect(
      composeCanonicalAnswerText(question.displayAnswer, [
        undefined,
        "つかれたら",
        undefined,
      ]),
    ).toBe("しごとでつかれたらかえります")
  })

  it("assembles plain output when any blank draft contains kanji", () => {
    const question = createQuestion([
      { text: "仕事[しごと]で", isBlank: false },
      { text: "疲[つか]れたら", isBlank: true },
      { text: "帰[かえ]ります", isBlank: false },
    ])

    expect(
      composeCanonicalAnswerText(question.displayAnswer, [
        undefined,
        "疲れたら",
        undefined,
      ]),
    ).toBe("仕事で疲れたら帰ります")
  })

  it("fills empty blanks with empty strings in the canonical answer text", () => {
    const question = createQuestion([
      { text: "給料[きゅうりょう]を", isBlank: false },
      { text: "もらったら", isBlank: true },
      { text: "行[い]きます", isBlank: false },
    ])

    expect(
      composeCanonicalAnswerText(question.displayAnswer, [
        undefined,
        null,
        undefined,
      ]),
    ).toBe("きゅうりょうをいきます")
  })
})
