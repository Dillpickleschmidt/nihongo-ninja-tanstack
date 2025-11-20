import { createSignal, createMemo, Show, For } from "solid-js"
import { ChevronDown, ChevronRight } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { cn } from "@/utils"
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

  const groupIds = createMemo(() => props.sub.items.map((i) => i.id))

  const selectedCountInGroup = createMemo(() => {
    return groupIds().filter((id) => props.selectedIds.has(id)).length
  })

  const isAllSelected = createMemo(
    () => groupIds().length > 0 && selectedCountInGroup() === groupIds().length,
  )

  return (
    <div
      class={cn(
        "overflow-hidden rounded-lg border transition-all duration-200",
        isOpen()
          ? "bg-background/60 border-white/10"
          : "bg-background/40 hover:bg-background/50 border-transparent",
      )}
    >
      {/* Trigger Header */}
      <div
        class="flex cursor-pointer items-center justify-between px-4 py-2.5 select-none"
        onClick={(e) => {
          e.stopPropagation()
          setIsOpen(!isOpen())
        }}
      >
        <div class="flex items-center gap-3">
          <Show
            when={isOpen()}
            fallback={<ChevronRight class="text-muted-foreground/70 size-5" />}
          >
            <ChevronDown class="text-muted-foreground/70 size-5" />
          </Show>
          <div>
            <div class="text-foreground/90 text-base font-medium">
              {props.sub.title}
            </div>
            <div class="text-muted-foreground/70 text-xs">
              {props.sub.description || `${props.sub.items.length} items`}
            </div>
          </div>
        </div>

        <div class="text-xs font-medium">
          <Show when={selectedCountInGroup() > 0}>
            <span class="text-primary font-bold">
              {selectedCountInGroup()} selected
            </span>
          </Show>
        </div>
      </div>

      {/* Expanded List */}
      <Show when={isOpen()}>
        <div class="border-t border-white/5 p-1.5">
          <div class="mb-1 flex items-center justify-end px-2">
            <Button
              variant="ghost"
              size="sm"
              class="text-muted-foreground hover:text-foreground h-6 px-2 text-xs tracking-wider uppercase"
              onClick={(e) => {
                e.stopPropagation()
                props.onGroupToggle(groupIds())
              }}
            >
              {isAllSelected() ? "Deselect All" : "Select All"}
            </Button>
          </div>

          <div class="flex flex-col gap-0.5">
            <For each={props.sub.items}>
              {(item, index) => (
                <ImportItemRow
                  item={item}
                  index={index()}
                  isSelected={props.selectedIds.has(item.id)}
                  status={props.itemStates[item.id]}
                  groupIds={groupIds()}
                  onClick={(e) => props.onItemClick(e, item.id, groupIds())}
                  onPointerDown={props.onPointerDown}
                />
              )}
            </For>
          </div>
        </div>
      </Show>
    </div>
  )
}
