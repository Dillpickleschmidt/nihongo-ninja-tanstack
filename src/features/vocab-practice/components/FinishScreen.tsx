import { For, Show, createMemo } from 'solid-js'
import { Button } from '@/components/ui/button'
import { cn } from '@/utils'
import type { PracticeCard } from '../types'
import { getPromptDisplay } from '../utils/card-display'

type ReviewResult = {
  card: PracticeCard
  correct: boolean
  missCount?: number
}

type Props = {
  deckName: string
  results: ReviewResult[]
  onReturn: () => void
}

export function FinishScreen(props: Props) {
  // Single-pass stats: group by scope + count correct
  const stats = createMemo(() => {
    const moduleItems: ReviewResult[] = []
    const reviewItems: ReviewResult[] = []
    let correctCount = 0

    for (const r of props.results) {
      if (r.card.sessionScope === 'module') moduleItems.push(r)
      else if (r.card.sessionScope === 'review') reviewItems.push(r)
      if (r.correct) correctCount++
    }

    const total = props.results.length
    const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0

    return { moduleItems, reviewItems, correctCount, total, accuracy }
  })

  // Dynamic emoji based on accuracy
  const theme = createMemo(() => {
    const acc = stats().accuracy
    if (acc >= 90) return { emoji: '🎉', title: 'Outstanding!' }
    if (acc >= 70) return { emoji: '🌟', title: 'Great Work!' }
    if (acc >= 50) return { emoji: '💪', title: 'Keep Going!' }
    return { emoji: '📚', title: 'Practice Makes Perfect' }
  })

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'vocabulary':
        return 'bg-orange-500/20 text-orange-600 dark:text-orange-400'
      case 'kanji':
        return 'bg-indigo-500/20 text-indigo-600 dark:text-indigo-400'
      case 'radical':
        return 'bg-purple-500/20 text-purple-600 dark:text-purple-400'
      default:
        return ''
    }
  }

  const getCardPrompt = (card: PracticeCard) => getPromptDisplay(card, '0.6rem')

  return (
    <div class="flex min-h-[calc(100vh-12rem)] flex-col items-center px-4 pb-32 pt-8">
      <div class="mx-auto w-full max-w-2xl">
        {/* Celebration header (emoji from yjo, dynamic title from hmr) */}
        <div class="mb-8 text-center">
          <div class="mb-4 text-6xl">{theme().emoji}</div>
          <h1 class="mb-2 text-3xl font-bold">{theme().title}</h1>
          <p class="text-lg text-muted-foreground">
            You completed <span class="font-semibold text-foreground">{props.deckName}</span>
          </p>
        </div>

        {/* Stat boxes (from hmr) */}
        <div class="mb-8 grid grid-cols-3 gap-4">
          <StatCard label="Correct" value={stats().correctCount} color="emerald" />
          <StatCard label="Total" value={stats().total} color="blue" />
          <StatCard label="Accuracy" value={`${stats().accuracy}%`} color="purple" />
        </div>

        {/* Module Items section */}
        <Show when={stats().moduleItems.length > 0}>
          <div class="mb-8">
            <h2 class="mb-4 flex items-center gap-2 text-lg font-semibold">
              <span class="rounded-full bg-orange-500/10 px-2 py-1 text-sm text-orange-500">
                {stats().moduleItems.length}
              </span>
              Module Items
            </h2>
            <div class="space-y-2">
              <For each={stats().moduleItems}>
                {(result) => <ResultCard result={result} getTypeColor={getTypeColor} getPromptDisplay={getCardPrompt} />}
              </For>
            </div>
          </div>
        </Show>

        {/* Practiced Review Items section */}
        <Show when={stats().reviewItems.length > 0}>
          <div class="mb-8">
            <h2 class="mb-4 flex items-center gap-2 text-lg font-semibold">
              <span class="rounded-full bg-indigo-500/10 px-2 py-1 text-sm text-indigo-500">
                {stats().reviewItems.length}
              </span>
              Practiced Review Items
            </h2>
            <div class="space-y-2">
              <For each={stats().reviewItems}>
                {(result) => <ResultCard result={result} getTypeColor={getTypeColor} getPromptDisplay={getCardPrompt} />}
              </For>
            </div>
          </div>
        </Show>

        {/* Return button */}
        <div class="fixed bottom-8 left-1/2 -translate-x-1/2">
          <Button
            size="lg"
            class="h-14 rounded-xl bg-gradient-to-r from-violet-500 to-purple-500 px-12 text-lg font-semibold text-white shadow-lg transition-all hover:from-violet-600 hover:to-purple-600 hover:shadow-xl"
            onClick={props.onReturn}
          >
            Return to Vocab Home
          </Button>
        </div>
      </div>
    </div>
  )
}

function StatCard(props: {
  label: string
  value: string | number
  color: 'emerald' | 'blue' | 'purple'
}) {
  const colorClasses = {
    emerald: 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/30',
    blue: 'from-blue-500/20 to-blue-500/5 border-blue-500/30',
    purple: 'from-purple-500/20 to-purple-500/5 border-purple-500/30',
  }

  const textColorClasses = {
    emerald: 'text-emerald-500',
    blue: 'text-blue-500',
    purple: 'text-purple-500',
  }

  return (
    <div
      class={cn(
        'rounded-xl border bg-gradient-to-b p-4 text-center',
        colorClasses[props.color],
      )}
    >
      <div class={cn('text-2xl font-bold', textColorClasses[props.color])}>
        {props.value}
      </div>
      <div class="text-xs text-muted-foreground">{props.label}</div>
    </div>
  )
}

function ResultCard(props: {
  result: ReviewResult
  getTypeColor: (type: string) => string
  getPromptDisplay: (card: PracticeCard) => { html?: string; text?: string; isHtml: boolean }
}) {
  const { card, correct, missCount } = props.result
  const promptDisplay = props.getPromptDisplay(card)

  return (
    <div class="rounded-xl border border-card-foreground/20 bg-card/60 p-4 backdrop-blur-sm">
      <div class="flex items-center gap-4">
        {/* Content */}
        <div class="min-w-0 flex-1">
          <div class="flex items-baseline gap-3">
            <Show
              when={promptDisplay.isHtml}
              fallback={
                <span class="font-japanese text-lg font-bold">
                  {promptDisplay.text}
                </span>
              }
            >
              <span
                class="font-japanese text-lg font-bold"
                innerHTML={promptDisplay.html}
              />
            </Show>
            <span class="truncate text-sm text-muted-foreground">
              {card.validAnswers.join(', ')}
            </span>
          </div>
        </div>

        {/* Badges */}
        <div class="flex shrink-0 items-center gap-2">
          {/* Miss count badge */}
          <Show when={missCount && missCount > 0}>
            <span class="rounded-full bg-rose-500/10 px-2 py-0.5 text-xs font-medium text-rose-500">
              {missCount} {missCount === 1 ? 'miss' : 'misses'}
            </span>
          </Show>

          {/* Type badge */}
          <span
            class={cn(
              'rounded-full px-2 py-0.5 text-xs font-medium',
              props.getTypeColor(card.practiceItemType),
            )}
          >
            {card.practiceItemType}
          </span>

          {/* Status indicator */}
          <div
            class={cn(
              'flex h-6 w-6 items-center justify-center rounded-full text-xs',
              correct
                ? 'bg-emerald-500/20 text-emerald-500'
                : 'bg-rose-500/20 text-rose-500',
            )}
          >
            {correct ? '✓' : '✗'}
          </div>
        </div>
      </div>
    </div>
  )
}
