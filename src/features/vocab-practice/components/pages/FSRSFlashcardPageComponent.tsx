// vocab-practice/components/pages/FSRSFlashcardPageComponent.tsx
import {
  createSignal,
  Show,
  createEffect,
  onMount,
  onCleanup,
  createResource,
} from "solid-js"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import ProgressHeader from "../ProgressHeader"
import { Rating, Grade } from "ts-fsrs"
import { cn } from "@/utils"
import { KanjiAnimation } from "@/components/KanjiAnimation"
import { KanjiAnimationControls } from "@/components/KanjiAnimationControls"
import { processSvgString } from "@/utils/svg-processor"
import type { PracticeCard } from "../../types"
import { PracticeCardContainer } from "../shared/PracticeCardContainer"
import { MnemonicSection } from "../shared/MnemonicSection"
import { ActionButton } from "../shared/ActionButton"
import { KanjiGrid } from "@/components/ui/KanjiGrid"

// -----------------------------
// Helpers
// -----------------------------

function getSideConfig(
  card: PracticeCard,
  side: "prompt" | "answer",
  uiState: ReturnType<typeof useVocabPracticeContext>["uiState"],
) {
  const { flipVocabQA, flipKanjiRadicalQA } = uiState.settings
  const isPrompt = side === "prompt"

  let isJapanese = false
  let text: string | string[] = isPrompt ? card.prompt : card.validAnswers

  if (card.practiceItemType === "vocabulary") {
    if (card.practiceMode === "spellings") {
      isJapanese = isPrompt ? flipVocabQA : !flipVocabQA
    } else {
      // meanings mode
      isJapanese = isPrompt ? !flipVocabQA : flipVocabQA
    }
  } else {
    // kanji or radical
    isJapanese = isPrompt ? !flipKanjiRadicalQA : flipKanjiRadicalQA
  }

  const showAsKanjiAnimation =
    card.practiceMode === "meanings" &&
    (card.practiceItemType === "kanji" ||
      card.practiceItemType === "radical") &&
    isJapanese &&
    (Array.isArray(text) ? text[0]?.length === 1 : text.length === 1)

  return { isJapanese, showAsKanjiAnimation, text }
}

// -----------------------------
// Subcomponents
// -----------------------------

function FlashcardSide(props: {
  side: "prompt" | "answer"
  card: () => PracticeCard
  uiState: ReturnType<typeof useVocabPracticeContext>["uiState"]
  showAnswer: boolean
  getSvgForCharacter: (char: string) => Promise<string | null>
  kanjiDisplaySettings: ReturnType<
    typeof useVocabPracticeContext
  >["kanjiDisplaySettings"]
  setKanjiDisplaySettings: ReturnType<
    typeof useVocabPracticeContext
  >["setKanjiDisplaySettings"]
  kanjiAnimationSettings: ReturnType<
    typeof useVocabPracticeContext
  >["kanjiAnimationSettings"]
  setKanjiAnimationSettings: ReturnType<
    typeof useVocabPracticeContext
  >["setKanjiAnimationSettings"]
  kanjiStyleSettings: ReturnType<
    typeof useVocabPracticeContext
  >["kanjiStyleSettings"]
}) {
  const sideConfig = () =>
    getSideConfig(props.card(), props.side, props.uiState)

  // Load SVG data if we should show kanji animation
  const [svgData] = createResource(
    () =>
      sideConfig().showAsKanjiAnimation
        ? Array.isArray(sideConfig().text)
          ? sideConfig().text[0]
          : sideConfig().text
        : null,
    (char) => (char ? props.getSvgForCharacter(char) : null),
  )

  const textClass = () => {
    const cfg = sideConfig()
    const isJapanese = cfg.isJapanese

    // Answer side: simple sizing
    if (props.side === "answer") {
      return isJapanese
        ? "font-japanese text-5xl sm:text-6xl lg:text-7xl font-medium"
        : "font-inter text-2xl sm:text-3xl font-semibold"
    }

    // Prompt side: For kanji cards, keep consistent sizing regardless of showAnswer
    if (isKanjiMeaningsCard()) {
      return isJapanese
        ? "font-japanese text-3xl sm:text-4xl lg:text-5xl"
        : "font-inter text-2xl sm:text-3xl font-semibold" // Consistent English size too
    }

    // Prompt side: Non-kanji cards can change size with answer reveal
    if (isJapanese) {
      return props.showAnswer
        ? "font-japanese text-3xl sm:text-4xl lg:text-5xl"
        : "font-japanese text-4xl sm:text-5xl lg:text-6xl"
    }

    // Prompt side: English text for non-kanji cards
    return props.showAnswer
      ? "font-inter text-xl sm:text-2xl font-semibold"
      : "font-inter text-2xl sm:text-3xl font-semibold"
  }

  // Check if this card type could show kanji animation
  const isKanjiMeaningsCard = () => {
    const card = props.card()
    return (
      card.practiceMode === "meanings" &&
      (card.practiceItemType === "kanji" || card.practiceItemType === "radical")
    )
  }

  return (
    <Show
      when={sideConfig().showAsKanjiAnimation && svgData() && !svgData.loading}
      fallback={
        <>
          <p class={cn("mt-6 text-orange-400", textClass())}>
            {Array.isArray(sideConfig().text)
              ? (sideConfig().text as string[]).join(", ")
              : (sideConfig().text as string)}
          </p>
          <Show
            when={
              isKanjiMeaningsCard() &&
              props.side === "prompt" &&
              !props.showAnswer
            }
          >
            <div class="mt-6 flex justify-center">
              <KanjiGrid size={props.kanjiStyleSettings.size} />
            </div>
          </Show>
        </>
      }
    >
      <div class="my-6 flex justify-center">
        <KanjiAnimation
          processedSvgContent={processSvgString(svgData()!, {
            size: props.kanjiStyleSettings.size,
            strokeColor: props.kanjiStyleSettings.strokeColor,
            strokeWidth: props.kanjiStyleSettings.strokeWidth,
            showGrid: props.kanjiStyleSettings.showGrid,
            autostart: props.kanjiAnimationSettings.autostart,
            showNumbers: props.kanjiDisplaySettings.numbers,
            showStartDots: props.kanjiDisplaySettings.startDots,
            showDirectionLines: props.kanjiDisplaySettings.directionLines,
          })}
          styleSettings={props.kanjiStyleSettings}
          displaySettings={props.kanjiDisplaySettings}
          animationSettings={props.kanjiAnimationSettings}
        >
          {(animationRef) => (
            <KanjiAnimationControls
              animationRef={animationRef}
              displaySettings={props.kanjiDisplaySettings}
              animationSettings={props.kanjiAnimationSettings}
              onDisplaySettingsChange={props.setKanjiDisplaySettings}
              onAnimationSettingsChange={props.setKanjiAnimationSettings}
              processedSvgContent={processSvgString(svgData()!, {
                size: props.kanjiStyleSettings.size,
                strokeColor: props.kanjiStyleSettings.strokeColor,
                strokeWidth: props.kanjiStyleSettings.strokeWidth,
                showGrid: props.kanjiStyleSettings.showGrid,
                autostart: props.kanjiAnimationSettings.autostart,
                showNumbers: props.kanjiDisplaySettings.numbers,
                showStartDots: props.kanjiDisplaySettings.startDots,
                showDirectionLines: props.kanjiDisplaySettings.directionLines,
              })}
              rawSvgContent={svgData()!}
              styleSettings={props.kanjiStyleSettings}
            />
          )}
        </KanjiAnimation>
      </div>
    </Show>
  )
}

function RatingButtons(props: { onAnswer: (rating: Grade) => void }) {
  // Four rating buttons (Again, Hard, Good, Easy)
  const RATING_BUTTONS = [
    { rating: Rating.Again, label: "Again", color: "bg-red-600", key: "1" },
    { rating: Rating.Hard, label: "Hard", color: "bg-yellow-500", key: "2" },
    { rating: Rating.Good, label: "Good", color: "bg-green-600", key: "3" },
    { rating: Rating.Easy, label: "Easy", color: "bg-blue-600", key: "4" },
  ]

  return (
    <div class="mt-6 grid w-full max-w-3xl grid-cols-4 gap-3">
      {RATING_BUTTONS.map((button) => (
        <button
          onClick={() => props.onAnswer(button.rating as Grade)}
          class={cn(
            "relative h-12 rounded-xl text-sm font-semibold text-white sm:text-base",
            button.color,
          )}
        >
          <div class="absolute top-[6px] right-[6px] flex h-5 w-5 items-center justify-center rounded-full bg-black/20 font-mono text-[10px] font-bold text-white">
            {button.key}
          </div>
          {button.label}
        </button>
      ))}
    </div>
  )
}

// -----------------------------
// Main Component
// -----------------------------

export default function FSRSFlashcardPageComponent() {
  const {
    uiState,
    currentCard,
    answerCardWithUIUpdate,
    getSvgForCharacter,
    kanjiDisplaySettings,
    setKanjiDisplaySettings,
    kanjiAnimationSettings,
    setKanjiAnimationSettings,
    kanjiStyleSettings,
  } = useVocabPracticeContext()

  const [showAnswer, setShowAnswer] = createSignal(false)
  let showAnswerButtonRef: HTMLButtonElement | undefined

  // Reset state on new card
  createEffect(() => {
    if (currentCard()) {
      setShowAnswer(false)
      setTimeout(() => showAnswerButtonRef?.focus(), 0)
    }
  })

  // Keyboard shortcuts
  onMount(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (["1", "2", "3", "4", " "].includes(e.key)) e.preventDefault()
      if (!currentCard()) return

      if (!showAnswer()) {
        if (e.key === " ") setShowAnswer(true)
      } else {
        if (e.key === "1") handleAnswer(Rating.Again)
        if (e.key === "2") handleAnswer(Rating.Hard)
        if (e.key === "3") handleAnswer(Rating.Good)
        if (e.key === "4") handleAnswer(Rating.Easy)
      }
    }
    window.addEventListener("keydown", handleKeyPress)
    onCleanup(() => window.removeEventListener("keydown", handleKeyPress))
  })

  const handleAnswer = async (rating: Grade) => {
    await answerCardWithUIUpdate(rating)
  }

  return (
    <Show when={currentCard()} fallback={<div>Loading...</div>}>
      {(card) => (
        <div class="min-h-screen">
          <ProgressHeader />
          <div class="mx-auto max-w-3xl px-4 pt-20 sm:pt-28">
            <PracticeCardContainer>
              {/* Prompt */}
              <div class="flex min-h-48 flex-col items-center justify-center text-center">
                <FlashcardSide
                  side="prompt"
                  card={card}
                  uiState={uiState}
                  showAnswer={showAnswer()}
                  getSvgForCharacter={getSvgForCharacter}
                  kanjiDisplaySettings={kanjiDisplaySettings}
                  setKanjiDisplaySettings={setKanjiDisplaySettings}
                  kanjiAnimationSettings={kanjiAnimationSettings}
                  setKanjiAnimationSettings={setKanjiAnimationSettings}
                  kanjiStyleSettings={kanjiStyleSettings}
                />

                {/* Answer */}
                <Show
                  when={showAnswer()}
                  fallback={
                    <ActionButton
                      ref={showAnswerButtonRef}
                      onClick={() => setShowAnswer(true)}
                      variant="secondary"
                      class="mt-6 w-auto px-6"
                    >
                      Show Answer
                    </ActionButton>
                  }
                >
                  <FlashcardSide
                    side="answer"
                    card={card}
                    uiState={uiState}
                    showAnswer={showAnswer()}
                    getSvgForCharacter={getSvgForCharacter}
                    kanjiDisplaySettings={kanjiDisplaySettings}
                    setKanjiDisplaySettings={setKanjiDisplaySettings}
                    kanjiAnimationSettings={kanjiAnimationSettings}
                    setKanjiAnimationSettings={setKanjiAnimationSettings}
                    kanjiStyleSettings={kanjiStyleSettings}
                  />

                  <MnemonicSection visible={() => showAnswer()} />
                </Show>
              </div>
            </PracticeCardContainer>

            <Show when={showAnswer()}>
              <div class="mt-6 flex justify-center">
                <RatingButtons onAnswer={handleAnswer} />
              </div>
            </Show>
          </div>
        </div>
      )}
    </Show>
  )
}
