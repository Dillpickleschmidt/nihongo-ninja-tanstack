// ProgressDisplay.tsx
import { createMemo } from "solid-js"

type ProgressDisplayProps = {
  attempted: number
  correct: number
}

export default function ProgressDisplay(props: ProgressDisplayProps) {
  const progress = createMemo(() => (props.attempted / 10) * 100)

  return (
    <div class="!mt-6">
      <div class="flex items-center justify-between text-sm text-muted-foreground">
        <span>Progress: {props.attempted}/10</span>
        <span>Correct: {props.correct}</span>
      </div>
      <div class="mt-2 h-2 overflow-hidden rounded-full bg-muted">
        <div
          class="h-full rounded-full bg-primary transition-all duration-500"
          style={{ width: `${progress()}%` }}
        />
      </div>
    </div>
  )
}
