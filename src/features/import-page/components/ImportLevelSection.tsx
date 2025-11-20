import { For } from "solid-js"
import type { JLPTLevel } from "../data/jlpt-data"
import type { ImportState } from "../types"
import { ImportAccordion } from "./ImportAccordion"

interface ImportLevelSectionProps {
  level: JLPTLevel
  selectedIds: Set<string>
  itemStates: ImportState
  onItemClick: (e: MouseEvent, id: string, groupIds: string[]) => void
  onGroupToggle: (ids: string[]) => void
  onPointerDown: (e: PointerEvent, id: string, groupIds: string[]) => void
}

export function ImportLevelSection(props: ImportLevelSectionProps) {
  return (
    <section class="space-y-3">
      {/* JLPT Level Header */}
      <div class="mb-2 flex items-center gap-3 px-1">
        <span
          class="rounded px-2.5 py-0.5 text-sm font-bold text-white shadow-sm"
          style={{ "background-color": props.level.color }}
        >
          {props.level.label}
        </span>
        <span class="text-muted-foreground/70 text-xs font-bold tracking-widest uppercase">
          {props.level.description}
        </span>
        <div class="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
      </div>

      {/* Categories Grid */}
      <div class="grid gap-3 pl-1">
        <For each={props.level.categories}>
          {(category) => (
            <div class="space-y-2">
              <h3 class="text-foreground/90 px-1 text-base font-semibold">
                {category.title}
              </h3>
              <div class="flex flex-col gap-2">
                <For each={category.subcategories}>
                  {(sub) => (
                    <ImportAccordion
                      sub={sub}
                      selectedIds={props.selectedIds}
                      itemStates={props.itemStates}
                      onItemClick={props.onItemClick}
                      onGroupToggle={props.onGroupToggle}
                      onPointerDown={props.onPointerDown}
                    />
                  )}
                </For>
              </div>
            </div>
          )}
        </For>
      </div>
    </section>
  )
}
