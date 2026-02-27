import { Show } from "solid-js"
import { Link, useLocation } from "@tanstack/solid-router"
import { Play, ChevronRight } from "lucide-solid"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import type { UnifiedDeck } from "convex/model/decks"
import { buildPracticePath } from "../../../utils/navigation"
import { useDeckView, type TabValue } from "./deck-view/hooks/useDeckView"
import { DeckHeader } from "./deck-view/components/DeckHeader"
import { SummaryCardsRow } from "./deck-view/components/SummaryCardsRow"
import { SelectionIndicator } from "./deck-view/components/SelectionIndicator"
import { VocabTab } from "./deck-view/components/VocabTab"
import { KanjiTab } from "./deck-view/KanjiTab"

interface DeckViewProps {
  deck: UnifiedDeck
}

export function DeckView(props: DeckViewProps) {
  const location = useLocation()
  const view = useDeckView({ deck: props.deck })

  return (
    <div class="space-y-6">
      <DeckHeader
        deckName={props.deck.deckName}
        deckDescription={props.deck.deckDescription}
      />

      <SummaryCardsRow
        vocabCount={view.counts()?.vocab}
        kanjiCount={view.counts()?.kanji}
        radicalCount={view.counts()?.radicals}
        vocabDueRows={view.dueRows()?.vocabulary}
        kanjiDueRows={view.dueRows()?.kanji}
        radicalDueRows={view.dueRows()?.radicals}
        dueRowsLoading={view.dueRowsLoading()}
        onVocabClick={() => view.setActiveTab("vocabulary")}
        onKanjiClick={() => view.setActiveTab("kanji")}
      />

      <Show when={view.hasSelection()}>
        <SelectionIndicator
          selectedKanji={view.selectedKanji()}
          selectedRadical={view.selectedRadical()}
          onClear={view.clearSelection}
        />
      </Show>

      <div class="px-4">
        <Tabs
          value={view.activeTab()}
          onChange={(v) => view.setActiveTab(v as TabValue)}
        >
          <TabsList class="bg-background/40 border-card-foreground/70 border backdrop-blur-sm">
            <TabsTrigger value="vocabulary">
              Vocabulary
              <Show when={view.selectedKanji() && view.filteredVocab()}>
                <span class="ml-1.5 text-xs text-indigo-400">
                  ({view.filteredVocab()!.length})
                </span>
              </Show>
            </TabsTrigger>
            <TabsTrigger value="kanji">
              Kanji → Radicals
              <Show when={view.selectedRadical() && view.filteredKanji()}>
                <span class="ml-1.5 text-xs text-purple-400">
                  ({view.filteredKanji()!.length})
                </span>
              </Show>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="vocabulary" class="mt-4">
            <VocabTab vocabulary={view.filteredVocab()} />
          </TabsContent>

          <TabsContent value="kanji" class="mt-4">
            <KanjiTab
              kanjiEntries={view.filteredKanji()}
              kanjiToVocab={view.kanjiToVocab()}
              skippedKanji={view.skippedKanji()}
              selectedKanji={view.selectedKanji}
              toggleKanji={view.toggleKanji}
              toggleRadical={view.toggleRadical}
            />
          </TabsContent>
        </Tabs>
      </div>

      <SSRMediaQuery hideFrom="md">
        <div class="fixed bottom-20 left-1/2 -translate-x-1/2">
          <Button
            as={Link}
            to={buildPracticePath(location().pathname)}
            class="group flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm transition-all bg-(--accent)/80 text-white font-medium hover:scale-[1.02] hover:bg-(--accent)"
            style={{
              "box-shadow":
                "0 8px 15px -4px color-mix(in srgb, var(--accent) 30%, transparent)",
            }}
          >
            <Play class="size-4" />
            <span>Start practicing</span>
            <ChevronRight class="size-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </SSRMediaQuery>
    </div>
  )
}
