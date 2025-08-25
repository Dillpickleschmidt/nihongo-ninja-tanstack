import { Show } from "solid-js"
import { Lock, GripVertical } from "lucide-solid"
import { Checkbox } from "@/components/ui/checkbox"
import type { Stack } from "@/features/resolvers/types"
import { cn } from "@/utils"

interface StackItemProps {
  stack: Stack
  index: number
  onToggleEnabled: (index: number, enabled: boolean) => void
  onDragStart: (e: DragEvent, index: number) => void
  onDragOver: (e: DragEvent) => void
  onDrop: (e: DragEvent, targetIndex: number) => void
}

export function StackItem(props: StackItemProps) {
  const handleDragStart = (e: DragEvent) => {
    if (props.stack.locked) {
      e.preventDefault()
      return
    }
    props.onDragStart(e, props.index)
  }

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault()
    props.onDragOver(e)
  }

  const handleDrop = (e: DragEvent) => {
    e.preventDefault()
    props.onDrop(e, props.index)
  }

  return (
    <div
      class={cn(
        "flex items-center justify-between gap-4 rounded-lg border p-4 transition-colors",
        "bg-background/40 border-card-foreground/70 backdrop-blur-sm",
        "hover:bg-background/60 hover:shadow-sm",
        !props.stack.locked && "cursor-move",
      )}
      draggable={!props.stack.locked}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      {/* Left controls: drag handle / lock + priority */}
      <div class="flex items-center gap-2">
        <Show
          when={!props.stack.locked}
          fallback={<Lock class="text-muted-foreground h-4 w-4" />}
        >
          <GripVertical class="text-muted-foreground h-4 w-4" />
        </Show>

        <div class="bg-muted text-muted-foreground rounded-full px-2 py-0.5 font-mono text-xs">
          {props.stack.priority}
        </div>
      </div>

      {/* Middle: stack info */}
      <div class="min-w-0 flex-1">
        <div class="truncate font-medium">{props.stack.name}</div>
        <div class="text-muted-foreground truncate text-xs">
          Source: {props.stack.sourceId}
        </div>
      </div>

      {/* Right: toggle or locked text */}
      <div class="flex items-center">
        <Show when={!props.stack.locked}>
          <Checkbox
            checked={props.stack.enabled}
            onChange={(checked) => props.onToggleEnabled(props.index, checked)}
            class="hover:cursor-pointer"
          />
        </Show>
        <Show when={props.stack.locked}>
          <div class="text-muted-foreground text-xs italic">
            {props.stack.enabled ? "Always enabled" : "Always disabled"}
          </div>
        </Show>
      </div>
    </div>
  )
}

