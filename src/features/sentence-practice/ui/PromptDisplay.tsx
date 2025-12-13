// ui/PromptDisplay.tsx
import { Show } from "solid-js"
import type { ProcessedQuestion } from "../core/types"

interface PromptDisplayProps {
  question: ProcessedQuestion
}

export default function PromptDisplay(props: PromptDisplayProps) {
  return (
    <div class="mb-6 space-y-2">
      <p class="border-b-2 border-amber-400 pb-4 text-2xl font-semibold dark:border-amber-500">
        {props.question.english}
      </p>
      <Show when={props.question.hint}>
        <p class="text-base text-neutral-500">Hint: {props.question.hint}</p>
      </Show>
    </div>
  )
}
