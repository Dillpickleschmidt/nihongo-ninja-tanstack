import { For } from "solid-js"
import { createFileRoute } from "@tanstack/solid-router"
import { queryKeys } from "@/query/utils/query-keys"
import { jlptData } from "@/features/import-page/data/jlpt-data"
import { useImportSelection } from "@/features/import-page/hooks/use-import-selection"
import { ImportLevelSection } from "@/features/import-page/components/ImportLevelSection"
import { FloatingActionBar } from "@/features/import-page/components/FloatingActionBar"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"

export const Route = createFileRoute("/_home/import")({
  loader: async ({ context }) => {
    context.queryClient.setQueryData(queryKeys.backgroundSettings(), {
      // blur: 6,
      backgroundOpacityOffset: -0.22,
      showGradient: false,
    })
  },
  component: ImportPage,
})

function ImportPage() {
  const {
    itemStates,
    selectedIds,
    handleItemClick,
    handlePointerDown,
    toggleSelectGroup,
    applyStatus,
    clearSelection,
  } = useImportSelection()

  return (
    <div
      class="min-h-screen w-full px-0 pt-4 pb-32 md:px-4 md:pt-8"
      onClick={clearSelection}
    >
      <div class="md:bg-card/40 w-full md:mx-auto md:max-w-4xl md:rounded-xl md:border md:border-white/10 md:shadow-2xl md:backdrop-blur-md">
        <div class="border-b border-white/10 px-4 py-6 md:px-8">
          <h1 class="text-2xl font-extrabold tracking-tight">Import Content</h1>
          <p class="text-muted-foreground mt-1 text-base">
            Select to import vocabulary and grammar that you already know. You
            should select <strong>Decent</strong> or <strong>Mastered</strong>{" "}
            if you've seen it before, or leave it blank if it's new to you.
          </p>
          <SSRMediaQuery showFrom="xl">
            <div class="text-muted-foreground mt-2 flex items-center text-sm italic">
              <div>
                Hold <kbd>Shift</kbd> or <kbd>Ctrl</kbd>/
              </div>
              <div class="mr-1 pb-0.5 text-xl leading-0">⌘</div>{" "}
              <div>to select multiple items.</div>
            </div>
          </SSRMediaQuery>
          <SSRMediaQuery hideFrom="xl">
            <p class="text-muted-foreground mt-2 text-sm italic">
              Long press and drag to select multiple items.
            </p>
          </SSRMediaQuery>
        </div>

        <div class="space-y-6 p-4 md:p-8">
          <For each={jlptData}>
            {(level) => (
              <ImportLevelSection
                level={level}
                selectedIds={selectedIds()}
                itemStates={itemStates()}
                onItemClick={handleItemClick}
                onGroupToggle={toggleSelectGroup}
                onPointerDown={handlePointerDown}
              />
            )}
          </For>
        </div>
      </div>

      <FloatingActionBar
        selectedCount={selectedIds().size}
        onApply={applyStatus}
        onClearSelection={clearSelection}
      />
    </div>
  )
}
