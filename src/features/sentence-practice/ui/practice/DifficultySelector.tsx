import { usePractice } from "../../store/PracticeContext"
import type { Difficulty } from "../../core/types"

export default function DifficultySelector() {
  const { store, actions } = usePractice()

  const difficulties: { value: Difficulty; label: string }[] = [
    { value: "easy", label: "Easy" },
    { value: "hard", label: "Hard" },
  ]

  return (
    <div class="flex gap-1.5">
      {difficulties.map((d) => (
        <button
          type="button"
          onClick={() => actions.setDifficulty(d.value)}
          class={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${
            store.difficulty === d.value
              ? "bg-dynamic-accent/80 text-white"
              : "bg-card/60 text-muted-foreground hover:bg-muted dark:bg-white/5 dark:text-white/40 dark:hover:bg-white/10"
          }`}
        >
          {d.label}
        </button>
      ))}
    </div>
  )
}
