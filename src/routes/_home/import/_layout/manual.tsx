// src/routes/_home/import/_layout/manual.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { createMemo } from "solid-js"
import { FloatingActionBar } from "@/features/import-page/shared/components/FloatingActionBar"
import { useImportSelection } from "@/features/import-page/shared/hooks/use-import-selection"
import { ManualImportView } from "@/features/import-page/manual/components/ManualImportView"
import { jlptData } from "@/features/import-page/shared/data/jlpt-data"
import type { ImportCategory } from "@/features/import-page/shared/data/jlpt-data"

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
      <ManualImportView
        selectedIds={selectedIds()}
        itemStates={itemStates}
        handleItemClick={handleItemClick}
        handlePointerDown={handlePointerDown}
        toggleSelectGroup={toggleSelectGroup}
        aggregatedCategories={aggregatedCategories()}
      />

      {/* FLOATING ACTION BAR */}
      <FloatingActionBar
        selectedCount={selectedIds().size}
        onApply={applyStatus}
        onClearSelection={clearSelection}
        mode="manual"
      />
    </div>
  )
}
