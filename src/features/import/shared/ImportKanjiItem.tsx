import { cn } from "@/utils"
import { MainStatusBadge } from "./MainStatusBadge"
import { StatusBadge } from "./StatusBadge"
import { CheckIcon } from "./CheckIcon"
import type { ItemStatus } from "./status"

export interface ImportKanjiItemProps {
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

export function ImportKanjiItem(props: ImportKanjiItemProps) {
  return (
    <div
      data-import-item-id={props.id}
      onClick={(e) => props.onItemClick(e, props.id, props.allIds)}
      onPointerDown={(e) => props.onPointerDown(e, props.id, props.allIds)}
      class={cn(
        "relative flex aspect-square cursor-pointer touch-manipulation flex-col items-center justify-center rounded-lg border p-2 transition-colors ease-instant-hover-150 select-none",
        props.checked
          ? "border-(--accent)/30 bg-(--accent)/10"
          : "border-white/10 bg-white/2 hover:border-white/20"
      )}
    >
      {props.checked && (
        <div class="absolute top-1.5 left-1.5 size-3.5 rounded border border-(--accent) bg-(--accent) text-white">
          <CheckIcon class="size-3.5" />
        </div>
      )}
      <span class="text-2xl font-medium text-white">{props.label}</span>
      <span class="truncate text-[10px] text-white/40 max-w-full px-1">
        {props.sublabel}
      </span>
      <StatusBadge status={props.storedStatus} class="top-1 right-1" />
      <MainStatusBadge status={props.importStatus} class="bottom-0.75" />
    </div>
  )
}

export function ImportKanjiItemSkeleton() {
  return (
    <div class="aspect-square animate-pulse rounded-lg border border-white/10 bg-white/2 p-2 flex flex-col items-center justify-center">
      <div class="size-8 rounded bg-white/10" />
      <div class="mt-1 h-2 w-12 rounded bg-white/5" />
    </div>
  )
}
