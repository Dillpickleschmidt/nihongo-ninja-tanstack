import { describe, expect, it } from "vitest"
import type { ProcessedQuestion } from "../core/types"
import {
  calculateEffectiveDifficulty,
  createNextQuestionSnapshot,
  createSessionSnapshot,
  isSessionComplete,
} from "./practiceSession"
import { createRichSegment } from "../core/textProcessor"

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

describe("practiceSession", () => {
  it("initializes easy mode when the display answer contains blanks", () => {
    const question = createQuestion([
      { text: "私[わたし]は", isBlank: false },
      { text: "九時[くじ]", isBlank: true },
    ])

    const snapshot = createSessionSnapshot([question], "easy")

    expect(snapshot.currentQuestionIndex).toBe(0)
    expect(snapshot.effectiveDifficulty).toBe("easy")
  })

  it("falls back to hard mode when there are no blanks", () => {
    const question = createQuestion([{ text: "こんにちは", isBlank: false }])

    expect(calculateEffectiveDifficulty("easy", question)).toBe("hard")
  })

  it("creates the next question snapshot with reset blanks", () => {
    const firstQuestion = createQuestion([{ text: "こんにちは", isBlank: false }])
    const secondQuestion = createQuestion([
      { text: "仕事[しごと]で", isBlank: false },
      { text: "疲[つか]れたら", isBlank: true },
    ])

    const snapshot = createNextQuestionSnapshot(
      [firstQuestion, secondQuestion],
      1,
      "easy",
    )

    expect(snapshot).toEqual({
      questions: [firstQuestion, secondQuestion],
      currentQuestionIndex: 1,
      effectiveDifficulty: "easy",
    })
  })

  it("returns undefined when advancing past the last question", () => {
    const question = createQuestion([{ text: "こんにちは", isBlank: false }])

    expect(createNextQuestionSnapshot([question], 1, "hard")).toBeUndefined()
  })

  it("detects completion only on the final correct revealed answer", () => {
    expect(isSessionComplete(1, 2, true, true)).toBe(true)
    expect(isSessionComplete(1, 2, false, true)).toBe(false)
    expect(isSessionComplete(0, 2, true, true)).toBe(false)
    expect(isSessionComplete(1, 2, true, false)).toBe(false)
  })
})
