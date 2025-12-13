// ui/PracticeContainer.tsx
import { Show, createEffect } from "solid-js"
import type { Doc } from "../../../../convex/_generated/dataModel"
import { usePractice } from "../store/PracticeContext"
import PromptDisplay from "./PromptDisplay"
import FillInBlankInput from "./FillInBlankInput"
import FullInput from "./FullInput"
import ResultDisplay from "./ResultDisplay"
import DifficultySelector from "./DifficultySelector"
import ProgressDisplay from "./ProgressDisplay"

interface PracticeContainerProps {
  questions: Doc<"sentencePracticeQuestions">[]
}

export default function PracticeContainer(props: PracticeContainerProps) {
  const { store, actions, computed } = usePractice()

  // Initialize questions when component mounts or questions change
  createEffect(() => {
    if (props.questions.length > 0) {
      actions.setQuestions(props.questions)
    }
  })

  const currentQuestion = () => computed.getCurrentQuestion()

  return (
    <div class="mx-auto max-w-2xl space-y-6 p-4">
      {/* Header with progress and difficulty */}
      <div class="flex items-center justify-between">
        <ProgressDisplay />
        <DifficultySelector />
      </div>

      {/* Loading state */}
      <Show when={store.isLoading}>
        <div class="text-muted-foreground py-8 text-center">
          Loading questions...
        </div>
      </Show>

      {/* Main practice content */}
      <Show when={!store.isLoading && currentQuestion()}>
        {(question) => (
          <div class="space-y-6">
            {/* Prompt */}
            <PromptDisplay question={question()} />

            {/* Input area - easy or hard mode */}
            <Show
              when={store.effectiveDifficulty === "easy"}
              fallback={<FullInput />}
            >
              <FillInBlankInput />
            </Show>

            {/* Results */}
            <ResultDisplay />
          </div>
        )}
      </Show>

      {/* No questions state */}
      <Show when={!store.isLoading && store.questions.length === 0}>
        <div class="text-muted-foreground py-8 text-center">
          No questions available for this set.
        </div>
      </Show>
    </div>
  )
}
