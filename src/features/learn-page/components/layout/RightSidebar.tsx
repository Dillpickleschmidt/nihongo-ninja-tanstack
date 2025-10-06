// features/learn-page/components/layout/RightSidebar.tsx
import { Show } from "solid-js"
import { Play } from "lucide-solid"
import { HistoryContent } from "../content/HistoryContent"
import { StrugglesContent } from "../content/StrugglesContent"
import { UpcomingModulesList } from "../content/UpcomingModulesList"
import { useLearnPageContext } from "@/features/learn-page/context/LearnPageContext"
import { Button } from "@/components/ui/button"

interface RightSidebarProps {
  variant: "mobile" | "desktop"
  userId?: string | null
}

export function RightSidebar(props: RightSidebarProps) {
  const { upcomingModulesQuery, completionsQuery } = useLearnPageContext()

  if (props.variant === "mobile") {
    return <HistoryContent variant="mobile" />
  }

  // Filter out completed modules from upcoming list
  const upcomingModules = () => {
    const data = upcomingModulesQuery.data || []
    const completedSet = new Set(
      completionsQuery.data?.map((c) => c.module_path) || [],
    )
    return data.filter((item) => !completedSet.has(item.id))
  }

  // Desktop variant
  return (
    <div
      data-right-sidebar
      class="flex h-full flex-col space-y-6 overflow-x-hidden pb-3"
    >
      <Show
        when={props.userId}
        fallback={
          <h3 class="text-muted-foreground text-center">
            Your review history here, coming soon.
          </h3>
        }
      >
        <Button
          variant="ghost"
          class="bg-primary/10 hover:bg-primary/20 text-primary w-full cursor-pointer rounded-lg px-4 py-2.5"
        >
          <Play class="h-4 w-4" />
          <span class="text-sm font-medium">Start Studying</span>
        </Button>
        <UpcomingModulesList
          variant="sm"
          completedModules={completionsQuery.data || []}
          upcomingModules={upcomingModules}
        />
      </Show>
    </div>
  )
}
