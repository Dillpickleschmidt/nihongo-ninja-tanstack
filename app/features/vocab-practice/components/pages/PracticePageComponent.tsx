// vocab-practice/components/pages/PracticePageComponent.tsx
import { createEffect } from "solid-js"
import { useVocabPracticeContext } from "../../context/VocabPracticeContext"
import { Button } from "@/components/ui/button"
import CardTypeSwitchComponent from "../CardTypeSwitchComponent"
import { handleNextQuestion } from "../../logic/card-handlers"

export default function PracticePageComponent() {
  const context = useVocabPracticeContext()
  let buttonRef: HTMLButtonElement | undefined

  createEffect(() => {
    const recentlySeenCards = context.deckState.recentlySeenCards
    if (recentlySeenCards.length === 7) {
      context.setGameState({ currentPage: "review" })
    }
  })

  createEffect(() => {
    if (context.gameState.hasUserAnswered && buttonRef) {
      buttonRef.focus()
    }
  })

  return (
    <div class="mt-[-4.1rem] flex min-h-screen w-full justify-center sm:mt-0 sm:min-h-full sm:pb-24">
      <div class="w-full max-w-[1000px] pt-20 sm:mx-2 sm:mt-28 sm:rounded-3xl sm:pt-32 sm:pb-24 md:mx-12 lg:py-32">
        <CardTypeSwitchComponent />
      </div>
      {context.gameState.hasUserAnswered && (
        <Button
          ref={buttonRef}
          size="lg"
          onClick={() => handleNextQuestion(context)}
          class="fixed bottom-12 shadow-md focus-visible:ring-[3px] focus-visible:ring-orange-400 lg:absolute lg:bottom-32"
        >
          <span>Next Question {"->"}</span>
        </Button>
      )}
    </div>
  )
}
