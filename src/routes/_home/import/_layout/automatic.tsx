// src/routes/_home/import/_layout/automatic.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { createSignal, Show } from "solid-js"
import { createStore } from "solid-js/store"
import { FloatingActionBar } from "@/features/import-page/shared/components/FloatingActionBar"
import { useImportSelection } from "@/features/import-page/shared/hooks/use-import-selection"
import { AutomaticUploadView } from "@/features/import-page/automatic/components/AutomaticUploadView"
import { AutomaticResultsView } from "@/features/import-page/automatic/components/AutomaticResultsView"
import type { ImportSubCategory } from "@/features/import-page/shared/data/jlpt-data"
import { buildInitialStateFromData } from "@/features/import-page/shared/utils/build-initial-state"

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
    <div onClick={clearSelection} class="container px-4 py-6 md:px-8 md:py-8">
      <Show
        when={hasUploaded()}
        fallback={
          <AutomaticUploadView
            onUpload={handleSimulatedUpload}
            isProcessing={isProcessing()}
          />
        }
      >
        <AutomaticResultsView
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
