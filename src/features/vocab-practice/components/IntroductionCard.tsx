import { Show, For, Suspense } from "solid-js"
import { cn } from "@/utils"
import type { PracticeCard } from "../types"
import {
  TYPE_BADGE_CLASSES,
  TYPE_TEXT_COLORS,
  getPromptDisplay,
  formatMnemonic,
} from "../utils/card-display"
import { KanjiDisplay } from "./KanjiDisplay"
import { PracticeActionBar } from "./PracticeActionBar"
import { PRACTICE_LAYOUT } from "../VocabPractice"

type Props = {
  card: PracticeCard
  currentIndex: number
  totalItems: number
  onContinue: () => void
}

export function IntroductionCard(props: Props) {
  const character = () => props.card.vocab.word
  const shouldUseAnimation = () => {
    const type = props.card.practiceItemType
    const char = character()
    return (type === "kanji" || type === "radical") && char && char.length === 1
  }

  const getMnemonic = () => {
    const mnemonics = props.card.vocab.mnemonics
    if (!mnemonics) return null

    if (props.card.practiceItemType === "vocabulary") {
      return {
        meaning: mnemonics.kanji?.[0] || null,
        reading: mnemonics.reading?.[0] || null,
      }
    }
    return {
      meaning: mnemonics.kanji?.[0] || null,
      reading: null,
    }
  }

  const promptDisplay = () => getPromptDisplay(props.card)
  const mnemonic = () => getMnemonic()

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
      {/* Header */}
      <div class="flex flex-col items-center gap-4">
        <span class="text-sm text-muted-foreground dark:text-white/40">New word</span>

        <span
          class={cn(
            "rounded-full px-3 py-1 text-xs font-medium",
            TYPE_BADGE_CLASSES[props.card.practiceItemType],
          )}
        >
          {props.card.practiceItemType}
        </span>

        {/* Main character/word */}
        <div class="text-center">
          <Show when={shouldUseAnimation()} fallback={<PlainTextDisplay />}>
            <Suspense fallback={<PlainTextDisplay />}>
              <KanjiDisplay character={character()} />
            </Suspense>
          </Show>
        </div>
      </div>

      {/* Details */}
      <div class="w-full max-w-lg space-y-4">
        {/* Meanings */}
        <div
          class={cn(
            "text-center text-xl font-medium",
            TYPE_TEXT_COLORS[props.card.practiceItemType],
          )}
        >
          {props.card.validAnswers.join(", ")}
        </div>

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

        {/* Mnemonic */}
        <Show when={mnemonic()}>
          {(m) => (
            <Show when={m().meaning || m().reading}>
              <div class="rounded-lg bg-card/60 dark:bg-white/5 p-4 text-left">
                <h4 class="mb-2 text-sm font-medium uppercase tracking-wide text-muted-foreground dark:text-white/40">
                  Mnemonic
                </h4>
                <Show when={m().reading}>
                  <p
                    class="text-sm leading-relaxed text-foreground/70 dark:text-white/70"
                    innerHTML={formatMnemonic(m().reading!)}
                  />
                </Show>
                <Show when={m().meaning && !m().reading}>
                  <p
                    class="text-sm leading-relaxed text-foreground/70 dark:text-white/70"
                    innerHTML={formatMnemonic(m().meaning!)}
                  />
                </Show>
              </div>
            </Show>
          )}
        </Show>
      </div>

      {/* Bottom bar */}
      <PracticeActionBar
        state="idle"
        label="Got It!"
        color="rgb(245,158,11)"
        onAction={props.onContinue}
      />
    </div>
  )
}
