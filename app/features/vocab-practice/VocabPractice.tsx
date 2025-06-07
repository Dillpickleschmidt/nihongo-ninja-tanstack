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
import { FSRSCardData } from "../supabase/db/utils"

type VocabPracticeProps = {
  newVocabulary: VocabularyItem[]
  moduleFSRSCards: Promise<FSRSCardData[]> | null
  dueFSRSCards: Promise<FSRSCardData[]> | null
  deckName: string | JSX.Element
  mode: PracticeMode
}

export default function VocabPractice(props: VocabPracticeProps) {
  // Convert vocab entries to cards
  const convertedVocab = transformVocabToCards(
    props.newVocabulary,
    props.mode,
  ) as Card[]

  return (
    <VocabPracticeContextProvider>
      <VocabPracticeContent
        deckName={props.deckName}
        moduleFSRSCards={props.moduleFSRSCards}
        dueFSRSCards={props.dueFSRSCards}
        newVocabulary={convertedVocab}
        mode={props.mode}
      />
    </VocabPracticeContextProvider>
  )
}

function VocabPracticeContent(props: {
  newVocabulary: Card[]
  moduleFSRSCards: Promise<FSRSCardData[]> | null
  dueFSRSCards: Promise<FSRSCardData[]> | null
  deckName: string | JSX.Element
  mode: PracticeMode
}) {
  const context = useVocabPracticeContext()
  const workingSetSize = Math.min(props.newVocabulary.length, 10)

  // Reset state when the data changes (new route/deck)
  createEffect(() => {
    context.setGameState({
      currentPage: "start",
      currentCardIndex: 0,
      hasUserAnswered: false,
      isAnswerCorrect: false,
      started: false,
    })

    context.setSettings({
      practiceMode: props.mode,
      shuffleInput: true,
      enabledAnswerCategories: extractUniqueCategories(props.newVocabulary),
    })
  })

  // React to shuffle setting changes
  createEffect(() => {
    const practiceCards = context.settings.shuffleInput
      ? shuffleArray([...props.newVocabulary])
      : [...props.newVocabulary]

    context.setDeckState({
      allCards: practiceCards,
      workingSet: createNewWorkingSet(practiceCards, workingSetSize),
      deckRefillIndex: workingSetSize,
      recentlySeenCards: [], // Reset progress when reshuffling
    })
  })

  return (
    <Switch fallback={<div>Invalid state</div>}>
      <Match when={context.gameState.currentPage === "start"}>
        <StartPageComponent
          deckName={props.deckName}
          previewCards={props.newVocabulary}
          moduleFSRSCards={props.moduleFSRSCards}
          dueFSRSCards={props.dueFSRSCards}
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
