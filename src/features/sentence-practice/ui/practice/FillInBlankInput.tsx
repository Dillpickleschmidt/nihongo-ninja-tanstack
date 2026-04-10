import { For, Show, createEffect, createSignal } from "solid-js"
import { CircleQuestionMark } from "lucide-solid"
import { Button3D } from "@/components/Button3D"
import { usePractice } from "../../store/PracticeContext"
import {
  composeCanonicalAnswerText,
  createBlankDraftsForQuestion,
  type BlankDraft,
} from "../../session/easyModeAnswerProjection"
import PracticeInput from "./PracticeInput"

export default function FillInBlankInput() {
  const { store, actions, computed } = usePractice()
  const [blankDrafts, setBlankDrafts] = createSignal<BlankDraft[]>([])

  const currentQuestion = () => computed.getCurrentQuestion()
  const isAnswerCorrect = () => store.showResult && store.checkResult?.isCorrect
  const displaySegments = () => currentQuestion()?.displayAnswer ?? []

  createEffect(() => {
    const question = currentQuestion()
    if (!question || store.effectiveDifficulty !== "easy") return

    // Easy mode owns its own blank drafts, but always projects them into the
    // canonical store answer so checking/tokenization stay mode-agnostic.
    const drafts = createBlankDraftsForQuestion(question)
    setBlankDrafts(drafts)
    actions.setAnswerText(
      composeCanonicalAnswerText(question.displayAnswer, drafts),
    )
  })

  const handleMainButton = () => {
    if (isAnswerCorrect()) {
      actions.nextQuestion()
    } else {
      actions.checkAnswer()
    }
  }

  const updateBlank = (value: string, index: number) => {
    const question = currentQuestion()
    if (!question) return

    const nextBlankDrafts = [...blankDrafts()]
    nextBlankDrafts[index] = value
    setBlankDrafts(nextBlankDrafts)
    actions.setAnswerText(
      composeCanonicalAnswerText(question.displayAnswer, nextBlankDrafts),
    )
  }

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
                  <div
                    class="inline-block min-w-32"
                    style={{ width: `${Math.max(8, ((blankDrafts()[index()] as string | null | undefined) ?? "").length * 1.6 + 2)}ch` }}
                  >
                    <PracticeInput
                      value={(blankDrafts()[index()] as string | null | undefined) ?? ""}
                      onInput={(value) => updateBlank(value, index())}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          handleMainButton()
                        }
                      }}
                      class="placeholder:text-white/20 mx-1 text-center text-2xl"
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
