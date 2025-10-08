// ui/practice/FillInBlankInput.tsx
import { For, Show } from "solid-js"
import { CircleHelp } from "lucide-solid"
import { Button } from "@/components/ui/button"
import type { ConjugatableSegment } from "../../core/conjugation/types"
import { usePracticeStore } from "../../store/PracticeContext"
import { TextProcessor } from "../../core/text/TextProcessor"
import PracticeInput from "./PracticeInput"

interface FillInBlankInputProps {
  segments: ConjugatableSegment[]
}

const textProcessor = new TextProcessor()
const answerTextProcessor = new TextProcessor()

export default function FillInBlankInput(props: FillInBlankInputProps) {
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

  const displaySegments = textProcessor.processSegmentsForDisplay(
    props.segments,
  )

  return (
    <div class="space-y-4">
      <div class="text-2xl">
        <For each={displaySegments}>
          {(segment, index) => (
            <>
              {segment.isBlank ? (
                isAnswerCorrect() ? (
                  <span class="mx-1 text-green-600 dark:text-green-400">
                    {answerTextProcessor.removeFurigana(
                      store.questions[store.currentQuestionIndex]!.answers[0]
                        .segments[index()],
                    )}
                  </span>
                ) : (
                  <div class="inline-block">
                    <PracticeInput
                      value={store.inputs.blanks?.[index()] || ""}
                      onInput={(value) => actions.updateInput(value, index())}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleMainButton()
                        }
                      }}
                      class="placeholder:text-muted-foreground/35 mx-1 w-32 text-center text-2xl"
                      autofocus={index() === 0}
                      placeholder="答え"
                    />
                  </div>
                )
              ) : (
                <span>{segment.text}</span>
              )}
            </>
          )}
        </For>
        <Show when={isAnswerCorrect()}>
          <span class="ml-3 inline-block text-3xl font-bold text-green-500">
            ✓
          </span>
        </Show>
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
