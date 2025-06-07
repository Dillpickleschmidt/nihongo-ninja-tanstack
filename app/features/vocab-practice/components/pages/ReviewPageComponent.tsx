// vocab-practice/components/pages/ReviewPageComponent.tsx
import { For, Show, createMemo } from "solid-js"
import { Button } from "@/components/ui/button"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import { getUniqueCards } from "../../logic/deck-utils"

export type AnswerCategory = {
  answers: string[]
  category: string
}

export default function ReviewPageComponent() {
  const context = useVocabPracticeContext()

  const uniqueCards = createMemo(() => {
    return getUniqueCards(context.deckState.recentlySeenCards)
  })

  const handleContinue = () => {
    context.setDeckState({ recentlySeenCards: [] }) // Clear recently seen cards
    context.setGameState({ currentPage: "practice" })
  }

  return (
    <div class="min-h-screen">
      {/* Header */}
      <div class="px-4 pt-14 pb-10 lg:pt-18 lg:pb-12">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="text-3xl font-bold lg:text-5xl">
            See the terms you practiced!
          </h1>
        </div>
      </div>

      {/* Content */}
      <div class="px-4 pb-28">
        <div class="mx-auto max-w-3xl">
          <div class="grid gap-4 lg:gap-5">
            <For each={uniqueCards()}>
              {(card) => (
                <div class="bg-card relative overflow-hidden rounded-xl p-5 shadow-md">
                  <p
                    class={`${card.wrongAnswerCount > 0 ? "text-red-500" : "text-orange-400 saturate-[125%]"} mb-3 text-xl font-bold lg:text-2xl`}
                  >
                    <span class="mr-2">{card.key}</span>
                    <Show when={card.particles}>
                      <For each={card.particles}>
                        {(object, index) => (
                          <span class="text-base font-light">
                            {object.label ? (
                              <span>
                                {object.label} -{" "}
                                <span class="font-japanese">
                                  {object.particle}
                                </span>
                                {index() < card.particles!.length - 1 && ", "}
                              </span>
                            ) : (
                              <span>
                                particle:{" "}
                                <span class="font-japanese">
                                  {object.particle}
                                </span>
                                {index() < card.particles!.length - 1 && ", "}
                              </span>
                            )}
                          </span>
                        )}
                      </For>
                    </Show>
                  </p>
                  <For
                    each={card.answerCategories.filter(
                      (object) =>
                        context.settings.enabledAnswerCategories.includes(
                          object.category,
                        ) && object.answers.length > 0,
                    )}
                  >
                    {(object: AnswerCategory) => (
                      <div class="space-y-1.5">
                        <p class="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                          {object.category}:
                        </p>
                        <For each={object.answers}>
                          {(answer: string) => (
                            <p class="text-primary ml-4 text-base font-semibold lg:text-lg">
                              {object.category === "Kana" ? (
                                <span class="font-japanese text-lg lg:text-xl">
                                  {answer}
                                </span>
                              ) : (
                                answer
                              )}
                            </p>
                          )}
                        </For>
                      </div>
                    )}
                  </For>
                  <div
                    class={`absolute top-0 right-0 h-full ${card.wrongAnswerCount > 0 ? "w-4 bg-red-500" : "w-2 bg-emerald-500/50"}`}
                  />
                </div>
              )}
            </For>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div class="fixed right-0 bottom-0 left-0 z-50 p-4">
        <div class="mx-auto max-w-md">
          <Button
            size="lg"
            onClick={handleContinue}
            class="h-14 w-full rounded-xl bg-orange-500 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:bg-orange-600"
          >
            <span class="flex items-center justify-center gap-2">
              Continue
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
      </div>
    </div>
  )
}
