// features/learn-page/components/layout/RightSidebar.tsx
import { Show } from "solid-js"
import { HistoryContent } from "../content/HistoryContent"
import { StrugglesContent } from "../content/StrugglesContent"
import { UpcomingLessonsContent } from "../content/UpcomingLessonsContent"
import { useCustomQuery } from "@/hooks/useCustomQuery"

interface RightSidebarProps {
  variant: "mobile" | "desktop"
  userId?: string | null
  upcomingModulesQuery?: ReturnType<typeof useCustomQuery>
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
        when={props.userId && props.upcomingModulesQuery}
        fallback={
          <h3 class="text-muted-foreground text-center">
            Your review history here, coming soon.
          </h3>
        }
      >
        <UpcomingLessonsContent
          userId={props.userId!}
          upcomingModulesQuery={props.upcomingModulesQuery!}
        />
      </Show>
    </div>
  )
}
