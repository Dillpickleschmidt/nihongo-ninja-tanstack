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
import { ChevronDown, Loader2, Settings } from "lucide-solid"
import DeckSettingsDialogComponent from "../DeckSettingsDialogComponent"
import StartPagePreviewCard from "./start-page/StartPagePreviewCard"
import { PracticeSessionManager } from "../../logic/PracticeSessionManager"
import { initializePracticeSession } from "../../logic/data-initialization"
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
import type { VocabularyItem } from "@/data/types"
import type { FSRSCardData } from "@/features/supabase/db/fsrs-operations"
import type { DeferredPromise } from "@tanstack/solid-router"
import { TextbookChapterBackgrounds } from "@/features/learn-page/components/shared/TextbookChapterBackgrounds"
import { useSettings } from "@/context/SettingsContext"
import { BottomNav } from "@/features/navbar/BottomNav"

type StartPageProps = {
  hierarchy: FullHierarchyData | null
  initialState: PracticeSessionState
  moduleFSRSCards: DeferredPromise<FSRSCardData[]> | null
  dueFSRSCards: DeferredPromise<FSRSCardData[]> | null
  moduleVocabulary: VocabularyItem[]
  deckName: string | JSX.Element
  mode: PracticeMode
}

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
  const { userPreferences } = useSettings()
  const [isStarting, setIsStarting] = createSignal(false)
  const [enhancedState, setEnhancedState] =
    createSignal<PracticeSessionState | null>(null)

  const currentState = createMemo(() => enhancedState() || props.initialState)

  const flipVocabQA = () => state.settings.flipVocabQA
  const flipKanjiRadicalQA = () => state.settings.flipKanjiRadicalQA
  const enablePrerequisites = () => state.settings.enablePrerequisites

  const [moduleFSRS] = createResource(
    () => props.moduleFSRSCards,
    (deferred) => deferred || Promise.resolve([]),
  )
  const [dueFSRS] = createResource(
    () => props.dueFSRSCards,
    (deferred) => deferred || Promise.resolve([]),
  )

  // Enhance state with FSRS data
  createEffect(async () => {
    if (moduleFSRS.loading || dueFSRS.loading || !props.hierarchy) return
    try {
      const fullState = await initializePracticeSession(
        props.hierarchy,
        moduleFSRS() || [],
        dueFSRS() || [],
        props.mode,
        props.moduleVocabulary,
        flipVocabQA(),
        flipKanjiRadicalQA(),
        state.settings.shuffleInput,
        enablePrerequisites(),
      )
      setEnhancedState(fullState)
    } catch (error) {
      console.error("Failed to enhance practice session:", error)
    }
  })

  const isLoading = () => moduleFSRS.loading || dueFSRS.loading
  const hasEnhancedData = () => enhancedState() !== null

  const getCardMap = (state: PracticeSessionState) => state.cardMap || new Map()

  const hierarchicalOrder = () =>
    props.hierarchy
      ? getHierarchicalOrder(props.hierarchy, enablePrerequisites())
      : []

  const moduleItems = createMemo(() => {
    const state = currentState()
    const cardMap = getCardMap(state)
    return hierarchicalOrder()
      .map((key) => cardMap.get(key))
      .filter(
        (card): card is PracticeCard =>
          !!card && card.sessionScope === "module",
      )
  })

  const reviewItems = createMemo(() => {
    const state = currentState()
    const cardMap = getCardMap(state)
    return (state.reviewQueue || [])
      .map((key) => cardMap.get(key))
      .filter((card): card is PracticeCard => !!card)
  })

  const vocabCount = () =>
    moduleItems().filter((c) => c.practiceItemType === "vocabulary").length

  const kanjiRadicalCount = () =>
    moduleItems().filter(
      (c) =>
        (c.practiceItemType === "kanji" || c.practiceItemType === "radical") &&
        !c.isDisabled,
    ).length

  const headerText = () =>
    enablePrerequisites() && kanjiRadicalCount() > 0
      ? `${vocabCount()} vocabulary (+${kanjiRadicalCount()} kanji/radicals)`
      : `${vocabCount()} vocabulary`

  // Track how many review items are visible
  const [visibleReviewCount, setVisibleReviewCount] = createSignal(20)

  function handleStart() {
    setIsStarting(true)
    try {
      const state = currentState()
      const reconstructedState: PracticeSessionState = {
        ...state,
        cardMap: getCardMap(state),
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
      {/* Background */}
      <div class="fixed inset-0 -z-1">
        <TextbookChapterBackgrounds
          textbook={userPreferences()["active-textbook"]}
          chapter={userPreferences()["active-deck"]}
          showGradient={false}
          blur="6px"
        />
      </div>

      {/* Header */}
      <StartPageHeader deckName={props.deckName} previewCount={headerText()} />

      {/* Module Content */}
      <div class="px-4 pb-24">
        <div class="mx-auto max-w-3xl">
          <h2 class="text-primary text-center text-lg font-semibold tracking-wide">
            Module Content
          </h2>
          <div class="mt-3 mb-16 grid gap-3 lg:gap-4">
            <For each={moduleItems()}>
              {(card, index) => (
                <StartPagePreviewCard
                  card={card}
                  index={index()}
                  allCards={moduleItems()}
                  isLoading={isLoading()}
                  hasEnhancedData={hasEnhancedData()}
                  currentState={currentState()}
                  getCardMap={getCardMap}
                />
              )}
            </For>
          </div>

          {/* Review Items */}
          <Show when={reviewItems().length > 0}>
            <div class="mt-32 mb-20 space-y-3 md:mt-48">
              <h2 class="text-primary text-center text-lg font-semibold tracking-wide">
                Review Items
              </h2>
              <p class="text-muted-foreground text-center text-sm lg:text-base">
                This is the whole pool of items available. Only a handful of
                them will be mixed into your practice session.
              </p>
              <div class="mt-3 grid gap-3 lg:gap-4">
                <For each={reviewItems().slice(0, visibleReviewCount())}>
                  {(card, index) => (
                    <StartPagePreviewCard
                      card={card}
                      index={index()}
                      allCards={reviewItems()}
                      isLoading={isLoading()}
                      hasEnhancedData={hasEnhancedData()}
                      currentState={currentState()}
                      getCardMap={getCardMap}
                    />
                  )}
                </For>
              </div>

              {/* Show More / No More Items */}
              <div class="mt-4 flex items-center justify-between">
                <div />
                <Show
                  when={visibleReviewCount() < reviewItems().length}
                  fallback={
                    <p class="text-muted-foreground text-sm">No more items</p>
                  }
                >
                  <Button
                    variant="outline"
                    onClick={() => setVisibleReviewCount((count) => count + 20)}
                    class="bg-card/40 border-card-foreground/70 rounded-lg hover:cursor-pointer"
                  >
                    Show More <ChevronDown class="h-4 w-4" />
                  </Button>
                </Show>
                <p class="text-muted-foreground text-xs">
                  {Math.min(visibleReviewCount(), reviewItems().length)}/
                  {reviewItems().length}
                </p>
              </div>
            </div>
          </Show>
        </div>
      </div>

      {/* Start Button */}
      <StartPageButton
        loading={isStarting() || isLoading()}
        onClick={handleStart}
      />

      <BottomNav dailyProgressPercentage={25} />
    </div>
  )
}

function StartPageHeader(props: {
  deckName: string | JSX.Element
  previewCount: string
}) {
  return (
    <div class="relative px-4 pt-10 pb-6 lg:pt-14 lg:pb-8">
      <div class="mx-auto max-w-3xl">
        <div class="relative flex items-center justify-between">
          <div class="flex-1 text-center">
            <div class="mb-2">
              <span class="inline-flex items-center rounded-full bg-orange-500/20 px-2.5 py-1 text-xs font-medium tracking-wide text-orange-400 uppercase">
                Vocab Practice
              </span>
            </div>
            <h1 class="text-2xl font-bold lg:text-4xl">{props.deckName}</h1>
            <p class="text-muted-foreground mt-2 text-sm lg:text-base">
              Master {props.previewCount} through interactive practice
            </p>
          </div>
          <div class="absolute top-0 right-0">
            <DeckSettingsDialogComponent>
              <Button variant="ghost" size="sm" class="h-9 w-9 rounded-lg">
                <Settings class="h-4 w-4" />
              </Button>
            </DeckSettingsDialogComponent>
          </div>
        </div>
      </div>
    </div>
  )
}

function StartPageButton(props: { loading: boolean; onClick: () => void }) {
  return (
    <div class="fixed right-0 bottom-16 left-0 z-50 p-4">
      <div class="mx-auto max-w-md">
        <Button
          onClick={props.onClick}
          size="lg"
          class="h-12 w-full rounded-lg bg-orange-500 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-[1.01] hover:bg-orange-600 disabled:opacity-70"
          disabled={props.loading}
        >
          <span class="flex items-center justify-center gap-2">
            {props.loading ? (
              <>
                Loading...
                <Loader2
                  stroke-width={2}
                  class="h-5 w-5 animate-spin text-neutral-300"
                />
              </>
            ) : (
              <>
                Start Learning!
                <svg
                  class="h-4 w-4"
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
