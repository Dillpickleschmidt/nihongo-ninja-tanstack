// features/dashboard/components/WordHierarchy.tsx
import { For, Match, Show, Switch } from "solid-js"
import { createMediaQuery } from "@solid-primitives/media"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { SmoothCard } from "./SmoothCard"
import { cn } from "@/utils/util"
import type { FullHierarchyData, Kanji, Radical } from "@/data/wanikani/types"

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
    <div class="flex flex-col gap-4">
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
              <div class="mb-8 flex flex-col gap-3 px-7">
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
 * Updated to use the new summary structure.
 */
function SummaryCircles(props: { data: FullHierarchyData }) {
  return (
    <div class="grid grid-cols-3 gap-4">
      <ProgressCircle
        label="Vocabulary"
        countLearned={props.data.summary.vocab.wellKnown}
        countInProgress={props.data.summary.vocab.learning}
        total={props.data.summary.vocab.total}
        colorLearned="text-sky-400"
        colorInProgress="text-sky-600"
      />
      <ProgressCircle
        label="Kanji"
        countLearned={props.data.summary.kanji.wellKnown}
        countInProgress={props.data.summary.kanji.learning}
        total={props.data.summary.kanji.total}
        colorLearned="text-pink-400"
        colorInProgress="text-pink-600"
      />
      <ProgressCircle
        label="Radicals"
        countLearned={props.data.summary.radicals.wellKnown}
        countInProgress={props.data.summary.radicals.learning}
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
      <h3 class="text-muted-foreground mb-3 text-sm font-semibold">
        {props.title}
      </h3>
      <div
        class="scrollbar-hide flex flex-wrap content-start gap-2 overflow-y-auto"
        classList={{
          "min-h-[7.5rem]": !props.isTall && props.variant === "desktop",
          "flex-grow": props.isTall && props.variant === "desktop",
        }}
      >
        <For each={props.items}>{(item) => <CharBox item={item} />}</For>
      </div>
    </div>
  )
}

/**
 * A compact circular progress indicator.
 * The main number shows countLearned (well_known), while arcs show total progress.
 */
function ProgressCircle(props: {
  label: string
  countLearned: number
  countInProgress: number
  total: number
  colorLearned: string
  colorInProgress: string
}) {
  const radius = 32
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
        <svg class="h-full w-full" viewBox="0 0 80 80">
          <circle
            class="text-muted-foreground/10"
            stroke-width="8"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="40"
            cy="40"
          />
          <circle
            class={props.colorInProgress}
            stroke-width="8"
            stroke-dasharray={circumference}
            stroke-dashoffset={offsetTotal()}
            stroke-linecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="40"
            cy="40"
            style={{
              transform: "rotate(-90deg)",
              "transform-origin": "50% 50%",
              transition: "stroke-dashoffset 0.5s ease-out",
            }}
          />
          <circle
            class={props.colorLearned}
            stroke-width="8"
            stroke-dasharray={circumference}
            stroke-dashoffset={offsetLearned()}
            stroke-linecap="round"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx="40"
            cy="40"
            style={{
              transform: "rotate(-90deg)",
              "transform-origin": "50% 50%",
              transition: "stroke-dashoffset 0.5s ease-out",
            }}
          />
        </svg>
        <div class="absolute inset-0 flex flex-col items-center justify-center">
          <span class="text-xl font-bold">{props.countLearned}</span>
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
 * Updated to use the new ProgressState values for styling.
 */
function CharBox(props: { item: Kanji | Radical }) {
  const isDesktop = createMediaQuery("(min-width: 1280px)")

  return (
    <Show when={props.item.characters}>
      <Switch>
        {/* Desktop: Use SmoothCard and wrap with HoverCard */}
        <Match when={isDesktop()}>
          <HoverCard openDelay={200}>
            <HoverCardTrigger as="div">
              <SmoothCard
                width={40}
                height={40}
                cornerRadius={10}
                class={cn(
                  "flex items-center justify-center transition-colors hover:cursor-pointer",
                  {
                    "bg-muted/40": props.item.progress === "not_seen",
                    "bg-amber-400/10": props.item.progress === "learning",
                    "bg-teal-400/10": props.item.progress === "well_known",
                  },
                )}
              >
                <span
                  class={cn("text-lg font-bold", {
                    "text-muted-foreground": props.item.progress === "not_seen",
                    "text-amber-300": props.item.progress === "learning",
                    "text-teal-300": props.item.progress === "well_known",
                  })}
                >
                  {props.item.characters}
                </span>
              </SmoothCard>
            </HoverCardTrigger>
            <HoverCardContent class="w-auto px-3 py-1.5 text-sm">
              <span>{props.item.slug}</span>
            </HoverCardContent>
          </HoverCard>
        </Match>

        {/* Mobile: Use the original, simple div */}
        <Match when={!isDesktop()}>
          <div
            class="inline-flex h-10 w-10 items-center justify-center rounded-md border text-lg font-bold transition-colors"
            classList={{
              "border-muted-foreground/20 bg-muted/30 text-muted-foreground":
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
