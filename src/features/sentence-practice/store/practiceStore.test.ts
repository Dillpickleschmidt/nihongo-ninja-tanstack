import { describe, it, expect, vi } from "vitest"
import { createPracticeStore } from "./practiceStore"
import type { Doc } from "../../../../convex/_generated/dataModel"

describe("initializeSession", () => {
  function createRawQuestion(setId: string, english: string): Doc<"sentencePracticeQuestions"> {
    return {
      _id: "test_id" as Doc<"sentencePracticeQuestions">["_id"],
      _creationTime: 0,
      setId,
      order: 0,
      english,
      answers: [{ segments: [{ text: "こんにちは" }] }],
      modelAnswerPOS: [],
    }
  }

  it("does not reset the session when the same set is re-initialized", () => {
    const progressSpy = vi.fn()
    const store = createPracticeStore(progressSpy)
    const questions = [createRawQuestion("chapter-3", "Hello")]

    store.actions.initializeSession(questions)
    store.actions.setAnswerText("typed answer")

    store.actions.initializeSession(questions)

    expect(store.store.answerText).toBe("typed answer")
    expect(store.store.currentSetId).toBe("chapter-3")
  })

  it("resets the session when a different set is loaded", () => {
    const store = createPracticeStore()

    store.actions.initializeSession([createRawQuestion("chapter-3", "Hello")])
    store.actions.setAnswerText("typed answer")

    store.actions.initializeSession([createRawQuestion("chapter-4", "Goodbye")])

    expect(store.store.answerText).toBe("")
    expect(store.store.currentSetId).toBe("chapter-4")
    expect(store.store.questions[0]?.english).toBe("Goodbye")
  })

  it("rechecks the canonical answer text after editing while results are shown", () => {
    const store = createPracticeStore()

    store.actions.initializeSession([createRawQuestion("chapter-3", "Hello")])
    store.actions.setAnswerText("こんばんは")
    store.actions.checkAnswer()
    expect(store.store.checkResult?.isCorrect).toBe(false)

    store.actions.setAnswerText("こんにちは")

    expect(store.store.checkResult?.isCorrect).toBe(true)
  })
})
