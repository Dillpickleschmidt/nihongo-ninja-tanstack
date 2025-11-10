// features/vocab-page/layout/VocabLayout.tsx
import { createSignal, Suspense } from "solid-js"
import { Outlet, useLocation } from "@tanstack/solid-router"
import { CollapsiblePanel } from "../shared/CollapsiblePanel"
import { VocabRightPanel } from "../right-panel/VocabRightPanel"
import { FolderEditModal } from "../shared/components/FolderEditModal"
import { DeckCopyModal } from "../shared/components/DeckCopyModal"
import { useEditOperations } from "../hooks/useEditOperations"
import { useVocabPageContext } from "./VocabPageProvider"
import { getVocabForDeck } from "@/features/supabase/db/deck"
import type { DeckCreationInitialData } from "../pages/create/stores/deck-creation-store"
import type { EditTransaction } from "../logic/edit-transaction"
import { copyDeck } from "@/features/vocab-page/utils/deckCopyUtils"
import { Sidebar } from "../../homepage/shared/components/Sidebar"
import { CenterNavBar } from "./CenterNavBar"
import type { User } from "@supabase/supabase-js"

interface VocabLayoutProps {
  user: User | null
}

export function VocabLayout(props: VocabLayoutProps) {
  const state = useVocabPageContext()
  const location = useLocation()

  // Determine if we're on the main /vocab route (hide sidebar there)
  const isMainVocabRoute = () => {
    const path = location().pathname
    return path === "/vocab" || path === "/vocab/"
  }

  // Edit operations management
  const editOperations = useEditOperations({
    folders: state.folders,
    userDecks: state.userDecks,
    shareStatus: state.shareStatus,
    setUserData: state.setUserData,
    refetchFoldersAndDecks: state.refetchFoldersAndDecks,
    user: props.user,
  })

  let rightPanelRef!: HTMLDivElement

  // Edit modal state
  const [folderEditModalOpen, setFolderEditModalOpen] = createSignal(false)
  const [editingFolder, setEditingFolder] = createSignal<DeckFolder | null>(
    null,
  )

  // Copy modal state
  const [copyModalOpen, setCopyModalOpen] = createSignal(false)
  const [copyingDeck, setCopyingDeck] = createSignal<UserDeck | null>(null)

  // Edit handlers
  const handleEditDeck = async (deck: UserDeck) => {
    try {
      // Load vocabulary items for the deck
      const vocabItems = await getVocabForDeck(deck.deck_id)

      // Find folder information
      const folder = state.folders().find((f) => f.folder_id === deck.folder_id)

      // Prepare initial data for editing
      const initialData: DeckCreationInitialData = {
        deckId: deck.deck_id,
        name: deck.deck_name,
        description: deck.deck_description || "",
        folderId: deck.folder_id ? deck.folder_id.toString() : "root",
        folderName: folder?.folder_name || "Root",
        vocabItems: vocabItems,
      }

      // Store edit data and navigate to create page
      // This will be accessed by the create route
      // For now, we'll use sessionStorage as a temporary solution
      sessionStorage.setItem("vocabPageDeckEdit", JSON.stringify(initialData))

      // Navigate to create page
      window.location.hash = "#/vocab/create"
    } catch (error) {
      console.error("Failed to load deck data for editing:", error)
    }
  }

  const handleEditFolder = (folder: DeckFolder) => {
    setEditingFolder(folder)
    setFolderEditModalOpen(true)
  }

  const handleCloseFolderEditModal = () => {
    setFolderEditModalOpen(false)
    setEditingFolder(null)
  }

  const handleSaveFolderEdit = (transaction: EditTransaction) => {
    editOperations.executeEdit(transaction)
    handleCloseFolderEditModal()
  }

  // Copy deck modal handlers
  const handleOpenCopyModal = (deck: UserDeck) => {
    setCopyingDeck(deck)
    setCopyModalOpen(true)
  }

  const handleCloseCopyModal = () => {
    setCopyModalOpen(false)
    setCopyingDeck(null)
  }

  // Copy deck handler
  const handleCopyDeck = async (
    deck: UserDeck,
    newName: string,
    targetFolderId: string,
  ) => {
    if (!props.user) {
      alert("Copying decks requires authentication")
      return
    }

    try {
      await copyDeck({
        sourceDeck: deck,
        newName,
        targetFolderId,
        userId: props.user.id,
      })

      // Refetch to show the new deck
      state.refetchFoldersAndDecks()
    } catch (error) {
      console.error("Failed to copy deck:", error)
      alert(
        `Failed to copy deck: ${error instanceof Error ? error.message : "Unknown error"}`,
      )
    }
  }

  // Delete deck handler
  const handleDeleteDeck = async (deck: UserDeck) => {
    editOperations.deleteDeck(deck.deck_id)
  }

  return (
    <div class="grid grid-cols-[auto_1fr] md:grid-cols-[18rem_1fr_24rem]">
      <div class="sticky top-0 z-20 -mt-16 self-start">
        <Sidebar user={props.user?.id || null} />
      </div>
      <div id="tour-vocab-center" class="relative z-0 w-full">
        <div class="flex h-[calc(100vh-65px)] flex-col overflow-y-auto">
          <CenterNavBar />
          <div class="flex flex-1 items-center justify-center px-8">
            <Suspense>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>

      {/* Right panel — learning path chapters + user decks (always reserves space) */}
      <div
        id="tour-user-panel"
        class={`hidden h-[calc(100vh-65px)] md:block ${isMainVocabRoute() ? "pointer-events-none invisible" : ""}`}
      >
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
            onEditDeck={handleEditDeck}
            onEditFolder={handleEditFolder}
            onDeleteFolder={handleSaveFolderEdit}
            onRenameDeck={(deck, newName) => {
              editOperations.editDeck(deck.deck_id, { name: newName })
            }}
            onMoveDeck={(deck, targetFolderId) => {
              const folderId =
                targetFolderId === "root" ? null : parseInt(targetFolderId)
              editOperations.editDeck(deck.deck_id, { folderId })
            }}
            onCopyDeck={handleOpenCopyModal}
            onDeleteDeck={handleDeleteDeck}
            onRefetch={state.refetchFoldersAndDecks}
            userId={props.user?.id}
            panelRef={rightPanelRef}
          />
        </CollapsiblePanel>
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
