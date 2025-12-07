import { ChevronLeft, ChevronRight } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { getChapterStyles } from "@/data/chapter_colors"

const LEVELS = ["N5", "N4", "N3", "N2", "N1"]

interface JlptPaginationProps {
  selectedLevel: string
  onLevelChange: (level: string) => void
}

export function JlptPagination(props: JlptPaginationProps) {
  const levelIndex = () => LEVELS.indexOf(props.selectedLevel)

  const canGoEasier = () => levelIndex() > 0
  const canGoHarder = () => levelIndex() < LEVELS.length - 1

  const handlePrevious = () => {
    if (canGoEasier()) {
      props.onLevelChange(LEVELS[levelIndex() - 1])
    }
  }

  const handleNext = () => {
    if (canGoHarder()) {
      props.onLevelChange(LEVELS[levelIndex() + 1])
    }
  }

  const styles = () => getChapterStyles(`${props.selectedLevel.toLowerCase()}-introduction`)

  const labelClass = () => {
    const s = styles()
    return `flex items-center justify-center size-10 items-center rounded-lg border bg-gradient-to-br text-sm font-bold shadow-lg backdrop-blur-md ${s.borderColor} ${s.gradient} ${s.textColor}`
  }

  return (
    <div class="flex items-center gap-2">
      <Button
        variant="ghost"
        onClick={handlePrevious}
        disabled={!canGoEasier()}
        class="hover:bg-muted h-auto rounded p-1 transition-colors disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ChevronLeft size={16} />
      </Button>

      <span class={labelClass()}>
        {props.selectedLevel}
      </span>

      <Button
        variant="ghost"
        onClick={handleNext}
        disabled={!canGoHarder()}
        class="hover:bg-muted h-auto rounded p-1 transition-colors disabled:cursor-not-allowed disabled:opacity-30"
      >
        <ChevronRight size={16} />
      </Button>
    </div>
  )
}
