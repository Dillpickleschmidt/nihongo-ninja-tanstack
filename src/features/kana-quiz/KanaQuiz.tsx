// src/features/kana-quiz/KanaQuiz.tsx
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
import { ActionButton } from "./components/ActionButton"
import { TextbookChapterBackgrounds } from "../learn-page/components/shared/TextbookChapterBackgrounds"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/queries/user-settings"

type KanaQuizProps = {
  kana: KanaItem[]
  nextLesson: string
  title: string
  userId: string | null
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
  const settingsQuery = useCustomQuery(() =>
    userSettingsQueryOptions(props.userId),
  )

  // Media queries
  const isMobile = createMediaQuery("(max-width: 640px)")
  const isTablet = createMediaQuery(
    "(min-width: 641px) and (max-width: 1024px)",
  )

  // Responsive dimensions
  const dimensions = () => {
    if (isMobile()) {
      return {
        buttons: {
          submit: { width: 140, height: 50 },
          retry: { width: 120, height: 50 },
          next: { width: 140, height: 50 },
        },
      }
    }
    if (isTablet()) {
      return {
        buttons: {
          submit: { width: 160, height: 60 },
          retry: { width: 140, height: 60 },
          next: { width: 180, height: 60 },
        },
      }
    }
    return {
      buttons: {
        submit: { width: 140, height: 50 },
        retry: { width: 120, height: 50 },
        next: { width: 160, height: 50 },
      },
    }
  }

  // Score-based theming
  const scorePercentage = () => numCorrect() / props.kana.length

  const resultsTheme = () => {
    const percentage = scorePercentage()
    if (percentage <= 0.5) {
      return {
        accent: "bg-rose-500",
        title: "There's work to do 😕",
        message: "Review the kana and try again!",
      }
    }
    if (percentage <= 0.8) {
      return {
        accent: "bg-amber-400",
        title: "You're getting there 😎",
        message: "Push for 80% to really master them.",
      }
    }
    return {
      accent: "bg-emerald-500",
      title: "Excellent 🥳",
      message: "You really know your kana!",
    }
  }

  return (
    <div class="relative min-h-screen">
      {/* Background */}
      <div class="fixed inset-0 -z-10">
        <TextbookChapterBackgrounds
          textbook={settingsQuery.data["active-textbook"]}
          chapter={settingsQuery.data["active-deck"]}
          showGradient={false}
          blur="16px"
        />
      </div>

      {/* Header */}
      <header class="px-4 pt-6 pb-4 text-center">
        <Show
          when={showResults()}
          fallback={<HeaderCard title={props.title} />}
        >
          <HeaderCard
            title={resultsTheme().title}
            theme={{
              accent: resultsTheme().accent,
              message: `You got ${numCorrect()} out of ${props.kana.length}. ${resultsTheme().message}`,
            }}
          />
        </Show>
      </header>

      {/* Character Grid */}
      <main class="container mx-auto mt-10 grid grid-cols-[repeat(auto-fill,minmax(145px,_1fr))] gap-3 p-3 pb-32">
        <For each={characterBoxes()}>
          {(box, idx) => (
            <CharacterBox
              character={box.hiragana}
              userInput={box.userInput}
              onInputChange={(newVal) => handleInputChange(idx(), newVal)}
              disabled={showResults()}
              isCorrect={showResults() && box.isCorrect}
              isIncorrect={showResults() && !box.isCorrect}
              showResults={showResults()}
            />
          )}
        </For>
      </main>

      {/* Footer / Action Bar */}
      <footer class="bg-background/80 border-border fixed inset-x-0 bottom-0 z-50 border-t p-4 backdrop-blur-lg">
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
              Retry
              <RotateCcw
                size={18}
                stroke-width={2.5}
                class="ml-1 inline-flex"
              />
            </ActionButton>

            <Link to={props.nextLesson} class="no-underline">
              <ActionButton
                width={dimensions().buttons.next.width}
                height={dimensions().buttons.next.height}
                variant="success"
              >
                Next Lesson →
              </ActionButton>
            </Link>
          </Show>
        </div>
      </footer>
    </div>
  )
}
