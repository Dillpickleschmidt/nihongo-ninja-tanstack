import { createSignal, createEffect, on, Show, For } from "solid-js"
import { Rating, type Grade } from "ts-fsrs"
import { Button3D } from "@/components/Button3D"
import { cn } from "@/utils"
import type { PracticeCard } from "../types"
import { playClickSound, playCorrectSound, playErrorSound } from "../utils/select-sound"
import {
  TYPE_BADGE_CLASSES,
  getPromptDisplay,
  getMnemonic,
  formatMnemonic,
} from "../utils/card-display"
import WanakanaWrapper from "@/features/wanakana/WanaKana"

type Props = {
  card: PracticeCard
  currentIndex: number
  totalItems: number
  onAnswer: (rating: Grade) => Promise<void>
}

export function WriteCard(props: Props) {
  const [userAnswer, setUserAnswer] = createSignal("")
  const [answeredCardId, setAnsweredCardId] = createSignal<string | null>(null)
  const [particleAnswers, setParticleAnswers] = createSignal<string[]>([])
  const [particleCorrectness, setParticleCorrectness] = createSignal<
    boolean[] | null
  >(null)

  const isAnswered = () => answeredCardId() === props.card.key
  const particles = () => props.card.vocab.particles
  const isSpellingsMode = () => props.card.practiceMode === "spellings"

  // Reset state on card change (including initial mount)
  createEffect(
    on(
      () => props.card,
      () => {
        setUserAnswer("")
        setParticleAnswers(new Array(particles()?.length ?? 0).fill(""))
        setParticleCorrectness(null)
      },
    ),
  )

  const isMainCorrect = () =>
    props.card.validAnswers.some(
      (ans) => ans.toLowerCase() === userAnswer().toLowerCase().trim(),
    )

  const isCorrect = () => {
    if (!isMainCorrect()) return false
    const parts = particles()
    if (!parts?.length) return true
    const pc = particleCorrectness()
    if (!pc || pc.length !== parts.length) return false
    return pc.every(Boolean)
  }

  function checkParticleAnswers(): boolean[] {
    const parts = particles() ?? []
    // Group correct particles by label for flexible matching
    const particlesByLabel: Record<string, string[]> = {}
    for (const p of parts) {
      const label = p.label ?? "default"
      if (!particlesByLabel[label]) particlesByLabel[label] = []
      particlesByLabel[label].push(p.particle.toLowerCase())
    }
    // Copy available pools
    const available: Record<string, string[]> = {}
    for (const [label, arr] of Object.entries(particlesByLabel)) {
      available[label] = [...arr]
    }
    return particleAnswers().map((answer, idx) => {
      const label = parts[idx].label ?? "default"
      const pool = available[label]
      if (!pool?.length) return false
      const normalized = answer.trim().toLowerCase()
      const matchIdx = pool.indexOf(normalized)
      if (matchIdx !== -1) {
        pool.splice(matchIdx, 1)
        return true
      }
      return false
    })
  }

  const handleSubmit = () => {
    if (isAnswered() || !userAnswer().trim()) return
    if (particles()?.length) {
      setParticleCorrectness(checkParticleAnswers())
    }
    setAnsweredCardId(props.card.key)
    isMainCorrect() ? playCorrectSound() : playErrorSound()
  }

  const handleOverrideCorrect = () => {
    setParticleCorrectness(
      new Array(particles()?.length ?? 0).fill(true),
    )
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Enter" && !isAnswered() && userAnswer().trim()) {
      e.preventDefault()
      handleSubmit()
    }
  }

  const handleParticleInput = (index: number, value: string) => {
    setParticleAnswers((prev) => {
      const next = [...prev]
      next[index] = value
      return next
    })
  }

  const handleNext = () => {
    props.onAnswer(isCorrect() ? Rating.Good : Rating.Again)
  }

  const promptDisplay = () => getPromptDisplay(props.card)
  const mnemonic = () => getMnemonic(props.card)
  const progress = () => ((props.currentIndex + 1) / props.totalItems) * 100

  const mainInput = (
    <input
      ref={(el) => requestAnimationFrame(() => el.focus())}
      type="text"
      value={userAnswer()}
      onInput={(e) => setUserAnswer(e.currentTarget.value)}
      onKeyDown={handleKeyDown}
      disabled={isAnswered()}
      placeholder="Type your answer..."
      class={cn(
        "w-full rounded-xl border-2 bg-card/70 px-4 py-4 text-center text-lg font-medium outline-none transition-all",
        "placeholder:text-muted-foreground/50",
        !isAnswered() &&
          "border-card-foreground/30 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20",
        isAnswered() &&
          isMainCorrect() &&
          "border-emerald-500 bg-emerald-500/10 text-emerald-600",
        isAnswered() &&
          !isMainCorrect() &&
          "border-rose-500 bg-rose-500/10 text-rose-600",
      )}
    />
  )

  return (
    <div class="flex flex-col items-center p-4">
      {/* Progress indicator */}
      <div class="mb-8 text-center">
        <span class="text-sm font-medium text-muted-foreground">
          Practice {props.currentIndex + 1} of {props.totalItems}
        </span>
        <div class="mx-auto mt-2 h-1 w-48 overflow-hidden rounded-full bg-muted">
          <div
            class="h-full bg-gradient-to-r from-emerald-400 to-teal-500 transition-all duration-300"
            style={{ width: `${progress()}%` }}
          />
        </div>
      </div>

      {/* Main practice card */}
      <div class="w-full max-w-lg">
        <div class="rounded-2xl border border-card-foreground/20 bg-card/60 p-8 shadow-xl backdrop-blur-md">
          {/* Prompt section */}
          <div class="text-center">
            {/* Type badge */}
            <div class="mb-2 flex justify-center">
              <span
                class={cn(
                  "rounded-full px-3 py-1 text-xs font-medium",
                  TYPE_BADGE_CLASSES[props.card.practiceItemType],
                )}
              >
                {props.card.practiceItemType}
              </span>
            </div>

            {/* Question text */}
            <div class="mb-2 text-lg text-muted-foreground">
              {props.card.practiceItemType === "radical"
                ? "What is this radical called?"
                : "What does this mean?"}
            </div>

            {/* Japanese prompt */}
            <Show
              when={promptDisplay().isHtml}
              fallback={
                <div
                  class={cn(
                    "font-japanese font-bold",
                    props.card.practiceItemType === "vocabulary"
                      ? "text-4xl"
                      : "text-6xl",
                  )}
                >
                  {promptDisplay().text}
                </div>
              }
            >
              <div
                class="font-japanese text-4xl font-bold"
                innerHTML={promptDisplay().html}
              />
            </Show>
          </div>

          {/* Write input area */}
          <div class="mt-8 space-y-4">
            <Show
              when={isSpellingsMode()}
              fallback={mainInput}
            >
              <WanakanaWrapper enabled={true} watch={props.card.key}>
                {mainInput}
              </WanakanaWrapper>
            </Show>

            {/* Particle input fields */}
            <Show when={particles()?.length}>
              <div class="space-y-2">
                <For each={particles()}>
                  {(p, i) => (
                    <div class="flex items-center gap-2">
                      <span class="text-sm font-medium text-muted-foreground">
                        {p.label ? `${p.label}:` : "Particle:"}
                      </span>
                      <WanakanaWrapper enabled={true} watch={props.card.key}>
                        <input
                          type="text"
                          value={particleAnswers()[i()] ?? ""}
                          onInput={(e) =>
                            handleParticleInput(i(), e.currentTarget.value)
                          }
                          onKeyDown={handleKeyDown}
                          disabled={isAnswered()}
                          class={cn(
                            "w-20 rounded-lg border-2 bg-card/70 px-2 py-2 text-center font-japanese font-medium outline-none transition-all",
                            !isAnswered() &&
                              "border-card-foreground/30 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20",
                            isAnswered() &&
                              particleCorrectness()?.[i()] &&
                              "border-emerald-500 bg-emerald-500/10 text-emerald-600",
                            isAnswered() &&
                              particleCorrectness()?.[i()] === false &&
                              "border-rose-500 bg-rose-500/10 text-rose-600",
                          )}
                        />
                      </WanakanaWrapper>
                      <Show
                        when={
                          isAnswered() &&
                          particleCorrectness()?.[i()] === false
                        }
                      >
                        <span class="font-japanese text-sm text-emerald-600">
                          {p.particle}
                        </span>
                      </Show>
                    </div>
                  )}
                </For>
              </div>
            </Show>

            {/* Submit button (only show before answering) */}
            <Show when={!isAnswered()}>
              <Button3D
                color="rgb(6,182,212)"
                disabled={!userAnswer().trim()}
                onClick={handleSubmit}
              >
                Check Answer
              </Button3D>
            </Show>

            {/* Result feedback */}
            <Show when={isAnswered()}>
              <div
                class={cn(
                  "rounded-lg p-3 text-center text-sm font-medium",
                  isCorrect()
                    ? "bg-emerald-500/10 text-emerald-600"
                    : "bg-rose-500/10 text-rose-600",
                )}
              >
                <Show
                  when={isCorrect()}
                  fallback={
                    <Show
                      when={isMainCorrect()}
                      fallback={
                        <>
                          <p>Not quite! The correct answer is:</p>
                          <p class="mt-1 font-japanese text-lg font-bold">
                            {props.card.validAnswers.join(", ")}
                          </p>
                        </>
                      }
                    >
                      <p>Close! The correct particles are:</p>
                      <div class="mt-1 space-y-0.5">
                        <For each={particles()}>
                          {(p) => (
                            <p class="font-japanese text-lg font-bold">
                              {p.label ? `${p.label}: ` : ""}{p.particle}
                            </p>
                          )}
                        </For>
                      </div>
                    </Show>
                  }
                >
                  <p>Correct! 🎉</p>
                </Show>
              </div>

              {/* Override button */}
              <Show when={!isCorrect()}>
                <button
                  type="button"
                  onClick={handleOverrideCorrect}
                  class="w-full rounded-lg py-2 text-sm font-medium text-emerald-600 transition-colors hover:bg-emerald-500/10"
                >
                  No, I was correct
                </button>
              </Show>
            </Show>
          </div>

          {/* Mnemonic section (shown after answering) */}
          <Show when={isAnswered() && mnemonic()}>
            <div class="mt-6 rounded-lg bg-muted/50 p-4">
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
      </div>

      {/* Next button */}
      <Show when={isAnswered()}>
        <div class="fixed bottom-20 left-1/2 -translate-x-1/2 w-48">
          <Button3D
            color={isCorrect() ? "rgb(16,185,129)" : "rgb(244,63,94)"}
            onClick={() => { playClickSound(); handleNext() }}
          >
            Next →
          </Button3D>
        </div>
      </Show>
    </div>
  )
}
