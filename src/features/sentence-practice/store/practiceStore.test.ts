// store/practiceStore.test.ts
import { describe, it, expect } from "vitest"
import { createPracticeStore } from "./practiceStore"
import { createRichSegment } from "../core/textProcessor"

describe("getUserAnswer in easy mode", () => {
  // Helper to set up store with processed question segments
  function setupStoreWithSegments(
    segments: Array<{ text: string; isBlank: boolean }>,
  ) {
    const store = createPracticeStore()
    // Manually set up processed question state with RichSegments
    store.setStore({
      questions: [
        {
          english: "Test",
          answers: [segments.map((s) => createRichSegment(s.text, s.isBlank))],
          validAnswers: [],
        },
      ],
      currentQuestionIndex: 0,
      effectiveDifficulty: "easy",
      blankInputs: segments.map((s) => (s.isBlank ? null : undefined)),
      isLoading: false,
    })
    return store
  }

  it("converts segments to kana when user types kana in blank", () => {
    const store = setupStoreWithSegments([
      { text: "仕事[しごと]で", isBlank: false },
      { text: "疲[つか]れたら", isBlank: true },
      { text: "帰[かえ]ります", isBlank: false },
    ])
    store.actions.updateInput("つかれたら", 1) // kana input

    const answer = store.computed.getUserAnswer()
    // Should be all kana: しごとで + つかれたら + かえります
    expect(answer).toBe("しごとでつかれたらかえります")
  })

  it("keeps kanji when user types kanji in blank", () => {
    const store = setupStoreWithSegments([
      { text: "仕事[しごと]で", isBlank: false },
      { text: "疲[つか]れたら", isBlank: true },
      { text: "帰[かえ]ります", isBlank: false },
    ])
    store.actions.updateInput("疲れたら", 1) // kanji input

    const answer = store.computed.getUserAnswer()
    // Should be kanji (furigana removed): 仕事で + 疲れたら + 帰ります
    expect(answer).toBe("仕事で疲れたら帰ります")
  })

  it("outputs text without furigana brackets", () => {
    const store = setupStoreWithSegments([
      { text: "給料[きゅうりょう]を", isBlank: false },
      { text: "もらったら", isBlank: true },
    ])
    store.actions.updateInput("もらったら", 1)

    const answer = store.computed.getUserAnswer()
    expect(answer).not.toContain("[")
    expect(answer).not.toContain("]")
  })

  it("handles multiple blanks with kana input", () => {
    const store = setupStoreWithSegments([
      { text: "給料[きゅうりょう]を", isBlank: false },
      { text: "もらったら", isBlank: true },
      { text: "ショッピングモールに", isBlank: false },
      { text: "行[い]きましょう", isBlank: true },
    ])
    store.actions.updateInput("もらったら", 1)
    store.actions.updateInput("いきましょう", 3)

    const answer = store.computed.getUserAnswer()
    // Kana for segments with furigana, katakana stays as-is (no furigana to convert)
    expect(answer).toBe(
      "きゅうりょうをもらったらショッピングモールにいきましょう",
    )
  })
})
