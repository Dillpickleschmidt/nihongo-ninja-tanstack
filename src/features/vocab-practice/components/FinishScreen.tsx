import { For, Show, createMemo } from "solid-js"
import { cn } from "@/utils"
import type { PracticeCard } from "../types"
import { getPromptDisplay } from "../utils/card-display"
import { PracticeActionBar } from "./PracticeActionBar"

type ReviewResult = {
  card: PracticeCard
  correct: boolean
  missCount?: number
}

type Props = {
  deckName: string
  results: ReviewResult[]
  onReturn: () => void
  returnLabel?: string
}

export function FinishScreen(props: Props) {
  const stats = createMemo(() => {
    const moduleItems: ReviewResult[] = []
    const reviewItems: ReviewResult[] = []
    let correctCount = 0

    for (const r of props.results) {
      if (r.card.sessionScope === "module") moduleItems.push(r)
      else if (r.card.sessionScope === "review") reviewItems.push(r)
      if (r.correct) correctCount++
    }

    const total = props.results.length
    const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0

    return { moduleItems, reviewItems, correctCount, total, accuracy }
  })

  const theme = createMemo(() => {
    const acc = stats().accuracy
    if (acc >= 90) return { emoji: "🎉", title: "Outstanding!" }
    if (acc >= 70) return { emoji: "🌟", title: "Great Work!" }
    if (acc >= 50) return { emoji: "💪", title: "Keep Going!" }
    return { emoji: "📚", title: "Practice Makes Perfect" }
  })

  const getCardPrompt = (card: PracticeCard) => getPromptDisplay(card, "0.6rem")

  return (
    <div class="flex w-full flex-col items-center gap-6 px-4 pt-12 sm:w-4/5 sm:gap-10">
      <div class="w-full max-w-2xl">
        {/* Celebration header */}
        <div class="mb-8 text-center">
          <div class="mb-4 text-6xl">{theme().emoji}</div>
          <h1 class="mb-2 text-3xl font-bold text-white/90">{theme().title}</h1>
          <p class="text-lg text-white/40">
            You completed{" "}
            <span class="font-semibold text-white/70">{props.deckName}</span>
          </p>
        </div>

        {/* Stat boxes */}
        <div class="mb-8 grid grid-cols-3 gap-3">
          <StatCard label="Correct" value={stats().correctCount} color="emerald" />
          <StatCard label="Total" value={stats().total} color="blue" />
          <StatCard label="Accuracy" value={`${stats().accuracy}%`} color="purple" />
        </div>

        {/* Module Items */}
        <Show when={stats().moduleItems.length > 0}>
          <div class="mb-8">
            <h2 class="mb-4 flex items-center gap-2 text-lg font-semibold text-white/70">
              <span class="rounded-full bg-amber-500/10 px-2 py-1 text-sm text-amber-400">
                {stats().moduleItems.length}
              </span>
              Module Items
            </h2>
            <div class="space-y-2">
              <For each={stats().moduleItems}>
                {(result) => (
                  <ResultCard result={result} getPromptDisplay={getCardPrompt} />
                )}
              </For>
            </div>
          </div>
        </Show>

        {/* Review Items */}
        <Show when={stats().reviewItems.length > 0}>
          <div class="mb-8">
            <h2 class="mb-4 flex items-center gap-2 text-lg font-semibold text-white/70">
              <span class="rounded-full bg-indigo-500/10 px-2 py-1 text-sm text-indigo-400">
                {stats().reviewItems.length}
              </span>
              Practiced Review Items
            </h2>
            <div class="space-y-2">
              <For each={stats().reviewItems}>
                {(result) => (
                  <ResultCard result={result} getPromptDisplay={getCardPrompt} />
                )}
              </For>
            </div>
          </div>
        </Show>
      </div>

      <PracticeActionBar
        state="idle"
        label={props.returnLabel ?? "Return to Vocab Home"}
        color="rgb(139,92,246)"
        onAction={props.onReturn}
      />
    </div>
  )
}

function StatCard(props: {
  label: string
  value: string | number
  color: "emerald" | "blue" | "purple"
}) {
  const colors = {
    emerald: "border-emerald-500/20 text-emerald-400",
    blue: "border-blue-500/20 text-blue-400",
    purple: "border-purple-500/20 text-purple-400",
  }

  return (
    <div class={cn("rounded-xl border bg-white/5 p-4 text-center", colors[props.color])}>
      <div class="text-2xl font-bold">{props.value}</div>
      <div class="text-xs text-white/40">{props.label}</div>
    </div>
  )
}

function ResultCard(props: {
  result: { card: PracticeCard; correct: boolean; missCount?: number }
  getPromptDisplay: (card: PracticeCard) => { html?: string; text?: string; isHtml: boolean }
}) {
  const { card, correct, missCount } = props.result
  const promptDisplay = props.getPromptDisplay(card)

  return (
    <div class="flex items-center gap-4 rounded-xl bg-white/5 p-4">
      <div class="min-w-0 flex-1">
        <div class="flex items-baseline gap-3">
          <Show
            when={promptDisplay.isHtml}
            fallback={
              <span class="font-japanese text-lg font-bold text-white/80">
                {promptDisplay.text}
              </span>
            }
          >
            <span
              class="font-japanese text-lg font-bold text-white/80"
              innerHTML={promptDisplay.html}
            />
          </Show>
          <span class="truncate text-sm text-white/40">
            {card.validAnswers.join(", ")}
          </span>
        </div>
      </div>

      <div class="flex shrink-0 items-center gap-2">
        <Show when={missCount && missCount > 0}>
          <span class="rounded-full bg-rose-500/10 px-2 py-0.5 text-xs font-medium text-rose-400">
            {missCount} {missCount === 1 ? "miss" : "misses"}
          </span>
        </Show>
        <div
          class={cn(
            "flex h-6 w-6 items-center justify-center rounded-full text-xs",
            correct
              ? "bg-emerald-500/20 text-emerald-400"
              : "bg-rose-500/20 text-rose-400",
          )}
        >
          {correct ? "✓" : "✗"}
        </div>
      </div>
    </div>
  )
}
