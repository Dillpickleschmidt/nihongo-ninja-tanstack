import { Show } from "solid-js"
import { CircleQuestionMark } from "lucide-solid"
import { Button3D } from "@/components/Button3D"
import { usePractice } from "../../store/PracticeContext"
import PracticeInput from "./PracticeInput"
import PosHintDisplay from "./PosHintDisplay"
import UserInputPosDisplay from "./UserInputPosDisplay"

export default function FullInput() {
  const { store, actions, computed } = usePractice()

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
      {/* POS hint boxes */}
      <div>
        <PosHintDisplay tokens={computed.getCurrentQuestion()?.canonicalAnswerTokens[0]} />
        <UserInputPosDisplay
          originalInput={store.answerText}
          question={computed.getCurrentQuestion()}
        />
      </div>

      <div>
        <PracticeInput
          value={store.answerText}
          onInput={(value) => actions.setAnswerText(value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleMainButton()
            }
          }}
          autofocus
          class="font-noto-sans-jp w-full py-6 text-2xl"
          placeholder="Type your answer in Japanese..."
        />
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
