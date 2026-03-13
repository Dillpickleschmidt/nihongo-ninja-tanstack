import { For, Show } from "solid-js"
import { Link } from "@tanstack/solid-router"
import { FolderCard, FolderCardContent } from "../../../shared/components/FolderCard"
import { getRootFolders, getRootOrphanDecks } from "../../../utils/hierarchy"
import type { Folder, Deck } from "../../../context/VocabContext"

interface FolderBrowserGridProps {
  folders: Folder[]
  decks: Deck[]
  class?: string
}

/**
 * Grid of folders and decks for navigation
 * Shows root-level folders and a virtual "Unsorted" folder for orphaned decks
 */
export function FolderBrowserGrid(props: FolderBrowserGridProps) {
  const rootFolders = () => getRootFolders(props.folders)
  const orphanDecks = () => getRootOrphanDecks(props.decks)
  const hasItems = () => rootFolders().length > 0 || orphanDecks().length > 0

  return (
    <Show
      when={hasItems()}
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
          <For each={rootFolders()}>
            {(folder) => <FolderCard folder={folder} />}
          </For>
          <Show when={orphanDecks().length > 0}>
            <UnsortedFolderCard deckCount={orphanDecks().length} />
          </Show>
        </div>
      </div>
    </Show>
  )
}

function UnsortedFolderCard(props: { deckCount: number }) {
  const subtitle = () =>
    `${props.deckCount} ${props.deckCount === 1 ? "deck" : "decks"}`

  return (
    <Link
      to="/vocab/unsorted"
      class="bg-card/60 hover:bg-card/70 border-card-foreground/70 block cursor-pointer rounded-lg border p-4 shadow-sm backdrop-blur-sm transition-colors hover:shadow-md"
    >
      <FolderCardContent title="Unsorted" subtitle={subtitle()} />
    </Link>
  )
}
