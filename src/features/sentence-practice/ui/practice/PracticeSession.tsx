import { Show, createEffect, createSignal } from "solid-js"
import type { Doc } from "../../../../../convex/_generated/dataModel"
import { usePractice } from "../../store/PracticeContext"
import PromptDisplay from "./PromptDisplay"
import FillInBlankInput from "./FillInBlankInput"
import FullInput from "./FullInput"
import ResultDisplay from "./ResultDisplay"
import DebugPanel from "./DebugPanel"
import EasyModeDebugPanel from "./EasyModeDebugPanel"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/custom/collapsible"

interface PracticeSessionProps {
  questions: Doc<"sentencePracticeQuestions">[]
}

export default function PracticeSession(props: PracticeSessionProps) {
  const { store, actions, computed } = usePractice()

  const [isCollapsibleOpen, setIsCollapsibleOpen] = createSignal(false)

  createEffect(() => {
    actions.initializeSession(props.questions)
  })

  createEffect(() => {
    if (store.effectiveDifficulty === "easy" && store.checkResult?.isCorrect) {
      setIsCollapsibleOpen(true)
    }
  })

  const currentQuestion = () => computed.getCurrentQuestion()

  return (
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
                  fallback={<EasyModeDebugPanel currentQuestion={question()} />}
                >
                  <DebugPanel allAnswers={question().acceptedAnswers} />
                </Show>
              </CollapsibleContent>
            </Collapsible>
          </Show>
        </div>
      )}
    </Show>
  )
}
