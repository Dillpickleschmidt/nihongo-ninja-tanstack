import { createMemo, Show } from "solid-js"
import { Info, Loader2 } from "lucide-solid"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import type { PracticeCard, PracticeSessionState } from "../../../types"

type StartPagePreviewCardProps = {
  card: PracticeCard
  index: number
  isLoading: boolean
  hasEnhancedData: boolean
  currentState: PracticeSessionState
  getCardMap: (state: PracticeSessionState) => Map<string, PracticeCard>
}

export default function StartPagePreviewCard(props: StartPagePreviewCardProps) {
  const vocabularyDependencies = createMemo(() => {
    if (props.card.practiceItemType === "vocabulary") return []

    const unlocksMap = new Map((props.currentState.unlocksMap as any) || [])
    const cardMap = props.getCardMap(props.currentState)

    const dependentKeys = unlocksMap.get(props.card.key) || []
    return dependentKeys
      .map((key) => cardMap.get(key)?.vocab.word)
      .filter(Boolean)
  })

  const questionTextClass = createMemo(() => ({
    "text-xl lg:text-2xl":
      props.card.practiceMode === "readings" ||
      props.card.practiceItemType !== "vocabulary",
    "text-lg lg:text-xl":
      props.card.practiceMode === "kana" &&
      props.card.practiceItemType === "vocabulary",
  }))

  const answerTextClass = createMemo(() => ({
    "text-xl lg:text-2xl": props.card.validAnswers.some((answer) =>
      /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(answer),
    ),
    "text-base lg:text-lg": !props.card.validAnswers.some((answer) =>
      /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(answer),
    ),
  }))

  // For due badges...
  const isDue = createMemo(() => {
    if (!props.hasEnhancedData || props.card.isDisabled) return false

    const dueDate = props.card.fsrs.card.due
    if (!dueDate) return false

    const now = new Date()
    const cardDueDate = new Date(dueDate)

    // Don't show "due" for cards created within the last 5 seconds
    const fiveSecondsAgo = new Date(now.getTime() - 5000)
    if (cardDueDate > fiveSecondsAgo) {
      return false
    }

    return cardDueDate <= now
  })

  const explanationText = (
    <p class="text-sm">
      Kanji & Radical dependencies are skipped for the current lesson if not due
      so you can focus on vocabulary.
    </p>
  )

  const cardContent = (
    <div
      class="bg-card group relative h-full overflow-hidden rounded-xl p-5 shadow-md transition-all duration-200 hover:shadow-lg"
      classList={{
        "opacity-60": props.card.isDisabled,
      }}
    >
      <div
        class="flex items-start justify-between"
        classList={{
          "text-muted-foreground": props.card.isDisabled,
        }}
      >
        <div class="flex-1">
          <h3
            class="mb-3 font-bold saturate-[125%]"
            classList={{
              ...questionTextClass(),
              [props.card.isDisabled
                ? "text-muted-foreground"
                : "text-orange-400"]: true,
            }}
          >
            {props.card.prompt}
          </h3>
          <div class="space-y-1.5">
            <p class="text-sm font-medium tracking-wider uppercase">Answer:</p>
            <p
              class="font-bold"
              classList={{
                ...answerTextClass(),
                [props.card.isDisabled
                  ? "text-muted-foreground"
                  : "text-primary"]: true,
              }}
            >
              {props.card.validAnswers.join(", ")}
            </p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <Show when={props.card.practiceItemType === "kanji"}>
            <span
              class="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide uppercase"
              classList={{
                [props.card.isDisabled
                  ? "bg-gray-500/20 text-gray-400"
                  : "bg-pink-500/20 text-pink-400"]: true,
              }}
            >
              Kanji
            </span>
          </Show>
          <Show when={props.card.practiceItemType === "radical"}>
            <span
              class="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide uppercase"
              classList={{
                [props.card.isDisabled
                  ? "bg-gray-500/20 text-gray-400"
                  : "bg-blue-500/20 text-blue-400"]: true,
              }}
            >
              Radical
            </span>
          </Show>
          <Show
            when={!props.isLoading && isDue()}
            fallback={
              <Show when={props.isLoading}>
                <div class="inline-flex items-center rounded-full bg-gray-500/20 px-2.5 py-1">
                  <Loader2 class="h-3 w-3 animate-spin text-gray-400" />
                </div>
              </Show>
            }
          >
            <span class="inline-flex items-center rounded-full bg-amber-500/20 px-2.5 py-1 text-xs font-semibold tracking-wide text-amber-500 uppercase">
              Due
            </span>
          </Show>
          <div
            class="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
            classList={{
              [props.card.isDisabled
                ? "bg-muted/50 text-muted-foreground/80"
                : "bg-muted text-muted-foreground"]: true,
            }}
          >
            {props.index + 1}
          </div>
        </div>
      </div>

      {/* Stacked bottom-right messages */}
      <div class="absolute right-4 bottom-4 flex flex-col items-end justify-end gap-1">
        {/* Dependency message for kanji/radicals */}
        <Show when={vocabularyDependencies().length > 0}>
          <div class="text-muted-foreground text-xs">
            dependency of {vocabularyDependencies().join(", ")}
          </div>
        </Show>

        {/* Due status message */}
        <Show when={props.card.isDisabled}>
          <div class="text-muted-foreground flex items-center gap-1.5 text-xs">
            <span>Skipping (not due)</span>
            {/* Desktop Info Icon */}
            <SSRMediaQuery showFrom="md">
              <Info class="h-3.5 w-3.5" />
            </SSRMediaQuery>
            {/* Mobile Popover */}
            <SSRMediaQuery hideFrom="md">
              <Popover>
                <PopoverTrigger>
                  <Info class="h-3.5 w-3.5" />
                </PopoverTrigger>
                <PopoverContent class="w-64 p-3">
                  {explanationText}
                </PopoverContent>
              </Popover>
            </SSRMediaQuery>
          </div>
        </Show>

        <Show when={!props.isLoading && isDue() && props.card.fsrs.card.due}>
          <div class="text-muted-foreground text-xs">
            Due:{" "}
            {new Date(props.card.fsrs.card.due).toLocaleDateString(undefined, {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}
          </div>
        </Show>
      </div>

      {/* Desktop Hover Card for disabled cards */}
      <Show when={props.card.isDisabled}>
        <SSRMediaQuery showFrom="md">
          <HoverCard openDelay={200}>
            <HoverCardTrigger class="absolute inset-0" />
            <HoverCardContent class="w-64 p-3">
              {explanationText}
            </HoverCardContent>
          </HoverCard>
        </SSRMediaQuery>
      </Show>
    </div>
  )

  return cardContent
}

