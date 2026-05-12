import { createSignal, Match, Show, Switch } from "solid-js"
import {
  createFileRoute,
  stripSearchParams,
} from "@tanstack/solid-router"
import { z } from "zod"
import { convexQuery, useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { DEFAULT_USER_PREFERENCES } from "convex/validators"
import { usePreferences } from "@/lib/preferences"
import { parsePreferencesCookie } from "@/query/model/preferences"
import { SettingsPage } from "@/features/conjugation-practice/components/SettingsPage"
import { PracticePage } from "@/features/conjugation-practice/components/PracticePage"
import { SummaryPage } from "@/features/conjugation-practice/components/SummaryPage"
import {
  generateQuestions,
  getJLPTLevels,
  type ConjugationPracticeSettings,
} from "@/features/conjugation-practice/utils/questionGenerator"
import type { ReviewSessionState } from "@/features/conjugation-practice/utils/questionUtils"

// Full settings schema — defined once, used for both validation and type inference.
// On Zod v4, .catch() preserves types and the zodValidator adapter can be dropped.
const ob = (d: boolean) => z.boolean().default(d).catch(d)

const conjugationSettingsSchema = z.object({
  normal: ob(true),
  teForm: ob(false),
  volitional: ob(false),
  taiForm: ob(false),
  tariForm: ob(false),
  potential: ob(false),
  imperative: ob(false),
  conditional: ob(false),
  passive: ob(false),
  causative: ob(false),
  causativePassive: ob(false),
  verb: ob(true),
  iAdjective: ob(false),
  naAdjective: ob(false),
  polite: ob(true),
  plain: ob(true),
  nonPast: ob(true),
  past: ob(true),
  positive: ob(true),
  negative: ob(true),
  jlptLevel: z.enum(["n5", "n4", "n3", "n2", "n1"]).default("n5").catch("n5"),
  leaveOutSuru: ob(false),
  reverse: ob(false),
  amount: z.number().default(10).catch(10),
  showMeaning: ob(false),
  noFurigana: ob(false),
  emoji: ob(false),
})

const SETTINGS_DEFAULTS = DEFAULT_USER_PREFERENCES.conjugationPractice
const SETTINGS_KEYS = Object.keys(SETTINGS_DEFAULTS) as (keyof ConjugationPracticeSettings)[]

export const Route = createFileRoute("/_home/conjugation")({
  validateSearch: conjugationSettingsSchema,
  search: {
    middlewares: [stripSearchParams(SETTINGS_DEFAULTS)],
  },
  loaderDeps: ({ search }) => ({
    jlptLevel: search.jlptLevel,
  }),
  loader: ({ context, deps }) => {
    const prefs = parsePreferencesCookie()
    const jlptLevel = deps.jlptLevel ?? prefs.conjugationPractice.jlptLevel
    const jlptLevels = getJLPTLevels(jlptLevel)
    context.queryClient.prefetchQuery(
      convexQuery(api.api.vocabulary.getConjugatableVocab, { jlptLevels }),
    )
  },
  component: ConjugationPage,
})

function ConjugationPage() {
  const search = Route.useSearch()
  const { preferences, setPreference } = usePreferences()

  // If any search param differs from schema defaults, it's a shared link
  const isSharedRoute = () =>
    SETTINGS_KEYS.some((k) => search()[k] !== SETTINGS_DEFAULTS[k])

  const initialSettings = (): ConjugationPracticeSettings => {
    if (!isSharedRoute()) return preferences().conjugationPractice
    return search() as ConjugationPracticeSettings
  }

  const [currentPage, setCurrentPage] = createSignal<
    "settings" | "practice" | "summary"
  >("settings")
  const [currentSettings, setCurrentSettings] =
    createSignal<ConjugationPracticeSettings>(initialSettings())
  const [sessionState, setSessionState] =
    createSignal<ReviewSessionState | null>(null)

  const jlptLevels = () => getJLPTLevels(currentSettings().jlptLevel)

  const vocabQuery = useConvexQuery(
    api.api.vocabulary.getConjugatableVocab,
    () => ({ jlptLevels: jlptLevels() }),
  )

  function handleSettingsChange(settings: ConjugationPracticeSettings) {
    setCurrentSettings(settings)
    if (!isSharedRoute()) {
      setPreference("conjugationPractice", settings)
    }
  }

  function handleStartPractice() {
    const vocab = vocabQuery.data()
    if (!vocab) return
    const questions = generateQuestions(vocab, currentSettings())
    if (questions.length === 0) return
    setSessionState({
      questions,
      currentIndex: 0,
      score: 0,
      isComplete: false,
    })
    setCurrentPage("practice")
  }

  function handlePracticeComplete(state: ReviewSessionState) {
    setSessionState(state)
    setCurrentPage("summary")
  }

  function handleRestart() {
    handleStartPractice()
  }

  function handleReturnToSettings() {
    setSessionState(null)
    setCurrentPage("settings")
  }

  return (
    <div class="relative mx-auto min-h-screen max-w-3xl! px-4 pt-16 pb-32 text-foreground dark:text-white">
      <Switch>
        <Match when={currentPage() === "settings"}>
          <SettingsPage
            settings={currentSettings}
            onSettingsChange={handleSettingsChange}
            onStartPractice={handleStartPractice}
          />
        </Match>
        <Match when={currentPage() === "practice"}>
          <Show when={sessionState()}>
            {(state) => (
              <PracticePage
                questions={state().questions}
                showMeaning={currentSettings().showMeaning}
                noFurigana={currentSettings().noFurigana}
                onComplete={handlePracticeComplete}
                onReturnToSettings={handleReturnToSettings}
              />
            )}
          </Show>
        </Match>
        <Match when={currentPage() === "summary"}>
          <Show when={sessionState()}>
            {(state) => (
              <SummaryPage
                sessionState={state()}
                onRestart={handleRestart}
                onReturnToSettings={handleReturnToSettings}
              />
            )}
          </Show>
        </Match>
      </Switch>
    </div>
  )
}
