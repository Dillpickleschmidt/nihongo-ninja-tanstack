// vocab-page/right-panel/FolderCard.tsx
import { Folder, Edit, Trash2 } from "lucide-solid"
import { Button } from "@/components/ui/button"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { cn } from "@/utils"
import { createSignal, createMemo } from "solid-js"
import { countDecksInFolder } from "../logic/folder-utils"
import { useFolderTree } from "../hooks/useFolderTree"
import { DeleteConfirmation } from "../components/DeleteConfirmation"
import { EditTransaction } from "../logic/edit-transaction"

interface FolderCardProps {
  folder: DeckFolder
  allFolders: DeckFolder[]
  allDecks: UserDeck[]
  onClick: (folderId: number) => void
  onEdit?: (folder: DeckFolder) => void
  onDelete?: (transaction: EditTransaction) => void
}

export function FolderCard(props: FolderCardProps) {
  const deckCount = () =>
    countDecksInFolder(props.allFolders, props.allDecks, props.folder.folder_id)
  const [isHovered, setIsHovered] = createSignal(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = createSignal(false)
  const [deleteStrategy, setDeleteStrategy] = createSignal<
    "move-up" | "delete-all"
  >("move-up")

  // Folder tree for contents calculation
  const folderData = createMemo(() => {
    const folderTree = useFolderTree({
      folders: props.allFolders,
      decks: props.allDecks,
      item: props.folder,
    })

    return {
      folderContents: folderTree.folderContents(),
    }
  })

  const handleDelete = () => {
    const transaction = new EditTransaction()

    transaction.add({
      type: "delete-folder",
      folderId: props.folder.folder_id,
      strategy: deleteStrategy(),
    })

    props.onDelete?.(transaction)
    setShowDeleteConfirm(false)
  }

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger
          class="bg-card/60 hover:bg-card/70 border-card-foreground/70 relative cursor-pointer rounded-lg border p-4 shadow-sm backdrop-blur-sm transition-colors hover:shadow-md"
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
            <div class="bg-muted/40 border-card-foreground/70 rounded-md border p-2 backdrop-blur-xs">
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
        </ContextMenuTrigger>

        <ContextMenuContent class="bg-card border-card-foreground outline-none">
          {/* For some reason I need this div wrapper or I get duplicate menu items. */}
          {/* Using modal={false} also works */}
          <div>
            <ContextMenuItem onClick={() => props.onEdit?.(props.folder)}>
              <Edit class="mr-2 h-3 w-3" />
              Edit folder
            </ContextMenuItem>
            <ContextMenuSeparator class="border-card-foreground" />
            <ContextMenuItem
              onClick={() => setShowDeleteConfirm(true)}
              class="text-red-600 focus:bg-red-50 focus:text-red-900 dark:text-red-400 dark:focus:bg-red-950 dark:focus:text-red-300"
            >
              <Trash2 class="mr-2 h-3 w-3" />
              Delete folder
            </ContextMenuItem>
          </div>
        </ContextMenuContent>
      </ContextMenu>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={showDeleteConfirm()}
        onOpenChange={(open) => !open && setShowDeleteConfirm(false)}
      >
        <DialogContent class="border-card-foreground sm:max-w-lg [&]:animate-none [&]:duration-0">
          <DialogHeader>
            <DialogTitle>Delete {props.folder.folder_name}</DialogTitle>
          </DialogHeader>

          <DeleteConfirmation
            item={props.folder}
            itemType="folder"
            folderContents={folderData().folderContents}
            deleteStrategy={deleteStrategy()}
            onStrategyChange={setDeleteStrategy}
            onCancel={() => setShowDeleteConfirm(false)}
            onConfirm={handleDelete}
          />
        </DialogContent>
      </Dialog>
    </>
  )
}
