import { Show } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-solid"
import { getChapterStyles } from "@/data/chapter_colors"
import type { ChapterContent } from "../utils/getChapterContent"

interface ProgressFooterProps {
  chapterId: string
  textbookId: string
  tiles: ChapterContent["tiles"]
  isModuleCompleted: (href: string) => boolean
}

export function ProgressFooter(props: ProgressFooterProps) {
  const completedCount = () =>
    props.tiles.filter((tile) => props.isModuleCompleted(tile.href)).length
  const totalCount = () => props.tiles.length

  return (
    <div class="flex w-full flex-col items-center gap-6 pt-6">
      <p class="text-muted-foreground text-xl font-semibold">
        <span class={getChapterStyles(props.chapterId).textColor}>
          {completedCount()}/{totalCount()}
        </span>{" "}
        Complete
      </p>
      <Show
        fallback={
          <div>
            <span>Complete the above to see your new dashboard, or</span>
            <Link to="/dashboard">
              <Button
                class="text-muted-foreground ml-1 h-auto px-2.5 py-1 text-base underline underline-offset-3"
                variant="ghost"
                onClick={() => {}}
              >
                Skip
                <ArrowRight size={16} class="-mr-1" />
              </Button>
            </Link>
          </div>
        }
        when={props.textbookId !== "getting_started"}
      >
        <Link to="/dashboard">
          <Button
            class="font-poppins font-semibold"
            variant="secondary"
            onClick={() => {}}
          >
            See your dashboard
            <ArrowRight size={16} />
          </Button>
        </Link>
      </Show>
    </div>
  )
}
