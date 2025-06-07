// vocab-practice/VocabPractice.tsx
import { createEffect, JSX, Match, Switch } from "solid-js"
import type { Card, VocabularyItem } from "@/data/types"
import {
  VocabPracticeContextProvider,
  useVocabPracticeContext,
} from "./context/VocabPracticeContext"
import { PracticeMode } from "./types"
import { transformVocabToCards } from "@/data/utils/vocab"
import {
  shuffleArray,
  extractUniqueCategories,
  createNewWorkingSet,
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
  const workingSetSize = Math.min(props.data.length, 10)

  // Reset state when the data changes (new route/deck)
  createEffect(() => {
    const currentMode = props.mode

    context.setGameState({
      currentPage: "start",
      currentCardIndex: 0,
      hasUserAnswered: false,
      isAnswerCorrect: false,
    })

    context.setSettings({
      practiceMode: currentMode,
      shuffleInput: true,
      enabledAnswerCategories: extractUniqueCategories(props.data),
    })
  })

  // React to shuffle setting changes
  createEffect(() => {
    const practiceData = context.settings.shuffleInput
      ? shuffleArray([...props.data])
      : [...props.data]

    context.setDeckState({
      allCards: practiceData,
      workingSet: createNewWorkingSet(practiceData, workingSetSize),
      deckRefillIndex: workingSetSize,
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
