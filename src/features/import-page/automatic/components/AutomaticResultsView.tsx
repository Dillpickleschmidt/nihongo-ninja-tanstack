import { Dynamic } from "solid-js/web"
import { Link } from "@tanstack/solid-router"
import { CheckCircle2 } from "lucide-solid"
import { ImportAccordion } from "@/features/import-page/shared/components/ImportAccordion"
import { StatisticsSummary } from "@/features/import-page/shared/components/StatisticsSummary"
import { KeyboardShortcutsHint } from "@/features/import-page/shared/components/KeyboardShortcutsHint"
import {
  ImportActionButtonDesktop,
  ImportActionButtonMobile,
} from "@/features/import-page/shared/components/ImportActionButton"
import { EndOfListIndicator } from "@/features/import-page/shared/components/EndOfListIndicator"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { statusConfig } from "@/features/import-page/shared/constants/status-config"
import type {
  ImportItem,
} from "@/features/import-page/shared/types"
import type { ImportState } from "@/features/import-page/shared/hooks/useImportState"

interface AutomaticResultsViewProps {
  vocabItems: ImportItem[]
  kanjiItems: ImportItem[]
  itemStates: ImportState
  initialItemStates: ImportState
  selectedIds: Set<string>
  handleItemClick: (e: MouseEvent, id: string, groupIds: string[]) => void
  handlePointerDown: (e: PointerEvent, id: string, groupIds: string[]) => void
  toggleSelectGroup: (ids: string[]) => void
  onVocabDelete: (id: string) => void
  onKanjiDelete: (id: string) => void
  onUndoItem: (id: string) => void
  onImportProgress: () => void
  isImporting: boolean
}

export function AutomaticResultsView(props: AutomaticResultsViewProps) {
  const vocabStatPromise = Promise.resolve(
    props.vocabItems.map((item) => ({ id: item.id })),
  )
  const kanjiStatPromise = Promise.resolve(
    props.kanjiItems.map((item) => ({ id: item.id })),
  )

  return (
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
      {/* --- LEFT: CONTENT LIST --- */}
      <div class="pb-16 lg:col-span-7 xl:col-span-8">
        <main class="animate-in fade-in slide-in-from-bottom-8 space-y-8 duration-700">
          {/* Section Header */}
          <h1 class="text-muted-foreground mb-4 text-2xl font-semibold lg:text-3xl">
            Here's what we found.
          </h1>
          <div class="text-muted-foreground lg:font-semibold">
            Based on your import history, we've estimated where you are with
            each item. We'll use your detailed review data to schedule future
            reviews accurately. If our initial estimates seem off, adjust the{" "}
            <div class="inline-flex items-center gap-x-2">
              <Dynamic
                component={statusConfig.learning.icon}
                class={`size-4 ${statusConfig.learning.textColor}`}
              />
              <Dynamic
                component={statusConfig.decent.icon}
                class={`size-4 ${statusConfig.decent.textColor}`}
              />
              <Dynamic
                component={statusConfig.mastered.icon}
                class={`size-4 ${statusConfig.mastered.textColor}`}
              />
            </div>{" "}
            badges and we'll schedule accordingly.
          </div>
          <p class="text-muted-foreground mt-3 text-sm italic lg:text-base">
            You may want to check out{" "}
            <Link to="/import/manual" class="font-medium underline">
              Manual Importing
            </Link>{" "}
            for skipping grammar that you know as well.
          </p>
          {/* Mobile Aggregated Statistics */}
          <SSRMediaQuery hideFrom="lg">
            <div class="-mt-5 space-y-2">
              <StatisticsSummary
                itemStates={props.itemStates}
                itemsPromise={vocabStatPromise}
                title="Vocabulary"
                showLearning={true}
              />
              <StatisticsSummary
                itemStates={props.itemStates}
                itemsPromise={kanjiStatPromise}
                title="Kanji"
                showLearning={true}
              />
            </div>
          </SSRMediaQuery>

          <div class="flex items-center justify-between border-b border-white/5 pb-4">
            <div>
              <h2 class="text-foreground mb-1 flex items-center gap-3 font-bold">
                {/* Purple Badge for Identity */}
                <span class="flex size-6 items-center justify-center rounded-full bg-purple-500/20 text-xs font-bold text-purple-400">
                  <CheckCircle2 class="size-3.5" />
                </span>
                Analysis Results
              </h2>
              <p class="text-muted-foreground text-xs">
                Found {props.vocabItems.length} vocabulary words and{" "}
                {props.kanjiItems.length} kanji.
              </p>
            </div>
          </div>

          {/* Vocabulary Section */}
          <div class="space-y-3">
            <h3 class="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
              Detected Vocabulary
            </h3>
            <ImportAccordion
              sub={{
                id: "import-vocab",
                title: "Vocabulary",
                description: "Words extracted from your file",
                items: props.vocabItems,
              }}
              selectedIds={props.selectedIds}
              itemStates={props.itemStates}
              initialItemStates={props.initialItemStates}
              onItemClick={props.handleItemClick}
              onGroupToggle={props.toggleSelectGroup}
              onPointerDown={props.handlePointerDown}
              onUndoItem={props.onUndoItem}
              showDelete={true}
              onDelete={props.onVocabDelete}
            />
          </div>

          {/* Kanji Section */}
          <div class="space-y-3">
            <h3 class="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
              Detected Kanji
            </h3>
            <ImportAccordion
              sub={{
                id: "import-kanji",
                title: "Kanji",
                description: "Kanji characters found in vocabulary",
                items: props.kanjiItems,
              }}
              selectedIds={props.selectedIds}
              itemStates={props.itemStates}
              initialItemStates={props.initialItemStates}
              onItemClick={props.handleItemClick}
              onGroupToggle={props.toggleSelectGroup}
              onPointerDown={props.handlePointerDown}
              onUndoItem={props.onUndoItem}
              showDelete={true}
              onDelete={props.onKanjiDelete}
            />
          </div>

          <EndOfListIndicator />
        </main>
      </div>

      {/* --- RIGHT: SUMMARY PANEL (DESKTOP ONLY) --- */}
      <SSRMediaQuery showFrom="lg">
        <aside class="sticky top-24 space-y-6 lg:col-span-5 xl:col-span-4">
          {/* Statistics Summary Component */}
          <StatisticsSummary
            itemStates={props.itemStates}
            itemsPromise={vocabStatPromise}
            title="Vocabulary"
            showLearning={true}
          />
          <StatisticsSummary
            itemStates={props.itemStates}
            itemsPromise={kanjiStatPromise}
            title="Kanji"
            showLearning={true}
          />

          <KeyboardShortcutsHint />
          <ImportActionButtonDesktop
            onClick={props.onImportProgress}
            variant="automatic"
            label={props.isImporting ? "Importing..." : "Import Progress"}
          />
        </aside>
      </SSRMediaQuery>

      {/* Mobile Import Button */}
      <SSRMediaQuery hideFrom="lg">
        <ImportActionButtonMobile
          onClick={props.onImportProgress}
          variant="automatic"
          label={props.isImporting ? "Importing..." : "Import Progress"}
        />
      </SSRMediaQuery>
    </div>
  )
}
