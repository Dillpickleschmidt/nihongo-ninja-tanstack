import { Show } from "solid-js"
import { SSRMediaQuery } from "@/components/SSRMediaQuery"
import { ImportAccordion } from "@/features/import-page/shared/components/ImportAccordion"
import { StatisticsSummary } from "@/features/import-page/shared/components/StatisticsSummary"
import { KeyboardShortcutsHint } from "@/features/import-page/shared/components/KeyboardShortcutsHint"
import { ImportActionButtonDesktop, ImportActionButtonMobile } from "@/features/import-page/shared/components/ImportActionButton"
import { EndOfListIndicator } from "@/features/import-page/shared/components/EndOfListIndicator"
import { LearningPathFormFields } from "./LearningPathFormFields"
import type { TextbookIDEnum } from "@/data/types"
import type { transformModulesToUIFormat } from "@/features/learning-paths/ui-adapter"

interface LearningPathResultsViewProps {
  uiData: ReturnType<typeof transformModulesToUIFormat> | null
  displayCategories: any[]
  itemStates: any
  selectedIds: Set<string>
  handleItemClick: any
  handlePointerDown: any
  toggleSelectGroup: any
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
  return (
    <div>
      {/* Mobile inputs - appear at very top on mobile */}
      <SSRMediaQuery hideFrom="lg">
        <div class="space-y-4 mb-8">
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
            <h1 class="text-2xl lg:text-3xl mb-4 font-semibold text-muted-foreground">
              Here's what we found.
            </h1>

            {/* Mobile Aggregated Statistics */}
            <SSRMediaQuery hideFrom="lg">
              <div class="space-y-2">
                <StatisticsSummary
                  itemStates={props.itemStates}
                  categories={props.displayCategories}
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
                  selectedIds={props.selectedIds}
                  itemStates={props.itemStates}
                  onItemClick={props.handleItemClick}
                  onGroupToggle={props.toggleSelectGroup}
                  onPointerDown={props.handlePointerDown}
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
                  selectedIds={props.selectedIds}
                  itemStates={props.itemStates}
                  onItemClick={props.handleItemClick}
                  onGroupToggle={props.toggleSelectGroup}
                  onPointerDown={props.handlePointerDown}
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
                  selectedIds={props.selectedIds}
                  itemStates={props.itemStates}
                  onItemClick={props.handleItemClick}
                  onGroupToggle={props.toggleSelectGroup}
                  onPointerDown={props.handlePointerDown}
                />
              </Show>
            </div>

            <EndOfListIndicator />
          </main>
        </div>

        {/* --- RIGHT: SIDEBAR --- */}
        <SSRMediaQuery showFrom="lg">
          <aside class="lg:col-span-5 xl:col-span-4 space-y-5">
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
            <div class="lg:sticky lg:top-24 space-y-2">
              {/* Statistics Summary Component */}
              <StatisticsSummary
                itemStates={props.itemStates}
                categories={props.displayCategories}
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
        <div class="fixed bottom-4 left-4 right-4 rounded bg-red-500/10 p-4 border border-red-500/20 text-red-400">
          <p class="font-semibold">Error:</p>
          <p class="text-sm mt-1">{props.error}</p>
        </div>
      </Show>
    </div>
  )
}
