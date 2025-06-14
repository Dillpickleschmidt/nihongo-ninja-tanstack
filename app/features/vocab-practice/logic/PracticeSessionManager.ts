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
    const isNowPromoted =
      wasFlashcard && updatedCard.sessionStyle === "multiple-choice"
    const isNowDone = updatedCard.sessionStyle === "done"
    const isReviewSuccessful = wasFlashcard && !isNowPromoted

    if (isNowPromoted) {
      return {
        activeQueue,
        reviewQueue: reviewQueue.filter((k) => k !== key),
        moduleQueue: [...moduleQueue, key],
      }
    } else if (isNowDone || isReviewSuccessful) {
      return { moduleQueue, reviewQueue, activeQueue }
    } else {
      return {
        moduleQueue,
        reviewQueue,
        activeQueue: [...activeQueue, key],
      }
    }
  }

  public static replenishActiveQueue(
    currentQueues: QueueState,
    getInterleavingRatio: () => number,
  ): QueueState {
    let { moduleQueue, reviewQueue, activeQueue } = currentQueues
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
        break
      }
    }
    return { moduleQueue, reviewQueue, activeQueue }
  }

  // --- INSTANCE METHODS (The "Imperative Shell") ---

  public async processAnswer(rating: Rating, replenish = true): Promise<void> {
    if (this.isFinished() || this.state.activeQueue.length === 0) {
      return
    }

    const key = this.state.activeQueue[0]
    const originalCard = this.state.cardMap.get(key)!
    const updatedCard = handleCardAnswer(originalCard, rating as Grade)
    this.state.cardMap.set(key, updatedCard)

    try {
      await upsertFSRSCardForUser({
        data: {
          practice_item_key: updatedCard.key,
          fsrs_card: updatedCard.fsrs.card,
          fsrs_logs: updatedCard.fsrs.logs,
          mode: updatedCard.practiceMode,
        },
      })
    } catch (error) {
      console.error("Failed to save FSRS progress to database:", error)
      // Optional: Implement more robust error handling, like a retry queue
    }

    const queuesAfterFate = PracticeSessionManager.determineKeyFate(
      key,
      originalCard,
      updatedCard,
      {
        moduleQueue: this.state.moduleQueue,
        reviewQueue: this.state.reviewQueue,
        activeQueue: this.state.activeQueue.slice(1),
      },
    )

    this.state.moduleQueue = queuesAfterFate.moduleQueue
    this.state.reviewQueue = queuesAfterFate.reviewQueue
    this.state.activeQueue = queuesAfterFate.activeQueue

    if (replenish) {
      const finalQueues = PracticeSessionManager.replenishActiveQueue(
        this.state,
        this.getInterleavingRatio.bind(this),
      )
      this.state.moduleQueue = finalQueues.moduleQueue
      this.state.reviewQueue = finalQueues.reviewQueue
      this.state.activeQueue = finalQueues.activeQueue
    }

    this.checkIfFinished()
  }

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

  private getInterleavingRatio(): number {
    const total = this.state.moduleQueue.length + this.state.reviewQueue.length
    return total > 0 ? this.state.reviewQueue.length / total : 0
  }

  private checkIfFinished(): void {
    // Use the reviewOnly flag to determine the correct completion logic
    if (this.reviewOnly) {
      // In review-only mode, the session is done when all queues are empty
      if (
        this.state.moduleQueue.length === 0 &&
        this.state.reviewQueue.length === 0 &&
        this.state.activeQueue.length === 0
      ) {
        this.state.isFinished = true
      }
    } else {
      // In a standard module session, finish when module cards are done
      const hasActiveModuleCards = this.getActiveQueue().some(
        (key) => this.state.cardMap.get(key)!.sessionStyle !== "flashcard",
      )

      // The session is finished if the module source queue is empty AND
      // there are no "active" module-type cards left in the active queue.
      if (this.state.moduleQueue.length === 0 && !hasActiveModuleCards) {
        this.state.isFinished = true
        // Clear the active queue completely when finished
        this.state.activeQueue = []
      }
    }
  }
}
