import { Show } from "solid-js"
import type { ProcessedQuestion } from "../../core/types"

interface PromptDisplayProps {
  question: ProcessedQuestion
}

export default function PromptDisplay(props: PromptDisplayProps) {
  return (
    <div class="space-y-2">
      <p class="border-b border-border/70 dark:border-white/10 pb-4 text-2xl font-medium">
        {props.question.english}
      </p>
      <Show when={props.question.hint}>
        <p class="text-base text-muted-foreground dark:text-white/40">Hint: {props.question.hint}</p>
      </Show>
    </div>
  )
}
