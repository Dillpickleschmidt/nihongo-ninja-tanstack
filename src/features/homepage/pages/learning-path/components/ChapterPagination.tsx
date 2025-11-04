import { Show } from "solid-js"
import { ChevronLeft, ChevronRight } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/solid-router"
import { useLearningPath } from "../LearningPathContext"

interface ChapterPaginationProps {
  onChapterChange?: (chapterSlug: string) => void
}

export function ChapterPagination(props: ChapterPaginationProps) {
  const context = useLearningPath()

  const chapterIndex = () => {
    return context
      .availableChapters()
      .findIndex((ch) => ch.slug === context.activeChapter())
  }

  const canGoBack = () => chapterIndex() > 0
  const canGoForward = () => {
    return chapterIndex() < context.availableChapters().length - 1
  }

  const handlePrevious = () => {
    const chapters = context.availableChapters()
    if (canGoBack() && props.onChapterChange) {
      const prevChapter = chapters[chapterIndex() - 1]
      props.onChapterChange(prevChapter.slug)
    }
  }

  const handleNext = () => {
    const chapters = context.availableChapters()
    if (canGoForward() && props.onChapterChange) {
      const nextChapter = chapters[chapterIndex() + 1]
      props.onChapterChange(nextChapter.slug)
    }
  }

  return (
    <Show when={context.activeChapter()}>
      <div class="flex items-center justify-center gap-3">
        <Button
          variant="ghost"
          onClick={handlePrevious}
          disabled={!canGoBack()}
          class="hover:bg-muted h-auto rounded p-1 transition-colors disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft size={16} />
        </Button>

        <Button
          as={Link}
          to={context.firstIncompleteHref() || ""}
          class={`flex h-10 rounded-lg border bg-gradient-to-br px-4 text-sm font-bold text-nowrap shadow-lg backdrop-blur-md transition-colors duration-150 ${context.chapterStyles().borderColor} ${context.chapterStyles().hoverBorderColor} hover:bg-transparent ${context.chapterStyles().hoverGradient} ${context.chapterStyles().gradient} ${context.chapterStyles().textColor}`}
        >
          Study Now
        </Button>

        <Button
          variant="ghost"
          onClick={handleNext}
          disabled={!canGoForward()}
          class="hover:bg-muted h-auto rounded p-1 transition-colors disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronRight size={16} />
        </Button>
      </div>
    </Show>
  )
}
