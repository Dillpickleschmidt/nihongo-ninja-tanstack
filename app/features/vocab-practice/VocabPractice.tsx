// vocab-practice/VocabPractice.tsx
import { JSX, Match, Switch } from "solid-js"
import type { RichVocabItem } from "@/data/types"
import {
  VocabPracticeContextProvider,
  useVocabPracticeContext,
} from "./context/VocabPracticeContext"
import type { PracticeMode } from "./types"
import StartPageComponent from "./components/pages/StartPageComponent"
import PracticePageComponent from "./components/pages/PracticePageComponent"
import ReviewPageComponent from "./components/pages/ReviewPageComponent"
import FinishPageComponent from "./components/pages/FinishPageComponent"
import FSRSFlashcardPageComponent from "./components/pages/FSRSFlashcardPageComponent"
import { FSRSCardData } from "../supabase/db/utils"

type VocabPracticeProps = {
  newVocabulary: RichVocabItem[] | null
  moduleFSRSCards: Promise<FSRSCardData[]> | null
  dueFSRSCards: Promise<FSRSCardData[]> | null
  deckName: string | JSX.Element
  mode: PracticeMode | "review-only"
}

export default function VocabPractice(props: VocabPracticeProps) {
  return (
    <VocabPracticeContextProvider>
      <VocabPracticeContent
        deckName={props.deckName}
        newVocabulary={props.newVocabulary}
        moduleFSRSCards={props.moduleFSRSCards}
        dueFSRSCards={props.dueFSRSCards}
        mode={props.mode} // Pass mode down to the content component
      />
    </VocabPracticeContextProvider>
  )
}

// The content props now include the mode
type VocabPracticeContentProps = VocabPracticeProps

function VocabPracticeContent(props: VocabPracticeContentProps) {
  const { state } = useVocabPracticeContext()

  return (
    <Switch>
      <Match when={state.currentPage === "start"}>
        <StartPageComponent
          deckName={props.deckName}
          newVocabulary={props.newVocabulary}
          moduleFSRSCards={props.moduleFSRSCards}
          dueFSRSCards={props.dueFSRSCards}
          mode={props.mode} // Pass mode down to the StartPageComponent
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
