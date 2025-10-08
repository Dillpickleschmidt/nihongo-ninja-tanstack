// ui/practice/AnswerInput.tsx
import { Show } from "solid-js"
import { CircleHelp } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { usePracticeStore } from "../../store/PracticeContext"
import PracticeInput from "./PracticeInput"

export default function AnswerInput() {
  const { store, actions } = usePracticeStore()
  const isLastQuestion =
    store.currentQuestionIndex === store.questions.length - 1

  const isAnswerCorrect = () => store.showResult && store.checkResult?.isCorrect

  const handleMainButton = () => {
    if (isAnswerCorrect()) {
      actions.nextQuestion()
    } else {
      actions.checkAnswer()
    }
  }

  return (
    <div class="space-y-4">
      <div>
        <PracticeInput
          value={store.inputs.single || ""}
          onInput={(value) => actions.updateInput(value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleMainButton()
            }
          }}
          autofocus
          class="w-full py-6 text-2xl"
          placeholder="Type your answer in Japanese..."
        />
        <p class="text-muted-foreground pt-1 text-sm">*use caps for katakana</p>
        <Show when={store.checkResult?.strippedParticle}>
          <div class="text-muted-foreground inline-flex items-center gap-1 pt-0.5 text-sm">
            <span>
              {store.checkResult?.strippedParticle} may or may not be correct
            </span>
            <div title="We avoid calculating this since it's very contextual. Please use your own judgement.">
              <CircleHelp class="inline h-3.5 w-3.5 cursor-help" />
            </div>
          </div>
        </Show>
      </div>
      <Button
        onClick={handleMainButton}
        class={`${isAnswerCorrect() ? "bg-green-400 hover:bg-green-500 dark:bg-green-500 dark:hover:bg-green-600" : "bg-amber-400 dark:bg-amber-500 dark:saturate-[85%]"} w-full py-3 text-sm text-black lg:text-base`}
      >
        {isAnswerCorrect()
          ? isLastQuestion
            ? "Finish"
            : "Next Question"
          : "Check Answer"}
      </Button>
    </div>
  )
}
