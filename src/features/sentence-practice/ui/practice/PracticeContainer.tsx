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

  const [isCollapsibleOpen, setIsCollapsibleOpen] = createSignal(false)

  createEffect(() => {
    if (props.questions.length > 0) {
      actions.initializeSession(props.questions)
    }
  })

  createEffect(() => {
    if (store.effectiveDifficulty === "easy" && store.checkResult?.isCorrect) {
      setIsCollapsibleOpen(true)
    }
  })

  const currentQuestion = () => computed.getCurrentQuestion()

  return (
    <div class="mx-auto flex w-full max-w-3xl flex-col gap-2 pt-4 [--sentence-practice-action:rgb(202,138,4)] md:gap-4 dark:[--sentence-practice-action:rgb(245,158,11)]">
      {/* Header with progress and difficulty */}
      <div class="flex w-full items-center">
        <ProgressDisplay />
        <DifficultySelector />
      </div>

      {/* Loading state */}
      <Show when={store.isLoading}>
        <div class="py-8 text-center text-muted-foreground dark:text-white/40">
          Loading questions...
        </div>
      </Show>

      {/* Main practice content */}
      <Show when={!store.isLoading && currentQuestion()}>
        {(question) => (
          <div class="space-y-6 px-2">
            <PromptDisplay question={question()} />

            <Show
              when={store.effectiveDifficulty === "easy"}
              fallback={<FullInput />}
            >
              <FillInBlankInput />
            </Show>

            <ResultDisplay />

            <Show when={store.showResult}>
              <Collapsible
                class="mt-8 flex flex-col items-center"
                open={isCollapsibleOpen()}
                onOpenChange={setIsCollapsibleOpen}
              >
                <CollapsibleTrigger class="w-fit rounded-full px-4 py-1.5 text-xs text-muted-foreground dark:text-white/40">
                  Show all possible
                </CollapsibleTrigger>
                <CollapsibleContent class="w-full">
                  <Show
                    when={store.effectiveDifficulty === "hard"}
                    fallback={
                      <EasyModeDebugPanel currentQuestion={question()} />
                    }
                  >
                    <DebugPanel allAnswers={question().acceptedAnswers} />
                  </Show>
                </CollapsibleContent>
              </Collapsible>
            </Show>
          </div>
        )}
      </Show>

      {/* No questions state */}
      <Show when={!store.isLoading && store.questions.length === 0}>
        <div class="py-8 text-center text-muted-foreground dark:text-white/40">
          No questions available for this set.
        </div>
      </Show>
    </div>
  )
}
