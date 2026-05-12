import {
  createSignal,
  createEffect,
  Show,
  For,
  Suspense,
  onMount,
  onCleanup,
} from "solid-js"
import { Rating, type Grade } from "ts-fsrs"
import { Button3D } from "@/components/Button3D"
import { cn } from "@/utils"
import type { PracticeCard } from "../types"
import { playClickSound } from "../utils/select-sound"
import {
  TYPE_BADGE_CLASSES,
  TYPE_TEXT_COLORS,
  getPromptDisplay,
  getMnemonic,
} from "../utils/card-display"
import { KanjiDisplay } from "./KanjiDisplay"
import { MnemonicDisplay } from "./MnemonicDisplay"
import { PracticeActionBar } from "./PracticeActionBar"
import { PRACTICE_LAYOUT } from "../VocabPractice"

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

  const promptDisplay = () => getPromptDisplay(props.card)
  const mnemonic = () => getMnemonic(props.card)

  const PlainTextDisplay = () => (
    <Show
      when={promptDisplay().isHtml}
      fallback={
        <div class="font-japanese text-6xl sm:text-8xl font-medium">
          {promptDisplay().text}
        </div>
      }
    >
      <div
        class="font-japanese text-5xl sm:text-7xl font-medium tracking-wide"
        innerHTML={promptDisplay().html}
      />
    </Show>
  )

  return (
    <div class={PRACTICE_LAYOUT}>
      {/* Question area */}
      <div class="flex flex-col items-center gap-4">
        <span class="text-sm text-muted-foreground dark:text-white/40">
          How well do you know this?
        </span>

        <span
          class={cn(
            "rounded-full px-3 py-1 text-xs font-medium",
            TYPE_BADGE_CLASSES[props.card.practiceItemType],
          )}
        >
          {props.card.practiceItemType}
        </span>

        {/* Prompt */}
        <div class="text-center">
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
      </div>

      {/* Revealed answer section */}
      <Show when={isRevealed()}>
        <div class="w-full max-w-lg space-y-4">
          {/* Divider */}
          <div class="h-px bg-muted dark:bg-white/10" />

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

          {/* Particles */}
          <Show when={props.card.vocab.particles?.length}>
            <div class="text-center text-sm text-muted-foreground dark:text-white/40">
              <For each={props.card.vocab.particles}>
                {(p) => (
                  <span class="font-japanese">
                    {p.label
                      ? `${p.label} - ${p.particle}`
                      : `particle: ${p.particle}`}
                  </span>
                )}
              </For>
            </div>
          </Show>

          <MnemonicDisplay mnemonic={mnemonic()} />

          {/* FSRS rating buttons */}
          <div class="grid grid-cols-4 gap-2">
            <Button3D
              color="rgb(244,63,94)"
              class="text-sm"
              onClick={() => { playClickSound(); props.onAnswer(Rating.Again) }}
            >
              Again
            </Button3D>
            <Button3D
              color="rgb(245,158,11)"
              class="text-sm"
              onClick={() => { playClickSound(); props.onAnswer(Rating.Hard) }}
            >
              Hard
            </Button3D>
            <Button3D
              color="rgb(16,185,129)"
              class="text-sm"
              onClick={() => { playClickSound(); props.onAnswer(Rating.Good) }}
            >
              Good
            </Button3D>
            <Button3D
              color="rgb(6,182,212)"
              class="text-sm"
              onClick={() => { playClickSound(); props.onAnswer(Rating.Easy) }}
            >
              Easy
            </Button3D>
          </div>
        </div>
      </Show>

      {/* Bottom bar — show answer or already revealed */}
      <Show when={!isRevealed()}>
        <PracticeActionBar
          state="idle"
          label="Show Answer"
          color="rgb(6,182,212)"
          onAction={() => setRevealedCardId(props.card.key)}
        />
      </Show>
    </div>
  )
}
