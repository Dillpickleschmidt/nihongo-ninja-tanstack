import { describe, expect, it } from "vitest"
import type { ProcessedQuestion } from "../../../core/types"
import { createRichSegment, SEGMENT_SEPARATOR } from "../../../core/textProcessor"
import { getEasyModeBlankVariations } from "./easyModeVariations"

describe("getEasyModeBlankVariations", () => {
  it("collects non-kana blank variations from valid answers", () => {
    const displayAnswer = [
      createRichSegment("九時[くじ]", true),
      createRichSegment("ごろ", true),
      createRichSegment("見[み]ます", false),
    ]
    const question: ProcessedQuestion = {
      english: "Test",
      displayAnswer,
      answers: [displayAnswer],
      validAnswers: [
        {
          original: `九時[くじ]${SEGMENT_SEPARATOR}ごろ${SEGMENT_SEPARATOR}見[み]ます`,
          plain: `九時${SEGMENT_SEPARATOR}ごろ${SEGMENT_SEPARATOR}見ます`,
          kana: `くじ${SEGMENT_SEPARATOR}ごろ${SEGMENT_SEPARATOR}みます`,
          originalPoliteForm: true,
          pronounType: "none",
          honorificType: "none",
          sourceAnswerIndex: 0,
          isKanaVariation: false,
        },
        {
          original: `七時[しちじ]${SEGMENT_SEPARATOR}ごろ${SEGMENT_SEPARATOR}見[み]ます`,
          plain: `七時${SEGMENT_SEPARATOR}ごろ${SEGMENT_SEPARATOR}見ます`,
          kana: `しちじ${SEGMENT_SEPARATOR}ごろ${SEGMENT_SEPARATOR}みます`,
          originalPoliteForm: true,
          pronounType: "none",
          honorificType: "none",
          sourceAnswerIndex: 0,
          isKanaVariation: false,
        },
        {
          original: `くじ${SEGMENT_SEPARATOR}ごろ${SEGMENT_SEPARATOR}みます`,
          plain: `くじ${SEGMENT_SEPARATOR}ごろ${SEGMENT_SEPARATOR}みます`,
          kana: `くじ${SEGMENT_SEPARATOR}ごろ${SEGMENT_SEPARATOR}みます`,
          originalPoliteForm: true,
          pronounType: "none",
          honorificType: "none",
          sourceAnswerIndex: 0,
          isKanaVariation: true,
        },
      ],
    }

    expect(getEasyModeBlankVariations(question)).toEqual([
      { blankIndex: 0, word: "九時", variations: ["七時", "九時"] },
      { blankIndex: 1, word: "ごろ", variations: ["ごろ"] },
    ])
  })
})
