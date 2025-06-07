// vocab-practice/components/pages/PracticePageComponent.tsx
import { createEffect, createMemo } from "solid-js"
import {
  useVocabPracticeContext,
  CARDS_UNTIL_REVIEW,
} from "../../context/VocabPracticeContext"
import { Button } from "@/components/ui/button"
import CardTypeSwitchComponent from "../CardTypeSwitchComponent"
import { handleNextQuestion } from "../../logic/card-handlers"
import { getProgressPercentage, getProgressText } from "../../logic/deck-utils"
import { Show } from "solid-js"

export default function PracticePageComponent() {
  const context = useVocabPracticeContext()
  let buttonRef: HTMLButtonElement | undefined

  const reviewProgress = createMemo(() => {
    const currentProgress = context.deckState.recentlySeenCards.length
    return (currentProgress / CARDS_UNTIL_REVIEW) * 100
  })

  const overallProgress = createMemo(() => {
    return getProgressPercentage(context.deckState)
  })

  const overallProgressText = createMemo(() => {
    return getProgressText(context.deckState)
  })

  // Focus the next button when user answers
  createEffect(() => {
    if (context.gameState.hasUserAnswered && buttonRef) {
      buttonRef.focus()
    }
  })

  return (
    <div class="min-h-screen">
      {/* Progress header */}
      <div class="bg-background/90 border-card-foreground fixed top-0 right-0 left-0 z-40 border-b backdrop-blur-sm">
        <div class="px-4 pt-2 pb-2.5">
          <div class="mx-auto max-w-3xl">
            {/* Progress Labels */}
            <div class="mb-2 flex items-center justify-between">
              <div class="flex items-center gap-4">
                <div class="flex items-center gap-1.5">
                  <div class="h-2 w-2 rounded-full bg-blue-500" />
                  <span class="text-muted-foreground/80 text-xs font-medium">
                    New Terms Mastered
                  </span>
                </div>
                <div class="flex items-center gap-1.5">
                  <div class="h-2 w-2 rounded-full bg-orange-500" />
                  <span class="text-muted-foreground/80 text-xs font-medium">
                    Session Progress
                  </span>
                </div>
              </div>
              <span class="text-xs font-medium text-blue-400">
                {overallProgressText()} terms
              </span>
            </div>

            {/* Combined Progress Bar */}
            <div class="relative">
              {/* Background bar */}
              <div class="bg-muted h-2 overflow-hidden rounded-full">
                {/* Review progress (orange) - base layer */}
                <div
                  class="h-full rounded-r-full bg-orange-500 transition-all duration-500 ease-out"
                  style={`width: ${reviewProgress()}%`}
                />
              </div>

              {/* Overall progress overlay (blue) - positioned absolutely */}
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

      {/* Main content */}
      <div class="pt-28 pb-28">
        <div class="mx-auto max-w-3xl px-4">
          <div class="bg-card border-card-foreground rounded-2xl border p-8 shadow-md lg:p-10">
            <CardTypeSwitchComponent />
          </div>
        </div>
      </div>

      {/* Next button */}
      <Show when={context.gameState.hasUserAnswered}>
        <div class="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 transform">
          <Button
            ref={buttonRef}
            size="lg"
            onClick={() => handleNextQuestion(context)}
            class="h-14 rounded-xl bg-orange-500 px-8 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:bg-orange-600 focus-visible:ring-2 focus-visible:ring-orange-400"
          >
            <span class="flex items-center gap-2">
              Next Question
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </span>
          </Button>
        </div>
      </Show>
    </div>
  )
}
