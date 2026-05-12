import { Link } from "@tanstack/solid-router"
import { X } from "lucide-solid"
import { usePractice } from "../../store/PracticeContext"

export default function ProgressDisplay() {
  const { store } = usePractice()

  const progress = () => {
    const total = store.questions.length
    const current = store.currentQuestionIndex + 1
    return { current, total, percent: total > 0 ? (current / total) * 100 : 0 }
  }

  return (
    <div class="flex flex-1 items-center gap-3 mr-3">
      <Link
        to=".."
        class="text-muted-foreground/70 transition-transform duration-200 hover:scale-125 hover:text-muted-foreground dark:text-white/30 dark:hover:text-white/60"
      >
        <X size={24} />
      </Link>
      <div class="h-3.5 flex-1 overflow-hidden rounded-full bg-muted dark:bg-white/10">
        <div
          class="h-full rounded-full transition-all duration-500"
          style={{
            width: `${progress().percent}%`,
            background: "linear-gradient(to right, var(--dynamic-accent), color-mix(in srgb, var(--dynamic-accent) 70%, white))",
          }}
        />
      </div>
      <span class="text-sm text-muted-foreground/70 dark:text-white/30">
        {progress().current}/{progress().total}
      </span>
    </div>
  )
}
