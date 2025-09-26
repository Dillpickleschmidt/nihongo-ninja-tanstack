// features/learn-page/components/layout/RightSidebar.tsx
import { HistoryContent } from "../content/HistoryContent"
import { StrugglesContent } from "../content/StrugglesContent"

interface RightSidebarProps {
  variant: "mobile" | "desktop"
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
      {/* <StrugglesContent variant="desktop" /> */}
      <h3 class="text-muted-foreground text-center">
        Your review history here, coming soon.
      </h3>
    </div>
  )
}
