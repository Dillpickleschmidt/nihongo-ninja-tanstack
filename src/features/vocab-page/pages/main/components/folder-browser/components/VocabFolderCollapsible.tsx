import { For, Show } from "solid-js"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/custom/collapsible"
import {
  getFolderChildren,
  getDecksInFolder,
} from "@/features/vocab-page/utils/hierarchy"
import { filterDecks } from "../utils"
import { DeckVocabCollapsible } from "./DeckVocabCollapsible"
import type { Folder, Deck } from "@/features/vocab-page/context/VocabContext"

export function VocabFolderCollapsible(props: {
  folderId: string
  folders: Folder[]
  decks: Deck[]
  matchingDeckIds: Set<string> | null
  defaultOpen?: boolean
}) {
  const childFolders = () => getFolderChildren(props.folders, props.folderId)
  const childDecks = () => filterDecks(
    getDecksInFolder(props.decks, props.folderId),
    props.matchingDeckIds,
  )

  const hasVisibleChildren = () => {
    if (childDecks().length > 0) return true
    return childFolders().some((folder) => {
      const decks = getDecksInFolder(props.decks, folder.id)
      return !props.matchingDeckIds || decks.some((d) => props.matchingDeckIds!.has(d.id))
    })
  }

  return (
    <Show when={hasVisibleChildren()}>
      <div class="space-y-1">
        <For each={childFolders()}>
          {(folder) => {
            const folderName = () => folder.folderName
            const folderDecks = () => filterDecks(
              getDecksInFolder(props.decks, folder.id),
              props.matchingDeckIds,
            )
            const hasContent = () =>
              folderDecks().length > 0 ||
              getFolderChildren(props.folders, folder.id).length > 0

            return (
              <Show when={hasContent()}>
                <Collapsible defaultOpen={props.defaultOpen ?? true}>
                  <CollapsibleTrigger class="py-2 pl-2 font-semibold text-white/70">
                    {folderName()}
                  </CollapsibleTrigger>
                  <CollapsibleContent class="pl-4">
                    <div class="space-y-1">
                      <For each={folderDecks()}>
                        {(deck) => <DeckVocabCollapsible deck={deck} />}
                      </For>
                      <VocabFolderCollapsible
                        folderId={folder.id}
                        folders={props.folders}
                        decks={props.decks}
                        matchingDeckIds={props.matchingDeckIds}
                      />
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </Show>
            )
          }}
        </For>
        <For each={childDecks()}>
          {(deck) => <DeckVocabCollapsible deck={deck} />}
        </For>
      </div>
    </Show>
  )
}
