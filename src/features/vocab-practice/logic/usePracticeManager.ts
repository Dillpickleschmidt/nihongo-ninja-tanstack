// vocab-practice/logic/usePracticeManager.ts
import { createSignal } from "solid-js"
import { Rating } from "ts-fsrs"
import { PracticeSessionManager } from "./PracticeSessionManager"
import type { PracticeCard, PracticeSessionState } from "../types"

export function usePracticeManager() {
  // Manager instance (not reactive)
  const [manager, setManager] = createSignal<PracticeSessionManager | null>(
    null,
  )

  // Reactive signals for UI-relevant state
  const [currentCard, setCurrentCard] = createSignal<PracticeCard | null>(null)
  const [activeQueue, setActiveQueue] = createSignal<string[]>([])
  const [isFinished, setIsFinished] = createSignal<boolean>(false)
  const [cardMap, setCardMap] = createSignal<Map<string, PracticeCard>>(
    new Map(),
  )
  const [dependencyMap, setDependencyMap] = createSignal<Map<string, string[]>>(
    new Map(),
  )
  const [moduleProgress, setModuleProgress] = createSignal<{
    completed: number
    total: number
  }>({ completed: 0, total: 0 })

  /**
   * Initialize the practice manager with session state
   */
  const initializeManager = (sessionState: PracticeSessionState): void => {
    const newManager = new PracticeSessionManager(sessionState)

    // Set up observer for automatic reactivity sync
    newManager.onChange(() => {
      setCurrentCard(newManager.isFinished() ? null : newManager.getCurrentCard())
      setActiveQueue(newManager.getActiveQueue())
      setIsFinished(newManager.isFinished())
      setCardMap(newManager.getCardMap())
      setDependencyMap(newManager.getState().dependencyMap)
      const progress = newManager.getModuleProgress()
      setModuleProgress({ completed: progress.done, total: progress.total })
    })

    setManager(newManager)

    // Initial sync
    setCurrentCard(newManager.isFinished() ? null : newManager.getCurrentCard())
    setActiveQueue(newManager.getActiveQueue())
    setIsFinished(newManager.isFinished())
    setCardMap(newManager.getCardMap())
    setDependencyMap(newManager.getState().dependencyMap)
    const initialProgress = newManager.getModuleProgress()
    setModuleProgress({
      completed: initialProgress.done,
      total: initialProgress.total,
    })
  }

  /**
   * Initialize manager for review-only mode
   */
  const initializeReviewManager = (
    sessionState: PracticeSessionState,
  ): void => {
    const newManager = new PracticeSessionManager(sessionState, true)

    // Set up observer for automatic reactivity sync
    newManager.onChange(() => {
      setCurrentCard(newManager.isFinished() ? null : newManager.getCurrentCard())
      setActiveQueue(newManager.getActiveQueue())
      setIsFinished(newManager.isFinished())
      setCardMap(newManager.getCardMap())
      setDependencyMap(newManager.getState().dependencyMap)
      const progress = newManager.getModuleProgress()
      setModuleProgress({ completed: progress.done, total: progress.total })
    })

    setManager(newManager)

    // Initial sync
    setCurrentCard(newManager.isFinished() ? null : newManager.getCurrentCard())
    setActiveQueue(newManager.getActiveQueue())
    setIsFinished(newManager.isFinished())
    setCardMap(newManager.getCardMap())
    setDependencyMap(newManager.getState().dependencyMap)
    const initialProgress = newManager.getModuleProgress()
    setModuleProgress({
      completed: initialProgress.done,
      total: initialProgress.total,
    })
  }

  /**
   * Process a card answer with automatic reactivity
   */
  const answerCard = async (rating: Rating): Promise<void> => {
    await manager()!.processAnswer(rating)
    // Observer will automatically update reactive signals
  }

  /**
   * Process introduction completion with automatic reactivity
   */
  const processIntroduction = (): void => {
    manager()!.processIntroductionCompletion()
    // Observer will automatically update reactive signals
  }

  /**
   * Get card from map (non-reactive, for direct access)
   */
  const getCardFromMap = (key: string): PracticeCard | undefined => {
    return manager()!.getCardFromMap(key)
  }

  /**
   * Get the full card map (non-reactive, for calculations)
   */
  const getCardMap = (): Map<string, PracticeCard> => {
    return manager()!.getCardMap()
  }

  /**
   * Get manager state (non-reactive, for calculations)
   */
  const getManagerState = (): PracticeSessionState => {
    return manager()!.getState()
  }

  /**
   * Get source queue sizes (non-reactive, for display)
   */
  const getSourceQueueSizes = (): { module: number; review: number } => {
    return manager()!.getSourceQueueSizes()
  }

  return {
    // Manager access
    manager,
    initializeManager,
    initializeReviewManager,

    // Reactive state (signals)
    currentCard,
    activeQueue,
    isFinished,
    cardMap,
    dependencyMap,
    moduleProgress,

    // Business actions
    answerCard,
    processIntroduction,

    // Non-reactive getters for calculations/display
    getCardFromMap,
    getCardMap,
    getManagerState,
    getSourceQueueSizes,
  }
}

export type PracticeManagerHook = ReturnType<typeof usePracticeManager>

