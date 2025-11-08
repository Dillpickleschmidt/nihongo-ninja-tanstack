// featuers/vocab-page/DesktopVocabPage.tsx
import { createSignal } from "solid-js"
import { CollapsiblePanel } from "./shared/CollapsiblePanel"
import { VocabRightPanel } from "./right-panel/VocabRightPanel"
import { CenterPanel } from "./center-panel/CenterPanel"
import { FolderEditModal } from "./components/FolderEditModal"
import { DeckCopyModal } from "./components/DeckCopyModal"
import { useVocabPageState } from "./hooks/useVocabPageState"
import { useEditOperations } from "./hooks/useEditOperations"
import type { FoldersAndDecksData } from "@/features/supabase/db/folder"
import { getVocabForDeck } from "@/features/supabase/db/deck"
import type { User } from "@supabase/supabase-js"
import type { DeckCreationInitialData } from "./deck-creation/stores/deck-creation-store"
import { copyDeck } from "@/features/vocab-page/utils/deckCopyUtils"
import { TextbookChapterBackgrounds } from "../learn-page/components/shared/TextbookChapterBackgrounds"
import { ModuleTypesList } from "../learn-page/components/shared/ModuleTypesList"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { userSettingsQueryOptions } from "@/query/query-options"

interface DesktopVocabPageProps {
  foldersAndDecksPromise: Promise<FoldersAndDecksData>
  user: User | null
}

export function DesktopVocabPage(props: DesktopVocabPageProps) {
  const state = useVocabPageState(props.foldersAndDecksPromise, props.user)

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
  let leftPanelRef!: HTMLDivElement

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
    // All deck IDs are now strings from the database, so use them directly
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
    <div class="flex h-screen">
      <div class="absolute inset-0">
        <TextbookChapterBackgrounds
          textbook={state.activeLearningPathId()}
          chapter={state.activeChapter()}
          showGradient={false}
          blur="6px"
        />
      </div>

      {/* Left panel - module types navigation */}
      <div id="tour-modules" class="h-[calc(100vh-65px)]">
        <CollapsiblePanel
          isOpen={state.leftPanelOpen()}
          onToggle={() => state.setLeftPanelOpen(!state.leftPanelOpen())}
          position="left"
          ref={leftPanelRef}
        >
          <ModuleTypesList />
        </CollapsiblePanel>
      </div>

      {/* Center panel — faint orange and neutral vignette */}
      <div id="tour-vocab-center" class="relative z-0 w-full">
        <div class="absolute inset-0 -z-1" />
        <CenterPanel
          selectedUserDeck={state.selectedUserDeck()}
          activeNavTab={state.activeNavTab()}
          onNavTabChange={handleTabChange}
          folders={state.folders()}
          decks={state.userDecks()}
          deckEditData={deckEditData()}
          onRefetch={() => state.refetchFoldersAndDecks() as Promise<void>}
          onNavigateToDeck={state.handleDeckSelect}
          user={props.user}
        />
      </div>

      {/* Right panel — learning path chapters + user decks */}
      <div id="tour-user-panel" class="h-[calc(100vh-65px)]">
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
            newlyImportedDecks={state.newlyImportedDecks()}
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
            onTabChange={handleTabChange}
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
