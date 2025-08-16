// vocab-practice/components/ProgressHeader.tsx
import {
  useVocabPracticeContext,
  CARDS_UNTIL_REVIEW,
} from "../context/VocabPracticeContext"

export default function ProgressHeader() {
  const { uiState, moduleProgress } = useVocabPracticeContext()

  const moduleProgressPercentage = () => {
    const progress = moduleProgress()
    if (progress.total === 0) return 0
    return (progress.completed / progress.total) * 100
  }

  const reviewProgress = () => {
    const currentProgress = uiState.recentReviewHistory.length
    return (currentProgress / CARDS_UNTIL_REVIEW) * 100
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
                {moduleProgress().completed}/{moduleProgress().total} terms
              </span>
              <span class="text-xs font-medium text-orange-400">
                {uiState.recentReviewHistory.length}/{CARDS_UNTIL_REVIEW}
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
                style={`width: ${moduleProgressPercentage()}%`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
