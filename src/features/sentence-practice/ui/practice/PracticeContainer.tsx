// ui/PracticeContainer.tsx
import { Show, createEffect, createSignal } from "solid-js"
import type { Doc } from "../../../../../convex/_generated/dataModel"
import { usePractice } from "../../store/PracticeContext"
import PromptDisplay from "./PromptDisplay"
import FillInBlankInput from "./FillInBlankInput"
import FullInput from "./FullInput"
import ResultDisplay from "./ResultDisplay"
import DifficultySelector from "./DifficultySelector"
import ProgressDisplay from "./ProgressDisplay"
import DebugPanel from "./DebugPanel"
import EasyModeDebugPanel from "./EasyModeDebugPanel"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/custom/collapsible"

interface PracticeContainerProps {
  questions: Doc<"sentencePracticeQuestions">[]
}

export default function PracticeContainer(props: PracticeContainerProps) {
  const { store, actions, computed } = usePractice()

  // Collapsible state for debug panel
  const [isCollapsibleOpen, setIsCollapsibleOpen] = createSignal(false)

  // Initialize questions when component mounts or questions change
  createEffect(() => {
    if (props.questions.length > 0) {
      actions.setQuestions(props.questions)
    }
  })

  // Auto-expand debug panel when answer is correct in easy mode
  createEffect(() => {
    if (store.effectiveDifficulty === "easy" && store.checkResult?.isCorrect) {
      setIsCollapsibleOpen(true)
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

            {/* Debug Panels - collapsible, shown after answering */}
            <Show when={store.showResult}>
              <Collapsible
                class="mt-8 flex flex-col items-center"
                open={isCollapsibleOpen()}
                onOpenChange={setIsCollapsibleOpen}
              >
                <CollapsibleTrigger class="w-fit rounded-full px-4 py-1.5 text-xs">
                  Show all possible
                </CollapsibleTrigger>
                <CollapsibleContent class="w-full">
                  <Show
                    when={store.effectiveDifficulty === "hard"}
                    fallback={
                      <EasyModeDebugPanel currentQuestion={question()} />
                    }
                  >
                    <DebugPanel allAnswers={question().validAnswers} />
                  </Show>
                </CollapsibleContent>
              </Collapsible>
            </Show>
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
