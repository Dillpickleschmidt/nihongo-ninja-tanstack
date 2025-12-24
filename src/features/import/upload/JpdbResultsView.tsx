import { createSignal, For, Show, createMemo } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { convexMutation, useConvexQuery } from "@/lib/convex-query"
import { api } from "convex/_generated/api"
import { toConvexFsrs } from "convex/model/fsrs"
import { useImportSelection } from "../shared/hooks/useImportSelection"
import { useItemStatuses } from "../shared/hooks/useItemStatuses"
import { SelectAllHeader } from "../shared/SelectAllHeader"
import { ImportVocabItem } from "../shared/ImportVocabItem"
import { ImportKanjiItem } from "../shared/ImportKanjiItem"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/custom/collapsible"
import type { JpdbProcessResult, ImportItem, ProcessedCard } from "./jpdb/jpdb-processor"

interface JpdbResultsViewProps {
  result: JpdbProcessResult
  onBack: () => void
}

export function JpdbResultsView(props: JpdbResultsViewProps) {
  const [isImporting, setIsImporting] = createSignal(false)
  const [importError, setImportError] = createSignal<string | null>(null)
  const [importResult, setImportResult] = createSignal<{ imported: number } | null>(null)

  const {
    selectedKeys,
    handleItemClick,
    handlePointerDown,
    toggleAll,
  } = useImportSelection()

  // Build a map of searchTerm -> ProcessedCard for quick lookup
  const cardMap = createMemo(() => {
    const map = new Map<string, ProcessedCard>()
    for (const card of props.result.processedCards) {
      map.set(card.searchTerm, card)
    }
    return map
  })

  const vocabIds = createMemo(() => props.result.vocabItems.map((i) => i.id))
  const kanjiIds = createMemo(() => props.result.kanjiItems.map((i) => i.id))

  // Fetch meanings from database
  const vocabQuery = useConvexQuery(
    api.api.vocabulary.getByKeys,
    () => ({ keys: vocabIds() }),
    () => ({ enabled: vocabIds().length > 0 })
  )

  const kanjiQuery = useConvexQuery(
    api.api.vocabulary.getKanjiByChars,
    () => ({ chars: kanjiIds() }),
    () => ({ enabled: kanjiIds().length > 0 })
  )

  // Build kanji meanings map from query results
  const kanjiMeaningsMap = createMemo(() => {
    const data = kanjiQuery.data()
    if (!data) return new Map<string, string>()
    const map = new Map<string, string>()
    for (const entry of data) {
      map.set(entry.kanji, entry.meanings[0] ?? "")
    }
    return map
  })

  // Partition items into found (with meanings) and skipped (no match in DB)
  const partitionedVocab = createMemo(() => {
    const vocabData = vocabQuery.data()
    if (!vocabData) return { found: [] as (ImportItem & { meaning: string })[], skipped: [] as ImportItem[] }

    const found: (ImportItem & { meaning: string })[] = []
    const skipped: ImportItem[] = []

    for (const item of props.result.vocabItems) {
      const dbItem = vocabData[encodeURIComponent(item.id)]
      if (dbItem?.english?.[0]) {
        found.push({ ...item, meaning: dbItem.english[0] })
      } else {
        skipped.push(item)
      }
    }
    return { found, skipped }
  })

  const partitionedKanji = createMemo(() => {
    const kanjiMeanings = kanjiMeaningsMap()
    if (kanjiMeanings.size === 0 && kanjiIds().length > 0 && kanjiQuery.data() === undefined) {
      return { found: [] as (ImportItem & { meaning: string })[], skipped: [] as ImportItem[] }
    }

    const found: (ImportItem & { meaning: string })[] = []
    const skipped: ImportItem[] = []

    for (const item of props.result.kanjiItems) {
      const meaning = kanjiMeanings.get(item.id)
      if (meaning) {
        found.push({ ...item, meaning })
      } else {
        skipped.push(item)
      }
    }
    return { found, skipped }
  })

  const foundVocab = () => partitionedVocab().found
  const skippedVocab = () => partitionedVocab().skipped
  const foundKanji = () => partitionedKanji().found
  const skippedKanji = () => partitionedKanji().skipped

  const foundVocabIds = createMemo(() => foundVocab().map((i) => i.id))
  const foundKanjiIds = createMemo(() => foundKanji().map((i) => i.id))
  const allFoundIds = createMemo(() => [...foundVocabIds(), ...foundKanjiIds()])
  const getStoredStatus = useItemStatuses(allFoundIds)

  const vocabSelectedCount = createMemo(() => foundVocab().filter((i) => selectedKeys[i.id]).length)
  const kanjiSelectedCount = createMemo(() => foundKanji().filter((i) => selectedKeys[i.id]).length)

  const allVocabSelected = () =>
    foundVocab().length > 0 && foundVocab().every((i) => selectedKeys[i.id])

  const allKanjiSelected = () =>
    foundKanji().length > 0 && foundKanji().every((i) => selectedKeys[i.id])

  const handleImport = async () => {
    const idsToImport = allFoundIds()
    if (idsToImport.length === 0) return

    setIsImporting(true)
    setImportError(null)

    try {
      // Get the processed cards for all found items, converting to wire format
      const cardsToImport = idsToImport
        .map((id) => cardMap().get(id))
        .filter((card): card is ProcessedCard => card !== undefined)
        .map((card) => {
          const converted = toConvexFsrs({
            practiceItemKey: card.searchTerm,
            fsrsCard: card.fsrsCard,
            fsrsLogs: card.fsrsLogs,
            mode: "meanings",
            type: card.type,
          })
          return {
            searchTerm: converted.practiceItemKey,
            type: converted.type,
            fsrsCard: converted.fsrsCard,
            fsrsLogs: converted.fsrsLogs,
          }
        })

      const result = await convexMutation(api.api.fsrs.batchImportFSRSCards, { cards: cardsToImport })()
      setImportResult(result)
    } catch (err) {
      setImportError(err instanceof Error ? err.message : "Import failed")
    } finally {
      setIsImporting(false)
    }
  }

  return (
    <div class="space-y-6">
      {/* Header with stats */}
      <div class="rounded-xl border border-white/10 bg-white/5 p-4">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="font-medium text-white">JPDB Import Preview</h3>
            <p class="mt-1 text-sm text-white/50">
              Found {props.result.vocabItems.length} vocabulary and{" "}
              {props.result.kanjiItems.length} kanji items
            </p>
          </div>
          <button
            type="button"
            onClick={props.onBack}
            class="text-sm text-white/60 hover:text-white"
          >
            Back
          </button>
        </div>
      </div>

      {/* Error Message */}
      <Show when={importError()}>
        <div class="rounded-xl border border-red-500/30 bg-red-500/10 p-4">
          <p class="text-sm text-red-400">{importError()}</p>
        </div>
      </Show>

      {/* Success Message */}
      <Show when={importResult()}>
        {(result) => (
          <div class="rounded-xl border border-green-500/30 bg-green-500/10 p-4">
            <p class="text-sm text-green-400">
              Successfully imported {result().imported} cards
            </p>
            <Link
              to="/import/builtin"
              class="mt-3 inline-block rounded-lg bg-green-500/20 px-4 py-2 text-sm text-green-400 hover:bg-green-500/30"
            >
              Done
            </Link>
          </div>
        )}
      </Show>

      {/* Vocabulary Section */}
      <Show when={foundVocab().length > 0}>
        <Collapsible defaultOpen class="rounded-xl border border-white/10 bg-white/5">
          <CollapsibleTrigger class="w-full rounded-t-xl px-4 py-3 text-left text-white/80 hover:bg-white/5">
            Vocabulary ({foundVocab().length})
          </CollapsibleTrigger>
          <CollapsibleContent class="border-t border-white/10 p-4">
            <SelectAllHeader
              level="JPDB"
              category="vocabulary"
              selectedCount={vocabSelectedCount()}
              allSelected={allVocabSelected()}
              onToggle={(checked) => toggleAll(foundVocab(), (i) => i.id, checked)}
            />
            <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              <For each={foundVocab()}>
                {(item) => (
                  <ImportVocabItem
                    id={item.id}
                    label={item.id}
                    sublabel={item.meaning}
                    checked={selectedKeys[item.id] ?? false}
                    importStatus={item.status}
                    storedStatus={getStoredStatus(item.id)}
                    allIds={foundVocabIds()}
                    onItemClick={handleItemClick}
                    onPointerDown={handlePointerDown}
                  />
                )}
              </For>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Show>

      {/* Kanji Section */}
      <Show when={foundKanji().length > 0}>
        <Collapsible defaultOpen class="rounded-xl border border-white/10 bg-white/5">
          <CollapsibleTrigger class="w-full rounded-t-xl px-4 py-3 text-left text-white/80 hover:bg-white/5">
            Kanji ({foundKanji().length})
          </CollapsibleTrigger>
          <CollapsibleContent class="border-t border-white/10 p-4">
            <SelectAllHeader
              level="JPDB"
              category="kanji"
              selectedCount={kanjiSelectedCount()}
              allSelected={allKanjiSelected()}
              onToggle={(checked) => toggleAll(foundKanji(), (i) => i.id, checked)}
            />
            <div class="grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-8">
              <For each={foundKanji()}>
                {(item) => (
                  <ImportKanjiItem
                    id={item.id}
                    label={item.id}
                    sublabel={item.meaning}
                    checked={selectedKeys[item.id] ?? false}
                    importStatus={item.status}
                    storedStatus={getStoredStatus(item.id)}
                    allIds={foundKanjiIds()}
                    onItemClick={handleItemClick}
                    onPointerDown={handlePointerDown}
                  />
                )}
              </For>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </Show>

      {/* Skipped Items */}
      <Show when={skippedVocab().length > 0 || skippedKanji().length > 0}>
        <Collapsible class="rounded-xl border border-white/10 bg-white/5">
          <CollapsibleTrigger class="w-full rounded-t-xl px-4 py-3 text-left text-white/60 hover:bg-white/5">
            Skipped ({skippedVocab().length + skippedKanji().length} not in database)
          </CollapsibleTrigger>
          <CollapsibleContent class="border-t border-white/10 p-4">
            <Show when={skippedVocab().length > 0}>
              <div class="mb-4">
                <h4 class="mb-2 text-sm font-medium text-white/70">
                  Vocabulary ({skippedVocab().length})
                </h4>
                <div class="flex flex-wrap gap-2">
                  <For each={skippedVocab()}>
                    {(item) => (
                      <span class="rounded bg-white/5 px-2 py-1 text-sm text-white/50">
                        {item.id}
                      </span>
                    )}
                  </For>
                </div>
              </div>
            </Show>
            <Show when={skippedKanji().length > 0}>
              <div>
                <h4 class="mb-2 text-sm font-medium text-white/70">
                  Kanji ({skippedKanji().length})
                </h4>
                <div class="flex flex-wrap gap-2">
                  <For each={skippedKanji()}>
                    {(item) => (
                      <span class="rounded bg-white/5 px-2 py-1 text-sm text-white/50">
                        {item.id}
                      </span>
                    )}
                  </For>
                </div>
              </div>
            </Show>
          </CollapsibleContent>
        </Collapsible>
      </Show>

      {/* Import Button */}
      <Show when={!importResult()}>
        <div class="flex justify-end">
          <Button
            variant="ghost"
            class="bg-(--accent) h-auto px-6 py-3 text-base disabled:cursor-not-allowed hover:brightness-120 hover:bg-(--accent)"
            disabled={allFoundIds().length === 0 || isImporting()}
            onClick={handleImport}
          >
            <Show
              when={isImporting()}
              fallback={`Import ${allFoundIds().length} Items`}
            >
              <span class="flex items-center gap-2">
                <svg class="size-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  />
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Importing...
              </span>
            </Show>
          </Button>
        </div>
      </Show>
    </div>
  )
}
