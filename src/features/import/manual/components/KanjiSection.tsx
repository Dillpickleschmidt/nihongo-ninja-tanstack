import { createMemo, For, Show } from "solid-js"
import type { KanjiEntry } from "convex/validators"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { extractKanjiCharacters } from "@/data/utils/text/japanese"
import { JLPT_SETS } from "../consts"
import { useItemStatuses } from "../../shared/hooks/useItemStatuses"
import type { ItemStatus } from "../../shared/status"
import { SelectAllHeader } from "../../shared/SelectAllHeader"
import { ImportKanjiItem, ImportKanjiItemSkeleton } from "../../shared/ImportKanjiItem"

export function KanjiSection(props: {
  level: string
  selectedKeys: Record<string, boolean>
  onToggleAll: (items: KanjiEntry[], checked: boolean) => void
  onItemClick: (e: MouseEvent, id: string, groupIds: string[]) => void
  onPointerDown: (e: PointerEvent, id: string, groupIds: string[]) => void
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

    const seen = new Set<string>()
    const chars: string[] = []
    for (const item of vocab) {
      for (const char of extractKanjiCharacters(item.word)) {
        if (!seen.has(char)) {
          seen.add(char)
          chars.push(char)
        }
      }
    }
    return chars
  })

  // Fetch KanjiEntry data for derived characters
  const kanjiQuery = useConvexQuery(
    api.api.vocabulary.getKanjiByChars,
    () => ({ chars: kanjiChars() }),
    () => ({ enabled: kanjiChars().length > 0 })
  )

  const items = () => kanjiQuery.data()

  const allKeys = createMemo(() => items()?.map((i) => i.kanji) ?? [])

  const getStoredStatus = useItemStatuses(allKeys)

  const allSelected = () => {
    const list = items()
    return list !== undefined && list.length > 0 && list.every((i) => props.selectedKeys[i.kanji])
  }

  const selectedCount = () => Object.values(props.selectedKeys).filter(Boolean).length

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
          <KanjiGrid
            items={itemList()}
            selectedKeys={props.selectedKeys}
            getStoredStatus={getStoredStatus}
            allKeys={allKeys()}
            onItemClick={props.onItemClick}
            onPointerDown={props.onPointerDown}
          />
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
          {() => <ImportKanjiItemSkeleton />}
        </For>
      </div>
    </>
  )
}

function KanjiGrid(props: {
  items: KanjiEntry[]
  selectedKeys: Record<string, boolean>
  getStoredStatus: (key: string) => ItemStatus
  allKeys: string[]
  onItemClick: (e: MouseEvent, id: string, groupIds: string[]) => void
  onPointerDown: (e: PointerEvent, id: string, groupIds: string[]) => void
}) {
  return (
    <div class="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8">
      <For each={props.items}>
        {(item) => (
          <ImportKanjiItem
            id={item.kanji}
            label={item.kanji}
            sublabel={item.meanings[0]}
            checked={props.selectedKeys[item.kanji] ?? false}
            importStatus={null}
            storedStatus={props.getStoredStatus(item.kanji)}
            allIds={props.allKeys}
            onItemClick={props.onItemClick}
            onPointerDown={props.onPointerDown}
          />
        )}
      </For>
    </div>
  )
}
