import { Show } from "solid-js"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

type PositionUpdateModalProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: () => void
}

/**
 * Modal that prompts user to update their learning position
 * when they've completed sequential modules far from their current position
 */
export function PositionUpdateModal(props: PositionUpdateModalProps) {
  const handleConfirm = () => {
    props.onConfirm()
    props.onOpenChange(false)
  }

  const handleCancel = () => {
    props.onOpenChange(false)
  }

  return (
    <Dialog open={props.open} onOpenChange={props.onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Learning Position?</DialogTitle>
          <DialogDescription>
            <p>
              Looks like you're working on a new section now. Would you like to
              update your current position?
            </p>
            <p class="mt-2 text-sm">
              This will help us show you the most relevant upcoming lessons.
            </p>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="ghost" onClick={handleCancel}>
            No, keep current
          </Button>
          <Button onClick={handleConfirm}>Yes, update position</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
