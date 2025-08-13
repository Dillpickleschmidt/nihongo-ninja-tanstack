// featuers/vocab-page/DesktopVocabPage.tsx
import type { DeferredPromise } from "@tanstack/solid-router"
import { createSignal } from "solid-js"
import { CollapsiblePanel } from "./shared/CollapsiblePanel"
import { BuiltInDecksPanel } from "./built-in-panel/BuiltInDecksPanel"
import { UserDecksPanel } from "./user-panel/UserDecksPanel"
import { CenterPanel } from "./center-panel/CenterPanel"
import { ImportConfirmationModal } from "./shared/ImportConfirmationModal"
import { FolderEditModal } from "./components/FolderEditModal"
import { DeckCopyModal } from "./components/DeckCopyModal"
import { useVocabPageState } from "./hooks/useVocabPageState"
import { useImportModal } from "./hooks/useImportModal"
import { useEditOperations } from "./hooks/useEditOperations"
import type { ImportRequest, VocabTextbook } from "./types"
import type { TextbookIDEnum } from "@/data/types"
import type { FoldersAndDecksData } from "@/features/supabase/db/folder-operations"
import {
  getVocabForDeck,
  getDeckIdByOriginalIdServerFn,
} from "@/features/supabase/db/deck-operations"
import type { User } from "@supabase/supabase-js"
import type { DeckCreationInitialData } from "./deck-creation/stores/deck-creation-store"
import { copyDeck } from "@/features/vocab-page/utils/deckCopyUtils"

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
    setLocalFolders: state.setFolderData,
    setLocalDecks: state.setDeckData,
    refetchFoldersAndDecks: state.refetchFoldersAndDecks,
    user: props.user,
  })
  let userDecksPanelRef!: HTMLDivElement
  let builtInDecksPanelRef!: HTMLDivElement

  // Edit modal state
  const [folderEditModalOpen, setFolderEditModalOpen] = createSignal(false)
  const [editingFolder, setEditingFolder] = createSignal<DeckFolder | null>(
    null,
  )

  // Copy modal state
  const [copyModalOpen, setCopyModalOpen] = createSignal(false)
  const [copyingDeck, setCopyingDeck] = createSignal<UserDeck | null>(null)

  // Deck edit state for center panel
  const [deckEditData, setDeckEditData] =
    createSignal<DeckCreationInitialData | null>(null)

  // Edit handlers
  const handleEditDeck = async (deck: UserDeck) => {
    // Prevent editing of built-in decks
    if (deck.source === "built-in") {
      // Built-in decks cannot be edited because they use static vocabulary data
      // Users should copy the deck first to create an editable version
      return
    }

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

      // Set edit data and switch to deck-builder tab
      setDeckEditData(initialData)
      state.handleTabChange("deck-builder")
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

  const handleSaveFolderEdit = (transaction: any) => {
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
    // For built-in decks with temp IDs, get the real deck_id from database
    if (
      deck.deck_id < 0 &&
      deck.source === "built-in" &&
      deck.original_deck_id
    ) {
      try {
        const realDeckId = await getDeckIdByOriginalIdServerFn({
          data: { original_deck_id: deck.original_deck_id },
        })
        editOperations.deleteDeck(realDeckId)
        return
      } catch (error) {
        alert("Deck is still syncing. Please wait a moment and try again.")
        return
      }
    }

    // Original logic for normal decks
    editOperations.deleteDeck(deck.deck_id)
  }

  // Enhanced tab change handler to clear edit data
  const handleTabChange = (tabId: any) => {
    // Clear deck edit data when leaving deck-builder
    if (state.activeNavTab() === "deck-builder" && tabId !== "deck-builder") {
      setDeckEditData(null)
    }
    state.handleTabChange(tabId)
  }

  return (
    <div class="bg-background flex h-screen">
      {/* Left panel — subtle gradient */}
      <div class="h-[calc(100vh-65px)] bg-[radial-gradient(1400px_900px_at_8%_6%,theme(colors.orange.300/5%),transparent_60%),radial-gradient(320px_200px_at_92%_98%,theme(colors.sky.400/1.5%),transparent_82%),linear-gradient(to_bottom,theme(colors.black/0%)_0%,theme(colors.black/3%)_100%)]">
        <CollapsiblePanel
          title="Built-in Decks"
          isOpen={state.leftPanelOpen()}
          onToggle={() => state.setLeftPanelOpen(!state.leftPanelOpen())}
          position="left"
          ref={builtInDecksPanelRef!}
        >
          <BuiltInDecksPanel
            textbooks={state.textbooks()}
            expandedTextbooks={state.expandedTextbooks()}
            expandedChapters={state.expandedChapters()}
            onToggleTextbook={state.toggleTextbook}
            onToggleChapter={state.toggleChapter}
            onImportDeck={state.importDeck}
            onPlayDeck={() => {}}
            onSelectDeck={state.handleBuiltInDeckSelect}
            selectedBuiltInDeck={state.selectedBuiltInDeck()}
            onDeselect={state.handleDeckDeselect}
            panelRef={builtInDecksPanelRef}
          />
        </CollapsiblePanel>
      </div>

      {/* Center panel — faint orange and neutral vignette */}
      <div class="relative z-0 w-full">
        <div class="absolute inset-0 -z-1 bg-[radial-gradient(880px_640px_at_72%_78%,theme(colors.orange.300/2.5%),transparent_66%),radial-gradient(700px_540px_at_50%_44%,theme(colors.black/5%)_0%,transparent_72%)]" />
        <CenterPanel
          selectedUserDeck={state.selectedUserDeck()}
          selectedBuiltInDeck={state.selectedBuiltInDeck()}
          activeNavTab={state.activeNavTab()}
          onNavTabChange={handleTabChange}
          folders={state.folders()}
          decks={state.userDecks()}
          deckEditData={deckEditData()}
          onRefetch={() => state.refetchFoldersAndDecks() as Promise<void>}
          onNavigateToDeck={state.handleDeckSelect}
        />
      </div>

      {/* Right panel — same gradients as left */}
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
            currentViewFolderId={state.currentViewFolderId}
            viewBreadcrumbPath={state.viewBreadcrumbPath}
            currentViewContent={state.currentViewContent}
            canNavigateUp={state.canNavigateUp}
            setCurrentViewFolderId={state.setCurrentViewFolderId}
            navigateToParentView={state.navigateToParentView}
            onPlayDeck={() => {}}
            newlyImportedDecks={state.newlyImportedDecks()}
            selectedUserDeck={state.selectedUserDeck()}
            onSelectDeck={state.handleDeckSelect}
            onDeselectDeck={state.handleDeckDeselect}
            onEditDeck={handleEditDeck}
            onEditFolder={handleEditFolder}
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
