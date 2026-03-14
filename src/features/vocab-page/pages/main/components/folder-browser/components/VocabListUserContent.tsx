import { For } from "solid-js"
import { getFolderLevelItems } from "@/features/vocab-page/utils/hierarchy"
import { VocabFolderCollapsible } from "./VocabFolderCollapsible"
import { DeckVocabCollapsible } from "./DeckVocabCollapsible"
import type { Folder, Deck } from "@/features/vocab-page/context/VocabContext"

export function VocabListUserContent(props: {
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
    <div class="space-y-1">
      <For each={items()}>
        {(node) => {
          switch (node.type) {
            case "folder":
              return (
                <VocabFolderCollapsible
                  folderId={node.data.id}
                  folders={props.folders}
                  decks={props.decks}
                  matchingDeckIds={props.matchingDeckIds}
                />
              )
            case "deck":
              return <DeckVocabCollapsible deck={node.data} />
            default:
              return null
          }
        }}
      </For>
    </div>
  )
}
