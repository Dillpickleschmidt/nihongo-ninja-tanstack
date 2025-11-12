// features/vocab-page/layout/VocabLayout.tsx
import { createSignal, Show, Suspense, createEffect } from "solid-js"
import { Outlet, useLocation } from "@tanstack/solid-router"
import { CollapsiblePanel } from "../shared/CollapsiblePanel"
import { VocabRightPanel } from "../right-panel/VocabRightPanel"
import { PlaceholderSidebar } from "../pages/main/components/PlaceholderSidebar"
import { FolderEditModal } from "../shared/components/FolderEditModal"
import { DeckCopyModal } from "../shared/components/DeckCopyModal"
import { useVocabPageContext } from "./VocabPageContext"
import type { EditTransaction } from "../logic/edit-transaction"
import { Sidebar } from "../../homepage/shared/components/Sidebar"
import { CenterNavBar } from "./CenterNavBar"
import type { User } from "@supabase/supabase-js"

interface VocabLayoutProps {
  user: User | null
}

export function VocabLayout(props: VocabLayoutProps) {
  const state = useVocabPageContext()
  const location = useLocation()

  // Determine which sidebar to show
  const showVocabRightPanel = () => {
    const path = location().pathname
    return (
      path.startsWith("/vocab/create") ||
      path.startsWith("/vocab/browse") ||
      path.startsWith("/vocab/settings")
    )
  }

  let rightPanelRef!: HTMLDivElement

  // Folder edit modal state
  const [folderEditModalOpen, setFolderEditModalOpen] = createSignal(false)
  const [editingFolder, setEditingFolder] = createSignal<DeckFolder | null>(
    null,
  )

  // Copy modal state
  const [copyModalOpen, setCopyModalOpen] = createSignal(false)
  const [copyingDeck, setCopyingDeck] = createSignal<UserDeck | null>(null)

  // Local modal handlers
  const handleEditFolder = (folder: DeckFolder) => {
    setEditingFolder(folder)
    setFolderEditModalOpen(true)
  }

  const handleCloseFolderEditModal = () => {
    setFolderEditModalOpen(false)
    setEditingFolder(null)
  }

  const handleSaveFolderEdit = (transaction: EditTransaction) => {
    state.handleSaveFolderEdit(transaction)
    handleCloseFolderEditModal()
  }

  const handleOpenCopyModal = (deck: UserDeck) => {
    setCopyingDeck(deck)
    setCopyModalOpen(true)
  }

  const handleCloseCopyModal = () => {
    setCopyModalOpen(false)
    setCopyingDeck(null)
  }

  const handleCopyDeck = async (
    deck: UserDeck,
    newName: string,
    targetFolderId: string,
  ) => {
    await state.handleCopyDeck(deck, newName, targetFolderId)
    handleCloseCopyModal()
  }

  // Register modal opener handlers with context so child components can access them
  createEffect(() => {
    state.setFolderEditHandler(() => handleEditFolder)
    state.setDeckCopyHandler(() => handleOpenCopyModal)
  })

  return (
    <div class="grid grid-cols-[auto_1fr] md:grid-cols-[18rem_1fr_24rem]">
      <div class="sticky top-0 z-20 -mt-16 self-start">
        <Sidebar user={props.user?.id || null} />
      </div>
      <div id="tour-vocab-center" class="relative z-0 w-full">
        <div class="flex h-[calc(100vh-65px)] flex-col overflow-y-auto">
          <CenterNavBar />
          <div class="px-8 md:pt-12">
            <Suspense>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div id="tour-user-panel" class="hidden h-[calc(100vh-65px)] md:block">
        <Show when={showVocabRightPanel()} fallback={<PlaceholderSidebar />}>
          <CollapsiblePanel
            isOpen={state.rightPanelOpen()}
            onToggle={() => state.setRightPanelOpen(!state.rightPanelOpen())}
            position="right"
            title="Your Decks"
            description="Browse and manage your vocabulary decks. Click the practice button to start learning."
            ref={rightPanelRef}
          >
            <VocabRightPanel
              userDecks={state.userDecks()}
              folders={state.folders()}
              shareStatus={state.shareStatus()}
              onShareStatusChange={state.refetchFoldersAndDecks}
              onPlayDeck={() => {}}
              selectedUserDeck={state.selectedUserDeck()}
              onSelectDeck={state.handleDeckSelect}
              onDeselectDeck={state.handleDeckDeselect}
              onRefetch={state.refetchFoldersAndDecks}
              userId={props.user?.id}
              panelRef={rightPanelRef}
            />
          </CollapsiblePanel>
        </Show>
      </div>

      <FolderEditModal
        folder={editingFolder()}
        isOpen={folderEditModalOpen()}
        folders={state.folders()}
        decks={state.userDecks()}
        onClose={handleCloseFolderEditModal}
        onSave={handleSaveFolderEdit}
        onDelete={handleSaveFolderEdit}
      />

      <DeckCopyModal
        deck={copyingDeck()}
        isOpen={copyModalOpen()}
        folders={state.folders()}
        decks={state.userDecks()}
        onClose={handleCloseCopyModal}
        onCopy={handleCopyDeck}
      />
    </div>
  )
}
