// features/vocab-page/components/CreateModal.tsx
import { FolderPlus, FileText } from "lucide-solid"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

type CreateModalProps = {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
}

export function CreateModal(props: CreateModalProps) {
  return (
    <Dialog open={props.isOpen} onOpenChange={props.onOpenChange}>
      <DialogContent class="bg-card border-card-foreground sm:max-w-md">
        <DialogHeader>
          <DialogTitle class="font-medium">Create New</DialogTitle>
        </DialogHeader>
        <div class="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            class="h-auto min-h-16 flex-col items-center justify-center p-4 whitespace-normal"
            onClick={() => alert("Create folder feature coming soon!")}
          >
            <FolderPlus class="mb-2 h-5 w-5" />
            <div class="text-center">
              <div class="text-sm font-medium">Create Folder</div>
              <div class="text-muted-foreground mt-1 text-xs">
                Organize your decks into folders
              </div>
            </div>
          </Button>

          <Button
            variant="outline"
            class="h-auto min-h-16 flex-col items-center justify-center p-4 whitespace-normal"
            onClick={() => alert("Create deck feature coming soon!")}
          >
            <FileText class="mb-2 h-5 w-5" />
            <div class="text-center">
              <div class="text-sm font-medium">Create Deck</div>
              <div class="text-muted-foreground mt-1 text-xs">
                Create a new vocabulary deck from scratch
              </div>
            </div>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}