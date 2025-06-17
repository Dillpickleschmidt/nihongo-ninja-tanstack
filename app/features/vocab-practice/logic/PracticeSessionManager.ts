// vocab-practice/logic/PracticeSessionManager.ts
import { Rating, Grade } from "ts-fsrs"
import type { PracticeSessionState, PracticeCard } from "../types"
import { handleCardAnswer } from "./card-state-handler"
import { upsertFSRSCardForUser } from "@/features/supabase/db/utils"

const ACTIVE_QUEUE_MAX_SIZE = 10

// A helper type to represent the state of the queues for our pure functions
type QueueState = {
  moduleQueue: string[]
  reviewQueue: string[]
  activeQueue: string[]
}

export class PracticeSessionManager {
  private state: PracticeSessionState
  private reviewOnly: boolean

  constructor(initialState: PracticeSessionState, reviewOnly: boolean = false) {
    this.state = initialState
    this.reviewOnly = reviewOnly

    // Initial replenishment of the active queue from the source queues
    if (this.state.activeQueue.length === 0) {
      const { moduleQueue, reviewQueue, activeQueue } =
        PracticeSessionManager.replenishActiveQueue(
          this.state,
          this.getInterleavingRatio.bind(this),
        )
      this.state.moduleQueue = moduleQueue
      this.state.reviewQueue = reviewQueue
      this.state.activeQueue = activeQueue
    }
  }

  // --- PURE, STATIC, TESTABLE LOGIC ---

  public static determineKeyFate(
    key: string,
    originalCard: PracticeCard,
    updatedCard: PracticeCard,
    currentQueues: QueueState,
  ): QueueState {
    const { moduleQueue, reviewQueue, activeQueue } = currentQueues

    const wasFlashcard = originalCard.sessionStyle === "flashcard"
    const isNowDone = updatedCard.sessionStyle === "done"
    const isReviewSuccessful =
      wasFlashcard && updatedCard.sessionStyle === "flashcard"
    const isNowPromoted =
      wasFlashcard && updatedCard.sessionStyle === "multiple-choice"

    // A failed flashcard is promoted to the module queue to be learned properly.
    if (isNowPromoted) {
      return {
        activeQueue,
        reviewQueue: reviewQueue.filter((k) => k !== key),
        moduleQueue: [...moduleQueue, key],
      }
    }
    // A completed card (either by finishing the cycle or a successful review) is removed.
    else if (isNowDone || isReviewSuccessful) {
      return { moduleQueue, reviewQueue, activeQueue }
    }
    // Any other card is cycled to the back of the active queue.
    else {
      return {
        moduleQueue,
        reviewQueue,
        activeQueue: [...activeQueue, key],
      }
    }
  }

  /**
   * Refills the active queue from the module and review queues.
   * This function is pure and does not modify state.
   */
  public static replenishActiveQueue(
    currentQueues: QueueState,
    getInterleavingRatio: () => number,
  ): QueueState {
    let { moduleQueue, reviewQueue, activeQueue } = currentQueues
    // Create copies to avoid direct mutation
    moduleQueue = [...moduleQueue]
    reviewQueue = [...reviewQueue]
    activeQueue = [...activeQueue]

    while (
      activeQueue.length < ACTIVE_QUEUE_MAX_SIZE &&
      (moduleQueue.length > 0 || reviewQueue.length > 0)
    ) {
      const pullFromReview = Math.random() < getInterleavingRatio()
      let nextKey: string | undefined

      if (pullFromReview && reviewQueue.length > 0) {
        nextKey = reviewQueue.shift()
      } else if (moduleQueue.length > 0) {
        nextKey = moduleQueue.shift()
      } else if (reviewQueue.length > 0) {
        nextKey = reviewQueue.shift()
      }

      if (nextKey) {
        activeQueue.push(nextKey)
      } else {
        break // No more cards in source queues
      }
    }
    return { moduleQueue, reviewQueue, activeQueue }
  }

  // --- INSTANCE METHODS (The "Imperative Shell") ---

  public async processAnswer(rating: Grade, replenish = true): Promise<void> {
    if (this.isFinished() || this.state.activeQueue.length === 0) {
      return
    }

    const key = this.state.activeQueue[0]
    const originalCard = this.state.cardMap.get(key)!

    // 1. Update card state based on answer
    const updatedCard = handleCardAnswer(originalCard, rating)
    this.state.cardMap.set(key, updatedCard)

    // 2. Persist progress to the database
    try {
      await upsertFSRSCardForUser({
        data: {
          practice_item_key: updatedCard.key.split(":")[1], // Get slug from key
          fsrs_card: updatedCard.fsrs.card,
          fsrs_logs: updatedCard.fsrs.logs,
          mode: updatedCard.practiceMode,
          type: updatedCard.practiceItemType,
        },
      })
    } catch (error) {
      console.error("Failed to save FSRS progress to database:", error)
      // Optional: Implement more robust error handling, like a retry queue
    }

    // 3. Check if this completion unlocks other cards
    const wasFlashcard = originalCard.sessionStyle === "flashcard"
    const isSessionComplete =
      updatedCard.sessionStyle === "done" ||
      (wasFlashcard && updatedCard.sessionStyle === "flashcard")

    if (isSessionComplete) {
      this.unlockDependents(key)
    }

    // 4. Determine where the answered card's key should go next
    const queuesAfterFate = PracticeSessionManager.determineKeyFate(
      key,
      originalCard,
      updatedCard,
      {
        moduleQueue: this.state.moduleQueue,
        reviewQueue: this.state.reviewQueue,
        activeQueue: this.state.activeQueue.slice(1), // Pass queue without the current card
      },
    )

    this.state.moduleQueue = queuesAfterFate.moduleQueue
    this.state.reviewQueue = queuesAfterFate.reviewQueue
    this.state.activeQueue = queuesAfterFate.activeQueue

    // 5. Replenish the active queue if enabled
    if (replenish) {
      const finalQueues = PracticeSessionManager.replenishActiveQueue(
        this.state,
        this.getInterleavingRatio.bind(this),
      )
      this.state.moduleQueue = finalQueues.moduleQueue
      this.state.reviewQueue = finalQueues.reviewQueue
      this.state.activeQueue = finalQueues.activeQueue
    }

    // 6. Check if the entire session is finished
    this.checkIfFinished()
  }

  private unlockDependents(completedKey: string): void {
    const dependentsToUnlock = this.state.unlocksMap.get(completedKey)
    if (!dependentsToUnlock) return

    dependentsToUnlock.forEach((dependentKey) => {
      const prerequisites = this.state.dependencyMap.get(dependentKey)
      if (!prerequisites) return

      // Remove the completed prerequisite from the list
      const updatedPrerequisites = prerequisites.filter(
        (p) => p !== completedKey,
      )

      if (updatedPrerequisites.length === 0) {
        // All prerequisites are met! Unlock the card.
        this.state.dependencyMap.delete(dependentKey)
        this.state.lockedKeys.delete(dependentKey)
        this.state.moduleQueue.push(dependentKey) // Unlocked cards are always module work
      } else {
        // Update the list of remaining prerequisites
        this.state.dependencyMap.set(dependentKey, updatedPrerequisites)
      }
    })
  }

  private checkIfFinished(): void {
    if (this.reviewOnly) {
      if (
        this.state.moduleQueue.length === 0 &&
        this.state.reviewQueue.length === 0 &&
        this.state.activeQueue.length === 0
      ) {
        this.state.isFinished = true
      }
    } else {
      // In a standard module session, finish when all module work is done.
      const hasActiveModuleCards = this.state.activeQueue.some(
        (key) => this.state.cardMap.get(key)!.sessionScope === "module",
      )

      if (
        this.state.moduleQueue.length === 0 &&
        this.state.lockedKeys.size === 0 &&
        !hasActiveModuleCards
      ) {
        this.state.isFinished = true
        // Clear the active queue completely when finished to stop the session.
        this.state.activeQueue = []
      }
    }
  }

  // --- Getters and other public methods ---

  public getCurrentCard(): PracticeCard {
    if (this.state.activeQueue.length === 0) {
      throw new Error("Cannot get current card from an empty active queue.")
    }
    return this.state.cardMap.get(this.state.activeQueue[0])!
  }

  public isFinished(): boolean {
    return this.state.isFinished
  }

  public getActiveQueue(): string[] {
    return [...this.state.activeQueue]
  }

  public getSourceQueueSizes(): { module: number; review: number } {
    return {
      module: this.state.moduleQueue.length,
      review: this.state.reviewQueue.length,
    }
  }

  public getCardFromMap(key: string): PracticeCard | undefined {
    return this.state.cardMap.get(key)
  }

  public getCardMap(): Map<string, PracticeCard> {
    return this.state.cardMap
  }

  public getState(): PracticeSessionState {
    return this.state
  }

  private getInterleavingRatio(): number {
    const total = this.state.moduleQueue.length + this.state.reviewQueue.length
    return total > 0 ? this.state.reviewQueue.length / total : 0
  }
}
