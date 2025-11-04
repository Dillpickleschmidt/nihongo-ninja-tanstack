import { Show } from "solid-js"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-solid"
import { useLearningPath } from "../LearningPathContext"
import SeeYourDashboardSvg from "@/features/homepage/shared/assets/see-your-dashboard.svg?component-solid"
import TextbookSelectorDialog from "./TextbookSelectorDialog"

interface ChapterFooterProps {
  userId: string | null
}

export function ChapterFooter(props: ChapterFooterProps) {
  const context = useLearningPath()

  const completedCount = () =>
    context.lessons().filter((lesson) => context.isLessonCompleted(lesson.href))
      .length
  const totalCount = () => context.lessons().length

  return (
    <div class="flex w-full flex-col items-center gap-6 pt-6">
      <p class="text-muted-foreground pb-8 text-xl font-semibold">
        <span class={context.chapterStyles().textColor}>
          {completedCount()}/{totalCount()}
        </span>{" "}
        Complete
      </p>
      <Show
        fallback={
          <SeeYourDashboardSvg class="text-muted-foreground absolute bottom-16 left-[23%] h-auto w-64" />
        }
        when={context.activeLearningPath() === "getting_started"}
      >
        <div class="pb-20">
          <span>Complete the above and then see your new dashboard, or</span>
          <TextbookSelectorDialog userId={props.userId}>
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
  )
}
