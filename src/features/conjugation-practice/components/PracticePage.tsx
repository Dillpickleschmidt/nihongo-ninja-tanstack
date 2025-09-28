// features/conjugation-practice/components/PracticePage.tsx
import { createSignal, createEffect, onMount, Show, For } from "solid-js"
import { createStore } from "solid-js/store"
import { Button } from "@/components/ui/button"
import WanakanaWrapper from "@/features/wanakana/WanaKana"
import { TextField, TextFieldInput } from "@/components/ui/text-field"
import { checkAnswer, Question } from "../utils/questionUtils"
import { generateQuestions } from "../utils/questionGenerator"
import ProgressDisplay from "./ProgressDisplay"
import type { ConjugationPracticeSettings } from "../schemas/settings"

type PracticePageProps = {
  settings: ConjugationPracticeSettings
  onComplete: (finalState: ReviewSessionState) => void
  navigateToSettings: () => void
}

type ReviewSessionState = {
  questions: Question[]
  currentIndex: number
  score: number
  isComplete: boolean
}

export default function PracticePage({
  settings,
  onComplete,
  navigateToSettings,
}: PracticePageProps) {
  const [sessionState, setSessionState] = createStore<ReviewSessionState>({
    questions: [],
    currentIndex: 0,
    score: 0,
    isComplete: false,
  })
  const [userAnswer, setUserAnswer] = createSignal("")
  const [isAnswered, setIsAnswered] = createSignal(false)

  let nextQuestionButtonRef: HTMLButtonElement | undefined
  let inputRef: HTMLInputElement | undefined

  const currentQuestion = () =>
    sessionState.questions[sessionState.currentIndex]

  // Focus the "Next Question" button after submission
  createEffect(() => {
    if (isAnswered() && nextQuestionButtonRef) {
      // console.log("Focusing next question button")
      nextQuestionButtonRef.focus()
    }
  })

  createEffect(() => {
    if (sessionState.isComplete) {
      onComplete(sessionState)
    }
  })

  onMount(() => {
    startSession()
  })

  function startSession() {
    const questions = generateQuestions(settings)
    setSessionState({
      questions,
      currentIndex: 0,
      score: 0,
      isComplete: false,
    })
  }

  function handleSubmit() {
    if (!isAnswered()) {
      const question = currentQuestion()
      if (question) {
        const checkedQuestion = checkAnswer(question, userAnswer())
        setSessionState("questions", sessionState.currentIndex, checkedQuestion)
        setSessionState(
          "score",
          (score) => score + (checkedQuestion.correct ? 1 : 0),
        )
      }
      setIsAnswered(true)
    }
  }

  function handleNextQuestion() {
    const nextIndex = sessionState.currentIndex + 1
    const isComplete = nextIndex >= sessionState.questions.length
    setSessionState("currentIndex", nextIndex)
    setSessionState("isComplete", isComplete)
    setUserAnswer("")
    setIsAnswered(false)
    inputRef?.focus()
  }

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      event.preventDefault()
      isAnswered() ? handleNextQuestion() : handleSubmit()
    }
  }

  return (
    <div class="mx-auto px-6 sm:min-w-[600px]">
      <Show when={currentQuestion()}>
        {(question) => (
          <div class="space-y-8">
            <section class="rounded-xl">
              <div class="space-y-6">
                <h1 class="font-japanese text-center text-4xl font-medium">
                  <span class="font-bold">{question().term.reading}</span>
                  {question().term.word !== question().term.reading &&
                    ` (${question().term.word})`}
                </h1>

                <div class="bg-background/50 rounded-lg border p-4">
                  <p class="text-center">
                    <span class="text-xl font-bold italic">Type: </span>
                    <span class="ml-2 text-2xl font-medium">
                      {question().type[3] === "te-form" ? (
                        <>
                          <span class="font-japanese">て</span>-form
                        </>
                      ) : (
                        question().type.join(", ")
                      )}
                    </span>
                  </p>
                </div>
              </div>
            </section>

            <section class="rounded-xl">
              <div class="mb-6 min-h-[7rem]">
                {isAnswered() && (
                  <div class="space-y-0">
                    <p
                      class={`font-medium ${
                        question().correct ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {question().correct ? "Correct!" : "Incorrect."}
                    </p>
                    {!question().correct && (
                      <>
                        <p class="pb-3 text-xl">Correct answer(s):</p>
                        <p class="font-japanese text-center text-4xl">
                          <For each={question().answers}>
                            {(answer) => <span>{answer.reading}</span>}
                          </For>
                        </p>
                      </>
                    )}
                  </div>
                )}
              </div>

              <div class="space-y-4">
                <WanakanaWrapper enabled={true} watch={userAnswer()}>
                  <TextField>
                    <TextFieldInput
                      ref={inputRef}
                      type="text"
                      placeholder="Your answer"
                      value={userAnswer()}
                      onInput={(e: InputEvent) =>
                        setUserAnswer((e.target as HTMLInputElement).value)
                      }
                      disabled={isAnswered()}
                      onKeyDown={handleKeyDown}
                      class={`font-japanese placeholder:font-inter focus-visible:ring-primary/25 h-12 py-4 text-center text-3xl disabled:opacity-100 ${
                        question().correct
                          ? "bg-green-400 dark:bg-green-500"
                          : isAnswered() && "bg-red-500"
                      }`}
                    />
                  </TextField>
                </WanakanaWrapper>

                <div class="flex justify-center">
                  <Button
                    onClick={isAnswered() ? handleNextQuestion : handleSubmit}
                    size="lg"
                    class="bg-card-foreground/65 text-primary hover:bg-card-foreground w-full rounded-lg py-3 text-sm backdrop-blur-sm lg:text-base"
                    ref={nextQuestionButtonRef}
                  >
                    {isAnswered() ? "Next Question" : "Submit"}
                  </Button>
                </div>
              </div>
            </section>
            <ProgressDisplay
              attempted={sessionState.currentIndex}
              correct={sessionState.score}
            />
            <Button
              onClick={navigateToSettings}
              variant="outline"
              class="!mt-4 w-full text-xs"
            >
              Return to Settings
            </Button>
          </div>
        )}
      </Show>
    </div>
  )
}
