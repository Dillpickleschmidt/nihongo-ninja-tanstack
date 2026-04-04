import { describe, expect, it } from "vitest"
import { getFullCounterReading } from "./soundChangesUtils"
import type { CounterPattern } from "../types"

const runTestCases = (
  pattern: CounterPattern,
  testCases: { reading: string; expected: string }[],
) => {
  testCases.forEach(({ reading, expected }) => {
    it(`${reading} → ${expected}`, () => {
      expect(getFullCounterReading(reading, pattern)).toBe(expected)
    })
  })
}

describe("Sound Changes", () => {
  describe("no sound change", () => {
    const pattern: CounterPattern = { id: "test", baseReading: "にん" }
    runTestCases(pattern, [
      { reading: "いち", expected: "いちにん" },
      { reading: "さん", expected: "さんにん" },
      { reading: "じゅう", expected: "じゅうにん" },
      { reading: "じゅういち", expected: "じゅういちにん" },
      { reading: "にじゅうご", expected: "にじゅうごにん" },
    ])
  })

  describe("p column", () => {
    const pattern: CounterPattern = { id: "test", baseReading: "ぱい", soundChangeType: "p" }
    runTestCases(pattern, [
      { reading: "いち", expected: "いっぱい" },
      { reading: "ろく", expected: "ろっぱい" },
      { reading: "はち", expected: "はっぱい" },
      { reading: "じゅう", expected: "じゅっぱい" },
      { reading: "に", expected: "にぱい" },
      { reading: "さん", expected: "さんぱい" },
      { reading: "じゅういち", expected: "じゅういっぱい" },
      { reading: "にじゅう", expected: "にじゅっぱい" },
    ])
  })

  describe("k column", () => {
    const pattern: CounterPattern = { id: "test", baseReading: "かい", soundChangeType: "k" }
    runTestCases(pattern, [
      { reading: "いち", expected: "いっかい" },
      { reading: "ろく", expected: "ろっかい" },
      { reading: "はち", expected: "はっかい" },
      { reading: "じゅう", expected: "じゅっかい" },
      { reading: "に", expected: "にかい" },
      { reading: "さん", expected: "さんかい" },
      { reading: "じゅういち", expected: "じゅういっかい" },
    ])
  })

  describe("s column", () => {
    const pattern: CounterPattern = { id: "test", baseReading: "せん", soundChangeType: "s" }
    runTestCases(pattern, [
      { reading: "いち", expected: "いっせん" },
      { reading: "はち", expected: "はっせん" },
      { reading: "じゅう", expected: "じゅっせん" },
      { reading: "に", expected: "にせん" },
      { reading: "ろく", expected: "ろくせん" },
    ])
  })

  describe("t column", () => {
    const pattern: CounterPattern = { id: "test", baseReading: "てん", soundChangeType: "t" }
    runTestCases(pattern, [
      { reading: "いち", expected: "いってん" },
      { reading: "はち", expected: "はってん" },
      { reading: "じゅう", expected: "じゅってん" },
      { reading: "に", expected: "にてん" },
      { reading: "ろく", expected: "ろくてん" },
    ])
  })

  describe("hToP", () => {
    const pattern: CounterPattern = { id: "分", baseReading: "ふん", soundChangeType: "hToP" }
    runTestCases(pattern, [
      { reading: "いち", expected: "いっぷん" },
      { reading: "ろく", expected: "ろっぷん" },
      { reading: "はち", expected: "はっぷん" },
      { reading: "じゅう", expected: "じゅっぷん" },
      { reading: "さん", expected: "さんぷん" },
      { reading: "よん", expected: "よんぷん" },
      { reading: "に", expected: "にふん" },
      { reading: "ご", expected: "ごふん" },
      { reading: "にじゅうはち", expected: "にじゅうはっぷん" },
    ])
  })

  describe("hToP/B", () => {
    const pattern: CounterPattern = { id: "匹", baseReading: "ひき", soundChangeType: "hToP/B" }
    runTestCases(pattern, [
      { reading: "いち", expected: "いっぴき" },
      { reading: "ろく", expected: "ろっぴき" },
      { reading: "はち", expected: "はっぴき" },
      { reading: "じゅう", expected: "じゅっぴき" },
      { reading: "さん", expected: "さんびき" },
      { reading: "に", expected: "にひき" },
      { reading: "よん", expected: "よんひき" },
      { reading: "じゅうさん", expected: "じゅうさんびき" },
      { reading: "にじゅうさん", expected: "にじゅうさんびき" },
    ])
  })

  describe("kToG", () => {
    const pattern: CounterPattern = { id: "階", baseReading: "かい", soundChangeType: "kToG" }
    runTestCases(pattern, [
      { reading: "いち", expected: "いちかい" },
      { reading: "さん", expected: "さんがい" },
      { reading: "ろく", expected: "ろくかい" },
      { reading: "じゅうさん", expected: "じゅうさんがい" },
      { reading: "さんじゅう", expected: "さんじゅうかい" },
    ])
  })

  describe("sToZ", () => {
    const pattern: CounterPattern = { id: "test", baseReading: "さい", soundChangeType: "sToZ" }
    runTestCases(pattern, [
      { reading: "いち", expected: "いちさい" },
      { reading: "さん", expected: "さんざい" },
      { reading: "ろく", expected: "ろくさい" },
      { reading: "じゅうさん", expected: "じゅうさんざい" },
      { reading: "さんじゅう", expected: "さんじゅうさい" },
    ])
  })

  describe("generic (つ)", () => {
    const pattern: CounterPattern = { id: "つ", baseReading: "つ", soundChangeType: "generic" }
    runTestCases(pattern, [
      { reading: "いち", expected: "ひとつ" },
      { reading: "に", expected: "ふたつ" },
      { reading: "さん", expected: "みっつ" },
      { reading: "よん", expected: "よっつ" },
      { reading: "ご", expected: "いつつ" },
      { reading: "ろく", expected: "むっつ" },
      { reading: "なな", expected: "ななつ" },
      { reading: "はち", expected: "やっつ" },
      { reading: "きゅう", expected: "ここのつ" },
      { reading: "じゅう", expected: "とお" },
      { reading: "じゅういち", expected: "じゅういちつ" },
    ])
  })

  describe("dates", () => {
    const pattern: CounterPattern = { id: "日", baseReading: "にち", soundChangeType: "dates" }
    runTestCases(pattern, [
      { reading: "いち", expected: "ついたち" },
      { reading: "に", expected: "ふつか" },
      { reading: "さん", expected: "みっか" },
      { reading: "よん", expected: "よっか" },
      { reading: "はち", expected: "ようか" },
      { reading: "じゅう", expected: "とおか" },
      { reading: "じゅうよん", expected: "じゅうよっか" },
      { reading: "にじゅう", expected: "はつか" },
      { reading: "にじゅうよん", expected: "にじゅうよっか" },
      { reading: "じゅういち", expected: "じゅういちにち" },
    ])
  })
})
