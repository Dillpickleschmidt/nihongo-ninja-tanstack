// src/routes/_home/import/_layout/automatic.tsx
import { createFileRoute } from "@tanstack/solid-router"
import { createSignal, Show } from "solid-js"
import { FloatingActionBar } from "@/features/import-page/shared/components/FloatingActionBar"
import { useImportSelection } from "@/features/import-page/shared/hooks/use-import-selection"
import { AutomaticUploadView } from "@/features/import-page/automatic/components/AutomaticUploadView"
import { AutomaticResultsView } from "@/features/import-page/automatic/components/AutomaticResultsView"
import type { ImportItem } from "@/features/import-page/shared/types"

// --- Placeholder Data Providers ---

function getPlaceholderVocab(): ImportItem[] {
  return [
    { id: "imp-v1", main: "冒険", meaning: "adventure", status: "mastered" },
    {
      id: "imp-v2",
      main: "魔法",
      meaning: "magic",
      status: "decent",
    },
    {
      id: "imp-v3",
      main: "攻撃",
      meaning: "attack",
      status: "decent",
    },
    {
      id: "imp-v4",
      main: "防御",
      meaning: "defense",
      status: "learning",
    },
    {
      id: "imp-v5",
      main: "回復",
      meaning: "recovery; healing",
      status: "mastered",
    },
    {
      id: "imp-v6",
      main: "経験値",
      meaning: "experience points",
      status: "decent",
    },
    {
      id: "imp-v7",
      main: "装備",
      meaning: "equipment",
      status: "learning",
    },
    {
      id: "imp-v8",
      main: "伝説",
      meaning: "legend",
      status: "mastered",
    },
    {
      id: "imp-v9",
      main: "召喚",
      meaning: "summon",
      status: "decent",
    },
    {
      id: "imp-v10",
      main: "異世界",
      meaning: "parallel universe; isekai",
      status: "learning",
    },
  ]
}

function getPlaceholderKanji(): ImportItem[] {
  return [
    {
      id: "imp-k1",
      main: "冒",
      meaning: "risk; face; defy; dare",
      status: "mastered",
    },
    {
      id: "imp-k2",
      main: "険",
      meaning: "inaccessible place; sharp eyes",
      status: "decent",
    },
    {
      id: "imp-k3",
      main: "魔",
      meaning: "witch; demon; evil spirit",
      status: "mastered",
    },
    {
      id: "imp-k4",
      main: "法",
      meaning: "method; law; principle",
      status: "learning",
    },
    {
      id: "imp-k5",
      main: "攻",
      meaning: "aggression; attack",
      status: "decent",
    },
    {
      id: "imp-k6",
      main: "撃",
      meaning: "beat; attack; defeat",
      status: "decent",
    },
    {
      id: "imp-k7",
      main: "防",
      meaning: "ward off; defend; protect",
      status: "learning",
    },
    {
      id: "imp-k8",
      main: "御",
      meaning: "honorable; manipulate; govern",
      status: "mastered",
    },
  ]
}

export const Route = createFileRoute("/_home/import/_layout/automatic")({
  component: AutomaticImportPage,
})

function AutomaticImportPage() {
  // State
  const [hasUploaded, setHasUploaded] = createSignal(false)
  const [isProcessing, setIsProcessing] = createSignal(false)
  const [vocabItems, setVocabItems] = createSignal<ImportItem[]>([])
  const [kanjiItems, setKanjiItems] = createSignal<ImportItem[]>([])

  // Selection Hook (no initial state needed - will populate after data loads)
  const {
    itemStates,
    selectedIds,
    handleItemClick,
    handlePointerDown,
    toggleSelectGroup,
    applyStatus,
    clearSelection,
    handleDelete,
  } = useImportSelection()

  const createDeleteHandler =
    (setter: typeof setVocabItems) => (id: string) => {
      setter((items) => items.filter((item) => item.id !== id))
      handleDelete(id)
    }

  const handleSimulatedUpload = () => {
    setIsProcessing(true)
    // Simulate processing delay
    setTimeout(() => {
      // Get results after simulated processing
      setVocabItems(getPlaceholderVocab())
      setKanjiItems(getPlaceholderKanji())
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
          vocabItems={vocabItems()}
          kanjiItems={kanjiItems()}
          itemStates={itemStates}
          selectedIds={selectedIds()}
          handleItemClick={handleItemClick}
          handlePointerDown={handlePointerDown}
          toggleSelectGroup={toggleSelectGroup}
          onVocabDelete={createDeleteHandler(setVocabItems)}
          onKanjiDelete={createDeleteHandler(setKanjiItems)}
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
