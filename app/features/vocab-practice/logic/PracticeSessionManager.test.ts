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

// --- Deterministic Test Setup ---
const setupInitialState = (): PracticeSessionState => {
  const cardMap = new Map<string, PracticeCard>()
  const moduleKeys = ["m1", "m2", "m3", "m4", "m5"]
  const reviewKeys = ["r1", "r2", "r3", "r4", "r5"]

  const createMockCard = (
    key: string,
    style: "multiple-choice" | "flashcard" | "write",
  ): PracticeCard => ({
    key,
    vocab: {
      word: key,
      furigana: key,
      english: [key],
      chapter: 1,
      hiragana: [key],
      rubyText: [key],
    },
    fsrs: {
      card: {
        state: style === "flashcard" ? State.Review : State.New,
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
    practiceItemType: "vocabulary",
    practiceMode: "readings",
    sessionStyle: style,
    prompt: key,
    validAnswers: [key],
  })

  ;[...moduleKeys, ...reviewKeys].forEach((key) => {
    const style = key.startsWith("m") ? "multiple-choice" : "flashcard"
    cardMap.set(key, createMockCard(key, style))
  })

  return {
    cardMap,
    moduleQueue: ["m3", "m4", "m5"], // 3 left in source
    reviewQueue: ["r3", "r4", "r5"], // 3 left in source
    activeQueue: ["m1", "r1", "m2", "r2"], // 4 cards in active queue
    isFinished: false,
  }
}

describe("PracticeSessionManager", () => {
  let initialState: PracticeSessionState

  beforeEach(() => {
    initialState = setupInitialState()
    vi.clearAllMocks()
  })

  // --- 1. Test the Pure Static Logic First ---

  describe("Initialization", () => {
    it("should initialize queues with correct number of cards", () => {
      expect(initialState.moduleQueue.length).toBe(3)
      expect(initialState.reviewQueue.length).toBe(3)
      expect(initialState.activeQueue.length).toBe(4)
    })

    it("should replenish active queue to maximum size during construction", () => {
      const manager = new PracticeSessionManager(initialState)
      // Initial state: 4 activeQueue + 3 moduleQueue + 3 reviewQueue = 10 total cards
      // But the initial activeQueue is not empty, so replenishment doesn't happen
      // Let's test with an empty active queue
      const emptyActiveState = {
        ...initialState,
        activeQueue: [],
      }
      const managerEmpty = new PracticeSessionManager(emptyActiveState)

      // Now it should replenish from source queues
      expect(managerEmpty.getActiveQueue().length).toBe(6) // 3 module + 3 review
      expect(managerEmpty.getSourceQueueSizes().module).toBe(0)
      expect(managerEmpty.getSourceQueueSizes().review).toBe(0)
    })
  })

  describe("determineKeyFate (static)", () => {
    it("should cycle an unfinished card by adding it to the end of the active queue", () => {
      const key = "m1"
      const originalCard = initialState.cardMap.get(key)!
      const updatedCard = handleCardAnswer(originalCard, Rating.Again) // Stays 'multiple-choice'

      const result = PracticeSessionManager.determineKeyFate(
        key,
        originalCard,
        updatedCard,
        {
          moduleQueue: initialState.moduleQueue,
          reviewQueue: initialState.reviewQueue,
          activeQueue: ["r1", "m2", "r2"], // Simulating 'm1' being removed
        },
      )

      expect(result.activeQueue).toEqual(["r1", "m2", "r2", "m1"])
    })

    it("should discard a completed card by not returning it in any queue", () => {
      const key = "m1"
      const originalCard = initialState.cardMap.get(key)!
      let updatedCard = handleCardAnswer(originalCard, Rating.Good) // -> write
      updatedCard = handleCardAnswer(updatedCard, Rating.Easy) // -> done

      const result = PracticeSessionManager.determineKeyFate(
        key,
        originalCard,
        updatedCard,
        {
          moduleQueue: initialState.moduleQueue,
          reviewQueue: initialState.reviewQueue,
          activeQueue: ["r1", "m2", "r2"],
        },
      )

      expect(result.activeQueue).not.toContain("m1")
      expect(result.moduleQueue).not.toContain("m1")
      expect(result.reviewQueue).not.toContain("m1")
    })

    it("should promote a failed flashcard by moving its key to the module queue", () => {
      const key = "r1"
      const originalCard = initialState.cardMap.get(key)!
      const updatedCard = handleCardAnswer(originalCard, Rating.Again) // -> multiple-choice

      const result = PracticeSessionManager.determineKeyFate(
        key,
        originalCard,
        updatedCard,
        {
          moduleQueue: initialState.moduleQueue,
          reviewQueue: initialState.reviewQueue,
          activeQueue: ["m1", "m2", "r2"],
        },
      )

      expect(result.reviewQueue).not.toContain("r1")
      expect(result.moduleQueue).toContain("r1")
      expect(result.activeQueue).not.toContain("r1")
    })
  })

  describe("replenishActiveQueue (static)", () => {
    it("should pull from source queues until the active queue is full", () => {
      const shortQueues = {
        moduleQueue: ["m1", "m2", "m3", "m4", "m5"],
        reviewQueue: ["r1", "r2", "r3", "r4", "r5"],
        activeQueue: ["a1", "a2"], // Only 2 cards
      }
      const ratioFn = () => 0.5 // 50% chance to pull from review

      const result = PracticeSessionManager.replenishActiveQueue(
        shortQueues,
        ratioFn,
      )
      expect(result.activeQueue.length).toBe(10)
    })
  })

  // --- 2. Test Instance Methods Without Replenishment ---

  describe("processAnswer without replenishment", () => {
    let manager: PracticeSessionManager

    beforeEach(() => {
      manager = new PracticeSessionManager(setupInitialState())
    })

    it("should correctly cycle an unfinished card to the end of the active queue", async () => {
      const initialActiveQueue = manager.getActiveQueue()
      const firstCardKey = initialActiveQueue[0] // Should be "m1"

      await manager.processAnswer(Rating.Again, false) // No replenishment

      const newActiveQueue = manager.getActiveQueue()
      // Queue should be 3 cards now (removed first, added to end)
      expect(newActiveQueue.length).toBe(4) // r1, m2, r2, m1
      expect(newActiveQueue[3]).toBe(firstCardKey) // Moved to end
      expect(newActiveQueue[0]).not.toBe(firstCardKey) // No longer at front
    })

    it("should correctly discard a completed card", async () => {
      // We need to create a scenario where we can complete a card
      // Let's create a state with a card in write stage
      const cardMap = new Map(initialState.cardMap)
      const writeCard: PracticeCard = {
        ...cardMap.get("m1")!,
        sessionStyle: "write",
      }
      cardMap.set("m1", writeCard)

      const testState: PracticeSessionState = {
        cardMap,
        moduleQueue: [],
        reviewQueue: [],
        activeQueue: ["m1", "r1", "m2"],
        isFinished: false,
      }

      manager = new PracticeSessionManager(testState)
      const initialSize = manager.getActiveQueue().length

      // Complete the write card
      await manager.processAnswer(Rating.Easy, false) // No replenishment

      // Card should be removed, queue should be smaller
      expect(manager.getActiveQueue().length).toBe(initialSize - 1)
      expect(manager.getActiveQueue()).not.toContain("m1")
    })

    it("should correctly promote a card and increase module queue size", async () => {
      // First, let's get to a flashcard. The initial queue is [m1, r1, m2, r2]
      // So r1 (flashcard) is at position 1
      await manager.processAnswer(Rating.Good, false) // Process m1, no replenishment

      // Now r1 should be at the front
      const currentCard = manager.getCurrentCard()
      expect(currentCard.sessionStyle).toBe("flashcard")
      expect(currentCard.key).toBe("r1")

      const initialModuleSize = manager.getSourceQueueSizes().module
      await manager.processAnswer(Rating.Again, false) // Fail the flashcard, no replenishment

      // r1 should be promoted to moduleQueue
      expect(manager.getSourceQueueSizes().module).toBe(initialModuleSize + 1)
    })
  })

  // --- 3. Test Instance Methods With Replenishment (Original Behavior) ---

  describe("processAnswer with replenishment (default)", () => {
    let manager: PracticeSessionManager

    beforeEach(() => {
      manager = new PracticeSessionManager(setupInitialState())
    })

    it("should correctly initialize the queues", () => {
      // The constructor doesn't replenish if activeQueue is not empty
      // So we should have the original queue sizes
      expect(manager.getSourceQueueSizes().module).toBe(3)
      expect(manager.getSourceQueueSizes().review).toBe(3)
      expect(manager.getActiveQueue().length).toBe(4)
    })

    it("should correctly cycle an unfinished card and replenish the queue", async () => {
      const initialActiveQueue = manager.getActiveQueue()
      const firstCardKey = initialActiveQueue[0] // Should be "m1"

      await manager.processAnswer(Rating.Again) // With replenishment (default)

      const newActiveQueue = manager.getActiveQueue()
      // The queue should be replenished to maximum size (4 active + 6 source = 10)
      expect(newActiveQueue.length).toBe(10)
      expect(newActiveQueue).toContain(firstCardKey) // Still in queue somewhere
      expect(newActiveQueue[0]).not.toBe(firstCardKey) // No longer at front
    })

    it("should correctly discard a completed card", async () => {
      // We need to create a scenario where we can complete a card
      // Let's create a state with a card in write stage
      const cardMap = new Map(initialState.cardMap)
      const writeCard: PracticeCard = {
        ...cardMap.get("m1")!,
        sessionStyle: "write",
      }
      cardMap.set("m1", writeCard)

      const testState: PracticeSessionState = {
        cardMap,
        moduleQueue: [],
        reviewQueue: [],
        activeQueue: ["m1", "r1", "m2"],
        isFinished: false,
      }

      manager = new PracticeSessionManager(testState)
      const initialSize = manager.getActiveQueue().length

      // Complete the write card
      await manager.processAnswer(Rating.Easy) // With replenishment

      // Card should be removed, queue should be smaller
      expect(manager.getActiveQueue().length).toBeLessThan(initialSize)
      expect(manager.getActiveQueue()).not.toContain("m1")
    })

    it("should correctly promote a card but replenishment may pull it back", async () => {
      // First, let's get to a flashcard. The initial queue is [m1, r1, m2, r2]
      // So r1 (flashcard) is at position 1
      await manager.processAnswer(Rating.Good) // Process m1, advances it to write and moves to end

      // Now r1 should be at the front
      const currentCard = manager.getCurrentCard()
      expect(currentCard.sessionStyle).toBe("flashcard")
      expect(currentCard.key).toBe("r1")

      const initialModuleSize = manager.getSourceQueueSizes().module
      await manager.processAnswer(Rating.Again) // Fail the flashcard with replenishment

      // The card gets promoted but may be pulled back during replenishment
      // So we can't reliably test the final module queue size
      // But we can verify the card is now multiple-choice style
      const cardMap = manager.getCardMap()
      const promotedCard = cardMap.get("r1")!
      expect(promotedCard.sessionStyle).toBe("multiple-choice")
    })

    it("should finish the session when all module work is done", async () => {
      const finalState: PracticeSessionState = {
        cardMap: initialState.cardMap,
        moduleQueue: [],
        reviewQueue: ["r1", "r2"], // Review cards left over
        activeQueue: ["m5"], // Last module card (multiple-choice)
        isFinished: false,
      }
      manager = new PracticeSessionManager(finalState)

      // Complete the module card (multiple-choice -> write -> done)
      await manager.processAnswer(Rating.Good) // -> write
      await manager.processAnswer(Rating.Easy) // -> done

      expect(manager.isFinished()).toBe(true)
      expect(manager.getActiveQueue().length).toBe(0)
    })
  })

  // --- Additional tests for better coverage ---

  describe("Card state transition verification", () => {
    let manager: PracticeSessionManager

    beforeEach(() => {
      // Create a simpler state for easier testing
      const simpleState: PracticeSessionState = {
        cardMap: initialState.cardMap,
        moduleQueue: [],
        reviewQueue: [],
        activeQueue: ["m1", "r1"], // m1 = multiple-choice, r1 = flashcard
        isFinished: false,
      }
      manager = new PracticeSessionManager(simpleState)
    })

    it("should advance multiple-choice to write with Rating.Good", async () => {
      const initialCard = manager.getCurrentCard()
      expect(initialCard.sessionStyle).toBe("multiple-choice")

      await manager.processAnswer(Rating.Good, false) // No replenishment for predictable testing

      // The card should now be at the end of the active queue in write stage
      const activeQueue = manager.getActiveQueue()
      const lastCardKey = activeQueue[activeQueue.length - 1]
      const cardMap = manager.getCardMap()
      const lastCard = cardMap.get(lastCardKey)!

      expect(lastCard.sessionStyle).toBe("write")
      expect(lastCardKey).toBe(initialCard.key)
    })

    it("should promote flashcard to module queue with Rating.Again", async () => {
      // We need to get to a flashcard first
      await manager.processAnswer(Rating.Good, false) // Process m1 (multiple-choice), no replenishment

      // Now r1 (flashcard) should be at the front
      const flashcard = manager.getCurrentCard()
      expect(flashcard.sessionStyle).toBe("flashcard")
      expect(flashcard.key).toBe("r1")

      const initialModuleSize = manager.getSourceQueueSizes().module
      await manager.processAnswer(Rating.Again, false) // Fail the flashcard, no replenishment

      // Should be promoted
      expect(manager.getSourceQueueSizes().module).toBe(initialModuleSize + 1)
    })

    it("should handle card progression through all stages", async () => {
      // Test complete progression: multiple-choice -> write -> done
      const firstCard = manager.getCurrentCard()
      expect(firstCard.sessionStyle).toBe("multiple-choice")
      expect(firstCard.key).toBe("m1")

      // Advance to write
      await manager.processAnswer(Rating.Good, false) // No replenishment

      // Find the card again (now at end of queue)
      const activeQueue = manager.getActiveQueue()
      const m1Key = "m1"
      const m1Card = manager.getCardFromMap(m1Key)!
      expect(m1Card.sessionStyle).toBe("write")

      // We need to cycle through to get back to m1
      let attempts = 0
      const maxAttempts = 10

      while (attempts < maxAttempts) {
        const currentCard = manager.getCurrentCard()
        if (currentCard.key === "m1" && currentCard.sessionStyle === "write") {
          // Complete the write card
          const activeSize = manager.getActiveQueue().length
          await manager.processAnswer(Rating.Easy, false) // No replenishment

          // Card should be removed
          expect(manager.getActiveQueue().length).toBeLessThan(activeSize)
          expect(manager.getActiveQueue()).not.toContain("m1")
          break
        } else {
          // Process other cards
          await manager.processAnswer(Rating.Good, false) // No replenishment
        }
        attempts++
      }

      expect(attempts).toBeLessThan(maxAttempts)
    })
  })

  describe("Edge cases", () => {
    let manager: PracticeSessionManager

    beforeEach(() => {
      manager = new PracticeSessionManager(setupInitialState())
    })

    it("should handle empty active queue gracefully", () => {
      const emptyActiveState: PracticeSessionState = {
        cardMap: initialState.cardMap,
        moduleQueue: ["m1", "m2"],
        reviewQueue: ["r1", "r2"],
        activeQueue: [],
        isFinished: false,
      }

      manager = new PracticeSessionManager(emptyActiveState)

      // Should replenish the active queue during initialization
      expect(manager.getActiveQueue().length).toBe(4) // All 4 cards available
    })

    it("should throw error when trying to get current card from empty queue", () => {
      const finishedState: PracticeSessionState = {
        cardMap: initialState.cardMap,
        moduleQueue: [],
        reviewQueue: [],
        activeQueue: [],
        isFinished: true,
      }

      manager = new PracticeSessionManager(finishedState)

      expect(() => manager.getCurrentCard()).toThrow(
        "Cannot get current card from an empty active queue.",
      )
    })

    it("should not process answers when session is finished", async () => {
      const finalState: PracticeSessionState = {
        cardMap: initialState.cardMap,
        moduleQueue: [],
        reviewQueue: ["r1"],
        activeQueue: ["m1"],
        isFinished: false,
      }
      manager = new PracticeSessionManager(finalState)

      // Complete the last module card
      await manager.processAnswer(Rating.Good) // -> write
      await manager.processAnswer(Rating.Easy) // -> done

      expect(manager.isFinished()).toBe(true)

      // Further processing should be ignored
      const activeSize = manager.getActiveQueue().length
      await manager.processAnswer(Rating.Good)
      expect(manager.getActiveQueue().length).toBe(activeSize)
    })

    it("should maintain active queue at maximum capacity when possible", async () => {
      // Create state with many cards available but start with small active queue
      const cardMap = new Map(initialState.cardMap)
      // Add more cards to make 15 total
      for (let i = 6; i <= 10; i++) {
        const key = `m${i}`
        cardMap.set(key, {
          key,
          vocab: {
            word: key,
            furigana: key,
            english: [key],
            chapter: 1,
            hiragana: [key],
            rubyText: [key],
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
          practiceItemType: "vocabulary",
          practiceMode: "readings",
          sessionStyle: "multiple-choice" as const,
          prompt: key,
          validAnswers: [key],
        })
      }

      const manyCardsState: PracticeSessionState = {
        cardMap,
        moduleQueue: ["m3", "m4", "m5", "m6", "m7", "m8", "m9", "m10"],
        reviewQueue: ["r3", "r4", "r5"],
        activeQueue: ["m1", "r1"], // Start small
        isFinished: false,
      }

      manager = new PracticeSessionManager(manyCardsState)

      // After processing an answer, should replenish to full capacity
      await manager.processAnswer(Rating.Again)
      expect(manager.getActiveQueue().length).toBe(10)
    })

    it("should handle completion of cards without breaking queue management", async () => {
      // Create a state where we can complete several cards
      const cardMap = new Map(initialState.cardMap)

      // Set up some cards in write stage for easy completion
      const writeCard1: PracticeCard = {
        ...cardMap.get("m1")!,
        sessionStyle: "write",
      }
      const writeCard2: PracticeCard = {
        ...cardMap.get("m2")!,
        sessionStyle: "write",
      }
      cardMap.set("m1", writeCard1)
      cardMap.set("m2", writeCard2)

      const testState: PracticeSessionState = {
        cardMap,
        moduleQueue: ["m3", "m4"],
        reviewQueue: ["r1", "r2"],
        activeQueue: ["m1", "m2"],
        isFinished: false,
      }

      manager = new PracticeSessionManager(testState)
      const initialSize = manager.getActiveQueue().length

      // Complete both write cards
      await manager.processAnswer(Rating.Easy) // Complete m1
      await manager.processAnswer(Rating.Easy) // Complete m2

      // Queue should have refilled with available cards
      expect(manager.getActiveQueue().length).toBe(4) // m3, m4, r1, r2
      expect(manager.getSourceQueueSizes().module).toBe(0)
      expect(manager.getSourceQueueSizes().review).toBe(0)
    })
  })
})
