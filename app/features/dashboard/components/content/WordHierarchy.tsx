// features/dashboard/components/content/WordHierarchy.tsx
import { For, Match, Show, Switch } from "solid-js"
import { createMediaQuery } from "@solid-primitives/media"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { cn } from "@/utils"
import type {
  FullHierarchyData,
  Kanji,
  Radical,
  VocabHierarchy,
  ProgressState,
} from "@/data/wanikani/types"
import type { VocabularyItem } from "@/data/types"
import { User } from "@supabase/supabase-js"

type WordHierarchyVariant = "mobile" | "desktop"

interface WordHierarchyProps {
  data: FullHierarchyData | null
  vocabularyItems: VocabularyItem[]
  variant: WordHierarchyVariant
  user: User | null
}

export function WordHierarchy(props: WordHierarchyProps) {
  return (
    <div class="flex flex-col gap-4">
      <Show
        when={props.data}
        fallback={
          <div class="text-muted-foreground bg-card rounded-lg p-4 text-center">
            Loading Progress Data...
          </div>
        }
      >
        {(data) => (
          <Switch>
            <Match when={props.variant === "desktop"}>
              <div class="relative h-[420px] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-600/10 to-gray-600/5 py-4 pr-1 pl-4 backdrop-blur-sm">
                <div class="flex h-full flex-col gap-4">
                  <div class="flex gap-x-4">
                    <div class="flex w-[58%] flex-col gap-3">
                      <SummaryCircles data={data()} user={props.user} />
                      <CharacterList
                        title="Kanji"
                        items={data().uniqueKanji}
                        variant="desktop"
                        maxHeight="max-h-[265px]"
                      />
                    </div>
                    <div class="w-[42%]">
                      <CharacterList
                        title="Radicals"
                        items={data().uniqueRadicals}
                        variant="desktop"
                        maxHeight="max-h-[365px]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="-mt-2 min-h-0 flex-1">
                <div class="relative h-[calc(100vh-738px)] min-h-64 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-600/10 to-gray-600/5 py-4 pr-1 pl-4 backdrop-blur-sm">
                  <VocabularyList
                    hierarchy={data().hierarchy}
                    vocabularyItems={props.vocabularyItems}
                  />
                </div>
              </div>
            </Match>

            <Match when={props.variant === "mobile"}>
              <div class="py-2">
                <SummaryCircles data={data()} user={props.user} />
              </div>
              <CharacterList
                title="Kanji"
                items={data().uniqueKanji}
                variant="mobile"
              />
              <CharacterList
                title="Radicals"
                items={data().uniqueRadicals}
                variant="mobile"
              />

              {/* Mobile Vocabulary Section */}
              <VocabularyList
                hierarchy={data().hierarchy}
                vocabularyItems={props.vocabularyItems}
              />
            </Match>
          </Switch>
        )}
      </Show>
    </div>
  )
}

function SummaryCircles(props: { data: FullHierarchyData; user: User | null }) {
  return (
    <div class="grid grid-cols-3 gap-3">
      <ProgressCircle
        label="Vocabulary"
        countLearned={props.data.summary!.vocab.wellKnown}
        countInProgress={props.data.summary!.vocab.learning}
        total={props.data.summary!.vocab.total}
        colorLearned="text-sky-400"
        colorInProgress="text-sky-600"
        hasProgress={!!props.user}
      />
      <ProgressCircle
        label="Kanji"
        countLearned={props.data.summary!.kanji.wellKnown}
        countInProgress={props.data.summary!.kanji.learning}
        total={props.data.summary!.kanji.total}
        colorLearned="text-pink-400"
        colorInProgress="text-pink-600"
        hasProgress={!!props.user}
      />
      <ProgressCircle
        label="Radicals"
        countLearned={props.data.summary!.radicals.wellKnown}
        countInProgress={props.data.summary!.radicals.learning}
        total={props.data.summary!.radicals.total}
        colorLearned="text-teal-400"
        colorInProgress="text-teal-600"
        hasProgress={!!props.user}
      />
    </div>
  )
}

function ProgressCircle(props: {
  label: string
  countLearned: number
  countInProgress: number
  total: number
  colorLearned: string
  colorInProgress: string
  hasProgress?: boolean
}) {
  const radius = 28
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
        <div class="flex flex-col items-center gap-1">
          <div class="relative h-16 w-16">
            <svg class="h-full w-full" viewBox="0 0 64 64">
              <circle
                class="text-muted-foreground/10"
                stroke-width="6"
                stroke="currentColor"
                fill="transparent"
                r={radius}
                cx="32"
                cy="32"
              />
              {/* Only show progress circles if user has progress data */}
              <Show when={props.hasProgress}>
                <circle
                  class={props.colorInProgress}
                  stroke-width="6"
                  stroke-dasharray={circumference}
                  stroke-dashoffset={offsetTotal()}
                  stroke-linecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r={radius}
                  cx="32"
                  cy="32"
                  style={{
                    transform: "rotate(-90deg)",
                    "transform-origin": "50% 50%",
                    transition: "stroke-dashoffset 0.5s ease-out",
                  }}
                />
                <circle
                  class={props.colorLearned}
                  stroke-width="6"
                  stroke-dasharray={circumference}
                  stroke-dashoffset={offsetLearned()}
                  stroke-linecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r={radius}
                  cx="32"
                  cy="32"
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
                fallback={<span class="text-lg font-bold">{props.total}</span>}
              >
                <span class="pt-0.5 text-lg leading-5 font-bold">
                  {props.countLearned}
                </span>
                <span class="text-muted-foreground text-xs">
                  /{props.total}
                </span>
              </Show>
            </div>
          </div>
          <span class="text-muted-foreground text-sm font-medium">
            {props.label}
          </span>
        </div>
      </HoverCardTrigger>
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
    </HoverCard>
  )
}

function CharacterList(props: {
  title: string
  items: (Kanji | Radical)[]
  variant: WordHierarchyVariant
  maxHeight?: string
}) {
  return (
    <div class="flex flex-col">
      <h3 class="text-muted-foreground mb-2 text-xs font-semibold">
        {props.title}
      </h3>
      <div
        class={cn(
          "flex flex-wrap content-start gap-1.5 overflow-y-auto pr-3",
          props.variant === "desktop" && props.maxHeight,
        )}
      >
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
      <Switch>
        <Match when={props.variant === "desktop"}>
          <HoverCard openDelay={200}>
            <HoverCardTrigger as="div">
              <div
                class={cn(
                  "flex h-8 w-8 items-center justify-center rounded-lg transition-colors hover:cursor-pointer",
                  {
                    "bg-muted/40": props.item.progress === "not_seen",
                    "bg-amber-400/10": props.item.progress === "learning",
                    "bg-teal-400/10": props.item.progress === "well_known",
                  },
                )}
              >
                <span
                  class={cn("text-sm font-bold", {
                    "text-muted-foreground": props.item.progress === "not_seen",
                    "text-amber-300": props.item.progress === "learning",
                    "text-teal-300": props.item.progress === "well_known",
                  })}
                >
                  {props.item.characters}
                </span>
              </div>
            </HoverCardTrigger>
            <HoverCardContent class="border-card-foreground w-auto bg-neutral-950/70 px-3 py-1.5 text-sm backdrop-blur-2xl">
              <span>{props.item.meanings.join(", ")}</span>
            </HoverCardContent>
          </HoverCard>
        </Match>

        <Match when={props.variant === "mobile"}>
          <div
            class="border-card-foreground inline-flex h-10 w-10 items-center justify-center rounded-md border text-lg font-bold transition-colors"
            classList={{
              "border-card-foreground bg-muted/30 text-muted-foreground":
                props.item.progress === "not_seen",
              "border-amber-400/50 bg-amber-400/10 text-amber-300":
                props.item.progress === "learning",
              "border-teal-400/50 bg-teal-400/10 text-teal-300":
                props.item.progress === "well_known",
            }}
          >
            {props.item.characters}
          </div>
        </Match>
      </Switch>
    </Show>
  )
}

function VocabularyList(props: {
  hierarchy: VocabHierarchy[]
  vocabularyItems: VocabularyItem[]
}) {
  const vocabMap = new Map(
    props.vocabularyItems.map((item) => [item.word, item]),
  )

  return (
    <div class="flex h-full flex-col overflow-y-auto pr-3">
      <div class="flex flex-col gap-1.5">
        <For each={props.hierarchy}>
          {(vocabItem, index) => {
            const vocab = vocabMap.get(vocabItem.characters)
            const englishMeanings = vocab?.english || []

            return (
              <VocabularyRow
                number={index() + 1}
                japanese={vocabItem.characters}
                english={englishMeanings.join(", ")}
                progress={vocabItem.progress || "not_seen"}
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
}) {
  return (
    <div
      class={cn("flex items-center rounded-lg px-2 py-1.5 transition-colors", {
        "bg-muted/40": props.progress === "not_seen",
        "bg-amber-400/10": props.progress === "learning",
        "bg-teal-400/10": props.progress === "well_known",
      })}
    >
      <div class="space-x-2">
        <span class="text-muted-foreground text-[11px]">{props.number}.</span>
        <span
          class={cn("flex-shrink-0 text-sm font-medium", {
            "text-muted-foreground": props.progress === "not_seen",
            "text-amber-300": props.progress === "learning",
            "text-teal-300": props.progress === "well_known",
          })}
        >
          {props.japanese}
        </span>
      </div>
      <span class="text-muted-foreground flex-1 text-right text-xs">
        {props.english}
      </span>
    </div>
  )
}
