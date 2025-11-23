import { cn } from "@/utils"

interface PlaceholderSidebarProps {
  class?: string
}

/**
 * Basic placeholder right sidebar for vocab routes that don't show the deck panel
 */
export function PlaceholderSidebar(props: PlaceholderSidebarProps) {
  return (
    <div
      class={cn(
        "border-border/50 bg-card/30 flex h-full flex-col border-l p-4",
        props.class,
      )}
    >
      <div class="flex h-full items-center justify-center">
        <p class="text-muted-foreground text-center text-sm">
          Sidebar content coming soon
        </p>
      </div>
    </div>
  )
}
