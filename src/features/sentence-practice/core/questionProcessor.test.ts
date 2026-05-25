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
    canonicalAnswerTokens: [],
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

  it("generates accepted answer strings for checking", () => {
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

    // acceptedAnswers should contain the joined answer strings
    expect(result.acceptedAnswers.length).toBeGreaterThan(0)
    // Should contain 待ってください (te-form + ください) in plain or kana
    const hasTeForm = result.acceptedAnswers.some(
      (answer) =>
        answer.plain.includes("待って") || answer.kana.includes("まって"),
    )
    expect(hasTeForm).toBe(true)
  })

  it("generates kana-only variations in acceptedAnswers", () => {
    const question = createQuestion("I will go", [
      {
        segments: [segment("行[い]きます")],
      },
    ])

    const result = prepareQuestion(question)

    // Should have RichAnswer with original and kana versions
    expect(result.acceptedAnswers.some((a) => a.original === "行[い]きます")).toBe(
      true,
    )
    expect(result.acceptedAnswers.some((a) => a.kana === "いきます")).toBe(true)
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

  it("returns empty acceptedAnswers for question with empty segments", () => {
    const question = createQuestion("Empty", [{ segments: [] }])

    const result = prepareQuestion(question)

    expect(result.acceptedAnswers.some((a) => a.original === "")).toBe(true)
  })

  it("generates only casual forms when register is 'casual'", () => {
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
        register: "casual",
      },
    ])

    const result = prepareQuestion(question)

    const plains = result.acceptedAnswers.map((a) => a.plain)
    expect(plains).toContain("行こう")
    expect(plains.some((p) => p.includes("行きましょう"))).toBe(false)
  })

  it("generates only polite forms when register is 'polite'", () => {
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
        register: "polite",
      },
    ])

    const result = prepareQuestion(question)

    const plains = result.acceptedAnswers.map((a) => a.plain)
    expect(plains).toContain("行きましょう")
    expect(plains.some((p) => p.includes("行こう"))).toBe(false)
  })

  it("generates casual explanatory question variants for verbs", () => {
    const question = createQuestion("Will you go?", [
      {
        segments: [
          segment("行[い]く", false, {
            pos: "Godan verb - Iku/Yuku special class",
            form: "normal",
            polarity: "positive",
            tense: "non-past",
          }),
          segment("か"),
        ],
        register: "casual",
      },
    ])

    const stripped = prepareQuestion(question).acceptedAnswers.map((a) =>
      a.plain.replaceAll("\u001f", ""),
    )

    expect(stripped).toContain("行く？")
    expect(stripped).toContain("行くの？")
  })

  it("generates の／なの casual explanatory variants for ですか predicates", () => {
    const nounQuestion = createQuestion("Is Tanaka a student?", [
      {
        segments: [segment("田中さんは学生"), segment("です"), segment("か")],
        register: "casual",
      },
    ])
    const iAdjectiveQuestion = createQuestion("Is it fun?", [
      {
        segments: [
          segment("楽[たの]しい", false, {
            pos: "I-adjective",
            form: "normal",
            polarity: "positive",
            tense: "non-past",
          }),
          segment("です"),
          segment("か"),
        ],
        register: "casual",
      },
    ])

    const nounAnswers = prepareQuestion(nounQuestion).acceptedAnswers.map((a) =>
      a.plain.replaceAll("\u001f", ""),
    )
    const iAdjectiveAnswers = prepareQuestion(
      iAdjectiveQuestion,
    ).acceptedAnswers.map((a) => a.plain.replaceAll("\u001f", ""))

    expect(nounAnswers).toContain("田中さんは学生だ？")
    expect(nounAnswers).toContain("田中さんは学生なの？")
    expect(iAdjectiveAnswers).toContain("楽しいの？")
    expect(iAdjectiveAnswers).not.toContain("楽しいなの？")
  })

  it("does not generate explanatory variants for どうですか", () => {
    const question = createQuestion("How is it?", [
      {
        segments: [segment("どう"), segment("です"), segment("か")],
        register: "casual",
      },
    ])

    const stripped = prepareQuestion(question).acceptedAnswers.map((a) =>
      a.plain.replaceAll("\u001f", ""),
    )

    expect(stripped).not.toContain("どうなの？")
  })

  it("does not double already explanatory question variants", () => {
    const question = createQuestion("Has Kenji already gone home?", [
      {
        segments: [segment("けんじさんはもう 家[いえ]に帰[かえ]ったの"), segment("か")],
        register: "casual",
      },
    ])

    const stripped = prepareQuestion(question).acceptedAnswers.map((a) =>
      a.plain.replaceAll("\u001f", "").replaceAll(" ", ""),
    )

    expect(stripped).toContain("けんじさんはもう家に帰ったの？")
    expect(stripped).not.toContain("けんじさんはもう家に帰ったのの？")
  })

  it("leaves non-final casual か as か and does not generate explanatory question variants", () => {
    const question = createQuestion("Have you climbed Mt. Fuji, Kenji?", [
      {
        segments: [
          segment("富士山[ふじさん]に 登[のぼ]ったことがある"),
          segment("か"),
          segment("、けんじさん"),
        ],
        register: "casual",
      },
    ])

    const stripped = prepareQuestion(question).acceptedAnswers.map((a) =>
      a.plain.replaceAll("\u001f", "").replaceAll(" ", ""),
    )

    expect(stripped).toContain("富士山に登ったことがあるか、けんじさん")
    expect(stripped).not.toContain("富士山に登ったことがある？、けんじさん")
    expect(stripped).not.toContain("富士山に登ったことがあるの？、けんじさん")
  })

  it("treats final か/か。 as casual questions", () => {
    const baseSegments = [
      segment("行[い]く", false, {
        pos: "Godan verb - Iku/Yuku special class",
        form: "normal",
        polarity: "positive",
        tense: "non-past",
      }),
    ]
    const cases = [
      { segments: [...baseSegments, segment("か")], expected: ["行く？", "行くの？"] },
      {
        segments: [...baseSegments, segment("か"), segment("。")],
        expected: ["行く？", "行くの？"],
      },
      {
        segments: [...baseSegments, segment("か。")],
        expected: ["行く？", "行くの？"],
      },
    ]

    for (const testCase of cases) {
      const question = createQuestion("Will you go?", [
        { segments: testCase.segments, register: "casual" },
      ])
      const stripped = prepareQuestion(question).acceptedAnswers.map((a) =>
        a.plain.replaceAll("\u001f", ""),
      )

      for (const expected of testCase.expected) {
        expect(stripped).toContain(expected)
      }
    }
  })

  it("register-locked answer coexists with unlocked canonical answer", () => {
    const question = createQuestion("I'll watch a movie", [
      {
        segments: [
          segment("映画[えいが]を"),
          segment("見[み]る", true, {
            pos: "Ichidan verb",
            form: "normal",
            polarity: "positive",
            tense: "non-past",
          }),
        ],
      },
      {
        segments: [
          segment("映画[えいが]"),
          segment("見[み]る", true, {
            pos: "Ichidan verb",
            form: "normal",
            polarity: "positive",
            tense: "non-past",
          }),
        ],
        register: "casual",
        notes: "を-drop casual",
      },
    ])

    const result = prepareQuestion(question)
    const stripped = result.acceptedAnswers.map((a) =>
      a.plain.replaceAll("\u001f", ""),
    )

    expect(stripped).toContain("映画を見る")
    expect(stripped).toContain("映画を見ます")
    expect(stripped).toContain("映画見る")
    expect(stripped.some((s) => s === "映画見ます")).toBe(false)
  })
})
