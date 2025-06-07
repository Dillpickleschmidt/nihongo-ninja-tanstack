// vocab-practice/components/pages/FinishPageComponent.tsx
import { For, Show, createMemo } from "solid-js"
import { Button } from "@/components/ui/button"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import { Link } from "@tanstack/solid-router"
import type { Card } from "@/data/types"

export default function FinishPageComponent() {
  const context = useVocabPracticeContext()

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
            <For each={context.deckState.allCards}>
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

function CardSummary(props: { card: Card }) {
  const context = useVocabPracticeContext()

  const visibleAnswerCategories = createMemo(() =>
    props.card.answerCategories.filter(
      (category) =>
        context.settings.enabledAnswerCategories.includes(category.category) &&
        category.answers.length > 0,
    ),
  )

  return (
    <div class="bg-card relative overflow-hidden rounded-xl p-5 shadow-md">
      {/* Card Title with Particles */}
      <p class="mb-3 text-xl font-bold text-orange-400 saturate-[125%] lg:text-2xl">
        <span class="mr-2">{props.card.key}</span>
        <Show when={props.card.particles}>
          <For each={props.card.particles}>
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
                {index() < props.card.particles!.length - 1 && ", "}
              </span>
            )}
          </For>
        </Show>
      </p>

      {/* Answer Categories */}
      <For each={visibleAnswerCategories()}>
        {(categoryObj) => (
          <div class="space-y-1.5">
            <p class="text-muted-foreground text-sm font-medium tracking-wider uppercase">
              {categoryObj.category}:
            </p>
            <For each={categoryObj.answers}>
              {(answer) => (
                <p class="text-primary ml-4 text-base font-semibold lg:text-lg">
                  <Show
                    when={categoryObj.category === "Kana"}
                    fallback={answer}
                  >
                    <span class="font-japanese text-lg lg:text-xl">
                      {answer}
                    </span>
                  </Show>
                </p>
              )}
            </For>
          </div>
        )}
      </For>

      {/* Missed Attempts Indicator */}
      <Show when={props.card.wrongAnswerCount > 0}>
        <p class="mt-3 text-base text-red-500">
          You missed this question {props.card.wrongAnswerCount}{" "}
          {props.card.wrongAnswerCount === 1 ? "time" : "times"}
        </p>
      </Show>
    </div>
  )
}
