// vocab-practice/components/pages/StartPageComponent.tsx
import {
  For,
  JSX,
  createSignal,
  createMemo,
  createResource,
  Show,
} from "solid-js"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import { Button } from "@/components/ui/button"
import { Loader2, Settings } from "lucide-solid"
import DeckSettingsDialogComponent from "../DeckSettingsDialogComponent"
import { PracticeSessionManager } from "../../logic/PracticeSessionManager"
import { initializePracticeSession } from "../../logic/data-initialization"
import type { FSRSCardData } from "@/features/supabase/db/utils"
import { vocabulary } from "@/data/vocabulary"
import type { PracticeMode } from "../../types"
import { addKanaAndRuby } from "@/data/utils/vocab"
import type {
  FullHierarchyData,
  Kanji,
  Radical,
  VocabHierarchy,
} from "@/data/wanikani/types"

type PreviewItem = {
  key: string
  question: string
  answer: string
  isReview: boolean
  type: "module" | "review"
  itemType: "vocabulary" | "kanji" | "radical"
}

type StartPageProps = {
  hierarchy: FullHierarchyData | null
  deckName: string | JSX.Element
  moduleFSRSCards: Promise<FSRSCardData[]> | null
  dueFSRSCards: Promise<FSRSCardData[]> | null
  mode: PracticeMode | "review-only"
}

// --- MODIFIED: Update the function to use the new `meanings` data ---
function createPreviewItem(
  // The input can now optionally include the `meanings` array.
  input: {
    slug: string
    characters?: string | null
    meanings?: string[]
    type: "module" | "review"
    itemType: "vocabulary" | "kanji" | "radical"
  },
  mode: PracticeMode | "review-only",
  moduleFSRSMap: Map<string, FSRSCardData>,
): PreviewItem {
  let question = ""
  let answer = ""

  if (input.itemType === "vocabulary") {
    const vocab = addKanaAndRuby([vocabulary[input.slug]])[0]
    if (mode === "kana") {
      question = vocab.english.join(", ")
      answer = vocab.hiragana.join(", ") || vocab.word
    } else {
      question = vocab.word
      answer = vocab.english.join(", ")
    }
  } else {
    // This logic is for Kanji and Radicals.
    question = input.characters || input.slug
    // Use the authoritative `meanings` if they exist, otherwise fallback to the slug.
    // This gracefully handles pure due reviews that might not have this data in the preview.
    answer = input.meanings?.join(", ") || input.slug.replace(/-/g, " ")
  }

  return {
    key: input.slug,
    question,
    answer,
    isReview: input.type === "review" || moduleFSRSMap.has(input.slug),
    type: input.type,
    itemType: input.itemType,
  }
}

export default function StartPageComponent(props: StartPageProps) {
  const { setState } = useVocabPracticeContext()
  const [isStarting, setIsStarting] = createSignal(false)

  const [moduleFSRS] = createResource(
    () => props.moduleFSRSCards,
    (p) => p,
  )
  const [dueCards] = createResource(
    () => props.dueFSRSCards,
    (p) => p,
  )

  const isLoading = createMemo(() => moduleFSRS.loading || dueCards.loading)

  const previewItems = createMemo<PreviewItem[]>(() => {
    if (!props.hierarchy) return []

    const filteredFSRS = (moduleFSRS() || []).filter((card) => {
      if (props.mode === "review-only") return true
      return card.mode === props.mode
    })

    const moduleFSRSMap = new Map(
      filteredFSRS.map((c) => [c.practice_item_key, c]),
    )

    const seenKeys = new Set<string>()

    // The full hierarchy items (which include the `meanings` property) are
    // passed to `createPreviewItem`, which now knows how to use them.
    const moduleItems = [
      ...props.hierarchy.hierarchy.map((item) => ({
        ...item,
        itemType: "vocabulary" as const,
      })),
      ...props.hierarchy.uniqueKanji.map((item) => ({
        ...item,
        itemType: "kanji" as const,
      })),
      ...props.hierarchy.uniqueRadicals.map((item) => ({
        ...item,
        itemType: "radical" as const,
      })),
    ].map((item) => {
      seenKeys.add(item.slug)
      return createPreviewItem(
        { ...item, type: "module" },
        props.mode,
        moduleFSRSMap,
      )
    })

    const reviewItems = (dueCards() || [])
      .filter((card) => !seenKeys.has(card.practice_item_key))
      .map((card) =>
        createPreviewItem(
          {
            slug: card.practice_item_key,
            type: "review",
            itemType: card.type,
            // Note: `meanings` are not passed for pure due reviews,
            // so `createPreviewItem` will gracefully fall back to the slug.
          },
          props.mode,
          moduleFSRSMap,
        ),
      )

    return [...moduleItems, ...reviewItems]
  })

  const totalItemCount = createMemo(() => previewItems().length)

  async function handleStart() {
    setIsStarting(true)
    try {
      const resolvedModuleFSRS = await props.moduleFSRSCards
      const resolvedDueCards = await props.dueFSRSCards

      if (!props.hierarchy) {
        throw new Error("Hierarchy data is not available.")
      }

      const sessionModeForNewCards =
        props.mode === "review-only" ? "readings" : props.mode

      const initialState = initializePracticeSession(
        props.hierarchy,
        resolvedModuleFSRS || [],
        resolvedDueCards || [],
        sessionModeForNewCards,
        vocabulary,
      )

      const manager = new PracticeSessionManager(
        initialState,
        props.mode === "review-only",
      )
      setState("manager", manager)
      setState("activeQueue", manager.getActiveQueue())
    } catch (error) {
      console.error("Failed to initialize practice session:", error)
    } finally {
      setIsStarting(false)
    }
  }

  return (
    <div class="min-h-screen">
      <StartPageHeader
        deckName={props.deckName}
        previewCount={totalItemCount()}
      />
      <div class="px-4 pb-28">
        <div class="mx-auto max-w-3xl">
          <div class="grid gap-4 lg:gap-5">
            <For each={previewItems()}>
              {(item, index) => (
                <StartPagePreviewCard item={item} index={index()} />
              )}
            </For>
          </div>
        </div>
      </div>
      <StartPageButton
        loading={isLoading() || isStarting()}
        onClick={handleStart}
      />
    </div>
  )
}

// ... (The rest of the components: StartPageHeader, StartPagePreviewCard, StartPageButton remain unchanged)
function StartPageHeader(props: {
  deckName: string | JSX.Element
  previewCount: number
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
              Master {props.previewCount} terms through interactive practice
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

function StartPagePreviewCard(props: { item: PreviewItem; index: number }) {
  return (
    <div class="bg-card group relative overflow-hidden rounded-xl p-5 shadow-md transition-all duration-200 hover:shadow-lg">
      <div class="flex items-start justify-between">
        <div class="flex-1">
          <h3 class="mb-3 text-xl font-bold text-orange-400 saturate-[125%] lg:text-2xl">
            {props.item.question}
          </h3>
          <div class="space-y-1.5">
            <p class="text-muted-foreground text-sm font-medium tracking-wider uppercase">
              Answer:
            </p>
            <p class="text-primary text-base font-bold lg:text-lg">
              {props.item.answer}
            </p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <Show when={props.item.itemType === "kanji"}>
            <span class="inline-flex items-center rounded-full bg-pink-500/20 px-2.5 py-1 text-xs font-semibold tracking-wide text-pink-400 uppercase">
              Kanji
            </span>
          </Show>
          <Show when={props.item.itemType === "radical"}>
            <span class="inline-flex items-center rounded-full bg-blue-500/20 px-2.5 py-1 text-xs font-semibold tracking-wide text-blue-400 uppercase">
              Radical
            </span>
          </Show>
          <Show when={props.item.isReview}>
            <span class="inline-flex items-center rounded-full bg-amber-500/20 px-2.5 py-1 text-xs font-semibold tracking-wide text-amber-500 uppercase">
              Review
            </span>
          </Show>
          <div class="bg-muted text-muted-foreground flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold">
            {props.index + 1}
          </div>
        </div>
      </div>
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
