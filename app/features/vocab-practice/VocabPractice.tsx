// vocab-practice/VocabPractice.tsx
import { createEffect, JSX, Match, Switch, onMount } from "solid-js"
import type { Card, VocabularyItem } from "@/data/types"
import {
  VocabPracticeContextProvider,
  useVocabPracticeContext,
  initialGameState,
  initialSettings,
} from "./context/VocabPracticeContext"
import { PracticeMode } from "./types"
import { transformVocabToCards } from "@/data/utils/vocab"
import {
  shuffleArray,
  extractUniqueCategories,
  createActiveDeck,
} from "./logic/deck-utils"
import StartPageComponent from "./components/pages/StartPageComponent"
import PracticePageComponent from "./components/pages/PracticePageComponent"
import ReviewPageComponent from "./components/pages/ReviewPageComponent"
import FinishPageComponent from "./components/pages/FinishPageComponent"

type VocabPracticeProps = {
  data: VocabularyItem[]
  deckName: string | JSX.Element
  mode: PracticeMode
}

export default function VocabPractice(props: VocabPracticeProps) {
  // Convert vocab entries to cards
  const convertedData = transformVocabToCards(props.data, props.mode) as Card[]

  return (
    <VocabPracticeContextProvider>
      <VocabPracticeContent
        deckName={props.deckName}
        data={convertedData}
        mode={props.mode}
      />
    </VocabPracticeContextProvider>
  )
}

function VocabPracticeContent(props: {
  data: Card[]
  deckName: string | JSX.Element
  mode: PracticeMode
}) {
  const context = useVocabPracticeContext()
  const activeDeckSize = Math.min(props.data.length, 10)

  onMount(() => {
    // Initial setup
    context.setGameState({ ...initialGameState })
    context.setSettings({
      ...initialSettings,
      practiceMode: props.mode,
      enabledAnswerCategories: extractUniqueCategories(props.data),
    })
  })

  // React to shuffle setting changes
  createEffect(() => {
    const practiceData = context.settings.shuffleInput
      ? shuffleArray([...props.data])
      : [...props.data]

    context.setDeckState({
      data: practiceData,
      activeDeck: createActiveDeck(practiceData, activeDeckSize),
      deckRefillIndex: activeDeckSize,
      recentlySeenCards: [], // Reset progress when reshuffling
    })
  })

  return (
    <Switch fallback={<div>Invalid state</div>}>
      <Match when={context.gameState.currentPage === "start"}>
        <StartPageComponent
          deckName={props.deckName}
          previewData={props.data}
          mode={props.mode}
        />
      </Match>
      <Match when={context.gameState.currentPage === "practice"}>
        <PracticePageComponent />
      </Match>
      <Match when={context.gameState.currentPage === "review"}>
        <ReviewPageComponent />
      </Match>
      <Match when={context.gameState.currentPage === "finish"}>
        <FinishPageComponent />
      </Match>
    </Switch>
  )
}
