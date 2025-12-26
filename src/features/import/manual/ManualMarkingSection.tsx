import {
  createSignal,
  createMemo,
  For,
  Match,
  Suspense,
  Switch,
  onMount,
} from "solid-js"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import type { PracticeItemType } from "convex/validators"
import { cn } from "@/utils"
import { extractAllKanjiFromVocab } from "convex/model/hierarchy"
import { VocabSection, VocabSectionSkeleton } from "./components/VocabSection"
import { KanjiSection, KanjiSectionSkeleton } from "./components/KanjiSection"
import { JLPT_SETS } from "./consts"
import { useImportFlow } from "../shared/hooks/useImportFlow"
import {
  useItemStatuses,
  type StatusItem,
} from "../shared/hooks/useItemStatuses"
import { FloatingActionBar } from "../shared/FloatingActionBar"
import { ConfirmActionDialog } from "../shared/ConfirmActionDialog"

const JLPT_LEVELS = ["N5", "N4", "N3", "N2", "N1"] as const
const CATEGORIES = ["Vocabulary", "Grammar", "Kanji"] as const

export function ManualMarkingSection() {
  const [selectedLevel, setSelectedLevel] =
    createSignal<(typeof JLPT_LEVELS)[number]>("N5")
  const [selectedCategory, setSelectedCategory] =
    createSignal<(typeof CATEGORIES)[number]>("Vocabulary")

  // Query vocab data (same as VocabSection - cache hit)
  const vocabQuery = useConvexQuery(api.api.vocabulary.getBySets, () => ({
    setIds: [...JLPT_SETS],
  }))

  // Derive all items for current level (vocab + kanji) with types
  const allItems = createMemo<StatusItem[]>(() => {
    const vocab = vocabQuery.data()?.[selectedLevel().toLowerCase()] ?? []
    const vocabItems: StatusItem[] = vocab.map((i) => ({
      key: i.key,
      type: "vocabulary",
    }))
    const kanjiItems: StatusItem[] = extractAllKanjiFromVocab(vocab).map(
      (k) => ({ key: k, type: "kanji" }),
    )
    return [...vocabItems, ...kanjiItems]
  })

  const getStoredStatus = useItemStatuses(allItems)

  const flow = useImportFlow({
    getBaseStatus: (key: string, type: PracticeItemType) =>
      getStoredStatus(key, type),
  })

  onMount(() => flow.setupClickOutside())

  return (
    <>
      <LevelTabs selected={selectedLevel()} onSelect={setSelectedLevel} />
      <CategoryTabs
        selected={selectedCategory()}
        onSelect={setSelectedCategory}
      />

      <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
        <Switch>
          <Match when={selectedCategory() === "Vocabulary"}>
            <Suspense fallback={<VocabSectionSkeleton />}>
              <VocabSection
                level={selectedLevel()}
                isSelected={flow.isSelected}
                onToggleAll={(items, checked) =>
                  flow.toggleAll(items, (i) => i.key, "vocabulary", checked)
                }
                onItemClick={flow.handleItemClick}
                onPointerDown={flow.handlePointerDown}
                getOverrideStatus={flow.getOverrideStatus}
                onUndoClick={flow.handleUndoClick}
              />
            </Suspense>
          </Match>
          <Match when={selectedCategory() === "Kanji"}>
            <Suspense fallback={<KanjiSectionSkeleton />}>
              <KanjiSection
                level={selectedLevel()}
                isSelected={flow.isSelected}
                onToggleAll={(items, checked) =>
                  flow.toggleAll(items, (i) => i.kanji, "kanji", checked)
                }
                onItemClick={flow.handleItemClick}
                onPointerDown={flow.handlePointerDown}
                getOverrideStatus={flow.getOverrideStatus}
                onUndoClick={flow.handleUndoClick}
              />
            </Suspense>
          </Match>
          <Match when={selectedCategory() === "Grammar"}>
            <div class="py-12 text-center text-white/40">
              Grammar marking coming soon
            </div>
          </Match>
        </Switch>
      </div>

      <div class="mt-6 flex justify-end">
        <button
          type="button"
          disabled={flow.selectedCount() === 0}
          class={cn(
            "rounded-xl px-6 py-3 font-medium transition-all",
            flow.selectedCount() > 0
              ? "bg-(--accent) text-white hover:brightness-110"
              : "bg-white/10 text-white/40 cursor-not-allowed",
          )}
        >
          Save Progress
        </button>
      </div>

      {/* Floating Action Bar */}
      <FloatingActionBar
        selectedCount={flow.selectedCount()}
        onApply={flow.handleApplyStatus}
        onClearSelection={flow.resetSelection}
        onClearOverrides={flow.handleClearOverrides}
        mode="manual"
        getCountAtOrAbove={flow.countSelectedAtOrAbove}
      />

      {/* Undo Confirmation Dialog */}
      <ConfirmActionDialog
        open={flow.showUndoDialog()}
        onOpenChange={flow.setShowUndoDialog}
        title="Undo Override"
        description={
          flow.pendingUndoItem()
            ? `Undo override for this item, or all ${flow.undoDialogSelectedCount()} selected items with overrides?`
            : `Undo override for ${flow.undoDialogSelectedCount()} selected item${flow.undoDialogSelectedCount() !== 1 ? "s" : ""}?`
        }
        confirmLabel={`Undo ${flow.undoDialogSelectedCount()} Selected`}
        onConfirm={flow.handleUndoSelected}
        secondaryLabel={flow.pendingUndoItem() ? "Undo This Item" : undefined}
        onSecondary={flow.pendingUndoItem() ? flow.handleUndoSingle : undefined}
      />
    </>
  )
}

function LevelTabs(props: {
  selected: string
  onSelect: (level: (typeof JLPT_LEVELS)[number]) => void
}) {
  return (
    <div class="mb-6 flex gap-2 overflow-x-auto pb-2">
      <For each={JLPT_LEVELS}>
        {(level) => (
          <button
            type="button"
            onClick={() => props.onSelect(level)}
            class={cn(
              "shrink-0 rounded-lg px-4 py-2 text-sm font-medium transition-all",
              props.selected === level
                ? "bg-(--accent) text-white"
                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white",
            )}
          >
            {level}
          </button>
        )}
      </For>
    </div>
  )
}

function CategoryTabs(props: {
  selected: string
  onSelect: (category: (typeof CATEGORIES)[number]) => void
}) {
  return (
    <div class="mb-6 flex gap-2">
      <For each={CATEGORIES}>
        {(category) => (
          <button
            type="button"
            onClick={() => props.onSelect(category)}
            class={cn(
              "rounded-lg px-4 py-2 text-sm font-medium transition-all",
              props.selected === category
                ? "bg-white/15 text-white"
                : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70",
            )}
          >
            {category}
          </button>
        )}
      </For>
    </div>
  )
}
