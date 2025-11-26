import { Show } from "solid-js"
import { ChevronLeft, ChevronRight } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/solid-router"
import { useLearningPath } from "../LearningPathContext"
import { getChapterStyles } from "@/data/chapter_colors"

export function ChapterPagination() {
  const context = useLearningPath()

  const chapterIndex = () => {
    return (
      context.chapters.data?.findIndex(
        (ch) => ch.slug === context.settingsQuery.data!["active-chapter"],
      ) ?? -1
    )
  }

  const canGoBack = () => chapterIndex() > 0
  const canGoForward = () => {
    return chapterIndex() < (context.chapters.data?.length ?? 0) - 1
  }

  const handlePrevious = () => {
    if (canGoBack()) {
      const prevChapter = context.chapters.data?.[chapterIndex() - 1]
      if (prevChapter) {
        context.onChapterChange(prevChapter.slug)
      }
    }
  }

  const handleNext = () => {
    if (canGoForward()) {
      const nextChapter = context.chapters.data?.[chapterIndex() + 1]
      if (nextChapter) {
        context.onChapterChange(nextChapter.slug)
      }
    }
  }

  const studyButtonClass = () => {
    const styles = getChapterStyles(
      context.settingsQuery.data!["active-chapter"],
    )
    return `flex h-10 rounded-lg border bg-gradient-to-br px-4 text-sm font-bold text-nowrap shadow-lg backdrop-blur-md ${styles.borderColor} ${styles.hoverBorderColor} hover:bg-transparent ${styles.hoverGradient} ${styles.gradient} ${styles.textColor}`
  }

  const firstLessonHref = () => {
    return context.modules.data?.[0]?.linkTo || ""
  }

  const chapterNumber = () => {
    const slug = context.settingsQuery.data!["active-chapter"]
    if (!slug) return "?"
    const match = slug.match(/(\d+)(?!.*\d)/)
    return match ? match[1] : "?"
  }

  return (
    <Show
      when={
        context.chapters.data &&
        !context.chapters.isPending &&
        !context.settingsQuery.isPending &&
        !context.settingsQuery.isError
      }
    >
      <div class="group relative flex items-center justify-center gap-3">
        <Button
          variant="ghost"
          onClick={handlePrevious}
          disabled={!canGoBack()}
          class="hover:bg-muted h-auto rounded p-1 transition-colors disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft size={16} />
        </Button>

        <Link to={firstLessonHref()}>
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
