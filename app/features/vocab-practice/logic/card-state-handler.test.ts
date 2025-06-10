import { describe, it, expect } from "vitest"
import { createEmptyCard, Rating, State } from "ts-fsrs"
import type { PracticeCard, SessionCardStyle } from "../types"
import { handleCardAnswer } from "./card-state-handler"

// Helper to create a mock PracticeCard with the new FSRSInfo structure
const createMockPracticeCard = (
  sessionStyle: SessionCardStyle,
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
    // log is initially undefined
  },
  sessionStyle,
  prompt: "食べる",
  validAnswers: ["to eat", "eat"],
})

describe("Card State Handler", () => {
  describe("when initial style is 'multiple-choice'", () => {
    it("should transition to 'write' on a correct answer (Good)", () => {
      const initialCard = createMockPracticeCard("multiple-choice")
      const updatedCard = handleCardAnswer(initialCard, Rating.Good)

      expect(updatedCard.sessionStyle).toBe("write")
      // Check that FSRS data was updated
      expect(updatedCard.fsrs.card.stability).not.toBe(
        initialCard.fsrs.card.stability,
      )
    })

    it("should stay 'multiple-choice' on an incorrect answer (Again)", () => {
      const initialCard = createMockPracticeCard("multiple-choice")
      const updatedCard = handleCardAnswer(initialCard, Rating.Again)

      expect(updatedCard.sessionStyle).toBe("multiple-choice")
      // Check that FSRS data was updated (difficulty should change)
      expect(updatedCard.fsrs.card.difficulty).not.toBe(
        initialCard.fsrs.card.difficulty,
      )
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
    })

    it("should revert to 'multiple-choice' on an incorrect answer (Again)", () => {
      const initialCard = createMockPracticeCard("write")
      const updatedCard = handleCardAnswer(initialCard, Rating.Again)

      expect(updatedCard.sessionStyle).toBe("multiple-choice")
      expect(updatedCard.fsrs.card.difficulty).not.toBe(
        initialCard.fsrs.card.difficulty,
      )
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
    })

    it("should stay 'flashcard' on a successful review (Hard)", () => {
      const initialCard = createMockPracticeCard("flashcard")
      const updatedCard = handleCardAnswer(initialCard, Rating.Hard)

      expect(updatedCard.sessionStyle).toBe("flashcard")
      expect(updatedCard.fsrs.card.stability).not.toBe(
        initialCard.fsrs.card.stability,
      )
    })

    it("should be promoted to 'multiple-choice' on a failed review (Again)", () => {
      const initialCard = createMockPracticeCard("flashcard")
      const updatedCard = handleCardAnswer(initialCard, Rating.Again)

      expect(updatedCard.sessionStyle).toBe("multiple-choice")
      expect(updatedCard.fsrs.card.difficulty).not.toBe(
        initialCard.fsrs.card.difficulty,
      )
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
})
