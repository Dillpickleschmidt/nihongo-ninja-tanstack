// features/vocab-page/shared/CollapsiblePanel.tsx
import { JSX, Show } from "solid-js"
import { ChevronLeft, ChevronRight } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { cn } from "@/utils"

interface CollapsiblePanelProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  position: "left" | "right"
  children: JSX.Element
  class?: string
  ref?: HTMLDivElement
}

export function CollapsiblePanel(props: CollapsiblePanelProps) {
  const isLeft = props.position === "left"
  return (
    <div
      class={cn(
        "relative h-full transition-all duration-300 ease-in-out",
        props.isOpen ? "w-96" : "w-0",
        props.class,
      )}
    >
      <Show when={props.isOpen}>
        <div
          ref={props.ref}
          class="bg-muted/30 border-border h-full overflow-y-auto border-r p-4"
        >
          <div class="mb-4 flex items-center justify-between">
            <h2 class="text-lg font-semibold">{props.title}</h2>
          </div>
          <div>{props.children}</div>
        </div>
      </Show>
      {/* Arrow button - always positioned at the edge, vertically centered */}
      <Button
        variant="ghost"
        size="sm"
        onClick={props.onToggle}
        class={cn(
          "absolute top-1/2 z-10 h-12 w-8 -translate-y-1/2 p-2",
          isLeft
            ? "-right-8 rounded-l-none rounded-r-md"
            : "-left-8 rounded-l-md rounded-r-none",
        )}
      >
        {props.isOpen ? (
          isLeft ? (
            <ChevronLeft class="h-4 w-4" />
          ) : (
            <ChevronRight class="h-4 w-4" />
          )
        ) : isLeft ? (
          <ChevronRight class="h-4 w-4" />
        ) : (
          <ChevronLeft class="h-4 w-4" />
        )}
      </Button>
    </div>
  )
}
