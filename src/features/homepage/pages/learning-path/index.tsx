import { createSignal } from "solid-js"
import { PreviewGrid } from "./components/PreviewGrid"

interface LearningPathPageProps {
  initialLevel?: string | null
  onLevelChange?: (level: string) => void
}

export function LearningPathPage(props: LearningPathPageProps) {
  const [level, setLevel] = createSignal<string | null>(props.initialLevel ?? null)

  const handleLevelChange = (newLevel: string) => {
    setLevel(newLevel)
    props.onLevelChange?.(newLevel)
  }

  return (
    <PreviewGrid
      level={level()}
      onLevelChange={handleLevelChange}
    />
  )
}
