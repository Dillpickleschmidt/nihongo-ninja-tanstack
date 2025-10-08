// ui/practice/PromptDisplay.tsx
import type { PracticeQuestion } from "../../core/answer-processing/types"

interface PromptDisplayProps {
  question: PracticeQuestion
}

export default function PromptDisplay(props: PromptDisplayProps) {
  return (
    <div class="mb-6 space-y-2">
      <p class="border-b-2 border-amber-400 pb-4 text-2xl font-semibold dark:border-amber-500">
        {props.question.english}
      </p>
      {props.question.hint && (
        <p class="text-base text-neutral-500">Hint: {props.question.hint}</p>
      )}
    </div>
  )
}
