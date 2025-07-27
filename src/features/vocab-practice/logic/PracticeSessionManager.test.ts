// vocab-practice/logic/PracticeSessionManager.test.ts
import { describe, it, expect, beforeEach, vi } from "vitest"
import { Rating, State } from "ts-fsrs"
import type { PracticeSessionState, PracticeCard } from "../types"
import { PracticeSessionManager } from "./PracticeSessionManager"
import { handleCardAnswer } from "./card-state-handler"

// This replaces upsertFSRSCardForUser with a mock function.
vi.mock("@/features/supabase/db/utils", () => ({
  upsertFSRSCardForUser: vi.fn(),
}))

// --- Flexible Test Setup ---
interface TestStateConfig {
  moduleCards?: number
  reviewCards?: number
  activeCards?: string[]
  dependencies?: Record<string, string[]>
  itemTypes?: Record<string, "vocabulary" | "kanji" | "radical">
  cardStyles?: Record<string, "multiple-choice" | "flashcard" | "write">
  lockedCards?: string[]
}

const createTestState = (
  config: TestStateConfig = {},
): PracticeSessionState => {
  const {
    moduleCards = 5,
    reviewCards = 5,
    activeCards = [],
    dependencies = {},
    itemTypes = {},
    cardStyles = {},
    lockedCards = [],
  } = config

  const cardMap = new Map<string, PracticeCard>()
  const dependencyMap = new Map<string, string[]>()
  const unlocksMap = new Map<string, string[]>()
  const lockedKeys = new Set(lockedCards)

  const createMockCard = (
    key: string,
    sessionScope: "module" | "review" = "module",
    practiceItemType: "vocabulary" | "kanji" | "radical" = "vocabulary",
    sessionStyle: "multiple-choice" | "flashcard" | "write" = "multiple-choice",
  ): PracticeCard => {
    const slug = key.split(":")[1]

    // Create realistic prompts and answers based on item type
    let prompt: string
    let validAnswers: string[]

    if (practiceItemType === "vocabulary") {
      if (sessionScope === "module") {
        prompt = slug.includes("単語") ? slug : `単語${slug.slice(-1) || "1"}`
        const num = slug.slice(-1) || "1"
        validAnswers = [`word${num}`, `term${num}`]
      } else {
        prompt = slug.includes("復習") ? slug : `復習${slug.slice(-1) || "1"}`
        const num = slug.slice(-1) || "1"
        validAnswers = [`review${num}`, `study${num}`]
      }
    } else if (practiceItemType === "kanji") {
      prompt = slug.includes("漢") ? slug : "漢"
      validAnswers = ["chinese character", "kanji"]
    } else {
      prompt = slug.includes("人") ? slug : "人"
      validAnswers = ["person", "human"]
    }

    return {
      key,
      vocab: {
        word: slug,
        furigana: slug,
        english: validAnswers,
        chapter: 1,
        hiragana: [slug],
        rubyText: [slug],
      },
      fsrs: {
        card: {
          state: sessionStyle === "flashcard" ? State.Review : State.New,
          due: new Date(),
          stability: 1,
          difficulty: 1,
          elapsed_days: 0,
          scheduled_days: 0,
          reps: 0,
          lapses: 0,
          learning_steps: 0,
        },
        logs: [],
      },
      sessionScope,
      practiceItemType,
      practiceMode: "readings",
      sessionStyle,
      prompt,
      validAnswers,
    }
  }

  // Create module cards
  const moduleKeys: string[] = []
  for (let i = 1; i <= moduleCards; i++) {
    const key = `vocabulary:単語${i}`
    moduleKeys.push(key)
    const itemType = itemTypes[key] || "vocabulary"
    const style = cardStyles[key] || "multiple-choice"
    cardMap.set(key, createMockCard(key, "module", itemType, style))
  }

  // Create review cards
  const reviewKeys: string[] = []
  for (let i = 1; i <= reviewCards; i++) {
    const key = `vocabulary:復習${i}`
    reviewKeys.push(key)
    const itemType = itemTypes[key] || "vocabulary"
    const style = cardStyles[key] || "flashcard"
    cardMap.set(key, createMockCard(key, "review", itemType, style))
  }

  // Set up dependencies
  Object.entries(dependencies).forEach(([dependent, prereqs]) => {
    dependencyMap.set(dependent, prereqs)
    prereqs.forEach((prereq) => {
      if (!unlocksMap.has(prereq)) unlocksMap.set(prereq, [])
      unlocksMap.get(prereq)!.push(dependent)
    })
  })

  // Determine available cards (not locked and not in active queue)
  const availableModuleCards = moduleKeys.filter(
    (key) => !lockedKeys.has(key) && !activeCards.includes(key),
  )
  const availableReviewCards = reviewKeys.filter(
    (key) => !lockedKeys.has(key) && !activeCards.includes(key),
  )

  return {
    cardMap,
    dependencyMap,
    unlocksMap,
    lockedKeys,
    moduleQueue: availableModuleCards.slice(0, 3), // First 3 available
    reviewQueue: availableReviewCards.slice(0, 3), // First 3 available
    activeQueue: activeCards,
    isFinished: false,
  }
}

describe("PracticeSessionManager", () => {
  let defaultState: PracticeSessionState

  beforeEach(() => {
    defaultState = createTestState({
      activeCards: [
        "vocabulary:単語1",
        "vocabulary:復習1",
        "vocabulary:単語2",
        "vocabulary:復習2",
      ],
    })
    vi.clearAllMocks()
  })

  // --- Pure Static Logic Tests ---
  describe("Static Methods", () => {
    describe("determineKeyFate", () => {
      it("should handle all card fate scenarios correctly", () => {
        const testCases = [
          {
            name: "cycle unfinished card",
            setup: () => {
              const key = "vocabulary:単語1"
              const originalCard = defaultState.cardMap.get(key)!
              const updatedCard = handleCardAnswer(originalCard, Rating.Again)
              return { key, originalCard, updatedCard }
            },
            expect: (result: any, key: string) => {
              expect(result.activeQueue).toContain(key)
              expect(result.activeQueue[result.activeQueue.length - 1]).toBe(
                key,
              )
            },
          },
          {
            name: "discard completed card",
            setup: () => {
              const key = "vocabulary:単語1"
              const originalCard = defaultState.cardMap.get(key)!
              let updatedCard = handleCardAnswer(originalCard, Rating.Good) // -> write
              updatedCard = handleCardAnswer(updatedCard, Rating.Good) // -> done
              return { key, originalCard, updatedCard }
            },
            expect: (result: any, key: string) => {
              expect(result.activeQueue).not.toContain(key)
              expect(result.moduleQueue).not.toContain(key)
              expect(result.reviewQueue).not.toContain(key)
            },
          },
          {
            name: "promote failed flashcard",
            setup: () => {
              const key = "vocabulary:復習1"
              const originalCard = defaultState.cardMap.get(key)!
              const updatedCard = handleCardAnswer(originalCard, Rating.Again)
              return { key, originalCard, updatedCard }
            },
            expect: (result: any, key: string) => {
              expect(result.moduleQueue).not.toContain(key)
              expect(result.reviewQueue).not.toContain(key)
              expect(result.activeQueue).toContain(key)
              expect(result.activeQueue[result.activeQueue.length - 1]).toBe(
                key,
              )
            },
          },
          {
            name: "discard successful flashcard",
            setup: () => {
              const key = "vocabulary:復習1"
              const originalCard = defaultState.cardMap.get(key)!
              const updatedCard = handleCardAnswer(originalCard, Rating.Good)
              return { key, originalCard, updatedCard }
            },
            expect: (result: any, key: string) => {
              expect(result.activeQueue).not.toContain(key)
              expect(result.moduleQueue).not.toContain(key)
              expect(result.reviewQueue).not.toContain(key)
            },
          },
        ]

        testCases.forEach(({ name, setup, expect: expectFn }) => {
          const { key, originalCard, updatedCard } = setup()
          const result = PracticeSessionManager.determineKeyFate(
            key,
            originalCard,
            updatedCard,
            {
              moduleQueue: defaultState.moduleQueue,
              reviewQueue: defaultState.reviewQueue,
              activeQueue: ["vocabulary:other1", "vocabulary:other2"],
            },
          )
          expectFn(result, key)
        })
      })
    })

    describe("replenishActiveQueue", () => {
      it("should handle queue replenishment scenarios", () => {
        const testCases = [
          {
            name: "fill to capacity",
            queues: {
              moduleQueue: Array.from(
                { length: 5 },
                (_, i) => `vocabulary:m${i + 1}`,
              ),
              reviewQueue: Array.from(
                { length: 5 },
                (_, i) => `vocabulary:r${i + 1}`,
              ),
              activeQueue: ["vocabulary:a1", "vocabulary:a2"],
            },
            expectedLength: 10,
          },
          {
            name: "handle empty sources",
            queues: {
              moduleQueue: [],
              reviewQueue: [],
              activeQueue: ["vocabulary:a1"],
            },
            expectedLength: 1,
          },
        ]

        testCases.forEach(({ name, queues, expectedLength }) => {
          const result = PracticeSessionManager.replenishActiveQueue(
            queues,
            () => 0.5,
          )
          expect(result.activeQueue.length).toBe(expectedLength)
        })
      })
    })
  })

  // --- Instance Method Tests ---
  describe("Session Management", () => {
    let manager: PracticeSessionManager

    beforeEach(() => {
      manager = new PracticeSessionManager(defaultState)
    })

    it("should initialize correctly", () => {
      expect(manager.getSourceQueueSizes().module).toBe(3)
      expect(manager.getSourceQueueSizes().review).toBe(3)
      expect(manager.getActiveQueue().length).toBe(4)
    })

    it("should handle card progression through all stages", async () => {
      // Test complete progression: multiple-choice -> write -> done
      const initialCard = manager.getCurrentCard()
      expect(initialCard.sessionStyle).toBe("multiple-choice")
      const cardKey = initialCard.key

      // Stage 1: multiple-choice -> write
      await manager.processAnswer(Rating.Good, false)
      const cardAfterGood = manager.getCardFromMap(cardKey)!
      expect(cardAfterGood.sessionStyle).toBe("write")

      // Find the card in write stage and complete it
      let attempts = 0
      while (attempts < 10) {
        const currentCard = manager.getCurrentCard()
        if (
          currentCard.key === cardKey &&
          currentCard.sessionStyle === "write"
        ) {
          const activeSize = manager.getActiveQueue().length
          await manager.processAnswer(Rating.Good, false) // Complete write stage

          // Card should be removed completely
          expect(manager.getActiveQueue().length).toBeLessThan(activeSize)
          expect(manager.getActiveQueue()).not.toContain(cardKey)
          break
        } else {
          await manager.processAnswer(Rating.Good, false)
        }
        attempts++
      }
      expect(attempts).toBeLessThan(10)
    })

    it("should handle queue management with and without replenishment", async () => {
      const initialSize = manager.getActiveQueue().length

      // Without replenishment
      await manager.processAnswer(Rating.Again, false)
      expect(manager.getActiveQueue().length).toBe(initialSize) // Card cycled back

      // With replenishment (default)
      const emptyActiveManager = new PracticeSessionManager(
        createTestState({ activeCards: [] }),
      )
      expect(emptyActiveManager.getActiveQueue().length).toBe(6) // Replenished from sources
    })

    it("should finish session correctly based on mode", async () => {
      // Standard mode: finish when module work is done
      const standardState = createTestState({
        moduleCards: 1,
        reviewCards: 2,
        activeCards: ["vocabulary:単語1"],
        cardStyles: { "vocabulary:単語1": "write" },
      })
      const standardManager = new PracticeSessionManager(standardState)

      await standardManager.processAnswer(Rating.Good) // Complete last module card
      expect(standardManager.isFinished()).toBe(true)

      // Review-only mode: finish when all cards are done
      const reviewState = createTestState({
        moduleCards: 0,
        reviewCards: 1,
        activeCards: ["vocabulary:復習1"],
      })
      const reviewManager = new PracticeSessionManager(reviewState, true)

      await reviewManager.processAnswer(Rating.Good) // Complete review card
      expect(reviewManager.isFinished()).toBe(true)
    })
  })

  // --- Hierarchy and Dependencies ---
  describe("Hierarchy System", () => {
    it("should handle dependency unlocking", async () => {
      const hierarchyState = createTestState({
        moduleCards: 0,
        reviewCards: 0,
        activeCards: ["radical:r1"],
        dependencies: {
          "kanji:k1": ["radical:r1"],
          "vocabulary:v1": ["kanji:k1"],
        },
        itemTypes: {
          "radical:r1": "radical",
          "kanji:k1": "kanji",
          "vocabulary:v1": "vocabulary",
        },
        lockedCards: ["kanji:k1", "vocabulary:v1"],
      })

      // Add ALL the cards to cardMap (this was missing for radical:r1)
      hierarchyState.cardMap.set("radical:r1", {
        key: "radical:r1",
        vocab: {
          word: "r1",
          furigana: "r1",
          english: ["radical1"],
          chapter: 1,
          hiragana: ["r1"],
          rubyText: ["r1"],
        },
        fsrs: {
          card: {
            state: State.New,
            due: new Date(),
            stability: 1,
            difficulty: 1,
            elapsed_days: 0,
            scheduled_days: 0,
            reps: 0,
            lapses: 0,
            learning_steps: 0,
          },
          logs: [],
        },
        sessionScope: "module",
        practiceItemType: "radical",
        practiceMode: "readings",
        sessionStyle: "multiple-choice",
        prompt: "人",
        validAnswers: ["radical1"],
      })

      hierarchyState.cardMap.set("kanji:k1", {
        key: "kanji:k1",
        vocab: {
          word: "k1",
          furigana: "k1",
          english: ["kanji1"],
          chapter: 1,
          hiragana: ["k1"],
          rubyText: ["k1"],
        },
        fsrs: {
          card: {
            state: State.New,
            due: new Date(),
            stability: 1,
            difficulty: 1,
            elapsed_days: 0,
            scheduled_days: 0,
            reps: 0,
            lapses: 0,
            learning_steps: 0,
          },
          logs: [],
        },
        sessionScope: "module",
        practiceItemType: "kanji",
        practiceMode: "readings",
        sessionStyle: "multiple-choice",
        prompt: "漢",
        validAnswers: ["kanji1"],
      })

      hierarchyState.cardMap.set("vocabulary:v1", {
        key: "vocabulary:v1",
        vocab: {
          word: "v1",
          furigana: "v1",
          english: ["vocab1"],
          chapter: 1,
          hiragana: ["v1"],
          rubyText: ["v1"],
        },
        fsrs: {
          card: {
            state: State.New,
            due: new Date(),
            stability: 1,
            difficulty: 1,
            elapsed_days: 0,
            scheduled_days: 0,
            reps: 0,
            lapses: 0,
            learning_steps: 0,
          },
          logs: [],
        },
        sessionScope: "module",
        practiceItemType: "vocabulary",
        practiceMode: "readings",
        sessionStyle: "multiple-choice",
        prompt: "単語",
        validAnswers: ["vocab1"],
      })

      const manager = new PracticeSessionManager(hierarchyState)

      // Initially only radical should be available
      expect(manager.getActiveQueue()).toEqual(["radical:r1"])
      expect(hierarchyState.lockedKeys.has("kanji:k1")).toBe(true)

      // Complete the radical
      await manager.processAnswer(Rating.Good, false) // -> write

      // Find and complete write stage
      let attempts = 0
      while (attempts < 10) {
        const currentCard = manager.getCurrentCard()
        if (
          currentCard.key === "radical:r1" &&
          currentCard.sessionStyle === "write"
        ) {
          await manager.processAnswer(Rating.Good, false) // -> done
          break
        } else {
          await manager.processAnswer(Rating.Good, false)
        }
        attempts++
      }

      // kanji:k1 should now be unlocked
      expect(manager.getSourceQueueSizes().module).toBe(1)
      expect(hierarchyState.lockedKeys.has("kanji:k1")).toBe(false)
      expect(hierarchyState.lockedKeys.has("vocabulary:v1")).toBe(true) // Still locked
    })
  })

  // --- Mixed Item Types and Modes ---
  describe("Mixed Content Handling", () => {
    it("should handle mixed item types correctly", async () => {
      const mixedState = createTestState({
        moduleCards: 0,
        reviewCards: 0,
        activeCards: ["vocabulary:食べる", "kanji:食", "radical:人"],
        itemTypes: {
          "vocabulary:食べる": "vocabulary",
          "kanji:食": "kanji",
          "radical:人": "radical",
        },
      })

      // Override with realistic data
      mixedState.cardMap.set("vocabulary:食べる", {
        key: "vocabulary:食べる",
        vocab: {
          word: "食べる",
          furigana: "食べる",
          english: ["to eat", "eat"],
          chapter: 1,
          hiragana: ["たべる"],
          rubyText: ["食べる"],
        },
        fsrs: {
          card: {
            state: State.New,
            due: new Date(),
            stability: 1,
            difficulty: 1,
            elapsed_days: 0,
            scheduled_days: 0,
            reps: 0,
            lapses: 0,
            learning_steps: 0,
          },
          logs: [],
        },
        sessionScope: "module",
        practiceItemType: "vocabulary",
        practiceMode: "readings",
        sessionStyle: "multiple-choice",
        prompt: "食べる",
        validAnswers: ["to eat", "eat"],
      })
      mixedState.cardMap.set("kanji:食", {
        key: "kanji:食",
        vocab: {
          word: "食",
          furigana: "食",
          english: ["food", "meal"],
          chapter: 1,
          hiragana: ["しょく"],
          rubyText: ["食"],
        },
        fsrs: {
          card: {
            state: State.New,
            due: new Date(),
            stability: 1,
            difficulty: 1,
            elapsed_days: 0,
            scheduled_days: 0,
            reps: 0,
            lapses: 0,
            learning_steps: 0,
          },
          logs: [],
        },
        sessionScope: "module",
        practiceItemType: "kanji",
        practiceMode: "readings",
        sessionStyle: "multiple-choice",
        prompt: "食",
        validAnswers: ["food", "meal"],
      })
      mixedState.cardMap.set("radical:人", {
        key: "radical:人",
        vocab: {
          word: "人",
          furigana: "人",
          english: ["person", "human"],
          chapter: 1,
          hiragana: ["ひと"],
          rubyText: ["人"],
        },
        fsrs: {
          card: {
            state: State.New,
            due: new Date(),
            stability: 1,
            difficulty: 1,
            elapsed_days: 0,
            scheduled_days: 0,
            reps: 0,
            lapses: 0,
            learning_steps: 0,
          },
          logs: [],
        },
        sessionScope: "module",
        practiceItemType: "radical",
        practiceMode: "readings",
        sessionStyle: "multiple-choice",
        prompt: "人",
        validAnswers: ["person", "human"],
      })

      const manager = new PracticeSessionManager(mixedState)

      // Verify each card type has correct isolated answers
      const vocabCard = manager.getCardFromMap("vocabulary:食べる")!
      const kanjiCard = manager.getCardFromMap("kanji:食")!
      const radicalCard = manager.getCardFromMap("radical:人")!

      expect(vocabCard.validAnswers).toEqual(["to eat", "eat"])
      expect(kanjiCard.validAnswers).toEqual(["food", "meal"])
      expect(radicalCard.validAnswers).toEqual(["person", "human"])

      // Verify manager can process each type without errors
      await manager.processAnswer(Rating.Good, false)
      await manager.processAnswer(Rating.Good, false)
      await manager.processAnswer(Rating.Good, false)
    })

    it("should handle review-only session with mixed practice modes", async () => {
      const mixedModeState = createTestState({
        moduleCards: 0,
        reviewCards: 0,
        activeCards: ["vocabulary:読む", "vocabulary:書く"],
      })

      // Set up cards with different practice modes
      mixedModeState.cardMap.set("vocabulary:読む", {
        key: "vocabulary:読む",
        vocab: {
          word: "読む",
          furigana: "読む",
          english: ["to read", "read"],
          chapter: 1,
          hiragana: ["よむ"],
          rubyText: ["読む"],
        },
        fsrs: {
          card: {
            state: State.Review,
            due: new Date(),
            stability: 1,
            difficulty: 1,
            elapsed_days: 0,
            scheduled_days: 0,
            reps: 0,
            lapses: 0,
            learning_steps: 0,
          },
          logs: [],
        },
        sessionScope: "review",
        practiceItemType: "vocabulary",
        practiceMode: "readings",
        sessionStyle: "flashcard",
        prompt: "読む",
        validAnswers: ["to read", "read"],
      })
      mixedModeState.cardMap.set("vocabulary:書く", {
        key: "vocabulary:書く",
        vocab: {
          word: "書く",
          furigana: "書く",
          english: ["to write", "write"],
          chapter: 1,
          hiragana: ["かく"],
          rubyText: ["書く"],
        },
        fsrs: {
          card: {
            state: State.Review,
            due: new Date(),
            stability: 1,
            difficulty: 1,
            elapsed_days: 0,
            scheduled_days: 0,
            reps: 0,
            lapses: 0,
            learning_steps: 0,
          },
          logs: [],
        },
        sessionScope: "review",
        practiceItemType: "vocabulary",
        practiceMode: "kana",
        sessionStyle: "flashcard",
        prompt: "to write, write",
        validAnswers: ["かく", "書く"],
      })

      const manager = new PracticeSessionManager(mixedModeState, true)

      // Verify different modes work correctly
      const readingsCard = manager.getCurrentCard()
      expect(readingsCard.practiceMode).toBe("readings")
      expect(readingsCard.prompt).toBe("読む")

      await manager.processAnswer(Rating.Good, false)

      const kanaCard = manager.getCurrentCard()
      expect(kanaCard.practiceMode).toBe("kana")
      expect(kanaCard.prompt).toBe("to write, write")
      expect(kanaCard.validAnswers).toEqual(["かく", "書く"])
    })
  })

  // --- Edge Cases ---
  describe("Edge Cases", () => {
    it("should handle various edge scenarios", () => {
      const edgeCases = [
        {
          name: "empty active queue",
          state: createTestState({ activeCards: [] }),
          test: (manager: PracticeSessionManager) => {
            expect(manager.getActiveQueue().length).toBe(6) // Replenished
          },
        },
        {
          name: "finished session",
          state: createTestState({
            moduleCards: 0,
            reviewCards: 0,
            activeCards: [],
          }),
          test: (manager: PracticeSessionManager) => {
            expect(() => manager.getCurrentCard()).toThrow(
              "Cannot get current card from an empty active queue.",
            )
          },
        },
        {
          name: "locked cards",
          state: createTestState({
            lockedCards: ["vocabulary:単語1", "vocabulary:単語2"],
          }),
          test: (manager: PracticeSessionManager) => {
            expect(manager.getActiveQueue()).not.toContain("vocabulary:単語1")
            expect(manager.getActiveQueue()).not.toContain("vocabulary:単語2")
          },
        },
      ]

      edgeCases.forEach(({ name, state, test }) => {
        const manager = new PracticeSessionManager(state)
        test(manager)
      })
    })
  })

  // --- Database Integration ---
  describe("Database Integration", () => {
    it("should handle database operations correctly", async () => {
      const manager = new PracticeSessionManager(defaultState)
      const { upsertFSRSCardForUser } = await import(
        "@/features/supabase/db/fsrs-operations"
      )

      // Test successful database call
      await manager.processAnswer(Rating.Good)
      expect(upsertFSRSCardForUser).toHaveBeenCalledWith({
        data: expect.objectContaining({
          practice_item_key: "単語1",
          fsrs_card: expect.any(Object),
          fsrs_logs: expect.any(Array),
          mode: "readings",
          type: "vocabulary",
        }),
      })

      // Test database error handling
      vi.mocked(upsertFSRSCardForUser).mockRejectedValueOnce(
        new Error("Database error"),
      )
      await expect(manager.processAnswer(Rating.Good)).resolves.not.toThrow()
    })
  })
})

// Add this helper method to PracticeSessionManager for testing
declare module "./PracticeSessionManager" {
  interface PracticeSessionManager {
    getState(): PracticeSessionState
  }
}
