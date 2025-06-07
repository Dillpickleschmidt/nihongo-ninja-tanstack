// vocab-practice/components/pages/StartPageComponent.tsx
import { For, JSX } from "solid-js"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import { Button } from "@/components/ui/button"
import { Settings } from "lucide-solid"
import DeckSettingsDialogComponent from "../DeckSettingsDialogComponent"
import type { Card } from "@/data/types"

type StartPageProps = {
  deckName: string | JSX.Element
  previewData: Card[]
  mode: string
}

export default function StartPageComponent(props: StartPageProps) {
  const context = useVocabPracticeContext()

  return (
    <div class="min-h-screen">
      {/* Header */}
      <div class="relative px-4 pt-14 pb-10 lg:pt-18 lg:pb-12">
        <div class="mx-auto max-w-3xl">
          <div class="relative flex items-center justify-between">
            <div class="flex-1 text-center">
              <div class="mb-3">
                <span class="inline-flex items-center rounded-full bg-orange-500/20 px-3 py-1.5 text-sm font-medium tracking-wide text-orange-400 uppercase">
                  Vocab Practice
                </span>
              </div>
              <h1 class="text-3xl font-bold lg:text-5xl">{props.deckName}</h1>
              <p class="text-muted-foreground mt-3 text-base lg:text-lg">
                Master {props.previewData.length} terms through interactive
                practice
              </p>
            </div>

            <div class="absolute top-0 right-0">
              <DeckSettingsDialogComponent>
                <Button variant="ghost" size="sm" class="h-11 w-11 rounded-xl">
                  <Settings class="h-5 w-5" />
                </Button>
              </DeckSettingsDialogComponent>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div class="px-4 pb-28">
        <div class="mx-auto max-w-3xl">
          <div class="grid gap-4 lg:gap-5">
            <For each={props.previewData}>
              {(entry, index) => (
                <div class="bg-card group relative overflow-hidden rounded-xl p-5 shadow-md transition-all duration-200 hover:shadow-lg">
                  <div class="flex items-start justify-between">
                    <div class="flex-1">
                      <h3 class="mb-3 text-xl font-bold text-orange-400 saturate-[125%] lg:text-2xl">
                        {entry.key}
                      </h3>

                      <For
                        each={entry.answerCategories.filter(
                          (category) =>
                            (props.mode === "readings"
                              ? category.category === "English"
                              : category.category === "Kana") &&
                            category.answers.length > 0,
                        )}
                      >
                        {(categoryObj) => (
                          <div class="space-y-1.5">
                            <p class="text-muted-foreground text-sm font-medium tracking-wider uppercase">
                              {categoryObj.category}:
                            </p>
                            <For each={categoryObj.answers}>
                              {(answer) => (
                                <p class="text-primary text-base font-bold lg:text-lg">
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
                    </div>

                    <div class="bg-muted text-muted-foreground ml-4 flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold">
                      {index() + 1}
                    </div>
                  </div>
                </div>
              )}
            </For>
          </div>
        </div>
      </div>

      {/* Start button */}
      <div class="fixed right-0 bottom-0 left-0 z-50 p-4">
        <div class="mx-auto max-w-md">
          <Button
            onClick={() => context.setGameState({ currentPage: "practice" })}
            size="lg"
            class="h-14 w-full rounded-xl bg-orange-500 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:bg-orange-600"
          >
            <span class="flex items-center justify-center gap-2">
              Start Learning!
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
