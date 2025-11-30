import { Show } from "solid-js"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { ImportAccordion } from "@/features/import-page/shared/components/ImportAccordion"
import { StatisticsSummary } from "@/features/import-page/shared/components/StatisticsSummary"
import { KeyboardShortcutsHint } from "@/features/import-page/shared/components/KeyboardShortcutsHint"
import {
  ImportActionButtonDesktop,
  ImportActionButtonMobile,
} from "@/features/import-page/shared/components/ImportActionButton"
import { EndOfListIndicator } from "@/features/import-page/shared/components/EndOfListIndicator"
import { LearningPathFormFields } from "./LearningPathFormFields"
import { useImportFlow } from "@/features/import-page/shared/context/ImportFlowContext"
import type { TextbookIDEnum } from "@/data/types"
import type { transformModulesToUIFormat } from "@/features/learning-paths/ui-adapter"
import type {
  ImportItem,
} from "@/features/import-page/shared/types"

interface LearningPathResultsViewProps {
  uiData: ReturnType<typeof transformModulesToUIFormat> | null
  pathName: string
  setPathName: (value: string) => void
  showName: string
  setShowName: (value: string) => void
  episodeName: string
  setEpisodeName: (value: string) => void
  textbookId: TextbookIDEnum
  setTextbookId: (value: TextbookIDEnum) => void
  onSave: () => void
  error: string | null
}

export function LearningPathResultsView(props: LearningPathResultsViewProps) {
  const flow = useImportFlow()
  // Create resolved promises for statistics display
  const grammarStatPromise = Promise.resolve(
    props.uiData?.grammar.items.map((item: ImportItem) => ({
      id: item.id,
    })) || [],
  )
  const vocabStatPromise = Promise.resolve(
    props.uiData?.vocabulary.items.map((item: ImportItem) => ({
      id: item.id,
    })) || [],
  )
  const kanjiStatPromise = Promise.resolve(
    props.uiData?.kanji.items.map((item: ImportItem) => ({
      id: item.id,
    })) || [],
  )

  return (
    <div>
      {/* Mobile inputs - appear at very top on mobile */}
      <SSRMediaQuery hideFrom="lg">
        <div class="mb-8 space-y-4">
          <LearningPathFormFields
            pathName={props.pathName}
            setPathName={props.setPathName}
            showName={props.showName}
            setShowName={props.setShowName}
            episodeName={props.episodeName}
            setEpisodeName={props.setEpisodeName}
            textbookId={props.textbookId}
            setTextbookId={props.setTextbookId}
          />
        </div>
      </SSRMediaQuery>

      <div class="grid grid-cols-1 gap-8 pb-16 lg:grid-cols-12 lg:gap-12">
        {/* --- LEFT: CONTENT LIST --- */}
        <div class="pb-16 lg:col-span-7 xl:col-span-8">
          <main class="animate-in fade-in slide-in-from-bottom-8 space-y-8 duration-700">
            <h1 class="text-muted-foreground mb-4 text-2xl font-semibold lg:text-3xl">
              Here's what we found.
            </h1>

            {/* Mobile Aggregated Statistics */}
            <SSRMediaQuery hideFrom="lg">
              <div class="space-y-2">
                <StatisticsSummary
                  itemStates={flow.itemStates()}
                  itemsPromise={grammarStatPromise}
                  title="Grammar"
                  showLearning={false}
                  isLearningPath={true}
                />
                <StatisticsSummary
                  itemStates={flow.itemStates()}
                  itemsPromise={vocabStatPromise}
                  title="Vocabulary"
                  showLearning={false}
                  isLearningPath={true}
                />
                <StatisticsSummary
                  itemStates={flow.itemStates()}
                  itemsPromise={kanjiStatPromise}
                  title="Kanji"
                  showLearning={false}
                  isLearningPath={true}
                />
              </div>
            </SSRMediaQuery>

            {/* Grammar Section */}
            <div class="space-y-3">
              <h3 class="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
                Detected Grammar Patterns
              </h3>
              <Show when={props.uiData?.grammar.items.length! > 0}>
                <ImportAccordion
                  sub={props.uiData!.grammar}
                  selectedIds={flow.selectedIds()}
                  itemStates={flow.itemStates()}
                  initialItemStates={flow.initialItemStates()}
                  onItemClick={flow.handleItemClick}
                  onGroupToggle={flow.toggleSelectGroup}
                  onPointerDown={flow.handlePointerDown}
                  onUndoItem={(id) => flow.updateItemStatus(id, flow.initialItemStates()[id])}
                />
              </Show>
            </div>

            {/* Vocabulary Section */}
            <div class="space-y-3">
              <h3 class="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
                Detected Vocabulary
              </h3>
              <Show when={props.uiData?.vocabulary.items.length! > 0}>
                <ImportAccordion
                  sub={props.uiData!.vocabulary}
                  selectedIds={flow.selectedIds()}
                  itemStates={flow.itemStates()}
                  initialItemStates={flow.initialItemStates()}
                  onItemClick={flow.handleItemClick}
                  onGroupToggle={flow.toggleSelectGroup}
                  onPointerDown={flow.handlePointerDown}
                  onUndoItem={(id) => flow.updateItemStatus(id, flow.initialItemStates()[id])}
                />
              </Show>
            </div>

            {/* Kanji Section */}
            <div class="space-y-3">
              <h3 class="text-muted-foreground text-sm font-semibold tracking-wider uppercase">
                Detected Kanji
              </h3>
              <Show when={props.uiData?.kanji.items.length! > 0}>
                <ImportAccordion
                  sub={props.uiData!.kanji}
                  selectedIds={flow.selectedIds()}
                  itemStates={flow.itemStates()}
                  initialItemStates={flow.initialItemStates()}
                  onItemClick={flow.handleItemClick}
                  onGroupToggle={flow.toggleSelectGroup}
                  onPointerDown={flow.handlePointerDown}
                  onUndoItem={(id) => flow.updateItemStatus(id, flow.initialItemStates()[id])}
                />
              </Show>
            </div>

            <EndOfListIndicator />
          </main>
        </div>

        {/* --- RIGHT: SIDEBAR --- */}
        <SSRMediaQuery showFrom="lg">
          <aside class="space-y-5 lg:col-span-5 xl:col-span-4">
            {/* Inputs (desktop) - scroll away */}
            <LearningPathFormFields
              pathName={props.pathName}
              setPathName={props.setPathName}
              showName={props.showName}
              setShowName={props.setShowName}
              episodeName={props.episodeName}
              setEpisodeName={props.setEpisodeName}
              textbookId={props.textbookId}
              setTextbookId={props.setTextbookId}
              inputClass="w-full rounded border border-white/10 bg-neutral-900/50 px-3 py-2 text-foreground placeholder-muted-foreground text-sm"
            />

            {/* Sticky container for summary, shortcuts, and save button */}
            <div class="space-y-2 lg:sticky lg:top-24">
              {/* Statistics Summary Component */}
              <StatisticsSummary
                itemStates={flow.itemStates()}
                itemsPromise={grammarStatPromise}
                title="Grammar"
                showLearning={false}
                isLearningPath={true}
              />
              <StatisticsSummary
                itemStates={flow.itemStates()}
                itemsPromise={vocabStatPromise}
                title="Vocabulary"
                showLearning={false}
                isLearningPath={true}
              />
              <StatisticsSummary
                itemStates={flow.itemStates()}
                itemsPromise={kanjiStatPromise}
                title="Kanji"
                showLearning={false}
                isLearningPath={true}
              />

              <div class="my-3">
                <KeyboardShortcutsHint />
              </div>

              <ImportActionButtonDesktop
                onClick={props.onSave}
                variant="learning-path"
                label="Save Learning Path"
              />
            </div>
          </aside>
        </SSRMediaQuery>
      </div>

      {/* Mobile Save Button */}
      <SSRMediaQuery hideFrom="lg">
        <ImportActionButtonMobile
          onClick={props.onSave}
          variant="learning-path"
          label="Save Learning Path"
        />
      </SSRMediaQuery>

      {/* Error message */}
      <Show when={props.error}>
        <div class="fixed right-4 bottom-4 left-4 rounded border border-red-500/20 bg-red-500/10 p-4 text-red-400">
          <p class="font-semibold">Error:</p>
          <p class="mt-1 text-sm">{props.error}</p>
        </div>
      </Show>
    </div>
  )
}
