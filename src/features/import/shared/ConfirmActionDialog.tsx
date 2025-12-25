import { Show } from "solid-js"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface ConfirmActionDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  description: string
  confirmLabel: string
  onConfirm: () => void
  /** Optional secondary action (e.g., for undo with multiple options) */
  secondaryLabel?: string
  onSecondary?: () => void
  /** Variant for confirm button styling */
  variant?: "default" | "destructive"
}

export function ConfirmActionDialog(props: ConfirmActionDialogProps) {
  const handleConfirm = () => {
    props.onConfirm()
    props.onOpenChange(false)
  }

  const handleSecondary = () => {
    props.onSecondary?.()
    props.onOpenChange(false)
  }

  const handleCancel = () => {
    props.onOpenChange(false)
  }

  return (
    <Dialog open={props.open} onOpenChange={props.onOpenChange}>
      <DialogContent class="border-white/10 bg-neutral-900 sm:max-w-md">
        <DialogHeader>
          <DialogTitle class="text-white">{props.title}</DialogTitle>
          <DialogDescription class="text-white/60">
            {props.description}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter class="flex-col gap-2 sm:flex-row">
          <Button
            variant="ghost"
            class="border border-white/10 text-white/70 hover:bg-white/5 hover:text-white"
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Show when={props.secondaryLabel && props.onSecondary}>
            <Button
              variant="ghost"
              class="border border-white/10 text-white/70 hover:bg-white/5 hover:text-white"
              onClick={handleSecondary}
            >
              {props.secondaryLabel}
            </Button>
          </Show>
          <Button
            variant={props.variant === "destructive" ? "destructive" : "default"}
            class={
              props.variant === "destructive"
                ? ""
                : "bg-(--accent) text-white hover:bg-(--accent) hover:brightness-110"
            }
            onClick={handleConfirm}
          >
            {props.confirmLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
