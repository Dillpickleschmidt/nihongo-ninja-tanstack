import { describe, expect, it } from "vitest"
import type { RichAnswer } from "../../../core/types"
import { groupDebugAnswers } from "./debugAnswers"

describe("groupDebugAnswers", () => {
  it("groups answers by source, politeness, pronoun, honorific, and kana status", () => {
    const answers: RichAnswer[] = [
      {
        original: "私[わたし]は学生[がくせい]です",
        plain: "私は学生です",
        kana: "わたしはがくせいです",
        originalPoliteForm: true,
        pronounType: "none",
        honorificType: "none",
        sourceAnswerIndex: 0,
        isKanaVariation: false,
      },
      {
        original: "僕[ぼく]は学生[がくせい]です",
        plain: "僕は学生です",
        kana: "ぼくはがくせいです",
        originalPoliteForm: true,
        pronounType: "僕[ぼく]",
        honorificType: "none",
        sourceAnswerIndex: 0,
        isKanaVariation: false,
      },
      {
        original: "ぼくはがくせいです",
        plain: "ぼくはがくせいです",
        kana: "ぼくはがくせいです",
        originalPoliteForm: true,
        pronounType: "僕[ぼく]",
        honorificType: "none",
        sourceAnswerIndex: 0,
        isKanaVariation: true,
      },
      {
        original: "田中[たなか]くんだ",
        plain: "田中くんだ",
        kana: "たなかくんだ",
        originalPoliteForm: false,
        pronounType: "none",
        honorificType: "くん",
        sourceAnswerIndex: 1,
        isKanaVariation: false,
      },
    ]

    const grouped = groupDebugAnswers(answers)

    expect(grouped).toHaveLength(2)
    expect(grouped[0].polite.pronounGroups.get("none")?.honorificGroups.get("none")?.kanji)
      .toHaveLength(1)
    expect(grouped[0].polite.pronounGroups.get("僕[ぼく]")?.honorificGroups.get("none")?.kanji)
      .toHaveLength(1)
    expect(grouped[0].polite.pronounGroups.get("僕[ぼく]")?.honorificGroups.get("none")?.kana)
      .toHaveLength(1)
    expect(grouped[1].casual.pronounGroups.get("none")?.honorificGroups.get("くん")?.kanji)
      .toHaveLength(1)
  })
})
