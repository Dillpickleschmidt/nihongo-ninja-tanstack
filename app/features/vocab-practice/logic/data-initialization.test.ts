// vocab-practice/logic/data-initialization.ts
import { describe, it, expect } from "vitest"
import { createEmptyCard, Rating, State } from "ts-fsrs"
import type { RichVocabItem, VocabularyCollection } from "@/data/types"
import type { FSRSCardData } from "@/features/supabase/db/utils"
import { initializePracticeSession } from "./data-initialization"

describe("Data Initialization", () => {
  // --- Mock Data Setup ---
  const mockVocab: RichVocabItem[] = [
    {
      word: "食べる",
      furigana: "食[た]べる",
      english: ["to eat", "eat"],
      chapter: 1,
      hiragana: ["たべる"],
      rubyText: ["た", "べる"],
    },
    {
      word: "飲む",
      furigana: "飲[の]む",
      english: ["to drink", "drink"],
      chapter: 1,
      hiragana: ["のむ"],
      rubyText: ["の", "む"],
    },
    {
      word: "見る",
      furigana: "見[み]る",
      english: ["to see", "to watch", "see", "watch"],
      chapter: 1,
      hiragana: ["みる"],
      rubyText: ["み", "る"],
    },
  ]

  const mockGlobalVocabCollection: VocabularyCollection = {
    食べる: {
      word: "食べる",
      furigana: "食[た]べる",
      english: ["to eat", "eat"],
      chapter: 1,
    },
    飲む: {
      word: "飲む",
      furigana: "飲[の]む",
      english: ["to drink", "drink"],
      chapter: 1,
    },
    見る: {
      word: "見る",
      furigana: "見[み]る",
      english: ["to see", "to watch", "see", "watch"],
      chapter: 1,
    },
    due1: {
      word: "due1",
      furigana: "due1",
      english: ["due1_meaning"],
      chapter: 2,
    },
    due2: {
      word: "due2",
      furigana: "due2",
      english: ["due2_meaning"],
      chapter: 2,
    },
  }

  const mockModuleFSRSCards: FSRSCardData[] = [
    {
      practice_item_key: "食べる",
      fsrs_card: createEmptyCard(new Date()),
      fsrs_logs: [
        {
          rating: Rating.Good,
          state: State.Review,
          due: new Date(),
          stability: 3,
          difficulty: 5,
          elapsed_days: 0,
          last_elapsed_days: 0,
          scheduled_days: 3,
          review: new Date(),
          learning_steps: 0, // Added missing required property
        },
      ],
    },
  ]

  const mockDueFSRSCards: FSRSCardData[] = [
    {
      practice_item_key: "due1",
      fsrs_card: createEmptyCard(new Date()),
      fsrs_logs: null, // Test case for null logs
    },
    {
      practice_item_key: "due2",
      fsrs_card: createEmptyCard(new Date()),
      // Test case for undefined logs
    },
  ]

  // --- Tests ---

  describe("merging and creation", () => {
    it("should merge module and due cards without duplicates", () => {
      const result = initializePracticeSession(
        mockVocab,
        mockModuleFSRSCards,
        mockDueFSRSCards,
        "readings",
        mockGlobalVocabCollection,
      )

      expect(result.cardMap.size).toBe(5) // 3 vocab + 2 due
      expect(result.cardMap.has("食べる")).toBe(true)
      expect(result.cardMap.has("due1")).toBe(true)
      expect(result.cardMap.has("due2")).toBe(true)
    })

    it("should handle duplicate keys between module and due cards", () => {
      const duplicateDueCards: FSRSCardData[] = [
        {
          practice_item_key: "食べる", // Same as in module cards
          fsrs_card: createEmptyCard(new Date()),
        },
      ]

      const result = initializePracticeSession(
        mockVocab,
        mockModuleFSRSCards,
        duplicateDueCards,
        "readings",
        mockGlobalVocabCollection,
      )

      expect(result.cardMap.size).toBe(3)
      expect(result.cardMap.get("食べる")?.sessionStyle).toBe("multiple-choice")
    })

    it("should create new FSRS cards for vocabulary not in existing sets", () => {
      const result = initializePracticeSession(
        mockVocab,
        mockModuleFSRSCards,
        mockDueFSRSCards,
        "readings",
        mockGlobalVocabCollection,
      )

      const vocab2Card = result.cardMap.get("飲む")
      const vocab3Card = result.cardMap.get("見る")

      expect(vocab2Card).toBeDefined()
      expect(vocab3Card).toBeDefined()
      expect(vocab2Card?.fsrs.card).toBeDefined()
      expect(vocab3Card?.fsrs.card).toBeDefined()
    })

    it("should preserve existing FSRS data when available", () => {
      const result = initializePracticeSession(
        mockVocab,
        mockModuleFSRSCards,
        [],
        "readings",
        mockGlobalVocabCollection,
      )

      const vocab1Card = result.cardMap.get("食べる")
      expect(vocab1Card?.fsrs.card).toBe(mockModuleFSRSCards[0].fsrs_card)
    })
  })

  describe("FSRS log handling", () => {
    it("should correctly transfer existing logs from FSRSCardData", () => {
      const result = initializePracticeSession(
        mockVocab,
        mockModuleFSRSCards,
        [],
        "readings",
        mockGlobalVocabCollection,
      )

      const card = result.cardMap.get("食べる")
      expect(card?.fsrs.logs).toBeDefined()
      expect(card?.fsrs.logs).toHaveLength(1)
      expect(card?.fsrs.logs?.[0].rating).toBe(Rating.Good)
    })

    it("should handle null or undefined logs gracefully", () => {
      const result = initializePracticeSession(
        [],
        [],
        mockDueFSRSCards,
        "readings",
        mockGlobalVocabCollection,
      )

      const card1 = result.cardMap.get("due1") // Has null log
      const card2 = result.cardMap.get("due2") // Has undefined log

      expect(card1?.fsrs.logs).toBeDefined()
      expect(card1?.fsrs.logs).toHaveLength(0)
      expect(card2?.fsrs.logs).toBeDefined()
      expect(card2?.fsrs.logs).toHaveLength(0)
    })

    it("should initialize with an empty logs array for new cards", () => {
      const result = initializePracticeSession(
        mockVocab,
        [],
        [],
        "readings",
        mockGlobalVocabCollection,
      )

      const card = result.cardMap.get("飲む")
      expect(card?.fsrs.logs).toBeDefined()
      expect(card?.fsrs.logs).toHaveLength(0)
    })
  })

  describe("assigning initial session styles", () => {
    it("should assign 'multiple-choice' to all module cards", () => {
      const result = initializePracticeSession(
        mockVocab,
        mockModuleFSRSCards,
        mockDueFSRSCards,
        "readings",
        mockGlobalVocabCollection,
      )

      expect(result.cardMap.get("食べる")?.sessionStyle).toBe("multiple-choice")
      expect(result.cardMap.get("飲む")?.sessionStyle).toBe("multiple-choice")
      expect(result.cardMap.get("見る")?.sessionStyle).toBe("multiple-choice")
    })

    it("should assign 'flashcard' to non-module due cards", () => {
      const result = initializePracticeSession(
        mockVocab,
        mockModuleFSRSCards,
        mockDueFSRSCards,
        "readings",
        mockGlobalVocabCollection,
      )

      expect(result.cardMap.get("due1")?.sessionStyle).toBe("flashcard")
      expect(result.cardMap.get("due2")?.sessionStyle).toBe("flashcard")
    })
  })

  describe("answer processing based on practice mode", () => {
    it("should set correct prompt and validAnswers for 'readings' mode", () => {
      const result = initializePracticeSession(
        mockVocab,
        mockModuleFSRSCards,
        mockDueFSRSCards,
        "readings",
        mockGlobalVocabCollection,
      )

      const card = result.cardMap.get("食べる")
      expect(card?.prompt).toBe("食べる")
      expect(card?.validAnswers).toEqual(["to eat", "eat"])
    })

    it("should set correct prompt and validAnswers for 'kana' mode", () => {
      const result = initializePracticeSession(
        mockVocab,
        mockModuleFSRSCards,
        mockDueFSRSCards,
        "kana",
        mockGlobalVocabCollection,
      )

      const card = result.cardMap.get("食べる")
      expect(card?.prompt).toBe("食べる")
      expect(card?.validAnswers).toEqual(["たべる"])
    })
  })

  describe("queue initialization", () => {
    it("should populate moduleQueue with all vocabulary keys", () => {
      const result = initializePracticeSession(
        mockVocab,
        mockModuleFSRSCards,
        mockDueFSRSCards,
        "readings",
        mockGlobalVocabCollection,
      )

      expect(result.moduleQueue).toHaveLength(3)
      expect(result.moduleQueue).toContain("食べる")
      expect(result.moduleQueue).toContain("飲む")
      expect(result.moduleQueue).toContain("見る")
    })

    it("should populate reviewQueue with non-module due card keys", () => {
      const result = initializePracticeSession(
        mockVocab,
        mockModuleFSRSCards,
        mockDueFSRSCards,
        "readings",
        mockGlobalVocabCollection,
      )

      expect(result.reviewQueue).toHaveLength(2)
      expect(result.reviewQueue).toContain("due1")
      expect(result.reviewQueue).toContain("due2")
    })

    it("should initialize with empty activeQueue and isFinished false", () => {
      const result = initializePracticeSession(
        mockVocab,
        mockModuleFSRSCards,
        mockDueFSRSCards,
        "readings",
        mockGlobalVocabCollection,
      )

      expect(result.activeQueue).toHaveLength(0)
      expect(result.isFinished).toBe(false)
    })
  })

  describe("edge cases", () => {
    it("should handle empty input arrays", () => {
      const result = initializePracticeSession(
        [],
        [],
        [],
        "readings",
        mockGlobalVocabCollection,
      )

      expect(result.cardMap.size).toBe(0)
      expect(result.moduleQueue).toHaveLength(0)
      expect(result.reviewQueue).toHaveLength(0)
      expect(result.activeQueue).toHaveLength(0)
      expect(result.isFinished).toBe(false)
    })

    it("should handle only vocabulary with no existing FSRS cards", () => {
      const result = initializePracticeSession(
        mockVocab,
        [],
        [],
        "readings",
        mockGlobalVocabCollection,
      )

      expect(result.cardMap.size).toBe(3)
      expect(result.moduleQueue).toHaveLength(3)
      expect(result.reviewQueue).toHaveLength(0)

      mockVocab.forEach((vocab) => {
        const card = result.cardMap.get(vocab.word)
        expect(card?.sessionStyle).toBe("multiple-choice")
        expect(card?.prompt).toBe(vocab.word)
      })
    })

    it("should handle only due cards with no vocabulary", () => {
      const result = initializePracticeSession(
        [],
        [],
        mockDueFSRSCards,
        "readings",
        mockGlobalVocabCollection,
      )

      expect(result.cardMap.size).toBe(2)
      expect(result.moduleQueue).toHaveLength(0)
      expect(result.reviewQueue).toHaveLength(2)

      mockDueFSRSCards.forEach((fsrsCard) => {
        const card = result.cardMap.get(fsrsCard.practice_item_key)!
        expect(card.sessionStyle).toBe("flashcard")
        expect(card.vocab.english).toEqual([
          `${fsrsCard.practice_item_key}_meaning`,
        ])
      })
    })
  })
})
