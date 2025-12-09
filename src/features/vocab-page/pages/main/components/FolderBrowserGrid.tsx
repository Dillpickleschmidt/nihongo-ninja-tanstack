import { For, Show } from 'solid-js'
import { FolderCard } from '../../../shared/components/FolderCard'
import { DeckCard } from '../../../shared/components/DeckCard'
import { getRootLevelItems } from '../../../utils/navigation-hierarchy'
import type { Folder, Deck } from '../../../context/VocabContext'

interface FolderBrowserGridProps {
  folders: Folder[]
  decks: Deck[]
  class?: string
}

/**
 * Grid of folders and decks for navigation
 * Shows all root-level items (no parent folder)
 */
export function FolderBrowserGrid(props: FolderBrowserGridProps) {
  const rootItems = () => getRootLevelItems(props.folders, props.decks)

  return (
    <Show
      when={rootItems().length > 0}
      fallback={
        <div class="border-border/50 rounded-lg border border-dashed p-8 text-center">
          <p class="text-muted-foreground text-sm">
            No folders or decks yet. Create one to get started!
          </p>
        </div>
      }
    >
      <div class={props.class}>
        <h2 class="text-foreground mb-4 text-sm font-semibold">
          All Decks & Folders
        </h2>
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <For each={rootItems()}>
            {(node) => {
              switch (node.type) {
                case 'folder':
                  return <FolderCard folder={node.data} />
                case 'deck':
                  return <DeckCard deck={node.data} />
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
