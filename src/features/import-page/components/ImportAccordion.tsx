// src/features/import-page/components/ImportAccordion.tsx
import { createSignal, Show, For } from "solid-js"
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
}

export function ImportAccordion(props: ImportAccordionProps) {
  const [isOpen, setIsOpen] = createSignal(true)

  const groupIds = props.sub.items.map((i) => i.id)

  return (
    <div class="bg-background/50 overflow-hidden rounded-lg bg-gradient-to-b from-white/[0.01] to-transparent backdrop-blur-sm">
      {/* Header */}
      <div
        class="flex cursor-pointer items-center justify-between px-4 py-3 transition-colors select-none hover:bg-white/5"
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
          <Show
            when={groupIds.filter((id) => props.selectedIds.has(id)).length > 0}
          >
            <span class="text-xs font-medium text-blue-400">
              {groupIds.filter((id) => props.selectedIds.has(id)).length}{" "}
              selected
            </span>
          </Show>

          <Button
            variant="ghost"
            size="sm"
            class="text-muted-foreground hover:text-foreground h-6 px-2 text-[11px] font-bold tracking-wider uppercase"
            onClick={(e) => {
              e.stopPropagation()
              props.onGroupToggle(groupIds)
            }}
          >
            {groupIds.length > 0 &&
            groupIds.filter((id) => props.selectedIds.has(id)).length ===
              groupIds.length
              ? "Deselect All"
              : "Select All"}
          </Button>
        </div>
      </div>

      {/* List Content */}
      <Show when={isOpen()}>
        {/* 
            gap-0.5: Restores the gap between rows
            p-1: Adds slight padding inside the container so rows don't touch edges
        */}
        <div class="flex flex-col gap-0.5 border-t border-white/5 p-1">
          <For each={props.sub.items}>
            {(item, index) => (
              <ImportItemRow
                item={item}
                index={index()}
                isSelected={props.selectedIds.has(item.id)}
                status={props.itemStates[item.id]}
                groupIds={groupIds}
                onClick={(e) => props.onItemClick(e, item.id, groupIds)}
                onPointerDown={props.onPointerDown}
              />
            )}
          </For>
        </div>
      </Show>
    </div>
  )
}
