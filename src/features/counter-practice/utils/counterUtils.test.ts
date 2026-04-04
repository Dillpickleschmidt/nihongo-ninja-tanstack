import { describe, expect, it } from "vitest"
import { getNumberReading, getCounterReading, generateQuestion } from "./counterUtils"
import type { CounterPattern, VocabItem } from "../types"

describe("Counter Utils", () => {
  describe("getNumberReading", () => {
    it("returns correct readings for 1-10", () => {
      const expected: Record<number, string> = {
        1: "いち",
        2: "に",
        3: "さん",
        4: "よん",
        5: "ご",
        6: "ろく",
        7: "なな",
        8: "はち",
        9: "きゅう",
        10: "じゅう",
      }
      for (const [num, reading] of Object.entries(expected)) {
        expect(getNumberReading(parseInt(num))).toBe(reading)
      }
    })

    it("handles zero", () => {
      expect(getNumberReading(0)).toBe("れい")
    })

    it("handles compound numbers", () => {
      expect(getNumberReading(11)).toBe("じゅういち")
      expect(getNumberReading(25)).toBe("にじゅうご")
      expect(getNumberReading(40)).toBe("よんじゅう")
    })
  })

  describe("getCounterReading", () => {
    it("applies number overrides", () => {
      const pattern: CounterPattern = {
        id: "人",
        baseReading: "にん",
        numberOverrides: [
          { number: 1, reading: "ひとり" },
          { number: 2, reading: "ふたり" },
        ],
      }
      expect(getCounterReading(pattern, 1)).toBe("ひとり")
      expect(getCounterReading(pattern, 2)).toBe("ふたり")
      expect(getCounterReading(pattern, 3)).toBe("さんにん")
    })
  })

  describe("generateQuestion", () => {
    const patterns: CounterPattern[] = [
      { id: "匹", baseReading: "ひき", soundChangeType: "hToP/B" },
    ]
    const vocab: VocabItem[] = [
      { word: "cat", pluralWord: "cats", patternId: "匹" },
    ]

    it("generates valid questions", () => {
      const q = generateQuestion(patterns, vocab)
      expect(q.number).toBeGreaterThanOrEqual(1)
      expect(q.number).toBeLessThanOrEqual(50)
      expect(q.vocab).toBe(vocab[0])
      expect(q.pattern).toBe(patterns[0])
      expect(q.correctReading).toBeTruthy()
    })

    it("respects range constraints", () => {
      const rangedPatterns: CounterPattern[] = [
        { ...patterns[0], range: [5, 8] },
      ]
      for (let i = 0; i < 50; i++) {
        const q = generateQuestion(rangedPatterns, vocab)
        expect(q.number).toBeGreaterThanOrEqual(5)
        expect(q.number).toBeLessThanOrEqual(8)
      }
    })
  })
})
