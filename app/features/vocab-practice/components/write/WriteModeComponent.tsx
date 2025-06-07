// vocab-practice/components/write/WriteModeComponent.tsx
import { createEffect, createMemo, createSignal, For, Show } from "solid-js"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import { handleWrittenAnswer, checkParticleAnswers } from "./write"
import { Button } from "@/components/ui/button"
import {
  TextField,
  TextFieldInput,
  TextFieldDescription,
} from "@/components/ui/text-field"
import WanakanaWrapper from "@/features/wanakana/WanaKana"

export default function WriteModeComponent() {
  // --- Local state ---
  const [userAnswer, setUserAnswer] = createSignal("")
  const [particleAnswers, setParticleAnswers] = createSignal<string[]>([])
  const [isMainAnswerCorrect, setIsMainAnswerCorrect] = createSignal(false)
  const [particleCorrectness, setParticleCorrectness] = createSignal<boolean[]>(
    [],
  )
  let inputRef: HTMLInputElement | undefined
  let particleRefs: (HTMLInputElement | undefined)[] = []

  const context = useVocabPracticeContext()
  const correctEntry = createMemo(
    () => context.deckState.workingSet[context.gameState.currentCardIndex],
  )

  // --- Reset state on new question ---
  createEffect(() => {
    if (!context.gameState.hasUserAnswered && inputRef) {
      inputRef.focus()
      setUserAnswer("")
      setIsMainAnswerCorrect(false)
      setParticleAnswers(
        new Array(correctEntry().particles?.length || 0).fill(""),
      )
      setParticleCorrectness(
        new Array(correctEntry().particles?.length || 0).fill(false),
      )
    }
  })

  // --- Handlers ---
  function handleSubmit() {
    if (context.gameState.hasUserAnswered) return

    context.setGameState({ hasUserAnswered: true })

    const mainAnswerCorrect = handleWrittenAnswer(
      userAnswer(),
      correctEntry(),
      context.settings.enabledAnswerCategories,
    )
    setIsMainAnswerCorrect(mainAnswerCorrect)

    const particleResults = correctEntry().particles
      ? checkParticleAnswers(particleAnswers(), correctEntry().particles!)
      : []
    setParticleCorrectness(particleResults)

    // If any part is incorrect, the whole answer is incorrect
    context.setGameState({
      isAnswerCorrect:
        mainAnswerCorrect && particleResults.every((result) => result),
    })
  }

  function handleParticleInput(index: number, value: string) {
    setParticleAnswers((prev) => {
      const newAnswers = [...prev]
      newAnswers[index] = value
      return newAnswers
    })
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter" && !context.gameState.hasUserAnswered) {
      e.preventDefault()
      handleSubmit()
    }
  }

  // --- Main input field ---
  const mainTextField = (
    <TextField class="w-full max-w-xs">
      <div class="h-6">
        {!context.gameState.hasUserAnswered && (
          <TextFieldDescription>Type your answer.</TextFieldDescription>
        )}
      </div>
      <TextFieldInput
        type="text"
        ref={inputRef}
        value={userAnswer()}
        onInput={(e) => setUserAnswer(e.currentTarget.value)}
        onKeyDown={handleKeyDown}
        autofocus
        autocomplete="off"
        autocapitalize="none"
        autocorrect={context.settings.practiceMode === "kana" ? "off" : "on"}
        disabled={context.gameState.hasUserAnswered}
        class={`${
          context.gameState.hasUserAnswered
            ? isMainAnswerCorrect()
              ? "text-green-500"
              : "text-red-500"
            : ""
        } border-card-foreground font-bold opacity-100 xl:!text-lg`}
      />
    </TextField>
  )

  // --- Render ---
  return (
    <div class="space-y-6">
      {/* --- Answer displayr--- */}
      <div class="flex min-h-16 w-full items-end justify-center text-center">
        <Show when={context.gameState.hasUserAnswered}>
          <div class="space-y-2">
            <For
              each={correctEntry().answerCategories.filter((category) =>
                context.settings.enabledAnswerCategories.includes(
                  category.category,
                ),
              )}
            >
              {(category) => (
                <p class="text-primary text-xl font-bold">
                  {category.category === "Kana" ? (
                    <span class="font-japanese">
                      {category.answers.join(", ")}
                    </span>
                  ) : (
                    category.answers.join(", ")
                  )}
                </p>
              )}
            </For>
          </div>
        </Show>
      </div>

      {/* --- Input section --- */}
      <div class="flex flex-col items-center space-y-4">
        <div class="flex items-end space-x-4">
          {context.settings.practiceMode === "kana" ? (
            <WanakanaWrapper>{mainTextField}</WanakanaWrapper>
          ) : (
            <>{mainTextField}</>
          )}
          <Show
            when={
              context.gameState.hasUserAnswered &&
              !context.gameState.isAnswerCorrect
            }
          >
            <Button
              variant="outline"
              class="border-green-500 bg-green-500 text-white hover:bg-green-600"
              onClick={() => {
                setIsMainAnswerCorrect(true)
                context.setGameState({ isAnswerCorrect: true })
                particleAnswers().forEach((_, index) => {
                  setParticleCorrectness((prev) => {
                    const newCorrectness = [...prev]
                    newCorrectness[index] = true
                    return newCorrectness
                  })
                })
              }}
            >
              No, I was correct
            </Button>
          </Show>
        </div>

        {/* --- Particle inputs --- */}
        <Show when={!!correctEntry().particles}>
          <div class="w-full max-w-md space-y-3">
            <For each={correctEntry().particles}>
              {(object, index) => (
                <div class="flex items-center gap-3 text-lg font-semibold">
                  <span class="min-w-fit">
                    {object.label ? `${object.label} -` : "Particle:"}
                  </span>
                  <WanakanaWrapper>
                    <TextField class="w-20">
                      <TextFieldInput
                        type="text"
                        ref={(el: HTMLInputElement | undefined) => {
                          particleRefs[index()] = el
                        }}
                        value={particleAnswers()[index()] || ""}
                        onInput={(e) =>
                          handleParticleInput(index(), e.currentTarget.value)
                        }
                        onKeyDown={handleKeyDown}
                        disabled={context.gameState.hasUserAnswered}
                        class={`font-japanese border-card-foreground text-center ${
                          context.gameState.hasUserAnswered
                            ? particleCorrectness()[index()]
                              ? "text-green-500"
                              : "text-red-500"
                            : ""
                        }`}
                      />
                    </TextField>
                  </WanakanaWrapper>
                  <Show when={context.gameState.hasUserAnswered}>
                    <span class="font-japanese text-orange-400">
                      {object.particle}
                    </span>
                  </Show>
                </div>
              )}
            </For>
          </div>
        </Show>

        {/* --- Submit button --- */}
        <Show when={!context.gameState.hasUserAnswered}>
          <Button
            onClick={handleSubmit}
            disabled={context.gameState.hasUserAnswered}
            class="rounded-xl bg-orange-500 px-8 py-2 font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-orange-600"
          >
            Submit
          </Button>
        </Show>
      </div>
    </div>
  )
}
