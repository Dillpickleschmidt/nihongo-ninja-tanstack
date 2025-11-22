// src/routes/_home/import/_layout/manual.tsx
import { createFileRoute, Link } from "@tanstack/solid-router"
import { For, createMemo } from "solid-js"
import {
  CheckCircle2,
  ChevronLeft,
  Keyboard,
} from "lucide-solid"
import { ImportLevelSection } from "@/features/import-page/components/ImportLevelSection"
import { FloatingActionBar } from "@/features/import-page/components/FloatingActionBar"
import { StatisticsSummary } from "@/features/import-page/components/StatisticsSummary"
import { useImportSelection } from "@/features/import-page/hooks/use-import-selection"
import { jlptData } from "@/features/import-page/data/jlpt-data"

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

  return (
    <div
      onClick={clearSelection}
      class="animate-in fade-in slide-in-from-bottom-4 min-h-screen w-full duration-500"
    >
      {/* STICKY HEADER */}
      <header class="bg-neutral-900 sticky top-0 z-40 w-full shadow-sm backdrop-blur-md">
        <div class="container flex h-16 items-center justify-between px-4 md:px-8">
          <div class="flex items-center gap-4">
            <Link
              to="/import"
              class="text-muted-foreground hover:text-foreground flex size-9 items-center justify-center rounded-full transition-colors hover:bg-white/5"
            >
              <ChevronLeft class="size-5" />
            </Link>
            <div>
              <h1 class="text-foreground text-lg leading-none font-bold tracking-tight md:text-xl">
                Mark What You Know
              </h1>
              <p class="text-muted-foreground hidden text-xs md:block">
                Select items to add to your profile
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* SPLIT GRID LAYOUT */}
      <div class="container px-4 py-6 md:px-8 md:py-8">
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-16">
          {/* --- LEFT: CONTENT LIST --- */}
          <div class="min-w-0 pb-16 lg:col-span-7 xl:col-span-8">
            <main class="space-y-10">
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
          <aside class="hidden lg:col-span-5 lg:block xl:col-span-4">
            <div class="sticky top-24 space-y-6">
              {/* Statistics Summary Component - shows Grammar, Vocabulary, Kanji */}
              <StatisticsSummary
                itemStates={itemStates}
                categories={jlptData[0].categories}
                showLearning={false}
              />

              {/* Shortcuts Hint */}
              <div class="text-muted-foreground flex items-start gap-3 px-1 text-xs">
                <Keyboard class="mt-0.5 size-4 shrink-0 opacity-50" />
                <div class="space-y-1">
                  <p class="leading-relaxed">
                    <strong class="text-muted-foreground">Shift + Click</strong>{" "}
                    to select a range.
                  </p>
                  <p class="leading-relaxed">
                    <strong class="text-muted-foreground">
                      Cmd/Ctrl + Click
                    </strong>{" "}
                    to toggle individually.
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
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
