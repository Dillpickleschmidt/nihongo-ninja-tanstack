// vocab-practice/components/pages/FinishPageComponent.tsx
import { For, Show, createMemo } from "solid-js"
import { Button } from "@/components/ui/button"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import { Link } from "@tanstack/solid-router"
import type { PracticeCard } from "../../types"
import FinishPagePreviewCard from "./finish-page/FinishPagePreviewCard"

function getHierarchicalOrder(
  cardMap: Map<string, PracticeCard>,
  dependencyMap: Map<string, string[]>,
  enablePrerequisites: boolean,
): string[] {
  const seenItems = new Set<string>()
  const orderedKeys: string[] = []

  const addItemIfNew = (
    slug: string,
    itemType: "vocabulary" | "kanji" | "radical",
  ) => {
    const key = `${itemType}:${slug}`
    if (!seenItems.has(slug) && cardMap.has(key)) {
      seenItems.add(slug)
      orderedKeys.push(key)
    }
  }

  // Get vocabulary cards first, then their dependencies if prerequisites enabled
  const vocabCards = Array.from(cardMap.values()).filter(
    (card) =>
      card.practiceItemType === "vocabulary" && card.sessionScope === "module",
  )

  vocabCards.forEach((vocabCard) => {
    const vocabSlug = vocabCard.key.split(":")[1]
    addItemIfNew(vocabSlug, "vocabulary")

    if (enablePrerequisites) {
      const deps = dependencyMap.get(vocabCard.key) || []
      deps.forEach((depKey) => {
        if (depKey.startsWith("kanji:")) {
          const kanjiSlug = depKey.split(":")[1]
          addItemIfNew(kanjiSlug, "kanji")

          const kanjiDeps = dependencyMap.get(depKey) || []
          kanjiDeps.forEach((radicalKey) => {
            if (radicalKey.startsWith("radical:")) {
              const radicalSlug = radicalKey.split(":")[1]
              addItemIfNew(radicalSlug, "radical")
            }
          })
        }
      })
    }
  })

  return orderedKeys
}

export default function FinishPageComponent() {
  const {
    uiState,
    cardMap,
    dependencyMap,
    getManagerState,
    addTimeAndQuestions,
    flushToDatabase,
  } = useVocabPracticeContext()

  const enableKanjiRadicalPrereqs = () =>
    uiState.settings.enableKanjiRadicalPrereqs

  // Get hierarchically ordered module cards
  const moduleCards = createMemo(() => {
    const hierarchicalOrder = getHierarchicalOrder(
      cardMap(),
      dependencyMap(),
      enableKanjiRadicalPrereqs(),
    )
    return hierarchicalOrder
      .map((key) => cardMap().get(key))
      .filter(
        (card): card is PracticeCard =>
          !!card && card.sessionScope === "module",
      )
  })

  // Get review cards that were actually practiced (appeared in recentReviewHistory)
  const practicedReviewCards = createMemo(() => {
    const practicedKeys = new Set(
      uiState.recentReviewHistory.map((item) => item.key),
    )
    return Array.from(cardMap().values()).filter(
      (card) => card.sessionScope === "review" && practicedKeys.has(card.key),
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
        <div class="mx-auto max-w-3xl space-y-8">
          {/* Module Items Section */}
          <Show when={moduleCards().length > 0}>
            <div>
              <h2 class="text-primary mb-4 text-xl font-semibold">
                Module Items
              </h2>
              <div class="grid gap-3 lg:gap-4">
                <For each={moduleCards()}>
                  {(card, index) => {
                    const vocabularyDependencies = createMemo(() => {
                      if (card.practiceItemType === "vocabulary") return []
                      const unlocksMap = getManagerState().unlocksMap
                      return (unlocksMap.get(card.key) || [])
                        .map((key) => cardMap().get(key)?.vocab.word)
                        .filter(Boolean) as string[]
                    })

                    return (
                      <FinishPagePreviewCard
                        card={card}
                        index={index()}
                        allCards={moduleCards()}
                        incorrectCount={
                          uiState.incorrectAnswerMap.get(card.key) ?? 0
                        }
                        vocabularyDependencies={vocabularyDependencies()}
                      />
                    )
                  }}
                </For>
              </div>
            </div>
          </Show>

          {/* Review Items Section */}
          <Show when={practicedReviewCards().length > 0}>
            <div>
              <h2 class="text-primary mb-4 text-xl font-semibold">
                Practiced Review Items
              </h2>
              <div class="grid gap-3 lg:gap-4">
                <For each={practicedReviewCards()}>
                  {(card, index) => (
                    <FinishPagePreviewCard
                      card={card}
                      index={index()}
                      allCards={practicedReviewCards()}
                      incorrectCount={
                        uiState.incorrectAnswerMap.get(card.key) ?? 0
                      }
                      vocabularyDependencies={[]}
                    />
                  )}
                </For>
              </div>
            </div>
          </Show>
        </div>
      </div>

      {/* Return to Dashboard Button */}
      <div class="fixed right-0 bottom-0 left-0 z-50 p-4">
        <div class="mx-auto max-w-md">
          <Link
            to="/dashboard"
            tabindex={-1}
            onClick={() => {
              addTimeAndQuestions(10, false)
              flushToDatabase()
            }}
          >
            <Button class="h-14 w-full rounded-xl bg-orange-500 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:bg-orange-600">
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
