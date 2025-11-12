import { createSignal } from "solid-js"
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
import { Edit3, Trash2 } from "lucide-solid"
import { useFolderTree } from "../../hooks/useFolderTree"
import { DeleteConfirmation } from "./DeleteConfirmation"
import { EditTransaction } from "../../logic/edit-transaction"
import { useVocabPageContext } from "../../layout/VocabPageContext"

interface FolderContextMenuProps {
  folderData: DeckFolder
  children: any
}

export function FolderContextMenu(props: FolderContextMenuProps) {
  const state = useVocabPageContext()
  const [showDeleteConfirm, setShowDeleteConfirm] = createSignal(false)
  const [deleteStrategy, setDeleteStrategy] = createSignal<
    "move-up" | "delete-all"
  >("move-up")

  const folderTree = useFolderTree({
    folders: state.folders(),
    decks: state.userDecks(),
    item: props.folderData,
  })

  const handleDelete = () => {
    const transaction = new EditTransaction()
    transaction.add({
      type: "delete-folder",
      folderId: props.folderData.folder_id,
      strategy: deleteStrategy(),
    })

    state.handleSaveFolderEdit(transaction)
    setShowDeleteConfirm(false)
  }

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger as="div">{props.children}</ContextMenuTrigger>

        <ContextMenuContent class="bg-card border-card-foreground w-48 outline-none">
          <div>
            <ContextMenuItem
              onClick={() => {
                state.setEditingFolder(props.folderData)
              }}
            >
              <Edit3 class="mr-2 h-3 w-3" />
              <span>Edit folder</span>
            </ContextMenuItem>

            <ContextMenuSeparator class="border-card-foreground" />

            <ContextMenuItem
              onClick={() => setShowDeleteConfirm(true)}
              class="text-red-600 focus:bg-red-50 focus:text-red-900 dark:text-red-400 dark:focus:bg-red-950 dark:focus:text-red-300"
            >
              <Trash2 class="mr-2 h-3 w-3" />
              <span>Delete folder</span>
            </ContextMenuItem>
          </div>
        </ContextMenuContent>
      </ContextMenu>

      <Dialog
        open={showDeleteConfirm()}
        onOpenChange={(open) => !open && setShowDeleteConfirm(false)}
      >
        <DialogContent class="border-card-foreground sm:max-w-lg [&]:animate-none [&]:duration-0">
          <DialogHeader>
            <DialogTitle>Delete {props.folderData.folder_name}</DialogTitle>
          </DialogHeader>

          <DeleteConfirmation
            item={props.folderData}
            itemType="folder"
            folderContents={folderTree.folderContents()}
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
