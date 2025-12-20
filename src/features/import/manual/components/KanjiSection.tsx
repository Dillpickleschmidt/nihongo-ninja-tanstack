import { createMemo, For, Show } from "solid-js"
import type { KanjiEntry } from "convex/validators"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { cn } from "@/utils"
import { getUser } from "@/lib/auth"
import { Checkbox, CheckboxInput } from "@/components/ui/checkbox"
import { extractKanjiCharacters } from "@/data/utils/text/japanese"
import { JLPT_SETS } from "../consts"
import { calculateItemStatus, type ItemStatus } from "../../shared/status"
import { StatusBadge } from "../../shared/StatusBadge"

export function KanjiSection(props: {
  level: string
  selectedKeys: Record<string, boolean>
  onToggle: (key: string, checked: boolean) => void
  onToggleAll: (items: KanjiEntry[], checked: boolean) => void
}) {
  const user = getUser()

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

  const statusesQuery = useConvexQuery(
    api.api.fsrs.getItemStatuses,
    () => ({ keys: allKeys() }),
    () => ({ enabled: !!user() && allKeys().length > 0 })
  )

  const getStatus = (key: string): ItemStatus => {
    const data = statusesQuery.data()?.[encodeURIComponent(key)]
    return data ? calculateItemStatus(data) : null
  }

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
            selectedCount={selectedCount()}
            allSelected={allSelected()}
            onToggle={(checked) => props.onToggleAll(itemList(), checked)}
          />
          <KanjiGrid
            items={itemList()}
            selectedKeys={props.selectedKeys}
            onToggle={props.onToggle}
            getStatus={getStatus}
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
          {() => <KanjiItemSkeleton />}
        </For>
      </div>
    </>
  )
}

function SelectAllHeader(props: {
  level: string
  selectedCount: number
  allSelected: boolean
  onToggle: (checked: boolean) => void
}) {
  return (
    <div class="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
      <Checkbox
        checked={props.allSelected}
        onChange={props.onToggle}
        class="flex items-center gap-3"
      >
        <CheckboxInput class="border-white/30 bg-white/10 data-checked:bg-(--accent) data-checked:text-white" />
        <span class="text-white">Select all {props.level} kanji</span>
      </Checkbox>
      <span class="text-sm text-white/40">{props.selectedCount} selected</span>
    </div>
  )
}

function KanjiGrid(props: {
  items: KanjiEntry[]
  selectedKeys: Record<string, boolean>
  onToggle: (key: string, checked: boolean) => void
  getStatus: (key: string) => ItemStatus
}) {
  return (
    <div class="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8">
      <For each={props.items}>
        {(item) => (
          <KanjiItem
            item={item}
            checked={props.selectedKeys[item.kanji] ?? false}
            onToggle={props.onToggle}
            status={props.getStatus(item.kanji)}
          />
        )}
      </For>
    </div>
  )
}

function KanjiItem(props: {
  item: KanjiEntry
  checked: boolean
  onToggle: (key: string, checked: boolean) => void
  status: ItemStatus
}) {
  return (
    <Checkbox
      checked={props.checked}
      onChange={(checked) => props.onToggle(props.item.kanji, checked)}
      class={cn(
        "relative flex aspect-square cursor-pointer flex-col items-center justify-center rounded-lg border p-2 transition-colors ease-instant-hover-150",
        props.checked
          ? "border-(--accent)/30 bg-(--accent)/10"
          : "border-white/10 bg-white/2 hover:border-white/20"
      )}
    >
      <span class="text-2xl font-medium text-white">{props.item.kanji}</span>
      <span class="mt-1 truncate text-[10px] text-white/40 max-w-full px-1">
        {props.item.meanings[0]}
      </span>
      <StatusBadge status={props.status} />
    </Checkbox>
  )
}

function KanjiItemSkeleton() {
  return (
    <div class="aspect-square animate-pulse rounded-lg border border-white/10 bg-white/2 p-2 flex flex-col items-center justify-center">
      <div class="size-8 rounded bg-white/10" />
      <div class="mt-1 h-2 w-12 rounded bg-white/5" />
    </div>
  )
}
