import { For, Show } from "solid-js"
import { FolderCard } from "../../../shared/components/FolderCard"
import { DeckCard } from "../../../right-panel/DeckCard"
import { getRootDecks } from "../../../logic/folder-utils"
import type { LearningPath } from "@/data/types"

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
 */
export function FolderBrowserGrid(props: FolderBrowserGridProps) {
  const rootDecks = () => (props.decks ? getRootDecks(props.decks) : [])

  const hasContent = () =>
    props.folders.length > 0 ||
    props.learningPaths.length > 0 ||
    rootDecks().length > 0

  return (
    <Show
      when={hasContent()}
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
          {/* Render folders */}
          <For each={props.folders}>
            {(folder) => (
              <FolderCard
                title={folder.folder_name}
                subtitle="Folder"
                onClick={() => props.onFolderClick(folder.folder_id.toString())}
                folderData={folder}
              />
            )}
          </For>

          {/* Render learning paths */}
          <For each={props.learningPaths}>
            {(learningPath) => (
              <FolderCard
                title={learningPath.name}
                subtitle="Learning Path"
                onClick={() => props.onLearningPathClick(learningPath.id)}
              />
            )}
          </For>

          {/* Render root-level decks */}
          <For each={rootDecks()}>
            {(deck) => (
              <DeckCard
                deck={deck}
                onSelect={(d) => props.onDeckClick?.(d)}
              />
            )}
          </For>
        </div>
      </div>
    </Show>
  )
}
