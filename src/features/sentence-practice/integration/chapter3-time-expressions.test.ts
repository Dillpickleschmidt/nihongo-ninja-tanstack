import { describe, expect, it } from "vitest"
import { questions as timeExpressionQuestions } from "../../../../scripts/data/sentence-practice/chapter-3/time-expressions"
import { prepareQuestion } from "../core/questionProcessor"
import { checkAnswer } from "../core/answer-processing/answerChecker"
import { normalizeText } from "../core/textProcessor"
import { composeCanonicalAnswerText } from "../session/easyModeAnswerProjection"
import { createPracticeStore } from "../store/practiceStore"

const TARGET_ENGLISH =
  "I sometimes listen to music at around eight o'clock in the morning."

function getSourceQuestion() {
  const source = timeExpressionQuestions.find(
    (question) => question.english === TARGET_ENGLISH,
  )

  if (!source) {
    throw new Error(`Missing source question: ${TARGET_ENGLISH}`)
  }

  return source
}

function getRawQuestion() {
  const source = getSourceQuestion()

  return {
    _id: "time-expressions-listen-music" as any,
    _creationTime: 0,
    setId: "chapter-3-time-expressions",
    order: 0,
    english: source.english,
    hint: source.hint,
    answers: source.answers,
    canonicalAnswerTokens: [],
  }
}

function getPreparedQuestion() {
  return prepareQuestion(getRawQuestion())
}

function expectAccepted(input: string) {
  const result = checkAnswer(input, getPreparedQuestion().preparedAnswersForMatching)

  expect(result.isCorrect).toBe(true)
}

function expectRejected(input: string) {
  const result = checkAnswer(input, getPreparedQuestion().preparedAnswersForMatching)

  expect(result.isCorrect).toBe(false)
}

describe("chapter 3 time expressions hard-mode pipeline", () => {
  it("prepares the authored sentence into the expected canonical display answer", () => {
    const question = getPreparedQuestion()

    expect(question.displayAnswer.map((segment) => segment.plain)).toEqual([
      "私は",
      "時々",
      "朝",
      "八時",
      "ごろ",
      "に音楽を",
      "聞きます",
    ])
  })

  it("keeps representative authored polite variants in acceptedAnswers", () => {
    const question = getPreparedQuestion()
    const plains = new Set(
      question.acceptedAnswers.map((answer) => normalizeText(answer.plain)),
    )
    const kana = new Set(
      question.acceptedAnswers.map((answer) => normalizeText(answer.kana)),
    )

    expect(plains.has("私は時々朝八時ごろに音楽を聞きます")).toBe(true)
    expect(plains.has("私は時々朝の八時ごろに音楽を聞きます")).toBe(true)
    expect(plains.has("私は朝八時ごろに時々音楽を聞きます")).toBe(true)
    expect(plains.has("時々朝八時ごろに音楽を聞きます")).toBe(true)
    expect(kana.has("わたしはときどきあさはちじごろにおんがくをききます")).toBe(
      true,
    )
  })

  it("keeps representative authored casual variants in acceptedAnswers", () => {
    const question = getPreparedQuestion()
    const plains = new Set(
      question.acceptedAnswers.map((answer) => normalizeText(answer.plain)),
    )
    const kana = new Set(
      question.acceptedAnswers.map((answer) => normalizeText(answer.kana)),
    )

    expect(plains.has("私は時々朝八時ごろに音楽を聞く")).toBe(true)
    expect(plains.has("時々朝八時ごろに音楽を聞く")).toBe(true)
    expect(kana.has("わたしはときどきあさはちじごろにおんがくをきく")).toBe(
      true,
    )
  })

  it("accepts a curated set of real authored polite variants", () => {
    expectAccepted("私は時々朝八時ごろに音楽を聞きます")
    expectAccepted("私は時々朝の八時ごろに音楽を聞きます")
    expectAccepted("私は朝八時ごろに時々音楽を聞きます")
    expectAccepted("時々朝八時ごろに音楽を聞きます")
    expectAccepted("わたしはときどきあさはちじごろにおんがくをききます")
  })

  it("accepts a curated set of real authored casual variants", () => {
    expectAccepted("私は時々朝八時ごろに音楽を聞く")
    expectAccepted("時々朝八時ごろに音楽を聞く")
    expectAccepted("わたしはときどきあさはちじごろにおんがくをきく")
  })

  it("rejects representative full-sentence variants that are not authored", () => {
    expectRejected("私は時々八時朝ごろに音楽を聞きます")
    expectRejected("私は時々朝八時にごろ音楽を聞きます")
    expectRejected("私は時々朝八時音楽を聞きます")
    expectRejected("私は朝の八時ごろ時々音楽を聞きます")
  })

  it("checks the same curated polite variants through the hard-mode store flow", () => {
    const store = createPracticeStore()
    const rawQuestion = getRawQuestion()

    store.actions.initializeSession([rawQuestion])

    store.actions.setAnswerText("私は時々朝八時ごろに音楽を聞きます")
    store.actions.checkAnswer()
    expect(store.store.checkResult?.isCorrect).toBe(true)

    store.actions.resetInput()
    store.actions.setAnswerText("わたしはときどきあさはちじごろにおんがくをききます")
    store.actions.checkAnswer()
    expect(store.store.checkResult?.isCorrect).toBe(true)
  })

  it("rejects invalid hard-mode input through the store flow", () => {
    const store = createPracticeStore()

    store.actions.initializeSession([getRawQuestion()])
    store.actions.setAnswerText("私は時々朝八時音楽を聞きます")
    store.actions.checkAnswer()

    expect(store.store.checkResult?.isCorrect).toBe(false)
  })

  it("composes the same canonical answer text from curated easy-mode blanks", () => {
    const question = getPreparedQuestion()

    expect(
      composeCanonicalAnswerText(question.displayAnswer, [
        undefined,
        "時々",
        "朝",
        "八時",
        "ごろ",
        undefined,
        undefined,
      ]),
    ).toBe("私は時々朝八時ごろに音楽を聞きます")

    expect(
      composeCanonicalAnswerText(question.displayAnswer, [
        undefined,
        "ときどき",
        "あさ",
        "はちじ",
        "ごろ",
        undefined,
        undefined,
      ]),
    ).toBe("わたしはときどきあさはちじごろにおんがくをききます")
  })
})
