import { createSignal, createEffect, on, Show } from "solid-js"
import { cn } from "@/utils"
import { X } from "lucide-solid"
import WanakanaWrapper from "@/features/wanakana/WanaKana"
import { TextField, TextFieldInput } from "@/components/ui/text-field"
import { Button3D } from "@/components/Button3D"
import { generateQuestion } from "../utils/counterUtils"
import type {
  CounterPattern,
  VocabItem,
  GeneratedQuestion,
  Question,
} from "../types"

type PracticePageProps = {
  patterns: CounterPattern[]
  vocab: VocabItem[]
  amount: number
  onComplete: (questions: Question[], correct: number) => void
  onReturnToSettings: () => void
}

export function PracticePage(props: PracticePageProps) {
  const [currentQuestion, setCurrentQuestion] =
    createSignal<GeneratedQuestion | null>(null)
  const [answer, setAnswer] = createSignal("")
  const [completed, setCompleted] = createSignal(0)
  const [correct, setCorrect] = createSignal(0)
  const [questions, setQuestions] = createSignal<Question[]>([])
  const [firstAttempt, setFirstAttempt] = createSignal(true)
  const [showHint, setShowHint] = createSignal(false)
  const [showCorrectReading, setShowCorrectReading] = createSignal(false)
  const [isCorrect, setIsCorrect] = createSignal(false)
  const [isAnswered, setIsAnswered] = createSignal(false)

  let inputRef: HTMLInputElement | undefined
  let actionBtnRef: HTMLDivElement | undefined

  const progressPct = () =>
    ((completed() + 1) / props.amount) * 100

  // Generate first question
  setCurrentQuestion(generateQuestion(props.patterns, props.vocab))

  // Focus input on new question
  createEffect(
    on(
      () => completed(),
      () => requestAnimationFrame(() => inputRef?.focus()),
    ),
  )

  // Focus action button after answering correctly
  createEffect(
    on(isAnswered, (answered) => {
      if (answered) {
        requestAnimationFrame(() =>
          actionBtnRef?.querySelector<HTMLButtonElement>("button")?.focus(),
        )
      }
    }),
  )

  function handleCheck() {
    const q = currentQuestion()
    if (!q || isAnswered()) return

    const correct = answer() === q.correctReading

    const record: Question = {
      word: q.number === 1 ? q.vocab.word : q.vocab.pluralWord,
      counter: q.pattern.id,
      givenAnswer: answer(),
      correctReading: q.correctReading,
      correct: correct && firstAttempt(),
    }
    setQuestions((qs) => [...qs, record])

    if (correct) {
      if (firstAttempt()) setCorrect((c) => c + 1)
      setIsCorrect(true)
      setIsAnswered(true)
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur()
      }
    } else {
      setFirstAttempt(false)
      if (showHint()) {
        setShowCorrectReading(true)
      } else {
        setShowHint(true)
      }
      setAnswer("")
      requestAnimationFrame(() => inputRef?.focus())
    }
  }

  function handleNext() {
    const nextCompleted = completed() + 1
    if (nextCompleted >= props.amount) {
      props.onComplete(questions(), correct())
      return
    }
    setCompleted(nextCompleted)
    setCurrentQuestion(generateQuestion(props.patterns, props.vocab))
    setAnswer("")
    setFirstAttempt(true)
    setShowHint(false)
    setShowCorrectReading(false)
    setIsCorrect(false)
    setIsAnswered(false)
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter" && answer().trim()) {
      event.preventDefault()
      handleCheck()
    }
  }

  return (
    <div class="flex flex-col gap-2 md:gap-4 font-excalifont">
      {/* Progress header */}
      <div class="flex flex-1 items-center gap-3 mr-3">
        <button
          type="button"
          onClick={props.onReturnToSettings}
          class="text-muted-foreground/70 transition-transform duration-200 hover:scale-125 hover:text-muted-foreground dark:text-white/30 dark:hover:text-white/60"
        >
          <X size={24} />
        </button>
        <div class="h-3.5 flex-1 overflow-hidden rounded-full bg-muted dark:bg-white/10">
          <div
            class="h-full rounded-full transition-all duration-500"
            style={{
              width: `${progressPct()}%`,
              background:
                "linear-gradient(to right, var(--dynamic-accent), color-mix(in srgb, var(--dynamic-accent) 70%, white))",
            }}
          />
        </div>
        <span class="text-sm text-muted-foreground/70 dark:text-white/30">
          {completed() + 1}/{props.amount}
        </span>
      </div>

      {/* Main practice content */}
      <Show when={currentQuestion()}>
        {(question) => (
          <div class="space-y-6 px-2">
            {/* Question display */}
            <div class="flex flex-col items-center">
              <span class="text-sm text-muted-foreground dark:text-white/40">
                How do you count this?
              </span>
              <div class="mt-4 text-center">
                <span class="text-4xl font-bold text-violet-600 sm:text-6xl dark:text-violet-300">
                  {question().number}
                </span>
                <span class="ml-2 text-3xl font-semibold text-foreground/70 sm:ml-3 sm:text-4xl dark:text-white/70">
                  {question().number === 1
                    ? question().vocab.word
                    : question().vocab.pluralWord}
                </span>
              </div>
            </div>

            {/* Input area */}
            <div class="mx-auto w-full max-w-sm space-y-4">
              <p class="text-center text-xs italic text-muted-foreground/70 dark:text-white/30">
                *use caps for katakana
              </p>
              <WanakanaWrapper enabled={true} watch={answer()}>
                <TextField>
                  <TextFieldInput
                    ref={inputRef}
                    type="text"
                    placeholder="Enter the reading..."
                    value={answer()}
                    onInput={(e: InputEvent) =>
                      setAnswer((e.target as HTMLInputElement).value)
                    }
                    disabled={isAnswered()}
                    onKeyDown={handleKeyDown}
                    autocomplete="off"
                    autocapitalize="none"
                    class={cn(
                      "font-japanese h-12 rounded-2xl border bg-card/70 py-4 text-center text-lg font-medium outline-none transition-colors placeholder:text-muted-foreground/60 dark:bg-white/5 dark:placeholder:text-white/30",
                      !isAnswered() &&
                        !showHint() &&
                        "border-border/70 focus:border-violet-500 dark:border-white/10",
                      !isAnswered() &&
                        showHint() &&
                        "border-rose-500/50 focus:border-rose-500",
                      isAnswered() &&
                        "border-violet-500 bg-violet-500/10 text-violet-300",
                    )}
                  />
                </TextField>
              </WanakanaWrapper>

              {/* Hints */}
              <Show when={showHint() && !isAnswered()}>
                <div class="rounded-lg bg-rose-500/10 p-3 text-center text-sm">
                  <p class="text-muted-foreground dark:text-white/50">
                    Counter:{" "}
                    <span class="font-japanese font-bold text-foreground/70 dark:text-white/70">
                      {question().pattern.id}
                    </span>
                  </p>
                  <Show when={showCorrectReading()}>
                    <p class="mt-1 text-rose-400">
                      Correct answer:{" "}
                      <span class="font-japanese font-bold">
                        {question().correctReading}
                      </span>
                    </p>
                  </Show>
                </div>
              </Show>

              {/* Correct feedback */}
              <Show when={isAnswered()}>
                <div class="rounded-lg bg-violet-500/10 p-3 text-center text-sm font-medium text-violet-600 dark:text-violet-300">
                  Correct!
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
              isAnswered()
                ? "rgb(139,92,246)"
                : showHint()
                  ? "rgb(244,63,94)"
                  : "rgb(139,92,246)"
             }
            disabled={!answer().trim() && !isAnswered()}
            onClick={isAnswered() ? handleNext : handleCheck}
          >
            {isAnswered() ? "Next" : "Check"}
          </Button3D>
        </div>
      </div>
    </div>
  )
}
