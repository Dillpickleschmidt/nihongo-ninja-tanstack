// ui/ProgressDisplay.tsx
import { usePractice } from "../store/PracticeContext"

export default function ProgressDisplay() {
  const { store } = usePractice()

  const progress = () => {
    const total = store.questions.length
    const current = store.currentQuestionIndex + 1
    return { current, total }
  }

  return (
    <div class="text-muted-foreground text-sm">
      Question {progress().current} of {progress().total}
    </div>
  )
}
