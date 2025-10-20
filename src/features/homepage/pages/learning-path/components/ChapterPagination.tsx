import { Show } from "solid-js"
import { ChevronLeft, ChevronRight } from "lucide-solid"
import { getChapterStyles } from "@/data/chapter_colors"
import { textbooks } from "@/data/textbooks"

interface ChapterPaginationProps {
  currentChapterId: string
  textbookId?: string
  onChapterChange?: (chapterId: string) => void
}

export function ChapterPagination(props: ChapterPaginationProps) {
  const textbookId = () => props.textbookId || "getting_started"
  const textbook = () => textbooks[textbookId() as keyof typeof textbooks]

  const chapterIndex = () => {
    const tb = textbook()
    return tb
      ? tb.chapters.findIndex((ch) => ch.id === props.currentChapterId)
      : -1
  }

  const canGoBack = () => chapterIndex() > 0
  const canGoForward = () => {
    const tb = textbook()
    return tb ? chapterIndex() < tb.chapters.length - 1 : false
  }

  const handlePrevious = () => {
    const tb = textbook()
    if (canGoBack() && tb && props.onChapterChange) {
      props.onChapterChange(tb.chapters[chapterIndex() - 1].id)
    }
  }

  const handleNext = () => {
    const tb = textbook()
    if (canGoForward() && tb && props.onChapterChange) {
      props.onChapterChange(tb.chapters[chapterIndex() + 1].id)
    }
  }

  const styles = () => getChapterStyles(props.currentChapterId)
  const textbook_data = () => textbook()
  const chapter = () =>
    textbook_data()?.chapters.find((ch) => ch.id === props.currentChapterId)

  return (
    <Show when={props.currentChapterId}>
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
