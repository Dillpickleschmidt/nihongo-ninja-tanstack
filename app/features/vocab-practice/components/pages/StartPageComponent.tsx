// vocab-practice/components/pages/StartPageComponent.tsx
import { For, JSX, createSignal, createMemo } from "solid-js"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import { Button } from "@/components/ui/button"
import { Loader2, Settings } from "lucide-solid"
import DeckSettingsDialogComponent from "../DeckSettingsDialogComponent"
import { PracticeSessionManager } from "../../logic/PracticeSessionManager"
import { initializePracticeSession } from "../../logic/data-initialization"
import type { FSRSCardData } from "@/features/supabase/db/utils"
import type { RichVocabItem } from "@/data/types"
import { vocabulary } from "@/data/vocabulary"

type StartPageProps = {
  deckName: string | JSX.Element
  newVocabulary: RichVocabItem[]
  moduleFSRSCards: Promise<FSRSCardData[]> | null
  dueFSRSCards: Promise<FSRSCardData[]> | null
}

function shuffleArray<T>(array: T[]): T[] {
  return [...array].sort(() => Math.random() - 0.5)
}

export default function StartPageComponent(props: StartPageProps) {
  const { state, setState } = useVocabPracticeContext()
  const [loading, setLoading] = createSignal(false)

  // Shuffle vocabulary if shuffleInput is enabled
  const preparedVocabulary = createMemo(() => {
    if (state.settings.shuffleInput) {
      return shuffleArray(props.newVocabulary)
    }
    return props.newVocabulary
  })

  async function handleStart() {
    setLoading(true)
    try {
      // 1. Await the resolution of the FSRS card promises
      const [resolvedModuleCards, resolvedDueCards] = await Promise.all([
        props.moduleFSRSCards,
        props.dueFSRSCards,
      ])

      // 2. Now that data is resolved, initialize the session state
      const initialState = initializePracticeSession(
        preparedVocabulary(),
        resolvedModuleCards || [],
        resolvedDueCards || [],
        state.settings.practiceMode,
        vocabulary,
      )

      // 3. Create the manager instance with the fully prepared state
      const manager = new PracticeSessionManager(initialState)
      setState("manager", manager)
      setState("activeQueue", manager.getActiveQueue())
    } catch (error) {
      console.error("Failed to initialize practice session:", error)
      // Optionally, show an error message to the user
    } finally {
      setLoading(false)
    }
  }

  return (
    <div class="min-h-screen">
      <StartPageHeader
        deckName={props.deckName}
        previewCount={props.newVocabulary.length}
      />
      <div class="px-4 pb-28">
        <div class="mx-auto max-w-3xl">
          <div class="grid gap-4 lg:gap-5">
            <For each={props.newVocabulary}>
              {(entry, index) => (
                <StartPagePreviewCard entry={entry} index={index()} />
              )}
            </For>
          </div>
        </div>
      </div>
      <StartPageButton loading={loading()} onClick={handleStart} />
    </div>
  )
}

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

// FIX: The 'mode' prop is removed from the props type.
function StartPagePreviewCard(props: { entry: RichVocabItem; index: number }) {
  const { state } = useVocabPracticeContext()

  const question = createMemo(() => {
    if (state.settings.practiceMode === "kana") {
      return props.entry.english.join(", ")
    }
    return props.entry.word
  })

  const answer = createMemo(() => {
    if (state.settings.practiceMode === "kana") {
      return props.entry.hiragana.join(", ")
    }
    return props.entry.english.join(", ")
  })

  return (
    <div class="bg-card group relative overflow-hidden rounded-xl p-5 shadow-md transition-all duration-200 hover:shadow-lg">
      <div class="flex items-start justify-between">
        <div class="flex-1">
          <h3 class="mb-3 text-xl font-bold text-orange-400 saturate-[125%] lg:text-2xl">
            {question()}
          </h3>
          <div class="space-y-1.5">
            <p class="text-muted-foreground text-sm font-medium tracking-wider uppercase">
              Answer:
            </p>
            <p class="text-primary text-base font-bold lg:text-lg">
              {answer()}
            </p>
          </div>
        </div>
        <div class="bg-muted text-muted-foreground ml-4 flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold">
          {props.index + 1}
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
