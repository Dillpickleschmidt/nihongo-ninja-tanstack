// featuers/vocab-page/DesktopVocabPage.tsx
import type { DeferredPromise } from "@tanstack/solid-router"
import { createSignal } from "solid-js"
import { CollapsiblePanel } from "./shared/CollapsiblePanel"
import { BuiltInDecksPanel } from "./built-in-panel/BuiltInDecksPanel"
import { UserDecksPanel } from "./user-panel/UserDecksPanel"
import { CenterPanel } from "./center-panel/CenterPanel"
import { ImportConfirmationModal } from "./shared/ImportConfirmationModal"
import { EditModal } from "./components/EditModal"
import { useVocabPageState } from "./hooks/useVocabPageState"
import type { ImportRequest, VocabTextbook } from "./types"
import type { TextbookIDEnum } from "@/data/types"
import type { FoldersAndDecksData } from "@/features/supabase/db/folder-operations"
import type { User } from "@supabase/supabase-js"

interface DesktopVocabPageProps {
  importRequest?: ImportRequest | null
  textbooks: [TextbookIDEnum, VocabTextbook][]
  foldersAndDecksPromise: DeferredPromise<FoldersAndDecksData>
  user: User | null
}

export function DesktopVocabPage(props: DesktopVocabPageProps) {
  const state = useVocabPageState(
    props.importRequest,
    props.textbooks,
    props.foldersAndDecksPromise,
    props.user,
  )
  let userDecksPanelRef!: HTMLDivElement

  // Edit modal state
  const [editModalOpen, setEditModalOpen] = createSignal(false)
  const [editingItem, setEditingItem] = createSignal<
    UserDeck | DeckFolder | null
  >(null)

  // Edit handlers
  const handleEditDeck = (deck: UserDeck) => {
    setEditingItem(deck)
    setEditModalOpen(true)
  }

  const handleEditFolder = (folder: DeckFolder) => {
    setEditingItem(folder)
    setEditModalOpen(true)
  }

  const handleCloseEditModal = () => {
    setEditModalOpen(false)
    setEditingItem(null)
  }

  const handleSaveEdit = (transaction: any) => {
    state.executeEdit(transaction)
    handleCloseEditModal()
  }

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
      <CenterPanel
        selectedUserDeck={state.selectedUserDeck()}
        activeNavTab={state.activeNavTab()}
        onNavTabChange={state.handleTabChange}
        folders={state.folders()}
        decks={state.userDecks()}
      />
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
            folders={state.folders()}
            folderNavigation={state.folderNavigation}
            onPlayDeck={() => {}}
            newlyImportedDecks={state.newlyImportedDecks()}
            selectedUserDeck={state.selectedUserDeck()}
            onSelectDeck={state.handleDeckSelect}
            onDeselectDeck={state.handleDeckDeselect}
            onEditDeck={handleEditDeck}
            onEditFolder={handleEditFolder}
            panelRef={userDecksPanelRef}
          />
        </CollapsiblePanel>
      </div>

      <ImportConfirmationModal
        isOpen={state.showImportModal()}
        onClose={state.handleImportCancel}
        onConfirm={state.handleImportConfirm}
        deckTitle={state.pendingImportDeck()?.title ?? ""}
      />

      <EditModal
        item={editingItem()}
        isOpen={editModalOpen()}
        folders={state.folders()}
        decks={state.userDecks()}
        onClose={handleCloseEditModal}
        onSave={handleSaveEdit}
        onDelete={handleSaveEdit}
      />
    </div>
  )
}
