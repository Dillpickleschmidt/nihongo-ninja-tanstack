import { Show } from "solid-js"
import { cn } from "@/utils"
import { MainStatusBadge } from "./MainStatusBadge"
import { StatusBadge } from "./StatusBadge"
import { CheckIcon } from "./CheckIcon"
import type { ItemStatus } from "./status"
import type { PracticeItemType } from "convex/validators"

export type ImportItemVariant = "vocab" | "kanji"

export interface ImportItemProps {
  variant: ImportItemVariant
  id: string
  label: string
  sublabel: string
  checked: boolean
  importStatus: ItemStatus
  storedStatus: ItemStatus
  overrideStatus?: ItemStatus
  allIds: string[]
  onItemClick: (e: MouseEvent, id: string, type: PracticeItemType, groupIds: string[]) => void
  onPointerDown: (e: PointerEvent, id: string, type: PracticeItemType, groupIds: string[]) => void
  onUndoClick?: (e: MouseEvent, key: string, type: PracticeItemType) => void
}

export function ImportItem(props: ImportItemProps) {
  const type = (): PracticeItemType => (props.variant === "vocab" ? "vocabulary" : "kanji")
  const effectiveStatus = () => props.overrideStatus ?? props.importStatus
  const hasOverride = () => props.overrideStatus !== undefined

  const handleUndoClick = (e: MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    props.onUndoClick?.(e, props.id, type())
  }

  return (
    <Show when={props.variant === "vocab"} fallback={<KanjiLayout {...props} type={type()} effectiveStatus={effectiveStatus()} hasOverride={hasOverride()} onUndoClick={handleUndoClick} />}>
      <VocabLayout {...props} type={type()} effectiveStatus={effectiveStatus()} hasOverride={hasOverride()} onUndoClick={handleUndoClick} />
    </Show>
  )
}

interface LayoutProps extends ImportItemProps {
  type: PracticeItemType
  effectiveStatus: ItemStatus
  hasOverride: boolean
  onUndoClick: (e: MouseEvent) => void
}

function VocabLayout(props: LayoutProps) {
  return (
    <div
      data-import-item-id={props.id}
      onClick={(e) => props.onItemClick(e, props.id, props.type, props.allIds)}
      onPointerDown={(e) => props.onPointerDown(e, props.id, props.type, props.allIds)}
      class={cn(
        "relative flex cursor-pointer touch-manipulation items-center gap-3 rounded-lg border p-3 transition-colors ease-instant-hover-150 select-none",
        props.checked
          ? "border-(--accent)/30 bg-(--accent)/10"
          : "border-white/10 bg-white/2 hover:border-white/20"
      )}
    >
      <Show when={props.hasOverride}>
        <UndoButton onClick={props.onUndoClick} class="top-1 left-1 size-5" iconClass="size-3" />
      </Show>

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
      <MainStatusBadge status={props.effectiveStatus} class="right-1.5 bottom-1.5" />
    </div>
  )
}

function KanjiLayout(props: LayoutProps) {
  return (
    <div
      data-import-item-id={props.id}
      onClick={(e) => props.onItemClick(e, props.id, props.type, props.allIds)}
      onPointerDown={(e) => props.onPointerDown(e, props.id, props.type, props.allIds)}
      class={cn(
        "relative flex aspect-square cursor-pointer touch-manipulation flex-col items-center justify-center rounded-lg border p-2 transition-colors ease-instant-hover-150 select-none",
        props.checked
          ? "border-(--accent)/30 bg-(--accent)/10"
          : "border-white/10 bg-white/2 hover:border-white/20"
      )}
    >
      <Show when={props.hasOverride}>
        <UndoButton onClick={props.onUndoClick} class="top-0.5 left-0.5 size-4" iconClass="size-2.5" />
      </Show>

      <Show when={props.checked && !props.hasOverride}>
        <div class="absolute top-1.5 left-1.5 size-3.5 rounded border border-(--accent) bg-(--accent) text-white">
          <CheckIcon class="size-3.5" />
        </div>
      </Show>
      <Show when={props.checked && props.hasOverride}>
        <div class="absolute top-1.5 left-5.5 size-3.5 rounded border border-(--accent) bg-(--accent) text-white">
          <CheckIcon class="size-3.5" />
        </div>
      </Show>

      <span class="text-2xl font-medium text-white">{props.label}</span>
      <span class="max-w-full truncate px-1 text-[10px] text-white/40">
        {props.sublabel}
      </span>
      <StatusBadge status={props.storedStatus} class="top-1 right-1" />
      <MainStatusBadge status={props.effectiveStatus} class="bottom-0.75" />
    </div>
  )
}

function UndoButton(props: { onClick: (e: MouseEvent) => void; class: string; iconClass: string }) {
  return (
    <button
      type="button"
      class={cn(
        "absolute z-10 flex items-center justify-center rounded bg-white/10 text-white/50 transition-colors hover:bg-white/20 hover:text-white",
        props.class
      )}
      onClick={props.onClick}
      title="Undo override"
    >
      <svg class={props.iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
      </svg>
    </button>
  )
}

export function ImportItemSkeleton(props: { variant: ImportItemVariant }) {
  return (
    <Show
      when={props.variant === "vocab"}
      fallback={
        <div class="flex aspect-square animate-pulse flex-col items-center justify-center rounded-lg border border-white/10 bg-white/2 p-2">
          <div class="size-8 rounded bg-white/10" />
          <div class="mt-1 h-2 w-12 rounded bg-white/5" />
        </div>
      }
    >
      <div class="animate-pulse rounded-lg border border-white/10 bg-white/2 p-3">
        <div class="mb-2 h-4 w-16 rounded bg-white/10" />
        <div class="h-3 w-24 rounded bg-white/5" />
      </div>
    </Show>
  )
}
