// src/routes/_home/import/_layout/automatic.tsx
import { createFileRoute, Link } from "@tanstack/solid-router"
import { createSignal, Show, createMemo } from "solid-js"
import { createStore } from "solid-js/store"
import {
  ChevronLeft,
  UploadCloud,
  FileType,
  Loader2,
  CheckCircle2,
  Keyboard,
  FileCode,
} from "lucide-solid"
import { Button } from "@/components/ui/button"
import { ImportAccordion } from "@/features/import-page/components/ImportAccordion"
import { FloatingActionBar } from "@/features/import-page/components/FloatingActionBar"
import { StatisticsSummary } from "@/features/import-page/components/StatisticsSummary"
import { useImportSelection } from "@/features/import-page/hooks/use-import-selection"
import type { ImportSubCategory } from "@/features/import-page/data/jlpt-data"
import { buildInitialStateFromData } from "@/features/import-page/utils/build-initial-state"
import { cn } from "@/utils"

export const Route = createFileRoute("/_home/import/_layout/automatic")({
  component: AutomaticImportPage,
})

// --- Placeholder Data ---

const PLACEHOLDER_VOCAB: ImportSubCategory = {
  id: "import-vocab",
  title: "Vocabulary",
  description: "Words extracted from your file",
  items: [
    { id: "imp-v1", main: "冒険", meaning: "adventure", status: "mastered" },
    { id: "imp-v2", main: "魔法", meaning: "magic", status: "decent" },
    { id: "imp-v3", main: "攻撃", meaning: "attack", status: "decent" },
    { id: "imp-v4", main: "防御", meaning: "defense", status: "learning" },
    { id: "imp-v5", main: "回復", meaning: "recovery; healing", status: "mastered" },
    { id: "imp-v6", main: "経験値", meaning: "experience points", status: "decent" },
    { id: "imp-v7", main: "装備", meaning: "equipment", status: "learning" },
    { id: "imp-v8", main: "伝説", meaning: "legend", status: "mastered" },
    { id: "imp-v9", main: "召喚", meaning: "summon", status: "decent" },
    { id: "imp-v10", main: "異世界", meaning: "parallel universe; isekai", status: "learning" },
  ],
}

const PLACEHOLDER_KANJI: ImportSubCategory = {
  id: "import-kanji",
  title: "Kanji",
  description: "Kanji characters found in vocabulary",
  items: [
    { id: "imp-k1", main: "冒", meaning: "risk; face; defy; dare", status: "mastered" },
    { id: "imp-k2", main: "険", meaning: "inaccessible place; sharp eyes", status: "decent" },
    { id: "imp-k3", main: "魔", meaning: "witch; demon; evil spirit", status: "mastered" },
    { id: "imp-k4", main: "法", meaning: "method; law; principle", status: "learning" },
    { id: "imp-k5", main: "攻", meaning: "aggression; attack", status: "decent" },
    { id: "imp-k6", main: "撃", meaning: "beat; attack; defeat", status: "decent" },
    { id: "imp-k7", main: "防", meaning: "ward off; defend; protect", status: "learning" },
    { id: "imp-k8", main: "御", meaning: "honorable; manipulate; govern", status: "mastered" },
  ],
}

function AutomaticImportPage() {
  // State
  const [hasUploaded, setHasUploaded] = createSignal(false)
  const [isProcessing, setIsProcessing] = createSignal(false)

  // Reactive data stores (allows deletion)
  const [vocabStore, setVocabStore] = createStore(PLACEHOLDER_VOCAB)
  const [kanjiStore, setKanjiStore] = createStore(PLACEHOLDER_KANJI)

  // Build initial state from placeholder data
  const initialState = buildInitialStateFromData(vocabStore, kanjiStore)

  // Delete handler for removing items from stores
  const handleDeleteItems = (idsToDelete: string[]) => {
    setVocabStore("items", (items) =>
      items.filter((item) => !idsToDelete.includes(item.id)),
    )
    setKanjiStore("items", (items) =>
      items.filter((item) => !idsToDelete.includes(item.id)),
    )
  }

  // Selection Hook
  const {
    itemStates,
    selectedIds,
    handleItemClick,
    handlePointerDown,
    toggleSelectGroup,
    applyStatus,
    clearSelection,
    handleDelete,
  } = useImportSelection(initialState, handleDeleteItems)

  const handleSimulatedUpload = () => {
    setIsProcessing(true)
    // Simulate processing delay
    setTimeout(() => {
      setHasUploaded(true)
      setIsProcessing(false)
    }, 2000)
  }

  return (
    <div
      onClick={clearSelection}
      class="animate-in fade-in slide-in-from-bottom-4 min-h-screen w-full duration-500"
    >
      {/* HEADER */}
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
                Import from File
              </h1>
              <p class="text-muted-foreground hidden text-xs md:block">
                Upload Anki or JPDB exports to sync progress
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      <div class="container min-h-[calc(100vh-4rem)] px-4 py-6 md:px-8 md:py-8">
        <Show
          when={hasUploaded()}
          fallback={
            <UploadView
              onUpload={handleSimulatedUpload}
              isProcessing={isProcessing()}
            />
          }
        >
          <ResultsView
            vocabStore={vocabStore}
            kanjiStore={kanjiStore}
            itemStates={itemStates}
            selectedIds={selectedIds()}
            handleItemClick={handleItemClick}
            handlePointerDown={handlePointerDown}
            toggleSelectGroup={toggleSelectGroup}
            handleDelete={handleDelete}
          />
        </Show>
      </div>

      {/* FLOATING ACTION BAR */}
      <FloatingActionBar
        selectedCount={selectedIds().size}
        onApply={applyStatus}
        onClearSelection={clearSelection}
        mode="automatic"
      />
    </div>
  )
}

// --- SUB-COMPONENTS ---

function UploadView(props: { onUpload: () => void; isProcessing: boolean }) {
  return (
    <div class="flex h-[60vh] flex-col items-center justify-center">
      <div
        class={cn(
          // REVERTED to neutral background/border interactions for subtlety
          "group relative flex w-full max-w-xl cursor-pointer flex-col items-center justify-center gap-6 rounded-3xl border-2 border-dashed p-12 text-center transition-all duration-300",
          "bg-card/30 border-neutral-800",
          "hover:bg-card/50 hover:border-neutral-700", // Neutral hover
          props.isProcessing ? "pointer-events-none opacity-80" : "",
        )}
        onClick={() => !props.isProcessing && props.onUpload()}
      >
        <div
          class={cn(
            "flex size-20 items-center justify-center rounded-full shadow-2xl transition-transform duration-500 group-hover:scale-110",
            // Keep the icon box Purple to maintain identity
            "border border-purple-500/20 bg-purple-500/10",
          )}
        >
          <Show
            when={!props.isProcessing}
            fallback={<Loader2 class="text-purple-400 size-10 animate-spin" />}
          >
            <UploadCloud class="text-purple-400 size-10" />
          </Show>
        </div>

        <div class="space-y-2">
          <h3 class="text-foreground text-xl font-bold">
            {props.isProcessing ? "Processing File..." : "Drop your file here"}
          </h3>
          <p class="text-muted-foreground text-sm">
            {props.isProcessing
              ? "Analyzing vocabulary and kanji mastery..."
              : "Support for Anki (.apkg), JPDB (.json), or CSV files."}
          </p>
        </div>

        <Show when={!props.isProcessing}>
          <div class="flex gap-4 pt-4">
            <div class="bg-neutral-900 flex items-center gap-2 rounded-lg border border-white/5 px-3 py-2 text-xs font-medium text-white/50">
              <FileType class="size-3.5" /> Anki
            </div>
            <div class="bg-neutral-900 flex items-center gap-2 rounded-lg border border-white/5 px-3 py-2 text-xs font-medium text-white/50">
              <FileCode class="size-3.5" /> JPDB
            </div>
          </div>

          <Button
            variant="outline"
            class="mt-4 border-white/10 hover:bg-white/5"
          >
            Browse Files
          </Button>
        </Show>
      </div>
    </div>
  )
}

function ResultsView(props: {
  vocabStore: ImportSubCategory
  kanjiStore: ImportSubCategory
  itemStates: any
  selectedIds: Set<string>
  handleItemClick: any
  handlePointerDown: any
  toggleSelectGroup: any
  handleDelete: (id: string) => void
}) {
  // Create mock categories for statistics display (automatic mode shows vocab + kanji only)
  const displayCategories = createMemo(() => [
    { id: "vocab", title: "Vocabulary", subcategories: [{ id: "vocab-items", title: "Vocabulary", items: props.vocabStore.items }] },
    { id: "kanji", title: "Kanji", subcategories: [{ id: "kanji-items", title: "Kanji", items: props.kanjiStore.items }] },
  ])

  return (
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 xl:gap-16">
      {/* --- LEFT: CONTENT LIST --- */}
      <div class="min-w-0 pb-16 lg:col-span-7 xl:col-span-8">
        <main class="animate-in fade-in slide-in-from-bottom-8 space-y-8 duration-700">
          {/* Section Header */}
          <div class="flex items-center justify-between border-b border-white/5 pb-4">
            <div class="space-y-1">
              <h2 class="text-foreground flex items-center gap-3 font-bold">
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
            <h3 class="text-muted-foreground px-1 text-sm font-semibold tracking-wider uppercase">
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
            <h3 class="text-muted-foreground px-1 text-sm font-semibold tracking-wider uppercase">
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

          <div class="text-muted-foreground py-12 text-center text-sm">
            <CheckCircle2 class="mx-auto mb-2 size-8 opacity-20" />
            <p>End of import results</p>
          </div>
        </main>
      </div>

      {/* --- RIGHT: SUMMARY PANEL (DESKTOP ONLY) --- */}
      <aside class="hidden lg:col-span-5 lg:block xl:col-span-4">
        <div class="sticky top-24 space-y-6">
          {/* Statistics Summary Component */}
          <StatisticsSummary
            itemStates={props.itemStates}
            categories={displayCategories()}
            showLearning={true}
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
    </div >
  )
}
