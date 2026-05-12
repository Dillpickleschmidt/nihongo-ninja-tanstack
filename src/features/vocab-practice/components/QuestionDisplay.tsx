import { Show } from "solid-js"
import { cn } from "@/utils"
import { TYPE_BADGE_CLASSES, getPromptDisplay } from "../utils/card-display"
import type { PracticeCard } from "../types"

interface QuestionDisplayProps {
  card: PracticeCard
  label?: string
}

export function QuestionDisplay(props: QuestionDisplayProps) {
  const promptDisplay = () => getPromptDisplay(props.card)

  const defaultLabel = () =>
    props.card.practiceItemType === "radical"
      ? "What is this radical called?"
      : "What does this mean?"

  return (
    <div class="flex flex-col items-center mb-4">
      {/* Label + badge grouped tight */}
      <div class="flex flex-col items-center gap-1">
        <span class="text-sm text-muted-foreground dark:text-white/40">
          {props.label ?? defaultLabel()}
        </span>

        <span
          class={cn(
            "rounded-full px-3 py-1 text-xs font-medium",
            TYPE_BADGE_CLASSES[props.card.practiceItemType],
          )}
        >
          {props.card.practiceItemType}
        </span>
      </div>

      {/* Prompt with breathing room above */}
      <Show
        when={promptDisplay().isHtml}
        fallback={
          <div
            class={cn(
              "mt-4 font-japanese font-medium text-center",
              props.card.practiceItemType === "vocabulary"
                ? "text-5xl sm:text-7xl"
                : "text-6xl sm:text-8xl",
            )}
          >
            {promptDisplay().text}
          </div>
        }
      >
        <div
          class="mt-4 font-japanese text-5xl sm:text-7xl font-medium text-center"
          innerHTML={promptDisplay().html}
        />
      </Show>
    </div>
  )
}
