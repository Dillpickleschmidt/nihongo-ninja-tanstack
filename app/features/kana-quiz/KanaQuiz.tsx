// app/features/kana-quiz/KanaQuiz.tsx
import CharacterBox from "@/features/kana-quiz/components/CharacterBox"
import {
  useKanaQuiz,
  type KanaItem,
} from "@/features/kana-quiz/hooks/useKanaQuiz"
import { Link } from "@tanstack/solid-router"
import { For, Show } from "solid-js"
import { createMediaQuery } from "@solid-primitives/media"
import { RotateCcw } from "lucide-solid"
import { HeaderCard } from "./components/HeaderCard"
import { ResultsCard } from "./components/ResultsCard"
import { ActionButton } from "./components/ActionButton"

type KanaQuizProps = {
  kana: KanaItem[]
  nextLesson: string
  title: string
}

export function KanaQuiz(props: KanaQuizProps) {
  const {
    characterBoxes,
    showResults,
    numCorrect,
    handleInputChange,
    handleSubmit,
    handleRetry,
  } = useKanaQuiz(props.kana)

  // Media queries
  const isMobile = createMediaQuery("(max-width: 640px)")
  const isTablet = createMediaQuery(
    "(min-width: 641px) and (max-width: 1024px)",
  )

  // Responsive dimensions
  const dimensions = () => {
    if (isMobile()) {
      return {
        header: { width: 340, height: 180 },
        results: { width: 320, height: 200 },
        buttons: {
          submit: { width: 140, height: 50 },
          retry: { width: 120, height: 50 },
          next: { width: 140, height: 50 },
        },
      }
    }
    if (isTablet()) {
      return {
        header: { width: 500, height: 170 },
        results: { width: 450, height: 190 },
        buttons: {
          submit: { width: 160, height: 60 },
          retry: { width: 140, height: 60 },
          next: { width: 180, height: 60 },
        },
      }
    }
    return {
      header: { width: 700, height: 180 },
      results: { width: 600, height: 200 },
      buttons: {
        submit: { width: 160, height: 60 },
        retry: { width: 140, height: 60 },
        next: { width: 180, height: 60 },
      },
    }
  }

  // Score-based styling
  const scorePercentage = () => numCorrect() / props.kana.length

  const getResultsTheme = () => {
    const percentage = scorePercentage()
    if (percentage <= 0.5) {
      return {
        gradient: "from-rose-500 to-pink-500",
        title: "YOU FAILED! 🤦",
        message: "Review the terms and try again!",
      }
    }
    if (percentage <= 0.8) {
      return {
        gradient: "from-amber-500 to-yellow-500",
        title: "You're getting there! 😎",
        message: "Try again and see if you can get 80%!",
      }
    }
    return {
      gradient: "from-green-500 to-emerald-600",
      title: "Nice job! 🥳",
      message: "Keep it up!",
    }
  }

  const resultsTheme = () => getResultsTheme()

  return (
    <div class="min-h-screen bg-gray-900">
      {/* Header Section */}
      <header class="px-4 pt-4 pb-4 text-center">
        <Show
          when={showResults()}
          fallback={
            <HeaderCard
              width={dimensions().header.width}
              height={dimensions().header.height}
              title={props.title}
            />
          }
        >
          <ResultsCard
            width={dimensions().results.width}
            height={dimensions().results.height}
            theme={resultsTheme()}
            numCorrect={numCorrect()}
            total={props.kana.length}
          />
        </Show>
      </header>

      {/* Character Grid */}
      <main class="container mx-auto mt-12 grid grid-cols-[repeat(auto-fill,minmax(145px,_1fr))] gap-3 p-3 pb-32">
        <For each={characterBoxes()}>
          {(characterBox, index) => (
            <CharacterBox
              character={characterBox.hiragana}
              userInput={characterBox.userInput}
              onInputChange={(newUserInput) =>
                handleInputChange(index(), newUserInput)
              }
              disabled={showResults()}
              isCorrect={showResults() && characterBox.isCorrect}
              isIncorrect={showResults() && !characterBox.isCorrect}
              showResults={showResults()}
            />
          )}
        </For>
      </main>

      {/* Fixed Action Bar */}
      <footer class="fixed inset-x-0 bottom-0 z-50 border-t border-gray-700/50 bg-gray-900/95 p-4 backdrop-blur-sm">
        <div class="mx-auto flex max-w-lg justify-center gap-3">
          <Show
            when={showResults()}
            fallback={
              <ActionButton
                width={dimensions().buttons.submit.width}
                height={dimensions().buttons.submit.height}
                onClick={handleSubmit}
                variant="primary"
              >
                Submit
              </ActionButton>
            }
          >
            <ActionButton
              width={dimensions().buttons.retry.width}
              height={dimensions().buttons.retry.height}
              onClick={handleRetry}
              variant="retry"
            >
              Retry{" "}
              <RotateCcw size={18} stroke-width={2.5} class="inline-flex" />
            </ActionButton>

            <Link to={props.nextLesson} class="no-underline">
              <ActionButton
                width={dimensions().buttons.next.width}
                height={dimensions().buttons.next.height}
                variant="success"
              >
                Next Lesson {"->"}
              </ActionButton>
            </Link>
          </Show>
        </div>
      </footer>
    </div>
  )
}
