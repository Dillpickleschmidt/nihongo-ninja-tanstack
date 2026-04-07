import { createSignal, createEffect, on, Show } from "solid-js"
import { createStore } from "solid-js/store"
import { cn } from "@/utils"
import { X } from "lucide-solid"
import WanakanaWrapper from "@/features/wanakana/WanaKana"
import { TextField, TextFieldInput } from "@/components/ui/text-field"
import { Button3D } from "@/components/Button3D"
import { convertFuriganaToRubyHtml } from "@/data/utils/text/furigana"
import {
  checkAnswer,
  type Question,
  type ReviewSessionState,
} from "../utils/questionUtils"

type PracticePageProps = {
  questions: Question[]
  showMeaning: boolean
  noFurigana: boolean
  onComplete: (finalState: ReviewSessionState) => void
  onReturnToSettings: () => void
}

export function PracticePage(props: PracticePageProps) {
  const [sessionState, setSessionState] = createStore<ReviewSessionState>({
    questions: props.questions,
    currentIndex: 0,
    score: 0,
    isComplete: false,
  })
  const [userAnswer, setUserAnswer] = createSignal("")
  const [isAnswered, setIsAnswered] = createSignal(false)

  let inputRef: HTMLInputElement | undefined
  let actionBtnRef: HTMLDivElement | undefined

  const currentQuestion = () =>
    sessionState.questions[sessionState.currentIndex]
  const totalQuestions = () => sessionState.questions.length
  const progressPct = () =>
    ((sessionState.currentIndex + 1) / totalQuestions()) * 100

  // Focus input on mount and each new question
  createEffect(
    on(() => sessionState.currentIndex, () =>
      requestAnimationFrame(() => inputRef?.focus()),
    ),
  )

  // Focus action button after submitting
  createEffect(
    on(isAnswered, (answered) => {
      if (answered)
        requestAnimationFrame(() =>
          actionBtnRef?.querySelector<HTMLButtonElement>("button")?.focus(),
        )
    }),
  )

  function handleSubmit() {
    if (isAnswered() || !userAnswer().trim()) return
    const question = currentQuestion()
    if (!question) return
    const checkedQuestion = checkAnswer(question, userAnswer())
    setSessionState("questions", sessionState.currentIndex, checkedQuestion)
    setSessionState(
      "score",
      (score) => score + (checkedQuestion.correct ? 1 : 0),
    )
    setIsAnswered(true)
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
  }

  function handleNext() {
    const nextIndex = sessionState.currentIndex + 1
    const isComplete = nextIndex >= totalQuestions()
    setSessionState("currentIndex", nextIndex)
    setSessionState("isComplete", isComplete)
    if (isComplete) {
      props.onComplete(sessionState)
      return
    }
    setUserAnswer("")
    setIsAnswered(false)
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter" && userAnswer().trim()) {
      event.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div class="flex flex-col gap-2 md:gap-4 font-excalifont">
      {/* Progress header */}
      <div class="flex flex-1 items-center gap-3 mr-3">
        <button
          type="button"
          onClick={props.onReturnToSettings}
          class="text-white/30 transition-transform duration-200 hover:scale-125 hover:text-white/60"
        >
          <X size={24} />
        </button>
        <div class="h-3.5 flex-1 overflow-hidden rounded-full bg-white/10">
          <div
            class="h-full rounded-full transition-all duration-500"
            style={{
              width: `${progressPct()}%`,
              background:
                "linear-gradient(to right, var(--dynamic-accent), color-mix(in srgb, var(--dynamic-accent) 70%, white))",
            }}
          />
        </div>
        <span class="text-sm text-white/30">
          {sessionState.currentIndex + 1}/{totalQuestions()}
        </span>
      </div>

      {/* Main practice content */}
      <Show when={currentQuestion()}>
        {(question) => (
          <div class="space-y-6 px-2">
            {/* Question display */}
            <div class="flex flex-col items-center">
              <span class="text-sm text-white/40">Conjugate this word</span>
              <span class="mt-1 rounded-full bg-teal-500/10 px-3 py-1 text-xs font-medium text-teal-400">
                {question().type[3] === "te-form" ? (
                  <>
                    <span class="font-japanese">て</span>-form
                  </>
                ) : (
                  question().type[3]
                )}
              </span>

              <Show
                when={props.noFurigana}
                fallback={
                  <div
                    class="mt-4 text-center font-japanese text-3xl font-medium sm:text-5xl"
                    innerHTML={convertFuriganaToRubyHtml(
                      question().term.furigana,
                      "1rem",
                    )}
                  />
                }
              >
                <div class="mt-4 text-center font-japanese text-3xl font-medium sm:text-5xl">
                  {question().term.word}
                </div>
              </Show>

              <Show when={props.showMeaning}>
                <p class="mt-2 text-lg text-white/40">
                  {question().term.meaning}
                </p>
              </Show>

              {/* Conjugation details */}
              <div class="mt-3 flex flex-wrap items-center justify-center gap-1.5 text-xs text-white/30">
                <span>{question().type[0]}</span>
                <span class="text-white/15">·</span>
                <span>{question().type[1]}</span>
                <span class="text-white/15">·</span>
                <span>{question().type[2]}</span>
              </div>
            </div>

            {/* Input area */}
            <div class="mx-auto w-full max-w-sm space-y-4">
              <WanakanaWrapper enabled={true} watch={userAnswer()}>
                <TextField>
                  <TextFieldInput
                    ref={inputRef}
                    type="text"
                    placeholder="Type your answer..."
                    value={userAnswer()}
                    onInput={(e: InputEvent) =>
                      setUserAnswer((e.target as HTMLInputElement).value)
                    }
                    disabled={isAnswered()}
                    onKeyDown={handleKeyDown}
                    class={cn(
                      "font-japanese h-12 rounded-2xl border bg-white/5 py-4 text-center text-lg font-medium outline-none transition-colors placeholder:text-white/30",
                      !isAnswered() && "border-white/10 focus:border-cyan-500",
                      isAnswered() &&
                        question().correct &&
                        "border-emerald-500 bg-emerald-500/10 text-emerald-400",
                      isAnswered() &&
                        !question().correct &&
                        "border-rose-500 bg-rose-500/10 text-rose-400",
                    )}
                  />
                </TextField>
              </WanakanaWrapper>

              {/* Feedback */}
              <Show when={isAnswered()}>
                <div
                  class={cn(
                    "rounded-lg p-3 text-center text-sm font-medium",
                    question().correct
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-rose-500/10 text-rose-400",
                  )}
                >
                  <Show
                    when={question().correct}
                    fallback={
                      <>
                        <p>Correct answer(s):</p>
                        <p class="mt-1 font-japanese text-lg font-bold">
                          {question()
                            .answers.map((a) => a.reading)
                            .join(", ")}
                        </p>
                      </>
                    }
                  >
                    <p>Correct!</p>
                  </Show>
                </div>
              </Show>
            </div>
          </div>
        )}
      </Show>

      {/* Bottom button */}
      <div class="fixed bottom-20 left-0 right-0 z-30 flex justify-center px-4">
        <div ref={actionBtnRef} class="w-full max-w-xs">
          <Button3D
            color={
              !isAnswered()
                ? "rgb(20,184,166)"
                : currentQuestion()?.correct
                  ? "rgb(16,185,129)"
                  : "rgb(244,63,94)"
            }
            disabled={!userAnswer().trim() && !isAnswered()}
            onClick={isAnswered() ? handleNext : handleSubmit}
          >
            {isAnswered() ? "Next" : "Check"}
          </Button3D>
        </div>
      </div>
    </div>
  )
}
