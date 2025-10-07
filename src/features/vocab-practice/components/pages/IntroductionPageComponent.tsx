// vocab-practice/components/pages/IntroductionPageComponent.tsx
import { Show, createEffect, createResource } from "solid-js"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import ProgressHeader from "../ProgressHeader"
import { KanjiAnimation } from "@/components/KanjiAnimation"
import { KanjiAnimationControls } from "@/components/KanjiAnimationControls"
import { processSvgString } from "@/utils/svg-processor"
import { PracticeCardContainer } from "../shared/PracticeCardContainer"
import { MnemonicSection } from "../shared/MnemonicSection"
import { ActionButton } from "../shared/ActionButton"

export default function IntroductionPageComponent() {
  const {
    currentCard,
    processIntroduction,
    getSvgForCharacter,
    kanjiDisplaySettings,
    setKanjiDisplaySettings,
    kanjiAnimationSettings,
    setKanjiAnimationSettings,
    kanjiStyleSettings,
    addTimeAndQuestions,
  } = useVocabPracticeContext()

  const character = () => currentCard()?.vocab.word
  const meanings = () => currentCard()?.vocab.english.join(", ")

  // Check if we should use kanji animation
  const shouldUseAnimation = () => {
    const card = currentCard()
    if (!card) return false
    const char = character()
    return (
      (card.practiceItemType === "kanji" ||
        card.practiceItemType === "radical") &&
      char &&
      char.length === 1
    )
  }

  // Create resource for SVG data
  const [svgData] = createResource(
    () => (shouldUseAnimation() ? character() : null),
    (char) => (char ? getSvgForCharacter(char) : null),
  )

  let gotItButtonRef: HTMLButtonElement | undefined

  // Focus "Got It!" button when card loads
  createEffect(() => {
    if (currentCard()) {
      setTimeout(() => {
        gotItButtonRef?.focus()
      }, 0)
    }
  })

  const handleGotIt = () => {
    if (currentCard()) {
      addTimeAndQuestions(10, true)
      processIntroduction()
    }
  }

  return (
    <Show when={currentCard()} fallback={<div>Loading card...</div>}>
      {(card) => (
        <div class="min-h-screen">
          <ProgressHeader />
          <div class="mx-auto max-w-3xl px-4 pt-20 sm:pt-28">
            <PracticeCardContainer>
              <div class="relative flex min-h-[350px] flex-col items-center justify-center gap-6 py-4 text-center sm:gap-8">
                {/* Character Display */}
                <Show
                  when={shouldUseAnimation() && svgData() && !svgData.loading}
                  fallback={
                    <h2 class="text-primary text-5xl font-bold sm:text-6xl lg:text-7xl">
                      {character()}
                    </h2>
                  }
                >
                  <div class="flex justify-center">
                    <KanjiAnimation
                      processedSvgContent={processSvgString(svgData()!, {
                        size: kanjiStyleSettings.size,
                        strokeColor: kanjiStyleSettings.strokeColor,
                        strokeWidth: kanjiStyleSettings.strokeWidth,
                        showGrid: kanjiStyleSettings.showGrid,
                        autostart: kanjiAnimationSettings.autostart,
                        showNumbers: kanjiDisplaySettings.numbers,
                        showStartDots: kanjiDisplaySettings.startDots,
                        showDirectionLines: kanjiDisplaySettings.directionLines,
                      })}
                      styleSettings={kanjiStyleSettings}
                      displaySettings={kanjiDisplaySettings}
                      animationSettings={kanjiAnimationSettings}
                    >
                      {(animationRef) => (
                        <KanjiAnimationControls
                          animationRef={animationRef}
                          displaySettings={kanjiDisplaySettings}
                          animationSettings={kanjiAnimationSettings}
                          onDisplaySettingsChange={setKanjiDisplaySettings}
                          onAnimationSettingsChange={setKanjiAnimationSettings}
                          processedSvgContent={processSvgString(svgData()!, {
                            size: kanjiStyleSettings.size,
                            strokeColor: kanjiStyleSettings.strokeColor,
                            strokeWidth: kanjiStyleSettings.strokeWidth,
                            showGrid: kanjiStyleSettings.showGrid,
                            autostart: kanjiAnimationSettings.autostart,
                            showNumbers: kanjiDisplaySettings.numbers,
                            showStartDots: kanjiDisplaySettings.startDots,
                            showDirectionLines:
                              kanjiDisplaySettings.directionLines,
                          })}
                          rawSvgContent={svgData()!}
                          styleSettings={kanjiStyleSettings}
                        />
                      )}
                    </KanjiAnimation>
                  </div>
                </Show>

                {/* Meanings Display */}
                <p class="text-2xl font-semibold text-orange-400 sm:text-3xl lg:text-4xl">
                  {meanings()}
                </p>

                {/* Mnemonics */}
                <MnemonicSection visible={() => true} />
              </div>
            </PracticeCardContainer>

            {/* Fixed bottom button */}
            <div class="fixed bottom-6 left-1/2 w-full max-w-md -translate-x-1/2 px-4">
              <ActionButton
                ref={gotItButtonRef}
                onClick={handleGotIt}
                variant="primary"
              >
                Got It!
              </ActionButton>
            </div>
          </div>
        </div>
      )}
    </Show>
  )
}
