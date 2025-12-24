import { batch, createSignal, For, Match, Suspense, Switch } from "solid-js"
import { createStore } from "solid-js/store"
import type { VocabularyItem, KanjiEntry } from "convex/validators"
import { cn } from "@/utils"
import { VocabSection, VocabSectionSkeleton } from "./components/VocabSection"
import { KanjiSection, KanjiSectionSkeleton } from "./components/KanjiSection"
import { useImportSelection } from "../shared/hooks/useImportSelection"

const JLPT_LEVELS = ["N5", "N4", "N3", "N2", "N1"] as const
const CATEGORIES = ["Vocabulary", "Grammar", "Kanji"] as const

export function ManualMarkingSection() {
  const [selectedLevel, setSelectedLevel] = createSignal<(typeof JLPT_LEVELS)[number]>("N5")
  const [selectedCategory, setSelectedCategory] = createSignal<(typeof CATEGORIES)[number]>("Vocabulary")
  const [selectedKeys, setSelectedKeys] = createStore<Record<string, boolean>>({})

  const { handleItemClick, handlePointerDown } = useImportSelection(
    selectedKeys,
    setSelectedKeys
  )

  const toggleAllVocab = (items: VocabularyItem[], checked: boolean) => {
    batch(() => {
      for (const item of items) {
        setSelectedKeys(item.key, checked)
      }
    })
  }

  const toggleAllKanji = (items: KanjiEntry[], checked: boolean) => {
    batch(() => {
      for (const item of items) {
        setSelectedKeys(item.kanji, checked)
      }
    })
  }

  const selectedCount = () => Object.values(selectedKeys).filter(Boolean).length

  return (
    <>
      <LevelTabs selected={selectedLevel()} onSelect={setSelectedLevel} />
      <CategoryTabs selected={selectedCategory()} onSelect={setSelectedCategory} />

      <div class="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
        <Switch>
          <Match when={selectedCategory() === "Vocabulary"}>
            <Suspense fallback={<VocabSectionSkeleton />}>
              <VocabSection
                level={selectedLevel()}
                selectedKeys={selectedKeys}
                onToggleAll={toggleAllVocab}
                onItemClick={handleItemClick}
                onPointerDown={handlePointerDown}
              />
            </Suspense>
          </Match>
          <Match when={selectedCategory() === "Kanji"}>
            <Suspense fallback={<KanjiSectionSkeleton />}>
              <KanjiSection
                level={selectedLevel()}
                selectedKeys={selectedKeys}
                onToggleAll={toggleAllKanji}
                onItemClick={handleItemClick}
                onPointerDown={handlePointerDown}
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
          disabled={selectedCount() === 0}
          class={cn(
            "rounded-xl px-6 py-3 font-medium transition-all",
            selectedCount() > 0
              ? "bg-(--accent) text-white hover:brightness-110"
              : "bg-white/10 text-white/40 cursor-not-allowed"
          )}
        >
          Save Progress
        </button>
      </div>
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
                : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
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
                : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70"
            )}
          >
            {category}
          </button>
        )}
      </For>
    </div>
  )
}

