// features/learn-page/components/layout/RightSidebar.tsx
import { Show } from "solid-js"
import { HistoryContent } from "../content/HistoryContent"
import { StrugglesContent } from "../content/StrugglesContent"
import { UpcomingLessonsContent } from "../content/UpcomingLessonsContent"
import type { TextbookIDEnum, LearningPathItem } from "@/data/types"

interface RightSidebarProps {
  variant: "mobile" | "desktop"
  userId?: string | null
  textbookId?: TextbookIDEnum
  learningPathItems?: LearningPathItem[]
}

export function RightSidebar(props: RightSidebarProps) {
  if (props.variant === "mobile") {
    return <HistoryContent variant="mobile" />
  }

  // Desktop variant
  return (
    <div
      data-right-sidebar
      class="flex h-full flex-col space-y-6 overflow-x-hidden pb-3"
    >
      <Show
        when={props.userId && props.textbookId && props.learningPathItems}
        fallback={
          <h3 class="text-muted-foreground text-center">
            Your review history here, coming soon.
          </h3>
        }
      >
        <UpcomingLessonsContent
          userId={props.userId!}
          textbookId={props.textbookId!}
          learningPathItems={props.learningPathItems!}
        />
      </Show>
    </div>
  )
}
