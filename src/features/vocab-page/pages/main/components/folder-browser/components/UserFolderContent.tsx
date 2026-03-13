import { Show, For } from "solid-js"
import { FolderCard } from "@/features/vocab-page/shared/components/FolderCard"
import { DeckCard } from "@/features/vocab-page/shared/components/DeckCard"
import { getFolderLevelItems } from "@/features/vocab-page/utils/hierarchy"
import type { Folder, Deck } from "@/features/vocab-page/context/VocabContext"

export function UserFolderContent(props: {
  folderId: string
  folders: Folder[]
  decks: Deck[]
  matchingDeckIds: Set<string> | null
}) {
  const items = () => {
    const all = getFolderLevelItems(props.folders, props.decks, props.folderId)
    if (!props.matchingDeckIds) return all
    return all.filter(
      (node) =>
        node.type === "folder" || props.matchingDeckIds!.has(node.data.id),
    )
  }

  return (
    <Show
      when={items().length > 0}
      fallback={
        <div class="border-border/50 rounded-lg border border-dashed p-8 text-center">
          <p class="text-muted-foreground text-sm">This folder is empty</p>
        </div>
      }
    >
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <For each={items()}>
          {(node) => {
            switch (node.type) {
              case "folder":
                return <FolderCard folder={node.data} />
              case "deck":
                return <DeckCard deck={node.data} />
              default:
                return null
            }
          }}
        </For>
      </div>
    </Show>
  )
}
