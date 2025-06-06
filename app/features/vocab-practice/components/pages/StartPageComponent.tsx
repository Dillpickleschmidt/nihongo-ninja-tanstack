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
    <>
      {/* Start Button */}
      <div class="fixed bottom-0 z-50 flex w-full justify-center px-4 pb-4 lg:pb-6">
        <Button
          onClick={() => context.setGameState({ currentPage: "practice" })}
          size="lg"
          class="w-full max-w-md bg-orange-500 font-medium text-black hover:bg-orange-600"
        >
          Start Learning!
        </Button>
      </div>

      {/* Header */}
      <div class="w-full px-4 pt-20 pb-8 lg:pt-24 lg:pb-12">
        <div class="relative mx-auto flex w-full max-w-screen-lg flex-col items-center text-center">
          <h1 class="text-3xl font-semibold lg:text-5xl">
            Practice {props.deckName}
          </h1>
          <div class="absolute top-0 right-4">
            <DeckSettingsDialogComponent>
              <Button variant="ghost">
                <Settings class="h-7 w-7" />
              </Button>
            </DeckSettingsDialogComponent>
          </div>
        </div>
      </div>

      {/* Content */}
      <div class="flex justify-center pb-32 lg:pb-36">
        <div class="w-full max-w-screen-lg space-y-2 px-4">
          <For each={props.previewData}>
            {(entry, index) => (
              <div class="bg-card rounded-xl p-6 shadow-md">
                <p class="text-xl font-bold text-orange-400 saturate-[125%] lg:text-2xl">
                  {entry.key}
                </p>
                <For
                  each={entry.answerCategories.filter(
                    (category) =>
                      (props.mode === "readings"
                        ? category.category === "English"
                        : category.category === "Kana") &&
                      category.answers.length > 0,
                  )}
                >
                  {/* <For */}
                  {/*   each={entry.answerCategories.filter( */}
                  {/*     (category) => */}
                  {/*       context.settings.enabledAnswerCategories.includes( */}
                  {/*         category.category, */}
                  {/*       ) && category.answers.length > 0, */}
                  {/*   )} */}
                  {/* > */}
                  {(categoryObj, i) => (
                    <div>
                      <p class="text-muted-foreground my-2 text-sm italic lg:text-base">
                        {categoryObj.category}:
                      </p>
                      <For each={categoryObj.answers}>
                        {(answer: string, j) => (
                          <p class="text-primary text-lg font-bold lg:text-xl">
                            {categoryObj.category === "Kana" ? (
                              <span class="font-japanese text-xl lg:text-2xl">
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
            )}
          </For>
        </div>
      </div>
    </>
  )
}
