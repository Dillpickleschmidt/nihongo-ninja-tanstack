// src/features/import-page/components/ImportAccordion.tsx
import { createSignal, Show, Index, createMemo } from "solid-js"
import { ChevronDown, ChevronRight } from "lucide-solid"
import { Button } from "@/components/ui/button"
import type { ImportSubCategory } from "../data/jlpt-data"
import type { ImportState } from "../types"
import { ImportItemRow } from "./ImportItemRow"

interface ImportAccordionProps {
  sub: ImportSubCategory
  selectedIds: Set<string>
  itemStates: ImportState
  onItemClick: (e: MouseEvent, id: string, groupIds: string[]) => void
  onGroupToggle: (ids: string[]) => void
  onPointerDown: (e: PointerEvent, id: string, groupIds: string[]) => void
  showDelete?: boolean
  onDelete?: (id: string) => void
}

export function ImportAccordion(props: ImportAccordionProps) {
  const [isOpen, setIsOpen] = createSignal(false)

  // Memoize groupIds to prevent prop changes on every render
  const groupIds = createMemo(() => props.sub.items.map((i) => i.id))

  // Memoize selected count to avoid triple-filtering per render
  const selectedCount = createMemo(() => {
    let count = 0
    const ids = groupIds()
    for (const id of ids) {
      if (props.selectedIds.has(id)) count++
    }
    return count
  })

  const allSelected = () => {
    const ids = groupIds()
    return ids.length > 0 && selectedCount() === ids.length
  }

  return (
    <div class="bg-background/50 overflow-hidden rounded-lg bg-linear-to-b from-white/1 to-transparent backdrop-blur-sm">
      {/* Header */}
      <div
        class="flex cursor-pointer items-center justify-between px-4 py-3 transition-colors select-none hover:bg-card-foreground/40"
        onClick={(e) => {
          e.stopPropagation()
          setIsOpen(!isOpen())
        }}
      >
        <div class="flex items-center gap-3">
          <Show
            when={isOpen()}
            fallback={<ChevronRight class="text-muted-foreground size-4" />}
          >
            <ChevronDown class="text-muted-foreground size-4" />
          </Show>
          <div>
            <div class="text-foreground text-sm font-bold">
              {props.sub.title}
            </div>
            <div class="text-muted-foreground text-sm">
              {props.sub.description || `${props.sub.items.length} items`}
            </div>
          </div>
        </div>

        {/* Right Side Actions */}
        <div class="flex items-center gap-3">
          <Show when={selectedCount() > 0}>
            <span class="text-xs font-medium text-blue-400">
              {selectedCount()} selected
            </span>
          </Show>

          <Button
            variant="ghost"
            size="sm"
            class="text-muted-foreground hover:text-foreground h-6 px-2 text-[11px] font-bold tracking-wider uppercase"
            onClick={(e) => {
              e.stopPropagation()
              props.onGroupToggle(groupIds())
            }}
          >
            {allSelected() ? "Deselect All" : "Select All"}
          </Button>
        </div>
      </div>

      {/* List Content */}
      <Show when={isOpen()}>
        <div class="flex flex-col gap-0.5 border-t border-white/5 p-1">
          <Index each={props.sub.items}>
            {(item, index) => (
              <ImportItemRow
                item={item()}
                index={index}
                isSelected={props.selectedIds.has(item().id)}
                status={props.itemStates[item().id]}
                groupIds={groupIds()}
                onClick={(e) => props.onItemClick(e, item().id, groupIds())}
                onPointerDown={props.onPointerDown}
                showDelete={props.showDelete}
                onDelete={() => props.onDelete?.(item().id)}
              />
            )}
          </Index>
        </div>
      </Show>
    </div>
  )
}
