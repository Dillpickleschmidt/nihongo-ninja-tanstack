// features/dashboard/components/WordHierarchy.tsx
import { For, Match, Show, Switch } from "solid-js"
import type { FullHierarchyData, Kanji, Radical } from "@/data/wanikani/utils"

type ProgressState = "learned" | "in_progress" | "not_learned"
type WordHierarchyVariant = "mobile" | "desktop"

interface WordHierarchyProps {
  data: FullHierarchyData | null
  variant: WordHierarchyVariant
}

/**
 * The main component for displaying the word hierarchy widget.
 * Renders two distinct layouts for mobile and desktop using a 'variant' prop.
 */
export function WordHierarchy(props: WordHierarchyProps) {
  return (
    <div class="flex flex-col gap-4 px-7">
      <Show when={props.variant === "desktop"}>
        <h2 class="text-xl font-semibold">Your Progress</h2>
      </Show>
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
            {/* Desktop Layout */}
            <Match when={props.variant === "desktop"}>
              <div class="grid grid-cols-[3fr_2fr] gap-x-8">
                <div class="flex flex-col gap-4">
                  <SummaryCircles data={data()} />
                  <CharacterList
                    title="Kanji"
                    items={data().uniqueKanji}
                    variant="desktop"
                  />
                </div>
                <CharacterList
                  title="Radicals"
                  items={data().uniqueRadicals}
                  variant="desktop"
                  isTall={true}
                />
              </div>
            </Match>

            {/* Mobile Layout */}
            <Match when={props.variant === "mobile"}>
              <div class="mb-8 flex flex-col gap-3">
                <div class="py-2">
                  <SummaryCircles data={data()} />
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
              </div>
            </Match>
          </Switch>
        )}
      </Show>
    </div>
  )
}

/**
 * A shared component for rendering the three progress circles.
 */
function SummaryCircles(props: { data: FullHierarchyData }) {
  return (
    <div class="grid grid-cols-3 gap-4">
      <ProgressCircle
        label="Vocabulary"
        countLearned={props.data.summary.vocab.learned}
        countInProgress={0}
        total={props.data.summary.vocab.total}
        colorLearned="text-sky-400"
        colorInProgress="text-sky-600"
      />
      <ProgressCircle
        label="Kanji"
        countLearned={props.data.summary.kanji.learned}
        countInProgress={props.data.summary.kanji.inProgress}
        total={props.data.summary.kanji.total}
        colorLearned="text-pink-400"
        colorInProgress="text-pink-600"
      />
      <ProgressCircle
        label="Radicals"
        countLearned={props.data.summary.radicals.learned}
        countInProgress={props.data.summary.radicals.inProgress}
        total={props.data.summary.radicals.total}
        colorLearned="text-teal-400"
        colorInProgress="text-teal-600"
      />
    </div>
  )
}

/**
 * A container for a list of characters, with responsive height behavior.
 */
function CharacterList(props: {
  title: string
  items: (Kanji | Radical)[]
  variant: WordHierarchyVariant
  isTall?: boolean
}) {
  return (
    <div
      class="flex flex-col"
      classList={{ "h-full": props.isTall && props.variant === "desktop" }}
    >
      <h3 class="text-muted-foreground mb-3 text-sm">{props.title}</h3>
      <div
        class="scrollbar-hide flex flex-wrap content-start gap-2 overflow-y-auto"
        classList={{
          "min-h-[7.5rem]": !props.isTall && props.variant === "desktop",
          "flex-grow": props.isTall && props.variant === "desktop",
        }}
      >
        <For each={props.items}>
          {(item) => (
            <CharBox char={item.characters} progress={item.progress} />
          )}
        </For>
      </div>
    </div>
  )
}

/**
 * A compact circular progress indicator.
 */
function ProgressCircle(props: {
  label: string
  countLearned: number
  countInProgress: number
  total: number
  colorLearned: string
  colorInProgress: string
}) {
  const radius = 32 // Increased from 28
  const circumference = 2 * Math.PI * radius

  const progressLearned = () =>
    props.total > 0 ? props.countLearned / props.total : 0
  const progressTotal = () =>
    props.total > 0
      ? (props.countLearned + props.countInProgress) / props.total
      : 0

  const offsetLearned = () => circumference * (1 - progressLearned())
  const offsetTotal = () => circumference * (1 - progressTotal())

  return (
    <div class="flex flex-col items-center gap-1.5">
      <div class="relative h-20 w-20">
        {" "}
        {/* Increased from h-16 w-16 */}
        <svg class="h-full w-full" viewBox="0 0 80 80">
          {" "}
          {/* Increased from 70x70 */}
          <circle
            class="text-muted-foreground/10"
            stroke-width="8" // Increased from 7
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="40" // Increased from 35
            cy="40" // Increased from 35
          />
          <circle
            class={props.colorInProgress}
            stroke-width="8" // Increased from 7
            stroke-dasharray={circumference}
            stroke-dashoffset={offsetTotal()}
            stroke-linecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="40" // Increased from 35
            cy="40" // Increased from 35
            style={{
              transform: "rotate(-90deg)",
              "transform-origin": "50% 50%",
              transition: "stroke-dashoffset 0.5s ease-out",
            }}
          />
          <circle
            class={props.colorLearned}
            stroke-width="8" // Increased from 7
            stroke-dasharray={circumference}
            stroke-dashoffset={offsetLearned()}
            stroke-linecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="40" // Increased from 35
            cy="40" // Increased from 35
            style={{
              transform: "rotate(-90deg)",
              "transform-origin": "50% 50%",
              transition: "stroke-dashoffset 0.5s ease-out",
            }}
          />
        </svg>
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <span class="text-xl font-bold">{props.countLearned}</span>{" "}
          {/* Increased from text-lg */}
          <span class="text-muted-foreground text-xs">/{props.total}</span>
        </div>
      </div>
      <span class="text-muted-foreground text-base font-medium">
        {props.label}
      </span>
    </div>
  )
}

/**
 * A small, styled box for displaying a single character.
 */
function CharBox(props: { char: string | null; progress: ProgressState }) {
  return (
    <Show when={props.char}>
      <div
        class="inline-flex h-10 w-10 items-center justify-center rounded-md border text-lg font-bold transition-colors"
        classList={{
          "border-muted-foreground/20 bg-muted/30 text-muted-foreground":
            props.progress === "not_learned",
          "border-amber-400/50 bg-amber-400/10 text-amber-300":
            props.progress === "in_progress",
          "border-teal-400/50 bg-teal-400/10 text-teal-300":
            props.progress === "learned",
        }}
      >
        {props.char}
      </div>
    </Show>
  )
}
