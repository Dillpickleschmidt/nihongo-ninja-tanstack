// core/conjugation/__tests__/ConjugationEngine.test.ts
import { ConjugationEngine } from "../ConjugationEngine"
import type { ConjugatedWord } from "../types"

describe("ConjugationEngine", () => {
  const engine = new ConjugationEngine()

  describe("Basic Verb Conjugation", () => {
    test("conjugates Godan verb to polite form", () => {
      const word: ConjugatedWord = {
        word: "飲[の]む",
        pos: "Godan verb with 'mu' ending",
        form: "normal",
        polarity: "positive",
        tense: "non-past",
      }

      const result = engine.conjugateSegments([word], true)
      expect(result.flat()).toContain("飲[の]みます")
    })

    test("conjugates Ichidan verb to negative past", () => {
      const word: ConjugatedWord = {
        word: "食[た]べる",
        pos: "Ichidan verb",
        form: "normal",
        polarity: "negative",
        tense: "past",
      }

      const result = engine.conjugateSegments([word], false)
      expect(result.flat()).toContain("食[た]べなかった")
    })

    test("handles Kuru special class conjugation", () => {
      const word: ConjugatedWord = {
        word: "来[く]る",
        pos: "Kuru verb - special class",
        form: "te-form",
        polarity: "positive",
        tense: "non-past",
      }

      const result = engine.conjugateSegments([word], false)
      expect(result.flat()).toContain("来[き]て")
    })
  })

  describe("Special Word Handling", () => {
    test("conjugates です to だ in casual", () => {
      const segments = ["です"]
      const result = engine.conjugateSegments(segments, false)
      expect(result.flat()).toContain("だ")
    })

    test("maintains particles in casual form", () => {
      const segments = ["か"]
      const result = engine.conjugateSegments(segments, false)
      expect(result.flat()).toContain("？")
    })
  })

  describe("Contextual Conjugation Rules", () => {
    test("forces casual form before って", () => {
      const word: ConjugatedWord = {
        word: "思[おも]う",
        pos: "Godan verb with 'u' ending",
        form: "normal",
        polarity: "positive",
        tense: "non-past",
      }

      const result = engine.conjugateSegments([word, "って"], true)
      expect(result.flat()).toEqual(["思[おも]う", "って"])
    })

    test("forces past form before たら", () => {
      const word: ConjugatedWord = {
        word: "食[た]べる",
        pos: "Ichidan verb",
        form: "normal",
        polarity: "positive",
        tense: "non-past",
      }

      const result = engine.conjugateSegments([word, "たら"], false)
      expect(result.flat()).toEqual(["食[た]べた", "ら"])
    })
  })

  describe("Following Word Constraints", () => {
    test("forces casual form with たら regardless of polite setting", () => {
      const word: ConjugatedWord = {
        word: "食[た]べる",
        pos: "Ichidan verb",
        form: "normal",
        polarity: "positive",
        tense: "non-past",
      }

      // Test with polite=true, but たら should force casual
      const result = engine.conjugateSegments([word, "たら"], true)
      expect(result).toEqual([["食[た]べた"], ["ら"]])

      // Test with polite=false to verify same behavior
      const casualResult = engine.conjugateSegments([word, "たら"], false)
      expect(casualResult).toEqual([["食[た]べた"], ["ら"]])
    })

    test("maintains polite form when no following word constraints", () => {
      const word: ConjugatedWord = {
        word: "食[た]べる",
        pos: "Ichidan verb",
        form: "normal",
        polarity: "positive",
        tense: "non-past",
      }

      // Without たら, should respect polite setting
      const politeResult = engine.conjugateSegments([word], true)
      expect(politeResult.flat()).toContain("食[た]べます")

      const casualResult = engine.conjugateSegments([word], false)
      expect(casualResult.flat()).toContain("食[た]べる")
    })
  })

  describe("Kanji Preservation", () => {
    test("maintains kanji in conjugated forms", () => {
      const word: ConjugatedWord = {
        word: "読[よ]む",
        pos: "Godan verb with 'mu' ending",
        form: "te-form",
        polarity: "positive",
        tense: "non-past",
      }

      const result = engine.conjugateSegments([word], true)
      expect(result.flat()).toContain("読[よ]んで")
    })

    test("handles compound kanji verbs", () => {
      const word: ConjugatedWord = {
        word: "勉強[べんきょう]する",
        pos: "Suru verb - compound word",
        form: "normal",
        polarity: "positive",
        tense: "non-past",
      }

      const result = engine.conjugateSegments([word], true)
      expect(result.flat()).toContain("勉強[べんきょう]します")
    })
  })
})
