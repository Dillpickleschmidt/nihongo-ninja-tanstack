import { createSignal } from "solid-js"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Ellipsis } from "lucide-solid"
import { useDeckCreationStore } from "../context/DeckCreationStoreContext"

interface DeckHeaderProps {
  onClear: () => void
  onSave: () => void
  isSaving?: boolean
}

export function DeckHeader(props: DeckHeaderProps) {
  const [confirmClearOpen, setConfirmClearOpen] = createSignal(false)
  const { actions } = useDeckCreationStore()
  const isEditMode = actions.isEditMode()

  return (
    <div class="rounded-lg bg-background/60 -mx-2 p-4 backdrop-blur-md border-border/60 border dark:bg-background/40 dark:border-card-foreground/70">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-2xl leading-tight font-semibold">
            {isEditMode ? "Edit Custom Deck" : "Create a Custom Deck"}
          </h1>
          <p class="text-muted-foreground text-sm">
            Build vocabulary with translations, examples, and more.
          </p>
        </div>
        <div class="flex items-center gap-2">
          <Dialog open={confirmClearOpen()} onOpenChange={setConfirmClearOpen}>
            <DialogTrigger>
              <Button variant="ghost" size="sm" class="hover:cursor-pointer">
                Clear
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Clear draft?</DialogTitle>
                <DialogDescription>
                  This removes all fields and vocabulary items.
                </DialogDescription>
              </DialogHeader>
              <DialogFooter>
                <Button
                  variant="ghost"
                  onClick={() => setConfirmClearOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                    props.onClear()
                    setConfirmClearOpen(false)
                  }}
                >
                  Clear
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline" size="sm" class="cursor-pointer">
                <Ellipsis class="mr-2 size-4" />
                More
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onSelect={() => {}}>
                Import CSV…
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => {}}>
                Import JSON…
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => {}}>
                Export JSON
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button
            size="sm"
            class="cursor-pointer"
            onClick={props.onSave}
            disabled={props.isSaving}
          >
            {props.isSaving
              ? "Saving..."
              : isEditMode
                ? "Save Changes"
                : "Save Deck"}
          </Button>
        </div>
      </div>
    </div>
  )
}
