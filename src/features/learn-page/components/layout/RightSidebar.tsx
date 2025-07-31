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
    <div data-right-sidebar class="space-y-4 overflow-x-hidden pb-3">
      {/* Recent Activity Section */}
      <HistoryContent variant="desktop" maxItems={4} />

      {/* Struggle Areas */}
      <StrugglesContent variant="desktop" maxItems={5} />
    </div>
  )
}
