import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-solid"

interface MasteredConfirmDialogProps {
  isOpen: boolean
  onConfirm: () => void
  onCancel: () => void
}

export function MasteredConfirmDialog(props: MasteredConfirmDialogProps) {
  return (
    <Dialog open={props.isOpen} onOpenChange={() => { }}>
      <DialogContent class="max-w-sm">
        <div class="flex gap-4">
          <AlertTriangle class="h-6 w-6 text-amber-500 shrink-0 mt-0.5" />
          <div class="flex-1">
            <DialogTitle>Remove from Learning Path?</DialogTitle>
            <DialogDescription class="mt-3 space-y-2">
              <p>Marking as <strong>mastered</strong> removes it from your learning path.</p>
              <p class="text-xs text-muted-foreground">
                We'll still add the selected item(s) to your knowledgebase so you don't have to manually mark it again.
              </p>
            </DialogDescription>
          </div>
        </div>
        <div class="flex gap-3 justify-end mt-6">
          <Button variant="outline" onClick={props.onCancel}>Keep Learning</Button>
          <Button onClick={props.onConfirm} class="bg-amber-600 hover:bg-amber-700">
            Remove & Mark Mastered
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
