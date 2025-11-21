// src/features/import-page/components/ImportLevelSection.tsx
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
    <section class="space-y-4">
      {/* Sticky Level Header (Optional: add top-16 sticky class if you want it to float) */}
      <div class="flex items-center gap-3 pb-2">
        <span
          class="text-primary-foreground rounded px-2.5 py-0.5 text-sm font-bold shadow-sm"
          style={{ "background-color": props.level.color }}
        >
          {props.level.label}
        </span>
        <span class="text-muted-foreground text-xs font-bold tracking-widest uppercase">
          {props.level.description}
        </span>
        <div class="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
      </div>

      {/* Categories Grid */}
      <div class="space-y-8 pl-2">
        <For each={props.level.categories}>
          {(category) => (
            <div class="flex flex-col gap-3">
              <h3 class="text-muted-foreground px-1 text-sm font-semibold tracking-wider uppercase">
                {category.title}
              </h3>
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
          )}
        </For>
      </div>
    </section>
  )
}
