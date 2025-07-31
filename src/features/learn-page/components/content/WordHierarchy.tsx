// features/learn-page/components/content/WordHierarchy.tsx
import { createMemo, createResource, For, Show, createEffect } from "solid-js"
import { useLearnPageData } from "../../context/LearnPageDataContext"
import { isServer } from "solid-js/web"
import { useLocation } from "@tanstack/solid-router"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Tabs, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { cn } from "@/utils"
import { usePageTransition } from "@/context/TransitionContext"
import {
  createSlideWithFadeInAnimation,
  prepareElementForEnter,
} from "@/utils/animations"
import type {
  FullHierarchyData,
  Kanji,
  Radical,
  VocabHierarchy,
  ProgressState,
} from "@/data/wanikani/types"
import type { VocabularyItem } from "@/data/types"
import type { User } from "@supabase/supabase-js"
import type { FSRSCardData } from "@/features/supabase/db/fsrs-operations"
import { extractHiragana } from "@/data/utils/vocab"

type WordHierarchyVariant = "mobile" | "desktop"

interface WordHierarchyProps {
  variant: WordHierarchyVariant
  user: User | null
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
  hierarchyData: FullHierarchyData,
  progressRecord: Record<string, FSRSCardData>,
): FullHierarchyData {
  const radicalsWithProgress = hierarchyData.uniqueRadicals.map((radical) => ({
    ...radical,
    progress: determineProgress("radical", radical.slug, progressRecord),
  }))
  const radicalsProgressMap = new Map(
    radicalsWithProgress.map((r) => [r.id, r]),
  )

  const kanjiWithProgress = hierarchyData.uniqueKanji.map((kanji) => ({
    ...kanji,
    progress: determineProgress("kanji", kanji.slug, progressRecord),
    radicals: kanji.radicals.map((r) => radicalsProgressMap.get(r.id) || r),
  }))
  const kanjiProgressMap = new Map(kanjiWithProgress.map((k) => [k.id, k]))

  const hierarchyWithProgress = hierarchyData.hierarchy.map((vocab) => ({
    ...vocab,
    progress: determineProgress("vocabulary", vocab.slug, progressRecord),
    kanji: vocab.kanji.map((k) => kanjiProgressMap.get(k.id) || k),
  }))

  const countProgress = (items: { progress?: ProgressState }[]) => ({
    wellKnown: items.filter((i) => i.progress === "well_known").length,
    learning: items.filter((i) => i.progress === "learning").length,
  })

  const summary = {
    vocab: {
      total: hierarchyWithProgress.length,
      ...countProgress(hierarchyWithProgress),
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
    hierarchy: hierarchyWithProgress,
    uniqueKanji: kanjiWithProgress,
    uniqueRadicals: radicalsWithProgress,
    summary,
  }
}

export function WordHierarchy(props: WordHierarchyProps) {
  const location = useLocation()
  const { shouldAnimate, animationTrigger } = usePageTransition()
  const { wordHierarchyData, chapterVocabulary, fsrsProgressData } =
    useLearnPageData()

  const [progressResource] = createResource(
    () => (props.user ? fsrsProgressData : null),
    (promise) => promise,
  )

  // Animation effect for blurred boxes
  createEffect(() => {
    animationTrigger()
    if (location().pathname.includes("/learn") && shouldAnimate()) {
      requestAnimationFrame(() => {
        if (props.variant === "desktop") {
          const topElement = document.querySelector(
            "[data-word-hierarchy-progress]",
          ) as HTMLElement
          const bottomElement = document.querySelector(
            "[data-word-hierarchy-content]",
          ) as HTMLElement

          if (topElement) {
            prepareElementForEnter(topElement, "right", true)
            setTimeout(() => {
              createSlideWithFadeInAnimation(topElement, "right", {
                withOpacity: true,
              })
            }, 100)
          }

          if (bottomElement) {
            prepareElementForEnter(bottomElement, "right", true)
            setTimeout(() => {
              createSlideWithFadeInAnimation(bottomElement, "right", {
                withOpacity: true,
              })
            }, 200)
          }
        } else if (props.variant === "mobile") {
          const mobileProgressElement = document.querySelector(
            "[data-word-hierarchy-progress]",
          ) as HTMLElement
          const mobileContentElement = document.querySelector(
            "[data-word-hierarchy-content]",
          ) as HTMLElement

          if (mobileProgressElement) {
            prepareElementForEnter(mobileProgressElement, "right", true)
            createSlideWithFadeInAnimation(mobileProgressElement, "right", {
              withOpacity: true,
            })
          }

          if (mobileContentElement) {
            prepareElementForEnter(mobileContentElement, "right", true)
            setTimeout(() => {
              createSlideWithFadeInAnimation(mobileContentElement, "right", {
                withOpacity: true,
              })
            }, 100)
          }
        }
      })
    }
  })

  const finalData = () => {
    const hierarchy = wordHierarchyData
    const progress = progressResource()

    if (!hierarchy) return null
    // Only enrich if we have both user AND completed progress data
    if (!props.user || !progress) return hierarchy

    return enrichHierarchyWithProgress(hierarchy, progress)
  }

  return (
    <div class="flex flex-col gap-4">
      <Show when={finalData()}>
        <WordHierarchyDisplay
          data={finalData()!}
          chapterVocabulary={chapterVocabulary}
          variant={props.variant}
          user={props.user}
        />
      </Show>
    </div>
  )
}

function WordHierarchyDisplay(props: {
  data: FullHierarchyData
  chapterVocabulary: VocabularyItem[]
  variant: WordHierarchyVariant
  user: User | null
}) {
  return (
    <div class="flex flex-col gap-1">
      {/* Tabs with progress circles as triggers */}
      <Tabs defaultValue="vocab" class="flex flex-col">
        {/* Progress Circle Triggers */}
        <div
          data-word-hierarchy-progress
          class="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-600/10 to-gray-600/5 p-3 backdrop-blur-sm"
        >
          <div class="grid grid-cols-3 gap-2">
            <ProgressCircleTrigger
              value="vocab"
              label="Vocabulary"
              countLearned={props.data.summary!.vocab.wellKnown}
              countInProgress={props.data.summary!.vocab.learning}
              total={props.data.summary!.vocab.total}
              colorLearned="text-sky-400"
              colorInProgress="text-sky-600"
              hasProgress={!!props.user}
            />
            <ProgressCircleTrigger
              value="kanji"
              label="Kanji"
              countLearned={props.data.summary!.kanji.wellKnown}
              countInProgress={props.data.summary!.kanji.learning}
              total={props.data.summary!.kanji.total}
              colorLearned="text-pink-400"
              colorInProgress="text-pink-600"
              hasProgress={!!props.user}
            />
            <ProgressCircleTrigger
              value="radicals"
              label="Radicals"
              countLearned={props.data.summary!.radicals.wellKnown}
              countInProgress={props.data.summary!.radicals.learning}
              total={props.data.summary!.radicals.total}
              colorLearned="text-teal-400"
              colorInProgress="text-teal-600"
              hasProgress={!!props.user}
            />
          </div>
        </div>

        {/* Tab Content with blurred background */}
        <TabsContent
          value="vocab"
          data-word-hierarchy-content
          class="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-600/10 to-gray-600/5 py-4 pr-1.5 pl-4 backdrop-blur-sm"
        >
          <VocabularyList
            hierarchy={props.data.hierarchy}
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
            items={props.data.uniqueKanji}
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
            items={props.data.uniqueRadicals}
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
  items: (Kanji | Radical)[]
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
  item: Kanji | Radical
  variant: WordHierarchyVariant
}) {
  return (
    <Show when={props.item.characters}>
      <HoverCard openDelay={200}>
        <HoverCardTrigger as="div">
          <div
            class={cn(
              "flex items-center justify-center rounded-lg border transition-colors hover:cursor-pointer",
              // Size based on variant
              props.variant === "desktop" ? "h-8 w-8" : "h-10 w-10",
              // Background colors
              {
                "bg-muted/40": props.item.progress === "not_seen",
                "bg-amber-400/10": props.item.progress === "learning",
                "bg-teal-400/10": props.item.progress === "well_known",
              },
              // Border colors (now applied to both desktop and mobile)
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
              {props.item.characters}
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
  hierarchy: VocabHierarchy[]
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
            const vocab = vocabMap().get(vocabItem.characters)
            const englishMeanings = vocab?.english || []

            const hiraganaReading = vocab
              ? extractHiragana(vocab.furigana)
              : undefined

            return (
              <VocabularyRow
                number={index() + 1}
                japanese={vocabItem.characters}
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
  // Only show hiragana if it's different from the Japanese
  const shouldShowHiragana = props.hiragana && props.hiragana !== props.japanese

  return (
    <div
      class={cn("flex items-center rounded-lg px-2 py-1.5 transition-colors", {
        "bg-muted/40": props.progress === "not_seen",
        "bg-amber-400/10": props.progress === "learning",
        "bg-teal-400/10": props.progress === "well_known",
      })}
    >
      {/* Number */}
      <span class="text-muted-foreground w-6 flex-shrink-0 text-[11px]">
        {props.number}.
      </span>

      {/* Japanese column */}
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

      {/* Hiragana column (center) */}
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

      {/* English column - takes remaining space */}
      <span class="text-muted-foreground flex-1 text-right text-xs">
        {props.english}
      </span>
    </div>
  )
}
