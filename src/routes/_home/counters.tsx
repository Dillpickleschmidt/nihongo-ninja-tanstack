import { createSignal, Match, Switch } from "solid-js"
import {
  createFileRoute,
  stripSearchParams,
} from "@tanstack/solid-router"
import { z } from "zod"
import counterPatternsData from "@/features/counter-practice/data/counter-patterns.json"
import vocabData from "@/features/counter-practice/data/vocab.json"
import type { CounterPattern, VocabItem, Question } from "@/features/counter-practice/types"
import { SettingsPage } from "@/features/counter-practice/components/SettingsPage"
import { PracticePage } from "@/features/counter-practice/components/PracticePage"
import { SummaryPage } from "@/features/counter-practice/components/SummaryPage"

// Flatten all patterns from chapter-grouped data
const ALL_PATTERNS: CounterPattern[] = (
  counterPatternsData as { chapter: number; content: CounterPattern[] }[]
).flatMap((ch) => ch.content)

const ALL_PATTERN_IDS = ALL_PATTERNS.map((p) => p.id)

// Filter vocab to only those with valid patterns
const PATTERN_ID_SET = new Set(ALL_PATTERN_IDS)
const ALL_VOCAB: VocabItem[] = (vocabData as VocabItem[]).filter((v) =>
  PATTERN_ID_SET.has(v.patternId),
)

const counterSearchSchema = z.object({
  counters: z.array(z.string()).optional().catch(undefined),
  amount: z.number().optional().catch(undefined),
})

export const Route = createFileRoute("/_home/counters")({
  validateSearch: counterSearchSchema,
  search: {
    middlewares: [stripSearchParams({ counters: undefined, amount: undefined })],
  },
  component: CountersPage,
})

function CountersPage() {
  const search = Route.useSearch()

  const initialPatternIds = () =>
    search().counters?.filter((id) => PATTERN_ID_SET.has(id)) ??
    ALL_PATTERN_IDS
  const initialAmount = () => search().amount ?? 10

  const [currentPage, setCurrentPage] = createSignal<
    "settings" | "practice" | "summary"
  >("settings")
  const [settings, setSettings] = createSignal({
    selectedPatternIds: initialPatternIds(),
    amount: initialAmount(),
  })
  const [sessionQuestions, setSessionQuestions] = createSignal<Question[]>([])
  const [sessionCorrect, setSessionCorrect] = createSignal(0)

  const selectedPatterns = () =>
    ALL_PATTERNS.filter((p) =>
      settings().selectedPatternIds.includes(p.id),
    )
  const selectedVocab = () => {
    const ids = new Set(settings().selectedPatternIds)
    return ALL_VOCAB.filter((v) => ids.has(v.patternId))
  }

  function handleStartPractice() {
    if (selectedPatterns().length === 0 || selectedVocab().length === 0) return
    setCurrentPage("practice")
  }

  function handleComplete(questions: Question[], correct: number) {
    setSessionQuestions(questions)
    setSessionCorrect(correct)
    setCurrentPage("summary")
  }

  function handleRestart() {
    handleStartPractice()
  }

  function handleReturnToSettings() {
    setSessionQuestions([])
    setSessionCorrect(0)
    setCurrentPage("settings")
  }

  return (
    <div class="relative mx-auto min-h-screen max-w-3xl! px-4 pt-16 pb-32 text-white">
      <Switch>
        <Match when={currentPage() === "settings"}>
          <SettingsPage
            allPatterns={ALL_PATTERNS}
            settings={settings}
            onSettingsChange={setSettings}
            onStartPractice={handleStartPractice}
          />
        </Match>
        <Match when={currentPage() === "practice"}>
          <PracticePage
            patterns={selectedPatterns()}
            vocab={selectedVocab()}
            amount={settings().amount}
            onComplete={handleComplete}
            onReturnToSettings={handleReturnToSettings}
          />
        </Match>
        <Match when={currentPage() === "summary"}>
          <SummaryPage
            questions={sessionQuestions()}
            correct={sessionCorrect()}
            onRestart={handleRestart}
            onReturnToSettings={handleReturnToSettings}
          />
        </Match>
      </Switch>
    </div>
  )
}
