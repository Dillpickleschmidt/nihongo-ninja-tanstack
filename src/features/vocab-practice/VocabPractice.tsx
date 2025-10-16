import { Match, Switch } from "solid-js"
import {
  VocabPracticeContextProvider,
  useVocabPracticeContext,
} from "./context/VocabPracticeContext"
import type { PracticeMode } from "./types"
import StartPageComponent from "./pages/start/StartPageComponent"
import PracticePageComponent from "./pages/practice/PracticePage"
import ReviewPageComponent from "./pages/review/ReviewPage"
import FinishPageComponent from "./pages/finish/FinishPage"
import IntroductionPageComponent from "./pages/introduction/IntroductionPage"
import FSRSFlashcardPageComponent from "./pages/flashcard/FlashcardPage"

type VocabPracticeProps = {
  mode: PracticeMode
  userId: string | null
  moduleId?: string
  deckId?: number
}

export default function VocabPractice(props: VocabPracticeProps) {
  return (
    <VocabPracticeContextProvider
      userId={props.userId}
      mode={props.mode}
      moduleId={props.moduleId}
      deckId={props.deckId}
    >
      <VocabPracticeContent />
    </VocabPracticeContextProvider>
  )
}

function VocabPracticeContent() {
  const { uiState } = useVocabPracticeContext()

  return (
    <Switch>
      <Match when={uiState.currentPage === "start"}>
        <StartPageComponent />
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
