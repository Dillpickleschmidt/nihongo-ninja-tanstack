// vocab-practice/VocabPractice.tsx
import { JSX, Match, Switch } from "solid-js"
import {
  VocabPracticeContextProvider,
  useVocabPracticeContext,
} from "./context/VocabPracticeContext"
import type { PracticeMode, PracticeSessionState } from "./types"
import StartPageComponent from "./components/pages/StartPageComponent"
import PracticePageComponent from "./components/pages/PracticePageComponent"
import ReviewPageComponent from "./components/pages/ReviewPageComponent"
import FinishPageComponent from "./components/pages/FinishPageComponent"
import IntroductionPageComponent from "./components/pages/IntroductionPageComponent"
import FSRSFlashcardPageComponent from "./components/pages/FSRSFlashcardPageComponent"
import type { FSRSCardData } from "../supabase/db/utils"
import type { FullHierarchyData } from "@/data/wanikani/types"
import type { DeferredPromise } from "@tanstack/solid-router"

type VocabPracticeProps = {
  hierarchy: FullHierarchyData | null
  initialState: PracticeSessionState
  moduleFSRSCards: DeferredPromise<FSRSCardData[]> | null
  dueFSRSCards: DeferredPromise<FSRSCardData[]> | null
  deckName: string | JSX.Element
  mode: PracticeMode
}

export default function VocabPractice(props: VocabPracticeProps) {
  return (
    <VocabPracticeContextProvider>
      <VocabPracticeContent
        deckName={props.deckName}
        hierarchy={props.hierarchy}
        initialState={props.initialState}
        moduleFSRSCards={props.moduleFSRSCards}
        dueFSRSCards={props.dueFSRSCards}
        mode={props.mode}
      />
    </VocabPracticeContextProvider>
  )
}

type VocabPracticeContentProps = VocabPracticeProps

function VocabPracticeContent(props: VocabPracticeContentProps) {
  const { state } = useVocabPracticeContext()

  return (
    <Switch>
      <Match when={state.currentPage === "start"}>
        <StartPageComponent
          deckName={props.deckName}
          hierarchy={props.hierarchy}
          initialState={props.initialState}
          moduleFSRSCards={props.moduleFSRSCards}
          dueFSRSCards={props.dueFSRSCards}
          mode={props.mode}
        />
      </Match>
      <Match when={state.currentPage === "practice"}>
        <PracticePageComponent />
      </Match>
      <Match when={state.currentPage === "kanji-introduction"}>
        <IntroductionPageComponent />
      </Match>
      <Match when={state.currentPage === "fsrs-flashcard"}>
        <FSRSFlashcardPageComponent />
      </Match>
      <Match when={state.currentPage === "review"}>
        <ReviewPageComponent />
      </Match>
      <Match when={state.currentPage === "finish"}>
        <FinishPageComponent />
      </Match>
    </Switch>
  )
}
