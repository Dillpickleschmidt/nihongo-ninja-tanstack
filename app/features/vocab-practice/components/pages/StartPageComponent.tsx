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
  isDue: boolean
  type: "module" | "review"
  itemType: "vocabulary" | "kanji" | "radical"
  isQuestionJapanese: boolean
  isAnswerJapanese: boolean
  due?: Date // for review items
}

type StartPageProps = {
  hierarchy: FullHierarchyData | null
  deckName: string | JSX.Element
  moduleFSRSCards: Promise<FSRSCardData[]> | null
  dueFSRSCards: Promise<FSRSCardData[]> | null
  mode: PracticeMode | "review-only"
}

function createPreviewItem(
  input: {
    slug: string
    characters?: string | null
    meanings?: string[]
    type: "module" | "review"
    itemType: DBPracticeItemType
  },
  mode: PracticeMode | "review-only",
  fsrsCardData?: FSRSCardData,
  flipVocabQA: boolean = false,
  flipKanjiRadicalQA: boolean = false,
): PreviewItem {
  let question = ""
  let answer = ""
  let isQJapanese = false
  let isAJapanese = false

  if (input.itemType === "vocabulary") {
    const vocab = vocabulary[input.slug]
    if (!vocab) {
      console.warn(`Vocabulary item not found for slug: ${input.slug}`)
      return {
        key: input.slug,
        question: `ERROR: ${input.slug}`,
        answer: "Data Missing",
        isDue: false,
        type: input.type,
        itemType: input.itemType,
        isQuestionJapanese: false,
        isAnswerJapanese: false,
      }
    }
    const richVocab = addKanaAndRuby([vocab])[0]
    if (mode === "kana") {
      if (flipVocabQA) {
        // Flipped: Question is kana, Answer is English
        question = richVocab.hiragana.join(", ") || richVocab.word
        answer = richVocab.english.join(", ")
        isQJapanese = true
        isAJapanese = false
      } else {
        // Original: Question is English, Answer is kana
        question = richVocab.english.join(", ")
        answer = richVocab.hiragana.join(", ") || richVocab.word
        isQJapanese = false
        isAJapanese = true
      }
    } else {
      // 'readings' mode
      if (flipVocabQA) {
        // Flipped: Question is English, Answer is word
        question = richVocab.english.join(", ")
        answer = richVocab.word
        isQJapanese = false
        isAJapanese = true
      } else {
        // Original: Question is word, Answer is English
        question = richVocab.word
        answer = richVocab.english.join(", ")
        isQJapanese = true
        isAJapanese = false
      }
    }
  } else {
    const character = input.characters || input.slug // TODO: Fix to use img (definitely not the slug)
    const meanings = input.meanings?.join(", ") ?? ""

    if (flipKanjiRadicalQA) {
      // Flipped: Question is meanings, Answer is character
      question = meanings
      answer = character
      isQJapanese = false
      isAJapanese = true
    } else {
      // Original: Question is character, Answer is meanings
      question = character
      answer = meanings
      isQJapanese = true
      isAJapanese = false
    }
  }

  return {
    key: input.slug,
    question,
    answer,
    isDue: fsrsCardData?.fsrs_card.due
      ? fsrsCardData?.fsrs_card.due <= new Date()
      : false,
    type: input.type,
    itemType: input.itemType,
    isQuestionJapanese: isQJapanese,
    isAnswerJapanese: isAJapanese,
    due: fsrsCardData?.fsrs_card.due,
  }
}

export default function StartPageComponent(props: StartPageProps) {
  const { setState, state } = useVocabPracticeContext()
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

  const flipVocabQA = createMemo(() => state.settings.flipVocabQA)
  const flipKanjiRadicalQA = createMemo(() => state.settings.flipKanjiRadicalQA)
  const enablePrerequisites = createMemo(
    () => state.settings.enablePrerequisites,
  )

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

    let itemsToProcessForModule: Array<VocabHierarchy | Kanji | Radical> = [
      ...props.hierarchy.hierarchy, // Always include vocabulary
    ]

    if (enablePrerequisites()) {
      itemsToProcessForModule.push(
        ...props.hierarchy.uniqueKanji,
        ...props.hierarchy.uniqueRadicals,
      )
    }

    const moduleItems = itemsToProcessForModule.map((item) => {
      seenKeys.add(item.slug)

      let currentItemType: DBPracticeItemType
      let characters: string | null | undefined
      let meanings: string[] | undefined

      if ("kanji" in item) {
        currentItemType = "vocabulary"
      } else if ("radicals" in item) {
        currentItemType = "kanji"
        characters = (item as Kanji).characters
        meanings = (item as Kanji).meanings
      } else {
        currentItemType = "radical"
        characters = (item as Radical).characters
        meanings = (item as Radical).meanings
      }

      return createPreviewItem(
        {
          slug: item.slug,
          type: "module",
          itemType: currentItemType,
          characters,
          meanings,
        },
        props.mode,
        moduleFSRSMap.get(item.slug),
        flipVocabQA(),
        flipKanjiRadicalQA(),
      )
    })

    // Review items - Look up full data from props.hierarchy or vocabulary map
    const reviewItems = (dueCards() || [])
      .filter((card) => !seenKeys.has(card.practice_item_key))
      .map((card) => {
        let characters: string | null | undefined
        let meanings: string[] | undefined

        if (card.type === "vocabulary") {
          const vocabData = vocabulary[card.practice_item_key]
          if (vocabData) {
            characters = vocabData.word
            meanings = vocabData.english
          } else {
            console.warn(
              `Vocabulary data not found for review item: ${card.practice_item_key}.`,
            )
          }
        } else if (card.type === "kanji") {
          // Look up Kanji data directly from props.hierarchy.uniqueKanji
          const kanjiData = props.hierarchy!.uniqueKanji.find(
            (k) => k.slug === card.practice_item_key,
          )
          if (kanjiData) {
            characters = kanjiData.characters
            meanings = kanjiData.meanings
          } else {
            console.warn(
              `Kanji data not found in hierarchy for review item: ${card.practice_item_key}.`,
            )
          }
        } else if (card.type === "radical") {
          // Look up Radical data directly from props.hierarchy.uniqueRadicals
          const radicalData = props.hierarchy!.uniqueRadicals.find(
            (r) => r.slug === card.practice_item_key,
          )
          if (radicalData) {
            characters = radicalData.characters
            meanings = radicalData.meanings
          } else {
            console.warn(
              `Radical data not found in hierarchy for review item: ${card.practice_item_key}.`,
            )
          }
        }

        return createPreviewItem(
          {
            slug: card.practice_item_key,
            type: "review",
            itemType: card.type,
            characters,
            meanings,
          },
          props.mode,
          card, // Pass the full FSRSCardData to get the `due` date
          flipVocabQA(),
          flipKanjiRadicalQA(),
        )
      })

    return [...moduleItems, ...reviewItems]
  })

  const vocabCount = createMemo(() => {
    return previewItems().filter((item) => item.itemType === "vocabulary")
      .length
  })

  const kanjiRadicalCount = createMemo(() => {
    return previewItems().filter(
      (item) => item.itemType === "kanji" || item.itemType === "radical",
    ).length
  })

  const totalItemCount = createMemo(() => previewItems().length)

  const headerText = createMemo(() => {
    if (enablePrerequisites() && kanjiRadicalCount() > 0) {
      return `${vocabCount()} vocabulary (+${kanjiRadicalCount()} kanji/radicals)`
    } else {
      return `${totalItemCount()} vocabulary`
    }
  })

  async function handleStart() {
    setIsStarting(true)
    try {
      const resolvedModuleFSRS = await props.moduleFSRSCards
      const resolvedDueCards = await props.dueFSRSCards

      if (!props.hierarchy) {
        throw new Error("Hierarchy data is not available.")
      }

      const sessionModeForNewCards = // Doesn't matter for review-only mode, anyway
        props.mode === "review-only" ? "readings" : props.mode

      const initialState = await initializePracticeSession(
        props.hierarchy,
        resolvedModuleFSRS || [],
        resolvedDueCards || [],
        sessionModeForNewCards,
        vocabulary,
        state.settings.flipVocabQA,
        state.settings.flipKanjiRadicalQA,
        state.settings.shuffleInput,
        state.settings.enablePrerequisites,
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
      <StartPageHeader deckName={props.deckName} previewCount={headerText()} />
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

function StartPagePreviewCard(props: { item: PreviewItem; index: number }) {
  const questionTextClass = createMemo(() => ({
    // If Japanese, make it larger
    "text-xl lg:text-2xl": props.item.isQuestionJapanese,
    // If English, keep it smaller
    "text-lg lg:text-xl": !props.item.isQuestionJapanese,
  }))

  const answerTextClass = createMemo(() => ({
    // If Japanese, make it larger
    "text-xl lg:text-2xl": props.item.isAnswerJapanese,
    // If English, keep it smaller
    "text-base lg:text-lg": !props.item.isAnswerJapanese,
  }))

  return (
    <div class="bg-card group relative overflow-hidden rounded-xl p-5 shadow-md transition-all duration-200 hover:shadow-lg">
      <div class="flex items-start justify-between">
        <div class="flex-1">
          <h3
            class="mb-3 font-bold text-orange-400 saturate-[125%]"
            classList={questionTextClass()}
          >
            {props.item.question}
          </h3>
          <div class="space-y-1.5">
            <p class="text-muted-foreground text-sm font-medium tracking-wider uppercase">
              Answer:
            </p>
            <p class="text-primary font-bold" classList={answerTextClass()}>
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
          <Show when={props.item.isDue}>
            <span class="inline-flex items-center rounded-full bg-amber-500/20 px-2.5 py-1 text-xs font-semibold tracking-wide text-amber-500 uppercase">
              Due
            </span>
          </Show>
          <div class="bg-muted text-muted-foreground flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold">
            {props.index + 1}
          </div>
        </div>
      </div>
      <Show when={props.item.isDue && props.item.due}>
        <div class="text-muted-foreground absolute right-4 bottom-4 text-xs">
          Due:{" "}
          {props.item.due!.toLocaleDateString(undefined, {
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
