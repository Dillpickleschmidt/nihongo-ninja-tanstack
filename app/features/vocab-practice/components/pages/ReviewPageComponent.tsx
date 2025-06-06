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
    <>
      {/* Continue Button */}
      <div class="fixed bottom-0 z-50 flex w-full justify-center px-4 pb-4 lg:pb-6">
        <Button
          size="lg"
          onClick={handleContinue}
          class="w-full max-w-md bg-orange-500 font-medium text-black"
        >
          Continue
        </Button>
      </div>

      {/* Header */}
      <div class="w-full px-4 pt-20 pb-8 lg:pt-24 lg:pb-12">
        <h1 class="text-center text-3xl font-semibold lg:text-5xl">
          See the terms you practiced!
        </h1>
      </div>

      {/* Content */}
      <div class="flex justify-center pb-32 lg:pb-36">
        <div class="w-full max-w-screen-lg space-y-4 px-4">
          <For each={uniqueCards()}>
            {(card) => (
              <div class="bg-card relative overflow-hidden rounded-xl p-5 shadow-md">
                <p
                  class={`${card.wrongAnswerCount > 0 ? "text-[#ff5757]" : ""} text-xl font-bold lg:text-2xl`}
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
                    <div class="mt-2">
                      <p class="text-muted-foreground my-1 italic">
                        {object.category}:
                      </p>
                      <For each={object.answers}>
                        {(answer: string) => (
                          <p class="ml-4 text-lg">
                            {object.category === "Kana" ? (
                              <span class="font-japanese text-2xl font-medium">
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
    </>
  )
}
