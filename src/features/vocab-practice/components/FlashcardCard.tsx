import {
  createSignal,
  createEffect,
  Show,
  Suspense,
  onMount,
  onCleanup,
} from "solid-js"
import { Rating, type Grade } from "ts-fsrs"
import { Button } from "@/components/ui/button"
import { cn } from "@/utils"
import type { PracticeCard } from "../types"
import {
  TYPE_BADGE_CLASSES,
  TYPE_TEXT_COLORS,
  getPromptDisplay,
  getMnemonic,
  formatMnemonic,
} from "../utils/card-display"
import { KanjiDisplay } from "./KanjiDisplay"

type Props = {
  card: PracticeCard
  currentIndex: number
  totalItems: number
  onAnswer: (rating: Grade) => Promise<void>
}

function AnkiCardRenderer(props: { html: string; css: string }) {
  let containerRef!: HTMLDivElement
  let shadowRoot: ShadowRoot

  onMount(() => {
    shadowRoot = containerRef.attachShadow({ mode: "open" })
  })

  createEffect(() => {
    if (shadowRoot) {
      shadowRoot.innerHTML = `<style>${props.css}</style>${props.html}`
    }
  })

  return <div ref={containerRef} />
}

export function FlashcardCard(props: Props) {
  const [revealedCardId, setRevealedCardId] = createSignal<string | null>(null)

  const isRevealed = () => revealedCardId() === props.card.key

  // Check if we should show kanji animation
  const character = () => props.card.vocab.word
  const shouldUseAnimation = () => {
    const type = props.card.practiceItemType
    const char = character()
    return (type === "kanji" || type === "radical") && char && char.length === 1
  }

  // Keyboard shortcuts
  const handleKeyDown = (e: KeyboardEvent) => {
    if (
      e.target instanceof HTMLInputElement ||
      e.target instanceof HTMLTextAreaElement
    )
      return

    if (isRevealed()) {
      switch (e.key) {
        case "1":
          props.onAnswer(Rating.Again)
          break
        case "2":
          props.onAnswer(Rating.Hard)
          break
        case "3":
          props.onAnswer(Rating.Good)
          break
        case "4":
          props.onAnswer(Rating.Easy)
          break
      }
    }
  }

  onMount(() => window.addEventListener("keydown", handleKeyDown))
  onCleanup(() => window.removeEventListener("keydown", handleKeyDown))

  const promptDisplay = () => getPromptDisplay(props.card, "1rem")
  const mnemonic = () => getMnemonic(props.card)
  const progress = () => ((props.currentIndex + 1) / props.totalItems) * 100

  // Plain text fallback component
  const PlainTextDisplay = () => (
    <Show
      when={promptDisplay().isHtml}
      fallback={
        <div class="font-japanese text-7xl font-bold">
          {promptDisplay().text}
        </div>
      }
    >
      <div
        class="font-japanese text-5xl font-bold tracking-wide"
        innerHTML={promptDisplay().html}
      />
    </Show>
  )

  return (
    <div class="flex flex-col items-center p-4">
      {/* Progress indicator */}
      <div class="mb-8 text-center">
        <span class="text-sm font-medium text-muted-foreground">
          Review {props.currentIndex + 1} of {props.totalItems}
        </span>
        <div class="mx-auto mt-2 h-1 w-48 overflow-hidden rounded-full bg-muted">
          <div
            class="h-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300"
            style={{ width: `${progress()}%` }}
          />
        </div>
      </div>

      {/* Main flashcard */}
      <div class="w-full max-w-lg">
        <div class="rounded-2xl border border-card-foreground/20 bg-card/60 p-8 shadow-xl backdrop-blur-md">
          {/* Type badge */}
          <div class="mb-4 flex justify-center">
            <span
              class={cn(
                "rounded-full px-3 py-1 text-xs font-medium",
                TYPE_BADGE_CLASSES[props.card.practiceItemType],
              )}
            >
              {props.card.practiceItemType}
            </span>
          </div>

          {/* Prompt */}
          <div class="mb-6 text-center">
            <Show
              when={props.card.ankiRenderedHtml}
              fallback={
                <Show
                  when={shouldUseAnimation()}
                  fallback={<PlainTextDisplay />}
                >
                  <Suspense fallback={<PlainTextDisplay />}>
                    <KanjiDisplay character={character()} />
                  </Suspense>
                </Show>
              }
            >
              {(rendered) => (
                <AnkiCardRenderer
                  html={rendered().question}
                  css={rendered().css}
                />
              )}
            </Show>
          </div>

          {/* Answer section (when revealed) */}
          <Show when={isRevealed()}>
            <div class="space-y-4 border-t border-card-foreground/10 pt-6">
              {/* Meanings */}
              <Show
                when={props.card.ankiRenderedHtml}
                fallback={
                  <div
                    class={cn(
                      "text-center text-xl font-medium",
                      TYPE_TEXT_COLORS[props.card.practiceItemType],
                    )}
                  >
                    {props.card.validAnswers.join(", ")}
                  </div>
                }
              >
                {(rendered) => (
                  <AnkiCardRenderer
                    html={rendered().answer}
                    css={rendered().css}
                  />
                )}
              </Show>

              {/* Mnemonic */}
              <Show when={mnemonic()}>
                <div class="rounded-lg bg-muted/50 p-4 text-left">
                  <h4 class="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Mnemonic
                  </h4>
                  <p
                    class="text-sm leading-relaxed text-foreground/80"
                    innerHTML={formatMnemonic(mnemonic()!)}
                  />
                </div>
              </Show>
            </div>
          </Show>
        </div>
      </div>

      {/* Action buttons at fixed bottom */}
      <div class="fixed bottom-20 left-1/2 -translate-x-1/2">
        <Show
          when={isRevealed()}
          fallback={
            <Button
              ref={(el: HTMLButtonElement) => requestAnimationFrame(() => el.focus())}
              variant="outline"
              onClick={() => setRevealedCardId(props.card.key)}
              class="h-14 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-12 text-lg font-semibold text-white shadow-lg transition-all hover:from-cyan-600 hover:to-blue-600 hover:shadow-xl"
            >
              Show Answer
            </Button>
          }
        >
          {/* Single-row FSRS buttons (match screenshot layout) */}
          <div class="grid grid-cols-4 gap-2">
            <Button
              class="h-12 min-w-20 rounded-xl bg-rose-500 text-white hover:bg-rose-600 shadow-lg transition-all hover:shadow-xl"
              onClick={() => props.onAnswer(Rating.Again)}
            >
              <span class="flex items-center justify-center gap-2">
                <span class="text-sm font-semibold">Again</span>
                <span class="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[11px] font-bold">
                  1
                </span>
              </span>
            </Button>
            <Button
              class="h-12 min-w-20 rounded-xl bg-amber-500 text-white hover:bg-amber-600 shadow-lg transition-all hover:shadow-xl"
              onClick={() => props.onAnswer(Rating.Hard)}
            >
              <span class="flex items-center justify-center gap-2">
                <span class="text-sm font-semibold">Hard</span>
                <span class="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[11px] font-bold">
                  2
                </span>
              </span>
            </Button>
            <Button
              class="h-12 min-w-20 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg transition-all hover:shadow-xl"
              onClick={() => props.onAnswer(Rating.Good)}
            >
              <span class="flex items-center justify-center gap-2">
                <span class="text-sm font-semibold">Good</span>
                <span class="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[11px] font-bold">
                  3
                </span>
              </span>
            </Button>
            <Button
              class="h-12 min-w-20 rounded-xl bg-cyan-500 text-white hover:bg-cyan-600 shadow-lg transition-all hover:shadow-xl"
              onClick={() => props.onAnswer(Rating.Easy)}
            >
              <span class="flex items-center justify-center gap-2">
                <span class="text-sm font-semibold">Easy</span>
                <span class="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-[11px] font-bold">
                  4
                </span>
              </span>
            </Button>
          </div>
        </Show>
      </div>
    </div>
  )
}
