// vocab-practice/components/ProgressHeader.tsx
import { createMemo } from "solid-js"
import {
  useVocabPracticeContext,
  CARDS_UNTIL_REVIEW,
} from "../context/VocabPracticeContext"

export default function ProgressHeader() {
  const { state } = useVocabPracticeContext()
  const manager = () => state.manager!

  // Calculate the initial count ONCE when the component is created.
  const initialModuleCount = Array.from(manager().getCardMap().values()).filter(
    (card) => card.sessionStyle !== "flashcard",
  ).length

  // This memo correctly calculates the CURRENT number of remaining module cards
  const remainingModuleCards = createMemo(() => {
    const mgr = manager()
    if (!mgr) return 0
    const activeQueueKeys = state.activeQueue
    const activeQueueCards = activeQueueKeys.map(
      (key) => mgr.getCardFromMap(key)!,
    )
    const activeModuleCardsCount = activeQueueCards.filter(
      (c) => c.sessionStyle !== "flashcard",
    ).length
    return mgr.getSourceQueueSizes().module + activeModuleCardsCount
  })

  // Progress for the current review batch
  const reviewProgress = () => {
    const currentProgress = state.recentReviewHistory.length
    return (currentProgress / CARDS_UNTIL_REVIEW) * 100
  }

  // This calculation now works correctly because `initialModuleCount` is a stable number
  const overallProgress = createMemo(() => {
    const total = initialModuleCount
    if (total === 0) return 0
    const done = total - remainingModuleCards()
    return (done / total) * 100
  })

  const overallProgressText = () => {
    const total = initialModuleCount
    const done = total - remainingModuleCards()
    return `${done}/${total} terms`
  }

  return (
    <div class="bg-background/90 border-card-foreground fixed top-0 right-0 left-0 z-40 border-b backdrop-blur-sm">
      <div class="px-4 pt-2 pb-2.5">
        <div class="mx-auto max-w-3xl">
          <div class="mb-2 flex items-center justify-between">
            <div class="flex items-center gap-4">
              <div class="flex items-center gap-1.5">
                <div class="h-2 w-2 rounded-full bg-blue-500" />
                <span class="text-muted-foreground/80 text-xs font-medium">
                  Session Progress
                </span>
              </div>
              <div class="flex items-center gap-1.5">
                <div class="h-2 w-2 rounded-full bg-orange-500" />
                <span class="text-muted-foreground/80 text-xs font-medium">
                  Review Batch
                </span>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-xs font-medium text-blue-400">
                {overallProgressText()}
              </span>
              <span class="text-xs font-medium text-orange-400">
                {state.recentReviewHistory.length}/{CARDS_UNTIL_REVIEW}
              </span>
            </div>
          </div>
          <div class="relative">
            <div class="bg-muted h-2 overflow-hidden rounded-full">
              <div
                class="h-full rounded-r-full bg-orange-500 transition-all duration-500 ease-out"
                style={`width: ${reviewProgress()}%`}
              />
            </div>
            <div class="absolute top-0 right-0 left-0 h-2 overflow-hidden rounded-full">
              <div
                class="h-full rounded-r-full bg-blue-500/80 transition-all duration-500 ease-out"
                style={`width: ${overallProgress()}%`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}