// features/learn-page/components/content/WordHierarchy.tsx
import { createMemo, For, Show, Suspense, createResource } from "solid-js"
import { useQueryClient } from "@tanstack/solid-query"
import { useAnimationManager } from "@/hooks/useAnimations"
import { isServer } from "solid-js/web"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Tabs, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { cn } from "@/utils"
import type {
  VocabHierarchy,
  VocabEntry,
  KanjiEntry,
  RadicalEntry,
} from "@/data/wanikani/hierarchy-builder"
import type { VocabularyItem } from "@/data/types"
import type { FSRSCardData } from "@/features/supabase/db/fsrs"
import { extractHiragana } from "@/data/utils/vocab"
import { Route } from "@/routes/_home/learn/$textbookId.$chapterSlug"
import { getDeckBySlug } from "@/data/utils/core"
import { useSettings } from "@/context/SettingsContext"

type WordHierarchyVariant = "mobile" | "desktop"
type ProgressState = "not_seen" | "learning" | "well_known"

// ✅ Local enriched types with progress
type EnrichedVocabEntry = VocabEntry & { progress?: ProgressState }
type EnrichedKanjiEntry = KanjiEntry & { progress?: ProgressState }
type EnrichedRadicalEntry = RadicalEntry & { progress?: ProgressState }

interface WordHierarchyProps {
  variant: WordHierarchyVariant
}

const WELL_KNOWN_THRESHOLD = 21

function determineProgress(
  type: "vocabulary" | "kanji" | "radical",
  slug: string,
  progressRecord: Record<string, FSRSCardData>,
): ProgressState {
  const key = `${type}:${slug}`
  const cardData = progressRecord[key]

  if (!cardData) return "not_seen"

  return cardData.fsrs_card.stability >= WELL_KNOWN_THRESHOLD
    ? "well_known"
    : "learning"
}

function enrichHierarchyWithProgress(
  hierarchyData: VocabHierarchy,
  progressRecord: Record<string, FSRSCardData>,
): {
  vocabulary: EnrichedVocabEntry[]
  kanji: EnrichedKanjiEntry[]
  radicals: EnrichedRadicalEntry[]
  summary: {
    vocab: { total: number; wellKnown: number; learning: number }
    kanji: { total: number; wellKnown: number; learning: number }
    radicals: { total: number; wellKnown: number; learning: number }
  }
} {
  const radicalsWithProgress: EnrichedRadicalEntry[] =
    hierarchyData.radicals.map((radical) => ({
      ...radical,
      progress: determineProgress("radical", radical.radical, progressRecord),
    }))

  const kanjiWithProgress: EnrichedKanjiEntry[] = hierarchyData.kanji.map(
    (kanji) => ({
      ...kanji,
      progress: determineProgress("kanji", kanji.kanji, progressRecord),
    }),
  )

  const vocabWithProgress: EnrichedVocabEntry[] = hierarchyData.vocabulary.map(
    (vocab) => ({
      ...vocab,
      progress: determineProgress("vocabulary", vocab.word, progressRecord),
    }),
  )

  const countProgress = (items: { progress?: ProgressState }[]) => ({
    wellKnown: items.filter((i) => i.progress === "well_known").length,
    learning: items.filter((i) => i.progress === "learning").length,
  })

  const summary = {
    vocab: {
      total: vocabWithProgress.length,
      ...countProgress(vocabWithProgress),
    },
    kanji: {
      total: kanjiWithProgress.length,
      ...countProgress(kanjiWithProgress),
    },
    radicals: {
      total: radicalsWithProgress.length,
      ...countProgress(radicalsWithProgress),
    },
  }

  return {
    vocabulary: vocabWithProgress,
    kanji: kanjiWithProgress,
    radicals: radicalsWithProgress,
    summary,
  }
}

export function WordHierarchy(props: WordHierarchyProps) {
  const loaderData = Route.useLoaderData()
  const queryClient = useQueryClient()
  const { animateOnDataChange } = useAnimationManager()
  const { userPreferences } = useSettings()
  const userId = loaderData().user?.id || null

  const activeDeck = () =>
    getDeckBySlug(loaderData().textbookId, loaderData().chapterSlug)

  const [vocabHierarchyData] = createResource(async () => {
    const data = await loaderData().vocabHierarchy

    // Populate cache for future navigations
    queryClient.setQueryData(
      [
        "vocab-hierarchy",
        activeDeck()?.slug,
        userPreferences?.["override-settings"],
      ],
      data,
    )

    return data
  })

  const [fsrsProgressData] = createResource(
    vocabHierarchyData,
    async (vocabData) => {
      const data = await loaderData().fsrsProgress

      // Populate cache for future navigations
      const slugs = vocabData?.slugs || []
      queryClient.setQueryData(["fsrs-progress", userId, slugs], data)

      return data
    },
  )

  const slugs = () => vocabHierarchyData()?.slugs || []
  const chapterVocabulary = () => vocabHierarchyData()?.chapterVocabulary || []
  const wordHierarchyData = () => vocabHierarchyData()?.wordHierarchyData
  const hasUser = () => !!loaderData().user

  const finalData = () => {
    const hierarchy = wordHierarchyData()
    const progress = fsrsProgressData()

    if (!hierarchy) return null
    if (!hasUser() || !progress) return hierarchy

    return enrichHierarchyWithProgress(hierarchy, progress)
  }

  animateOnDataChange(
    ["[data-word-hierarchy-progress]", "[data-word-hierarchy-content]"],
    () => wordHierarchyData(),
  )

  return (
    <div class="flex flex-col gap-4" data-animate="word-hierarchy">
      <Suspense fallback={<WordHierarchyLoadingFallback />}>
        <Show when={finalData()}>
          <WordHierarchyDisplay
            data={finalData()!}
            chapterVocabulary={chapterVocabulary()}
            variant={props.variant}
            hasUser={hasUser()}
          />
        </Show>
      </Suspense>
    </div>
  )
}

function WordHierarchyLoadingFallback() {
  return (
    <div class="flex flex-col gap-4">
      <div class="text-muted-foreground text-sm">Loading word hierarchy...</div>
    </div>
  )
}

function WordHierarchyDisplay(props: {
  data: {
    vocabulary: EnrichedVocabEntry[]
    kanji: EnrichedKanjiEntry[]
    radicals: EnrichedRadicalEntry[]
    summary?: any
  }
  chapterVocabulary: VocabularyItem[]
  variant: WordHierarchyVariant
  hasUser: boolean
}) {
  return (
    <div class="flex flex-col gap-1">
      <Tabs defaultValue="vocab" class="flex flex-col">
        {/* Progress Circle Triggers */}
        <div
          data-word-hierarchy-progress
          class="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-600/10 to-gray-600/5 p-3 opacity-0 backdrop-blur-sm"
        >
          <div class="grid grid-cols-3 gap-2">
            <ProgressCircleTrigger
              value="vocab"
              label="Vocabulary"
              countLearned={props.data.summary?.vocab.wellKnown || 0}
              countInProgress={props.data.summary?.vocab.learning || 0}
              total={props.data.summary?.vocab.total || 0}
              colorLearned="text-sky-400"
              colorInProgress="text-sky-600"
              hasProgress={props.hasUser}
            />
            <ProgressCircleTrigger
              value="kanji"
              label="Kanji"
              countLearned={props.data.summary?.kanji.wellKnown || 0}
              countInProgress={props.data.summary?.kanji.learning || 0}
              total={props.data.summary?.kanji.total || 0}
              colorLearned="text-pink-400"
              colorInProgress="text-pink-600"
              hasProgress={props.hasUser}
              dataTour="vocab-trigger"
            />
            <ProgressCircleTrigger
              value="radicals"
              label="Radicals"
              countLearned={props.data.summary?.radicals.wellKnown || 0}
              countInProgress={props.data.summary?.radicals.learning || 0}
              total={props.data.summary?.radicals.total || 0}
              colorLearned="text-teal-400"
              colorInProgress="text-teal-600"
              hasProgress={props.hasUser}
            />
          </div>
        </div>

        {/* Tab Content */}
        <TabsContent
          value="vocab"
          data-word-hierarchy-content
          class="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-600/10 to-gray-600/5 py-4 pr-1.5 pl-4 opacity-0 backdrop-blur-sm"
        >
          <VocabularyList
            hierarchy={props.data.vocabulary}
            chapterVocabulary={props.chapterVocabulary}
            variant={props.variant}
          />
        </TabsContent>

        <TabsContent
          value="kanji"
          data-word-hierarchy-content
          class="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-600/10 to-gray-600/5 p-4 backdrop-blur-sm"
        >
          <CharacterList
            title="Kanji"
            items={props.data.kanji}
            variant={props.variant}
          />
        </TabsContent>

        <TabsContent
          value="radicals"
          data-word-hierarchy-content
          class="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-600/10 to-gray-600/5 p-4 backdrop-blur-sm"
        >
          <CharacterList
            title="Radicals"
            items={props.data.radicals}
            variant={props.variant}
          />
        </TabsContent>
      </Tabs>
    </div>
  )
}

function ProgressCircleTrigger(props: {
  value: string
  label: string
  countLearned: number
  countInProgress: number
  total: number
  colorLearned: string
  colorInProgress: string
  hasProgress?: boolean
  dataTour?: string
}) {
  const radius = 24
  const circumference = 2 * Math.PI * radius

  const progressLearned = () =>
    props.total > 0 ? props.countLearned / props.total : 0
  const progressTotal = () =>
    props.total > 0
      ? (props.countLearned + props.countInProgress) / props.total
      : 0
  const offsetLearned = () => circumference * (1 - progressLearned())
  const offsetTotal = () => circumference * (1 - progressTotal())
  const seenCount = () => props.countLearned + props.countInProgress

  return (
    <HoverCard openDelay={200}>
      <HoverCardTrigger as="div">
        <TabsTrigger
          value={props.value}
          data-tour={props.dataTour}
          class="flex h-auto w-full flex-col items-center gap-0.5 rounded-xl p-1.5 hover:bg-white/5 data-[selected]:bg-white/5"
        >
          <div class="relative h-15 w-15">
            <svg class="h-full w-full" viewBox="0 0 56 56">
              <circle
                class="text-muted-foreground/10"
                stroke-width="5"
                stroke="currentColor"
                fill="transparent"
                r={radius}
                cx="28"
                cy="28"
              />
              <Show when={props.hasProgress}>
                <circle
                  class={props.colorInProgress}
                  stroke-width="5"
                  stroke-dasharray={circumference}
                  stroke-dashoffset={offsetTotal()}
                  stroke-linecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r={radius}
                  cx="28"
                  cy="28"
                  style={{
                    transform: "rotate(-90deg)",
                    "transform-origin": "50% 50%",
                    transition: "stroke-dashoffset 0.5s ease-out",
                  }}
                />
                <circle
                  class={props.colorLearned}
                  stroke-width="5"
                  stroke-dasharray={circumference}
                  stroke-dashoffset={offsetLearned()}
                  stroke-linecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r={radius}
                  cx="28"
                  cy="28"
                  style={{
                    transform: "rotate(-90deg)",
                    "transform-origin": "50% 50%",
                    transition: "stroke-dashoffset 0.5s ease-out",
                  }}
                />
              </Show>
            </svg>
            <div class="absolute inset-0 flex flex-col items-center justify-center">
              <Show
                when={props.hasProgress}
                fallback={
                  <span class="text-base font-bold">{props.total}</span>
                }
              >
                <span class="pt-0.5 text-base leading-4 font-bold">
                  {seenCount()}
                </span>
                <span class="text-muted-foreground text-[10px]">
                  /{props.total}
                </span>
              </Show>
            </div>
          </div>
          <span class="text-muted-foreground pt-1 text-sm font-medium">
            {props.label}
          </span>
        </TabsTrigger>
      </HoverCardTrigger>
      <Show when={!isServer}>
        <HoverCardContent class="border-card-foreground w-auto bg-neutral-950/70 px-3 py-2 text-sm backdrop-blur-2xl">
          <Show when={props.hasProgress} fallback={<p>Total: {props.total}</p>}>
            <div class="flex flex-col gap-1">
              <p>
                Seen: {seenCount()} / {props.total}
              </p>
              <p>
                Well-known: {props.countLearned} / {props.total}
              </p>
            </div>
          </Show>
        </HoverCardContent>
      </Show>
    </HoverCard>
  )
}

function CharacterList(props: {
  title: string
  items: (EnrichedKanjiEntry | EnrichedRadicalEntry)[]
  variant: WordHierarchyVariant
}) {
  return (
    <div
      class={cn(
        "overflow-y-auto",
        props.variant === "desktop" ? "max-h-[calc(100vh-437px)]" : "h-full",
      )}
    >
      <div class="flex flex-wrap content-start justify-center gap-1.5">
        <For each={props.items}>
          {(item) => (
            <CharBox
              item={{ ...item, progress: item.progress || "not_seen" }}
              variant={props.variant}
            />
          )}
        </For>
      </div>
    </div>
  )
}

function CharBox(props: {
  item: EnrichedKanjiEntry | EnrichedRadicalEntry
  variant: WordHierarchyVariant
}) {
  return (
    <Show when={"kanji" in props.item || "radical" in props.item}>
      <HoverCard openDelay={200}>
        <HoverCardTrigger as="div">
          <div
            class={cn(
              "flex items-center justify-center rounded-lg border transition-colors hover:cursor-pointer",
              props.variant === "desktop" ? "h-8 w-8" : "h-10 w-10",
              {
                "bg-muted/40": props.item.progress === "not_seen",
                "bg-amber-400/10": props.item.progress === "learning",
                "bg-teal-400/10": props.item.progress === "well_known",
              },
              {
                "border-card-foreground": props.item.progress === "not_seen",
                "border-amber-400/50": props.item.progress === "learning",
                "border-teal-400/50": props.item.progress === "well_known",
              },
            )}
          >
            <span
              class={cn(
                "font-bold",
                props.variant === "desktop" ? "text-sm" : "text-lg",
                {
                  "text-muted-foreground": props.item.progress === "not_seen",
                  "text-amber-300": props.item.progress === "learning",
                  "text-teal-300": props.item.progress === "well_known",
                },
              )}
            >
              {"kanji" in props.item
                ? props.item.kanji
                : (props.item as EnrichedRadicalEntry).radical}
            </span>
          </div>
        </HoverCardTrigger>
        <Show when={!isServer}>
          <HoverCardContent class="border-card-foreground w-auto bg-neutral-950/70 px-3 py-1.5 text-sm backdrop-blur-2xl">
            <span>{props.item.meanings.join(", ")}</span>
          </HoverCardContent>
        </Show>
      </HoverCard>
    </Show>
  )
}

function VocabularyList(props: {
  hierarchy: EnrichedVocabEntry[]
  chapterVocabulary: VocabularyItem[]
  variant: WordHierarchyVariant
}) {
  const vocabMap = createMemo(
    () => new Map(props.chapterVocabulary.map((item) => [item.word, item])),
  )

  return (
    <div
      class={cn(
        "flex flex-col pr-2.5",
        props.variant === "desktop"
          ? "max-h-[calc(100vh-437px)] overflow-y-auto"
          : "h-full overflow-y-auto",
      )}
    >
      <div class="flex flex-col gap-1.5">
        <For each={props.hierarchy}>
          {(vocabItem, index) => {
            const vocab = vocabMap().get(vocabItem.word)
            const englishMeanings = vocab?.english || []
            const hiraganaReading = vocab
              ? extractHiragana(vocab.furigana)
              : undefined

            return (
              <VocabularyRow
                number={index() + 1}
                japanese={vocabItem.word}
                english={englishMeanings.join(", ")}
                progress={vocabItem.progress || "not_seen"}
                hiragana={hiraganaReading}
              />
            )
          }}
        </For>
      </div>
    </div>
  )
}

function VocabularyRow(props: {
  number: number
  japanese: string
  english: string
  progress: ProgressState
  hiragana?: string
}) {
  const shouldShowHiragana = props.hiragana && props.hiragana !== props.japanese

  return (
    <div
      class={cn("flex items-center rounded-lg px-2 py-1.5 transition-colors", {
        "bg-muted/40": props.progress === "not_seen",
        "bg-amber-400/10": props.progress === "learning",
        "bg-teal-400/10": props.progress === "well_known",
      })}
    >
      <span class="text-muted-foreground w-6 flex-shrink-0 text-[11px]">
        {props.number}.
      </span>
      <div
        class={cn(
          "flex-shrink-0",
          shouldShowHiragana ? "w-20 min-w-20" : "w-48 min-w-20",
        )}
      >
        <span
          class={cn("text-sm font-medium", {
            "text-muted-foreground": props.progress === "not_seen",
            "text-amber-300": props.progress === "learning",
            "text-teal-300": props.progress === "well_known",
          })}
        >
          {props.japanese}
        </span>
      </div>
      <div
        class={cn(
          "flex-shrink-0",
          shouldShowHiragana ? "w-20 max-w-24 min-w-16" : "w-0",
        )}
      >
        {shouldShowHiragana && (
          <span class="text-muted-foreground text-xs font-medium">
            {props.hiragana}
          </span>
        )}
      </div>
      <span class="text-muted-foreground flex-1 text-right text-xs">
        {props.english}
      </span>
    </div>
  )
}
