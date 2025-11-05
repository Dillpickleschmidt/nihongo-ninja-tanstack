import { Show } from "solid-js"
import { ChevronLeft, ChevronRight } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/solid-router"
import { useLearningPath } from "../LearningPathContext"

interface ChapterPaginationProps {
  onChapterChange: (chapterSlug: string) => void
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
    if (canGoBack()) {
      const prevChapter = chapters[chapterIndex() - 1]
      props.onChapterChange(prevChapter.slug)
    }
  }

  const handleNext = () => {
    const chapters = context.availableChapters()
    if (canGoForward()) {
      const nextChapter = chapters[chapterIndex() + 1]
      props.onChapterChange(nextChapter.slug)
    }
  }

  const studyButtonClass = () => {
    const styles = context.chapterStyles()
    return `flex h-10 rounded-lg border bg-gradient-to-br px-4 text-sm font-bold text-nowrap shadow-lg backdrop-blur-md ${styles.borderColor} ${styles.hoverBorderColor} hover:bg-transparent ${styles.hoverGradient} ${styles.gradient} ${styles.textColor}`
  }

  const chapterNumber = () => {
    const slug = context.activeChapter()
    const match = slug.match(/(\d+)(?!.*\d)/)
    return match ? match[1] : "?"
  }

  return (
    <Show when={context.activeChapter()}>
      <div class="group relative flex items-center justify-center gap-3">
        <Button
          variant="ghost"
          onClick={handlePrevious}
          disabled={!canGoBack()}
          class="hover:bg-muted h-auto rounded p-1 transition-colors disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft size={16} />
        </Button>

        <Link to={context.firstIncompleteHref() || ""}>
          <Button class={studyButtonClass()} onClick={() => {}}>
            Study Now
          </Button>
        </Link>

        <div class="text-muted-foreground absolute -bottom-6 left-1/2 hidden -translate-x-1/2 text-xs group-hover:block">
          Chapter {chapterNumber()}
        </div>

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
