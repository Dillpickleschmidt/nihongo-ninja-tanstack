// src/routes/_home/import/_layout/manual.tsx
import { createFileRoute, Link } from "@tanstack/solid-router"
import { For, createMemo } from "solid-js"
import {
  CheckCircle2,
  Keyboard,
} from "lucide-solid"
import { ImportLevelSection } from "@/features/import-page/components/ImportLevelSection"
import { FloatingActionBar } from "@/features/import-page/components/FloatingActionBar"
import { StatisticsSummary } from "@/features/import-page/components/StatisticsSummary"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { useImportSelection } from "@/features/import-page/hooks/use-import-selection"
import { jlptData } from "@/features/import-page/data/jlpt-data"
import type { ImportCategory } from "@/features/import-page/data/jlpt-data"

export const Route = createFileRoute("/_home/import/_layout/manual")({
  component: ManualImportPage,
})

function ManualImportPage() {
  const {
    itemStates,
    selectedIds,
    handleItemClick,
    handlePointerDown,
    toggleSelectGroup,
    applyStatus,
    clearSelection,
  } = useImportSelection()

  // Aggregate all categories across all JLPT levels
  const aggregatedCategories = createMemo(() => {
    const categoryMap = new Map<string, ImportCategory>()

    // Flatten all categories from all JLPT levels, keying by title to merge duplicates
    for (const level of jlptData) {
      for (const category of level.categories) {
        if (!categoryMap.has(category.title)) {
          categoryMap.set(category.title, {
            id: category.title.toLowerCase(),
            title: category.title,
            subcategories: [],
          })
        }
        const existingCategory = categoryMap.get(category.title)!
        existingCategory.subcategories.push(...category.subcategories)
      }
    }

    return Array.from(categoryMap.values())
  })

  return (
    <div onClick={clearSelection} class="container px-4 py-6 md:px-8 md:py-8">
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
              <div class="-mt-5">
                <StatisticsSummary
                  itemStates={itemStates}
                  categories={aggregatedCategories()}
                  showLearning={false}
                />
              </div>
            </SSRMediaQuery>
            <For each={jlptData}>
              {(level) => (
                <ImportLevelSection
                  level={level}
                  selectedIds={selectedIds()}
                  itemStates={itemStates}
                  onItemClick={handleItemClick}
                  onGroupToggle={toggleSelectGroup}
                  onPointerDown={handlePointerDown}
                />
              )}
            </For>

            <div class="text-muted-foreground py-12 text-center text-sm">
              <CheckCircle2 class="mx-auto mb-2 size-8 opacity-20" />
              <p>End of list</p>
            </div>
          </main>
        </div>

        {/* --- RIGHT: SUMMARY PANEL (DESKTOP ONLY) --- */}
        <aside class="hidden lg:col-span-5 lg:block xl:col-span-4 sticky top-24 space-y-6">
          {/* Statistics Summary Component - shows Grammar, Vocabulary, Kanji (aggregated across all levels) */}
          <StatisticsSummary
            itemStates={itemStates}
            categories={aggregatedCategories()}
            showLearning={false}
          />

          {/* Shortcuts Hint */}
          <div class="text-muted-foreground flex items-start gap-3 px-1 text-xs">
            <Keyboard class="mt-0.5 size-4 shrink-0 opacity-50" />
            <div>
              <p class="leading-relaxed">
                <strong class="text-muted-foreground">Shift + Click</strong>{" "}
                to select a range.
              </p>
              <p class="leading-relaxed mt-1">
                <strong class="text-muted-foreground">
                  Cmd/Ctrl + Click
                </strong>{" "}
                to toggle individually.
              </p>
            </div>
          </div>
        </aside>
      </div>
      {/* FLOATING ACTION BAR */}
      <FloatingActionBar
        selectedCount={selectedIds().size}
        onApply={applyStatus}
        onClearSelection={clearSelection}
      />
    </div>
  )
}
