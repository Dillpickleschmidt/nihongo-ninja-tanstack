import { For } from "solid-js"
import { Button } from "@/components/ui/button"
import { Question } from "../utils/questionUtils"

type SummaryPageProps = {
  finalState: {
    questions: Question[]
    score: number
  }
  onRestartSession: () => void
  onReturnToSettings: () => void
}

export default function SummaryPage({
  finalState,
  onRestartSession,
  onReturnToSettings,
}: SummaryPageProps) {
  return (
    <div class="w-screen max-w-[900px] space-y-6 px-6 sm:px-8 md:px-12">
      <div class="w-full pt-24">
        <h1 class="text-center text-5xl font-semibold">
          Practice Session Complete!
        </h1>
        <div class="mt-2 text-center text-4xl">🎉</div>
      </div>
      <p class="text-center text-2xl">
        Your score: {finalState.score} / {finalState.questions.length}
      </p>
      <div class="space-y-4">
        <For each={finalState.questions}>
          {(question, index) => (
            <div class="relative mx-2 mb-4 flex min-w-[500px] overflow-hidden rounded-lg bg-card shadow-md xl:mx-8">
              <div class="flex-1 py-4 pl-4 pr-6">
                <p
                  class={`${!question.correct ? "text-[#ff5757]" : ""} text-xl font-bold`}
                >
                  Question {index() + 1}:{" "}
                  <span class="font-japanese">
                    {question.term.reading}
                    {question.term.word !== question.term.reading &&
                      ` (${question.term.word})`}
                  </span>
                </p>
                <p class="text-sm italic text-card-foreground">
                  Type: {question.type.join(", ")}
                </p>
                <p class="text-lg">
                  Your answer:{" "}
                  <span class="font-japanese">{question.givenAnswer}</span>
                </p>
                <p class="text-lg">
                  Correct answer(s):{" "}
                  <span class="font-japanese">
                    {question.answers.map((a) => a.reading).join(", ")}
                  </span>
                </p>
                {!question.correct && (
                  <p class="mt-1 text-sm text-red-500">Incorrect</p>
                )}
              </div>
              <div
                class={`absolute right-0 h-full ${
                  !question.correct ? "w-4 bg-red-500" : "w-2 bg-emerald-500/50"
                }`}
              ></div>
            </div>
          )}
        </For>
      </div>
      <div class="flex justify-center space-x-4">
        <Button onClick={onRestartSession} size="lg" class="bg-orange-500">
          Start New Session
        </Button>
        <Button onClick={onReturnToSettings} size="lg">
          Return to Settings
        </Button>
      </div>
    </div>
  )
}
