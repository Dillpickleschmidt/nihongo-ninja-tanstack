// src/features/import-page/components/ImportItemRow.tsx
import { Show } from "solid-js"
import { BookOpen, Star, GraduationCap, Trash2 } from "lucide-solid"
import { cn } from "@/utils"
import type { ImportItem } from "../data/jlpt-data"
import type { ItemStatus } from "../types"

interface ImportItemRowProps {
  item: ImportItem
  index: number
  isSelected: boolean
  status: ItemStatus
  groupIds: string[]
  onClick: (e: MouseEvent) => void
  onPointerDown: (e: PointerEvent, id: string, groupIds: string[]) => void
  showDelete?: boolean
  onDelete?: () => void
}

export function ImportItemRow(props: ImportItemRowProps) {
  return (
    <div
      data-import-item-id={props.item.id}
      class={cn(
        "group relative flex cursor-pointer touch-manipulation items-center justify-between rounded-sm px-2 py-2",
        props.isSelected
          ? "bg-card-foreground/40 text-accent-foreground"
          : "hover:bg-card-foreground/20 text-muted-foreground hover:text-foreground",
      )}
      onClick={props.onClick}
      onPointerDown={(e) =>
        props.onPointerDown(e, props.item.id, props.groupIds)
      }
    >
      {/* Left: Content */}
      <div class="flex items-center gap-4">
        {/* Numbering */}
        <div
          class={cn(
            "text-muted-foreground/40 w-5 text-right font-mono text-xs tabular-nums",
            props.isSelected ? "text-accent-foreground/60" : "",
          )}
        >
          {props.index + 1}
        </div>

        <div class="text-foreground/90 min-w-20 text-base font-medium">
          {props.item.main}
        </div>
        <div class="text-muted-foreground/70 max-w-[180px] truncate text-sm group-hover:opacity-100 sm:max-w-sm">
          {props.item.meaning}
        </div>
      </div>

      {/* Right: Status Icons & Actions */}
      <div class="flex items-center gap-3">
        <Show when={props.status === "learning"}>
          <div class="flex items-center gap-1.5 rounded border border-green-500/10 bg-green-500/10 px-2 py-0.5 text-xs font-medium text-green-400">
            <GraduationCap class="size-3.5" />
            <span class="hidden sm:inline">Learning</span>
          </div>
        </Show>
        <Show when={props.status === "decent"}>
          <div class="flex items-center gap-1.5 rounded border border-blue-500/10 bg-blue-500/10 px-2 py-0.5 text-xs font-medium text-blue-400">
            <BookOpen class="size-3.5" />
            <span class="hidden sm:inline">Decent</span>
          </div>
        </Show>
        <Show when={props.status === "mastered"}>
          <div class="flex items-center gap-1.5 rounded border border-yellow-500/10 bg-yellow-500/10 px-2 py-0.5 text-xs font-medium text-yellow-400">
            <Star class="size-3.5 fill-current" />
            <span class="hidden sm:inline">Mastered</span>
          </div>
        </Show>

        {/* Delete Button (automatic mode only) */}
        <Show when={props.showDelete}>
          <button
            onClick={(e) => {
              e.stopPropagation()
              props.onDelete?.()
            }}
            class="text-neutral-700 xl:text-neutral-600 hover:text-red-400 opacity-100 transition-all duration-200 xl:opacity-0 xl:group-hover:opacity-100 cursor-pointer"
            title="Delete item"
          >
            <Trash2 class="size-4" />
          </button>
        </Show>
      </div>
    </div>
  )
}
