import { createSignal, createEffect, on, Show, For } from "solid-js"
import { Rating, type Grade } from "ts-fsrs"
import { cn } from "@/utils"
import type { PracticeCard } from "../types"
import { playCorrectSound, playErrorSound } from "../utils/select-sound"
import { getMnemonic } from "../utils/card-display"
import WanakanaWrapper from "@/features/wanakana/WanaKana"
import { QuestionDisplay } from "./QuestionDisplay"
import { MnemonicDisplay } from "./MnemonicDisplay"
import { PracticeActionBar } from "./PracticeActionBar"
import { PRACTICE_LAYOUT } from "../VocabPractice"

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
  const [overridden, setOverridden] = createSignal(false)

  const isAnswered = () => answeredCardId() === props.card.key
  const particles = () => props.card.vocab.particles
  const isSpellingsMode = () => props.card.practiceMode === "spellings"

  createEffect(
    on(
      () => props.card,
      () => {
        setUserAnswer("")
        setParticleAnswers(new Array(particles()?.length ?? 0).fill(""))
        setParticleCorrectness(null)
        setOverridden(false)
      },
    ),
  )

  const isMainCorrect = () =>
    overridden() ||
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
    const particlesByLabel: Record<string, string[]> = {}
    for (const p of parts) {
      const label = p.label ?? "default"
      if (!particlesByLabel[label]) particlesByLabel[label] = []
      particlesByLabel[label].push(p.particle.toLowerCase())
    }
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
    // Dismiss mobile keyboard so it doesn't interfere with subsequent taps
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur()
    }
    isMainCorrect() ? playCorrectSound() : playErrorSound()
  }

  const handleOverrideCorrect = () => {
    setOverridden(true)
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

  const mnemonic = () => getMnemonic(props.card)

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
        "w-full rounded-2xl border bg-card/60 dark:bg-white/5 px-5 py-4 text-center text-lg font-medium outline-none transition-colors",
        "placeholder:text-muted-foreground/70 dark:text-white/30",
        !isAnswered() &&
          "border-border/70 dark:border-white/10 focus:border-cyan-500",
        isAnswered() &&
          isMainCorrect() &&
          "border-emerald-500 bg-emerald-500/10 text-emerald-400",
        isAnswered() &&
          !isMainCorrect() &&
          "border-rose-500 bg-rose-500/10 text-rose-400",
      )}
    />
  )

  return (
    <div class={PRACTICE_LAYOUT}>
      <QuestionDisplay card={props.card} />

      {/* Input area */}
      <div class="w-full max-w-sm space-y-4">
        <Show when={isSpellingsMode()} fallback={mainInput}>
          <WanakanaWrapper enabled={true} watch={props.card.key}>
            {mainInput}
          </WanakanaWrapper>
        </Show>

        {/* Particle inputs */}
        <Show when={particles()?.length}>
          <div class="space-y-2">
            <For each={particles()}>
              {(p, i) => (
                <div class="flex items-center gap-2">
                  <span class="text-sm font-medium text-muted-foreground dark:text-white/40">
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
                        "w-20 rounded-lg border bg-card/60 dark:bg-white/5 px-2 py-2 text-center font-japanese font-medium outline-none transition-colors",
                        !isAnswered() &&
                          "border-border/70 dark:border-white/10 focus:border-cyan-500",
                        isAnswered() &&
                          particleCorrectness()?.[i()] &&
                          "border-emerald-500 bg-emerald-500/10 text-emerald-400",
                        isAnswered() &&
                          particleCorrectness()?.[i()] === false &&
                          "border-rose-500 bg-rose-500/10 text-rose-400",
                      )}
                    />
                  </WanakanaWrapper>
                  <Show
                    when={
                      isAnswered() &&
                      particleCorrectness()?.[i()] === false
                    }
                  >
                    <span class="font-japanese text-sm text-emerald-400">
                      {p.particle}
                    </span>
                  </Show>
                </div>
              )}
            </For>
          </div>
        </Show>

        {/* Result feedback */}
        <Show when={isAnswered()}>
          <div
            class={cn(
              "rounded-lg p-3 text-center text-sm font-medium",
              isCorrect()
                ? "bg-emerald-500/10 text-emerald-400"
                : "bg-rose-500/10 text-rose-400",
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
              <p>Correct!</p>
            </Show>
          </div>

          {/* Override button */}
          <Show when={!isCorrect()}>
            <button
              type="button"
              onClick={handleOverrideCorrect}
              class="w-full rounded-lg py-2 text-sm font-medium text-emerald-400 transition-colors hover:bg-emerald-500/10"
            >
              No, I was correct
            </button>
          </Show>
        </Show>

        <Show when={isAnswered()}>
          <MnemonicDisplay mnemonic={mnemonic()} />
        </Show>
      </div>

      {/* Bottom bar */}
      <Show
        when={isAnswered()}
        fallback={
          <PracticeActionBar
            state="check"
            onAction={handleSubmit}
            canCheck={!!userAnswer().trim()}
          />
        }
      >
        <PracticeActionBar
          state={isCorrect() ? "correct" : "wrong"}
          onAction={handleNext}
          feedbackText={props.card.validAnswers[0]}
        />
      </Show>
    </div>
  )
}
