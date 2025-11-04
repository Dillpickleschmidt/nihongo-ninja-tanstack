import { Show } from "solid-js"
import { ChevronLeft, ChevronRight } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { Link } from "@tanstack/solid-router"
import { useChapterData } from "../hooks/useChapterData"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"
import type { UseQueryResult } from "@tanstack/solid-query"

interface ChapterPaginationProps {
  settingsQuery: UseQueryResult<UserSettings, Error>
  onChapterChange?: (chapterSlug: string) => void
  firstIncompleteHref?: string
}

export function ChapterPagination(props: ChapterPaginationProps) {
  const {
    activeChapter,
    chapters: textbookChapters,
    styles,
  } = useChapterData(props.settingsQuery)

  const chapterIndex = () => {
    return textbookChapters().findIndex((ch) => ch.slug === activeChapter())
  }

  const canGoBack = () => chapterIndex() > 0
  const canGoForward = () => {
    return chapterIndex() < textbookChapters().length - 1
  }

  const handlePrevious = () => {
    const chapters = textbookChapters()
    if (canGoBack() && props.onChapterChange) {
      const prevChapter = chapters[chapterIndex() - 1]
      props.onChapterChange(prevChapter.slug)
    }
  }

  const handleNext = () => {
    const chapters = textbookChapters()
    if (canGoForward() && props.onChapterChange) {
      const nextChapter = chapters[chapterIndex() + 1]
      props.onChapterChange(nextChapter.slug)
    }
  }

  return (
    <Show when={activeChapter()}>
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
          to={props.firstIncompleteHref || ""}
          class={`flex h-10 rounded-lg border bg-gradient-to-br px-4 text-sm font-bold text-nowrap shadow-lg backdrop-blur-md transition-colors duration-150 ${styles().borderColor} ${styles().hoverBorderColor} hover:bg-transparent ${styles().hoverGradient} ${styles().gradient} ${styles().textColor}`}
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
