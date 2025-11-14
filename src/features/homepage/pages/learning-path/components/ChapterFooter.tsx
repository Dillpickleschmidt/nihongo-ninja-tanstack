import { Show } from "solid-js"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-solid"
import { useLearningPath } from "../LearningPathContext"
import { getChapterStyles } from "@/data/chapter_colors"
import SeeYourDashboardSvg from "@/features/homepage/shared/assets/see-your-dashboard.svg?component-solid"
import TextbookSelectorDialog from "./TextbookSelectorDialog"

export function ChapterFooter() {
  const context = useLearningPath()

  const completedCount = () => {
    return (
      context.modules.data?.filter((lesson) =>
        context.isLessonCompleted(lesson.linkTo),
      ).length ?? 0
    )
  }
  const totalCount = () => {
    return context.modules.data?.length ?? 0
  }

  return (
    <Show when={context.modules.data && !context.modules.isPending}>
      <div class="flex w-full flex-col items-center gap-6 pt-6">
        <p class="text-muted-foreground pb-16 text-xl font-semibold">
          <span
            class={
              getChapterStyles(context.settingsQuery.data!["active-chapter"])
                .textColor
            }
          >
            {completedCount()}/{totalCount()}
          </span>{" "}
          Complete
        </p>
        <Show
          fallback={
            <SeeYourDashboardSvg class="text-muted-foreground absolute bottom-16 left-[23%] h-auto w-64" />
          }
          when={
            context.settingsQuery.data!["active-learning-path"] ===
            "getting_started"
          }
        >
          <div class="-mt-16 pb-20">
            <span>Complete the above and then see your new dashboard, or</span>
            <TextbookSelectorDialog userId={context.userId()}>
              <Button
                class="text-muted-foreground ml-1 h-auto px-2.5 py-1 text-base underline underline-offset-3"
                variant="ghost"
              >
                Skip
                <ArrowRight size={16} class="-mr-1" />
              </Button>
            </TextbookSelectorDialog>
          </div>
          <SeeYourDashboardSvg class="text-muted-foreground absolute bottom-16 left-[23%] h-auto w-64" />
        </Show>
      </div>
    </Show>
  )
}
