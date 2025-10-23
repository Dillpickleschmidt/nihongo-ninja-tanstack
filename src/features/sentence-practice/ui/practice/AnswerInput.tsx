// ui/practice/AnswerInput.tsx
import { Show, createEffect } from "solid-js"
import { CircleHelp, Loader2 } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { usePracticeStore } from "../../store/PracticeContext"
import PracticeInput from "./PracticeInput"
import PosHintDisplay from "./PosHintDisplay"

export default function AnswerInput() {
  const { store, actions, kagomeReady, kagomeWorker } = usePracticeStore()

  // Tokenize input asynchronously via worker (doesn't block UI)
  createEffect(() => {
    if (kagomeReady() && kagomeWorker && store.inputs.single) {
      kagomeWorker
        .tokenize(store.inputs.single)
        .then((tokens) => {
          console.log("[Tokens]", tokens)
        })
        .catch((error) => {
          console.error("[Kagome] Tokenization failed:", error)
        })
    }
  })
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

  const currentQuestion = () => store.questions[store.currentQuestionIndex]

  return (
    <div class="space-y-4">
      <div>
        {/* POS Hint Display - shows colored boxes for model answer structure */}
        <Show when={currentQuestion()?.modelAnswerPOS}>
          <PosHintDisplay modelAnswerPOS={currentQuestion()!.modelAnswerPOS!} />
        </Show>

        <div class="relative">
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
          <Show when={!kagomeReady()}>
            <Loader2 class="text-muted-foreground absolute top-1/2 right-4 h-6 w-6 -translate-y-1/2 animate-spin" />
          </Show>
        </div>
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
