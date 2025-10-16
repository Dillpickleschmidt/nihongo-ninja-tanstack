import { Show } from "solid-js"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { SummaryCard } from "./SummaryCard"
import { Chip } from "./Chip"
import { VocabularyTabContent } from "./VocabTab"
import { KanjiRadicalsTabContent } from "./KanjiTab"
import type { UseQueryResult } from "@tanstack/solid-query"
import type { DefaultError } from "@tanstack/query-core"

type FullDependencyViewProps = {
  // Queries
  vocabularyQuery: UseQueryResult<any, DefaultError>
  hierarchyQuery: UseQueryResult<any, DefaultError>
  fsrsCardsQuery: UseQueryResult<any, DefaultError>

  // Data
  vocabList: () => any[] | undefined
  kanjiSet: Set<string>
  radicalSet: Set<string>
  filteredKanji: () => string[]
  kanjiToRadicals: Map<string, string[]>
  kanjiToVocab: Map<string, string[]>
  fsrsMap: Map<string, any>

  // Counts
  dueCounts:
    | { vocabulary: number; kanji: number; radicals: number; total: number }
    | undefined

  // Selection state
  selectedKanji: () => string | null
  selectedRadical: () => string | null
  setSelectedKanji: (k: string | null) => void
  setSelectedRadical: (r: string | null) => void
  toggleKanji: (k: string) => void
  toggleRadical: (r: string) => void

  // Active service
  activeService: () => "local" | "anki" | "wanikani" | "jpdb"

  // Mode info
  isFlatHierarchy: () => boolean
}

export function FullDependencyView(props: FullDependencyViewProps) {
  return (
    <>
      <div class="grid grid-cols-3 gap-2 md:gap-3">
        <SummaryCard
          label="Vocabulary"
          query={props.hierarchyQuery}
          getValue={() => props.vocabList()!.length}
          onClick={() => {
            // Focus Vocabulary (Vocab → Kanji) tab
            const tabEl = document.querySelector(
              '[data-dep-tabs="true"] [data-value="v2k"]',
            ) as HTMLButtonElement | null
            tabEl?.click()
          }}
        />
        <SummaryCard
          label="Kanji"
          query={props.hierarchyQuery}
          getValue={() => props.kanjiSet.size}
          dueCountQuery={props.fsrsCardsQuery}
          getDueCount={() => props.dueCounts?.kanji}
          onClick={() => {
            // Focus K→R tab and clear selections
            props.setSelectedRadical(null)
            props.setSelectedKanji(null)
            const tabEl = document.querySelector(
              '[data-dep-tabs="true"] [data-value="k2r"]',
            ) as HTMLButtonElement | null
            tabEl?.click()
          }}
        />
        <SummaryCard
          label="Radicals"
          query={props.hierarchyQuery}
          getValue={() => props.radicalSet.size}
          dueCountQuery={props.fsrsCardsQuery}
          getDueCount={() => props.dueCounts?.radicals}
          onClick={() => {
            // Focus K→R tab and clear selections
            props.setSelectedRadical(null)
            props.setSelectedKanji(null)
            const tabEl = document.querySelector(
              '[data-dep-tabs="true"] [data-value="k2r"]',
            ) as HTMLButtonElement | null
            tabEl?.click()
          }}
        />
      </div>

      {/* Mode note */}
      <Show when={props.isFlatHierarchy()}>
        <div class="text-muted-foreground bg-card/40 border-card-foreground/70 rounded-lg border p-3 text-xs">
          Kanji/Radicals are hidden for the current session configuration (live
          service or spellings mode).
        </div>
      </Show>

      {/* Tabs */}
      <Tabs defaultValue="v2k" class="w-full" data-dep-tabs="true">
        <div class="flex items-center justify-between">
          <TabsList class="h-8 bg-transparent">
            <TabsTrigger
              value="v2k"
              class="data-[selected]:dark:bg-card-foreground/70 h-6 px-2"
            >
              Vocabulary
            </TabsTrigger>
            <TabsTrigger
              value="k2r"
              class="data-[selected]:dark:bg-card-foreground/70 h-6 px-2"
            >
              Kanji → Radicals
            </TabsTrigger>
          </TabsList>

          {/* Selection status and clear */}
          <div class="text-muted-foreground flex items-center gap-2 text-xs">
            <Show when={props.selectedKanji()}>
              <span class="inline-flex items-center gap-1">
                Selected Kanji:
                <Chip
                  label={props.selectedKanji()!}
                  color="indigo"
                  selected
                  onClick={() => props.setSelectedKanji(null)}
                />
              </span>
            </Show>
            <Show when={props.selectedRadical()}>
              <span class="inline-flex items-center gap-1">
                Selected Radical:
                <Chip
                  label={props.selectedRadical()!}
                  color="purple"
                  selected
                  onClick={() => props.setSelectedRadical(null)}
                />
              </span>
            </Show>
          </div>
        </div>

        {/* Vocabulary (Vocab → Kanji) */}
        <TabsContent value="v2k" class="mt-2">
          <VocabularyTabContent
            vocabularyQuery={props.vocabularyQuery}
            hierarchyQuery={props.hierarchyQuery}
            vocabList={props.vocabList}
            fsrsMap={props.fsrsMap}
            fsrsCardsQuery={props.fsrsCardsQuery}
            activeService={props.activeService}
            selectedKanji={props.selectedKanji}
            toggleKanji={props.toggleKanji}
          />
        </TabsContent>

        {/* Kanji → Radicals */}
        <TabsContent value="k2r" class="mt-2">
          <KanjiRadicalsTabContent
            hierarchyQuery={props.hierarchyQuery}
            filteredKanji={props.filteredKanji}
            kanjiToRadicals={props.kanjiToRadicals}
            kanjiToVocab={props.kanjiToVocab}
            fsrsMap={props.fsrsMap}
            fsrsCardsQuery={props.fsrsCardsQuery}
            activeService={props.activeService}
            selectedKanji={props.selectedKanji}
            toggleKanji={props.toggleKanji}
            toggleRadical={props.toggleRadical}
          />
        </TabsContent>
      </Tabs>
    </>
  )
}
