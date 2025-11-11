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
import { createSignal, createMemo, Show } from "solid-js"
import { useFolderTree } from "../../hooks/useFolderTree"
import { DeleteConfirmation } from "../components/DeleteConfirmation"
import { EditTransaction } from "../../logic/edit-transaction"

interface FolderCardProps {
  title: string
  subtitle?: string
  onClick: () => void
  onEdit?: () => void
  onDelete?: (transaction: EditTransaction) => void
  allFolders?: DeckFolder[]
  allDecks?: UserDeck[]
  folderData?: DeckFolder
}

/**
 * Unified card component for folders, learning paths, and chapters
 * Shows edit/delete options only when handlers are provided
 */
export function FolderCard(props: FolderCardProps) {
  const [isHovered, setIsHovered] = createSignal(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = createSignal(false)
  const [deleteStrategy, setDeleteStrategy] = createSignal<
    "move-up" | "delete-all"
  >("move-up")

  const hasActions = () => !!props.onEdit || !!props.onDelete

  // Only calculate folder contents if delete is enabled
  const folderData = createMemo(() => {
    if (
      !props.onDelete ||
      !props.folderData ||
      !props.allFolders ||
      !props.allDecks
    ) {
      return { folderContents: undefined }
    }

    const folderTree = useFolderTree({
      folders: props.allFolders,
      decks: props.allDecks,
      item: props.folderData,
    })

    return {
      folderContents: folderTree.folderContents(),
    }
  })

  const handleDelete = () => {
    if (!props.folderData || !props.onDelete) return

    const transaction = new EditTransaction()
    transaction.add({
      type: "delete-folder",
      folderId: props.folderData.folder_id,
      strategy: deleteStrategy(),
    })

    props.onDelete(transaction)
    setShowDeleteConfirm(false)
  }

  return (
    <>
      <Show when={hasActions()} fallback={<SimpleCard {...props} />}>
        <ActionCard
          {...props}
          isHovered={isHovered()}
          setIsHovered={setIsHovered}
          onDeleteClick={() => setShowDeleteConfirm(true)}
        />
      </Show>

      {/* Delete Confirmation Dialog - only shown when delete action exists */}
      <Show when={props.onDelete && props.folderData}>
        <Dialog
          open={showDeleteConfirm()}
          onOpenChange={(open) => !open && setShowDeleteConfirm(false)}
        >
          <DialogContent class="border-card-foreground sm:max-w-lg [&]:animate-none [&]:duration-0">
            <DialogHeader>
              <DialogTitle>Delete {props.title}</DialogTitle>
            </DialogHeader>

            <DeleteConfirmation
              item={props.folderData!}
              itemType="folder"
              folderContents={folderData().folderContents}
              deleteStrategy={deleteStrategy()}
              onStrategyChange={setDeleteStrategy}
              onCancel={() => setShowDeleteConfirm(false)}
              onConfirm={handleDelete}
            />
          </DialogContent>
        </Dialog>
      </Show>
    </>
  )
}

// Simple read-only card (for learning paths, chapters)
function SimpleCard(props: FolderCardProps) {
  return (
    <div
      onClick={props.onClick}
      class="bg-card/60 hover:bg-card/70 border-card-foreground/70 cursor-pointer rounded-lg border p-4 shadow-sm backdrop-blur-sm transition-colors hover:shadow-md"
    >
      <div class="flex items-start gap-3">
        <div class="bg-muted/40 border-card-foreground/70 rounded-md border p-2 backdrop-blur-xs">
          <Folder class="text-muted-foreground h-5 w-5" />
        </div>

        <div class="min-w-0 flex-1">
          <h4 class="truncate text-sm leading-tight font-medium">
            {props.title}
          </h4>
          <Show when={props.subtitle}>
            <p class="text-muted-foreground mt-1 text-xs">{props.subtitle}</p>
          </Show>
        </div>
      </div>
    </div>
  )
}

// Card with context menu and edit/delete actions
function ActionCard(
  props: FolderCardProps & {
    isHovered: boolean
    setIsHovered: (value: boolean) => void
    onDeleteClick: () => void
  },
) {
  return (
    <ContextMenu>
      <ContextMenuTrigger
        class="bg-card/60 hover:bg-card/70 border-card-foreground/70 relative cursor-pointer rounded-lg border p-4 shadow-sm backdrop-blur-sm transition-colors hover:shadow-md"
        onClick={props.onClick}
        onMouseEnter={() => props.setIsHovered(true)}
        onMouseLeave={() => props.setIsHovered(false)}
      >
        {/* Edit button - appears on hover */}
        <Show when={props.onEdit && props.isHovered}>
          <div class="absolute top-2 right-2 opacity-100 transition-opacity duration-200">
            <Button
              size="sm"
              variant="ghost"
              class="h-6 w-6 p-0 hover:cursor-pointer"
              onClick={(e) => {
                e.stopPropagation()
                props.onEdit?.()
              }}
            >
              <Edit class="h-3 w-3" />
            </Button>
          </div>
        </Show>

        <div class="flex items-start gap-3">
          <div class="bg-muted/40 border-card-foreground/70 rounded-md border p-2 backdrop-blur-xs">
            <Folder class="text-muted-foreground h-5 w-5" />
          </div>

          <div class="min-w-0 flex-1 pr-8">
            <h4 class="truncate text-sm leading-tight font-medium">
              {props.title}
            </h4>
            <Show when={props.subtitle}>
              <p class="text-muted-foreground mt-1 text-xs">{props.subtitle}</p>
            </Show>
          </div>
        </div>
      </ContextMenuTrigger>

      <ContextMenuContent class="bg-card border-card-foreground outline-none">
        <div>
          <Show when={props.onEdit}>
            <ContextMenuItem onClick={props.onEdit}>
              <Edit class="mr-2 h-3 w-3" />
              Edit
            </ContextMenuItem>
          </Show>

          <Show when={props.onEdit && props.onDelete}>
            <ContextMenuSeparator class="border-card-foreground" />
          </Show>

          <Show when={props.onDelete}>
            <ContextMenuItem
              onClick={props.onDeleteClick}
              class="text-red-600 focus:bg-red-50 focus:text-red-900 dark:text-red-400 dark:focus:bg-red-950 dark:focus:text-red-300"
            >
              <Trash2 class="mr-2 h-3 w-3" />
              Delete
            </ContextMenuItem>
          </Show>
        </div>
      </ContextMenuContent>
    </ContextMenu>
  )
}
