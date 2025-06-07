// vocab-practice/components/pages/FinishPageComponent.tsx
import { For, Show } from "solid-js"
import { Button } from "@/components/ui/button"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import { Link } from "@tanstack/solid-router"

export default function FinishPageComponent() {
  const context = useVocabPracticeContext()

  return (
    <div class="min-h-screen">
      {/* Header */}
      <div class="px-4 pt-14 pb-10 lg:pt-18 lg:pb-12">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="text-3xl font-bold lg:text-5xl">
            You've finished this deck!
          </h1>
          <div class="mt-4 text-4xl">🎉</div>
        </div>
      </div>

      {/* Content */}
      <div class="px-4 pb-28">
        <div class="mx-auto max-w-3xl">
          <div class="grid gap-4 lg:gap-5">
            <For each={context.deckState.data}>
              {(entry) => (
                <div class="bg-card relative overflow-hidden rounded-xl p-5 shadow-md">
                  <p class="mb-3 text-xl font-bold text-orange-400 saturate-[125%] lg:text-2xl">
                    <span class="mr-2">{entry.key}</span>
                    <Show when={entry.particles}>
                      <For each={entry.particles}>
                        {(object, index) => (
                          <span class="text-base font-light">
                            {object.label ? (
                              <span>
                                {object.label} -{" "}
                                <span class="font-japanese">
                                  {object.particle}
                                </span>
                                {index() < entry.particles!.length - 1 && ", "}
                              </span>
                            ) : (
                              <span>
                                particle:{" "}
                                <span class="font-japanese">
                                  {object.particle}
                                </span>
                                {index() < entry.particles!.length - 1 && ", "}
                              </span>
                            )}
                          </span>
                        )}
                      </For>
                    </Show>
                  </p>
                  <For
                    each={entry.answerCategories.filter(
                      (category) =>
                        context.settings.enabledAnswerCategories.includes(
                          category.category,
                        ) && category.answers.length > 0,
                    )}
                  >
                    {(categoryObj) => (
                      <div class="space-y-1.5">
                        <p class="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                          {categoryObj.category}:
                        </p>
                        <For each={categoryObj.answers}>
                          {(answer: string) => (
                            <p class="text-primary ml-4 text-base font-semibold lg:text-lg">
                              {categoryObj.category === "Kana" ? (
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
                  {entry.wrongAnswerCount > 0 && (
                    <p class="mt-3 text-base text-red-500">
                      You missed this question {entry.wrongAnswerCount}{" "}
                      {entry.wrongAnswerCount === 1 ? "time" : "times"}
                    </p>
                  )}
                </div>
              )}
            </For>
          </div>
        </div>
      </div>

      {/* Return Button */}
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
