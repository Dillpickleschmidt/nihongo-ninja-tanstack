import { createMemo, For, Show } from "solid-js"
import type { KanjiEntry, PracticeItemType } from "convex/validators"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { extractAllKanjiFromVocab } from "convex/model/hierarchy"
import { JLPT_SETS } from "../consts"
import { useSectionItems } from "../../shared/hooks/useSectionItems"
import type { ItemStatus } from "../../shared/status"
import { SelectAllHeader } from "../../shared/SelectAllHeader"
import { ImportItem, ImportItemSkeleton } from "../../shared/ImportItem"

export function KanjiSection(props: {
  level: string
  isSelected: (key: string) => boolean
  onToggleAll: (items: KanjiEntry[], checked: boolean) => void
  onItemClick: (e: MouseEvent, id: string, type: PracticeItemType, groupIds: string[]) => void
  onPointerDown: (e: PointerEvent, id: string, type: PracticeItemType, groupIds: string[]) => void
  getOverrideStatus: (key: string, type: PracticeItemType) => ItemStatus | undefined
  onUndoClick: (e: MouseEvent, key: string, type: PracticeItemType) => void
}) {
  // Reuse vocab query (cache hit from VocabSection)
  const vocabQuery = useConvexQuery(
    api.api.vocabulary.getBySets,
    () => ({ setIds: [...JLPT_SETS] })
  )

  // Derive kanji characters from vocab client-side
  const kanjiChars = createMemo(() => {
    const vocab = vocabQuery.data()?.[props.level.toLowerCase()]
    if (!vocab) return []
    return extractAllKanjiFromVocab(vocab)
  })

  // Fetch KanjiEntry data for derived characters
  const kanjiQuery = useConvexQuery(
    api.api.vocabulary.getKanjiByChars,
    () => ({ chars: kanjiChars() }),
    () => ({ enabled: kanjiChars().length > 0 })
  )

  const items = () => kanjiQuery.data()

  const { allKeys, getStoredStatus, allSelected, selectedCount } = useSectionItems({
    items,
    getKey: (i) => i.kanji,
    type: "kanji",
    isSelected: props.isSelected,
  })

  return (
    <Show
      when={items()}
      fallback={
        <div class="py-12 text-center text-white/40">
          No kanji available for {props.level}
        </div>
      }
    >
      {(itemList) => (
        <>
          <SelectAllHeader
            level={props.level}
            category="kanji"
            selectedCount={selectedCount()}
            allSelected={allSelected()}
            onToggle={(checked) => props.onToggleAll(itemList(), checked)}
          />
          <div class="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8">
            <For each={itemList()}>
              {(item) => (
                <ImportItem
                  variant="kanji"
                  id={item.kanji}
                  label={item.kanji}
                  sublabel={item.meanings[0]}
                  checked={props.isSelected(item.kanji)}
                  importStatus={null}
                  storedStatus={getStoredStatus(item.kanji, "kanji")}
                  overrideStatus={props.getOverrideStatus(item.kanji, "kanji")}
                  allIds={allKeys()}
                  onItemClick={props.onItemClick}
                  onPointerDown={props.onPointerDown}
                  onUndoClick={props.onUndoClick}
                />
              )}
            </For>
          </div>
        </>
      )}
    </Show>
  )
}

export function KanjiSectionSkeleton() {
  return (
    <>
      <div class="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
        <div class="flex items-center gap-3">
          <div class="size-4 animate-pulse rounded bg-white/10" />
          <div class="h-4 w-40 animate-pulse rounded bg-white/10" />
        </div>
        <div class="h-4 w-20 animate-pulse rounded bg-white/10" />
      </div>
      <div class="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8">
        <For each={Array.from({ length: 16 })}>
          {() => <ImportItemSkeleton variant="kanji" />}
        </For>
      </div>
    </>
  )
}
