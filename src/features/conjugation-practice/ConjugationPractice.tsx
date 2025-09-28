import { createSignal, Switch, Match } from "solid-js"
import SettingsPage from "./components/SettingsPage"
import PracticePage from "./components/PracticePage"
import SummaryPage from "./components/SummaryPage"
import type { ConjugationPracticeSettings } from "./schemas/settings"
import { ReviewSessionState } from "./utils/questionUtils"

type Page = "settings" | "practice" | "summary"

type ConjugationPracticeProps = {
  initialOptions: ConjugationPracticeSettings
  isSharedRoute: boolean
}

export default function ConjugationPractice({
  initialOptions,
  isSharedRoute,
}: ConjugationPracticeProps) {
  // Page navigation state
  const [currentPage, setCurrentPage] = createSignal<Page>("settings")
  const [finalSessionState, setFinalSessionState] =
    createSignal<ReviewSessionState | null>(null)

  // Local settings state - tracks what user actually sees/configures
  const [currentSettings, setCurrentSettings] = createSignal<ConjugationPracticeSettings>(initialOptions)

  const navigateToReview = () => setCurrentPage("practice")
  const navigateToSettings = () => setCurrentPage("settings")
  const navigateToSummary = (state: ReviewSessionState) => {
    setFinalSessionState(state)
    setCurrentPage("summary")
  }

  return (
    <div class="flex w-full flex-col items-center">
      <Switch>
        <Match when={currentPage() === "settings"}>
          <SettingsPage
            settings={currentSettings}
            isSharedRoute={isSharedRoute}
            onSettingsChange={setCurrentSettings}
            onStartReview={navigateToReview}
          />
        </Match>
        <Match when={currentPage() === "practice"}>
          <div class="pt-8 xl:pt-32">
            <PracticePage
              settings={currentSettings()}
              onComplete={navigateToSummary}
              navigateToSettings={navigateToSettings}
            />
          </div>
        </Match>
        <Match when={currentPage() === "summary"}>
          <SummaryPage
            finalState={finalSessionState()!}
            onRestartSession={navigateToReview}
            onReturnToSettings={navigateToSettings}
          />
        </Match>
      </Switch>
    </div>
  )
}
