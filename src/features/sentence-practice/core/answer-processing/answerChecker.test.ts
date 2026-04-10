// core/answer-processing/answerChecker.test.ts
import { describe, it, expect } from "vitest"
import { checkAnswer, matchAnswer } from "./answerChecker"
import type { RichAnswer } from "../types"
import { removeFurigana, convertToKana } from "../textProcessor"

// Helper to convert string answers to RichAnswer format for tests
function toRichAnswers(answers: string[]): RichAnswer[] {
  return answers.map((original) => ({
    original,
    plain: removeFurigana(original),
    kana: convertToKana(original),
  }))
}

describe("matchAnswer", () => {
  it("returns similarity 1 for exact match", () => {
    const result = matchAnswer("行きましょう", "行きましょう")
    expect(result.similarity).toBe(1)
    expect(result.userErrors).toEqual([])
    expect(result.answerErrors).toEqual([])
  })

  it("returns similarity < 1 for partial match", () => {
    const result = matchAnswer("行きます", "行きましょう")
    expect(result.similarity).toBeLessThan(1)
    expect(result.similarity).toBeGreaterThan(0)
  })

  it("handles empty inputs", () => {
    const result = matchAnswer("", "テスト")
    expect(result.similarity).toBe(0)
  })
})

describe("matchAnswer error positions", () => {
  it("marks all remaining answer chars as errors for partial prefix input", () => {
    const result = matchAnswer("きゅうりょう", "きゅうりょうをもらったら")
    expect(result.userErrors).toEqual([])
    expect(result.answerErrors).toEqual([{ start: 6, end: 12 }])
  })

  it("prefers contiguous matches over scattered matches", () => {
    // "う" appears twice in answer - should match the first one
    const result = matchAnswer("きゅうりょう", "きゅうりょうをいこう")
    expect(result.answerErrors).toEqual([{ start: 6, end: 10 }])
  })

  it("identifies inserted characters in user input", () => {
    const result = matchAnswer("行きXます", "行きます")
    expect(result.userErrors).toEqual([{ start: 2, end: 3 }])
    expect(result.answerErrors).toEqual([])
  })

  it("identifies missing characters at end", () => {
    const result = matchAnswer("行きましょ", "行きましょう")
    expect(result.userErrors).toEqual([])
    expect(result.answerErrors).toEqual([{ start: 5, end: 6 }])
  })
})

describe("checkAnswer", () => {
  const validAnswers = toRichAnswers([
    "給料をもらったらショッピングモールに行きましょう",
    "給料をもらったらショッピングモールに行こう",
    "きゅうりょうをもらったらしょっぴんぐもーるにいきましょう",
    "きゅうりょうをもらったらしょっぴんぐもーるにいこう",
  ])

  it("returns correct for exact match", () => {
    const result = checkAnswer(
      "給料をもらったらショッピングモールに行きましょう",
      validAnswers,
    )
    expect(result.isCorrect).toBe(true)
    expect(result.similarity).toBe(1)
  })

  it("returns correct for any valid variation", () => {
    const result = checkAnswer(
      "給料をもらったらショッピングモールに行こう",
      validAnswers,
    )
    expect(result.isCorrect).toBe(true)
  })

  it("returns correct for kana-only answer", () => {
    const result = checkAnswer(
      "きゅうりょうをもらったらしょっぴんぐもーるにいきましょう",
      validAnswers,
    )
    expect(result.isCorrect).toBe(true)
  })

  it("returns incorrect for wrong answer", () => {
    const result = checkAnswer("全然違う答え", validAnswers)
    expect(result.isCorrect).toBe(false)
    expect(result.similarity).toBeLessThan(1)
  })

  it("strips ending particle よ when not in valid answers", () => {
    const result = checkAnswer(
      "行きましょうよ",
      toRichAnswers(["行きましょう"]),
    )
    expect(result.isCorrect).toBe(true)
    expect(result.strippedParticle).toBe("よ")
  })

  it("strips ending particle よね when not in valid answers", () => {
    const result = checkAnswer(
      "行きましょうよね",
      toRichAnswers(["行きましょう"]),
    )
    expect(result.isCorrect).toBe(true)
    expect(result.strippedParticle).toBe("よね")
  })

  it("does not strip particle when answer already contains it", () => {
    const result = checkAnswer(
      "行きましょうね",
      toRichAnswers(["行きましょうね"]),
    )
    expect(result.isCorrect).toBe(true)
    expect(result.strippedParticle).toBeUndefined()
  })

  it("does not strip particle for question answers", () => {
    const result = checkAnswer(
      "何を買いますかよ",
      toRichAnswers(["何を買いますか"]),
    )
    expect(result.isCorrect).toBe(false) // Should not strip
    expect(result.strippedParticle).toBeUndefined()
  })

  it("normalizes input (removes punctuation, whitespace)", () => {
    const result = checkAnswer(
      "  行きましょう。",
      toRichAnswers(["行きましょう"]),
    )
    expect(result.isCorrect).toBe(true)
  })

  it("matches kana input against kanji answer with furigana", () => {
    // Valid answers must have furigana brackets for kana conversion to work
    const answers = toRichAnswers([
      "仕事[しごと]で疲[つか]れたら帰[かえ]ります",
    ])
    const kanaInput = "しごとでつかれたらかえります"
    const result = checkAnswer(kanaInput, answers)
    expect(result.isCorrect).toBe(true)
  })

  it("matches kanji input against kanji answer with furigana", () => {
    const answers = toRichAnswers([
      "仕事[しごと]で疲[つか]れたら帰[かえ]ります",
    ])
    const kanjiInput = "仕事で疲れたら帰ります"
    const result = checkAnswer(kanjiInput, answers)
    expect(result.isCorrect).toBe(true)
  })

  it("maps error positions correctly when input and answer have punctuation", () => {
    // Both input and answer have comma at position 12
    // Input: きゅうりょうをもらったら、もーるにいこう (20 chars)
    // Answer: きゅうりょうをもらったら、ショッピングモールにいこう (26 chars)
    const answers = toRichAnswers([
      "きゅうりょうをもらったら、ショッピングモールにいこう",
    ])
    const result = checkAnswer(
      "きゅうりょうをもらったら、もーるにいこう",
      answers,
    )

    // User errors mapped to original positions (after comma):
    // Position 13: も (extra), Position 15: る (should be ル)
    expect(result.errorRanges).toEqual([
      { start: 13, end: 14 },
      { start: 15, end: 16 },
    ])

    // Answer errors mapped to original positions (after comma):
    // Positions 13-19: ショッピングモ (missing), Position 21: ル (vs る)
    expect(result.bestMatchErrors).toEqual([
      { start: 13, end: 20 },
      { start: 21, end: 22 },
    ])
  })
})

describe("allMatches and bestMatchIndex", () => {
  it("returns allMatches array with AnswerMatch objects", () => {
    const validAnswers = toRichAnswers(["行きましょう", "行こう"])
    const result = checkAnswer("行きましょう", validAnswers)

    // Verify allMatches exists and has correct structure
    expect(result.allMatches).toBeDefined()
    expect(result.allMatches).toHaveLength(2)

    // Verify each match has required fields
    result.allMatches.forEach((match) => {
      expect(match.answer).toBeDefined()
      expect(match.displayText).toBeDefined()
      expect(match.similarity).toBeGreaterThanOrEqual(0)
      expect(match.similarity).toBeLessThanOrEqual(1)
      expect(match.userErrors).toBeDefined()
      expect(match.answerErrors).toBeDefined()
    })
  })

  it("sets bestMatchIndex to highest similarity match", () => {
    const validAnswers = toRichAnswers([
      "行きます", // Lower similarity
      "行きましょう", // Exact match (highest similarity)
      "行こう", // Lower similarity
    ])
    const result = checkAnswer("行きましょう", validAnswers)

    // bestMatchIndex should point to the exact match
    expect(result.bestMatchIndex).toBe(0) // Always 0 after sorting
    expect(result.allMatches[result.bestMatchIndex].similarity).toBe(1)
    expect(result.allMatches[result.bestMatchIndex].answer.original).toBe(
      "行きましょう",
    )
  })

  it("sorts allMatches by similarity (highest first)", () => {
    const validAnswers = toRichAnswers([
      "全然違う", // Very low similarity
      "行きます", // Medium similarity
      "行きましょう", // Exact match
    ])
    const result = checkAnswer("行きましょう", validAnswers)

    // Verify sorted descending by similarity
    for (let i = 0; i < result.allMatches.length - 1; i++) {
      expect(result.allMatches[i].similarity).toBeGreaterThanOrEqual(
        result.allMatches[i + 1].similarity,
      )
    }

    // First match should be exact match
    expect(result.allMatches[0].similarity).toBe(1)
  })

  it("preserves RichAnswer metadata in matches", () => {
    const validAnswers: RichAnswer[] = [
      {
        original: "行きましょう",
        plain: "行きましょう",
        kana: "いきましょう",
        originalPoliteForm: true,
        pronounType: "none",
        honorificType: "none",
        sourceAnswerIndex: 0,
      },
      {
        original: "行こう",
        plain: "行こう",
        kana: "いこう",
        originalPoliteForm: false,
        pronounType: "none",
        honorificType: "none",
        sourceAnswerIndex: 0,
      },
    ]
    const result = checkAnswer("行きましょう", validAnswers)

    // Verify metadata is accessible in allMatches
    const politeMatch = result.allMatches.find(
      (m) => m.answer.originalPoliteForm === true,
    )
    const casualMatch = result.allMatches.find(
      (m) => m.answer.originalPoliteForm === false,
    )

    expect(politeMatch).toBeDefined()
    expect(politeMatch!.answer.originalPoliteForm).toBe(true)
    expect(politeMatch!.answer.sourceAnswerIndex).toBe(0)

    expect(casualMatch).toBeDefined()
    expect(casualMatch!.answer.originalPoliteForm).toBe(false)
  })

  it("highlights only the dropped subject in an alternative answer", () => {
    const validAnswers = toRichAnswers([
      "私[わたし]は時々[ときどき]朝[あさ]八時[はちじ]ごろに音楽[おんがく]を聞[き]きます",
      "時々[ときどき]朝[あさ]八時[はちじ]ごろに音楽[おんがく]を聞[き]きます",
    ])

    const result = checkAnswer(
      "時々朝八時ごろに音楽を聞きます",
      validAnswers,
    )

    expect(result.bestMatch).toBe("時々朝八時ごろに音楽を聞きます")
    expect(result.bestMatchErrors).toEqual([])

    const subjectAlternative = result.allMatches.find(
      (match) => match.answer.plain === "私は時々朝八時ごろに音楽を聞きます",
    )

    expect(subjectAlternative?.answerErrors).toEqual([{ start: 0, end: 2 }])
  })

  it("highlights only の in the 朝の八時 alternative", () => {
    const validAnswers = toRichAnswers([
      "私[わたし]は時々[ときどき]朝[あさ]八時[はちじ]ごろに音楽[おんがく]を聞[き]きます",
      "私[わたし]は時々[ときどき]朝[あさ]の八時[はちじ]ごろに音楽[おんがく]を聞[き]きます",
    ])

    const result = checkAnswer(
      "私は時々朝八時ごろに音楽を聞きます",
      validAnswers,
    )

    expect(result.bestMatch).toBe("私は時々朝八時ごろに音楽を聞きます")
    expect(result.bestMatchErrors).toEqual([])

    const noAlternative = result.allMatches.find(
      (match) => match.answer.plain === "私は時々朝の八時ごろに音楽を聞きます",
    )

    expect(noAlternative?.answerErrors).toEqual([{ start: 5, end: 6 }])
  })

  it("highlights the changed verb ending in the casual alternative", () => {
    const validAnswers = toRichAnswers([
      "私[わたし]は時々[ときどき]朝[あさ]八時[はちじ]ごろに音楽[おんがく]を聞[き]きます",
      "私[わたし]は時々[ときどき]朝[あさ]八時[はちじ]ごろに音楽[おんがく]を聞[き]く",
    ])

    const result = checkAnswer(
      "私は時々朝八時ごろに音楽を聞きます",
      validAnswers,
    )

    expect(result.bestMatch).toBe("私は時々朝八時ごろに音楽を聞きます")
    expect(result.bestMatchErrors).toEqual([])

    const casualAlternative = result.allMatches.find(
      (match) => match.answer.plain === "私は時々朝八時ごろに音楽を聞く",
    )

    expect(casualAlternative?.answerErrors).toEqual([{ start: 14, end: 15 }])
  })
})
