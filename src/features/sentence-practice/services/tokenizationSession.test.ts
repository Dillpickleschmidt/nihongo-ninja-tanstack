import { describe, expect, it } from "vitest"
import { createRichSegment } from "../core/textProcessor"
import type { ProcessedQuestion } from "../core/types"
import { createTokenizationSession, getModelAnswerText, prepareUserTokenization } from "./tokenizationSession"

function createQuestion(segments: Array<{ text: string; isBlank: boolean }>): ProcessedQuestion {
  const displayAnswer = segments.map((segment) =>
    createRichSegment(segment.text, segment.isBlank),
  )

  return {
    english: "Test",
    displayAnswer,
    answers: [displayAnswer],
    validAnswers: [],
  }
}

function deferred<T>() {
  let resolve!: (value: T) => void
  const promise = new Promise<T>((res) => {
    resolve = res
  })

  return { promise, resolve }
}

describe("tokenizationSession", () => {
  it("builds model answer text from the display answer", () => {
    const question = createQuestion([
      { text: "九時[くじ]ごろに", isBlank: false },
      { text: "見[み]ます", isBlank: false },
    ])

    expect(getModelAnswerText(question)).toBe("九時ごろに見ます")
  })

  it("prepares user tokenization with overlay for kana input", () => {
    const question = createQuestion([
      { text: "九時[くじ]ごろに", isBlank: false },
      { text: "見[み]ます", isBlank: false },
    ])

    expect(prepareUserTokenization("くじごろにみます", question)).toEqual({
      textToTokenize: "九時ごろに見ます",
      overlay: expect.objectContaining({ overlaidText: "九時ごろに見ます" }),
    })
  })

  it("returns null for empty user input", () => {
    const question = createQuestion([{ text: "こんにちは", isBlank: false }])

    expect(prepareUserTokenization("   ", question)).toBeNull()
  })

  it("drops stale user tokenization results", async () => {
    const first = deferred<{ tokens: []; grammarMatches: []; compoundSpans: [] }>()
    const second = deferred<{ tokens: []; grammarMatches: []; compoundSpans: [] }>()
    const question = createQuestion([{ text: "こんにちは", isBlank: false }])

    const session = createTokenizationSession({
      waitForReady: async () => {},
      tokenize: (text: string) => {
        return text === "first" ? first.promise : second.promise
      },
    })

    const firstPromise = session.tokenizeUserInput("first", question)
    const secondPromise = session.tokenizeUserInput("second", question)

    second.resolve({ tokens: [], grammarMatches: [], compoundSpans: [] })
    first.resolve({ tokens: [], grammarMatches: [], compoundSpans: [] })

    await expect(secondPromise).resolves.toEqual({
      tokens: [],
      overlay: expect.objectContaining({ overlaidText: "second" }),
    })
    await expect(firstPromise).resolves.toBeUndefined()
  })
})
