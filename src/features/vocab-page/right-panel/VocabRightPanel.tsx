// features/vocab-page/right-panel/VocabRightPanel.tsx
import { createSignal, Show, For } from "solid-js"
import { useNavigate } from "@tanstack/solid-router"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { allLearningPathsQueryOptions } from "@/query/query-options"
import { DeckCard } from "./DeckCard"
import { CollapsibleSection } from "../shared/CollapsibleSection"
import { BookOpen, Folder, Plus } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { cn } from "@/utils"
import { EditTransaction } from "@/features/vocab-page/logic/edit-transaction"
import {
  filterVocabPracticeModules,
  transformModuleToDeckLike,
} from "../utils/learningPathToDeckAdapter"
import { CreateModal } from "../shared/components/CreateModal"
import { createFolderServerFn } from "@/features/supabase/db/folder"
import { validateFolderNameUnique } from "../validation/deck-folder-validation"
import { validateName } from "../validation/common"

interface VocabRightPanelProps {
  userDecks: UserDeck[]
  folders: DeckFolder[]
  shareStatus: Record<number, boolean>
  onShareStatusChange: () => void

  onPlayDeck: (deck: UserDeck) => void
  selectedUserDeck: UserDeck | null
  onSelectDeck: (deck: UserDeck) => void
  onDeselectDeck: () => void
  onEditDeck: (deck: UserDeck) => void
  onEditFolder: (folder: DeckFolder) => void
  onDeleteFolder: (transaction: EditTransaction) => void
  onRenameDeck: (deck: UserDeck, newName: string) => void
  onMoveDeck: (deck: UserDeck, targetFolderId: string) => void
  onCopyDeck?: (deck: UserDeck) => void
  onDeleteDeck?: (deck: UserDeck) => void
  onRefetch?: () => void
  userId?: string
  panelRef?: HTMLDivElement
}

export function VocabRightPanel(props: VocabRightPanelProps) {
  const navigate = useNavigate()
  // Fetch learning paths
  const learningPathsQuery = useCustomQuery(() =>
    allLearningPathsQueryOptions(props.userId || null),
  )

  // Expansion state for all sections (chapters, folders, learning paths)
  const [expandedSections, setExpandedSections] = createSignal<Set<string>>(
    new Set(),
  )

  // Create modal state
  const [showCreateModal, setShowCreateModal] = createSignal(false)

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections())
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId)
    } else {
      newExpanded.add(sectionId)
    }
    setExpandedSections(newExpanded)
  }

  const handleCreateFolder = async () => {
    const folderName = window.prompt("Enter folder name:")
    if (!folderName?.trim()) return

    const nameValidation = validateName(folderName)
    if (!nameValidation.isValid) {
      alert(nameValidation.error)
      return
    }

    const uniqueValidation = validateFolderNameUnique(
      folderName,
      null,
      props.folders,
    )
    if (!uniqueValidation.isValid) {
      alert(uniqueValidation.error)
      return
    }

    try {
      await createFolderServerFn({
        data: { folder_name: folderName, parent_folder_id: null },
      })
      props.onRefetch?.()
    } catch (error) {
      alert(
        `Failed to create folder: ${error instanceof Error ? error.message : "Unknown error"}`,
      )
    }
  }

  return (
    <>
      <div class="space-y-4 pb-24">
        {/* All Learning Paths with their Chapters */}
        <Show
          when={
            !learningPathsQuery.isPending &&
            !learningPathsQuery.isError &&
            learningPathsQuery.data &&
            learningPathsQuery.data.length > 0
          }
        >
          <div class="mb-6 space-y-2">
            <For each={learningPathsQuery.data}>
              {(path) => (
                <CollapsibleSection
                  title={path.short_name}
                  icon={BookOpen}
                  isExpanded={expandedSections().has(`path-${path.id}`)}
                  onToggle={() => toggleSection(`path-${path.id}`)}
                >
                  <div class="space-y-2">
                    <For each={path.chapters}>
                      {(chapter) => (
                        <CollapsibleSection
                          title={chapter.title}
                          isExpanded={expandedSections().has(
                            `chapter-${chapter.slug}`,
                          )}
                          onToggle={() =>
                            toggleSection(`chapter-${chapter.slug}`)
                          }
                        >
                          <div class="space-y-2">
                            <For
                              each={filterVocabPracticeModules(
                                chapter,
                                props.userDecks,
                              )}
                            >
                              {(item) => (
                                <DeckCard
                                  deck={
                                    "module" in item
                                      ? transformModuleToDeckLike(
                                          item.moduleId,
                                          item.module,
                                        )
                                      : item.deck
                                  }
                                  onPlay={() => {}}
                                  onSelect={props.onSelectDeck}
                                  isSelected={
                                    props.selectedUserDeck?.deck_id ===
                                    item.moduleId
                                  }
                                  userId={props.userId}
                                  class="deck-card"
                                />
                              )}
                            </For>
                          </div>
                        </CollapsibleSection>
                      )}
                    </For>
                  </div>
                </CollapsibleSection>
              )}
            </For>
          </div>
        </Show>

        {/* User Decks Section */}
        <CollapsibleSection
          title="User Decks"
          icon={Folder}
          isExpanded={expandedSections().has("user-decks")}
          onToggle={() => toggleSection("user-decks")}
        >
          <div class="space-y-2">
            {/* User Folders */}
            <For
              each={props.folders.filter((f) => f.parent_folder_id === null)}
            >
              {(folder) => (
                <CollapsibleSection
                  title={folder.folder_name}
                  isExpanded={expandedSections().has(
                    `folder-${folder.folder_id}`,
                  )}
                  onToggle={() => toggleSection(`folder-${folder.folder_id}`)}
                >
                  <div class="space-y-2">
                    <For
                      each={props.userDecks.filter(
                        (d) =>
                          d.folder_id === folder.folder_id &&
                          d.source !== "learning_path",
                      )}
                    >
                      {(deck) => (
                        <DeckCard
                          deck={deck}
                          onPlay={props.onPlayDeck}
                          isSelected={
                            props.selectedUserDeck?.deck_id === deck.deck_id
                          }
                          onSelect={props.onSelectDeck}
                          onEdit={props.onEditDeck}
                          folders={props.folders}
                          onRename={props.onRenameDeck}
                          onMove={props.onMoveDeck}
                          onCopy={props.onCopyDeck}
                          onDelete={props.onDeleteDeck}
                          userId={props.userId}
                          isShared={!!props.shareStatus[deck.deck_id]}
                          onShareStatusChange={props.onShareStatusChange}
                          class="deck-card"
                        />
                      )}
                    </For>
                  </div>
                </CollapsibleSection>
              )}
            </For>

            {/* Root-level User Decks (not in any folder) */}
            <For
              each={props.userDecks.filter(
                (d) => !d.folder_id && d.source !== "learning_path",
              )}
            >
              {(deck) => (
                <DeckCard
                  deck={deck}
                  onPlay={props.onPlayDeck}
                  isSelected={props.selectedUserDeck?.deck_id === deck.deck_id}
                  onSelect={props.onSelectDeck}
                  onEdit={props.onEditDeck}
                  folders={props.folders}
                  onRename={props.onRenameDeck}
                  onMove={props.onMoveDeck}
                  onCopy={props.onCopyDeck}
                  onDelete={props.onDeleteDeck}
                  userId={props.userId}
                  isShared={!!props.shareStatus[deck.deck_id]}
                  onShareStatusChange={props.onShareStatusChange}
                  class="deck-card"
                />
              )}
            </For>
          </div>
        </CollapsibleSection>
      </div>

      {/* Create New Button - positioned at bottom right, above instruction bar */}
      <div class="absolute right-4 bottom-12 z-20">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowCreateModal(true)}
          class="bg-background/80 border-card-foreground/70 text-primary/90 gap-2 shadow-lg backdrop-blur-md"
        >
          <Plus class="h-4 w-4" />
          Create New
        </Button>
      </div>

      {/* Instruction bar at bottom */}
      <div
        class={cn(
          "absolute right-0 bottom-0 z-10 w-96 px-4 py-2.5",
          "bg-background/60 border-card-foreground/70 border-t backdrop-blur-md",
        )}
      >
        <p class="text-muted-foreground text-center text-xs italic">
          Click on a deck to view it. Start practicing when you're ready.
        </p>
      </div>

      {/* Create Modal */}
      <CreateModal
        isOpen={showCreateModal()}
        onOpenChange={setShowCreateModal}
        onCreateDeck={() => {
          setShowCreateModal(false)
          navigate({ to: "/vocab/create" })
        }}
        onCreateFolder={() => {
          setShowCreateModal(false)
          handleCreateFolder()
        }}
      />
    </>
  )
}
