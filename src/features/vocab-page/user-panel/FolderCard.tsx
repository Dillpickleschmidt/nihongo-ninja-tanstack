// vocab-page/user-panel/FolderCard.tsx
import { Folder } from "lucide-solid"
import { countDecksInFolder } from "../logic/folder-manager"

interface FolderCardProps {
  folder: DeckFolder
  allFolders: DeckFolder[]
  allDecks: UserDeck[]
  onClick: (folderId: number) => void
}

export function FolderCard(props: FolderCardProps) {
  const deckCount = () =>
    countDecksInFolder(props.allFolders, props.allDecks, props.folder.folder_id)

  return (
    <div
      class="hover:bg-accent bg-card cursor-pointer rounded-lg border p-4 transition-colors"
      onClick={() => props.onClick(props.folder.folder_id)}
    >
      <div class="flex items-start gap-3">
        <div class="bg-muted rounded-md p-2">
          <Folder class="text-muted-foreground h-5 w-5" />
        </div>

        <div class="min-w-0 flex-1">
          <h4 class="truncate text-sm leading-tight font-medium">
            {props.folder.folder_name}
          </h4>
          <p class="text-muted-foreground mt-1 text-xs">
            {deckCount() === 1 ? "1 deck" : `${deckCount()} decks`}
          </p>
        </div>
      </div>
    </div>
  )
}

