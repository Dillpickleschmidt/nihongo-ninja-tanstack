import { For, Show } from "solid-js"
import { FolderCard } from "../../../shared/components/FolderCard"
import type { LearningPath } from "@/data/types"

interface FolderBrowserGridProps {
  folders: DeckFolder[]
  learningPaths: LearningPath[]
  onFolderClick: (folderId: string) => void
  onLearningPathClick: (learningPathId: string) => void
  class?: string
}

/**
 * Grid of folders and learning paths for navigation
 * All displayed as unified FolderCard components
 */
export function FolderBrowserGrid(props: FolderBrowserGridProps) {
  const hasContent = () =>
    props.folders.length > 0 || props.learningPaths.length > 0

  return (
    <Show
      when={hasContent()}
      fallback={
        <div class="border-border/50 rounded-lg border border-dashed p-8 text-center">
          <p class="text-muted-foreground text-sm">
            No folders or learning paths yet
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
        </div>
      </div>
    </Show>
  )
}
