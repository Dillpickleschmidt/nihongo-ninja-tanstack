// features/vocab-page/layout/VocabLayout.tsx
import { Show, Suspense } from "solid-js"
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

  const showVocabRightPanel = () => {
    const path = location().pathname
    return (
      path.startsWith("/vocab/create") ||
      path.startsWith("/vocab/browse") ||
      path.startsWith("/vocab/settings")
    )
  }

  let rightPanelRef!: HTMLDivElement

  // Modal handlers (wrap context handlers to close modal after execution)
  const handleSaveFolderEdit = (transaction: EditTransaction) => {
    state.handleSaveFolderEdit(transaction)
    state.setEditingFolder(null)
  }

  const handleCopyDeck = async (
    deck: UserDeck,
    newName: string,
    targetFolderId: string,
  ) => {
    await state.handleCopyDeck(deck, newName, targetFolderId)
    state.setCopyingDeck(null)
  }

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
              onPlayDeck={() => {}}
              selectedUserDeck={state.selectedUserDeck()}
              onSelectDeck={state.handleSelectDeck}
              onDeselectDeck={state.handleDeselectDeck}
              onRefetch={state.refetchFoldersAndDecks}
              userId={props.user?.id}
              panelRef={rightPanelRef}
            />
          </CollapsiblePanel>
        </Show>
      </div>

      <FolderEditModal
        folder={state.editingFolder()}
        isOpen={state.editingFolder() !== null}
        folders={state.folders()}
        decks={state.userDecks()}
        onClose={() => state.setEditingFolder(null)}
        onSave={handleSaveFolderEdit}
        onDelete={handleSaveFolderEdit}
      />

      <DeckCopyModal
        deck={state.copyingDeck()}
        isOpen={state.copyingDeck() !== null}
        folders={state.folders()}
        decks={state.userDecks()}
        onClose={() => state.setCopyingDeck(null)}
        onCopy={handleCopyDeck}
      />
    </div>
  )
}
