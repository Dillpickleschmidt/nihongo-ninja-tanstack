// featuers/vocab-page/DesktopVocabPage.tsx
import { CollapsiblePanel } from "./shared/CollapsiblePanel"
import { BuiltInDecksPanel } from "./built-in-panel/BuiltInDecksPanel"
import { UserDecksPanel } from "./user-panel/UserDecksPanel"
import { CenterPanel } from "./center-panel/CenterPanel"
import { ImportConfirmationModal } from "./shared/ImportConfirmationModal"
import { useVocabPageState } from "./hooks/useVocabPageState"
import type { ImportRequest, VocabTextbook } from "./types"
import type { TextbookIDEnum } from "@/data/types"

interface DesktopVocabPageProps {
  importRequest?: ImportRequest | null
  textbooks: [TextbookIDEnum, VocabTextbook][]
}

export function DesktopVocabPage(props: DesktopVocabPageProps) {
  const state = useVocabPageState(props.importRequest, props.textbooks)
  let userDecksPanelRef!: HTMLDivElement

  return (
    <div class="bg-background flex h-screen">
      <div class="h-[calc(100vh-65px)]">
        <CollapsiblePanel
          title="Built-in Decks"
          isOpen={state.leftPanelOpen()}
          onToggle={() => state.setLeftPanelOpen(!state.leftPanelOpen())}
          position="left"
        >
          <BuiltInDecksPanel
            textbooks={state.textbooks()}
            expandedTextbooks={state.expandedTextbooks()}
            expandedChapters={state.expandedChapters()}
            onToggleTextbook={state.toggleTextbook}
            onToggleChapter={state.toggleChapter}
            onImportDeck={state.importDeck}
            onPlayDeck={() => {}}
          />
        </CollapsiblePanel>
      </div>
      <CenterPanel selectedUserDeck={state.selectedUserDeck()} />
      <div class="h-[calc(100vh-65px)]">
        <CollapsiblePanel
          title="Your Decks"
          isOpen={state.rightPanelOpen()}
          onToggle={() => state.setRightPanelOpen(!state.rightPanelOpen())}
          position="right"
          ref={userDecksPanelRef!}
        >
          <UserDecksPanel
            userDecks={state.userDecks()}
            onPlayDeck={() => {}}
            newlyImportedDecks={state.newlyImportedDecks()}
            selectedUserDeck={state.selectedUserDeck()}
            onSelectDeck={state.selectUserDeck}
            onDeselectDeck={state.deselectUserDeck}
            panelRef={userDecksPanelRef}
          />
        </CollapsiblePanel>
      </div>

      <ImportConfirmationModal
        isOpen={state.showImportModal()}
        onClose={state.handleImportCancel}
        onConfirm={state.handleImportConfirm}
        deckTitle={state.pendingImportDeck()?.title || ""}
      />
    </div>
  )
}
