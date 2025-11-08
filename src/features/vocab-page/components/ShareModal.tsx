// features/vocab-page/components/ShareModal.tsx
import { Globe, Building, InfoIcon } from "lucide-solid"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

type ShareModalProps = {
  showShareModal: () => boolean
  setShowShareModal: (value: boolean) => void
  deck: UserDeck
  isSharing: () => boolean
  handlePublicShare: () => void
}
export function ShareModal(props: ShareModalProps) {
  return (
    <Dialog
      open={props.showShareModal()}
      onOpenChange={props.setShowShareModal}
    >
      <DialogContent class="bg-card border-card-foreground sm:max-w-md">
        <DialogHeader>
          <DialogTitle class="text-muted-foreground font-medium">
            Share{" "}
            <span class="font-bold text-amber-400">{props.deck.deck_name}</span>
          </DialogTitle>
        </DialogHeader>
        <div class="grid grid-cols-2 gap-4">
          <Button
            variant="outline"
            class="bg-background/30 relative h-auto min-h-16 flex-col items-center justify-center p-4 whitespace-normal"
            disabled={props.isSharing()}
            onClick={props.handlePublicShare}
          >
            {props.isSharing() ? (
              <div class="mb-2 h-4 w-4 animate-spin rounded-full border border-current border-t-transparent" />
            ) : (
              <Globe class="mb-2 h-5 w-5" />
            )}
            <div class="text-center">
              <div class="text-sm font-medium">
                {props.isSharing() ? "Sharing..." : "Public"}
              </div>
              <div class="text-muted-foreground mt-1 text-xs">
                Anyone can discover and import this deck
              </div>
            </div>
            <div
              class="text-muted-foreground absolute top-1.5 right-1.5 cursor-help"
              title='Sharing decks with 90% of the same content as a built-in deck will be removed. This does not apply to "Within my organization."'
            >
              <InfoIcon />
            </div>
          </Button>

          <Button
            variant="outline"
            class="bg-background/30 h-auto min-h-16 flex-col items-center justify-center p-4 whitespace-normal"
            disabled
            onClick={() => alert("Organization sharing coming soon!")}
          >
            <Building class="mb-2 h-5 w-5" />
            <div class="text-center">
              <div class="text-sm font-medium">Within my organization</div>
              <div class="text-muted-foreground mt-1 text-xs">
                Only people in your organization can access (Coming soon)
              </div>
            </div>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
