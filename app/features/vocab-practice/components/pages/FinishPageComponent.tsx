// vocab-practice/components/pages/FinishPageComponent.tsx
import { For, Show, createMemo } from "solid-js"
import { Button } from "@/components/ui/button"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import { Link } from "@tanstack/solid-router"
import type { PracticeCard } from "../../types"

export default function FinishPageComponent() {
  const { state } = useVocabPracticeContext()
  const manager = () => state.manager!

  // Get all cards from the manager's map and filter for just the module cards
  const moduleCards = createMemo(() => {
    if (!manager()) return []
    return Array.from(manager().getCardMap().values()).filter(
      (card) => card.sessionStyle !== "flashcard",
    )
  })

  return (
    <div class="min-h-screen">
      {/* Completion Header */}
      <div class="px-4 pt-14 pb-10 lg:pt-18 lg:pb-12">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="text-3xl font-bold lg:text-5xl">
            You've finished this deck!
          </h1>
          <div class="mt-4 text-4xl">🎉</div>
        </div>
      </div>

      {/* Card Summary Grid */}
      <div class="px-4 pb-28">
        <div class="mx-auto max-w-3xl">
          <div class="grid gap-4 lg:gap-5">
            <For each={moduleCards()}>
              {(card) => <CardSummary card={card} />}
            </For>
          </div>
        </div>
      </div>

      {/* Return to Dashboard Button */}
      <div class="fixed right-0 bottom-0 left-0 z-50 p-4">
        <div class="mx-auto max-w-md">
          <Link to="/dashboard">
            <Button
              size="lg"
              class="h-14 w-full rounded-xl bg-orange-500 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:bg-orange-600"
            >
              <span class="flex items-center justify-center gap-2">
                Return
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
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

function CardSummary(props: { card: PracticeCard }) {
  const { state } = useVocabPracticeContext()
  // Get the session-specific incorrect count from the map
  const incorrectCount = () => state.incorrectAnswerMap.get(props.card.key) ?? 0

  const answerToDisplay = createMemo(() => {
    if (props.card.practiceMode === "kana") {
      return props.card.vocab.hiragana.join(", ")
    }
    return props.card.validAnswers.join(", ")
  })

  const promptClasses = createMemo(() => {
    const baseColor =
      incorrectCount() > 0 ? "text-red-500" : "text-orange-400 saturate-[125%]"
    const baseLayout = "mb-3 font-bold"
    const fontSize =
      props.card.practiceMode === "kana"
        ? "text-lg lg:text-xl" // Smaller for English prompt
        : "text-xl lg:text-2xl" // Larger for Japanese prompt
    return `${baseColor} ${baseLayout} ${fontSize}`
  })

  const answerClasses = createMemo(() => {
    const baseLayout = "text-primary ml-4 font-semibold"
    const fontSize =
      props.card.practiceMode === "kana"
        ? "text-lg lg:text-xl" // Larger for Japanese answer
        : "text-base lg:text-lg" // Smaller for English answer
    return `${baseLayout} ${fontSize}`
  })

  return (
    <div class="bg-card relative overflow-hidden rounded-xl p-5 shadow-md">
      <p class={promptClasses()}>
        <span class="mr-2">{props.card.prompt}</span>
        <Show when={props.card.vocab.particles}>
          <For each={props.card.vocab.particles}>
            {(particleObj, index) => (
              <span class="text-base font-light">
                <Show
                  when={particleObj.label}
                  fallback={
                    <span>
                      particle:{" "}
                      <span class="font-japanese">{particleObj.particle}</span>
                    </span>
                  }
                >
                  <span>
                    {particleObj.label} -{" "}
                    <span class="font-japanese">{particleObj.particle}</span>
                  </span>
                </Show>
                {index() < props.card.vocab.particles!.length - 1 && ", "}
              </span>
            )}
          </For>
        </Show>
      </p>

      <div class="space-y-1.5">
        <p class="text-muted-foreground text-sm font-medium tracking-wider uppercase">
          Answer:
        </p>
        <p class={answerClasses()}>{answerToDisplay()}</p>
      </div>

      {/* Missed Attempts Indicator */}
      <Show when={incorrectCount() > 0}>
        <p class="mt-3 text-base text-red-500">
          You missed this question {incorrectCount()}{" "}
          {incorrectCount() === 1 ? "time" : "times"} this session.
        </p>
      </Show>
    </div>
  )
}
