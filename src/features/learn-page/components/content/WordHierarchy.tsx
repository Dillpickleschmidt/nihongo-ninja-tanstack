// features/learn-page/components/content/WordHierarchy.tsx
import { For, Show, Suspense, createSignal, createEffect, on } from "solid-js"
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
import { useRouteContext } from "@tanstack/solid-router"
import { Route as RootRoute } from "@/routes/__root"
import { useLearnPageContext } from "@/features/learn-page/context/LearnPageContext"

type WordHierarchyVariant = "mobile" | "desktop"
type ProgressState = "not_seen" | "learning" | "well_known"

// Local enriched types with progress
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

  return {
    vocabulary: vocabWithProgress,
    kanji: kanjiWithProgress,
    radicals: radicalsWithProgress,
  }
}

export function WordHierarchy(props: WordHierarchyProps) {
  const context = useRouteContext({ from: RootRoute.id })
  const { vocabHierarchyQuery, fsrsProgressQuery } = useLearnPageContext()
  const { animateOnDataChange } = useAnimationManager()
  const hasUser = !!context().user

  const vocabData = () => vocabHierarchyQuery.data!

  // Compute final data
  const enrichedData = () => {
    const hierarchy = vocabData().wordHierarchyData
    if (!hierarchy) {
      return null
    }

    const progress = fsrsProgressQuery.data
    if (hasUser && progress) {
      return enrichHierarchyWithProgress(hierarchy, progress)
    }

    // Return hierarchy without progress data
    return {
      vocabulary: hierarchy.vocabulary,
      kanji: hierarchy.kanji,
      radicals: hierarchy.radicals,
    }
  }

  const chapterVocabulary = () => vocabData().chapterVocabulary

  animateOnDataChange(
    ["[data-word-hierarchy-progress]", "[data-word-hierarchy-content]"],
    () => true, // Always trigger - boxes exist immediately
  )

  return (
    <div class="flex flex-col gap-4">
      <WordHierarchyDisplay
        enrichedData={enrichedData}
        chapterVocabulary={chapterVocabulary}
        variant={props.variant}
        hasUser={hasUser}
      />
    </div>
  )
}

function WordHierarchyDisplay(props: {
  enrichedData: () => {
    vocabulary: EnrichedVocabEntry[]
    kanji: EnrichedKanjiEntry[]
    radicals: EnrichedRadicalEntry[]
  } | null
  chapterVocabulary: () => VocabularyItem[]
  variant: WordHierarchyVariant
  hasUser: boolean
}) {
  const vocabCounts = () => {
    const items = props.enrichedData()?.vocabulary || []
    return {
      total: items.length,
      wellKnown: items.filter((i) => i.progress === "well_known").length,
      learning: items.filter((i) => i.progress === "learning").length,
    }
  }

  const kanjiCounts = () => {
    const items = props.enrichedData()?.kanji || []
    return {
      total: items.length,
      wellKnown: items.filter((i) => i.progress === "well_known").length,
      learning: items.filter((i) => i.progress === "learning").length,
    }
  }

  const radicalsCounts = () => {
    const items = props.enrichedData()?.radicals || []
    return {
      total: items.length,
      wellKnown: items.filter((i) => i.progress === "well_known").length,
      learning: items.filter((i) => i.progress === "learning").length,
    }
  }

  return (
    <div class="flex flex-col gap-1">
      <Tabs defaultValue="vocab" class="flex flex-col">
        {/* Progress Circles */}
        <div
          data-word-hierarchy-progress
          class="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-600/10 to-gray-600/5 p-3 opacity-0 backdrop-blur-sm"
        >
          <div class="grid grid-cols-3 gap-2">
            <Suspense
              fallback={
                <ProgressCircleTrigger
                  value="vocab"
                  label="Vocabulary"
                  countLearned={0}
                  countInProgress={0}
                  total={0}
                  colorLearned="text-sky-400"
                  colorInProgress="text-sky-600"
                  hasProgress={props.hasUser}
                />
              }
            >
              <ProgressCircleTrigger
                value="vocab"
                label="Vocabulary"
                countLearned={vocabCounts().wellKnown}
                countInProgress={vocabCounts().learning}
                total={vocabCounts().total}
                colorLearned="text-sky-400"
                colorInProgress="text-sky-600"
                hasProgress={props.hasUser}
              />
            </Suspense>
            <Suspense
              fallback={
                <ProgressCircleTrigger
                  value="kanji"
                  label="Kanji"
                  countLearned={0}
                  countInProgress={0}
                  total={0}
                  colorLearned="text-pink-400"
                  colorInProgress="text-pink-600"
                  hasProgress={props.hasUser}
                  dataTour="vocab-trigger"
                />
              }
            >
              <ProgressCircleTrigger
                value="kanji"
                label="Kanji"
                countLearned={kanjiCounts().wellKnown}
                countInProgress={kanjiCounts().learning}
                total={kanjiCounts().total}
                colorLearned="text-pink-400"
                colorInProgress="text-pink-600"
                hasProgress={props.hasUser}
                dataTour="vocab-trigger"
              />
            </Suspense>
            <Suspense
              fallback={
                <ProgressCircleTrigger
                  value="radicals"
                  label="Radicals"
                  countLearned={0}
                  countInProgress={0}
                  total={0}
                  colorLearned="text-teal-400"
                  colorInProgress="text-teal-600"
                  hasProgress={props.hasUser}
                />
              }
            >
              <ProgressCircleTrigger
                value="radicals"
                label="Radicals"
                countLearned={radicalsCounts().wellKnown}
                countInProgress={radicalsCounts().learning}
                total={radicalsCounts().total}
                colorLearned="text-teal-400"
                colorInProgress="text-teal-600"
                hasProgress={props.hasUser}
              />
            </Suspense>
          </div>
        </div>

        {/* Word/Kanji/Radical Content */}
        <div
          class="mt-2 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-600/10 to-gray-600/5 py-4 pr-1.5 pl-4 opacity-0 backdrop-blur-sm"
          data-word-hierarchy-content
        >
          <TabsContent value="vocab">
            <Show when={props.enrichedData()}>
              {(data) => (
                <VocabularyList
                  hierarchy={data().vocabulary}
                  chapterVocabulary={props.chapterVocabulary()}
                  variant={props.variant}
                />
              )}
            </Show>
          </TabsContent>

          <TabsContent value="kanji">
            <Show when={props.enrichedData()}>
              {(data) => (
                <CharacterList
                  title="Kanji"
                  items={data().kanji}
                  variant={props.variant}
                />
              )}
            </Show>
          </TabsContent>

          <TabsContent value="radicals">
            <Show when={props.enrichedData()}>
              {(data) => (
                <CharacterList
                  title="Radicals"
                  items={data().radicals}
                  variant={props.variant}
                />
              )}
            </Show>
          </TabsContent>
        </div>
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

  // Animated offsets (start at circumference = 0% progress)
  const [animatedOffsetLearned, setAnimatedOffsetLearned] =
    createSignal(circumference)
  const [animatedOffsetTotal, setAnimatedOffsetTotal] =
    createSignal(circumference)

  // Animate to final values when data changes
  createEffect(
    on(
      () => [props.countLearned, props.countInProgress, props.total],
      () => {
        requestAnimationFrame(() => {
          setAnimatedOffsetLearned(offsetLearned())
          setAnimatedOffsetTotal(offsetTotal())
        })
      },
    ),
  )

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
                  stroke-dashoffset={animatedOffsetTotal()}
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
                  stroke-dashoffset={animatedOffsetLearned()}
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
      <Suspense
        fallback={
          <div class="text-muted-foreground text-sm">
            Loading {props.title.toLowerCase()}...
          </div>
        }
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
      </Suspense>
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
  const vocabMap = () =>
    new Map(props.chapterVocabulary.map((item) => [item.word, item]))

  return (
    <div
      class={cn(
        "flex flex-col pr-2.5",
        props.variant === "desktop"
          ? "max-h-[calc(100vh-437px)] overflow-y-auto"
          : "h-full overflow-y-auto",
      )}
    >
      <Suspense
        fallback={
          <div class="text-muted-foreground text-sm">Loading vocabulary...</div>
        }
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
      </Suspense>
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
