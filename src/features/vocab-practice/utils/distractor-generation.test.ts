import { describe, it, expect, vi, beforeEach } from "vitest"
import { generateDistractors, type ChoiceOption } from "./distractor-generation"
import { getPosCategory } from "@/data/utils/vocabulary/part-of-speech"
import type { PracticeCard } from "../types"

// Helper to create mock cards
function createMockCard(
  key: string,
  validAnswers: string[],
  partOfSpeech?: string,
  practiceItemType: "vocabulary" | "kanji" | "radical" = "vocabulary",
  particles?: { label?: string; particle: string }[],
): PracticeCard {
  return {
    key,
    vocab: {
      word: key.split(":")[1] || "test",
      furigana: "test",
      english: validAnswers,
      partOfSpeech,
      particles,
    } as PracticeCard["vocab"],
    fsrs: { card: {} as any },
    practiceMode: "meanings",
    practiceItemType,
    sessionStyle: "multiple-choice",
    prompt: validAnswers.join(", "),
    validAnswers,
    sessionScope: "module",
    isDisabled: false,
  }
}

function answers(options: ChoiceOption[]): string[] {
  return options.map((o) => o.answer)
}

describe("getPosCategory", () => {
  it('should return "verb" for verb types', () => {
    expect(getPosCategory("Ichidan verb")).toBe("verb")
    expect(getPosCategory("Godan verb with 'mu' ending")).toBe("verb")
    expect(getPosCategory("Suru verb - included")).toBe("verb")
    expect(getPosCategory("Kuru verb - special class")).toBe("verb")
  })

  it('should return "adjective" for adjective types', () => {
    expect(getPosCategory("I-adjective")).toBe("adjective")
    expect(getPosCategory("Na-adjective")).toBe("adjective")
  })

  it('should return "other" for undefined or unknown types', () => {
    expect(getPosCategory(undefined)).toBe("other")
    // @ts-expect-error - testing runtime behavior with invalid input
    expect(getPosCategory("noun")).toBe("other")
    // @ts-expect-error - testing runtime behavior with invalid input
    expect(getPosCategory("")).toBe("other")
  })
})

describe("generateDistractors", () => {
  beforeEach(() => {
    // Mock Math.random for deterministic shuffling
    vi.spyOn(Math, "random").mockReturnValue(0.5)
  })

  describe("POS filtering", () => {
    it("should filter verbs with verbs when enough available", () => {
      const currentCard = createMockCard(
        "vocabulary:食べる",
        ["eat"],
        "Ichidan verb",
      )
      const verbCard1 = createMockCard(
        "vocabulary:飲む",
        ["drink"],
        "Godan verb with 'mu' ending",
      )
      const verbCard2 = createMockCard(
        "vocabulary:見る",
        ["see"],
        "Ichidan verb",
      )
      const verbCard3 = createMockCard(
        "vocabulary:走る",
        ["run"],
        "Godan verb - Iku/Yuku special class",
      )
      const adjectiveCard = createMockCard(
        "vocabulary:大きい",
        ["big"],
        "I-adjective",
      )

      const allCards = [
        currentCard,
        verbCard1,
        verbCard2,
        verbCard3,
        adjectiveCard,
      ]
      const distractors = generateDistractors(currentCard, allCards, 3)
      const ans = answers(distractors)

      // Should include verb answers only (enough verbs available)
      expect(ans).toContain("drink")
      expect(ans).toContain("see")
      expect(ans).toContain("run")
      expect(ans).not.toContain("big")
    })

    it("should filter adjectives with adjectives when enough available", () => {
      const currentCard = createMockCard(
        "vocabulary:大きい",
        ["big"],
        "I-adjective",
      )
      const adjCard1 = createMockCard(
        "vocabulary:小さい",
        ["small"],
        "I-adjective",
      )
      const adjCard2 = createMockCard(
        "vocabulary:静か",
        ["quiet"],
        "Na-adjective",
      )
      const adjCard3 = createMockCard(
        "vocabulary:新しい",
        ["new"],
        "I-adjective",
      )
      const verbCard = createMockCard(
        "vocabulary:食べる",
        ["eat"],
        "Ichidan verb",
      )

      const allCards = [currentCard, adjCard1, adjCard2, adjCard3, verbCard]
      const distractors = generateDistractors(currentCard, allCards, 3)
      const ans = answers(distractors)

      // Should include adjective answers only (enough adjectives available)
      expect(ans).toContain("small")
      expect(ans).toContain("quiet")
      expect(ans).toContain("new")
      expect(ans).not.toContain("eat")
    })

    it('should group cards without POS as "other" when enough available', () => {
      const currentCard = createMockCard("vocabulary:本", ["book"], undefined)
      const otherCard1 = createMockCard("vocabulary:机", ["desk"], undefined)
      const otherCard2 = createMockCard("vocabulary:椅子", ["chair"], undefined)
      const otherCard3 = createMockCard("vocabulary:窓", ["window"], undefined)
      const verbCard = createMockCard(
        "vocabulary:食べる",
        ["eat"],
        "Ichidan verb",
      )

      const allCards = [
        currentCard,
        otherCard1,
        otherCard2,
        otherCard3,
        verbCard,
      ]
      const distractors = generateDistractors(currentCard, allCards, 3)
      const ans = answers(distractors)

      // Should include "other" category answers only (enough available)
      expect(ans).toContain("desk")
      expect(ans).toContain("chair")
      expect(ans).toContain("window")
      expect(ans).not.toContain("eat")
    })
  })

  describe("practice item type filtering", () => {
    it("should filter by practice item type when enough available", () => {
      const vocabCard = createMockCard(
        "vocabulary:食べる",
        ["eat"],
        "Ichidan verb",
      )
      const vocabCard2 = createMockCard(
        "vocabulary:飲む",
        ["drink"],
        "Godan verb with 'mu' ending",
      )
      const vocabCard3 = createMockCard(
        "vocabulary:見る",
        ["see"],
        "Ichidan verb",
      )
      const vocabCard4 = createMockCard(
        "vocabulary:走る",
        ["run"],
        "Ichidan verb",
      )
      const kanjiCard = createMockCard("kanji:食", ["food"], undefined, "kanji")

      const allCards = [
        vocabCard,
        vocabCard2,
        vocabCard3,
        vocabCard4,
        kanjiCard,
      ]
      const distractors = generateDistractors(vocabCard, allCards, 3)
      const ans = answers(distractors)

      // Should include vocabulary answers only (enough vocab available)
      expect(ans).toContain("drink")
      expect(ans).toContain("see")
      expect(ans).toContain("run")
      expect(ans).not.toContain("food")
    })
  })

  describe("correct answer exclusion", () => {
    it("should exclude correct answers from distractors", () => {
      const currentCard = createMockCard(
        "vocabulary:食べる",
        ["eat", "to eat"],
        "Ichidan verb",
      )
      const otherCard = createMockCard(
        "vocabulary:飲む",
        ["drink", "eat"],
        "Godan verb with 'mu' ending",
      )

      const allCards = [currentCard, otherCard]
      const distractors = generateDistractors(currentCard, allCards, 3)
      const ans = answers(distractors)

      // Should exclude "eat" (case-insensitive match)
      expect(ans).not.toContain("eat")
      expect(ans).not.toContain("to eat")
      expect(ans).toContain("drink")
    })
  })

  describe("fallback behavior", () => {
    it("should fall back to same type when not enough POS matches", () => {
      const currentCard = createMockCard(
        "vocabulary:食べる",
        ["eat"],
        "Ichidan verb",
      )
      const adjectiveCard = createMockCard(
        "vocabulary:大きい",
        ["big"],
        "I-adjective",
      )
      // Only 1 other verb, need 3 distractors

      const allCards = [currentCard, adjectiveCard]
      const distractors = generateDistractors(currentCard, allCards, 3)
      const ans = answers(distractors)

      // Should include adjective as fallback since not enough verbs
      expect(ans).toContain("big")
    })

    it("should fall back to any card when not enough same type", () => {
      const vocabCard = createMockCard(
        "vocabulary:食べる",
        ["eat"],
        "Ichidan verb",
      )
      const kanjiCard = createMockCard("kanji:食", ["food"], undefined, "kanji")

      const allCards = [vocabCard, kanjiCard]
      const distractors = generateDistractors(vocabCard, allCards, 3)
      const ans = answers(distractors)

      // Should include kanji as fallback since not enough vocabulary
      expect(ans).toContain("food")
    })
  })

  describe("deduplication", () => {
    it("should deduplicate answers", () => {
      const currentCard = createMockCard(
        "vocabulary:食べる",
        ["eat"],
        "Ichidan verb",
      )
      const card1 = createMockCard(
        "vocabulary:飲む",
        ["drink"],
        "Godan verb with 'mu' ending",
      )
      const card2 = createMockCard(
        "vocabulary:飲む2",
        ["drink"],
        "Godan verb with 'mu' ending",
      ) // Same answer

      const allCards = [currentCard, card1, card2]
      const distractors = generateDistractors(currentCard, allCards, 3)
      const ans = answers(distractors)

      // "drink" should only appear once
      const drinkCount = ans.filter((d) => d === "drink").length
      expect(drinkCount).toBeLessThanOrEqual(1)
    })
  })

  describe("particles", () => {
    it("should carry particles from source cards", () => {
      const currentCard = createMockCard(
        "vocabulary:食べる",
        ["eat"],
        "Ichidan verb",
        "vocabulary",
        [{ label: "direct object", particle: "を" }],
      )
      const otherCard = createMockCard(
        "vocabulary:行く",
        ["go"],
        "Godan verb - Iku/Yuku special class",
        "vocabulary",
        [{ label: "destination", particle: "に" }],
      )
      const noParticleCard = createMockCard(
        "vocabulary:見る",
        ["see"],
        "Ichidan verb",
      )
      const extraCard = createMockCard(
        "vocabulary:走る",
        ["run"],
        "Ichidan verb",
      )

      const allCards = [currentCard, otherCard, noParticleCard, extraCard]
      const distractors = generateDistractors(currentCard, allCards, 3)

      const goOption = distractors.find((d) => d.answer === "go")
      expect(goOption?.particles).toEqual([
        { label: "destination", particle: "に" },
      ])

      const seeOption = distractors.find((d) => d.answer === "see")
      expect(seeOption?.particles).toBeUndefined()
    })
  })
})
