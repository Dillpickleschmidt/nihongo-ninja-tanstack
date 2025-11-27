import { Await } from "@tanstack/solid-router"
import { Link } from "@tanstack/solid-router"
import { ImportAccordion } from "@/features/import-page/shared/components/ImportAccordion"
import { StatisticsSummary } from "@/features/import-page/shared/components/StatisticsSummary"
import { KeyboardShortcutsHint } from "@/features/import-page/shared/components/KeyboardShortcutsHint"
import {
  ImportActionButtonDesktop,
  ImportActionButtonMobile,
} from "@/features/import-page/shared/components/ImportActionButton"
import { EndOfListIndicator } from "@/features/import-page/shared/components/EndOfListIndicator"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import type {
  ImportItem,
  ItemStatus,
} from "@/features/import-page/shared/types"
import type { VocabularyItem } from "@/data/types"
import type { ImportResult } from "@/features/import-page/shared/utils/fsrs-badge-import"

interface ManualImportViewProps {
  selectedIds: Set<string>
  itemStates: Record<string, ItemStatus>
  initialItemStates: Record<string, ItemStatus>
  handleItemClick: (e: MouseEvent, id: string, groupIds: string[]) => void
  handlePointerDown: (e: PointerEvent, id: string, groupIds: string[]) => void
  toggleSelectGroup: (ids: string[]) => void
  onImport: () => Promise<ImportResult>
  isImporting: boolean
  onUndoItem?: (id: string) => void
  grammarPromises: {
    n5: Promise<ImportItem[]>
    n4: Promise<ImportItem[]>
  }
  vocabPromise: Promise<Record<string, VocabularyItem[]>>
  kanjiPromises: {
    n5: Promise<ImportItem[]>
    n4: Promise<ImportItem[]>
  }
}

export function ManualImportView(props: ManualImportViewProps) {
  // Transform VocabularyItem[] to ImportItem[]
  const transformVocab = (vocab: VocabularyItem[]): ImportItem[] => {
    return vocab.map((item) => ({
      id: item.word,
      meaning: item.english.join("; "),
    }))
  }

  // Extract vocab from segmented record
  const extractVocab = (vocabBySet: Record<string, VocabularyItem[]>): VocabularyItem[] => {
    return Object.values(vocabBySet).flat()
  }

  // Combine promises for each category
  const grammarPromise = Promise.all([
    props.grammarPromises.n5,
    props.grammarPromises.n4,
  ]).then(([n5, n4]) => [...n5, ...n4])

  const vocabListPromise = props.vocabPromise.then((vocabBySet) => {
    const combined = extractVocab(vocabBySet)
    return combined.map((item) => ({ id: item.word }))
  })

  const kanjiPromise = Promise.all([
    props.kanjiPromises.n5,
    props.kanjiPromises.n4,
  ]).then(([n5, n4]) => [...n5, ...n4])

  return (
    <>
      {/* SPLIT GRID LAYOUT */}
      <div class="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
        {/* --- LEFT: CONTENT LIST --- */}
        <div class="pb-16 lg:col-span-7 xl:col-span-8">
          <main class="space-y-10">
            <p class="text-muted-foreground mb-4 text-xl lg:text-2xl">
              Manually mark the <span class="font-extrabold">grammar</span>,{" "}
              <span class="font-extrabold">vocab</span>, &{" "}
              <span class="font-extrabold">kanji</span> that you already know so
              you don't waste time on them.
            </p>
            <p class="text-muted-foreground text-sm italic lg:text-base">
              Already have your history stored somewhere? See{" "}
              <Link to="/import/automatic" class="font-medium underline">
                Automatic Importing
              </Link>
              .
            </p>

            {/* Mobile Aggregated Statistics */}
            <SSRMediaQuery hideFrom="lg">
              <div class="-mt-5 space-y-2">
                <StatisticsSummary
                  itemStates={props.itemStates}
                  itemsPromise={grammarPromise}
                  title="Grammar"
                  showLearning={false}
                />
                <StatisticsSummary
                  itemStates={props.itemStates}
                  itemsPromise={vocabListPromise}
                  title="Vocabulary"
                  showLearning={false}
                />
                <StatisticsSummary
                  itemStates={props.itemStates}
                  itemsPromise={kanjiPromise}
                  title="Kanji"
                  showLearning={false}
                />
              </div>
            </SSRMediaQuery>

            {/* === N5 LEVEL === */}
            <section class="space-y-4">
              <div class="flex items-center gap-3 pb-2">
                <span
                  class="text-primary-foreground rounded px-2.5 py-0.5 text-sm font-bold shadow-sm"
                  style={{ "background-color": "#21b959" }}
                >
                  N5
                </span>
                <span class="text-muted-foreground text-xs font-bold tracking-widest uppercase">
                  Beginner
                </span>
                <div class="h-px flex-1 bg-linear-to-r from-white/10 to-transparent" />
              </div>

              <div class="space-y-8 pl-2">
                {/* Grammar */}
                <div class="flex flex-col gap-3">
                  <h3 class="text-muted-foreground px-1 text-sm font-semibold tracking-wider uppercase">
                    Grammar
                  </h3>
                  <Await
                    promise={props.grammarPromises.n5}
                    fallback={
                      <div class="text-muted-foreground px-1 text-sm">
                        Loading...
                      </div>
                    }
                  >
                    {(items) => (
                      <ImportAccordion
                        sub={{ id: "n5-grammar", title: "Grammar", items }}
                        selectedIds={props.selectedIds}
                        itemStates={props.itemStates}
                        initialItemStates={props.initialItemStates}
                        onItemClick={props.handleItemClick}
                        onGroupToggle={props.toggleSelectGroup}
                        onPointerDown={props.handlePointerDown}
                        onUndoItem={props.onUndoItem}
                      />
                    )}
                  </Await>
                </div>

                {/* Vocabulary */}
                <div class="flex flex-col gap-3">
                  <h3 class="text-muted-foreground px-1 text-sm font-semibold tracking-wider uppercase">
                    Vocabulary
                  </h3>
                  <Await
                    promise={props.vocabPromise.then((vocabBySet) => {
                      const n5Vocab = vocabBySet.n5 || []
                      return transformVocab(n5Vocab)
                    })}
                    fallback={
                      <div class="text-muted-foreground px-1 text-sm">
                        Loading...
                      </div>
                    }
                  >
                    {(items) => (
                      <ImportAccordion
                        sub={{ id: "n5-vocab", title: "Core Vocab", items }}
                        selectedIds={props.selectedIds}
                        itemStates={props.itemStates}
                        initialItemStates={props.initialItemStates}
                        onItemClick={props.handleItemClick}
                        onGroupToggle={props.toggleSelectGroup}
                        onPointerDown={props.handlePointerDown}
                        onUndoItem={props.onUndoItem}
                      />
                    )}
                  </Await>
                </div>

                {/* Kanji */}
                <div class="flex flex-col gap-3">
                  <h3 class="text-muted-foreground px-1 text-sm font-semibold tracking-wider uppercase">
                    Kanji
                  </h3>
                  <Await
                    promise={props.kanjiPromises.n5}
                    fallback={
                      <div class="text-muted-foreground px-1 text-sm">
                        Loading...
                      </div>
                    }
                  >
                    {(items) => (
                      <ImportAccordion
                        sub={{ id: "n5-kanji", title: "Kanji", items }}
                        selectedIds={props.selectedIds}
                        itemStates={props.itemStates}
                        initialItemStates={props.initialItemStates}
                        onItemClick={props.handleItemClick}
                        onGroupToggle={props.toggleSelectGroup}
                        onPointerDown={props.handlePointerDown}
                        onUndoItem={props.onUndoItem}
                      />
                    )}
                  </Await>
                </div>
              </div>
            </section>

            {/* === N4 LEVEL === */}
            <section class="space-y-4">
              <div class="flex items-center gap-3 pb-2">
                <span
                  class="text-primary-foreground rounded px-2.5 py-0.5 text-sm font-bold shadow-sm"
                  style={{ "background-color": "#eab308" }}
                >
                  N4
                </span>
                <span class="text-muted-foreground text-xs font-bold tracking-widest uppercase">
                  Elementary
                </span>
                <div class="h-px flex-1 bg-linear-to-r from-white/10 to-transparent" />
              </div>

              <div class="space-y-8 pl-2">
                {/* Grammar */}
                <div class="flex flex-col gap-3">
                  <h3 class="text-muted-foreground px-1 text-sm font-semibold tracking-wider uppercase">
                    Grammar
                  </h3>
                  <Await
                    promise={props.grammarPromises.n4}
                    fallback={
                      <div class="text-muted-foreground px-1 text-sm">
                        Loading...
                      </div>
                    }
                  >
                    {(items) => (
                      <ImportAccordion
                        sub={{ id: "n4-grammar", title: "Grammar", items }}
                        selectedIds={props.selectedIds}
                        itemStates={props.itemStates}
                        initialItemStates={props.initialItemStates}
                        onItemClick={props.handleItemClick}
                        onGroupToggle={props.toggleSelectGroup}
                        onPointerDown={props.handlePointerDown}
                        onUndoItem={props.onUndoItem}
                      />
                    )}
                  </Await>
                </div>

                {/* Vocabulary */}
                <div class="flex flex-col gap-3">
                  <h3 class="text-muted-foreground px-1 text-sm font-semibold tracking-wider uppercase">
                    Vocabulary
                  </h3>
                  <Await
                    promise={props.vocabPromise.then((vocabBySet) => {
                      const n4Vocab = vocabBySet.n4 || []
                      return transformVocab(n4Vocab)
                    })}
                    fallback={
                      <div class="text-muted-foreground px-1 text-sm">
                        Loading...
                      </div>
                    }
                  >
                    {(items) => (
                      <ImportAccordion
                        sub={{ id: "n4-vocab", title: "Core Vocab", items }}
                        selectedIds={props.selectedIds}
                        itemStates={props.itemStates}
                        initialItemStates={props.initialItemStates}
                        onItemClick={props.handleItemClick}
                        onGroupToggle={props.toggleSelectGroup}
                        onPointerDown={props.handlePointerDown}
                        onUndoItem={props.onUndoItem}
                      />
                    )}
                  </Await>
                </div>

                {/* Kanji */}
                <div class="flex flex-col gap-3">
                  <h3 class="text-muted-foreground px-1 text-sm font-semibold tracking-wider uppercase">
                    Kanji
                  </h3>
                  <Await
                    promise={props.kanjiPromises.n4}
                    fallback={
                      <div class="text-muted-foreground px-1 text-sm">
                        Loading...
                      </div>
                    }
                  >
                    {(items) => (
                      <ImportAccordion
                        sub={{ id: "n4-kanji", title: "Kanji", items }}
                        selectedIds={props.selectedIds}
                        itemStates={props.itemStates}
                        initialItemStates={props.initialItemStates}
                        onItemClick={props.handleItemClick}
                        onGroupToggle={props.toggleSelectGroup}
                        onPointerDown={props.handlePointerDown}
                        onUndoItem={props.onUndoItem}
                      />
                    )}
                  </Await>
                </div>
              </div>
            </section>

            <EndOfListIndicator text="End of list" />
          </main>
        </div>

        {/* --- RIGHT: SUMMARY PANEL (DESKTOP ONLY) --- */}
        <SSRMediaQuery showFrom="lg">
          <aside class="sticky top-24 space-y-6 lg:col-span-5 xl:col-span-4">
            <StatisticsSummary
              itemStates={props.itemStates}
              itemsPromise={grammarPromise}
              title="Grammar"
              showLearning={false}
            />
            <StatisticsSummary
              itemStates={props.itemStates}
              itemsPromise={vocabListPromise}
              title="Vocabulary"
              showLearning={false}
            />
            <StatisticsSummary
              itemStates={props.itemStates}
              itemsPromise={kanjiPromise}
              title="Kanji"
              showLearning={false}
            />

            <KeyboardShortcutsHint />
            <ImportActionButtonDesktop
              onClick={props.onImport}
              variant="manual"
              label={props.isImporting ? "Importing..." : "Import Progress"}
            />
          </aside>
        </SSRMediaQuery>
      </div>

      {/* Mobile Import Button */}
      <SSRMediaQuery hideFrom="lg">
        <ImportActionButtonMobile
          onClick={props.onImport}
          variant="manual"
          label={props.isImporting ? "Importing..." : "Import Progress"}
        />
      </SSRMediaQuery>
    </>
  )
}
