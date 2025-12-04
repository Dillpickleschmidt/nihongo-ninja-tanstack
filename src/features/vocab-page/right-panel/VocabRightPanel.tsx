// features/vocab-page/right-panel/VocabRightPanel.tsx
import { createSignal, Show, createMemo, For, type JSX } from "solid-js"
import { useNavigate } from "@tanstack/solid-router"
import { useCustomQuery } from "@/hooks/useCustomQuery"
import { allLearningPathsQueryOptions } from "@/query/query-options"
import { DeckCard } from "./DeckCard"
import { CollapsibleSection } from "../shared/CollapsibleSection"
import { BookOpen, Folder, Plus } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { cn } from "@/utils"
import { transformModuleToDeckLike } from "../utils/learningPathToDeckAdapter"
import { CreateModal } from "../shared/components/CreateModal"
import { createFolderServerFn } from "@/features/supabase/db/folder"
import { validateFolderNameUnique } from "../validation/deck-folder-validation"
import { validateName } from "../validation/common"
import {
  buildNavigationHierarchy,
  type HierarchyNode,
} from "../logic/navigation-hierarchy"

interface VocabRightPanelProps {
  userDecks: UserDeck[]
  folders: DeckFolder[]
  shareStatus: Record<number, boolean>

  onPlayDeck: (deck: UserDeck) => void
  selectedUserDeck: UserDeck | null
  onSelectDeck: (deck: UserDeck) => void
  onDeselectDeck: () => void
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

  // Build complete hierarchy from all data sources
  const hierarchy = createMemo(() => {
    const learningPaths = learningPathsQuery.data || []
    return buildNavigationHierarchy(
      props.folders,
      props.userDecks,
      learningPaths,
    )
  })

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

  // Recursive component for rendering hierarchy
  const RenderHierarchy = (renderProps: { nodes: HierarchyNode[] }) => (
    <For each={renderProps.nodes}>
      {(node) =>
        renderNode(node, () => <RenderHierarchy nodes={node.children} />)
      }
    </For>
  )

  // Render function for hierarchy nodes
  const renderNode = (
    node: HierarchyNode,
    renderChildren: () => JSX.Element,
  ): JSX.Element => {
    switch (node.type) {
      case "learning-path":
        return (
          <CollapsibleSection
            title={node.data.short_name}
            icon={BookOpen}
            isExpanded={expandedSections().has(node.id)}
            onToggle={() => toggleSection(node.id)}
          >
            <div class="space-y-2">{renderChildren()}</div>
          </CollapsibleSection>
        )

      case "chapter":
        return (
          <CollapsibleSection
            title={node.data.title}
            isExpanded={expandedSections().has(node.id)}
            onToggle={() => toggleSection(node.id)}
          >
            <div class="space-y-2">{renderChildren()}</div>
          </CollapsibleSection>
        )

      case "module":
        const moduleData = node.data
        const deck =
          "module" in moduleData
            ? transformModuleToDeckLike(node.id, moduleData.module)
            : moduleData.deck

        return (
          <DeckCard
            deck={deck}
            onSelect={props.onSelectDeck}
            isSelected={props.selectedUserDeck?.deck_id === node.id}
            class="deck-card"
          />
        )

      case "folder":
        return (
          <CollapsibleSection
            title={node.data.folder_name}
            isExpanded={expandedSections().has(node.id)}
            onToggle={() => toggleSection(node.id)}
            folderData={node.data}
          >
            <div class="space-y-2">{renderChildren()}</div>
          </CollapsibleSection>
        )

      case "deck":
        return (
          <DeckCard
            deck={node.data}
            isSelected={props.selectedUserDeck?.deck_id === node.data.deck_id}
            onSelect={props.onSelectDeck}
            isShared={!!props.shareStatus[node.data.deck_id]}
            class="deck-card"
          />
        )
    }
  }

  return (
    <>
      <div class="space-y-4 pb-24">
        {/* All Learning Paths with their Chapters */}
        <Show
          when={
            hierarchy().filter((node) => node.type === "learning-path").length >
            0
          }
        >
          <div class="mb-6 space-y-2">
            <RenderHierarchy
              nodes={hierarchy().filter(
                (node) => node.type === "learning-path",
              )}
            />
          </div>
        </Show>

        {/* User Decks Section */}
        <Show
          when={
            hierarchy().filter((node) => node.type !== "learning-path").length >
            0
          }
        >
          <CollapsibleSection
            title="User Decks"
            icon={Folder}
            isExpanded={expandedSections().has("user-decks")}
            onToggle={() => toggleSection("user-decks")}
          >
            <div class="space-y-2">
              <RenderHierarchy
                nodes={hierarchy().filter(
                  (node) => node.type !== "learning-path",
                )}
              />
            </div>
          </CollapsibleSection>
        </Show>
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
