import { For, Show } from "solid-js"
import { FolderCard } from "../../../shared/components/FolderCard"
import { DeckCard } from "../../../right-panel/DeckCard"
import type { LearningPath } from "@/data/types"
import { getRootLevelItems } from "../../../logic/hierarchy-builder"

interface FolderBrowserGridProps {
  folders: DeckFolder[]
  decks?: UserDeck[]
  learningPaths: LearningPath[]
  onFolderClick: (folderId: string) => void
  onDeckClick?: (deck: UserDeck) => void
  onLearningPathClick: (learningPathId: string) => void
  class?: string
}

/**
 * Grid of folders, decks, and learning paths for navigation
 * Uses declarative hierarchy to ensure consistency with VocabRightPanel
 */
export function FolderBrowserGrid(props: FolderBrowserGridProps) {
  const rootItems = () =>
    getRootLevelItems(props.folders, props.decks || [], props.learningPaths)

  return (
    <Show
      when={rootItems().length > 0}
      fallback={
        <div class="border-border/50 rounded-lg border border-dashed p-8 text-center">
          <p class="text-muted-foreground text-sm">
            No folders, decks, or learning paths yet
          </p>
        </div>
      }
    >
      <div class={props.class}>
        <h2 class="text-foreground mb-4 text-sm font-semibold">
          All Decks & Paths
        </h2>
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <For each={rootItems()}>
            {(node) => {
              switch (node.type) {
                case "learning-path":
                  return (
                    <FolderCard
                      title={node.data.name}
                      subtitle="Learning Path"
                      onClick={() => props.onLearningPathClick(node.data.id)}
                    />
                  )

                case "folder":
                  return (
                    <FolderCard
                      title={node.data.folder_name}
                      subtitle="Folder"
                      onClick={() =>
                        props.onFolderClick(node.data.folder_id.toString())
                      }
                      folderData={node.data}
                    />
                  )

                case "deck":
                  return (
                    <DeckCard
                      deck={node.data}
                      onSelect={(d) => props.onDeckClick?.(d)}
                    />
                  )

                default:
                  return null
              }
            }}
          </For>
        </div>
      </div>
    </Show>
  )
}
