import { Show } from "solid-js"
import { ChevronLeft, ChevronRight } from "lucide-solid"
import { getChapterStyles } from "@/data/chapter_colors"
import { getDeckBySlug, getTextbookChapters } from "@/data/utils/core"
import type { UserSettings } from "@/features/main-cookies/schemas/user-settings"
import type { UseQueryResult } from "@tanstack/solid-query"
import type { TextbookIDEnum } from "@/data/types"

interface ChapterPaginationProps {
  settingsQuery: UseQueryResult<UserSettings, Error>
  onChapterChange?: (chapterSlug: string) => void
}

export function ChapterPagination(props: ChapterPaginationProps) {
  const activeTextbook = () =>
    props.settingsQuery.data!["active-learning-path"] as TextbookIDEnum
  const activeChapter = () => props.settingsQuery.data!["active-chapter"]
  const textbookChapters = () => getTextbookChapters(activeTextbook())

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

  const styles = () => getChapterStyles(activeChapter())
  const chapter = () => getDeckBySlug(activeTextbook(), activeChapter())

  return (
    <Show when={activeChapter()}>
      <div class="flex items-center justify-center gap-3">
        <button
          onClick={handlePrevious}
          disabled={!canGoBack()}
          class="hover:bg-muted rounded p-1 transition-colors disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft size={16} />
        </button>

        <div
          class={`flex size-10 items-center justify-center rounded-lg border bg-gradient-to-br font-bold shadow-lg backdrop-blur-md transition-colors duration-150 ${styles().borderColor} ${styles().gradient} ${styles().textColor}`}
          title={chapter()?.title}
        >
          {chapter()?.title.match(/N[1-5]/)?.[0] || "?"}
        </div>

        <button
          onClick={handleNext}
          disabled={!canGoForward()}
          class="hover:bg-muted rounded p-1 transition-colors disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </Show>
  )
}
