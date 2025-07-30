// features/vocab-page/shared/ImportConfirmationModal.tsx
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ImportConfirmationModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: () => void
  deckTitle: string
}

export function ImportConfirmationModal(props: ImportConfirmationModalProps) {
  return (
    <Dialog
      open={props.isOpen}
      onOpenChange={(open) => !open && props.onClose()}
    >
      <DialogContent class="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Import Deck</DialogTitle>
          <DialogDescription>
            Are you sure that you want to import "{props.deckTitle}"?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter class="gap-2">
          <Button variant="outline" onClick={props.onClose}>
            Cancel
          </Button>
          <Button onClick={props.onConfirm}>Import</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
