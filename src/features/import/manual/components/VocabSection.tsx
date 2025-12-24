import { createMemo, For, Show } from "solid-js"
import type { VocabularyItem } from "convex/validators"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/custom/collapsible"
import { getPosCategory, type PosCategorySimplified } from "@/data/utils/vocabulary/part-of-speech"
import { JLPT_SETS } from "../consts"
import { useItemStatuses } from "../../shared/hooks/useItemStatuses"
import type { ItemStatus } from "../../shared/status"
import { SelectAllHeader } from "../../shared/SelectAllHeader"
import { ImportVocabItem, ImportVocabItemSkeleton } from "../../shared/ImportVocabItem"

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
  const vocabQuery = useConvexQuery(
    api.api.vocabulary.getBySets,
    () => ({ setIds: [...JLPT_SETS] })
  )

  const items = () => vocabQuery.data()?.[props.level.toLowerCase()]

  const allKeys = createMemo(() => items()?.map((i) => i.key) ?? [])

  const getStoredStatus = useItemStatuses(allKeys)

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
                        getStoredStatus={getStoredStatus}
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
          {() => <ImportVocabItemSkeleton />}
        </For>
      </div>
    </>
  )
}

function VocabGrid(props: {
  items: VocabularyItem[]
  selectedKeys: Record<string, boolean>
  getStoredStatus: (key: string) => ItemStatus
  allKeys: string[]
  onItemClick: (e: MouseEvent, id: string, groupIds: string[]) => void
  onPointerDown: (e: PointerEvent, id: string, groupIds: string[]) => void
}) {
  return (
    <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      <For each={props.items}>
        {(item) => (
          <ImportVocabItem
            id={item.key}
            label={item.word}
            sublabel={item.english[0]}
            checked={props.selectedKeys[item.key] ?? false}
            importStatus={null}
            storedStatus={props.getStoredStatus(item.key)}
            allIds={props.allKeys}
            onItemClick={props.onItemClick}
            onPointerDown={props.onPointerDown}
          />
        )}
      </For>
    </div>
  )
}
