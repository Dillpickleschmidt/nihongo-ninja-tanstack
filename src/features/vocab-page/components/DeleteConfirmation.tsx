import { Show } from "solid-js"
import { Button } from "@/components/ui/button"

type DeckDeleteConfirmationProps = {
  itemType: "deck"
  item: UserDeck
  onCancel: () => void
  onConfirm: () => void
}

type FolderDeleteConfirmationProps = {
  itemType: "folder"
  item: DeckFolder
  folderContents?: { decks: number; folders: number }
  deleteStrategy: "move-up" | "delete-all"
  onStrategyChange: (strategy: "move-up" | "delete-all") => void
  onCancel: () => void
  onConfirm: () => void
}

type DeleteConfirmationProps =
  | DeckDeleteConfirmationProps
  | FolderDeleteConfirmationProps

export function DeleteConfirmation(props: DeleteConfirmationProps) {
  return (
    <div class="space-y-4">
      <Show
        when={props.itemType === "deck"}
        fallback={(() => {
          const folderProps = props as FolderDeleteConfirmationProps
          return (
            <div class="space-y-4">
              <p>Delete "{folderProps.item.folder_name}"?</p>

              <Show
                when={
                  folderProps.folderContents &&
                  (folderProps.folderContents.decks > 0 ||
                    folderProps.folderContents.folders > 0)
                }
              >
                <div class="bg-background/40 border-card-foreground/70 rounded border p-3 backdrop-blur-sm">
                  <p class="text-sm">
                    This folder contains{" "}
                    <strong>
                      {folderProps.folderContents!.decks} deck
                      {folderProps.folderContents!.decks !== 1 ? "s" : ""}
                    </strong>
                    <Show when={folderProps.folderContents!.folders > 0}>
                      {" "}
                      and{" "}
                      <strong>
                        {folderProps.folderContents!.folders} subfolder
                        {folderProps.folderContents!.folders !== 1 ? "s" : ""}
                      </strong>
                    </Show>
                    . What should happen to them?
                  </p>

                  <div class="mt-3 space-y-2">
                    <label class="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="deleteStrategy"
                        checked={folderProps.deleteStrategy === "move-up"}
                        onChange={() => folderProps.onStrategyChange("move-up")}
                        class="accent-amber-500"
                      />
                      <span class="text-sm">Move items to parent folder</span>
                    </label>

                    <label class="flex items-center space-x-2">
                      <input
                        type="radio"
                        name="deleteStrategy"
                        checked={folderProps.deleteStrategy === "delete-all"}
                        onChange={() =>
                          folderProps.onStrategyChange("delete-all")
                        }
                        class="accent-amber-500"
                      />
                      <span class="text-sm">
                        Delete all items (cannot be undone)
                      </span>
                    </label>
                  </div>
                </div>
              </Show>
            </div>
          )
        })()}
      >
        {(() => {
          const deckProps = props as DeckDeleteConfirmationProps
          return (
            <p class="text-sm">
              Delete "{deckProps.item.deck_name}"? This action cannot be undone.
            </p>
          )
        })()}
      </Show>

      <div class="flex justify-end gap-2">
        <Button variant="outline" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button variant="destructive" onClick={props.onConfirm}>
          Delete {props.itemType === "deck" ? "Deck" : "Folder"}
        </Button>
      </div>
    </div>
  )
}
