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
import { useImportModal } from "./hooks/useImportModal"
import { useEditOperations } from "./hooks/useEditOperations"
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

  // Import modal management
  const importModal = useImportModal(
    props.importRequest,
    state.importDeck,
    state.setLeftPanelOpen,
  )

  // Edit operations management
  const editOperations = useEditOperations({
    folders: state.folders,
    userDecks: state.userDecks,
    setLocalFolders: state.setLocalFolders,
    setLocalDecks: state.setLocalDecks,
    refetchFoldersAndDecks: state.refetchFoldersAndDecks,
    user: props.user,
  })
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
    editOperations.executeEdit(transaction)
    handleCloseEditModal()
  }

  return (
    <div class="bg-background flex h-screen">
      {/* Left panel — extremely soft hint */}
      <div class="h-[calc(100vh-65px)] bg-[radial-gradient(1400px_900px_at_8%_6%,theme(colors.orange.300/5%),transparent_60%),radial-gradient(320px_200px_at_92%_98%,theme(colors.sky.400/1.5%),transparent_82%),linear-gradient(to_bottom,theme(colors.black/0%)_0%,theme(colors.black/3%)_100%)]">
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

      {/* Center panel — faint orange and neutral vignette */}
      <div class="relative z-0 w-full">
        <div class="absolute inset-0 -z-1 bg-[radial-gradient(880px_640px_at_72%_78%,theme(colors.orange.300/2.5%),transparent_66%),radial-gradient(700px_540px_at_50%_44%,theme(colors.black/5%)_0%,transparent_72%)]" />
        <CenterPanel
          selectedUserDeck={state.selectedUserDeck()}
          activeNavTab={state.activeNavTab()}
          onNavTabChange={state.handleTabChange}
          folders={state.folders()}
          decks={state.userDecks()}
        />
      </div>

      {/* Right panel — same gradients as left (not mirrored) */}
      <div class="h-[calc(100vh-65px)] bg-[radial-gradient(1400px_900px_at_8%_6%,theme(colors.orange.300/5%),transparent_60%),radial-gradient(320px_200px_at_92%_98%,theme(colors.sky.400/1.5%),transparent_82%),linear-gradient(to_bottom,theme(colors.black/0%)_0%,theme(colors.black/3%)_100%)]">
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
        isOpen={importModal.showImportModal()}
        onClose={importModal.handleImportCancel}
        onConfirm={importModal.handleImportConfirm}
        deckTitle={importModal.pendingImportDeck()?.title ?? ""}
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
