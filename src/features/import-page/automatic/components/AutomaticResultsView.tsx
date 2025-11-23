import { Dynamic } from "solid-js/web"
import { Link } from "@tanstack/solid-router"
import { CheckCircle2 } from "lucide-solid"
import { ImportAccordion } from "@/features/import-page/shared/components/ImportAccordion"
import { StatisticsSummary } from "@/features/import-page/shared/components/StatisticsSummary"
import { KeyboardShortcutsHint } from "@/features/import-page/shared/components/KeyboardShortcutsHint"
import { ImportActionButtonDesktop, ImportActionButtonMobile } from "@/features/import-page/shared/components/ImportActionButton"
import { EndOfListIndicator } from "@/features/import-page/shared/components/EndOfListIndicator"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { statusConfig } from "@/features/import-page/shared/constants/status-config"
import type { ImportSubCategory } from "@/features/import-page/shared/data/jlpt-data"

interface AutomaticResultsViewProps {
  vocabStore: ImportSubCategory
  kanjiStore: ImportSubCategory
  itemStates: any
  selectedIds: Set<string>
  handleItemClick: any
  handlePointerDown: any
  toggleSelectGroup: any
  handleDelete: (id: string) => void
}

export function AutomaticResultsView(props: AutomaticResultsViewProps) {
  // Create mock categories for statistics display (automatic mode shows vocab + kanji only)
  const displayCategories = () => [
    { id: "vocab", title: "Vocabulary", subcategories: [{ id: "vocab-items", title: "Vocabulary", items: props.vocabStore.items }] },
    { id: "kanji", title: "Kanji", subcategories: [{ id: "kanji-items", title: "Kanji", items: props.kanjiStore.items }] },
  ]

  return (
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
      {/* --- LEFT: CONTENT LIST --- */}
      <div class="pb-16 lg:col-span-7 xl:col-span-8">
        <main class="animate-in fade-in slide-in-from-bottom-8 space-y-8 duration-700">
          {/* Section Header */}
          <h1 class="text-2xl lg:text-3xl mb-4 font-semibold text-muted-foreground">Here's what we found.</h1>
          <div class="text-muted-foreground lg:font-semibold">Based on your import history, we've estimated where you are with each item. We'll use your detailed review data to schedule future reviews accurately. If our initial estimates seem off, adjust the{" "}
            <div class="inline-flex items-center gap-x-2">
              <Dynamic component={statusConfig.learning.icon} class={`size-4 ${statusConfig.learning.textColor}`} />
              <Dynamic component={statusConfig.decent.icon} class={`size-4 ${statusConfig.decent.textColor}`} />
              <Dynamic component={statusConfig.mastered.icon} class={`size-4 ${statusConfig.mastered.textColor}`} />
            </div>
            {" "}badges and we'll schedule accordingly.
          </div>
          <p class="mt-3 text-sm lg:text-base text-muted-foreground italic">You may want to check out <Link to="/import/manual" class="underline font-medium">Manual Importing</Link> for skipping grammar that you know as well.</p>
          {/* Mobile Aggregated Statistics */}
          <SSRMediaQuery hideFrom="lg">
            <div class="-mt-5 space-y-2">
              <StatisticsSummary
                itemStates={props.itemStates}
                categories={displayCategories()}
                showLearning={true}
              />
            </div>
          </SSRMediaQuery>

          <div class="flex items-center justify-between border-b border-white/5 pb-4">
            <div>
              <h2 class="text-foreground flex items-center gap-3 font-bold mb-1">
                {/* Purple Badge for Identity */}
                <span class="flex size-6 items-center justify-center rounded-full bg-purple-500/20 text-xs font-bold text-purple-400">
                  <CheckCircle2 class="size-3.5" />
                </span>
                Analysis Results
              </h2>
              <p class="text-muted-foreground text-xs">
                Found {props.vocabStore.items.length} vocabulary words and{" "}
                {props.kanjiStore.items.length} kanji.
              </p>
            </div>
          </div>

          {/* Vocabulary Section */}
          <div class="space-y-3">
            <h3 class="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
              Detected Vocabulary
            </h3>
            <ImportAccordion
              sub={props.vocabStore}
              selectedIds={props.selectedIds}
              itemStates={props.itemStates}
              onItemClick={props.handleItemClick}
              onGroupToggle={props.toggleSelectGroup}
              onPointerDown={props.handlePointerDown}
              showDelete={true}
              onDelete={props.handleDelete}
            />
          </div>

          {/* Kanji Section */}
          <div class="space-y-3">
            <h3 class="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
              Detected Kanji
            </h3>
            <ImportAccordion
              sub={props.kanjiStore}
              selectedIds={props.selectedIds}
              itemStates={props.itemStates}
              onItemClick={props.handleItemClick}
              onGroupToggle={props.toggleSelectGroup}
              onPointerDown={props.handlePointerDown}
              showDelete={true}
              onDelete={props.handleDelete}
            />
          </div>

          <EndOfListIndicator />
        </main>
      </div>

      {/* --- RIGHT: SUMMARY PANEL (DESKTOP ONLY) --- */}
      <SSRMediaQuery showFrom="lg">
        <aside class="lg:col-span-5 xl:col-span-4 sticky top-24 space-y-6">
          {/* Statistics Summary Component */}
          <StatisticsSummary
            itemStates={props.itemStates}
            categories={displayCategories()}
            showLearning={true}
          />

          <KeyboardShortcutsHint />
          <ImportActionButtonDesktop onClick={() => { }} variant="automatic" label="Import Progress" />
        </aside>
      </SSRMediaQuery>

      {/* Mobile Import Button */}
      <SSRMediaQuery hideFrom="lg">
        <ImportActionButtonMobile onClick={() => { }} variant="automatic" label="Import Progress" />
      </SSRMediaQuery>
    </div>
  )
}
