import { createMemo, For, Show } from "solid-js"
import type { VocabularyItem } from "convex/validators"
import { useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { cn } from "@/utils"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/custom/collapsible"
import { Checkbox, CheckboxInput, CheckboxLabel } from "@/components/ui/checkbox"
import { getPosCategory, type PosCategorySimplified } from "@/data/utils/vocabulary/part-of-speech"
import { JLPT_SETS } from "../consts"

const POS_CATEGORIES = [
  { key: "verb", label: "Verbs" },
  { key: "adjective", label: "Adjectives" },
  { key: "other", label: "Other" },
] as const

export function VocabSection(props: {
  level: string
  selectedKeys: Record<string, boolean>
  onToggle: (key: string, checked: boolean) => void
  onToggleAll: (items: VocabularyItem[], checked: boolean) => void
}) {
  const vocabQuery = useConvexQuery(
    api.api.vocabulary.getBySets,
    () => ({ setIds: [...JLPT_SETS] })
  )

  const items = () => vocabQuery.data()?.[props.level.toLowerCase()]

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
                        onToggle={props.onToggle}
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
        <CheckboxLabel class="text-white">
          Select all {props.level} vocabulary
        </CheckboxLabel>
      </Checkbox>
      <span class="text-sm text-white/40">{props.selectedCount} selected</span>
    </div>
  )
}

function VocabGrid(props: {
  items: VocabularyItem[]
  selectedKeys: Record<string, boolean>
  onToggle: (key: string, checked: boolean) => void
}) {
  return (
    <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
      <For each={props.items}>
        {(item) => (
          <VocabItem
            item={item}
            checked={props.selectedKeys[item.key] ?? false}
            onToggle={props.onToggle}
          />
        )}
      </For>
    </div>
  )
}

function VocabItem(props: {
  item: VocabularyItem
  checked: boolean
  onToggle: (key: string, checked: boolean) => void
}) {
  return (
    <Checkbox
      checked={props.checked}
      onChange={(checked) => props.onToggle(props.item.key, checked)}
      class={cn(
        "flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-colors ease-instant-hover-150",
        props.checked
          ? "border-(--accent)/30 bg-(--accent)/10"
          : "border-white/10 bg-white/2 hover:border-white/20"
      )}
    >
      <CheckboxInput class="border-white/30 bg-white/10 data-checked:bg-(--accent) data-checked:text-white" />
      <CheckboxLabel class="min-w-0 flex-1 cursor-pointer text-base leading-normal! font-normal">
        <p class="truncate font-medium text-white">{props.item.word}</p>
        <p class="truncate text-xs text-white/40">{props.item.english[0]}</p>
      </CheckboxLabel>
    </Checkbox>
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
