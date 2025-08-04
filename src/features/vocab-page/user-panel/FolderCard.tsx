// vocab-page/user-panel/FolderCard.tsx
import { Folder, Edit } from "lucide-solid"
import { Button } from "@/components/ui/button"
import { cn } from "@/utils"
import { createSignal } from "solid-js"
import { countDecksInFolder } from "../logic/folder-manager"

interface FolderCardProps {
  folder: DeckFolder
  allFolders: DeckFolder[]
  allDecks: UserDeck[]
  onClick: (folderId: number) => void
  onEdit?: (folder: DeckFolder) => void
}

export function FolderCard(props: FolderCardProps) {
  const deckCount = () =>
    countDecksInFolder(props.allFolders, props.allDecks, props.folder.folder_id)
  const [isHovered, setIsHovered] = createSignal(false)

  return (
    <div
      class="hover:bg-accent bg-card border-border relative cursor-pointer rounded-lg border p-4 transition-colors"
      onClick={() => props.onClick(props.folder.folder_id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Edit button - appears on hover */}
      <div
        class={cn(
          "absolute top-2 right-2 transition-opacity duration-200",
          isHovered() ? "opacity-100" : "opacity-0",
        )}
      >
        <Button
          size="sm"
          variant="ghost"
          class="h-6 w-6 p-0 hover:cursor-pointer"
          onClick={(e) => {
            e.stopPropagation()
            props.onEdit?.(props.folder)
          }}
        >
          <Edit class="h-3 w-3" />
        </Button>
      </div>

      <div class="flex items-start gap-3">
        <div class="bg-muted rounded-md p-2">
          <Folder class="text-muted-foreground h-5 w-5" />
        </div>

        <div class="min-w-0 flex-1 pr-8">
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
