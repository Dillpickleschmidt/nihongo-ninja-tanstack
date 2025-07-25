// featuers/vocab-page/DesktopVocabPage.tsx
import { CollapsiblePanel } from "./CollapsiblePanel"
import { BuiltInDecksPanel } from "./BuiltInDecksPanel"
import { UserDecksPanel } from "./UserDecksPanel"
import { CenterPanel } from "./center-panel/CenterPanel"
import { useVocabPageState } from "./useVocabPageState"

export function DesktopVocabPage() {
  const state = useVocabPageState()

  const handleUserDecksPanelClick = () => {
    if (state.selectedUserDeck()) {
      state.deselectUserDeck()
    }
  }

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
        onClick={handleUserDecksPanelClick}
      >
        <UserDecksPanel
          userDecks={state.userDecks()}
          onPlayDeck={() => {}}
          newlyImportedDecks={state.newlyImportedDecks()}
          selectedUserDeck={state.selectedUserDeck()}
          onSelectDeck={state.selectUserDeck}
          onDeselectDeck={state.deselectUserDeck}
        />
      </CollapsiblePanel>
    </div>
  )
}
