// ui/practice/PracticeContainer.tsx
import { Show, createEffect } from "solid-js"
import { PracticeProvider, usePracticeStore } from "../../store/PracticeContext"
import PromptDisplay from "./PromptDisplay"
import AnswerInput from "./AnswerInput"
import ProgressDisplay from "./ProgressDisplay"
import ResultDisplay from "./ResultDisplay"
import DifficultySelector from "./DifficultySelector"
import FillInBlankInput from "./FillInBlankInput"
import { DebugPanel } from "../common/DebugPanel"

interface PracticeContainerProps {
  path: string
  showDebug?: boolean
}

function PracticeContent(props: PracticeContainerProps) {
  const { store, actions } = usePracticeStore()

  createEffect(() => {
    if (props.path !== store.path) {
      actions.loadQuestions(props.path)
    }
  })

  return (
    <div class="mx-auto max-w-2xl space-y-4 px-4 pt-12 pb-32 lg:pt-24">
      <DifficultySelector class="flex justify-end" />
      <Show when={!store.isLoading} fallback={<div>Loading questions...</div>}>
        <Show
          when={store.questions[store.currentQuestionIndex]}
          fallback={<div>No questions available for {props.path}</div>}
        >
          <PromptDisplay
            question={store.questions[store.currentQuestionIndex]!}
          />

          <Show
            when={store.effectiveDifficulty === "easy"}
            fallback={<AnswerInput />}
          >
            <FillInBlankInput
              segments={
                store.rawQuestions[store.currentQuestionIndex]!.answers[0]
                  .segments
              }
            />
          </Show>

          <ProgressDisplay
            attempted={store.currentQuestionIndex + 1}
            total={store.questions.length}
          />
          <Show when={store.showResult}>
            <ResultDisplay />
          </Show>

          <Show when={props.showDebug}>
            <DebugPanel
              question={store.questions[store.currentQuestionIndex]!}
            />
          </Show>
        </Show>
      </Show>

      <Show when={store.error}>
        <div class="text-red-600">Error loading questions: {store.error}</div>
      </Show>
    </div>
  )
}

export default function PracticeContainer(props: PracticeContainerProps) {
  return (
    <PracticeProvider>
      <PracticeContent {...props} />
    </PracticeProvider>
  )
}
