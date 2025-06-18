// vocab-practice/logic/card-state-handler.test.ts
import { describe, it, expect } from "vitest"
import { createEmptyCard, Rating, State } from "ts-fsrs"
import type { PracticeCard, SessionCardStyle } from "../types"
import { handleCardAnswer } from "./card-state-handler"

// Helper to create a mock PracticeCard with the new FSRSInfo structure
const createMockPracticeCard = (
  sessionStyle: SessionCardStyle,
  practiceItemType: DBPracticeItemType = "vocabulary",
): PracticeCard => ({
  key: "食べる",
  vocab: {
    word: "食べる",
    furigana: "食[た]べる",
    english: ["to eat", "eat"],
    chapter: 1,
    hiragana: ["たべる"],
    rubyText: ["た", "べる"],
  },
  fsrs: {
    card: createEmptyCard(new Date()),
    // logs is initially undefined
  },
  practiceMode: "readings",
  practiceItemType,
  sessionStyle,
  prompt: "食べる",
  validAnswers: ["to eat", "eat"],
  sessionScope: "module",
})

describe("Card State Handler", () => {
  describe("when initial style is 'multiple-choice'", () => {
    it("should transition to 'write' on a correct answer (Good) for vocabulary", () => {
      const initialCard = createMockPracticeCard(
        "multiple-choice",
        "vocabulary",
      )
      const updatedCard = handleCardAnswer(initialCard, Rating.Good)

      expect(updatedCard.sessionStyle).toBe("write")
      // Check that FSRS data was updated
      expect(updatedCard.fsrs.card.stability).not.toBe(
        initialCard.fsrs.card.stability,
      )
      // Check that logs were added
      expect(updatedCard.fsrs.logs).toHaveLength(1)
    })

    it("should transition to 'flashcard' on a correct answer (Good) for kanji", () => {
      const initialCard = createMockPracticeCard("multiple-choice", "kanji")
      const updatedCard = handleCardAnswer(initialCard, Rating.Good)

      expect(updatedCard.sessionStyle).toBe("flashcard")
      expect(updatedCard.fsrs.card.stability).not.toBe(
        initialCard.fsrs.card.stability,
      )
      expect(updatedCard.fsrs.logs).toHaveLength(1)
    })

    it("should transition to 'flashcard' on a correct answer (Good) for radical", () => {
      const initialCard = createMockPracticeCard("multiple-choice", "radical")
      const updatedCard = handleCardAnswer(initialCard, Rating.Good)

      expect(updatedCard.sessionStyle).toBe("flashcard")
      expect(updatedCard.fsrs.card.stability).not.toBe(
        initialCard.fsrs.card.stability,
      )
      expect(updatedCard.fsrs.logs).toHaveLength(1)
    })

    it("should stay 'multiple-choice' on an incorrect answer (Again)", () => {
      const initialCard = createMockPracticeCard("multiple-choice")
      const updatedCard = handleCardAnswer(initialCard, Rating.Again)

      expect(updatedCard.sessionStyle).toBe("multiple-choice")
      // Check that FSRS data was updated (difficulty should change)
      expect(updatedCard.fsrs.card.difficulty).not.toBe(
        initialCard.fsrs.card.difficulty,
      )
      expect(updatedCard.fsrs.logs).toHaveLength(1)
    })
  })

  describe("when initial style is 'write'", () => {
    it("should transition to 'done' on a correct answer (Easy)", () => {
      const initialCard = createMockPracticeCard("write")
      const updatedCard = handleCardAnswer(initialCard, Rating.Easy)

      expect(updatedCard.sessionStyle).toBe("done")
      expect(updatedCard.fsrs.card.stability).not.toBe(
        initialCard.fsrs.card.stability,
      )
      expect(updatedCard.fsrs.logs).toHaveLength(1)
    })

    it("should revert to 'multiple-choice' on an incorrect answer (Again)", () => {
      const initialCard = createMockPracticeCard("write")
      const updatedCard = handleCardAnswer(initialCard, Rating.Again)

      expect(updatedCard.sessionStyle).toBe("multiple-choice")
      expect(updatedCard.fsrs.card.difficulty).not.toBe(
        initialCard.fsrs.card.difficulty,
      )
      expect(updatedCard.fsrs.logs).toHaveLength(1)
    })

    it("should revert to 'multiple-choice' on other ratings (Good, Hard)", () => {
      const initialCard = createMockPracticeCard("write")
      const updatedCard = handleCardAnswer(initialCard, Rating.Good)

      expect(updatedCard.sessionStyle).toBe("multiple-choice")
      expect(updatedCard.fsrs.card.stability).not.toBe(
        initialCard.fsrs.card.stability,
      )
      expect(updatedCard.fsrs.logs).toHaveLength(1)
    })
  })

  describe("when initial style is 'flashcard'", () => {
    it("should stay 'flashcard' on a successful review (Good)", () => {
      const initialCard = createMockPracticeCard("flashcard")
      const updatedCard = handleCardAnswer(initialCard, Rating.Good)

      expect(updatedCard.sessionStyle).toBe("flashcard")
      expect(updatedCard.fsrs.card.stability).not.toBe(
        initialCard.fsrs.card.stability,
      )
      expect(updatedCard.fsrs.logs).toHaveLength(1)
    })

    it("should stay 'flashcard' on a successful review (Hard)", () => {
      const initialCard = createMockPracticeCard("flashcard")
      const updatedCard = handleCardAnswer(initialCard, Rating.Hard)

      expect(updatedCard.sessionStyle).toBe("flashcard")
      expect(updatedCard.fsrs.card.stability).not.toBe(
        initialCard.fsrs.card.stability,
      )
      expect(updatedCard.fsrs.logs).toHaveLength(1)
    })

    it("should stay 'flashcard' on a successful review (Easy)", () => {
      const initialCard = createMockPracticeCard("flashcard")
      const updatedCard = handleCardAnswer(initialCard, Rating.Easy)

      expect(updatedCard.sessionStyle).toBe("flashcard")
      expect(updatedCard.fsrs.card.stability).not.toBe(
        initialCard.fsrs.card.stability,
      )
      expect(updatedCard.fsrs.logs).toHaveLength(1)
    })

    it("should transition to 'multiple-choice' on a failed review (Again)", () => {
      const initialCard = createMockPracticeCard("flashcard")
      const updatedCard = handleCardAnswer(initialCard, Rating.Again)

      expect(updatedCard.sessionStyle).toBe("multiple-choice")
      expect(updatedCard.fsrs.card.difficulty).not.toBe(
        initialCard.fsrs.card.difficulty,
      )
      expect(updatedCard.fsrs.logs).toHaveLength(1)
    })
  })

  describe("when initial style is 'done'", () => {
    it("should stay 'done' regardless of rating", () => {
      const initialCard = createMockPracticeCard("done")
      const updatedCard = handleCardAnswer(initialCard, Rating.Good)

      expect(updatedCard.sessionStyle).toBe("done")
      expect(updatedCard.fsrs.logs).toHaveLength(1)
    })
  })

  describe("FSRS state transitions", () => {
    it("should put a card into Learning state after one 'Again' rating", () => {
      const initialCard = createMockPracticeCard("multiple-choice")
      const updatedCard = handleCardAnswer(initialCard, Rating.Again)

      // A new card rated 'Again' goes into the 'Learning' state
      expect(updatedCard.fsrs.card.state).toBe(State.Learning)
    })

    it("should put a card into Review state after enough correct answers", () => {
      let card = createMockPracticeCard("multiple-choice")

      // Simulate a sequence of correct answers to graduate the card
      card = handleCardAnswer(card, Rating.Good) // Now 'write'
      card = handleCardAnswer(card, Rating.Easy) // Now 'done'

      // After enough correct ratings, the card should be scheduled for review
      expect(card.fsrs.card.state).toBe(State.Review)
    })
  })

  describe("logs handling", () => {
    it("should preserve existing logs and add new ones", () => {
      const initialCard = createMockPracticeCard("multiple-choice")

      // First answer
      let updatedCard = handleCardAnswer(initialCard, Rating.Good)
      expect(updatedCard.fsrs.logs).toHaveLength(1)

      // Second answer
      updatedCard = handleCardAnswer(updatedCard, Rating.Easy)
      expect(updatedCard.fsrs.logs).toHaveLength(2)
    })
  })
})
