// features/vocab-practice/components/pages/StartPageComponent.tsx
import {
  For,
  JSX,
  createSignal,
  createMemo,
  createEffect,
  createResource,
  Show,
} from "solid-js"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import { Button } from "@/components/ui/button"
import { Loader2, Settings } from "lucide-solid"
import DeckSettingsDialogComponent from "../DeckSettingsDialogComponent"
import { PracticeSessionManager } from "../../logic/PracticeSessionManager"
import { initializePracticeSession } from "../../logic/data-initialization"
import { vocabulary } from "@/data/vocabulary"
import type {
  PracticeMode,
  PracticeSessionState,
  PracticeCard,
} from "../../types"
import type {
  FullHierarchyData,
  Kanji,
  Radical,
  VocabHierarchy,
} from "@/data/wanikani/types"
import type { FSRSCardData } from "@/features/supabase/db/utils"
import type { DeferredPromise } from "@tanstack/solid-router"

type StartPageProps = {
  hierarchy: FullHierarchyData | null
  initialState: PracticeSessionState
  moduleFSRSCards: DeferredPromise<FSRSCardData[]> | null
  dueFSRSCards: DeferredPromise<FSRSCardData[]> | null
  deckName: string | JSX.Element
  mode: PracticeMode
}

// Helper function to build hierarchical ordering
function getHierarchicalOrder(
  hierarchy: FullHierarchyData,
  enablePrerequisites: boolean,
): string[] {
  const seenItems = new Set<string>()
  const orderedKeys: string[] = []

  const addItemIfNew = (
    item: VocabHierarchy | Kanji | Radical,
    itemType: "vocabulary" | "kanji" | "radical",
  ) => {
    if (seenItems.has(item.slug)) return

    seenItems.add(item.slug)
    orderedKeys.push(`${itemType}:${item.slug}`)
  }

  hierarchy.hierarchy.forEach((vocab) => {
    addItemIfNew(vocab, "vocabulary")

    if (enablePrerequisites) {
      vocab.kanji.forEach((kanji) => {
        addItemIfNew(kanji, "kanji")
        kanji.radicals.forEach((radical) => {
          addItemIfNew(radical, "radical")
        })
      })
    }
  })

  return orderedKeys
}

export default function StartPageComponent(props: StartPageProps) {
  const { setState, state } = useVocabPracticeContext()
  const [isStarting, setIsStarting] = createSignal(false)

  // Two states: initial (server-side) and enhanced (with FSRS data)
  const [enhancedState, setEnhancedState] =
    createSignal<PracticeSessionState | null>(null)
  const currentState = createMemo(() => enhancedState() || props.initialState)

  const flipVocabQA = createMemo(() => state.settings.flipVocabQA)
  const flipKanjiRadicalQA = createMemo(() => state.settings.flipKanjiRadicalQA)
  const enablePrerequisites = createMemo(
    () => state.settings.enablePrerequisites,
  )

  // Create resources for deferred FSRS data
  const [moduleFSRS] = createResource(
    () => props.moduleFSRSCards,
    (deferredPromise) => deferredPromise || Promise.resolve([]),
  )
  const [dueFSRS] = createResource(
    () => props.dueFSRSCards,
    (deferredPromise) => deferredPromise || Promise.resolve([]),
  )

  // Enhance with FSRS data when loaded OR when settings change
  createEffect(async () => {
    if (moduleFSRS.loading || dueFSRS.loading || !props.hierarchy) return

    try {
      const fullState = await initializePracticeSession(
        props.hierarchy,
        moduleFSRS() || [],
        dueFSRS() || [],
        props.mode,
        vocabulary,
        flipVocabQA(),
        flipKanjiRadicalQA(),
        state.settings.shuffleInput,
        enablePrerequisites(),
      )

      // Serialize Maps and Sets for JSON transfer
      const serializedState = {
        ...fullState,
        cardMap: Array.from(fullState.cardMap.entries()),
        dependencyMap: Array.from(fullState.dependencyMap.entries()),
        unlocksMap: Array.from(fullState.unlocksMap.entries()),
        lockedKeys: Array.from(fullState.lockedKeys),
      } as unknown as PracticeSessionState

      setEnhancedState(serializedState)
    } catch (error) {
      console.error("Failed to enhance practice session:", error)
    }
  })

  const isLoading = createMemo(() => moduleFSRS.loading || dueFSRS.loading)
  const hasEnhancedData = createMemo(() => enhancedState() !== null)

  // Reconstruct Map from serialized array
  const getCardMap = (
    state: PracticeSessionState,
  ): Map<string, PracticeCard> => {
    const cardMapData = state.cardMap as any
    if (Array.isArray(cardMapData)) {
      return new Map(cardMapData)
    }
    return new Map()
  }

  const hierarchicalOrder = createMemo(() => {
    if (!props.hierarchy) return []
    return getHierarchicalOrder(props.hierarchy, enablePrerequisites())
  })

  const moduleItems = createMemo<PracticeCard[]>(() => {
    const state = currentState()
    const cardMap = getCardMap(state)
    const order = hierarchicalOrder()

    return order
      .map((key) => cardMap.get(key))
      .filter(
        (card): card is PracticeCard =>
          card !== undefined && card.sessionScope === "module",
      )
  })

  const reviewItems = createMemo<PracticeCard[]>(() => {
    const state = currentState()
    const cardMap = getCardMap(state)
    const reviewQueue = (state.reviewQueue as any) || []

    return reviewQueue
      .map((key: string) => cardMap.get(key))
      .filter((card: any): card is PracticeCard => card !== undefined)
  })

  const vocabCount = createMemo(() => {
    return moduleItems().filter(
      (card) => card.practiceItemType === "vocabulary",
    ).length
  })

  const kanjiRadicalCount = createMemo(() => {
    return moduleItems().filter(
      (card) =>
        card.practiceItemType === "kanji" ||
        card.practiceItemType === "radical",
    ).length
  })

  const headerText = createMemo(() => {
    if (enablePrerequisites() && kanjiRadicalCount() > 0) {
      return `${vocabCount()} vocabulary (+${kanjiRadicalCount()} kanji/radicals)`
    } else {
      return `${vocabCount()} vocabulary`
    }
  })

  function handleStart() {
    setIsStarting(true)
    try {
      const state = currentState()

      const reconstructedState: PracticeSessionState = {
        ...state,
        cardMap: getCardMap(state),
        dependencyMap: new Map((state.dependencyMap as any) || []),
        unlocksMap: new Map((state.unlocksMap as any) || []),
        lockedKeys: new Set((state.lockedKeys as any) || []),
        moduleQueue: (state.moduleQueue as any) || [],
        reviewQueue: (state.reviewQueue as any) || [],
        activeQueue: (state.activeQueue as any) || [],
      }

      const manager = new PracticeSessionManager(reconstructedState, false)
      setState("manager", manager)
      setState("activeQueue", manager.getActiveQueue())
    } catch (error) {
      console.error("Failed to start practice session:", error)
    } finally {
      setIsStarting(false)
    }
  }

  return (
    <div class="min-h-screen">
      <StartPageHeader deckName={props.deckName} previewCount={headerText()} />
      <div class="px-4 pb-28">
        <div class="mx-auto max-w-3xl">
          <div class="space-y-8">
            {/* Module Content Section */}
            <div class="space-y-4">
              <h2 class="text-primary text-center text-xl font-bold">
                Module Content
              </h2>
              <div class="grid gap-4 lg:gap-5">
                <For each={moduleItems()}>
                  {(card, index) => (
                    <StartPagePreviewCard
                      card={card}
                      index={index()}
                      isLoading={isLoading()}
                      hasEnhancedData={hasEnhancedData()}
                    />
                  )}
                </For>
              </div>
            </div>

            {/* Review Items Section */}
            <Show when={reviewItems()?.length > 0}>
              <div class="space-y-4">
                <h2 class="text-primary text-center text-xl font-bold">
                  Review Items
                </h2>
                <div class="grid gap-4 lg:gap-5">
                  <For each={reviewItems() || []}>
                    {(card, index) => (
                      <StartPagePreviewCard
                        card={card}
                        index={moduleItems().length + index()}
                        isLoading={isLoading()}
                        hasEnhancedData={hasEnhancedData()}
                      />
                    )}
                  </For>
                </div>
              </div>
            </Show>
          </div>
        </div>
      </div>
      <StartPageButton
        loading={isStarting() || isLoading()}
        onClick={handleStart}
      />
    </div>
  )
}

function StartPageHeader(props: {
  deckName: string | JSX.Element
  previewCount: string
}) {
  return (
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
              Master {props.previewCount} through interactive practice
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
  )
}

function StartPagePreviewCard(props: {
  card: PracticeCard
  index: number
  isLoading: boolean
  hasEnhancedData: boolean
}) {
  const questionTextClass = createMemo(() => ({
    "text-xl lg:text-2xl":
      props.card.practiceMode === "readings" ||
      props.card.practiceItemType !== "vocabulary",
    "text-lg lg:text-xl":
      props.card.practiceMode === "kana" &&
      props.card.practiceItemType === "vocabulary",
  }))

  const answerTextClass = createMemo(() => ({
    "text-xl lg:text-2xl": props.card.validAnswers.some((answer) =>
      /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(answer),
    ),
    "text-base lg:text-lg": !props.card.validAnswers.some((answer) =>
      /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(answer),
    ),
  }))

  const isDue = createMemo(() => {
    // Only check due status if we have real FSRS data
    if (!props.hasEnhancedData) return false

    const dueDate = props.card.fsrs.card.due
    if (!dueDate) return false

    const now = new Date()
    const cardDueDate = new Date(dueDate)

    // Don't show "due" for cards created within the last 5 seconds
    const fiveSecondsAgo = new Date(now.getTime() - 5000)
    if (cardDueDate > fiveSecondsAgo) {
      return false
    }

    return cardDueDate <= now
  })

  return (
    <div class="bg-card group relative overflow-hidden rounded-xl p-5 shadow-md transition-all duration-200 hover:shadow-lg">
      <div class="flex items-start justify-between">
        <div class="flex-1">
          <h3
            class="mb-3 font-bold text-orange-400 saturate-[125%]"
            classList={questionTextClass()}
          >
            {props.card.prompt}
          </h3>
          <div class="space-y-1.5">
            <p class="text-muted-foreground text-sm font-medium tracking-wider uppercase">
              Answer:
            </p>
            <p class="text-primary font-bold" classList={answerTextClass()}>
              {props.card.validAnswers.join(", ")}
            </p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <Show when={props.card.practiceItemType === "kanji"}>
            <span class="inline-flex items-center rounded-full bg-pink-500/20 px-2.5 py-1 text-xs font-semibold tracking-wide text-pink-400 uppercase">
              Kanji
            </span>
          </Show>
          <Show when={props.card.practiceItemType === "radical"}>
            <span class="inline-flex items-center rounded-full bg-blue-500/20 px-2.5 py-1 text-xs font-semibold tracking-wide text-blue-400 uppercase">
              Radical
            </span>
          </Show>
          <Show
            when={!props.isLoading && isDue()}
            fallback={
              <Show when={props.isLoading}>
                <div class="inline-flex items-center rounded-full bg-gray-500/20 px-2.5 py-1">
                  <Loader2 class="h-3 w-3 animate-spin text-gray-400" />
                </div>
              </Show>
            }
          >
            <span class="inline-flex items-center rounded-full bg-amber-500/20 px-2.5 py-1 text-xs font-semibold tracking-wide text-amber-500 uppercase">
              Due
            </span>
          </Show>
          <div class="bg-muted text-muted-foreground flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold">
            {props.index + 1}
          </div>
        </div>
      </div>
      <Show when={!props.isLoading && isDue() && props.card.fsrs.card.due}>
        <div class="text-muted-foreground absolute right-4 bottom-4 text-xs">
          Due:{" "}
          {new Date(props.card.fsrs.card.due).toLocaleDateString(undefined, {
            weekday: "short",
            month: "short",
            day: "numeric",
          })}
        </div>
      </Show>
    </div>
  )
}

function StartPageButton(props: { loading: boolean; onClick: () => void }) {
  return (
    <div class="fixed right-0 bottom-0 left-0 z-50 p-4">
      <div class="mx-auto max-w-md">
        <Button
          onClick={props.onClick}
          size="lg"
          class="h-14 w-full rounded-xl bg-orange-500 text-base font-semibold text-white shadow-lg transition-all duration-200 hover:scale-[1.02] hover:bg-orange-600 disabled:opacity-70"
          disabled={props.loading}
        >
          <span class="flex items-center justify-center gap-2">
            {props.loading ? (
              <>
                Loading...
                <Loader2
                  stroke-width={2}
                  class="h-6 w-6 animate-spin text-neutral-300"
                />
              </>
            ) : (
              <>
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
              </>
            )}
          </span>
        </Button>
      </div>
    </div>
  )
}
