import { Show } from "solid-js"
import { Button } from "@/components/ui/button"

interface DeleteConfirmationProps {
  item: UserDeck | DeckFolder
  itemType: "deck" | "folder"
  folderContents?: { decks: number; folders: number }
  deleteStrategy: "move-up" | "delete-all"
  onStrategyChange: (strategy: "move-up" | "delete-all") => void
  onCancel: () => void
  onConfirm: () => void
}

export function DeleteConfirmation(props: DeleteConfirmationProps) {
  const isDeck = () => props.itemType === "deck"
  const isFolder = () => props.itemType === "folder"

  return (
    <div class="space-y-4">
      <Show
        when={isDeck()}
        fallback={
          <div class="space-y-4">
            <p>Delete "{(props.item as DeckFolder)?.folder_name}"?</p>

            <Show
              when={
                props.folderContents &&
                (props.folderContents.decks > 0 ||
                  props.folderContents.folders > 0)
              }
            >
              <div class="bg-muted rounded p-3">
                <p class="text-sm">
                  This folder contains{" "}
                  <strong>
                    {props.folderContents!.decks} deck
                    {props.folderContents!.decks !== 1 ? "s" : ""}
                  </strong>
                  <Show when={props.folderContents!.folders > 0}>
                    {" "}
                    and{" "}
                    <strong>
                      {props.folderContents!.folders} subfolder
                      {props.folderContents!.folders !== 1 ? "s" : ""}
                    </strong>
                  </Show>
                  . What should happen to them?
                </p>

                <div class="mt-3 space-y-2">
                  <label class="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="deleteStrategy"
                      checked={props.deleteStrategy === "move-up"}
                      onChange={() => props.onStrategyChange("move-up")}
                    />
                    <span class="text-sm">Move items to parent folder</span>
                  </label>

                  <label class="flex items-center space-x-2">
                    <input
                      type="radio"
                      name="deleteStrategy"
                      checked={props.deleteStrategy === "delete-all"}
                      onChange={() => props.onStrategyChange("delete-all")}
                    />
                    <span class="text-sm">
                      Delete all items (cannot be undone)
                    </span>
                  </label>
                </div>
              </div>
            </Show>
          </div>
        }
      >
        <p>
          Delete "{(props.item as UserDeck)?.deck_name}"? This action cannot be
          undone.
        </p>
      </Show>

      <div class="flex justify-end gap-2">
        <Button variant="outline" onClick={props.onCancel}>
          Cancel
        </Button>
        <Button variant="destructive" onClick={props.onConfirm}>
          Delete {isDeck() ? "Deck" : "Folder"}
        </Button>
      </div>
    </div>
  )
}

