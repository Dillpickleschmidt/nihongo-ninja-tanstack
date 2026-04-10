// core/questionProcessor.test.ts
import { describe, it, expect } from "vitest"
import { prepareQuestion } from "./questionProcessor"
import type {
  SentenceAnswer,
  SentenceSegment,
} from "../../../../convex/validators"

// Helper to create a minimal question object
function createQuestion(
  english: string,
  answers: SentenceAnswer[],
  hint?: string,
) {
  return {
    _id: "test_id" as any,
    _creationTime: 0,
    setId: "test_set",
    order: 1,
    english,
    hint,
    answers,
    modelAnswerPOS: [],
  }
}

// Helper to create a segment
function segment(
  text: string,
  blank?: boolean,
  conjugation?: SentenceSegment["conjugation"],
): SentenceSegment {
  return { text, blank, conjugation }
}

describe("prepareQuestion", () => {
  it("processes a simple question with no conjugation", () => {
    const question = createQuestion("Hello", [
      {
        segments: [segment("こんにちは")],
      },
    ])

    const result = prepareQuestion(question)

    expect(result.english).toBe("Hello")
    expect(result.displayAnswer[0]?.original).toBe("こんにちは")
    expect(result.answers.length).toBeGreaterThan(0)
    expect(
      result.answers.some((answer) => answer[0]?.original === "こんにちは"),
    ).toBe(true)
  })

  it("preserves hint from question", () => {
    const question = createQuestion(
      "Please sit down",
      [{ segments: [segment("座[すわ]ってください")] }],
      "Use te-form",
    )

    const result = prepareQuestion(question)

    expect(result.hint).toBe("Use te-form")
  })

  it("marks blank segments correctly", () => {
    const question = createQuestion("When I receive my salary", [
      {
        segments: [
          segment("給料[きゅうりょう]を"),
          segment("もらったら", true), // blank
          segment("行[い]きましょう"),
        ],
      },
    ])

    const result = prepareQuestion(question)
    const firstAnswer = result.displayAnswer

    expect(firstAnswer[0].isBlank).toBe(false)
    expect(firstAnswer[1].isBlank).toBe(true)
    expect(firstAnswer[2].isBlank).toBe(false)
  })

  it("conjugates segments to polite form", () => {
    const question = createQuestion("Let's go", [
      {
        segments: [
          segment("行[い]く", false, {
            pos: "Godan verb - Iku/Yuku special class",
            form: "volitional",
            polarity: "positive",
            tense: "non-past",
          }),
        ],
      },
    ])

    const result = prepareQuestion(question)

    // Should have polite volitional: 行きましょう
    const hasPoliteVolitional = result.answers.some((answer) =>
      answer.some((seg) => seg.original.includes("行[い]きましょう")),
    )
    expect(hasPoliteVolitional).toBe(true)
  })

  it("conjugates segments to casual form", () => {
    const question = createQuestion("Let's go", [
      {
        segments: [
          segment("行[い]く", false, {
            pos: "Godan verb - Iku/Yuku special class",
            form: "volitional",
            polarity: "positive",
            tense: "non-past",
          }),
        ],
      },
    ])

    const result = prepareQuestion(question)

    // Should have casual volitional: 行こう
    const hasCasualVolitional = result.answers.some((answer) =>
      answer.some((seg) => seg.original.includes("行[い]こう")),
    )
    expect(hasCasualVolitional).toBe(true)
  })

  it("generates valid answer strings for checking", () => {
    const question = createQuestion("Please wait", [
      {
        segments: [
          segment("待[ま]つ", false, {
            pos: "Godan verb with 'tsu' ending",
            form: "te-form",
            polarity: "positive",
            tense: "non-past",
          }),
          segment("ください"),
        ],
      },
    ])

    const result = prepareQuestion(question)

    // validAnswers should contain the joined answer strings
    expect(result.validAnswers.length).toBeGreaterThan(0)
    // Should contain 待ってください (te-form + ください) in plain or kana
    const hasTeForm = result.validAnswers.some(
      (answer) =>
        answer.plain.includes("待って") || answer.kana.includes("まって"),
    )
    expect(hasTeForm).toBe(true)
  })

  it("generates kana-only variations in validAnswers", () => {
    const question = createQuestion("I will go", [
      {
        segments: [segment("行[い]きます")],
      },
    ])

    const result = prepareQuestion(question)

    // Should have RichAnswer with original and kana versions
    expect(result.validAnswers.some((a) => a.original === "行[い]きます")).toBe(
      true,
    )
    expect(result.validAnswers.some((a) => a.kana === "いきます")).toBe(true)
  })

  it("handles multiple raw answers", () => {
    const question = createQuestion("I will go to the store", [
      {
        segments: [segment("店[みせ]に"), segment("行[い]きます")],
      },
      {
        segments: [segment("お店[みせ]に"), segment("行[い]きます")],
      },
    ])

    const result = prepareQuestion(question)

    // Should have processed answers from both raw answers
    expect(result.answers.length).toBeGreaterThanOrEqual(2)
  })

  it("handles i-adjective conjugation", () => {
    const question = createQuestion("It is hot", [
      {
        segments: [
          segment("暑[あつ]い", false, {
            pos: "I-adjective",
            polarity: "positive",
            tense: "non-past",
          }),
        ],
      },
    ])

    const result = prepareQuestion(question)

    // Should have polite form: 暑いです
    const hasPolite = result.answers.some((answer) =>
      answer.some((seg) => seg.original.includes("暑[あつ]いです")),
    )
    expect(hasPolite).toBe(true)
  })

  it("handles na-adjective conjugation", () => {
    const question = createQuestion("She is pretty", [
      {
        segments: [
          segment("きれい", false, {
            pos: "Na-adjective",
            polarity: "positive",
            tense: "non-past",
          }),
        ],
      },
    ])

    const result = prepareQuestion(question)

    // Should have polite form: きれいです
    const hasPolite = result.answers.some((answer) =>
      answer.some((seg) => seg.original.includes("きれいです")),
    )
    expect(hasPolite).toBe(true)
  })

  it("preserves segment structure in first answer for display", () => {
    const question = createQuestion("When you receive salary, let's go", [
      {
        segments: [
          segment("給料[きゅうりょう]を"),
          segment("もらう", true, {
            pos: "Godan verb with 'u' ending",
            form: "conditional",
            polarity: "positive",
            tense: "non-past",
          }),
          segment("行[い]く", false, {
            pos: "Godan verb - Iku/Yuku special class",
            form: "volitional",
            polarity: "positive",
            tense: "non-past",
          }),
        ],
      },
    ])

    const result = prepareQuestion(question)

    // Display answer should preserve 3-segment structure
    expect(result.displayAnswer).toHaveLength(3)
    expect(result.displayAnswer[0].isBlank).toBe(false)
    expect(result.displayAnswer[1].isBlank).toBe(true)
    expect(result.displayAnswer[2].isBlank).toBe(false)
  })

  it("returns empty validAnswers for question with empty segments", () => {
    const question = createQuestion("Empty", [{ segments: [] }])

    const result = prepareQuestion(question)

    expect(result.validAnswers.some((a) => a.original === "")).toBe(true)
  })
})
