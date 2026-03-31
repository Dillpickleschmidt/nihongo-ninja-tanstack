import { Show, For, Suspense } from "solid-js"
import { Button3D } from "@/components/Button3D"
import { cn } from "@/utils"
import type { PracticeCard } from "../types"
import { playClickSound } from "../utils/select-sound"
import {
  TYPE_BADGE_CLASSES,
  TYPE_TEXT_COLORS,
  getPromptDisplay,
  formatMnemonic,
} from "../utils/card-display"
import { KanjiDisplay } from "./KanjiDisplay"

type Props = {
  card: PracticeCard
  currentIndex: number
  totalItems: number
  onContinue: () => void
}

export function IntroductionCard(props: Props) {
  // Check if we should show kanji animation
  const character = () => props.card.vocab.word
  const shouldUseAnimation = () => {
    const type = props.card.practiceItemType
    const char = character()
    return (type === "kanji" || type === "radical") && char && char.length === 1
  }

  // IntroductionCard shows both meaning and reading mnemonics
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

  const promptDisplay = () => getPromptDisplay(props.card, "1rem")
  const mnemonic = () => getMnemonic()
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
          New Item {props.currentIndex + 1} of {props.totalItems}
        </span>
        <div class="mx-auto mt-2 h-1 w-48 overflow-hidden rounded-full bg-muted">
          <div
            class="h-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300"
            style={{ width: `${progress()}%` }}
          />
        </div>
      </div>

      {/* Main content card */}
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

          {/* Main character/word */}
          <div class="mb-4 text-center">
            <Show when={shouldUseAnimation()} fallback={<PlainTextDisplay />}>
              <Suspense fallback={<PlainTextDisplay />}>
                <KanjiDisplay character={character()} />
              </Suspense>
            </Show>
          </div>

          {/* Meanings */}
          <div
            class={cn(
              "mb-6 text-center text-xl font-medium",
              TYPE_TEXT_COLORS[props.card.practiceItemType],
            )}
          >
            {props.card.validAnswers.join(", ")}
          </div>

          {/* Particles */}
          <Show when={props.card.vocab.particles?.length}>
            <div class="-mt-4 mb-6 text-center text-sm text-muted-foreground">
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

          {/* Mnemonic section */}
          <Show when={mnemonic()}>
            {(m) => (
              <Show when={m().meaning || m().reading}>
                <div class="mt-6 rounded-lg bg-muted/50 p-4 text-left">
                  <h4 class="mb-2 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Mnemonic
                  </h4>
                  <Show when={m().reading}>
                    <p
                      class="text-sm leading-relaxed text-foreground/80"
                      innerHTML={formatMnemonic(m().reading!)}
                    />
                  </Show>
                  <Show when={m().meaning && !m().reading}>
                    <p
                      class="text-sm leading-relaxed text-foreground/80"
                      innerHTML={formatMnemonic(m().meaning!)}
                    />
                  </Show>
                </div>
              </Show>
            )}
          </Show>
        </div>
      </div>

      {/* Fixed bottom action button */}
      <div class="fixed bottom-20 left-1/2 -translate-x-1/2 w-48">
        <Button3D
          color="rgb(245,158,11)"
          onClick={() => { playClickSound(); props.onContinue() }}
        >
          Got It! →
        </Button3D>
      </div>
    </div>
  )
}
