// ui/DifficultySelector.tsx
import { Button } from "@/components/ui/button"
import { usePractice } from "../store/PracticeContext"
import type { Difficulty } from "../store/practiceStore"

export default function DifficultySelector() {
  const { store, actions } = usePractice()

  const difficulties: { value: Difficulty; label: string }[] = [
    { value: "easy", label: "Easy" },
    { value: "hard", label: "Hard" },
  ]

  return (
    <div class="flex gap-2">
      {difficulties.map((d) => (
        <Button
          variant={store.difficulty === d.value ? "default" : "outline"}
          size="sm"
          onClick={() => actions.setDifficulty(d.value)}
          class={
            store.difficulty === d.value
              ? "bg-amber-400 text-black hover:bg-amber-500 dark:bg-amber-500 dark:hover:bg-amber-600"
              : ""
          }
        >
          {d.label}
        </Button>
      ))}
    </div>
  )
}
