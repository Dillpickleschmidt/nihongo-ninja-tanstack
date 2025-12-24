import { cn } from "@/utils"
import { MainStatusBadge } from "./MainStatusBadge"
import { StatusBadge } from "./StatusBadge"
import { CheckIcon } from "./CheckIcon"
import type { ItemStatus } from "./status"

export interface ImportVocabItemProps {
  id: string
  label: string
  sublabel: string
  checked: boolean
  importStatus: ItemStatus
  storedStatus: ItemStatus
  allIds: string[]
  onItemClick: (e: MouseEvent, id: string, groupIds: string[]) => void
  onPointerDown: (e: PointerEvent, id: string, groupIds: string[]) => void
}

export function ImportVocabItem(props: ImportVocabItemProps) {
  return (
    <div
      data-import-item-id={props.id}
      onClick={(e) => props.onItemClick(e, props.id, props.allIds)}
      onPointerDown={(e) => props.onPointerDown(e, props.id, props.allIds)}
      class={cn(
        "relative flex cursor-pointer touch-manipulation items-center gap-3 rounded-lg border p-3 transition-colors ease-instant-hover-150 select-none",
        props.checked
          ? "border-(--accent)/30 bg-(--accent)/10"
          : "border-white/10 bg-white/2 hover:border-white/20"
      )}
    >
      <div
        class={cn(
          "size-4 shrink-0 rounded border transition-colors",
          props.checked
            ? "border-(--accent) bg-(--accent) text-white"
            : "border-white/30 bg-white/10"
        )}
      >
        {props.checked && <CheckIcon />}
      </div>
      <div class="min-w-0 flex-1">
        <p class="truncate font-medium text-white">{props.label}</p>
        <p class="truncate text-xs text-white/40">{props.sublabel}</p>
      </div>
      <StatusBadge status={props.storedStatus} class="top-1.5 right-1.5" />
      <MainStatusBadge status={props.importStatus} class="right-1.5 bottom-1.5" />
    </div>
  )
}

export function ImportVocabItemSkeleton() {
  return (
    <div class="animate-pulse rounded-lg border border-white/10 bg-white/2 p-3">
      <div class="mb-2 h-4 w-16 rounded bg-white/10" />
      <div class="h-3 w-24 rounded bg-white/5" />
    </div>
  )
}
