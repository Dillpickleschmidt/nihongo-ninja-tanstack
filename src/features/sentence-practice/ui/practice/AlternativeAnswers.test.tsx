import { describe, expect, it } from "vitest"
import { render, screen } from "@/utils/test-utils"
import type { AnswerMatch } from "../../core/types"
import AlternativeAnswers from "./AlternativeAnswers"

function createMatch(overrides: Partial<AnswerMatch>): AnswerMatch {
  return {
    answer: {
      original: "私[わたし]は時々[ときどき]朝[あさ]八時[はちじ]ごろに音楽[おんがく]を聞[き]きます",
      plain: "私は時々朝八時ごろに音楽を聞きます",
      kana: "わたしはときどきあさはちじごろにおんがくをききます",
      originalPoliteForm: true,
      pronounType: "none",
      honorificType: "none",
      sourceAnswerIndex: 0,
    },
    displayText: "私は時々朝八時ごろに音楽を聞きます",
    similarity: 1,
    userErrors: [],
    answerErrors: [],
    ...overrides,
  }
}

describe("AlternativeAnswers", () => {
  it("shows only non-best alternatives and highlights only the differing answer text", () => {
    const { container } = render(() => (
      <AlternativeAnswers
        allMatches={[
          createMatch({
            answer: {
              original: "時々[ときどき]朝[あさ]八時[はちじ]ごろに音楽[おんがく]を聞[き]きます",
              plain: "時々朝八時ごろに音楽を聞きます",
              kana: "ときどきあさはちじごろにおんがくをききます",
              originalPoliteForm: true,
              pronounType: "none",
              honorificType: "none",
              sourceAnswerIndex: 0,
            },
            displayText: "時々朝八時ごろに音楽を聞きます",
            similarity: 1,
          }),
          createMatch({ answerErrors: [{ start: 0, end: 2 }], similarity: 0.95 }),
        ]}
        bestMatchIndex={0}
        showFurigana={false}
      />
    ))

    expect(screen.getByText(/Alternative Answers/)).toBeTruthy()
    expect(container.textContent).not.toContain(
      "時々朝八時ごろに音楽を聞きますSimilarity",
    )

    const highlight = container.querySelector("span.highlight")
    expect(highlight?.textContent).toBe("私は")
  })
})
