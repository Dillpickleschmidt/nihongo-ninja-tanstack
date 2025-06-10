// vocab-practice/VocabPractice.tsx
import { createMemo, JSX, Match, Switch } from "solid-js"
import type { RichVocabItem } from "@/data/types"
import {
  VocabPracticeContextProvider,
  useVocabPracticeContext,
} from "./context/VocabPracticeContext"
import { PracticeMode } from "./types"
import StartPageComponent from "./components/pages/StartPageComponent"
import PracticePageComponent from "./components/pages/PracticePageComponent"
import ReviewPageComponent from "./components/pages/ReviewPageComponent"
import FinishPageComponent from "./components/pages/FinishPageComponent"
import FSRSFlashcardPageComponent from "./components/pages/FSRSFlashcardPageComponent"
import { FSRSCardData } from "../supabase/db/utils"

// Props are updated to accept Promises
type VocabPracticeProps = {
  newVocabulary: RichVocabItem[]
  moduleFSRSCards: Promise<FSRSCardData[]> | null
  dueFSRSCards: Promise<FSRSCardData[]> | null
  deckName: string | JSX.Element
  mode: PracticeMode
}

export default function VocabPractice(props: VocabPracticeProps) {
  return (
    <VocabPracticeContextProvider>
      <VocabPracticeContent
        deckName={props.deckName}
        newVocabulary={props.newVocabulary}
        moduleFSRSCards={props.moduleFSRSCards}
        dueFSRSCards={props.dueFSRSCards}
        mode={props.mode}
      />
    </VocabPracticeContextProvider>
  )
}

function VocabPracticeContent(props: VocabPracticeProps) {
  const { state } = useVocabPracticeContext()

  // This master router remains the same, driven by the context's currentPage.
  return (
    <Switch>
      <Match when={state.currentPage === "start"}>
        <StartPageComponent
          deckName={props.deckName}
          newVocabulary={props.newVocabulary}
          moduleFSRSCards={props.moduleFSRSCards}
          dueFSRSCards={props.dueFSRSCards}
          mode={props.mode}
        />
      </Match>
      <Match when={state.currentPage === "practice"}>
        <PracticePageComponent />
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
