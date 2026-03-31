import { For, Show } from "solid-js"
import { CircleQuestionMark } from "lucide-solid"
import { Button3D } from "@/components/Button3D"
import { usePractice } from "../../store/PracticeContext"
import PracticeInput from "./PracticeInput"

export default function FillInBlankInput() {
  const { store, actions, computed } = usePractice()

  const currentQuestion = () => computed.getCurrentQuestion()
  const isAnswerCorrect = () => store.showResult && store.checkResult?.isCorrect

  const handleMainButton = () => {
    if (isAnswerCorrect()) {
      actions.nextQuestion()
    } else {
      actions.checkAnswer()
    }
  }

  const displaySegments = () => currentQuestion()?.answers[0] ?? []

  return (
    <div class="space-y-4">
      <div class="text-2xl">
        <For each={displaySegments()}>
          {(segment, index) => (
            <>
              {segment.isBlank ? (
                isAnswerCorrect() ? (
                  <span class="mx-1 text-emerald-400">
                    {segment.plain}
                  </span>
                ) : (
                  <div class="inline-block">
                    <PracticeInput
                      value={store.blankInputs[index()] ?? ""}
                      onInput={(value) => actions.updateInput(value, index())}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleMainButton()
                        }
                      }}
                      class="placeholder:text-white/20 mx-1 w-32 text-center text-2xl"
                      autofocus={index() === 0}
                      placeholder="..."
                    />
                  </div>
                )
              ) : (
                <span>{segment.plain}</span>
              )}
            </>
          )}
        </For>
        <Show when={isAnswerCorrect()}>
          <span class="ml-3 inline-block text-3xl font-bold text-emerald-400">
            ✓
          </span>
        </Show>
        <p class="pt-1 text-sm text-white/30">*use caps for katakana</p>
        <Show when={store.checkResult?.strippedParticle}>
          <div class="inline-flex items-center gap-1 pt-0.5 text-sm text-white/30">
            <span>
              {store.checkResult?.strippedParticle} may or may not be correct
            </span>
            <div title="We avoid calculating this since it's very contextual.">
              <CircleQuestionMark class="inline h-3.5 w-3.5 cursor-help" />
            </div>
          </div>
        </Show>
      </div>
      <Button3D
        color={isAnswerCorrect() ? "rgb(34,197,94)" : "rgb(245,158,11)"}
        onClick={handleMainButton}
      >
        {isAnswerCorrect()
          ? computed.hasMoreQuestions()
            ? "Next Question"
            : "Finish"
          : "Check Answer"}
      </Button3D>
    </div>
  )
}
