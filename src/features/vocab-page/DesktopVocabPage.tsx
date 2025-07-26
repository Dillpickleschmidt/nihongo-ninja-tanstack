// featuers/vocab-page/DesktopVocabPage.tsx
import { CollapsiblePanel } from "./CollapsiblePanel"
import { BuiltInDecksPanel } from "./BuiltInDecksPanel"
import { UserDecksPanel } from "./UserDecksPanel"
import { CenterPanel } from "./center-panel/CenterPanel"
import { ImportConfirmationModal } from "./ImportConfirmationModal"
import { useVocabPageState } from "./useVocabPageState"
import type { ImportRequest } from "./types"

interface DesktopVocabPageProps {
  importRequest?: ImportRequest | null
}

export function DesktopVocabPage(props: DesktopVocabPageProps) {
  const state = useVocabPageState(props.importRequest)
  let userDecksPanelRef!: HTMLDivElement

  return (
    <div class="bg-background flex h-screen">
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
      <CenterPanel selectedUserDeck={state.selectedUserDeck()} />
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

      <ImportConfirmationModal
        isOpen={state.showImportModal()}
        onClose={state.handleImportCancel}
        onConfirm={state.handleImportConfirm}
        deckTitle={state.pendingImportDeck()?.name || ""}
      />
    </div>
  )
}
