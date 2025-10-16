import { Show, createSignal } from "solid-js"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { X } from "lucide-solid"
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
  filteredVocabList: () => any[] | undefined
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
  const [selectedTab, setSelectedTab] = createSignal("v2k")

  // Wrapper for VocabTab: select kanji + switch to k2r tab
  const selectKanjiAndSwitchToK2R = (k: string) => {
    props.setSelectedKanji(k)
    props.setSelectedRadical(null)
    setSelectedTab("k2r")
  }

  // Wrapper for KanjiTab: select kanji + switch to v2k tab
  const selectKanjiAndSwitchToV2K = (k: string) => {
    props.setSelectedKanji(k)
    props.setSelectedRadical(null)
    setSelectedTab("v2k")
  }

  return (
    <>
      <div class="grid grid-cols-3 gap-2 md:gap-3">
        <SummaryCard
          label="Vocabulary"
          query={props.hierarchyQuery}
          getValue={() => props.vocabList()!.length}
          onClick={() => setSelectedTab("v2k")}
        />
        <SummaryCard
          label="Kanji"
          query={props.hierarchyQuery}
          getValue={() => props.kanjiSet.size}
          dueCountQuery={props.fsrsCardsQuery}
          getDueCount={() => props.dueCounts?.kanji}
          onClick={() => {
            props.setSelectedRadical(null)
            props.setSelectedKanji(null)
            setSelectedTab("k2r")
          }}
        />
        <SummaryCard
          label="Radicals"
          query={props.hierarchyQuery}
          getValue={() => props.radicalSet.size}
          dueCountQuery={props.fsrsCardsQuery}
          getDueCount={() => props.dueCounts?.radicals}
          onClick={() => {
            props.setSelectedRadical(null)
            props.setSelectedKanji(null)
            setSelectedTab("k2r")
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
      <Tabs value={selectedTab()} onChange={setSelectedTab} class="w-full">
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
                  onClick={() => {}}
                />
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => props.setSelectedKanji(null)}
                  class="h-5 px-1.5"
                  title="Clear selection"
                >
                  <X class="h-3 w-3" />
                </Button>
              </span>
            </Show>
            <Show when={props.selectedRadical()}>
              <span class="inline-flex items-center gap-1">
                Selected Radical:
                <Chip
                  label={props.selectedRadical()!}
                  color="purple"
                  selected
                  onClick={() => {}}
                />
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => props.setSelectedRadical(null)}
                  class="h-5 px-1.5"
                  title="Clear selection"
                >
                  <X class="h-3 w-3" />
                </Button>
              </span>
            </Show>
          </div>
        </div>

        {/* Vocabulary (Vocab → Kanji) */}
        <TabsContent value="v2k" class="mt-2">
          <VocabularyTabContent
            vocabularyQuery={props.vocabularyQuery}
            vocabList={props.filteredVocabList}
            fsrsMap={props.fsrsMap}
            fsrsCardsQuery={props.fsrsCardsQuery}
            activeService={props.activeService}
            selectedKanji={props.selectedKanji}
            toggleKanji={selectKanjiAndSwitchToK2R}
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
            toggleKanji={selectKanjiAndSwitchToV2K}
            toggleRadical={props.toggleRadical}
          />
        </TabsContent>
      </Tabs>
    </>
  )
}
