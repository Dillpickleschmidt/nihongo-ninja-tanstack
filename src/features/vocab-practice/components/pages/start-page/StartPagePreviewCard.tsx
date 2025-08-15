// features/vocab-practice/components/pages/start-page/StartPagePreviewCard.tsx
import { createMemo, Show } from "solid-js"
import { Info, Loader2 } from "lucide-solid"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import type { PracticeCard, PracticeSessionState } from "../../../types"

type StartPagePreviewCardProps = {
  card: PracticeCard
  index: number
  allCards: PracticeCard[]
  isLoading: boolean
  hasEnhancedData: boolean
  currentState: PracticeSessionState
  getCardMap: (state: PracticeSessionState) => Map<string, PracticeCard>
}

export default function StartPagePreviewCard(props: StartPagePreviewCardProps) {
  const vocabularyDependencies = createMemo(() => {
    if (props.card.practiceItemType === "vocabulary") return []
    const unlocksMap = props.currentState.unlocksMap
    const cardMap = props.getCardMap(props.currentState)
    return (unlocksMap.get(props.card.key) || [])
      .map((key) => cardMap.get(key)?.vocab.word)
      .filter(Boolean)
  })

  const visibleNumber = createMemo(() => {
    const countBefore = props.allCards
      .slice(0, props.index)
      .filter((c) => !c.isDisabled).length
    return countBefore + 1
  })

  const questionTextClass = createMemo(() =>
    props.card.practiceMode === "readings" ||
    props.card.practiceItemType !== "vocabulary"
      ? "text-xl lg:text-2xl"
      : "text-lg lg:text-xl",
  )

  const answerTextClass = createMemo(() =>
    props.card.validAnswers.some((answer) =>
      /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(answer),
    )
      ? "text-xl lg:text-2xl"
      : "text-base lg:text-lg",
  )

  const isDue = createMemo(() => {
    if (!props.hasEnhancedData || props.card.isDisabled) return false
    const dueDate = props.card.fsrs.card.due
    if (!dueDate) return false
    const now = new Date()
    const cardDueDate = new Date(dueDate)
    if (cardDueDate > new Date(now.getTime() - 5000)) return false
    return cardDueDate <= now
  })

  const explanationText =
    "Kanji & Radical dependencies are skipped for the current lesson if you've seen them before and they aren't due so you can focus on vocabulary."

  const isKanjiOrRadical =
    props.card.practiceItemType === "kanji" ||
    props.card.practiceItemType === "radical"

  const RightColumn = () => (
    <div class="flex h-full min-w-[90px] flex-col items-end justify-between">
      {/* Top row: Due badge + number */}
      <div class="flex items-center gap-2">
        <Show
          when={!props.isLoading && isDue()}
          fallback={
            <Show when={props.isLoading}>
              <div class="inline-flex items-center rounded-full bg-gray-500/20 px-2 py-0.5">
                <Loader2 class="h-3 w-3 animate-spin text-gray-400" />
              </div>
            </Show>
          }
        >
          <span class="inline-flex items-center rounded-full bg-amber-500/20 px-2 py-0.5 text-xs font-semibold text-amber-500 uppercase">
            Due
          </span>
        </Show>

        {/* Number badge or placeholder */}
        {props.card.isDisabled ? (
          <div class="h-6 w-6" />
        ) : (
          <div class="bg-muted text-muted-foreground flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold">
            {visibleNumber()}
          </div>
        )}
      </div>

      {/* Bottom row: Due date or skip message */}
      <div class="mt-2">
        <Show when={!props.isLoading && isDue() && props.card.fsrs.card.due}>
          <div class="text-muted-foreground text-[11px]">
            Due:{" "}
            {new Date(props.card.fsrs.card.due).toLocaleDateString(undefined, {
              weekday: "short",
              month: "short",
              day: "numeric",
            })}
          </div>
        </Show>
        <Show when={props.card.isDisabled}>
          <div class="text-muted-foreground flex items-center gap-1.5 text-[11px]">
            <span>Skipping (not due)</span>
            <Popover>
              <PopoverTrigger>
                <Info class="h-3.5 w-3.5" />
              </PopoverTrigger>
              <PopoverContent class="bg-card border-card-foreground w-64 p-3">
                <p class="text-sm">{explanationText}</p>
              </PopoverContent>
            </Popover>
          </div>
        </Show>
      </div>
    </div>
  )

  return (
    <div
      class={`group relative h-full overflow-hidden rounded-xl shadow-md transition-all duration-200 hover:shadow-lg ${
        props.card.isDisabled ? "opacity-30" : ""
      } ${
        props.card.practiceItemType === "kanji"
          ? "border border-pink-500/10 bg-pink-500/5"
          : props.card.practiceItemType === "radical"
            ? "border border-blue-500/10 bg-blue-500/5"
            : "bg-card/40 backdrop-blur-sm"
      }`}
      title={props.card.isDisabled ? explanationText : undefined}
    >
      <Show
        when={!isKanjiOrRadical}
        fallback={
          /* Shorter KANJI/RADICAL layout with vertical centering */
          <div class="flex h-full items-center justify-between p-3">
            <div class="flex items-center gap-3">
              {props.card.practiceItemType === "kanji" && (
                <span class="rounded-full bg-pink-500/20 px-2 py-0.5 text-xs font-semibold text-pink-400 uppercase">
                  Kanji
                </span>
              )}
              {props.card.practiceItemType === "radical" && (
                <span class="rounded-full bg-blue-500/20 px-2 py-0.5 text-xs font-semibold text-blue-400 uppercase">
                  Radical
                </span>
              )}
              <div>
                <h3
                  class={`text-lg leading-tight font-bold ${
                    props.card.isDisabled
                      ? "text-muted-foreground"
                      : props.card.practiceItemType === "kanji"
                        ? "text-pink-400"
                        : "text-blue-400"
                  }`}
                >
                  {props.card.prompt}
                </h3>
                <p
                  class={`text-xl font-semibold ${
                    props.card.isDisabled
                      ? "text-muted-foreground"
                      : "text-primary"
                  }`}
                >
                  {props.card.validAnswers.join(", ")}
                  <Show when={vocabularyDependencies().length > 0}>
                    <span class="text-muted-foreground/80 ml-2 text-xs">
                      dependency of {vocabularyDependencies().join(", ")}
                    </span>
                  </Show>
                </p>
              </div>
            </div>
            <RightColumn />
          </div>
        }
      >
        {/* VOCAB layout */}
        <div class="flex h-full items-start justify-between p-5">
          <div class="flex-1">
            <h3
              class={`mb-3 font-bold saturate-[125%] ${questionTextClass()} ${
                props.card.isDisabled
                  ? "text-muted-foreground"
                  : "text-orange-400"
              }`}
            >
              {props.card.prompt}
            </h3>
            <div class="space-y-1.5">
              <p class="text-sm font-medium tracking-wider uppercase">
                Answer:
              </p>
              <p
                class={`font-bold ${answerTextClass()} ${
                  props.card.isDisabled
                    ? "text-muted-foreground"
                    : "text-primary"
                }`}
              >
                {props.card.validAnswers.join(", ")}
              </p>
            </div>
          </div>
          <RightColumn />
        </div>
      </Show>
    </div>
  )
}
