// vocab-practice/components/pages/FSRSFlashcardPageComponent.tsx
import {
  createSignal,
  Show,
  createEffect,
  onMount,
  onCleanup,
  createResource,
} from "solid-js"
import { Button } from "@/components/ui/button"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import ProgressHeader from "../ProgressHeader"
import { Rating, Grade } from "ts-fsrs"
import { cn } from "@/utils/util"
import { parseMnemonicText } from "@/utils/mnemonic-parser"
import { KanjiAnimation } from "@/components/KanjiAnimation"
import { KanjiAnimationControls } from "@/components/KanjiAnimationControls"
import { processSvgString } from "@/utils/svg-processor"
import type { PracticeCard } from "../../types"

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

  const shouldAnimate =
    card.practiceMode === "meanings" &&
    (card.practiceItemType === "kanji" ||
      card.practiceItemType === "radical") &&
    isJapanese &&
    (Array.isArray(text) ? text[0]?.length === 1 : text.length === 1)

  return { isJapanese, shouldAnimate, text }
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

  const [svgData] = createResource(
    () =>
      sideConfig().shouldAnimate
        ? Array.isArray(sideConfig().text)
          ? sideConfig().text[0]
          : sideConfig().text
        : null,
    (char) => (char ? props.getSvgForCharacter(char) : null),
  )

  const textClass = () => {
    const cfg = sideConfig()
    const isJapanese = cfg.isJapanese
    if (props.side === "prompt") {
      return isJapanese
        ? props.showAnswer
          ? "font-japanese text-4xl lg:text-5xl"
          : "font-japanese text-5xl lg:text-6xl"
        : props.showAnswer
          ? "font-inter text-2xl font-semibold"
          : "font-inter text-4xl font-semibold"
    } else {
      return isJapanese
        ? "font-japanese text-6xl lg:text-7xl"
        : "font-inter text-3xl font-semibold"
    }
  }

  return (
    <Show
      when={sideConfig().shouldAnimate && svgData() && !svgData.loading}
      fallback={
        <p class={cn("mt-6 text-orange-400", textClass())}>
          {Array.isArray(sideConfig().text)
            ? (sideConfig().text as string[]).join(", ")
            : (sideConfig().text as string)}
        </p>
      }
    >
      <div class="mt-6 flex justify-center">
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
          styleSettings={{
            ...props.kanjiStyleSettings,
            size: props.kanjiStyleSettings.size,
          }}
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
              styleSettings={{
                ...props.kanjiStyleSettings,
              }}
            />
          )}
        </KanjiAnimation>
      </div>
    </Show>
  )
}

function Mnemonics(props: { card: () => PracticeCard }) {
  const meaningMnemonic = () => props.card().mnemonics?.kanji?.[0] || ""
  const readingMnemonic = () => props.card().mnemonics?.reading?.[0] || ""

  return (
    <div class="mt-6 flex flex-col items-center gap-4">
      {/* Meaning Mnemonic (only in meanings mode, for kanji/radical) */}
      <Show
        when={
          ["kanji", "radical"].includes(props.card().practiceItemType) &&
          props.card().practiceMode === "meanings" &&
          meaningMnemonic().length > 0
        }
      >
        <div class="w-full max-w-xl px-2">
          <p class="text-muted-foreground mb-2 text-sm tracking-wider uppercase">
            <span class="text-sky-400">Meaning</span> Mnemonic
          </p>
          <p class="text-muted-foreground text-base leading-relaxed italic">
            {parseMnemonicText(meaningMnemonic())}
          </p>
        </div>
      </Show>

      {/* Spelling Mnemonic (only in spellings mode, for kanji/radical) */}
      <Show
        when={
          ["kanji", "radical"].includes(props.card().practiceItemType) &&
          props.card().practiceMode === "spellings" &&
          readingMnemonic().length > 0
        }
      >
        <div class="w-full max-w-xl px-2">
          <p class="text-muted-foreground mb-2 text-sm tracking-wider uppercase">
            <span class="text-orange-400">Spelling</span> Mnemonic
          </p>
          <p class="text-muted-foreground text-base leading-relaxed italic">
            {parseMnemonicText(readingMnemonic())}
          </p>
        </div>
      </Show>
    </div>
  )
}

function RatingButtons(props: { onAnswer: (rating: Grade) => void }) {
  const RATING_BUTTONS = [
    { rating: Rating.Again, label: "Again", color: "bg-red-600", key: "1" },
    { rating: Rating.Hard, label: "Hard", color: "bg-yellow-500", key: "2" },
    { rating: Rating.Good, label: "Good", color: "bg-green-600", key: "3" },
    { rating: Rating.Easy, label: "Easy", color: "bg-blue-600", key: "4" },
  ]

  return (
    <>
      {/* Desktop */}
      <div class="mt-8 hidden w-full max-w-3xl grid-cols-4 gap-3 lg:grid">
        {RATING_BUTTONS.map((button) => (
          <Button
            onClick={() => props.onAnswer(button.rating as Grade)}
            class={cn(
              "relative h-14 rounded-xl text-base font-semibold text-white",
              button.color,
            )}
          >
            <div class="absolute top-[7px] right-[7px] flex h-6 w-6 items-center justify-center rounded-full bg-black/20 font-mono text-xs font-bold text-white">
              {button.key}
            </div>
            {button.label}
          </Button>
        ))}
      </div>

      {/* Mobile */}
      <div class="fixed right-0 bottom-0 left-0 z-50 p-4 lg:hidden">
        <div class="grid grid-cols-4 gap-3">
          {RATING_BUTTONS.map((button) => (
            <Button
              onClick={() => props.onAnswer(button.rating as Grade)}
              class={cn(
                "relative h-10 rounded-xl text-base font-semibold text-white",
                button.color,
              )}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </>
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
          <div class="flex min-h-screen flex-col items-center justify-center p-4 pt-28">
            <div class="bg-card border-card-foreground relative w-full max-w-3xl rounded-2xl border p-8 shadow-md lg:p-10">
              {/* Card Type Badge */}
              <div class="absolute top-4 right-4 z-10 flex gap-2">
                <span
                  class={cn(
                    "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide uppercase",
                    card().practiceItemType === "vocabulary" &&
                      "bg-orange-500/20 text-orange-400",
                    card().practiceItemType === "kanji" &&
                      "bg-pink-500/20 text-pink-400",
                    card().practiceItemType === "radical" &&
                      "bg-blue-500/20 text-blue-400",
                  )}
                >
                  {card().practiceItemType}
                </span>
              </div>

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
                    <Button
                      ref={showAnswerButtonRef}
                      onClick={() => setShowAnswer(true)}
                      class="mt-8"
                      variant="outline"
                    >
                      Show Answer
                    </Button>
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
                  <Mnemonics card={card} />
                </Show>
              </div>
            </div>

            <Show when={showAnswer()}>
              <RatingButtons onAnswer={handleAnswer} />
            </Show>
          </div>
        </div>
      )}
    </Show>
  )
}
