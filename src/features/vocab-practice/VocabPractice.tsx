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
import type { FSRSCardData } from "../supabase/db/fsrs"
import type { VocabHierarchy as CleanVocabHierarchy } from "@/data/wanikani/hierarchy-builder"
import type { VocabularyItem } from "@/data/types"
import type { DeferredPromise } from "@tanstack/solid-router"

type VocabPracticeProps = {
  hierarchy: CleanVocabHierarchy | null
  initialState: PracticeSessionState
  moduleFSRSCards: DeferredPromise<FSRSCardData[]> | null
  dueFSRSCards: DeferredPromise<FSRSCardData[]> | null
  hierarchySvgs: DeferredPromise<Map<string, string>> | null
  moduleVocabulary: VocabularyItem[]
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
        hierarchySvgs={props.hierarchySvgs}
        moduleVocabulary={props.moduleVocabulary}
        mode={props.mode}
      />
    </VocabPracticeContextProvider>
  )
}

type VocabPracticeContentProps = VocabPracticeProps

function VocabPracticeContent(props: VocabPracticeContentProps) {
  const { uiState } = useVocabPracticeContext()

  return (
    <Switch>
      <Match when={uiState.currentPage === "start"}>
        <StartPageComponent
          deckName={props.deckName}
          hierarchy={props.hierarchy}
          initialState={props.initialState}
          moduleFSRSCards={props.moduleFSRSCards}
          dueFSRSCards={props.dueFSRSCards}
          hierarchySvgs={props.hierarchySvgs}
          moduleVocabulary={props.moduleVocabulary}
          mode={props.mode}
        />
      </Match>
      <Match when={uiState.currentPage === "practice"}>
        <PracticePageComponent />
      </Match>
      <Match when={uiState.currentPage === "kanji-introduction"}>
        <IntroductionPageComponent />
      </Match>
      <Match when={uiState.currentPage === "fsrs-flashcard"}>
        <FSRSFlashcardPageComponent />
      </Match>
      <Match when={uiState.currentPage === "review"}>
        <ReviewPageComponent />
      </Match>
      <Match when={uiState.currentPage === "finish"}>
        <FinishPageComponent />
      </Match>
    </Switch>
  )
}
