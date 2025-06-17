// vocab-practice/logic/data-initialization.test.ts
import { describe, it, expect } from "vitest"
import { createEmptyCard, Rating, State } from "ts-fsrs"
import type { VocabularyCollection } from "@/data/types"
import type {
  FullHierarchyData,
  VocabHierarchy,
  Kanji,
  Radical,
} from "@/data/wanikani/types"
import type { FSRSCardData } from "@/features/supabase/db/utils"
import { initializePracticeSession } from "./data-initialization"

describe("Data Initialization", () => {
  // --- Mock Data Factory Functions ---
  const createMockRadical = (
    id: number,
    slug: string,
    meanings: string[],
  ): Radical => ({
    id,
    characters: slug === "person" ? "人" : slug === "mouth" ? "口" : "水",
    slug,
    meanings,
  })

  const createMockKanji = (
    id: number,
    characters: string,
    meanings: string[],
    radicals: Radical[],
  ): Kanji => ({
    id,
    characters,
    slug: characters,
    radicals,
    meanings,
  })

  const createMockVocab = (
    id: number,
    characters: string,
    kanji: Kanji[],
  ): VocabHierarchy => ({
    id,
    characters,
    slug: characters,
    kanji,
  })

  // --- Core Mock Data ---
  const mockRadicals: Radical[] = [
    createMockRadical(1, "person", ["person", "human"]),
    createMockRadical(2, "mouth", ["mouth"]),
    createMockRadical(3, "water", ["water"]),
  ]

  const mockKanji: Kanji[] = [
    createMockKanji(
      1,
      "食",
      ["food", "meal"],
      [mockRadicals[0], mockRadicals[1]],
    ),
    createMockKanji(2, "飲", ["drink"], [mockRadicals[2]]),
    createMockKanji(3, "見", ["see", "look"], [mockRadicals[0]]),
  ]

  const mockVocabHierarchy: VocabHierarchy[] = [
    createMockVocab(1, "食べる", [mockKanji[0]]),
    createMockVocab(2, "飲む", [mockKanji[1]]),
    createMockVocab(3, "見る", [mockKanji[2]]),
  ]

  const mockHierarchy: FullHierarchyData = {
    hierarchy: mockVocabHierarchy,
    uniqueKanji: mockKanji,
    uniqueRadicals: mockRadicals,
  }

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

  const createMockFSRSCard = (
    key: string,
    mode: "readings" | "kana",
    type: "vocabulary" | "kanji" | "radical",
    state: State = State.New,
  ): FSRSCardData => ({
    practice_item_key: key,
    fsrs_card: { ...createEmptyCard(new Date()), state },
    mode,
    type,
    fsrs_logs:
      state === State.Review
        ? [
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
              learning_steps: 0,
            },
          ]
        : [],
  })

  // --- Core Functionality Tests ---
  describe("hierarchy processing and card creation", () => {
    it("should create cards for all hierarchy items with correct keys and types", () => {
      const result = initializePracticeSession(
        mockHierarchy,
        [],
        [],
        "readings",
        mockGlobalVocabCollection,
      )

      // Verify all expected cards are created
      const expectedCards = [
        // Vocabulary cards
        { key: "vocabulary:食べる", type: "vocabulary" },
        { key: "vocabulary:飲む", type: "vocabulary" },
        { key: "vocabulary:見る", type: "vocabulary" },
        // Kanji cards
        { key: "kanji:食", type: "kanji" },
        { key: "kanji:飲", type: "kanji" },
        { key: "kanji:見", type: "kanji" },
        // Radical cards
        { key: "radical:person", type: "radical" },
        { key: "radical:mouth", type: "radical" },
        { key: "radical:water", type: "radical" },
      ]

      expectedCards.forEach(({ key, type }) => {
        expect(result.cardMap.has(key)).toBe(true)
        expect(result.cardMap.get(key)?.practiceItemType).toBe(type)
        expect(result.cardMap.get(key)?.sessionScope).toBe("module")
      })

      expect(result.cardMap.size).toBe(9)
    })

    it("should handle duplicate keys between module and due cards correctly", () => {
      const duplicateDueCards: FSRSCardData[] = [
        createMockFSRSCard("食べる", "readings", "vocabulary"),
      ]

      const result = initializePracticeSession(
        mockHierarchy,
        [],
        duplicateDueCards,
        "readings",
        mockGlobalVocabCollection,
      )

      // Should not create duplicate - only module version should exist
      expect(result.cardMap.has("vocabulary:食べる")).toBe(true)
      expect(result.cardMap.get("vocabulary:食べる")?.sessionScope).toBe(
        "module",
      )
      expect(result.reviewQueue).not.toContain("vocabulary:食べる")
    })

    it("should process standalone due review cards", () => {
      const mockDueFSRSCards: FSRSCardData[] = [
        createMockFSRSCard("due1", "readings", "vocabulary"),
        createMockFSRSCard("due2", "readings", "vocabulary"),
      ]

      const result = initializePracticeSession(
        mockHierarchy,
        [],
        mockDueFSRSCards,
        "readings",
        mockGlobalVocabCollection,
      )

      expect(result.cardMap.has("vocabulary:due1")).toBe(true)
      expect(result.cardMap.has("vocabulary:due2")).toBe(true)
      expect(result.cardMap.get("vocabulary:due1")?.sessionScope).toBe("review")
      expect(result.cardMap.get("vocabulary:due2")?.sessionScope).toBe("review")
      expect(result.reviewQueue).toContain("vocabulary:due1")
      expect(result.reviewQueue).toContain("vocabulary:due2")
    })
  })

  describe("dependency management", () => {
    it("should build correct dependency relationships", () => {
      const result = initializePracticeSession(
        mockHierarchy,
        [],
        [],
        "readings",
        mockGlobalVocabCollection,
      )

      // Test vocabulary -> kanji dependencies
      expect(result.dependencyMap.get("vocabulary:食べる")).toContain(
        "kanji:食",
      )
      expect(result.dependencyMap.get("vocabulary:飲む")).toContain("kanji:飲")
      expect(result.dependencyMap.get("vocabulary:見る")).toContain("kanji:見")

      // Test kanji -> radical dependencies
      expect(result.dependencyMap.get("kanji:食")).toContain("radical:person")
      expect(result.dependencyMap.get("kanji:食")).toContain("radical:mouth")
      expect(result.dependencyMap.get("kanji:飲")).toContain("radical:water")
      expect(result.dependencyMap.get("kanji:見")).toContain("radical:person")

      // Test reverse dependencies (unlocks)
      expect(result.unlocksMap.get("kanji:食")).toContain("vocabulary:食べる")
      expect(result.unlocksMap.get("radical:person")).toContain("kanji:食")
      expect(result.unlocksMap.get("radical:person")).toContain("kanji:見")
    })

    it("should lock cards with dependencies and unlock cards without", () => {
      const result = initializePracticeSession(
        mockHierarchy,
        [],
        [],
        "readings",
        mockGlobalVocabCollection,
      )

      // Cards with dependencies should be locked
      const lockedCards = [
        "vocabulary:食べる",
        "vocabulary:飲む",
        "vocabulary:見る",
        "kanji:食",
        "kanji:飲",
        "kanji:見",
      ]
      lockedCards.forEach((key) => {
        expect(result.lockedKeys.has(key)).toBe(true)
      })

      // Radicals should not be locked (no dependencies)
      const unlockedCards = ["radical:person", "radical:mouth", "radical:water"]
      unlockedCards.forEach((key) => {
        expect(result.lockedKeys.has(key)).toBe(false)
      })

      // Only unlocked cards should be in module queue
      expect(result.moduleQueue).toHaveLength(3)
      unlockedCards.forEach((key) => {
        expect(result.moduleQueue).toContain(key)
      })
    })

    it("should not create dependencies for well-known prerequisites", () => {
      const fsrsCardsWithWellKnown: FSRSCardData[] = [
        createMockFSRSCard("person", "readings", "radical", State.Review),
        createMockFSRSCard("mouth", "readings", "radical", State.Review),
      ]

      const result = initializePracticeSession(
        mockHierarchy,
        fsrsCardsWithWellKnown,
        [],
        "readings",
        mockGlobalVocabCollection,
      )

      // 食 kanji should not depend on well-known radicals
      expect(result.dependencyMap.get("kanji:食")).toBeUndefined()
      expect(result.lockedKeys.has("kanji:食")).toBe(false)
    })
  })

  describe("FSRS data handling", () => {
    it("should preserve and filter FSRS data correctly", () => {
      const mockModuleFSRSCards: FSRSCardData[] = [
        createMockFSRSCard("食べる", "readings", "vocabulary", State.Review),
        createMockFSRSCard("食", "readings", "kanji", State.New),
      ]

      const result = initializePracticeSession(
        mockHierarchy,
        mockModuleFSRSCards,
        [],
        "readings",
        mockGlobalVocabCollection,
      )

      const vocabCard = result.cardMap.get("vocabulary:食べる")
      const kanjiCard = result.cardMap.get("kanji:食")

      expect(vocabCard?.fsrs.card).toBe(mockModuleFSRSCards[0].fsrs_card)
      expect(kanjiCard?.fsrs.card).toBe(mockModuleFSRSCards[1].fsrs_card)
      expect(vocabCard?.fsrs.logs).toHaveLength(1)
      expect(kanjiCard?.fsrs.logs).toHaveLength(0)
    })

    it("should filter incoming FSRS data by the current session mode", () => {
      const mixedModeFSRSCards: FSRSCardData[] = [
        createMockFSRSCard("食べる", "readings", "vocabulary"),
        createMockFSRSCard("食べる", "kana", "vocabulary"),
        createMockFSRSCard("食", "readings", "kanji"),
        createMockFSRSCard("食", "kana", "kanji"),
      ]

      // Set different stability values to distinguish them
      mixedModeFSRSCards[0].fsrs_card.stability = 10 // readings mode
      mixedModeFSRSCards[1].fsrs_card.stability = 50 // kana mode
      mixedModeFSRSCards[2].fsrs_card.stability = 20 // readings mode
      mixedModeFSRSCards[3].fsrs_card.stability = 60 // kana mode

      const result = initializePracticeSession(
        mockHierarchy,
        mixedModeFSRSCards,
        [],
        "readings", // Session mode is "readings"
        mockGlobalVocabCollection,
      )

      // Should use the "readings" mode FSRS data, not the "kana" mode data
      const vocabCard = result.cardMap.get("vocabulary:食べる")
      const kanjiCard = result.cardMap.get("kanji:食")

      expect(vocabCard?.fsrs.card.stability).toBe(10) // From "readings" mode
      expect(kanjiCard?.fsrs.card.stability).toBe(20) // From "readings" mode
    })

    it("should handle null/undefined logs gracefully", () => {
      const mockDueFSRSCards: FSRSCardData[] = [
        {
          ...createMockFSRSCard("due1", "readings", "vocabulary"),
          fsrs_logs: null,
        },
        {
          ...createMockFSRSCard("due2", "readings", "vocabulary"),
          fsrs_logs: undefined,
        },
      ]

      const result = initializePracticeSession(
        mockHierarchy,
        [],
        mockDueFSRSCards,
        "readings",
        mockGlobalVocabCollection,
      )

      const card1 = result.cardMap.get("vocabulary:due1")
      const card2 = result.cardMap.get("vocabulary:due2")

      expect(card1?.fsrs.logs).toBeDefined()
      expect(card1?.fsrs.logs).toHaveLength(0)
      expect(card2?.fsrs.logs).toBeDefined()
      expect(card2?.fsrs.logs).toHaveLength(0)
    })
  })

  describe("session style assignment", () => {
    it("should assign correct session styles based on card state and type", () => {
      const testCases = [
        {
          name: "new module cards get multiple-choice",
          fsrsCards: [],
          expectations: [
            { key: "vocabulary:食べる", style: "multiple-choice" },
            { key: "kanji:食", style: "multiple-choice" },
            { key: "radical:person", style: "multiple-choice" },
          ],
        },
        {
          name: "core vocab in review state stays multiple-choice",
          fsrsCards: [
            createMockFSRSCard(
              "食べる",
              "readings",
              "vocabulary",
              State.Review,
            ),
          ],
          expectations: [
            { key: "vocabulary:食べる", style: "multiple-choice" },
          ],
        },
        {
          name: "dependency cards in review state become flashcard",
          fsrsCards: [
            createMockFSRSCard("食", "readings", "kanji", State.Review),
          ],
          expectations: [{ key: "kanji:食", style: "flashcard" }],
        },
        {
          name: "due review cards are flashcard",
          fsrsCards: [],
          dueFsrsCards: [createMockFSRSCard("due1", "readings", "vocabulary")],
          expectations: [{ key: "vocabulary:due1", style: "flashcard" }],
        },
      ]

      testCases.forEach(
        ({ name, fsrsCards, dueFsrsCards = [], expectations }) => {
          const result = initializePracticeSession(
            mockHierarchy,
            fsrsCards,
            dueFsrsCards,
            "readings",
            mockGlobalVocabCollection,
          )

          expectations.forEach(({ key, style }) => {
            expect(result.cardMap.get(key)?.sessionStyle).toBe(style)
          })
        },
      )
    })
  })

  describe("answer processing based on practice mode", () => {
    it("should set correct prompts and answers for different practice modes", () => {
      const testCases = [
        {
          mode: "readings" as const,
          expectations: [
            {
              key: "vocabulary:食べる",
              prompt: "食べる",
              answers: ["to eat", "eat"],
            },
            { key: "kanji:食", prompt: "食", answers: ["food", "meal"] },
            {
              key: "radical:person",
              prompt: "人",
              answers: ["person", "human"],
            },
          ],
        },
        {
          mode: "kana" as const,
          expectations: [
            {
              key: "vocabulary:食べる",
              prompt: "to eat, eat",
              answers: ["たべる", "食べる"],
            },
          ],
        },
      ]

      testCases.forEach(({ mode, expectations }) => {
        const result = initializePracticeSession(
          mockHierarchy,
          [],
          [],
          mode,
          mockGlobalVocabCollection,
        )

        expectations.forEach(({ key, prompt, answers }) => {
          const card = result.cardMap.get(key)
          expect(card?.prompt).toBe(prompt)
          expect(card?.validAnswers).toEqual(expect.arrayContaining(answers))
        })
      })
    })

    it("should not use WaniKani meanings for vocabulary items", () => {
      const result = initializePracticeSession(
        mockHierarchy,
        [],
        [],
        "readings",
        mockGlobalVocabCollection,
      )

      const vocabCard = result.cardMap.get("vocabulary:食べる")
      const kanjiCard = result.cardMap.get("kanji:食")

      // Vocabulary should use globalVocabCollection meanings
      expect(vocabCard?.validAnswers).toEqual(["to eat", "eat"])

      // Kanji should use WaniKani meanings (different from vocab)
      expect(kanjiCard?.validAnswers).toEqual(["food", "meal"])
      expect(vocabCard?.validAnswers).not.toEqual(kanjiCard?.validAnswers)
    })
  })

  describe("queue initialization", () => {
    it("should initialize queues correctly", () => {
      const result = initializePracticeSession(
        mockHierarchy,
        [],
        [],
        "readings",
        mockGlobalVocabCollection,
      )

      // Only radicals should be unlocked initially
      expect(result.moduleQueue).toHaveLength(3)
      expect(result.moduleQueue).toEqual(
        expect.arrayContaining([
          "radical:person",
          "radical:mouth",
          "radical:water",
        ]),
      )

      // No review cards in this test
      expect(result.reviewQueue).toHaveLength(0)
      expect(result.activeQueue).toHaveLength(0)
      expect(result.isFinished).toBe(false)
    })

    it("should handle cards already in Review state", () => {
      const reviewStateFSRS: FSRSCardData[] = [
        createMockFSRSCard("person", "readings", "radical", State.Review),
      ]

      const result = initializePracticeSession(
        mockHierarchy,
        reviewStateFSRS,
        [],
        "readings",
        mockGlobalVocabCollection,
      )

      const reviewCard = result.cardMap.get("radical:person")
      expect(reviewCard?.sessionStyle).toBe("flashcard") // Review state -> flashcard
      expect(result.moduleQueue).toContain("radical:person") // Still in module queue
    })
  })

  describe("edge cases", () => {
    it("should handle various edge scenarios", () => {
      const edgeCases = [
        {
          name: "empty hierarchy",
          hierarchy: { hierarchy: [], uniqueKanji: [], uniqueRadicals: [] },
          expectation: (result: any) => {
            expect(result.cardMap.size).toBe(0)
            expect(result.moduleQueue).toHaveLength(0)
            expect(result.reviewQueue).toHaveLength(0)
          },
        },
        {
          name: "hierarchy with no dependencies",
          hierarchy: {
            hierarchy: [],
            uniqueKanji: [],
            uniqueRadicals: mockRadicals,
          },
          expectation: (result: any) => {
            expect(result.cardMap.size).toBe(3)
            expect(result.moduleQueue).toHaveLength(3)
            expect(result.lockedKeys.size).toBe(0)
          },
        },
        {
          name: "only due cards",
          hierarchy: { hierarchy: [], uniqueKanji: [], uniqueRadicals: [] },
          dueCards: [createMockFSRSCard("due1", "readings", "vocabulary")],
          expectation: (result: any) => {
            expect(result.cardMap.size).toBe(1)
            expect(result.reviewQueue).toContain("vocabulary:due1")
            expect(result.cardMap.get("vocabulary:due1")?.sessionStyle).toBe(
              "flashcard",
            )
          },
        },
      ]

      edgeCases.forEach(({ name, hierarchy, dueCards = [], expectation }) => {
        const result = initializePracticeSession(
          hierarchy as FullHierarchyData,
          [],
          dueCards,
          "readings",
          mockGlobalVocabCollection,
        )
        expectation(result)
      })
    })

    it("should handle complex dependency chains", () => {
      // Create a more complex hierarchy for testing
      const complexKanji: Kanji = createMockKanji(
        4,
        "複",
        ["complex", "duplicate"],
        mockRadicals,
      )
      const complexVocab: VocabHierarchy = createMockVocab(4, "複雑", [
        complexKanji,
        mockKanji[0],
      ])

      const complexHierarchy: FullHierarchyData = {
        hierarchy: [complexVocab],
        uniqueKanji: [complexKanji, mockKanji[0]],
        uniqueRadicals: mockRadicals,
      }

      const complexGlobalVocab: VocabularyCollection = {
        ...mockGlobalVocabCollection,
        複雑: {
          word: "複雑",
          furigana: "複[ふく]雑[ざつ]",
          english: ["complex", "complicated"],
          chapter: 1,
        },
      }

      const result = initializePracticeSession(
        complexHierarchy,
        [],
        [],
        "readings",
        complexGlobalVocab,
      )

      // Check complex dependency chain
      expect(result.dependencyMap.get("vocabulary:複雑")).toEqual(
        expect.arrayContaining(["kanji:複", "kanji:食"]),
      )
      expect(result.dependencyMap.get("kanji:複")).toEqual(
        expect.arrayContaining([
          "radical:person",
          "radical:mouth",
          "radical:water",
        ]),
      )

      // Only radicals should be unlocked initially
      expect(result.moduleQueue).toHaveLength(3)
      expect(result.lockedKeys.has("vocabulary:複雑")).toBe(true)
      expect(result.lockedKeys.has("kanji:複")).toBe(true)
    })
  })
})
