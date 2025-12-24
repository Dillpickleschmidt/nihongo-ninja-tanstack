import { createMemo, For, Show } from "solid-js"
import type { VocabularyItem } from "convex/validators"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { cn } from "@/utils"
import { getUser } from "@/lib/auth"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/custom/collapsible"
import { getPosCategory, type PosCategorySimplified } from "@/data/utils/vocabulary/part-of-speech"
import { JLPT_SETS } from "../consts"
import { calculateItemStatus, type ItemStatus } from "../../shared/status"
import { StatusBadge } from "../../shared/StatusBadge"
import { SelectAllHeader } from "../../shared/SelectAllHeader"
import { CheckIcon } from "../../shared/CheckIcon"

const POS_CATEGORIES = [
  { key: "verb", label: "Verbs" },
  { key: "adjective", label: "Adjectives" },
  { key: "other", label: "Other" },
] as const

export function VocabSection(props: {
  level: string
  selectedKeys: Record<string, boolean>
  onToggleAll: (items: VocabularyItem[], checked: boolean) => void
  onItemClick: (e: MouseEvent, id: string, groupIds: string[]) => void
  onPointerDown: (e: PointerEvent, id: string, groupIds: string[]) => void
}) {
  const user = getUser()
  const vocabQuery = useConvexQuery(
    api.api.vocabulary.getBySets,
    () => ({ setIds: [...JLPT_SETS] })
  )

  const items = () => vocabQuery.data()?.[props.level.toLowerCase()]

  const allKeys = createMemo(() => items()?.map((i) => i.key) ?? [])

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
    return list !== undefined && list.length > 0 && list.every((i) => props.selectedKeys[i.key])
  }

  const selectedCount = () => Object.values(props.selectedKeys).filter(Boolean).length

  return (
    <Show
      when={items()}
      fallback={
        <div class="py-12 text-center text-white/40">
          No vocabulary available for {props.level}
        </div>
      }
    >
      {(itemList) => {
        const grouped = createMemo(() => {
          const result: Record<PosCategorySimplified, VocabularyItem[]> = {
            verb: [],
            adjective: [],
            other: [],
          }
          for (const item of itemList()) {
            result[getPosCategory(item.partOfSpeech)].push(item)
          }
          return result
        })

        const nonEmptyCategories = createMemo(() =>
          POS_CATEGORIES.filter((c) => grouped()[c.key].length > 0)
        )

        return (
          <>
            <SelectAllHeader
              level={props.level}
              category="vocabulary"
              selectedCount={selectedCount()}
              allSelected={allSelected()}
              onToggle={(checked) => props.onToggleAll(itemList(), checked)}
            />
            <div class="divide-y divide-white/10">
              <For each={nonEmptyCategories()}>
                {(category, index) => (
                  <Collapsible
                    defaultOpen={index() === nonEmptyCategories().length - 1}
                    class="py-2 first:pt-0"
                  >
                    <CollapsibleTrigger class="rounded-lg px-2 py-2 text-white/80 hover:bg-white/10">
                      {category.label} ({grouped()[category.key].length})
                    </CollapsibleTrigger>
                    <CollapsibleContent class="pt-2">
                      <VocabGrid
                        items={grouped()[category.key]}
                        selectedKeys={props.selectedKeys}
                        getStatus={getStatus}
                        allKeys={allKeys()}
                        onItemClick={props.onItemClick}
                        onPointerDown={props.onPointerDown}
                      />
                    </CollapsibleContent>
                  </Collapsible>
                )}
              </For>
            </div>
          </>
        )
      }}
    </Show>
  )
}

export function VocabSectionSkeleton() {
  return (
    <>
      <div class="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
        <div class="flex items-center gap-3">
          <div class="size-4 animate-pulse rounded bg-white/10" />
          <div class="h-4 w-40 animate-pulse rounded bg-white/10" />
        </div>
        <div class="h-4 w-20 animate-pulse rounded bg-white/10" />
      </div>
      <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        <For each={Array.from({ length: 12 })}>
          {() => <VocabItemSkeleton />}
        </For>
      </div>
    </>
  )
}

function VocabGrid(props: {
  items: VocabularyItem[]
  selectedKeys: Record<string, boolean>
  getStatus: (key: string) => ItemStatus
  allKeys: string[]
  onItemClick: (e: MouseEvent, id: string, groupIds: string[]) => void
  onPointerDown: (e: PointerEvent, id: string, groupIds: string[]) => void
}) {
  return (
    <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      <For each={props.items}>
        {(item) => (
          <VocabItem
            item={item}
            checked={props.selectedKeys[item.key] ?? false}
            status={props.getStatus(item.key)}
            allKeys={props.allKeys}
            onItemClick={props.onItemClick}
            onPointerDown={props.onPointerDown}
          />
        )}
      </For>
    </div>
  )
}

function VocabItem(props: {
  item: VocabularyItem
  checked: boolean
  status: ItemStatus
  allKeys: string[]
  onItemClick: (e: MouseEvent, id: string, groupIds: string[]) => void
  onPointerDown: (e: PointerEvent, id: string, groupIds: string[]) => void
}) {
  return (
    <div
      data-import-item-id={props.item.key}
      onClick={(e) => props.onItemClick(e, props.item.key, props.allKeys)}
      onPointerDown={(e) => props.onPointerDown(e, props.item.key, props.allKeys)}
      class={cn(
        "relative flex cursor-pointer touch-manipulation items-center gap-3 rounded-lg border p-3 transition-colors ease-instant-hover-150 select-none",
        props.checked
          ? "border-(--accent)/30 bg-(--accent)/10"
          : "border-white/10 bg-white/2 hover:border-white/20"
      )}
    >
      <div
        class={cn(
          "size-4 shrink-0 rounded border transition-colors",
          props.checked
            ? "border-(--accent) bg-(--accent) text-white"
            : "border-white/30 bg-white/10"
        )}
      >
        {props.checked && <CheckIcon />}
      </div>
      <div class="min-w-0 flex-1">
        <p class="truncate font-medium text-white">{props.item.word}</p>
        <p class="truncate text-xs text-white/40">{props.item.english[0]}</p>
        <StatusBadge status={props.status} />
      </div>
    </div>
  )
}

function VocabItemSkeleton() {
  return (
    <div class="animate-pulse rounded-lg border border-white/10 bg-white/2 p-3">
      <div class="mb-2 h-4 w-16 rounded bg-white/10" />
      <div class="h-3 w-24 rounded bg-white/5" />
    </div>
  )
}
