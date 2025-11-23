import { For } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { ImportLevelSection } from "@/features/import-page/shared/components/ImportLevelSection"
import { StatisticsSummary } from "@/features/import-page/shared/components/StatisticsSummary"
import { KeyboardShortcutsHint } from "@/features/import-page/shared/components/KeyboardShortcutsHint"
import { ImportActionButtonDesktop, ImportActionButtonMobile } from "@/features/import-page/shared/components/ImportActionButton"
import { EndOfListIndicator } from "@/features/import-page/shared/components/EndOfListIndicator"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { jlptData } from "@/features/import-page/shared/data/jlpt-data"
import type { ImportCategory } from "@/features/import-page/shared/data/jlpt-data"

interface ManualImportViewProps {
  selectedIds: Set<string>
  itemStates: any
  handleItemClick: any
  handlePointerDown: any
  toggleSelectGroup: any
  aggregatedCategories: ImportCategory[]
}

export function ManualImportView(props: ManualImportViewProps) {
  return (
    <>
      {/* SPLIT GRID LAYOUT */}
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
        {/* --- LEFT: CONTENT LIST --- */}
        <div class="pb-16 lg:col-span-7 xl:col-span-8">
          <main class="space-y-10">
            <p class="text-muted-foreground text-xl lg:text-2xl mb-4">Manually mark the <span class="font-extrabold">grammar</span>, <span class="font-extrabold">vocab</span>, & <span class="font-extrabold">kanji</span> that you already know so you don't waste time on them.</p>
            <p class="text-sm lg:text-base text-muted-foreground italic">Already have your history stored somewhere? See <Link to="/import/automatic" class="underline font-medium">Automatic Importing</Link>.
            </p>
            {/* Mobile Aggregated Statistics */}
            <SSRMediaQuery hideFrom="lg">
              <div class="-mt-5 space-y-2">
                <StatisticsSummary
                  itemStates={props.itemStates}
                  categories={props.aggregatedCategories}
                  showLearning={false}
                />
              </div>
            </SSRMediaQuery>
            <For each={jlptData}>
              {(level) => (
                <ImportLevelSection
                  level={level}
                  selectedIds={props.selectedIds}
                  itemStates={props.itemStates}
                  onItemClick={props.handleItemClick}
                  onGroupToggle={props.toggleSelectGroup}
                  onPointerDown={props.handlePointerDown}
                />
              )}
            </For>

            <EndOfListIndicator text="End of list" />
          </main>
        </div>

        {/* --- RIGHT: SUMMARY PANEL (DESKTOP ONLY) --- */}
        <SSRMediaQuery showFrom="lg">
          <aside class="lg:col-span-5 xl:col-span-4 sticky top-24 space-y-6">
            {/* Statistics Summary Component - shows Grammar, Vocabulary, Kanji (aggregated across all levels) */}
            <StatisticsSummary
              itemStates={props.itemStates}
              categories={props.aggregatedCategories}
              showLearning={false}
            />

            <KeyboardShortcutsHint />
            <ImportActionButtonDesktop onClick={() => { }} variant="manual" label="Import Progress" />
          </aside>
        </SSRMediaQuery>
      </div>

      {/* Mobile Import Button */}
      <SSRMediaQuery hideFrom="lg">
        <ImportActionButtonMobile onClick={() => { }} variant="manual" label="Import Progress" />
      </SSRMediaQuery>
    </>
  )
}
