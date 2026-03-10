// vocab-practice/logic/PracticeSessionManager.test.ts
import { describe, it, expect, beforeEach } from "vitest"
import { Rating, State } from "ts-fsrs"
import type { PracticeSessionState, PracticeCard } from "../types"
import { PracticeSessionManager } from "./PracticeSessionManager"
import { handleCardAnswer } from "./card-state-handler"

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
        key: slug,
        word: slug,
        furigana: slug,
        english: validAnswers,
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
      practiceMode: "meanings",
      sessionStyle,
      prompt,
      validAnswers,
      isDisabled: false,
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
            expect: (
              result: ReturnType<
                typeof PracticeSessionManager.determineKeyFate
              >,
              key: string,
            ) => {
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
            expect: (
              result: ReturnType<
                typeof PracticeSessionManager.determineKeyFate
              >,
              key: string,
            ) => {
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
            expect: (
              result: ReturnType<
                typeof PracticeSessionManager.determineKeyFate
              >,
              key: string,
            ) => {
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
            expect: (
              result: ReturnType<
                typeof PracticeSessionManager.determineKeyFate
              >,
              key: string,
            ) => {
              expect(result.activeQueue).not.toContain(key)
              expect(result.moduleQueue).not.toContain(key)
              expect(result.reviewQueue).not.toContain(key)
            },
          },
        ]

        testCases.forEach(({ setup, expect: expectFn }) => {
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

        testCases.forEach(({ queues, expectedLength }) => {
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

    it("should handle card progression through all stages", () => {
      // Test complete progression: multiple-choice -> write -> done
      const initialCard = manager.getCurrentCard()
      expect(initialCard.sessionStyle).toBe("multiple-choice")
      const cardKey = initialCard.key

      // Stage 1: multiple-choice -> write
      manager.processAnswer(Rating.Good, false)
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
          manager.processAnswer(Rating.Good, false) // Complete write stage

          // Card should be removed completely
          expect(manager.getActiveQueue().length).toBeLessThan(activeSize)
          expect(manager.getActiveQueue()).not.toContain(cardKey)
          break
        } else {
          manager.processAnswer(Rating.Good, false)
        }
        attempts++
      }
      expect(attempts).toBeLessThan(10)
    })

    it("should handle queue management with and without replenishment", () => {
      const initialSize = manager.getActiveQueue().length

      // Without replenishment
      manager.processAnswer(Rating.Again, false)
      expect(manager.getActiveQueue().length).toBe(initialSize) // Card cycled back

      // With replenishment (default)
      const emptyActiveManager = new PracticeSessionManager(
        createTestState({ activeCards: [] }),
      )
      expect(emptyActiveManager.getActiveQueue().length).toBe(6) // Replenished from sources
    })

    it("should finish session correctly based on mode", () => {
      // Standard mode: finish when module work is done
      const standardState = createTestState({
        moduleCards: 1,
        reviewCards: 2,
        activeCards: ["vocabulary:単語1"],
        cardStyles: { "vocabulary:単語1": "write" },
      })
      const standardManager = new PracticeSessionManager(standardState)

      standardManager.processAnswer(Rating.Good) // Complete last module card
      expect(standardManager.isFinished()).toBe(true)

      // Review-only mode: finish when all cards are done
      const reviewState = createTestState({
        moduleCards: 0,
        reviewCards: 1,
        activeCards: ["vocabulary:復習1"],
      })
      const reviewManager = new PracticeSessionManager(reviewState, { reviewOnly: true })

      reviewManager.processAnswer(Rating.Good) // Complete review card
      expect(reviewManager.isFinished()).toBe(true)
    })
  })

  // --- Hierarchy and Dependencies ---
  describe("Hierarchy System", () => {
    it("should handle dependency unlocking", () => {
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
          key: "r1",
          word: "r1",
          furigana: "r1",
          english: ["radical1"],
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
        practiceMode: "meanings",
        sessionStyle: "multiple-choice",
        prompt: "人",
        validAnswers: ["radical1"],
        isDisabled: false,
      })

      hierarchyState.cardMap.set("kanji:k1", {
        key: "kanji:k1",
        vocab: {
          key: "k1",
          word: "k1",
          furigana: "k1",
          english: ["kanji1"],
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
        practiceMode: "meanings",
        sessionStyle: "multiple-choice",
        prompt: "漢",
        validAnswers: ["kanji1"],
        isDisabled: false,
      })

      hierarchyState.cardMap.set("vocabulary:v1", {
        key: "vocabulary:v1",
        vocab: {
          key: "v1",
          word: "v1",
          furigana: "v1",
          english: ["vocab1"],
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
        practiceMode: "meanings",
        sessionStyle: "multiple-choice",
        prompt: "単語",
        validAnswers: ["vocab1"],
        isDisabled: false,
      })

      const manager = new PracticeSessionManager(hierarchyState)

      // Initially only radical should be available
      expect(manager.getActiveQueue()).toEqual(["radical:r1"])
      expect(hierarchyState.lockedKeys.has("kanji:k1")).toBe(true)

      // Complete the radical (multiple-choice -> flashcard for radicals)
      manager.processAnswer(Rating.Good, false) // -> flashcard

      const cardAfterFirst = manager.getCardFromMap("radical:r1")!
      expect(cardAfterFirst.sessionStyle).toBe("flashcard")

      // Second Good on flashcard = successful review = session complete for this card
      manager.processAnswer(Rating.Good, false) // completes the card

      // kanji:k1 should now be unlocked
      expect(manager.getSourceQueueSizes().module).toBe(1)
      expect(hierarchyState.lockedKeys.has("kanji:k1")).toBe(false)
      expect(hierarchyState.lockedKeys.has("vocabulary:v1")).toBe(true) // Still locked
    })
  })

  // --- Mixed Item Types and Modes ---
  describe("Mixed Content Handling", () => {
    it("should handle mixed item types correctly", () => {
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
          key: "食べる",
          word: "食べる",
          furigana: "食べる",
          english: ["to eat", "eat"],
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
        practiceMode: "meanings",
        sessionStyle: "multiple-choice",
        prompt: "食べる",
        validAnswers: ["to eat", "eat"],
        isDisabled: false,
      })
      mixedState.cardMap.set("kanji:食", {
        key: "kanji:食",
        vocab: {
          key: "食",
          word: "食",
          furigana: "食",
          english: ["food", "meal"],
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
        practiceMode: "meanings",
        sessionStyle: "multiple-choice",
        prompt: "食",
        validAnswers: ["food", "meal"],
        isDisabled: false,
      })
      mixedState.cardMap.set("radical:人", {
        key: "radical:人",
        vocab: {
          key: "人",
          word: "人",
          furigana: "人",
          english: ["person", "human"],
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
        practiceMode: "meanings",
        sessionStyle: "multiple-choice",
        prompt: "人",
        validAnswers: ["person", "human"],
        isDisabled: false,
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
      manager.processAnswer(Rating.Good, false)
      manager.processAnswer(Rating.Good, false)
      manager.processAnswer(Rating.Good, false)
    })

    it("should handle review-only session with mixed practice modes", () => {
      const mixedModeState = createTestState({
        moduleCards: 0,
        reviewCards: 0,
        activeCards: ["vocabulary:読む", "vocabulary:書く"],
      })

      // Set up cards with different practice modes
      mixedModeState.cardMap.set("vocabulary:読む", {
        key: "vocabulary:読む",
        vocab: {
          key: "読む",
          word: "読む",
          furigana: "読む",
          english: ["to read", "read"],
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
        practiceMode: "meanings",
        sessionStyle: "flashcard",
        prompt: "読む",
        validAnswers: ["to read", "read"],
        isDisabled: false,
      })
      mixedModeState.cardMap.set("vocabulary:書く", {
        key: "vocabulary:書く",
        vocab: {
          key: "書く",
          word: "書く",
          furigana: "書く",
          english: ["to write", "write"],
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
        practiceMode: "spellings",
        sessionStyle: "flashcard",
        prompt: "to write, write",
        validAnswers: ["かく", "書く"],
        isDisabled: false,
      })

      const manager = new PracticeSessionManager(mixedModeState, { reviewOnly: true })

      // Verify different modes work correctly
      const meaningsCard = manager.getCurrentCard()
      expect(meaningsCard.practiceMode).toBe("meanings")
      expect(meaningsCard.prompt).toBe("読む")

      manager.processAnswer(Rating.Good, false)

      const spellingsCard = manager.getCurrentCard()
      expect(spellingsCard.practiceMode).toBe("spellings")
      expect(spellingsCard.prompt).toBe("to write, write")
      expect(spellingsCard.validAnswers).toEqual(["かく", "書く"])
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

      edgeCases.forEach(({ state, test }) => {
        const manager = new PracticeSessionManager(state)
        test(manager)
      })
    })
  })
})
